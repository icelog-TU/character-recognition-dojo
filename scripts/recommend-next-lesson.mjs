import fs from "node:fs";
import path from "node:path";
import { getEnv, getSecretEnv } from "./lib/env.mjs";

const curriculumPath = path.resolve("src/curriculum/sample-lessons.json");
const bankPath = path.resolve("curriculum-workflow/next-character-bank.json");
const defaultOutputDir = path.resolve("curriculum-workflow/recommendations");
const sentenceLengthRange = { min: 4, max: 12 };
const targetGeneratedSentenceCount = 10;

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

function hanChars(text) {
  return Array.from(text).filter((char) => /\p{Script=Han}/u.test(char));
}

function lessonId(order) {
  return `L${String(order).padStart(3, "0")}`;
}

function lastLessons(lessons, count) {
  return [...lessons].sort((a, b) => a.order - b.order).slice(-count);
}

function recentReviewPool(lessons) {
  return unique(
    lastLessons(lessons, 5).flatMap((lesson) =>
      lesson.sentences?.flatMap((sentence) => hanChars(sentence.text)) ?? [],
    ),
  );
}

function previousLessonNewChars(lessons, count) {
  return unique(lastLessons(lessons, count).flatMap((lesson) => lesson.newChars ?? []));
}

function forbiddenChars(candidate, allowedChars) {
  const allowed = new Set(allowedChars);
  return unique(hanChars(candidate.text).filter((char) => !allowed.has(char)));
}

function cleanLocalSentences(sentences, allowedChars) {
  return (sentences ?? [])
    .map((sentence) => ({
      text: String(sentence.text ?? ""),
      spokenText: String(sentence.spokenText ?? sentence.text ?? "").replace(/[，。！？、,.!?]/g, ""),
      focusChar: String(sentence.focusChar ?? ""),
      reason: String(sentence.reason ?? ""),
    }))
    .filter((sentence) => {
      const length = hanChars(sentence.text).length;
      return (
        sentence.text &&
        forbiddenChars(sentence, allowedChars).length === 0 &&
        length >= sentenceLengthRange.min &&
        length <= sentenceLengthRange.max
      );
    });
}

function scoreCandidate(entry, learnedChars, recentPool, requiredRecentChars, reviewCountChars) {
  const learned = new Set(learnedChars);
  const recent = new Set(recentPool);
  const requiredRecent = new Set(requiredRecentChars ?? []);
  const reviewCount = new Set(reviewCountChars ?? []);
  const requiredMissing = (entry.requires ?? []).filter((char) => !learned.has(char));
  if (requiredMissing.length > 0) return null;

  const allowedChars = unique([...learnedChars, entry.char]);
  const validSentences = cleanLocalSentences(entry.sentenceCandidates, allowedChars);
  const sentenceChars = unique(validSentences.flatMap((sentence) => hanChars(sentence.text ?? "")));
  const reviewHits = sentenceChars.filter((char) => recent.has(char)).length;
  const requiredHits = sentenceChars.filter((char) => requiredRecent.has(char)).length;
  const reviewCountHits = sentenceChars.filter((char) => reviewCount.has(char)).length;
  const sentenceDepth = Math.min(validSentences.length, targetGeneratedSentenceCount);
  const missingSentencePenalty = Math.max(0, 5 - validSentences.length) * 20;
  const base = Number(entry.priority ?? 1000);
  return {
    base,
    reviewHits,
    requiredHits,
    reviewCountHits,
    sentenceDepth,
    value: base - requiredHits * 12 - reviewCountHits * 6 - reviewHits * 2 - sentenceDepth * 2 + missingSentencePenalty,
  };
}

