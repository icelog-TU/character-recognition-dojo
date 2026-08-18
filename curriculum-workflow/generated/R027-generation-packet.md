# R027 複習二十七 Generation Packet

## Review Metadata

- Unit: R027
- Kind: review module
- Pair mate: R028
- afterLessonOrder: 240
- Coverage range: L211-L240
- Allowed-character ceiling: L240
- Required rounds: 5
- Required coverage chars: 船 魚 游 泳 池 身 濕 乾 服 褲 換 改 錯 知 認 新 舊 半 只 剩 夠 錢 買 貴 賣 店 場 市 夜 具
- Review modules introduce no newChars, zhuyin, or charAudio.
- Production package only; Release owns shared-state integration.

## Approved Sentences

### R027-S01
- text: 有人在海裡游泳，身上都是水。
- spokenText: 有人在海裡游泳身上都是水
- focusChar: 身
- displayLines: ["有人在海裡","游泳，","身上都是水。"]
- imageNotes: Show a generic adult or older youth swimming in a safe ocean swimming area, not the recurring protagonist girl and not any recurring child. The swimmer is in the sea, and their body is visibly wet with water. Keep the person far enough from the viewer that the sentence reads as someone rather than me. No signs or text.

### R027-S02
- text: 魚池裡有小船。
- spokenText: 魚池裡有小船
- focusChar: 船
- displayLines: ["魚池裡","有小船。"]
- imageNotes: Show a small fish pond with visible fish in the water and a toy-sized small boat floating on the pond. No people are required. Make both the fish pond and the small boat clear at phone size.

### R027-S03
- text: 褲子都濕了，衣服還是乾的。
- spokenText: 褲子都濕了衣服還是乾的
- focusChar: 濕
- displayLines: ["褲子都濕了，","衣服還是","乾的。"]
- imageNotes: Show a generic child, visually distinct from the recurring protagonist girl, recurring young boy classmate, and recurring sporty boy. The child's pants are clearly wet, for example from stepping into a puddle or water splashing up, while the shirt or top remains visibly dry. The contrast between wet pants and dry shirt must be clear.

### R027-S04
- text: 打掃後，房間換了樣子。
- spokenText: 打掃後房間換了樣子
- focusChar: 換
- displayLines: ["打掃後，","房間換了","樣子。"]
- imageNotes: Show a room after cleaning. The room is tidy, the floor is clean, and items are put away so it clearly looks changed after being cleaned. No people are required. Avoid before/after split panels; a single final cleaned room should show the changed appearance.

### R027-S05
- text: 我知道做錯事，馬上認錯。
- spokenText: 我知道做錯事馬上認錯
- focusChar: 認
- displayLines: ["我知道","做錯事，","馬上認錯。"]
- imageNotes: Use the recurring protagonist girl identity for 我 and the recurring protagonist mother identity for 媽媽. The girl has accidentally broken a flower vase and immediately admits the mistake to her mother. The broken vase should be visible but not dangerous or frightening. The mother looks warm and calm, visually distinct from teacher, father, and generic adults.

## Stage 4

- R027-G01: find-character, sentenceId R027-S01, target 身
- R027-G02: teach-character, sentenceId R027-S02, target 船
- R027-G03: missing-character, sentenceId R027-S03, target 濕
- R027-G04: partial-order, sentenceId R027-S04, target 換
- R027-G05: choose-pronunciation, sentenceId R027-S05, target 認

## Image Style

Every prompt must include square image / 1:1 composition, L058 style references, recurring cast continuity, safe margins, and no visible text, numbers, labels, zhuyin, signs, logos, or watermarks.

## Audio

Use standard OpenAI TTS flow for whole-sentence audio, G02 prefix audio from exact prefix text, and G05 wrong-option whole-sentence audio from exact wrong text. Do not splice audio.
