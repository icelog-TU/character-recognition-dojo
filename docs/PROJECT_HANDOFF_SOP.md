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
- Current reviewed lessons: L001-L011
- L011 introduces `下`.
- Sentence games planned start: around L011 as Stage 4
- L001-L011 currently use the simpler three-block flow: listen, find, picture sentence.

## Multi-Codex Collaboration SOP

This repo may be developed by several Codex/GPT conversation threads at the same time. Each thread may have its own local clone. That is acceptable only if every clone points to the same GitHub repo and synchronizes through Git.

Before starting work, always confirm the operating context:

```bash
git remote -v
git fetch origin
git status --short --branch
git log -1 --oneline
```

Rules:

- Treat `https://github.com/icelog-TU/character-recognition-dojo` as the shared source of truth.
- If local `main` is behind `origin/main` and there are no local changes, run `git pull --ff-only origin main` before editing.
- Do not start from an old commit when another Codex has already pushed newer work.
- Prefer one branch per task instead of several Codex threads editing `main` directly.
- Use clear branch names such as `codex/l008-curriculum`, `codex/collection-ui`, or `codex/audio-pipeline`.
- Before editing, state which files or subsystem this thread owns for the current task.
- Avoid two threads editing the same high-conflict files at the same time, especially `src/App.tsx`, `src/index.css`, `src/curriculum/sample-lessons.json`, and curriculum asset folders.
- If two threads must touch the same file, the later thread must fetch/rebase first and inspect the latest diff before editing.
- Never overwrite or revert changes made by another thread unless the user explicitly asks.

Recommended work ownership:

- Curriculum planning: `docs/CURRICULUM_LEDGER.md`, `curriculum-workflow/lesson-requests/`, generated lesson packets, and reviewed sentence drafts.
- Shipping curriculum data: `src/curriculum/sample-lessons.json`; only one thread should edit this at a time.
- Lesson assets: `public/assets/lessons/L###/` and `curriculum-workflow/audio-inbox/L###/`; only one thread should process a lesson's assets at a time.
- App shell and lesson UI: `src/App.tsx` and `src/index.css`; coordinate before parallel edits.
- Scripts and validation: `scripts/*`, `src/types.ts`, and `src/lib/curriculum.ts`.
- Collection and gacha design: `docs/COLLECTION_SYSTEM.md`, collection-related data in `src/App.tsx`, and related CSS.

Before pushing or asking the user to merge:

```bash
git fetch origin
git status --short --branch
npm run validate:curriculum
npm run validate:production
npm run lint
npm run build
git diff --stat
git diff --name-only
```

Self-check gate before uploading to GitHub:

- Confirm the branch is the intended task branch, or confirm the user explicitly asked to push `main`.
- Confirm `git status --short --branch` shows no surprise unrelated changes.
- Review `git diff --stat` and `git diff --name-only`; the changed files must match the task scope stated before editing.
- Confirm all required checks pass locally.
- If production assets or curriculum data changed, `npm run validate:production` must pass.
- If any check fails, if unrelated files are modified, or if another thread has pushed conflicting work, do not push. Fix, rebase, or ask the user first.
- If the self-check passes and the diff is safe, Codex may commit and push the task branch to GitHub without asking again.
- Standing user approval for this project: after a task is complete, self-checks pass, and the diff is safe, merge the task branch into `main` and push `main` so the user can see it from a phone on GitHub Pages.
- Do not stop at only pushing a task branch for normal completed work; the user cannot review branch-only work from the phone workflow.
- Do not merge to `main` if checks fail, if there are merge conflicts, if unrelated files are modified, if another thread pushed conflicting work, or if the user explicitly says not to merge. Fix/rebase first or ask.
- If Codex wants the user to review before merging, it must provide a phone-accessible preview URL. A local desktop-only URL such as `127.0.0.1` is not enough for phone review.

Minimum required checks:

```bash
npm run validate:curriculum
npm run validate:production
npm run lint
npm run build
```

