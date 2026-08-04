import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
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

export type CloudAccountUser = {
  uid: string;
  email: string;
  displayName: string;
};

export type CloudAccountDeviceRecord = Partial<CloudProgressSnapshot> & {
  deviceId: string;
  label: string;
  active: boolean;
  activeProfileId?: string;
  freeBrowse?: boolean;
  userAgent?: string;
  lastSeenAt?: unknown;
  createdAt?: unknown;
  updatedAt?: unknown;
};

export type CloudProfileRecord = Partial<CloudProgressSnapshot> & {
  profileId: string;
  label: string;
  active: boolean;
  kind?: "child" | "teacher" | "test";
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
export const MAX_ACCOUNT_PROFILES = 3;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

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

function normalizeProfileLabelForUi(label: unknown): string {
  if (typeof label !== "string") return "媽媽";
  const trimmed = label.trim();
  if (!trimmed || trimmed.includes("培嘉")) return "媽媽";
  return trimmed;
}

function accountDeviceFromSnapshot(deviceId: string, data: Record<string, unknown>): CloudAccountDeviceRecord {
  return {
    ...(data as Partial<CloudProgressSnapshot>),
    deviceId,
    label: typeof data.label === "string" && data.label.trim() ? data.label.trim() : "這台裝置",
    active: data.active !== false,
    activeProfileId: typeof data.activeProfileId === "string" ? data.activeProfileId : undefined,
    freeBrowse: data.freeBrowse === true,
    userAgent: typeof data.userAgent === "string" ? data.userAgent : undefined,
    lastSeenAt: data.lastSeenAt,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };
}

function profileFromSnapshot(profileId: string, data: Record<string, unknown>): CloudProfileRecord {
  return {
    ...(data as Partial<CloudProgressSnapshot>),
    profileId,
    label: normalizeProfileLabelForUi(data.label),
    active: data.active !== false,
    kind:
      data.kind === "child" || data.kind === "teacher" || data.kind === "test"
        ? data.kind
        : undefined,
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

export async function loadAccountProfiles(accountId: string): Promise<CloudProfileRecord[]> {
  requireAccountUser(accountId);
  const snapshots = await getDocs(collection(db, "accounts", accountId, "profiles"));
  return snapshots.docs
    .map((snapshot) => profileFromSnapshot(snapshot.id, snapshot.data()))
    .sort((a, b) => String(a.createdAt ?? "").localeCompare(String(b.createdAt ?? "")));
}

export async function loadAccountProfile(accountId: string, profileId: string): Promise<CloudProfileRecord | null> {
  requireAccountUser(accountId);
  const snapshot = await getDoc(doc(db, "accounts", accountId, "profiles", profileId));
  if (!snapshot.exists()) return null;
  return profileFromSnapshot(snapshot.id, snapshot.data());
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
      maxProfiles: MAX_ACCOUNT_PROFILES,
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

export async function createAccountProfile(
  accountId: string,
  label: string,
  progress: CloudProgressSnapshot,
  kind: CloudProfileRecord["kind"] = "child",
): Promise<CloudProfileRecord> {
  requireAccountUser(accountId);
  const profiles = await loadAccountProfiles(accountId);
  if (profiles.filter((profile) => profile.active).length >= MAX_ACCOUNT_PROFILES) {
    throw new Error(`一個帳號最多可以有 ${MAX_ACCOUNT_PROFILES} 個學習檔案`);
  }
  const profileRef = doc(collection(db, "accounts", accountId, "profiles"));
  await setDoc(
    profileRef,
    {
      ...progress,
      profileId: profileRef.id,
      label: label.trim() || "媽媽",
      active: true,
      kind,
      updatedAt: serverTimestamp(),
      createdAt: serverTimestamp(),
    },
  );
  const profile = await loadAccountProfile(accountId, profileRef.id);
  if (!profile) throw new Error("Created profile could not be loaded.");
  return profile;
}

export async function saveAccountProfileProgress(
  accountId: string,
  profileId: string,
  progress: CloudProgressSnapshot,
): Promise<void> {
  requireAccountUser(accountId);
  await setDoc(
    doc(db, "accounts", accountId, "profiles", profileId),
    {
      ...progress,
      profileId,
      active: true,
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

export async function setAccountDeviceActiveProfile(
  accountId: string,
  deviceId: string,
  profileId: string,
): Promise<void> {
  requireAccountUser(accountId);
  await setDoc(
    doc(db, "accounts", accountId, "devices", deviceId),
    {
      activeProfileId: profileId,
      lastSeenAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

export async function renameAccountProfile(accountId: string, profileId: string, label: string): Promise<void> {
  requireAccountUser(accountId);
  await setDoc(
    doc(db, "accounts", accountId, "profiles", profileId),
    {
      label: label.trim() || "媽媽",
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
