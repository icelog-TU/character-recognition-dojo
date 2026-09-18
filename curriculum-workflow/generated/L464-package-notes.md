# L464 待 Production D package

Status: dependency-blocked-asset-complete

Branch codex/l464-complete-package; claim 1910b4d2. Base c130f105f1808588cb22f237519234527643b8fe; latest formal L461 文, 465 learned, R056. Latest full allowedChars = 468 (465 + 日期 + 待). Original handoff L446/450 + 中午文日期 + 待 = 456 also fully preserved and audited; no approved sentence/option changed. 招善昨 are absent from student text/options.

Assigned dependencies L459-L463 retained; L459 中/L460 午/L461 文 already merged. Effective provisional 日期 and pending Release dependencies L462/L463. R055/R056 now merged. No main integration or shared curriculum/planner/ledger change.

## Image review

- S01 style-lock PASS, cast PASS. Fixed girl and father at home before departure; thought bubble revised to spectator view of generic adult baseball players.
- S02 style-lock PASS, cast PASS. Fixed girl and mother prepare decorations; unopened supplies and loose streamers; imagined cake has no candles, text or age clues.
- S03 style-lock PASS, cast PASS. Generic male teacher with wavy graying hair/glasses/brown cardigan clearly distinct from father; welcomes two adult friends at home.
- S04 style-lock PASS, cast PASS. Generic customer groups queue for restaurant seating; diners inside; no cashier/takeout cues.
- S05 style-lock PASS, cast PASS. Generic braided mint-shirt girl writes toward protagonist, who appears only in their photo; paper content unreadable.

Actual exported WebPs compared side by side with full L058 style-only set, refined L115-S01/S02,L118-S02,L119-S01,L128-S03, and family L154-S01/L162-S04/L163-S02. S01 initial thought bubble rejected because it showed girl playing; revised to watching adult players. Rejected image draft not committed. Built-in image_gen; prompt/revision/source manifest in L464-image-prompts.json. Five square 1024 WebPs, each below 250KB; total lesson assets 1399158 bytes.

## Audio/timings

Ten final M4As, mono AAC 44100Hz; all decode and pass volume gates. G05 relative mean-volume spread 1dB. Standalone 待 998ms. Nine exact-text final-file AI alignments. All sentence spans 80–900ms and tails <=300ms. S04 客 corrected by exact-text AI realignment, 800–1180ms. S01 regenerated whole sentence with exact input and full Taiwan pinyin instruction; final auditory model reports both 期 qi2 and 待 dai4. S02 rising qi contour and auditory analysis support qi2; exact Whisper transcription is 生日快到了我好期待. Separate audio-model lexical output hallucinated a different opening; raw model output retained, not treated as authoritative transcription or human approval. Exact G02 日文老師在他家接 / 朋友 generated independently; G05 two wrong sentences generated whole, O1 references S05. No extraction/splicing. Raw MP3s remain ignored locally. See L464-audio-generation.json and L464-phonetic-audio-review.json.

## Browser QA — phone playback

390x844 browser check: Stage 1 target/zhuyin/audio; Stage 2 all 3 targets accepted; Stage 3 all 5 cards played and active highlights/functional line layouts inspected; G01/G03/G04 completed; G05 all three controls, wrong red/correct green feedback, reward and final return-home controls inspected. G02 reached red 待 after prefix, then UI skip: browser API lacks sustained pointer hold. Recording/stitched replay untested under SOP browser fallback. Human listening and ear-verified syllable synchronization not claimed. Full canonical isolated lesson retained all five original games; old-character zhuyin outside this fixture awaits Release integration. Preview stopped, temporary tab closed, viewport reset, shared files restored.

Startup tools:check, ai:check, curriculum:audit-state PASS. Approved data, coverage and game-index audits PASS. Lesson-local validate:production PASS. verify skipped: dependency-blocked, shared state left for Release. Pushed-ref strict intake recorded in final handoff.

Post-merge review queue, usable after Release merge/deploy: https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main ; https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L464&ref=main . Command: npm run asset:review-status -- --unit L464 --ref main

## Pushed package checkpoint

Asset commit 3f783f39c800dfca5698724f4fa28939f6d44e6d pushed to origin/codex/l464-complete-package. Remote package-intake PASS. Browser QA evidence heading normalized for intake detection. Full baseline validate:production PASS; lesson-local strict asset audit PASS with zero warnings.
