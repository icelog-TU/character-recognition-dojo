# R036 複習三十六 Generation Packet

- Unit kind: review module
- Pair mate: R035
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

### R036-S01
- text: 鞋子破了一個洞。
- spokenText: 鞋子破了一個洞
- focusChar: 破
- displayLines: ["鞋子破了","一個洞。"]
- imageNotes: Show one shoe with one clear hole in it. No people are required. The hole should be visible and not confused with decoration.

### R036-S02
- text: 手受傷破皮，我忍耐不哭。
- spokenText: 手受傷破皮我忍耐不哭
- focusChar: 忍
- displayLines: ["手受傷破皮，","我忍耐不哭。"]
- imageNotes: Use the recurring protagonist girl identity for 我. Her hand has a small scrape or broken skin, and she is trying to endure it without crying. Do not show blood, fear, or a frightening injury.

### R036-S03
- text: 我不敢爬樹，怕被媽媽罵。
- spokenText: 我不敢爬樹怕被媽媽罵
- focusChar: 敢
- displayLines: ["我不敢爬樹，","怕被媽媽罵。"]
- imageNotes: Use the recurring protagonist girl identity for 我 and the recurring protagonist mother identity for 媽媽 if mother appears. Other generic children are already up in the tree and invite the protagonist girl to come up. The protagonist girl stands under the tree shaking her head, not daring to climb because she is afraid her mother will scold her. Keep the tree-climbing scene safe and not dangerous.

### R036-S04
- text: 小孩被狗叫聲嚇哭了。
- spokenText: 小孩被狗叫聲嚇哭了
- focusChar: 嚇
- displayLines: ["小孩被狗","叫聲嚇哭了。"]
- imageNotes: Show a small generic child, younger/smaller than the usual preschool children, being startled by a dog's sudden bark and crying. The dog should not look vicious, should not chase the child, and the scene should not feel dangerous.

### R036-S05
- text: 紅燈過馬路，當然不對。
- spokenText: 紅燈過馬路當然不對
- focusChar: 對
- displayLines: ["紅燈過馬路，","當然不對。"]
- imageNotes: Show a red traffic light and a person about to cross or crossing the road at the wrong time. The image must clearly communicate that crossing on red is not correct, but do not show a crash, injury, or frightening danger. Avoid readable text or signage.

## Stage 4 Sentence Games

### R036-G01 find-character
- sentenceId: R036-S01
- targetChar: 破
- options: 破 / 洞 / 鞋 / 子

### R036-G02 teach-character
- sentenceId: R036-S03
- targetChar: 敢
- targetCharIndex: 2
- prefixText: 我不
- suffixText: 爬樹怕被媽媽罵

### R036-G03 missing-character
- sentenceId: R036-S05
- targetChar: 對
- missingIndexes: [8]
- options: 對 / 當 / 然

### R036-G04 partial-order
- sentenceId: R036-S02
- targetChar: 忍
- missingIndexes: [2,3,6,7]
- options: 傷 / 破 / 忍 / 耐

### R036-G05 choose-pronunciation
- sentenceId: R036-S04
- targetChar: 嚇
- correctText: 小孩被狗叫聲嚇哭了。
- wrong-one: 小孩被狗叫聲嚇到了。
- wrong-two: 小孩被車叫聲嚇哭了。

## Production Notes

- Generate full-sentence OpenAI audio from `spokenText`.
- Generate G02 teach prefix/suffix audio from the exact fragments listed above, not from cut sentence audio.
- Generate G05 wrong-choice audio from the exact complete wrong texts listed above, not by splicing.
- Run `assets:audio` and `assets:align:ai` with temporary production JSON if needed, then copy final timing metadata back into the draft and restore release-owned shared files.
- Production must not commit `src/curriculum/sample-lessons.json`, `public/tools/planner-data.json`, or `docs/CURRICULUM_LEDGER.md`.
