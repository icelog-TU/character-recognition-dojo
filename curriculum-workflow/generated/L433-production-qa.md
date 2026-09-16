# L433「願」Production C QA

Package status: dependency-blocked-asset-complete.

Source main: f4bc071d4d14a15bd0e2927a710f197110da6789. Formal curriculum L001–L420, latest 教, 424 learned characters. Locked allowedChars expands to 430 with 自、己、主、由、意 and new 願. Five exact teacher-approved sentences, Han-only spokenText, displayLines and canonical games are preserved. Counts 12/7/8/10/10; coverage 願3、意2、由2、主3、己1、自1. Text, allowed-character, line length and game-index audits PASS. S04 is the final princess wish with ten Han timings; L434 excluded.

Release dependencies: vocabulary lessons L428–L432; all ordinary lessons L421–L432 in playable order; R051/R052 afterLessonOrder=420, coverage L391–L420. Review pair excluded from package. Latest fetch still matches the source main. Shared production JSON, planner export and curriculum ledger remain Release-owned.

## Final image checks

Every final 1024×1024 WebP was viewed beside the complete L058 style set, refined L115-S01/S02, L118-S02, L119-S01, L128-S03 references, and L154-S01, L162-S04, L163-S02 family anchors. Teacher additionally matched L420-S01. No text/number exception. Every image is below 250 KiB. Exact generation identifiers and final SHA256 values are in L433-image-provenance.json; prompts and approved imageNotes are in request/draft/packet. Built-in image_gen used.

- S01 style-lock PASS; cast PASS. Girl voluntarily gives cherished bear to the fixed sky-blue-shirt, green-shorts, orange-backpack YOU boy beside moving boxes.
- S02 style-lock PASS; cast PASS. Low-ponytail sage-cardigan teacher asks the thinking girl while holding the unworn cape. Teacher distinct from mother. Initial background boy resembled YOU; replaced with curly-haired plum-shirt generic boy. Superseded draft excluded from the commit.
- S03 style-lock PASS; cast PASS. Girl puts her toys away; mother points calmly without doing the work for her. YOU refers to daughter.
- S04 style-lock PASS; cast PASS. Everyday girl tells mother her wish; a wordless thought bubble shows the same girl as a princess before a castle. Reality and imagined costume clearly separate.
- S05 style-lock PASS; cast PASS. Distinct gray-haired, glasses-wearing mustard-sweater neighbor owns the single puppy. Mother and daughter visit and leave the naming decision to him.

## Audio and timings

Ten final mono AAC 44100 Hz M4A files, all decodable and loudness-compliant: independent 願, five sentences, independent G02 你 / 意當主角嗎, and two complete G05 wrong options. No extraction or speech splicing. Standard repository OpenAI generation/processing/alignment scripts ran through a lesson-local draft adapter. Shared scripts were not edited. G05 full recordings differ by 狗/鳥 and 主/家 as approved; mean-volume spread 0.9 dB.

Character audio is 1555 ms, mean -19.1 dB, peak -3 dB. Prefix is 1076 ms; suffix is 2415 ms and mean -19.1 dB after a uniform 8 dB gain with limiter. Short fragments were regenerated when transcription did not match. Only final selected M4A files are shipped.

Nine complete AI-aligned tracks have 80–900 ms character spans, ordered indexes, and no final tail over 300 ms. S04 是 and G05 wrong-one 由 onset were refined using measured pauses. Sentence-final endpoints and short-prefix endpoint were refined against silence evidence; S02/S05 terminal silence retains 200 ms. Exact before/after changes are in L433-timing-corrections.json. S04 contains exactly ten final timings. Metadata matches final durations; L433-package-audit.json and L433-duration-report.json describe final files.

Automated pronunciation evidence is not human listening approval. Final independent gpt-4o-transcribe recognizes 願, 你 and the complete S02 text. For the deliberately incomplete G02 suffix, unprompted Whisper transcribes 易當主角嗎 (意/易 share ㄧˋ); alignment then uses the approved 意當主角嗎 context. A separate gpt-4o-transcribe still returns 你當主角嗎. This model disagreement is preserved in L433-suffix-unprompted.json and L433-short-audio-audit.json, not reported as consensus. G02 prefix also uses exact-text alignment context. All other alignment transcripts are unprompted. Generation explicitly requests 願 ㄩㄢˋ, 主角的角 ㄐㄧㄠˇ and 己 ㄐㄧˇ; written transcription alone cannot certify every tone. Teacher subjective pronunciation review remains in the normal post-merge review queue.

## Browser evidence and scope

Real LessonPanel rendered in an isolated local Chrome fixture at 390×844. No production JSON or cloud-state writes. Media playing/ended events establish playback completion, not audible human assessment.

- Stage 1: 願/ㄩㄢˋ visible, standalone audio ended, stage passed.
- Stage 2: three 願 cards among three distractors accepted; 3/3 and stage passed.
- Stage 3: all five final files played to ended; images and approved lines visible; active-character highlight observed; stage passed. 主角 ㄐㄧㄠˇ and 己 ㄐㄧˇ display confirmed.
- G01: sentence index 1 願 accepted.
- G02: dedicated one-character prefix played to ended, then red 願 frame and hold-to-record instruction appeared.
- G03: 願 selected among 事、願、情; accepted in final princess sentence.
- G04: shuffled 收、己、好、自 cards accepted in 自己收好 order.
- G05: all three files played to ended; session frog=correct S05, fox=wrong-two, bear=wrong-one; selecting frog accepted. Reward animation finished, red 下一課 and white 回首頁休息 controls visible on phone viewport.

Physical microphone capture, recording bell and prefix/child/suffix stitched replay were not exercised: the browser control API lacks a sustained pointer-down/up operation for this control. Stage 4 used single-game fixtures; uninterrupted five-round progression and real next-lesson routing were not tested. Technical asset/decode/alignment gates passed; this uses the browser-tooling fallback in docs/CURRICULUM_PRODUCTION_SOP.md. No teacher or human listening PASS asserted. Temporary viewport reset, test tab closed, own local server stopped.

## Validation

tools:check PASS; ai:check PASS; lesson-local formats PASS with zero warnings; lesson-local production validator PASS; final package audit PASS; validate:production PASS; curriculum:audit-state PASS with the expected unintegrated L433 asset-directory warning. Final media total 1,206,160 bytes (about 1.15 MiB).

verify skipped: dependency-blocked, shared state left for Release. Required asset and timing files are complete. Remaining scope is Release dependencies plus the explicitly limited microphone/manual review checks above. Pushed-ref package-intake evidence is appended after push.

Normal teacher repair queue, usable only after Release merges and deploys: https://icelog-tu.github.io/character-recognition-dojo/lesson-asset-review.html ; direct unit https://icelog-tu.github.io/character-recognition-dojo/lesson-asset-review.html?unit=L433&ref=main . Repair state: npm run asset:review-status. This package is not yet published in the main review queue.
