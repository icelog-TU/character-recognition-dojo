# L092 Generation Packet: 盒

## Lesson Request

- Lesson: L092
- New character: 盒
- Zhuyin: ㄏㄜˊ
- Course type: 認字練功房
- Target sentence count: 5
- Dependencies: L087 心, L088 放, L089 把, L090 桌, L091 子
- Review dependency: R003 and R004 must already be inserted after L090 before L091/L092 ship.
- Current gate: latest `origin/main` has L090 and R003/R004, but does not yet include L091. L092 is therefore branch-only parallel preparation. Do not merge L092 production JSON yet.
- Provisional learned chars used by this packet: 子
- Disallowed chars in lesson-facing text/options: 用, 張, 從, 能, 進
- Taiwan usage and Taiwan zhuyin only. No Hanyu Pinyin.
- `spokenText` must equal `text` with punctuation removed.
- Image style reference: L058 approved assets.
- Audio flow: AI audio -> `assets:audio` -> `assets:align:ai`
- Standalone character audio rule: `char-u76d2.m4a` must be generated directly as single-character AI audio. Do not cut it from sentence audio.
- Teach audio rule: prefix/suffix files must be generated from the exact text fragments, not cut from the full sentence.
- Choose-pronunciation rule: wrong-choice audio files must be generated as full wrong sentences, not spliced.

## Approved Sentences

1. 我把筆放到筆盒裡
   - spokenText: 我把筆放到筆盒裡
   - focusChar: 盒
   - Han count: 8

2. 誰把這個紙盒放在桌上？
   - spokenText: 誰把這個紙盒放在桌上
   - focusChar: 盒
   - Han count: 10

3. 不要坐在桌子上
   - spokenText: 不要坐在桌子上
   - focusChar: 子
   - Han count: 7

4. 盒子裡有很多愛心
   - spokenText: 盒子裡有很多愛心
   - focusChar: 盒
   - Han count: 8

5. 我沒帶筆，同學借我
   - spokenText: 我沒帶筆同學借我
   - focusChar: 借
   - Han count: 8

## Coverage Check

Actual counts from the approved text:

- 盒: 3 occurrences, L092 new character, target met
- 子: 2 occurrences, L091, target met
- 桌: 2 occurrences, L090, target met
- 把: 2 occurrences, L089, target met
- 放: 2 occurrences, L088, target met
- 心: 1 occurrence, L087, target met

Note: the teacher-provided count listed 盒 as 4 and 桌 as 3. The approved sentences actually contain 盒 3 times and 桌 2 times; both still meet coverage targets. 放 appears 2 times as provided.

Sentence Han counts: S01 8, S02 10, S03 7, S04 8, S05 8.

## Image Direction

Style reference: L058 approved image style. Use warm modern children's picture-book watercolor, soft pencil linework, warm natural light, gentle facial expressions, and phone-readable composition. Do not include visible text, letters, numbers, signage, labels, zhuyin, speech bubbles, arrows, logos, watermarks, or UI.

1. L092-S01: A child places a simple pen into an open pencil box. The pen and pencil box are clear. The pencil box has no writing.
2. L092-S02: A plain paper box is on a table. A child looks puzzled or points at the box, wondering who put it there. The paper box has no writing.
3. L092-S03: A child is about to sit on a table, and an adult gently reminds the child not to sit there. Caring reminder, not scolding.
4. L092-S04: An open plain box contains many paper hearts or heart-shaped craft pieces. Hearts and box are clear; no writing on the box.
5. L092-S05: In a classroom, one child has no pen and a classmate kindly lends a simple pen. All paper and classroom items are blank.

## Audio Plan

Use AI audio -> `assets:audio` -> `assets:align:ai`.

Required final audio:

- `/assets/lessons/L092/audio/char-u76d2.m4a`
- `/assets/lessons/L092/audio/L092-S01.m4a`
- `/assets/lessons/L092/audio/L092-S02.m4a`
- `/assets/lessons/L092/audio/L092-S03.m4a`
- `/assets/lessons/L092/audio/L092-S04.m4a`
- `/assets/lessons/L092/audio/L092-S05.m4a`
- `/assets/lessons/L092/audio/L092-G02-prefix.m4a`
- `/assets/lessons/L092/audio/L092-G02-suffix.m4a`
- `/assets/lessons/L092/audio/L092-G05-wrong-one.m4a`
- `/assets/lessons/L092/audio/L092-G05-wrong-two.m4a`

Exact AI audio inputs:

- char-u76d2: 盒
- L092-S01: 我把筆放到筆盒裡
- L092-S02: 誰把這個紙盒放在桌上
- L092-S03: 不要坐在桌子上
- L092-S04: 盒子裡有很多愛心
- L092-S05: 我沒帶筆同學借我
- L092-G02-prefix: 誰把這個紙
- L092-G02-suffix: 放在桌上
- L092-G05-wrong-one: 我沒帶書同學借我
- L092-G05-wrong-two: 我沒帶筆同學找我

## Stage 4 Design

1. `L092-G01` find-character
   - sentence: L092-S01
   - targetChar: 盒
   - missingIndexes: 6

2. `L092-G02` teach-character
   - sentence: L092-S02
   - targetChar: 盒
   - targetCharIndex: 5
   - prefix text: 誰把這個紙
   - suffix text: 放在桌上

3. `L092-G03` missing-character
   - sentence: L092-S04
   - targetChar: 盒
   - missingIndexes: 0
   - options: 盒 correct, 桌 false, 紙 false

4. `L092-G04` partial-order
   - sentence: L092-S03
   - targetChar: 子
   - missingIndexes: 4, 5, 6
   - ordered answer: 桌, 子, 上

5. `L092-G05` choose-pronunciation
   - sentence: L092-S05
   - targetChar: 借
   - correct: 我沒帶筆同學借我
   - wrong-one: 我沒帶書同學借我
   - wrong-two: 我沒帶筆同學找我

## Production Gate

Before merging L092 into production:

1. Fetch/rebase on latest `origin/main`.
2. Confirm L087-L091 are merged in order.
3. Confirm R003 and R004 review modules remain inserted after L090.
4. Re-run allowed-character audit against the real merged learned set.
5. Add L092 to `src/curriculum/sample-lessons.json`.
6. Update `docs/CURRICULUM_LEDGER.md`.
7. Run `npm run curriculum:export-planner`.
8. Run `npm run verify`.
