import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { requireOpenAIKey } from "./lib/env.mjs";

const require = createRequire(import.meta.url);
const curriculumPath = path.resolve("src/curriculum/sample-lessons.json");
const publicRoot = path.resolve("public");

function packageToolPath(packageName) {
  try {
    return require(packageName).path;
  } catch {
    return null;
  }
}

const ffprobeCommand = process.env.FFPROBE_PATH || packageToolPath("@ffprobe-installer/ffprobe") || "ffprobe";

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

function hanChars(text) {
  return Array.from(text).filter((char) => /\p{Script=Han}/u.test(char));
}

function normalizeTranscribedHanChar(char) {
  const map = new Map([
    ["个", "個"],
    ["只", "隻"],
    ["鸟", "鳥"],
    ["飞", "飛"],
    ["门", "門"],
    ["后", "後"],
    ["没", "沒"],
    ["里", "裡"],
    ["廟", "鳥"],
    ["它", "他"],
    ["她", "他"],
  ]);
  return map.get(char) ?? char;
}

function normalizedHanText(text) {
  return hanChars(text).map(normalizeTranscribedHanChar).join("");
}

function assetPath(src) {
  return path.join(publicRoot, src.replace(/^\//, ""));
}

function durationMs(filePath) {
  const output = execFileSync(ffprobeCommand, [
    "-v",
    "error",
    "-show_entries",
    "format=duration",
    "-of",
    "default=noprint_wrappers=1:nokey=1",
    filePath,
  ], { encoding: "utf8" }).trim();
  return Math.round(Number(output) * 1000);
}

function timingsFromWords(words, sentence) {
  const targetChars = hanChars(sentence.text);
  const timings = [];

  for (const word of words ?? []) {
    const chars = hanChars(word.word);
    if (chars.length === 0) continue;
    const startMs = Math.round(Number(word.start) * 1000);
    const endMs = Math.round(Number(word.end) * 1000);
    const span = Math.max(1, endMs - startMs);

    for (let i = 0; i < chars.length && timings.length < targetChars.length; i += 1) {
      timings.push({
        charIndex: timings.length,
        startMs: Math.round(startMs + (span * i) / chars.length),
        endMs: Math.round(startMs + (span * (i + 1)) / chars.length),
      });
    }
  }

  if (timings.length !== targetChars.length) {
    throw new Error(
      `${sentence.id}: word timestamps produced ${timings.length} Han timings, expected ${targetChars.length}. ` +
        "Regenerate or manually review the sentence audio.",
    );
  }

  return timings;
}

async function transcribeWithWords({ apiKey, filePath, fileName }) {
  const form = new FormData();
  form.append("model", "whisper-1");
  form.append("file", new Blob([fs.readFileSync(filePath)], { type: "audio/mp4" }), fileName);
  form.append("response_format", "verbose_json");
  form.append("timestamp_granularities[]", "word");

  const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}` },
    body: form,
  });

  if (!response.ok) {
    throw new Error(`Transcription failed for ${fileName}: ${response.status} ${await response.text()}`);
  }

  return response.json();
}

const args = parseArgs(process.argv.slice(2));
const lessonFilter = args.lesson ? String(args.lesson).toUpperCase() : null;
const apiKey = requireOpenAIKey();
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, "utf8"));
let changed = 0;

for (const lesson of curriculum.lessons ?? []) {
  if (lessonFilter && lesson.id !== lessonFilter) continue;

  for (const sentence of lesson.sentences ?? []) {
    if (!sentence.audio?.src) continue;
    const filePath = assetPath(sentence.audio.src);
    if (!fs.existsSync(filePath)) {
      console.warn(`Skipping ${sentence.id}; missing audio ${sentence.audio.src}`);
      continue;
    }

    const transcript = await transcribeWithWords({
      apiKey,
      filePath,
      fileName: path.basename(filePath),
    });

    const expected = normalizedHanText(sentence.spokenText || sentence.text);
    const actual = normalizedHanText(transcript.text || "");
    if (actual !== expected) {
      throw new Error(
        `${sentence.id}: transcript does not match spokenText. Expected ${expected}, got ${actual}. ` +
          "Regenerate or review the audio before writing charTimings.",
      );
    }

    sentence.audio.durationMs = durationMs(filePath);
    sentence.audio.charTimings = timingsFromWords(transcript.words, sentence);
    changed += 1;
    console.log(`${sentence.id}: ${transcript.text} ${JSON.stringify(sentence.audio.charTimings)}`);
  }
}

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, "utf8");
console.log(`AI-aligned ${changed} sentence audio file(s).`);
