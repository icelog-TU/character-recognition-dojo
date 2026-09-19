import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { requireOpenAIKey } from '../../scripts/lib/env.mjs';

const results = [];
for (const name of ['char-u804a', 'L479-G02-prefix', 'L479-G02-suffix']) {
  const file = `public/assets/lessons/L479/audio/${name}.m4a`;
  const bytes = fs.readFileSync(file);
  const prompt = name === 'char-u804a'
    ? '這是臺灣華語單一漢字音。課程候選字是「聊」，請只轉寫實際聽到的漢字。'
    : name === 'L479-G02-suffix'
      ? '這是句中從「天」開始的獨立後半句，候選內容是「天而且人緣好」；請轉寫實際聽到的內容，尤其不要省略第一個音節。'
      : null;
  const trials = [];
  for (let trial = 0; trial < 3; trial += 1) {
    const form = new FormData();
    form.append('model', 'gpt-4o-transcribe');
    form.append('file', new Blob([bytes], { type: 'audio/mp4' }), `${name}.m4a`);
    form.append('language', 'zh');
    if (prompt) form.append('prompt', prompt);
    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: { Authorization: `Bearer ${requireOpenAIKey()}` },
      body: form,
    });
    if (!response.ok) throw new Error(`HTTP ${response.status} ${await response.text()}`);
    trials.push(await response.json());
  }
  results.push({ file, sha256: createHash('sha256').update(bytes).digest('hex'), model: 'gpt-4o-transcribe', prompt, trials });
}

fs.writeFileSync('curriculum-workflow/generated/L479-short-audio-audit.json', `${JSON.stringify(results, null, 2)}\n`);
console.log(results.map((entry) => ({ file: entry.file, texts: entry.trials.map((trial) => trial.text) })));
