# L386 名 — Production D package checkpoint

Package status: **partial-package**. All media are present, but the phone G03 layout has a reproducible clipping defect. Do not treat this checkpoint as asset-complete or integrate it before Supervisor resolves the defect and the package is retested.

## Ownership and boundary

- Branch: `codex/l386-complete-package`; claim commit `193db98b`.
- Branch base: `bf2825a6`; final fetch: `7fcef325b37f13fc68fe950bffd7fea8e9db6108` (L360 audio repair). Production/role SOP unchanged between these commits.
- Direct `origin/main` production JSON: L001–L375, 379 learned Han; latest reviews R043/R044 after L360.
- Learner dependencies: L381, L382, L383, L384, L385; provisional characters 傳、相、信、寫、字. None merged at final fetch.
- Release sequence also requires R045/R046 after L375 and L376–L385. Those units are outside this package.
- Allowed set mechanically extracted from formal main plus the five approved provisional characters and 名: 385 distinct Han. 第、姓、單 remain excluded.
- No changes to shared production curriculum, planner data, ledger, app code, or another worktree.

## Approved data and technical checks

Request, generation packet, and draft retain the teacher-approved five sentences, imageNotes, focusChar, displayLines and Stage 4 assignment. Coverage 名/字/寫/信/相/傳 = 3/2/2/2/1/1. Han counts = 8/10/9/9/8. Allowed characters, Han-only spokenText, joined displayLines, maximum six visible characters per line, five distinct sentence uses, target indexes and option metadata pass the lesson-local mechanical audit.

G01/G02 have no options. G03 has three distinct single-Han options 名/明/多 with one correct answer. G04 uses four single-Han cards 游/到/對/面. G05 options have eight Han and differences of two/one Han. G02 prefix is exactly 信上沒有寫; suffix is exactly 字是誰的, including 字 without duplicating 名.

## Images: built-in imagegen and final WebP review

All final images were opened individually after conversion and compared with the complete L058 style set, refined examples, and family/YOU/teacher reference sheet. Detailed pencil-watercolor rendering, warm bright light and recurring identity were checked separately from semantics. Final prompts are retained in the approved request/draft; the two targeted correction prompts are described below.

| Image | Style-lock | Cast | Semantic result / reuse decision |
| --- | --- | --- | --- |
| S01 | PASS | PASS | Mother and girl; pen on inside backpack label, only illegible strokes. No exact reusable scene found. Initial pen tip fell outside label; corrected through imagegen. |
| S02 | PASS | PASS | Girl points at blank lower signature area; upper writing remains illegible. Generic classmates uncertain. Initial generic boy resembled brother; changed to terracotta shirt and short crew haircut through imagegen. |
| S03 | PASS | PASS | Fixed YOU boy, girl, distinct adult swimming instructor; shallow teaching pool, before swimming. No exact reusable approved scene found. |
| S04 | PASS | PASS | Father and girl wait among queued customers; visible golden chicken cutlets. Inspected L355-S01/S02: opening-shop and restaurant-menu scenes do not depict this approved queue scenario, so generated new image. |
| S05 | PASS | PASS | Recurring older brother and generic children pass ball and laugh; girl turns toward court from safe edge. No exact reusable scene found. |

Only the five accepted WebP files are committed; rejected PNG drafts remain outside the repository. All five are 1024×1024. Bytes: S01 127864, S02 117804, S03 169322, S04 187346, S05 207894; image total 810230 bytes.

## Audio and alignment

