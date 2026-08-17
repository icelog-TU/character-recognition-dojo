# R017 Generation Packet

- Unit kind: review module
- Title: 複習十七
- Pair mate: R018
- afterLessonOrder: 165
- targetLessonRange: 136-165
- allowedCharacterCeilingLessonId: L165
- requiredRounds: 5
- requiredCoverageChars: 飯菜老卻麼什為以怎所房間時還燈關窗車等再風吹樹動葉綠滿掃擦先
- allowedCharsCount: 168

## Approved Sentences

### R017-S01
- text: 吃飯時，我先吃菜。
- spokenText: 吃飯時我先吃菜
- focusChar: 先
- displayLines: ["吃飯時，","我先吃菜。"]
- imageSrc: /assets/reviews/R017/images/R017-S01.webp
- audioSrc: /assets/reviews/R017/audio/R017-S01.m4a
- imageNotes: Use the recurring protagonist girl identity for 我. She is sitting at a dining table with rice and vegetables in front of her. Show her eating vegetables first, with rice also visible on the table.

### R017-S02
- text: 房間裡的燈還沒關。
- spokenText: 房間裡的燈還沒關
- focusChar: 燈
- displayLines: ["房間裡的燈","還沒關。"]
- imageSrc: /assets/reviews/R017/images/R017-S02.webp
- audioSrc: /assets/reviews/R017/audio/R017-S02.m4a
- imageNotes: Show a room with a visible lamp or ceiling light still turned on. The recurring protagonist girl may be looking at the light. The meaning is that the light has not been turned off yet.

### R017-S03
- text: 風很大，所以我關窗。
- spokenText: 風很大所以我關窗
- focusChar: 關
- displayLines: ["風很大，","所以我關窗。"]
- imageSrc: /assets/reviews/R017/images/R017-S03.webp
- audioSrc: /assets/reviews/R017/audio/R017-S03.m4a
- imageNotes: Use the recurring protagonist girl identity for 我. She is by a window, closing it because strong wind is blowing in. Show the wind moving the curtain or nearby leaves outside so the reason is clear.

### R017-S04
- text: 風吹樹葉，綠葉動了。
- spokenText: 風吹樹葉綠葉動了
- focusChar: 樹
- displayLines: ["風吹樹葉，","綠葉動了。"]
- imageSrc: /assets/reviews/R017/images/R017-S04.webp
- audioSrc: /assets/reviews/R017/audio/R017-S04.m4a
- imageNotes: Outdoor scene with a tree. Wind is blowing the tree leaves, and the green leaves are visibly moving. Keep the leaves clearly green and avoid making the scene look like a storm.

### R017-S05
- text: 老人等車，卻沒有車來。
- spokenText: 老人等車卻沒有車來
- focusChar: 卻
- displayLines: ["老人等車，","卻沒有車來。"]
- imageSrc: /assets/reviews/R017/images/R017-S05.webp
- audioSrc: /assets/reviews/R017/audio/R017-S05.m4a
- imageNotes: Show one elder adult waiting by a roadside or simple bus stop. The road should be empty with no vehicle arriving. The elder adult must be visually distinct from the recurring parents and teacher.

## Sentence Games

### R017-G01
- type: find-character
- sentenceId: R017-S02
- targetChar: 燈
- options: option-1:房, option-2:間, option-3:燈:correct, option-4:關

### R017-G02
- type: teach-character
- sentenceId: R017-S04
- targetChar: 樹
- targetCharIndex: 2
- prefixText: 風吹
- suffixText: 葉綠葉動了
- missingIndexes: [2]

### R017-G03
- type: missing-character
- sentenceId: R017-S05
- targetChar: 卻
- missingIndexes: [4]
- options: correct:卻:correct, wrong-1:還, wrong-2:車

### R017-G04
- type: partial-order
- sentenceId: R017-S03
- targetChar: 關
- missingIndexes: [3,4,6]
- options: R017-G04-A:所:correct:order0, R017-G04-B:以:correct:order1, R017-G04-C:關:correct:order2

### R017-G05
- type: choose-pronunciation
- sentenceId: R017-S01
- targetChar: 先
- options: correct:吃飯時，我先吃菜。:correct, wrong-one:吃飯時，我先吃飯。, wrong-two:吃飯時，他先吃菜。
