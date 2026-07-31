# 認字練功房 Product Spec

## Product Direction

認字練功房 is a curriculum-based app for young children learning to recognize Chinese characters from zero. The product keeps the spirit of progressive character learning, but all curriculum order, sentences, interaction design, and assets are original.

## Core Learning Loop

1. A child opens the next locked lesson.
2. Block 1 introduces the lesson's new character or seed characters. Each character is shown alone, large, with zhuyin. Tapping it plays the character sound; the block clears when all new characters have been heard.
3. Block 2 asks the child to find the lesson's new character(s) among several character tiles. Correct taps light up and play the character sound.
4. Block 3 always uses reviewed lesson sentences with picture-supported listening and character highlighting.
5. From around lesson 11, Block 4 adds sentence games after picture-supported listening.
6. Completing all required blocks unlocks the next lesson.
7. Completed lessons enter manual and random review.

## Hard UX Requirements

- Sentence text is horizontal from left to right.
- Zhuyin is placed vertically on the right side of each Han character.
- Zhuyin layout has three visual columns: Han character on the left, zhuyin symbols in the middle, tone mark on the right.
- Neutral tone uses a small dot above the zhuyin symbols.
- Sentence practice must not use vertical columns.
- Main curriculum reading must use pre-recorded audio files with character timings.
- Live TTS is allowed only for non-curriculum utility narration or temporary development fallback.
- Punctuation must not be read aloud by default.
- The app should feel like play, not a quiz worksheet.
- Every curriculum sentence must be parent/teacher reviewed before shipping. AI-generated sentences are drafts only.

## Curriculum Navigation

- The full curriculum target is 600 characters.
- Do not display all 600 characters as one flat list.
- The catalog is divided into six color blocks, 100 characters each: red, orange, yellow, green, blue, purple.
- Each color block opens its own character grid.
- Multi-character seed lessons still display as separate character cards. For example, lesson 1 has separate cards for `一`, `二`, `三`, and `人`, and each card is labeled 第 1 課.
- Locked characters are visible as locked items but cannot be opened.
- Completed or currently unlocked characters can be opened from the catalog for review.
- The catalog must support search by character and lesson number.
- The main lesson screen should only show a compact nearby-course shortcut list, primarily the current lesson and previously unlocked lessons.

## App Shell

- The app uses a shared top header similar to the existing Chinese practice room app.
- The header shows the app name plus quick reward/status pills: coins, stars, and streak days.
- The header menu button opens a left drawer.
- Drawer pages:
  - 練習課文: daily lesson practice and current unlock path.
  - 漢字總覽: full rainbow 600-character catalog and search.
  - 學習記錄: progress, rewards, review history, and weak characters.
  - 轉蛋: reward draw page.
  - 角色收藏: collected character page.
  - 設定: account, audio, and data settings.
- Pages are separate sections. Do not force every feature into one long page.
- Every top-level page should speak a short child-facing guide when entered.
- Page guidance may use browser TTS; lesson character and sentence audio should use prepared AI audio.

## Reward Collection

The app has a character collection system connected to lesson completion.

- A first-time lesson completion grants 30 coins and 12 stars.
- Gacha draws cost 10 coins each, so one completed lesson can fund 3 draws.
- If five consecutive gacha draws are duplicates and the current realm still has missing characters, the next draw must be a new character.
- Stars are used to raise collected character affection.
- Spending 3 stars adds 1 heart to one owned character.
- Each character can have up to 10 affection hearts.
- Character interactions unlock by hearts: 1 heart is 打招呼, 2 hearts is 聊聊天, and later hearts unlock additional deterministic role-specific activities.
- Interaction text should follow the existing Justin app pattern: deterministic per character, varied across characters, and seen interactions should not keep sparkling after they are opened.
- Replaying an already completed lesson does not grant another reward.
- The collection is split into four realms: 地上的生物, 海裡的生物, 天上的生物, 外太空的生物.
- Realms unlock in order from land to sea to sky to space.
- Each realm has 15 species.
- Each species has 9 family roles: 爺爺, 奶奶, 爸爸, 媽媽, 哥哥, 姐姐, 弟弟, 妹妹, 寶寶.
- Current planned total is 540 collectible characters.
- The gacha page puts the gift-style draw button near the top, with realm collection progress below it.
- The realm progress blocks on the gacha page are clickable and open the matching realm in the collection page.
- A gacha result card is clickable and opens that character's personal collection panel.
- The collection page shows realm blocks first and a tappable character list below. A character detail panel opens only after the child taps an owned character.
- The character list is grouped by species, with each species showing 9 family-role cards.
- Collection actions should provide sound feedback: page entry, realm selection, character selection, adding hearts, and opening interactions.

Final character images should not be generated all at once. First test one complete 9-role species family, approve the art direction, then generate assets in reviewed batches.

## Lesson Structure

Each lesson has:

- `newChars`: the new character or seed characters being unlocked.
- `zhuyin`: Taiwan zhuyin only. No Hanyu pinyin in the main product.
- `sentences`: reviewed practice strings that use only previously learned characters plus the lesson new character(s).
- `requiredRounds`: how many sentence game rounds are needed to complete block 3.
- optional `originHint`: pictograph or etymology aid, displayed only when available and safely licensed.

For the first ten lessons, there may not be enough characters to support real sentence games. Those lessons should use picture-supported sentence preview first. Sentence games are currently planned to start around lesson 11 as a fourth stage after picture-supported listening, not as a replacement for picture-supported listening.

The first lesson can be a seed lesson. Current seed draft:

- Lesson 1 introduces `一`, `二`, `三`, `人`.
- Lesson 1 sentences: `人`, `一人`, `二人`, `三人`.
- Lesson 2 introduces `個`: `人`, `一個人`, `三個人`.
- Lesson 3 introduces `大`: `人`, `一個人`, `一個大人`, `三個大人`.

## Game Modes

The old app's five core interaction types remain the starting point:

- Find the character in a sentence.
- Teach an animal to read a missing character.
- Drag the missing character into a blank.
- Rebuild the sentence from character chips.
- Choose which animal read the sentence correctly.

## Audio Model

Production curriculum sentences use:

- `lesson.charAudio`: pre-recorded AI audio for each newly introduced character.
- `text`: display text.
- `spokenText`: what the recorded voice actually reads.
- `audio.src`: pre-recorded AI audio URL.
- `audio.charTimings`: character-level start/end timings.

The app highlights by comparing audio `currentTime` with `charTimings`; it does not synthesize one character at a time.

## Curriculum Production Pipeline

- Create each new lesson through a request file under `curriculum-workflow/lesson-requests/`.
- Run `npm run curriculum:packet` to generate the AI work packet.
- AI sentence generation must receive the already-learned character boundary from the packet.
- AI sentence output is draft-only and must be reviewed before entering curriculum.
- Approved sentences then receive image prompts, final image assets, full-sentence audio, and character timing metadata.
- Final assets live under `public/assets/lessons/L###/images/` and `public/assets/lessons/L###/audio/`.
- Production curriculum should not depend on live TTS for core sentence reading.

## MVP Scope

The first working prototype should include:

- 10 sample lessons.
- Horizontal sentence card with right-side zhuyin.
- Lesson unlock state.
- New character showcase.
- One playable sentence interaction.
- Curriculum validation script.
- Audio timing data shape, with temporary simulated playback until real audio assets exist.
