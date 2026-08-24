# Curriculum Production SOP

This app treats AI output as draft material. A lesson enters the shipping curriculum only after teacher review.

For API key setup and AI generation commands, see `docs/AI_GENERATION_SETUP.md`.

For sentence drafting coverage rules and sentence-quality checks, see `docs/SENTENCE_GENERATION_SOP.md`.

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

For GitHub Actions, PR, issue, or deployment checks, use the authenticated GitHub CLI at `C:\Users\User\.local\bin\gh.cmd`. If bare `gh` is not on PATH, use the full path before falling back to REST API.

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

0. Run `git fetch origin` and `git status --short --branch` in the assigned worktree. If it is dirty, stop. If it is clean but on an old package branch, switch to a new assignment branch from latest `origin/main` before running package audits. A clean old branch is only safe to leave; it is not a valid base for a new lesson/review assignment. After creating the new branch from `origin/main`, run `npm run curriculum:audit-state`, then check `docs/CURRICULUM_LEDGER.md` and `docs/PARALLEL_LESSON_REGISTRY.md`.
1. Create or claim a lesson row in `docs/PARALLEL_LESSON_REGISTRY.md` before starting any parallel lesson work. This is required before creating request files, generating packets, images, audio, or lesson JSON for a not-yet-merged lesson. After a clean claim, continue into production work; do not wait for a second teacher message. Earlier lessons or milestone review pairs that are not yet in `origin/main` are dependency blockers for Release, not blockers for Production package preparation, as long as they are recorded as provisional dependencies.
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
12. Finish the lesson-local package: request, packet, draft, final optimized images, final processed audio, timings, Stage 4 assets, and registry status.
13. Run the fast package audit below and push the package branch.
14. Leave release integration to Release: `src/curriculum/sample-lessons.json`, `public/tools/planner-data.json`, `docs/CURRICULUM_LEDGER.md`, registry cleanup, final `npm run verify`, push, and deployment.

## Asset-Complete Lesson Package

A production thread may prepare one assigned normal lesson or review module in parallel, but it must leave a complete repo package. Media files alone are not a lesson.

For a normal lesson, the minimum `asset-complete-package` is:

- `curriculum-workflow/lesson-requests/L###.json` with teacher-approved `newChars`, zhuyin, `allowedChars`, teacher notes, and final `approvedSentences`
- `curriculum-workflow/generated/L###-generation-packet.md` with the final approved sentence records matching the draft, not only generation prompts or stale candidate notes
- `curriculum-workflow/drafts/L###-draft.json` with final image prompts, audio refs, `charTimings`, and `sentenceGames`
- final compressed images under `public/assets/lessons/L###/images/`
- final processed audio under `public/assets/lessons/L###/audio/`, including sentence audio, standalone `charAudio`, and any `G02`/`G05` Stage 4 audio referenced by the lesson
- an accurate `docs/PARALLEL_LESSON_REGISTRY.md` row until merge cleanup

For a review module, use `curriculum-workflow/review-requests/R###.json` and `public/assets/reviews/R###/`; review modules have no `newChars`, zhuyin, or standalone character audio.

Production owns `asset-complete-package`, not `release-ready-package`. It should not spend time rebasing old branches, rebuilding production JSON, refreshing planner data, or updating ledger for dependency-blocked lessons. Those shared-state steps belong to Release after earlier lessons are in latest `origin/main`.

An `asset-complete-package` must be committed and pushed to its package branch unless the teacher explicitly requested local-only diagnostic work. A local dirty worktree is not a complete handoff state, because Release cannot inspect or integrate files that were never pushed.

Hard release gate:

- A branch with only `public/assets/lessons/L###/images/`, `S01-S05` audio, and `charAudio` is `assets-only`. It must not be called `merge-ready`, and the release thread must not infer final lesson JSON from chat.
- A draft that has `durationMs` but missing/empty `charTimings` is not aligned.
- A normal L006+ lesson with missing `sentenceGames`, missing `teachAudio` files, or missing `choose-pronunciation` wrong-option audio is not asset-complete.
- A lesson using provisional characters can be prepared as a dependency-blocked Production package. It cannot enter `main`, be called `release-ready`, or be treated as playable until those characters are real in latest `origin/main` or the teacher changes the sentence set.
- A migrated review package may intentionally reuse an `R###` id that already exists in legacy `reviewLessons`. That is allowed only when the handoff labels it `review migration replacement package`. Production prepares and pushes the package files on a branch, but does not edit production JSON, planner data, or ledger. Release later replaces the legacy review entry with the current schedule entry. In this narrow case, `npm run curriculum:audit-state` may fail with an expected legacy id collision; Production must report the exact failure and continue only if no other audit-state failure is present.

## Fast Package Audit

Before reporting `asset-complete-package` or `dependency-blocked-asset-complete`, Production must do a fast lesson-local audit. This audit is intended to catch defects that are cheap for Production to fix and expensive for Release to rediscover:

