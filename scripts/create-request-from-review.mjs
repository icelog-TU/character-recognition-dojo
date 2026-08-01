import fs from "node:fs";
import path from "node:path";

const defaultReviewDir = path.resolve("curriculum-workflow/recommendations");
const requestDir = path.resolve("curriculum-workflow/lesson-requests");

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

function latestReviewPath() {
  if (!fs.existsSync(defaultReviewDir)) return null;
  const files = fs
    .readdirSync(defaultReviewDir)
    .filter((name) => /-next-lesson-review\.json$/i.test(name))
    .map((name) => path.join(defaultReviewDir, name))
    .sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs);
  return files[0] ?? null;
}

function parseIndexes(value) {
  if (Array.isArray(value)) return value.map(Number);
  if (typeof value !== "string" || value.trim() === "") return [];
  return value
    .split(",")
    .map((item) => Number(item.trim()))
    .filter(Number.isInteger);
}

function normalizeSentence(sentence, fallbackFocusChar) {
  const text = String(sentence.text ?? "").trim();
  const spokenText = String(sentence.spokenText ?? text).replace(/[，。！？、,.!?]/g, "");
  const focusChar = String(sentence.focusChar ?? fallbackFocusChar).trim();
  const reason = String(sentence.reason ?? "Teacher-added sentence.").trim();
  return { text, spokenText, focusChar, reason };
}

function sentenceListText(sentences) {
  return sentences.map((sentence) => sentence.text).join("; ");
}

const args = parseArgs(process.argv.slice(2));
const reviewPath = path.resolve(args.review || latestReviewPath() || "");

if (!reviewPath || !fs.existsSync(reviewPath)) {
  console.error("Review file not found. Run npm run curriculum:recommend first, or pass --review <path>.");
  process.exit(1);
}

const review = readJson(reviewPath);
const selectedChoiceId = String(args.choice || review.approval?.selectedChoiceId || "").trim();
if (!selectedChoiceId) {
  console.error("No selected choice. Set approval.selectedChoiceId in the review JSON, or pass --choice choice-字.");
  process.exit(1);
}

const recommendation = review.recommendations?.find((item) => item.choiceId === selectedChoiceId);
if (!recommendation) {
  console.error(`Choice not found in review: ${selectedChoiceId}`);
  process.exit(1);
}

const indexes = parseIndexes(args.sentences ?? review.approval?.approvedSentenceIndexes);
if (indexes.length === 0) {
  console.error("No approved sentence indexes. Set approval.approvedSentenceIndexes or pass --sentences 0,1,2.");
  process.exit(1);
}

const approvedSentences = indexes.map((index) => {
  const sentence = recommendation.sentenceCandidates?.[index];
  if (!sentence) throw new Error(`Sentence index ${index} does not exist for ${selectedChoiceId}.`);
  return normalizeSentence(sentence, recommendation.newChars[0]);
});

const customSentences = (review.approval?.customSentences ?? []).map((sentence) =>
  normalizeSentence(sentence, recommendation.newChars[0]),
);

const finalSentences = [];
const seenSentences = new Set();
for (const sentence of [...approvedSentences, ...customSentences]) {
  if (!sentence.text) continue;
  const key = `${sentence.text}\n${sentence.spokenText}`;
  if (seenSentences.has(key)) continue;
  seenSentences.add(key);
  finalSentences.push(sentence);
}
if (finalSentences.length === 0) {
  console.error("No final sentences selected.");
  process.exit(1);
}

const request = {
  order: review.order,
  newChars: recommendation.newChars,
  zhuyin: recommendation.zhuyin,
  title: recommendation.title,
  targetSentenceCount: finalSentences.length,
  teacherNotes: [
    "Generated from curriculum recommendation review.",
    `Selected choice: ${selectedChoiceId}.`,
    `Approved sentences: ${sentenceListText(finalSentences)}.`,
    review.approval?.notes ? `Teacher notes: ${review.approval.notes}` : "",
    "Use only learned characters plus the new character(s). Generate reviewed image prompts, AI sentence audio, and production AI charTimings after teacher approval.",
  ]
    .filter(Boolean)
    .join(" "),
  approvedSentences: finalSentences,
};

fs.mkdirSync(requestDir, { recursive: true });
const outputPath = path.join(requestDir, `${review.lessonId}.json`);
fs.writeFileSync(outputPath, `${JSON.stringify(request, null, 2)}\n`, "utf8");

console.log(`Wrote ${outputPath}`);
console.log(`Selected ${selectedChoiceId}: ${recommendation.newChars.join("")}`);
console.log(`Approved sentences: ${sentenceListText(finalSentences)}`);
