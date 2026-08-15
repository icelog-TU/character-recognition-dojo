# L279 Generation Packet

- Unit: L279
- Title: 木
- New character: 木 (ㄇㄨˋ)
- Branch: codex/l279-complete-package
- Status: ready-blocked-by-dependency until L275-L278 are in main
- Production boundary: L274 卡
- Provisional learned chars: ["住","蓋","橋","座"]
- Missing dependencies observed at source generation: L275, L276, L277, L278

## Approved Sentences

### L279-S01
- text: 我要蓋一座木橋。
- spokenText: 我要蓋一座木橋
- focusChar: 木
- displayLines: 我要蓋 / 一座木橋。
- imageSrc: /assets/lessons/L279/images/L279-S01.webp
- audioSrc: /assets/lessons/L279/audio/L279-S01.m4a
- imageNotes: Protagonist little girl builds one wooden bridge at home or in a play area using toy or safe craft materials; no text, numbers, labels, or zhuyin.

### L279-S02
- text: 工人用木頭蓋房子。
- spokenText: 工人用木頭蓋房子
- focusChar: 木
- displayLines: 工人用木頭 / 蓋房子。
- imageSrc: /assets/lessons/L279/images/L279-S02.webp
- audioSrc: /assets/lessons/L279/audio/L279-S02.m4a
- imageNotes: A construction worker safely uses wood to build a house; show worker, wood, and house building clearly; no text, numbers, signs, labels, or zhuyin.

### L279-S03
- text: 木盒卡住了，打不開。
- spokenText: 木盒卡住了打不開
- focusChar: 木
- displayLines: 木盒卡住了， / 打不開。
- imageSrc: /assets/lessons/L279/images/L279-S03.webp
- audioSrc: /assets/lessons/L279/audio/L279-S03.m4a
- imageNotes: Protagonist little girl at a table tries to open a wooden box, but the wooden box is stuck and will not open; no text, numbers, labels, or zhuyin.

### L279-S04
- text: 橋下住著一隻小狗。
- spokenText: 橋下住著一隻小狗
- focusChar: 橋
- displayLines: 橋下住著 / 一隻小狗。
- imageSrc: /assets/lessons/L279/images/L279-S04.webp
- audioSrc: /assets/lessons/L279/audio/L279-S04.m4a
- imageNotes: A small dog lives in a cozy little nook under a bridge, with the protagonist little girl watching from a safe distance; warm fairy-tale feeling, not poverty; no text, numbers, labels, or zhuyin.

### L279-S05
- text: 後座放著木頭玩具。
- spokenText: 後座放著木頭玩具
- focusChar: 座
- displayLines: 後座放著 / 木頭玩具。
- imageSrc: /assets/lessons/L279/images/L279-S05.webp
- audioSrc: /assets/lessons/L279/audio/L279-S05.m4a
- imageNotes: Wooden toys are on the back seat of a parked car; protagonist little girl looks at or safely reaches toward the toys; no license plate, text, numbers, labels, or zhuyin.

## Stage 4 Fixed Sentence Games

### L279-G01
- type: find-character
- sentenceId: L279-S01
- targetChar: 木
- missingIndexes: 5

### L279-G02
- type: teach-character
- sentenceId: L279-S03
- targetChar: 木
- targetCharIndex: 0
- missingIndexes: 0
- teachAudio: {"suffixSrc":"/assets/lessons/L279/audio/L279-G02-suffix.m4a"}

### L279-G03
- type: missing-character
- sentenceId: L279-S02
- targetChar: 木
- missingIndexes: 3
- options: L279-G03-A:木 (correct) | L279-G03-B:蓋 | L279-G03-C:住

### L279-G04
- type: partial-order
- sentenceId: L279-S04
- targetChar: 橋
- missingIndexes: 0, 1, 2, 3, 4, 5, 6, 7
- chunks: 1. 橋下 | 2. 住著 | 3. 一隻小狗
- options: L279-G04-A:橋下 (correct) | L279-G04-B:住著 (correct) | L279-G04-C:一隻小狗 (correct)

### L279-G05
- type: choose-pronunciation
- sentenceId: L279-S05
- targetChar: 座
- options: L279-G05-A:後座放著木頭玩具。 (correct) | L279-G05-B:後座放著木盒玩具。 | L279-G05-C:後座放著木橋玩具。

## Production Notes

- G02 target is the first Han character, so prefix text is empty and prefixSrc is omitted per CURRICULUM_PRODUCTION_SOP; suffix audio is generated from exact suffix text.
- Do not use 積木 in display text or Stage 4 text; 積 is not learned.
- All image prompts require square image / 1:1 composition and no visible text, numbers, labels, watermarks, signs, or zhuyin.
