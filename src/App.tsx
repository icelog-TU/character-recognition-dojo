import { useMemo, useState } from "react";
import curriculumData from "./curriculum/sample-lessons.json";
import type { Curriculum, Lesson, LessonSentence } from "./types";
import { buildZhuyinMap, hanChars, nextLockedLessonOrder } from "./lib/curriculum";
import "./index.css";

const curriculum = curriculumData as Curriculum;

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
  const [roundsDone, setRoundsDone] = useState(0);
  const [activeSentenceId, setActiveSentenceId] = useState(lesson.sentences[0]?.id);
  const zhuyinMap = useMemo(() => buildZhuyinMap(lessons, lesson.order), [lessons, lesson.order]);
  const activeSentence =
    lesson.sentences.find((sentence) => sentence.id === activeSentenceId) ?? lesson.sentences[0];
  const progress = Math.min(roundsDone, lesson.requiredRounds);
  const canComplete = progress >= lesson.requiredRounds;

  function markRoundDone() {
    setRoundsDone((current) => Math.min(current + 1, lesson.requiredRounds));
  }

  return (
    <section className="lesson-panel" aria-labelledby="lesson-title">
      <div className="top-bar">
        <span className="pill">第 {lesson.order} 課</span>
        <span className="pill">{completed ? "已進入複習池" : locked ? "尚未解鎖" : "練功中"}</span>
      </div>

      <section className="showcase">
        <div className="target-card" aria-label={`新字 ${lesson.targetChar}`}>
          <div>
            <div className="target-char">{lesson.targetChar}</div>
            <div className="target-zhuyin">{lesson.zhuyin}</div>
          </div>
        </div>
        <div>
          <h2 id="lesson-title" className="lesson-title">
            破解「{lesson.targetChar}」
          </h2>
          <p className="lesson-copy">
            先看清楚字形，再直接進句子遊戲。注音只輔助辨認，不把課程變成注音拼讀。
          </p>
          {lesson.originHint && <div className="origin-note">{lesson.originHint.text}</div>}
        </div>
      </section>

      <SentencePicker
        sentences={lesson.sentences}
        activeId={activeSentence.id}
        onPick={(sentence) => setActiveSentenceId(sentence.id)}
      />

      <SentenceCard sentence={activeSentence} zhuyinMap={zhuyinMap} activeCharIndex={null} />

      <FindCharacterRound
        sentence={activeSentence}
        zhuyinMap={zhuyinMap}
        onRoundDone={markRoundDone}
      />

      <div className="progress-row">
        <div className="progress-track" aria-label="通關進度">
          <div className="progress-fill" style={{ width: `${(progress / lesson.requiredRounds) * 100}%` }} />
        </div>
        <span className="pill">
          {progress} / {lesson.requiredRounds}
        </span>
      </div>

      <div className="actions" style={{ marginTop: 16 }}>
        <button className="btn primary" disabled={!canComplete || completed || locked} onClick={onComplete}>
          {completed ? "已解鎖下一課" : "完成本課"}
        </button>
        <button className="btn ghost" onClick={() => setRoundsDone(0)}>
          重練本課
        </button>
      </div>
    </section>
  );
}

function SentencePicker({
  sentences,
  activeId,
  onPick,
}: {
  sentences: LessonSentence[];
  activeId: string;
  onPick: (sentence: LessonSentence) => void;
}) {
  return (
    <div className="actions" style={{ marginBottom: 12 }}>
      {sentences.map((sentence, index) => (
        <button
          key={sentence.id}
          className={`btn ${sentence.id === activeId ? "secondary" : "ghost"}`}
          onClick={() => onPick(sentence)}
        >
          句子 {index + 1}
        </button>
      ))}
    </div>
  );
}

function SentenceCard({
  sentence,
  zhuyinMap,
  activeCharIndex,
  foundCharIndex,
  onCharTap,
}: {
  sentence: LessonSentence;
  zhuyinMap: Map<string, string>;
  activeCharIndex: number | null;
  foundCharIndex?: number | null;
  onCharTap?: (hanIndex: number, char: string) => void;
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
          const currentHanIndex = hanIndex;
          const className = [
            "char-token",
            currentHanIndex === activeCharIndex ? "active" : "",
            currentHanIndex === foundCharIndex ? "found" : "",
          ]
            .filter(Boolean)
            .join(" ");
          const content = (
            <>
              <span className="hanzi">{char}</span>
              <Zhuyin value={zhuyinMap.get(char) ?? ""} />
            </>
          );
          if (onCharTap) {
            return (
              <button
                key={`${char}-${index}`}
                type="button"
                className={className}
                onClick={() => onCharTap(currentHanIndex, char)}
              >
                {content}
              </button>
            );
          }
          return (
            <span key={`${char}-${index}`} className={className}>
              {content}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function Zhuyin({ value }: { value: string }) {
  const parts = Array.from(value);
  return (
    <span className="zhuyin" aria-label={value}>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`} className={index === parts.length - 1 && isTone(part) ? "tone" : undefined}>
          {part}
        </span>
      ))}
    </span>
  );
}

function FindCharacterRound({
  sentence,
  zhuyinMap,
  onRoundDone,
}: {
  sentence: LessonSentence;
  zhuyinMap: Map<string, string>;
  onRoundDone: () => void;
}) {
  const [foundIndex, setFoundIndex] = useState<number | null>(null);
  const chars = hanChars(sentence.text);
  const targetIndex = Math.max(
    0,
    chars.findIndex((char) => char === sentence.focusChar),
  );

  function handleTap(index: number) {
    if (index !== targetIndex) return;
    setFoundIndex(index);
    onRoundDone();
  }

  return (
    <section className="round-card">
      <h3 className="round-title">找出這個字</h3>
      <p className="round-instruction">
        先用預錄音檔播放整句；目前範例尚未放入音檔，所以先展示句子與操作目標。
      </p>
      <SentenceCard
        sentence={sentence}
        zhuyinMap={zhuyinMap}
        activeCharIndex={null}
        foundCharIndex={foundIndex}
        onCharTap={handleTap}
      />
      <div className="actions">
        <button className="btn secondary" onClick={() => setFoundIndex(null)}>
          再找一次
        </button>
        {foundIndex !== null && <span className="success">找到了，可以累積通關進度。</span>}
      </div>
    </section>
  );
}

function isHan(char: string) {
  return /\p{Script=Han}/u.test(char);
}

function isTone(char: string) {
  return ["ˊ", "ˇ", "ˋ", "˙"].includes(char);
}

export default App;
