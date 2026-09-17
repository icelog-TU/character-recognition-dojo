import fs from 'node:fs';

const paths = [
  'curriculum-workflow/drafts/L438-draft.json',
  'curriculum-workflow/lesson-requests/L438.json',
];

for (const file of paths) {
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const sentences = data.sentences ?? data.approvedSentences;
  const s02 = sentences.find((s) => s.id === 'L438-S02');
  s02.audio.charTimings[2] = { charIndex: 2, startMs: 1600, endMs: 1740 };
  s02.audio.charTimings[3] = { charIndex: 3, startMs: 1740, endMs: 1880 };
  const s04 = sentences.find((s) => s.id === 'L438-S04');
  s04.audio.charTimings[3] = { charIndex: 3, startMs: 1660, endMs: 1820 };
  s04.audio.charTimings[4] = { charIndex: 4, startMs: 1820, endMs: 1980 };
  const s03 = sentences.find((s) => s.id === 'L438-S03');
  s03.audio.charTimings[11].endMs = 3700;
  const games = data.sentenceGames;
  games[4].options[1].audio.charTimings[8].endMs = 2610;
  games[4].options[2].audio.charTimings[8].endMs = 3361;
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
}

console.log('Refined L438-S02 幫助 and L438-S04 同學 timing boundaries.');