- `lesson-requests/L###.json`, `generated/L###-generation-packet.md`, and `drafts/L###-draft.json` agree on lesson id, order, new character(s), Taiwan zhuyin, final sentence text, `spokenText`, `focusChar`, and `displayLines`.
- The generation packet must contain the final approved sentence set exactly as implemented in the draft, including final `text`, `spokenText`, `focusChar`, `displayLines`, and `imageNotes`. Missing final records or stale candidate text is a Production package defect even if request/draft/assets pass validators; fix it before reporting `asset-complete-package`.
- Top-level `dependsOnLessons` is present whenever the lesson uses provisional characters from earlier unmerged lessons.
- `dependsOnLessons` and `provisionalLearnedChars` cover every not-yet-merged Han character used in learner-facing text: `text`, `spokenText`, `displayLines`, `focusChar`, and Stage 4 option text. Do not apply this character gate to `imageNotes` or image prompts, which are production instructions rather than learner-facing curriculum text. Do not trust a handoff that lists only previous-five coverage targets; rerun the approved-text sweep against latest `origin/main` learned chars plus provisional chars plus the current new character.
- `displayLines`, when present, join exactly back to `text`; each displayed line must stay at `<= 6` visible characters when zhuyin is shown. Count Han characters, punctuation, and any other learner-facing visible full-width character.
- `displayLines` should use the fewest readable lines: two lines when possible; three lines only when no functional two-line split fits; four or more lines only with a clear reason.
- `displayLines` must also use functional phrase breaks. Do not accept awkward count-only splits that break natural words or phrases, such as `用完彩色` / `筆，`; ask Editor/Review Migration/Supervisor for corrected `displayLines` before image/audio work if the handoff is unclear.
- Image acceptance must include a real L058 side-by-side style-lock check for every final image, not only a semantic/imageNotes check. "The sentence reads correctly", "the object is clear", or "the action is visible" is not enough. Compare each exported WebP against the L058 reference set and relevant cast anchors before accepting it.
- For each final image, reject and regenerate if it is semantically correct but visually drifts into generic/simple watercolor, thin detailed Japanese-style watercolor, flat cartoon, anime, 3D render, photorealism, overly round generic child faces, tiny/random child proportions, or redesigned recurring identities.
- `charAudio` paths use `char-uXXXX.m4a`; generation packets and drafts must not leave stale examples such as `char-字.m4a`.
- Every reviewed sentence has final `imageSrc`, sentence `audio.src`, `durationMs`, and non-empty `charTimings`.
- Five-sentence Stage 4 lessons have exactly five `sentenceGames`, use each supported game type once, use every reviewed sentence exactly once, and follow canonical normal-lesson order: `G01 find-character`, `G02 teach-character`, `G03 missing-character`, `G04 partial-order`, `G05 choose-pronunciation`, unless the teacher explicitly approved and documented an exception.
- `find-character`, `teach-character`, and `missing-character` point to a target character that actually appears in the referenced sentence.
- `teach-character` includes `targetCharIndex` and exact generated prefix/suffix `teachAudio` where needed.
- Every explicit Stage 4 `targetCharIndex` must be machine-checked against the zero-based Han-only sentence sequence and point to `targetChar`; every `missingIndexes` entry must be in range; every `partial-order` option must be one Han card whose `correctOrder` maps to the matching missing Han character. If the handoff self-check is missing or mismatches the draft/validator output, stop and return to Editor/Supervisor instead of guessing a correction.
- Stage 4 option schema is complete: option ids, `correct`, and `correctOrder` metadata exist where the game type requires them.
- `choose-pronunciation` wrong options are near misses, normally same sentence length and only 1-2 Han characters different from the correct option.
- If any `choose-pronunciation` option text changes, regenerate the corresponding whole-sentence wrong-option audio from the exact final text, then rerun `npm run assets:audio -- --lesson L###`.
- `choose-pronunciation` option audio should pass the `3 dB` mean-volume spread check. If `npm run assets:audit` reports a spread issue for the new lesson, normalize or regenerate before handoff.
- All image and audio paths referenced by the draft exist under the owned lesson/review asset folder.
- The final report lists per-image style/cast results, for example: `S01 style-lock PASS, cast PASS; S02 style-lock PASS, cast PASS ...`. If any image was rejected during generation, say it was rejected and regenerated before final commit. Do not call a rejected draft image final, and do not commit rejected draft images.

Production should run:

```bash
npm run validate:production
git diff --stat
git diff --name-only
```

Run `npm run verify` only when the branch has a current production JSON entry and dependencies are already present in latest `origin/main`. For dependency-blocked packages, report that `verify` was skipped because shared-state integration is Release-owned.

## Cloud Device Authorization

Do not treat free browsing as a universal app mode. The teacher wants only designated teacher/parent devices, such as the teacher phone and tablet, to freely browse every lesson. All other devices must use normal unlock progression.

Current app-level rule:

- Production account sync stores progress in `accounts/{uid}/profiles/{profileId}` and device metadata in `accounts/{uid}/devices/{deviceId}`. The app generates `deviceId`; normal users do not name devices.
- A family/customer account has up to three active learning profiles. Default labels are `學習檔案一`, `學習檔案二`, and `學習檔案三`; users may rename profile labels to names such as `媽媽`, `哥哥`, or `妹妹`.
- The app header must show the current account/profile entry. Tapping it opens an account/profile menu: currently signed-in account first, then the three learning profiles, with direct switching and an entry into Settings for profile renaming.
- Devices store `activeProfileId`. Two devices using the same profile sync the same progress; sibling profiles stay separate.
- A family/customer account may have at most three active devices.
- A device may freely browse all lessons only when its Firestore account-device record has `freeBrowse: true`.
- `freeBrowse` must not be stored as a local user-toggleable setting.
- The settings UI must not display whether the current device is authorized for free browsing. Normal users do not need to know this internal policy exists.
- Progress sync must preserve server-side authorization fields when saving progress.
- The settings UI must not include a legacy/manual device-code field or editable device-name field.
- Before paid public release, enforce the three-device and three-profile limits in a trusted backend such as Cloud Functions. Firestore rules cannot reliably count active sibling records by themselves.
- If stronger content security is required later, move lesson data/assets behind authenticated access; GitHub Pages static lesson assets cannot be truly hidden from someone who knows the URLs.

Lesson session rule:

