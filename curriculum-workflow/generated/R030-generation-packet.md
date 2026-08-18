# R030 複習三十 Generation Packet

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

### R030-S01
- text: 大風吹，樹上葉子只剩一半。
- spokenText: 大風吹樹上葉子只剩一半
- focusChar: 半
- displayLines: ["大風吹，","樹上葉子只剩一半。"]
- imageNotes: Show a strong wind after it has blown many leaves off a tree. The tree has only about half its leaves left, with fallen leaves on the ground. Make "only half left" visually clear without text labels.

### R030-S02
- text: 新書太貴，我的錢不夠買。
- spokenText: 新書太貴我的錢不夠買
- focusChar: 貴
- displayLines: ["新書太貴，","我的錢不夠買。"]
- imageNotes: Use the recurring protagonist girl identity for 我. She is looking at a new book and a price marker, holding money that is clearly not enough to buy it. Avoid readable text on the book or price sign if possible; use visual price cues.

### R030-S03
- text: 媽媽把舊衣服改好了。
- spokenText: 媽媽把舊衣服改好了
- focusChar: 舊
- displayLines: ["媽媽把舊衣服改好了。"]
- imageNotes: Use the recurring protagonist mother identity. Mother has altered or repaired an old piece of clothing, and the clothing now looks neatly fixed or adjusted. She may be at a table or sewing area. The mother must be visually distinct from the teacher and generic women.

### R030-S04
- text: 市場有人在賣菜。
- spokenText: 市場有人在賣菜
- focusChar: 賣
- displayLines: ["市場有人在賣菜。"]
- imageNotes: Show a market with a generic vendor selling vegetables. The vendor is not the protagonist mother and must be visually distinct from mother, teacher, and other recurring adults. Vegetables should be clearly visible. No readable signs or unlearned text.

### R030-S05
- text: 夜市裡有賣面具的小店。
- spokenText: 夜市裡有賣面具的小店
- focusChar: 具
- displayLines: ["夜市裡有","賣面具的小店。"]
- imageNotes: Show a night market with a small shop selling masks. Several child-safe, friendly-looking masks hang or sit on the stall. The scene should clearly be at night, with warm market lights. Do not make the masks scary. No readable signs or unlearned text.

## Stage 4 Sentence Games

### R030-G01 find-character
- sentenceId: R030-S01
- targetChar: 半
- options: 半 / 只 / 剩 / 葉

### R030-G02 teach-character
- sentenceId: R030-S02
- targetChar: 貴
- prefixText: 新書太
- suffixText: 我的錢不夠買

### R030-G03 missing-character
- sentenceId: R030-S04
- targetChar: 賣
- missingIndexes: [5]
- options: 賣 / 買 / 店

### R030-G04 partial-order
- sentenceId: R030-S05
- targetChar: 具
- missingIndexes: [0,1,6,9]
- options: 夜 / 市 / 具 / 店

### R030-G05 choose-pronunciation
- sentenceId: R030-S03
- targetChar: 舊
- correctText: 媽媽把舊衣服改好了。
- wrong-one: 媽媽把新衣服改好了。
- wrong-two: 爸爸把舊衣服改好了。

