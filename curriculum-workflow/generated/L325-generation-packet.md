# L325 Generation Packet: 向

## Package Scope

- Unit: L325
- Kind: normal lesson
- New character: 向
- Zhuyin: ㄒㄧㄤˋ
- Title: 向
- Branch: codex/l325-complete-package
- Package status target: dependency-blocked-asset-complete until L323 and L324 merge

## Dependency Boundary

- Latest production boundary at claim time: L001-L322, latest new character 東
- dependsOnLessons: L323, L324
- provisionalLearnedChars: 方, 圖
- Allowed learner-facing text boundary: latest origin/main learned chars through L322 + 方 + 圖 + 向

Learner-facing text includes sentence text, spokenText, displayLines, focusChar, Stage 4 option text, G02 teach fragments, and G05 option text. Image notes and image prompts are production instructions, not learner text.

## Approved Sentences

| Id | Text | Spoken Text | Focus | Display Lines |
|---|---|---|---|---|
| L325-S01 | 看地圖，先向東方走。 | 看地圖先向東方走 | 向 | 看地圖， / 先向東方走。 |
| L325-S02 | 風從東邊吹向西邊。 | 風從東邊吹向西邊 | 向 | 風從東邊 / 吹向西邊。 |
| L325-S03 | 這樣拿，地圖的方向才對。 | 這樣拿地圖的方向才對 | 向 | 這樣拿， / 地圖的方向 / 才對。 |
| L325-S04 | 爸爸指向最亮的星。 | 爸爸指向最亮的星 | 向 | 爸爸指向 / 最亮的星。 |
| L325-S05 | 一隻小鳥飛向東邊。 | 一隻小鳥飛向東邊 | 向 | 一隻小鳥 / 飛向東邊。 |

## Coverage

- 向: 5 / 3
- 圖: 2 / 2
- 方: 2 / 2
- 東: 3 / 2
- 西: 1 / 1
- 最: 1 / 1

All approved sentences are 4-12 Han characters. All displayLines join exactly back to text and each line is <= 6 visible characters including punctuation.

## Stage 4

Use all five game types exactly once and use every sentence exactly once.

1. L325-G01 find-character
   - sentenceId: L325-S01
   - targetChar: 向
   - targetCharIndex: 4
   - options: 向, 東, 西, 方

2. L325-G02 teach-character
   - sentenceId: L325-S02
   - targetChar: 向
   - targetCharIndex: 5
   - prefixText: 風從東邊吹
   - suffixText: 西邊
   - prefixSrc: /assets/lessons/L325/audio/L325-G02-prefix.m4a
   - suffixSrc: /assets/lessons/L325/audio/L325-G02-suffix.m4a

3. L325-G03 missing-character
   - sentenceId: L325-S04
   - targetChar: 向
   - missingIndexes: [3]
   - options: 向, 東, 西

4. L325-G04 partial-order
   - sentenceId: L325-S03
   - missingIndexes: [4, 5, 6, 7]
   - single-Han option cards only: 圖, 的, 方, 向
   - correctOrder: 圖, 的, 方, 向

5. L325-G05 choose-pronunciation
   - sentenceId: L325-S05
   - correctText: 一隻小鳥飛向東邊。
   - wrong-one: 一隻小鳥飛向西邊。
   - wrong-two: 一隻小鳥飛向上方。
   - wrong-choice audio must be generated from the exact complete wrong texts.

## Asset Requirements

- Images: public/assets/lessons/L325/images/L325-S01.webp through L325-S05.webp
- Sentence audio: public/assets/lessons/L325/audio/L325-S01.m4a through L325-S05.m4a
- Character audio: public/assets/lessons/L325/audio/char-u5411.m4a
- G02 audio: public/assets/lessons/L325/audio/L325-G02-prefix.m4a and L325-G02-suffix.m4a
- G05 wrong audio: public/assets/lessons/L325/audio/L325-G05-wrong-one.m4a and L325-G05-wrong-two.m4a

Images must be square 1:1 WebP, <=1024 px on the long edge, phone-readable, size-compliant, and visually reviewed side-by-side against L058 style anchors plus relevant recurring cast anchors. Semantic correctness alone is not enough; regenerate if style or cast continuity drifts.

Audio must use repo OpenAI TTS flow only. Do not splice, cut, mute, patch, or extract target-character or wrong-choice audio.
