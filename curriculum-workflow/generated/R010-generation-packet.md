# R010 Review Module Generation Packet

Review title: 複習十
Pair mate: R009
After lesson order: 105
Target lesson range: L076-L105
Required rounds: 5
Required coverage chars: 校問找同帶筆借那本給紙心放把桌子盒掉壞眼用鏡鼻臉紅圓太難得過

Review modules introduce no new characters, zhuyin, charAudio, or lesson order. Release owns production JSON integration.

## Approved Sentences

### R010-S01
- text: 眼鏡壞了，很難用。
- spokenText: 眼鏡壞了很難用
- focusChar: 鏡
- displayLines: ["眼鏡壞了，","很難用。"]
- imageNotes: Concrete phone-readable square image for: 眼鏡壞了，很難用。 Show the recurring protagonist father, the only character in this sentence who wears glasses, holding or wearing broken glasses that are hard to use. Make the glasses visibly crooked, cracked, or damaged without making the scene unsafe. Human role identity: recurring protagonist father with glasses; do not give glasses to the protagonist girl or mother in this image. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.
- final image: /assets/reviews/R010/images/R010-S01.webp
- final audio: /assets/reviews/R010/audio/R010-S01.m4a

### R010-S02
- text: 小狗鼻子紅紅的。
- spokenText: 小狗鼻子紅紅的
- focusChar: 鼻
- displayLines: ["小狗鼻子","紅紅的。"]
- imageNotes: Concrete phone-readable square image for: 小狗鼻子紅紅的。 Show a small friendly dog with a clearly red nose. No people are required. Keep the dog warm and child-friendly, not sick or scary. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.
- final image: /assets/reviews/R010/images/R010-S02.webp
- final audio: /assets/reviews/R010/audio/R010-S02.m4a

### R010-S03
- text: 我把臉畫得太圓了。
- spokenText: 我把臉畫得太圓了
- focusChar: 圓
- displayLines: ["我把臉畫得","太圓了。"]
- imageNotes: Concrete phone-readable square image for: 我把臉畫得太圓了。 Show the recurring protagonist girl for `我` looking at her own drawing of a face that is visibly too round. The drawing should have a very round face shape but no text, labels, numbers, zhuyin, logos, or speech bubbles. Use the recurring protagonist girl identity.
- final image: /assets/reviews/R010/images/R010-S03.webp
- final audio: /assets/reviews/R010/audio/R010-S03.m4a

### R010-S04
- text: 我拿得到那本書。
- spokenText: 我拿得到那本書
- focusChar: 得
- displayLines: ["我拿得到","那本書。"]
- imageNotes: Concrete phone-readable square image for: 我拿得到那本書。 Show the recurring protagonist girl for `我` stretching her arm upward, trying hard to reach a book placed high on a shelf or high table, and just managing to get it. The book should be high enough that her effort is clear, but the scene must remain safe. Use the recurring protagonist girl identity. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.
- final image: /assets/reviews/R010/images/R010-S04.webp
- final audio: /assets/reviews/R010/audio/R010-S04.m4a

### R010-S05
- text: 你把紙給我。
- spokenText: 你把紙給我
- focusChar: 給
- displayLines: ["你把紙","給我。"]
- imageNotes: Concrete phone-readable square image for: 你把紙給我。 Show the recurring young boy classmate for `你` handing a sheet of paper to the recurring protagonist girl for `我`. Use the recurring `你` boy identity and recurring protagonist girl identity. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.
- final image: /assets/reviews/R010/images/R010-S05.webp
- final audio: /assets/reviews/R010/audio/R010-S05.m4a

## Sentence Games

### R010-G01
- type: find-character
- sentenceId: R010-S01
- targetChar: 鏡

### R010-G02
- type: teach-character
- sentenceId: R010-S04
- targetChar: 得
- targetCharIndex: 2
- prefixText: 我拿
- suffixText: 到那本書

### R010-G03
- type: missing-character
- sentenceId: R010-S05
- targetChar: 給
- missingIndexes: [3]
- options: 給 / 把 / 紙

### R010-G04
- type: partial-order
- sentenceId: R010-S03
- targetChar: 臉
- missingIndexes: [0,1,2]
- missingChars: 我 / 把 / 臉
- options: 我 / 把 / 臉

### R010-G05
- type: choose-pronunciation
- sentenceId: R010-S02
- targetChar: 鼻
- correct: 小狗鼻子紅紅的。
- wrong options: 小狗鼻子很紅的。 / 小狗鼻子圓圓的。

## Asset Requirements
- Images must be square 1:1 WebP, long edge <= 1024px, target <= 250KB and hard cap <= 400KB.
- Audio must use OpenAI TTS, then repo normalization and AI alignment.
- G02 teach audio must use exact prefix/suffix fragments; G05 wrong-choice audio must be whole-sentence audio.
- Partial-order uses exactly 3 single-Han option cards.
