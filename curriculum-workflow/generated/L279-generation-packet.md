# L279 Generation Packet

- Unit: L279
- Title: 木
- New character: 木 (ㄇㄨˋ)
- Branch: codex/l279-complete-package
- Status: ready-blocked-by-dependency
- Production boundary used: origin/main through L274
- Missing dependencies observed: L275, L276, L277, L278
- Provisional learned chars: ["住","蓋","橋","座"]
- Request path: curriculum-workflow/lesson-requests/L279.json
- Draft path: curriculum-workflow/drafts/L279-draft.json

## Approved Sentences

### L279-S01
- text: 我要蓋一座木橋。
- spokenText: 我要蓋一座木橋
- focusChar: 木
- displayLines: ["我要蓋","一座木橋。"]
- imageSrc: /assets/lessons/L279/images/L279-S01.webp
- audioSrc: /assets/lessons/L279/audio/L279-S01.m4a
- audioDurationMs: 3540
- charTimings: 7
- imageNotes: Protagonist little girl builds one wooden bridge at home or in a play area using toy or safe craft materials; no text, numbers, labels, or zhuyin.

### L279-S02
- text: 工人用木頭蓋房子。
- spokenText: 工人用木頭蓋房子
- focusChar: 木
- displayLines: ["工人用木頭","蓋房子。"]
- imageSrc: /assets/lessons/L279/images/L279-S02.webp
- audioSrc: /assets/lessons/L279/audio/L279-S02.m4a
- audioDurationMs: 3752
- charTimings: 8
- imageNotes: A construction worker safely uses wood to build a house; show worker, wood, and house building clearly; no text, numbers, signs, labels, or zhuyin.

### L279-S03
- text: 木盒卡住了，打不開。
- spokenText: 木盒卡住了打不開
- focusChar: 木
- displayLines: ["木盒卡住了，","打不開。"]
- imageSrc: /assets/lessons/L279/images/L279-S03.webp
- audioSrc: /assets/lessons/L279/audio/L279-S03.m4a
- audioDurationMs: 5709
- charTimings: 8
- imageNotes: Protagonist little girl at a table tries to open a wooden box, but the wooden box is stuck and will not open; no text, numbers, labels, or zhuyin.

### L279-S04
- text: 橋下住著一隻小狗。
- spokenText: 橋下住著一隻小狗
- focusChar: 橋
- displayLines: ["橋下住著","一隻小狗。"]
- imageSrc: /assets/lessons/L279/images/L279-S04.webp
- audioSrc: /assets/lessons/L279/audio/L279-S04.m4a
- audioDurationMs: 4100
- charTimings: 8
- imageNotes: A small dog lives in a cozy little nook under a bridge, with the protagonist little girl watching from a safe distance; warm fairy-tale feeling, not poverty; no text, numbers, labels, or zhuyin.

### L279-S05
- text: 後座放著木頭玩具。
- spokenText: 後座放著木頭玩具
- focusChar: 座
- displayLines: ["後座放著","木頭玩具。"]
- imageSrc: /assets/lessons/L279/images/L279-S05.webp
- audioSrc: /assets/lessons/L279/audio/L279-S05.m4a
- audioDurationMs: 4445
- charTimings: 8
- imageNotes: Wooden toys are on the back seat of a parked car; protagonist little girl looks at or safely reaches toward the toys; no license plate, text, numbers, labels, or zhuyin.

## Stage 4 Fixed Sentence Games

### L279-G01
- type: find-character
- sentenceId: L279-S01
- targetChar: 木
- missingIndexes: [5]

### L279-G02
- type: teach-character
- sentenceId: L279-S03
- targetChar: 木
- targetCharIndex: 0
- missingIndexes: [0]
- teachAudio: {"suffixSrc":"/assets/lessons/L279/audio/L279-G02-suffix.m4a"}

### L279-G03
- type: missing-character
- sentenceId: L279-S02
- targetChar: 木
- missingIndexes: [3]
- options: L279-G03-A:木 (correct) | L279-G03-B:蓋 | L279-G03-C:住

### L279-G04
- type: partial-order
- sentenceId: L279-S04
- targetChar: 橋
- missingIndexes: [0,1,2,3,4,5,6,7]
- options: L279-G04-A:橋下 (correct) | L279-G04-B:住著 (correct) | L279-G04-C:一隻小狗 (correct)
- chunks: 0.橋下 | 1.住著 | 2.一隻小狗

### L279-G05
- type: choose-pronunciation
- sentenceId: L279-S05
- targetChar: 座
- options: L279-G05-A:後座放著木頭玩具。 (correct) audio=/assets/lessons/L279/audio/L279-S05.m4a | L279-G05-B:後座放著木盒玩具。 audio=/assets/lessons/L279/audio/L279-G05-wrong-one.m4a | L279-G05-C:後座放著木橋玩具。 audio=/assets/lessons/L279/audio/L279-G05-wrong-two.m4a

## Production QA Notes

- Dependency status: L275, L276, L277, and L278 are not in latest origin/main sample-lessons.json; production JSON insertion is blocked.
- Shared-state handling: src/curriculum/sample-lessons.json was temporarily used for audio/alignment and restored; no shared-state file remains dirty.
- Allowed-character audit: PASS using origin/main L001-L274 plus provisional learned chars and current target.
- Sentence Han count vs charTimings: PASS for all five sentences.
- Stage 4 structure: PASS; five game types used once, and each reviewed sentence is used once.
- G02 teach-character: target is first Han character; prefix text is empty, so prefixSrc is omitted per repo SOP. Suffix audio was generated from exact suffix text.
- G05 choose-pronunciation: wrong-choice audio files were generated from complete wrong texts, not spliced.
- Audio generation: npm run ai:audio -- --lesson L279 generated S01-S05, char audio, G02 suffix, and G05 wrong choices.
- Audio conversion: npm run assets:audio -- --lesson L279 produced AAC 44100 Hz mono m4a files.
- Alignment: npm run assets:align:ai -- --lesson L279 completed after adding simplified ASR equivalents for U+76D6/U+6A4B and regenerating S03 TTS to avoid a U+6728 U+76D2 homophone ASR confusion.
- Image generation: five square 1:1 WebP images, all 1024x1024, no visible text/numbers/labels found in visual QA.
- Image sizes: largest L279-S04.webp is 183,480 bytes; image set total is 754,398 bytes; asset folder total is 1,141,539 bytes.
- Visual cast compliance: L058 used only as style reference; protagonist family continuity follows L154/L162/L163 style guidance; worker and dog scenes use role-specific identities.
- Display text guardrail: no display or Stage 4 text uses unlearned U+7A4D or the unlearned word U+7A4D U+6728.
- validate:production: PASS.
- npm run verify: PASS. Expected dependency-blocked warning observed: public/assets/lessons/L279/ exists but is not in production curriculum.

## Asset Review URLs

- Pre-merge package preview: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L279&ref=codex%2Fl279-complete-package
- Post-merge main review: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L279&ref=main
