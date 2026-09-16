# L386 Package Rescue

Status: dependency-blocked-asset-complete
Source: origin/codex/l386-complete-package @ 6b4ab4f0119577e37d5f62ad0089dbbe67963efa
Rescue: codex/l386-package-rescue

Reproduced 390px G03 six-Han clipping, repaired shared card-relative font sizing and wrapping, preserved approved displayLines and three options. Retested phone/tablet, recording with synthetic test audio, and reward navigation.

G02 prefix 信上沒有寫 and suffix 字是誰的; target 名 is not duplicated. 相信 reads ㄒㄧㄤ; 傳來 reads ㄔㄨㄢˊ. 第/姓/單 excluded from learner text. Approved G03 lines and all three options preserved.

## Ownership and release

The rescue branch starts at the exact original package SHA. Production JSON, planner and ledger are unchanged relative to that source. Latest checked origin/main is 2169c169d62e6889534bbfd3de67c62f9d985684 (formal L380; R045/R046 present). Release must transplant only this package and apply the sentence-card CSS fix once if not already included by earlier rescue packages. Do not replace newer main shared files with this old source branch. Remaining preceding lessons must ship first; R045/R046 are already on main. The CSS fix now matches origin/main byte-for-byte, so Release need not reapply it.

## Asset evidence

All ten M4A files decode as mono AAC 44100Hz. Final tail/volume values and hashes are in L386-rescue-audio-evidence.json; detailed timing changes in L386-rescue-timing-review.json. Unregenerated audio retains the original AAC speech packet prefix; the audit checks packet hashes. No approved sentence, spokenText, imageNotes, target word, choice text, or displayLines was rewritten. 相/傳 contextual zhuyin overrides were made explicit.

Image status: S01 style-lock PASS, cast PASS; S02 style-lock PASS, cast PASS; S03 style-lock PASS, cast PASS; S04 style-lock PASS, cast PASS; S05 style-lock PASS, cast PASS. Original five accepted WebPs preserved byte-for-byte; source style/cast evidence retained.

## Validation scope

Owned-draft production-assets and strict asset-format checks, source preservation/data/timing audit, official package-intake, tools:check, base validate:production and git diff --check are required. Pushed-ref intake is rechecked before final handoff. Full verify skipped: dependency-blocked; shared state left for Release. Browser QA evidence is recorded separately in L386-rescue-browser-qa.json. Physical device microphone and subjective listening are not inferred from browser playback.

## Historical evidence

The original incomplete checkpoint remains reproducible at source SHA 6b4ab4f0119577e37d5f62ad0089dbbe67963efa; its obsolete status reports are superseded by this rescue report. Raw successful Whisper responses remain in the owned alignment JSON files; no mismatched transcription is relabeled as matching.
