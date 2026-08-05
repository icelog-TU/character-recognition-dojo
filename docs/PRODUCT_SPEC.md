# 認字練功房 Product Spec

## Product Direction

認字練功房 is a curriculum-based app for young children learning to recognize Chinese characters from zero. The product keeps the spirit of progressive character learning, but all curriculum order, sentences, interaction design, and assets are original.

## Core Learning Loop

1. A child opens the next locked lesson.
2. Block 1 introduces the lesson's new character or seed characters. Each character is shown alone, large, with zhuyin. Tapping it plays the character sound; the block clears when all new characters have been heard.
3. Block 2 asks the child to find the lesson's new character(s) among several character tiles. Correct taps light up and play the character sound.
4. Block 3 always uses reviewed lesson sentences with picture-supported listening and character highlighting.
5. Current production lessons add Block 4 from L006 onward, after picture-supported listening.
6. Completing all required blocks unlocks the next lesson.
7. Completed lessons enter manual and random review.
8. Starting after L060, every 30-lesson milestone reserves two 5-sentence review modules for the older 30-lesson block. Review modules do not occupy `L###` lesson numbers.

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

- A first-time lesson or review-module completion grants 30 coins and 12 stars.
- Gacha draws cost 10 coins each, so one completed lesson or review module can fund 3 draws.
- If five consecutive gacha draws are duplicates and the current realm still has missing characters, the next draw must be a new character.
- Stars are used to raise collected character affection.
- Spending 3 stars adds 1 heart to one owned character.
- Each character can have up to 10 affection hearts.
- Character interactions unlock by hearts: 1 heart is 打招呼, 2 hearts is 聊聊天, and later hearts unlock additional deterministic role-specific activities.
- Interaction text should follow the existing Justin app pattern: deterministic per character, varied across characters, and seen interactions should not keep sparkling after they are opened.
- Replaying an already completed lesson or review module does not grant another reward.
- The collection is split into four realms: 地上的生物, 海裡的生物, 天上的生物, 外太空的生物.
- Realms unlock in order from land to sea to sky to space.
- Each realm has 15 species.
- Each species has 9 family roles: 爺爺, 奶奶, 爸爸, 媽媽, 哥哥, 姐姐, 弟弟, 妹妹, 寶寶.
- Current planned total is 540 collectible characters.
- The gacha page puts the gift-style draw button near the top, with realm collection progress below it.
- The realm progress blocks on the gacha page are clickable and open the matching realm in the collection page.
- A gacha result card is clickable and opens that character's personal collection panel.
- The gacha card uses one central stage: before drawing it shows a large gift; after drawing the same stage changes into the character result.
- The latest gacha result must stay near the draw button, not below realm progress.
- The gacha page guide should tell the child to press the red big button.
- The collection page shows realm blocks first and a tappable character list below. Tapping an owned character switches into a dedicated character personal page.
- The character personal page must include a one-tap return button back to the collection list.
- The character list is grouped by species, with each species showing 9 family-role cards.
- The collection page should include a small shortcut button back to gacha.
- Character avatars must show role differences. The prototype uses symbolic accessories plus affection mood badges; final AI art can replace them after art direction is approved.
- Collection actions should provide sound feedback: page entry, realm selection, character selection, adding hearts, and opening interactions.
- Locked realm narration should explain the prerequisite realm.
- Heart narration should announce the newly unlocked interaction.
- Interaction narration should include the character name before the line.

Final character images should not be generated all at once. First test one complete 9-role species family, approve the art direction, then generate assets in reviewed batches.

## Lesson Structure

Each lesson has:

- `newChars`: the new character or seed characters being unlocked.
- `zhuyin`: Taiwan zhuyin only. No Hanyu pinyin in the main product.
- `sentences`: reviewed practice strings that use only previously learned characters plus the lesson new character(s).
- `requiredRounds`: how many Stage 4 sentence game rounds are needed when `sentenceGames` is present.
- optional `originHint`: internal curriculum metadata for planning/handoff. Do not display it in the child-facing lesson practice UI unless a separate reviewed child-safe design is explicitly built.

L001-L005 use picture-supported sentence listening without Stage 4. Current production lessons L006 and later include Stage 4 sentence games after picture-supported listening, not as a replacement for picture-supported listening.

## Review Module Rhythm

The curriculum adds two review modules after every 30-lesson milestone starting after L060. These are separate review units, not numbered lessons.

