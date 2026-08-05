# R003 Review Module Generation Packet

- Review module: R003
- Title: 複習三
- After lesson: L090
- Target range: L031-L060
- Pair: R003/R004
- Required coverage across pair: 是 不 到 走 他 沒 裡 兩 狗 都 爸 媽 愛 書 可 會 這 吃 做 好 樣 要 更 邊 多 少 比 來 起 去
- Asset base: /assets/reviews/R003
- Production note: latest `origin/main` is not yet L090, so this is parallel prep only. Do not merge into top-level `reviewLessons` until L089 and L090 are merged.

## Approved Sentences

1. 這本書是爸爸借來的
   - Spoken: 這本書是爸爸借來的
   - Focus: 是
   - Image: 爸爸把一本借來的書拿給孩子看，孩子看著書，書本清楚但不能有文字。不要有文字、數字、招牌。
2. 媽媽做的愛心很好看
   - Spoken: 媽媽做的愛心很好看
   - Focus: 做
   - Image: 媽媽和孩子一起看一個媽媽做的愛心手作品，愛心清楚漂亮，表情溫暖。不要有文字、數字、招牌。
3. 他沒看到路邊的人
   - Spoken: 他沒看到路邊的人
   - Focus: 他
   - Image: 固定小男孩走在路上，沒有注意到路邊站著的人；路邊位置清楚，人物表情自然。不要有文字、數字、招牌。
4. 兩隻小狗都在家裡
   - Spoken: 兩隻小狗都在家裡
   - Focus: 兩
   - Image: 家裡有兩隻小狗，兩隻狗都在室內或家門內，孩子在旁邊看著。不要有文字、數字、招牌。
5. 不要把水放在書上
   - Spoken: 不要把水放在書上
   - Focus: 不
   - Image: 孩子正要把水杯或水放在書上，大人溫和提醒不要這樣；書和水都清楚可見。不要有文字、數字、招牌。

## Stage 4 Plan

1. find-character: R003-S01, target 是
2. teach-character: R003-S02, target 做, prefix 媽媽, suffix 的愛心很好看
3. missing-character: R003-S03, target 他, wrong options 人 / 路
4. partial-order: R003-S04, restore 兩 隻 小 狗
5. choose-pronunciation: R003-S05
   - Correct: 不要把水放在書上
   - Wrong one: 不要把書放在水上
   - Wrong two: 不要把水放在書裡

## Asset Requirements

- Images use L058 style references:
  - `public/assets/lessons/L058/images/L058-S01.webp`
  - `public/assets/lessons/L058/images/L058-S02.webp`
  - `public/assets/lessons/L058/images/L058-S03.webp`
- Final images: `public/assets/reviews/R003/images/R003-S01.webp` through `R003-S05.webp`
- Audio inbox: `curriculum-workflow/audio-inbox/R003/`
- Final audio: `public/assets/reviews/R003/audio/`
- Review modules do not use `newChars`, `zhuyin`, or `charAudio`.
- Generate full sentence audio and Stage 4 option audio with AI audio, then run `assets:audio` and `assets:align:ai`.