Asset-writing commands that rewrite `src/curriculum/sample-lessons.json` must not run in parallel across threads. Run `assets:images`, `assets:audio`, and `assets:align` sequentially for one lesson at a time, and fetch/rebase before starting the next asset step if another thread has pushed curriculum changes.

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
- The gacha card uses one central stage: before drawing it shows a large gift; after drawing the same stage changes into the character result. Do not put the result below realm progress.
- Avoid the old separate spinning-orb presentation; the child should see the gift/character in the center of the card.
- The gacha page guide should say to press the red big button, not the gift button, because the gift is no longer inside the button.
- Realm progress is shown below the gacha machine. Each realm card opens that realm in the collection page.
- Realm cards must use child-readable icons for land, sea, sky, and space.
- The gacha result card opens the drawn character's personal collection panel.
- Entering `角色收藏` speaks a short guide.
- The collection page shows realm tabs first, then a tappable character list.
- The collection page has a small shortcut button back to gacha.
- All four realms can be opened. Locked realms show a locked message and unavailable characters, but the child can still see the area.
- Locked realm narration must name the unlock requirement, e.g. `海裡的生物還沒解鎖。地上的生物都收集完畢，才會解鎖。`
- The character list is grouped by species. Each species section shows the animal icon, animal name, collected count, and 9 family-role cards.
- Tapping an owned character switches into a dedicated character personal page, not an inserted panel above the long collection list.
- The character personal page must have a clear one-tap button back to the collection list and a shortcut to gacha.
- Character detail is treated as the character's personal page. Keep the character centered and keep interactions inside that page.
- Current character visuals use species icon plus family-role accessories and affection-based mood badges. Do not generate hundreds of final AI role images until the art style is approved.
- Realm selection, character selection, heart spending, and interaction opening all need sound feedback.
- When a character gains a heart, narration should announce the newly unlocked interaction rather than only reporting the heart count.
- When a character interaction is opened, narration must include the character name, e.g. `鹿姐姐說...`, because the child may not be able to read the text.

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
  - do not mark the lesson completed or write the reward until the claim animation finishes, otherwise the reward animation may disappear immediately
  - after reward, offer:
    - red button: next lesson
    - white button: back to course entrance

From around L011, add Stage 4 after the child completes picture-supported sentence listening. Do not replace Stage 3. Stage 4 uses fixed, reviewed sentence games stored in lesson data. Do not choose the game type randomly at runtime.

- 找字: the child taps a target character inside the sentence.
- 教角色念字: the sentence pauses conceptually on a target character; the character asks the child to help, and the child records the target word locally.
- 字寶寶不見了: one or more characters are blanked out and the child restores the correct character.
- 局部句子重排: for early lessons, blank only 2-4 Han characters and let the child return those pieces in order; do not ask preschool children to reorder the whole sentence.
- 誰念得對: the child chooses the correct prerecorded AI reading. Audio choices should be reviewed assets, not browser TTS.

Stage 4 planning rules:

- Each game has an explicit `targetChar`; it may be the current new character or a review character.
- A lesson should usually give the current new character at least three interactions, while allowing 1-2 review-focused games.
- If a sentence does not contain the current new character, do not force it to use the current new character as the target.
- Keep the game plan fixed in curriculum data so QA and phone testing are reproducible.
- Do not introduce these games too early. The child needs enough known characters first.
- Stage 4 is for children who may not read prompts yet. Each game must automatically speak a complete instruction when it becomes active.
- While Stage 4 guidance or feedback is speaking, the Stage 4 block must remain visibly active/glowing.
- Phone layout QA is required for every Stage 4 lesson. Long sentence rows must wrap inside the card; blank slots, zhuyin, and option buttons must not be clipped.

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

Production timing rule:

- After `npm run assets:audio -- --lesson L###`, run `npm run assets:align:ai -- --lesson L###` for final sentence highlighting.
- `assets:align:ai` transcribes the final `.m4a`, checks it against `spokenText`, and writes `charTimings`.
- Do not use the older `assets:align` as final production timing; it is only a rough energy-based fallback and can drift on connected speech and neutral-tone endings.
- Do not accept sentence audio where the last Han character is missing, swallowed, or clipped. This is especially important for final `的` and final nouns such as `手`.
- Before pushing a new lesson, manually play each Stage 3 sentence and check the last 2-4 highlighted characters against the heard audio.

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

### Image Budget And Reuse Rules

The full course will likely need 600 lessons and about 3,000-3,600 sentence pictures. Image generation is the largest asset cost, so do not treat images as disposable.

Rules:

- Generate one reviewed picture per approved sentence by default. Do not generate 5-6 candidate images for every sentence unless the user explicitly asks.
- Before generating a new image, check whether an existing approved image can be reused.
- Reuse an image when the scene is semantically the same and only the target phrase changes.
- Prefer editing or highlighting an existing scene over regenerating a new one when the lesson needs attention on one person/object.
- If two sentences intentionally share a scene, document that relationship in the lesson notes or `imagePrompt`.
- Generate replacement images only when the existing image is factually wrong, visually unclear, inconsistent with fixed characters, or too low quality.
- For batches, lock the visual direction with a small reviewed sample before generating many final assets.
- Common characters such as `我`, `你`, `他`, `爸爸`, `媽媽`, `弟弟`, and `妹妹` should be treated as recurring cast members once introduced. Do not redesign them in every image.
- When a recurring cast member appears, the image prompt must reference the approved visual description from `docs/CURRICULUM_LEDGER.md` or this SOP.

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

