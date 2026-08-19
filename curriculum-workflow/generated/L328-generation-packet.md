# L328 Generation Packet: 轉

## Package Scope

- Unit: L328
- Kind: normal lesson
- New character: 轉
- Zhuyin: ㄓㄨㄢˇ
- Title: 轉
- Branch: codex/l328-complete-package
- Package status target: dependency-blocked-asset-complete until L324, L325, L326, and L327 merge

## Dependency Boundary

- Latest production boundary at claim time: L001-L323, latest new character 方
- dependsOnLessons: L324, L325, L326, L327
- provisionalLearnedChars: 圖, 向, 線, 直
- Allowed learner-facing text boundary: latest origin/main learned chars through L323 + 圖 + 向 + 線 + 直 + 轉

Learner-facing text includes sentence text, spokenText, displayLines, focusChar, Stage 4 option text, G02 teach fragments, and G05 option text. Image notes and image prompts are production instructions, not learner text.

## Approved Sentences

| Id | Text | Spoken Text | Focus | Display Lines |
|---|---|---|---|---|
| L328-S01 | 看地圖上的路線，直走再左轉。 | 看地圖上的路線直走再左轉 | 轉 | 看地圖上的 / 路線， / 直走再左轉。 |
| L328-S02 | 小車向左轉了。 | 小車向左轉了 | 轉 | 小車 / 向左轉了。 |
| L328-S03 | 風車一直轉動。 | 風車一直轉動 | 轉 | 風車一直 / 轉動。 |
| L328-S04 | 小狗轉身，跑向沒人的地方。 | 小狗轉身跑向沒人的地方 | 轉 | 小狗轉身， / 跑向 / 沒人的地方。 |
| L328-S05 | 轉動把手，就可以把線收回來。 | 轉動把手就可以把線收回來 | 轉 | 轉動把手， / 就可以把線 / 收回來。 |

## Coverage

- 轉: 5 / 3
- 直: 2 / 2
- 線: 2 / 2
- 向: 2 / 2
- 圖: 1 / 1
- 方: 1 / 1

All approved sentences are 4-12 Han characters. All displayLines join exactly back to text and each line is <= 6 visible characters including punctuation.

## Stage 4

Use all five game types exactly once and use every sentence exactly once.

1. L328-G01 find-character
   - sentenceId: L328-S03
   - targetChar: 轉
   - targetCharIndex: 4
   - options: 轉, 直, 動, 風

2. L328-G02 teach-character
   - sentenceId: L328-S02
   - targetChar: 轉
   - targetCharIndex: 4
   - prefixText: 小車向左
   - suffixText: 了
   - prefixSrc: /assets/lessons/L328/audio/L328-G02-prefix.m4a
   - suffixSrc: /assets/lessons/L328/audio/L328-G02-suffix.m4a

3. L328-G03 missing-character
   - sentenceId: L328-S05
   - targetChar: 轉
   - missingIndexes: [0]
   - options: 轉, 線, 收

4. L328-G04 partial-order
   - sentenceId: L328-S01
   - missingIndexes: [7, 8, 10, 11]
   - single-Han option cards only: 直, 走, 左, 轉
   - correctOrder: 直, 走, 左, 轉

5. L328-G05 choose-pronunciation
   - sentenceId: L328-S04
   - correctText: 小狗轉身，跑向沒人的地方。
   - wrong-one: 小狗轉身，走向沒人的地方。
   - wrong-two: 小狗轉身，跑向有人的地方。
   - wrong-choice audio must be generated from the exact complete wrong texts.

## Asset Requirements

- Images: public/assets/lessons/L328/images/L328-S01.webp through L328-S05.webp
- Sentence audio: public/assets/lessons/L328/audio/L328-S01.m4a through L328-S05.m4a
- Character audio: public/assets/lessons/L328/audio/char-u8f49.m4a
- G02 audio: public/assets/lessons/L328/audio/L328-G02-prefix.m4a and L328-G02-suffix.m4a
- G05 wrong audio: public/assets/lessons/L328/audio/L328-G05-wrong-one.m4a and L328-G05-wrong-two.m4a

Images must be square 1:1 WebP, <=1024 px on the long edge, phone-readable, and size-compliant. Before accepting each final exported WebP, review it side-by-side against the full L058 style anchor set and relevant recurring cast anchors. Semantic correctness alone is not enough; regenerate if style or cast continuity drifts.

Audio must use repo OpenAI TTS flow only. Do not splice, cut, mute, patch, or extract target-character or wrong-choice audio.
