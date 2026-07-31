# 認字練功房 Project Handoff SOP v1

這份文件是給新的 Codex/GPT 對話串接手用的總控文件。開始任何新工作前，先讀這份，再讀：

- `docs/CURRICULUM_LEDGER.md`
- `docs/CURRICULUM_PRODUCTION_SOP.md`
- `docs/CURRICULUM_SCHEMA.md`
- `docs/AI_GENERATION_SETUP.md`
- `docs/COLLECTION_SYSTEM.md`

## 專案定位

`認字練功房` 是給幼兒使用的漢字識字 app。目標是讓孩子從不認得字開始，透過一課一課解鎖、聽聲音、找字、看圖聽句子，慢慢建立認字能力。

核心精神來自循序漸進的漢字教材概念，但本 app 的字序、句子、圖片、音檔、互動設計都必須原創。不要照抄任何既有書籍的字序或句子。

最終課程目標是 600-700 個漢字，可上架販售。教材不是空架子，必須先完成並審核後才能作為正式商品。

## 目前狀態

- Repo: `https://github.com/icelog-TU/character-recognition-dojo`
- GitHub Pages: `https://icelog-tu.github.io/character-recognition-dojo/`
- App name: `認字練功房`
- Current reviewed lessons: L001-L007
- Next lesson after L007 is not yet chosen.
- Sentence games planned start: around L011 as Stage 4
- L001-L010 should stay with the simpler three-block flow: listen, find, picture sentence.

## App 結構

The app is not a single long worksheet. It uses a shared app shell:

- Top orange header
  - menu button
  - app name
  - coins
  - stars
  - streak days
- Left drawer
  - 練習課文
  - 漢字總覽
  - 學習記錄
  - 轉蛋
  - 角色收藏
  - 設定
- Floating playback bar
  - appears when audio is active or paused
  - supports pause/resume
  - provides a quick return to course entrance

Important UX principle: this is for young children. Do not write screens as if adults are reading instructions. Use large visual targets, clear color cues, voice guidance, and visible state changes.

## Reward And Collection System

The prototype has a working local collection system:

- Each first-time completed lesson gives 30 coins and 12 stars.
- Replaying an already completed lesson does not grant rewards again.
- Gacha draws cost 10 coins each.
- If five gacha draws in a row are duplicates and the active realm still has missing characters, the next draw is guaranteed new.
- Stars are used to raise character affection.
- Spending 3 stars adds 1 affection heart to one owned character.
- Each character can have up to 10 hearts.
- Character interactions unlock by hearts. Heart 1 is 打招呼; heart 2 is 聊聊天. Later hearts unlock deterministic activities that vary by character.
- Store opened interaction positions in `seenCharacterInteractions`; new unlocked interactions may sparkle, but opened ones should stop presenting as new.
- The collection has four realms: 地上的生物, 海裡的生物, 天上的生物, 外太空的生物.
- Realms unlock in order: land, sea, sky, space.
- Each realm currently has 15 species.
- Each species has 9 family roles: 爺爺, 奶奶, 爸爸, 媽媽, 哥哥, 姐姐, 弟弟, 妹妹, 寶寶.
- Current total collection size is 540 characters.

Current page rules:

- Entering `轉蛋` speaks a short guide.
- The gacha draw button is the first major control on the page. It has a gift graphic, costs 10 coins, plays a sound, speaks that the draw is starting, and then reveals the result.
- Realm progress is shown below the gacha machine.
- Entering `角色收藏` speaks a short guide.
- The collection page shows realm tabs first, then a tappable character list.
- Character detail, affection hearts, and interactions open only after tapping an owned character.
- Realm selection, character selection, heart spending, and interaction opening all need sound feedback.

Do not batch-generate all final role images yet. First lock one species family's visual style, review it on phone, then generate character art in small approved batches.

See `docs/COLLECTION_SYSTEM.md` for the full economy and asset plan.

## Lesson Flow

Each lesson has three stages.

### Stage 1: 聽聽看

