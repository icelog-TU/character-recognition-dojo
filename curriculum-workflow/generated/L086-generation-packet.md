# L086 Generation Packet: 紙

## Lesson Request

- 課程：L086
- 課程類型：認字練功房
- 目標新字：紙
- 注音：ㄓˇ
- 前五課目標字：L081 筆、L082 借、L083 那、L084 本、L085 給
- 禁止未學字：用、張、把、從
- 目前合併狀態：最新 `origin/main` 尚未到 L085；本課只做平行準備，不把 L086 留進 production JSON。
- provisional learned chars used by this packet：那、本、給

## Approved Sentences

1. 這是紙做的花
   - spokenText：這是紙做的花
   - focusChar：紙

2. 那是紙做的狗
   - spokenText：那是紙做的狗
   - focusChar：紙

3. 這本書拿給那個人
   - spokenText：這本書拿給那個人
   - focusChar：給

4. 我沒帶紙和筆，同學借給我
   - spokenText：我沒帶紙和筆同學借給我
   - focusChar：紙

5. 那一家本來有狗，後來沒有了
   - spokenText：那一家本來有狗後來沒有了
   - focusChar：本

## Coverage Check

- 紙：3 次
- 給：2 次
- 本：2 次
- 那：3 次
- 借：1 次
- 筆：1 次

漢字數：S01 6、S02 6、S03 8、S04 11、S05 12。

## Image Direction

Style reference: L058 approved image style. Use warm children's picture-book watercolor, soft pencil linework, warm natural light, gentle facial expressions, and phone-readable composition. Do not include visible text, letters, numbers, signage, labels, zhuyin, speech bubbles, arrows, logos, or watermarks.

1. L086-S01：孩子拿著或桌上放著紙做的花；紙花清楚可見，旁邊可有彩色紙片，但紙片不能有文字。
2. L086-S02：孩子指著一隻紙做的小狗；紙狗清楚像手作作品，不能有文字。
3. L086-S03：孩子拿著一本無字書，正要交給另一個人；交付動作清楚。
4. L086-S04：教室裡一個孩子沒帶紙和筆，同學友善地把空白紙與筆借給他。
5. L086-S05：同一戶人家門前，呈現原本有狗、後來狗不在了；可用空狗窩或空地暗示，不能有文字或標籤。

## Audio Plan

Use AI audio -> `assets:audio` -> `assets:align:ai`.

Required final audio:

- `/assets/lessons/L086/audio/char-u7d19.m4a`
- `/assets/lessons/L086/audio/L086-S01.m4a`
- `/assets/lessons/L086/audio/L086-S02.m4a`
- `/assets/lessons/L086/audio/L086-S03.m4a`
- `/assets/lessons/L086/audio/L086-S04.m4a`
- `/assets/lessons/L086/audio/L086-S05.m4a`
- `/assets/lessons/L086/audio/L086-G02-prefix.m4a`
- `/assets/lessons/L086/audio/L086-G02-suffix.m4a`
- `/assets/lessons/L086/audio/L086-G05-wrong-one.m4a`
- `/assets/lessons/L086/audio/L086-G05-wrong-two.m4a`

Important: `char-u7d19.m4a` must be standalone AI-generated single-character audio. It must not be cut from sentence audio. `teachAudio` prefix/suffix must also be generated from exact fragments, not cut from the full sentence. G05 wrong options must be generated as whole wrong sentences.

## Stage 4 Design

1. `L086-G01` find-character
   - sentence：L086-S01
   - targetChar：紙
   - missingIndexes：2

2. `L086-G02` teach-character
   - sentence：L086-S04
   - targetChar：紙
   - targetCharIndex：3
   - prefix text：我沒帶
   - suffix text：和筆同學借給我

3. `L086-G03` missing-character
   - sentence：L086-S02
   - targetChar：紙
   - missingIndexes：2
   - options：紙(correct)、本、花

4. `L086-G04` partial-order
   - sentence：L086-S05
   - targetChar：本
   - missingIndexes：3, 4, 5, 6
   - ordered answer：本、來、有、狗

5. `L086-G05` choose-pronunciation
   - sentence：L086-S03
   - targetChar：給
   - correct：這本書拿給那個人
   - wrong-one：那本書拿給那個人
   - wrong-two：這本書拿給這個人

## Production Gate

Before merging L086 into production:

1. Fetch/rebase on latest `origin/main`.
2. Confirm L082-L085 are merged in order.
3. Re-run allowed-character audit against the real merged learned set.
4. Add L086 to `src/curriculum/sample-lessons.json`.
5. Update `docs/CURRICULUM_LEDGER.md`.
6. Run `npm run curriculum:export-planner`.
7. Run `npm run verify`.
