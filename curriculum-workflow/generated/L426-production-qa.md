# L426「輪」Production C QA

Package status: dependency-blocked-asset-complete. Owner: Remote Production C, parallel-c, reassigned from Production B by teacher. Branch: codex/l426-complete-package.

Source main and final dependency check: 4eec51781af66eee3b0a9b0b5afe0e0497a8d121, formal L001-L415, last 解. Allowed vocabulary is the 419 formal learned characters plus 室、班、組、隊、各、輪 = 425, expanded in request and draft. Approved five sentences and all options preserved. Coverage 輪3、各2、隊2、組2、班1、室1; Han counts 9、10、10、9、12. Exact Han-only spokenText, teacher-approved displayLines, single-character options and zero-based indexes verified.

Release dependencies: ordinary lessons must enter main contiguously through L425, including L416-L420 and vocabulary dependencies L421-L425. R051/R052 afterLessonOrder=420, coverage L391-L420 must also be merged first. This package does not contain the review pair. No additional provisional characters from L416-L420; no 員、自、胎. Production JSON, planner export and curriculum ledger integration belong to Release; these files and shared audio scripts have no changes in this branch.

## Final images

All five final exported WebPs were opened individually and compared side by side with the full L058-S01–S05 style set, refined L115-S01/S02, L118-S02, L119-S01, L128-S03, and family anchors L154-S01, L162-S04, L163-S02. L058 is style-only. Built-in imagegen was used, then ImageMagick resize/compression to 1024×1024 WebP. Final image prompts and imageNotes are in request/packet/draft. Source image provenance is in L426-image-provenance.json. Local comparison sheets are under ignored curriculum-workflow/ai-outputs/L426/.

- S01 style-lock PASS, cast PASS. Rich warm art-room detail, exiting children holding completed pictures, next group waiting on separate side; empty easels/chairs. Fixed girl retained; tied-hair teacher and generic classmates distinct.
- S02 style-lock PASS, cast PASS. Girl at front of queue stepping toward open stationary train entrance, mother beside her, attendant guiding, waiting families behind. Fixed girl/mother retained.
- S03 style-lock PASS, cast PASS. Father points to axle connection while girl aligns large unattached wheel; unfinished chassis and other loose parts visible. Fixed father/girl retained.
- S04 style-lock PASS, cast PASS. Two separated teams, red bibs versus green bibs, uniform color within each team. Girl's bob, pink clip and base clothing retained beneath red bib; other children generic.
- S05 style-lock PASS, cast PASS. Daylight bedroom, father resting, prepared work clothes and bag on chair; mother asks quiet as girl leaves. Fixed family identities retained. No clock or shift-table explanation.

No readable text, numerals, team labels or logos in any image. Each image is below 250 KiB; total final images/audio 1,393,375 bytes (about 1.33 MiB).

## Final audio and timings

Standard repository OpenAI generation, processing and AI alignment scripts were run through L426-audio-pipeline.cjs, which redirects only curriculum reads/writes to the owned draft. The shared production JSON is never modified. Ten final M4A files: one independent character, five sentences, two G02 fragments, two complete G05 wrong options. All are mono AAC at 44100 Hz, approximately 96 kbps, and decode successfully. Volume checks pass max >= -12 dB and mean >= -28 dB; G05 mean spread is 2.0 dB.

All nine timed files passed independent Whisper transcription without target-text prompting. Only simplified-to-Traditional equivalents are normalized; no phonetic character substitutions. Final raw transcripts are preserved in L426-transcripts/. S01, G02 suffix and G05 wrong-one were regenerated after initial transcription discrepancies; final versions match the exact approved Han sequences. G02 prefix ends with 才 and excludes 輪; suffix is exactly 到我 and excludes 輪. Both have complete dedicated timing metadata.

