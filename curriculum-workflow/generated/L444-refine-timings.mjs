import fs from 'node:fs';

const paths = ['curriculum-workflow/drafts/L444-draft.json'];
for (const file of paths) {
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const sentences = data.sentences ?? data.approvedSentences;
  const s02 = sentences.find((sentence) => sentence.id === 'L444-S02');
  s02.audio.charTimings[5] = { charIndex: 5, startMs: 2320, endMs: 2440 };
  s02.audio.charTimings[6] = { charIndex: 6, startMs: 2440, endMs: 2560 };
  const s03 = sentences.find((sentence) => sentence.id === 'L444-S03');
  s03.audio.charTimings[4] = { charIndex: 4, startMs: 2160, endMs: 2290 };
  s03.audio.charTimings[5] = { charIndex: 5, startMs: 2290, endMs: 2420 };
  const s05 = sentences.find((sentence) => sentence.id === 'L444-S05');
  s05.audio.charTimings[3] = { charIndex: 3, startMs: 1540, endMs: 1690 };
  s05.audio.charTimings[4] = { charIndex: 4, startMs: 1690, endMs: 1840 };
  const wrongTwo = data.sentenceGames[4].options[2];
  wrongTwo.audio.charTimings[7] = { charIndex: 7, startMs: 2280, endMs: 2410 };
  wrongTwo.audio.charTimings[8] = { charIndex: 8, startMs: 2410, endMs: 2580 };
  s02.audio.charTimings[9].endMs = 3850;
  const s04 = sentences.find((sentence) => sentence.id === 'L444-S04');
  s04.audio.charTimings[10].endMs = 3354;
  data.sentenceGames[1].teachAudio.prefixAudio.charTimings[3].endMs = 1500;
  data.sentenceGames[4].options[1].audio.charTimings[10].endMs = 3490;
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
}
console.log('Refined L444 narrow ASR word boundaries.');
