import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import curriculumData from "./curriculum/sample-lessons.json";
import type { Curriculum, Lesson, LessonSentence } from "./types";
import { buildZhuyinMap, hanChars, nextLockedLessonOrder } from "./lib/curriculum";
import "./index.css";

const curriculum = curriculumData as unknown as Curriculum;

type GameMode = "找字" | "教動物" | "填空" | "排句子" | "誰念對";
type AppPage = "practice" | "catalog" | "records" | "gacha" | "collection" | "settings";
type LessonCharEntry = { lesson: Lesson; char: string; index: number };
type AudioWindow = Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext };
type AudioPlayOptions = {
  onTime?: (elapsedMs: number) => void;
  onEnded?: () => void;
  onError?: () => void;
};
type SpeechTarget = "lesson" | "stage1" | "stage2" | "stage3" | "advance2" | "advance3" | null;
type LessonDestination = "home" | "next";
type LessonReward = { coins: number; stars: number };
type PlaybackStatus = { playing: boolean; paused: boolean };
type StoredProgress = {
  version: 1;
  coins: number;
  stars: number;
  selectedOrder: number;
  completedOrders: number[];
};

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

const GUIDE_TEXT = {
  homeWelcome: "你好呀，歡迎來到認字練功房。請按下面紅色的大按鈕，我們來學認字吧。",
  homeNext: "先聽字，再找字，最後看圖片和句子。",
  lessonStep: "我們一步一步來。",
  toStageTwo: "第一階段完成了。請按下面紅色的大按鈕，進入第二階段的練習。",
  findComplete: "好棒啊，你都找到了。",
  toStageThree: "請按下面紅色的大按鈕，進入第三階段的練習。",
  stageAdvance: "太棒了，我們繼續練功。",
  blockFind: "找找看這一課學的字在哪裡。看到這一課學的字，就點它。",
  findMiss: "這個不是這一課學的字喔，再找找看。",
  blockPicture: "點發光的圖，聽我念一句話。你也要跟著念喔。",
  rewardReady: "好棒，你都念完了。請按紅色大按鈕，領取獎勵。",
  rewardWon: "太棒了！你得到金幣和星星。要下一課，請按紅色按鈕。要回首頁休息，請按白色按鈕。",
} as const;

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

