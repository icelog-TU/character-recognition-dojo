# L312 ? Generation Packet

## Package Status

- Unit: L312
- New character: ?
- Zhuyin: ???
- Branch: codex/l312-complete-package
- Latest boundary after rebase: origin/main includes L311 ?
- dependsOnLessons: []
- provisionalLearnedChars: []
- Status: asset-complete-package; Release owns production JSON, planner, ledger, final npm run verify, and deployment.

## Allowed Character Audit

Learner-facing text audited against latest origin/main L001-L311 learned characters plus current ?. Scope: text, spokenText, displayLines, focusChar, Stage 4 option text, and Stage 4 chunks. Result: PASS.

## Coverage

- L312 ?: 4, require >=3, PASS
- L311 ?: 3, require >=2, PASS
- L310 ?: 2, require >=2, PASS
- L309 ?: 2, require >=2, PASS
- L308 ?: 1, require >=1, PASS
- L307 ?: 1, require >=1, PASS
- Sentence Han counts: L312-S01 9, L312-S02 8, L312-S03 12, L312-S04 10, L312-S05 9
- Any longer-than-12-Han sentence: no

## Approved Final Sentences

1. text: 每次飯前，要記得洗手。
   spokenText: 每次飯前要記得洗手
   focusChar: 記
   displayLines: ["每次飯前，","要記得洗手。"]
   imageSrc: /assets/lessons/L312/images/L312-S01.webp
   audio: /assets/lessons/L312/audio/L312-S01.m4a (4039 ms, 9 charTimings)

2. text: 每天都要記得澆花。
   spokenText: 每天都要記得澆花
   focusChar: 記
   displayLines: ["每天都要","記得澆花。"]
   imageSrc: /assets/lessons/L312/images/L312-S02.webp
   audio: /assets/lessons/L312/audio/L312-S02.m4a (4981 ms, 8 charTimings)

3. text: 媽媽生病，這次換我照顧媽媽。
   spokenText: 媽媽生病這次換我照顧媽媽
   focusChar: 照
   displayLines: ["媽媽生病，","這次換我","照顧媽媽。"]
   imageSrc: /assets/lessons/L312/images/L312-S03.webp
   audio: /assets/lessons/L312/audio/L312-S03.m4a (4419 ms, 12 charTimings)

4. text: 爸爸又忘記戴眼鏡出門。
   spokenText: 爸爸又忘記戴眼鏡出門
   focusChar: 忘
   displayLines: ["爸爸又忘記","戴眼鏡出門。"]
   imageSrc: /assets/lessons/L312/images/L312-S04.webp
   audio: /assets/lessons/L312/audio/L312-S04.m4a (3546 ms, 10 charTimings)

5. text: 下次不要忘記帶書包。
   spokenText: 下次不要忘記帶書包
   focusChar: 記
   displayLines: ["下次不要","忘記帶書包。"]
   imageSrc: /assets/lessons/L312/images/L312-S05.webp
   audio: /assets/lessons/L312/audio/L312-S05.m4a (3589 ms, 9 charTimings)

## Stage 4 Sentence Games

- L312-G01 find-character: sentenceId L312-S04, targetChar 記
- L312-G02 teach-character: sentenceId L312-S01, targetChar 記
  targetCharIndex 5; prefix 每次飯前要; suffix 得洗手; audio /assets/lessons/L312/audio/L312-G02-prefix.m4a, /assets/lessons/L312/audio/L312-G02-suffix.m4a
- L312-G03 missing-character: sentenceId L312-S05, targetChar 記
  missingIndexes [5]; options ["記","次","每"]
- L312-G04 partial-order: sentenceId L312-S03, targetChar 照
  chunks ["媽媽生病","這次換我","照顧媽媽"]
- L312-G05 choose-pronunciation: sentenceId L312-S02, targetChar 記
  options [{"text":"每天都要記得澆花。","correct":true,"audioSrc":"/assets/lessons/L312/audio/L312-S02.m4a"},{"text":"每天都要記得洗手。","correct":false,"audioSrc":"/assets/lessons/L312/audio/L312-G05-wrong-one.m4a"},{"text":"每天都要記得帶水。","correct":false,"audioSrc":"/assets/lessons/L312/audio/L312-G05-wrong-two.m4a"}]

## Asset Requirements

- Images: public/assets/lessons/L312/images/L312-S01.webp through L312-S05.webp, square 1:1, max side 1024 px.
- Audio: public/assets/lessons/L312/audio/ sentence audio, char-u8a18.m4a, G02 prefix/suffix, G05 wrong-one/wrong-two.
- Audio generation flow completed with npm run ai:audio -- --lesson L312, npm run assets:audio -- --lesson L312, npm run assets:align:ai -- --lesson L312.
