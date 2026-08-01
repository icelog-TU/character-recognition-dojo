import fs from "node:fs";
import path from "node:path";

const curriculumPath = path.resolve("src/curriculum/sample-lessons.json");
const defaultRequestPath = path.resolve("curriculum-workflow/lesson-requests/L004-example.json");

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const item = argv[i];
    if (!item.startsWith("--")) continue;
    const key = item.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
    } else {
      args[key] = next;
      i += 1;
    }
  }
  return args;
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function unique(items) {
  return [...new Set(items)];
}

function lessonId(order) {
  return `L${String(order).padStart(3, "0")}`;
}

function normalizeRequest(raw) {
  const order = Number(raw.order);
  const newChars = Array.isArray(raw.newChars) ? raw.newChars : [];
  const zhuyin = raw.zhuyin && typeof raw.zhuyin === "object" ? raw.zhuyin : {};
  const id = raw.id ?? lessonId(order);
  return {
    id,
    order,
    newChars,
    zhuyin,
    title: raw.title ?? newChars.join(""),
    targetSentenceCount: Number(raw.targetSentenceCount ?? 6),
    teacherNotes: raw.teacherNotes ?? "",
  };
}

function validateRequest(request, existingLessons) {
  const errors = [];
  if (!Number.isInteger(request.order) || request.order < 1) errors.push("`order` 必須是正整數。");
  if (request.newChars.length === 0) errors.push("`newChars` 至少要包含一個漢字。");

  const sameLesson = existingLessons.find((lesson) => lesson.id === request.id || lesson.order === request.order);
  const introduced = new Set(
    existingLessons
      .filter((lesson) => lesson.id !== sameLesson?.id)
      .flatMap((lesson) => lesson.newChars ?? []),
  );
  for (const char of request.newChars) {
    if (!/\p{Script=Han}/u.test(char)) errors.push(`${char}: newChars 項目必須是漢字。`);
    if (introduced.has(char)) errors.push(`${char}: 這個字已經存在於 curriculum。`);
    if (!request.zhuyin[char]) errors.push(`${char}: 必須提供注音。`);
  }
  return errors;
}

function sentenceRange(allowedCharCount, requestedCount) {
  if (allowedCharCount <= 4) return "3 到 4 句很短的句子";
  if (allowedCharCount <= 8) return "4 到 6 句短句";
  const min = Math.max(6, requestedCount - 1);
  const max = Math.max(6, requestedCount + 1);
  return min === max ? `約 ${min} 句` : `${min} 到 ${max} 句`;
}

function buildDraft(request) {
  return {
    id: request.id,
    order: request.order,
    newChars: request.newChars,
    zhuyin: request.zhuyin,
    charAudio: Object.fromEntries(request.newChars.map((char) => [char, ""])),
    title: request.title,
    requiredRounds: Math.max(1, request.targetSentenceCount),
    originHint: null,
    sentences: [],
  };
}

