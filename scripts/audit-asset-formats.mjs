import fs from "node:fs";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const curriculumPath = path.resolve("src/curriculum/sample-lessons.json");
const publicRoot = path.resolve("public");
const lessonRoot = path.resolve("public/assets/lessons");
const reviewRoot = path.resolve("public/assets/reviews");
const strict = process.argv.includes("--strict");

function packageToolPath(packageName) {
  try {
    return require(packageName).path;
  } catch {
    return null;
  }
}

const ffmpegCommand = process.env.FFMPEG_PATH || packageToolPath("@ffmpeg-installer/ffmpeg") || "ffmpeg";
const ffprobeCommand = process.env.FFPROBE_PATH || packageToolPath("@ffprobe-installer/ffprobe") || "ffprobe";

const errors = [];
const warnings = [];
const seen = new Set();

function reportError(message) {
  errors.push(message);
}

function reportWarning(message) {
  warnings.push(message);
}

function publicFileFromSrc(src) {
  return path.join(publicRoot, src.replace(/^\//, ""));
}

function fileSizeKb(filePath) {
  return fs.statSync(filePath).size / 1024;
}

function runFfprobe(filePath) {
  const output = execFileSync(
    ffprobeCommand,
    [
      "-v",
      "error",
      "-show_entries",
      "stream=codec_name,codec_type,width,height,sample_rate,channels:format=duration",
      "-of",
      "json",
      filePath,
    ],
    { encoding: "utf8" },
  );
  return JSON.parse(output);
}

function maxVolumeDb(filePath) {
  const result = spawnSync(
    ffmpegCommand,
    ["-hide_banner", "-nostats", "-i", filePath, "-af", "volumedetect", "-f", "null", "-"],
    { encoding: "utf8" },
  );
  const output = `${result.stdout}\n${result.stderr}`;
  const match = output.match(/max_volume:\s*(-?\d+(?:\.\d+)?) dB/);
  return match ? Number(match[1]) : null;
}

function auditImage(label, src) {
  if (!src) {
    reportError(`${label}: missing image src`);
    return;
  }
  if (seen.has(`image:${src}`)) return;
  seen.add(`image:${src}`);

  const filePath = publicFileFromSrc(src);
  if (!fs.existsSync(filePath)) {
    reportError(`${label}: missing image file ${src}`);
    return;
  }

  if (path.extname(filePath).toLowerCase() !== ".webp") {
    reportError(`${label}: referenced image is not WebP: ${src}`);
  }

  const sizeKb = fileSizeKb(filePath);
  if (sizeKb > 400) {
    reportError(`${label}: image is ${sizeKb.toFixed(1)} KB, over hard max 400 KB: ${src}`);
  } else if (sizeKb > 250) {
    reportWarning(`${label}: image is ${sizeKb.toFixed(1)} KB, over target 250 KB: ${src}`);
  }

  try {
    const probe = runFfprobe(filePath);
    const stream = probe.streams?.find((candidate) => candidate.codec_type === "video") ?? probe.streams?.[0];
    if (stream?.codec_name && stream.codec_name !== "webp") {
      reportError(`${label}: image codec is ${stream.codec_name}, expected webp: ${src}`);
    }
    const width = Number(stream?.width);
    const height = Number(stream?.height);
    if (!Number.isFinite(width) || !Number.isFinite(height)) {
      reportWarning(`${label}: could not read image dimensions: ${src}`);
    } else if (Math.max(width, height) > 1024) {
      reportError(`${label}: image dimensions ${width}x${height} exceed 1024px longest edge: ${src}`);
    }
  } catch (error) {
    reportWarning(`${label}: ffprobe could not inspect image ${src}: ${error.message}`);
  }
}

function auditAudio(label, src) {
  if (!src) {
    reportError(`${label}: missing audio src`);
    return;
  }
  if (seen.has(`audio:${src}`)) return;
  seen.add(`audio:${src}`);

  const filePath = publicFileFromSrc(src);
  if (!fs.existsSync(filePath)) {
    reportError(`${label}: missing audio file ${src}`);
    return;
  }

  if (path.extname(filePath).toLowerCase() !== ".m4a") {
    reportError(`${label}: referenced audio is not .m4a: ${src}`);
  }

  try {
    const probe = runFfprobe(filePath);
    const stream = probe.streams?.find((candidate) => candidate.codec_type === "audio");
    if (!stream) {
      reportError(`${label}: no audio stream found: ${src}`);
      return;
    }
    if (stream.codec_name !== "aac") {
      reportError(`${label}: audio codec is ${stream.codec_name}, expected aac: ${src}`);
    }
    if (Number(stream.sample_rate) !== 44100) {
      reportError(`${label}: sample rate is ${stream.sample_rate}, expected 44100: ${src}`);
    }
    if (Number(stream.channels) !== 1) {
      reportError(`${label}: channel count is ${stream.channels}, expected mono: ${src}`);
    }
    const duration = Number(probe.format?.duration);
    if (!Number.isFinite(duration) || duration <= 0) {
      reportError(`${label}: invalid duration: ${src}`);
    }
  } catch (error) {
    reportError(`${label}: ffprobe could not inspect audio ${src}: ${error.message}`);
  }

  const maxVolume = maxVolumeDb(filePath);
  if (!Number.isFinite(maxVolume)) {
    reportWarning(`${label}: could not measure max volume: ${src}`);
  } else if (maxVolume < -35) {
    reportError(`${label}: max volume ${maxVolume} dB is too quiet: ${src}`);
  }
}

function folderSizeBytes(folderPath) {
  if (!fs.existsSync(folderPath)) return 0;
  let total = 0;
  for (const entry of fs.readdirSync(folderPath, { withFileTypes: true })) {
    const entryPath = path.join(folderPath, entry.name);
    if (entry.isDirectory()) {
      total += folderSizeBytes(entryPath);
    } else if (entry.isFile()) {
      total += fs.statSync(entryPath).size;
    }
  }
  return total;
}

function walkFiles(folderPath) {
  if (!fs.existsSync(folderPath)) return [];
  const files = [];
  for (const entry of fs.readdirSync(folderPath, { withFileTypes: true })) {
    const entryPath = path.join(folderPath, entry.name);
    if (entry.isDirectory()) files.push(...walkFiles(entryPath));
    if (entry.isFile()) files.push(entryPath);
  }
  return files;
}

const curriculum = JSON.parse(fs.readFileSync(curriculumPath, "utf8"));
const units = [
  ...(curriculum.lessons ?? []).map((unit) => ({ ...unit, kind: "lesson" })),
  ...(curriculum.reviewLessons ?? []).map((unit) => ({ ...unit, kind: "review" })),
];

for (const unit of units) {
  const unitRoot = unit.kind === "review" ? path.join(reviewRoot, unit.id) : path.join(lessonRoot, unit.id);
  const sizeMb = folderSizeBytes(unitRoot) / 1024 / 1024;
  if (sizeMb > 2.5) {
    reportError(`${unit.id}: asset folder is ${sizeMb.toFixed(2)} MB, over hard max 2.5 MB`);
  } else if (sizeMb > 2.0) {
    reportWarning(`${unit.id}: asset folder is ${sizeMb.toFixed(2)} MB, over target 2.0 MB`);
  }

  for (const [char, src] of Object.entries(unit.charAudio ?? {})) {
    auditAudio(`${unit.id} charAudio ${char}`, src);
  }

  for (const sentence of unit.sentences ?? []) {
    auditImage(`${sentence.id} imageSrc`, sentence.imageSrc);
    auditAudio(`${sentence.id} audio.src`, sentence.audio?.src);
  }

  for (const game of unit.sentenceGames ?? []) {
    for (const option of game.options ?? []) {
      if (option.audioSrc) {
        auditAudio(`${game.id} option ${option.id}`, option.audioSrc);
        if (
          game.type === "choose-pronunciation" &&
          option.correct !== true &&
          !option.audioSrc.includes(`${unit.id}-G`)
        ) {
          reportWarning(
            `${game.id} option ${option.id}: wrong-choice audio should be generated from its full option text and usually live under this unit as ${unit.id}-G##-wrong-*.m4a: ${option.audioSrc}`,
          );
        }
      }
    }
  }
}

for (const filePath of [...walkFiles(lessonRoot), ...walkFiles(reviewRoot)]) {
  const ext = path.extname(filePath).toLowerCase();
  if ([".png", ".jpg", ".jpeg"].includes(ext)) {
    reportWarning(`shipping public asset folder contains source image ${path.relative(process.cwd(), filePath)}`);
  }
}

console.log(`Audited ${units.length} unit(s), ${[...seen].filter((key) => key.startsWith("image:")).length} image reference(s), ${[...seen].filter((key) => key.startsWith("audio:")).length} audio reference(s).`);

for (const warning of warnings) {
  console.warn(`WARN ${warning}`);
}
for (const error of errors) {
  console.error(`ERROR ${error}`);
}

if (strict && (errors.length > 0 || warnings.length > 0)) {
  console.error(`Asset format audit found ${errors.length} error(s) and ${warnings.length} warning(s).`);
  process.exit(1);
}

if (errors.length > 0) {
  console.log(`Asset format audit completed with ${errors.length} error(s) and ${warnings.length} warning(s). Re-run with --strict to fail on these findings.`);
} else {
  console.log(`Asset format audit OK with ${warnings.length} warning(s).`);
}
