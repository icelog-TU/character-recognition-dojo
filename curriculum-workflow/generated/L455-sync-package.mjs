import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { execFileSync, spawnSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const ffmpeg = require('@ffmpeg-installer/ffmpeg').path;
const ffprobe = require('@ffprobe-installer/ffprobe').path;
const draftPath = 'curriculum-workflow/drafts/L455-draft.json';
const requestPath = 'curriculum-workflow/lesson-requests/L455.json';
const draft = JSON.parse(fs.readFileSync(draftPath, 'utf8'));
const request = JSON.parse(fs.readFileSync(requestPath, 'utf8'));
const status = process.argv[2] ?? draft.packageStatus;

draft.sentenceGames[4].options[1].audio = structuredClone(draft.sentences.find((sentence) => sentence.id === 'L455-S02').audio);
draft.stage4AudioAlignment = {};
for (const game of draft.sentenceGames) {
  for (const part of ['prefix', 'suffix']) if (game.teachAudio?.[`${part}Audio`]) draft.stage4AudioAlignment[`${game.id}-${part}`] = game.teachAudio[`${part}Audio`];
  if (game.type === 'choose-pronunciation') for (const option of game.options.filter((item) => !item.correct)) draft.stage4AudioAlignment[`${game.id}-${option.id}`] = option.audio;
}
draft.packageStatus = status; request.packageStatus = status;
if (fs.existsSync('curriculum-workflow/generated/L455-production-qa.md')) draft.productionQA = fs.readFileSync('curriculum-workflow/generated/L455-production-qa.md', 'utf8');
request.approvedSentences = structuredClone(draft.sentences); request.sentenceGames = structuredClone(draft.sentenceGames); request.productionQA = draft.productionQA;
fs.writeFileSync(draftPath, `${JSON.stringify(draft, null, 2)}\n`); fs.writeFileSync(requestPath, `${JSON.stringify(request, null, 2)}\n`);
fs.writeFileSync('curriculum-workflow/generated/L455-generation-packet.md', `# L455 現 — final production generation packet\n\npackageStatus: ${status}\n\nSource main: ${draft.sourceMainCommit}; formal L001-L443, last 操, 447 unique learned characters. Expanded locked allowedChars: 453. Production C owns this lesson-local package in parallel-c.\n\nRelease dependencies: ordinary lessons L450-L454 and review milestone R055/R056 after L450. The review pair is excluded from this package. Shared production JSON, planner export and ledger integration belong to Release.\n\n## Final approved request, sentence records, image prompts, and Stage 4\n\n\`\`\`json\n${JSON.stringify(request, null, 2)}\n\`\`\`\n\n## Production QA\n\n${draft.productionQA ?? 'Production in progress.'}\n`);

const han = (text) => [...text.matchAll(/\p{Script=Han}/gu)].map((match) => match[0]);
const errors = [];
const expected = ['現在換小月上台表演。', '表演的時候，我忘了舞步。', '我發現葉子後面有一條小蟲。', '小時候怕水，現在會游泳了。', '山洞裡出現了怪物。'];
const coverageChars = ['現', '表', '演', '候', '台', '舞'];
const coverage = Object.fromEntries(coverageChars.map((char) => [char, draft.sentences.reduce((sum, sentence) => sum + han(sentence.text).filter((item) => item === char).length, 0)]));
for (let index = 0; index < 5; index += 1) { const sentence = draft.sentences[index]; if (sentence.text !== expected[index] || sentence.spokenText !== han(sentence.text).join('') || sentence.displayLines.join('') !== sentence.text || sentence.displayLines.some((line) => [...line].length > 6)) errors.push(`${sentence.id} text/lines`); }
for (const item of [...draft.sentences, ...draft.sentenceGames.flatMap((game) => game.options ?? [])]) for (const char of han(item.text)) if (!draft.allowedChars.includes(char)) errors.push(`Unlearned ${char}`);
if (new Set(draft.sentenceGames.map((game) => game.sentenceId)).size !== 5 || draft.sentenceGames.map((game) => game.type).join(',') !== 'find-character,teach-character,missing-character,partial-order,choose-pronunciation') errors.push('canonical game assignment');
for (const game of draft.sentenceGames) { const chars = han(draft.sentences.find((sentence) => sentence.id === game.sentenceId).text); if (chars[game.targetCharIndex] !== game.targetChar) errors.push(`${game.id} target`); if (game.type === 'partial-order') for (const option of game.options) if (chars[game.missingIndexes[option.correctOrder]] !== option.text || han(option.text).length !== 1) errors.push(`${game.id} order`); if (game.type === 'teach-character' && (game.teachAudio.prefixText !== chars.slice(0, game.targetCharIndex).join('') || game.teachAudio.suffixText !== chars.slice(game.targetCharIndex + 1).join(''))) errors.push('teach split'); }
const tracks = [...draft.sentences.map((sentence) => ({ text: sentence.text, ...sentence.audio })), ...['prefix', 'suffix'].map((part) => ({ text: draft.sentenceGames[1].teachAudio[`${part}Text`], ...draft.sentenceGames[1].teachAudio[`${part}Audio`] })), ...draft.sentenceGames[4].options.filter((option) => !option.correct).map((option) => ({ text: option.text, ...option.audio }))];
for (const track of tracks) { if (han(track.text).length !== track.charTimings.length) errors.push(`${track.src} count`); let previousEnd = 0; for (const timing of track.charTimings) { if (timing.startMs < previousEnd || timing.endMs - timing.startMs < 80 || timing.endMs - timing.startMs > 900 || timing.endMs > track.durationMs) errors.push(`${track.src} span`); previousEnd = timing.endMs; } if (track.durationMs - previousEnd > 300) errors.push(`${track.src} tail ${track.durationMs - previousEnd}`); }
const audio = [];
for (const src of [...tracks.map((track) => track.src), draft.charAudio.現]) { const file = path.join('public', src); if (!fs.existsSync(file)) { errors.push(`${src} missing`); continue; } const metadata = JSON.parse(execFileSync(ffprobe, ['-v', 'error', '-show_streams', '-show_format', '-of', 'json', file], { encoding: 'utf8' })); const stream = metadata.streams[0]; const decoded = spawnSync(ffmpeg, ['-hide_banner', '-i', file, '-af', 'volumedetect', '-f', 'null', '-'], { encoding: 'utf8' }); const meanDb = Number(decoded.stderr.match(/mean_volume: ([-\d.]+)/)?.[1]); const maxDb = Number(decoded.stderr.match(/max_volume: ([-\d.]+)/)?.[1]); audio.push({ src, codec: stream.codec_name, sampleRate: stream.sample_rate, channels: stream.channels, durationMs: Math.round(Number(metadata.format.duration) * 1000), meanDb, maxDb, decodeExit: decoded.status }); if (decoded.status || stream.codec_name !== 'aac' || stream.sample_rate !== '44100' || stream.channels !== 1 || !Number.isFinite(meanDb) || maxDb < -12 || meanDb < -28) errors.push(`${src} audio format/volume`); }
const optionVolumes = draft.sentenceGames[4].options.map((option) => audio.find((item) => item.src === option.audioSrc).meanDb); if (Math.max(...optionVolumes) - Math.min(...optionVolumes) > 3) errors.push('G05 volume spread');
const images = draft.sentences.map((sentence) => ({ src: sentence.imageSrc, bytes: fs.existsSync(path.join('public', sentence.imageSrc)) ? fs.statSync(path.join('public', sentence.imageSrc)).size : 0 })); if (images.some((image) => !image.bytes || image.bytes > 400 * 1024)) errors.push('image size/existence');
let assetBytes = 0; for (const directory of ['images', 'audio']) for (const file of fs.readdirSync(path.join('public/assets/lessons/L455', directory))) assetBytes += fs.statSync(path.join('public/assets/lessons/L455', directory, file)).size; if (assetBytes > 2.5 * 1024 * 1024) errors.push('package size');
if (draft.allowedChars.length !== 453 || JSON.stringify(Object.values(coverage)) !== JSON.stringify([4, 2, 2, 2, 1, 1])) errors.push('coverage');
const result = { status: errors.length ? 'FAIL' : 'PASS', coverage, allowedChars: draft.allowedChars.length, timedTracks: tracks.length, audio, images, assetBytes, g05MeanSpreadDb: Math.max(...optionVolumes) - Math.min(...optionVolumes), errors };
fs.writeFileSync('curriculum-workflow/generated/L455-package-audit.json', `${JSON.stringify(result, null, 2)}\n`); console.log(JSON.stringify(result, null, 2)); if (errors.length) process.exitCode = 1;
