# L376 已 — Production D checkpoint

**partial-package — not asset-complete; do not integrate.**
Branch: `codex/l376-complete-package`.

## Blocking audio gate

The mandatory AI transcript/alignment gate stops at **L376-G02-suffix.m4a**.
Required exact fragment: **經打通了**, beginning after the target 已 in S02.

| Generation | Alignment transcript | Additional evidence |
|---|---|---|
| 1 | 清打通了 | Not a traditional/simplified spelling difference |
| 2 | 精打通了 | Independent gpt-4o-transcribe returned 心打通了 for both raw MP3 and processed M4A |
| 3 | 已經打通了 | Added preceding target syllable; unacceptable for stitched replay |
| 4, current | 已經打通了 | Four-syllable pronunciation guidance still did not pass |

No transcript was rewritten from a non-equivalent character. No target syllable was cut from a full sentence or from a rejected fragment. The current suffix is retained only as diagnostic material on this explicitly incomplete branch, not an accepted production asset.
The align command writes the draft only after all records pass; therefore complete sentence/Stage 4 timing metadata is not committed. Earlier printed matches are not claimed as a finished alignment run.
The legitimate simplified spellings 风/盖 were normalized to 風/蓋 in the lesson-local adapter, per SOP. This does not resolve the separate suffix problem.

Next repair: regenerate the exact four-syllable fragment and pass the transcript gate, then align all final sentence/Stage 4 files, check timing ranges/tails and G05 volume, and complete phone playback/recording QA. If speech is correct but ASR keeps inserting/substituting words, Supervisor must determine an evidence-based review path; this package does not bypass that gate.

## Boundary and scope

Fetched main `95ca55f7`: formal L001–L369, latest 情, 372 learned characters, R044 after L360.
Learner dependencies: **L371 親, L372 交, L373 通, L374 往, L375 經**; all unmerged at claim.
L370 朋友 remains an earlier playable prerequisite, but 朋/友 are not used here and are not added to the locked provisional set.
Release order is **L375 → R045 → R046 → L376**. R045/R046 are absent from main, cover L346–L375 and retain the allowed-character ceiling through L375. They are separate tasks, outside this package.
These Release dependencies do not explain or waive the current audio blocker.

## Approved content and checks

Request, packet and draft preserve the five approved texts, imageNotes, focusChar, displayLines and fixed Stage 4 plan. S04 is **我已經親手把書交還老師。**, not the old tree scene. `zhuyinOverrides[8] = ㄏㄨㄢˊ` records the contextual 還 reading; auditory pronunciation certification remains unfinished.
Allowed set mechanically extracted from 95ca55f7 plus 親交通往經已: **378 characters**, PASS.
Coverage: **已3、經3、往2、通2、交2、親1**, PASS.
Han counts **9/7/8/11/7**, spokenText Han sequence, displayLines join/6-visible-character limit and all Stage 4 indices/options: PASS.
Canonical game order uses sentences **S01/S02/S04/S03/S05**; G01–G03 target 已. G04 missing [0,5,6,7] maps to 往/交/流/道; no word cards.

## Stage 2 actual UI

Local actual app preview showed six cards: **已、站、已、後、往、已**.
After the first target: 1/3 and not complete. After the second: 2/3 and not complete. After the third: 3/3, 全部找到了, 通關.
Thus 3 target cards + 3 old-character cards and all-three-target completion: **PASS**.
The dev console also reported a React state-update warning: Cannot update LessonPanel while rendering FindManyChallenge. The observed 1/3 → 2/3 → 3/3 completion behavior worked; this app-level warning is recorded for Supervisor and was not repaired in this asset package.
Only preview launch state and in-memory curriculum were adjusted; Stage 2 gameplay code was unchanged. No shared production JSON, planner or ledger was changed.

## Image decisions

All scenes require new images. Reuse search found L192-S01 phone-to-mother, L356-S04 bus queue and L358-S05 bus at zoo; visual inspection confirmed they do not match the newly approved action/cast/result. S04 specifically needs a completed return, not a mid-handoff.
Each actual WebP was opened and compared side by side with all L058 images and relevant family/teacher anchors. S01 style-lock PASS, cast PASS; S02 style-lock PASS, cast PASS; S03 style-lock PASS, cast PASS; S04 style-lock PASS, cast PASS; S05 style-lock PASS, cast PASS. No image was rejected or regenerated. No rejected image has been submitted.
All five images are 1024×1024 WebP, total **804,086 bytes**. Ten current M4A files total **356,567 bytes**; total current media **1,160,653 bytes**. These audio files are checkpoint material, not a fully accepted audio package.

## Executed and unfinished

- tools:check, ai:check, startup curriculum:audit-state: PASS.
- curriculum:packet: executed before generation; final approved records restored into packet/draft.
- OpenAI generation: ten MP3 sources, including standalone 已 and independent G02 fragments/whole G05 choices. Only suffix was regenerated.
- assets:audio: completed using unchanged repo processor through the owned draft adapter.
- assets:align:ai: **blocked**, as detailed above; not PASS.
- Lesson-local strict assets:audit: PASS, one unit, five image references, ten audio references, zero warnings (including G05 volume-spread check). All ten audio files ffmpeg-decode successfully.
- Lesson-local validate:production: FAIL because the full alignment run did not commit sentence durationMs/charTimings. Standalone character audio passes the file/duration/volume checks; human auditory certification is not claimed.
- Full shared-state verify: skipped, Release-owned integration.
- Stage 3 highlighter/last-syllable audition, G02 recording/replay, G05 final option listening/volume acceptance: unfinished because mandatory alignment gate is blocked.
- No teacher manual pre-merge review is requested or claimed as an ordinary package gate.

## Review links

Any pushed SHA preview is **pre-merge package preview, not final main review queue**, and this checkpoint is incomplete.
Only after repair, dependencies/review integration and deployment:
- https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L376&ref=main
- https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main
- `npm run asset:review-status -- --unit L376 --ref main`
