import { useMemo, useState, type CSSProperties, type ReactNode } from "react";
import curriculumData from "./curriculum/sample-lessons.json";
import type { Curriculum, Lesson, LessonSentence } from "./types";
import { buildZhuyinMap, hanChars, nextLockedLessonOrder } from "./lib/curriculum";
import "./index.css";

const curriculum = curriculumData as unknown as Curriculum;

type GameMode = "找字" | "教動物" | "填空" | "排句子" | "誰念對";
type AppPage = "practice" | "catalog" | "records" | "gacha" | "collection" | "settings";
type LessonCharEntry = { lesson: Lesson; char: string; index: number };

const GAME_MODES: GameMode[] = ["找字", "教動物", "填空", "排句子", "誰念對"];

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

function lessonChars(lesson: Lesson): string[] {
  return lesson.newChars;
}

function lessonLabel(lesson: Lesson): string {
  return lesson.newChars.join("");
}

function lessonCharEntries(lesson: Lesson): LessonCharEntry[] {
  return lesson.newChars.map((char, index) => ({ lesson, char, index }));
}

function flattenLessonChars(lessons: Lesson[]): LessonCharEntry[] {
  return lessons.flatMap(lessonCharEntries);
}

function App() {
  const [page, setPage] = useState<AppPage>("practice");
  const [menuOpen, setMenuOpen] = useState(false);
  const [completedOrders, setCompletedOrders] = useState<Set<number>>(new Set());
  const nextOrder = nextLockedLessonOrder(curriculum.lessons, completedOrders);
  const [selectedOrder, setSelectedOrder] = useState(nextOrder);
  const selectedLesson =
    curriculum.lessons.find((lesson) => lesson.order === selectedOrder) ?? curriculum.lessons[0];
  const coins = completedOrders.size * 30 + 120;
  const stars = completedOrders.size * 12 + 36;
  const streakDays = completedOrders.size > 0 ? 1 : 0;

  function completeLesson(order: number) {
    setCompletedOrders((prev) => {
      const next = new Set(prev);
      next.add(order);
      return next;
    });
    const following = curriculum.lessons.find((lesson) => lesson.order === order + 1);
    if (following) setSelectedOrder(following.order);
  }

  function openPage(nextPage: AppPage) {
    setPage(nextPage);
    setMenuOpen(false);
  }

  function openLesson(order: number) {
    setSelectedOrder(order);
    setPage("practice");
    setMenuOpen(false);
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
        {page === "practice" && (
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
              onComplete={() => completeLesson(selectedLesson.order)}
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
          />
        )}
        {page === "gacha" && <PlaceholderPage icon="🎁" title="轉蛋" text="之後用金幣抽角色，會從這裡進入。" />}
        {page === "collection" && (
          <PlaceholderPage icon="🎴" title="角色收藏" text="之後所有抽到的角色會放在這裡，也可以做互動。" />
        )}
        {page === "settings" && <PlaceholderPage icon="⚙️" title="設定" text="之後放音量、資料備份、家長設定。" />}
      </main>
    </div>
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
          <span className="stat-pill">🪙 {coins}</span>
          <span className="stat-pill">⭐ {stars}</span>
          <span className="stat-pill">🔥 {streakDays} 天</span>
        </div>
      </div>
    </header>
  );
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
  const allEntries = flattenLessonChars(lessons);
  const searchResults =
    normalizedQuery.length > 0
      ? allEntries.filter(
          (entry) =>
            entry.char.includes(normalizedQuery) ||
            entry.lesson.title.includes(normalizedQuery) ||
            String(entry.lesson.order) === normalizedQuery,
        )
      : [];
  const activeGroupEntries = allEntries.filter(
    (entry) => entry.lesson.order >= activeGroup.start && entry.lesson.order <= activeGroup.end,
  );

  return (
    <section className="page-panel">
      <div className="page-heading">
        <h1>漢字總覽</h1>
        <p>六百字分成六個彩虹區塊。破解後可以回來點字複習，也可以直接搜尋。</p>
      </div>
      <input
        className="search-input"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="搜尋字或課號"
        aria-label="搜尋字或課號"
      />

      {normalizedQuery ? (
        <CatalogLessonGrid
          entries={searchResults}
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
              const count = allEntries.filter(
                (entry) => entry.lesson.order >= group.start && entry.lesson.order <= group.end,
              ).length;
              return (
                <button
                  key={group.id}
                  className={`rainbow-group${group.id === activeGroupId ? " active" : ""}`}
                  style={{ "--group-color": group.color } as CSSProperties}
                  onClick={() => setActiveGroupId(group.id)}
                >
                  <span>{group.label}</span>
                  <small>{group.range}</small>
                  <small>{count} 字</small>
                </button>
              );
            })}
          </div>

          <CatalogLessonGrid
            entries={activeGroupEntries}
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

function CatalogLessonGrid({
  entries,
  selectedOrder,
  completedOrders,
  nextOrder,
  onSelect,
  emptyText,
}: {
  entries: LessonCharEntry[];
  selectedOrder: number;
  completedOrders: Set<number>;
  nextOrder: number;
  onSelect: (order: number) => void;
  emptyText: string;
}) {
  if (entries.length === 0) return <p className="empty-catalog">{emptyText}</p>;
  return (
    <div className="catalog-grid" aria-label="課程字目錄">
      {entries.map((entry) => {
        const { lesson, char } = entry;
        const locked = lesson.order > nextOrder;
        return (
          <button
            key={`${lesson.id}-${char}-${entry.index}`}
            className={`catalog-char${lesson.order === selectedOrder ? " active" : ""}${
              completedOrders.has(lesson.order) ? " completed" : ""
            }`}
            disabled={locked}
            onClick={() => onSelect(lesson.order)}
          >
            <span>第 {lesson.order} 課</span>
            <strong>{char}</strong>
            <small>{locked ? "鎖" : completedOrders.has(lesson.order) ? "破" : "練"}</small>
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
}: {
  coins: number;
  stars: number;
  streakDays: number;
  completedCount: number;
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

function PlaceholderPage({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <section className="page-panel placeholder-page">
      <span className="placeholder-icon">{icon}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
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
  const [heardChars, setHeardChars] = useState<Set<string>>(new Set());
  const [findUnlocked, setFindUnlocked] = useState(false);
  const [practiceDoneCount, setPracticeDoneCount] = useState(0);
  const [resetVersion, setResetVersion] = useState(0);
  const newChars = lessonChars(lesson);
  const soundUnlocked = newChars.every((char) => heardChars.has(char));
  const zhuyinMap = useMemo(() => buildZhuyinMap(lessons, lesson.order), [lessons, lesson.order]);
  const usesSentenceGames = lesson.order >= 5;
  const requiredPracticeRounds = usesSentenceGames ? Math.min(lesson.requiredRounds, lesson.sentences.length) : 1;
  const lessonReady = soundUnlocked && findUnlocked && practiceDoneCount >= requiredPracticeRounds;

  function handleHearTarget(char: string) {
    playLessonChar(lesson, char);
    setHeardChars((prev) => {
      const next = new Set(prev);
      next.add(char);
      return next;
    });
  }

  return (
    <section className="lesson-panel" aria-labelledby="lesson-title">
      <div className="top-bar">
        <span className="pill">第 {lesson.order} 課</span>
        <span className="pill">{completed ? "已進入複習池" : locked ? "尚未解鎖" : "練功中"}</span>
      </div>

      <h2 id="lesson-title" className="lesson-title">
        破解「{lessonLabel(lesson)}」
      </h2>
      <p className="lesson-copy">三段完成後才算通關：先聽單字，再找出這個字，前幾課先看配圖認句。</p>

      <LessonBlock index={1} title="聽這個字" done={soundUnlocked} locked={locked}>
        <div className="target-grid">
          {newChars.map((char) => (
            <button
              key={char}
              className={`target-card target-button${heardChars.has(char) ? " heard" : ""}`}
              disabled={locked}
              onClick={() => handleHearTarget(char)}
            >
              <span className="target-char">{char}</span>
              <Zhuyin value={lesson.zhuyin[char] ?? ""} size="large" />
            </button>
          ))}
        </div>
        <p className="block-note">
          之後這裡會播放預錄好的單字音檔。現在先用瀏覽器語音做暫時示範，本課新字都聽過後通關。
        </p>
        {lesson.originHint && <div className="origin-note">{lesson.originHint.text}</div>}
      </LessonBlock>

      <LessonBlock index={2} title="找出這個字" done={findUnlocked} locked={locked || !soundUnlocked}>
        <FindManyChallenge
          key={`find-${lesson.id}-${resetVersion}`}
          lesson={lesson}
          zhuyinMap={zhuyinMap}
          disabled={locked || !soundUnlocked}
          onComplete={() => setFindUnlocked(true)}
        />
      </LessonBlock>

      <LessonBlock
        index={3}
        title={usesSentenceGames ? "句子遊戲" : "看圖認句"}
        done={practiceDoneCount >= requiredPracticeRounds}
        locked={locked || !soundUnlocked || !findUnlocked}
      >
        {usesSentenceGames ? (
          <SentencePracticePreview
            key={`practice-${lesson.id}-${resetVersion}`}
            lesson={lesson}
            zhuyinMap={zhuyinMap}
            disabled={locked || !soundUnlocked || !findUnlocked}
            doneCount={practiceDoneCount}
            requiredCount={requiredPracticeRounds}
            onRoundDone={() => setPracticeDoneCount((count) => Math.min(count + 1, requiredPracticeRounds))}
          />
        ) : (
          <PictureSentencePreview
            key={`picture-${lesson.id}-${resetVersion}`}
            lesson={lesson}
            zhuyinMap={zhuyinMap}
            disabled={locked || !soundUnlocked || !findUnlocked}
            done={practiceDoneCount >= requiredPracticeRounds}
            onDone={() => setPracticeDoneCount(1)}
          />
        )}
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
            setHeardChars(new Set());
            setFindUnlocked(false);
            setPracticeDoneCount(0);
            setResetVersion((version) => version + 1);
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
  const targets = lessonChars(lesson);
  const targetTotal = items.filter((item) => targets.includes(item.char)).length;
  const foundTotal = [...foundIds].filter((id) => {
    const item = items.find((candidate) => candidate.id === id);
    return item ? targets.includes(item.char) : false;
  }).length;
  const foundItems = items.filter((item) => foundIds.has(item.id) && targets.includes(item.char));
  const visibleItems = items.filter((item) => !foundIds.has(item.id));

  function handleTap(item: FindItem) {
    if (disabled || !targets.includes(item.char) || foundIds.has(item.id)) return;
    playLessonChar(lesson, item.char);
    setFoundIds((prev) => {
      const next = new Set(prev);
      next.add(item.id);
      if (next.size >= targetTotal) onComplete();
      return next;
    });
  }

  return (
    <>
      <p className="block-note">在字卡裡找到本課新字「{lessonLabel(lesson)}」。按到正確字時會念出字音，然後字卡會進到收集區。</p>
      <div className="find-grid">
        {visibleItems.map((item) => (
          <button
            key={item.id}
            className="find-token"
            disabled={disabled}
            onClick={() => handleTap(item)}
          >
            <span className="hanzi">{item.char}</span>
            <Zhuyin value={zhuyinMap.get(item.char) ?? ""} />
          </button>
        ))}
      </div>
      <div className="found-collection" aria-label="找到的字">
        <strong>字卡收集區</strong>
        <div className="found-row">
          {foundItems.length === 0 ? (
            <span className="collection-empty">找到的字會來這裡。</span>
          ) : (
            foundItems.map((item) => (
              <span className="found-card" key={`found-${item.id}`}>
                <span className="hanzi">{item.char}</span>
                <span>你找到我了</span>
              </span>
            ))
          )}
        </div>
      </div>
      {foundTotal === targetTotal && <p className="success">本段完成。</p>}
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
  const distractors = hanChars(lesson.sentences.map((sentence) => sentence.text).join(""))
    .filter((char) => !targets.includes(char))
    .slice(0, 3);
  const fallback = ["小", "山", "口", "手", "上", "下", "水", "火"].filter((char) => !targets.includes(char));
  const pool = [...distractors, ...fallback].slice(0, Math.max(2, 6 - targets.length));
  const chars = [...targets, ...pool].slice(0, 6);
  return chars.map((char, index) => ({ id: `${char}-${index}`, char }));
}

function PictureSentencePreview({
  lesson,
  zhuyinMap,
  disabled,
  done,
  onDone,
}: {
  lesson: Lesson;
  zhuyinMap: Map<string, string>;
  disabled: boolean;
  done: boolean;
  onDone: () => void;
}) {
  return (
    <>
      <p className="block-note">
        前幾課字量太少，先不進五種句子遊戲。這裡先用配圖和短句讓孩子看懂意思；正式圖片會在句子審核後加入。
      </p>
      <div className="picture-sentence-list">
        {lesson.sentences.map((sentence) => (
          <button
            className="picture-sentence-card"
            key={sentence.id}
            disabled={disabled}
            onClick={() => playSentence(sentence)}
          >
            {sentence.imageSrc ? (
              <img src={sentence.imageSrc} alt="" />
            ) : (
              <div className="image-placeholder" aria-label="圖片待製作">
                <span>圖片待製作</span>
              </div>
            )}
            <SentenceCard sentence={sentence} zhuyinMap={zhuyinMap} activeCharIndex={null} />
          </button>
        ))}
      </div>
      <button className="btn secondary" disabled={disabled || done} onClick={onDone}>
        看完配圖
      </button>
    </>
  );
}

function playSentence(sentence: LessonSentence) {
  if (sentence.audio?.src) {
    playAudioSrc(sentence.audio.src);
    return;
  }
  playSpokenText(sentence.spokenText);
}

function playLessonChar(lesson: Lesson, char: string) {
  const src = lesson.charAudio?.[char];
  if (src) {
    playAudioSrc(src);
    return;
  }
  playSpokenText(char);
}

function playAudioSrc(src: string) {
  const audio = new Audio(src);
  void audio.play();
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
