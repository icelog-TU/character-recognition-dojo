# L382 Package Rescue

Status: dependency-blocked-asset-complete
Source: origin/codex/l382-complete-package @ 11ddddfd1bbf50b1d6fb38e885cb1e7b08f1d089
Rescue: codex/l382-package-rescue

Created five final WebP illustrations and dedicated G02 suffix 連. Completed audio review, final silence processing and timing metadata. S05 有 interval excludes measured phrase silence; trailing 1ms impulse after 797ms silence removed without changing speech.

All 相 read ㄒㄧㄤ; 傳 reads ㄔㄨㄢˊ. Do not introduce 信/寫. Stage2 three 相 cards plus three learned distractors. G03 相/想/看, only 相 correct.

## Ownership and release

The rescue branch starts at the exact original package SHA. Production JSON, planner and ledger are unchanged relative to that source. Latest checked origin/main is 2169c169d62e6889534bbfd3de67c62f9d985684 (formal L380; R045/R046 present). Release must transplant only this package and apply the sentence-card CSS fix once if not already included by earlier rescue packages. Do not replace newer main shared files with this old source branch. Remaining preceding lessons must ship first; R045/R046 are already on main. The CSS fix now matches origin/main byte-for-byte, so Release need not reapply it.

## Asset evidence

All ten M4A files decode as mono AAC 44100Hz. Final tail/volume values and hashes are in L382-rescue-audio-evidence.json; detailed timing changes in L382-rescue-timing-review.json. Unregenerated audio retains the original AAC speech packet prefix; the audit checks packet hashes. No approved sentence, spokenText, imageNotes, target word, choice text, or displayLines was rewritten. 相/傳 contextual zhuyin overrides were made explicit.

Image status: S01 style-lock PASS, cast PASS; S02 style-lock PASS, cast PASS; S03 style-lock PASS, cast PASS; S04 style-lock PASS, cast PASS; S05 style-lock PASS, cast PASS. Final exported WebP files visually compared with full L058/refined/family reference sheet; square 1024px. Built-in imagegen used for new imagery. L385 S01-S04 were recovered originals.

## Validation scope

Owned-draft production-assets and strict asset-format checks, source preservation/data/timing audit, official package-intake, tools:check, base validate:production and git diff --check are required. Pushed-ref intake is rechecked before final handoff. Full verify skipped: dependency-blocked; shared state left for Release. Browser QA evidence is recorded separately in L382-rescue-browser-qa.json. Physical device microphone and subjective listening are not inferred from browser playback.

## Historical evidence

The original incomplete checkpoint remains reproducible at source SHA 11ddddfd1bbf50b1d6fb38e885cb1e7b08f1d089; its obsolete status reports are superseded by this rescue report. Raw successful Whisper responses remain in the owned alignment JSON files; no mismatched transcription is relabeled as matching.
