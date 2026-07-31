import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const inboxRoot = path.resolve("curriculum-workflow/audio-inbox");
const outputRoot = path.resolve("public/assets/lessons");
const reportPath = path.resolve("curriculum-workflow/audio-duration-report.json");
const audioExtensions = new Set([".wav", ".mp3", ".m4a", ".aac", ".flac", ".ogg", ".webm"]);
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
    console.error(`${command} was not found. Install FFmpeg first, then reopen PowerShell.`);
    process.exit(1);
  }
}

function listAudioFiles(root) {
  if (!fs.existsSync(root)) return [];
  const files = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) {
      files.push(...listAudioFiles(fullPath));
    } else if (audioExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

function getDurationMs(filePath) {
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

function publicSrc(filePath) {
  const relative = path.relative(path.resolve("public"), filePath).replaceAll(path.sep, "/");
  return `/${relative}`;
}

const args = parseArgs(process.argv.slice(2));
const lessonFilter = args.lesson ? String(args.lesson).toUpperCase() : null;
const inputRoot = lessonFilter ? path.join(inboxRoot, lessonFilter) : inboxRoot;

if (!fs.existsSync(inputRoot)) {
  fs.mkdirSync(inputRoot, { recursive: true });
  console.log(`Created audio inbox: ${inputRoot}`);
  console.log("Put AI audio files there, then run this command again.");
  process.exit(0);
}

const files = listAudioFiles(inputRoot);
if (files.length === 0) {
  console.log(`No audio files found in ${inputRoot}`);
  process.exit(0);
}

ensureTool(ffmpegCommand, ["-version"]);
ensureTool(ffprobeCommand, ["-version"]);

const report = [];

for (const sourcePath of files) {
  const relative = path.relative(inboxRoot, sourcePath);
  const parts = relative.split(path.sep);
  const lessonId = parts[0]?.toUpperCase();
  if (!/^L\d{3}$/.test(lessonId)) {
    console.warn(`Skipping ${sourcePath}; expected path curriculum-workflow/audio-inbox/L###/file.ext`);
    continue;
  }
  if (lessonFilter && lessonId !== lessonFilter) continue;

  const baseName = path.basename(sourcePath, path.extname(sourcePath));
  const targetDir = path.join(outputRoot, lessonId, "audio");
  const targetPath = path.join(targetDir, `${baseName}.m4a`);
  const audioFilter = baseName.startsWith("char-")
    ? "loudnorm=I=-18:TP=-2:LRA=7"
    : "silenceremove=start_periods=1:start_duration=0.03:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_duration=0.18:start_threshold=-45dB,areverse,loudnorm=I=-18:TP=-2:LRA=7";
  fs.mkdirSync(targetDir, { recursive: true });

  execFileSync(ffmpegCommand, [
    "-y",
    "-i",
    sourcePath,
    "-vn",
    "-af",
    audioFilter,
    "-ac",
    "1",
    "-ar",
    "44100",
    "-c:a",
    "aac",
    "-b:a",
    "96k",
    "-movflags",
    "+faststart",
    targetPath,
  ], { stdio: "ignore" });

  const durationMs = getDurationMs(targetPath);
  report.push({
    lessonId,
    source: sourcePath.replaceAll(path.sep, "/"),
    output: targetPath.replaceAll(path.sep, "/"),
    src: publicSrc(targetPath),
    durationMs,
  });

  console.log(`${lessonId}: ${path.basename(sourcePath)} -> ${path.basename(targetPath)} (${durationMs} ms)`);
}

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(`Wrote ${reportPath}`);