- When a lesson is unlocked, all stages in that lesson must be directly enterable from the stage entrance controls. Do not require Stage 1 -> Stage 2 -> Stage 3 -> Stage 4 during review.
- When a completed lesson is reopened from a stage entrance, that selected stage must restart from that stage's beginning instead of showing the previously completed advance/reward prompt.
- The app must persist per-lesson session state in `lessonSessions[L###]`, including `activeStage`, Stage 1 heard characters, Stage 2 completion, Stage 3 sentence progress, and Stage 4 completed round count.
- Returning from another tab/window or after cloud sync loads should restore the same lesson position instead of resetting to Stage 1.

## Parallel Production Reference

Parallel lesson ownership, registry checkpoints, dependency rechecks, and merge order are defined in `docs/CURRICULUM_OPERATING_SOP.md` and `docs/PARALLEL_LESSON_REGISTRY.md`.

Production-specific constraints still apply during parallel work:

- Each thread may prepare only its owned lesson/review request, packet, raw audio inbox, and final asset folder.
- A production handoff should be one-paste executable. The receiving thread claims the unit in the registry and continues to the `asset-complete-package` unless the assigned worktree is dirty, startup checks fail, required handoff data is missing, dependency/allowed-character declarations are inconsistent or missing, or the registry cannot be updated/pushed before large asset work. Do not stop merely because an earlier numbered lesson or required review pair is not yet in `origin/main`; record it as a dependency and finish a dependency-blocked package.
- Image prompt writing, image generation, and raw AI audio generation may happen in parallel by owned lesson/review folder.
- JSON-writing commands must run one at a time: `assets:images`, `assets:audio`, `assets:align`, `assets:align:ai`, and any script that rewrites `src/curriculum/sample-lessons.json` or shared reports.
- Before any later lesson is merged, re-check every sentence, image prompt, audio file, Stage 4 option, and timing against the now-real learned-character set from latest `origin/main`.

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

The recommendation files are teacher-review drafts. They are not approved curriculum, they are not a reserved lesson choice, and they must never block a later teacher-selected character.

Approval boundary:

- Asking AI to recommend next characters is only exploration.
- Do not write a recommended character into `curriculum-workflow/lesson-requests/L###.json`, `docs/PARALLEL_LESSON_REGISTRY.md`, `docs/CURRICULUM_LEDGER.md`, or production JSON unless the teacher explicitly says that character is the lesson's approved new character.
- If a recommendation draft or unmerged work artifact disagrees with the teacher's latest explicit lesson request, the teacher request wins. Replace or ignore the stale draft; do not stop the lesson because "a recommended character already exists."
- A lesson request is authoritative only when it contains the teacher-approved `newChars` and the approved/final sentences for that lesson.

Review workflow:

1. Open the Markdown file for a readable overview.
2. Pick one `choiceId`.
3. In the JSON file, set `approval.teacherApproved` to `true` only after the teacher explicitly approves this exact new character and final sentence set.
4. Set `approval.selectedChoiceId`.
5. Add the chosen sentence indexes to `approval.approvedSentenceIndexes`.
6. Add better teacher-written sentences to `approval.customSentences` if needed.
7. Run:

```bash
npm run curriculum:request-from-review -- --review curriculum-workflow/recommendations/L###-next-lesson-review.json
```

This creates `curriculum-workflow/lesson-requests/L###.json` with the selected character and approved sentence list in `teacherNotes`.

The request conversion script refuses recommendation files unless `approval.teacherApproved` is true or the command includes `--teacher-approved`. Existing `lesson-requests/L###.json` files are not overwritten unless `--force` is provided after checking the teacher's latest approval.

Rules:

- AI-generated recommendations may include unnatural sentences. The teacher must reject or rewrite them.
- Do not move recommendation candidates directly into `src/curriculum/sample-lessons.json`.
- Do not treat `approval.selectedChoiceId` alone as teacher approval. It may be a stale UI scratch value from an earlier recommendation pass.
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
- New or replacement sentence images must be generated as square `1:1` compositions. Prompt every image with `square image / 1:1 composition`, keep the full scene's meaning-bearing people, objects, actions, and count relationships centered, and leave safe margins so the app's square display does not cut off required content.
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

Until these hard limits are enforced in `npm run validate:production`, the thread preparing the lesson must paste or summarize the size check in its final handoff. Do not describe a lesson as asset-complete if the size check was skipped.

For whole-repo asset diagnostics, run:

```bash
npm run assets:audit
```

This inspects every referenced production lesson/review image and audio file. It checks WebP image references, image dimensions, image size, public PNG/JPG leftovers, `.m4a` audio references, AAC codec, `44100 Hz`, mono audio, valid duration, measured max/mean volume for character audio, sentence audio, `teachAudio`, and Stage 4 option audio, plus relative loudness spread across `choose-pronunciation` options. The default command reports findings without blocking so old-course debt can be triaged. Use strict mode only when the task is to enforce all findings:

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

## Audio Generation Quality Baseline

Use the repo's standard OpenAI audio path for every production lesson/review unless the teacher explicitly approves an exception:

```bash
npm run ai:check
npm run ai:audio -- --lesson L###
npm run assets:audio -- --lesson L###
npm run assets:align:ai -- --lesson L###
```

Before generating audio, finish the request, packet, and draft. The draft must already contain the approved `spokenText`, final sentence audio paths, standalone `charAudio` path, `teachAudio` prefix/suffix paths where needed, and `choose-pronunciation` wrong-choice audio paths. Generate audio from the exact draft text; do not type a separate ad hoc prompt that differs from the approved lesson data.

Stage 4 audio is production audio:

- Generate `teachAudio` prefix/suffix from the exact text fragment before/after `targetCharIndex`.
- Generate each `choose-pronunciation` wrong option from the complete wrong `spokenText`.
- Do not cut, splice, patch, overdub, or extract these files from a correct sentence audio file.

