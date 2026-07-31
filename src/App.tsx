import { useMemo, useState, type ReactNode } from "react";
import curriculumData from "./curriculum/sample-lessons.json";
import type { Curriculum, Lesson, LessonSentence } from "./types";
import { buildZhuyinMap, hanChars, nextLockedLessonOrder } from "./lib/curriculum";
import "./index.css";

const curriculum = curriculumData as Curriculum;

type GameMode = "找字" | "教動物" | "填空" | "排句子" | "誰念對";
const GAME_MODES: GameMode[] = ["找字", "教動物", "填空", "排句子", "誰念對"];

function App() {
  const [completedOrders, setCompletedOrders] = useState<Set<number>>(new Set());
  const nextOrder = nextLockedLessonOrder(curriculum.lessons, completedOrders);
  const [selectedOrder, setSelectedOrder] = useState(nextOrder);
  const selectedLesson =
    curriculum.lessons.find((lesson) => lesson.order === selectedOrder) ?? curriculum.lessons[0];

  function completeLesson(order: number) {
    setCompletedOrders((prev) => {
      const next = new Set(prev);
      next.add(order);
      return next;
    });
    const following = curriculum.lessons.find((lesson) => lesson.order === order + 1);
    if (following) setSelectedOrder(following.order);
  }

  return (
    <main className="app-shell">
      <div className="app-layout">
        <LessonSidebar
          lessons={curriculum.lessons}
          selectedOrder={selectedLesson.order}
          completedOrders={completedOrders}
          nextOrder={nextOrder}
          onSelect={setSelectedOrder}
        />
        <LessonPanel
          key={selectedLesson.id}
          lesson={selectedLesson}
          lessons={curriculum.lessons}
          completed={completedOrders.has(selectedLesson.order)}
          locked={selectedLesson.order > nextOrder}
          onComplete={() => completeLesson(selectedLesson.order)}
        />
      </div>
    </main>
  );
}

