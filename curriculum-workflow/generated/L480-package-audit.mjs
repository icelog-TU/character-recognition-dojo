import fs from 'node:fs';

const draft = JSON.parse(fs.readFileSync('curriculum-workflow/drafts/L480-draft.json', 'utf8'));
const han = (text) => [...text].filter((char) => /[㐀-鿿]/u.test(char));
const allowed = new Set(draft.allowedChars);
const bad = [];
for (const sentence of draft.sentences) {
  if (han(sentence.text).join('') !== sentence.spokenText) bad.push(`${sentence.id}: spokenText`);
  if (sentence.displayLines.join('') !== sentence.text) bad.push(`${sentence.id}: displayLines`);
  for (const char of han(sentence.text)) if (!allowed.has(char)) bad.push(`${sentence.id}: unallowed ${char}`);
}
for (const game of draft.sentenceGames) {
  const sentence = draft.sentences.find((item) => item.id === game.sentenceId);
  const chars = han(sentence.text);
  if (chars[game.targetCharIndex] !== game.targetChar) bad.push(`${game.id}: target index`);
  for (const index of game.missingIndexes ?? []) if (!chars[index]) bad.push(`${game.id}: missing index ${index}`);
  for (const option of game.options ?? []) for (const char of han(option.text ?? '')) if (!allowed.has(char)) bad.push(`${game.id}: option ${char}`);
}
const types = ['find-character', 'teach-character', 'missing-character', 'partial-order', 'choose-pronunciation'];
if (draft.sentenceGames.map((game) => game.type).join() !== types.join()) bad.push('canonical game order');
const result = {
  status: draft.packageStatus,
  allowedChars: draft.allowedChars.length,
  sentences: draft.sentences.length,
  games: draft.sentenceGames.length,
  stage4AudioAlignment: Object.keys(draft.stage4AudioAlignment),
  bad,
};
console.log(JSON.stringify(result, null, 2));
if (bad.length) process.exit(1);