function lessonChars(lesson: Lesson): string[] {
  return lesson.newChars;
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
      selectedOrder: Number.isInteger(parsed.selectedOrder) ? Number(parsed.selectedOrder) : 1,
      completedOrders,
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
  const nextOrder = nextLockedLessonOrder(curriculum.lessons, completedOrders);
  const [selectedOrder, setSelectedOrder] = useState(initialProgress?.selectedOrder ?? nextOrder);
  const playbackState = usePlaybackState();
  const selectedLesson =
    curriculum.lessons.find((lesson) => lesson.order === selectedOrder) ?? curriculum.lessons[0];
  const streakDays = completedOrders.size > 0 ? 1 : 0;

  useEffect(() => {
    if (page === "practice" && !lessonOpen) speakGuide(GUIDE_TEXT.homeWelcome);
  }, [page, lessonOpen]);

  useEffect(() => {
    saveStoredProgress({
      version: 1,
      coins,
      stars,
      selectedOrder,
      completedOrders: [...completedOrders],
    });
  }, [coins, stars, selectedOrder, completedOrders]);

  function grantLessonReward(order: number, rewards: LessonReward) {
    setCoins((value) => value + rewards.coins);
    setStars((value) => value + rewards.stars);
    setCompletedOrders((prev) => {
      const next = new Set(prev);
      next.add(order);
      return next;
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
          />
        )}
        {page === "gacha" && <PlaceholderPage icon="🎁" title="轉蛋" text="之後用金幣抽角色，會從這裡進入。" />}
        {page === "collection" && (
          <PlaceholderPage icon="🎴" title="角色收藏" text="之後所有抽到的角色會放在這裡，也可以做互動。" />
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
  const [activeStage, setActiveStage] = useState(1);
  const [advancingStage, setAdvancingStage] = useState<number | null>(null);
  const [speakingTarget, setSpeakingTarget] = useState<SpeechTarget>(null);
  const [rewardState, setRewardState] = useState<"waiting" | "ready" | "claiming" | "claimed">("waiting");
  const [resetVersion, setResetVersion] = useState(0);
  const advanceRunRef = useRef(0);
  const newChars = lessonChars(lesson);
  const soundUnlocked = newChars.every((char) => heardChars.has(char));
  const zhuyinMap = useMemo(() => buildZhuyinMap(lessons, lesson.order), [lessons, lesson.order]);
  const usesSentenceGames = lesson.order >= 6;
  const requiredPracticeRounds = usesSentenceGames ? Math.min(lesson.requiredRounds, lesson.sentences.length) : 1;
  const lessonReady = soundUnlocked && findUnlocked && practiceDoneCount >= requiredPracticeRounds;
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
    if (activeStage === 3 && practiceDoneCount < requiredPracticeRounds) {
      void speakForTarget("stage3", GUIDE_TEXT.blockPicture);
    }
  }, [activeStage, practiceDoneCount, requiredPracticeRounds]);

  useEffect(() => {
    if (lessonReady && rewardState === "waiting") {
      setRewardState("ready");
      void speakForTarget("stage3", GUIDE_TEXT.rewardReady);
    }
  }, [lessonReady, rewardState]);

  async function speakForTarget(target: SpeechTarget, text: string) {
    setSpeakingTarget(target);
    await speakGuide(text);
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
    setSpotlightChar(char);
    await Promise.all([playLessonChar(lesson, char), waitMs(720)]);
    setHeardChars((prev) => {
      const next = new Set(prev);
      next.add(char);
      return next;
    });
    setSpotlightChar(null);
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
    onReward(lessonReward);
    void speakForTarget("stage3", GUIDE_TEXT.rewardWon);
    await waitMs(3600);
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
        title={usesSentenceGames ? "句子遊戲" : "看圖聽句子"}
        done={practiceDoneCount >= requiredPracticeRounds}
        locked={locked || activeStage < 3}
        active={activeBlock(3)}
      >
        {activeStage < 3 ? (
          <p className="block-note">按紅色按鈕後，這裡才會開始。</p>
        ) : usesSentenceGames ? (
          <SentencePracticePreview
            key={`practice-${lesson.id}-${resetVersion}`}
            lesson={lesson}
            zhuyinMap={zhuyinMap}
            disabled={locked || activeStage < 3}
            doneCount={practiceDoneCount}
            requiredCount={requiredPracticeRounds}
            onRoundDone={() => setPracticeDoneCount((count) => Math.min(count + 1, requiredPracticeRounds))}
          />
        ) : (
          <PictureSentencePreview
            key={`picture-${lesson.id}-${resetVersion}`}
            lesson={lesson}
            zhuyinMap={zhuyinMap}
            disabled={locked || activeStage < 3}
            done={practiceDoneCount >= requiredPracticeRounds}
            onSpeakStart={setSpeakingTarget}
            onSpeakEnd={(target) => setSpeakingTarget((current) => (current === target ? null : current))}
            onDone={() => setPracticeDoneCount(1)}
          />
        )}
      </LessonBlock>

      {lessonReady && (
        <RewardPanel
          state={rewardState}
          reward={lessonReward}
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
              width: `${([soundUnlocked, findUnlocked, practiceDoneCount >= requiredPracticeRounds].filter(Boolean).length / 3) * 100}%`,
            }}
          />
        </div>
        <span className="pill">
          {[soundUnlocked, findUnlocked, practiceDoneCount >= requiredPracticeRounds].filter(Boolean).length} / 3
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
  hasNext,
  onClaim,
  onHome,
  onNext,
  onSpeakStart,
  onSpeakEnd,
}: {
  state: "waiting" | "ready" | "claiming" | "claimed";
  reward: LessonReward;
  hasNext: boolean;
  onClaim: () => void;
  onHome: () => void;
  onNext: () => void;
  onSpeakStart: (target: SpeechTarget) => void;
  onSpeakEnd: (target: SpeechTarget) => void;
}) {
  const claimed = state === "claimed";
  const message = state === "ready" ? GUIDE_TEXT.rewardReady : GUIDE_TEXT.rewardWon;
  const coinCount = useRewardCount(reward.coins, state !== "ready");
  const starCount = useRewardCount(reward.stars, state !== "ready");
  return (
    <section className={`reward-panel active-block reward-${state}`} aria-label="領取獎勵">
      {state === "claiming" && (
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

      <div className="reward-animation" aria-label="本課獎勵">
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
      </div>

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

function stopPlayback() {
  const finishAudio = activeAudioFinish;
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
  }
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  activeTtsFinish?.();
  finishAudio?.("error");
  ttsPausedByApp = false;
  activeAudio = null;
  activeAudioTick = null;
  activeAudioFinish = null;
  activeTtsFinish = null;
  stopAudioFrame();
  emitPlaybackState();
}

function stopAudioFrame() {
  if (!activeAudioFrame) return;
  window.cancelAnimationFrame(activeAudioFrame);
  activeAudioFrame = 0;
}

function playAudioSrc(src: string, options: AudioPlayOptions = {}) {
  const audio = getCachedAudio(src);
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  activeTtsFinish?.();
  activeTtsFinish = null;
  ttsPausedByApp = false;
  if (activeAudio && activeAudio !== audio) activeAudio.pause();
  stopAudioFrame();
  activeAudio = audio;
  audio.pause();
  audio.currentTime = 0;
  return new Promise<void>((resolve) => {
    let settled = false;
    const finish = (kind: "ended" | "error") => {
      if (settled) return;
      settled = true;
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
      options.onTime?.(audio.currentTime * 1000);
      if (!audio.paused && !audio.ended) activeAudioFrame = window.requestAnimationFrame(tick);
    };

    activeAudioFinish = finish;
    activeAudioTick = tick;
    options.onTime?.(0);
    void audio
      .play()
      .then(() => {
        emitPlaybackState();
        tick();
      })
      .catch(() => finish("error"));
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
  const audioWindow = window as AudioWindow;
  const AudioContextClass = audioWindow.AudioContext || audioWindow.webkitAudioContext;
  if (!AudioContextClass) return;
  const context = new AudioContextClass();
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
  return playTts(text, { rate: 0.8, pitch: 1 });
}

function speakGuide(text: string) {
  return playTts(text, { rate: 0.95, pitch: 1.25 });
}

function playTts(text: string, { rate, pitch }: { rate: number; pitch: number }) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean || !("speechSynthesis" in window)) return Promise.resolve();
  if (activeAudio) {
    activeAudioFinish?.("error");
  }
  stopAudioFrame();
  window.speechSynthesis.cancel();
  activeTtsFinish?.();
  activeTtsFinish = null;
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