function LessonSidebar({
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
  return (
    <aside className="sidebar">
      <h1 className="brand">認字練功房</h1>
      <p className="brand-subtitle">一課一字，破解後解鎖下一關。</p>
      <div className="lesson-list" aria-label="課程列表">
        {lessons.map((lesson) => {
          const locked = lesson.order > nextOrder;
          const completed = completedOrders.has(lesson.order);
          return (
            <button
              key={lesson.id}
              className={`lesson-tab${lesson.order === selectedOrder ? " active" : ""}`}
              disabled={locked}
              onClick={() => onSelect(lesson.order)}
            >
              <span className="lesson-number">{lesson.order}</span>
              <span className="lesson-char">{lesson.targetChar}</span>
              <span className="lesson-status">{completed ? "已破關" : locked ? "鎖定" : "可挑戰"}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

function LessonPanel({
  lesson,
  lessons,
  completed,
  locked,
  onComplete,
}: {
  lesson: Lesson;
  lessons: Lesson[];
  completed: boolean;
  locked: boolean;
  onComplete: () => void;
}) {
  const [soundUnlocked, setSoundUnlocked] = useState(false);
  const [findUnlocked, setFindUnlocked] = useState(false);
  const [practiceDoneCount, setPracticeDoneCount] = useState(0);
  const zhuyinMap = useMemo(() => buildZhuyinMap(lessons, lesson.order), [lessons, lesson.order]);
  const requiredPracticeRounds = Math.min(lesson.requiredRounds, lesson.sentences.length);
  const lessonReady = soundUnlocked && findUnlocked && practiceDoneCount >= requiredPracticeRounds;

  function handleHearTarget() {
    playSpokenText(lesson.targetChar);
    setSoundUnlocked(true);
  }

  return (
    <section className="lesson-panel" aria-labelledby="lesson-title">
      <div className="top-bar">
        <span className="pill">第 {lesson.order} 課</span>
        <span className="pill">{completed ? "已進入複習池" : locked ? "尚未解鎖" : "練功中"}</span>
      </div>

      <h2 id="lesson-title" className="lesson-title">
        破解「{lesson.targetChar}」
      </h2>
      <p className="lesson-copy">三段完成後才算通關：先聽單字，再找出這個字，最後進句子遊戲。</p>

      <LessonBlock
        index={1}
        title="聽這個字"
        done={soundUnlocked}
        locked={locked}
      >
        <button className="target-card target-button" disabled={locked} onClick={handleHearTarget}>
          <span className="target-char">{lesson.targetChar}</span>
          <Zhuyin value={lesson.zhuyin} size="large" />
        </button>
        <p className="block-note">
          之後這裡會播放預錄好的單字音檔。現在先用瀏覽器語音做暫時示範，按下後本區塊通關。
        </p>
        {lesson.originHint && <div className="origin-note">{lesson.originHint.text}</div>}
      </LessonBlock>

      <LessonBlock
        index={2}
        title="找出這個字"
        done={findUnlocked}
        locked={locked || !soundUnlocked}
      >
        <FindManyChallenge
          lesson={lesson}
          zhuyinMap={zhuyinMap}
          disabled={locked || !soundUnlocked}
          onComplete={() => setFindUnlocked(true)}
        />
      </LessonBlock>

      <LessonBlock
        index={3}
        title="句子遊戲"
        done={practiceDoneCount >= requiredPracticeRounds}
        locked={locked || !soundUnlocked || !findUnlocked}
      >
        <SentencePracticePreview
          lesson={lesson}
          zhuyinMap={zhuyinMap}
          disabled={locked || !soundUnlocked || !findUnlocked}
          doneCount={practiceDoneCount}
          requiredCount={requiredPracticeRounds}
          onRoundDone={() => setPracticeDoneCount((count) => Math.min(count + 1, requiredPracticeRounds))}
        />
      </LessonBlock>

      <div className="progress-row">
        <div className="progress-track" aria-label="通關進度">
          <div
            className="progress-fill"
            style={{
              width: `${([soundUnlocked, findUnlocked, practiceDoneCount >= requiredPracticeRounds].filter(Boolean).length / 3) * 100}%`,
            }}
          />
        </div>
        <span className="pill">
          {[soundUnlocked, findUnlocked, practiceDoneCount >= requiredPracticeRounds].filter(Boolean).length} / 3
        </span>
      </div>

      <div className="actions" style={{ marginTop: 16 }}>
        <button className="btn primary" disabled={!lessonReady || completed || locked} onClick={onComplete}>
          {completed ? "已解鎖下一課" : "完成本課"}
        </button>
        <button
          className="btn ghost"
          onClick={() => {
            setSoundUnlocked(false);
            setFindUnlocked(false);
            setPracticeDoneCount(0);
          }}
        >
          重練本課
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
  children,
}: {
  index: number;
  title: string;
  done: boolean;
  locked: boolean;
  children: ReactNode;
}) {
  return (
    <section className={`lesson-block${locked ? " locked-block" : ""}`}>
      <div className="block-heading">
        <span className="lesson-number">{index}</span>
        <h3>{title}</h3>
        <span className="pill">{done ? "通關" : locked ? "等待前一段" : "進行中"}</span>
      </div>
      {children}
    </section>
  );
}

function FindManyChallenge({
  lesson,
  zhuyinMap,
  disabled,
  onComplete,
}: {
  lesson: Lesson;
  zhuyinMap: Map<string, string>;
  disabled: boolean;
  onComplete: () => void;
}) {
  const items = useMemo(() => makeFindChallenge(lesson), [lesson]);
  const [foundIds, setFoundIds] = useState<Set<string>>(new Set());
  const targetTotal = items.filter((item) => item.char === lesson.targetChar).length;
  const foundTotal = [...foundIds].filter((id) => items.find((item) => item.id === id)?.char === lesson.targetChar).length;

  function handleTap(item: FindItem) {
    if (disabled || item.char !== lesson.targetChar || foundIds.has(item.id)) return;
    playSpokenText(item.char);
    setFoundIds((prev) => {
      const next = new Set(prev);
      next.add(item.id);
      if (next.size >= targetTotal) onComplete();
      return next;
    });
  }

  return (
    <>
      <p className="block-note">在六個字裡找到所有「{lesson.targetChar}」。按到正確字時會亮起來，也會念出字音。</p>
      <div className="find-grid">
        {items.map((item) => (
          <button
            key={item.id}
            className={`find-token${foundIds.has(item.id) ? " found" : ""}`}
            disabled={disabled}
            onClick={() => handleTap(item)}
          >
            <span className="hanzi">{item.char}</span>
            <Zhuyin value={zhuyinMap.get(item.char) ?? ""} />
          </button>
        ))}
      </div>
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
  const distractors = hanChars(lesson.sentences.map((sentence) => sentence.text).join(""))
    .filter((char) => char !== lesson.targetChar)
    .slice(0, 3);
  const fallback = ["小", "山", "人", "口", "手", "上"].filter((char) => char !== lesson.targetChar);
  const pool = [...distractors, ...fallback].slice(0, 3);
  const chars = [lesson.targetChar, pool[0], lesson.targetChar, pool[1], pool[2], lesson.targetChar];
  return chars.map((char, index) => ({ id: `${char}-${index}`, char }));
}

function SentencePracticePreview({
  lesson,
  zhuyinMap,
  disabled,
  doneCount,
  requiredCount,
  onRoundDone,
}: {
  lesson: Lesson;
  zhuyinMap: Map<string, string>;
  disabled: boolean;
  doneCount: number;
  requiredCount: number;
  onRoundDone: () => void;
}) {
  const sentence = lesson.sentences[doneCount % lesson.sentences.length];
  const mode = GAME_MODES[doneCount % GAME_MODES.length];

  return (
    <>
      <div className="practice-meta">
        <span className="pill">{mode}</span>
        <span className="pill">
          {doneCount} / {requiredCount}
        </span>
      </div>
      <SentenceCard sentence={sentence} zhuyinMap={zhuyinMap} activeCharIndex={null} />
      <p className="block-note">
        這裡會接上舊版五種遊戲並隨機輪替。每一句必須先由你審核後才會進入正式教材。
      </p>
      <button className="btn secondary" disabled={disabled || doneCount >= requiredCount} onClick={onRoundDone}>
        示範完成一個句子遊戲
      </button>
    </>
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
  return (
    <div className="sentence-card">
      <div className="sentence-line" aria-label={sentence.text}>
        {Array.from(sentence.text).map((char, index) => {
          if (!isHan(char)) {
            return (
              <span key={`${char}-${index}`} className="punctuation">
                {char}
              </span>
            );
          }
          hanIndex += 1;
          return (
            <span key={`${char}-${index}`} className={`char-token${hanIndex === activeCharIndex ? " active" : ""}`}>
              <span className="hanzi">{char}</span>
              <Zhuyin value={zhuyinMap.get(char) ?? ""} />
            </span>
          );
        })}
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
  const clean = text.replace(/[，。！？、；：,.!?;:]/g, "");
  if (!clean || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(clean);
  utterance.lang = "zh-TW";
  utterance.rate = 0.8;
  window.speechSynthesis.speak(utterance);
}

function isHan(char: string) {
  return /\p{Script=Han}/u.test(char);
}

export default App;
