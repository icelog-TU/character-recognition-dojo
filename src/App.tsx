import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import curriculumData from "./curriculum/sample-lessons.json";
import type { Curriculum, Lesson, LessonSentence, SentenceGame, SentenceGameOption, SentenceGameType } from "./types";
import { buildZhuyinMap, hanChars, nextLockedLessonOrder } from "./lib/curriculum";
import "./index.css";

const curriculum = curriculumData as unknown as Curriculum;

type AppPage = "practice" | "catalog" | "records" | "gacha" | "collection" | "settings";
type LessonCharEntry = { lesson: Lesson; char: string; index: number };
type AudioWindow = Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext };
type AudioPlayOptions = {
  onTime?: (elapsedMs: number) => void;
  onEnded?: () => void;
  onError?: () => void;
};
type SpeechTarget = "lesson" | "stage1" | "stage2" | "stage3" | "stage4" | "advance2" | "advance3" | "advance4" | null;
type LessonDestination = "home" | "next";
type LessonReward = { coins: number; stars: number };
type PlaybackStatus = { playing: boolean; paused: boolean };
type TeachCharacterPhase = "reading" | "asking" | "ready" | "priming" | "recording" | "reciting" | "done";
type StoredProgress = {
  version: 1;
  coins: number;
  stars: number;
  duplicateGachaStreak: number;
  selectedOrder: number;
  completedOrders: number[];
  ownedCharacters: Record<string, number>;
  characterHearts: Record<string, number>;
  seenCharacterInteractions: Record<string, number[]>;
};
type RealmId = "land" | "sea" | "sky" | "space";
type FamilyRoleId = "grandpa" | "grandma" | "dad" | "mom" | "olderBrother" | "olderSister" | "youngerBrother" | "youngerSister" | "baby";
type CreatureRealm = { id: RealmId; label: string; shortLabel: string; description: string; color: string; icon: string };
type FamilyRole = { id: FamilyRoleId; label: string; shortLabel: string };
type CreatureSpecies = { id: string; realmId: RealmId; name: string; icon: string };
type CollectibleCharacter = CreatureSpecies & {
  characterId: string;
  familyRoleId: FamilyRoleId;
  familyRoleLabel: string;
  familyRoleShortLabel: string;
  imageSrc?: string;
};
type GachaDrawResult = {
  character: CollectibleCharacter;
  isNew: boolean;
  guaranteedNew: boolean;
};
type CollectionFocus = { realmId: RealmId; characterId: string | null; nonce: number };
type CharacterInteraction = {
  heart: number;
  icon: string;
  label: string;
  message: string;
};

const SENTENCE_GAME_LABELS: Record<SentenceGameType, string> = {
  "find-character": "找字",
  "teach-character": "教角色念字",
  "missing-character": "字寶寶不見了",
  "partial-order": "句子重排",
  "choose-pronunciation": "誰念得對",
};

const NAV_ITEMS: Array<{ page: AppPage; label: string; icon: string }> = [
  { page: "practice", label: "練習課文", icon: "📖" },
  { page: "catalog", label: "漢字總覽", icon: "🌈" },
  { page: "records", label: "學習記錄", icon: "🏆" },
  { page: "gacha", label: "轉蛋", icon: "🎁" },
  { page: "collection", label: "角色收藏", icon: "🎴" },
  { page: "settings", label: "設定", icon: "⚙️" },
];

const RAINBOW_GROUPS = [
  { id: "red", label: "紅", range: "1-100", start: 1, end: 100, color: "#d94735" },
  { id: "orange", label: "橙", range: "101-200", start: 101, end: 200, color: "#e58b20" },
  { id: "yellow", label: "黃", range: "201-300", start: 201, end: 300, color: "#d7aa18" },
  { id: "green", label: "綠", range: "301-400", start: 301, end: 400, color: "#35995b" },
  { id: "blue", label: "藍", range: "401-500", start: 401, end: 500, color: "#2e78d6" },
  { id: "purple", label: "紫", range: "501-600", start: 501, end: 600, color: "#8156c6" },
];
type RainbowGroup = (typeof RAINBOW_GROUPS)[number];
type CatalogSlot = { slotNumber: number; group: RainbowGroup; entry: LessonCharEntry | null };

const CREATURE_REALMS: CreatureRealm[] = [
  { id: "land", label: "地上的生物", shortLabel: "地上", description: "先從地上的朋友開始收集。", color: "#4f8f52", icon: "🦌" },
  { id: "sea", label: "海裡的生物", shortLabel: "海裡", description: "地上收滿後，海裡的朋友會打開。", color: "#2487b8", icon: "🐬" },
  { id: "sky", label: "天上的生物", shortLabel: "天空", description: "海裡收滿後，天空的朋友會打開。", color: "#6f8fd7", icon: "🐦" },
  { id: "space", label: "外太空的生物", shortLabel: "太空", description: "天空收滿後，最後前往外太空。", color: "#7957b8", icon: "🪐" },
];

const FAMILY_ROLES: FamilyRole[] = [
  { id: "grandpa", label: "爺爺", shortLabel: "爺" },
  { id: "grandma", label: "奶奶", shortLabel: "奶" },
  { id: "dad", label: "爸爸", shortLabel: "爸" },
  { id: "mom", label: "媽媽", shortLabel: "媽" },
  { id: "olderBrother", label: "哥哥", shortLabel: "哥" },
  { id: "olderSister", label: "姐姐", shortLabel: "姐" },
  { id: "youngerBrother", label: "弟弟", shortLabel: "弟" },
  { id: "youngerSister", label: "妹妹", shortLabel: "妹" },
  { id: "baby", label: "寶寶", shortLabel: "寶" },
];

const FAMILY_ROLE_ACCESSORY: Record<FamilyRoleId, string> = {
  grandpa: "👓",
  grandma: "🧶",
  dad: "🎩",
  mom: "🌷",
  olderBrother: "🎒",
  olderSister: "🎀",
  youngerBrother: "🧢",
  youngerSister: "🧸",
  baby: "🍼",
};

const COLLECTION_CHARACTER_IMAGE_SRC: Partial<Record<string, string>> = {
  "land-cat-grandpa": "/assets/characters/land/cat/cat-grandpa.webp",
  "land-cat-grandma": "/assets/characters/land/cat/cat-grandma.webp",
  "land-cat-dad": "/assets/characters/land/cat/cat-father.webp",
  "land-cat-mom": "/assets/characters/land/cat/cat-mother.webp",
  "land-cat-olderBrother": "/assets/characters/land/cat/cat-older-brother.webp",
  "land-cat-olderSister": "/assets/characters/land/cat/cat-older-sister.webp",
  "land-cat-youngerBrother": "/assets/characters/land/cat/cat-younger-brother.webp",
  "land-cat-youngerSister": "/assets/characters/land/cat/cat-younger-sister.webp",
  "land-cat-baby": "/assets/characters/land/cat/cat-baby.webp",
  "land-dog-grandpa": "/assets/characters/land/dog/dog-grandpa.webp",
  "land-dog-grandma": "/assets/characters/land/dog/dog-grandma.webp",
  "land-dog-dad": "/assets/characters/land/dog/dog-father.webp",
  "land-dog-mom": "/assets/characters/land/dog/dog-mother.webp",
  "land-dog-olderBrother": "/assets/characters/land/dog/dog-older-brother.webp",
  "land-dog-olderSister": "/assets/characters/land/dog/dog-older-sister.webp",
  "land-dog-youngerBrother": "/assets/characters/land/dog/dog-younger-brother.webp",
  "land-dog-youngerSister": "/assets/characters/land/dog/dog-younger-sister.webp",
  "land-dog-baby": "/assets/characters/land/dog/dog-baby.webp",
  "land-rabbit-grandpa": "/assets/characters/land/rabbit/rabbit-grandpa.webp",
  "land-rabbit-grandma": "/assets/characters/land/rabbit/rabbit-grandma.webp",
  "land-rabbit-dad": "/assets/characters/land/rabbit/rabbit-father.webp",
  "land-rabbit-mom": "/assets/characters/land/rabbit/rabbit-mother.webp",
  "land-rabbit-olderBrother": "/assets/characters/land/rabbit/rabbit-older-brother.webp",
  "land-rabbit-olderSister": "/assets/characters/land/rabbit/rabbit-older-sister.webp",
  "land-rabbit-youngerBrother": "/assets/characters/land/rabbit/rabbit-younger-brother.webp",
  "land-rabbit-youngerSister": "/assets/characters/land/rabbit/rabbit-younger-sister.webp",
  "land-rabbit-baby": "/assets/characters/land/rabbit/rabbit-baby.webp",
  "land-bear-grandpa": "/assets/characters/land/bear/bear-grandpa.webp",
  "land-bear-grandma": "/assets/characters/land/bear/bear-grandma.webp",
  "land-bear-dad": "/assets/characters/land/bear/bear-father.webp",
  "land-bear-mom": "/assets/characters/land/bear/bear-mother.webp",
  "land-bear-olderBrother": "/assets/characters/land/bear/bear-older-brother.webp",
  "land-bear-olderSister": "/assets/characters/land/bear/bear-older-sister.webp",
  "land-bear-youngerBrother": "/assets/characters/land/bear/bear-younger-brother.webp",
  "land-bear-youngerSister": "/assets/characters/land/bear/bear-younger-sister.webp",
  "land-bear-baby": "/assets/characters/land/bear/bear-baby.webp",
};

const CREATURE_SPECIES: CreatureSpecies[] = [
  { id: "cat", realmId: "land", name: "貓", icon: "🐱" },
  { id: "dog", realmId: "land", name: "狗", icon: "🐶" },
  { id: "rabbit", realmId: "land", name: "兔", icon: "🐰" },
  { id: "bear", realmId: "land", name: "熊", icon: "🐻" },
  { id: "deer", realmId: "land", name: "鹿", icon: "🦌" },
  { id: "fox", realmId: "land", name: "狐狸", icon: "🦊" },
  { id: "squirrel", realmId: "land", name: "松鼠", icon: "🐿️" },
  { id: "panda", realmId: "land", name: "貓熊", icon: "🐼" },
  { id: "tiger", realmId: "land", name: "老虎", icon: "🐯" },
  { id: "lion", realmId: "land", name: "獅子", icon: "🦁" },
  { id: "elephant", realmId: "land", name: "大象", icon: "🐘" },
  { id: "koala", realmId: "land", name: "無尾熊", icon: "🐨" },
  { id: "monkey", realmId: "land", name: "猴子", icon: "🐵" },
  { id: "hedgehog", realmId: "land", name: "刺蝟", icon: "🦔" },
  { id: "horse", realmId: "land", name: "馬", icon: "🐴" },
  { id: "dolphin", realmId: "sea", name: "海豚", icon: "🐬" },
  { id: "whale", realmId: "sea", name: "鯨魚", icon: "🐋" },
  { id: "seal", realmId: "sea", name: "海豹", icon: "🦭" },
  { id: "turtle", realmId: "sea", name: "海龜", icon: "🐢" },
  { id: "octopus", realmId: "sea", name: "章魚", icon: "🐙" },
  { id: "squid", realmId: "sea", name: "魷魚", icon: "🦑" },
  { id: "crab", realmId: "sea", name: "螃蟹", icon: "🦀" },
  { id: "shrimp", realmId: "sea", name: "蝦", icon: "🦐" },
  { id: "fish", realmId: "sea", name: "小魚", icon: "🐟" },
  { id: "tropicalFish", realmId: "sea", name: "彩魚", icon: "🐠" },
  { id: "blowfish", realmId: "sea", name: "河豚", icon: "🐡" },
  { id: "jellyfish", realmId: "sea", name: "水母", icon: "🪼" },
  { id: "starfish", realmId: "sea", name: "海星", icon: "⭐" },
  { id: "seahorse", realmId: "sea", name: "海馬", icon: "🐴" },
  { id: "clam", realmId: "sea", name: "貝殼", icon: "🐚" },
  { id: "bird", realmId: "sky", name: "小鳥", icon: "🐦" },
  { id: "eagle", realmId: "sky", name: "老鷹", icon: "🦅" },
  { id: "owl", realmId: "sky", name: "貓頭鷹", icon: "🦉" },
  { id: "duck", realmId: "sky", name: "鴨", icon: "🦆" },
  { id: "swan", realmId: "sky", name: "天鵝", icon: "🦢" },
  { id: "flamingo", realmId: "sky", name: "火鶴", icon: "🦩" },
  { id: "penguin", realmId: "sky", name: "企鵝", icon: "🐧" },
  { id: "bat", realmId: "sky", name: "蝙蝠", icon: "🦇" },
  { id: "butterfly", realmId: "sky", name: "蝴蝶", icon: "🦋" },
  { id: "bee", realmId: "sky", name: "蜜蜂", icon: "🐝" },
  { id: "ladybug", realmId: "sky", name: "瓢蟲", icon: "🐞" },
  { id: "dragonfly", realmId: "sky", name: "蜻蜓", icon: "✨" },
  { id: "parrot", realmId: "sky", name: "鸚鵡", icon: "🦜" },
  { id: "peacock", realmId: "sky", name: "孔雀", icon: "🦚" },
  { id: "crane", realmId: "sky", name: "白鷺", icon: "🪶" },
  { id: "moonBunny", realmId: "space", name: "月兔", icon: "🌙" },
  { id: "starCat", realmId: "space", name: "星貓", icon: "✨" },
  { id: "rocketDog", realmId: "space", name: "火箭狗", icon: "🚀" },
  { id: "planetBear", realmId: "space", name: "星球熊", icon: "🪐" },
  { id: "cometFox", realmId: "space", name: "彗星狐", icon: "☄️" },
  { id: "nebulaWhale", realmId: "space", name: "星雲鯨", icon: "🌌" },
  { id: "alienPanda", realmId: "space", name: "太空貓熊", icon: "👽" },
  { id: "meteorLion", realmId: "space", name: "流星獅", icon: "💫" },
  { id: "satelliteBird", realmId: "space", name: "衛星鳥", icon: "🛰️" },
  { id: "galaxyDeer", realmId: "space", name: "銀河鹿", icon: "🌠" },
  { id: "cosmoTurtle", realmId: "space", name: "宇宙龜", icon: "🛸" },
  { id: "auroraRabbit", realmId: "space", name: "極光兔", icon: "🌈" },
  { id: "asteroidMonkey", realmId: "space", name: "小行星猴", icon: "☄️" },
  { id: "solarElephant", realmId: "space", name: "太陽象", icon: "☀️" },
  { id: "orbitFish", realmId: "space", name: "軌道魚", icon: "🔭" },
];

const COLLECTIBLE_CHARACTERS: CollectibleCharacter[] = CREATURE_SPECIES.flatMap((species) =>
  FAMILY_ROLES.map((role) => {
    const characterId = `${species.realmId}-${species.id}-${role.id}`;
    return {
      ...species,
      characterId,
      familyRoleId: role.id,
      familyRoleLabel: role.label,
      familyRoleShortLabel: role.shortLabel,
      imageSrc: COLLECTION_CHARACTER_IMAGE_SRC[characterId],
    };
  }),
);

const COLLECTIBLE_BY_ID = new Map(COLLECTIBLE_CHARACTERS.map((character) => [character.characterId, character]));

const GUIDE_TEXT = {
  homeWelcome: "你好呀，歡迎來到認字練功房。請按下面紅色的大按鈕，我們來學認字吧。",
  homeNext: "先聽字，再找字，最後看圖片和句子。",
  lessonStep: "我們一步一步來。",
  toStageTwo: "第一階段完成了。請按下面紅色的大按鈕，進入第二階段的練習。",
  findComplete: "好棒啊，你都找到了。",
  toStageThree: "請按下面紅色的大按鈕，進入第三階段的練習。",
  toStageFour: "句子都聽完了。請按下面紅色的大按鈕，進入第四階段的練習。",
  stageAdvance: "太棒了，我們繼續練功。",
  blockFind: "找找看這一課學的字在哪裡。看到這一課學的字，就點它。",
  findMiss: "這個不是這一課學的字喔，再找找看。",
  blockPicture: "點發光的圖，聽我念一句話。你也要跟著念喔。",
  rewardReady: "好棒，你都念完了。請按紅色大按鈕，領取獎勵。",
  rewardWon: "太棒了！你得到金幣和星星。要下一課，請按紅色按鈕。要回首頁休息，請按白色按鈕。",
} as const;

const PAGE_GUIDE_TEXT: Record<AppPage, string> = {
  practice: GUIDE_TEXT.homeWelcome,
  catalog: "這裡是漢字總覽。你可以找找看已經解鎖的字，點進去重新練習。",
  records: "這裡是學習記錄。你可以看看自己有多少金幣、星星和完成的課。",
  gacha: "這裡是轉蛋。請按紅色大按鈕，用十個金幣抽一個角色。",
  collection: "這裡是角色收藏。先選動物區塊，再點下面的角色，可以加愛心，也可以看角色互動。",
  settings: "這裡是設定。之後可以調整聲音和資料。",
};

const SMALL_ZH_NUMBERS = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
const DISTRACTOR_ZHUYIN: Record<string, string> = {
  小: "ㄒㄧㄠˇ",
  山: "ㄕㄢ",
  口: "ㄎㄡˇ",
  手: "ㄕㄡˇ",
  上: "ㄕㄤˋ",
  下: "ㄒㄧㄚˋ",
  水: "ㄕㄨㄟˇ",
  火: "ㄏㄨㄛˇ",
};

const CHARACTER_INTERACTION_TOPICS = {
  foods: ["小飯糰", "甜甜的水果", "熱熱的湯", "香香的麵包", "脆脆的餅乾", "溫溫的豆漿"],
  games: ["躲貓貓", "拍拍手", "排積木", "找影子", "轉圈圈", "猜聲音"],
  places: ["草地", "海邊", "雲朵旁邊", "月亮小屋", "花園", "小山坡"],
  treasures: ["小鈴鐺", "亮亮星星", "彩色石頭", "小小葉子", "貝殼", "圓圓扣子"],
  moods: ["開心地跳一下", "害羞地笑一下", "輕輕揮揮手", "把眼睛睜得大大的", "慢慢轉一圈", "偷偷比一個愛心"],
} as const;

