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
  const constraints = raw.generationConstraints && typeof raw.generationConstraints === "object" ? raw.generationConstraints : {};
  const id = raw.id ?? (Number.isInteger(order) ? lessonId(order) : "");
  const kind = raw.kind === "review" || /^R\d{3}$/.test(id) ? "review" : "lesson";
  return {
    kind,
    id,
    order,
    newChars,
    zhuyin,
    title: raw.title ?? newChars.join(""),
    targetSentenceCount: Number(raw.targetSentenceCount ?? 6),
    teacherNotes: raw.teacherNotes ?? "",
    reviewNumber: Number(raw.reviewNumber ?? 0),
    afterLessonOrder: Number(raw.afterLessonOrder ?? 0),
    targetLessonRange: raw.targetLessonRange && typeof raw.targetLessonRange === "object" ? raw.targetLessonRange : null,
    requiredCoverageChars: Array.isArray(constraints.requiredCoverageChars)
      ? constraints.requiredCoverageChars
      : Array.isArray(raw.requiredCoverageChars)
        ? raw.requiredCoverageChars
        : [],
    generationConstraints: constraints,
    provisionalLearnedChars: Array.isArray(constraints.provisionalLearnedChars) ? constraints.provisionalLearnedChars : [],
    requestedAllowedChars: Array.isArray(constraints.allowedChars) ? constraints.allowedChars : [],
  };
}

