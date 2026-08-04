import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import { collection, doc, getDoc, getDocs, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB79G4vRFLaRIPh1waBpJ99AS2BOt-ZzGk",
  authDomain: "character-recognition-dojo.firebaseapp.com",
  projectId: "character-recognition-dojo",
  storageBucket: "character-recognition-dojo.firebasestorage.app",
  messagingSenderId: "602707345296",
  appId: "1:602707345296:web:4ef123812e6425ba18fd15",
};

export type CloudDailyRecord = {
  date: string;
  coinsEarned: number;
  starsEarned: number;
  lessonOrders: number[];
};

export type CloudProgressSnapshot = {
  version: 1;
  coins: number;
  stars: number;
  totalCoinsEarned: number;
  totalStarsEarned: number;
  dailyRecords: Record<string, CloudDailyRecord>;
  duplicateGachaStreak: number;
  selectedOrder: number;
  completedOrders: number[];
  ownedCharacters: Record<string, number>;
  characterHearts: Record<string, number>;
  seenCharacterInteractions: Record<string, number[]>;
  lessonSessions?: Record<string, CloudLessonSessionSnapshot>;
};

export type CloudLessonSessionSnapshot = {
  activeStage: number;
  heardChars: string[];
  findUnlocked: boolean;
  practiceDoneCount: number;
  gameDoneCount: number;
  pictureCurrentIndex: number;
  pictureCompletedSentenceIds: string[];
};

export type CloudDeviceRecord = Partial<CloudProgressSnapshot> & {
  freeBrowse?: boolean;
  label?: string;
  role?: string;
};

export type CloudAccountUser = {
  uid: string;
  email: string;
  displayName: string;
};

export type CloudAccountDeviceRecord = Partial<CloudProgressSnapshot> & {
  deviceId: string;
  label: string;
  active: boolean;
  freeBrowse?: boolean;
  userAgent?: string;
  lastSeenAt?: unknown;
  createdAt?: unknown;
  updatedAt?: unknown;
};

export type AccountDeviceRegistrationResult =
  | {
      ok: true;
      maxDevices: number;
      device: CloudAccountDeviceRecord;
      devices: CloudAccountDeviceRecord[];
    }
  | {
      ok: false;
      reason: "device-limit";
      maxDevices: number;
      devices: CloudAccountDeviceRecord[];
    };

export const MAX_ACCOUNT_DEVICES = 3;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export function normalizeDeviceCode(value: string): string {
  return value
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9-]/g, "")
    .slice(0, 32);
}

export function validDeviceCode(value: string): boolean {
  return /^[A-Z0-9-]{3,32}$/.test(value);
}

async function ensureSignedIn() {
  if (auth.currentUser) return auth.currentUser;
  return (await signInAnonymously(auth)).user;
}

function toCloudAccountUser(user: User): CloudAccountUser | null {
  if (user.isAnonymous) return null;
  return {
    uid: user.uid,
    email: user.email ?? "",
    displayName: user.displayName ?? user.email ?? "未命名帳號",
  };
}

function requireAccountUser(accountId: string): User {
  const user = auth.currentUser;
  if (!user || user.isAnonymous || user.uid !== accountId) {
    throw new Error("A signed-in account is required for account device sync.");
  }
  return user;
}

function accountDeviceFromSnapshot(deviceId: string, data: Record<string, unknown>): CloudAccountDeviceRecord {
  return {
    ...(data as Partial<CloudProgressSnapshot>),
    deviceId,
    label: typeof data.label === "string" && data.label.trim() ? data.label.trim() : "這台裝置",
    active: data.active !== false,
    freeBrowse: data.freeBrowse === true,
    userAgent: typeof data.userAgent === "string" ? data.userAgent : undefined,
    lastSeenAt: data.lastSeenAt,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };
}

export function subscribeCloudAccount(callback: (user: CloudAccountUser | null) => void): () => void {
  return onAuthStateChanged(auth, (user) => callback(user ? toCloudAccountUser(user) : null));
}

