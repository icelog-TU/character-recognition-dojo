export interface Curriculum {
  version: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  order: number;
  kind?: "new-char" | "review";
  newChars: string[];
  zhuyin: Record<string, string>;
  charAudio?: Record<string, string>;
  title: string;
  requiredRounds: number;
  review?: ReviewLessonMeta;
  originHint?: OriginHint;
  sentences: LessonSentence[];
  sentenceGames?: SentenceGame[];
}

export interface ReviewLessonMeta {
  milestone: number;
  sequence: 1 | 2;
  targetLessonStart: number;
  targetLessonEnd: number;
  pairLessonIds: string[];
}

export interface OriginHint {
  kind: "text" | "image";
  text: string;
  sourceName?: string;
  sourceUrl?: string;
}

export interface LessonSentence {
  id: string;
  text: string;
  displayLines?: string[];
  spokenText: string;
  focusChar: string;
  imagePrompt: string;
  imageSrc: string | null;
  approved: boolean;
  audio: SentenceAudio | null;
}

export interface SentenceAudio {
  src: string;
  durationMs: number;
  charTimings: CharTiming[];
}

export interface CharTiming {
  charIndex: number;
  startMs: number;
  endMs: number;
}

export type SentenceGameType =
  | "find-character"
  | "teach-character"
  | "missing-character"
  | "partial-order"
  | "choose-pronunciation";

export interface SentenceGame {
  id: string;
  type: SentenceGameType;
  sentenceId: string;
  targetChar: string;
  prompt: string;
  missingIndexes?: number[];
  options?: SentenceGameOption[];
}

export interface SentenceGameOption {
  id: string;
  text: string;
  correct: boolean;
  audioSrc?: string;
}