Future recurring family/cast characters:

- When `你`, `他`, `爸爸`, `媽媽`, `哥哥`, `姐姐`, `弟弟`, `妹妹`, or other recurring human roles are introduced, add an approved visual description to `docs/CURRICULUM_LEDGER.md`.
- Once added, every future image prompt involving that role must reuse the approved description.
- If a sentence includes several recurring characters, the prompt should name each one and preserve their established appearance.
- Do not let AI image generation invent a new father/mother/sibling design each time.
- The app should feel like it has a stable cast, not a new unrelated picture book on every sentence.

## Curriculum Rules

Before planning any new lesson:

1. Read `docs/CURRICULUM_LEDGER.md`.
2. Confirm all taught characters.
3. Confirm recent review pool from the previous 4-5 lessons.
4. Add only the current new character(s).
5. Draft sentences using only already taught characters plus current new character(s).
6. If the user proposes a sentence with a Han character that has not been taught and is not the current new character, stop and identify the unlearned character before generating assets or editing production curriculum.
7. Prefer natural Taiwan usage.
8. Prefer concrete, imageable sentences.
9. Avoid forced combinations that sound strange.
10. Check whether new sentences can reuse approved images or recurring cast members.
11. Decide if `displayLines` is needed for phone layout.
12. Do not generate final image/audio before parent/teacher approval.

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
- L008: `有`
- L009: `山`
- L010: `上`
- L011: `下`

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

L008 sentences:

- `有一個人`
- `我有小小的手`
- `大人有大大的手`
- `三個人有大手小手`
- `有一大二小的手`

L009 sentences:

- 有人有山
- 大大的山小小的山
- 我一個人的山
- 三個人的大手小手
- 我有小小的手

L010 sentences:

- 我一個人上山
- 山上有三個大人
- 我的手小小的
- 我的手上有一個小人
- 有大大的山，有小小的山

L011 sentences:

- 有三個人上山
- 有一個人下山
- 我的手下有三個小山
- 山下有一個大人
- 有一大二小的手

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
- `scripts/align-audio-timings-ai.mjs`: production AI transcription timing generation.
- `scripts/optimize-images.mjs`: image conversion/compression.
- `docs/CURRICULUM_LEDGER.md`: lesson history and character map.
- `docs/CURRICULUM_PRODUCTION_SOP.md`: production workflow.
- `docs/CURRICULUM_SCHEMA.md`: curriculum JSON shape.
- `docs/AI_GENERATION_SETUP.md`: local OpenAI API setup.

## Required Checks Before Push

Before committing and pushing, run the self-check gate above. At minimum, run:

```bash
npm run validate:curriculum
npm run validate:production
npm run lint
npm run build
git diff --stat
git diff --name-only
```

Only commit and push when the checks pass and the diff matches the current task scope. The user has given standing approval to merge completed, checked, safe work into `main` so it is visible on GitHub Pages from a phone. Use a task branch while working, then fast-forward or cleanly merge into `main`, push `main`, and verify the online URL.

Do not merge if checks fail, conflicts appear, unrelated files are present, or a newer `origin/main` needs inspection. In that case, rebase/fix first or report the blocker.

For pre-merge phone review, provide an actually phone-accessible URL. Options include a LAN dev server bound to `0.0.0.0` with the computer's LAN IP, or another deployed preview. If no such preview URL is provided, finish by merging to `main`.

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

Multiple Codex threads may be working on this repo. Before editing, run git fetch/status, confirm the current commit, and state which files or subsystem this thread owns.
The app is a Taiwan zhuyin character-recognition app for young children.
Do not use Hanyu pinyin.
Sentence text is horizontal, with zhuyin vertically on the right of each Han character.
Curriculum sentence audio must use AI audio files with charTimings.
Production charTimings must use npm run assets:align:ai, then manual playback review.
Guide narration may use TTS.
L001-L011 are reviewed and built.
L011 introduces 下 and uses production AI audio alignment.
L007 introduces a fixed young girl character for 我.
Sentence games should start around L011 as Stage 4, not before, and should not replace picture-supported sentence listening.
```
