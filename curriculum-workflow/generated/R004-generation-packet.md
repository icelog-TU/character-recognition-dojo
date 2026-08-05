# R004 Review Module Generation Packet

- Review module: R004
- Title: 複習四
- After lesson: L090
- Target range: L031-L060
- Pair: R003/R004
- Required coverage across pair: 是 不 到 走 他 沒 裡 兩 狗 都 爸 媽 愛 書 可 會 這 吃 做 好 樣 要 更 邊 多 少 比 來 起 去
- Asset base: /assets/reviews/R004
- Production note: latest `origin/main` is not yet L090, so this is parallel prep only. Do not merge into top-level `reviewLessons` until L089 and L090 are merged.

## Approved Sentences

1. 這個比那個更好吃
   - Spoken: 這個比那個更好吃
   - Focus: 比
   - Image: 桌上有兩份食物，孩子比較「這個」和「那個」，表情顯示其中一個更好吃；不要用文字標示。不要有文字、數字、招牌。
2. 男孩女孩一樣可愛
   - Spoken: 男孩女孩一樣可愛
   - Focus: 樣
   - Image: 固定小男孩和固定小女孩站在一起，兩人都可愛、開心，表現「一樣可愛」。不要有文字、數字、招牌。
3. 那邊人多，這邊人少
   - Spoken: 那邊人多這邊人少
   - Focus: 邊
   - Image: 同一場景分成兩邊，一邊人很多，另一邊人比較少，孩子看著兩邊差異。不要有文字、數字、招牌。
4. 同學一起走去上學
   - Spoken: 同學一起走去上學
   - Focus: 起
   - Image: 幾位同學背著書包，一起走去上學，路上和學校方向清楚。不要有文字、數字、招牌。
5. 媽媽很會做好吃的
   - Spoken: 媽媽很會做好吃的
   - Focus: 會
   - Image: 媽媽在家中或餐桌旁做出好吃的食物，孩子開心看著。不要有文字、數字、招牌。

## Stage 4 Plan

1. find-character: R004-S01, target 比
2. teach-character: R004-S02, target 樣, prefix 男孩女孩一, suffix 可愛
3. missing-character: R004-S03, target 邊, wrong options 多 / 少
4. partial-order: R004-S04, restore 一 起 走 去
5. choose-pronunciation: R004-S05
   - Correct: 媽媽很會做好吃的
   - Wrong one: 媽媽不會做好吃的
   - Wrong two: 爸爸很會做好吃的

## Asset Requirements

- Images use L058 style references:
  - `public/assets/lessons/L058/images/L058-S01.webp`
  - `public/assets/lessons/L058/images/L058-S02.webp`
  - `public/assets/lessons/L058/images/L058-S03.webp`
- Final images: `public/assets/reviews/R004/images/R004-S01.webp` through `R004-S05.webp`
- Audio inbox: `curriculum-workflow/audio-inbox/R004/`
- Final audio: `public/assets/reviews/R004/audio/`
- Review modules do not use `newChars`, `zhuyin`, or `charAudio`.
- Generate full sentence audio and Stage 4 option audio with AI audio, then run `assets:audio` and `assets:align:ai`.
