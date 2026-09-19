# L480 Production QA

- Unit: L480「趣」
- Owner: Production C / parallel-c
- Source: 7d2827d5, formal L001-L465「招」, 469 learned characters, R056.
- Status: dependency-blocked-asset-complete; Release blockers R057/R058 and L474-L479.

## Curriculum

- Locked allowedChars: 476 unique Han (formal 469 + 而、且、故、緣、無、聊、趣).
- Allowed-character, coverage 趣3/聊4/無2/緣2/故1/且1, sentence Han counts 11/10/11/12/11, spokenText, displayLines, focusChar and canonical Stage 4 indexes: PASS.
- S04 approved four-line layout preserved exactly: 無人機 / 飛不動， / 是沒電的 / 緣故。

## Images

- S01 style-lock PASS, cast PASS: recurring father and protagonist girl in a natural two-way park conversation with distinct generic adults. S02 style-lock PASS, cast PASS: protagonist, Xiaoyue and Xiaoguang remain visually distinct and match the provided cast anchors; the wordless thought bubble shows the teacher smiling at the harmless puppy-picture sticker. S03 style-lock PASS, cast PASS: protagonist independently selects a wordless fantasy picture book in a warm home reading area. S04 style-lock PASS, cast PASS: protagonist and father inspect a complete grounded drone and battery with no crash, smoke or readable display. S05 style-lock PASS, cast PASS: protagonist and father are both visibly mid-step while chatting on a safe park path. All five final 1024x1024 WebPs were inspected together against L058/refined style examples; no readable text or numbers.

## Audio and timing

- OpenAI gpt-4o-mini-tts with cedar Taiwan Mandarin delivery produced 10 final mono AAC M4As: standalone 趣, five complete sentence files, independently generated G02 prefix/suffix, and two complete G05 wrong choices. No sentence or option audio was spliced. G05 mean-volume spread is 0.8 dB and passes the 3 dB gate.
- AI alignment PASS for five sentences, G02 prefix/suffix and both G05 wrong choices. Counts exactly match Han-only sequences; spans are ordered and nonoverlapping. G02 prefix ends with complete 有 and contains no 趣; suffix is exact 的書看 with audible neutral-tone 的 and no leading 趣.
- Independent gpt-audio-1.5 listening against final SHA256 hashes reports exact approved transcripts, natural Taiwan Mandarin, and no omissions/clipping/substitutions or awkward pauses. Confirmed 趣 ㄑㄩˋ, 緣 ㄩㄢˊ, 聊 ㄌㄧㄠˊ, 而 ㄦˊ, 且 ㄑㄧㄝˇ, and G02 suffix 的 as neutral tone. This is AI listening, not teacher manual auditory approval.

## Interaction and intake

- 390x844 LessonPanel QA PASS for Stage 1 character playback, the six-card Stage 2 set with exactly three 趣 targets, all five Stage 3 sentence/image playbacks, and Stage 4 G01/G02 presentation. S04 renders as the approved four clear lines without overflow or isolated punctuation. Physical microphone hold/record/replay was not automated; G03-G05 are covered by canonical index, option-order, audio-reference and package validation checks.
- Pending pushed-ref intake.