const CHARACTER_INTERACTION_TEMPLATES: Array<{
  icon: string;
  label: string;
  message: (character: CollectibleCharacter, heart: number) => string;
}> = [
  {
    icon: "👋",
    label: "打招呼",
    message: (character) => `你好呀，我是${character.name}${character.familyRoleLabel}。很高興見到你。`,
  },
  {
    icon: "💬",
    label: "聊聊天",
    message: (character) => `我今天想跟你聊聊天。你最喜歡${character.name}的哪一個地方呢？`,
  },
  {
    icon: "🍪",
    label: "分享點心",
    message: (character) => `我想分享${seededPick(CHARACTER_INTERACTION_TOPICS.foods, characterSeed(character, 3))}。我們一起慢慢吃。`,
  },
  {
    icon: "🎲",
    label: "一起玩",
    message: (character) => `我想玩${seededPick(CHARACTER_INTERACTION_TOPICS.games, characterSeed(character, 4))}。你先來，還是我先來？`,
  },
  {
    icon: "🧺",
    label: "出門走走",
    message: (character) => `我想帶你去${seededPick(CHARACTER_INTERACTION_TOPICS.places, characterSeed(character, 5))}走走。那裡一定很好玩。`,
  },
  {
    icon: "🎁",
    label: "小禮物",
    message: (character) => `我把${seededPick(CHARACTER_INTERACTION_TOPICS.treasures, characterSeed(character, 6))}送給你。這是我們的小祕密。`,
  },
  {
    icon: "🎵",
    label: "唱一唱",
    message: (character) => `我想唱一首${character.name}的小歌。啦啦啦，今天我們又更好了。`,
  },
  {
    icon: "🌟",
    label: "誇獎你",
    message: () => "你今天有認真練習，我有看到喔。慢慢來，也很厲害。",
  },
  {
    icon: "🎭",
    label: "做表情",
    message: (character) => `${character.name}${character.familyRoleLabel}${seededPick(CHARACTER_INTERACTION_TOPICS.moods, characterSeed(character, 9))}，想逗你笑。`,
  },
  {
    icon: "💌",
    label: "特別約定",
    message: (character) => `等你下次再來，我還會在這裡等你。${character.name}${character.familyRoleLabel}跟你約好了。`,
  },
];

function characterInteractions(character: CollectibleCharacter): CharacterInteraction[] {
  return Array.from({ length: 10 }, (_, index) => {
    const template = CHARACTER_INTERACTION_TEMPLATES[
      interactionTemplateIndex(character, index, CHARACTER_INTERACTION_TEMPLATES.length)
    ];
    const heart = index + 1;
    return {
      heart,
      icon: template.icon,
      label: template.label,
      message: template.message(character, heart),
    };
  });
}

function lessonChars(lesson: Lesson): string[] {
  return lesson.newChars;
}

function charactersForRealm(realmId: RealmId): CollectibleCharacter[] {
  return COLLECTIBLE_CHARACTERS.filter((character) => character.realmId === realmId);
}

function ownedCount(ownedCharacters: Record<string, number>, characterId: string): number {
  return Math.max(0, Math.floor(ownedCharacters[characterId] ?? 0));
}

function realmOwnedCount(realmId: RealmId, ownedCharacters: Record<string, number>): number {
  return charactersForRealm(realmId).filter((character) => ownedCount(ownedCharacters, character.characterId) > 0).length;
}

function realmTotalCount(realmId: RealmId): number {
  return charactersForRealm(realmId).length;
}

function realmColor(realmId: RealmId): string {
  return CREATURE_REALMS.find((realm) => realm.id === realmId)?.color ?? CREATURE_REALMS[0].color;
}

function realmComplete(realmId: RealmId, ownedCharacters: Record<string, number>): boolean {
  return realmOwnedCount(realmId, ownedCharacters) >= realmTotalCount(realmId);
}

function realmUnlocked(realmId: RealmId, ownedCharacters: Record<string, number>): boolean {
  const index = CREATURE_REALMS.findIndex((realm) => realm.id === realmId);
  if (index <= 0) return true;
  return CREATURE_REALMS.slice(0, index).every((realm) => realmComplete(realm.id, ownedCharacters));
}

function activeGachaRealm(ownedCharacters: Record<string, number>): RealmId {
  return CREATURE_REALMS.find((realm) => realmUnlocked(realm.id, ownedCharacters) && !realmComplete(realm.id, ownedCharacters))?.id ?? "space";
}

function realmGuideText(realmId: RealmId, ownedCharacters: Record<string, number>): string {
  const realmIndex = CREATURE_REALMS.findIndex((candidate) => candidate.id === realmId);
  const realm = CREATURE_REALMS[realmIndex] ?? CREATURE_REALMS[0];
  if (realmUnlocked(realm.id, ownedCharacters)) return `這裡是${realm.label}。請點下面已經收集到的角色。`;
  const previousRealm = CREATURE_REALMS[Math.max(0, realmIndex - 1)];
  return `${realm.label}還沒解鎖。${previousRealm.label}都收集完畢，才會解鎖。`;
}

function drawCharacter(realmId: RealmId, ownedCharacters: Record<string, number>, duplicateGachaStreak: number): GachaDrawResult {
  const pool = charactersForRealm(realmId);
  const missing = pool.filter((character) => ownedCount(ownedCharacters, character.characterId) === 0);
  const guaranteedNew = duplicateGachaStreak >= 5 && missing.length > 0;
  const source = guaranteedNew || (missing.length > 0 && Math.random() < 0.68) ? missing : pool;
  const character = source[Math.floor(Math.random() * source.length)] ?? pool[0];
  return {
    character,
    guaranteedNew,
    isNew: ownedCount(ownedCharacters, character.characterId) === 0,
  };
}

function sanitizeOwnedCharacters(value: unknown): Record<string, number> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.entries(value as Record<string, unknown>).reduce<Record<string, number>>((result, [id, count]) => {
    const numericCount = Number(count);
    if (COLLECTIBLE_BY_ID.has(id) && Number.isFinite(numericCount) && numericCount > 0) {
      result[id] = Math.floor(numericCount);
    }
    return result;
  }, {});
}

function sanitizeCharacterHearts(value: unknown): Record<string, number> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.entries(value as Record<string, unknown>).reduce<Record<string, number>>((result, [id, count]) => {
    const numericCount = Number(count);
    if (COLLECTIBLE_BY_ID.has(id) && Number.isFinite(numericCount) && numericCount > 0) {
      result[id] = Math.min(10, Math.floor(numericCount));
    }
    return result;
  }, {});
}

function heartCount(characterHearts: Record<string, number>, characterId: string): number {
  return Math.min(10, Math.max(0, Math.floor(characterHearts[characterId] ?? 0)));
}

function sanitizeSeenCharacterInteractions(value: unknown): Record<string, number[]> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.entries(value as Record<string, unknown>).reduce<Record<string, number[]>>((result, [id, indexes]) => {
    if (!COLLECTIBLE_BY_ID.has(id) || !Array.isArray(indexes)) return result;
    const seen = [...new Set(indexes.filter((index): index is number => Number.isInteger(index) && index >= 0 && index < 10))];
    if (seen.length > 0) result[id] = seen;
    return result;
  }, {});
}

function characterCollectionIndex(characterId: string): number {
  return Math.max(0, COLLECTIBLE_CHARACTERS.findIndex((character) => character.characterId === characterId));
}

function seededPick<T>(items: readonly T[], seed: number): T {
  return items[((seed % items.length) + items.length) % items.length];
}

function characterSeed(character: CollectibleCharacter, salt: number): number {
  return characterCollectionIndex(character.characterId) * 997 + FAMILY_ROLES.findIndex((role) => role.id === character.familyRoleId) * 131 + salt * 53;
}

function interactionTemplateIndex(character: CollectibleCharacter, tierIndex: number, templateCount: number): number {
  if (tierIndex === 0) return 0;
  if (tierIndex === 1) return 1;
  return (characterCollectionIndex(character.characterId) + tierIndex * 7) % templateCount;
}

function characterMood(hearts: number): string {
  if (hearts >= 10) return "😍";
  if (hearts >= 7) return "😄";
  if (hearts >= 4) return "🙂";
  if (hearts >= 2) return "😊";
  if (hearts >= 1) return "😐";
  return "🙂";
}

function lessonLabel(lesson: Lesson): string {
  return lesson.newChars.join("");
}

function smallZhNumber(value: number): string {
  return SMALL_ZH_NUMBERS[value] ?? String(value);
}

function stageLabel(stage: number): string {
  return `第${smallZhNumber(stage)}階段`;
}

function lessonIntroText(lesson: Lesson): string {
  const charCount = lesson.newChars.length;
  if (charCount === 1) return `第${smallZhNumber(lesson.order)}課，我們要學一個很重要的字，就在下面喔。`;
  return `第${smallZhNumber(lesson.order)}課，我們要學${smallZhNumber(charCount)}個很重要的字，都在下面喔。${GUIDE_TEXT.lessonStep}`;
}

function hearPromptText(lesson: Lesson): string {
  if (lesson.newChars.length === 1) {
    return "請按那個大大發光的紅色字，按下去聽它的聲音。聽見聲音，你就做對了。要記住這個字和它的聲音喔。";
  }
  return "請按那些大大發光的紅色字，按下去聽它們的聲音。聽見聲音，你就做對了。要記住每個字和它的聲音喔。";
}

function lessonCharEntries(lesson: Lesson): LessonCharEntry[] {
  return lesson.newChars.map((char, index) => ({ lesson, char, index }));
}

function flattenLessonChars(lessons: Lesson[]): LessonCharEntry[] {
  return lessons.flatMap(lessonCharEntries);
}

function catalogGroupForSlot(slotNumber: number): RainbowGroup {
  return RAINBOW_GROUPS.find((group) => slotNumber >= group.start && slotNumber <= group.end) ?? RAINBOW_GROUPS[0];
}

function catalogSlotsFromEntries(entries: LessonCharEntry[]): CatalogSlot[] {
  const entriesBySlot = new Map<number, LessonCharEntry>();
  entries.forEach((entry, index) => entriesBySlot.set(index + 1, entry));

  return Array.from({ length: 600 }, (_, index) => {
    const slotNumber = index + 1;
    return {
      slotNumber,
      group: catalogGroupForSlot(slotNumber),
      entry: entriesBySlot.get(slotNumber) ?? null,
    };
  });
}

function assetUrl(src: string): string {
  if (/^(https?:|data:|blob:)/.test(src)) return src;
  const base = import.meta.env.BASE_URL;
  if (src.startsWith("/")) return `${base}${src.slice(1)}`;
  return `${base}${src}`;
}

const audioCache = new Map<string, HTMLAudioElement>();
let activeAudio: HTMLAudioElement | null = null;
let activeAudioFrame = 0;
let activeAudioTick: (() => void) | null = null;
let activeAudioFinish: ((kind: "ended" | "error") => void) | null = null;
let activeTtsFinish: (() => void) | null = null;
let ttsPausedByApp = false;
let toneAudioContext: AudioContext | null = null;
const playbackListeners = new Set<(state: PlaybackStatus) => void>();
const PROGRESS_STORAGE_KEY = "character-recognition-dojo-progress-v1";

function loadStoredProgress(): StoredProgress | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredProgress>;
    if (parsed.version !== 1) return null;
    const completedOrders = Array.isArray(parsed.completedOrders)
      ? parsed.completedOrders.filter((order): order is number => Number.isInteger(order))
      : [];
    return {
      version: 1,
      coins: Number.isFinite(parsed.coins) ? Number(parsed.coins) : 120,
      stars: Number.isFinite(parsed.stars) ? Number(parsed.stars) : 36,
      duplicateGachaStreak: Number.isFinite(parsed.duplicateGachaStreak)
        ? Math.max(0, Math.floor(Number(parsed.duplicateGachaStreak)))
        : 0,
      selectedOrder: Number.isInteger(parsed.selectedOrder) ? Number(parsed.selectedOrder) : 1,
      completedOrders,
      ownedCharacters: sanitizeOwnedCharacters(parsed.ownedCharacters),
      characterHearts: sanitizeCharacterHearts(parsed.characterHearts),
      seenCharacterInteractions: sanitizeSeenCharacterInteractions(parsed.seenCharacterInteractions),
    };
  } catch {
    return null;
  }
}

function saveStoredProgress(progress: StoredProgress) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Progress still works for the current session if storage is unavailable.
  }
}

function App() {
  const initialProgressRef = useRef<StoredProgress | null>(null);
  if (initialProgressRef.current === null) initialProgressRef.current = loadStoredProgress();
  const initialProgress = initialProgressRef.current;
  const [page, setPage] = useState<AppPage>("practice");
  const [menuOpen, setMenuOpen] = useState(false);
  const [completedOrders, setCompletedOrders] = useState<Set<number>>(
    () => new Set(initialProgress?.completedOrders ?? []),
  );
  const [lessonOpen, setLessonOpen] = useState(false);
  const [completionNotice, setCompletionNotice] = useState("");
  const [startingOrder, setStartingOrder] = useState<number | null>(null);
  const [coins, setCoins] = useState(initialProgress?.coins ?? 120);
  const [stars, setStars] = useState(initialProgress?.stars ?? 36);
  const [duplicateGachaStreak, setDuplicateGachaStreak] = useState(initialProgress?.duplicateGachaStreak ?? 0);
  const [ownedCharacters, setOwnedCharacters] = useState<Record<string, number>>(
    () => initialProgress?.ownedCharacters ?? {},
  );
  const [characterHearts, setCharacterHearts] = useState<Record<string, number>>(
    () => initialProgress?.characterHearts ?? {},
  );
  const [seenCharacterInteractions, setSeenCharacterInteractions] = useState<Record<string, number[]>>(
    () => initialProgress?.seenCharacterInteractions ?? {},
  );
  const [lastGachaResult, setLastGachaResult] = useState<GachaDrawResult | null>(null);
  const [collectionFocus, setCollectionFocus] = useState<CollectionFocus>({ realmId: "land", characterId: null, nonce: 0 });
  const nextOrder = nextLockedLessonOrder(curriculum.lessons, completedOrders);
  const [selectedOrder, setSelectedOrder] = useState(initialProgress?.selectedOrder ?? nextOrder);
  const playbackState = usePlaybackState();
  const selectedLesson =
    curriculum.lessons.find((lesson) => lesson.order === selectedOrder) ?? curriculum.lessons[0];
  const streakDays = completedOrders.size > 0 ? 1 : 0;

  useEffect(() => {
    if (page === "practice" && lessonOpen) return;
    speakGuide(PAGE_GUIDE_TEXT[page]);
  }, [page, lessonOpen]);

  useEffect(() => {
    saveStoredProgress({
      version: 1,
      coins,
      stars,
      duplicateGachaStreak,
      selectedOrder,
      completedOrders: [...completedOrders],
      ownedCharacters,
      characterHearts,
      seenCharacterInteractions,
    });
  }, [coins, stars, duplicateGachaStreak, selectedOrder, completedOrders, ownedCharacters, characterHearts, seenCharacterInteractions]);

  function grantLessonReward(order: number, rewards: LessonReward) {
    if (completedOrders.has(order)) return;
    setCoins((value) => value + rewards.coins);
    setStars((value) => value + rewards.stars);
    setCompletedOrders((prev) => {
      const next = new Set(prev);
      next.add(order);
      return next;
    });
  }

  function handleGachaDraw() {
    if (coins < 10) return;
    const realmId = activeGachaRealm(ownedCharacters);
    const result = drawCharacter(realmId, ownedCharacters, duplicateGachaStreak);
    const { character } = result;
    setCoins((value) => Math.max(0, value - 10));
    setOwnedCharacters((prev) => ({
      ...prev,
      [character.characterId]: ownedCount(prev, character.characterId) + 1,
    }));
    setDuplicateGachaStreak(result.isNew ? 0 : duplicateGachaStreak + 1);
    setLastGachaResult(result);
    playRewardChime();
    void speakGuide(`${result.isNew ? "你抽到了新角色，" : "你又遇到了"}${character.name}${character.familyRoleLabel}。`);
  }

  function handleAddHeart(characterId: string) {
    const character = COLLECTIBLE_BY_ID.get(characterId);
    if (stars < 3 || !character) return;
    if (heartCount(characterHearts, characterId) >= 10) return;
    const nextHearts = heartCount(characterHearts, characterId) + 1;
    setStars((value) => Math.max(0, value - 3));
    setCharacterHearts((prev) => ({
      ...prev,
      [characterId]: heartCount(prev, characterId) + 1,
    }));
    playCelebrateChime();
    const unlockedInteraction = characterInteractions(character).find((interaction) => interaction.heart === nextHearts);
    void speakGuide(`${character.name}${character.familyRoleLabel}得到一顆愛心。解鎖了${unlockedInteraction?.label ?? "新的互動"}。`);
  }

  function handleCharacterInteractionSeen(characterId: string, index: number) {
    setSeenCharacterInteractions((prev) => {
      const current = prev[characterId] ?? [];
      if (current.includes(index)) return prev;
      return {
        ...prev,
        [characterId]: [...current, index],
      };
    });
  }

  function finishLesson(order: number, destination: LessonDestination) {
    const following = curriculum.lessons.find((lesson) => lesson.order === order + 1);
    if (following) setSelectedOrder(following.order);
    setLessonOpen(destination === "next" && Boolean(following));
    setCompletionNotice(following ? `第 ${order} 課完成，已解鎖第 ${following.order} 課。` : `第 ${order} 課完成。`);
  }

  function openPage(nextPage: AppPage) {
    stopPlayback();
    setPage(nextPage);
    if (nextPage === "practice") setLessonOpen(false);
    setMenuOpen(false);
  }

  function openCollectionRealm(realmId: RealmId) {
    stopPlayback();
    setCollectionFocus((prev) => ({ realmId, characterId: null, nonce: prev.nonce + 1 }));
    setPage("collection");
    setLessonOpen(false);
    setMenuOpen(false);
  }

  function openCollectionCharacter(character: CollectibleCharacter) {
    stopPlayback();
    setCollectionFocus((prev) => ({ realmId: character.realmId, characterId: character.characterId, nonce: prev.nonce + 1 }));
    setPage("collection");
    setLessonOpen(false);
    setMenuOpen(false);
  }

  function openLesson(order: number) {
    setStartingOrder(null);
    setSelectedOrder(order);
    setPage("practice");
    setLessonOpen(true);
    setCompletionNotice("");
    setMenuOpen(false);
  }

  function startLessonWithFeedback(order: number) {
    if (startingOrder !== null) return;
    setStartingOrder(order);
    playStartChime();
    speakGuide(`第 ${order} 課`);
    window.setTimeout(() => openLesson(order), 800);
  }

  function returnToPracticeHome() {
    stopPlayback();
    setPage("practice");
    setLessonOpen(false);
    setMenuOpen(false);
    setStartingOrder(null);
  }

  function togglePlayback() {
    if (playbackState.paused) {
      resumePlayback();
    } else {
      pausePlayback();
    }
  }

  return (
    <div className="app-root">
      <AppHeader
        coins={coins}
        stars={stars}
        streakDays={streakDays}
        onMenu={() => setMenuOpen(true)}
      />
      <AppDrawer
        open={menuOpen}
        activePage={page}
        onClose={() => setMenuOpen(false)}
        onNavigate={openPage}
      />

      <main className="app-shell">
        {page === "practice" && !lessonOpen && (
          <PracticeHome
            lessons={curriculum.lessons}
            completedOrders={completedOrders}
            nextOrder={nextOrder}
            notice={completionNotice}
            startingOrder={startingOrder}
            onStart={startLessonWithFeedback}
          />
        )}
        {page === "practice" && lessonOpen && (
          <div className="practice-layout">
            <PracticeNavigator
              lessons={curriculum.lessons}
              selectedOrder={selectedLesson.order}
              completedOrders={completedOrders}
              nextOrder={nextOrder}
              onSelect={openLesson}
            />
            <LessonPanel
              key={selectedLesson.id}
              lesson={selectedLesson}
              lessons={curriculum.lessons}
              completed={completedOrders.has(selectedLesson.order)}
              locked={selectedLesson.order > nextOrder}
              onReward={(rewards) => grantLessonReward(selectedLesson.order, rewards)}
              onComplete={(destination) => finishLesson(selectedLesson.order, destination)}
              onExit={returnToPracticeHome}
            />
          </div>
        )}
        {page === "catalog" && (
          <CatalogPage
            lessons={curriculum.lessons}
            selectedOrder={selectedLesson.order}
            completedOrders={completedOrders}
            nextOrder={nextOrder}
            onSelect={openLesson}
          />
        )}
        {page === "records" && (
          <RecordsPage
            coins={coins}
            stars={stars}
            streakDays={streakDays}
            completedCount={completedOrders.size}
            collectedCount={CREATURE_REALMS.reduce(
              (total, realm) => total + realmOwnedCount(realm.id, ownedCharacters),
              0,
            )}
          />
        )}
        {page === "gacha" && (
          <GachaPage
            coins={coins}
            ownedCharacters={ownedCharacters}
            characterHearts={characterHearts}
            duplicateGachaStreak={duplicateGachaStreak}
            lastResult={lastGachaResult}
            onDraw={handleGachaDraw}
            onOpenRealm={openCollectionRealm}
            onOpenCharacter={openCollectionCharacter}
          />
        )}
        {page === "collection" && (
          <CollectionPage
            stars={stars}
            ownedCharacters={ownedCharacters}
            characterHearts={characterHearts}
            seenCharacterInteractions={seenCharacterInteractions}
            focus={collectionFocus}
            onAddHeart={handleAddHeart}
            onInteractionSeen={handleCharacterInteractionSeen}
            onOpenGacha={() => openPage("gacha")}
          />
        )}
        {page === "settings" && <PlaceholderPage icon="⚙️" title="設定" text="之後放音量、資料備份、家長設定。" />}
      </main>

      <FloatingPlaybackBar
        lessonOrder={lessonOpen ? selectedLesson.order : null}
        playbackState={playbackState}
        onExitLesson={returnToPracticeHome}
        onTogglePlayback={togglePlayback}
      />
    </div>
  );
}

