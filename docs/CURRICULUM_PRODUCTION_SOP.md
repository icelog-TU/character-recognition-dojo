# Curriculum Production SOP

This app treats AI output as draft material. A lesson enters the shipping curriculum only after teacher review.

For API key setup and AI generation commands, see `docs/AI_GENERATION_SETUP.md`.

For multi-thread source-of-truth rules, required startup checks, and merge gates, see `docs/CURRICULUM_OPERATING_SOP.md`.

For merged lessons, use latest `origin/main` and `src/curriculum/sample-lessons.json` as the shipping truth. `docs/CURRICULUM_LEDGER.md` is the human-readable merged summary. For not-yet-merged parallel lessons, use `docs/PARALLEL_LESSON_REGISTRY.md` as the provisional coordination board.

## Local Tool Availability Rule

Before claiming FFmpeg, FFprobe, ImageMagick, or OpenAI setup is unavailable, run the repo's own checks:

```bash
npm run tools:check
npm run ai:check
```

This repo installs FFmpeg and FFprobe as npm dependencies (`@ffmpeg-installer/ffmpeg` and `@ffprobe-installer/ffprobe`). On Windows, the shell command `ffmpeg -version` may fail even when `npm run assets:audio` works correctly because the repo scripts resolve the package binaries directly. A missing shell PATH entry is not a valid reason to bypass the standard audio pipeline.

`npm run tools:check` also searches standard Windows `Program Files\ImageMagick-*` install folders for `magick.exe`, so ImageMagick can be used even if the current PowerShell session has not picked up PATH changes yet.

Rules:

- Do not say "there is no FFmpeg" unless `npm run tools:check` or the actual repo audio command fails and the exact failure is reported.
- Do not use online converters, browser recordings, OS TTS export, unrelated local encoders, or hand-written ad hoc transcoding for production lesson audio unless the teacher explicitly approves that exception.
- If an exception is approved, record the affected lesson/review id, command used, reason, and replacement plan in the final handoff. Do not call that audio standard production audio until it has gone through the normal `assets:audio` plus `assets:align:ai` flow.

## Windows UTF-8 Reading Rule

Repo Markdown and JSON files are UTF-8. On Windows, garbled Chinese in PowerShell output usually means the terminal output encoding or `Get-Content` decoding path is wrong; it does not by itself prove the file is corrupted.

Before reporting corrupted Chinese text, verify with an explicit UTF-8 read:

```powershell
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new()
$OutputEncoding = [System.Text.UTF8Encoding]::new()
Get-Content -Encoding UTF8 docs/CURRICULUM_PRODUCTION_SOP.md
```

For agent-side reads, prefer Node when exact Chinese text matters:

```powershell
node -e "process.stdout.write(require('fs').readFileSync('docs/CURRICULUM_PRODUCTION_SOP.md','utf8'))"
```

Only treat text as actually damaged if UTF-8 decoding fails, decoded text contains replacement characters, or GitHub/a UTF-8-aware editor shows the same corrupted text.

## Lesson Pipeline

0. Run `git fetch origin`, `git status --short --branch`, and `npm run curriculum:audit-state`, then check `docs/CURRICULUM_LEDGER.md` and `docs/PARALLEL_LESSON_REGISTRY.md`.
1. Create or claim a lesson row in `docs/PARALLEL_LESSON_REGISTRY.md` before starting any parallel lesson work. This is required before creating request files, generating packets, images, audio, or lesson JSON for a not-yet-merged lesson.
2. Create a lesson request in `curriculum-workflow/lesson-requests/`.
3. Check `docs/CURRICULUM_LEDGER.md` for the merged learned character set and recent review pool. If this is a parallel-prepared later lesson, also check registered provisional dependencies.
4. Run `npm run curriculum:packet -- --request curriculum-workflow/lesson-requests/L004-example.json`.
5. Send the generated packet in `curriculum-workflow/generated/` to the AI sentence generator.
6. Review the sentence candidates manually.
7. For approved sentences, generate one image prompt and one image per sentence.
8. Generate one reviewed single-character audio file for every new character.
9. For approved sentences, generate one natural full-sentence audio file per sentence.
10. Process audio without trimming sentence endings.
11. Use AI transcription timestamps to verify the spoken sentence and write character timing metadata.
12. Move only reviewed content into `src/curriculum/sample-lessons.json`.
13. Update `docs/CURRICULUM_LEDGER.md`; run `npm run curriculum:export-planner`; update or clear the registry row if the lesson was parallel-prepared.
14. Run `npm run verify`.

