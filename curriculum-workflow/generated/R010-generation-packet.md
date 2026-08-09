# R010 Generation Packet

## Review Module

- Unit: R010
- Title: 複習十
- Kind: review module, no new characters
- Review number: 10
- After lesson order: L180
- Target range: L121-L150
- Pair: R009/R010
- Status expectation: asset-complete-package, blocked by review sequence until R005-R008 are in `origin/main`

## Character Boundary

Use only the locked R009/R010 allowed characters recorded in `curriculum-workflow/review-requests/R010.json`. Do not use characters learned after the milestone ceiling in any display text, spokenText, displayLines, focusChar, game option text, teachAudio fragment, or wrong-choice text.

Forbidden for this package: 聽, 見, 說, 師, 話, 課, 像, 想, and any later character.

## Approved Sentences

| ID | Text | spokenText | focusChar | displayLines |
|---|---|---|---|---|
| R010-S01 | 為什麼房間這麼亂？ | 為什麼房間這麼亂 | 為 | 為什麼房間 / 這麼亂？ |
| R010-S02 | 怎麼找不到要穿的鞋？ | 怎麼找不到要穿的鞋 | 怎 | 怎麼找不到 / 要穿的鞋？ |
| R010-S03 | 他穿上衣，戴帽子。 | 他穿上衣戴帽子 | 戴 | 他穿上衣， / 戴帽子。 |
| R010-S04 | 天黑了，所以房間要開燈。 | 天黑了所以房間要開燈 | 所 | 天黑了， / 所以房間 / 要開燈。 |
| R010-S05 | 冷氣關了，房間很熱。 | 冷氣關了房間很熱 | 冷 | 冷氣關了， / 房間很熱。 |

## Sentence Games

- R010-G01 find-character: R010-S04, target 燈
- R010-G02 teach-character: R010-S03, target 戴, targetCharIndex 4, prefix `他穿上衣`, suffix `帽子`
- R010-G03 missing-character: R010-S05, target 冷, missingIndexes `[0]`, options 冷/熱/黑
- R010-G04 partial-order: R010-S02, chunks `怎麼` / `找不到` / `要穿的鞋`
- R010-G05 choose-pronunciation: correct `為什麼房間這麼亂？`, wrong-one `為什麼房間這麼熱？`, wrong-two `為什麼外面這麼亂？`

## Asset Requirements

- Images: `public/assets/reviews/R010/images/R010-S01.webp` through `R010-S05.webp`
- Audio: `public/assets/reviews/R010/audio/R010-S01.m4a` through `R010-S05.m4a`
- Teach audio: `R010-G02-prefix.m4a`, `R010-G02-suffix.m4a`
- Wrong-choice audio: `R010-G05-wrong-one.m4a`, `R010-G05-wrong-two.m4a`
- No charAudio, no zhuyin, no newChars
- Images must be square 1:1 WebP, longest edge <= 1024px, each <= 400 KB hard max, no visible text/numbers/signs/labels/zhuyin/watermarks.
