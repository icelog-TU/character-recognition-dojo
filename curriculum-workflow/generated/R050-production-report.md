# R050 Production E delivery

## Production evidence

Status: dependency-blocked-asset-complete.

Pair R049/R050 covers all 30 required characters from L376-L405. Allowed set is exactly 409 characters, capped at L405. Review modules define no top-level newChars, zhuyin or charAudio. Five fixed-order Stage 4 games use each sentence once.

Package base: 09ad28d766640bbbb1b2c1f8d3cb2ccb43efc306. Latest main checked: b4d20e1efd4c4c215e82aed5ff5bfa5267eef1f7 (L403); remaining Release dependencies: L404, L405. Original declared dependency provenance is retained. Playable sequence: L405, R049, R050, L406.

### Visual acceptance

Actual exported 1024-square WebPs were viewed side by side with the full L058 sheet, refined L115-S01/S02, L118-S02, L119-S01, L128-S03 examples, family L154-S01/L162-S04/L163-S02 anchors and teacher L374-S04 where relevant. L058 supplies style only. R050-S05 initial draft was rejected because a background vendor duplicated the fixed teacher identity; it was replaced before export. The rejected draft remains outside shipping assets and was not committed. Other images were accepted after final export review.

R050-S01 style-lock PASS, cast PASS. Turned page; normal single 8 at lower-right corner; father points.

R050-S02 style-lock PASS, cast PASS. Father is sole family customer; distinct clerk; single bed/one pillow and double bed/two pillows.

R050-S03 style-lock PASS, cast PASS. Story hero recoils from tiny insect beside moved boulder; no modern family or injury.

R050-S04 style-lock PASS, cast PASS. One dog runs ahead of girl across safe lawn; father watches.

R050-S05 style-lock PASS, cast PASS. Exactly two prices 20 and 30; exactly three separated teaching coins each 10; no answer.

Numeric exceptions: R050-S01 only page 8; R050-S05 only price labels 20 and 30 plus exactly three 10 coins. R049-S04 has blank form lines; R049-S05 hides inner text and has blank covers. No additional lettering exception.

### Audio and timing evidence

Five sentence clips, two dedicated exact G02 fragments and two complete G05 distractor clips per module; correct G05 reuses S05. Final AAC M4A files are mono 44.1kHz and all decode. Natural Taiwan Mandarin requested using gpt-4o-mini-tts, coral, speed 0.9. Transcript content comparison and all Han timing counts PASS. 行 is configured ㄏㄤˊ and counting 數 ㄕㄨˇ in R049-S05; TTS prompts include these readings and 傳 ㄔㄨㄢˊ / 算 ㄙㄨㄢˋ.

R049-S02 and R050-S05 were regenerated before acceptance. Leading speech is retained; trailing silence is about 200ms after measured final-syllable decay. Whisper alignment anomalies were adjusted using RMS/onset evidence recorded in timing-review.json. Independent unprompted gpt-4o-transcribe matched R050-S05 and R050-G02-prefix before those two clips used text-context Whisper alignment. Transcription does not certify subjective pronunciation quality.

### Browser QA

R049 local review UI loaded 5 sentence cards and 5 extra audio controls. The first Play click caused the Codex in-app browser to crash; next inspection identified “This page crashed”. R050 playback was not retried through the same broken surface. Per SOP tooling fallback, subjective continuous listening, highlight playback and phone recording/replay remain skipped. No teacher listening PASS is claimed. All non-browser package gates passed: required assets, AAC decode, final WebP inspection, transcript comparison, timing metadata, allowed-character audit, Stage 4 index/cards and local validators.

### Validation

- Pair coverage and allowed-character audit: PASS.
- Package-local validate-production-assets: PASS.
- Package-local audit-asset-formats --strict: PASS, zero warnings.
- Base npm run validate:production: PASS.
- G05 option mean-volume spread: 1.3 dB.
- Module shipping size: 1386048 bytes.
- No missing package assets or timing files.

Release owns production JSON, planner, ledger, final integrated verify, main push and deployment.

## Pushed intake evidence

Checked immutable asset commit: 5bd9a1b4061493ab3ae297f4ae24c59d5d00ac90.

Command: npm run curriculum:package-intake -- --unit R050 --ref origin/codex/r049-r050-complete-package --strict

Result: PASS, exit 0, zero warnings; 5 images and 9 referenced audio files. Both R049 and R050 passed on the same pushed pair ref. Subsequent documentation-only commit is rechecked before final delivery.

Pre-merge package preview (not final main review queue): https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=R050&ref=5bd9a1b4061493ab3ae297f4ae24c59d5d00ac90
