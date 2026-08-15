# L283 Generation Packet

- Unit: L283
- Title: 破
- New character: 破 (ㄆㄛˋ)
- Branch: codex/l283-complete-package
- Status: claimed / package in progress
- Production boundary used: origin/main through L274
- Missing dependencies expected before release: L277, L278, L279, L280, L281, L282
- Provisional learned chars: ["橋","座","木","積","堆","洞"]
- Request path: curriculum-workflow/lesson-requests/L283.json
- Draft path: curriculum-workflow/drafts/L283-draft.json

## Approved Sentences

### L283-S01
- text: 衣服破了一個洞。
- spokenText: 衣服破了一個洞
- focusChar: 破
- displayLines: ["衣服破了","一個洞。"]
- imageSrc: /assets/lessons/L283/images/L283-S01.webp
- audioSrc: /assets/lessons/L283/audio/L283-S01.m4a
- imageNotes: Protagonist little girl looks at a piece of clothing with one clear hole torn in it; show the hole clearly while keeping the child fully covered and safe; no text, numbers, labels, or zhuyin.

### L283-S02
- text: 舊書破掉了、只剩半本。
- spokenText: 舊書破掉了只剩半本
- focusChar: 破
- displayLines: ["舊書破掉了、","只剩半本。"]
- imageSrc: /assets/lessons/L283/images/L283-S02.webp
- audioSrc: /assets/lessons/L283/audio/L283-S02.m4a
- imageNotes: On a table is an old book that is torn and visibly only half remaining or missing about half; protagonist little girl looks at it; pages must have no readable text, page numbers, labels, or zhuyin.

### L283-S03
- text: 積木堆太高、倒下打破盒子。
- spokenText: 積木堆太高倒下打破盒子
- focusChar: 破
- displayLines: ["積木堆太高、","倒下打破盒子。"]
- imageSrc: /assets/lessons/L283/images/L283-S03.webp
- audioSrc: /assets/lessons/L283/audio/L283-S03.m4a
- imageNotes: Protagonist little girl stacked building blocks too high; the tall stack has fallen and broken a nearby cardboard or wooden box. Safe child-friendly scene, no sharp fragments, no injuries, no scared expression; blocks and box have no letters, text, numbers, labels, or zhuyin.

### L283-S04
- text: 木橋下有一個山洞。
- spokenText: 木橋下有一個山洞
- focusChar: 橋
- displayLines: ["木橋下有","一個山洞。"]
- imageSrc: /assets/lessons/L283/images/L283-S04.webp
- audioSrc: /assets/lessons/L283/audio/L283-S04.m4a
- imageNotes: A wooden bridge with a mountain cave underneath it; protagonist little girl watches from a safe distance. Make it warm fairy-tale natural scenery, not a scary cave; no text, numbers, road signs, labels, or zhuyin.

### L283-S05
- text: 後座有一堆破舊積木。
- spokenText: 後座有一堆破舊積木
- focusChar: 堆
- displayLines: ["後座有一堆","破舊積木。"]
- imageSrc: /assets/lessons/L283/images/L283-S05.webp
- audioSrc: /assets/lessons/L283/audio/L283-S05.m4a
- imageNotes: The back seat of a parked car contains a pile of old broken building blocks; protagonist little girl stands nearby looking or preparing to tidy them. Safe car interior, no license plate, no text, no numbers, no labels, no zhuyin; blocks must not contain letters or digits.

## Stage 4 Fixed Sentence Games

### L283-G01
- type: find-character
- sentenceId: L283-S01
- targetChar: 破
- missingIndexes: [2]

### L283-G02
- type: teach-character
- sentenceId: L283-S02
- targetChar: 破
- targetCharIndex: 2
- missingIndexes: [2]
- teachAudio: {"prefixSrc":"/assets/lessons/L283/audio/L283-G02-prefix.m4a","suffixSrc":"/assets/lessons/L283/audio/L283-G02-suffix.m4a"}

### L283-G03
- type: missing-character
- sentenceId: L283-S03
- targetChar: 破
- missingIndexes: [9]
- options: L283-G03-A:破 (correct) | L283-G03-B:堆 | L283-G03-C:洞

### L283-G04
- type: partial-order
- sentenceId: L283-S04
- targetChar: 洞
- missingIndexes: [0,1,2,3,4,5,6,7]
- chunks: 0.木橋下 | 1.有一個 | 2.山洞
- options: L283-G04-A:木橋下 (correct) | L283-G04-B:有一個 (correct) | L283-G04-C:山洞 (correct)

### L283-G05
- type: choose-pronunciation
- sentenceId: L283-S05
- targetChar: 堆
- options: L283-G05-A:後座有一堆破舊積木。 (correct) audio=/assets/lessons/L283/audio/L283-S05.m4a | L283-G05-B:後座有一堆舊積木。 audio=/assets/lessons/L283/audio/L283-G05-wrong-one.m4a | L283-G05-C:後座有一堆木頭。 audio=/assets/lessons/L283/audio/L283-G05-wrong-two.m4a

## Production Notes

- Dependency-blocked package: do not call merge-ready until L277-L282 are in main.
- Editor patch: L277 橋 added to dependsOnLessons and provisionalLearnedChars after initial allowed-character audit correctly failed on 橋. Approved sentences remain unchanged.
- Allowed-character audit after Editor patch: PASS using origin/main L001-L274 plus provisional learned chars and current target.
- G02 prefix text is 舊書; suffix text is 掉了只剩半本. Generate both as dedicated TTS fragments.
- G05 wrong-choice audio must be generated from exact complete wrong texts.
- All images require square image / 1:1 composition and no visible text, numbers, labels, watermarks, signs, zhuyin, or readable marks.
- Images must show damage gently and safely: no exposed body, no sharp fragments, no injuries, no frightening cave.
