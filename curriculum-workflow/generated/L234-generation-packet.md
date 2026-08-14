# L234 Generation Packet - lesson-local asset package

## Lesson

- id: L234
- order: 234
- new character: 貴
- zhuyin: 貴=ㄍㄨㄟˋ
- dependencies at request time: L232, L233
- provisional learned chars at request time: 錢 買

## Approved Sentences

### L234-S01

- text: 這本書太貴，先不買。
- spokenText: 這本書太貴先不買
- focusChar: 貴
- displayLines: ["這本書太貴，","先不買。"]
- imageNotes: 主角小女孩和主角媽媽在書店或書桌旁看一本書，小女孩很想要，媽媽溫和地表示這本書太貴，先不買。畫面要清楚呈現「想買書但覺得太貴，所以先不買」。不可有書名、價格、文字、數字、招牌、品牌或標籤。

### L234-S02

- text: 這點錢買魚夠不夠？
- spokenText: 這點錢買魚夠不夠
- focusChar: 買
- displayLines: ["這點錢買魚","夠不夠？"]
- imageNotes: 主角小女孩和主角媽媽在市場魚攤或家裡準備買魚，桌上或手上只有一小把硬幣，旁邊有幾條魚，兩人一起看著錢和魚，像是在確認這點錢買魚夠不夠。不可有價目表、文字、數字、招牌、品牌或標籤。

### L234-S03

- text: 菜不貴，可以多買一點。
- spokenText: 菜不貴可以多買一點
- focusChar: 貴
- displayLines: ["菜不貴，","可以多買","一點。"]
- imageNotes: 主角媽媽和主角小女孩在菜攤或家裡看一堆新鮮蔬菜，媽媽覺得菜不貴，可以多買一點。畫面要呈現「菜看起來新鮮、份量多、可以多買」，但不能出現價錢、文字、數字、招牌或標籤。

### L234-S04

- text: 買了水，錢只剩一點。
- spokenText: 買了水錢只剩一點
- focusChar: 錢
- displayLines: ["買了水，","錢只剩一點。"]
- imageNotes: 主角小女孩剛買了一瓶沒有標籤的水，手上或桌上只剩很少硬幣。可有主角媽媽在旁邊看著她數錢。畫面重點是「買水後錢只剩一點」。水瓶、硬幣、桌面不可有文字、數字、刻度、品牌或標籤。

### L234-S05

- text: 新書包太貴，錢不夠。
- spokenText: 新書包太貴錢不夠
- focusChar: 貴
- displayLines: ["新書包太貴，","錢不夠。"]
- imageNotes: 主角小女孩和主角媽媽在家裡或店裡看一個新書包，小女孩喜歡但主角媽媽看著手上的錢，表示錢不夠。畫面要清楚呈現「新書包太貴，錢不夠」。書包、錢、桌面和背景不可有文字、數字、價格、品牌或標籤。

## Stage 4 Plan

- G01 find-character: L234-S01 target ?.
- G02 teach-character: L234-S05 target ? index 4, prefix/suffix generated from exact fragments.
- G03 missing-character: L234-S03 options from request.
- G04 partial-order: L234-S02 chunks from request.
- G05 choose-pronunciation: wrong options generated from exact full wrong sentence text.

## Image Rules

Every image prompt requires square image / 1:1 composition, L058 style only, protagonist family continuity from L154/L162/L163, explicit role identities, and no text, numbers, price labels, signs, brands, labels, zhuyin, or watermarks.

## Audio Rules

Use repo OpenAI TTS only. Generate S01-S05 from spokenText, standalone charAudio, G02 prefix/suffix, and G05 wrong-choice audio from exact complete text. Do not splice audio.
