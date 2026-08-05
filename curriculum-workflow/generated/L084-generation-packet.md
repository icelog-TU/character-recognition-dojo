# L084 Generation Packet: 本

## Lesson Request

- 課程：L084
- 課程類型：認字練功房
- 目標新字：本
- 注音：ㄅㄣˇ
- 前五課目標字：L079 同、L080 帶、L081 筆、L082 借、L083 那
- 目前合併狀態：最新 `origin/main` 尚未到 L083；本課只做平行準備，不把 L084 留進 production JSON。
- provisional learned chars used by this packet：校、同、帶、筆、借、那

## Approved Sentences

1. 那本書是借來的
   - spokenText：那本書是借來的
   - focusChar：本

2. 我要帶三本書和筆去學校
   - spokenText：我要帶三本書和筆去學校
   - focusChar：本

3. 我和你帶到同樣的書
   - spokenText：我和你帶到同樣的書
   - focusChar：同

4. 那人沒帶筆，來和我借
   - spokenText：那人沒帶筆來和我借
   - focusChar：借

5. 那裡本來有花，後來沒有了
   - spokenText：那裡本來有花後來沒有了
   - focusChar：本

## Coverage Check

- 本：3 次
- 那：3 次
- 借：2 次
- 筆：2 次
- 帶：3 次
- 同：1 次
- 校：1 次

實際漢字數：S01 7、S02 11、S03 9、S04 9、S05 11。S04/S05 與 request 文字統計不同，但句子本身為老師核准句子，且仍在 4-12 字範圍內。

## Image Direction

Style reference: L058 approved image style. Use warm children's picture-book watercolor, soft pencil linework, warm natural light, gentle facial expressions, detailed but clean home, classroom, library, and school settings. Do not include visible text, letters, numbers, signage, labels, zhuyin, speech bubbles, arrows, logos, or watermarks.

1. L084-S01：孩子在閱讀角或家中看一本借來的書；書清楚可見但封面和內頁空白，可用書架或還書籃暗示借書。
2. L084-S02：固定小女孩準備去學校，書包旁或手上有三本書和一支筆，正在放進書包或拿著。
3. L084-S03：固定小女孩和固定小男孩各自拿著外觀相同、無字的書，表情驚喜。
4. L084-S04：一個同學沒帶筆，走來向固定小女孩借筆；小女孩拿筆準備借給他。
5. L084-S05：同一處花盆或小花圃做無文字前後對比：原本有花，後來只剩空盆、枯枝或落瓣；固定小女孩看著空處感到驚訝。

## Audio Plan

Use AI audio -> `assets:audio` -> `assets:align:ai`.

Required final audio:

- `/assets/lessons/L084/audio/char-u672c.m4a`
- `/assets/lessons/L084/audio/L084-S01.m4a`
- `/assets/lessons/L084/audio/L084-S02.m4a`
- `/assets/lessons/L084/audio/L084-S03.m4a`
- `/assets/lessons/L084/audio/L084-S04.m4a`
- `/assets/lessons/L084/audio/L084-S05.m4a`
- `/assets/lessons/L084/audio/L084-G02-prefix.m4a`
- `/assets/lessons/L084/audio/L084-G02-suffix.m4a`
- `/assets/lessons/L084/audio/L084-G05-wrong-one.m4a`
- `/assets/lessons/L084/audio/L084-G05-wrong-two.m4a`

Important: `char-u672c.m4a` must be standalone AI-generated single-character audio. It must not be cut from sentence audio. `teachAudio` prefix/suffix must also be generated from exact fragments, not cut from the full sentence. G05 wrong options must be generated as whole wrong sentences.

## Stage 4 Design

1. `L084-G01` find-character
   - sentence：L084-S01
   - targetChar：本
   - missingIndexes：1

2. `L084-G02` teach-character
   - sentence：L084-S02
   - targetChar：本
   - targetCharIndex：4
   - prefix text：我要帶三
   - suffix text：書和筆去學校

3. `L084-G03` missing-character
   - sentence：L084-S05
   - targetChar：本
   - missingIndexes：2
   - options：本(correct)、那、花

4. `L084-G04` partial-order
   - sentence：L084-S04
   - targetChar：借
   - missingIndexes：5, 6, 7, 8
   - ordered answer：來、和、我、借

5. `L084-G05` choose-pronunciation
   - sentence：L084-S03
   - targetChar：同
   - correct：我和你帶到同樣的書
   - wrong-one：我和他帶到同樣的書
   - wrong-two：我和你帶到那樣的書

## Production Gate

Before merging L084 into production:

1. Fetch/rebase on latest `origin/main`.
2. Confirm L075-L083 are merged in order.
3. Re-run allowed-character audit against the real merged learned set.
4. Add L084 to `src/curriculum/sample-lessons.json`.
5. Update `docs/CURRICULUM_LEDGER.md`.
6. Run `npm run curriculum:export-planner`.
7. Run `npm run verify`.
