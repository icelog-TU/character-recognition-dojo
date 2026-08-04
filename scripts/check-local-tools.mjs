import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";

const require = createRequire(import.meta.url);

function packageToolPath(packageName) {
  try {
    return require(packageName).path;
  } catch {
    return null;
  }
}

function firstLine(text) {
  return String(text).split(/\r?\n/).find(Boolean) ?? "";
}

function checkRequiredTool(label, command, versionArgs = ["-version"]) {
  const result = spawnSync(command, versionArgs, { encoding: "utf8" });
  if (result.error || result.status !== 0) {
    console.error(`${label}: NOT AVAILABLE at ${command}`);
    if (result.error) console.error(result.error.message);
    if (result.stderr) console.error(result.stderr.trim());
    process.exitCode = 1;
    return;
  }
  console.log(`${label}: ${command}`);
  console.log(`  ${firstLine(result.stdout || result.stderr)}`);
}

function checkOptionalTool(label, command, versionArgs = ["-version"]) {
  const result = spawnSync(command, versionArgs, { encoding: "utf8" });
  if (result.error || result.status !== 0) {
    console.log(`${label}: not found through ${command} (optional)`);
    return;
  }
  console.log(`${label}: ${command}`);
  console.log(`  ${firstLine(result.stdout || result.stderr)}`);
}

function findImageMagickCommand() {
  if (process.env.MAGICK_PATH) return process.env.MAGICK_PATH;

  const roots = [process.env.ProgramFiles, process.env["ProgramFiles(x86)"]].filter(Boolean);
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    const matches = fs
      .readdirSync(root, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && entry.name.startsWith("ImageMagick"))
      .map((entry) => path.join(root, entry.name, "magick.exe"))
      .filter((candidate) => fs.existsSync(candidate))
      .sort()
      .reverse();
    if (matches[0]) return matches[0];
  }

  return "magick";
}

const ffmpegCommand = process.env.FFMPEG_PATH || packageToolPath("@ffmpeg-installer/ffmpeg") || "ffmpeg";
const ffprobeCommand = process.env.FFPROBE_PATH || packageToolPath("@ffprobe-installer/ffprobe") || "ffprobe";
const magickCommand = findImageMagickCommand();

checkRequiredTool("FFmpeg", ffmpegCommand);
checkRequiredTool("FFprobe", ffprobeCommand);
checkOptionalTool("ImageMagick", magickCommand);
