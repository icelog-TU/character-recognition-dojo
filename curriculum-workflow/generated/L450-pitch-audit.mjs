// Acoustic diagnostic only: inspect plotted voiced F0, not an automatic linguistic verdict.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const ffmpeg = require('@ffmpeg-installer/ffmpeg').path;
const rows = [];
for (const name of ['char-u821e', 'L450-S02']) {
  const raw = execFileSync(ffmpeg, ['-v', 'error', '-i', `public/assets/lessons/L450/audio/${name}.m4a`, '-ar', '16000', '-ac', '1', '-f', 'f32le', 'pipe:1'], { maxBuffer: 8000000 });
  const samples = new Float32Array(raw.buffer, raw.byteOffset, raw.length / 4);
  const points = [];
  for (let center = 400; center < samples.length - 400; center += 160) {
    let energy = 0;
    for (let index = -320; index < 320; index += 1) energy += samples[center + index] ** 2;
    if (Math.sqrt(energy / 640) < 0.008) continue;
    const correlation = [];
    for (let lag = 29; lag <= 145; lag += 1) {
      let cross = 0; let first = 0; let second = 0;
      for (let index = -300; index < 300; index += 1) { const x = samples[center + index]; const y = samples[center + index - lag]; cross += x * y; first += x * x; second += y * y; }
      correlation[lag] = cross / Math.sqrt(first * second);
    }
    const peaks = [];
    for (let lag = 30; lag < 145; lag += 1) if (correlation[lag] > 0.65 && correlation[lag] >= correlation[lag - 1] && correlation[lag] >= correlation[lag + 1]) peaks.push(lag);
    if (!peaks.length) continue;
    const best = Math.max(...peaks.map((lag) => correlation[lag]));
    const lag = peaks.find((item) => correlation[item] >= best * 0.92);
    points.push({ ms: center / 16, hz: Math.round(16000 / lag * 10) / 10, correlation: Math.round(correlation[lag] * 1000) / 1000 });
  }
  rows.push({ name, points });
}
fs.mkdirSync('curriculum-workflow/ai-outputs/L450', { recursive: true });
fs.writeFileSync('curriculum-workflow/generated/L450-pitch-evidence.json', `${JSON.stringify(rows, null, 2)}\n`);
let svg = '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="540"><rect width="100%" height="100%" fill="white"/>';
rows.forEach((row, rowIndex) => { const top = 45 + rowIndex * 250; svg += `<text x="30" y="${top}" font-size="22">${row.name} - voiced F0 Hz</text>`; for (let hz = 100; hz <= 500; hz += 100) { const y = top + 210 - (hz - 100) * 0.4; svg += `<path d="M60 ${y}H1150" stroke="#ddd"/><text x="10" y="${y}" font-size="12">${hz}</text>`; } for (const point of row.points) svg += `<circle cx="${60 + point.ms / 4}" cy="${top + 210 - (point.hz - 100) * 0.4}" r="2" fill="#186fba"/>`; });
svg += '</svg>';
fs.writeFileSync('curriculum-workflow/ai-outputs/L450/pitch.svg', svg);
console.log('Pitch diagnostic written');
