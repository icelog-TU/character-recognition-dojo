import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { execFileSync, spawnSync } from 'node:child_process';

const require = createRequire(import.meta.url);
const ffmpeg = require('@ffmpeg-installer/ffmpeg').path;
const ffprobe = require('@ffprobe-installer/ffprobe').path;
const unit = 'L479';
const root = `public/assets/lessons/${unit}`;
const draft = JSON.parse(fs.readFileSync(`curriculum-workflow/drafts/${unit}-draft.json`, 'utf8'));
const failures = [];
const images = [];
const audio = [];

function fail(message) { failures.push(message); }
function assetPath(src) { return path.join('public', src.replace(/^\//, '')); }
function probe(file) {
  return JSON.parse(execFileSync(ffprobe, ['-v', 'error', '-show_streams', '-show_format', '-of', 'json', file], { encoding: 'utf8' }));
}
function volume(file) {
  const result = spawnSync(ffmpeg, ['-hide_banner', '-nostats', '-i', file, '-af', 'volumedetect', '-f', 'null', '-'], { encoding: 'utf8' });
  const output = `${result.stdout}\n${result.stderr}`;
  return {
    meanDb: Number(output.match(/mean_volume:\s*(-?\d+(?:\.\d+)?) dB/)?.[1]),
    maxDb: Number(output.match(/max_volume:\s*(-?\d+(?:\.\d+)?) dB/)?.[1]),
  };
}

for (const sentence of draft.sentences) {
  const file = assetPath(sentence.imageSrc);
  const info = probe(file);
  const stream = info.streams.find((item) => item.codec_type === 'video');
  const bytes = fs.statSync(file).size;
  images.push({ id: sentence.id, file, format: stream?.codec_name, width: stream?.width, height: stream?.height, bytes });
  if (stream?.codec_name !== 'webp' || stream?.width !== 1024 || stream?.height !== 1024) fail(`${sentence.id} image format/dimensions`);
  if (bytes < 50_000 || bytes > 1_000_000) fail(`${sentence.id} image size ${bytes}`);
}

const audioSources = new Set(Object.values(draft.charAudio));
for (const sentence of draft.sentences) audioSources.add(sentence.audio.src);
for (const game of draft.sentenceGames) {
  if (game.teachAudio) { audioSources.add(game.teachAudio.prefixSrc); audioSources.add(game.teachAudio.suffixSrc); }
  for (const option of game.options ?? []) if (option.audioSrc) audioSources.add(option.audioSrc);
}
for (const src of [...audioSources].sort()) {
  const file = assetPath(src);
  const info = probe(file);
  const stream = info.streams.find((item) => item.codec_type === 'audio');
  const durationMs = Math.round(Number(info.format.duration) * 1000);
  const loudness = volume(file);
  audio.push({ src, file, codec: stream?.codec_name, channels: stream?.channels, sampleRate: Number(stream?.sample_rate), durationMs, bytes: fs.statSync(file).size, ...loudness });
  if (stream?.codec_name !== 'aac' || stream?.channels !== 1 || Number(stream?.sample_rate) !== 44100) fail(`${src} codec/channels/sample rate`);
  if (!(durationMs >= 500 && durationMs <= 15_000)) fail(`${src} duration ${durationMs}`);
  if (!(loudness.meanDb >= -28 && loudness.maxDb >= -12 && loudness.maxDb <= 0)) fail(`${src} loudness ${JSON.stringify(loudness)}`);
}

const tracks = [
  ...draft.sentences.map((sentence) => ({ id: sentence.id, text: sentence.spokenText, ...sentence.audio })),
  { id: 'L479-G02-prefix', text: '小光很會', ...draft.stage4AudioAlignment['L479-G02-prefix'] },
  { id: 'L479-G02-suffix', text: '天而且人緣好', ...draft.stage4AudioAlignment['L479-G02-suffix'] },
  { id: 'L479-G05-O2', text: '因為停電的緣故冷氣不能用', ...draft.stage4AudioAlignment['L479-G05-O2'] },
  { id: 'L479-G05-O3', text: '因為跳電的緣故冷氣不能開', ...draft.stage4AudioAlignment['L479-G05-O3'] },
];
const timing = [];
for (const track of tracks) {
  const chars = [...track.text].filter((char) => /\p{Script=Han}/u.test(char));
  if (track.charTimings.length !== chars.length) fail(`${track.id} timing count ${track.charTimings.length}/${chars.length}`);
  let priorEnd = 0;
  for (let index = 0; index < track.charTimings.length; index += 1) {
    const span = track.charTimings[index];
    const width = span.endMs - span.startMs;
    if (span.charIndex !== index || span.startMs < priorEnd || width < 80 || width > 900) fail(`${track.id} invalid span ${index}`);
    priorEnd = span.endMs;
  }
  const actual = audio.find((item) => item.src === track.src)?.durationMs;
  const tailMs = actual - priorEnd;
  if (Math.abs(actual - track.durationMs) > 30) fail(`${track.id} metadata duration ${track.durationMs}/${actual}`);
  if (tailMs < 0 || tailMs > 300) fail(`${track.id} tail ${tailMs}`);
  timing.push({ id: track.id, characters: chars.length, durationMs: actual, tailMs });
}

if (images.length !== 5) fail(`image count ${images.length}`);
if (audio.length !== 10) fail(`unique audio count ${audio.length}`);
const report = { unit, scope: 'lesson-local image, audio and timing audit', images, audio, timing, failures, result: failures.length ? 'FAIL' : 'PASS' };
fs.writeFileSync(`curriculum-workflow/generated/${unit}-asset-audit.json`, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exit(1);
