import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";

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

const ffmpegCommand = process.env.FFMPEG_PATH || packageToolPath("@ffmpeg-installer/ffmpeg") || "ffmpeg";
const ffprobeCommand = process.env.FFPROBE_PATH || packageToolPath("@ffprobe-installer/ffprobe") || "ffprobe";
const magickCommand = process.env.MAGICK_PATH || "magick";

checkRequiredTool("FFmpeg", ffmpegCommand);
checkRequiredTool("FFprobe", ffprobeCommand);
checkOptionalTool("ImageMagick", magickCommand);
