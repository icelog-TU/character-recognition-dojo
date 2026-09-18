# L456 突 — Package Rescue handoff

Status: `dependency-blocked-asset-complete`. Registry: `ready-blocked-by-dependency`.

Source package branch: `codex/l456-complete-package` at `dca9f5bdafbd88f63aac5b29eca33148c2ec50c7`. Claim: `b785569b6f7b07a947e939b7710879c3bbc9e471`. Production base: `5622c827569df36e09c1767d61f114b35973bbea`, official L443 操 / R054. Dependencies L451-L455 and milestone R055/R056 still block Release integration order.

## Rescue changes

- Regenerated `char-u7a81.m4a`, `L456-S01.m4a`, `L456-S02.m4a`, and `L456-S05.m4a` as complete independent utterances.
- Used the documented phonetic TTS rendering `圖` / `圖然` only to obtain Taiwan ㄊㄨˊ / ㄊㄨˊ ㄖㄢˊ. Learner-facing `突`, all five approved texts, `spokenText`, `displayLines`, focus characters, Stage 4 options, images, and other five audio files are unchanged. S04 was later regenerated as one complete sentence for the teacher-reported `我演勇者` pronunciation defect. No syllable was cut, copied, or spliced.
- Independent acoustic review of each final processed M4A reports `突` as tone 2 with a rising contour. S01 final `了` and every other final syllable are complete.
- Regenerated final timings for S01, S02, and S05. Corrected S05 `突然` against the continuous waveform and corrected G02 suffix `出` after the measured 0.489–0.898 s pause. Draft and `L456-alignment.json` are synchronized.

## Preserved approved assets

All five WebPs retain Production's style-lock and cast PASS. S03, G02 prefix/suffix, and both G05 wrong-choice M4As are byte-for-byte preserved from the Production checkpoint. S04 is the teacher-assigned whole-sentence repair; automated transcription matches `爸爸演怪物，我演勇者。`, and teacher pre-merge listening remains pending.

## QA

- Final M4A decode, codec, duration, loudness, and SHA-256 inventory: `L456-technical-qa.json`.
- Final word timestamps and manual timing notes: `L456-rescue-alignment-raw.json`.
- Exact-input rejected candidates and phonetic-rendering candidate comparison: `L456-rescue-exact-input-candidates.json`, `L456-rescue-phonetic-candidates.json`.
- Final processed acoustic review: `L456-rescue-final-listening.json`.
- Browser playback QA: the prior ten lesson audio files loaded and played to `ended` on 2026-09-18. The replacement S04 passes decode, format, loudness, transcript, and timing checks; teacher pre-merge listening is pending.
- Teacher subjective listening approval is not claimed; the package is ready for Release intake and dependency-ordered integration verification.
