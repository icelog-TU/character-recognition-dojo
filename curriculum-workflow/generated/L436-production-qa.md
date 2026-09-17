# L436「補」Production QA

Package status: dependency-blocked-asset-complete.

Source main: f4bc071d4d14a15bd0e2927a710f197110da6789. Formal curriculum L001–L420, latest 教, 424 learned characters. Locked allowedChars expands to 431 with 隊、由、意、願、互、助 and new 補. Five exact teacher-approved sentences, Han-only spokenText, displayLines and canonical games are preserved. Counts 9/11/12/9/10; coverage 補4、助2、互2、願2、意2、由1. Text, allowed-character, line-length and zero-based game-index audits PASS. Abandoned 禮 draft is excluded; L437 is excluded.

Recorded build dependencies are ordinary lessons L421–L435, vocabulary lessons L424 and L431–L435, R051/R052 after L420, and R053/R054 after L435. A final fetch found `origin/main` at `72b61a61` with L421–L435 and R051/R052 integrated. The unresolved Release blockers are now only R053/R054. Both review pairs remain excluded from this package. Shared production JSON, planner export and curriculum ledger integration remain Release-owned.

## Final image checks

Every final image is a 1024×1024 WebP, below the 250 KiB warning threshold and 400 KiB hard limit. The complete final set was viewed in a montage beside L058-S01. Exact generation identifiers and the rejected/revised S02 lineage are recorded in `L436-image-provenance.json`. Built-in image generation was used. No image contains readable text, numerals, logos or a watermark.

- S01 style-lock PASS; cast N/A. Separate red and green paint blocks and matching supplies dominate the image; they are not mixed.
- S02 style-lock PASS; cast PASS. A distinct school administrator hands a plain envelope to the fixed teacher; generic team children and an unnumbered jersey sample remain visible. The first candidate's center child resembled the protagonist and was replaced by a curly-haired generic teammate.
- S03 style-lock PASS; cast PASS. Xiaoguang keeps round glasses, neat black hair, white shirt and navy vest. He points from his own book while the protagonist writes in her separate book; no copying or代寫 scene.
- S04 style-lock PASS; cast PASS. The present-day classroom is dominant and the earlier home-play scene is isolated in a wordless memory bubble.
- S05 style-lock PASS; cast PASS. The fixed YOU boy retains short tousled dark hair, sky-blue shirt, green shorts and blue shoes. Both children's toy sets remain visible and the boy selects first, so the scene reads as an exchange rather than a gift.

## Audio and timings

Ten final mono AAC 44100 Hz M4A files are present and decodable: standalone 補, five sentence recordings, independent G02 prefix/suffix and two complete G05 wrong options. Repository generation, processing, AI alignment, strict format and production validators ran through the lesson-local adapter; shared audio scripts were not edited. G05 mean-volume spread is 0.5 dB. All nine timed tracks have one timing per Han character, ordered 80–900 ms spans and no final tail over 300 ms.

S02 買/學 and G02 prefix 學 contained zero-width or 20–40 ms ASR boundaries; they were refined from adjacent word spans. S04 and G05 wrong-one terminal endpoints were extended within measured speech/silence evidence. G02 suffix is a standalone 363 ms voiced 「助」 followed by 200 ms retained terminal silence; final duration is 563 ms.

Short isolated syllables produce unstable unprompted ASR spelling, so transcription alone is not treated as pronunciation certification. Three unprompted G02 suffix trials returned 猪/住/處, while its measured pitch falls 14.2 semitones, matching the explicitly requested fourth-tone contour; prompted alignment can return blank on the 363 ms syllable and therefore uses the separately preserved phonetic/pitch review. Standalone 補 ASR returned Bo/go/不, while measured F0 falls 7.6 semitones then rises 1.4 semitones, matching the requested third-tone contour. The raw trials, hashes and sampled pitch curves are preserved in `L436-short-audio-audit.json` and `L436-pitch-audit.json`. This automated evidence is not a teacher or human listening approval.

## Browser QA evidence and scope

The real LessonPanel rendered in an isolated local in-app browser fixture. It wrote neither production JSON nor cloud state. Media `playing`/`ended` events prove playback completion, not subjective listening quality.

- Stage 1: 補/ㄅㄨˇ visible; standalone audio reached ended; stage passed.
- Stage 2: three 補 cards among three distractors were accepted; 3/3 and stage passed.
- Stage 3: all five sentence files played to ended; all approved sentence text and zhuyin rendered; stage passed.
- G01: index 7 補 accepted in S01.
- G02: exact sentence and target red-frame hold instruction rendered after the prefix phase. Dedicated prefix/suffix files, decoding and timings passed technical gates.
- G03: 補 selected among 補、上、放 and inserted at S04 index 7.
- G04: shuffled 功、補、課、上 cards were accepted in 功課補上 order.
- G05: correct S05 and both complete wrong-option files reached playing then ended; selecting the correct first option was accepted and reward controls appeared.

Physical microphone capture, the recording bell and child-voice stitched replay were not exercised. The browser-control surface did not provide a sustained pointer hold for this control. Stage 4 used single-game fixtures rather than one uninterrupted five-round session. Technical assets, rendering, interactions, decoding and alignment passed; no microphone or human listening PASS is asserted.

## Validation

`tools:check` PASS; `ai:check` PASS; lesson-local package audit PASS; strict asset formats PASS with zero warnings; production assets PASS. Final package media is about 1.16 MiB. Asset commit `b3e7d82c` was pushed and `curriculum:package-intake -- --unit L436 --ref origin/codex/l436-complete-package` passed with 5 images, 10 audio files and canonical Stage 4. The final evidence-only tip is rechecked after push. At final fetch, main integration remains blocked only by R053/R054.

Post-merge teacher review entry: https://icelog-tu.github.io/character-recognition-dojo/lesson-asset-review.html?unit=L436&ref=main . This package is not yet in the main review queue.
