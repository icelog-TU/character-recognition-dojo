# L415 Production QA

packageStatus: needs-rework

## Exact Blocker
Pronunciation QA remains inconclusive for S04/G02 prefix 了 (must be ㄌㄧㄠˇ, not neutral le) and S05/G05 長 (must be ㄓㄤˇ, not chang2). Multiple complete independent TTS regenerations were made with explicit pronunciation instructions. gpt-audio-1.5 listening returned contradictory phonetic/tone observations across both original and final silence-trimmed files. The final S04 response reports liao third tone, but the same spoken-content earlier report did not. A second gpt-audio model did not actually analyze the supplied audio. Do not count those responses as verification. S01 neutral 著 should also be checked during the focused listening pass.
This is not an ordinary request for teacher pre-main subjective approval, nor only a dependency blocker. Actual special-pronunciation verification is still needed. Confirm actual sounds with reliable listening; regenerate entire tracks if necessary, then reprocess/re-align and rerun intake. Physical microphone/recording QA is also not exercised.

## Boundary
Base and last fetch: 18c9df4a4f1d4c9966b65d8b4371693a714e3d3c. Formal L408; R049/R050 after405 merged. Learner-character dependencies L410-L414 (試定成功決); release order also includes L409, without using 辦 in this lesson. No shared production curriculum/planner/ledger integration shipped.

## Images
Built-in image_gen, five separate generations, converted to1024-square WebP quality82. Actual exported files opened against full L058 style-only and refined preferred/family sheets plus named anchors.
- S01 style-lock PASS, cast PASS: mixed-color unsolved normal puzzle cube held by girl, encouraging mother.
- S02 style-lock PASS, cast PASS: voluntary study, mother listens, toys stored.
- S03 style-lock PASS, cast PASS: fixed girl/Xiaoyue/Xiaoguang and distinct teacher, empty window/aisle seats, standing in parked bus.
- S04 style-lock PASS, cast PASS: Xiaoyue seated arms crossed, girl gently asks; no fixed boy or invented cause.
- S05 style-lock PASS, cast PASS: present adult rooster; past chick only in memory bubble; fixed father/girl.
No image drafts rejected. No readable text/numeral exceptions. Sizes 140792,146120,186478,209880,233520 bytes.

## Audio and Timing
All10 processed M4A files exist and ffmpeg decodes them. Full spokenText inputs, standalone 解 input only, dedicated whole G02 fragments and G05 wrong-choice sentences, no splicing.
Final voices: coral S01/S02/S03/G02suffix; marin character/G02prefix/G05wrong-one; cedar S05; alloy S04/G05wrong-two. TTS model gpt-4o-mini-tts. Original unsuccessful alternatives are not committed as playable assets. SHA256-keyed model listening evidence is diagnostic, not human approval.
Only trailing silence trimmed, preserving150ms acoustic tail; no phoneme extraction used for production. All9 spoken tracks AI-aligned; prompted Whisper disambiguation keeps strict transcript match, no homophone normalization. Span80-900ms, tail<=300ms, nonoverlapping monotonic timings. S01 著 index1 neutral; S04 了 index2; S05 長 index2 overrides in final records.

## Checks
- tools:check, ai:check, startup curriculum:audit-state PASS.
- curriculum:packet generated initial files; final approved records and exact Stage4 replaced skeleton.
- assets:audio, assets:align:ai PASS.
- assets:images: already-compressed WebPs skipped5, missing0.
- assets:audit --lesson L415 --strict PASS (5 images,10 audio references,0 warnings).
- validate:production isolated fixture PASS.
- L415-package-audit.mjs PASS:418 allowed characters, coverage 解3決2功2成2定2試1; exact approved records, displayLines join/<=6, paths, timings, canonical order, each sentence once, G03three distinct single-Han cards, G04single-Han mapping, G02exact fragments, G05whole-text options.
- Full verify skipped: dependency-blocked lesson-local package; shared integration owned by Release.
- Completion/package-intake intentionally blocked by truthful needs-rework status until pronunciation verification resolves.

## Browser QA
At 390x844 in an isolated local L415 fixture, Stage 1 character playback completed and all five Stage 3 sentence buttons played through. The UI reported all sentences heard. The neutral 著, 了 ㄌㄧㄠˇ and 長 ㄓㄤˇ overrides were visible. This verifies browser playback and displayed annotation, not actual phonetic correctness. Stage 4 interactive playback and microphone recording QA are not completed. The temporary production JSON fixture was restored before packaging.

## Shared Script Review
Generation now honors sentence zhuyinOverrides and optional --instructions. Alignment adds optional prompt/sentence filter and simplified/traditional mappings needed for these units. No homophone mismatch bypass added. Release/Rescue should inspect these changes, which include carried-forward L409 tool improvements absent from this main base.
