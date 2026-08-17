# R006 Review Module Generation Packet

- Review module: R006
- Title: 複習六
- After lesson: L075
- Target range: L046-L075
- Pair: R005/R006
- Required coverage across pair: 會這吃做好樣要更邊多少比來起去坐站開左著拿包花朵了畫出學路誰
- Asset base: /assets/reviews/R006
- Allowed-character ceiling: L075 only
- Production target: asset-complete-package; Release integrates production JSON.

## Approved Sentences

1. 你比我會畫花。
   - Spoken: 你比我會畫花
   - Focus: 比
   - Display lines: 你比我會 / 畫花。
   - Image: Concrete phone-readable square image for: 你比我會畫花。 Show the recurring young boy classmate for `你` drawing flowers skillfully while the recurring protagonist girl for `我` looks at his flower drawing. The comparison should be clear through the drawings: his flowers look more complete or confident than hers, without mocking. Use recurring `你` boy and recurring protagonist girl identities. No written text, labels, numbers, zhuyin, logos, or speech bubbles.
2. 坐起來吃，這樣更好。
   - Spoken: 坐起來吃這樣更好
   - Focus: 樣
   - Display lines: 坐起來吃， / 這樣更好。
   - Image: Concrete phone-readable square image for: 坐起來吃，這樣更好。 Show a very young generic child, about three to four years old, sitting up properly to eat after previously leaning or slouching. A generic adult caregiver nearby gently guides the child with a calm expression. The image should make “sitting up to eat is better” clear, without making an older child look rude. Human role identity: very young generic child and generic adult caregiver, visually distinct from protagonist family and teacher.
3. 媽媽會做包包。
   - Spoken: 媽媽會做包包
   - Focus: 做
   - Display lines: 媽媽會做 / 包包。
   - Image: Concrete phone-readable square image for: 媽媽會做包包。 Show the recurring protagonist mother making or sewing a simple child’s bag at home, with fabric or bag parts visible. Use the recurring protagonist mother identity: warm adult family role, visually distinct from teacher and the L058 adult woman. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.
4. 我要畫去上學的路。
   - Spoken: 我要畫去上學的路
   - Focus: 要
   - Display lines: 我要畫去 / 上學的路。
   - Image: Concrete phone-readable square image for: 我要畫去上學的路。 Show the recurring protagonist girl for `我` drawing a simple map-like picture of the route to school, with a home, a path or road, and a school-like building shown visually. No readable labels, letters, numbers, signs, zhuyin, logos, or speech bubbles. Use the recurring protagonist girl identity.
5. 門左邊有少少的花。
   - Spoken: 門左邊有少少的花
   - Focus: 左
   - Display lines: 門左邊有 / 少少的花。
   - Image: Concrete phone-readable square image for: 門左邊有少少的花。 Show a clear front-facing door with a small number of flowers on the door’s left side, shown as viewer-left because the door faces the viewer. The left side must be visually unambiguous at phone size. If the right side is visible, it may have more empty space or more flowers for contrast, but do not add text or labels. No people are required.

## Stage 4 Plan

- R006-G01 find-character: R006-S04, target 要
- R006-G02 teach-character: R006-S01, target 比
  - Prefix: 你
  - Suffix: 我會畫花
- R006-G03 missing-character: R006-S03, target 做
- R006-G04 partial-order: R006-S05, target 左
  - Missing indexes: 0, 1, 2, 3
  - Option cards: 門 / 左 / 邊 / 有
- R006-G05 choose-pronunciation: R006-S02, target 樣
  - correct: 坐起來吃，這樣更好。
  - wrong-one: 坐起來看，這樣更好。
  - wrong-two: 坐起來吃，這樣很好。

## Asset Requirements

- Images: square image / 1:1 composition, WebP, long edge <=1024, target <=250 KB and hard <=400 KB.
- Audio: OpenAI TTS full sentence audio, G02 prefix/suffix audio, G05 wrong-choice full text audio.
- Review modules do not use newChars, zhuyin, or charAudio.