function buildPacket({ request, learnedChars, allowedChars, priorSentences }) {
  const id = request.id;
  const assetBase = `/assets/lessons/${id}`;
  const charAudioMap = Object.fromEntries(
    request.newChars.map((char) => [char, `${assetBase}/audio/char-${char}.m4a`]),
  );
  const range = sentenceRange(allowedChars.length, request.targetSentenceCount);
  const priorSentenceLines =
    priorSentences.length > 0 ? priorSentences.map((sentence) => `- ${sentence}`).join("\n") : "- 尚無。";

  return `# ${id} 生成資料包

## 課程需求

- 課程：${id}
- 順序：${request.order}
- 新字：${request.newChars.join(" ")}
- 注音：${request.newChars.map((char) => `${char}=${request.zhuyin[char]}`).join("，")}
- 目標句數：${request.targetSentenceCount}
- 教師備註：${request.teacherNotes || "無"}

## 已學字邊界

AI 必須把這份課程序列視為鎖定邊界。

- 前面已學字：${learnedChars.join(" ") || "無"}
- 本課新字：${request.newChars.join(" ")}
- 顯示句子可用漢字：${allowedChars.join(" ")}
- 禁止：任何未列在上方的漢字。
- 只能使用臺灣華語與臺灣繁體字。
- 不要使用漢語拼音。
- 不要產生學習單式問答或測驗題。
- 避免不自然的臺灣華語用法；自然語感優先於機械組字。

## 既有句型風格

以下只作為風格參考，不要照抄任何商業書籍序列。

${priorSentenceLines}

## 造句提示

請為幼兒認字 App 產生${range}。

規則：

1. 顯示句子只能使用上方允許的漢字。
2. 前一兩句可以複習前面課程的句型。
3. 至少一半候選句要自然包含本課新字。
4. 句子要具體、容易配圖。
5. 優先使用幼兒容易理解的臺灣華語。
6. 除非真的有助於顯示，否則不要加標點；若 display text 有標點，spokenText 必須省略標點。
7. 只回傳 JSON 候選句，格式如下：

\`\`\`json
[
  {
    "text": "一個人看鳥",
    "spokenText": "一個人看鳥",
    "focusChar": "看",
    "reason": "只使用已學字，並練習本課新字。"
  }
]
\`\`\`

## 圖片生成提示規則

教師核准句子後，每一句都要撰寫一個圖片提示。

規則：

- 使用溫暖、簡潔、適合幼兒的繪本風格。
- 每張圖只呈現一個清楚主意，讓句意容易看懂。
- 不可出現文字、字母、數字、注音、UI、標籤、浮水印或招牌。
- 如果句子有數量，圖片必須清楚符合該數量。
- 優先使用明亮背景與清楚主體。
- 圖片目標路徑格式：\`${assetBase}/images/${id}-S01.webp\`

## 音訊生成規則

教師核准句子後，每一句都要建立一個自然的完整句音訊。

規則：

- 本課每個新字都要建立一個單字音訊。
- 單字音訊目標路徑格式：\`${assetBase}/audio/char-字.m4a\`
- 聲音：自然、清楚、適合幼兒的臺灣華語。
- 讀 \`spokenText\`，不要讀顯示標點。
- 不要把句音訊做成逐字拼接。
- 句音訊目標路徑格式：\`${assetBase}/audio/${id}-S01.m4a\`
- 音訊存在後，產生毫秒單位的字級 timing metadata。
- \`charTimings\` 數量必須符合 display \`text\` 中的漢字數，標點不計。

音訊 metadata 格式：

\`\`\`json
{
  "src": "${assetBase}/audio/${id}-S01.m4a",
  "durationMs": 1200,
  "charTimings": [
    { "charIndex": 0, "startMs": 80, "endMs": 420 }
  ]
}
\`\`\`

## 最終 Curriculum JSON 格式

只有教師核准後，才可以把審核完成的內容移入 \`src/curriculum/sample-lessons.json\`。

\`\`\`json
{
  "id": "${id}",
  "order": ${request.order},
  "newChars": ${JSON.stringify(request.newChars)},
  "zhuyin": ${JSON.stringify(request.zhuyin)},
  "charAudio": ${JSON.stringify(charAudioMap)},
  "title": "${request.title}",
  "requiredRounds": ${Math.max(1, request.targetSentenceCount)},
  "sentences": [
    {
      "id": "${id}-S01",
      "text": "",
      "spokenText": "",
      "focusChar": "${request.newChars[0] ?? ""}",
      "imagePrompt": "",
      "imageSrc": null,
      "approved": false,
      "audio": null
    }
  ]
}
\`\`\`

## 審核清單

- 每個顯示漢字都在允許清單中。
- 句子符合自然臺灣華語。
- 句子容易配圖。
- 本課新字有被有意義地練習。
- 圖片提示不可要求文字、字母或數字。
- 音訊要像完整句子一樣自然朗讀。
- 正式發布前必須有字級 timing metadata。
`;
}

const args = parseArgs(process.argv.slice(2));
const requestPath = path.resolve(args.request || defaultRequestPath);
const outputDir = path.resolve(args.out || "curriculum-workflow/generated");
const draftDir = path.resolve("curriculum-workflow/drafts");

if (!fs.existsSync(requestPath)) {
  console.error(`找不到 request 檔：${requestPath}`);
  console.error("請建立 request JSON，或用 --request path/to/request.json 指定。");
  process.exit(1);
}

const curriculum = readJson(curriculumPath);
const request = normalizeRequest(readJson(requestPath));
const existingLessons = Array.isArray(curriculum.lessons) ? curriculum.lessons : [];
const errors = validateRequest(request, existingLessons);

if (errors.length > 0) {
  for (const error of errors) console.error(`錯誤：${error}`);
  process.exit(1);
}

const previousLessons = existingLessons.filter((lesson) => lesson.order < request.order);
const learnedChars = unique(previousLessons.flatMap((lesson) => lesson.newChars ?? []));
const allowedChars = unique([...learnedChars, ...request.newChars]);
const priorSentences = previousLessons.flatMap((lesson) => lesson.sentences?.map((sentence) => sentence.text) ?? []);
const packet = buildPacket({ request, learnedChars, allowedChars, priorSentences });
const draft = buildDraft(request);

fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(draftDir, { recursive: true });

const packetPath = path.join(outputDir, `${request.id}-generation-packet.md`);
const draftPath = path.join(draftDir, `${request.id}-draft.json`);

fs.writeFileSync(packetPath, packet, "utf8");
fs.writeFileSync(draftPath, `${JSON.stringify(draft, null, 2)}\n`, "utf8");

console.log(`已寫入 ${packetPath}`);
console.log(`已寫入 ${draftPath}`);