## Cloud Device Authorization

Do not treat free browsing as a universal app mode. The teacher wants only designated teacher/parent devices, such as the teacher phone and tablet, to freely browse every lesson. All other devices must use normal unlock progression.

Current app-level rule:

- A device may freely browse all lessons only when its Firestore device record has `freeBrowse: true`.
- `freeBrowse` must not be stored as a local user-toggleable setting.
- The settings UI may display whether the current device is authorized, but it must not let the user grant that authorization locally.
- Progress sync must preserve server-side authorization fields when saving progress.
- If stronger content security is required later, move lesson data/assets behind authenticated access; GitHub Pages static lesson assets cannot be truly hidden from someone who knows the URLs.

## Parallel Lesson Production SOP

The teacher may intentionally run 2-3 lesson-production threads at the same time to keep curriculum creation moving. This is allowed when the next-character sequence is already chosen, for example one Codex thread prepares L050 while another prepares L051 and a third prepares L052.

Parallel production means **parallel drafting and asset preparation**, not unordered shipping. Lessons must still be merged into `main` in lesson order.

Allowed parallel work:

- The provisional sequence must be registered in `docs/PARALLEL_LESSON_REGISTRY.md`.
- Registration is not optional. A parallel lesson must appear in the registry before work starts, must be updated after assets/checks are prepared, and must be updated again after any branch or draft push. Merge cleanup is a separate final registry cleanup step.
- A later lesson may be drafted before the immediately previous lesson is merged if the teacher has explicitly chosen the previous lesson's new character(s).
- The later lesson request must include `dependsOnLessons` for any not-yet-merged prior lesson and must list those prior new characters in `provisionalLearnedChars`.
- The AI must treat the lesson request's `allowedChars` as the temporary locked boundary for drafting, image prompts, sentence audio, and char timings.
- Each Codex thread must own only one lesson's request, generated packet, audio inbox, final images, and `public/assets/lessons/L###/` folder.
- Sentence drafting, image prompt writing, final image creation, and raw AI audio generation may proceed for the later lesson while the dependency lesson is still in another branch/thread.
- JSON-writing commands such as `assets:images`, `assets:audio`, and `assets:align:ai` must still be serialized and rebased on latest `origin/main` because they update shared curriculum data or shared reports.

Not allowed in parallel work:

- Do not do invisible parallel work. If a thread has started L051, L052, or later work, that lesson must be visible in `docs/PARALLEL_LESSON_REGISTRY.md`.
- Do not merge or push a later lesson to `main` before all `dependsOnLessons` are merged into `main`.
- Do not let two threads edit `src/curriculum/sample-lessons.json` for different lessons at the same time without rebasing on latest `origin/main`.
- Do not regenerate or overwrite another thread's lesson assets.
- Do not silently change the previous lesson's chosen new character after a later lesson has already used it as `provisionalLearnedChars`; announce the change and re-check affected later lessons.

Before merging a parallel-prepared later lesson:

1. Fetch latest `origin/main`.
2. Confirm every dependency lesson in `dependsOnLessons` is now present in `src/curriculum/sample-lessons.json`.
3. Re-run `npm run curriculum:export-planner` if curriculum data changed.
4. Re-check the lesson request against the now-real learned-character set. Remove or update `provisionalLearnedChars` notes if they are no longer provisional.
5. Rebase the lesson branch on latest `origin/main`.
6. Add the lesson to `src/curriculum/sample-lessons.json` in order.
7. Update `docs/CURRICULUM_LEDGER.md`.
8. Run `npm run verify` before push.

If a dependency lesson changed its new character, sentence set, or review-character requirements after the later lesson was drafted, stop and reconcile before merging. The later lesson may need new sentences, images, audio, or timings.

## Parallel Registry Update Points