Standalone char-u8f2a.m4a was generated independently from 輪 with ㄌㄨㄣˊ instructions, regenerated for clearer isolated pronunciation, and processed to 2275 ms. Unprompted isolated transcription returned 论, whose character identity is ambiguous in isolation; it is not treated as exact orthographic proof. The final acoustic F0 diagnostic shows a low contour followed by a clear rise near the end, supporting second-tone pronunciation. S01 initial 各 has a clear falling contour. Acoustic diagnostics and AI transcription support QA but do not constitute human listening approval; subjective pronunciation review remains the normal post-merge review queue.

Terminal silence was shortened only after the last speech boundary, retaining about 200 ms of quiet; no character or wrong-option audio was extracted, patched or spliced from other files. Nine final tracks have one timing entry per Han character, ordered 80–900 ms segments, valid durations and <=300 ms terminal tails. AI assigned 60 ms to 白 after the clause pause in S05 and both G05 wrong options; each onset was extended 20 ms into that pause, preserving all audio and following boundaries. Exact adjustments are in L426-timing-corrections.json.

## Browser QA and tooling limits

Used the actual React LessonPanel through an isolated local Vite fixture, Chrome at 390×844. Production JSON and cloud progress were not changed. Observations were from rendered UI and playing/ended media events, not inferred only from file presence.

- Stage 1: 輪 and ㄌㄨㄣˊ visible without overlap; character button plays and completes. Final regenerated character also played in Stage 2.
- Stage 2: exact six cards, three 輪 plus 各/流/組 distractors. All three target clicks accepted, count advanced 1/3, 2/3, 3/3 and stage completed.
- Stage 3: each S01–S05 button played the corresponding final file to ended. Phone image/text layout inspected; teacher lines preserved. Active character highlighting observed in S03/S04/S05. Tests are individual sentence playback checks, not a claim of uninterrupted full-lesson progression.
- G01: click 輪 at S01 index2 accepted, retry/reward controls appeared.
- G02: actual dedicated prefix played to ended; helper stopped at red-framed 輪 and displayed the correct press-and-hold instruction. Physical microphone recording and stitched replay were not exercised: the available browser automation surface does not expose sustained pointer down/up control, only click/drag/key actions. The selector wait surface also timed out once despite later UI media events confirming playback; accessibility controls recovered the other checks. Apply the documented browser tooling fallback in CURRICULUM_PRODUCTION_SOP: all non-browser technical gates pass, while this device-specific recording limitation is explicitly retained for post-merge review. No human microphone or subjective listening PASS is claimed.
- G03: three distinct cards 盒/帽/輪 displayed; correct 輪 filled the blank and accepted.
- G04: four separate single-Han cards; clicking 色、的、衣、服 placed each in sequence and accepted.
- G05: frog played wrong-one to ended, fox played wrong-two to ended, bear played S05 to ended. Selecting bear accepted. All three options are complete independently generated files except correct intentionally reuses S05.

QA browser tab closed, temporary viewport reset, own local server stopped. Stage 4 games were inspected as individual fixtures; no full recording/reward progression claim is made.

## Validation and release review

tools:check PASS; ai:check PASS; curriculum:audit-state PASS (expected future L426 asset-folder warning). Full existing validate:production PASS. Lesson-local production validator PASS; strict asset format audit PASS with zero warnings; L426-package-audit.json PASS. Pushed-branch package intake PASS at origin/codex/l426-complete-package, asset commit ca4c534ea4a3f5a32ab69dfd570f639946de854a; 5 images, 10 audio files, canonical Stage 4, zero blocking package-status defects. Final tip is rechecked after this evidence-only update and reported at handoff.

verify skipped: dependency-blocked, shared state left for Release. Release performs production JSON/planner/ledger updates, ordered integration and verify against the eventual playable curriculum.

Permanent post-merge review: https://icelog-tu.github.io/character-recognition-dojo/lesson-asset-review.html (select L426). Unit asset review: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L426&ref=codex%2Fl426-complete-package . Audio review: https://icelog-tu.github.io/character-recognition-dojo/tools/audio-review.html?unit=L426&ref=codex%2Fl426-complete-package . Check repair status with npm run asset:review-status. No pre-merge teacher approval requirement was assigned.
