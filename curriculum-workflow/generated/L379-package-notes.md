# L379 Production D package checkpoint

Package status: **partial-package**. Required QA findings remain; this is not an asset-complete handoff.

## Boundary and ownership

- Branch: `codex/l379-complete-package`; claim `35c29c6e`.
- Base/main inspected: `7e630478c9123dd3b733539b469276eb60e58575`, formal L001-L369, 372 learned Han; R043/R044 after L360.
- Learner dependencies: L374, L375, L376, L377, L378; provisional 往、經、已、近、接. Locked allowed set: 378 Han.
- Release playable order requires all predecessors through L375, R045/R046 (L346-L375, ceiling L375), then L376-L379. Dependencies and review pair remain unmerged at this checkpoint.
- Only L379 package files and its registry row were changed. Shared curriculum, planner, ledger and app implementation were not changed.
- Local preview reads predecessor branch drafts into memory for their zhuyin; it does not certify those packages or integrate them into main. Preview launch uses completed/free-browse local QA state and no account login.

## Approved data and mechanical checks

Request, packet and draft preserve the approved five sentences and full imageNotes. S04 is the bird scene, S05 uses the protagonist girl.

- Allowed text/spokenText/displayLines/focusChar/options: PASS.
- Han counts: 11 / 8 / 11 / 10 / 12. spokenText is exactly Han-only text.
- displayLines joins and <=6 visible characters per line: PASS. S05 four lines preserve approved phrase boundaries.
- Coverage: 送4、接2、近2、已2、經2、往1, all minimums PASS.
- Canonical five-game order, unique sentence use, targets/indexes 7/5/2/2/10: PASS.
- G03: exactly 送/拿/借, one correct, two distractors, three distinct single-Han cards; one blank at S03 index2.
- G04: four single-Han cards, missing [6,7,8,9] = 就/飛/走/了 and correctOrder mapping PASS.
- G05: three 12-Han texts; wrong-one differs at10/11, wrong-two at11; all audio refs present.

## Image review and reuse decision

Built with the built-in imagegen tool; final prompt basis is each draft sentence.imagePrompt and its exact approved imageNotes. Reference-sheet roles were explicit: first row full L058 style-only set, second row refined L115/L118/L119/L128 examples, third row first three family anchors. S03 additionally used the actual xiaoyue.webp reference.

Existing curriculum was searched for sending/receiving and bird-departure scenes. L158-S03 was opened: wind and multiple birds, no approaching girl, so unsuitable for S04. No exact approved reuse was identified for the other four scenes. All five images were newly generated. No image variants were rejected or substituted.

Every final 1024x1024 WebP was opened individually and compared in a combined contact sheet against the actual L058/refined/family references. S03 was also compared against the separate full-size Xiaoyue anchor.

| Image | Style-lock | Cast | Scene evidence | Bytes |
|---|---|---|---|---:|
| S01 | PASS | PASS | Fixed blue-shirt father holds girl's hand toward school gate; yellow backpack, same short-bob pink-clip girl | 235862 |
| S02 | PASS | PASS | Distinct generic child with straight bob, orange top and brown shorts alone holds toy box; girl's hands free; father in background retains family identity | 181696 |
| S03 | PASS | PASS | Girl alone holds flowers; Xiaoyue empty hands, long chestnut curls, crescent clip, lavender/cream/teal clothes, white socks and violet shoes match reference | 197790 |
| S04 | PASS | PASS | Girl stopped near now-empty branch, one bird airborne away; no chasing or fire | 249590 |
| S05 | PASS | PASS | Distinct short gray-brown-haired adult guest in purple leads toward exit; girl follows in socks; outdoor shoes on lower tiled entry | 181740 |

Images total 1,046,678 bytes; ten audio files total 414,310 bytes; all shipping assets 1,460,988 bytes. All image targets <=250KB and folder target <=2.0MB.

## Audio and timing

- Standard repository OpenAI coral / gpt-4o-mini-tts generation, then assets:audio mono AAC 44100Hz processing. Standalone 送 input generated independently, not cut from a sentence.
- Exact G02 fragments 舊玩具已經 / 人了 generated separately. G05 wrong texts generated as complete sentences.
- Suffix first two attempts transcribed 人啦 and 讲了 and were rejected. Third independent generation with exact ㄖㄣˊ + neutral ˙ㄌㄜ pronunciation instructions transcribed 人了. Only third version is retained in shipping assets.
- Final silence was identified at -45dB, retaining 200ms after speech decay and stream-copying AAC; no spoken segment was cut/spliced. See L379-tail-report.json and L379-trim-tail.cjs. All nine final processed sentence/fragment/option tracks were re-aligned after trimming and transcript-matched successfully.
- Final charAudio duration 1230ms; production duration/audibility check PASS. All ten referenced audio files decode and pass strict format/volume audit, including G05 <=3dB mean spread.
- Five sentence timing counts 11/8/11/10/12 with contiguous indexes and positive, ordered, in-duration spans. G02 and G05 timing metadata are included in draft.
- **Timing review still required:** S03 last AI end3080/duration3390 (310ms gap); S04 last AI end3360/duration3808 (448ms gap); G02 prefix end1840/duration2159 (319ms gap); G05 wrong-two end4980/duration5294 (314ms gap). Silence detection indicates only about200ms final silence, so AI endpoint vs audible decay needs listening review, especially S04 final 了. G05 wrong-two index6 我 has 2140-3120 (980ms), including a pause; compare earlier pre-tail alignment start2980 and final processed audio before accepting. Timings were not silently replaced with equal-duration or energy estimates.