Short files need extra review. Standalone `charAudio` may be short, but it must sound like a natural single-character pronunciation. One-character `teachAudio` prefix/suffix files can sound clipped or unnatural, so include them in the teacher audio-review page and regenerate instead of forcing acceptance when they sound wrong.

Alignment fixes must preserve the approved Traditional Chinese text. AI transcription can return simplified equivalents such as `车`, `关`, `坏`, or `还`; handle those with equivalence normalization or manual timing review. Do not change production text to simplified Chinese, and do not change a correct character to a same-sound wrong character to satisfy the transcript. If AI timestamps have impossible cuts, such as a 1 ms character segment, manually smooth the timing and record that in the final handoff.

After processing, verify the final `.m4a` files, not only the raw AI files:

- required files exist for `S01-S05`, standalone `charAudio`, `G02` prefix/suffix where referenced, and `G05` wrong choices
- codec is AAC, sample rate is `44100 Hz`, and channel count is mono
- every sentence's Han-character count matches `audio.charTimings.length`

For dependency-blocked lessons, do not leave a future lesson in production JSON. If a script requires the lesson to exist in `src/curriculum/sample-lessons.json` temporarily, insert it only long enough to process audio/timings, then immediately remove it before committing. Final `git status` for a dependency-blocked package must not show `src/curriculum/sample-lessons.json`, `public/tools/planner-data.json`, or `docs/CURRICULUM_LEDGER.md` as changed for that future lesson. Mark the registry status `dependency-blocked-asset-complete`, not `merge-ready` or `release-ready`.

Production audio hard limits for every new or touched lesson/review module:

- Final curriculum audio must be `.m4a` unless there is an explicit exception in the handoff.
- Processed output must be mono AAC at `44100 Hz` and about `96k` bitrate, matching `scripts/process-audio-assets.mjs`.
- Character-card `charAudio` target duration is `700-3500 ms`, and production validation fails outside that range. Regenerate standalone OpenAI single-character audio if it is too short, too long, too quiet, clipped, or contaminated.
- Sentence audio should end within `300 ms` after the last spoken Han character. Long silent tails must be trimmed or timing must be repaired.
- Sentence audio, Stage 4 option audio, and `teachAudio` must be audibly normalized, not merely present. If a phone tester reports no sound, inspect actual file volume before changing UI playback logic.
- New-character `charAudio` must pass `validate:production` duration and audibility checks: `700-3500 ms` and `max_volume >= -35 dB`.
- Referenced production audio should pass `max_volume >= -12 dB` and `mean_volume >= -28 dB` after `volumedetect`. If quieter, regenerate or normalize before merge.
- In each `choose-pronunciation` round, the three option audio files must have `mean_volume` within `3 dB` of each other. A correct file at normal volume with two quiet wrong-choice files is a production defect because children may not hear the wrong options clearly.
- Do not use browser TTS as production curriculum audio for `charAudio`, sentence audio, or `choose-pronunciation` options unless the exception is recorded and the lesson is explicitly marked for later AI-audio replacement.

## Teacher Audio Review Page

Production threads must not publish temporary audio-review HTML that disappears on the next GitHub Pages deploy. The permanent review entry is:

```text
public/tools/audio-review.html
```

GitHub Pages URL format:

```text
https://icelog-TU.github.io/character-recognition-dojo/tools/audio-review.html?unit=L###&ref=<branch-or-commit-sha>
```

After a production thread finishes audio and pushes its branch, it must provide the teacher with a stable audio-review URL. Prefer an exact commit SHA in `ref` after the branch is pushed, because the approval record is keyed by unit plus commit SHA. If any audio file changes after review starts, push a new commit and ask for a new review URL; do not reuse old approval checkmarks for changed audio.

The review page loads the unit's draft JSON first, then falls back to production JSON. It lists every detected `charAudio`, sentence audio, `teachAudio` prefix/suffix, and `choose-pronunciation` option audio. The teacher can check each audio file as OK. When signed in with Google and Firestore rules allow it, the page writes shared review status to `audioReviews/{reviewId}`.

Production and release threads must include or run this status check when teacher audio approval matters:

```bash
npm run audio:review-status -- --unit L### --ref <branch-or-commit-sha>
```

If the teacher explicitly requests pre-merge audio approval for a specific unit, the production branch must not be deleted and the registry/final handoff must say `audio-review pending teacher OK` with the review URL until approval is complete. Otherwise, teacher audio review is post-merge by default and should be tracked through the asset-review repair queue below, not used to block ordinary release.

## Post-Merge Teacher Asset Review

Teacher image/audio review is post-merge by default. Do not block ordinary production/release while waiting for the teacher to manually inspect every picture and audio file, as long as the required automated gates pass.

Automated gates still block the relevant owner:

- Production must not hand off an `asset-complete-package` until required image/audio files exist, final images are compressed WebP with no referenced PNG/JPG leftovers, final audio is processed `.m4a`, Stage 4 `teachAudio` and `choose-pronunciation` audio referenced by the draft exist, and `charTimings` plus allowed-character checks pass.
- Production should run `npm run validate:production` and the fast package audit above. Run `npm run verify` only when the branch has a meaningful current production JSON entry.
- Release must run `npm run verify` after integrating the unit into latest `origin/main` production JSON, planner, ledger, and registry cleanup.

Teacher subjective review is a repair queue, not a release gate:

- image scene mismatch, unwanted visual detail, style drift, or character inconsistency
- audio pronunciation that sounds odd to the teacher despite passing technical checks
- sentence/image mismatch noticed after release
- teacher preference for regenerating an otherwise technically valid asset

