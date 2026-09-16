# L417 Production E package

Status: dependency-blocked-asset-complete.

## Boundary and ownership

Package base and approved vocabulary source: 18c9df4a4f1d4c9966b65d8b4371693a714e3d3c (L408法;412 learned characters). Latest main checked: 4869fc1a67daa2e406d001247d6b1762c0609498, L408. Lesson allowed set419 includes provisional 定 成 功 決 解 果 plus 如. Dependencies L411, L412, L413, L414, L415, L416; current remaining L411, L412, L413, L414, L415, L416. S04 決定 keeps L411定 as an out-of-window dependency, not a coverage target. R049/R050 already merged after405. No 何 or 許 in learner-facing text/options. Release owns full playable order and shared-state integration.

## Approved content and validation

Coverage 如3 果3 解2 決2 功1 成1: PASS. Han9/9/11/6/9; spokenText, displayLines join/width, focus, allowed text/options, Stage4 targets/missingIndexes/cards and one use per sentence: PASS. G04 three single-Han cards map 學/下/棋 to orders0/1/2.

5 final1024-square WebPs;10 processed mono44.1kHz AAC M4A including standalone 如,5 sentences,2 exact G02 parts,2 complete G05 wrong sentences. Correct G05 reuses S01. All decode, G05 mean volume spread0.4dB, shipping folder1103387bytes. Nine Han timing lists and dedicated Stage4 alignment are complete and synchronized.

Package-local validate-production-assets PASS; audit-asset-formats --strict PASS with zero warnings; base npm run validate:production PASS.

## Visual QA

Actual exported WebPs inspected side by side with full L058 style sheet; refined L115-S01/S02, L118-S02, L119-S01, L128-S03 and family L154-S01/L162-S04/L163-S02 anchors. L058 supplies style only. No readable text or number exceptions.

S01 style-lock PASS, cast PASS. Three boxes still full of fresh fruit; mother and girl discussing surplus, no premature solution.

S02 style-lock PASS, cast PASS. Girl holds sealed wordless biscuit packet; mother gently offers cut fruit, no force or scolding.

S03 style-lock PASS, cast PASS. Girl holds intact interlocking wooden burr puzzle; father points to a different side, no detached pieces or victory.

S04 style-lock PASS, cast PASS. Girl actively asks father to learn; sparse demonstration stones on gomoku grid, distinct black/white bowls, no winning game.

S05 style-lock PASS, cast PASS. Child-sized broom gathers a few dry leaves; mother watches calmly in otherwise clean living room.

No image drafts rejected or committed as alternates.

## Audio and timing QA

gpt-4o-mini-tts coral speed0.9, natural Taiwan Mandarin. Whole S01 regenerated for clear 解決; whole G02-prefix regenerated to retain final 比. Exact fragments 我會做家事比 / 掃地; no extra 如. Final unprompted independent transcription matches these clips. S04 independently matched 我決定學下棋; only S04 and prefix used contextual Whisper for orthographic alignment. Other clips use unprompted Whisper comparison; no text changes. Standalone 如 generated separately as ㄖㄨˊ.

Processed through repo audio pipeline with leading speech retained and only trailing silence shortened. AI word alignment refined from RMS/onset evidence for 怎麼 and final 比; tail decay retained with about200ms trailing silence. Details are in timing-review and transcript-review.

## Browser QA

Attempted local existing asset-review page on port5417. Codex browser tab creation timed out after30 seconds and reset its control kernel, before playback. Following documented tooling fallback, subjective continuous listening, highlight playback and phone recording/stitched replay are skipped. No teacher listening PASS is claimed. Required existence, decode, transcript, timings, visual inspection, allowed-character and local validators passed.

## Remaining work

No missing package assets or timings. Release awaits L411, L412, L413, L414, L415, L416 and full playable order, then performs production integration, final verify and deployment.

## Pushed intake evidence

Asset commit: d37575cc5a55b041758d59ee79d5bec38a81b213.

Command: npm run curriculum:package-intake -- --unit L417 --ref origin/codex/l417-complete-package --strict

Result: PASS, exit0, zero warnings;5 WebP and10 referenced M4A. Documentation-only follow-up is rechecked before final handoff.

Pre-merge package preview, not final main repair queue: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L417&ref=d37575cc5a55b041758d59ee79d5bec38a81b213

Audio review: https://icelog-tu.github.io/character-recognition-dojo/tools/audio-review.html?unit=L417&ref=d37575cc5a55b041758d59ee79d5bec38a81b213

Post-merge repair query: npm run asset:review-status -- --unit L417
