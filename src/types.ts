export interface Curriculum {
  version: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  order: number;
  targetChar: string;
  zhuyin: string;
  title: string;
  requiredRounds: number;
  originHint?: OriginHint;
  sentences: LessonSentence[];
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
  spokenText: string;
  focusChar: string;
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