The permanent post-merge review tools are:

```text
public/tools/asset-review-index.html
public/tools/lesson-asset-review.html
```

Use the index page as the long-term entry point for the full L001-L600 plan. It shows all 600 lesson slots, loads only lightweight curriculum/review metadata, and does not load every image/audio file. Built-but-unreviewed lessons are visually distinct from reviewed lessons, repair-needed lessons, and not-yet-built future lessons. The page supports search and filters, and links built lessons into single-unit review pages:

```text
https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main
```

Single-unit URL format:

```text
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L###&ref=main
```

This `ref=main` URL is the final post-merge review queue only. It is not a proof that an unmerged Production package exists. If the unit is still only on a Production branch, `ref=main` will correctly show "draft or production JSON not found".

Pre-merge package preview is allowed only when the teacher or Release needs to inspect files before integration. It must use the pushed package branch or full tip commit SHA:

```text
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L###&ref=codex%2Fl###-complete-package
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L###&ref=<full-commit-sha>
```

Production handoff must separate these fields:

- Package source: `branch = origin/codex/l###-complete-package` and `tip commit = <full SHA>`.
- Pre-merge package preview URL: optional, labeled "pre-merge package preview, not final main review queue", and using `ref=<branch-or-full-SHA>`.
- Post-merge asset review URL: Release-owned final URL using `ref=main`, labeled "usable after Release merges and deploys".

Production or release final handoff must include the index URL and, when useful, the direct single-unit asset-review URL. The single-unit page displays each sentence with its text, `spokenText`, sentence audio, and the same square image view used by the child-facing Stage 3 app. It does not show a separate original-image preview because the app view is the review target. If a required person, object, action, count, or other meaning-bearing detail is cut off or unclear in the square app preview, mark the image as needing repair. The page also lists the other formal audio files such as `charAudio`, `G02` prefix/suffix, and `G05` options. The teacher marks only items that need repair and writes notes. Unmarked items are not blockers.

Review tools use Firestore for cross-device state. They may read `audioReviews` and `assetReviews` without sign-in, so a phone or tablet can load existing cloud review state. Writes require Google sign-in. If the teacher marks a repair item, clears a repair item, writes a note, or checks the whole-unit complete box while not signed in, that change is local to the current browser and must not be treated as cross-device synced.

For post-merge review on `main`, the repair queue is keyed by unit plus stable `main`, not by the latest commit SHA. This keeps L### review status findable after later lessons are pushed. Commit SHA remains visible for diagnosis, but `ref=main` is the normal 600-lesson review workflow.

Repair threads must query the queue instead of asking the teacher to restate problems:

```bash
npm run asset:review-status -- --unit L### --ref <commit-sha-or-main>
npm run asset:review-status -- --list --ref main
```

The default command reports repair items without failing, because post-merge teacher review must not block release automation. Use `--fail-on-repair` only in an asset-repair workflow that intentionally wants a nonzero exit when repair work exists.

The complete post-merge repair loop is:

1. Teacher opens `lesson-asset-review.html?unit=L###&ref=main`.
2. Teacher marks only bad image/audio items as needing repair and writes notes. The whole-unit complete checkbox may be checked only when every remaining unmarked item is acceptable.
3. Asset repair thread runs `npm run asset:review-status -- --unit L### --ref main`, fixes only the marked items unless scope is explicitly expanded, preserves the L058 style anchor and recurring cast identity required by `docs/LESSON_VISUAL_CAST_SOP.md`, reruns relevant asset processing and validation, and pushes the repair branch.
4. Release/repair thread must merge or cherry-pick the repair into `main`; a repair-branch preview URL is not enough for final review.
5. Teacher reopens the `ref=main` review page. If the repaired asset is now acceptable, the teacher clears the item's `needs repair` checkbox, optionally clears or updates the note, and checks the whole-unit complete box.
6. The index turns green only when `reviewComplete === true` and `repairCount === 0`. A checked complete box with remaining repair items must still show the unit as needing repair.

An asset repair thread must fix only the marked image/audio items unless the user explicitly expands scope. Image repair must not introduce a new style or randomize recurring roles while fixing the marked defect; style drift and cast drift are failed repairs. After repair, rerun the relevant asset processing and validation, push the repair into `main` or provide a branch preview only as an intermediate check, and give the teacher the `ref=main` review URL for final clearing.

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

- Sentence drafting must follow `docs/SENTENCE_GENERATION_SOP.md`. That file is the authority for word-first drafting, target/review coverage minimums, phrase diversity, sentence quality, `spokenText`, `focusChar`, and review checklist.
- Display text may use only previously learned characters plus the current new character(s).
- AI must not introduce new Han characters.
- Every AI candidate, teacher custom sentence, Codex rewrite, `spokenText`, `displayLines`, `focusChar`, and Stage 4 option text must be audited against the lesson request's `allowedChars` before image prompts, audio generation, or production JSON entry.
- If any Han character is outside `allowedChars`, reject that sentence and report the exact illegal character. Do not generate assets for it and do not rely on later validation to catch it.
- AI must not use Hanyu pinyin.
- If the user proposes a sentence containing a Han character outside the learned set plus the current new character(s), stop and tell the user exactly which character is not yet learned. Do not generate images, audio, or production curriculum for that lesson until the sentence is corrected or the user explicitly changes the lesson's new-character plan.
- AI output is a draft, never automatically approved.
- Early lessons can have very few sentences.
- Later lessons can gradually move toward 6 to 8 sentences.
- Keep `text` and `spokenText` aligned: `spokenText` may omit punctuation, but it must not omit any Han character shown in `text`.
- If `displayLines` is used, it must join exactly back to `text`; it is only a visual line break plan.
- For phone layout, each `displayLines` line must contain at most 6 visible characters when zhuyin is shown, including punctuation. Split longer sentences into more lines before shipping; do not use a Han-only count.
- Prefer the fewest readable lines that satisfy the 6-visible-character limit. Use two lines whenever a functional two-line split works. Use three lines only when two lines would exceed the limit or make the reading flow awkward. Four or more lines should be rare and should be explained in the handoff or final report.
- Line breaks must follow functional phrase boundaries, not only the numeric length gate. Prefer subject, time/frequency, object, action, result, reason/condition, short predicate, or natural punctuation boundaries. Do not split natural phrases such as `彩色筆`, `水彩筆`, `沒收桌子`, or `臉色發白` unless unavoidable.
- Sentences ending in neutral-tone `的` are allowed, but the final `的` must be checked carefully in transcription because TTS can make it too light.

