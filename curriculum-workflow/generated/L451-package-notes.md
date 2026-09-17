# L451 台 Production D package

Status: dependency-blocked-asset-complete

Branch codex/l451-complete-package; claim 9d70a432. Base a5779c4bae03fa363689cc7ee4d6555b7dadeafb; official L438 習 / 442 learned. Full allowedChars 449 = official 442 + 機音拍歌唱舞 + 台. Text dependencies L442,L446,L447,L448,L449,L450; 機 is extra allowed vocabulary outside coverage. Ordered Release predecessors L439-L450.

Milestone blocker: L450 → R055 → R056 → L451. R055/R056 cover L421-L450 and were not written/merged at handoff. This blocks Release/main integration only, not parallel Production. No main merge performed.

- S01: style-lock PASS; cast PASS. Three distinct generic performers: one singer, two dancers; raised stage edge and audience visible.
- S02: style-lock PASS; cast PASS. Fixed girl below stage looking toward microphone with nervous anticipation; separate ponytail/glasses/teal teacher. Expression revised.
- S03: style-lock PASS; cast PASS. Fixed girl photographing fixed mother on safe plant-filled balcony; phone screen faces girl and rear camera points to mother. Direction revised.
- S04: style-lock PASS; cast PASS. Fixed girl listens to chirping sparrow on visible windowsill, distinct from balcony.
- S05: style-lock PASS; cast PASS. Fixed girl gestures near ear beside single running washer; mother attends; no physical contact with machine or damage.

Compared actual exported WebPs side by side with full L058 set, refined L115-S01/S02, L118-S02, L119-S01, L128-S03, family L154-S01/L162-S04/L163-S02. S02/S03 early drafts rejected for expression/phone direction and revised; rejected drafts not committed. Five 1024-square WebP files, each below 250KB, total assets 1265394 bytes. Built-in image_gen; exact prompt/source manifest in L451-image-prompts.json.

Ten final mono AAC 44100Hz M4A files; all decode, required peak/mean limits met. Standalone 1788ms. G05 mean-volume spread 0.2dB. Generated whole utterances independently using gpt-4o-mini-tts/coral and standard assets:audio conversion/safety gain. Verified near-silent non-character tails trimmed only beyond final -45dB decay, preserving 150ms. No syllable extraction, splicing, muting, or patching. Nine final exact-text alignments in L451-alignment.json; five sentence final tails <=300ms, ordered spans 80-900ms.

Standalone 台 regenerated after inconsistent onset recognition. Final TTS input is exactly 台, standard Taiwan-Mandarin instruction, speed 0.9. Whisper without expected transcript yields 台. Audio-model phonetic judgments still report cai2; both results and final SHA256 preserved in L451-phonetic-audio-review.json. This is NOT human pronunciation approval: keep standalone onset/tone listening as a subjective QA follow-up. S04 audio-model analysis reads 傳來 as ㄔㄨㄢˊ ㄌㄞˊ. G02 exact fragments 我在陽 and 幫媽媽拍照; homophone 洋 transcription resolved with vocabulary hint, approved Traditional text unchanged. Original MP3s remain ignored under curriculum-workflow/audio-inbox/L451/.

390x844 browser QA: Stage 1 final audio tap/complete; Stage 2 three targets accepted; Stage 3 all five played with active highlights/line layouts; G01/G03/G04 correct interactions; G05 three readers and correct green feedback; reward completion and return-home inspected. G02 prefix reached red 台, then UI skip. Browser API cannot sustain pointer hold: recording/stitched replay remain untested. Human listening/syllable synchronization not claimed. Preview stopped, agent tab closed, viewport reset, shared curriculum/scripts restored.

Startup tools:check, ai:check, curriculum:audit-state PASS. Lesson-local validate:production PASS; strict asset audit, full baseline validator and pushed-ref intake checkpoints follow below. verify skipped: dependency-blocked, shared state left for Release.

Post-merge review queue (usable after Release merges/deploys): https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main ; https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L451&ref=main . Query: npm run asset:review-status -- --unit L451 --ref main

Final validation: lesson-local validate:production PASS; full baseline validate:production PASS; strict lesson-local assets audit PASS, zero warnings; curriculum:audit-state PASS (expected unmerged L451 directory notice only). Shared production curriculum/planner/ledger unchanged.

Pushed asset checkpoint bcb9acecbcea331f5ce2d087bdc0eda33520016c at origin/codex/l451-complete-package: strict curriculum:package-intake PASS, zero warnings. Final documentation successor rechecked after push.
