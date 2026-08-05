# L090 Generation Packet: 桌

## Lesson Request

- Lesson: L090
- New character: 桌
- Zhuyin: ㄓㄨㄛ
- Course type: 認字練功房
- Target sentence count: 5
- Dependencies: L085 給, L086 紙, L087 心, L088 放, L089 把
- Current gate: latest `origin/main` is not yet merged through L089, so L090 is branch-only parallel preparation. Do not merge L090 production JSON until L086-L089 are merged in order.
- Provisional learned chars used by this packet: 紙, 心, 放, 把
- Disallowed chars in lesson-facing text/options: 用, 張, 從, 能, 子, 盒
- Taiwan usage and Taiwan zhuyin only. No Hanyu Pinyin.
- `spokenText` must equal `text` with punctuation removed.
- Image style reference: L058 approved assets.
- Audio flow: AI audio -> `assets:audio` -> `assets:align:ai`
- Standalone character audio rule: `char-u684c.m4a` must be generated directly as single-character AI audio. Do not cut it from sentence audio.
- Teach audio rule: prefix/suffix files must be generated from the exact text fragments, not cut from the full sentence.
- Choose-pronunciation rule: wrong-choice audio files must be generated as full wrong sentences, not spliced.

## Milestone Note

L090 is a 30-lesson milestone. After L090 enters production, the next production sequence must add R003 and R004 review modules before L091. R003/R004 should not be skipped.

## Approved Sentences

1. 我把筆和紙放在桌上
   - spokenText: 我把筆和紙放在桌上
   - focusChar: 桌
   - Han count: 9

2. 桌上放著很多愛心
   - spokenText: 桌上放著很多愛心
   - focusChar: 桌
   - Han count: 8

3. 把書桌上的紙給同學
   - spokenText: 把書桌上的紙給同學
   - focusChar: 桌
   - Han count: 9

4. 和爸媽一起出門，好開心
   - spokenText: 和爸媽一起出門好開心
   - focusChar: 心
   - Han count: 10

5. 路邊那是誰的家
   - spokenText: 路邊那是誰的家
   - focusChar: 那
   - Han count: 7

## Coverage Check

- 桌: 3 occurrences, L090 new character, target met
- 把: 2 occurrences, L089, target met
- 放: 2 occurrences, L088, target met
- 心: 2 occurrences, L087, target met
- 紙: 2 occurrences, L086, target met
- 給: 1 occurrence, L085, target met

Sentence Han counts: S01 9, S02 8, S03 9, S04 10, S05 7.

## Image Direction

Style reference: L058 approved image style. Use warm modern children's picture-book watercolor, soft pencil linework, warm natural light, gentle facial expressions, and phone-readable composition. Do not include visible text, letters, numbers, signage, labels, zhuyin, speech bubbles, arrows, logos, watermarks, or UI.

1. L090-S01: A child places a simple pen and blank paper on a table. The table, pen, and paper must be clear. Paper must have no writing.
2. L090-S02: A table has many handmade paper hearts on top. A child looks at or arranges them. The tabletop and hearts must be clear.
3. L090-S03: A child takes blank paper from a study desk and gives it to a classmate. The desk, paper, and classmate must all be clear.
4. L090-S04: A child goes out together with dad and mom, looking happy. Warm family outing near a front door.
5. L090-S05: A child stands by the roadside and looks curiously toward a nearby house, as if asking whose home it is. The road edge and house must be clear.

## Audio Plan

Use AI audio -> `assets:audio` -> `assets:align:ai`.

Required final audio:

- `/assets/lessons/L090/audio/char-u684c.m4a`
- `/assets/lessons/L090/audio/L090-S01.m4a`
- `/assets/lessons/L090/audio/L090-S02.m4a`
- `/assets/lessons/L090/audio/L090-S03.m4a`
- `/assets/lessons/L090/audio/L090-S04.m4a`
- `/assets/lessons/L090/audio/L090-S05.m4a`
- `/assets/lessons/L090/audio/L090-G02-prefix.m4a`
- `/assets/lessons/L090/audio/L090-G02-suffix.m4a`
- `/assets/lessons/L090/audio/L090-G05-wrong-one.m4a`
- `/assets/lessons/L090/audio/L090-G05-wrong-two.m4a`

Exact AI audio inputs:

- char-u684c: 桌
- L090-S01: 我把筆和紙放在桌上
- L090-S02: 桌上放著很多愛心
- L090-S03: 把書桌上的紙給同學
- L090-S04: 和爸媽一起出門好開心
- L090-S05: 路邊那是誰的家
- L090-G02-prefix: 我把筆和紙放在
- L090-G02-suffix: 上
- L090-G05-wrong-one: 路邊這是誰的家
- L090-G05-wrong-two: 山邊那是誰的家

## Stage 4 Design

1. `L090-G01` find-character
   - sentence: L090-S02
   - targetChar: 桌
   - missingIndexes: 0

2. `L090-G02` teach-character
   - sentence: L090-S01
   - targetChar: 桌
   - targetCharIndex: 7
   - prefix text: 我把筆和紙放在
   - suffix text: 上

3. `L090-G03` missing-character
   - sentence: L090-S03
   - targetChar: 桌
   - missingIndexes: 2
   - options: 桌 correct, 放 false, 把 false

4. `L090-G04` partial-order
   - sentence: L090-S04
   - targetChar: 心
   - missingIndexes: 7, 8, 9
   - ordered answer: 好, 開, 心

5. `L090-G05` choose-pronunciation
   - sentence: L090-S05
   - targetChar: 那
   - correct: 路邊那是誰的家
   - wrong-one: 路邊這是誰的家
   - wrong-two: 山邊那是誰的家

## Production Gate

Before merging L090 into production:

1. Fetch/rebase on latest `origin/main`.
2. Confirm L085-L089 are merged in order.
3. Re-run allowed-character audit against the real merged learned set.
4. Add L090 to `src/curriculum/sample-lessons.json`.
5. Update `docs/CURRICULUM_LEDGER.md`.
6. Run `npm run curriculum:export-planner`.
7. Confirm the next production sequence is R003 and R004 before L091.
8. Run `npm run verify`.
