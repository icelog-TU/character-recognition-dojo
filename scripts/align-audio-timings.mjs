import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

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

const ffmpegCommand = process.env.FFMPEG_PATH || packageToolPath("@ffmpeg-installer/ffmpeg") || "ffmpeg";
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

function ensureTool(command, versionArgs) {
  const result = spawnSync(command, versionArgs, { encoding: "utf8" });
  if (result.error || result.status !== 0) {
    console.error(`${command} was not found. Set FFMPEG_PATH/FFPROBE_PATH or reopen PowerShell.`);
    process.exit(1);
  }
}

function hanChars(text) {
  return Array.from(text).filter((char) => /\p{Script=Han}/u.test(char));
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

function audioSamples(filePath) {
  const buffer = execFileSync(ffmpegCommand, [
    "-v",
    "error",
    "-i",
    filePath,
    "-ac",
    "1",
    "-ar",
    "16000",
    "-f",
    "s16le",
    "pipe:1",
  ], { maxBuffer: 50_000_000 });

  const samples = [];
  for (let i = 0; i < buffer.length; i += 2) {
    samples.push(buffer.readInt16LE(i) / 32768);
  }
  return samples;
}

function rmsFrames(samples) {
  const sampleRate = 16000;
  const frameSize = 320;
  const hopSize = 80;
  const frames = [];
  for (let start = 0; start + frameSize <= samples.length; start += hopSize) {
    let sum = 0;
    for (let i = 0; i < frameSize; i += 1) sum += samples[start + i] ** 2;
    frames.push({
      timeMs: Math.round((start / sampleRate) * 1000),
      rms: Math.sqrt(sum / frameSize),
    });
  }
  return frames;
}

function smoothFrames(frames) {
  return frames.map((frame, index) => {
    const nearby = frames.slice(Math.max(0, index - 2), Math.min(frames.length, index + 3));
    const rms = nearby.reduce((sum, item) => sum + item.rms, 0) / nearby.length;
    return { ...frame, rms };
  });
}

function voicedBounds(frames) {
  const max = Math.max(...frames.map((frame) => frame.rms), 0);
  const threshold = Math.max(max * 0.12, 0.003);
  const voiced = frames.filter((frame) => frame.rms >= threshold);
  if (voiced.length === 0) return { startMs: 0, endMs: frames.at(-1)?.timeMs ?? 0 };
  return {
    startMs: Math.max(0, voiced[0].timeMs - 30),
    endMs: voiced.at(-1).timeMs + 80,
  };
}

function bestBoundary(frames, leftMs, rightMs) {
  const candidates = frames.filter((frame) => frame.timeMs >= leftMs && frame.timeMs <= rightMs);
  if (candidates.length === 0) return Math.round((leftMs + rightMs) / 2);
  return candidates.reduce((best, frame) => (frame.rms < best.rms ? frame : best), candidates[0]).timeMs;
}

function alignTimings(filePath, text) {
  const chars = hanChars(text);
  const totalMs = durationMs(filePath);
  if (chars.length === 0) return [];
  if (chars.length === 1) return [{ charIndex: 0, startMs: 0, endMs: totalMs }];

  const frames = smoothFrames(rmsFrames(audioSamples(filePath)));
  const bounds = voicedBounds(frames);
  const usableStart = Math.max(0, bounds.startMs);
  const usableEnd = Math.min(totalMs, bounds.endMs);
  const boundaries = [0];

  for (let i = 1; i < chars.length; i += 1) {
    const center = usableStart + ((usableEnd - usableStart) * i) / chars.length;
    const window = (usableEnd - usableStart) / Math.max(chars.length * 2.2, 3);
    boundaries.push(bestBoundary(frames, center - window, center + window));
  }

  boundaries.push(totalMs);
  return chars.map((_, index) => ({
    charIndex: index,
    startMs: Math.max(0, Math.round(boundaries[index])),
    endMs: Math.min(totalMs, Math.round(boundaries[index + 1])),
  }));
}

const args = parseArgs(process.argv.slice(2));
const lessonFilter = args.lesson ? String(args.lesson).toUpperCase() : null;

ensureTool(ffmpegCommand, ["-version"]);
ensureTool(ffprobeCommand, ["-version"]);

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
    sentence.audio.durationMs = durationMs(filePath);
    sentence.audio.charTimings = alignTimings(filePath, sentence.text);
    changed += 1;
    console.log(`${sentence.id}: ${JSON.stringify(sentence.audio.charTimings)}`);
  }
}

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, "utf8");
console.log(`Aligned ${changed} sentence audio file(s).`);