## Review Module Rules

Starting after L045, every 15-lesson milestone gets two review modules. These are not `L###` lessons and do not advance the new-character lesson count. See `docs/CURRICULUM_OPERATING_SOP.md` for the full cycle.

- After L045: R001/R002, 5 sentences each, must cover every new character from L016-L045 at least once across the 10 sentences. The playable path is `L045` -> `R001` -> `R002` -> `L046`; the next new-character lesson id is L046.
- After L060: R003/R004, 5 sentences each, must cover every new character from L031-L060 at least once across the 10 sentences. The next new-character lesson is L061.
- After L075: R005/R006, 5 sentences each, must cover every new character from L046-L075 at least once across the 10 sentences. The next new-character lesson is L076.
- Continue by 15-lesson milestones: after L090 review L061-L090, after L105 review L076-L105, and so on.
- Review pairs are Release/main blockers: after a milestone lesson enters `main`, its two review modules must ship before the next numbered lesson enters `main`. If the pair was skipped, Release must stop merging later numbered lessons and catch up the missing review pair(s). Production may still prepare later dependency-blocked lesson-local packages when provisional dependencies are recorded.
- For overdue review modules, lock allowed characters to the milestone ceiling, not latest `origin/main`.
- Continue this schedule through L600. Use the full schedule table in `docs/CURRICULUM_OPERATING_SOP.md` as authority. The final standard pair is R075/R076 after L600 for L571-L600; there is no extra capstone pair.
- First milestones:

| Milestone in main | Required review pair before next numbered lesson | Coverage target | Allowed character ceiling |
| --- | --- | --- | --- |
| L045 | R001, R002 before L046 | L016-L045 | characters learned through L045 |
| L060 | R003, R004 before L061 | L031-L060 | characters learned through L060 |
| L075 | R005, R006 before L076 | L046-L075 | characters learned through L075 |
| L090 | R007, R008 before L091 | L061-L090 | characters learned through L090 |
| L105 | R009, R010 before L106 | L076-L105 | characters learned through L105 |
- Review modules introduce no new characters and must not contain `newChars`, `zhuyin`, or single-character `charAudio`.
- Review modules live in top-level `reviewLessons`, not in `lessons`.
- Review module assets live under `public/assets/reviews/R###/`.
- Review module request files live under `curriculum-workflow/review-requests/R###.json`.
- Production-ready review modules must render in the normal playable square course-card grid after their `afterLessonOrder`, and must not be reachable only through a temporary reservation section.
- The `漢字總覽` page must include a permanent `複習區` after the six color groups. It reserves `R001` through `R076`; shipped and unlocked review modules are clickable there, while future modules may appear only as UI placeholders.
- Review modules grant the same one-time completion reward as lessons. Their `下一課` button must advance to the next review module or numbered lesson in the playable path.
- Review modules are child-facing two-stage units: Stage 1 is `看圖聽句子`, Stage 2 is `句子遊戲`. Do not show `第三階段` or `第四階段` labels in review modules just because the internal implementation reuses normal lesson Stage 3/4 components.
- Plan each two-module review pair together. Do not approve the first review module if the pair as a whole does not yet cover the required 30-lesson character set.
- Review sentences may use any character learned by the milestone, but the coverage checklist must be based on the pair's target 30-lesson range.
- Do not add empty review placeholders to `src/curriculum/sample-lessons.json`; placeholders belong in the website UI only until the reviewed sentences and production assets are ready.
- Do not create numbered `L###` placeholders for review modules. After L045, L046 is reserved for the next new-character lesson; the playable path is `L045` -> `R001` -> `R002` -> `L046`.
- Review modules must satisfy the same production asset hard limits as normal lessons: WebP images, normalized `.m4a` sentence/option audio, AI-generated `charTimings`, manual playback QA, and review folder size `<= 2.5 MB`.

## Image Rules

Images are generated or sourced only after sentence approval.

