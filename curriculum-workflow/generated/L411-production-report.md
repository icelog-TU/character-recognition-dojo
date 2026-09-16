# L411 Production E package

Status: dependency-blocked-asset-complete.

## Boundary and ownership

Package base: 853a02b1a0d8bbcaf512ed4ecd5c967297ec4df0. Original data snapshot: 03c720e0f102a573ae2f96047e59e78721580817. Latest main checked: da46929a5f1f90ec89691ad9e2cfa81be8db30ef, L407. Allowed set415; remaining dependencies L408, L409, L410. R049/R050 already integrated after405. No L412 成 or later characters. Production owns only L411 package and its registry row; Release owns shared-state integration and deployment.

## Approved content and validation

Coverage: 定3, 試4, 辦2, 法2, 減1, 加1; all targets PASS. Han counts10/11/11/11/10. Display line join, <=6 visible characters, spokenText, focus, allowed text/options and all Stage4 indices/cards PASS. Five games use five sentences once in canonical order.

5 final1024-square WebPs; 10 processed AAC M4A files including standalone 定, five sentences, exact G02 fragments and two complete G05 distractors. Correct G05 reuses S04. All decode; G05 volume spread0.7dB. Total1167502bytes. All referenced files and nine Han timing lists present.

Package-local validate-production-assets PASS. Package-local audit-asset-formats --strict PASS with zero warnings. Base npm run validate:production PASS.

## Visual QA

Actual exported WebPs viewed side by side with full L058 sheet, refined L115-S01/S02, L118-S02, L119-S01, L128-S03, family L154-S01/L162-S04/L163-S02 and dedicated xiaoyue.webp. L058 style-only. No readable text/number exceptions.

S01 style-lock PASS, cast PASS. Open unobstructed high window, ordinary closed door; girl and exact Xiaoyue cast remain on floor by two low boxes.

S02 style-lock PASS, cast PASS. Decorated working pen and plain comparison pen; mother points to wordless trial lines.

S03 style-lock PASS, cast PASS. Separate torn-seam garment handed to mother; open sewing kit controlled by adult.

S04 style-lock PASS, cast PASS. Unlit lamp, mother pressing switch, bright daylight and girl reading near window.

S05 style-lock PASS, cast PASS. Separate red and white paint with central pink mixture; brush stirs pink.

S01 initial barred-window draft was rejected for obstructing the intended exit and corrected to an open casement. Rejected draft was not committed. Other images accepted after final export review.

## Audio and timing evidence

gpt-4o-mini-tts coral speed0.9; natural Taiwan Mandarin requested. Processed with repo assets:audio path while preserving leading speech; only trailing silence trimmed. Whisper AI alignment plus documented RMS/onset repairs for punctuation pauses and compressed/overlapping timestamps; no energy-only alignment. Last syllable decays retained.

G02 prefix is exactly 衣服破了媽媽一, suffix 有辦法. Prefix was regenerated whole until final yi had an explicit rising contour. TTS-only pronunciation rendering used 衣服破了，媽媽姨 to realize yi2 sandhi; app text remains 一, and no extra 定 syllable is present. Unprompted independent ASR heard seven syllables ending 咦; measured final vowel rises approximately151Hz to257Hz. Expected text context was supplied to Whisper for orthographic timing of this one clip only. The standalone 定 was generated separately and has a falling contour approximately329Hz to120Hz. These are technical checks, not a claim of subjective listening.

## Browser QA

Local L411 review UI loaded5 sentence cards and6 extra audio controls. Clicking G02-prefix Play crashed Codex browser; next inspection confirmed This page crashed. Following documented browser-tooling fallback, subjective continuous listening, highlight playback and phone recording/stitched replay were skipped. No teacher listening PASS is claimed. Required file, decode, allowed-character, alignment and local-validator gates passed.

## Remaining work

No missing package assets or timings. Release awaits L408, L409, L410 and performs final integrated verification.

## Pushed intake

Asset commit: 4bf9f0e331e4e3c3cc3ee134dde1cf526b057c5e.

Command: npm run curriculum:package-intake -- --unit L411 --ref origin/codex/l411-complete-package --strict

Result: PASS, exit0, zero warnings; 5 WebP and10 referenced M4A. Documentation-only follow-up is rechecked before final handoff.

Pre-merge package preview, not final main repair queue: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L411&ref=4bf9f0e331e4e3c3cc3ee134dde1cf526b057c5e

Audio review: https://icelog-tu.github.io/character-recognition-dojo/tools/audio-review.html?unit=L411&ref=4bf9f0e331e4e3c3cc3ee134dde1cf526b057c5e

Post-merge repair status command: npm run asset:review-status -- --unit L411
