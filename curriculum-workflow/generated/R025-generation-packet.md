# R025 Generation Packet

- Unit kind: review module
- Title: 複習二十五
- Pair mate: R026
- afterLessonOrder: 225
- targetLessonRange: 196-225
- allowedCharacterCeilingLessonId: L225
- requiredRounds: 5
- requiredCoverageChars: 亮陽月影長星行道流河從進早晚海船魚游泳池身濕乾服褲換改錯知認
- allowedCharsCount: 228

## Approved Sentences

### R025-S01
- text: 早上，窗外的陽光很亮。
- spokenText: 早上窗外的陽光很亮
- focusChar: 亮
- displayLines: ["早上，","窗外的陽光","很亮。"]
- imageSrc: /assets/reviews/R025/images/R025-S01.webp
- audioSrc: /assets/reviews/R025/audio/R025-S01.m4a
- imageNotes: Morning scene at a window. Bright sunlight is outside the window and the window area looks very bright. A room interior may be visible, but the focus is the bright sunlight outside the window.

### R025-S02
- text: 月光下有長影子。
- spokenText: 月光下有長影子
- focusChar: 影
- displayLines: ["月光下有","長影子。"]
- imageSrc: /assets/reviews/R025/images/R025-S02.webp
- audioSrc: /assets/reviews/R025/audio/R025-S02.m4a
- imageNotes: Night scene under moonlight with a clearly long shadow on the ground. The shadow can be from a tree or simple object. Make the moonlight and long shadow clear without using text labels.

### R025-S03
- text: 晚上，星星在海上發光。
- spokenText: 晚上星星在海上發光
- focusChar: 星
- displayLines: ["晚上，","星星在海上","發光。"]
- imageSrc: /assets/reviews/R025/images/R025-S03.webp
- audioSrc: /assets/reviews/R025/audio/R025-S03.m4a
- imageNotes: Nighttime seascape with stars shining above the sea. The sea surface should be visible, and the stars should look like they are shining in the sky over the sea.

### R025-S04
- text: 河水從山上流進海裡。
- spokenText: 河水從山上流進海裡
- focusChar: 流
- displayLines: ["河水從山上","流進海裡。"]
- imageSrc: /assets/reviews/R025/images/R025-S04.webp
- audioSrc: /assets/reviews/R025/audio/R025-S04.m4a
- imageNotes: A river flows from the mountain down into the sea. Show mountain, flowing river, and sea in one clear directional composition. The water path should be understandable at phone size.

### R025-S05
- text: 海上有船，海裡有魚。
- spokenText: 海上有船海裡有魚
- focusChar: 船
- displayLines: ["海上有船，","海裡有魚。"]
- imageSrc: /assets/reviews/R025/images/R025-S05.webp
- audioSrc: /assets/reviews/R025/audio/R025-S05.m4a
- imageNotes: A boat is on the sea surface, and fish are visible in the sea water below. Make 海上 and 海裡 distinct: the boat is above/on the water, the fish are under/in the water.

## Sentence Games

### R025-G01
- type: find-character
- sentenceId: R025-S01
- targetChar: 亮
- options: option-1:亮:correct, option-2:陽, option-3:光, option-4:窗

### R025-G02
- type: teach-character
- sentenceId: R025-S02
- targetChar: 影
- targetCharIndex: 5
- prefixText: 月光下有長
- suffixText: 子
- missingIndexes: [5]

### R025-G03
- type: missing-character
- sentenceId: R025-S03
- targetChar: 星
- missingIndexes: [2]
- options: correct:星:correct, wrong-1:海, wrong-2:發

### R025-G04
- type: partial-order
- sentenceId: R025-S04
- targetChar: 流
- missingIndexes: [2,5,6]
- options: R025-G04-A:從:correct:order0, R025-G04-B:流:correct:order1, R025-G04-C:進:correct:order2

### R025-G05
- type: choose-pronunciation
- sentenceId: R025-S05
- targetChar: 船
- options: correct:海上有船，海裡有魚。:correct, wrong-one:河上有船，海裡有魚。, wrong-two:海上有船，河裡有魚。
