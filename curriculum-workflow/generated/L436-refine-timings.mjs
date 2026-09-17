import fs from 'node:fs';

const file = 'curriculum-workflow/drafts/L436-draft.json';
const draft = JSON.parse(fs.readFileSync(file, 'utf8'));

const s02 = draft.sentences.find((sentence) => sentence.id === 'L436-S02');
s02.audio.charTimings = [
  { charIndex: 0, startMs: 0, endMs: 400 },
  { charIndex: 1, startMs: 400, endMs: 760 },
  { charIndex: 2, startMs: 1320, endMs: 1480 },
  { charIndex: 3, startMs: 1480, endMs: 1680 },
  { charIndex: 4, startMs: 1680, endMs: 2000 },
  { charIndex: 5, startMs: 2360, endMs: 2500 },
  { charIndex: 6, startMs: 2500, endMs: 2680 },
  { charIndex: 7, startMs: 2680, endMs: 2940 },
  { charIndex: 8, startMs: 2940, endMs: 3220 },
  { charIndex: 9, startMs: 3220, endMs: 3400 },
  { charIndex: 10, startMs: 3400, endMs: 3580 },
];

const teach = draft.sentenceGames.find((game) => game.id === 'L436-G02').teachAudio;
teach.prefixAudio.charTimings = [
  { charIndex: 0, startMs: 0, endMs: 300 },
  { charIndex: 1, startMs: 300, endMs: 580 },
  { charIndex: 2, startMs: 580, endMs: 860 },
  { charIndex: 3, startMs: 860, endMs: 1200 },
  { charIndex: 4, startMs: 1200, endMs: 1580 },
  { charIndex: 5, startMs: 2160, endMs: 2320 },
  { charIndex: 6, startMs: 2320, endMs: 2480 },
  { charIndex: 7, startMs: 2480, endMs: 2760 },
  { charIndex: 8, startMs: 2760, endMs: 2960 },
];
teach.suffixAudio.durationMs = 563;
teach.suffixAudio.charTimings = [{ charIndex: 0, startMs: 0, endMs: 363 }];

draft.sentences.find((sentence) => sentence.id === 'L436-S04').audio.charTimings.at(-1).endMs = 2720;
draft.sentenceGames.find((game) => game.id === 'L436-G05').options
  .find((option) => option.id === 'L436-G05-O2').audio.charTimings.at(-1).endMs = 3760;

fs.writeFileSync(file, `${JSON.stringify(draft, null, 2)}\n`);
console.log('Refined zero-width ASR boundaries and terminal spoken spans using adjacent word/silence evidence.');
