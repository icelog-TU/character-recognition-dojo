# R033 複習三十三 Generation Packet

- Unit kind: review module
- Review number: 33
- afterLessonOrder: 285
- targetLessonRange: L256-L285
- requiredRounds: 5
- requiredCoverageChars: 死睡倒病假才剛裝養休息久體神精變差緊卡住蓋橋座木積堆洞破口傷

## Sentences

### R033-S01
- text: 睡太少，身體會變差。
- spokenText: 睡太少身體會變差
- focusChar: 睡
- displayLines: ["睡太少，","身體會變差。"]
- imageSrc: /assets/reviews/R033/images/R033-S01.webp
- audioSrc: /assets/reviews/R033/audio/R033-S01.m4a
- durationMs: 3759
- charTimings: 8
- imageNotes: Show a generic child, visually distinct from recurring 我/你/他, after sleeping too little. The child looks tired and low-energy, showing that the body feels worse. Keep the scene warm and not medically intense.

### R033-S02
- text: 放假時多休息，精神才會好。
- spokenText: 放假時多休息精神才會好
- focusChar: 精
- displayLines: ["放假時","多休息，","精神才會好。"]
- imageSrc: /assets/reviews/R033/images/R033-S02.webp
- audioSrc: /assets/reviews/R033/audio/R033-S02.m4a
- durationMs: 3765
- charTimings: 11
- imageNotes: Show a generic child, visually distinct from recurring 我/你/他, resting during a holiday and then looking bright and energetic. The scene should feel like a calm holiday at home. Do not make it a hospital or medical scene.

### R033-S03
- text: 我養的小魚生病了。
- spokenText: 我養的小魚生病了
- focusChar: 養
- displayLines: ["我養的小魚","生病了。"]
- imageSrc: /assets/reviews/R033/images/R033-S03.webp
- audioSrc: /assets/reviews/R033/audio/R033-S03.m4a
- durationMs: 3148
- charTimings: 8
- imageNotes: Use the recurring protagonist girl identity for 我. She looks at a fish tank at home; the small fish she keeps looks weak or low-energy as if sick. Do not show death or a frightening scene.

### R033-S04
- text: 剛才裝椅子時，傷到手指。
- spokenText: 剛才裝椅子時傷到手指
- focusChar: 傷
- displayLines: ["剛才裝","椅子時，","傷到手指。"]
- imageSrc: /assets/reviews/R033/images/R033-S04.webp
- audioSrc: /assets/reviews/R033/audio/R033-S04.m4a
- durationMs: 3874
- charTimings: 10
- imageNotes: Show a generic adult, visually distinct from father, mother, teacher, and passersby, assembling a simple chair and accidentally hurting a finger. The injury should be minor, such as a small bandage or held finger. Do not show blood, sharp tools, fear, or danger.

### R033-S05
- text: 太久沒下雨，小草都死掉了。
- spokenText: 太久沒下雨小草都死掉了
- focusChar: 久
- displayLines: ["太久沒下雨，","小草都","死掉了。"]
- imageSrc: /assets/reviews/R033/images/R033-S05.webp
- audioSrc: /assets/reviews/R033/audio/R033-S05.m4a
- durationMs: 3743
- charTimings: 11
- imageNotes: Show a dry patch of grass after a long time without rain. The small grass is dry and withered, showing it has died. The scene should show dryness clearly but not feel dark or scary.

## Sentence Games

### R033-G01
- type: find-character
- sentenceId: R033-S01
- targetChar: 睡
- options: R033-G01-A:睡:correct / R033-G01-B:體 / R033-G01-C:差 / R033-G01-D:久

### R033-G02
- type: teach-character
- sentenceId: R033-S02
- targetChar: 精
- missingIndexes: [6]
- teachAudio: prefixText="放假時多休息"; suffixText="神才會好"; prefixSrc=/assets/reviews/R033/audio/R033-G02-prefix.m4a; suffixSrc=/assets/reviews/R033/audio/R033-G02-suffix.m4a

### R033-G03
- type: missing-character
- sentenceId: R033-S03
- targetChar: 養
- missingIndexes: [1]
- options: R033-G03-A:養:correct / R033-G03-B:病 / R033-G03-C:魚

### R033-G04
- type: partial-order
- sentenceId: R033-S04
- targetChar: 傷
- missingIndexes: [0,1,2,6]
- options: R033-G04-A:剛:correct:order0 / R033-G04-B:才:correct:order1 / R033-G04-C:裝:correct:order2 / R033-G04-D:傷:correct:order3
- correctOrder: ["剛","才","裝","傷"]

### R033-G05
- type: choose-pronunciation
- sentenceId: R033-S05
- targetChar: 久
- options: correct:太久沒下雨，小草都死掉了。:correct / wrong-one:太久沒下雨，小花都死掉了。 / wrong-two:太久沒下雨，小草都乾掉了。
