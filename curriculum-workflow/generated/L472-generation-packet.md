# L472 案 Production A package

Status: dependency-blocked-asset-complete.
Branch: codex/l472-complete-package.
Base origin/main: 29406e21ead23463b62b06812997e6a871ffcef1; formal L001-L465, latest 招, 469 unique learned Han; latest review R056.

## Approved boundary and source

The request fully expands 475 distinct allowed Han: formal L001-L465, provisional 活、該、應、答、題, and current 案. Coverage is 案3、題2、答3、應2、該3、活1; all minima pass. Sentence Han counts are 11/9/9/10/11. spokenText, displayLines joins, at-most-six-visible-character lines, allowed-character sweep and all Stage 4 indexes pass.

- L472-S01: 這個答案很怪，應該有問題。 Spoken: 這個答案很怪應該有問題. Lines: 這個答案 / 很怪， / 應該有問題。 Focus: 案. Image notes: 家中書桌，主角小女孩看著自己的作業，皺眉、露出疑惑表情，指著作業向旁邊的主角爸爸詢問。爸爸專注看她指的地方。老師最後明確修正：不放積木，不放計數工具或其他核對道具，只靠疑惑表情和互動表達。作業內容不需可讀，不必把錯誤答案具體畫出來。
- L472-S02: 答錯了，應該再想一想。 Spoken: 答錯了應該再想一想. Lines: 答錯了，應該 / 再想一想。 Focus: 應. Image notes: 家中，主角爸爸和主角小女孩玩看局部猜動物的圖卡遊戲。爸爸展示一張動物局部圖，女孩剛選出的完整動物圖卡與之不符；爸爸溫和示意再觀察，女孩收回手、認真思考。靠圖像明確表現是猜錯後再想，不需題目文字、數字或打叉符號；不是責罵，也不直接揭露正解。
- L472-S03: 你不該看別人的答案。 Spoken: 你不該看別人的答案. Lines: 你不該看 / 別人的答案。 Focus: 案. Image notes: 小學教室各自作答，主角小女孩偏頭想看旁邊 generic 同學的作業紙，固定老師在旁溫和但明確地指回女孩自己的紙。老師使用低髮髻、圓框眼鏡、墨綠襯衫與深藍教師背心的明確教師造型，不能像主角媽媽。不是合作討論或互相核對。「你」指被老師提醒的主角小女孩，不要換成固定「你」小男孩；鄰座用 generic 同學即可，不需小光、小月。紙上無需可讀內容。
- L472-S04: 這次活動的主題是動物。 Spoken: 這次活動的主題是動物. Lines: 這次活動的 / 主題是動物。 Focus: 題. Image notes: 親子手作活動，主角小女孩和主角媽媽一起做小狗造型紙面具；旁邊其他 generic 親子分別做鳥、魚等動物造型作品。各組都在做動物，讓共同主題直接可見，不混入車子、太空等其他主題，不靠海報標題解釋。
- L472-S05: 我想在書包上畫小狗圖案。 Spoken: 我想在書包上畫小狗圖案. Lines: 我想在書包上 / 畫小狗圖案。 Focus: 案. Image notes: 家中桌上放主角小女孩自己的素面布書包；女孩拿著一張小狗圖案草圖靠近書包，比較想畫的位置，轉頭向主角媽媽表達想法。書包仍未畫上圖案，保留「我想」的計畫狀態；草圖可畫狗，不要寫姓名或品牌。

## Stage 4

G01 S01[3]=案. G02 S05[10]=案 with independently generated prefix 我想在書包上畫小狗圖 and empty suffix. G03 S03[8]=案 with options 對/案/錯. G04 S02 indexes 3/4/5/6=應該再想 with shuffled cards 再/應/想/該 and correctOrder 2/0/3/1. G05 S04[6]=題; correct S04 plus independently generated full wrong-one 這次活動的主題是水果 and wrong-two 這次活動的主題是運動. Five sentences are used once; mappings pass.

## Assets and validation

Five square 1024px WebP, nine mono 44100Hz AAC M4A and eight complete timing records total 818113 bytes. Every image is under 250 KiB. Final audio decodes and final acoustic checks confirm standalone 案 an4, 答 da2, 應 ying1, 題 ti2, exact S02 ending 再想一想, exact G02 prefix, and both G05 endings. Evidence is in L472-qa-evidence.json and L472-alignment-evidence.json.

- tools:check, ai:check, startup curriculum:audit-state: PASS.
- Package-local text, boundary, schema, Stage 4, file, duration and timing assertions: PASS.
- validate:production and assets:audit --strict on isolated L472 fixture: PASS.
- Full verify skipped because shared production integration belongs to Release after dependencies merge.

## Pre-merge asset QA

- L472-S01: style-lock PASS; cast PASS. Girl points to her workbook with a puzzled expression while father looks at the same place; no blocks, counters, calculator, checking aids, readable answer or numbers. Recurring protagonist girl and father match the fixed family identities.
- L472-S02: style-lock PASS; cast PASS. Father presents a cropped animal-detail card; the girl retracts her hand and reconsiders a visibly nonmatching full-animal card without the correct animal being revealed. Recurring protagonist girl and father match the fixed family identities.
- L472-S03: style-lock PASS; cast PASS. During independent work, the girl glances at a generic neighbor’s separate paper while the teacher points back to the girl’s own paper. Teacher has low bun, round glasses, muted teal collared blouse, navy classroom vest and lanyard, visibly distinct from the protagonist mother; girl remains the recurring protagonist.
- L472-S04: style-lock PASS; cast PASS. Mother and girl make a dog mask while other distinct parent-child pairs make bird and fish crafts, so the shared animal theme is visible without signage. Recurring mother and girl match family anchors; generic adults and children are distinct.
- L472-S05: style-lock PASS; cast PASS. Girl compares a dog drawing on a separate plan sheet with a completely blank cloth schoolbag; pencil does not touch the bag and the plan remains unfinished. Recurring mother and girl match the fixed family identities.

All final WebP were checked against the approved style/cast reference. S03 was regenerated after teacher feedback so the teacher is visibly distinct from the mother. No readable text, numbers, equations, labels, logos or watermarks appear. The immutable asset-review URL is the required pre-merge teacher image/audio review surface.

## Release dependencies and ownership

Vocabulary dependencies are L467活, L468該, L469應, L470答 and L471題. Release must preserve L465 → R057 → R058 and L471 → L472 ordering. These dependencies block main integration only. L471 remains Production F’s package. Production A does not merge main; Release owns current-main revalidation, shared production JSON/planner/ledger updates, full verify and deploy.