function buildLocalRecommendations({ bank, learnedChars, recentPool, requiredRecentChars, reviewCountChars, count }) {
  const learned = new Set(learnedChars);
  return bank
    .filter((entry) => !learned.has(entry.char))
    .map((entry) => {
      const score = scoreCandidate(entry, learnedChars, recentPool, requiredRecentChars, reviewCountChars);
      if (!score) return null;
      const allowedChars = unique([...learnedChars, entry.char]);
      return {
        choiceId: `choice-${entry.char}`,
        newChars: [entry.char],
        zhuyin: { [entry.char]: entry.zhuyin },
        title: entry.char,
        rationale: entry.why,
        score,
        sentenceCandidates: cleanLocalSentences(entry.sentenceCandidates, allowedChars),
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.score.value - b.score.value)
    .slice(0, count);
}

function buildAiPrompt({ lesson, learnedChars, recentPool, requiredRecentChars, recommendations }) {
  const recentSentences = lastLessons(lesson.previousLessons, 5)
    .flatMap((item) => item.sentences?.map((sentence) => sentence.text) ?? [])
    .slice(-24);

  return `我們正在為臺灣注音幼兒認字 App 規劃下一課。

目前要規劃的下一課：
- 課程 ID：${lesson.id}
- 順序：${lesson.order}

已學字：
${learnedChars.join(" ")}

最近複習字池：
${recentPool.join(" ")}

最近三課必須複習的新字：
${requiredRecentChars.join(" ")}

最近已複習句子：
${recentSentences.map((sentence) => `- ${sentence}`).join("\n")}

本機規劃器提供的候選新字：
${recommendations
  .map((item) => `- ${item.newChars.join("")}: ${item.rationale}`)
  .join("\n")}

任務：
請為每個候選字改善或替換 sentenceCandidates。你必須先在內部大量生成、審核、推翻不好的句子，再只回傳 JSON。

嚴格規則：
- 使用臺灣華語與臺灣繁體字。
- 不要使用漢語拼音。
- 每個候選字的顯示句子，只能使用已學字加上該候選新字；如果候選項目有兩個 newChars，代表它們需要一起學，候選句要優先讓兩個新字一起出現，不要只練其中一個字。
- 不要加入任何其他漢字。
- 每句忽略標點後需為 ${sentenceLengthRange.min}-${sentenceLengthRange.max} 個漢字。
- 句子要具體、容易配圖，並適合幼兒。
- 每個候選字請在內部先想至少 50 句，再淘汰不自然、不可配圖、塞字感重、語法怪的句子。
- 每組前 5 句要像正式一課：前 3 句通常都要包含本課新字，整組前 5 句中本課新字至少出現 3 次。
- 第 4、5 句優先補近五課新字，近五課新字能各出現至少一次最好，能自然出現到 2-3 次更好。
- 自然優先複習最近學過的字，特別是最近五課的字；不要為了塞字犧牲語意。
- 每個候選字的整組候選句中，最近三課必須複習的新字至少各出現一次。
- spokenText 可省略標點，但不可省略 text 中出現的任何漢字。
- 避免不自然用法，例如「二個人」。
- 可以的話，每個候選字請剛好回傳 ${targetGeneratedSentenceCount} 個候選句。
- 回傳前請自我檢查每句：是否只用允許字、是否 4-12 字、是否可畫、是否像已核准課程的短句風格。

JSON 格式：
[
  {
    "choiceId": "choice-下",
    "sentenceCandidates": [
      {
        "text": "我一個人下山",
        "spokenText": "我一個人下山",
        "focusChar": "下",
        "reason": "..."
      }
    ]
  }
]`;
}

function extractOutputText(response) {
  if (typeof response.output_text === "string") return response.output_text;
  const chunks = [];
  for (const item of response.output ?? []) {
    for (const content of item.content ?? []) {
      if (typeof content.text === "string") chunks.push(content.text);
    }
  }
  return chunks.join("\n").trim();
}

function parseJsonText(text) {
  const trimmed = text.trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    const match = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
    if (match) return JSON.parse(match[1]);
    throw new Error("AI response was not valid JSON.");
  }
}

async function refineWithAi({ review, lesson, learnedChars, recentPool, requiredRecentChars }) {
  const apiKey = getSecretEnv("OPENAI_API_KEY");
  if (!apiKey) return { used: false, reason: "OPENAI_API_KEY is not set." };

  const model = getEnv("OPENAI_TEXT_MODEL", "gpt-5-mini");
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: "system",
          content:
            "You draft curriculum sentence candidates for a Taiwan preschool Chinese character recognition app. Return JSON only.",
        },
        {
          role: "user",
          content: buildAiPrompt({
            lesson,
            learnedChars,
            recentPool,
            requiredRecentChars,
            recommendations: review.recommendations,
          }),
        },
      ],
    }),
  });

  if (!response.ok) {
    return {
      used: false,
      reason: `OpenAI response failed: ${response.status} ${response.statusText}`,
      detail: await response.text(),
    };
  }

  const aiItems = parseJsonText(extractOutputText(await response.json()));
  const byId = new Map(aiItems.map((item) => [item.choiceId, item]));
  for (const recommendation of review.recommendations) {
    const aiItem = byId.get(recommendation.choiceId);
    if (!aiItem) continue;
    const allowedChars = unique([...learnedChars, ...recommendation.newChars]);
    const cleaned = cleanLocalSentences(aiItem.sentenceCandidates, allowedChars);
    if (cleaned.length > 0) recommendation.sentenceCandidates = cleaned;
  }
  return { used: true, model };
}