- Standard OpenAI TTS generated standalone 名, S01–S05, dedicated G02 prefix/suffix, and both complete G05 wrong sentences. Raw MP3s remain in the ignored `curriculum-workflow/audio-inbox/L386/` folder; no raw media is forced into Git.
- Repository audio processing and AI alignment scripts are invoked through `L386-pipeline.cjs` with only this draft provided in memory. Shared production JSON and reports are not rewritten.
- All ten final files are mono AAC M4A, 44100 Hz, decodable by FFmpeg. Character audio duration 1114 ms. Mean/peak volume gates pass; G05 mean spread 0.3 dB.
- S01 was regenerated after an initial transcript mismatch. SOP-approved simplified-equivalent normalization handles 写/对/鸡/场/传/欢/声 without altering approved Traditional Chinese text. Original Whisper responses remain in `L386-transcript-evidence.json`. No homophone substitution is accepted.
- S02 regenerated after a 20 ms timestamp; G02 prefix regenerated after 信 was recognized as 姓; G05 wrong-two regenerated after 球 was recognized as 秋 and again after a 1 ms timestamp. Final transcripts match approved text after equivalence normalization.
- Only final silence was shortened, retaining 150 ms after -45 dB speech decay. AI alignment reran on final M4A. Sentence tail gaps are 203/173/223/259/263 ms.
- G05 wrong-two retained a 20 ms 傳 segment. Per SOP manual timing smoothing, the existing adjacent 傳來 group 1680–2020 ms was divided into 170 ms segments (1680–1850, 1850–2020). No audio/text changed; before/after evidence is in `L386-timing-review.json`. This is a manually smoothed internal boundary, not independently confirmed fine auditory synchronization.
- Final timing spans meet 80–900 ms, are ordered and within duration; Stage 4 fragment/option metadata is present. Total audio 348864 bytes. Combined media 1159094 bytes (~1.11 MiB).

## Browser QA — actual results and blocker

Local QA fixture: `http://127.0.0.1:5175/character-recognition-dojo/`, using this draft plus approved provisional zhuyin metadata; no shipping curriculum edits. Chrome controlled through Computer Use.

- Phone 390×844: standalone character first click entered playback and completed Stage 1. Stage 2 showed three 名 cards plus 寫/把/字; counts progressed 1/3, 2/3, then 3/3 and completion.
- Stage 3: all five image buttons were clicked; every playback entered/exited playing state, active-character highlighting was visible, all approved lines were readable, and UI reached 句子都聽完了. This proves UI/media playback behavior, not human subjective listening or phonetic judgment.
- G01 correct 名 click passed. G02 prefix automatically played and reached the press-and-hold instruction. A normal click did not start recording. Current browser control exposes click but no maintained pointer-down/hold-duration action; G02 microphone recording and stitched replay remain unverified. No microphone permission was granted for this task.
- **Actual defect:** G03 at 390×844 clips the first line 這家店的雞排 at both sides of the sentence panel. This occurs before answering; the three option buttons remain visible and correct 名 can be selected. At 820×1180 the full first line fits. It is a real responsive-layout issue, not a browser automation exception.
- G04 accepted 游, 到, 對, 面 in order and offered 下一題. G05 all three animal option buttons were clicked, each entering/exiting playing state; subjective pronunciation and fine sync are not claimed as human-listened PASS.
- Suggested repair: Supervisor/Repair should adjust shared Stage 4 sentence layout/font/gap handling for six-Han rows at phone width, then retest G03 at 390×844 and tablet width. An Editor-approved alternative line split is another option, but Production did not change the locked lines.
- Completion/reward navigation was not tested in this checkpoint; G02 was skipped through the visible QA control to inspect remaining questions. No complete-course end-to-end PASS is claimed.

Because G03 has an actual visible defect, browser fallback cannot promote this package. Keep `partial-package` pending a scoped repair decision and retest.

## Commands / reports

- PASS: startup `tools:check`, `ai:check`, `curriculum:audit-state`; packet generation; final lesson-local image optimization, audio processing, AI alignment (equivalence normalization + documented local smoothing), strict asset-format audit, production-assets validator, and `L386-audit.cjs` / `L386-sync.cjs` checks.
- PASS: ordinary `npm run validate:production` and final `curriculum:audit-state` on base production. The expected unmerged L386 asset-folder warning is recorded; these main-only checks do not replace the separate L386 draft audit.
- Historical alignment and timing assertions initially failed as detailed above; final technical audit passes.
- `npm run verify` skipped: dependency-blocked; shared-state integration belongs to Release.
- Required pushed-ref package-intake is run after this checkpoint is pushed. Asset-complete is not asserted; this draft intentionally retains partial-package because of G03.

## Review URLs

Use the full pushed SHA reported in the handoff for `https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L386&ref=<full-pushed-sha>` — **pre-merge package preview, not final main review queue**.

Release-owned formal review, usable only after Release merges and deploys: `https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L386&ref=main`.

Console observations: React logged a LessonPanel/FindManyChallenge setState-during-render warning after Stage 2; browser also logged asynchronous listener channel-close errors. No shared app repair was attempted in Production.
