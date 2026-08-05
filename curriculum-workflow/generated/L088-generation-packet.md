# L088 Generation Packet: 放

## Lesson Request

- 課程：L088
- 課程類型：認字練功房
- 目標新字：放
- 注音：ㄈㄤˋ
- 前五課目標字：L083 那、L084 本、L085 給、L086 紙、L087 心
- 禁止未學字：用、張、把、從、能
- 目前合併狀態：最新 `origin/main` 尚未到 L087；本課只做平行準備，不把 L088 留進 production JSON。
- provisional learned chars used by this packet：本、給、紙、心

## Approved Sentences

1. 我在書包裡放了很多紙
   - spokenText：我在書包裡放了很多紙
   - focusChar：放

2. 他給我一個紙做的愛心
   - spokenText：他給我一個紙做的愛心
   - focusChar：給

3. 這是要給媽媽吃的
   - spokenText：這是要給媽媽吃的
   - focusChar：給

4. 放手，那本書不是吃的
   - spokenText：放手那本書不是吃的
   - focusChar：放

5. 放心，他是好人
   - spokenText：放心他是好人
   - focusChar：放

## Coverage Check

- 放：3 次
- 心：2 次
- 紙：2 次
- 給：2 次
- 本：1 次
- 那：1 次

實際漢字數：S01 10、S02 10、S03 8、S04 9、S05 6。Teacher request listed S01 as 11 and 心 as 3; the approved text itself gives S01 10 and 心 2, which still satisfies the standard review minimum for the previous lesson target.

## Image Direction

Style reference: L058 approved image style. Use warm children's picture-book watercolor, soft pencil linework, warm natural light, gentle facial expressions, and phone-readable composition. Do not include visible text, letters, numbers, signage, labels, zhuyin, speech bubbles, arrows, logos, or watermarks.

1. L088-S01：孩子把很多空白紙放進打開的書包裡，書包與紙清楚可見。
2. L088-S02：一個孩子把紙做的愛心送給另一個孩子，紙愛心清楚，兩人友善。
3. L088-S03：孩子拿著好吃的食物準備給媽媽吃，媽媽在旁邊或前方。
4. L088-S04：幼兒抓著無字書想放到嘴邊，大人溫和提醒放手，語氣照顧、不恐嚇。
5. L088-S05：孩子有點擔心，大人溫和安撫，旁邊或遠處有一位友善的人，呈現放心、好人。

## Audio Plan

Use AI audio -> `assets:audio` -> `assets:align:ai`.

Required final audio:

- `/assets/lessons/L088/audio/char-u653e.m4a`
- `/assets/lessons/L088/audio/L088-S01.m4a`
- `/assets/lessons/L088/audio/L088-S02.m4a`
- `/assets/lessons/L088/audio/L088-S03.m4a`
- `/assets/lessons/L088/audio/L088-S04.m4a`
- `/assets/lessons/L088/audio/L088-S05.m4a`
- `/assets/lessons/L088/audio/L088-G02-prefix.m4a`
- `/assets/lessons/L088/audio/L088-G02-suffix.m4a`
- `/assets/lessons/L088/audio/L088-G05-wrong-one.m4a`
- `/assets/lessons/L088/audio/L088-G05-wrong-two.m4a`

Important: `char-u653e.m4a` must be standalone AI-generated single-character audio. It must not be cut from sentence audio. `teachAudio` prefix/suffix must also be generated from exact fragments, not cut from the full sentence. G05 wrong options must be generated as whole wrong sentences.

## Stage 4 Design

1. `L088-G01` find-character
   - sentence：L088-S05
   - targetChar：放
   - missingIndexes：0

2. `L088-G02` teach-character
   - sentence：L088-S01
   - targetChar：放
   - targetCharIndex：5
   - prefix text：我在書包裡
   - suffix text：了很多紙

3. `L088-G03` missing-character
   - sentence：L088-S04
   - targetChar：放
   - missingIndexes：0
   - options：放(correct)、給、那

4. `L088-G04` partial-order
   - sentence：L088-S02
   - targetChar：心
   - missingIndexes：6, 7, 8, 9
   - ordered answer：做、的、愛、心

5. `L088-G05` choose-pronunciation
   - sentence：L088-S03
   - targetChar：給
   - correct：這是要給媽媽吃的
   - wrong-one：那是要給媽媽吃的
   - wrong-two：這是要給爸爸吃的

## Production Gate

Before merging L088 into production:

1. Fetch/rebase on latest `origin/main`.
2. Confirm L084-L087 are merged in order.
3. Re-run allowed-character audit against the real merged learned set.
4. Add L088 to `src/curriculum/sample-lessons.json`.
5. Update `docs/CURRICULUM_LEDGER.md`.
6. Run `npm run curriculum:export-planner`.
7. Run `npm run verify`.
