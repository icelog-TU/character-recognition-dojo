# R026 Generation Packet

- Unit kind: review module
- Title: 複習二十六
- Pair mate: R025
- afterLessonOrder: 225
- targetLessonRange: 196-225
- allowedCharacterCeilingLessonId: L225
- requiredRounds: 5
- requiredCoverageChars: 亮陽月影長星行道流河從進早晚海船魚游泳池身濕乾服褲換改錯知認
- allowedCharsCount: 228

## Approved Sentences

### R026-S01
- text: 行人要走人行道。
- spokenText: 行人要走人行道
- focusChar: 道
- displayLines: ["行人要走","人行道。"]
- imageSrc: /assets/reviews/R026/images/R026-S01.webp
- audioSrc: /assets/reviews/R026/audio/R026-S01.m4a
- imageNotes: Traffic-safety slogan scene. Show a generic pedestrian walking on the sidewalk beside a road. The pedestrian must be on the sidewalk, not in the roadway. Do not include visible written signs or labels.

### R026-S02
- text: 我在游泳池裡玩水。
- spokenText: 我在游泳池裡玩水
- focusChar: 泳
- displayLines: ["我在","游泳池裡","玩水。"]
- imageSrc: /assets/reviews/R026/images/R026-S02.webp
- audioSrc: /assets/reviews/R026/audio/R026-S02.m4a
- imageNotes: Use the recurring protagonist girl identity for 我. She is safely playing in a swimming pool. An adult may be nearby supervising; if present, use a generic adult caregiver visually distinct from the recurring mother, father, teacher, and other recurring adults.

### R026-S03
- text: 身上的衣服濕了。
- spokenText: 身上的衣服濕了
- focusChar: 濕
- displayLines: ["身上的衣服","濕了。"]
- imageSrc: /assets/reviews/R026/images/R026-S03.webp
- audioSrc: /assets/reviews/R026/audio/R026-S03.m4a
- imageNotes: Use a generic child with wet clothing, visually distinct from the recurring protagonist girl, recurring young boy classmate, and recurring sporty boy. The child's clothes are wet on their body after getting splashed with water. The wet area on the clothing should be visible.

### R026-S04
- text: 我換上乾衣服，也改穿乾褲子。
- spokenText: 我換上乾衣服也改穿乾褲子
- focusChar: 換
- displayLines: ["我換上","乾衣服，","也改穿","乾褲子。"]
- imageSrc: /assets/reviews/R026/images/R026-S04.webp
- audioSrc: /assets/reviews/R026/audio/R026-S04.m4a
- imageNotes: Use the recurring protagonist girl identity for 我. She has changed into dry clothing and dry pants after being wet. Make it clear she is wearing a complete dry outfit, not only pants. Keep the scene modest and child-safe.

### R026-S05
- text: 我知道做錯事，馬上認錯。
- spokenText: 我知道做錯事馬上認錯
- focusChar: 認
- displayLines: ["我知道","做錯事，","馬上認錯。"]
- imageSrc: /assets/reviews/R026/images/R026-S05.webp
- audioSrc: /assets/reviews/R026/audio/R026-S05.m4a
- imageNotes: Use the recurring protagonist girl identity for 我 and the recurring protagonist mother as the visible adult. The girl realizes she did something wrong and immediately admits the mistake to her mother. The mother should look warm and calm, visually distinct from the teacher, father, and generic adults.

## Sentence Games

### R026-G01
- type: find-character
- sentenceId: R026-S01
- targetChar: 道
- options: option-1:道:correct, option-2:人, option-3:行, option-4:走

### R026-G02
- type: teach-character
- sentenceId: R026-S02
- targetChar: 泳
- targetCharIndex: 3
- prefixText: 我在游
- suffixText: 池裡玩水
- missingIndexes: [3]

### R026-G03
- type: missing-character
- sentenceId: R026-S03
- targetChar: 濕
- missingIndexes: [5]
- options: correct:濕:correct, wrong-1:乾, wrong-2:服

### R026-G04
- type: partial-order
- sentenceId: R026-S04
- targetChar: 換
- missingIndexes: [1,3,7]
- options: R026-G04-A:換:correct:order0, R026-G04-B:乾:correct:order1, R026-G04-C:改:correct:order2

### R026-G05
- type: choose-pronunciation
- sentenceId: R026-S05
- targetChar: 認
- options: correct:我知道做錯事，馬上認錯。:correct, wrong-one:我知道做錯事，馬上改錯。, wrong-two:他知道做錯事，馬上認錯。
