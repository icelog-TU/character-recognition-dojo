import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { doc, getDoc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";

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
};

export type CloudDeviceRecord = Partial<CloudProgressSnapshot> & {
  freeBrowse?: boolean;
  label?: string;
  role?: string;
};

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
