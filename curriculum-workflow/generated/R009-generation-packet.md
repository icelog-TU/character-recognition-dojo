# R009 Review Module Generation Packet

Review title: 複習九
Pair mate: R010
After lesson order: 105
Target lesson range: L076-L105
Required rounds: 5
Required coverage chars: 校問找同帶筆借那本給紙心放把桌子盒掉壞眼用鏡鼻臉紅圓太難得過

Review modules introduce no new characters, zhuyin, charAudio, or lesson order. Release owns production JSON integration.

## Approved Sentences

### R009-S01
- text: 同學問我借那本書。
- spokenText: 同學問我借那本書
- focusChar: 借
- displayLines: ["同學問我","借那本書。"]
- imageNotes: Concrete phone-readable square image for: 同學問我借那本書。 Show a generic preschool classmate asking the recurring protagonist girl for `我` to borrow a specific book that is at a noticeable distance from the protagonist girl, not close in her hands. The distance must make `那本書` clear rather than `這本書`; the classmate may point toward the distant book. Human role identities: recurring protagonist girl and generic preschool classmate distinct from recurring `你` and `他`. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.
- final image: /assets/reviews/R009/images/R009-S01.webp
- final audio: /assets/reviews/R009/audio/R009-S01.m4a

### R009-S02
- text: 我把紙放在桌上。
- spokenText: 我把紙放在桌上
- focusChar: 放
- displayLines: ["我把紙放","在桌上。"]
- imageNotes: Concrete phone-readable square image for: 我把紙放在桌上。 Show the recurring protagonist girl for `我` placing a sheet of paper on top of a table. The paper and tabletop must be clear. Use the recurring protagonist girl identity. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.
- final image: /assets/reviews/R009/images/R009-S02.webp
- final audio: /assets/reviews/R009/audio/R009-S02.m4a

### R009-S03
- text: 我找不到筆，心裡難過。
- spokenText: 我找不到筆心裡難過
- focusChar: 找
- displayLines: ["我找不到筆，","心裡難過。"]
- imageNotes: Concrete phone-readable square image for: 我找不到筆，心裡難過。 Show the recurring protagonist girl for `我` looking sad while searching around a desk or school bag for a missing pencil. The pencil should not be visible or should be hidden enough that she has not found it. Use the recurring protagonist girl identity. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.
- final image: /assets/reviews/R009/images/R009-S03.webp
- final audio: /assets/reviews/R009/audio/R009-S03.m4a

### R009-S04
- text: 媽媽帶我去學校。
- spokenText: 媽媽帶我去學校
- focusChar: 校
- displayLines: ["媽媽帶我","去學校。"]
- imageNotes: Concrete phone-readable square image for: 媽媽帶我去學校。 Show the recurring protagonist mother accompanying the recurring protagonist girl to school, walking together toward a school entrance. Use protagonist mother and protagonist girl identities; mother must be visually distinct from teacher and the L058 adult woman. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.
- final image: /assets/reviews/R009/images/R009-S04.webp
- final audio: /assets/reviews/R009/audio/R009-S04.m4a

### R009-S05
- text: 小盒子掉到桌下。
- spokenText: 小盒子掉到桌下
- focusChar: 掉
- displayLines: ["小盒子掉","到桌下。"]
- imageNotes: Concrete phone-readable square image for: 小盒子掉到桌下。 Show a small box falling or already fallen under a table, with the table and under-table position clear. No people are required. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.
- final image: /assets/reviews/R009/images/R009-S05.webp
- final audio: /assets/reviews/R009/audio/R009-S05.m4a

## Sentence Games

### R009-G01
- type: find-character
- sentenceId: R009-S05
- targetChar: 掉

### R009-G02
- type: teach-character
- sentenceId: R009-S04
- targetChar: 校
- targetCharIndex: 6
- prefixText: 媽媽帶我去學
- suffixText:

### R009-G03
- type: missing-character
- sentenceId: R009-S03
- targetChar: 找
- missingIndexes: [1]
- options: 找 / 筆 / 過

### R009-G04
- type: partial-order
- sentenceId: R009-S02
- targetChar: 紙
- missingIndexes: [0,1,2]
- missingChars: 我 / 把 / 紙
- options: 我 / 把 / 紙

### R009-G05
- type: choose-pronunciation
- sentenceId: R009-S01
- targetChar: 借
- correct: 同學問我借那本書。
- wrong options: 同學問他借那本書。 / 同學問我借這本書。

## Asset Requirements
- Images must be square 1:1 WebP, long edge <= 1024px, target <= 250KB and hard cap <= 400KB.
- Audio must use OpenAI TTS, then repo normalization and AI alignment.
- G02 teach audio must use exact prefix/suffix fragments; G05 wrong-choice audio must be whole-sentence audio.
- Partial-order uses exactly 3 single-Han option cards.