function PracticeHome({
  lessons,
  completedOrders,
  nextOrder,
  notice,
  startingOrder,
  onStart,
}: {
  lessons: Lesson[];
  completedOrders: Set<number>;
  nextOrder: number;
  notice: string;
  startingOrder: number | null;
  onStart: (order: number) => void;
}) {
  const nextLesson = lessons.find((lesson) => lesson.order === nextOrder) ?? lessons[lessons.length - 1];
  const unlockedEntries = flattenLessonChars(lessons.filter((lesson) => lesson.order <= nextOrder)).slice(-12);

  return (
    <section className="page-panel practice-home">
      {notice && <div className="completion-banner">{notice}</div>}
      <div className="page-heading">
        <h1>今天來認字</h1>
        <NarrationLine text={GUIDE_TEXT.homeWelcome}>
          {GUIDE_TEXT.homeWelcome}
        </NarrationLine>
      </div>

      <div className="next-lesson-panel">
        <div>
          <span className="pill">從這裡開始</span>
          <h2>第 {nextLesson.order} 課：{lessonLabel(nextLesson)}</h2>
          <NarrationLine text={GUIDE_TEXT.homeNext}>
            {GUIDE_TEXT.homeNext}
          </NarrationLine>
        </div>
        <button
          className={`btn start-lesson-button${startingOrder === nextLesson.order ? " starting" : ""}`}
          onClick={() => onStart(nextLesson.order)}
          disabled={startingOrder !== null}
        >
          {startingOrder === nextLesson.order ? "走囉" : `開始第 ${nextLesson.order} 課`}
        </button>
      </div>

      <div className="home-section-heading">
        <h2>我的字卡</h2>
        <span>{completedOrders.size} 課完成</span>
      </div>
      <div className="home-char-grid">
        {unlockedEntries.map((entry) => (
          <button
            className={`home-char-card${completedOrders.has(entry.lesson.order) ? " completed" : ""}`}
            key={`${entry.lesson.id}-${entry.char}-${entry.index}`}
            onClick={() => onStart(entry.lesson.order)}
          >
            <span>第 {entry.lesson.order} 課</span>
            <strong>{entry.char}</strong>
          </button>
        ))}
      </div>
    </section>
  );
}

function AppHeader({
  coins,
  stars,
  streakDays,
  onMenu,
}: {
  coins: number;
  stars: number;
  streakDays: number;
  onMenu: () => void;
}) {
  const coinStat = useAnimatedStat(coins);
  const starStat = useAnimatedStat(stars);
  return (
    <header className="app-header">
      <div className="header-inner">
        <button className="menu-button" onClick={onMenu} aria-label="開啟選單">
          ☰
        </button>
        <div className="header-title">
          <span>認字</span>
          <strong>練功房</strong>
        </div>
        <div className="header-stats" aria-label="學習狀態">
          <span className={`stat-pill${coinStat.animating ? " stat-animating coin" : ""}`}>
            <span aria-hidden>🪙</span>
            <span className="stat-number">{coinStat.value}</span>
          </span>
          <span className={`stat-pill${starStat.animating ? " stat-animating star" : ""}`}>
            <span aria-hidden>⭐</span>
            <span className="stat-number">{starStat.value}</span>
          </span>
          <span className="stat-pill">🔥 {streakDays} 天</span>
        </div>
      </div>
    </header>
  );
}

function useAnimatedStat(target: number) {
  const frameRef = useRef(0);
  const previousTargetRef = useRef(target);
  const [displayValue, setDisplayValue] = useState(target);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const from = previousTargetRef.current;
    previousTargetRef.current = target;
    window.cancelAnimationFrame(frameRef.current);
    if (from === target) {
      setDisplayValue(target);
      setAnimating(false);
      return;
    }

    const durationMs = 3200;
    const startTime = performance.now();
    setAnimating(true);

    function tick(now: number) {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(from + (target - from) * eased);
      setDisplayValue(nextValue);
      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(tick);
      } else {
        setDisplayValue(target);
        setAnimating(false);
      }
    }

    frameRef.current = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameRef.current);
  }, [target]);

  return { value: displayValue, animating };
}