- After L060: R001/R002 cover all new characters from L001-L030. The playable path is `L060` -> `R001` -> `R002` -> `L061`; the next new-character lesson id is still L061.
- After L090: R003/R004 cover all new characters from L031-L060. The next new-character lesson is L091.
- After L120: R005/R006 cover all new characters from L061-L090.
- Production-ready review modules must render as playable square cards in the same course-card grid as numbered lessons. Future review slots that are not built yet must not appear as playable or reservation cards on the practice home.
- The `漢字總覽` page has a separate permanent `複習區` after the six color groups. It reserves `R001` through `R040`; shipped and unlocked review modules are clickable there, while future modules appear only as non-playable placeholders.
- Review modules must grant the same one-time reward as lessons, and their `下一課` button must advance to the next review module or numbered lesson in the playable path.
- Continue the same pattern.

Each review pair has 10 sentences total, and every character introduced in the target 30-lesson range must appear at least once across those 10 sentences.

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

Character-card `lesson.charAudio` must be standalone OpenAI TTS generated from the single target character. It must not be cut, trimmed, sliced, copied, or extracted from sentence audio.

The app highlights by comparing audio `currentTime` with `charTimings`; it does not synthesize one character at a time.

## Curriculum Production Pipeline

- Create each new lesson through a request file under `curriculum-workflow/lesson-requests/`.
- For parallel lesson preparation, register not-yet-merged work in `docs/PARALLEL_LESSON_REGISTRY.md`; merge finished lessons into `main` only in lesson order.
- Run `npm run curriculum:packet` to generate the AI work packet.
- AI sentence generation must receive the already-learned character boundary from the packet.
- AI sentence output is draft-only and must be reviewed before entering curriculum.
- Approved sentences then receive image prompts, final image assets, full-sentence audio, and character timing metadata.
- Final assets live under `public/assets/lessons/L###/images/` and `public/assets/lessons/L###/audio/`.
- Production curriculum should not depend on live TTS for core sentence reading.

## Cloud Device Access

Cloud sync is device-scoped and parent-managed. Free browsing all lessons is not a general user setting.

- Production account mode stores learning profiles under `accounts/{uid}/profiles/{profileId}` and device metadata under `accounts/{uid}/devices/{deviceId}`.
- The parent signs in with an account, and the app generates a stable device ID for each browser/device.
- A family account always exposes up to three active learning profiles. The default labels are `學習檔案一`, `學習檔案二`, and `學習檔案三`; users may rename those profile labels to names such as `媽媽`, `哥哥`, or `妹妹`.
- Progress belongs to profiles, not devices. Devices remember `activeProfileId`.
- Two devices can share the same profile to sync the same progress, while sibling profiles stay separate.
- The app header must show the current account/profile entry. Tapping it opens an account menu: first the currently signed-in Google account, then the three learning profiles, with direct profile switching and a link into Settings for renaming profiles.
- A parent device may switch between child profiles. If a profile is selected on multiple devices, those devices sync the same profile progress.
- A family account may have at most three active devices.
- Device naming is not part of the normal user workflow. Devices are tracked by generated system device IDs only.
- Only teacher/parent devices explicitly approved in Firestore may freely browse all lessons.
- Child or ordinary devices must follow the normal lesson unlock path, even when cloud sync is enabled.
- The app must not expose a local checkbox, query parameter, or localStorage flag that lets any user turn on free browsing.
- Firestore account-device records may include `freeBrowse: true` only for approved teacher devices such as the teacher phone and tablet.
- Settings must not show free-browse/general-mode labels to normal users. This authorization is internal device policy.
- Settings must not show a legacy/manual device-code field or editable device-name field. Normal users should only see account sign-in, profile selection/renaming, and the system-generated device ID for support/admin diagnosis.
- Before paid public release, enforce the three-device limit with a trusted backend such as Cloud Functions; app-side checks are not sufficient payment-grade enforcement.
- Before paid public release, enforce the three-profile limit with the same trusted backend; app-side checks are not sufficient payment-grade enforcement.

See `docs/FIREBASE_ACCOUNT_DEVICE_SETUP.md` for Firebase Console setup, data paths, and rule templates.

## Lesson Session Resume

- A lesson that is already unlocked must expose direct entrance buttons for every stage available in that lesson.
- Internal stage order is guidance for first-time play, not a hard gate for review or teacher use.
- When an already completed lesson is reopened from a stage entrance, that selected stage must restart from the beginning of that stage, not from its previously completed end prompt.
- The app must remember per-lesson in-progress state locally and in cloud sync under `lessonSessions`, including the active stage, completed Stage 1/2 flags, Stage 3 sentence position, and Stage 4 completed round count.
- Returning from another browser tab/window should restore the child to the same lesson stage instead of restarting the lesson at Stage 1.

## MVP Scope

The first working prototype should include:

- 10 sample lessons.
- Horizontal sentence card with right-side zhuyin.
- Lesson unlock state.
- New character showcase.
- One playable sentence interaction.
- Curriculum validation script.
- Audio timing data shape, with temporary simulated playback until real audio assets exist.
