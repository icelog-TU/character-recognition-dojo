# L474 Production QA

- Unit: L474「而」
- Owner: Production C / parallel-c
- Source: 29406e21ead23463b62b06812997e6a871ffcef1, formal L001-L465「招」, 469 learned characters, R056.
- Status: dependency-blocked-asset-complete; Release blockers R057/R058 and L468-L473.

## Curriculum

- Locked allowedChars: 476 unique Han (formal 469 + 該、應、答、題、案、反、而).
- Allowed-character, coverage 而3/反2/案2/題2/答2/應1, sentence Han counts 11/9/9/10/8, spokenText, displayLines, focusChar and canonical Stage 4 indexes: PASS.

## Images

- S01 style-lock PASS, cast PASS: recurring girl and father at a home study desk, difficult problem shown by expression; notebook has abstract unreadable marks only. S02 style-lock PASS, cast PASS: recurring girl and father with exactly four picture cards (bird, butterfly, dog, fish), and girl clearly selects both valid flying animals. S03 style-lock PASS, cast PASS: recurring girl remains recognizable in pajamas, safely awake in bed with one night-light and no distraction. S04 style-lock PASS, cast PASS: recurring girl and mother, unbreakable cup and visible spill clearly show helping backfired without injury. S05 style-lock PASS, cast PASS: recurring girl and mother; bread remains almost whole with exactly one small bite. All five final 1024x1024 WebPs were opened together in a contact sheet; no readable text or numbers.

## Audio and timing

- OpenAI gpt-4o-mini-tts with cedar Taiwan Mandarin delivery produced 10 final mono AAC M4As: standalone 而, five complete sentence files, independently generated G02 prefix/suffix, and two complete G05 wrong choices. No sentence or option audio was spliced. G05 option files were post-generation loudness normalized together and pass the 3 dB spread gate.
- AI alignment PASS for five sentences, G02 prefix/suffix and both G05 wrong choices. Counts exactly match Han-only sequences; spans are ordered and nonoverlapping. Teacher-requested G02 prefix repair inserts a measured 334 ms pause after 想幫忙 before final 反; exact transcript remains 想幫忙反, final 反 is complete ㄈㄢˇ, and no 而 is present.
- Independent gpt-audio-1.5 listening against final SHA256 hashes reports exact approved transcripts, natural Taiwan Mandarin, no omissions/clipping/substitutions or awkward pauses. Confirmed 而 ㄦˊ, 答案 ㄉㄚˊ, 應該 ㄧㄥ ㄍㄞ, 睡不著 ㄓㄠˊ, 而已 ㄧˇ, G02 prefix-final 反 ㄈㄢˇ with no 而, and suffix-final 了 audible neutral tone. This is AI listening, not teacher manual auditory approval.
- Teacher manual pre-merge audio QA PASS at reviewed ref 610157d8cc5388b62946768b62972c4113c98f34; teacher approved the repaired L474 audio package, including the G02 prefix pause.

## Interaction and intake

- 390x844 LessonPanel QA PASS for Stage 1 character playback, the six-card Stage 2 set with exactly three 而 targets, all five Stage 3 sentence/image playbacks, Stage 4 G01, and the G02 prefix/target/suffix presentation. Physical microphone hold/record/replay was not automated; G03-G05 are covered by canonical index, option-order, audio-reference and package validation checks.
- Package intake PASS on pushed origin/codex/l474-complete-package: 5 images, 10 audio files, all five canonical Stage 4 types, and no blocking package-status defects.