function markdownForReview(review) {
  const blocks = [];
  blocks.push(`# ${review.lessonId} 下一課推薦`);
  blocks.push("");
  blocks.push(`產生時間：${review.generatedAt}`);
  blocks.push(`目前已學字：${review.learnedChars.join(" ")}`);
  blocks.push(`最近複習字池：${review.recentReviewPool.join(" ")}`);
  blocks.push(`最近三課必須複習的新字：${review.requiredRecentChars.join(" ")}`);
  blocks.push(`句長目標：${sentenceLengthRange.min}-${sentenceLengthRange.max} 個漢字`);
  blocks.push("");
  blocks.push("## 使用方式");
  blocks.push("");
  blocks.push("1. 選一個推薦字。");
  blocks.push(`2. 審核最多 ${targetGeneratedSentenceCount} 個候選句，並修改或新增你最後核准的句子。`);
  blocks.push("3. 把最後選擇填入 JSON 檔的 `approval` 區段。");
  blocks.push("4. 執行 `npm run curriculum:request-from-review -- --review <json path>`。");
  blocks.push("");

  for (const [index, recommendation] of review.recommendations.entries()) {
    blocks.push(`## ${index + 1}. ${recommendation.newChars.join("")} (${Object.values(recommendation.zhuyin).join(", ")})`);
    blocks.push("");
    blocks.push(`候選 ID：\`${recommendation.choiceId}\``);
    blocks.push("");
    blocks.push(`推薦理由：${recommendation.rationale}`);
    blocks.push("");
    blocks.push("| # | 句子 | spokenText | focus | 理由 |");
    blocks.push("|---:|---|---|---|---|");
    for (const [sentenceIndex, sentence] of recommendation.sentenceCandidates.entries()) {
      blocks.push(
        `| ${sentenceIndex} | ${sentence.text} | ${sentence.spokenText} | ${sentence.focusChar} | ${sentence.reason} |`,
      );
    }
    blocks.push("");
  }
  return `${blocks.join("\n")}\n`;
}

const args = parseArgs(process.argv.slice(2));
const count = Number(args.count ?? 5);
const outputDir = path.resolve(args.out || defaultOutputDir);
const noAi = args.ai === false || args.ai === "false" || args["no-ai"] === true;

const curriculum = readJson(curriculumPath);
const bank = readJson(bankPath);
const lessons = [...(curriculum.lessons ?? [])].sort((a, b) => a.order - b.order);
const latestOrder = Math.max(...lessons.map((lesson) => lesson.order));
const order = Number(args.order ?? latestOrder + 1);
const id = lessonId(order);
const previousLessons = lessons.filter((lesson) => lesson.order < order);
const learnedChars = unique(previousLessons.flatMap((lesson) => lesson.newChars ?? []));
const recentPool = recentReviewPool(previousLessons);
const requiredRecentChars = previousLessonNewChars(previousLessons, 3);
const reviewCountChars = previousLessonNewChars(previousLessons, 5);
const recommendations = buildLocalRecommendations({ bank, learnedChars, recentPool, requiredRecentChars, reviewCountChars, count });

const review = {
  lessonId: id,
  order,
  generatedAt: new Date().toISOString(),
  learnedChars,
  recentReviewPool: recentPool,
  requiredRecentChars,
  sentenceLengthRange,
  ai: { used: false, reason: noAi ? "Disabled with --no-ai." : "Not run yet." },
  recommendations,
  approval: {
    selectedChoiceId: "",
    approvedSentenceIndexes: [],
    customSentences: [],
    notes: "",
  },
};

if (!noAi && recommendations.length > 0) {
  try {
    review.ai = await refineWithAi({
      review,
      lesson: { id, order, previousLessons },
      learnedChars,
      recentPool,
      requiredRecentChars,
    });
  } catch (error) {
    review.ai = { used: false, reason: error.message };
  }
}

fs.mkdirSync(outputDir, { recursive: true });
const jsonPath = path.join(outputDir, `${id}-next-lesson-review.json`);
const mdPath = path.join(outputDir, `${id}-next-lesson-review.md`);

fs.writeFileSync(jsonPath, `${JSON.stringify(review, null, 2)}\n`, "utf8");
fs.writeFileSync(mdPath, markdownForReview(review), "utf8");

console.log(`Wrote ${jsonPath}`);
console.log(`Wrote ${mdPath}`);
console.log(`Recommended ${recommendations.length} candidate character(s) for ${id}.`);
if (review.ai.used) console.log(`AI refinement used ${review.ai.model}.`);
else console.log(`AI refinement not used: ${review.ai.reason}`);
