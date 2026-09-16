# L410 Production D package QA

## Boundary and scope
- Normal single-character lesson 試 (ㄕˋ), five required rounds.
- Assignment boundary 2632d2c399197f4d62e13e78faf1854ccce7f219: L001-L404. Locked allowed set 414 Han, unchanged; excludes 定/成/考.
- Last fetched main 346b7af0: formal through L408; L405-L408 and R049/R050 after405 merged. Remaining learner/playable dependency L409 辦. No shipping curriculum/planner/ledger edits.
- Approved sentence, spokenText, displayLines, imageNotes and game plan preserved. See L410-final-data-audit.json.

## Image reuse and final visual QA
All final exported 1024-square WebPs opened side by side with full L058 style contact sheet, refined L115-S01/S02, L118-S02, L119-S01, L128-S03 and family L154-S01/L162-S04/L163-S02. Contact sheets retained as L410-S01-comparison.jpg through S05.
- S01 style-lock PASS; cast PASS. Exactly three red blocks: one central, two moved aside. No reusable asset matched exact count/action.
- S02 style-lock PASS; cast PASS. Mother crouches with larger matching shoes, smaller pair on floor. L393-S05 inspected and rejected for reuse because it depicts a different shoe-fitting state and shopkeeper role.
- S03 style-lock PASS; cast PASS. Brush dipped in water cup, palette separate, dry incomplete flower painting. Existing watercolor scenes did not match adding a little water.
- S04 style-lock PASS; cast PASS. Dusk, lamps on, father holds girl's hand, ball in free arm, girl turns back. Initial generated gaze toward father was corrected; discarded PNG is outside repo, not shipped. Older night-park scenes did not match dusk exit.
- S05 style-lock PASS; cast PASS. One snack returned to shelf while several stay in basket; no health/weight framing. No accurate reusable scene.
No readable writing/numbers or branding in final images. Prompts and source filenames in L410-image-generation.json. Raw generated PNGs remain outside shipping assets.

## Audio and alignment
- Standard OpenAI TTS through repository generator, standalone 試 plus five whole sentences, two exact G02 fragments and two whole G05 wrong sentences: ten processed AAC M4A files, mono 44100Hz.
- Independent gpt-audio-1.5 listening evidence for all ten final SHA256 hashes; this is AI listening, not teacher/manual auditory QA.
- S01 and S02 each audibly retain two 試 syllables. S03 and G02 suffix 著 are neutral ˙ㄓㄜ. G02 prefix ends 再; suffix starts 著.
- Original exact input preserved; no homophone spelling substitution, no splicing or extracting sentence fragments.
- Unprompted Whisper misrecognized S01 減/試試. Independent audio model recognized the correct full sentence. Alignment rerun with exact text context resolved ASR ambiguity; raw transcripts saved. First independent S01 model response did not analyze audio; retry produced valid evidence.
- AI alignment covers all five sentences and all auxiliary audio. See technical QA for two evidence-based endpoint/onset corrections: S01 final 法 decay; G05 wrong-two 快 onset after measured inter-clause silence. No equal-split fallback substituted for AI alignment.
- Tail trimming removes only measured trailing silence and preserves final decay. Standalone char audio retains standard processing (2066ms total, audible shi4).
- ffmpeg decoding all referenced audio PASS; timing lengths/order/spans and final sentence tail checks PASS. G05 mean-volume spread 1.4dB, within 3dB.

## Browser QA and tooling limitation
Local isolated Vite fixture at 127.0.0.1:5180; curriculum supplied in memory, shipping JSON unchanged. Chrome at 390x844.
- Stage 1 standalone audio clicked and playback indicator shown.
- Stage 2 exact six cards: three 試 plus 法/不/減; counts 1/3, 2/3, 3/3 verified; only third target completed stage.
- Stage 3 all five sentence cards individually played to completion; UI reports 句子都聽完了. Active character highlight observed in screenshots for S02-S05; phone lines and S03 neutral-tone annotation rendered correctly. S01 completed playback, but sub-syllable visual synchronization of every character is not claimed.
- G01 first 試 at index5 selected successfully.
- G02 helper reached ready state after prefix, target 試 outlined, suffix 著 rendered neutral. Ordinary target click did not enter recording. Supported computer-use actions do not provide sustained pointer-down/up control, so actual microphone recording, ding capture and stitched live recording replay were not completed. Used visible skip control to inspect subsequent games; reward navigation checks therefore do not prove recording success.
- G03 has three distinct options 拿/穿/試; only first 試 blank, second remains. Correct answer fills first only.
- G04 displayed 減/少/點/一 (shuffled), accepted 減/少/一/點.
- G05 all three avatar options individually entered playback and returned to idle. Answer reveal retained challenge state; retry/correct selection showed reward button.
- One Playwright click timed out waiting for Runtime.evaluate. AX click control recovered. Console captured asynchronous listener/message-channel-closed errors at the same time; no evidence these are asset decode errors.
- Browser audio is not exposed as a direct auditory stream to this agent. Actual pronunciation/final-syllable assessment uses separately recorded independent AI audio evidence, not a claim of human listening.
- Apply documented browser automation fallback only after technical gates pass. Teacher subjective review remains post-main; no teacher pre-merge PASS is claimed or requested.

## Verification
Startup tools:check, ai:check, curriculum:audit-state passed. Packet generated through curriculum:packet before assets.
Owned draft adapter executes unchanged repository generation/process/AI alignment/image optimization/production validator/format audit scripts without writing shared production JSON. L410-sync.cjs performs decoding/volume/timing metadata sync; L410-audit.cjs checks final approved content and options.
Remote package-intake PASS: npm run curriculum:package-intake -- --unit L410 --ref origin/codex/l410-complete-package (five images, ten audio files, five canonical games; no blocking package-status defects). Full shared-state verify is skipped because this branch intentionally contains no production JSON integration; Release owns integration and verify.

## Sizes
Five images: 798408 bytes; ten audio files: 369770 bytes; total: 1168178 bytes. Every image below 250 KiB; total below 2.0 MB.


Final reward UI at phone width: red disabled 沒有下一課 (L410 is last fixture lesson), white 回首頁休息 and repeat button visible. No L411 fixture was fabricated. Browser viewport reset and QA tab closed.

Validation outcome: global npm run validate:production PASS (baseline only); isolated L410 production validator and format audit PASS (0 warnings); final approved-content/mechanical audit PASS; diff check cleaned. No material application source was changed.
