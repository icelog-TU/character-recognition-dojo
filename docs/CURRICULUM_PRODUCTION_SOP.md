# Curriculum Production SOP

This app treats AI output as draft material. A lesson enters the shipping curriculum only after teacher review.

For API key setup and AI generation commands, see `docs/AI_GENERATION_SETUP.md`.

For the running lesson sequence, taught-character set, and sentence history, update `docs/CURRICULUM_LEDGER.md` before planning the next lesson.

## Lesson Pipeline

1. Create a lesson request in `curriculum-workflow/lesson-requests/`.
2. Check `docs/CURRICULUM_LEDGER.md` for the learned character set and recent review pool.
3. Run `npm run curriculum:packet -- --request curriculum-workflow/lesson-requests/L004-example.json`.
4. Send the generated packet in `curriculum-workflow/generated/` to the AI sentence generator.
5. Review the sentence candidates manually.
6. For approved sentences, generate one image prompt and one image per sentence.
7. Generate one reviewed single-character audio file for every new character.
8. For approved sentences, generate one natural full-sentence audio file per sentence.
9. Process audio without trimming sentence endings.
10. Use AI transcription timestamps to verify the spoken sentence and write character timing metadata.
11. Move only reviewed content into `src/curriculum/sample-lessons.json`.
12. Update `docs/CURRICULUM_LEDGER.md`.
13. Run `npm run validate:curriculum`, `npm run validate:production`, `npm run build`, and `npm run lint`.

## Next-Lesson Planner Tool

Use the planner when the teacher has not already chosen the next character.

Teacher web entry:

```text
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-planner.html
```

The web entry is separate from the child-facing app. It is a static teacher tool for previewing recommendations, selecting sentences, adding custom sentences, and copying/downloading a lesson request JSON.

After curriculum data or the candidate bank changes, refresh the web entry data:

```bash
npm run curriculum:export-planner
```

This writes `public/tools/planner-data.json`, which the web page reads on GitHub Pages.

```bash
npm run curriculum:recommend
```

This reads `src/curriculum/sample-lessons.json`, computes:

- the next lesson id and order
- all learned characters
- the recent review pool from the previous 4-5 lessons
- candidate next characters from `curriculum-workflow/next-character-bank.json`

It writes:

```text
curriculum-workflow/recommendations/L###-next-lesson-review.json
curriculum-workflow/recommendations/L###-next-lesson-review.md
```

The recommendation files are teacher-review drafts. They are not approved curriculum.

Review workflow:

1. Open the Markdown file for a readable overview.
2. Pick one `choiceId`.
3. In the JSON file, set `approval.selectedChoiceId`.
4. Add the chosen sentence indexes to `approval.approvedSentenceIndexes`.
5. Add better teacher-written sentences to `approval.customSentences` if needed.
6. Run:

```bash
npm run curriculum:request-from-review -- --review curriculum-workflow/recommendations/L###-next-lesson-review.json
```

This creates `curriculum-workflow/lesson-requests/L###.json` with the selected character and approved sentence list in `teacherNotes`.

Rules:

- AI-generated recommendations may include unnatural sentences. The teacher must reject or rewrite them.
- Do not move recommendation candidates directly into `src/curriculum/sample-lessons.json`.
- Before building the lesson, verify every chosen sentence uses only already learned characters plus the new character.
- The planner may use `OPENAI_TEXT_MODEL` for sentence refinement. Use `--no-ai` to generate local-template recommendations only.
- Update `curriculum-workflow/next-character-bank.json` when a good future character or sentence pattern is discovered.

## Asset Commands

Important: asset commands that update `src/curriculum/sample-lessons.json` must run one at a time. Do not run `assets:images`, `assets:align`, or `assets:align:ai` for different lessons in parallel, because each command reads and rewrites the same curriculum JSON file.

Optimize reviewed lesson images:

```bash
npm run assets:images -- --lesson L001 --remove-original
```

This converts referenced PNG/JPG files to WebP, updates `imageSrc`, and can remove the original PNG/JPG when `--remove-original` is provided.
If the command cannot find ImageMagick right after installation, reopen the terminal or set `MAGICK_PATH` to the full `magick.exe` path.

