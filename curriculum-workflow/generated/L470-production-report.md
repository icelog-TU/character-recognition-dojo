# L470「答」Production E package

Status: `dependency-blocked-asset-complete`.

L470 is based on `origin/main@acd71a5b`, where formal production ends at L465「招」and R056. The package preserves the teacher-approved 474-character ceiling: 469 formally learned characters, provisional `絕、活、該、應`, and new `答`. Release blockers are R057/R058 and L466-L469.

## Final content and Stage 4

The five approved sentences, line breaks, image notes, pronunciation overrides, coverage counts and canonical G01-G05 plan match the handoff. The allowed-character sweep, Han-only indexes, G03 choices, G04 order mapping and G05 one-character near misses pass mechanically. No student-facing text introduces `題、案、反`.

## Images

Five square 1024px WebPs pass style, cast, semantics and no-readable-text review. S01-S04 preserve the recurring family; S03 uses a distinct generic host; S05 matches the fixed Xiaoyue reference and keeps Xiaoyue inside the bus with the protagonist safely outside. All five were reviewed together; no draft was rejected.

## Audio and timing

Ten final files were generated with OpenAI `gpt-4o-mini-tts` / `shimmer`, then processed by `npm run assets:audio -- --lesson L470` to mono AAC 44.1kHz M4A. The standalone `答`, five sentences, G02 prefix/suffix and both full G05 distractors were generated independently without cutting or splicing.

Independent `gpt-audio-1.5` listening passes all files and exact wording. Standalone `答` and `答應` use ㄉㄚ; `回答、問答、答對` use ㄉㄚˊ; `應` is ㄧㄥˋ; `絕活` is ㄐㄩㄝˊ ㄏㄨㄛˊ. Whisper exact-context alignment produced the main, G02-prefix and G05 timing tracks. Because short-audio ASR hallucinated the independently verified `對了`, its two syllables were bounded manually. The S05 final `我／招／手` span was redistributed after listening because Whisper assigned only 20ms to `招`. Every final span is ordered, in duration and at least 80ms.

## Verification scope

Lesson-local production validation, strict asset audit, package audit and pushed-branch strict intake are required before handoff. Browser QA fallback applies: this control surface has no reliable computer-audio return or physical-phone microphone channel, so live highlight synchronization and G02 phone recording/replay are not claimed. Teacher human image/audio review remains pending.

Release owns production JSON, planner, ledger, review-pair sequencing, integration and deployment.

## Pushed package intake evidence

Asset package commit `e66f3136b1602b0798f7248a6fab1f848a4a57a0` passed `npm run curriculum:package-intake -- --unit L470 --ref origin/codex/l470-complete-package --strict`: status `dependency-blocked-asset-complete`, 5 images, 10 audio files, canonical Stage 4 and zero blocking defects.

## Teacher pronunciation repair after ref c6a4ebceffe8f67fb2131ff73dab9645bb917b59

Teacher review requested the Taiwan-realized pronunciation of `答應`, with `答` sounding like `搭` rather than `達`, in S01 and S04. Although the second review marker was attached to the S04 image row, its text is explicitly an audio pronunciation request, so the accepted S04 image was preserved. Both sentence audio files were regenerated as complete units with `gpt-4o-mini-tts` / `shimmer`, using the spoken homophone `搭應` to force first-tone ㄉㄚ. No cutting or splicing was used. Final processed M4As were re-aligned; independent `gpt-audio-1.5` review identifies both as first-tone `搭`, Taiwan-natural, exact and defect-free. Renewed teacher listening remains pending.

Repaired asset commit `7f118a318c624a5599f5cc3b8ed23706cbe9cd91` passed pushed-branch strict intake: 5 images, 10 audio files, canonical Stage 4 and zero blocking defects.

Teacher manually reviewed the audio at ref `fedb9fe92a418585109624e798fb45dc963ecb6a` and confirmed that the audio files have no remaining issue. This acceptance covers L470 audio, including the repaired S01 and S04 `答應` pronunciation. Image review and live highlight/phone recording checks are not included in this audio acceptance.
