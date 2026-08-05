# L091 Generation Packet: 子

## Lesson Request

- Lesson: L091
- New character: 子
- Zhuyin: ㄗ˙
- Course type: 認字練功房
- Target sentence count: 5
- Dependencies: L086 紙, L087 心, L088 放, L089 把, L090 桌
- Review dependency: R003 and R004 must already be inserted after L090 before L091 ships.
- Current gate: latest `origin/main` is not yet merged through L090 and does not include R003/R004, so L091 is branch-only parallel preparation. Do not merge L091 production JSON yet.
- Provisional learned chars used by this packet: 桌
- Disallowed chars in lesson-facing text/options: 用, 張, 從, 能, 盒
- Taiwan usage and Taiwan zhuyin only. No Hanyu Pinyin.
- `spokenText` must equal `text` with punctuation removed.
- Image style reference: L058 approved assets.
- Audio flow: AI audio -> `assets:audio` -> `assets:align:ai`
- Standalone character audio rule: `char-u5b50.m4a` must be generated directly as single-character AI audio. Do not cut it from sentence audio.
- Important pronunciation rule: `子` is neutral tone in this lesson, like the final syllable of `本子`, `孩子`, and `樣子`. The single-character file must say Taiwan Mandarin neutral-tone `ㄗ˙`, not third tone `ㄗˇ`. Sentence audio must also keep `本子`, `孩子`, and `樣子` neutral-tone.
- Teach audio rule: prefix/suffix files must be generated from the exact text fragments, not cut from the full sentence.
- Choose-pronunciation rule: wrong-choice audio files must be generated as full wrong sentences, not spliced.

## Approved Sentences

1. 桌上放著一個小本子
   - spokenText: 桌上放著一個小本子
   - focusChar: 子
   - Han count: 9

2. 誰把筆拿走了？
   - spokenText: 誰把筆拿走了
   - focusChar: 把
   - Han count: 6

3. 那孩子很開心的樣子
   - spokenText: 那孩子很開心的樣子
   - focusChar: 子
   - Han count: 9

4. 媽媽把水放在桌上
   - spokenText: 媽媽把水放在桌上
   - focusChar: 桌
   - Han count: 8

5. 我要更多的紙
   - spokenText: 我要更多的紙
   - focusChar: 紙
   - Han count: 6

## Coverage Check

- 子: 3 occurrences, L091 new character, target met
- 桌: 2 occurrences, L090, target met
- 把: 2 occurrences, L089, target met
- 放: 2 occurrences, L088, target met
- 心: 1 occurrence, L087, target met
- 紙: 1 occurrence, L086, target met

Sentence Han counts: S01 9, S02 6, S03 9, S04 8, S05 6.

## Image Direction

Style reference: L058 approved image style. Use warm modern children's picture-book watercolor, soft pencil linework, warm natural light, gentle facial expressions, and phone-readable composition. Do not include visible text, letters, numbers, signage, labels, zhuyin, speech bubbles, arrows, logos, watermarks, or UI.

1. L091-S01: A small blank notebook rests on a table. The notebook is clear, with no visible writing. A simple pen and blank paper may be nearby.
2. L091-S02: A child beside a table notices a pen is missing; another person nearby holds the pen or has just taken it. Keep the mood curious, not conflict.
3. L091-S03: A child clearly looks very happy, perhaps holding a blank paper heart or a beautiful blank book. The happy expression is the main point.
4. L091-S04: A mother gently places a cup of water on a table. Mother, cup, water, and table are clear.
5. L091-S05: A child wants more blank paper. Some blank paper is already on the table or in the child's hands, and the child gestures to an adult for more.

## Audio Plan

Use AI audio -> `assets:audio` -> `assets:align:ai`.

Required final audio:

- `/assets/lessons/L091/audio/char-u5b50.m4a`
- `/assets/lessons/L091/audio/L091-S01.m4a`
- `/assets/lessons/L091/audio/L091-S02.m4a`
- `/assets/lessons/L091/audio/L091-S03.m4a`
- `/assets/lessons/L091/audio/L091-S04.m4a`
- `/assets/lessons/L091/audio/L091-S05.m4a`
- `/assets/lessons/L091/audio/L091-G02-prefix.m4a`
- `/assets/lessons/L091/audio/L091-G05-wrong-one.m4a`
- `/assets/lessons/L091/audio/L091-G05-wrong-two.m4a`

Exact AI audio inputs:

- char-u5b50: 子, generated as standalone neutral-tone ㄗ˙
- L091-S01: 桌上放著一個小本子
- L091-S02: 誰把筆拿走了
- L091-S03: 那孩子很開心的樣子
- L091-S04: 媽媽把水放在桌上
- L091-S05: 我要更多的紙
- L091-G02-prefix: 那孩子很開心的樣
- L091-G05-wrong-one: 誰把書拿走了
- L091-G05-wrong-two: 誰把筆拿來了

## Stage 4 Design

1. `L091-G01` find-character
   - sentence: L091-S01
   - targetChar: 子
   - missingIndexes: 8

2. `L091-G02` teach-character
   - sentence: L091-S03
   - targetChar: 子
   - targetCharIndex: 8
   - prefix text: 那孩子很開心的樣
   - suffix text: none

3. `L091-G03` missing-character
   - sentence: L091-S05
   - targetChar: 紙
   - missingIndexes: 5
   - options: 紙 correct, 水 false, 筆 false

4. `L091-G04` partial-order
   - sentence: L091-S04
   - targetChar: 桌
   - missingIndexes: 4, 5, 6, 7
   - ordered answer: 放, 在, 桌, 上

5. `L091-G05` choose-pronunciation
   - sentence: L091-S02
   - targetChar: 把
   - correct: 誰把筆拿走了
   - wrong-one: 誰把書拿走了
   - wrong-two: 誰把筆拿來了

## Production Gate

Before merging L091 into production:

1. Fetch/rebase on latest `origin/main`.
2. Confirm L086-L090 are merged in order.
3. Confirm R003 and R004 review modules are inserted after L090.
4. Re-run allowed-character audit against the real merged learned set.
5. Re-check the standalone `子` audio for neutral-tone ㄗ˙.
6. Add L091 to `src/curriculum/sample-lessons.json`.
7. Update `docs/CURRICULUM_LEDGER.md`.
8. Run `npm run curriculum:export-planner`.
9. Run `npm run verify`.
