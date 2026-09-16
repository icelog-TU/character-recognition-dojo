# L383 Production D package QA

## Ownership and boundary

- Branch: `codex/l383-complete-package`; claim commit `ad260e47`.
- Main inspected directly: `250ca4a3`, formal L001-L375, latest 經, 379 learned Han. Latest pair R043/R044 after360.
- Learner dependencies L378/L379/L380/L381/L382; provisional 接送連傳相; locked allowed set385. No extra provisional characters; 寫 and 封 excluded from learner-facing text.
- Release order requires R045/R046 after L375 (L346-L375 coverage, ceiling L375), then L376-L382 before L383. All remain Release blockers at this checkpoint, not Production preparation blockers.
- Only L383 files and its registry row are owned. Shared production JSON, planner, ledger and app implementation are unchanged. Local preview uses in-memory provisional zhuyin metadata and free browsing; those fixture entries are not shipping lessons.

## Approved data

- Request, packet and draft preserve all five approved text/spokenText/displayLines/focusChar/imageNotes records.
- Han counts8/9/11/9/11; coverage 信4、相2、傳2、連2、送1、接1: PASS. All learner-facing Han are allowed; displayLines joins exactly and each line is <=6 visible characters.
- G01-G05 canonical types, unique sentence use, Han target indices2/8/6/2/4: PASS.
- G02 prefix exactly 我收到小光送來的, eight Han. 信 is final; no suffixSrc or blank suffix file.
- G03 exactly 信/想/看, three distinct single-Han cards, only 信 correct, missing[6].
- G04 missing[1,2,3]=信/傳/給; three single-Han cards and correctOrder mapping PASS.
- G05 three eleven-Han options; wrong-one differs at3 (重→大), wrong-two at5/6 (爸爸→媽媽); full-sentence dedicated audio.
- Context zhuyinOverrides: S01 index1相 and S03 index5相 ㄒㄧㄤ; S05 index3重 ㄓㄨㄥˋ. Phone UI displayed these readings.

## Images, reference inputs and reuse

Built-in imagegen skill used, one generation per scene. Prompt set is recorded in each draft sentence.imagePrompt and exact imageNotes. Actual reference sheet contains full L058-S01-S05 style-only set, refined L115-S01/S02, L118-S02, L119-S01, L128-S03, plus family L154-S01/L162-S04/L163-S02; sheet's final teacher scene provided teacher identity. S02 additionally used actual xiaoguang.webp and S04 actual xiaoyue.webp, opened before generation. Every final exported WebP was opened individually, then compared on a combined contact sheet against L058/refined/family references; named children compared against full-size anchors.

Reuse search found L251-S01 bed, L252-S03 sofa and L255-S02 sand as heavy-object scenes, all semantically unsuitable for a father unable to lift a table. No matching approved ball-belief or sealed-letter named-cast scene was found. All five images newly generated. No image variants rejected; S01 recompressed from its original generated PNG to meet250KB target, not regenerated.

| Image | Style-lock | Cast | Semantic check | Bytes |
|---|---|---|---|---:|
| S01 | PASS | PASS | Girl still holds ball with both hands; fixed blue/green you boy ready to catch, not Xiaoguang | 212892 |
| S02 | PASS | PASS | Girl alone holds sealed letter; Xiaoguang glasses/navy vest/khaki shorts, both hands withdrawn | 203758 |
| S03 | PASS | PASS | Girl's open book depicts winged horse above mountains; father gently skeptical with open palm | 155396 |
| S04 | PASS | PASS | Distinct tied-hair teal teacher hands unopened letter; Xiaoyue's crescent clip/curls/lavender/teal identity | 135410 |
| S05 | PASS | PASS | Father exerts effort, table remains level with feet on floor; girl safely aside | 140422 |

S03 follows the approved textual continuity of the flying horse above mountains. At inspection `origin/codex/l382-complete-package` was claim-only `39f28667`, with no L382 draft or assets; exact comparison with its future horse illustration was unavailable. Teacher may review this cross-lesson detail in the post-main queue.

All images1024x1024, <250KB. Images total847878bytes; audio total361304bytes; full asset folder1209182bytes (~1.15MiB), below2MB target. Raw generated PNG files remain outside public shipping assets in Codex generated_images.

## Standard OpenAI audio and alignment

