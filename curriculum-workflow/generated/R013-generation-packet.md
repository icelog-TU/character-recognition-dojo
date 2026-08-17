# R013 Review Module Generation Packet

- Review module: R013
- Title: 複習十三
- Milestone / after lesson: L135
- Target range: L106-L135
- Pair: R013/R014
- Required coverage across pair: 分幾點玩打球棒頭帽草地面外空天雨雲黑白棋鞋穿戴衣脫氣套熱冷喝
- Asset base: /assets/reviews/R013
- Allowed-character ceiling: L135 only
- Production target: asset-complete-package; Release integrates production JSON.

## Approved Sentences

1. 幾點要玩黑白棋？
   - Spoken: 幾點要玩黑白棋
   - Focus: 棋
   - Display lines: 幾點要玩 / 黑白棋？
   - Image: The recurring protagonist girl is looking at a simple clock while a black-and-white board game is set on the table nearby. The black and white game pieces should be clearly visible. The scene should feel like she is asking what time they will play.
2. 他打球，得了一分。
   - Spoken: 他打球得了一分
   - Focus: 分
   - Display lines: 他打球， / 得了一分。
   - Image: Use the fixed recurring sporty boy identity for 他, not a generic boy. The sporty boy has just hit or thrown a ball and earned one point. Show one clear point marker using one simple dot/star/token only, with no written numbers or scoreboard text, so 一分 is visually obvious.
3. 草地上有球棒。
   - Spoken: 草地上有球棒
   - Focus: 棒
   - Display lines: 草地上 / 有球棒。
   - Image: A ball bat is lying on green grass. The bat should be clearly visible on the grass and not held by anyone. Keep the scene simple; a ball may be nearby, but the bat is the main object.
4. 帽子戴在我頭上。
   - Spoken: 帽子戴在我頭上
   - Focus: 戴
   - Display lines: 帽子戴在 / 我頭上。
   - Image: The recurring protagonist girl is wearing a hat on her head. Make the hat clearly on top of her head and make her the speaker for 我. Keep the pose simple and front-facing enough that 戴在我頭上 is visually clear.
5. 外面下雨，天空有雲。
   - Spoken: 外面下雨天空有雲
   - Focus: 雲
   - Display lines: 外面下雨， / 天空有雲。
   - Image: The recurring protagonist girl is indoors by a window looking outside. Outside, rain is falling and there are clouds in the sky. Make 外面 clear by showing the window frame and outdoor rainy sky.

## Stage 4 Plan

- R013-G01 find-character: R013-S01, target 棋
- R013-G02 teach-character: R013-S05, target 雲
  - Prefix: 外面下雨天空有
  - Suffix: (none)
- R013-G03 missing-character: R013-S02, target 分
- R013-G04 partial-order: R013-S04, target 戴
  - Missing indexes: 0, 2, 5
  - Option cards: 帽 / 戴 / 頭
- R013-G05 choose-pronunciation: R013-S03, target 棒
  - correct: 草地上有球棒。
  - wrong-one: 草地上有球帽。
  - wrong-two: 草地上有球鞋。

## Asset Requirements

- Images: square image / 1:1 composition, WebP, long edge <=1024, target <=250 KB and hard <=400 KB.
- Use L058 as mandatory style-only reference and L154/L162/L163 family anchors for recurring protagonist family.
- Use fixed recurring sporty boy identity for `他`.
- Audio: OpenAI TTS full sentence audio, G02 prefix audio, G05 wrong-choice full text audio.
- Review modules do not use newChars, zhuyin, or charAudio.
