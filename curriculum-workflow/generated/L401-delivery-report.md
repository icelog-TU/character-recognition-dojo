# L401 勇 — Production E delivery

Status: dependency-blocked-asset-complete

## Boundary / ownership

Teacher assigned E, skipping busy D. Source origin/main 23cae19103e760f23700f5ff90d72fbd2e59bfc6: L001–L390, latest 數, 394 learned characters. Delivery fetch still has same main. AllowedChars 400, provisional 單 雙 選 或 者; direct dependencies L396, L397, L398, L399, L400. Release sequence awaits L391, L392, L393, L394, L395, L396, L397, L398, L399, L400, R047, R048. No additional provisional characters. Shared production JSON, planner, ledger and scripts remain byte-for-byte unchanged. Release owns ordered integration, final verify, main push and deployment.

## Package assets and checks

Five 1024-square WebP images, ten normalized AAC M4A audio files, all sentence and Stage 4 timing metadata. Total 1189294 bytes. Images under250KiB each. All referenced files decode; AAC44100 Hz mono; volume checks PASS; G05 mean spread 0.4 dB. Standalone 勇 audio1834ms, original onset and tail retained, generated independently from 勇 (ㄩㄥˇ).

Coverage {"勇":4,"者":3,"或":2,"選":2,"雙":1,"單":1} PASS. Han11/10/10/10/8. Allowed-character sweep, spokenText, displayLines and canonical Stage4 indices PASS. G04 target者 index2; missing[3,4,5,6] is 或者怪物, with 者 index4. Both G05 wrong sentences generated whole, same10 Han and2/1 substitutions. Dedicated G02 segments exactly 第一次上學要 / 勇 / 敢一點.

Production-assets validator and strict asset-format audit on lesson-local draft PASS with0warnings. Base production validation PASS. Final AI alignment reviewed for counts, durations and monotonic spans; S01打 and S05勇 short AI spans corrected using measured20ms RMS onset/trough evidence. Last syllable ends aligned to decay, trailing silence retained. Full verify skipped: dependency-blocked, shared state left for Release.

## Audio regeneration / evidence

G02 suffix short-fragment candidates were rejected and regenerated. Final dedicated prefix and suffix use tts-1-hd/nova, with full onset preserved; other audio uses gpt-4o-mini-tts/coral. The generic leading-silence processor changed recognition of the short suffix, so G02 processing uses loudness normalization without onset removal. Raw and final suffix independently transcribe as 敢一點 using gpt-4o-transcribe without text hints. Final prefix independently matches 第一次上學要. Whisper alone confused the contextless suffix; after independent text verification, exact fragment context was supplied solely for its word timestamps. All other sentence/wrong-option transcripts match approved text after traditional-character normalization. No non-equivalent transcription replacement was used.

Isolated 勇 single-syllable transcription returned Korean yong despite a Chinese hint; this is not claimed as tone/character verification. Voice generation used the approved character/zhuyin. Actual listening, third-tone quality and G02 transition naturalness remain within the browser QA scope limitation below; no subjective PASS claimed.

## Image review

Final exported WebPs compared side by side with complete L058-S01–S05 style anchors; refined L115-S01/S02, L118-S02, L119-S01, L128-S03; family L154-S01, L162-S04, L163-S02; teacher L374-S04. Fine textured illustration, warm light, modeled faces and stable role identities preserved. Built-in imagegen used for generation and S01 correction. Exact original and correction prompts are in the packet/draft. No readable image text or numbers permitted.

- S01 style-lock PASS, cast PASS: distinct story hero/villagers, defeated harmless monster behind, walking home. Initial image mixed in protagonist girl; rejected and corrected before export. Rejected PNG excluded from package.
- S02 style-lock PASS, cast PASS: fixed ponytail teacher and girl, two empty costumes, no real monster; girl wears neither costume.
- S03 style-lock PASS, cast PASS: generic curly-haired toddler, braided mother and distinct kindergarten teacher; gentle handholding, no pulling.
- S04 style-lock PASS, cast PASS: father/mother/girl and distinct male clerk; large side-by-side single-bed/one-pillow and double-bed/two-pillow room photographs.
- S05 style-lock PASS, cast PASS: girl points to spilled paint on mothers painting; mother calmly listens with cloth; no shaming or danger.

## Browser QA — tooling fallback

Five sentence cards and six auxiliary players loaded. Clicking G02 suffix Play lost the inspected target. Subsequent inspection confirmed the built-in This page crashed page; access to that data URL was blocked. URL: http://localhost:5201/tools/lesson-asset-review.html?unit=L401&ref=local. Actual listening, pronunciation by ear, highlight synchronization, first-tap playback across all readers, phone recording, stitched replay and natural G02 transition were not verified. Technical gates above passed; apply docs/CURRICULUM_PRODUCTION_SOP.md “Browser automation fallback for pre-merge playback QA”. Teacher subjective review remains post-merge by default; no teacher pre-merge PASS claimed.

Asset omissions: none. Release dependencies and browser scope limitations are listed above.
