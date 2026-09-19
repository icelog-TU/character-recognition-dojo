// Focused regeneration for the G02 suffix after independent listening found an unclear initial 天.
import fs from 'node:fs';
import { requireOpenAIKey } from '../../scripts/lib/env.mjs';

const output = 'curriculum-workflow/audio-inbox/L479/L479-G02-suffix.mp3';
const response = await fetch('https://api.openai.com/v1/audio/speech', {
  method: 'POST',
  headers: { Authorization: `Bearer ${requireOpenAIKey()}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'gpt-4o-mini-tts',
    voice: 'shimmer',
    input: '天而且人緣好',
    response_format: 'mp3',
    speed: 0.9,
    instructions: 'Use natural Taiwan Mandarin for young children. Begin immediately with one complete, clearly audible 天, pronounced ㄊㄧㄢ, then continue smoothly into 而且人緣好 without a long pause. Keep each of the six syllables distinct. Speak clearly, warmly, and gently. Do not add words. No Mainland China accent or erhua.',
  }),
});
if (!response.ok) throw new Error(`OpenAI audio failed: ${response.status} ${await response.text()}`);
fs.writeFileSync(output, Buffer.from(await response.arrayBuffer()));
console.log(`Wrote ${output}`);
