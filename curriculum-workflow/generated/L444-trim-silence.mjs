import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { execFileSync, spawnSync } from 'node:child_process';

const require = createRequire(import.meta.url);
const ffmpeg = require('@ffmpeg-installer/ffmpeg').path;
const ffprobe = require('@ffprobe-installer/ffprobe').path;
const root = path.resolve('public/assets/lessons/L444/audio');
const report = [];
for (const name of fs.readdirSync(root).filter((item) => item.endsWith('.m4a') && !item.startsWith('char-'))) {
  const file = path.join(root, name);
  const duration = Number(execFileSync(ffprobe, ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file], { encoding: 'utf8' }).trim());
  const threshold = -45;
  const stderr = spawnSync(ffmpeg, ['-hide_banner', '-i', file, '-af', `silencedetect=noise=${threshold}dB:d=0.15`, '-f', 'null', '-'], { encoding: 'utf8' }).stderr;
  const starts = [...stderr.matchAll(/silence_start: ([\d.]+)/g)].map((match) => Number(match[1]));
  const ends = [...stderr.matchAll(/silence_end: ([\d.]+)/g)].map((match) => Number(match[1]));
  const silenceStart = starts.at(-1);
  const silenceEnd = ends.at(-1);
  let keep = duration;
  if (silenceStart !== undefined && silenceEnd >= duration - 0.06 && duration - silenceStart > 0.35) {
    keep = silenceStart + 0.2;
    const temporary = `${file}.tail.m4a`;
    execFileSync(ffmpeg, ['-y', '-i', file, '-t', String(keep), '-c:a', 'aac', '-b:a', '96k', '-ac', '1', '-ar', '44100', '-movflags', '+faststart', temporary], { stdio: 'ignore' });
    fs.copyFileSync(temporary, file);
    fs.unlinkSync(temporary);
  }
  report.push({ name, beforeSeconds: duration, silenceStart, keptSeconds: keep, bufferSeconds: 0.2, thresholdDb: threshold });
}
fs.writeFileSync('curriculum-workflow/generated/L444-silence-trim.json', `${JSON.stringify(report, null, 2)}\n`);
console.log(report);