export async function signInWithGoogleAccount(): Promise<CloudAccountUser> {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  const credential = await signInWithPopup(auth, provider);
  const accountUser = toCloudAccountUser(credential.user);
  if (!accountUser) throw new Error("Google sign-in did not return an account user.");
  return accountUser;
}

export async function signOutCloudAccount(): Promise<void> {
  await signOut(auth);
}

export async function loadAccountDevices(accountId: string): Promise<CloudAccountDeviceRecord[]> {
  requireAccountUser(accountId);
  const snapshots = await getDocs(collection(db, "accounts", accountId, "devices"));
  return snapshots.docs
    .map((snapshot) => accountDeviceFromSnapshot(snapshot.id, snapshot.data()))
    .sort((a, b) => String(b.lastSeenAt ?? "").localeCompare(String(a.lastSeenAt ?? "")));
}

export async function registerAccountDevice(
  user: CloudAccountUser,
  deviceId: string,
  label: string,
): Promise<AccountDeviceRegistrationResult> {
  const firebaseUser = requireAccountUser(user.uid);
  const normalizedLabel = label.trim() || "這台裝置";
  await setDoc(
    doc(db, "accounts", user.uid),
    {
      accountId: user.uid,
      email: user.email,
      displayName: user.displayName,
      plan: "family",
      maxDevices: MAX_ACCOUNT_DEVICES,
      status: "active",
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );

  const devices = await loadAccountDevices(user.uid);
  const activeDevices = devices.filter((device) => device.active);
  const existing = devices.find((device) => device.deviceId === deviceId);
  const reactivatingInactiveDevice = existing && !existing.active;
  if ((!existing || reactivatingInactiveDevice) && activeDevices.length >= MAX_ACCOUNT_DEVICES) {
    return { ok: false, reason: "device-limit", maxDevices: MAX_ACCOUNT_DEVICES, devices };
  }

  await setDoc(
    doc(db, "accounts", user.uid, "devices", deviceId),
    {
      deviceId,
      label: normalizedLabel,
      active: true,
      userAgent: typeof navigator === "undefined" ? "" : navigator.userAgent,
      ownerUid: firebaseUser.uid,
      lastSeenAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      ...(!existing ? { createdAt: serverTimestamp() } : {}),
    },
    { merge: true },
  );

  const refreshedDevices = await loadAccountDevices(user.uid);
  const device = refreshedDevices.find((candidate) => candidate.deviceId === deviceId) ?? {
    deviceId,
    label: normalizedLabel,
    active: true,
  };
  return { ok: true, maxDevices: MAX_ACCOUNT_DEVICES, device, devices: refreshedDevices };
}

export async function saveAccountDeviceProgress(
  accountId: string,
  deviceId: string,
  label: string,
  progress: CloudProgressSnapshot,
): Promise<void> {
  requireAccountUser(accountId);
  await setDoc(
    doc(db, "accounts", accountId, "devices", deviceId),
    {
      ...progress,
      deviceId,
      label: label.trim() || "這台裝置",
      active: true,
      lastSeenAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

export async function renameAccountDevice(accountId: string, deviceId: string, label: string): Promise<void> {
  requireAccountUser(accountId);
  await setDoc(
    doc(db, "accounts", accountId, "devices", deviceId),
    {
      label: label.trim() || "這台裝置",
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

export async function deactivateAccountDevice(accountId: string, deviceId: string): Promise<void> {
  requireAccountUser(accountId);
  await setDoc(
    doc(db, "accounts", accountId, "devices", deviceId),
    {
      active: false,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

export async function loadCloudProgress(deviceCode: string): Promise<CloudDeviceRecord | null> {
  await ensureSignedIn();
  const snapshot = await getDoc(doc(db, "devices", deviceCode));
  if (!snapshot.exists()) return null;
  return snapshot.data() as CloudDeviceRecord;
}

export async function saveCloudProgress(deviceCode: string, progress: CloudProgressSnapshot): Promise<void> {
  await ensureSignedIn();
  await setDoc(
    doc(db, "devices", deviceCode),
    {
      ...progress,
      deviceCode,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}