- One image per sentence.
- Mandatory style anchor: use the full polished L058 library set as the approved sentence-image reference: `public/assets/lessons/L058/images/L058-S01.webp`, `public/assets/lessons/L058/images/L058-S02.webp`, `public/assets/lessons/L058/images/L058-S03.webp`, `public/assets/lessons/L058/images/L058-S04.webp`, and `public/assets/lessons/L058/images/L058-S05.webp`.
- L058 is a style-only anchor. It controls illustration treatment, palette, linework, lighting, composition, and environment detail. It does not define the identity, face, hair, clothing, body shape, or age of mother, father, teacher, passerby, or any other human role.
- Also use the refined preferred style/proportion examples listed in `docs/LESSON_VISUAL_CAST_SOP.md`: `public/assets/lessons/L115/images/L115-S01.webp`, `public/assets/lessons/L115/images/L115-S02.webp`, `public/assets/lessons/L118/images/L118-S02.webp`, `public/assets/lessons/L119/images/L119-S01.webp`, and `public/assets/lessons/L128/images/L128-S03.webp`. These examples are the teacher-approved practical target for protagonist-girl age/proportions, mother continuity, recurring boy proportions, and the preferred warm detailed course look.
- Human role identity and cast continuity are governed by `docs/LESSON_VISUAL_CAST_SOP.md` and approved notes in `docs/CURRICULUM_LEDGER.md`.
- When generating or replacing sentence images, attach or otherwise provide those reference image files to the image-generation context whenever the tool supports reference images. If the tool cannot accept image references, explicitly state that limitation in the work notes and include the exact reference paths plus the concrete style traits in the prompt.
- The required style traits are: modern children's picture-book illustration, warm natural light, fine pencil-and-watercolor linework, detailed but clean library/interior or outdoor environments, consistent expressive preschool proportions, soft cheeks, gentle facial expressions, bright warm palette, and phone-readable composition.
- Do not rely on generic style phrases such as only `warm watercolor children picture-book style`; that has produced inconsistent simpler watercolor images. Prompts for new/replacement sentence images must name the approved L058 style reference and list the concrete style traits above.
- Before accepting each generated image, open the actual final exported WebP and compare it side by side against the L058 reference set, the refined preferred examples, and any relevant cast anchors. This is a hard per-image acceptance gate, not a loose prompt-reference note. The final image must highly preserve the L058 illustration treatment: fine pencil-and-watercolor linework, warm natural light, bright clean palette, detailed but uncluttered environment, soft expressive preschool proportions, and consistent face/body proportions.
- Reject and regenerate images that drift into flat cartoon, simple watercolor wash, anime, 3D render, plastic toy, heavy outline, realistic photo, muted/dark palette, simplified round generic faces, tiny/random child proportions, inconsistent character proportions, or protagonist children who look too young, too old, too tiny, or redesigned compared with the refined preferred examples.
- Before reporting `asset-complete-package`, every changed image must pass the per-image L058 side-by-side style lock check and the recurring cast anchor check in `docs/LESSON_VISUAL_CAST_SOP.md`. Semantic correctness alone is not enough: `我`, `你`, `他`, mother, father, teacher, generic adults, generic children, and other recurring roles must preserve their approved identities and remain visually distinct.
- Production final reports must include a style/cast line for the changed images, for example: `L319-S01 through L319-S05: L058 side-by-side style lock PASS; recurring cast identity PASS`. If any image is borderline, list the exact file and remaining risk instead of hiding it inside `asset-complete-package`.
- If Production cannot access the L058 style references or required cast anchor images, or repeated generations cannot preserve style/cast continuity, stop and return to Supervisor / Asset Repair instead of marking the package asset-complete.
- Store final assets under `public/assets/lessons/L###/images/`.
- Use `.webp` by default.
- Path example: `public/assets/lessons/L004/images/L004-S01.webp`.
- Curriculum `imageSrc` example: `/assets/lessons/L004/images/L004-S01.webp`.
- Images must not contain visible text, letters, numbers, zhuyin, labels, signs, or watermarks.
- If the sentence expresses a count, the image must clearly match the count.
- If a sentence uses a person's `左邊` or `右邊`, the image must use that person's own left/right side, based on their hands and body orientation, not the viewer's screen left/right. When prompting, explicitly name the reference person and anatomical side.
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
- Follow `docs/LESSON_VISUAL_CAST_SOP.md` for mother, father, teacher, classmate, elder, passerby, and other human role identities. Do not let one attractive L058-style adult woman become every adult role.
- When `你`, `他`, `爸爸`, `媽媽`, `哥哥`, `姐姐`, `弟弟`, `妹妹`, `老師`, classmates, elders, passersby, or other stable roles are introduced, add their approved visual description to `docs/CURRICULUM_LEDGER.md`.
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
- Character audio path example: `public/assets/lessons/L004/audio/char-u5c0f.m4a`.
- Curriculum `audio.src` example: `/assets/lessons/L004/audio/L004-S01.m4a`.
- Curriculum `charAudio` example: `"/assets/lessons/L004/audio/char-u5c0f.m4a"`.
- Audio reads `spokenText`, not punctuation.
- Do not generate one audio file per character for sentence reading.
- Generate and review whole-sentence audio, not stitched character audio.
- The final syllable must remain audible. Do not accept audio where the last Han character is swallowed, clipped, or missing.
- The audio processing step must not trim sentence endings. It may remove leading silence, but it must preserve trailing breath and final syllable decay.
- After processing audio, transcribe the final `.m4a` and compare it to `spokenText` before accepting the lesson.
- If transcription misses a Han character, especially final `的` or final body-part nouns like `手`, regenerate the audio before writing timings.
- Stage 1 character-card taps must cancel guide narration and start the character audio in the same user gesture. Do not insert `setTimeout`/`waitMs` before `audio.play()` on mobile. If the AI character audio fails to start, fall back to browser TTS for that character.
- Character audio must be audibly normalized, not merely present. `npm run validate:production` measures each new-character `charAudio` duration and volume; it fails if duration is outside `700-3500 ms` or `max_volume` is below `-35 dB`.
- If a character card appears to play but the user cannot hear it on mobile, first check the actual file volume. A file can exist and be valid M4A while still being effectively silent.
- `charAudio` for character cards must be generated from the single target character as standalone OpenAI TTS input. Do not create, repair, or replace character-card audio by cutting, trimming, slicing, copying, or extracting a character from sentence audio, even if the cut sounds clean.
- If standalone character-card audio is missing, clipped, too quiet, too short, too long, or contaminated by nearby syllables, regenerate that single character with OpenAI TTS and process it through `npm run assets:audio -- --lesson L###`. Do not repair it from sentence audio.
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
- For normal L006+ five-sentence production lessons, Stage 4 game order is fixed and must not drift:
  1. `G01` = `find-character`
  2. `G02` = `teach-character`
  3. `G03` = `missing-character`
  4. `G04` = `partial-order`
  5. `G05` = `choose-pronunciation`
