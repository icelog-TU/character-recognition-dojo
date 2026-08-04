import fs from "node:fs";
import path from "node:path";
import { getEnv, requireOpenAIKey } from "./lib/env.mjs";

const curriculumPath = path.resolve("src/curriculum/sample-lessons.json");
const inboxRoot = path.resolve("curriculum-workflow/audio-inbox");

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

function flagEnabled(value) {
  return value !== false && value !== "false" && value !== "0" && value !== "no";
}

function filenameSafe(text) {
  if (Array.from(text).length === 1 && /\p{Script=Han}/u.test(text)) {
    return `u${text.codePointAt(0).toString(16)}`;
  }
  return text.replace(/[\\/:*?"<>|]/g, "_");
}

function hanChars(text) {
  return Array.from(text.matchAll(/\p{Script=Han}/gu), (match) => match[0]);
}

function draftNameFromAudioSrc(audioSrc) {
  const base = path.basename(audioSrc);
  return base.replace(/\.(m4a|mp3|wav)$/i, ".mp3");
}

const baseSpeechInstructions = [
  "Use natural Taiwan Mandarin pronunciation for young children.",
  "Speak clearly, warmly, and gently.",
  "Use Taiwan Mandarin, not a Beijing or Mainland China accent.",
  "Do not add erhua, retroflex-r, r-colored curled endings, or any Beijing-style final r sound.",
  "Keep final syllables clean, plain, and audible.",
  "Pronunciation guardrails: 小孩 is ㄒㄧㄠˇ ㄏㄞˊ, never ㄒㄧㄠˇ ㄏㄞˊㄦ or any r-colored form; 孩 always ends cleanly as ㄏㄞˊ. 更 is ㄍㄥˋ and, when generated as a single character, must be spoken exactly once.",
  "Do not read punctuation aloud.",
  "For a single Chinese character, read the character once as a complete syllable, not as separate zhuyin sounds.",
].join(" ");

async function createSpeech({ apiKey, model, voice, input, outputPath, instructionsExtra = "" }) {
  const response = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      voice,
      input,
      response_format: "mp3",
      speed: 0.9,
      instructions: [baseSpeechInstructions, instructionsExtra].filter(Boolean).join(" "),
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`OpenAI audio failed for ${outputPath}: ${response.status} ${response.statusText}\n${body}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(outputPath, buffer);
}

const args = parseArgs(process.argv.slice(2));
const lessonId = String(args.lesson || "L001").toUpperCase();
const sentenceFilter = args.sentence ? String(args.sentence).toUpperCase() : null;
const includeSentences = flagEnabled(args.sentences);
const includeChars = flagEnabled(args.chars);
const includeGameAudio = includeSentences && flagEnabled(args.gameAudio ?? args["game-audio"]);

const apiKey = requireOpenAIKey();
const model = getEnv("OPENAI_TTS_MODEL", "gpt-4o-mini-tts");
const voice = getEnv("OPENAI_TTS_VOICE", "coral");
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, "utf8"));
const lesson =
  curriculum.lessons?.find((candidate) => candidate.id === lessonId) ??
  curriculum.reviewLessons?.find((candidate) => candidate.id === lessonId);

if (!lesson) {
  console.error(`Lesson not found: ${lessonId}`);
  process.exit(1);
}

const outputDir = path.join(inboxRoot, lessonId);
fs.mkdirSync(outputDir, { recursive: true });

const jobs = [];
const jobPaths = new Set();
function addJob(input, outputPath, instructionsExtra = "") {
  if (!input || !outputPath) return;
  if (jobPaths.has(outputPath)) return;
  jobPaths.add(outputPath);
  jobs.push({ input, outputPath, instructionsExtra });
}

if (includeChars) {
  for (const char of lesson.newChars ?? []) {
    const zhuyin = lesson.zhuyin?.[char];
    addJob(
      char,
      path.join(outputDir, `char-${filenameSafe(char)}.mp3`),
      zhuyin
        ? `This is single-character audio. The target character is ${char}, pronounced with Taiwan zhuyin ${zhuyin}. Say ${char} exactly once.`
        : "",
    );
  }
}

if (includeSentences) {
  for (const sentence of lesson.sentences ?? []) {
    if (sentence.approved !== true) continue;
    if (sentenceFilter && sentence.id.toUpperCase() !== sentenceFilter) continue;
    addJob(sentence.spokenText, path.join(outputDir, `${sentence.id}.mp3`));
  }
}

if (includeGameAudio) {
  const sentencesById = new Map((lesson.sentences ?? []).map((sentence) => [sentence.id, sentence]));
  for (const game of lesson.sentenceGames ?? []) {
    if (sentenceFilter && game.sentenceId?.toUpperCase() !== sentenceFilter) continue;

    if (game.type === "teach-character") {
      const sentence = sentencesById.get(game.sentenceId);
      if (!sentence || !Number.isInteger(game.targetCharIndex)) continue;
      const chars = hanChars(sentence.text);
      const prefixText = chars.slice(0, game.targetCharIndex).join("");
      const suffixText = chars.slice(game.targetCharIndex + 1).join("");
      if (game.teachAudio?.prefixSrc) {
        addJob(prefixText, path.join(outputDir, draftNameFromAudioSrc(game.teachAudio.prefixSrc)));
      }
      if (game.teachAudio?.suffixSrc) {
        addJob(suffixText, path.join(outputDir, draftNameFromAudioSrc(game.teachAudio.suffixSrc)));
      }
    }

    if (game.type === "choose-pronunciation") {
      for (const option of game.options ?? []) {
        if (option.correct === true || !option.audioSrc) continue;
        addJob(option.text, path.join(outputDir, draftNameFromAudioSrc(option.audioSrc)));
      }
    }
  }
}

for (const job of jobs) {
  console.log(`Generating ${path.basename(job.outputPath)}: ${job.input}`);
  await createSpeech({
    apiKey,
    model,
    voice,
    input: job.input,
    outputPath: job.outputPath,
    instructionsExtra: job.instructionsExtra,
  });
}

console.log(`Wrote ${jobs.length} audio draft file(s) to ${outputDir}`);
console.log("Next: run npm run assets:audio -- --lesson " + lessonId);
