import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url); const ffmpeg = require('@ffmpeg-installer/ffmpeg').path;
const raw = execFileSync(ffmpeg, ['-v', 'error', '-i', 'public/assets/lessons/L461/audio/char-u6587.m4a', '-ar', '16000', '-ac', '1', '-f', 'f32le', 'pipe:1'], { maxBuffer: 8000000 });
const samples = new Float32Array(raw.buffer, raw.byteOffset, raw.length / 4); const points = [];
for (let center = 400; center < samples.length - 400; center += 160) {
  let energy = 0; for (let index = -320; index < 320; index += 1) energy += samples[center + index] ** 2; if (Math.sqrt(energy / 640) < 0.008) continue;
  const correlation = [];
  for (let lag = 29; lag <= 145; lag += 1) { let cross = 0; let first = 0; let second = 0; for (let index = -300; index < 300; index += 1) { const x = samples[center + index]; const y = samples[center + index - lag]; cross += x * y; first += x * x; second += y * y; } correlation[lag] = cross / Math.sqrt(first * second); }
  const peaks = []; for (let lag = 30; lag < 145; lag += 1) if (correlation[lag] > 0.65 && correlation[lag] >= correlation[lag - 1] && correlation[lag] >= correlation[lag + 1]) peaks.push(lag); if (!peaks.length) continue;
  const best = Math.max(...peaks.map((lag) => correlation[lag])); const lag = peaks.find((item) => correlation[item] >= best * 0.92); points.push({ ms: center / 16, hz: Math.round(16000 / lag * 10) / 10, correlation: Math.round(correlation[lag] * 1000) / 1000 });
}
const result = { name: 'char-u6587', points, summary: { firstHz: points[0]?.hz, minHz: Math.min(...points.map((point) => point.hz)), maxHz: Math.max(...points.map((point) => point.hz)), lastHz: points.at(-1)?.hz } };
fs.writeFileSync('curriculum-workflow/generated/L461-pitch-evidence.json', `${JSON.stringify(result, null, 2)}\n`);
console.log(result.summary);