function AppDrawer({
  open,
  activePage,
  onClose,
  onNavigate,
}: {
  open: boolean;
  activePage: AppPage;
  onClose: () => void;
  onNavigate: (page: AppPage) => void;
}) {
  return (
    <>
      {open && <button className="drawer-backdrop" aria-label="關閉選單" onClick={onClose} />}
      <aside className={`drawer${open ? " open" : ""}`} aria-hidden={!open}>
        <div className="drawer-top">
          <strong>選單</strong>
          <button onClick={onClose} aria-label="關閉選單">
            ←
          </button>
        </div>
        <nav className="drawer-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.page}
              className={`drawer-item${activePage === item.page ? " active" : ""}`}
              onClick={() => onNavigate(item.page)}
            >
              <span>{item.icon}</span>
              <strong>{item.label}</strong>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}

function PracticeNavigator({
  lessons,
  selectedOrder,
  completedOrders,
  nextOrder,
  onSelect,
}: {
  lessons: Lesson[];
  selectedOrder: number;
  completedOrders: Set<number>;
  nextOrder: number;
  onSelect: (order: number) => void;
}) {
  const nearbyEntries = lessons
    .filter((lesson) => lesson.order <= selectedOrder && lesson.order <= nextOrder)
    .slice(-6)
    .flatMap(lessonCharEntries)
    .slice(-12);

  return (
    <aside className="side-panel">
      <div className="nav-heading">
        <h2>最近課程</h2>
        <span className="mini-label">已解鎖</span>
      </div>
      <div className="nearby-row" aria-label="最近可回看的課程">
        {nearbyEntries.map((entry) => (
          <LessonJumpButton
            key={`${entry.lesson.id}-${entry.char}-${entry.index}`}
            entry={entry}
            selected={entry.lesson.order === selectedOrder}
            locked={false}
            completed={completedOrders.has(entry.lesson.order)}
            onSelect={onSelect}
          />
        ))}
      </div>
    </aside>
  );
}

function LessonJumpButton({
  entry,
  selected,
  locked,
  completed,
  onSelect,
}: {
  entry: LessonCharEntry;
  selected: boolean;
  locked: boolean;
  completed: boolean;
  onSelect: (order: number) => void;
}) {
  const { lesson, char } = entry;
  return (
    <button
      className={`lesson-chip${selected ? " active" : ""}${completed ? " completed" : ""}`}
      disabled={locked}
      onClick={() => onSelect(lesson.order)}
      aria-label={`第 ${lesson.order} 課 ${char}`}
    >
      <span>第 {lesson.order} 課</span>
      <strong>{char}</strong>
    </button>
  );
}

function CatalogPage({
  lessons,
  selectedOrder,
  completedOrders,
  nextOrder,
  onSelect,
}: {
  lessons: Lesson[];
  selectedOrder: number;
  completedOrders: Set<number>;
  nextOrder: number;
  onSelect: (order: number) => void;
}) {
  const [activeGroupId, setActiveGroupId] = useState(RAINBOW_GROUPS[0].id);
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim();
  const activeGroup = RAINBOW_GROUPS.find((group) => group.id === activeGroupId) ?? RAINBOW_GROUPS[0];
  const allEntries = useMemo(() => flattenLessonChars(lessons), [lessons]);
  const allSlots = useMemo(() => catalogSlotsFromEntries(allEntries), [allEntries]);
  const searchResults =
    normalizedQuery.length > 0
      ? allSlots.filter(
          (slot) =>
            slot.entry &&
            (slot.entry.char.includes(normalizedQuery) ||
              slot.entry.lesson.title.includes(normalizedQuery) ||
              String(slot.entry.lesson.order) === normalizedQuery ||
              String(slot.slotNumber) === normalizedQuery),
        )
      : [];
  const activeGroupSlots = allSlots.filter(
    (slot) => slot.slotNumber >= activeGroup.start && slot.slotNumber <= activeGroup.end,
  );

  return (
    <section className="page-panel catalog-page">
      <div className="page-heading">
        <h1>漢字總覽</h1>
        <p>六百字分成六個彩虹區塊。每個顏色都有一百格，還沒解鎖的字先用問號佔位。</p>
      </div>
      <input
        className="search-input"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="搜尋字、課號或編號"
        aria-label="搜尋字、課號或編號"
      />

      {normalizedQuery ? (
        <CatalogSlotGrid
          slots={searchResults}
          selectedOrder={selectedOrder}
          completedOrders={completedOrders}
          nextOrder={nextOrder}
          onSelect={onSelect}
          emptyText="目前教材裡找不到這個字。"
        />
      ) : (
        <>
          <div className="rainbow-groups" aria-label="彩虹分區">
            {RAINBOW_GROUPS.map((group) => {
              const count = allSlots.filter(
                (slot) =>
                  slot.slotNumber >= group.start &&
                  slot.slotNumber <= group.end &&
                  slot.entry &&
                  slot.entry.lesson.order <= nextOrder,
              ).length;
              return (
                <button
                  key={group.id}
                  className={`rainbow-group${group.id === activeGroupId ? " active" : ""}`}
                  style={{ "--group-color": group.color } as CSSProperties}
                  onClick={() => setActiveGroupId(group.id)}
                >
                  <span>{group.label}色字</span>
                  <small>{group.range}</small>
                  <small>{count} / 100 字</small>
                </button>
              );
            })}
          </div>

          <div className="catalog-band-title" style={{ "--group-color": activeGroup.color } as CSSProperties}>
            <strong>{activeGroup.label}色區</strong>
            <span>{activeGroup.range}</span>
          </div>

          <CatalogSlotGrid
            slots={activeGroupSlots}
            selectedOrder={selectedOrder}
            completedOrders={completedOrders}
            nextOrder={nextOrder}
            onSelect={onSelect}
            emptyText={`${activeGroup.label}區教材尚未建立。`}
          />
        </>
      )}
    </section>
  );
}

function CatalogSlotGrid({
  slots,
  selectedOrder,
  completedOrders,
  nextOrder,
  onSelect,
  emptyText,
}: {
  slots: CatalogSlot[];
  selectedOrder: number;
  completedOrders: Set<number>;
  nextOrder: number;
  onSelect: (order: number) => void;
  emptyText: string;
}) {
  if (slots.length === 0) return <p className="empty-catalog">{emptyText}</p>;
  return (
    <div className="catalog-grid" aria-label="課程字目錄">
      {slots.map((slot) => {
        const entry = slot.entry;
        const lesson = entry?.lesson ?? null;
        const locked = !lesson || lesson.order > nextOrder;
        const completed = Boolean(lesson && completedOrders.has(lesson.order));
        const active = Boolean(lesson && lesson.order === selectedOrder);
        const revealed = Boolean(entry && !locked);
        const slotCode = String(slot.slotNumber).padStart(3, "0");
        return (
          <button
            key={`catalog-${slot.slotNumber}`}
            className={`catalog-char${active ? " active" : ""}${completed ? " completed" : ""}${
              locked ? " locked" : " revealed"
            }`}
            style={{ "--slot-color": slot.group.color } as CSSProperties}
            disabled={locked}
            onClick={() => lesson && onSelect(lesson.order)}
            aria-label={revealed && lesson && entry ? `第 ${slot.slotNumber} 字，第 ${lesson.order} 課，${entry.char}` : `第 ${slot.slotNumber} 字，未解鎖`}
          >
            <span>#{slotCode}</span>
            <strong>{revealed && entry ? entry.char : "?"}</strong>
            <small>{revealed && lesson ? `第 ${lesson.order} 課` : "未解鎖"}</small>
          </button>
        );
      })}
    </div>
  );
}

function RecordsPage({
  coins,
  stars,
  streakDays,
  completedCount,
  collectedCount,
}: {
  coins: number;
  stars: number;
  streakDays: number;
  completedCount: number;
  collectedCount: number;
}) {
  return (
    <section className="page-panel">
      <div className="page-heading">
        <h1>學習記錄</h1>
        <p>這裡之後會列每日練習、弱字、複習紀錄和獎勵明細。</p>
      </div>
      <div className="record-grid">
        <StatCard icon="🪙" value={coins} label="金幣" />
        <StatCard icon="⭐" value={stars} label="星星" />
        <StatCard icon="🔥" value={streakDays} label="連續天數" />
        <StatCard icon="✅" value={completedCount} label="已破解課程" />
        <StatCard icon="字" value={collectedCount} label="已收角色" />
      </div>
    </section>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: number; label: string }) {
  return (
    <div className="stat-card">
      <span>{icon}</span>
      <strong>{value}</strong>
      <small>{label}</small>
    </div>
  );
}

function NarrationLine({
  children,
  text,
  target = null,
  onSpeakStart,
  onSpeakEnd,
  className = "",
}: {
  children: ReactNode;
  text: string;
  target?: SpeechTarget;
  onSpeakStart?: (target: SpeechTarget) => void;
  onSpeakEnd?: (target: SpeechTarget) => void;
  className?: string;
}) {
  async function handleSpeak() {
    onSpeakStart?.(target);
    await speakGuide(text);
    onSpeakEnd?.(target);
  }

  return (
    <p className={`narration-line ${className}`.trim()}>
      <button className="speak-button" type="button" aria-label="播放說明" onClick={handleSpeak}>
        ▶
      </button>
      <span>{children}</span>
    </p>
  );
}

function PlaceholderPage({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <section className="page-panel placeholder-page">
      <span className="placeholder-icon">{icon}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}

function GachaPage({
  coins,
  ownedCharacters,
  characterHearts,
  duplicateGachaStreak,
  lastResult,
  onDraw,
  onOpenRealm,
  onOpenCharacter,
}: {
  coins: number;
  ownedCharacters: Record<string, number>;
  characterHearts: Record<string, number>;
  duplicateGachaStreak: number;
  lastResult: GachaDrawResult | null;
  onDraw: () => void;
  onOpenRealm: (realmId: RealmId) => void;
  onOpenCharacter: (character: CollectibleCharacter) => void;
}) {
  const [drawing, setDrawing] = useState(false);
  const realmId = activeGachaRealm(ownedCharacters);
  const realm = CREATURE_REALMS.find((candidate) => candidate.id === realmId) ?? CREATURE_REALMS[0];
  const collected = realmOwnedCount(realm.id, ownedCharacters);
  const total = realmTotalCount(realm.id);
  const canDraw = coins >= 10;
  const missingCount = charactersForRealm(realm.id).filter((character) => ownedCount(ownedCharacters, character.characterId) === 0).length;
  const pityCount = Math.min(5, duplicateGachaStreak);
  const nextIsGuaranteed = pityCount >= 5 && missingCount > 0;

  function handleDraw() {
    if (!canDraw || drawing) return;
    setDrawing(true);
    playStartChime();
    void speakGuide("轉蛋開始，看看是哪一個角色跑出來。");
    window.setTimeout(() => onDraw(), 520);
    window.setTimeout(() => setDrawing(false), 900);
  }

  return (
    <section className="page-panel gacha-page">
      <div className="page-heading">
        <h1>轉蛋</h1>
        <p>每次轉蛋需要十個金幣。先收集地上的生物，再前往海裡、天空和外太空。</p>
      </div>

      <div className="gacha-machine gacha-action-card" style={{ "--realm-color": realm.color } as CSSProperties}>
        <div className="gacha-stats-row" aria-label="轉蛋狀態">
          <div>
            <strong>金幣 {coins}</strong>
            <span>每次 10 枚</span>
          </div>
          <div>
            <strong>{collected} / {total}</strong>
            <span>{realm.shortLabel}進度</span>
          </div>
        </div>

        <div className={`gacha-stage${drawing ? " drawing" : ""}`}>
          {lastResult ? (
            <button
              type="button"
              className="gacha-stage-result"
              onClick={() => {
                playStartChime();
                onOpenCharacter(lastResult.character);
              }}
            >
              {lastResult.isNew && <span className="new-ribbon">NEW</span>}
              <CreatureAvatar character={lastResult.character} owned large hearts={heartCount(characterHearts, lastResult.character.characterId)} />
              <strong>{lastResult.character.name}{lastResult.character.familyRoleLabel}</strong>
              <small>{lastResult.guaranteedNew ? "保底新角色" : lastResult.isNew ? "新角色" : `已遇見 ${ownedCount(ownedCharacters, lastResult.character.characterId)} 次`}</small>
              <span className="gacha-stage-link">點我去看角色</span>
            </button>
          ) : (
            <div className="gacha-stage-gift" aria-hidden>
              <span>🎁</span>
            </div>
          )}
        </div>

        <button className={`btn gacha-draw-button${drawing ? " starting" : ""}`} disabled={!canDraw || drawing} onClick={handleDraw}>
          <span>{coins < 10 ? "金幣不夠" : drawing ? "打開中" : "轉蛋一次"}</span>
          <small>10 金幣</small>
        </button>

        <div className="gacha-copy">
          <h2>{realm.label}</h2>
          <p>{realm.description}</p>
          <small>{nextIsGuaranteed ? "下一抽保證新角色" : `保底進度 ${pityCount} / 5`}</small>
        </div>
      </div>

      <div className="realm-track gacha-progress-track" aria-label="蒐集進度">
        {CREATURE_REALMS.map((candidate) => {
          const unlocked = realmUnlocked(candidate.id, ownedCharacters);
          const realmCount = realmOwnedCount(candidate.id, ownedCharacters);
          const realmTotal = realmTotalCount(candidate.id);
          return (
            <button
              type="button"
              key={candidate.id}
              className={`realm-card${candidate.id === realm.id ? " active" : ""}${unlocked ? "" : " locked"}`}
              style={{ "--realm-color": candidate.color } as CSSProperties}
              onClick={() => {
                playStartChime();
                onOpenRealm(candidate.id);
              }}
            >
              <span className="realm-icon" aria-hidden>{candidate.icon}</span>
              <strong>{candidate.label}</strong>
              <span>{realmCount} / {realmTotal}</span>
              {!unlocked && <small>還沒解鎖</small>}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function CollectionPage({
  stars,
  ownedCharacters,
  characterHearts,
  seenCharacterInteractions,
  focus,
  onAddHeart,
  onInteractionSeen,
  onOpenGacha,
}: {
  stars: number;
  ownedCharacters: Record<string, number>;
  characterHearts: Record<string, number>;
  seenCharacterInteractions: Record<string, number[]>;
  focus: CollectionFocus;
  onAddHeart: (characterId: string) => void;
  onInteractionSeen: (characterId: string, index: number) => void;
  onOpenGacha: () => void;
}) {
  const [selectedRealm, setSelectedRealm] = useState<RealmId>(focus.realmId);
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);
  const [interactionMessage, setInteractionMessage] = useState("");
  const realm = CREATURE_REALMS.find((candidate) => candidate.id === selectedRealm) ?? CREATURE_REALMS[0];
  const unlocked = realmUnlocked(realm.id, ownedCharacters);
  const visibleRealm = realm;
  const visibleSpecies = CREATURE_SPECIES.filter((species) => species.realmId === visibleRealm.id);
  const collected = realmOwnedCount(visibleRealm.id, ownedCharacters);
  const total = realmTotalCount(visibleRealm.id);
  const firstOwnedCharacter = charactersForRealm(visibleRealm.id).find((character) => ownedCount(ownedCharacters, character.characterId) > 0);
  const selectedCharacter = selectedCharacterId ? COLLECTIBLE_BY_ID.get(selectedCharacterId) : undefined;
  const selectedOwned = selectedCharacter ? ownedCount(ownedCharacters, selectedCharacter.characterId) > 0 : false;
  const selectedHearts = selectedCharacter ? heartCount(characterHearts, selectedCharacter.characterId) : 0;

  useEffect(() => {
    setSelectedRealm(focus.realmId);
    setSelectedCharacterId(focus.characterId);
    setInteractionMessage("");
    const focusedCharacter = focus.characterId ? COLLECTIBLE_BY_ID.get(focus.characterId) : null;
    if (focusedCharacter) {
      void speakGuide(`這是${focusedCharacter.name}${focusedCharacter.familyRoleLabel}。可以加愛心，也可以看下面的角色互動。`);
    } else {
      void speakGuide(realmGuideText(focus.realmId, ownedCharacters));
    }
  }, [focus, ownedCharacters]);

  useEffect(() => {
    if (selectedCharacter && selectedCharacter.realmId !== visibleRealm.id) {
      setSelectedCharacterId(null);
      setInteractionMessage("");
    }
  }, [selectedCharacter, visibleRealm.id]);

  function handleInteract(character: CollectibleCharacter, interaction: CharacterInteraction, index: number) {
    setInteractionMessage(interaction.message);
    onInteractionSeen(character.characterId, index);
    playStartChime();
    void speakGuide(`${character.name}${character.familyRoleLabel}說，${interaction.message}`);
  }

  if (selectedCharacter && selectedOwned) {
    return (
      <section className="page-panel collection-page character-page">
        <div className="character-page-topbar">
          <button
            className="btn character-back-button"
            type="button"
            onClick={() => {
              setSelectedCharacterId(null);
              setInteractionMessage("");
              playStartChime();
              void speakGuide(`回到${visibleRealm.label}的角色收藏。`);
            }}
          >
            ← 回角色收藏
          </button>
          <button
            className="btn collection-gacha-link"
            type="button"
            onClick={() => {
              playStartChime();
              onOpenGacha();
            }}
          >
            <span aria-hidden>🎁</span>
            去轉蛋
          </button>
        </div>
        <CharacterInteractionPanel
          character={selectedCharacter}
          hearts={selectedHearts}
          stars={stars}
          seenIndexes={seenCharacterInteractions[selectedCharacter.characterId] ?? []}
          message={interactionMessage}
          canAddHeart={stars >= 3 && selectedHearts < 10}
          onAddHeart={() => onAddHeart(selectedCharacter.characterId)}
          onInteract={(interaction, index) => handleInteract(selectedCharacter, interaction, index)}
        />
      </section>
    );
  }

  return (
    <section className="page-panel collection-page">
      <div className="page-heading collection-page-heading">
        <div>
          <h1>角色收藏</h1>
          <p>每一種生物都有九個家人。用星星增加角色好感度，三顆星星可以加一顆愛心。</p>
        </div>
        <button
          className="btn collection-gacha-link"
          type="button"
          onClick={() => {
            playStartChime();
            onOpenGacha();
          }}
        >
          <span aria-hidden>🎁</span>
          去轉蛋
        </button>
      </div>

      <div className="collection-tabs" role="tablist" aria-label="角色區塊">
        {CREATURE_REALMS.map((candidate) => {
          const candidateUnlocked = realmUnlocked(candidate.id, ownedCharacters);
          return (
            <button
              key={candidate.id}
              className={`collection-tab${visibleRealm.id === candidate.id ? " active" : ""}${candidateUnlocked ? "" : " locked"}`}
              style={{ "--realm-color": candidate.color } as CSSProperties}
              onClick={() => {
                setSelectedRealm(candidate.id);
                setSelectedCharacterId(null);
                setInteractionMessage("");
                playStartChime();
                void speakGuide(realmGuideText(candidate.id, ownedCharacters));
              }}
            >
              <span className="realm-icon" aria-hidden>{candidate.icon}</span>
              <strong>{candidate.shortLabel}</strong>
              <small>{realmOwnedCount(candidate.id, ownedCharacters)} / {realmTotalCount(candidate.id)}</small>
              {!candidateUnlocked && <small>未解鎖</small>}
            </button>
          );
        })}
      </div>

      <div className="collection-summary" style={{ "--realm-color": visibleRealm.color } as CSSProperties}>
        <div>
          <h2>{visibleRealm.label}</h2>
          <p>{visibleRealm.description}</p>
        </div>
        <strong>{collected} / {total}</strong>
        <span className="collection-stars">星星：{stars}</span>
      </div>

      {!unlocked && (
        <div className="collection-helper locked-note" style={{ "--realm-color": visibleRealm.color } as CSSProperties}>
          <strong>這一區還沒解鎖。</strong>
          <span>{realmGuideText(visibleRealm.id, ownedCharacters)}</span>
        </div>
      )}

      {!selectedCharacter && firstOwnedCharacter && (
        <div className="collection-helper" style={{ "--realm-color": visibleRealm.color } as CSSProperties}>
          <strong>請點下面有顏色的角色。</strong>
          <span>點進去以後，可以加愛心，也可以看角色互動。</span>
        </div>
      )}

      <div className="species-collection-list" aria-label={`${visibleRealm.label}角色`}>
        {visibleSpecies.map((species) => {
          const speciesCharacters = FAMILY_ROLES.map((role) => COLLECTIBLE_BY_ID.get(`${species.realmId}-${species.id}-${role.id}`)).filter(
            (character): character is CollectibleCharacter => Boolean(character),
          );
          const speciesOwnedCount = speciesCharacters.filter((character) => ownedCount(ownedCharacters, character.characterId) > 0).length;
          return (
            <section key={species.id} className="species-section" style={{ "--realm-color": visibleRealm.color } as CSSProperties}>
              <div className="species-heading">
                <span aria-hidden>{species.icon}</span>
                <strong>{species.name}</strong>
                <small>{speciesOwnedCount} / {FAMILY_ROLES.length}</small>
              </div>
              <div className="species-character-grid">
                {speciesCharacters.map((character) => {
                  const count = ownedCount(ownedCharacters, character.characterId);
                  return (
                    <CollectibleCard
                      key={character.characterId}
                      character={character}
                      owned={count > 0}
                      duplicateCount={count}
                      hearts={heartCount(characterHearts, character.characterId)}
                      canAddHeart={stars >= 3 && heartCount(characterHearts, character.characterId) < 10}
                      onAddHeart={() => onAddHeart(character.characterId)}
                      selected={selectedCharacter?.characterId === character.characterId}
                      onSelect={() => {
                        if (count > 0) {
                          setSelectedCharacterId(character.characterId);
                          setInteractionMessage("");
                          playStartChime();
                          void speakGuide(`這是${character.name}${character.familyRoleLabel}。可以加愛心，也可以看下面的角色互動。`);
                        }
                      }}
                    />
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}

function CollectibleCard({
  character,
  owned,
  duplicateCount,
  hearts,
  canAddHeart,
  selected,
  onAddHeart,
  onSelect,
}: {
  character: CollectibleCharacter;
  owned: boolean;
  duplicateCount: number;
  hearts: number;
  canAddHeart: boolean;
  selected: boolean;
  onAddHeart: () => void;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      className={`collectible-card${owned ? " owned" : " empty"}${selected ? " selected" : ""}`}
      style={{ "--realm-color": realmColor(character.realmId) } as CSSProperties}
      onClick={onSelect}
      disabled={!owned}
    >
      <CreatureAvatar character={character} owned={owned} hearts={hearts} />
      <strong>{owned ? `${character.name}${character.familyRoleLabel}` : "還沒遇見"}</strong>
      <small>{owned && duplicateCount > 1 ? `遇見 ${duplicateCount} 次` : owned ? character.familyRoleLabel : "???"}</small>
      {owned && (
        <>
          <div className="heart-meter" aria-label={`好感度 ${hearts} / 10`}>
            {Array.from({ length: 10 }, (_, index) => (
              <span key={index} className={index < hearts ? "filled" : ""}>♥</span>
            ))}
          </div>
          <span
            role="button"
            tabIndex={canAddHeart ? 0 : -1}
            className={`heart-button${canAddHeart ? "" : " disabled"}`}
            onClick={(event) => {
              event.stopPropagation();
              if (canAddHeart) onAddHeart();
            }}
            onKeyDown={(event) => {
              if (!canAddHeart || (event.key !== "Enter" && event.key !== " ")) return;
              event.preventDefault();
              event.stopPropagation();
              onAddHeart();
            }}
          >
            {hearts >= 10 ? "愛心滿了" : "加愛心"}
          </span>
        </>
      )}
    </button>
  );
}

function CharacterInteractionPanel({
  character,
  hearts,
  stars,
  seenIndexes,
  message,
  canAddHeart,
  onAddHeart,
  onInteract,
}: {
  character: CollectibleCharacter;
  hearts: number;
  stars: number;
  seenIndexes: number[];
  message: string;
  canAddHeart: boolean;
  onAddHeart: () => void;
  onInteract: (interaction: CharacterInteraction, index: number) => void;
}) {
  const interactions = characterInteractions(character);
  return (
    <section className="character-detail-panel" style={{ "--realm-color": realmColor(character.realmId) } as CSSProperties}>
      <div className="character-detail-main">
        <CreatureAvatar character={character} owned large hearts={hearts} />
        <div>
          <span className="mini-label">角色個人頁</span>
          <h2>{character.name}{character.familyRoleLabel}</h2>
          <div className="heart-meter large" aria-label={`好感度 ${hearts} / 10`}>
            {Array.from({ length: 10 }, (_, index) => (
              <span key={index} className={index < hearts ? "filled" : ""}>♥</span>
            ))}
          </div>
          <p>星星：{stars}。三顆星星可以加一顆愛心。</p>
        </div>
        <button className="btn character-heart-button" disabled={!canAddHeart} onClick={onAddHeart}>
          {hearts >= 10 ? "愛心滿了" : "加一顆愛心"}
        </button>
      </div>

      {message && (
        <div className="character-message">
          <strong>{character.name}{character.familyRoleLabel}說：</strong>
          <span>{message}</span>
        </div>
      )}

      <div className="interaction-grid">
        {interactions.map((interaction, index) => {
          const unlocked = hearts >= interaction.heart;
          const unseen = unlocked && !seenIndexes.includes(index);
          return (
            <button
              key={`${character.characterId}-${interaction.heart}`}
              type="button"
              className={`interaction-card${unlocked ? " unlocked" : " locked"}${unseen ? " unseen" : ""}`}
              disabled={!unlocked}
              onClick={() => onInteract(interaction, index)}
            >
              {unseen && <span className="unseen-dot">新</span>}
              <span className="interaction-icon">{unlocked ? interaction.icon : "🔒"}</span>
              <strong>{interaction.label}</strong>
              <small>{interaction.heart} 顆愛心</small>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function CreatureAvatar({
  character,
  owned,
  large = false,
  hearts = 0,
}: {
  character: CollectibleCharacter;
  owned: boolean;
  large?: boolean;
  hearts?: number;
}) {
  const accessory = FAMILY_ROLE_ACCESSORY[character.familyRoleId];
  const mood = characterMood(hearts);
  const imageSrc = owned ? character.imageSrc : undefined;
  return (
    <div className={`creature-avatar${large ? " large" : ""}${owned ? "" : " silhouette"}${imageSrc ? " illustrated" : ""}`}>
      {imageSrc ? (
        <img className="creature-image" src={assetUrl(imageSrc)} alt="" />
      ) : (
        <span className="creature-icon" aria-hidden>{owned ? character.icon : "?"}</span>
      )}
      {owned && !imageSrc && <span className="role-accessory" aria-hidden>{accessory}</span>}
      {owned && <span className="mood-badge" aria-hidden>{mood}</span>}
      <span className="family-badge">{owned ? character.familyRoleShortLabel : ""}</span>
    </div>
  );
}

function LessonPanel({
  lesson,
  lessons,
  completed,
  locked,
  onReward,
  onComplete,
  onExit,
}: {
  lesson: Lesson;
  lessons: Lesson[];
  completed: boolean;
  locked: boolean;
  onReward: (rewards: LessonReward) => void;
  onComplete: (destination: LessonDestination) => void;
  onExit: () => void;
}) {
  const [heardChars, setHeardChars] = useState<Set<string>>(new Set());
  const [spotlightChar, setSpotlightChar] = useState<string | null>(null);
  const [findUnlocked, setFindUnlocked] = useState(false);
  const [practiceDoneCount, setPracticeDoneCount] = useState(0);
  const [gameDoneCount, setGameDoneCount] = useState(0);
  const [activeStage, setActiveStage] = useState(1);
  const [advancingStage, setAdvancingStage] = useState<number | null>(null);
  const [speakingTarget, setSpeakingTarget] = useState<SpeechTarget>(null);
  const [rewardState, setRewardState] = useState<"waiting" | "ready" | "claiming" | "claimed">("waiting");
  const [resetVersion, setResetVersion] = useState(0);
  const advanceRunRef = useRef(0);
  const speechRunRef = useRef(0);
  const hearRunRef = useRef(0);
  const newChars = lessonChars(lesson);
  const soundUnlocked = newChars.every((char) => heardChars.has(char));
  const zhuyinMap = useMemo(() => buildZhuyinMap(lessons, lesson.order), [lessons, lesson.order]);
  const usesSentenceGames = Boolean(lesson.sentenceGames?.length);
  const requiredGameRounds = usesSentenceGames
    ? Math.min(lesson.requiredRounds, lesson.sentenceGames?.length ?? 0)
    : 0;
  const pictureDone = practiceDoneCount >= 1;
  const gamesDone = !usesSentenceGames || gameDoneCount >= requiredGameRounds;
  const lessonReady = soundUnlocked && findUnlocked && pictureDone && gamesDone;
  const progressSteps = [soundUnlocked, findUnlocked, pictureDone, ...(usesSentenceGames ? [gamesDone] : [])];
  const lessonReward = { coins: 30, stars: 12 };
  const hasNextLesson = lessons.some((candidate) => candidate.order === lesson.order + 1);
  const lessonIntro = lessonIntroText(lesson);
  const hearPrompt = hearPromptText(lesson);

  useEffect(() => {
    preloadLessonAudio(lesson);
  }, [lesson]);

  useEffect(() => {
    if (!locked) void speakForTarget("stage1", `${lessonIntro} ${hearPrompt}`);
  }, [lesson.id, lessonIntro, hearPrompt, locked]);

  useEffect(() => {
    if (soundUnlocked && activeStage === 1) void speakForTarget("advance2", GUIDE_TEXT.toStageTwo);
  }, [soundUnlocked, activeStage]);

  useEffect(() => {
    if (activeStage === 2 && !findUnlocked) void speakForTarget("stage2", GUIDE_TEXT.blockFind);
  }, [activeStage, findUnlocked]);

  useEffect(() => {
    if (findUnlocked && activeStage === 2) {
      playCelebrateChime();
      void speakForTarget("advance3", `${GUIDE_TEXT.findComplete} ${GUIDE_TEXT.toStageThree}`);
    }
  }, [findUnlocked, activeStage]);

  useEffect(() => {
    if (activeStage === 3 && !pictureDone) {
      void speakForTarget("stage3", GUIDE_TEXT.blockPicture);
    }
  }, [activeStage, pictureDone]);

  useEffect(() => {
    if (pictureDone && usesSentenceGames && activeStage === 3) {
      void speakForTarget("advance4", GUIDE_TEXT.toStageFour);
    }
  }, [pictureDone, usesSentenceGames, activeStage]);

  useEffect(() => {
    if (lessonReady && rewardState === "waiting") {
      if (completed) {
        setRewardState("claimed");
        void speakForTarget(usesSentenceGames ? "stage4" : "stage3", "這一課已經練完了。要下一課，按紅色按鈕；要回入口，按白色按鈕。");
      } else {
        setRewardState("ready");
        void speakForTarget(usesSentenceGames ? "stage4" : "stage3", GUIDE_TEXT.rewardReady);
      }
    }
  }, [completed, lessonReady, rewardState, usesSentenceGames]);

  async function speakForTarget(target: SpeechTarget, text: string) {
    const runId = speechRunRef.current + 1;
    speechRunRef.current = runId;
    setSpeakingTarget(target);
    await speakGuide(text);
    if (speechRunRef.current !== runId) return;
    setSpeakingTarget((current) => (current === target ? null : current));
  }

  function activeBlock(stage: number) {
    return speakingTarget === `stage${stage}` || (!speakingTarget && activeStage === stage);
  }

  function activeAdvance(stage: number) {
    return speakingTarget === `advance${stage}` || advancingStage === stage;
  }

  async function handleHearTarget(char: string) {
    if (locked || spotlightChar) return;
    const runId = hearRunRef.current + 1;
    hearRunRef.current = runId;
    speechRunRef.current += 1;
    stopPlayback();
    setSpeakingTarget(null);
    setSpotlightChar(char);
    try {
      await Promise.all([playLessonCharForTap(lesson, char), waitMs(720)]);
      if (hearRunRef.current !== runId) return;
      setHeardChars((prev) => {
        const next = new Set(prev);
        next.add(char);
        return next;
      });
    } finally {
      if (hearRunRef.current === runId) setSpotlightChar(null);
    }
  }

  async function handleAdvanceStage(nextStage: number) {
    if (advancingStage === nextStage) {
      advanceRunRef.current += 1;
      stopPlayback();
      setActiveStage(nextStage);
      setAdvancingStage(null);
      return;
    }
    if (advancingStage !== null) return;
    const runId = advanceRunRef.current + 1;
    advanceRunRef.current = runId;
    setAdvancingStage(nextStage);
    playStartChime();
    await Promise.all([speakGuide(`${GUIDE_TEXT.stageAdvance} ${stageLabel(nextStage)}。`), waitMs(820)]);
    if (advanceRunRef.current !== runId) return;
    setActiveStage(nextStage);
    setAdvancingStage(null);
  }

  async function handleClaimReward() {
    if (!lessonReady || rewardState === "claiming" || rewardState === "claimed") return;
    setRewardState("claiming");
    playRewardChime();
    void speakForTarget(usesSentenceGames ? "stage4" : "stage3", GUIDE_TEXT.rewardWon);
    await waitMs(3600);
    onReward(lessonReward);
    setRewardState("claimed");
  }

  function handleRewardDestination(destination: LessonDestination) {
    if (rewardState !== "claimed") return;
    playStartChime();
    onComplete(destination);
  }

  return (
    <section className="lesson-panel" aria-labelledby="lesson-title">
      <div className="top-bar">
        <span className="pill">第 {lesson.order} 課</span>
        <span className="pill">{completed ? "已進入複習池" : locked ? "尚未解鎖" : "練功中"}</span>
        <button className="lesson-exit-button" onClick={onExit}>
          回課程入口
        </button>
      </div>

      <h2 id="lesson-title" className="lesson-title">
        來認「{lessonLabel(lesson)}」
      </h2>
      <NarrationLine
        text={lessonIntro}
        target="lesson"
        onSpeakStart={setSpeakingTarget}
        onSpeakEnd={(target) => setSpeakingTarget((current) => (current === target ? null : current))}
        className="lesson-copy"
      >
        {lessonIntro}
      </NarrationLine>

      <LessonBlock index={1} title="聽聽看" done={soundUnlocked} locked={locked} active={activeBlock(1)}>
        <div className="target-grid">
          {newChars.map((char) => (
            <button
              key={char}
              className={`target-card target-button${heardChars.has(char) ? " heard" : ""}${
                spotlightChar === char ? " spotlighting" : ""
              }`}
              disabled={locked || Boolean(spotlightChar)}
              onClick={() => handleHearTarget(char)}
            >
              <span className="target-char">{char}</span>
              <Zhuyin value={lesson.zhuyin[char] ?? ""} size="large" />
            </button>
          ))}
        </div>
        {spotlightChar && (
          <div className="char-spotlight" aria-hidden>
            <div className="char-spotlight-card">
              <span className="char-spotlight-hanzi">{spotlightChar}</span>
              <Zhuyin value={lesson.zhuyin[spotlightChar] ?? ""} size="large" />
            </div>
          </div>
        )}
        <NarrationLine
          text={hearPrompt}
          target="stage1"
          onSpeakStart={setSpeakingTarget}
          onSpeakEnd={(target) => setSpeakingTarget((current) => (current === target ? null : current))}
          className="block-note"
        >
          {hearPrompt}
        </NarrationLine>
        {lesson.originHint && <div className="origin-note">{lesson.originHint.text}</div>}
      </LessonBlock>

      {soundUnlocked && activeStage === 1 && (
        <StageAdvancePrompt
          text={GUIDE_TEXT.toStageTwo}
          buttonText="進入第二階段"
          busy={advancingStage === 2}
          active={activeAdvance(2)}
          onSpeakStart={setSpeakingTarget}
          onSpeakEnd={(target) => setSpeakingTarget((current) => (current === target ? null : current))}
          onAdvance={() => handleAdvanceStage(2)}
        />
      )}

      <LessonBlock
        index={2}
        title="找出這個字"
        done={findUnlocked}
        locked={locked || activeStage < 2}
        active={activeBlock(2)}
      >
        {activeStage >= 2 ? (
          <FindManyChallenge
            key={`find-${lesson.id}-${resetVersion}`}
            lesson={lesson}
            zhuyinMap={zhuyinMap}
          disabled={locked || activeStage < 2}
          speakingTarget={speakingTarget}
          onSpeakStart={setSpeakingTarget}
          onSpeakEnd={(target) => setSpeakingTarget((current) => (current === target ? null : current))}
          onComplete={() => setFindUnlocked(true)}
        />
        ) : (
          <p className="block-note">按紅色按鈕後，這裡才會開始。</p>
        )}
      </LessonBlock>

      {findUnlocked && activeStage === 2 && (
        <StageAdvancePrompt
          text={`${GUIDE_TEXT.findComplete} ${GUIDE_TEXT.toStageThree}`}
          buttonText="進入第三階段"
          busy={advancingStage === 3}
          active={activeAdvance(3)}
          onSpeakStart={setSpeakingTarget}
          onSpeakEnd={(target) => setSpeakingTarget((current) => (current === target ? null : current))}
          onAdvance={() => handleAdvanceStage(3)}
        />
      )}

      <LessonBlock
        index={3}
        title="看圖聽句子"
        done={pictureDone}
        locked={locked || activeStage < 3}
        active={activeBlock(3)}
      >
        {activeStage < 3 ? (
          <p className="block-note">按紅色按鈕後，這裡才會開始。</p>
        ) : (
          <PictureSentencePreview
            key={`picture-${lesson.id}-${resetVersion}`}
            lesson={lesson}
            zhuyinMap={zhuyinMap}
            disabled={locked || activeStage < 3}
            done={pictureDone}
            onSpeakStart={setSpeakingTarget}
            onSpeakEnd={(target) => setSpeakingTarget((current) => (current === target ? null : current))}
            onDone={() => setPracticeDoneCount(1)}
          />
        )}
      </LessonBlock>

      {pictureDone && usesSentenceGames && activeStage === 3 && (
        <StageAdvancePrompt
          text={GUIDE_TEXT.toStageFour}
          buttonText="進入第四階段"
          busy={advancingStage === 4}
          active={activeAdvance(4)}
          onSpeakStart={setSpeakingTarget}
          onSpeakEnd={(target) => setSpeakingTarget((current) => (current === target ? null : current))}
          onAdvance={() => handleAdvanceStage(4)}
        />
      )}

      {usesSentenceGames && (
        <LessonBlock
          index={4}
          title="句子遊戲"
          done={gamesDone}
          locked={locked || activeStage < 4}
          active={activeBlock(4)}
        >
          {activeStage < 4 ? (
            <p className="block-note">按紅色按鈕後，這裡才會開始。</p>
          ) : (
            <SentencePracticePreview
              key={`practice-${lesson.id}-${resetVersion}`}
              lesson={lesson}
              zhuyinMap={zhuyinMap}
              disabled={locked || activeStage < 4}
              doneCount={gameDoneCount}
              requiredCount={requiredGameRounds}
              onSpeakStart={setSpeakingTarget}
              onSpeakEnd={(target) => setSpeakingTarget((current) => (current === target ? null : current))}
              onRoundDone={() => setGameDoneCount((count) => Math.min(count + 1, requiredGameRounds))}
            />
          )}
        </LessonBlock>
      )}

      {lessonReady && (
        <RewardPanel
          state={rewardState}
          reward={lessonReward}
          alreadyCompleted={completed}
          hasNext={hasNextLesson}
          onClaim={handleClaimReward}
          onHome={() => handleRewardDestination("home")}
          onNext={() => handleRewardDestination("next")}
          onSpeakStart={setSpeakingTarget}
          onSpeakEnd={(target) => setSpeakingTarget((current) => (current === target ? null : current))}
        />
      )}

      <div className="progress-row">
        <div className="progress-track" aria-label="通關進度">
          <div
            className="progress-fill"
            style={{
              width: `${(progressSteps.filter(Boolean).length / progressSteps.length) * 100}%`,
            }}
          />
        </div>
        <span className="pill">
          {progressSteps.filter(Boolean).length} / {progressSteps.length}
        </span>
      </div>

      <div className="actions" style={{ marginTop: 16 }}>
        <button
          className="btn ghost"
          onClick={() => {
            setHeardChars(new Set());
            setSpotlightChar(null);
            setFindUnlocked(false);
            setPracticeDoneCount(0);
            setGameDoneCount(0);
            setActiveStage(1);
            setAdvancingStage(null);
            setSpeakingTarget(null);
            setRewardState("waiting");
            advanceRunRef.current += 1;
            stopPlayback();
            setResetVersion((version) => version + 1);
          }}
        >
          再玩一次
        </button>
      </div>
    </section>
  );
}

function LessonBlock({
  index,
  title,
  done,
  locked,
  active = false,
  children,
}: {
  index: number;
  title: string;
  done: boolean;
  locked: boolean;
  active?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={`lesson-block${locked ? " locked-block" : ""}${active ? " active-block" : ""}`}>
      <div className="block-heading">
        <span className="lesson-number">{index}</span>
        <h3>{title}</h3>
        {active && <span className="active-listening-pill">聽這裡</span>}
        <span className="pill">{done ? "通關" : locked ? "等待前一段" : "進行中"}</span>
      </div>
      {children}
    </section>
  );
}

function StageAdvancePrompt({
  text,
  buttonText,
  busy,
  active,
  onSpeakStart,
  onSpeakEnd,
  onAdvance,
}: {
  text: string;
  buttonText: string;
  busy: boolean;
  active: boolean;
  onSpeakStart: (target: SpeechTarget) => void;
  onSpeakEnd: (target: SpeechTarget) => void;
  onAdvance: () => void;
}) {
  return (
    <section className={`stage-advance-panel${active ? " active-block" : ""}`} aria-label={buttonText}>
      <NarrationLine
        text={text}
        target={buttonText.includes("第三") ? "advance3" : "advance2"}
        onSpeakStart={onSpeakStart}
        onSpeakEnd={onSpeakEnd}
        className="stage-advance-copy"
      >
        {text}
      </NarrationLine>
      <button className={`btn stage-advance-button${busy ? " starting" : ""}`} onClick={onAdvance}>
        {busy ? "跳過語音" : buttonText}
      </button>
    </section>
  );
}

function RewardPanel({
  state,
  reward,
  alreadyCompleted,
  hasNext,
  onClaim,
  onHome,
  onNext,
  onSpeakStart,
  onSpeakEnd,
}: {
  state: "waiting" | "ready" | "claiming" | "claimed";
  reward: LessonReward;
  alreadyCompleted: boolean;
  hasNext: boolean;
  onClaim: () => void;
  onHome: () => void;
  onNext: () => void;
  onSpeakStart: (target: SpeechTarget) => void;
  onSpeakEnd: (target: SpeechTarget) => void;
}) {
  const claimed = state === "claimed";
  const message = alreadyCompleted
    ? "這一課已經練完了。要下一課，按紅色按鈕；要回入口，按白色按鈕。"
    : state === "ready"
      ? GUIDE_TEXT.rewardReady
      : GUIDE_TEXT.rewardWon;
  const coinCount = useRewardCount(reward.coins, state !== "ready");
  const starCount = useRewardCount(reward.stars, state !== "ready");
  return (
    <section className={`reward-panel active-block reward-${state}`} aria-label="領取獎勵">
      {!alreadyCompleted && state === "claiming" && (
        <div className="reward-burst" aria-hidden>
          <span>🪙</span>
          <span>⭐</span>
          <span>🪙</span>
          <span>⭐</span>
          <span>🪙</span>
          <span>⭐</span>
        </div>
      )}
      <NarrationLine
        text={message}
        target="stage3"
        onSpeakStart={onSpeakStart}
        onSpeakEnd={onSpeakEnd}
        className="reward-copy"
      >
        {message}
      </NarrationLine>

      {!alreadyCompleted && <div className="reward-animation" aria-label="本課獎勵">
        <div className="reward-badge coin">
          <span className="reward-icon" aria-hidden>
            🪙
          </span>
          <strong className="reward-number">+{coinCount}</strong>
          <small>金幣</small>
        </div>
        <div className="reward-badge star">
          <span className="reward-icon" aria-hidden>
            ⭐
          </span>
          <strong className="reward-number">+{starCount}</strong>
          <small>星星</small>
        </div>
      </div>}

      {!claimed ? (
        <button className={`btn reward-claim-button${state === "claiming" ? " starting" : ""}`} disabled={state === "claiming"} onClick={onClaim}>
          {state === "claiming" ? "領獎中" : "領取獎勵"}
        </button>
      ) : (
        <div className="reward-actions">
          <button className="btn reward-next-button" disabled={!hasNext} onClick={onNext}>
            {hasNext ? "下一課" : "沒有下一課"}
          </button>
          <button className="btn reward-home-button" onClick={onHome}>
            回首頁休息
          </button>
        </div>
      )}
    </section>
  );
}

function useRewardCount(target: number, active: boolean) {
  const frameRef = useRef(0);
  const startedRef = useRef(false);
  const [displayValue, setDisplayValue] = useState(target);

  useEffect(() => {
    window.cancelAnimationFrame(frameRef.current);
    if (!active) {
      startedRef.current = false;
      setDisplayValue(target);
      return;
    }
    if (startedRef.current) {
      setDisplayValue((value) => Math.min(value, target));
      return;
    }

    startedRef.current = true;
    const durationMs = 3200;
    const startTime = performance.now();
    setDisplayValue(0);

    function tick(now: number) {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const steppedProgress = Math.floor(progress * target) / Math.max(target, 1);
      const eased = 1 - Math.pow(1 - steppedProgress, 2.4);
      const nextValue = Math.min(target, Math.max(0, Math.round(target * eased)));
      setDisplayValue(nextValue);
      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(tick);
      } else {
        setDisplayValue(target);
      }
    }

    frameRef.current = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameRef.current);
  }, [active, target]);

  return displayValue;
}

function FloatingPlaybackBar({
  lessonOrder,
  playbackState,
  onExitLesson,
  onTogglePlayback,
}: {
  lessonOrder: number | null;
  playbackState: PlaybackStatus;
  onExitLesson: () => void;
  onTogglePlayback: () => void;
}) {
  if (!lessonOrder && !playbackState.playing) return null;
  return (
    <div className="floating-playback-wrap" aria-live="polite">
      <div className={`floating-playback-bar${playbackState.playing ? " playing" : ""}`}>
        <div className="playback-status">
          <span className="playback-dot" aria-hidden />
          <strong>{playbackState.playing ? (playbackState.paused ? "語音暫停中" : "語音播放中") : `第 ${lessonOrder} 課練習中`}</strong>
        </div>
        <div className="playback-actions">
          {playbackState.playing && (
            <button className="playback-control-button" onClick={onTogglePlayback}>
              {playbackState.paused ? "▶ 繼續" : "⏸ 暫停"}
            </button>
          )}
          {lessonOrder && (
            <button className="playback-exit-button" onClick={onExitLesson}>
              回入口
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function FindManyChallenge({
  lesson,
  zhuyinMap,
  disabled,
  speakingTarget,
  onSpeakStart,
  onSpeakEnd,
  onComplete,
}: {
  lesson: Lesson;
  zhuyinMap: Map<string, string>;
  disabled: boolean;
  speakingTarget: SpeechTarget;
  onSpeakStart: (target: SpeechTarget) => void;
  onSpeakEnd: (target: SpeechTarget) => void;
  onComplete: () => void;
}) {
  const items = useMemo(() => makeFindChallenge(lesson), [lesson]);
  const [foundIds, setFoundIds] = useState<Set<string>>(new Set());
  const [collectingId, setCollectingId] = useState<string | null>(null);
  const [missId, setMissId] = useState<string | null>(null);
  const targets = lessonChars(lesson);
  const targetTotal = items.filter((item) => targets.includes(item.char)).length;
  const foundTotal = [...foundIds].filter((id) => {
    const item = items.find((candidate) => candidate.id === id);
    return item ? targets.includes(item.char) : false;
  }).length;
  const foundItems = items.filter((item) => foundIds.has(item.id) && targets.includes(item.char));
  const visibleItems = items.filter((item) => !foundIds.has(item.id));

  async function handleTap(item: FindItem) {
    if (disabled || collectingId || foundIds.has(item.id)) return;
    if (!targets.includes(item.char)) {
      setMissId(item.id);
      playMissChime();
      onSpeakStart("stage2");
      void speakGuide(GUIDE_TEXT.findMiss).then(() => onSpeakEnd("stage2"));
      window.setTimeout(() => setMissId((current) => (current === item.id ? null : current)), 560);
      return;
    }
    setCollectingId(item.id);
    playFoundChime();
    await Promise.all([playLessonChar(lesson, item.char), waitMs(520)]);
    setFoundIds((prev) => {
      const next = new Set(prev);
      next.add(item.id);
      const completedTotal = [...next].filter((id) => {
        const candidate = items.find((item) => item.id === id);
        return candidate ? targets.includes(candidate.char) : false;
      }).length;
      if (completedTotal >= targetTotal) onComplete();
      return next;
    });
    setCollectingId(null);
  }

  return (
    <>
      <NarrationLine
        text={GUIDE_TEXT.blockFind}
        target="stage2"
        onSpeakStart={onSpeakStart}
        onSpeakEnd={onSpeakEnd}
        className="block-note"
      >
        {GUIDE_TEXT.blockFind}
      </NarrationLine>
      {speakingTarget === "stage2" && <p className="active-work-note">現在看這一區。</p>}
      <div className="find-grid">
        {visibleItems.map((item) => (
          <button
            key={item.id}
            className={`find-token${collectingId === item.id ? " collecting" : ""}${
              missId === item.id ? " miss" : ""
            }`}
            disabled={disabled || Boolean(collectingId)}
            onClick={() => handleTap(item)}
          >
            <span className="hanzi">{item.char}</span>
            <Zhuyin value={zhuyinMap.get(item.char) ?? DISTRACTOR_ZHUYIN[item.char] ?? ""} />
          </button>
        ))}
      </div>
      <div className="found-collection" aria-label="找到的字">
        <strong>找到的字</strong>
        <div className="found-row">
          {foundItems.length === 0 ? (
            <span className="collection-empty">找到的字會跳到這裡。</span>
          ) : (
            foundItems.map((item) => (
              <span className="found-card" key={`found-${item.id}`}>
                <span className="hanzi">{item.char}</span>
                <span className="found-check" aria-hidden>✓</span>
              </span>
            ))
          )}
        </div>
      </div>
      {foundTotal === targetTotal && <p className="success">全部找到了。</p>}
      <p className="block-note">
        已找到 {foundTotal} / {targetTotal}
      </p>
    </>
  );
}

interface FindItem {
  id: string;
  char: string;
}

function makeFindChallenge(lesson: Lesson): FindItem[] {
  const targets = lessonChars(lesson);
  const targetCopies = targets.length === 1 ? [targets[0], targets[0], targets[0]] : targets;
  const distractors = uniqueChars(
    hanChars(lesson.sentences.map((sentence) => sentence.text).join("")).filter((char) => !targets.includes(char)),
  ).slice(0, 3);
  const fallback = ["小", "山", "口", "手", "上", "下", "水", "火"].filter((char) => !targets.includes(char));
  const pool = uniqueChars([...distractors, ...fallback]).slice(0, Math.max(2, 6 - targetCopies.length));
  const chars =
    targets.length === 1
      ? spreadSingleTargetCards(targetCopies[0], pool)
      : shuffleItems([...targetCopies, ...pool]).slice(0, 6);
  return chars.map((char, index) => ({ id: `${char}-${index}`, char }));
}

function spreadSingleTargetCards(target: string, distractors: string[]): string[] {
  const layouts = [
    [0, 3, 5],
    [1, 2, 4],
    [0, 2, 5],
    [1, 3, 4],
  ];
  const targetPositions = layouts[Math.floor(Math.random() * layouts.length)];
  const cards: Array<string | null> = Array.from({ length: 6 }, () => null);
  for (const position of targetPositions) cards[position] = target;
  const shuffledDistractors = shuffleItems(distractors).slice(0, 3);
  let distractorIndex = 0;
  return cards.map((char) => char ?? shuffledDistractors[distractorIndex++]);
}

function uniqueChars(chars: string[]): string[] {
  return [...new Set(chars)];
}

function shuffleItems<T>(items: T[]): T[] {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function PictureSentencePreview({
  lesson,
  zhuyinMap,
  disabled,
  done,
  onSpeakStart,
  onSpeakEnd,
  onDone,
}: {
  lesson: Lesson;
  zhuyinMap: Map<string, string>;
  disabled: boolean;
  done: boolean;
  onSpeakStart: (target: SpeechTarget) => void;
  onSpeakEnd: (target: SpeechTarget) => void;
  onDone: () => void;
}) {
  const [playingSentenceId, setPlayingSentenceId] = useState<string | null>(null);
  const [activeCharIndex, setActiveCharIndex] = useState<number | null>(null);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [completedSentenceIds, setCompletedSentenceIds] = useState<Set<string>>(new Set());
  const allPicturesDone = completedSentenceIds.size >= lesson.sentences.length;

  useEffect(() => {
    if (!disabled && !done && allPicturesDone) onDone();
  }, [allPicturesDone, disabled, done, onDone]);

  function handleSentenceTap(sentence: LessonSentence, index: number) {
    const canPlayCompleted = completedSentenceIds.has(sentence.id);
    const canPlayCurrent = index === currentSentenceIndex;
    if (disabled || (!canPlayCurrent && !canPlayCompleted) || playingSentenceId) return;
    void playSentence(sentence, {
      onTime: (elapsedMs) => {
        setPlayingSentenceId(sentence.id);
        setActiveCharIndex(activeTimingIndex(sentence, elapsedMs));
      },
      onEnded: () => {
        setActiveCharIndex(null);
        setPlayingSentenceId(null);
        setCompletedSentenceIds((prev) => {
          const next = new Set(prev);
          next.add(sentence.id);
          return next;
        });
        if (canPlayCurrent) setCurrentSentenceIndex((current) => Math.min(current + 1, lesson.sentences.length));
      },
      onError: () => {
        setActiveCharIndex(null);
        setPlayingSentenceId(null);
      },
    });
  }

  return (
    <>
      <NarrationLine
        text={GUIDE_TEXT.blockPicture}
        target="stage3"
        onSpeakStart={onSpeakStart}
        onSpeakEnd={onSpeakEnd}
        className="block-note"
      >
        {GUIDE_TEXT.blockPicture}
      </NarrationLine>
      <div className="picture-sentence-list">
        {lesson.sentences.map((sentence, index) => {
          const isCurrent = index === currentSentenceIndex;
          const isCompleted = completedSentenceIds.has(sentence.id);
          return (
          <button
            className={`picture-sentence-card${isCurrent ? " current-picture" : ""}${
              isCompleted ? " completed-picture" : ""
            }`}
            key={sentence.id}
            disabled={disabled || (!isCurrent && !isCompleted) || Boolean(playingSentenceId)}
            onClick={() => handleSentenceTap(sentence, index)}
          >
            {sentence.imageSrc ? (
              <img src={assetUrl(sentence.imageSrc)} alt="" />
            ) : (
              <div className="image-placeholder" aria-label="圖片待製作">
                <span>圖片快來了</span>
              </div>
            )}
            <SentenceCard
              sentence={sentence}
              zhuyinMap={zhuyinMap}
              activeCharIndex={playingSentenceId === sentence.id ? activeCharIndex : null}
            />
          </button>
          );
        })}
      </div>
      {allPicturesDone && <p className="success">句子都聽完了。</p>}
    </>
  );
}

function playSentence(sentence: LessonSentence, options?: AudioPlayOptions) {
  if (sentence.audio?.src) {
    return playAudioSrc(sentence.audio.src, options);
  }
  let frame = 0;
  const startTime = performance.now();
  const tick = () => {
    options?.onTime?.(performance.now() - startTime);
    frame = window.requestAnimationFrame(tick);
  };
  options?.onTime?.(0);
  frame = window.requestAnimationFrame(tick);
  return playSpokenText(sentence.spokenText).then(() => {
    window.cancelAnimationFrame(frame);
    options?.onEnded?.();
  });
}

function playLessonChar(lesson: Lesson, char: string) {
  const src = lesson.charAudio?.[char];
  if (src) {
    return playAudioSrc(src);
  }
  return playSpokenText(char);
}

async function playLessonCharForTap(lesson: Lesson, char: string) {
  const src = lesson.charAudio?.[char];
  if (!src) return playSpokenText(char);
  const result = await playAudioSrc(src);
  if (result === "error") {
    await playSpokenText(char);
  }
}

function getCachedAudio(src: string) {
  const url = assetUrl(src);
  const cached = audioCache.get(url);
  if (cached) return cached;
  const audio = new Audio(url);
  audio.preload = "auto";
  audio.load();
  audioCache.set(url, audio);
  return audio;
}

function preloadAudioSrc(src?: string | null) {
  if (!src) return;
  getCachedAudio(src);
}

function preloadLessonAudio(lesson: Lesson) {
  for (const char of lesson.newChars) preloadAudioSrc(lesson.charAudio?.[char]);
  for (const sentence of lesson.sentences) preloadAudioSrc(sentence.audio?.src);
  for (const game of lesson.sentenceGames ?? []) {
    for (const option of game.options ?? []) preloadAudioSrc(option.audioSrc);
  }
}

function currentPlaybackState(): PlaybackStatus {
  const hasAudio = Boolean(activeAudio && !activeAudio.ended);
  const audioPaused = Boolean(activeAudio && activeAudio.paused && !activeAudio.ended);
  const hasTts = Boolean(activeTtsFinish);
  const ttsPaused = hasTts && ttsPausedByApp;
  return {
    playing: hasAudio || hasTts,
    paused: audioPaused || ttsPaused || ttsPausedByApp,
  };
}

function emitPlaybackState() {
  const state = currentPlaybackState();
  playbackListeners.forEach((listener) => listener(state));
}

function usePlaybackState() {
  const [state, setState] = useState<PlaybackStatus>(() => currentPlaybackState());

  useEffect(() => {
    playbackListeners.add(setState);
    setState(currentPlaybackState());
    return () => {
      playbackListeners.delete(setState);
    };
  }, []);

  return state;
}

function pausePlayback() {
  let changed = false;
  if (activeAudio && !activeAudio.paused && !activeAudio.ended) {
    activeAudio.pause();
    stopAudioFrame();
    changed = true;
  }
  if ("speechSynthesis" in window && window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
    window.speechSynthesis.pause();
    ttsPausedByApp = true;
    changed = true;
  }
  if (changed) emitPlaybackState();
}

function resumePlayback() {
  let changed = false;
  if (activeAudio && activeAudio.paused && !activeAudio.ended) {
    void activeAudio.play().then(() => {
      activeAudioTick?.();
      emitPlaybackState();
    });
    changed = true;
  }
  if ("speechSynthesis" in window && activeTtsFinish) {
    window.speechSynthesis.resume();
    ttsPausedByApp = false;
    changed = true;
    window.setTimeout(() => {
      if (!activeTtsFinish || !("speechSynthesis" in window)) return;
      window.speechSynthesis.resume();
      emitPlaybackState();
    }, 120);
  } else if (ttsPausedByApp) {
    ttsPausedByApp = false;
    changed = true;
  }
  if (changed) emitPlaybackState();
}

function finishActiveAudio(kind: "ended" | "error" = "error") {
  const audio = activeAudio;
  const finishAudio = activeAudioFinish;
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  finishAudio?.(kind);
  activeAudio = null;
  activeAudioTick = null;
  activeAudioFinish = null;
  stopAudioFrame();
}

function finishActiveTts() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  activeTtsFinish?.();
  activeTtsFinish = null;
  ttsPausedByApp = false;
}

function stopPlayback() {
  finishActiveAudio("error");
  finishActiveTts();
  emitPlaybackState();
}

function stopAudioFrame() {
  if (!activeAudioFrame) return;
  window.cancelAnimationFrame(activeAudioFrame);
  activeAudioFrame = 0;
}

function playAudioSrc(src: string, options: AudioPlayOptions = {}) {
  const audio = getCachedAudio(src);
  finishActiveTts();
  if (activeAudio) finishActiveAudio("error");
  stopAudioFrame();
  activeAudio = audio;
  audio.pause();
  audio.currentTime = 0;
  return new Promise<"ended" | "error">((resolve) => {
    let settled = false;
    let fallbackTimer = 0;
    const finish = (kind: "ended" | "error") => {
      if (settled) return;
      settled = true;
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
      stopAudioFrame();
      if (activeAudio === audio) activeAudio = null;
      if (activeAudioFinish === finish) activeAudioFinish = null;
      if (activeAudioTick === tick) activeAudioTick = null;
      emitPlaybackState();
      if (kind === "ended") options.onEnded?.();
      if (kind === "error") options.onError?.();
      resolve(kind);
    };

    audio.onended = () => finish("ended");
    audio.onerror = () => finish("error");

    const tick = () => {
      options.onTime?.(audio.currentTime * 1000);
      if (!audio.paused && !audio.ended) activeAudioFrame = window.requestAnimationFrame(tick);
    };

    activeAudioFinish = finish;
    activeAudioTick = tick;
    options.onTime?.(0);
    const start = (retried = false) => {
      void audio.play().then(() => {
        emitPlaybackState();
        tick();
        const durationMs = Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration * 1000 : 5000;
        fallbackTimer = window.setTimeout(() => finish("ended"), durationMs + 1000);
      }).catch(() => {
        if (!retried && activeAudio === audio) {
          window.setTimeout(() => {
            if (activeAudio !== audio || settled) return;
            audio.currentTime = 0;
            start(true);
          }, 120);
          return;
        }
        finish("error");
      });
    };
    start();
  });
}

function playAudioRange(src: string, startMs: number, endMs: number, options: AudioPlayOptions = {}) {
  if (endMs <= startMs + 30) return Promise.resolve();
  const audio = getCachedAudio(src);
  finishActiveTts();
  if (activeAudio) finishActiveAudio("error");
  stopAudioFrame();
  activeAudio = audio;
  audio.pause();
  audio.currentTime = startMs / 1000;
  return new Promise<void>((resolve) => {
    let settled = false;
    let fallbackTimer = 0;
    const finish = (kind: "ended" | "error") => {
      if (settled) return;
      settled = true;
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
      audio.pause();
      stopAudioFrame();
      if (activeAudio === audio) activeAudio = null;
      if (activeAudioFinish === finish) activeAudioFinish = null;
      if (activeAudioTick === tick) activeAudioTick = null;
      emitPlaybackState();
      if (kind === "ended") options.onEnded?.();
      if (kind === "error") options.onError?.();
      resolve();
    };

    audio.onended = () => finish("ended");
    audio.onerror = () => finish("error");

    const tick = () => {
      const elapsedMs = audio.currentTime * 1000;
      options.onTime?.(elapsedMs);
      if (elapsedMs >= endMs) {
        finish("ended");
        return;
      }
      if (!audio.paused && !audio.ended) activeAudioFrame = window.requestAnimationFrame(tick);
    };

    activeAudioFinish = finish;
    activeAudioTick = tick;
    options.onTime?.(startMs);
    void audio
      .play()
      .then(() => {
        emitPlaybackState();
        tick();
        fallbackTimer = window.setTimeout(() => finish("ended"), endMs - startMs + 1000);
      })
      .catch(() => finish("error"));
  });
}

function playRecordedAudioUrl(url: string) {
  return new Promise<void>((resolve) => {
    const audio = new Audio(url);
    audio.onended = () => resolve();
    audio.onerror = () => resolve();
    audio.play().catch(() => resolve());
  });
}

function waitMs(ms: number) {
  return new Promise<void>((resolve) => window.setTimeout(resolve, ms));
}

function activeTimingIndex(sentence: LessonSentence, elapsedMs: number) {
  const timings = sentence.audio?.charTimings ?? [];
  if (timings.length === 0) {
    const hanCount = hanChars(sentence.text).length;
    if (hanCount === 0) return null;
    const estimatedDuration = Math.max(900, hanCount * 520);
    return Math.min(Math.floor((elapsedMs / estimatedDuration) * hanCount), hanCount - 1);
  }
  const active = timings.find((timing) => elapsedMs >= timing.startMs && elapsedMs <= timing.endMs);
  return active?.charIndex ?? null;
}

function playFoundChime() {
  playToneSequence([
    { frequency: 660, endFrequency: 990, duration: 0.18, gain: 0.06 },
  ]);
}

function playMissChime() {
  playToneSequence([
    { frequency: 260, endFrequency: 220, duration: 0.16, gain: 0.045 },
  ]);
}

async function playRecordingReadyDing() {
  const context = ensureToneAudioContext();
  if (context?.state === "suspended") {
    try {
      await context.resume();
    } catch {
      // Keep recording usable even if the browser refuses the Web Audio cue.
    }
  }
  if (navigator.vibrate) navigator.vibrate([70, 35, 110]);
  playToneSequence([
    { frequency: 784, endFrequency: 988, duration: 0.36, gain: 0.2 },
    { frequency: 988, endFrequency: 1318, duration: 0.46, gain: 0.22, delay: 0.38 },
    { frequency: 1568, endFrequency: 1568, duration: 0.34, gain: 0.12, delay: 0.48 },
  ]);
  await waitMs(980);
}

function playCelebrateChime() {
  playToneSequence([
    { frequency: 523, endFrequency: 659, duration: 0.1, gain: 0.07 },
    { frequency: 659, endFrequency: 784, duration: 0.12, gain: 0.075, delay: 0.08 },
    { frequency: 784, endFrequency: 1046, duration: 0.18, gain: 0.08, delay: 0.18 },
  ]);
}

function playStartChime() {
  playToneSequence([
    { frequency: 523, endFrequency: 659, duration: 0.11, gain: 0.07 },
    { frequency: 784, endFrequency: 988, duration: 0.16, gain: 0.08, delay: 0.08 },
  ]);
}

function playRewardChime() {
  playToneSequence([
    { frequency: 523, endFrequency: 784, duration: 0.11, gain: 0.075 },
    { frequency: 659, endFrequency: 988, duration: 0.11, gain: 0.075, delay: 0.1 },
    { frequency: 784, endFrequency: 1175, duration: 0.12, gain: 0.08, delay: 0.2 },
    { frequency: 988, endFrequency: 1568, duration: 0.16, gain: 0.085, delay: 0.32 },
    { frequency: 1318, endFrequency: 1760, duration: 0.2, gain: 0.075, delay: 0.5 },
  ]);
  for (let index = 0; index < 10; index += 1) {
    window.setTimeout(() => {
      playToneSequence([
        {
          frequency: 1046 + index * 58,
          endFrequency: 1568 + index * 46,
          duration: 0.08,
          gain: 0.045,
        },
        {
          frequency: 784 + index * 34,
          endFrequency: 1175 + index * 42,
          duration: 0.1,
          gain: 0.035,
          delay: 0.04,
        },
      ]);
    }, 620 + index * 180);
  }
  window.setTimeout(() => {
    playToneSequence([
      { frequency: 1046, endFrequency: 1568, duration: 0.16, gain: 0.075 },
      { frequency: 1318, endFrequency: 1975, duration: 0.18, gain: 0.08, delay: 0.12 },
      { frequency: 1568, endFrequency: 2093, duration: 0.24, gain: 0.075, delay: 0.28 },
    ]);
  }, 2600);
}

function playToneSequence(
  notes: Array<{ frequency: number; endFrequency: number; duration: number; gain: number; delay?: number }>,
) {
  const context = ensureToneAudioContext();
  if (!context) return;
  for (const note of notes) {
    const startTime = context.currentTime + (note.delay ?? 0);
    const gain = context.createGain();
    const oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(note.frequency, startTime);
    oscillator.frequency.exponentialRampToValueAtTime(note.endFrequency, startTime + note.duration * 0.72);
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(note.gain, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + note.duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(startTime);
    oscillator.stop(startTime + note.duration + 0.02);
  }
}

function ensureToneAudioContext() {
  const audioWindow = window as AudioWindow;
  const AudioContextClass = audioWindow.AudioContext || audioWindow.webkitAudioContext;
  if (!AudioContextClass) return null;
  toneAudioContext ??= new AudioContextClass();
  if (toneAudioContext.state === "suspended") void toneAudioContext.resume();
  return toneAudioContext;
}

function SentencePracticePreview({
  lesson,
  zhuyinMap,
  disabled,
  doneCount,
  requiredCount,
  onSpeakStart,
  onSpeakEnd,
  onRoundDone,
}: {
  lesson: Lesson;
  zhuyinMap: Map<string, string>;
  disabled: boolean;
  doneCount: number;
  requiredCount: number;
  onSpeakStart: (target: SpeechTarget) => void;
  onSpeakEnd: (target: SpeechTarget) => void;
  onRoundDone: () => void;
}) {
  const games = lesson.sentenceGames ?? [];
  const gameIndex = Math.min(doneCount, Math.max(0, requiredCount - 1));
  const game = games[gameIndex] ?? games[0];
  const sentence = game ? lesson.sentences.find((candidate) => candidate.id === game.sentenceId) ?? lesson.sentences[0] : lesson.sentences[0];
  const [pickedOptionIds, setPickedOptionIds] = useState<string[]>([]);
  const [roundComplete, setRoundComplete] = useState(false);
  const [completedGameId, setCompletedGameId] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [teachPhase, setTeachPhase] = useState<TeachCharacterPhase>("reading");
  const [activeGameCharIndex, setActiveGameCharIndex] = useState<number | null>(null);
  const [askingGameCharIndex, setAskingGameCharIndex] = useState<number | null>(null);
  const [recordingGameCharIndex, setRecordingGameCharIndex] = useState<number | null>(null);
  const [floatingRecordChar, setFloatingRecordChar] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const guideRunRef = useRef(0);
  const pressStartRef = useRef<number | null>(null);
  const releasedDuringPrimeRef = useRef(false);
  const recordingStreamRef = useRef<MediaStream | null>(null);
  const onSpeakStartRef = useRef(onSpeakStart);
  const onSpeakEndRef = useRef(onSpeakEnd);
  const han = sentence ? hanChars(sentence.text) : [];
  const targetIndex = game ? Math.max(0, han.findIndex((char) => char === game.targetChar)) : 0;
  const gameGuide = game && sentence ? gameGuideText(game, teachPhase) : "";
  const shuffledGameOptions = useMemo(() => {
    if (!game?.options?.length) return [];
    const shuffled = stableShuffledOptions(game.options, `${lesson.id}:${game.id}:${game.sentenceId}`);
    if (game.type === "choose-pronunciation" && shuffled[0]?.correct && shuffled.length > 1) {
      return [...shuffled.slice(1), shuffled[0]];
    }
    return shuffled;
  }, [game?.id, game?.options, game?.sentenceId, game?.type, lesson.id]);

  const speakStageFour = useCallback(async (text: string) => {
    onSpeakStartRef.current("stage4");
    await speakGuide(text);
    onSpeakEndRef.current("stage4");
  }, []);

  useEffect(() => {
    onSpeakStartRef.current = onSpeakStart;
    onSpeakEndRef.current = onSpeakEnd;
  }, [onSpeakEnd, onSpeakStart]);

  useEffect(() => {
    setPickedOptionIds([]);
    setRoundComplete(false);
    setCompletedGameId(null);
    setRecording(false);
    setTeachPhase("reading");
    setActiveGameCharIndex(null);
    setAskingGameCharIndex(null);
    setRecordingGameCharIndex(null);
    setFloatingRecordChar(null);
    setRecordedAudioUrl((current) => {
      if (current) URL.revokeObjectURL(current);
      return null;
    });
    mediaRecorderRef.current = null;
    recordedChunksRef.current = [];
    recordingStreamRef.current?.getTracks().forEach((track) => track.stop());
    recordingStreamRef.current = null;
    guideRunRef.current += 1;
    pressStartRef.current = null;
    releasedDuringPrimeRef.current = false;
  }, [game?.id]);

  useEffect(() => () => {
    if (recordedAudioUrl) URL.revokeObjectURL(recordedAudioUrl);
  }, [recordedAudioUrl]);

  useEffect(() => {
    if (disabled || !game || !sentence || doneCount >= requiredCount) return;
    const runId = guideRunRef.current + 1;
    guideRunRef.current = runId;
    setActiveGameCharIndex(null);
    setAskingGameCharIndex(null);
    setRecordingGameCharIndex(null);

    if (game.type === "teach-character") {
      void runTeachCharacterIntro(runId);
      return;
    }

    void runHelperIntro(runId);
    // This effect intentionally starts a fresh helper sequence only when the
    // round identity changes. The helper functions read current refs/state
    // and should not restart just because a phase label or callback re-rendered.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, doneCount, game, requiredCount, sentence]);

  const doneAfterThisRound = doneCount + 1 >= requiredCount;
  const isCurrentRoundComplete = Boolean(game && roundComplete && completedGameId === game.id);

  useEffect(() => {
    if (!isCurrentRoundComplete || disabled) return;
    void speakStageFour(roundCompletionText(doneAfterThisRound));
  }, [disabled, doneAfterThisRound, isCurrentRoundComplete, speakStageFour]);

  if (!game || !sentence) {
    return <p className="block-note">這一課還沒有設定句子遊戲。</p>;
  }

  const missingIndexes = game.missingIndexes?.length ? game.missingIndexes : [targetIndex];
  const currentPickedOptions = pickedOptionIds
    .map((id) => game.options?.find((option) => option.id === id))
    .filter((option): option is SentenceGameOption => Boolean(option));
  const filledBlanks = new Map<number, string>();
  missingIndexes.forEach((index, slotIndex) => {
    filledBlanks.set(index, currentPickedOptions[slotIndex]?.text ?? "");
  });

  function completeRound() {
    if (isCurrentRoundComplete || disabled || doneCount >= requiredCount) return;
    setCompletedGameId(game.id);
    setRoundComplete(true);
    playCelebrateChime();
  }

  async function runHelperIntro(runId: number) {
    if (!game || !sentence) return;
    await speakStageFour(gameIntroText(game));
    if (guideRunRef.current !== runId) return;
    if (game.type === "find-character" || game.type === "missing-character" || game.type === "partial-order") {
      await playSentence(sentence, {
        onTime: (elapsedMs) => setActiveGameCharIndex(activeTimingIndex(sentence, elapsedMs)),
        onEnded: () => setActiveGameCharIndex(null),
        onError: () => setActiveGameCharIndex(null),
      });
      if (guideRunRef.current !== runId) return;
    }
    setActiveGameCharIndex(null);
    await speakStageFour(gameGuideText(game, teachPhase));
  }

  async function runTeachCharacterIntro(runId: number) {
    if (!game || !sentence) return;
    const timing = sentence.audio?.charTimings.find((item) => item.charIndex === targetIndex);
    setTeachPhase("reading");
    await speakStageFour("小兔子說，我要來念念看這句話。");
    if (guideRunRef.current !== runId) return;
    if (sentence.audio?.src && timing) {
      await playAudioRange(sentence.audio.src, 0, timing.startMs, {
        onTime: (elapsedMs) => setActiveGameCharIndex(activeTimingIndex(sentence, Math.min(elapsedMs, timing.startMs - 1))),
      });
    } else {
      await playSpokenText(han.slice(0, targetIndex).join(""));
    }
    if (guideRunRef.current !== runId) return;
    await waitMs(520);
    if (guideRunRef.current !== runId) return;
    setActiveGameCharIndex(null);
    setAskingGameCharIndex(targetIndex);
    setTeachPhase("asking");
    await speakStageFour("哇！這個字我不會念，請教我念。");
    if (guideRunRef.current !== runId) return;
    await speakStageFour("請按住這個字，等叮一聲之後，大聲念出來。");
    if (guideRunRef.current !== runId) return;
    setTeachPhase("ready");
  }

  function replayInstruction() {
    if (disabled) return;
    guideRunRef.current += 1;
    void speakStageFour(isCurrentRoundComplete ? roundCompletionText(doneAfterThisRound) : gameGuideText(game, teachPhase));
  }

  async function replayCurrentSentence() {
    if (disabled || !sentence) return;
    const runId = guideRunRef.current + 1;
    guideRunRef.current = runId;
    setActiveGameCharIndex(null);
    onSpeakStartRef.current("stage4");
    try {
      await playSentence(sentence, {
        onTime: (elapsedMs) => {
          if (guideRunRef.current === runId) setActiveGameCharIndex(activeTimingIndex(sentence, elapsedMs));
        },
        onEnded: () => {
          if (guideRunRef.current === runId) setActiveGameCharIndex(null);
        },
        onError: () => {
          if (guideRunRef.current === runId) setActiveGameCharIndex(null);
        },
      });
    } finally {
      if (guideRunRef.current === runId) {
        setActiveGameCharIndex(null);
        onSpeakEndRef.current("stage4");
      }
    }
  }

  async function handleFindChar(index: number) {
    if (index !== targetIndex) {
      playMissChime();
      void speakStageFour("再找找看。");
      return;
    }
    await speakStageFour(stageFourPraise("找到了", doneCount));
    completeRound();
  }

  async function handleMissingOption(option: SentenceGameOption) {
    if (!option.correct) {
      playMissChime();
      void speakStageFour("不是這個，再找找看。");
      return;
    }
    setPickedOptionIds([option.id]);
    await speakStageFour(stageFourPraise("找回來了", doneCount));
    completeRound();
  }

  async function handleOrderOption(option: SentenceGameOption) {
    if (pickedOptionIds.includes(option.id)) return;
    const expectedText = han[missingIndexes[pickedOptionIds.length]];
    if (option.text !== expectedText) {
      playMissChime();
      setPickedOptionIds([]);
      void speakStageFour("順序不對，再排一次。");
      return;
    }
    const nextPicked = [...pickedOptionIds, option.id];
    setPickedOptionIds(nextPicked);
    if (nextPicked.length >= missingIndexes.length) {
      await speakStageFour(stageFourPraise("排好了", doneCount));
      completeRound();
    }
  }

  async function handleChoiceAudio(option: SentenceGameOption, readerName: string) {
    await speakStageFour(`${readerName}念。`);
    if (option.audioSrc) {
      await playAudioSrc(option.audioSrc);
    } else {
      await playSpokenText(option.text);
    }
  }

  async function handlePronunciationChoice(option: SentenceGameOption) {
    if (!option.correct) {
      playMissChime();
      void speakStageFour("好像不對，再聽聽看。");
      return;
    }
    await speakStageFour(stageFourPraise("對了", doneCount));
    completeRound();
  }

  async function startRecordingAfterDing() {
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      await speakStageFour("這個瀏覽器不能錄音，小兔子先謝謝你。");
      completeRound();
      return;
    }
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      await speakStageFour("小兔子聽不到麥克風。請打開麥克風，再幫小兔子一次。");
      completeRound();
      return;
    }
    recordedChunksRef.current = [];
    recordingStreamRef.current = stream;
    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;
    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) recordedChunksRef.current.push(event.data);
    };
    recorder.onstop = () => {
      stream.getTracks().forEach((track) => track.stop());
      recordingStreamRef.current = null;
      const blob = new Blob(recordedChunksRef.current, { type: recorder.mimeType || "audio/webm" });
      const url = URL.createObjectURL(blob);
      setRecordedAudioUrl((current) => {
        if (current) URL.revokeObjectURL(current);
        return url;
      });
      setRecording(false);
      setRecordingGameCharIndex(null);
      setFloatingRecordChar(null);
      const heldMs = pressStartRef.current === null ? 0 : Date.now() - pressStartRef.current;
      pressStartRef.current = null;
      if (heldMs < 500) {
        URL.revokeObjectURL(url);
        setRecordedAudioUrl(null);
        void speakStageFour("要按久一點，再念一次給小兔子聽。");
        setTeachPhase("ready");
        return;
      }
      void handleTeachRecordingDone(url);
    };
    await playRecordingReadyDing();
    if (releasedDuringPrimeRef.current) {
      stream.getTracks().forEach((track) => track.stop());
      recordingStreamRef.current = null;
      setFloatingRecordChar(null);
      setTeachPhase("ready");
      await speakStageFour("還沒開始錄音喔。要按住等叮一聲，再大聲念給小兔子聽。");
      return;
    }
    setRecording(true);
    setTeachPhase("recording");
    setRecordingGameCharIndex(targetIndex);
    setFloatingRecordChar(game.targetChar);
    pressStartRef.current = Date.now();
    recorder.start();
  }

  function stopRecording() {
    const recorder = mediaRecorderRef.current;
    if (!recorder || recorder.state === "inactive") return;
    recorder.stop();
  }

  async function handleTeachPressStart(index: number) {
    if (disabled || isCurrentRoundComplete || game.type !== "teach-character") return;
    if (index !== targetIndex || teachPhase !== "ready" || recording || mediaRecorderRef.current?.state === "recording") return;
    ensureToneAudioContext();
    releasedDuringPrimeRef.current = false;
    setTeachPhase("priming");
    setFloatingRecordChar(game.targetChar);
    await speakStageFour("請按住不要放開。等叮一聲之後，大聲念出來。");
    if (releasedDuringPrimeRef.current) {
      setFloatingRecordChar(null);
      setTeachPhase("ready");
      await speakStageFour("還沒叮喔。要按住等叮一聲，再念給小兔子聽。");
      return;
    }
    await startRecordingAfterDing();
  }

  function handleTeachPressEnd(index: number) {
    if (index !== targetIndex || game.type !== "teach-character") return;
    if (teachPhase === "priming") {
      releasedDuringPrimeRef.current = true;
      return;
    }
    if (recording) stopRecording();
  }

  async function handleTeachRecordingDone(url: string) {
    const timing = sentence.audio?.charTimings.find((item) => item.charIndex === targetIndex);
    setTeachPhase("reciting");
    setAskingGameCharIndex(null);
    setActiveGameCharIndex(null);
    await speakStageFour("我聽到了。我來試試看。");
    if (sentence.audio?.src && timing) {
      await playAudioRange(sentence.audio.src, 0, timing.startMs, {
        onTime: (elapsedMs) => setActiveGameCharIndex(activeTimingIndex(sentence, elapsedMs)),
      });
      setActiveGameCharIndex(targetIndex);
      await playRecordedAudioUrl(url);
      setActiveGameCharIndex(null);
      await playAudioRange(sentence.audio.src, timing.endMs, sentence.audio.durationMs, {
        onTime: (elapsedMs) => setActiveGameCharIndex(activeTimingIndex(sentence, elapsedMs)),
      });
    } else {
      await playSpokenText(han.slice(0, targetIndex).join(""));
      setActiveGameCharIndex(targetIndex);
      await playRecordedAudioUrl(url);
      setActiveGameCharIndex(null);
      await playSpokenText(han.slice(targetIndex + 1).join(""));
    }
    setActiveGameCharIndex(null);
    setTeachPhase("done");
    await speakStageFour(stageFourPraise("學會了", doneCount));
    completeRound();
  }

  const gameBody = (() => {
    if (game.type === "find-character") {
      return (
        <>
          <SentenceGameLine
            sentence={sentence}
            zhuyinMap={zhuyinMap}
            targetChar={isCurrentRoundComplete ? game.targetChar : undefined}
            activeIndex={activeGameCharIndex}
            clickable
            foundIndexes={isCurrentRoundComplete ? new Set([targetIndex]) : new Set()}
            onCharClick={handleFindChar}
          />
          <p className="block-note">點一下找到的字。</p>
        </>
      );
    }

    if (game.type === "teach-character") {
      return (
        <>
          <SentenceGameLine
            sentence={sentence}
            zhuyinMap={zhuyinMap}
            targetChar={teachPhase === "reading" ? undefined : game.targetChar}
            activeIndex={activeGameCharIndex}
            askingIndex={askingGameCharIndex}
            recordingIndex={recordingGameCharIndex}
            foundIndexes={teachPhase === "done" || isCurrentRoundComplete ? new Set([targetIndex]) : new Set()}
            onCharPressStart={handleTeachPressStart}
            onCharPressEnd={handleTeachPressEnd}
          />
          {floatingRecordChar && (
            <div className={`floating-record-char${recording ? " recording" : ""}`} aria-hidden>
              {floatingRecordChar}
            </div>
          )}
        </>
      );
    }

    if (game.type === "missing-character") {
      return (
        <>
          <SentenceGameLine
            sentence={sentence}
            zhuyinMap={zhuyinMap}
            targetChar={game.targetChar}
            activeIndex={activeGameCharIndex}
            blanks={filledBlanks}
          />
          <GameOptionGrid options={shuffledGameOptions} pickedOptionIds={pickedOptionIds} onPick={handleMissingOption} />
        </>
      );
    }

    if (game.type === "partial-order") {
      return (
        <>
          <SentenceGameLine
            sentence={sentence}
            zhuyinMap={zhuyinMap}
            targetChar={game.targetChar}
            activeIndex={activeGameCharIndex}
            blanks={filledBlanks}
          />
          <button type="button" className="sentence-replay-button" disabled={disabled} onClick={() => void replayCurrentSentence()}>
            🔊 重播這一句
          </button>
          <GameOptionGrid options={shuffledGameOptions} pickedOptionIds={pickedOptionIds} onPick={handleOrderOption} />
        </>
      );
    }

    return (
      <>
        <SentenceCard sentence={sentence} zhuyinMap={zhuyinMap} activeCharIndex={null} />
        <PronunciationChoiceGrid
          options={shuffledGameOptions}
          disabled={disabled}
          roundComplete={isCurrentRoundComplete}
          onHear={handleChoiceAudio}
          onChoose={handlePronunciationChoice}
        />
      </>
    );
  })();

  return (
    <>
      <div className="practice-meta">
        <span className="pill">{SENTENCE_GAME_LABELS[game.type]}</span>
        <span className="pill">
          {doneCount} / {requiredCount}
        </span>
      </div>
      <StageFourHelper text={gameGuide} onReplay={replayInstruction} />
      {gameBody}
      {isCurrentRoundComplete && (
        <div className="sentence-game-complete">
          <p className="success">完成這一題。</p>
          <button type="button" className="btn next-game-button" onClick={onRoundDone}>
            {doneAfterThisRound ? "完成句子遊戲" : "下一題"}
          </button>
        </div>
      )}
    </>
  );
}

function gameIntroText(game: SentenceGame) {
  if (game.type === "find-character") {
    return "小兔子說，我先聽這一句話。";
  }
  if (game.type === "missing-character") {
    return "小兔子說，我先聽這一句話。";
  }
  if (game.type === "partial-order") {
    return "小兔子說，字卡弄亂了，我不知道怎麼排。請先聽這一句話。";
  }
  if (game.type === "choose-pronunciation") {
    return "小兔子說，我的朋友都要念這一句話，我分不清楚誰念得對。";
  }
  return "小兔子說，我要來念念看這句話。";
}

function roundCompletionText(doneAfterThisRound: boolean) {
  if (doneAfterThisRound) {
    return "要領獎勵，請按紅色按鈕。";
  }
  return "要做下一題，請按紅色按鈕。";
}

function stageFourPraise(base: string, doneCount: number) {
  const praises = ["你好棒", "你好厲害", "太棒了", "做得很好", "很會幫忙"];
  return `${base}，${praises[doneCount % praises.length]}。`;
}

function gameGuideText(game: SentenceGame, teachPhase: TeachCharacterPhase = "reading") {
  if (game.type === "find-character") {
    return `小兔子找不到「${game.targetChar}」。請幫小兔子找到「${game.targetChar}」這個字，然後點一下。`;
  }
  if (game.type === "teach-character") {
    if (teachPhase === "ready" || teachPhase === "priming" || teachPhase === "recording") {
      return "請按住這個字，不要放開。聽到叮一聲之後，大聲念出來。";
    }
    if (teachPhase === "reciting") {
      return "小兔子正在把句子念完。";
    }
    return "小兔子會卡在不會念的字，請你幫牠。";
  }
  if (game.type === "missing-character") {
    return "有一個字不見了。請按下面的字卡，把它找回來。";
  }
  if (game.type === "partial-order") {
    return `請照順序點下面的字卡，幫小兔子把字卡放回去。`;
  }
  return "請按每個小動物的頭像，聽牠念。誰念對了，就按旁邊的勾勾。";
}

function StageFourHelper({ text, onReplay }: { text: string; onReplay: () => void }) {
  return (
    <div className="stage-four-helper">
      <div className="helper-avatar" aria-hidden>🐰</div>
      <div className="helper-bubble">
        <p>{text}</p>
        <button type="button" className="helper-replay" onClick={onReplay}>
          🔊 再聽一次
        </button>
      </div>
    </div>
  );
}

function SentenceGameLine({
  sentence,
  zhuyinMap,
  targetChar,
  activeIndex,
  askingIndex,
  recordingIndex,
  blanks,
  clickable = false,
  foundIndexes = new Set<number>(),
  onCharClick,
  onCharPressStart,
  onCharPressEnd,
}: {
  sentence: LessonSentence;
  zhuyinMap: Map<string, string>;
  targetChar?: string;
  activeIndex?: number | null;
  askingIndex?: number | null;
  recordingIndex?: number | null;
  blanks?: Map<number, string>;
  clickable?: boolean;
  foundIndexes?: Set<number>;
  onCharClick?: (hanIndex: number) => void | Promise<void>;
  onCharPressStart?: (hanIndex: number) => void;
  onCharPressEnd?: (hanIndex: number) => void;
}) {
  let hanIndex = -1;
  const displayLines = sentence.displayLines?.length ? sentence.displayLines : [sentence.text];
  return (
    <div className="sentence-card sentence-game-card">
      <div className="sentence-line" aria-label={sentence.text}>
        {displayLines.map((line, lineIndex) => (
          <div key={`${sentence.id}-game-line-${lineIndex}`} className="sentence-line-row">
            {Array.from(line).map((char, index) => {
              if (!isHan(char)) {
                return (
                  <span key={`${char}-${lineIndex}-${index}`} className="punctuation">
                    {char}
                  </span>
                );
              }
              hanIndex += 1;
              const blankValue = blanks?.get(hanIndex);
              if (blankValue !== undefined) {
                return (
                  <span key={`${char}-${lineIndex}-${index}`} className={`sentence-blank${blankValue ? " filled" : ""}`}>
                    {blankValue || "？"}
                  </span>
                );
              }
              const token = (
                <>
                  <span className="hanzi">{char}</span>
                  <Zhuyin value={zhuyinMap.get(char) ?? ""} />
                </>
              );
              const className = `char-token${foundIndexes.has(hanIndex) ? " found" : ""}${
                targetChar === char ? " target-game-char" : ""
              }${hanIndex === activeIndex ? " active" : ""}${hanIndex === askingIndex ? " asking" : ""}${
                hanIndex === recordingIndex ? " recording" : ""
              }`;
              if (clickable || onCharPressStart) {
                const currentIndex = hanIndex;
                return (
                  <button
                    type="button"
                    key={`${char}-${lineIndex}-${index}`}
                    className={className}
                    onClick={clickable ? () => void onCharClick?.(currentIndex) : undefined}
                    onContextMenu={(event) => event.preventDefault()}
                    onPointerDown={
                      onCharPressStart
                        ? (event) => {
                            event.preventDefault();
                            event.currentTarget.setPointerCapture(event.pointerId);
                            onCharPressStart(currentIndex);
                          }
                        : undefined
                    }
                    onPointerUp={
                      onCharPressEnd
                        ? (event) => {
                            event.preventDefault();
                            onCharPressEnd(currentIndex);
                          }
                        : undefined
                    }
                    onPointerCancel={onCharPressEnd ? () => onCharPressEnd(currentIndex) : undefined}
                  >
                    {token}
                  </button>
                );
              }
              return (
                <span key={`${char}-${lineIndex}-${index}`} className={className}>
                  {token}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

const PRONUNCIATION_READERS = [
  { emoji: "🐸", name: "小青蛙" },
  { emoji: "🦊", name: "小狐狸" },
  { emoji: "🐻", name: "小熊" },
  { emoji: "🐷", name: "小豬" },
];

function stableShuffledOptions(options: SentenceGameOption[], seed: string) {
  const shuffled = [...options];
  let state = hashSeed(seed);
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    state = nextShuffleState(state);
    const swapIndex = state % (index + 1);
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  if (shuffled.length > 1 && shuffled.every((option, index) => option.id === options[index].id)) {
    const offset = (hashSeed(`${seed}:rotate`) % (shuffled.length - 1)) + 1;
    return [...shuffled.slice(offset), ...shuffled.slice(0, offset)];
  }
  return shuffled;
}

function hashSeed(value: string) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function nextShuffleState(state: number) {
  return (Math.imul(state, 1664525) + 1013904223) >>> 0;
}

function PronunciationChoiceGrid({
  options,
  disabled,
  roundComplete,
  onHear,
  onChoose,
}: {
  options: SentenceGameOption[];
  disabled: boolean;
  roundComplete: boolean;
  onHear: (option: SentenceGameOption, readerName: string) => void | Promise<void>;
  onChoose: (option: SentenceGameOption) => void | Promise<void>;
}) {
  return (
    <div className="pronunciation-choice-grid">
      {options.map((option, index) => {
        const reader = PRONUNCIATION_READERS[index % PRONUNCIATION_READERS.length];
        return (
          <div key={option.id} className="pronunciation-choice">
            <button
              type="button"
              className="reader-avatar reader-avatar-button"
              disabled={disabled}
              aria-label={`聽${reader.name}念`}
              onClick={() => void onHear(option, reader.name)}
            >
              <span aria-hidden>{reader.emoji}</span>
            </button>
            <strong>{reader.name}</strong>
            <button
              type="button"
              className={`reader-check-button${roundComplete && option.correct ? " selected" : ""}`}
              disabled={disabled || roundComplete}
              aria-label={`選${reader.name}念對了`}
              onClick={() => void onChoose(option)}
            >
              ✓
            </button>
          </div>
        );
      })}
    </div>
  );
}

function GameOptionGrid({
  options,
  pickedOptionIds,
  onPick,
}: {
  options: SentenceGameOption[];
  pickedOptionIds: string[];
  onPick: (option: SentenceGameOption) => void | Promise<void>;
}) {
  return (
    <div className="game-option-grid">
      {options.map((option) => (
        <button
          key={option.id}
          className={`game-option${pickedOptionIds.includes(option.id) ? " picked" : ""}`}
          disabled={pickedOptionIds.includes(option.id)}
          onClick={() => void onPick(option)}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}

function SentenceCard({
  sentence,
  zhuyinMap,
  activeCharIndex,
}: {
  sentence: LessonSentence;
  zhuyinMap: Map<string, string>;
  activeCharIndex: number | null;
}) {
  let hanIndex = -1;
  const displayLines = sentence.displayLines?.length ? sentence.displayLines : [sentence.text];
  return (
    <div className="sentence-card">
      <div className="sentence-line" aria-label={sentence.text}>
        {displayLines.map((line, lineIndex) => (
          <div key={`${sentence.id}-line-${lineIndex}`} className="sentence-line-row">
            {Array.from(line).map((char, index) => {
              if (!isHan(char)) {
                return (
                  <span key={`${char}-${lineIndex}-${index}`} className="punctuation">
                    {char}
                  </span>
                );
              }
              hanIndex += 1;
              return (
                <span
                  key={`${char}-${lineIndex}-${index}`}
                  className={`char-token${hanIndex === activeCharIndex ? " active" : ""}`}
                >
                  <span className="hanzi">{char}</span>
                  <Zhuyin value={zhuyinMap.get(char) ?? ""} />
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function Zhuyin({ value, size = "normal" }: { value: string; size?: "normal" | "large" }) {
  const { base, tone, neutral } = splitZhuyin(value);
  return (
    <span className={`zhuyin-mark zhuyin-${size}`} aria-label={value}>
      <span className="zhuyin-base">
        {neutral && <span className="neutral-dot">˙</span>}
        {base.map((part, index) => (
          <span key={`${part}-${index}`}>{part}</span>
        ))}
      </span>
      <span className="zhuyin-tone" aria-hidden>
        {!neutral ? tone : ""}
      </span>
    </span>
  );
}

function splitZhuyin(value: string): { base: string[]; tone: string; neutral: boolean } {
  const chars = Array.from(value);
  const first = chars[0];
  const last = chars[chars.length - 1];
  if (first === "˙") return { base: chars.slice(1), tone: "", neutral: true };
  if (["ˊ", "ˇ", "ˋ"].includes(last)) return { base: chars.slice(0, -1), tone: last, neutral: false };
  return { base: chars, tone: "", neutral: false };
}

function playSpokenText(text: string) {
  return playTts(text, { rate: 0.8, pitch: 1 });
}

function speakGuide(text: string) {
  return playTts(text, { rate: 0.95, pitch: 1.25 });
}

function playTts(text: string, { rate, pitch }: { rate: number; pitch: number }) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean || !("speechSynthesis" in window)) return Promise.resolve();
  if (activeAudio) finishActiveAudio("error");
  stopAudioFrame();
  finishActiveTts();
  return new Promise<void>((resolve) => {
    const utterance = new SpeechSynthesisUtterance(clean);
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      ttsPausedByApp = false;
      if (activeTtsFinish === finish) activeTtsFinish = null;
      emitPlaybackState();
      resolve();
    };
    utterance.lang = "zh-TW";
    utterance.rate = rate;
    utterance.pitch = pitch;
    const voice = pickZhTwVoice();
    if (voice) utterance.voice = voice;
    utterance.onstart = () => emitPlaybackState();
    utterance.onend = finish;
    utterance.onerror = finish;
    activeTtsFinish = finish;
    window.speechSynthesis.speak(utterance);
    emitPlaybackState();
  });
}

function pickZhTwVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((voice) => voice.lang.toLowerCase() === "zh-tw") ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith("zh")) ??
    null
  );
}

function isHan(char: string) {
  return /\p{Script=Han}/u.test(char);
}

export default App;
