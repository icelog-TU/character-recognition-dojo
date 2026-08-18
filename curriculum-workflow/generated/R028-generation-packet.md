# R028 複習二十八 Generation Packet

## Review Metadata

- Unit: R028
- Kind: review module
- Pair mate: R027
- afterLessonOrder: 240
- Coverage range: L211-L240
- Allowed-character ceiling: L240
- Required rounds: 5
- Required coverage chars: 船 魚 游 泳 池 身 濕 乾 服 褲 換 改 錯 知 認 新 舊 半 只 剩 夠 錢 買 貴 賣 店 場 市 夜 具
- Review modules introduce no newChars, zhuyin, or charAudio.
- Production package only; Release owns shared-state integration.

## Approved Sentences

### R028-S01
- text: 白飯只剩一點，一人分一半。
- spokenText: 白飯只剩一點一人分一半
- focusChar: 半
- displayLines: ["白飯只剩","一點，","一人分一半。"]
- imageNotes: Show two generic children, visually distinct from recurring 我, 你, and 他, sitting at a table with only a little white rice left. They divide the remaining white rice into two equal halves, one half for each child. Make only a little rice remains and one person gets one half visually clear. No text labels.

### R028-S02
- text: 新玩具太貴，我的錢不夠買。
- spokenText: 新玩具太貴我的錢不夠買
- focusChar: 貴
- displayLines: ["新玩具太貴，","我的錢","不夠買。"]
- imageNotes: Use the recurring protagonist girl identity for 我. The girl is looking at a new toy with a visible price tag or price marker using simple non-text visual cues if possible. She holds a small amount of money, clearly not enough to buy the toy. Avoid readable Chinese signs or numerals.

### R028-S03
- text: 媽媽把舊衣服改好了。
- spokenText: 媽媽把舊衣服改好了
- focusChar: 舊
- displayLines: ["媽媽把舊","衣服改好了。"]
- imageNotes: Use the recurring protagonist mother identity. Mother has altered or repaired an old piece of clothing, and the clothing now looks neatly fixed or adjusted. She may be at a table or sewing area. The mother must be visually distinct from the teacher and generic women.

### R028-S04
- text: 市場裡有一間賣玩具的店。
- spokenText: 市場裡有一間賣玩具的店
- focusChar: 店
- displayLines: ["市場裡","有一間","賣玩具的店。"]
- imageNotes: Show a market with one small shop or stall selling toys. Toys should be visible on the stall or shelves. Use varied generic adults and passersby if people appear; do not reuse mother, teacher, or recurring child identities. Do not include readable signs or unlearned text.

### R028-S05
- text: 夜市裡有很多人。
- spokenText: 夜市裡有很多人
- focusChar: 夜
- displayLines: ["夜市裡","有很多人。"]
- imageNotes: Show a night market scene with warm lights, stalls, and many varied generic people walking around. The scene should clearly be at night. No readable signs or unlearned text. Generic adults and children should be visually varied and not confused with recurring cast.

## Stage 4

- R028-G01: find-character, sentenceId R028-S02, target 貴
- R028-G02: teach-character, sentenceId R028-S04, target 店
- R028-G03: missing-character, sentenceId R028-S05, target 夜
- R028-G04: partial-order, sentenceId R028-S01, target 半
- R028-G05: choose-pronunciation, sentenceId R028-S03, target 舊

## Image Style

Every prompt must include square image / 1:1 composition, L058 style references, recurring cast continuity, safe margins, and no visible text, numbers, labels, zhuyin, signs, logos, or watermarks.

## Audio

Use standard OpenAI TTS flow for whole-sentence audio, G02 prefix audio from exact prefix text, and G05 wrong-option whole-sentence audio from exact wrong text. Do not splice audio.
