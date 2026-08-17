# R005 Review Module Generation Packet

- Review module: R005
- Title: 複習五
- After lesson: L075
- Target range: L046-L075
- Pair: R005/R006
- Required coverage across pair: 會這吃做好樣要更邊多少比來起去坐站開左著拿包花朵了畫出學路誰
- Asset base: /assets/reviews/R005
- Allowed-character ceiling: L075 only
- Production target: asset-complete-package; Release integrates production JSON.

## Approved Sentences

1. 我畫出了很多朵花。
   - Spoken: 我畫出了很多朵花
   - Focus: 畫
   - Display lines: 我畫出了 / 很多朵花。
   - Image: Concrete phone-readable square image for: 我畫出了很多朵花。 Show the recurring protagonist girl for `我` proudly showing a drawing with many clearly visible flowers. The drawing may show many flower shapes, but no written text, labels, numbers, zhuyin, logos, or speech bubbles. Use the recurring protagonist girl identity.
2. 他站在路邊看花。
   - Spoken: 他站在路邊看花
   - Focus: 站
   - Display lines: 他站在路邊 / 看花。
   - Image: Concrete phone-readable square image for: 他站在路邊看花。 Show the recurring sporty boy for `他` standing safely at the side of a quiet road or path, looking at flowers by the roadside. Keep the road safe and calm. Use the recurring `他` identity: sporty young boy, orange athletic shirt, navy shorts, red sneakers, green wristband, visually distinct from `你`.
3. 女孩拿著書包。
   - Spoken: 女孩拿著書包
   - Focus: 著
   - Display lines: 女孩拿著 / 書包。
   - Image: Concrete phone-readable square image for: 女孩拿著書包。 Show a generic preschool girl holding a school bag in her hands. Human role identity: generic preschool girl, visually distinct from the recurring protagonist girl `我` and from classmate-girl continuity. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.
4. 花開了，朵朵好看。
   - Spoken: 花開了朵朵好看
   - Focus: 開
   - Display lines: 花開了， / 朵朵好看。
   - Image: Concrete phone-readable square image for: 花開了，朵朵好看。 Show several flowers blooming, each flower clearly open and attractive. No people are required. Avoid any written labels, numbers, signs, zhuyin, logos, or speech bubbles.
5. 誰拿走我的畫？
   - Spoken: 誰拿走我的畫
   - Focus: 誰
   - Display lines: 誰拿走 / 我的畫？
   - Image: Concrete phone-readable square image for: 誰拿走我的畫？ Show the recurring protagonist girl for `我` looking surprised at an empty spot where her drawing was, while another generic preschool child is walking away holding the drawing. The picture should imply the question “who took my drawing” without text or speech bubbles. Keep the other child visually distinct from recurring `你` and `他`.

## Stage 4 Plan

- R005-G01 find-character: R005-S05, target 誰
- R005-G02 teach-character: R005-S02, target 站
  - Prefix: 他
  - Suffix: 在路邊看花
- R005-G03 missing-character: R005-S03, target 著
- R005-G04 partial-order: R005-S04, target 開
  - Missing indexes: 0, 1, 2
  - Option cards: 花 / 開 / 了
- R005-G05 choose-pronunciation: R005-S01, target 畫
  - correct: 我畫出了很多朵花。
  - wrong-one: 你畫出了很多朵花。
  - wrong-two: 我畫出了很多小花。

## Asset Requirements

- Images: square image / 1:1 composition, WebP, long edge <=1024, target <=250 KB and hard <=400 KB.
- Audio: OpenAI TTS full sentence audio, G02 prefix/suffix audio, G05 wrong-choice full text audio.
- Review modules do not use newChars, zhuyin, or charAudio.
