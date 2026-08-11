# L189 能 generation packet

## Unit

- Unit: L189
- Kind: normal lesson
- Title: 能
- New character: 能
- Taiwan zhuyin: ㄋㄥˊ
- Production thread: Production C
- Branch: codex/l189-complete-package

## Dependency state

Latest origin/main production JSON is complete through L187 真. L188 力 is not yet in production JSON, so this package uses provisional learned chars:

- 力

Final package status must remain `ready-blocked-by-dependency` until L188 merges, then Release should rebase/recheck before production integration.

## Allowed character audit

Boundary: L001-L187 learned chars from latest origin/main + provisional 力 + current 能.

Audited fields:

- text
- spokenText
- displayLines
- focusChar
- Stage 4 option text
- G02 teachAudio fragments
- G04 chunks
- G05 wrong-choice text

Result: PASS.

## Approved sentences

### L189-S01

- text: 這本書不能借。
- spokenText: 這本書不能借
- focusChar: 能
- displayLines: ["這本書", "不能借。"]
- image: Child wants to borrow a book, while an adult or teacher gently indicates the book cannot be borrowed. Show the child reaching toward a book on a table. The cover must be blank with no text, numbers, labels, or readable marks.

### L189-S02

- text: 沒有力氣，不能打球。
- spokenText: 沒有力氣不能打球
- focusChar: 能
- displayLines: ["沒有力氣，", "不能打球。"]
- image: Child holds a ball or bat but looks tired and without strength, so cannot play ball. The feeling should be clear but not exaggerated or sickly. No text, numbers, or labels.

### L189-S03

- text: 他的畫真有想像力。
- spokenText: 他的畫真有想像力
- focusChar: 力
- displayLines: ["他的畫", "真有想像力。"]
- image: Child displays an imaginative drawing with whimsical childlike elements such as a flying pony, a flower shaped like a bird, or a fun fantasy scene. The paper must contain only pictures and shapes, no text, numbers, signatures, or labels.

### L189-S04

- text: 真想能像小馬一樣跑得快。
- spokenText: 真想能像小馬一樣跑得快
- focusChar: 能
- displayLines: ["真想能像", "小馬一樣", "跑得快。"]
- image: Child watches a small pony running fast and clearly wishes to be able to run as fast as the pony. No text, numbers, signs, or labels.

### L189-S05

- text: 老師叫大家下課時去打掃。
- spokenText: 老師叫大家下課時去打掃
- focusChar: 課
- displayLines: ["老師叫大家", "下課時", "去打掃。"]
- image: Teacher warmly tells children to clean after class. Children hold cleaning tools and prepare to clean a classroom or hallway. No blackboard writing, schedule, text, numbers, labels, or signs.

## Stage 4 plan

### G01 find-character

- sentenceId: L189-S01
- targetChar: 能
- reason: 「不能借」是本課核心用法，目標字清楚。

### G02 teach-character

- sentenceId: L189-S04
- targetChar: 能
- targetCharIndex: 2
- teachAudio prefix exact text: 真想
- teachAudio suffix exact text: 像小馬一樣跑得快

### G03 missing-character

- sentenceId: L189-S02
- targetChar: 能
- missingIndexes: [5]
- options: ["能","力","真"]

### G04 partial-order

- sentenceId: L189-S05
- chunks:
  1. 老師叫大家
  2. 下課時
  3. 去打掃

### G05 choose-pronunciation

- correct sentenceId: L189-S03
- correct text: 他的畫真有想像力。
- wrong-one text: 他的畫真有想像。
- wrong-two text: 他的畫沒有想像力。
- Wrong-choice audio must be generated from each full wrong sentence.

## Asset requirements

- Images: square image / 1:1 composition, WebP, longest edge <= 1024 px, target <= 250 KB each, hard max <= 400 KB each.
- Image style anchors: public/assets/lessons/L058/images/L058-S01.webp, L058-S02.webp, L058-S03.webp.
- Audio: repo OpenAI TTS only, processed by npm run assets:audio, aligned by npm run assets:align:ai.
- Char audio: public/assets/lessons/L189/audio/char-u80fd.m4a.
- G02 prefix/suffix and G05 wrong choices are standalone TTS files, not spliced audio.
