# L385 Package Rescue

Status: dependency-blocked-asset-complete
Source: origin/codex/l385-complete-package @ dc0e0f152b3fde6955198eff7b72f2de3bea5ba1
Rescue: codex/l385-package-rescue

Recovered and exported S01-S04 originals; created S05 and corrected mismatched worksheet marks before final export. Generated dedicated G02 prefix 這個, approved by teacher and independent transcription. Added all sentence/Stage4 timings and processed final silence.

相 in 相信/相同 reads ㄒㄧㄤ; 傳 reads ㄔㄨㄢˊ. All illustration writing remains illegible; S05 matching pairs are visibly identical. S03 before digital transmission to absent mother; S04 physical card to rear classmate. Teacher accepted G02 這個.

## Ownership and release

The rescue branch starts at the exact original package SHA. Production JSON, planner and ledger are unchanged relative to that source. Latest checked origin/main is 2169c169d62e6889534bbfd3de67c62f9d985684 (formal L380; R045/R046 present). Release must transplant only this package and apply the sentence-card CSS fix once if not already included by earlier rescue packages. Do not replace newer main shared files with this old source branch. Remaining preceding lessons must ship first; R045/R046 are already on main. The CSS fix now matches origin/main byte-for-byte, so Release need not reapply it.

## Asset evidence

All ten M4A files decode as mono AAC 44100Hz. Final tail/volume values and hashes are in L385-rescue-audio-evidence.json; detailed timing changes in L385-rescue-timing-review.json. Unregenerated audio retains the original AAC speech packet prefix; the audit checks packet hashes. No approved sentence, spokenText, imageNotes, target word, choice text, or displayLines was rewritten. 相/傳 contextual zhuyin overrides were made explicit.

G02 這個: teacher response “清楚正確，可以使用”. Independent gpt-4o-transcribe returned 這個 without expected-phrase prompting. Whisper could not produce matching Han timestamps, so manual boundaries use the measured low-energy 300–340ms interval and 531ms final decay; this is explicitly not a Whisper timing PASS. S03 independent transcription matches 信; prompt-assisted Whisper was used for timing.

Image status: S01 style-lock PASS, cast PASS; S02 style-lock PASS, cast PASS; S03 style-lock PASS, cast PASS; S04 style-lock PASS, cast PASS; S05 style-lock PASS, cast PASS. Final exported WebP files visually compared with full L058/refined/family reference sheet; square 1024px. Built-in imagegen used for new imagery. L385 S01-S04 were recovered originals. S05 initial ambiguous matching marks were rejected; worksheet-only correction accepted, rejected PNG not committed.

## Validation scope

Owned-draft production-assets and strict asset-format checks, source preservation/data/timing audit, official package-intake, tools:check, base validate:production and git diff --check are required. Pushed-ref intake is rechecked before final handoff. Full verify skipped: dependency-blocked; shared state left for Release. Browser QA evidence is recorded separately in L385-rescue-browser-qa.json. Physical device microphone and subjective listening are not inferred from browser playback.

## Historical evidence

The original incomplete checkpoint remains reproducible at source SHA dc0e0f152b3fde6955198eff7b72f2de3bea5ba1; its obsolete status reports are superseded by this rescue report. Raw successful Whisper responses remain in the owned alignment JSON files; no mismatched transcription is relabeled as matching.