For every parallel-prepared lesson, update `docs/PARALLEL_LESSON_REGISTRY.md` at these three moments:

1. **Start / claim:** before request, packet, image, audio, or curriculum JSON work starts.
2. **Assets prepared:** after reviewed images, audio, and timings are prepared, even if the lesson is still blocked by a dependency.
3. **Uploaded / branch pushed:** after pushing the lesson branch or any remote draft work; record the branch and short commit.
After the lesson enters `main`, clear the active row or mark it `merged` in the same cleanup commit. This merge cleanup is required, but it is separate from the three parallel-prep recording points.

If the registry cannot be pushed, the thread must say so in chat and must not continue with large invisible asset work.

## Next-Lesson Planner Tool

Use the planner when the teacher has not already chosen the next character.

Teacher web entry:

```text
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-planner.html
```

The web entry is separate from the child-facing app. It is a static teacher tool for previewing recommendations, selecting sentences, adding custom sentences, and copying/downloading a lesson request JSON.

The planner stores drafts in the browser's local storage by target lesson id, such as `L022`, so a GitHub Pages refresh after `L021` is merged should not erase the `L022` draft. This is still device-local draft storage, not a submitted lesson request. For important work, press `送出給 Codex`, `複製 JSON`, or `下載 JSON` before leaving the page.

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

Important: asset commands that update `src/curriculum/sample-lessons.json` or shared reports must run one at a time. Do not run `assets:images`, `assets:audio`, `assets:align`, or `assets:align:ai` for different lessons in parallel, because each command reads and rewrites shared files.

Optimize reviewed lesson images:

```bash
npm run assets:images -- --lesson L001 --remove-original
```

This converts referenced PNG/JPG files to WebP, updates `imageSrc`, and can remove the original PNG/JPG when `--remove-original` is provided.
If the command cannot find ImageMagick right after installation, reopen the terminal or set `MAGICK_PATH` to the full `magick.exe` path.
If ImageMagick is unavailable but FFmpeg is available, FFmpeg may be used as a manual fallback for PNG/JPG to WebP conversion. When doing this, update every affected `imageSrc` to `.webp`, remove the oversized source PNG/JPG from `public/assets`, and rerun `npm run validate:production`.

The app preloads the active lesson's required images and audio when the lesson opens, so production assets must be optimized before merging. Do not rely on late loading inside Stage 3 or Stage 4 to hide oversized images.

Production asset hard limits for every new or touched lesson/review module:

- Final referenced sentence images must be `.webp`. Do not ship referenced `.png`, `.jpg`, or `.jpeg` files in `src/curriculum/sample-lessons.json`.
- Longest image edge must be no more than `1024px`.
- Target sentence image size is `<= 250 KB`.
- Hard maximum sentence image size is `<= 400 KB`. If an image exceeds this, re-compress or regenerate before merge.
- Target normal lesson folder size is `<= 2.0 MB`; hard maximum is `<= 2.5 MB`.
- Target review module folder size is `<= 2.0 MB`; hard maximum is `<= 2.5 MB`.
- Do not leave oversized source PNG/JPG files under `public/assets/lessons/` or `public/assets/reviews/`. Keep raw sources outside shipping assets if they must be preserved.

Before merging any lesson/review that adds or changes assets, inspect sizes:

```bash
Get-ChildItem public/assets/lessons/L### -Recurse -File | Sort-Object Length -Descending | Select-Object @{Name='KB';Expression={[math]::Round($_.Length/1KB,1)}}, FullName
Get-ChildItem public/assets/lessons/L### -Recurse -File | Measure-Object Length -Sum
```

For review modules, use `public/assets/reviews/R###` in the same commands.

Until these hard limits are enforced in `npm run validate:production`, the thread shipping the lesson must paste or summarize the size check in its final handoff. Do not describe a lesson as production-ready if the size check was skipped.

For whole-repo asset diagnostics, run:

```bash
npm run assets:audit
```

This inspects every referenced production lesson/review image and audio file. It checks WebP image references, image dimensions, image size, public PNG/JPG leftovers, `.m4a` audio references, AAC codec, `44100 Hz`, mono audio, valid duration, and measured max volume for character audio, sentence audio, and Stage 4 option audio. The default command reports findings without blocking so old-course debt can be triaged. Use strict mode only when the task is to enforce all findings:

```bash
npm run assets:audit -- --strict
```

Process reviewed AI audio:

```bash
npm run assets:audio -- --lesson L001
```

Put source audio files in `curriculum-workflow/audio-inbox/L001/` first. The script writes normalized `.m4a` files to `public/assets/lessons/L001/audio/` and creates `curriculum-workflow/audio-duration-report.json`.
If the command cannot find FFmpeg right after installation, reopen the terminal or set `FFMPEG_PATH` and `FFPROBE_PATH` to the full executable paths.
Important: this repo includes FFmpeg and FFprobe via npm packages (`@ffmpeg-installer/ffmpeg` and `@ffprobe-installer/ffprobe`). On Windows, `ffmpeg` may fail from the shell PATH while the repo scripts still work because they resolve the package binaries directly. Before saying FFmpeg is missing, run `npm run tools:check` and the actual repo command. Do not switch to a nonstandard audio-generation or conversion method just because a bare shell `ffmpeg` command failed.

For production sentence highlighting, run AI timestamp alignment after audio processing:

```bash
npm run assets:align:ai -- --lesson L001
```

This transcribes each final sentence audio file, verifies the transcript matches `spokenText`, and writes `audio.durationMs` plus `audio.charTimings` into `src/curriculum/sample-lessons.json`.

Do not use `npm run assets:align` as the final production timing source. It is a fallback energy-based estimate and can drift on connected speech, neutral-tone `的`, and final syllables. Use it only for a rough local draft when the OpenAI API is unavailable.
Before declaring the OpenAI API unavailable, run `npm run ai:check`. Do not rely only on `process.env.OPENAI_API_KEY`, because the repo helper also reads `.env.local`, `.env`, and Windows user environment values from `HKCU\Environment`. If the OpenAI API is truly unavailable and a lesson must be shipped with local OS TTS plus `assets:align`, record that exception in `docs/PROJECT_HANDOFF_SOP.md` or the final handoff. Do not call those timings AI-reviewed, and prefer regenerating with AI audio plus `assets:align:ai` when credentials are available.

When OpenAI audio is available, production lesson audio must use natural Taiwan Mandarin. Reject and regenerate any sentence that sounds like Beijing/Mainland China pronunciation, uses erhua, or adds curled-r/r-colored endings. Final syllables should stay audible but clean; do not accept a rhotic final `孩`, `兒化音`, or similar accent drift.

Production audio hard limits for every new or touched lesson/review module:

- Final curriculum audio must be `.m4a` unless there is an explicit exception in the handoff.
- Processed output must be mono AAC at `44100 Hz` and about `96k` bitrate, matching `scripts/process-audio-assets.mjs`.
- Character audio target duration is `300-1400 ms`; anything shorter than `200 ms` or longer than `1800 ms` must be manually justified or repaired.
- Sentence audio should end within `300 ms` after the last spoken Han character. Long silent tails must be trimmed or timing must be repaired.
- Sentence audio and Stage 4 option audio must be audibly normalized, not merely present. If a phone tester reports no sound, inspect actual file volume before changing UI playback logic.
- New-character `charAudio` must pass the existing `validate:production` audibility floor of `max_volume >= -35 dB`.
- Sentence and option audio should target `max_volume >= -35 dB`; if quieter, regenerate or normalize before merge even if the current validator does not yet fail it.
- Do not use browser TTS as production curriculum audio for `charAudio`, sentence audio, or `choose-pronunciation` options unless the exception is recorded and the lesson is explicitly marked for later AI-audio replacement.

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
- `newChars` may contain several seed characters, but most lessons should introduce one character. A lesson may introduce two characters together when the natural teaching unit is a fixed word or near-fixed phrase, such as `朋友`, where teaching only `朋` or only `友` would force unnatural sentences.
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
- For planner/AI-generated candidates, target 4-12 Han characters per sentence, ignoring punctuation.
- Prefer reusing characters from the previous 5 lessons when natural.
- Across each lesson's sentence set, include every new character from the previous 3 lessons at least once.
- Keep `text` and `spokenText` aligned: `spokenText` may omit punctuation, but it must not omit any Han character shown in `text`.
- If `displayLines` is used, it must join exactly back to `text`; it is only a visual line break plan.
- For phone layout, each `displayLines` line should contain at most 5 Han characters when zhuyin is shown. Split longer sentences into more lines before shipping.
- Sentences ending in neutral-tone `的` are allowed, but the final `的` must be checked carefully in transcription because TTS can make it too light.