- `ai:check` ready: standard OpenAI gpt-4o-mini-tts/coral, natural Taiwan Mandarin instructions.
- Nine independently generated inputs: 信, five approved spokenText strings, exact G02 prefix, and two entire G05 wrong choices. No extraction or splicing from sentence audio.
- Repository `generate-audio-drafts.mjs`, `process-audio-assets.mjs`, `align-audio-timings-ai.mjs` used through L383-pipeline.cjs, supplying owned draft in memory and redirecting writes to owned files. Shared production JSON never edited.
- Initial S04 transcription returned 小悦 instead of 小月. S04 alone regenerated, then exact Traditional text comparison passed; neither changing approved text nor treating a homophone as equivalent was used. Only replacement audio is shipping.
- Standard processing monoAAC44100Hz/about96k. Long final silence identified at -45dB and removed by AAC stream copy, retaining200ms after detected speech decay (S04 retains100ms); no spoken segment cut or patched. Every final file decoded; all eight sentence/fragment/option files re-aligned after final trimming.
- Sentence durations2322/3088/3715/3367/4319ms; tail gaps from final AI ends282/288/275/267/279ms, all<=300ms.
- Every AI timing is ordered, in range and80-900ms. Punctuation pauses remain gaps, not artificial extended syllables.
- Standalone 信 duration1137ms, production audibility/duration gate PASS. G02 prefix2577ms, exact8-Han transcript and metadata present; target 信 absent from prefix.
- G05 correct4319ms / wrong-one3459ms / wrong-two3552ms; mean-volume spread0.9dB. All9 audio max>=-12dB, mean>=-28dB. Final measured values and durations are in L383-duration-report.json.
- Raw source MP3s remain ignored in curriculum-workflow/audio-inbox/L383; no invalid suffix or obsolete S04 take committed.

## Browser QA and SOP tooling fallback

Chrome local preview http://127.0.0.1:5175/character-recognition-dojo/, phone390x844. No account sign-in or cloud writes.

- Stage1: first character-card tap entered playback and completed; target/zhuyin rendered.
- Stage2: six cards 相/信/我/信/信/你. First/second correct taps remained1/3 and2/3; third reached3/3 and completion. PASS.
- Stage3: all five sentence cards entered playback; after all five the UI showed 句子都聽完了 and3/4. S03 screenshot captured active 連 highlighting and complete three-line sentence; context zhuyin 相/重 rendered correctly. These are UI observations, not certified subjective listening/highlight synchronization.
- G01 phone screenshot showed complete two-line sentence inside card; correct 信 completed with next control. G02 screenshot showed five-Han first line and four-Han second line completely visible; helper stopped at red-framed final 信 and asked for press-and-hold.
- Tool limitation: Playwright S02 click found one enabled visible button but CDP Runtime.evaluate timed out after3000ms. Accessibility click recovered sentence playback. Available browser input API lacks a sustained pointer-down/hold-duration method for G02. G02 recording/ding/stitched child replay was therefore not certified; existing skip control used solely to inspect following rounds, not counted as recording success. No microphone permission prompt was accepted.
- G03 initial cards 想/看/信. Wrong 想 did not complete; answer reveal showed 信 without progression; retry restored all3 cards and blank; only correct 信 completed. Full leave/reenter and second distractor were not separately tested.
- G04 initial cards 傳/信/給; single-Han selection 信→傳→給 filled slots and completed.

- G05: all three avatars entered playback on first accessibility tap and each returned to idle before the next tap. Correct was the second reader (fox), not first. Answer reveal did not complete; retry restored choices, selecting fox completed. This confirms one displayed order, not random distribution over repeated entries.
- Actual phone 領取獎勵 tap reached4/4; completion screenshot showed 再次練習本課, disabled 沒有下一課 and white 回首頁休息 visibly above the floating playback bar. At820x1180 tablet the completion controls were likewise visible. L383 is the last fixture lesson, so active next-lesson navigation was not exercised; no unapproved L384 was invented. G02 was skipped, so this is navigation evidence, not proof of a complete recording path or reward accounting.
- Console included existing shared React setState-during-render warning (LessonPanel/FindManyChallenge) and listener/message-channel errors. Stage2 still completed at exactly3/3. No app-source repairs made.
- Browser viewport reset and owned local preview server stopped after QA.

Browser fallback is used only for tool-limited playback/recording certification after non-browser technical gates pass; subjective listening/highlight synchronization and G02 child recording are not claimed as manually heard. Subjective teacher audio/image review remains post-main. No pre-merge teacher approval requested or claimed. Package status: **asset-complete-package**, with Release dependency status **dependency-blocked-asset-complete**.

## Validation and delivery

PASS: git fetch/clean startup/ownership; npm run tools:check; npm run ai:check; npm run curriculum:audit-state; direct origin/main production boundary; npm run curriculum:packet; L383 mechanical audit; final8-file AI alignment; strict lesson-local asset format audit (1unit/5images/9audio/0warnings); lesson-local production validator. Pipeline formats/production run the unchanged repository command entry scripts against L383 itself, not an unrelated main-only validator.

Full npm verify skipped: dependency-blocked, shared integration owned by Release. Package-intake runs against pushed origin/codex/l383-complete-package before reporting asset-complete.

Post-main teacher queue (usable only after Release merges and deploys): https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L383&ref=main ; https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main ; `npm run asset:review-status -- --unit L383 --ref main`.

Any pre-merge URL must use full pushed SHA and be labeled **pre-merge package preview, not final main review queue**.
