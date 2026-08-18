# R029 複習二十九 Generation Packet

- Unit kind: review module
- Milestone: L255
- afterLessonOrder: 255
- Coverage range: L226-L255
- Allowed-character ceiling: L255
- Review migration replacement package: No
- New characters: none

## Required Coverage

新 舊 半 只 剩 夠 錢 買 貴 賣 店 場 市 夜 具 工 作 忙 幫 急 腳 步 跳 床 搬 重 沙 張 椅 累

## Approved Sentences

### R029-S01
- text: 媽媽在找工作的書，我幫忙找。
- spokenText: 媽媽在找工作的書我幫忙找
- focusChar: 幫
- displayLines: ["媽媽在找","工作的書，","我幫忙找。"]
- imageNotes: Use the recurring protagonist mother identity for 媽媽 and the recurring protagonist girl identity for 我. Mother is at home near a desk or bookshelf looking for a book related to work, and the girl is helping her look for it. Make it clear both are searching for a book. Do not add readable book titles or signs.

### R029-S02
- text: 他急著上學，腳步很快。
- spokenText: 他急著上學腳步很快
- focusChar: 急
- displayLines: ["他急著上學，","腳步很快。"]
- imageNotes: Use the fixed recurring sporty boy identity for 他. He is carrying or wearing school items and is hurrying to school, walking with quick steps. The scene should show urgency without danger or panic.

### R029-S03
- text: 小孩從床上跳下來。
- spokenText: 小孩從床上跳下來
- focusChar: 床
- displayLines: ["小孩從床上","跳下來。"]
- imageNotes: Show a generic child, visually distinct from recurring 我/你/他, jumping down from a low child-safe bed. The floor is safe and close. Do not make the action look dangerous.

### R029-S04
- text: 這張椅子很重，搬起來很累。
- spokenText: 這張椅子很重搬起來很累
- focusChar: 重
- displayLines: ["這張椅子","很重，","搬起來很累。"]
- imageNotes: Use the recurring protagonist father identity as the visible adult. Father is moving a thick, heavy-looking chair and looks tired from carrying or moving it. Keep father visually distinct from mother, teacher, generic adults, and passersby. The chair should clearly look heavy, and the father's tiredness should be visible but not exaggerated.

### R029-S05
- text: 好幾個小孩在沙地上玩球。
- spokenText: 好幾個小孩在沙地上玩球
- focusChar: 沙
- displayLines: ["好幾個小孩","在沙地上","玩球。"]
- imageNotes: Show several generic children playing ball on sand or in a sandy play area. The children must be visually distinct from recurring 我, recurring 你, and recurring 他. Make the sand and ball clearly visible.

## Stage 4 Sentence Games

### R029-G01 find-character
- sentenceId: R029-S01
- targetChar: 幫
- options: 幫 / 工 / 作 / 忙

### R029-G02 teach-character
- sentenceId: R029-S02
- targetChar: 急
- prefixText: 他
- suffixText: 著上學腳步很快

### R029-G03 missing-character
- sentenceId: R029-S03
- targetChar: 床
- missingIndexes: [3]
- options: 床 / 沙 / 椅

### R029-G04 partial-order
- sentenceId: R029-S04
- targetChar: 重
- missingIndexes: [1,2,6,10]
- options: 張 / 椅 / 搬 / 累

### R029-G05 choose-pronunciation
- sentenceId: R029-S05
- targetChar: 沙
- correctText: 好幾個小孩在沙地上玩球。
- wrong-one: 好幾個小孩在草地上玩球。
- wrong-two: 好幾個小孩在沙地上打球。

