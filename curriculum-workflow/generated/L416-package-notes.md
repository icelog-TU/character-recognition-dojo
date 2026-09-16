# L416 果 — Production D package
Package status: asset-complete-package
Release status: dependency-blocked-asset-complete

## Boundary and data
Latest checked origin/main: 4869fc1a; production L001–L408, 412 learned Han. R049/R050 after405 merged.
Learner dependencies L411/L412/L413/L414/L415 and provisional 定/成/功/決/解 remain unmerged.
Release must preserve all preceding playable lessons including L409/L410. No shared production JSON, planner or ledger changes.
Locked 418 allowed Han retained. Request, generation packet, draft and approved baseline agree.
Coverage PASS: 果3 解2 決2 功2 成1 定2. Han counts 10/11/12/12/10.
Display lines, exact spokenText, allowed characters, five distinct sentence/game mappings and all zero-based Han indexes PASS.
G03 has three different single-Han options with one correct answer. G04 cards are 一/起/用/功.
S03 index9 長 override ㄓㄤˇ retained.

## Images and reuse
Existing assets were searched for exact scene reuse. Older swimming scenes show preparation, different actors or post-swim drying; they cannot represent this girl's completed arrival with father beside her in water.
Fruit gift opening, mother's own fruit meal and same-species orchard explanation have no accurate reusable asset in the checked curriculum. S04 requires the approved girl/Xiaoguang study discussion.
All five generated anew with L058 style-only contact sheet, refined examples and family/cast anchors. Xiaoguang identity uses its dedicated reference; teacher also uses L372-S02.
Final WebPs opened side-by-side with L058/family references; comparison JPEGs retained. No rejected image candidates or discarded image versions committed.
- S01 style-lock PASS, cast PASS: mother fruit-only plate; girl retains rice/vegetable meal.
- S02 style-lock PASS, cast PASS: loose ribbon, open lid held by mother, girl removing fruit.
- S03 style-lock PASS, cast PASS: same-species small green / large red apples, teacher distinct from mother.
- S04 style-lock PASS, cast PASS: Xiaoguang round glasses/navy vest, separate books and discussion.
- S05 style-lock PASS, cast PASS: both hands on pool edge; father in water directly beside girl.
Five 1024×1024 WebPs total 869446 bytes; largest 219000 bytes. No readable-text/number exception used.

## Audio and timings
Nine processed mono AAC M4A, 44100 Hz, total 421571 bytes. All ffmpeg-decode successfully.
Standalone 果 generated from exactly 果 using OpenAI TTS; no sentence extraction. Several candidates were rejected by independent AI listening; final coral candidate independently transcribed 果 / guǒ, complete single syllable. Discarded audio versions not committed.
S01–S05 exact spokenText; G02 exact prefix 解開帶子拿出盒裡的水, complete final 水, no 果, no suffix asset or reference.
G05 wrong options generated as whole sentences. An awkward earlier wrong-one candidate regenerated.
S03 長 independently heard zhang3. Every final sentence/option final syllable independently judged complete.
Independent gpt-audio-1.5 listening is model evidence, not human manual listening. Final file hashes match listening-evidence JSON.
Standard assets:audio and assets:align:ai scripts run through lesson-local in-memory adapter; production JSON never modified.
Sentence/game timing metadata supplied from final processed audio alignment. Only final silence shortened, preserving final syllable decay.
Verified inter-clause pauses were excluded from 成 highlight onset. Final syllable endpoints do not extend through silent tail.
G05 mean loudness spread 0.9 dB. Technical timing/volume report has zero issues.

## Browser QA and limitations
Local QA fixture injects draft/provisional zhuyin in memory only. Chrome localhost:5180, viewport390×844.
Stage1 first character tap enters playback; Stage2 shows 3 果 plus 3 distractors and progresses 1/3,2/3,3/3 only after all targets.
Stage3 all five first-click playbacks entered playing state and returned idle; visible character highlighting and phone layout inspected. S03 長 displays ㄓㄤˇ.
G01 correct target accepted. G02 prefix playback reaches waiting-for-recording state at final 果.
A normal click on 果 does not start the required sustained hold. Available browser API has no supported held pointer-down/up recording sequence. G02 was skipped via visible UI to inspect later games.
G02 live microphone recording and concatenated replay were not completed; no human real-time audio/highlight synchronization claim. This is browser capability fallback under Production SOP; technical gates remain mandatory and pass.
G03 three-choice 果/種/葉 visible and correct accepted. G04 一起用功 completed. G05 all three avatar audios enter playback and return idle.
Console captured three repeated asynchronous listener/message-channel-closed errors at initial page setup; later playback still worked. No inference that these establish an asset error.
Teacher subjective image/audio review remains post-merge. No pre-merge teacher approval requested or claimed.

## Validation
Startup tools:check, ai:check, curriculum:audit-state PASS.
curriculum:packet ran from approved request; final packet synchronized with fully populated draft.
Lesson-local validate-production-assets and audit-asset-formats scripts PASS (1 unit,5 images,9 audio references,0 warnings).
L416-audit.cjs PASS: allowed418, coverage, approved text/imageNotes, displayLines, target/missing/card indexes, request/draft consistency, final listening hashes.
Global npm run validate:production PASS (baseline only; does not substitute for L416 local validation).
Global npm run assets:audit PASS: 458 units, 2249 image references, 4448 audio references, zero warnings. Raw MP3 sources remain in ignored audio-inbox/L416 per AI setup SOP; final processed audio is committed.
Shared-state npm run verify intentionally skipped: dependency-blocked package has no shipping L416 integration; Release owns integration/verify.
Remote package-intake is the final handoff gate after commit/push; report exact result and immutable SHA externally.

## Review links
Pre-merge package preview, not final main review queue:
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L416&ref=<full-pushed-commit-sha>
Usable after Release merges and deploys:
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L416&ref=main
https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main
Post-merge status: npm run asset:review-status -- --unit L416 --ref main
