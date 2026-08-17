# R014 Review Module Generation Packet

- Review module: R014
- Title: 複習十四
- Milestone / after lesson: L135
- Target range: L106-L135
- Pair: R013/R014
- Required coverage across pair: 分幾點玩打球棒頭帽草地面外空天雨雲黑白棋鞋穿戴衣脫氣套熱冷喝
- Asset base: /assets/reviews/R014
- Allowed-character ceiling: L135 only
- Production target: asset-complete-package; Release integrates production JSON.

## Approved Sentences

1. 天空有白雲。
   - Spoken: 天空有白雲
   - Focus: 白
   - Display lines: 天空有 / 白雲。
   - Image: A simple outdoor sky scene with clear white clouds. The clouds should be obviously white, not dark rain clouds. Keep the scene uncluttered so 天空 and 白雲 are easy to see.
2. 我穿上衣和白鞋。
   - Spoken: 我穿上衣和白鞋
   - Focus: 鞋
   - Display lines: 我穿上衣 / 和白鞋。
   - Image: The recurring protagonist girl is dressed in a shirt and white shoes. Make her the speaker for 我. The white shoes should be visible and clearly white; do not hide them under furniture or crop them out.
3. 天氣很熱，他脫下外套。
   - Spoken: 天氣很熱他脫下外套
   - Focus: 套
   - Display lines: 天氣很熱， / 他脫下外套。
   - Image: Use the fixed recurring sporty boy identity for 他, not a generic boy. It is hot outside or in a sunny play area, and the sporty boy is taking off his outer jacket. The jacket should be clearly an outer layer, and the reason should feel like hot weather.
4. 天氣很冷，我喝熱水。
   - Spoken: 天氣很冷我喝熱水
   - Focus: 喝
   - Display lines: 天氣很冷， / 我喝熱水。
   - Image: The recurring protagonist girl is in a cold-weather scene, wearing warm clothing or sitting indoors by a window with a cold outdoor view. She is drinking warm water from a cup. Use gentle steam from the cup if helpful, but no text labels.
5. 小孩在外面玩球。
   - Spoken: 小孩在外面玩球
   - Focus: 外
   - Display lines: 小孩在外面 / 玩球。
   - Image: A child is outdoors playing with a ball. Make 外面 clear with open outdoor space, sky, grass or playground ground. The child should be actively playing ball, not standing still indoors.

## Stage 4 Plan

- R014-G01 find-character: R014-S02, target 鞋
- R014-G02 teach-character: R014-S03, target 套
  - Prefix: 天氣很熱他脫下外
  - Suffix: (none)
- R014-G03 missing-character: R014-S04, target 冷
- R014-G04 partial-order: R014-S05, target 外
  - Missing indexes: 3, 4, 5
  - Option cards: 外 / 面 / 玩
- R014-G05 choose-pronunciation: R014-S01, target 白
  - correct: 天空有白雲。
  - wrong-one: 天空有黑雲。
  - wrong-two: 外面有白雲。

## Asset Requirements

- Images: square image / 1:1 composition, WebP, long edge <=1024, target <=250 KB and hard <=400 KB.
- Use L058 as mandatory style-only reference and L154/L162/L163 family anchors for recurring protagonist family.
- Use fixed recurring sporty boy identity for `他`.
- Audio: OpenAI TTS full sentence audio, G02 prefix audio, G05 wrong-choice full text audio.
- Review modules do not use newChars, zhuyin, or charAudio.