## Review Module Rules

Starting after L060, every 30-lesson milestone gets two review modules. These are not `L###` lessons and do not advance the new-character lesson count. See `docs/CURRICULUM_OPERATING_SOP.md` for the full cycle.

- After L060: R001/R002, 5 sentences each, must cover every new character from L001-L030 at least once across the 10 sentences. The next new-character lesson is L061.
- After L090: R003/R004, 5 sentences each, must cover every new character from L031-L060 at least once across the 10 sentences. The next new-character lesson is L091.
- Continue by 30-lesson blocks: after L120 review L061-L090, after L150 review L091-L120, and so on.
- Review modules introduce no new characters and must not contain `newChars`, `zhuyin`, or single-character `charAudio`.
- Review modules live in top-level `reviewLessons`, not in `lessons`.
- Review module assets live under `public/assets/reviews/R###/`.
- Review module request files live under `curriculum-workflow/review-requests/R###.json`.
- Plan each two-module review pair together. Do not approve the first review module if the pair as a whole does not yet cover the required 30-lesson character set.
- Review sentences may use any character learned by the milestone, but the coverage checklist must be based on the older target range.
- Do not add empty review placeholders to `src/curriculum/sample-lessons.json`; placeholders belong in the website UI only until the reviewed sentences and production assets are ready.
- Do not create L061/L062 as review lessons. After L060, L061 is reserved for the next new-character lesson.
- Review modules must satisfy the same production asset hard limits as normal lessons: WebP images, normalized `.m4a` sentence/option audio, AI-generated `charTimings`, manual playback QA, and review folder size `<= 2.5 MB`.

## Image Rules

Images are generated or sourced only after sentence approval.

- One image per sentence.
- Mandatory style anchor: use the polished L058 library set as the approved sentence-image reference, especially `public/assets/lessons/L058/images/L058-S01.webp`, `public/assets/lessons/L058/images/L058-S02.webp`, and `public/assets/lessons/L058/images/L058-S03.webp`.
- When generating or replacing sentence images, attach or otherwise provide those reference image files to the image-generation context whenever the tool supports reference images. If the tool cannot accept image references, explicitly state that limitation in the work notes and include the exact reference paths plus the concrete style traits in the prompt.
- The required style traits are: modern children's picture-book illustration, warm natural light, fine pencil-and-watercolor linework, detailed but clean library/interior or outdoor environments, consistent expressive preschool proportions, soft cheeks, gentle facial expressions, bright warm palette, and phone-readable composition.
- Do not rely on generic style phrases such as only `warm watercolor children picture-book style`; that has produced inconsistent simpler watercolor images. Prompts for new/replacement sentence images must name the approved L058 style reference and list the concrete style traits above.
- Before accepting generated images, compare them side by side against the L058 reference set. Reject images that drift into flat cartoon, simple watercolor wash, anime, 3D render, plastic toy, heavy outline, realistic photo, muted/dark palette, or inconsistent character proportions.
- Store final assets under `public/assets/lessons/L###/images/`.
- Use `.webp` by default.
- Path example: `public/assets/lessons/L004/images/L004-S01.webp`.
- Curriculum `imageSrc` example: `/assets/lessons/L004/images/L004-S01.webp`.
- Images must not contain visible text, letters, numbers, zhuyin, labels, signs, or watermarks.
- If the sentence expresses a count, the image must clearly match the count.
- Keep final lesson images phone/tablet sized and optimized as `.webp`; do not ship large source-resolution images in `public/assets`.
- Check the final lesson asset folder size before push. A single lesson growing unusually large must be reviewed and compressed before merging.

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
- Character audio must be audibly normalized, not merely present. `npm run validate:production` measures each new-character `charAudio` with FFmpeg `volumedetect` and fails if `max_volume` is below `-35 dB`.
- If a character card appears to play but the user cannot hear it on mobile, first check the actual file volume. A file can exist and be valid M4A while still being effectively silent.
- If the standalone character-audio source is missing or unusably quiet, a safe repair is to cut the target character from an already approved sentence audio that contains the same character, using reviewed `charTimings`, then normalize and re-run validation.
- Do not ship a lesson after only confirming that the character audio path exists. Confirm it is audible, short, and clearly says the target character.

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
- `charTimings` must be strictly ordered by `charIndex`, with no missing or duplicate Han-character indexes.
- Every timing must have `0 <= startMs < endMs <= durationMs`.
- Adjacent timings should not overlap. If overlap is unavoidable because of transcription granularity, it must be under `40 ms` and manually reviewed.
- No individual Han-character timing should be shorter than `80 ms` or longer than `900 ms` without manual review. Very short spans usually mean the alignment is not usable for child-facing highlighting.
- The first spoken Han character should normally start within the first `500 ms` of the audio.
- Do not let the final character highlight continue through a long silent tail. The last `endMs` should mark the end of the spoken syllable, not the end of the audio file if the file includes trailing silence.
- Before approval, play each Stage 3 sentence in the app and check that the active character changes on the heard syllable. Pay special attention to the last 2-4 characters.

