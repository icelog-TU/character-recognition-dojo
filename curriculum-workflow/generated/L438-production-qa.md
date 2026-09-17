# L438「習」Production QA

Package status: dependency-blocked-asset-complete.

Source main: 72b61a615628b25a2c78b63c9c400f9adcca946f. Formal curriculum L001–L435, latest 助, 439 learned characters. Locked allowedChars expands to 442 with provisional 補、修 and new 習. The five exact teacher-approved sentences, Han-only spokenText, displayLines and canonical games are preserved. Counts are 10/12/12/11/9; coverage is 習3、修2、補2、助2、互1、願1. Text, allowed-character, line-length and zero-based game-index audits pass.

The remaining Release dependencies are R053/R054 after L435 plus ordinary lessons L436 and L437. They are excluded from this lesson-local package. Shared production JSON, planner export and curriculum ledger integration remain Release-owned.

## Final image checks

Every final image is a 1024×1024 WebP below the 250 KiB warning threshold and 400 KiB hard limit. The complete set was viewed together against L058 style guidance. Exact generation identifiers and the revised S02/S03 lineage are recorded in `L438-image-provenance.json`. No final image contains readable text, numerals, logos or a watermark.

- S01 style-lock PASS; cast PASS. The fixed mother safely handles needle and thread while the protagonist selects a patch; the small tear and in-progress repair remain visible.
- S02 style-lock PASS; cast PASS. Xiaoguang keeps round glasses, neat short black hair, white shirt and navy vest. The protagonist writes on her own separate paper while he explains from his own book. The first candidate's protagonist drift was corrected.
- S03 style-lock PASS; cast PASS. A generic adult clerk repairs a large self-service copier while the fixed protagonist waits with papers at a safe distance. The first candidate's protagonist drift was corrected.
- S04 style-lock PASS; cast PASS. Two deliberately generic classmates exchange two different books during quiet study; they do not resemble the fixed child cast.
- S05 style-lock PASS; cast PASS. The fixed protagonist waits in the shallow pool area while a distinct generic coach teaches other children; a small wordless thought bubble shows her future supervised swimming.

## Audio and timings

Ten final mono AAC 44100 Hz M4A files are present and decodable: standalone 習, five sentence recordings, independently generated G02 prefix/suffix, and two complete G05 wrong options. G05 mean-volume spread is 0.6 dB. All nine timed tracks have one timing per Han character, ordered 80–900 ms spans and no final tail over 300 ms.

AI transcript alignment matched all complete sentences, both teach fragments and both wrong-option sentences after traditional/simplified normalization. Narrow ASR word boundaries for S02 幫助 and S04 同學 were refined from the surrounding recognized word spans; terminal endpoints for S03 and the two wrong options were extended within retained audio tails. The final independent G02 suffix alignment returned exact 班功課. Three additional unprompted trials varied only on its initial homophonic character (搬/辦), so the exact aligned transcript, source instruction, waveform format and timing evidence are preserved without asserting human listening approval.

Standalone 習 produced three unprompted transcripts of `Si`. Its measured F0 dips briefly then rises about 5.8 semitones to the peak, consistent with the explicitly requested second-tone contour. The raw trials, hash and sampled pitch curve are preserved in `L438-short-audio-audit.json` and `L438-pitch-audit.json`. This automated evidence is not a teacher or human listening approval.

## Browser QA evidence and scope

The real LessonPanel rendered in an isolated local in-app browser fixture. It wrote neither production JSON nor cloud state. Media `playing`/`ended` events prove playback completion, not subjective listening quality.

- Stage 1: 習/ㄒㄧˊ visible; standalone audio reached ended; stage passed.
- Stage 2: three 習 cards among three distractors were accepted; 3/3 and stage passed.
- Stage 3: all five sentence files played to ended; all approved sentence text and zhuyin rendered; stage passed.
- G01: index 3 習 accepted in S01.
- G02: the exact sentence and target red-frame hold instruction rendered after the prefix phase. Dedicated prefix/suffix files, decoding and timings passed technical gates.
- G03: 習 selected among 修、習、學 and inserted at S04 index 1.
- G04: shuffled 理、在、員、修 cards were accepted in 員在修理 order.
- G05: the correct S05 and both complete wrong-option files reached playing and ended; selecting the correct option was accepted and reward controls appeared.

Physical microphone capture, the recording bell and child-voice stitched replay were not exercised. The browser-control surface did not provide a reliable sustained pointer hold for that control. Stage 4 used single-game fixtures rather than one uninterrupted five-round session. Technical assets, rendering, interactions, decoding and alignment passed; no microphone or human listening PASS is asserted.

## Validation

Startup `tools:check`, `ai:check` and `curriculum:audit-state` passed on the correct source branch. Lesson-local package audit, production asset validation, curriculum validation, lint and production build pass; repository-wide validators retain only pre-existing warnings. Final package media is about 0.91 MiB. Pushed-ref package intake passed with 5 images, 10 audio files and the canonical five Stage 4 game types.
