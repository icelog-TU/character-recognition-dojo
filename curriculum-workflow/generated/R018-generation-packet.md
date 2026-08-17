# R018 Generation Packet

- Unit kind: review module
- Title: 複習十八
- Pair mate: R017
- afterLessonOrder: 165
- targetLessonRange: 136-165
- allowedCharacterCeilingLessonId: L165
- requiredRounds: 5
- requiredCoverageChars: 飯菜老卻麼什為以怎所房間時還燈關窗車等再風吹樹動葉綠滿掃擦先
- allowedCharsCount: 168

## Approved Sentences

### R018-S01
- text: 桌上有滿滿的飯菜。
- spokenText: 桌上有滿滿的飯菜
- focusChar: 滿
- displayLines: ["桌上有","滿滿的飯菜。"]
- imageSrc: /assets/reviews/R018/images/R018-S01.webp
- audioSrc: /assets/reviews/R018/audio/R018-S01.m4a
- imageNotes: A dining table is full of rice and vegetables. Make the table clearly full, with multiple dishes and rice visible. Do not add text labels or extra unmentioned people.

### R018-S02
- text: 我先擦桌子，再掃地。
- spokenText: 我先擦桌子再掃地
- focusChar: 擦
- displayLines: ["我先擦桌子，","再掃地。"]
- imageSrc: /assets/reviews/R018/images/R018-S02.webp
- audioSrc: /assets/reviews/R018/audio/R018-S02.m4a
- imageNotes: Use the recurring protagonist girl identity for 我. Show her wiping the table with a cloth first, with a broom nearby to indicate she will sweep the floor next. The sequence should be understandable from the scene.

### R018-S03
- text: 為什麼車還不來？
- spokenText: 為什麼車還不來
- focusChar: 為
- displayLines: ["為什麼車","還不來？"]
- imageSrc: /assets/reviews/R018/images/R018-S03.webp
- audioSrc: /assets/reviews/R018/audio/R018-S03.m4a
- imageNotes: The recurring protagonist girl is waiting by a roadside or simple bus stop with an adult. She looks toward the road, wondering why the vehicle has not arrived yet. Keep the road empty enough that 車還不來 is clear.

### R018-S04
- text: 車子怎麼不動了？
- spokenText: 車子怎麼不動了
- focusChar: 動
- displayLines: ["車子怎麼","不動了？"]
- imageSrc: /assets/reviews/R018/images/R018-S04.webp
- audioSrc: /assets/reviews/R018/audio/R018-S04.m4a
- imageNotes: A child is crouching or sitting near a toy car that has stopped moving. The child looks puzzled at the toy car. The scene should clearly show the car is not moving, without needing motion lines or text labels.

### R018-S05
- text: 兩個小孩在玩黑白棋。
- spokenText: 兩個小孩在玩黑白棋
- focusChar: 棋
- displayLines: ["兩個小孩","在玩黑白棋。"]
- imageSrc: /assets/reviews/R018/images/R018-S05.webp
- audioSrc: /assets/reviews/R018/audio/R018-S05.m4a
- imageNotes: Show two generic children sitting at a table playing black-and-white board game pieces. The children must be generic and must not look like the recurring protagonist girl, the recurring young boy classmate, or the recurring sporty boy. Make exactly two children visible.

## Sentence Games

### R018-G01
- type: find-character
- sentenceId: R018-S05
- targetChar: 棋
- options: option-1:玩, option-2:黑, option-3:白, option-4:棋:correct

### R018-G02
- type: teach-character
- sentenceId: R018-S02
- targetChar: 擦
- targetCharIndex: 2
- prefixText: 我先
- suffixText: 桌子再掃地
- missingIndexes: [2]

### R018-G03
- type: missing-character
- sentenceId: R018-S04
- targetChar: 動
- missingIndexes: [5]
- options: correct:動:correct, wrong-1:車, wrong-2:不

### R018-G04
- type: partial-order
- sentenceId: R018-S03
- targetChar: 為
- missingIndexes: [0,1,2]
- options: R018-G04-A:為:correct:order0, R018-G04-B:什:correct:order1, R018-G04-C:麼:correct:order2

### R018-G05
- type: choose-pronunciation
- sentenceId: R018-S01
- targetChar: 滿
- options: correct:桌上有滿滿的飯菜。:correct, wrong-one:桌下有滿滿的飯菜。, wrong-two:桌上有少少的飯菜。