- Do not reorder normal-lesson Stage 4 games for variety, sentence convenience, asset convenience, or because an older production lesson drifted. If the teacher explicitly approves an exception, record the exact exception and reason in the Editor handoff, Production generation packet, Release notes, and ledger entry.
- In the canonical order, design `G01`-`G03` as the new-character practice set: `find-character`, `teach-character`, and `missing-character` should each target the current lesson's new character when the approved sentences make that possible.
- Use `G04` `partial-order` and `G05` `choose-pronunciation` more flexibly for review characters or sentence-level listening discrimination.
- `targetChar` must appear in the referenced sentence. It may be the current lesson's new character or a review character.
- A lesson should usually include at least three interactions involving the current new character, while allowing 1-2 interactions focused on review characters.
- `partial-order` must blank only 3-4 Han characters, not the full sentence.
- `partial-order` option cards must each contain exactly one Han character. Do not use multi-character word or phrase cards such as `耐心等紅燈`; the current app interaction compares one card to one missing Han-character slot.
- `partial-order` `missingIndexes.length` must equal `options.length`, and every option must have a valid `correctOrder` pointing to the matching missing Han character.
- `teach-character` can use local recording/playback first; speech scoring can be added later.
- `choose-pronunciation` should use reviewed AI audio assets for production choices. Do not use browser TTS as the production reading for options.
- `choose-pronunciation` wrong choices should be near misses: same sentence length and only 1-2 Han characters different from the correct sentence. Do not use a completely different reviewed sentence as a wrong audio choice.
- `choose-pronunciation` wrong-choice audio must be generated from the complete wrong-choice text as a whole sentence. Do not splice, stitch, patch, overdub, or replace one or two syllables inside the correct sentence audio to create a wrong option. This produces unnatural rhythm and obvious volume/tone discontinuities.
- For a normal lesson's fifth Stage 4 round, first write the final `options[].text` values for `correct`, `wrong-one`, and `wrong-two`; then generate or regenerate `L###-G05-wrong-one.m4a` and `L###-G05-wrong-two.m4a` from those exact complete texts. The correct option may reuse the reviewed sentence audio, usually `L###-S05.m4a`.
- After generating wrong-choice audio, process it through `npm run assets:audio -- --lesson L###`, run `npm run assets:audit`, and manually tap every `choose-pronunciation` reader on a phone-width viewport. Reject wrong-choice files with mismatched loudness, clipped final syllables, robotic inserts, or audible edit seams. All three option files in the same round must pass the `3 dB` mean-volume spread check.
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
- In `teach-character`, production data must set `targetCharIndex`, not only `targetChar`. `targetCharIndex` is the Han-character index in `sentence.text`, skipping punctuation, and it must point to `targetChar`. This is required when the sentence contains repeated characters such as `爸爸`, `不...不...`, or two occurrences of the same target.
- Production must not repair an Editor handoff's index mismatch by guessing. If `targetCharIndex` points to a different Han character, if `missingIndexes` no longer match the final sentence, or if `partial-order` `correctOrder` does not map each single-Han option to the matching missing character, stop and report the exact sentence id, target/index, actual Han value, and expected fix. Continue only after Editor/Supervisor confirms the corrected Stage 4 plan or the repo validator proves the correction.
- In `teach-character`, production data must provide dedicated `teachAudio.prefixSrc` and/or `teachAudio.suffixSrc` assets when there is text before or after the target character. Generate `L###-G02-prefix.m4a` from exactly the text before `targetCharIndex`, and generate `L###-G02-suffix.m4a` from exactly the text after `targetCharIndex`. If the target is the first Han character, omit `prefixSrc`; if it is the final Han character, omit `suffixSrc`.
- Do not create `teachAudio` by cutting, muting, splicing, replacing, or overdubbing the full sentence audio. Generate each prefix/suffix file from its exact complete text fragment, then process it to mono AAC `.m4a` at `44100 Hz` using the standard audio settings. Very short one-character prefix/suffix files may need loudness normalization without aggressive leading-silence removal; verify actual max volume after processing.
- In `teach-character`, the helper must stop before the target character audio starts. The pre-target playback and stitched replay prefix must not include any part of the target character, or the child's recording will sound duplicated. The post-recording suffix must not include any leftover target-character audio and must not skip the first suffix character.
- The old full-sentence `charTimings` split is fallback only for legacy data. Do not ship new or touched `teach-character` production lessons without dedicated `teachAudio` assets and phone playback QA.
- The `teach-character` recording ding must be reliable on mobile. Resume/unlock Web Audio before playing the ding, also provide an HTMLAudio/media fallback cue, use a clear pleasant bell cue lasting about 0.7-0.9 seconds, and start recording only after the ding window. The cue must not sound like an alarm or emergency warning. If mobile microphone mode suppresses cue audio, play the cue before opening the microphone stream.
- In `teach-character`, do not circle or highlight the unknown target before the helper reaches that character and gets stuck. Do not render a separate isolated target-character panel below the sentence unless it has an actual interaction.
- Every Stage 4 game type must provide a dedicated replay-sentence button in the game area. This replays only the current sentence, not the helper instruction and not the whole lesson.
- Every Stage 4 round must provide a visible rescue button named `按我看解答`. Revealing the answer must not complete the round or grant progress. After the answer is visible, show `重新挑戰這一題` so the child can reset that single round and try again.
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