Process reviewed AI audio:

```bash
npm run assets:audio -- --lesson L001
```

Put source audio files in `curriculum-workflow/audio-inbox/L001/` first. The script writes normalized `.m4a` files to `public/assets/lessons/L001/audio/` and creates `curriculum-workflow/audio-duration-report.json`.
If the command cannot find FFmpeg right after installation, reopen the terminal or set `FFMPEG_PATH` and `FFPROBE_PATH` to the full executable paths.

For production sentence highlighting, run AI timestamp alignment after audio processing:

```bash
npm run assets:align:ai -- --lesson L001
```

This transcribes each final sentence audio file, verifies the transcript matches `spokenText`, and writes `audio.durationMs` plus `audio.charTimings` into `src/curriculum/sample-lessons.json`.

Do not use `npm run assets:align` as the final production timing source. It is a fallback energy-based estimate and can drift on connected speech, neutral-tone `的`, and final syllables. Use it only for a rough local draft when the OpenAI API is unavailable.

## Request File

Example:

```json
{
  "order": 4,
  "newChars": ["小"],
  "zhuyin": {
    "小": "ㄒㄧㄠˇ"
  },
  "title": "小",
  "targetSentenceCount": 4,
  "teacherNotes": "Use only characters learned in lessons 1-3 plus 小."
}
```

Rules:

- `order` must be the intended lesson order.
- `newChars` may contain several seed characters, but most lessons should introduce one character.
- `zhuyin` must use Taiwan zhuyin only.
- `teacherNotes` should include Taiwan usage constraints, semantic goals, or forbidden phrasing.

## AI Sentence Rules

The packet generated by `curriculum:packet` contains the allowed character boundary. The AI must obey it.

- Display text may use only previously learned characters plus the current new character(s).
- AI must not introduce new Han characters.
- AI must not use Hanyu pinyin.
- If the user proposes a sentence containing a Han character outside the learned set plus the current new character(s), stop and tell the user exactly which character is not yet learned. Do not generate images, audio, or production curriculum for that lesson until the sentence is corrected or the user explicitly changes the lesson's new-character plan.
- AI output is a draft, never automatically approved.
- Early lessons can have very few sentences.
- Later lessons can gradually move toward 6 to 8 sentences.
- `spokenText` omits punctuation and is what the audio reads.
- For early lessons, prefer short, concrete, imageable sentences where every spoken Han character is visually meaningful.
- Keep `text` and `spokenText` aligned: `spokenText` may omit punctuation, but it must not omit any Han character shown in `text`.
- If `displayLines` is used, it must join exactly back to `text`; it is only a visual line break plan.
- Sentences ending in neutral-tone `的` are allowed, but the final `的` must be checked carefully in transcription because TTS can make it too light.

## Image Rules

Images are generated or sourced only after sentence approval.

- One image per sentence.
- Store final assets under `public/assets/lessons/L###/images/`.
- Use `.webp` by default.
- Path example: `public/assets/lessons/L004/images/L004-S01.webp`.
- Curriculum `imageSrc` example: `/assets/lessons/L004/images/L004-S01.webp`.
- Images must not contain visible text, letters, numbers, zhuyin, labels, signs, or watermarks.
- If the sentence expresses a count, the image must clearly match the count.

## Image Reuse And Cast Continuity

Image generation is the largest long-term asset cost. A 600-lesson course with 5-6 sentences per lesson may need about 3,000-3,600 sentence pictures, so the production workflow must actively avoid unnecessary regeneration.

Before generating any new sentence image:

1. Check the current lesson and earlier approved lesson assets for a reusable scene.
2. Check `docs/CURRICULUM_LEDGER.md` for recurring cast descriptions.
3. Decide whether the sentence needs a new scene, a reused scene, or a reused scene with a highlight/circle/spotlight.
4. Write the decision into `imagePrompt` or lesson notes before generating assets.

Reuse is preferred when:

- The same people, object, count, and meaning are shown.
- The later sentence only changes which part of the scene should receive attention.
- A previous image already clearly represents the sentence.
- A fixed recurring character appears and an approved visual reference already exists.

Generate a new image only when:

- No existing image shows the required meaning.
- The count, size contrast, body part, or target object would be inaccurate.
- A recurring character would look inconsistent if reused.
- The approved image is unclear on phone/tablet.

Recurring cast rules:

- `我` already has a fixed young-girl design. Future prompts involving `我` must reuse it.
- `你` already has a fixed young-boy design from L012. Future prompts involving `你` must reuse the same boy: same age as the fixed `我` girl, short slightly tousled dark hair, sky-blue shirt, green shorts, blue shoes, and small orange backpack.
- When `你`, `他`, `爸爸`, `媽媽`, `哥哥`, `姐姐`, `弟弟`, `妹妹`, or other stable roles are introduced, add their approved visual description to `docs/CURRICULUM_LEDGER.md`.
- After a role is added to the visual continuity ledger, every future image prompt must reuse that role description.
- Do not generate unrelated versions of recurring people from lesson to lesson.
- Do not batch-generate many final character or family images until a small sample is reviewed and approved.

## Audio Rules

Audio is generated only after sentence approval.

- One single-character audio file per lesson new character.
- One natural full-sentence audio file per sentence.
- Store final assets under `public/assets/lessons/L###/audio/`.
- Use `.m4a` or `.mp3`; prefer `.m4a` for app delivery.
- Path example: `public/assets/lessons/L004/audio/L004-S01.m4a`.
- Character audio path example: `public/assets/lessons/L004/audio/char-小.m4a`.
- Curriculum `audio.src` example: `/assets/lessons/L004/audio/L004-S01.m4a`.
- Curriculum `charAudio` example: `"/assets/lessons/L004/audio/char-小.m4a"`.
- Audio reads `spokenText`, not punctuation.
- Do not generate one audio file per character for sentence reading.
- Generate and review whole-sentence audio, not stitched character audio.
- The final syllable must remain audible. Do not accept audio where the last Han character is swallowed, clipped, or missing.
- The audio processing step must not trim sentence endings. It may remove leading silence, but it must preserve trailing breath and final syllable decay.
- After processing audio, transcribe the final `.m4a` and compare it to `spokenText` before accepting the lesson.
- If transcription misses a Han character, especially final `的` or final body-part nouns like `手`, regenerate the audio before writing timings.
- Stage 1 character-card taps must cancel guide narration and start the character audio in the same user gesture. Do not insert `setTimeout`/`waitMs` before `audio.play()` on mobile. If the AI character audio fails to start, fall back to browser TTS for that character.

## Character Timing Rules

The app needs `charTimings` to highlight the character currently being read.

```json
{
  "src": "/assets/lessons/L004/audio/L004-S01.m4a",
  "durationMs": 1200,
  "charTimings": [
    { "charIndex": 0, "startMs": 80, "endMs": 420 },
    { "charIndex": 1, "startMs": 430, "endMs": 760 }
  ]
}
```

Rules:

- `charIndex` counts Han characters in `text`, skipping punctuation.
- Timing is based on the final audio file, not estimated from TTS.
- If the audio is regenerated, timings must be regenerated too.
- Production timing must be generated from the final `.m4a` using `npm run assets:align:ai -- --lesson L###`.
- The AI alignment command must verify that the transcript matches `spokenText`; if it fails, fix the audio or sentence before shipping.
- Do not let the final character highlight continue through a long silent tail. The last `endMs` should mark the end of the spoken syllable, not the end of the audio file if the file includes trailing silence.
- Before approval, play each Stage 3 sentence in the app and check that the active character changes on the heard syllable. Pay special attention to the last 2-4 characters.

## Stage 4 Sentence Game Rules

Starting around L011, Stage 4 may use a fixed `sentenceGames` array in the lesson data. These games are reviewed curriculum, not runtime random events.