## Browser QA evidence and remaining blockers

Chrome local preview at `http://127.0.0.1:5175/character-recognition-dojo/`; phone viewport DOM 390x844, tablet 820x1180.

- Stage1: 送 and ㄙㄨㄥˋ visible; one tap entered playback and returned to completed state. Subjective listening not certified by automation.
- Stage2: initial six cards 都/送/最/送/送/近; exact three targets. After first/second target, UI remained incomplete at1/3 and2/3; third reached3/3 全部找到了 and stage completed. PASS. Initial preview omitted provisional zhuyin; after loading predecessor metadata only in preview memory, provisional zhuyin rendered.
- Stage3: all five actual sentence-card taps entered playback, showed active-character highlights and returned to idle; final UI said 句子都聽完了. S05 four lines plus zhuyin visible above floating playback bar. These are UI playback observations, **not** five-sentence actual auditory/highlight-synchronization certification.
- **Real UI defect: G01/S01 phone clipping.** On390px viewport, first row 最近都是爸爸 has first token 最 at x14.0625..69.375 while its `.sentence-line-row` spans x49..326 (277px). Screenshot clips the first Han and rightmost line content. Correct 送 immediately circled on tap, but this does not excuse clipping. Likely shared CSS `.sentence-game-card .sentence-line-row {flex-wrap:nowrap}` plus fixed nonshrinking token widths. Supervisor/Release should repair responsive shared layout preserving approved lines and retest; Production did not alter CSS or rewrite approved displayLines.
- G02 reached 請按一下紅框的字。聽到鈴聲，就大聲念出來。 AX click on active red 送 produced no recording transition. Direct locator click found one visible enabled target but timed out waiting for CDP Runtime.evaluate after3000ms. No recording, ding or stitched replay was certified. Used existing 跳過這一題 solely to inspect later rounds; skip is not a G02 PASS.
- G03 actual UI: initial 借/送/拿, one blank. Wrong 借 and 拿 each gave wrong feedback without completing; cards restored after feedback. 按我看解答 revealed送 without progression; 重新挑戰這一題 restored all three cards/blank. Only送 completed and exposed下一題. PASS for tested initial/wrong/retry/correct flow. Full leave/re-enter was not separately tested.
- G04 actual initial shuffle 走/飛/了/就; clicking就飛走了 filled four single slots and completed. PASS.
- G05 three avatars each entered playback on first tap. Frog and fox returned to idle; bear playback was started but its natural ending was not separately captured before answer-reveal. Full actual listening remains pending. Answer-reveal identified frog without progress; retry restored choices; selecting frog completed and exposed領取獎勵. One shuffled run is not proof that correct position varies across entries.
- Reward: actually pressed領取獎勵 after G05 and reached4/4 with replay/home controls. Preview launch treated this as an already-completed replay and G02 was skipped, so no new reward credit/full recording path is claimed. On tablet, footer navigation and floating bar were visible. Preview ends at L379 (no L380), so button is disabled沒有下一課 rather than actionable下一課. Mobile after resizing placed navigation below fold; pressing the already-used reward button did not re-scroll. **Fresh phone completion and active red-next navigation remain unverified**, not PASS. Release needs a valid following course in its test fixture.
- Console also reported existing `Cannot update LessonPanel while rendering FindManyChallenge`; browser extension listener/message-channel errors appeared. No app changes made.

Browser fallback cannot hide the real G01 clipping or pending timing concerns. Package remains partial-package.

## Checks and handoff

PASS: fetch/clean startup/remote ownership checks; tools:check; ai:check; curriculum:audit-state; direct origin/main boundary read; curriculum:packet; mechanical data audit; nine-file final AI transcript alignment; lesson-scoped assets:audit strict (1unit,5images,10audio,0warnings); lesson-scoped validate:production.

Media commands use L379-pipeline.cjs to run the unchanged repository command entry scripts against the owned draft in memory and redirect writes to owned draft/report paths. This avoids shared production JSON integration. Run `node curriculum-workflow/generated/L379-pipeline.cjs formats` or `production` to reproduce scoped audits. Alignment/process/generate actions are sequential and must not run concurrently.

Full npm verify skipped: dependency-blocked; shared-state integration is Release-owned. Package-intake must be run against pushed tip and is expected to reject partial-package; do not report asset-complete from format-validator PASS.

After Supervisor resolves the shared mobile layout, finish timing listening/refinement and G02/mobile/tablet navigation QA, refresh packet/draft QA and run intake before upgrading status.

Pre-merge preview must use full pushed SHA and be labeled **pre-merge package preview, not final main review queue**. Post-merge teacher review (usable only after Release integrates and deploys): https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L379&ref=main ; `npm run asset:review-status -- --unit L379 --ref main`.
