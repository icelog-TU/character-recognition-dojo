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
  const simplifiedEquivalentMap = new Map([
    ["\u4e2a", "\u500b"],
    ["\u8fd9", "\u9019"],
    ["\u5706", "\u5713"],
    ["\u574f", "\u58de"],
    ["\u955c", "\u93e1"],
    ["\u8138", "\u81c9"],
    ["\u7ea2", "\u7d05"],
    ["\u5934", "\u982d"],
    ["\u96be", "\u96e3"],
    ["\u8fc7", "\u904e"],
    ["\u540e", "\u5f8c"],
    ["\u51e0", "\u5e7e"],
    ["\u70b9", "\u9ede"],
    ["\u4e91", "\u96f2"],
    ["\u8131", "\u812b"],
    ["\u6c14", "\u6c23"],
    ["\u70ed", "\u71b1"],
    ["\u4e48", "\u9ebc"],
    ["\u4e3a", "\u70ba"],
    ["\u95f4", "\u9593"],
    ["\u65f6", "\u6642"],
    ["\u8fd8", "\u9084"],
    ["\u706f", "\u71c8"],
    ["\u5f00", "\u958b"],
    ["\u5173", "\u95dc"],
    ["\u521a", "\u525b"],
    ["\u88c5", "\u88dd"],
    ["\u8f66", "\u8eca"],
    ["\u6ee1", "\u6eff"],
    ["\u6ca1", "\u6c92"],
    ["\u517b", "\u990a"],
    ["\u8c01", "\u8ab0"],
  ]);
  if (simplifiedEquivalentMap.has(char)) return simplifiedEquivalentMap.get(char);

  const map = new Map([
    ["\u753b", "\u756b"],
    ["\u5b66", "\u5b78"],
    ["\u8c01", "\u8ab0"],
    ["\u95ee", "\u554f"],
    ["\u5e26", "\u5e36"],
    ["\u7b14", "\u7b46"],
    ["\u7eb8", "\u7d19"],
    ["\u7ed9", "\u7d66"],
    ["会", "會"],
    ["个", "個"],
    ["这", "這"],
    ["只", "隻"],
    ["鸟", "鳥"],
    ["飞", "飛"],
    ["门", "門"],
    ["开", "開"],
    ["边", "邊"],
    ["着", "著"],
    ["来", "來"],
    ["后", "後"],
    ["没", "沒"],
    ["里", "裡"],
    ["裏", "裡"],
    ["两", "兩"],
    ["书", "書"],
    ["爱", "愛"],
    ["妈", "媽"],
    ["样", "樣"],
    ["带", "帶"],
    ["笔", "筆"],
    ["给", "給"],
    ["纸", "紙"],
    ["云", "雲"],
    ["旗", "棋"],
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
  form.append("language", "zh");
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
const units = [...(curriculum.lessons ?? []), ...(curriculum.reviewLessons ?? [])];
let changed = 0;

for (const lesson of units) {
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