- Show the new character or seed characters as large cards.
- Each card has the Han character and Taiwan zhuyin on the right side.
- The current target card glows.
- When tapped, the card enlarges/floats to the center and plays AI character audio.
- Stage clears only after all new character cards have been heard.
- After completion, do not auto-jump. Show a red button to enter the next stage.

### Stage 2: 找出這個字

- The voice prompt should say `這一課學的字`, not `剛剛學過的字`.
- Show six cards when possible.
- The lesson target character should appear three times for single-character lessons.
- Distractor cards should look similar enough to be a real visual search task; do not make them obvious by removing zhuyin only from distractors.
- When a correct card is tapped:
  - the card should visually pop/enlarge
  - audio should play immediately
  - then the card collects into the found area
- When all required cards are found:
  - play a celebration response
  - show a red button to enter Stage 3
  - do not auto-start Stage 3

### Stage 3: 看圖聽句子

For L001-L010, use picture-supported sentence practice:

- One image per reviewed sentence.
- The current image card glows.
- The prompt should tell the child to tap the glowing picture and follow along.
- Tapping a sentence card plays the full AI sentence audio.
- The sentence highlights character-by-character according to `charTimings`.
- Completed sentence cards can be tapped again for replay.
- When all sentence cards are completed:
  - show a reward prompt
  - the red button claims rewards
  - coins and stars animate long enough to feel rewarding
  - after reward, offer:
    - red button: next lesson
    - white button: back to course entrance

From around L011, add Stage 4 after the child completes picture-supported sentence listening. Do not replace Stage 3. Stage 4 can start using the old app's five sentence games:

- 找字
- 教動物
- 填空
- 排句子
- 誰念對

Do not introduce these games too early. The child needs enough known characters first.

## Typography And Zhuyin Rules

This app is for Taiwan users.

- Never use Hanyu pinyin in the product UI or curriculum.
- Use Taiwan zhuyin.
- Sentence text is horizontal, left to right.
- Zhuyin sits vertically on the right side of each Han character.
- Tone marks sit to the right of the zhuyin symbols.
- Neutral tone uses a small dot above the zhuyin symbols, e.g. `˙ㄉㄜ`.
- Do not put zhuyin above the Han character like pinyin.
- Do not turn sentence practice into vertical text.

For sentence layout, avoid ugly line breaks. If a sentence is too long for one phone row, use `displayLines` in curriculum data. Example:

```json
"text": "一個大大的人",
"displayLines": ["一個", "大大的人"]
```

`displayLines` only controls visual line breaks. It must join back to `text`, and the app still uses `text` for audio timing and character highlighting.

## Audio Rules

There are two audio categories.

### Curriculum Audio

Must use reviewed AI audio:

- new character audio: `charAudio`
- full sentence audio: `sentence.audio.src`
- timings: `sentence.audio.charTimings`

Do not build sentence reading by stitching one audio file per character. That creates unnatural one-character pauses.

Sentence audio must read `spokenText`, not punctuation. If sentence audio is regenerated, `charTimings` must be regenerated.

### Guide Narration

TTS is acceptable for UI guidance, e.g. entrance instructions and stage instructions.

Guide narration should:

- speak slowly enough for young children
- include natural pauses
- not auto-start a new stage without the child pressing a clear button
- allow pause/resume from the floating playback bar
- allow a second button tap to skip long transition narration when testing

## Image Rules

Every reviewed sentence should have one picture.

- Use warm, child-friendly picture-book style.
- No text, letters, numbers, signs, labels, watermarks, or zhuyin inside the image.
- If the sentence expresses count, the image must clearly match the count.
- If the sentence contrasts size, the image must make the contrast obvious.
- If a target object/person needs attention, use clear visual highlight such as a circle, strong glow, or spotlight. Subtle glow alone may disappear on a phone screen.
- Final images should be stored as WebP under `public/assets/lessons/L###/images/`.

## Character And Visual Continuity

Starting L007, `我` introduces a fixed first-person character.

Rule:

- `我` is always represented by the same young girl.
- She should remain visually consistent across all future images involving `我`.
- She is the app's recurring child self-character.
- Future image prompts for `我` must explicitly mention this continuity.

Approved visual description:

