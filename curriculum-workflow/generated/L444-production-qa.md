# L444「器」Production QA

Package status: dependency-blocked-asset-complete.

Source main: c243d7d3da7b71be378ed52fb2e27f07bf6017af. Formal curriculum L001–L438, latest 習, 442 learned characters. Locked allowedChars expands to 448 with provisional 練、運、賽、機、操 and new 器. The five exact teacher-approved sentences, Han-only spokenText, displayLines and canonical games are preserved. Counts are 8/10/9/11/10; coverage is 器4、操2、機2、賽2、運1、練1. Text, allowed-character, line-length and zero-based game-index audits pass.

The remaining Release dependencies are ordinary lessons L439–L443. They are excluded from this lesson-local package. Shared production JSON, planner export and curriculum ledger integration remain Release-owned.

## Final image checks

Every final image is a 1024×1024 WebP below the 250 KiB warning threshold and 400 KiB hard limit. The complete set was viewed together against L058 style guidance. Exact generation identifiers are recorded in `L444-image-provenance.json`. No final image contains readable text, numerals, logos or a watermark.

- S01 style-lock PASS; cast PASS. The present-day father/daughter conversation remains primary; the future robot contest is isolated in a wordless imagination bubble with two non-weaponized wheeled robots and two generic contestants.
- S02 style-lock PASS; cast PASS. The intact washer has restrained vibration marks; the fixed father listens with a puzzled reaction while the protagonist observes safely. There is no smoke, spark, monster or dismantling.
- S03 style-lock PASS; cast PASS. The fixed protagonist presses the fan base control after use while the fixed mother reminds her. The scene does not show plug handling.
- S04 style-lock PASS; cast PASS. The protagonist speaks to her fixed mother at home. Xiaoyue retains long curled chestnut hair, crescent-moon clip and distinct face in the future gymnastics bubble; no award result is implied.
- S05 style-lock PASS; cast PASS. The elder and professional are distinct generic adults. The close-up clearly shows a realistic behind-the-ear hearing aid, clear tube, ear and button-press action.

## Audio and timings

Ten final mono AAC 44100 Hz M4A files are present and decodable: standalone 器, five sentence recordings, independently generated G02 prefix/suffix, and two complete G05 wrong options. G05 mean-volume spread is 0.7 dB. All nine timed tracks have one timing per Han character, ordered 80–900 ms spans and no final tail over 300 ms.

AI transcript alignment matched all complete sentences, both teach fragments and both wrong-option sentences after traditional/simplified and same-pronunciation name normalization. Narrow ASR word boundaries for S02 會發, S03 要記, S05 練習 and wrong-two 游泳 were refined from surrounding recognized word spans. The final G02 prefix aligned as 明天有機. The intentionally unusual suffix 人大賽 aligned exactly; three extra unprompted trials returned one exact transcript and two unstable partial/near-homophone renderings, so the exact alignment, source instruction, waveform and timing evidence are preserved without claiming human listening approval.

Standalone 器 produced three unprompted `Sí` transcriptions. Its measured F0 falls about 17.2 semitones from start to end, consistent with the explicitly requested fourth-tone contour. Raw trials, hashes and sampled pitch curve are preserved in `L444-short-audio-audit.json` and `L444-pitch-audit.json`. This automated evidence is not teacher or human listening approval.

## Browser QA evidence and scope

The real LessonPanel rendered in an isolated local in-app browser fixture. It wrote neither production JSON nor cloud state. Media `playing`/`ended` events prove playback completion, not subjective listening quality.

- Stage 1: 器/ㄑㄧˋ visible; standalone audio reached ended; stage passed.
- Stage 2: three 器 cards among three distractors were accepted; 3/3 and stage passed.
- Stage 3: all five sentence files played to ended; all approved sentence text and zhuyin rendered; stage passed.
- G01: index 1 器 accepted in S03.
- G02: the exact sentence and target red-frame hold instruction rendered after the prefix phase. Dedicated prefix/suffix files, decoding and timings passed technical gates.
- G03: 器 selected among 器、機、具 and inserted at S02 index 1.
- G04: shuffled 操、作、習、練 cards were accepted in 練習操作 order.
- G05: the correct S04 and both complete wrong-option files reached playing and ended; selecting the correct option was accepted and reward controls appeared.

Physical microphone capture, the recording bell and child-voice stitched replay were not exercised. The browser-control surface did not provide a reliable sustained pointer hold for that control. Stage 4 used single-game fixtures rather than one uninterrupted five-round session. Technical assets, rendering, interactions, decoding and alignment passed; no microphone or human listening PASS is asserted.

## Validation

Startup `tools:check`, `ai:check` and `curriculum:audit-state` passed on the correct source branch. Lesson-local package audit and production asset validation pass. Final package media is about 1.18 MiB. Pushed-ref package intake evidence is recorded after the final commit and push.
