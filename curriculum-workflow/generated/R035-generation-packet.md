# R035 複習三十五 Generation Packet

- Unit kind: review module
- Pair mate: R036
- Milestone: L300
- afterLessonOrder: 300
- Coverage range: L271-L300
- Allowed-character ceiling: L300
- Review migration replacement package: No
- New characters: none

## Required Coverage

變 差 緊 卡 住 蓋 橋 座 木 積 堆 洞 破 口 傷 皮 痛 受 忍 耐 敢 當 然 怕 哭 被 嚇 罵 對 爬

## Image Style And Cast Contract

- Use L058 images as style references only: `public/assets/lessons/L058/images/L058-S01.webp`, `L058-S02.webp`, and `L058-S03.webp`.
- Use the current cast anchors from `docs/LESSON_VISUAL_CAST_SOP.md` when a recurring role appears.
- Keep recurring `?`, `?`, `?`, mother, father, teacher, and generic children visually distinct.
- Do not add visible text, signs, numbers, zhuyin, labels, watermarks, or speech bubbles inside images.

## Approved Sentences

### R035-S01
- text: 天氣變差了。
- spokenText: 天氣變差了
- focusChar: 變
- displayLines: ["天氣變差了。"]
- imageNotes: Show current weather as cloudy or about to rain, so the viewer can understand the weather has become worse. Do not show a before/after comparison or an originally bright sky; that would make image generation harder.

### R035-S02
- text: 小車在門口卡住了。
- spokenText: 小車在門口卡住了
- focusChar: 卡
- displayLines: ["小車在門口","卡住了。"]
- imageNotes: Show a small toy car stuck at the doorway of a toy house or small play structure. The car is caught at the entrance and cannot go in or out. No people are required.

### R035-S03
- text: 桌上有一堆積木。
- spokenText: 桌上有一堆積木
- focusChar: 堆
- displayLines: ["桌上有一堆","積木。"]
- imageNotes: Show a pile of blocks on a table. The blocks should be clearly visible and gathered in a pile. No people are required.

### R035-S04
- text: 工人用木頭蓋一座橋。
- spokenText: 工人用木頭蓋一座橋
- focusChar: 橋
- displayLines: ["工人用木頭","蓋一座橋。"]
- imageNotes: Show a generic worker using wood to build a bridge. The worker is not father and must be visually distinct from father, mother, teacher, and recurring characters. The wood material and bridge should be clear.

### R035-S05
- text: 鞋子太緊，腳很痛。
- spokenText: 鞋子太緊腳很痛
- focusChar: 緊
- displayLines: ["鞋子太緊，","腳很痛。"]
- imageNotes: Show a generic child, visually distinct from recurring 我/你/他, wearing shoes that are too tight. The child's foot hurts, but this should not look like a serious injury.

## Stage 4 Sentence Games

### R035-G01 find-character
- sentenceId: R035-S01
- targetChar: 變
- options: 變 / 差 / 天 / 氣

### R035-G02 teach-character
- sentenceId: R035-S02
- targetChar: 卡
- targetCharIndex: 5
- prefixText: 小車在門口
- suffixText: 住了

### R035-G03 missing-character
- sentenceId: R035-S03
- targetChar: 堆
- missingIndexes: [4]
- options: 堆 / 積 / 木

### R035-G04 partial-order
- sentenceId: R035-S04
- targetChar: 橋
- missingIndexes: [5,7,8]
- options: 蓋 / 座 / 橋

### R035-G05 choose-pronunciation
- sentenceId: R035-S05
- targetChar: 緊
- correctText: 鞋子太緊，腳很痛。
- wrong-one: 帽子太緊，頭很痛。
- wrong-two: 鞋子太大，腳很痛。

## Production Notes

- Generate full-sentence OpenAI audio from `spokenText`.
- Generate G02 teach prefix/suffix audio from the exact fragments listed above, not from cut sentence audio.
- Generate G05 wrong-choice audio from the exact complete wrong texts listed above, not by splicing.
- Run `assets:audio` and `assets:align:ai` with temporary production JSON if needed, then copy final timing metadata back into the draft and restore release-owned shared files.
- Production must not commit `src/curriculum/sample-lessons.json`, `public/tools/planner-data.json`, or `docs/CURRICULUM_LEDGER.md`.