function validateRequest(request, existingLessons) {
  const errors = [];
  if (request.kind === "review") {
    if (!/^R\d{3}$/.test(request.id)) errors.push("複習模組 `id` 必須使用 R###，例如 R001。");
    if (request.newChars.length > 0) errors.push("複習模組不可包含 `newChars`；請使用 `requiredCoverageChars`。");
    if (!Number.isInteger(request.reviewNumber) || request.reviewNumber < 1) errors.push("複習模組 `reviewNumber` 必須是正整數。");
    if (!Number.isInteger(request.afterLessonOrder) || request.afterLessonOrder < 1) errors.push("複習模組 `afterLessonOrder` 必須是正整數。");
    if (!request.targetLessonRange) {
      errors.push("複習模組必須包含 `targetLessonRange`。");
    }
    return errors;
  }

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
  if (request.kind === "review") {
    return {
      id: request.id,
      reviewNumber: request.reviewNumber,
      title: request.title,
      afterLessonOrder: request.afterLessonOrder,
      targetLessonRange: request.targetLessonRange,
      requiredCoverageChars: request.requiredCoverageChars,
      requiredRounds: Math.max(1, request.targetSentenceCount),
      sentences: [],
    };
  }

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

function buildSentenceGenerationRules(request) {
  const constraints = request.generationConstraints ?? {};
  const targetMinimums =
    constraints.targetCharMinimumCount && typeof constraints.targetCharMinimumCount === "object"
      ? constraints.targetCharMinimumCount
      : {};
  const recentMinimums =
    constraints.recentTargetMinimumCounts && typeof constraints.recentTargetMinimumCounts === "object"
      ? constraints.recentTargetMinimumCounts
      : {};
  const targetLines = Object.entries(targetMinimums).map(([char, count]) => `- 本課目標字 \`${char}\` 至少出現 ${count} 次。`);
  const recentLines = Object.entries(recentMinimums).map(([char, count]) => `- 複習目標字 \`${char}\` 至少出現 ${count} 次。`);

  const minimumLines =
    targetLines.length || recentLines.length
      ? [...targetLines, ...recentLines].join("\n")
      : [
          "- 本課目標字至少出現 3 次。",
          "- 前三課目標字每字至少出現 2 次。",
          "- 往前第四課、第五課目標字每字至少出現 1 次。",
        ].join("\n");

  return `## 句子生成 SOP

生成候選句前必須遵守 \`docs/SENTENCE_GENERATION_SOP.md\`。

覆蓋規則：

${minimumLines}

詞組優先規則：

- 生成句子前，先列出本課目標字和完整已學字集合可以組成的自然詞或短語。
- 再列出本課目標字和前五課較不熟複習字可以組成的自然詞或短語。
- 以用詞多樣性作為寫作目標；覆蓋次數只是最低檢查門檻。
- 優先使用孩子聽得懂、畫面看得出來的詞組，例如 \`坐起來\`、\`坐下\`、\`坐著\`、\`坐到\`、\`不可坐\` 這類自然組合。
- 不要只在最近五課字裡打轉；如果完整已學字集合能和目標字形成更好的詞，優先使用那些詞。

品質規則：

- 每句 4-12 個漢字，不含標點，除非教師另有明確核准。
- 覆蓋次數是最低門檻，不是寫作目標；不要為了湊字讓五句都長得一樣。
- 句意要清楚、自然、有畫面，且適合幼兒理解。
- 位置字必須有清楚參照物，例如 \`門左邊\`、\`我左邊\`、\`門前\`、\`家裡\`。
- 如果句子只是在機械湊字，即使覆蓋數達標也要重寫。
`;
}

function buildPacket({ request, learnedChars, provisionalLearnedChars, allowedChars, priorSentences }) {
  const id = request.id;
  const assetBase = request.kind === "review" ? `/assets/reviews/${id}` : `/assets/lessons/${id}`;
  const charAudioMap = Object.fromEntries(
    request.newChars.map((char) => [char, `${assetBase}/audio/char-${char}.m4a`]),
  );
  const range = sentenceRange(allowedChars.length, request.targetSentenceCount);
  const priorSentenceLines =
    priorSentences.length > 0 ? priorSentences.map((sentence) => `- ${sentence}`).join("\n") : "- 尚無。";

  if (request.kind === "review") {
    const targetRange = request.targetLessonRange;
    return `# ${id} 複習模組生成資料包

## 複習需求

- 複習模組：${id}
- 顯示名稱：${request.title || `複習${request.reviewNumber}`}
- 複習序號：${request.reviewNumber}
- 接在課程：L${String(request.afterLessonOrder).padStart(3, "0")} 後，不佔 L 課程序號。
- 覆蓋目標：L${String(targetRange.startOrder).padStart(3, "0")}-L${String(targetRange.endOrder).padStart(3, "0")}
- 目標句數：${request.targetSentenceCount}
- 本模組必選覆蓋字：${request.requiredCoverageChars.join(" ")}
- 教師備註：${request.teacherNotes || "無"}

## 已學字邊界

- 可用漢字：${allowedChars.join(" ")}
- 禁止：任何未列在上方的漢字。
- 複習模組不引入新字，不可建立 \`newChars\` 或單字 \`charAudio\`。
- 只能使用臺灣華語與臺灣繁體字。
- 不要使用漢語拼音。
- 不要產生學習單式問答或測驗題。

## 既有句型風格

以下只作為風格參考，不要照抄任何商業書籍序列。

${priorSentenceLines}

## 造句提示

請為幼兒認字 App 產生${range}。句子必須自然、具體、容易配圖，並協助覆蓋上方必選字。

規則：

1. 顯示句子只能使用上方允許的漢字。
2. 本模組不教新字；每一句的 focusChar 必須是句中已學字。
3. 這一對複習模組共有 10 句，必須合計覆蓋目標 30 課的所有新字。
4. 除非真的有助於顯示，否則不要加標點；若 display text 有標點，spokenText 必須省略標點。
5. 只回傳 JSON 候選句，格式如下：

\`\`\`json
[
  {
    "text": "一個人看鳥",
    "spokenText": "一個人看鳥",
    "focusChar": "鳥",
    "reason": "只使用已學字，並複習目標覆蓋字。"
  }
]
\`\`\`

## 圖片與音訊規則

- 圖片風格必須以已核准的 L058 圖書館基準圖為固定參考：\`public/assets/lessons/L058/images/L058-S01.webp\`、\`public/assets/lessons/L058/images/L058-S02.webp\`、\`public/assets/lessons/L058/images/L058-S03.webp\`。
- 如果圖片工具可以附參考圖，產生新圖或替換圖時必須附上這三張參考圖；如果不能附圖，必須在工作紀錄說明限制，並在 prompt 寫出這三個路徑與具體風格特徵。
- prompt 必須明寫：modern children's picture-book illustration, warm natural light, fine pencil-and-watercolor linework, detailed but clean environments, consistent expressive preschool proportions, soft cheeks, gentle facial expressions, bright warm palette, phone-readable composition。
- 不可只寫「warm watercolor children picture-book style」這種泛稱；這會讓畫風跑掉。
- 圖片目標路徑格式：\`${assetBase}/images/${id}-S01.webp\`
- 句音訊目標路徑格式：\`${assetBase}/audio/${id}-S01.m4a\`
- 複習模組沒有單字音訊。
- 每句仍需要 reviewed imagePrompt、AI 句子音訊、正式 charTimings。

## 最終 ReviewLesson JSON 格式

\`\`\`json
{
  "id": "${id}",
  "reviewNumber": ${request.reviewNumber},
  "title": "${request.title || `複習${request.reviewNumber}`}",
  "afterLessonOrder": ${request.afterLessonOrder},
  "targetLessonRange": ${JSON.stringify(request.targetLessonRange)},
  "requiredCoverageChars": ${JSON.stringify(request.requiredCoverageChars)},
  "requiredRounds": ${Math.max(1, request.targetSentenceCount)},
  "sentences": []
}
\`\`\`
`;
  }

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
${provisionalLearnedChars.length ? `- 平行備課暫定已學字：${provisionalLearnedChars.join(" ")}\n` : ""}- 本課新字：${request.newChars.join(" ")}
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

${buildSentenceGenerationRules(request)}

規則：

1. 顯示句子只能使用上方允許的漢字。
2. 先做詞組發想，再寫句子；不要直接用字數覆蓋表硬湊句子。
3. 前一兩句可以複習前面課程的句型。
4. 依照上方句子生成 SOP 的最低出現次數練習本課新字；如果本課有兩個新字，代表它們是需要一起學的詞語或教學單位，候選句要優先讓兩個新字一起出現，不要只練其中一個字。
5. 句子要具體、容易配圖。
6. 優先使用幼兒容易理解的臺灣華語。
7. 除非真的有助於顯示，否則不要加標點；若 display text 有標點，spokenText 必須省略標點。
8. 只回傳 JSON 候選句，格式如下：

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

- 圖片風格必須以已核准的 L058 圖書館基準圖為固定參考：\`public/assets/lessons/L058/images/L058-S01.webp\`、\`public/assets/lessons/L058/images/L058-S02.webp\`、\`public/assets/lessons/L058/images/L058-S03.webp\`。
- 如果圖片工具可以附參考圖，產生新圖或替換圖時必須附上這三張參考圖；如果不能附圖，必須在工作紀錄說明限制，並在 prompt 寫出這三個路徑與具體風格特徵。
- prompt 必須明寫：modern children's picture-book illustration, warm natural light, fine pencil-and-watercolor linework, detailed but clean environments, consistent expressive preschool proportions, soft cheeks, gentle facial expressions, bright warm palette, phone-readable composition。
- 不可只寫「warm watercolor children picture-book style」這種泛稱；這會讓畫風跑掉。
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

const boundaryOrder = request.kind === "review" ? request.afterLessonOrder : request.order - 1;
const previousLessons = existingLessons.filter((lesson) => lesson.order <= boundaryOrder);
const learnedChars = unique(previousLessons.flatMap((lesson) => lesson.newChars ?? []));
const provisionalLearnedChars = unique(request.provisionalLearnedChars.filter((char) => !learnedChars.includes(char)));
const allowedChars = request.requestedAllowedChars.length
  ? unique(request.requestedAllowedChars)
  : unique([...learnedChars, ...provisionalLearnedChars, ...request.newChars]);
const priorSentences = previousLessons.flatMap((lesson) => lesson.sentences?.map((sentence) => sentence.text) ?? []);
const packet = buildPacket({ request, learnedChars, provisionalLearnedChars, allowedChars, priorSentences });
const draft = buildDraft(request);

fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(draftDir, { recursive: true });

const packetPath = path.join(outputDir, `${request.id}-generation-packet.md`);
const draftPath = path.join(draftDir, `${request.id}-draft.json`);

fs.writeFileSync(packetPath, packet, "utf8");
fs.writeFileSync(draftPath, `${JSON.stringify(draft, null, 2)}\n`, "utf8");

console.log(`已寫入 ${packetPath}`);
console.log(`已寫入 ${draftPath}`);
