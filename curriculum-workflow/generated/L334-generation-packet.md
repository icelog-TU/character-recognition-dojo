# L334 Generation Packet

## Package Source

- Unit: L334
- New character: 別
- Zhuyin: ㄅㄧㄝˊ
- Origin boundary: latest origin/main through L333
- Dependency lessons: none; L331/L332/L333 are merged in origin/main
- Provisional learned chars: none
- Package target: merge-ready asset-complete-package for Release integration

## Final Approved Sentence Records

### L334-S01

text: 不是你的原因，是別的原因。
spokenText: 不是你的原因是別的原因
focusChar: 別
displayLines:
- 不是你的
- 原因，
- 是別的原因。
imageNotes: 主角小女孩拿著一支手機或小型電子用品，表情很緊張，以為是自己剛剛拿了之後把它弄壞了。主角爸爸或主角媽媽蹲在旁邊安慰她，另一手打開電池蓋或看著明顯老舊、快壞掉的電池，表示東西本來就有問題，不是小女孩造成的。畫面不要出現可讀文字、數字、品牌標誌或螢幕文字。

### L334-S02

text: 因為右手痛，不能拿筆。
spokenText: 因為右手痛不能拿筆
focusChar: 因
displayLines:
- 因為右手痛，
- 不能拿筆。
imageNotes: 主角小女孩坐在桌前，右手有小繃帶或正在被她輕輕扶著，桌上有一支筆和紙，她想寫或畫但不能拿筆。主角媽媽或老師在旁邊關心她。右手要清楚，傷勢輕微，不要畫得嚴重或可怕。不要出現可讀文字。

### L334-S03

text: 別坐在角落，地上有水。
spokenText: 別坐在角落地上有水
focusChar: 別
displayLines:
- 別坐在角落，
- 地上有水。
imageNotes: 主角小女孩正要坐到房間角落，角落地上有一小灘水。主角媽媽或老師伸手溫和提醒她不要坐下。畫面要清楚表現角落、水、準備坐下但被提醒的動作。不要出現可讀文字。

### L334-S04

text: 跑快一點，別落後了。
spokenText: 跑快一點別落後了
focusChar: 別
displayLines:
- 跑快一點，
- 別落後了。
imageNotes: 戶外跑步或體育活動場景，主角小女孩和幾個 generic child 一起跑步，前方有孩子稍微領先，主角小女孩正在努力追上。老師或主角爸爸媽媽可以在旁邊鼓勵。畫面要表現「快跑、不要落後」，不要做成正式競賽壓力過大的畫面，不要出現可讀文字或跑道號碼。

### L334-S05

text: 轉角有車，別跑過去。
spokenText: 轉角有車別跑過去
focusChar: 別
displayLines:
- 轉角有車，
- 別跑過去。
imageNotes: 街道轉角場景，主角小女孩正想往前跑，主角爸爸或主角媽媽拉住她或伸手提醒。轉角處有一輛車正在慢慢出現或靠近，距離安全但能看出需要小心。畫面要清楚表現轉角、有車、不要跑過去。不要出現可讀交通文字、車牌或號誌文字。

## Stage 4 Final Plan

### L334-G01 find-character
sentenceId: L334-S01
targetChar: 別
targetCharIndex: 7
missingIndexes: [7]
options:
- id: L334-G01-A, text: 別, correct: true
- id: L334-G01-B, text: 因, correct: false
- id: L334-G01-C, text: 原, correct: false
- id: L334-G01-D, text: 落, correct: false

### L334-G02 teach-character
sentenceId: L334-S04
targetChar: 別
targetCharIndex: 4
missingIndexes: [4]
teachAudio.prefixText: 跑快一點
teachAudio.suffixText: 落後了
teachAudio.prefixSrc: /assets/lessons/L334/audio/L334-G02-prefix.m4a
teachAudio.suffixSrc: /assets/lessons/L334/audio/L334-G02-suffix.m4a

### L334-G03 missing-character
sentenceId: L334-S05
targetChar: 別
targetCharIndex: 4
missingIndexes: [4]
options:
- id: L334-G03-A, text: 別, correct: true
- id: L334-G03-B, text: 角, correct: false
- id: L334-G03-C, text: 右, correct: false

### L334-G04 partial-order
sentenceId: L334-S02
targetChar: 因
missingIndexes: [0,1,2,3]
options:
- id: L334-G04-A, text: 因, correct: true, correctOrder: 0
- id: L334-G04-B, text: 為, correct: true, correctOrder: 1
- id: L334-G04-C, text: 右, correct: true, correctOrder: 2
- id: L334-G04-D, text: 手, correct: true, correctOrder: 3

### L334-G05 choose-pronunciation
sentenceId: L334-S03
targetChar: 別
targetCharIndex: 0
options:
- id: L334-G05-A, text: 別坐在角落，地上有水。, correct: true
- id: L334-G05-B, text: 別坐在角落，地上有土。, correct: false
- id: L334-G05-C, text: 別坐在角落，地上有書。, correct: false

## Image Reference Requirements

Final WebPs were checked side by side against L058 style anchors, refined preferred examples L115/L118/L119/L128, and relevant recurring cast anchors per docs/LESSON_VISUAL_CAST_SOP.md.
