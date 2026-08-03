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

async function createSpeech({ apiKey, model, voice, input, outputPath }) {
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
      instructions:
        "Use natural Taiwan Mandarin pronunciation for young children. Speak clearly, warmly, and gently. Use Taiwan Mandarin, not a Beijing or Mainland China accent. Do not add erhua, retroflex-r, r-colored curled endings, or any Beijing-style final r sound. Keep final syllables clean, plain, and audible. Pronunciation guardrails: 小孩 is ㄒㄧㄠˇ ㄏㄞˊ, never ㄒㄧㄠˇ ㄏㄞˊㄦ or any r-colored form; 孩 always ends cleanly as ㄏㄞˊ. Do not read punctuation aloud. For a single Chinese character, read the character once as a complete syllable, not as separate zhuyin sounds.",
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

const apiKey = requireOpenAIKey();
const model = getEnv("OPENAI_TTS_MODEL", "gpt-4o-mini-tts");
const voice = getEnv("OPENAI_TTS_VOICE", "coral");
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, "utf8"));
const lesson = curriculum.lessons?.find((candidate) => candidate.id === lessonId);

if (!lesson) {
  console.error(`Lesson not found: ${lessonId}`);
  process.exit(1);
}

const outputDir = path.join(inboxRoot, lessonId);
fs.mkdirSync(outputDir, { recursive: true });

const jobs = [];
if (includeChars) {
  for (const char of lesson.newChars ?? []) {
    jobs.push({
      input: char,
      outputPath: path.join(outputDir, `char-${filenameSafe(char)}.mp3`),
    });
  }
}

if (includeSentences) {
  for (const sentence of lesson.sentences ?? []) {
    if (sentence.approved !== true) continue;
    if (sentenceFilter && sentence.id.toUpperCase() !== sentenceFilter) continue;
    jobs.push({
      input: sentence.spokenText,
      outputPath: path.join(outputDir, `${sentence.id}.mp3`),
    });
  }
}

for (const job of jobs) {
  console.log(`Generating ${path.basename(job.outputPath)}: ${job.input}`);
  await createSpeech({ apiKey, model, voice, input: job.input, outputPath: job.outputPath });
}

console.log(`Wrote ${jobs.length} audio draft file(s) to ${outputDir}`);
console.log("Next: run npm run assets:audio -- --lesson " + lessonId);