- Use fixed game types per sentence/game. Do not randomly assign game modes at runtime for production lessons.
- Supported first-pass game types: `find-character`, `teach-character`, `missing-character`, `partial-order`, and `choose-pronunciation`.
- When a lesson has five Stage 4 sentence games, use all five supported game types exactly once. Do not repeat one type and omit another.
- `targetChar` must appear in the referenced sentence. It may be the current lesson's new character or a review character.
- A lesson should usually include at least three interactions involving the current new character, while allowing 1-2 interactions focused on review characters.
- For early lessons, `partial-order` should blank only 2-4 Han characters, not the full sentence.
- `teach-character` can use local recording/playback first; speech scoring can be added later.
- `choose-pronunciation` should use reviewed AI audio assets for production choices. Do not use browser TTS as the production reading for options.
- Every Stage 4 game must provide spoken guidance when the game becomes active. Assume the child cannot read the prompt text.
- Stage 4 helper openings must match the game type. Do not reuse "I will read this sentence" for games where the rabbit is not the reader, especially `choose-pronunciation`.
- Stage 4 guidance must not reveal the answer. For `teach-character`, do not say the target character in the hold-to-record prompt. For `choose-pronunciation`, do not read the target sentence in the rabbit's opening; the sentence should be heard from the friend readers.
- Stage 4 scripts should avoid self-repetition. Use one short context line, one short operation line, and one short feedback line.
- The active Stage 4 block and the active sentence/game surface must glow visibly while guidance or feedback is playing.
- Before publishing, check Stage 4 on a phone-width viewport. Sentence tokens, missing-character slots, and option buttons must wrap inside the card; no Han character, zhuyin, or question-mark slot may be clipped by the screen edge.
- Stage 4 interactions must be framed as helping a visible helper character, not as a teacher testing the child. The default helper is the rabbit.
- `find-character` spoken guidance must tell the child both what to find and that they should tap the character in the sentence. Avoid ambiguous wording such as "tap it" when "it" could mean the helper character.
- `teach-character` requires the old helper flow: helper reads the sentence up to the unknown character, cries/asks for help, the child presses and holds the target character itself, the app speaks a prime, plays a ding, records, and then replays the full sentence with the child's recording stitched into the target-character slot.
- The `teach-character` recording ding must be reliable on mobile. Resume/unlock Web Audio before playing the ding, use a clear lower-frequency cue lasting about 0.8-1.0 seconds, then start recording only after the ding window.
- In `teach-character`, do not circle or highlight the unknown target before the helper reaches that character and gets stuck. Do not render a separate isolated target-character panel below the sentence unless it has an actual interaction.
- `partial-order` must show a dedicated replay-sentence button in the game area so the child/parent can hear the target sentence again without replaying the full helper instruction.
- `partial-order` option cards must be shuffled before display. They must not appear in the correct sentence order on entry, even if the lesson JSON is written in sentence order.
- After a correct Stage 4 response, play one short praise phrase before stopping on the current round. Vary the praise, such as "你好棒", "你好厲害", or "太棒了". Do not auto-advance. Speak a prompt telling the child to press the red button for the next round or completion.
- Completion state must be tied to the current game id. When moving to the next Stage 4 round, never let the previous round's completed state trigger the next round's completion prompt.
- Every Stage 4 round must have a visible replay-instruction button so the child/parent can hear the helper's request again after leaving and returning.
- `choose-pronunciation` must use the animal avatar itself as the listen button and a simple checkmark button as the choice. Spoken guidance for non-readers must say to press each animal's head first, then press the checkmark next to the friend who read correctly.
- `choose-pronunciation` reader/options order must be shuffled before display. The correct option must not be fixed in the first reader position.

## Review Gate

A sentence can move into the curriculum only when:

- Display text uses only allowed characters.
- Taiwan wording is natural.
- It is easy to understand and picture.
- `imagePrompt` is reviewed.
- `approved` is true.
- Final sentence audio transcribes back to `spokenText` with every Han character present.
- `charTimings` come from the final processed audio and match the Han character count.
- Manual playback review confirms the last character is audible and the highlight does not drift.
- Audio may be null during prototype work, but production lessons need audio and timings.
