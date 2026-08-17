# R008 Review Module Generation Packet

- Unit: R008
- Review number/title: 8 / 複習八
- Kind: review module
- Pair: R007/R008
- afterLessonOrder: 90
- targetLessonRange: L061-L090
- Allowed-character ceiling: L090
- Allowed-character audit: PASS
- Pair-level coverage: PASS, 30/30 target characters covered across R007/R008
- Review modules introduce no new characters; no zhuyin; no charAudio

## Required Coverage Chars

坐 站 開 左 著 拿 包 花 朵 了 畫 出 學 路 誰 校 問 找 同 帶 筆 借 那 本 給 紙 心 放 把 桌

## Approved Sentences

1. 我在校門路邊畫畫。
   - spokenText: 我在校門路邊畫畫
   - focusChar: 校
   - displayLines: ["我在校門","路邊畫畫。"]
   - Han count: 8
   - imageNotes: Concrete phone-readable square image for: 我在校門路邊畫畫。 Show the recurring protagonist girl for `我` sitting or kneeling safely by the roadside near a school gate, drawing on paper. Make the school gate and roadside setting visually clear without any readable school name, signs, letters, numbers, zhuyin, logos, or speech bubbles. Use the recurring protagonist girl identity.

2. 媽媽帶我去學校。
   - spokenText: 媽媽帶我去學校
   - focusChar: 帶
   - displayLines: ["媽媽帶我","去學校。"]
   - Han count: 7
   - imageNotes: Concrete phone-readable square image for: 媽媽帶我去學校。 Show the recurring protagonist mother accompanying the recurring protagonist girl to school, walking together toward a school entrance. Use protagonist mother and protagonist girl identities; mother must be visually distinct from teacher and the L058 adult woman. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.

3. 花朵開了，很好看。
   - spokenText: 花朵開了很好看
   - focusChar: 朵
   - displayLines: ["花朵開了，","很好看。"]
   - Han count: 7
   - imageNotes: Concrete phone-readable square image for: 花朵開了，很好看。 Show several flowers blooming and looking pretty. No people are required. Make the open blossoms clear at phone size. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.

4. 小孩開心拿花給我。
   - spokenText: 小孩開心拿花給我
   - focusChar: 給
   - displayLines: ["小孩開心","拿花給我。"]
   - Han count: 8
   - imageNotes: Concrete phone-readable square image for: 小孩開心拿花給我。 Show a generic preschool child happily holding out a flower to the recurring protagonist girl for `我`. Human role identities: generic preschool child distinct from recurring protagonist girl, recurring `你`, and recurring `他`; recurring protagonist girl receives or looks at the flower. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.

5. 我把紙放在左邊。
   - spokenText: 我把紙放在左邊
   - focusChar: 左
   - displayLines: ["我把紙放","在左邊。"]
   - Han count: 7
   - imageNotes: Concrete phone-readable square image for: 我把紙放在左邊。 Show the recurring protagonist girl for `我` placing a sheet of paper on her own left side. The left side must be clear from the protagonist girl's body perspective, preferably near her left hand. If she faces the viewer, remember her left side may appear on the viewer's right. Use the recurring protagonist girl identity. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.

## Stage 4

- R008-G01: find-character, sentence R008-S02, target 帶
- R008-G02: teach-character, sentence R008-S01, target 校, targetCharIndex 2, prefix「我在」, suffix「門路邊畫畫」
- R008-G03: missing-character, sentence R008-S04, target 給
- R008-G04: partial-order, sentence R008-S05, missingIndexes [0,1,2], single-Han options 我/把/紙
- R008-G05: choose-pronunciation, sentence R008-S03, wrong audio generated from exact full wrong texts

## Image Requirements

All final images must be WebP, square 1:1, <=1024px long edge, target <=250 KB and hard <=400 KB. Image prompts must follow L058 style traits and explicit cast roles.

## Audio Requirements

Generate whole-sentence OpenAI audio for all review sentences, dedicated G02 prefix/suffix audio, and whole-sentence G05 wrong-choice audio. Do not splice or cut audio.
