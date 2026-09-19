// Independent AI listening of final L479 audio. This never changes production audio.
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { requireOpenAIKey } from '../../scripts/lib/env.mjs';

const require = createRequire(import.meta.url);
const ffmpeg = require('@ffmpeg-installer/ffmpeg').path;
const folder = 'public/assets/lessons/L479/audio';
const out = 'curriculum-workflow/generated/L479-listening-evidence.json';
const prompt = 'Listen carefully to this Taiwan Mandarin learning recording. Return concise JSON with: transcript in Traditional Chinese, pronunciation observations including any wrong consonant/vowel/tone or Mainland-accent drift, whether every syllable and the final syllable are complete, clipped syllables, unnatural pauses, and confidence. Report only what is actually heard; do not infer from a supplied sentence because none is supplied.';
const requestedFile = process.argv[2] ?? null;
const priorRows = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, 'utf8')) : [];
const rows = priorRows.filter((row) => row.file !== requestedFile);

for (const file of fs.readdirSync(folder).filter((name) => name.endsWith('.m4a')).sort()) {
  if (requestedFile && file !== requestedFile) continue;
  const original = fs.readFileSync(`${folder}/${file}`);
  const wav = execFileSync(ffmpeg, ['-v', 'error', '-i', `${folder}/${file}`, '-f', 'wav', '-acodec', 'pcm_s16le', 'pipe:1'], { maxBuffer: 8_000_000 });
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${requireOpenAIKey()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gpt-audio-1.5',
      modalities: ['text'],
      messages: [{ role: 'user', content: [
        { type: 'text', text: prompt },
        { type: 'input_audio', input_audio: { data: wav.toString('base64'), format: 'wav' } },
      ] }],
    }),
  });
  if (!response.ok) throw new Error(`Audio QA HTTP ${response.status} ${(await response.text()).slice(0, 300)}`);
  const data = await response.json();
  const row = {
    file,
    sha256: createHash('sha256').update(original).digest('hex'),
    model: data.model,
    method: 'AI listening, not human QA',
    prompt,
    result: data.choices[0].message.content,
  };
  rows.push(row);
  console.log(`${file}: ${row.result}`);
}

rows.sort((left, right) => left.file.localeCompare(right.file));
fs.writeFileSync(out, `${JSON.stringify(rows, null, 2)}\n`);
