# R043/R044 Production D package

packageStatus: **asset-complete-package**. Registry: **dependency-blocked-asset-complete**.
Branch: codex/r043-r044-complete-package. Latest SOP read from origin/main 496aa87a (formal through L359). L360 奇 is the remaining Release integration prerequisite. The pair belongs after L360 and before L361. Production JSON, planner and ledger are untouched.

## Technical acceptance

- 10 final WebP images; 18 processed AAC M4A files at 44100Hz mono; all referenced assets exist. R043 folder 1,376,393 bytes; R044 1,362,501 bytes.
- Exact approved sentences/spokenText/displayLines/focusChar/imageNotes, Stage 4 indexes, cards, wrong-option text, allowed ceiling L360 and 30/30 pair coverage: PASS.
- All 18 final files transcribed and AI-aligned with complete Han counts. R043-G02 suffix uses weather/原因 context in the transcription prompt for same-sound spelling disambiguation. No homophone substitutions in returned transcript.
- R043-S03 regenerated at speed 1.0 through the repo pipeline; 請 is 1540–1820ms.
- R043-S01 特 manually smoothed to 1320–1720ms based on PCM inspection: onset 1320ms at -35dB after quiet interval, vowel energy 1460–1660ms, next syllable starts 1720ms. This is acoustic correction, not a claim of completed listening.
- Final syllable endpoints reconciled with the last 20ms PCM frame above -45dB. Tails retain 200ms decay margin through AAC packet copy; no onset or interior edits and no re-encoding. Re-transcription on these final files retains every Han character. File duration minus final highlight endpoint is 202–223ms.
- All charTimings ordered, within duration, 80–900ms each, without overlap. G02 prefixAudio/suffixAudio and all G05 option audio metadata are populated alongside stage4AudioAlignment.
- FFmpeg decode 18/18, strict format audit 10 image /18 audio references zero warnings, G05 volume spread within 3dB: PASS.

## Image acceptance

All exported WebPs inspected against full L058 S01–S05 (style only), L115 S01/S02, L118 S02, L119 S01, L128 S03, family L154 S01/L162 S04/L163 S02 and named xiaoyue.webp.

| Image | Style-lock | Cast |
|---|---|---|
| R043-S01 | PASS | PASS |
| R043-S02 | PASS | PASS |
| R043-S03 | PASS | PASS |
| R043-S04 | PASS | PASS |
| R043-S05 | PASS | PASS |
| R044-S01 | PASS | PASS |
| R044-S02 | PASS | PASS |
| R044-S03 | PASS | N/A |
| R044-S04 | PASS | PASS |
| R044-S05 | PASS | PASS |

R044-S01 initial visitors resembled parents: initial image rejected, regenerated with elderly visitors, accepted final image only committed. Other nine accepted first generation. R043-S05/R044-S03 recompressed and exported WebPs checked again. Image files unchanged in this completion pass.

## Browser tooling and teacher workflow

At asset checkpoint db22ca7f407307bab2d81b7b8eb0c4528201bd45, R043 Pages preview loaded five sentence cards and five extra audio entries. First S01 Play click caused This page crashed. No successful subjective listening, live highlighting, microphone recording or stitched replay is claimed. Current audio is newer than that checkpoint. Browser QA uses the technical-gates fallback allowed by the latest SOP; no pre-main teacher approval or cloud sync is required. Teacher subjective image/audio review belongs to the post-main repair queue.

## Reproducible checks

Run from the assigned worktree:

- npm run tools:check — PASS
- npm run ai:check — PASS
- npm run curriculum:audit-state — PASS, expected unintegrated pair folder warnings; local production base remains L354
- npm run validate:production — PASS on unchanged local production
- node curriculum-workflow/generated/R043-R044-package-check.cjs curriculum — PASS using latest main plus L360 draft in memory; 360 lessons, existing normal-lesson warnings only
- same adapter with production — PASS for both review drafts
- same adapter with formats — PASS strict audit zero warnings
- same adapter with technical — PASS, coverage/structure/timings/tails/decode/folder sizes
- node curriculum-workflow/generated/R043-R044-intake.cjs origin/codex/r043-r044-complete-package — review-specific pushed-ref intake

Latest upstream scripts/check-package-intake.mjs was read and invoked directly from origin/main. It accepts only L### and rejects R### at argument parsing. The owned review intake applies equivalent status/request/packet/assets/Stage 4 checks plus timing bounds and tails to this pair. No shared validation script was edited.

Full npm run verify skipped: dependency-blocked; shared-state integration and full verify are Release-owned.

The audio-pipeline adapter invokes repository generation/processing/alignment scripts against memory-only draft data. Raw MP3 inputs remain in ignored owned audio-inbox folders. Running process recreates pre-tail output and requires another alignment/tail pass. R043-R044-tail-qa.cjs records acoustic measurements and packet-copy trimming; run final AI alignment before its metadata pass.

## Release handoff

Integrate L360 first, then this review pair. After merge/deploy, teacher review uses the permanent asset-review-index.html with ref=main (usable after Release merges and deploys). No pre-merge preview request is part of this ordinary Production handoff.
