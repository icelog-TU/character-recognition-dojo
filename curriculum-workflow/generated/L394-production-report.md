# L394 Production B Handoff

Status: **partial-package / needs-rework**. Do not integrate.

Branch: `codex/l394-complete-package`.
Base and final fetched origin/main: `2169c169d62e6889534bbfd3de67c62f9d985684`.
Formal boundary L001-L380, 384 learned characters. R045/R046 are merged.
Dependencies: L389-L393; provisional 號、數、報、頁、碼. Allowed set 390.
Release also needs all playable predecessors and R047/R048. No release-owned files changed.

## Exact Completion Blockers

- G02 suffix expected `了水報紙都濕了`; three independently generated OpenAI versions transcribed as `涼水報紙都濕了`, `寮水報紙都濕了`, and `寥水報紙都濕了`. The last processed candidate is retained, not accepted as pronunciation-correct. This may require audio review or regeneration; no non-equivalent character normalization was used.
- The repo AI aligner aborts before its final JSON write. Consequently all five final draft sentence `durationMs` remain 0 and `charTimings` remain empty; Stage 4 alignment metadata is absent. Partial console results were not presented as final timing acceptance.
- S02 intermediate AI timing had a 60 ms 頁 and 920 ms 有; review/regenerate these boundaries when alignment succeeds. S04's initial 1 ms timing was addressed by whole-sentence regeneration; its subsequent alignment no longer had the anomaly, but no final metadata was written.
- G05 transcript/alignment checks were not reached after the G02 suffix error. Tone-sensitive 數 audio needs final playback verification.
- Phone-width playback/highlight/recording QA has not been performed. No browser fallback or teacher PASS is claimed.

## Passed Checks

- `git fetch origin`, clean startup, no existing L394 branch/owner; claim committed and pushed before media work.
- `npm run tools:check`, `npm run ai:check`, `npm run curriculum:audit-state`: PASS.
- Source-of-truth JSON read directly from origin/main; no stale checkout boundary.
- `npm run curriculum:packet -- --request curriculum-workflow/lesson-requests/L394.json`: PASS after increasing the local bootstrap read buffer for the large main JSON. Bootstrap ENOBUFS was resolved before media work.
- Request/draft approved sentences, displayLines, spokenText, coverage, allowed set and game indexes mechanically checked: PASS.
- Coverage: 翻4, 碼2, 頁2, 報2, 數2, 號1. Han lengths 7/11/9/11/9.
- G01/G02/G03 targets indices 0/1/7; G03 three distinct single-Han options; G04 [7,8,9,10] maps 家/的/號/碼; five sentence usages exactly once.
- Five optimized 1024x1024 WebP images; all under 250 KiB.
- Ten processed AAC mono 44100 Hz M4A files; `node curriculum-workflow/generated/L394-pipeline.cjs formats`: PASS, zero warnings (repo assets:audit scoped to owned draft).
- Explicit FFmpeg decode of all ten referenced M4A files: PASS.
- Standard format audit includes standalone volume/duration and G05 relative loudness checks; no format errors/warnings.

## Image Acceptance

Built-in image generation used with an inspected contact sheet containing all five L058 style references, five refined examples and three family anchors. Each final WebP was opened, and all final images were compared side by side with L058 and family anchors. No image reuse.

- S01 style-lock PASS; cast PASS. Upright complete `8` printed at lower book-page corner; mother points to it.
- S02 style-lock PASS; cast PASS. Exact `00-0000-0000` inside flower advertisement, normal direction. Fictional non-contactable placeholder only. Initial image had too few zeros and was rejected; generated correction accepted. Rejected PNG not committed.
- S03 style-lock PASS; cast PASS. Intact tipped glass, wet wrinkled newspaper, no injury.
- S04 style-lock PASS; cast PASS. One recurring girl in thin sleepwear turning on bed, warm night lighting and heat discomfort.
- S05 style-lock PASS; cast PASS. Exactly three complete separated fish, no extra fish-like reflections; both people stand on bank. Recompressed from original to quality 76, final WebP reopened.

Teacher-approved numerical exceptions apply only to S01 and S02 and do not enter spokenText or Han coverage. Other paper marks remain unreadable.

## Audio Pipeline

Ten independent OpenAI coral TTS files: five sentences, standalone 翻, dedicated G02 prefix 打 and suffix, two complete G05 wrong options. No syllable extraction or splicing. S02, S04, S05 regenerated once; G02 suffix generated three times total.

`L394-pipeline.cjs` runs unchanged repository generation/process/alignment/audit scripts against the owned draft and redirects writes away from shared production JSON. Its transcription normalization handles equivalent simplified/traditional characters only. Raw MP3 inbox is local and gitignored as required.

Standard assets:audio processing completed. Terminal silence over 350 ms was reduced using detected -45 dB silence onset plus a 200 ms safety margin, with no spoken material removed; then AI alignment was rerun. Standalone character audio was not trimmed. Tail-trim report records the changes. The duration report is pre-tail-trim processing evidence, not final draft timing metadata.

## Gate Results

- Lesson-local `validate:production` via adapter: FAIL because durations/timings are unwritten for S01-S05.
- AI alignment: FAIL at G02 suffix exact-text verification.
- Pushed-ref `npm run curriculum:package-intake -- --unit L394 --ref origin/codex/l394-complete-package`: FAIL. It found five images and ten audio files, but correctly rejected partial-package/needs-rework status and all five empty sentence timing arrays; it also warned that G02 prefix/suffix timing metadata is missing. Do not override this gate.
- Shared-state `verify` skipped: future lesson is not in production JSON; Release owns integration.

Image total: 903494 bytes. Audio total: 377600 bytes. Total: 1281094 bytes (about 1.22 MiB).

If Supervisor assigns Package Rescue, start from the pushed package tip, preserve approved text/images, resolve G02 suffix verification, regenerate final timings and Stage 4 metadata, finish playback QA, synchronize all statuses, and rerun pushed-ref intake. This report is not a Rescue assignment.
