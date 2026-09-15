# L372「交」Production D handoff

Package: **asset-complete-package**; Release state: **dependency-blocked-asset-complete**.
Branch: `codex/l372-complete-package`.

## Boundary and approved content

Latest fetched main: `3317753c` (L369 integrated); review boundary R044 after L360.
Approved learner dependencies remain L368/L369/L370/L371. L368/L369 are merged; Release blockers are L370/L371. Current provisional characters are 朋、友、親.
The request mechanically preserves the locked 376-character vocabulary from 3ee22616 plus 感情朋友親交. No later character is admitted.
Request, final packet and draft retain all five approved texts, spokenText, imageNotes, displayLines, focusChar and Stage 4 plans. S02 is **我把親手畫的圖交給老師。**

Coverage PASS: 交4、親2、情2、感1、謝1; complete word **朋友2**, 朋2、友3. 親友 does not count as 朋友.
Allowed-character, Han-only spokenText, displayLines join and six-visible-character limit, five-game order, single-Han cards, indices and option metadata all PASS.

## Visual QA

| Image | Style lock | Cast | Scene |
|---|---|---|---|
| S01 | PASS | PASS | Girl invites the fixed 你 boy to become friends |
| S02 | PASS | PASS | Girl hands her picture to the distinct teacher |
| S03 | PASS | PASS | Father and distinct longtime friend compare their old photograph |
| S04 | PASS | PASS | Casual adult relatives/friends help move; girl offers water |
| S05 | PASS | PASS | Mother hangs laundry; remaining chores shown in environment |

Each final WebP was opened and compared alongside all five L058 style references and relevant cast anchors. Refined examples were included in the generation reference sheet. No image was rejected or regenerated; no discarded version is submitted. Full image prompts are recorded in the final draft/packet.
All five images: 1024×1024 WebP, 160,030–188,900 bytes each; total **874,204 bytes**.

## Audio and timing

Ten processed mono AAC M4A files, all 44.1 kHz and ffmpeg-decodable, total **410,169 bytes**. Total final media **1,284,373 bytes**.
Standalone 交 is independently generated, 1,997 ms, peak −2.0 dB and mean −19.8 dB. An extra unprompted ASR returned 教。; this is an ambiguous lexical output, not a literal-character or tone certification. Generation input is the single character 交 with ㄐㄧㄠ guidance.
G02 prefix **我把親手畫的圖** and suffix **給老師** were generated separately from exact fragments. G05 wrong choices were generated as complete sentences; no speech splicing. The correct choice reuses S05.
All nine sentence/fragment/option AI transcripts matched the intended Han sequence with legitimate simplified/traditional normalization. AI alignment was rerun on the final processed audio after post-speech silence trimming. Tail margins are 202–223 ms. G05 mean-volume spread is **0.4 dB**.
Two AI-collapsed 媽媽 pairs in S05 and wrong-two received local PCM-waveform-based timing repairs; see L372-timing-repair.json for exact before/after boundaries and evidence. No audio content changed for these repairs.
L372-duration-report.json records the initial processing pass before tail-only trimming; L372-technical-report.json is the authoritative final duration/size/hash report.
Raw generation MP3 files remain in the assigned worktree's ignored `curriculum-workflow/audio-inbox/L372/`, following repository policy.

## Browser QA and limitation

Tested immutable asset commit: `fc223ac70b9336a0689d8946064c5ec698594c59`.
[Pre-merge package preview](https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L372&ref=fc223ac70b9336a0689d8946064c5ec698594c59) — **pre-merge package preview, not final main review queue**.

Chrome loaded five sentence cards and six additional audio controls. All eleven controls (ten unique assets) played to `ended`, with currentTime equal to duration and media error null.
Actual app UI was tested using the temporary localhost:5175 preview adapter. It loads main plus the owned L372 draft in memory and sets a local launch/replay state; shared curriculum and app source files are untouched. The helper is L372-preview.mjs. Missing provisional-character zhuyin in this isolated preview is a consequence of omitted L370/L371 integration; final integrated layout remains Release-owned.
At verified 390×844 viewport, all five Stage 3 sentences played to completion. Active-token highlighting was observed and cleared after playback. G01 and G03 targets and G04 幫→忙→搬→家 single-Han order were accepted. All three G05 avatar buttons began playback on the first click and returned to idle.

**G02 recording/concatenated replay was not completed.** Pressing the target entered a floating-character priming state and stayed there without a recording result. No actionable microphone permission prompt was exposed by the browser-only surface, and native controls are unavailable. Local console had no error/warning; the cause could not be established. The review page separately logged an asynchronous listener/message-channel closure; all its media still played to ended, so causality is not established.
The tool returns UI/media state, not an audible stream for agent listening. No manual listening PASS, final-syllable auditory certification, or teacher pre-merge PASS is claimed.
This uses the current Production SOP browser automation fallback after non-browser technical gates passed. Teacher subjective image/audio review remains post-merge.

## Validation

- Startup: tools:check, ai:check, curriculum:audit-state PASS.
- curriculum:packet executed before asset generation; the approved request and final aligned draft are preserved in the final packet.
- Repository generation, assets:images, assets:audio and assets:align:ai ran through L372-pipeline.cjs against the owned draft in memory.
- L372-audit.cjs PASS: exact approved content, allowed set, coverage, displayLines, Stage 4 indices/options, five WebP and ten M4A, decode/codec, durations/timings and sizes/hashes.
- Scoped assets:audit strict PASS: one unit, five image references, ten audio references, zero warnings.
- Scoped validate:production PASS. Baseline npm run validate:production also PASS, independently of L372 validation.
- Full shared-state npm run verify is skipped because L370/L371 integration is Release-owned.
- Post-push package-intake results are recorded in the final handoff below.

## Release review links

After Release integrates dependencies and L372 and deploys:
- [L372 official review](https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L372&ref=main)
- [Main review index](https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main)
- `npm run asset:review-status -- --unit L372 --ref main`
