# L384 Package Rescue

Status: dependency-blocked-asset-complete
Source: origin/codex/l384-complete-package @ d6dd05e92d53435cb745608852b6259887001069
Rescue: codex/l384-package-rescue

Generated dedicated exact G02 prefix 把電話 (not 打電話, no sentence splice), with matching transcription and timings. Trimmed terminal silence and a post-silence charAudio transient while preserving original speech packets.

Exact G02 prefix 把電話. S02 records a contact number then digitally sends it; no readable numerals. S04 matching illegible writing, not drawings. 相 reads ㄒㄧㄤ; 傳說 reads ㄔㄨㄢˊ.

## Ownership and release

The rescue branch starts at the exact original package SHA. Production JSON, planner and ledger are unchanged relative to that source. Latest checked origin/main is 2169c169d62e6889534bbfd3de67c62f9d985684 (formal L380; R045/R046 present). Release must transplant only this package and apply the sentence-card CSS fix once if not already included by earlier rescue packages. Do not replace newer main shared files with this old source branch. Remaining preceding lessons must ship first; R045/R046 are already on main. The CSS fix now matches origin/main byte-for-byte, so Release need not reapply it.

## Asset evidence

All ten M4A files decode as mono AAC 44100Hz. Final tail/volume values and hashes are in L384-rescue-audio-evidence.json; detailed timing changes in L384-rescue-timing-review.json. Unregenerated audio retains the original AAC speech packet prefix; the audit checks packet hashes. No approved sentence, spokenText, imageNotes, target word, choice text, or displayLines was rewritten. 相/傳 contextual zhuyin overrides were made explicit.

Image status: S01 style-lock PASS, cast PASS; S02 style-lock PASS, cast PASS; S03 style-lock PASS, cast PASS; S04 style-lock PASS, cast PASS; S05 style-lock PASS, cast PASS. Original five accepted WebPs preserved byte-for-byte; source style/cast evidence retained.

## Validation scope

Owned-draft production-assets and strict asset-format checks, source preservation/data/timing audit, official package-intake, tools:check, base validate:production and git diff --check are required. Pushed-ref intake is rechecked before final handoff. Full verify skipped: dependency-blocked; shared state left for Release. Browser QA evidence is recorded separately in L384-rescue-browser-qa.json. Physical device microphone and subjective listening are not inferred from browser playback.

## Historical evidence

The original incomplete checkpoint remains reproducible at source SHA d6dd05e92d53435cb745608852b6259887001069; its obsolete status reports are superseded by this rescue report. Raw successful Whisper responses remain in the owned alignment JSON files; no mismatched transcription is relabeled as matching.
