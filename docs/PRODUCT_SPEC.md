# 認字練功房 Product Spec

## Product Direction

認字練功房 is a curriculum-based app for young children learning to recognize Chinese characters from zero. The product keeps the spirit of progressive character learning, but all curriculum order, sentences, interaction design, and assets are original.

## Core Learning Loop

1. A child opens the next locked lesson.
2. The lesson introduces one new character.
3. The character is shown large, with zhuyin visible below or nearby.
4. Tapping the character/audio control plays the character reading as a whole syllable or word, not separated zhuyin symbols.
5. Optional origin or pictograph hint appears only when licensed/public data exists.
6. The child practices the lesson through sentence games.
7. Completing the required rounds unlocks the next lesson.
8. Completed lessons enter manual and random review.

## Hard UX Requirements

- Sentence text is horizontal from left to right.
- Zhuyin is placed vertically on the right side of each Han character.
- Sentence practice must not use vertical columns.
- Main curriculum reading must use pre-recorded audio files with character timings.
- Live TTS is allowed only for non-curriculum utility narration or temporary development fallback.
- Punctuation must not be read aloud by default.
- The app should feel like play, not a quiz worksheet.

## Lesson Structure

Each lesson has:

- `targetChar`: the one new character being unlocked.
- `zhuyin`: Taiwan zhuyin only. No Hanyu pinyin in the main product.
- `sentences`: practice strings that use only previously learned characters plus the lesson target character.
- `requiredRounds`: how many game rounds are needed to complete the lesson.
- optional `originHint`: pictograph or etymology aid, displayed only when available and safely licensed.

## Game Modes

The old app's five core interaction types remain the starting point:

- Find the character in a sentence.
- Teach an animal to read a missing character.
- Drag the missing character into a blank.
- Rebuild the sentence from character chips.
- Choose which animal read the sentence correctly.

## Audio Model

Production curriculum sentences use:

- `text`: display text.
- `spokenText`: what the recorded voice actually reads.
- `audio.src`: pre-recorded AI audio URL.
- `audio.charTimings`: character-level start/end timings.

The app highlights by comparing audio `currentTime` with `charTimings`; it does not synthesize one character at a time.

## MVP Scope

The first working prototype should include:

- 10 sample lessons.
- Horizontal sentence card with right-side zhuyin.
- Lesson unlock state.
- New character showcase.
- One playable sentence interaction.
- Curriculum validation script.
- Audio timing data shape, with temporary simulated playback until real audio assets exist.