Manual timing QA is mandatory for each new/touched lesson:

1. Open the lesson in the app on a phone-width viewport.
2. Play every Stage 3 sentence from the sentence card.
3. Confirm highlighting follows the heard syllables, especially the final `的`, final nouns, and any fast two-character phrase.
4. For `teach-character`, confirm the helper stops before the target character and the replay prefix does not include any part of the target character.
5. For `teach-character`, confirm the post-recording stitched replay does not duplicate the target syllable or cut off the child recording.
6. For `choose-pronunciation`, tap every animal/reader audio and confirm all option files play on the first tap.

Do not ship a lesson if `charTimings` only satisfy the JSON length check but have not been heard against the final processed audio.

## Stage 4 Sentence Game Rules

Current production data starts Stage 4 at L006. Stage 4 uses a fixed `sentenceGames` array in the lesson data. These games are reviewed curriculum, not runtime random events.

- Use fixed game types per sentence/game. Do not randomly assign game modes at runtime for production lessons.
- Supported first-pass game types: `find-character`, `teach-character`, `missing-character`, `partial-order`, and `choose-pronunciation`.
- When a lesson has five Stage 4 sentence games, use all five supported game types exactly once. Do not repeat one type and omit another.
- When a lesson has five reviewed sentences and five Stage 4 sentence games, every reviewed sentence must appear in Stage 4 exactly once. Do not let `find-character` and `teach-character` reuse the same sentence while another sentence receives no interaction.
- For the normal five-sentence lesson pattern, design the first three Stage 4 games as the new-character practice set: `find-character`, `teach-character`, and `missing-character` should each target the current lesson's new character when the approved sentences make that possible.
- Use the last two Stage 4 games, usually `partial-order` and `choose-pronunciation`, more flexibly for review characters or sentence-level listening discrimination.
- `targetChar` must appear in the referenced sentence. It may be the current lesson's new character or a review character.
- A lesson should usually include at least three interactions involving the current new character, while allowing 1-2 interactions focused on review characters.
- For early lessons, `partial-order` should blank only 2-4 Han characters, not the full sentence.
- `teach-character` can use local recording/playback first; speech scoring can be added later.
- `choose-pronunciation` should use reviewed AI audio assets for production choices. Do not use browser TTS as the production reading for options.
- `choose-pronunciation` wrong choices should be near misses: same sentence length and only 1-2 Han characters different from the correct sentence. Do not use a completely different reviewed sentence as a wrong audio choice.
- Every Stage 4 game must provide spoken guidance when the game becomes active. Assume the child cannot read the prompt text.
- Stage 4 helper openings must match the game type. Do not reuse "I will read this sentence" for games where the rabbit is not the reader, especially `choose-pronunciation`.
- Stage 4 guidance must not reveal the answer. For `teach-character`, do not say the target character in the hold-to-record prompt. For `choose-pronunciation`, do not read the target sentence in the rabbit's opening; the sentence should be heard from the friend readers.
- Stage 4 scripts should avoid self-repetition. Use one short context line, one short operation line, and one short feedback line.
- The active Stage 4 block and the active sentence/game surface must glow visibly while guidance or feedback is playing.
- Before publishing, check Stage 4 on a phone-width viewport. Sentence tokens, missing-character slots, and option buttons must wrap inside the card; no Han character, zhuyin, or question-mark slot may be clipped by the screen edge.
- Stage 4 interactions must be framed as helping a visible helper character, not as a teacher testing the child. The default helper is the rabbit.
- `find-character` spoken guidance must tell the child both what to find and that they should tap the character in the sentence. Avoid ambiguous wording such as "tap it" when "it" could mean the helper character.
- `find-character` must give immediate visual feedback. The correct character should be circled/highlighted on tap, before any praise or completion voice finishes.
- `teach-character` requires the old helper flow: helper reads the sentence up to the unknown character, cries/asks for help, tells the child to press and hold the red-framed character, the app speaks a brief recording timing cue, plays a ding, records, and then replays the full sentence with the child's recording stitched into the target-character slot.
- In `teach-character`, keep cues distinct and minimally repetitive: the intro says `請按住紅框的字不放`; the post-press cue says `聽到鈴聲，就大聲念出來`. Do not repeat the full hold/ding instruction in both places. The helper's pre-press flow should stop after the child knows which action to take.
- In `teach-character`, the helper must stop before the target character audio starts. The pre-target audio range and the stitched replay prefix must not include any part of the target character, or the child's recording will sound duplicated.
- The `teach-character` recording ding must be reliable on mobile. Resume/unlock Web Audio before playing the ding, also provide an HTMLAudio/media fallback cue, use a clear pleasant bell cue lasting about 0.7-0.9 seconds, and start recording only after the ding window. The cue must not sound like an alarm or emergency warning. If mobile microphone mode suppresses cue audio, play the cue before opening the microphone stream.
- In `teach-character`, do not circle or highlight the unknown target before the helper reaches that character and gets stuck. Do not render a separate isolated target-character panel below the sentence unless it has an actual interaction.
- Every Stage 4 game type must provide a dedicated replay-sentence button in the game area. This replays only the current sentence, not the helper instruction and not the whole lesson.
- `partial-order` option cards must be shuffled before display. They must not appear in the correct sentence order on entry, even if the lesson JSON is written in sentence order.
- After a correct Stage 4 response, play one short praise phrase before stopping on the current round. Vary the praise, such as "你好棒", "你好厲害", or "太棒了". Do not auto-advance. Speak a prompt telling the child to press the red button for the next round or completion.
- Completion state must be tied to the current game id. When moving to the next Stage 4 round, never let the previous round's completed state trigger the next round's completion prompt.
- Every Stage 4 round must have a visible replay-instruction button so the child/parent can hear the helper's request again after leaving and returning.
- `choose-pronunciation` must use the animal avatar itself as the listen button and a simple checkmark button as the choice. Spoken guidance for non-readers must say to press each animal's head first, then press the checkmark next to the friend who read correctly.
- `choose-pronunciation` must give immediate visual feedback on checkmark taps. Correct choices should brighten immediately; wrong choices should visibly flash or mark wrong immediately before the spoken feedback finishes.
- `choose-pronunciation` reader/options order must be shuffled before display. The correct option must not be fixed in the first reader position.

## Review Gate

A sentence can move into the curriculum only when:

- Display text uses only allowed characters.
- Taiwan wording is natural.
- It is easy to understand and picture.
- `imagePrompt` is reviewed.
- `approved` is true.
- Final sentence audio transcribes back to `spokenText` with every Han character present.
- New-character `charAudio` exists and passes the production audibility check.
- `charTimings` come from the final processed audio and match the Han character count.
- Manual playback review confirms the last character is audible and the highlight does not drift.
- Audio may be null during prototype work, but production lessons need audio and timings.
