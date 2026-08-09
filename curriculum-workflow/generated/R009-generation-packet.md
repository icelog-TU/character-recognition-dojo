# R009 Generation Packet

## Review Module

- Unit: R009
- Title: 複習九
- Kind: review module, no new characters
- Review number: 9
- After lesson order: L180
- Target range: L121-L150
- Pair: R009/R010
- Status expectation: asset-complete-package, blocked by review sequence until R005-R008 are in `origin/main`

## Character Boundary

Use only the locked R009/R010 allowed characters recorded in `curriculum-workflow/review-requests/R009.json`. Do not use characters learned after the milestone ceiling in any display text, spokenText, displayLines, focusChar, game option text, teachAudio fragment, or wrong-choice text.

Forbidden for this package: 聽, 見, 說, 師, 話, 課, 像, 想, and any later character.

## Approved Sentences

| ID | Text | spokenText | focusChar | displayLines |
|---|---|---|---|---|
| R009-S01 | 外面天空有黑雲。 | 外面天空有黑雲 | 雲 | 外面天空 / 有黑雲。 |
| R009-S02 | 下雨了，不要穿白鞋出門。 | 下雨了不要穿白鞋出門 | 鞋 | 下雨了， / 不要穿白鞋 / 出門。 |
| R009-S03 | 天氣太熱，先脫外套。 | 天氣太熱先脫外套 | 脫 | 天氣太熱， / 先脫外套。 |
| R009-S04 | 先喝點水，再吃飯和菜。 | 先喝點水再吃飯和菜 | 喝 | 先喝點水， / 再吃飯和菜。 |
| R009-S05 | 老爸下棋，卻不開心。 | 老爸下棋卻不開心 | 棋 | 老爸下棋， / 卻不開心。 |

## Sentence Games

- R009-G01 find-character: R009-S01, target 雲
- R009-G02 teach-character: R009-S03, target 脫, targetCharIndex 5, prefix `天氣太熱先`, suffix `外套`
- R009-G03 missing-character: R009-S02, target 鞋, missingIndexes `[7]`, options 鞋/衣/帽
- R009-G04 partial-order: R009-S04, chunks `先喝點水` / `再吃` / `飯和菜`
- R009-G05 choose-pronunciation: correct `老爸下棋，卻不開心。`, wrong-one `老爸打球，卻不開心。`, wrong-two `老爸下棋，卻很開心。`

## Asset Requirements

- Images: `public/assets/reviews/R009/images/R009-S01.webp` through `R009-S05.webp`
- Audio: `public/assets/reviews/R009/audio/R009-S01.m4a` through `R009-S05.m4a`
- Teach audio: `R009-G02-prefix.m4a`, `R009-G02-suffix.m4a`
- Wrong-choice audio: `R009-G05-wrong-one.m4a`, `R009-G05-wrong-two.m4a`
- No charAudio, no zhuyin, no newChars
- Images must be square 1:1 WebP, longest edge <= 1024px, each <= 400 KB hard max, no visible text/numbers/signs/labels/zhuyin/watermarks.