> A friendly young girl, preschool to early elementary age, shoulder-length dark brown hair, a small pink hair clip, bright curious eyes, yellow top, coral-red pinafore dress, red shoes, warm expression, child-friendly picture-book style. She is the fixed visual representation of `我`.

Use L007 images as the current visual reference for this character.

## Curriculum Rules

Before planning any new lesson:

1. Read `docs/CURRICULUM_LEDGER.md`.
2. Confirm all taught characters.
3. Confirm recent review pool from the previous 4-5 lessons.
4. Add only the current new character(s).
5. Draft sentences using only already taught characters plus current new character(s).
6. Prefer natural Taiwan usage.
7. Prefer concrete, imageable sentences.
8. Avoid forced combinations that sound strange.
9. Decide if `displayLines` is needed for phone layout.
10. Do not generate final image/audio before parent/teacher approval.

AI-generated sentences are always drafts. The parent/teacher must approve every sentence before it enters `src/curriculum/sample-lessons.json`.

## Current Curriculum Plan

Reviewed:

- L001: `一 二 三 人`
- L002: `個`
- L003: `大`
- L004: `的`
- L005: `小`
- L006: `手`
- L007: `我`

L006 sentences:

- `一個人的手`
- `三個人的手`
- `大大的手`
- `小小的手`
- `大大小小的手`

L007 sentences:

- `我一個人`
- `我的小手`
- `我的手小小的`
- `大人的手大大的`
- `三個人的大手小手`

## File Map

Important files:

- `src/App.tsx`: app shell, pages, lesson flow, playback behavior.
- `src/index.css`: visual system, responsive layout, animations.
- `docs/COLLECTION_SYSTEM.md`: gacha economy, realms, family roles, and future character-art plan.
- `src/curriculum/sample-lessons.json`: reviewed shipping curriculum used by the app.
- `src/types.ts`: curriculum data types.
- `src/lib/curriculum.ts`: curriculum helper functions.
- `scripts/validate-curriculum.mjs`: curriculum correctness checks.
- `scripts/validate-production-assets.mjs`: production asset existence checks.
- `scripts/generate-audio-drafts.mjs`: AI audio draft generation.
- `scripts/process-audio-assets.mjs`: audio normalization.
- `scripts/align-audio-timings.mjs`: character timing generation.
- `scripts/optimize-images.mjs`: image conversion/compression.
- `docs/CURRICULUM_LEDGER.md`: lesson history and character map.
- `docs/CURRICULUM_PRODUCTION_SOP.md`: production workflow.
- `docs/CURRICULUM_SCHEMA.md`: curriculum JSON shape.
- `docs/AI_GENERATION_SETUP.md`: local OpenAI API setup.

## Required Checks Before Push

Run these before committing:

```bash
npm run validate:curriculum
npm run lint
npm run build
npm run validate:production
```

When producing assets, do not run JSON-writing commands in parallel. In particular, run `assets:images` and `assets:align` sequentially per lesson because they rewrite `src/curriculum/sample-lessons.json`.

After pushing, verify GitHub Pages deployment and check the online URL:

`https://icelog-tu.github.io/character-recognition-dojo/`

## Handoff Prompt For A New Chat

Use this when starting a new Codex/GPT thread:

```text
We are continuing the `認字練功房` repo:
https://github.com/icelog-TU/character-recognition-dojo

Please first read:
- docs/PROJECT_HANDOFF_SOP.md
- docs/CURRICULUM_LEDGER.md
- docs/CURRICULUM_PRODUCTION_SOP.md
- docs/CURRICULUM_SCHEMA.md

The app is a Taiwan zhuyin character-recognition app for young children.
Do not use Hanyu pinyin.
Sentence text is horizontal, with zhuyin vertically on the right of each Han character.
Curriculum sentence audio must use AI audio files with charTimings.
Guide narration may use TTS.
L001-L007 are reviewed and built.
The next lesson after L007 is not yet chosen.
L007 introduces a fixed young girl character for 我.
Sentence games should start around L011 as Stage 4, not before, and should not replace picture-supported sentence listening.
```
