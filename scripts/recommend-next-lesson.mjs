import fs from "node:fs";
import path from "node:path";
import { getEnv, getSecretEnv } from "./lib/env.mjs";

const curriculumPath = path.resolve("src/curriculum/sample-lessons.json");
const bankPath = path.resolve("curriculum-workflow/next-character-bank.json");
const defaultOutputDir = path.resolve("curriculum-workflow/recommendations");

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
    .filter((sentence) => sentence.text && forbiddenChars(sentence, allowedChars).length === 0);
}

function scoreCandidate(entry, learnedChars, recentPool) {
  const learned = new Set(learnedChars);
  const recent = new Set(recentPool);
  const requiredMissing = (entry.requires ?? []).filter((char) => !learned.has(char));
  if (requiredMissing.length > 0) return null;

  const sentenceChars = unique((entry.sentenceCandidates ?? []).flatMap((sentence) => hanChars(sentence.text ?? "")));
  const reviewHits = sentenceChars.filter((char) => recent.has(char)).length;
  return {
    base: Number(entry.priority ?? 1000),
    reviewHits,
    value: Number(entry.priority ?? 1000) - reviewHits * 2,
  };
}

function buildLocalRecommendations({ bank, learnedChars, recentPool, count }) {
  const learned = new Set(learnedChars);
  return bank
    .filter((entry) => !learned.has(entry.char))
    .map((entry) => {
      const score = scoreCandidate(entry, learnedChars, recentPool);
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

function buildAiPrompt({ lesson, learnedChars, recentPool, recommendations }) {
  const recentSentences = lastLessons(lesson.previousLessons, 5)
    .flatMap((item) => item.sentences?.map((sentence) => sentence.text) ?? [])
    .slice(-24);

  return `We are planning the next lesson for a Taiwan zhuyin preschool character-recognition app.

Current next lesson:
- Lesson id: ${lesson.id}
- Order: ${lesson.order}

Already taught characters:
${learnedChars.join(" ")}

Recent review pool:
${recentPool.join(" ")}

Recent reviewed sentences:
${recentSentences.map((sentence) => `- ${sentence}`).join("\n")}

Candidate new characters from the local planner:
${recommendations
  .map((item) => `- ${item.newChars.join("")}: ${item.rationale}`)
  .join("\n")}

Task:
For each candidate, improve or replace the sentenceCandidates. Return JSON only.

Strict rules:
- Use Taiwan Mandarin.
- No Hanyu pinyin.
- For each candidate, display text may use only already taught characters plus that candidate new character.
- Do not introduce any other Han character.
- Keep sentences concrete, imageable, and appropriate for young children.
- Prefer reviewing recent characters naturally.
- spokenText omits punctuation but must not omit any Han character shown in text.
- Avoid unnatural phrases such as 二個人.
- Return 4 to 6 sentence candidates per character if possible.

JSON shape:
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

async function refineWithAi({ review, lesson, learnedChars, recentPool }) {
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
  blocks.push(`# ${review.lessonId} Next-Lesson Recommendations`);
  blocks.push("");
  blocks.push(`Generated: ${review.generatedAt}`);
  blocks.push(`Current learned characters: ${review.learnedChars.join(" ")}`);
  blocks.push(`Recent review pool: ${review.recentReviewPool.join(" ")}`);
  blocks.push("");
  blocks.push("## How To Use");
  blocks.push("");
  blocks.push("1. Pick one recommended character.");
  blocks.push("2. Choose 4-6 sentences, or edit/add your own.");
  blocks.push("3. Put the final choice into the `approval` section of the JSON file.");
  blocks.push("4. Run `npm run curriculum:request-from-review -- --review <json path>`.");
  blocks.push("");

  for (const [index, recommendation] of review.recommendations.entries()) {
    blocks.push(`## ${index + 1}. ${recommendation.newChars.join("")} (${Object.values(recommendation.zhuyin).join(", ")})`);
    blocks.push("");
    blocks.push(`Choice id: \`${recommendation.choiceId}\``);
    blocks.push("");
    blocks.push(`Why: ${recommendation.rationale}`);
    blocks.push("");
    blocks.push("| # | Sentence | Spoken Text | Focus | Reason |");
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
const recommendations = buildLocalRecommendations({ bank, learnedChars, recentPool, count });

const review = {
  lessonId: id,
  order,
  generatedAt: new Date().toISOString(),
  learnedChars,
  recentReviewPool: recentPool,
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
