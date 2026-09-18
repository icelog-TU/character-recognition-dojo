import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { execFileSync, spawnSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const ffmpeg = require('@ffmpeg-installer/ffmpeg').path;
const ffprobe = require('@ffprobe-installer/ffprobe').path;
const draftPath = 'curriculum-workflow/drafts/L463-draft.json';
const requestPath = 'curriculum-workflow/lesson-requests/L463.json';
const draft = JSON.parse(fs.readFileSync(draftPath, 'utf8'));
const request = JSON.parse(fs.readFileSync(requestPath, 'utf8'));
const status = process.argv[2] ?? draft.packageStatus;

draft.sentenceGames[4].options[0].audio = structuredClone(draft.sentences.find((sentence) => sentence.id === 'L463-S04').audio);
draft.stage4AudioAlignment = {};
for (const game of draft.sentenceGames) {
  for (const part of ['prefix', 'suffix']) if (game.teachAudio?.[`${part}Audio`]) draft.stage4AudioAlignment[`${game.id}-${part}`] = game.teachAudio[`${part}Audio`];
  if (game.type === 'choose-pronunciation') for (const option of game.options.filter((item) => !item.correct)) draft.stage4AudioAlignment[path.basename(option.audioSrc, '.m4a')] = option.audio;
}
draft.packageStatus = status; request.packageStatus = status;
if (fs.existsSync('curriculum-workflow/generated/L463-production-qa.md')) draft.productionQA = fs.readFileSync('curriculum-workflow/generated/L463-production-qa.md', 'utf8');
request.approvedSentences = structuredClone(draft.sentences); request.sentenceGames = structuredClone(draft.sentenceGames); request.productionQA = draft.productionQA;
fs.writeFileSync(draftPath, `${JSON.stringify(draft, null, 2)}\n`); fs.writeFileSync(requestPath, `${JSON.stringify(request, null, 2)}\n`);
fs.writeFileSync('curriculum-workflow/generated/L463-generation-packet.md', `# L463 期 — final production generation packet

packageStatus: ${status}

Source main: ${draft.sourceMainCommit}; formal L001-L446, last 音, 450 unique learned characters. Expanded locked allowedChars: 457. Production A owns this lesson-local package in parallel-a.

Release dependencies: ordinary lessons L454 and L458-L462 and review milestone R055/R056 after L450. The review pair is excluded from this package. Shared production JSON, planner export and ledger integration belong to Release.

## Final approved request, sentence records, image prompts, and Stage 4

\`\`\`json
${JSON.stringify(request, null, 2)}
\`\`\`

## Production QA

${draft.productionQA ?? 'Production in progress.'}
`);

const han = (text) => [...text.matchAll(/\p{Script=Han}/gu)].map((match) => match[0]);
const errors = [];
const expected = ['星期日下午，文具店沒開。', '日文課改到明天下午。', '借的書明天到期，別忘了還。', '這些水果，其中一半要送人。', '報名表上，要寫名字和日期。'];
const coverageChars = ['期', '日', '文', '午', '中', '其'];
const coverage = Object.fromEntries(coverageChars.map((char) => [char, draft.sentences.reduce((sum, sentence) => sum + han(sentence.text).filter((item) => item === char).length, 0)]));
for (let index = 0; index < 5; index += 1) { const sentence = draft.sentences[index]; if (sentence.text !== expected[index] || sentence.spokenText !== han(sentence.text).join('') || sentence.displayLines.join('') !== sentence.text || sentence.displayLines.some((line) => [...line].length > 6)) errors.push(`${sentence.id} text/lines`); }
for (const item of [...draft.sentences, ...draft.sentenceGames.flatMap((game) => game.options ?? [])]) for (const char of han(item.text)) if (!draft.allowedChars.includes(char)) errors.push(`Unlearned ${char}`);
if (new Set(draft.sentenceGames.map((game) => game.sentenceId)).size !== 5 || draft.sentenceGames.map((game) => game.type).join(',') !== 'find-character,teach-character,missing-character,partial-order,choose-pronunciation') errors.push('canonical game assignment');
for (const game of draft.sentenceGames) { const chars = han(draft.sentences.find((sentence) => sentence.id === game.sentenceId).text); if (chars[game.targetCharIndex] !== game.targetChar) errors.push(`${game.id} target`); if (game.type === 'partial-order') for (const option of game.options) if (chars[game.missingIndexes[option.correctOrder]] !== option.text || han(option.text).length !== 1) errors.push(`${game.id} order`); if (game.type === 'teach-character' && (game.teachAudio.prefixText !== chars.slice(0, game.targetCharIndex).join('') || game.teachAudio.suffixText !== chars.slice(game.targetCharIndex + 1).join(''))) errors.push('teach split'); }
const tracks = [...draft.sentences.map((sentence) => ({ text: sentence.text, ...sentence.audio })), ...['prefix', 'suffix'].map((part) => ({ text: draft.sentenceGames[1].teachAudio[`${part}Text`], ...draft.sentenceGames[1].teachAudio[`${part}Audio`] })), ...draft.sentenceGames[4].options.filter((option) => !option.correct).map((option) => ({ text: option.text, ...option.audio }))];
for (const track of tracks) { if (han(track.text).length !== track.charTimings.length) errors.push(`${track.src} count`); let previousEnd = 0; for (const timing of track.charTimings) { if (timing.startMs < previousEnd || timing.endMs - timing.startMs < 80 || timing.endMs - timing.startMs > 900 || timing.endMs > track.durationMs) errors.push(`${track.src} span`); previousEnd = timing.endMs; } if (track.durationMs - previousEnd > 300) errors.push(`${track.src} tail ${track.durationMs - previousEnd}`); }
const audio = [];
for (const src of [...tracks.map((track) => track.src), draft.charAudio.期]) { const file = path.join('public', src); if (!fs.existsSync(file)) { errors.push(`${src} missing`); continue; } const metadata = JSON.parse(execFileSync(ffprobe, ['-v', 'error', '-show_streams', '-show_format', '-of', 'json', file], { encoding: 'utf8' })); const stream = metadata.streams[0]; const decoded = spawnSync(ffmpeg, ['-hide_banner', '-i', file, '-af', 'volumedetect', '-f', 'null', '-'], { encoding: 'utf8' }); const meanDb = Number(decoded.stderr.match(/mean_volume: ([-\d.]+)/)?.[1]); const maxDb = Number(decoded.stderr.match(/max_volume: ([-\d.]+)/)?.[1]); audio.push({ src, codec: stream.codec_name, sampleRate: stream.sample_rate, channels: stream.channels, durationMs: Math.round(Number(metadata.format.duration) * 1000), meanDb, maxDb, decodeExit: decoded.status }); if (decoded.status || stream.codec_name !== 'aac' || stream.sample_rate !== '44100' || stream.channels !== 1 || !Number.isFinite(meanDb) || maxDb < -12 || meanDb < -28) errors.push(`${src} audio format/volume`); }
const optionVolumes = draft.sentenceGames[4].options.map((option) => audio.find((item) => item.src === option.audioSrc).meanDb); if (Math.max(...optionVolumes) - Math.min(...optionVolumes) > 3) errors.push('G05 volume spread');
const images = draft.sentences.map((sentence) => ({ src: sentence.imageSrc, bytes: fs.existsSync(path.join('public', sentence.imageSrc)) ? fs.statSync(path.join('public', sentence.imageSrc)).size : 0 })); if (images.some((image) => !image.bytes || image.bytes > 400 * 1024)) errors.push('image size/existence');
let assetBytes = 0; for (const directory of ['images', 'audio']) for (const file of fs.readdirSync(path.join('public/assets/lessons/L463', directory))) assetBytes += fs.statSync(path.join('public/assets/lessons/L463', directory, file)).size; if (assetBytes > 2.5 * 1024 * 1024) errors.push('package size');
if (draft.allowedChars.length !== 457 || JSON.stringify(Object.values(coverage)) !== JSON.stringify([3, 3, 2, 2, 1, 1])) errors.push('coverage');
const result = { status: errors.length ? 'FAIL' : 'PASS', coverage, allowedChars: draft.allowedChars.length, timedTracks: tracks.length, audio, images, assetBytes, g05MeanSpreadDb: Math.max(...optionVolumes) - Math.min(...optionVolumes), errors };
fs.writeFileSync('curriculum-workflow/generated/L463-package-audit.json', `${JSON.stringify(result, null, 2)}\n`); console.log(JSON.stringify(result, null, 2)); if (errors.length) process.exitCode = 1;
