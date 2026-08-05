# Curriculum Operating SOP

This is the operating SOP for building curriculum in `認字練功房` when several Codex/GPT threads may be active at the same time.

The goal is to allow parallel lesson preparation without letting `main`, Markdown notes, generated packets, images, audio, and GitHub Pages drift apart.

## SOP Authority Map

Do not duplicate detailed rules across SOP files. Use this authority order when updating docs:

- This file is the authority for source-of-truth order, shared working copy, new-thread startup, parallel lesson ownership, dependency gates, merge order, and done-state checks.
- `docs/CURRICULUM_PRODUCTION_SOP.md` is the authority for lesson/review production assets, image/audio/timing processing, Stage 4 QA, and asset hard limits.
- `docs/SENTENCE_GENERATION_SOP.md` is the authority for AI sentence drafting prompts, target/review coverage, word-first drafting, sentence quality, `spokenText`, `focusChar`, and display-line checks.
- `docs/CURRICULUM_SCHEMA.md` is the authority for JSON shape and validation expectations.
- `docs/FIREBASE_ACCOUNT_DEVICE_SETUP.md` is the authority for Firebase console setup, Firestore data model, and Firestore rules.
- `docs/PROJECT_HANDOFF_SOP.md` is only the handoff entry point and must stay concise.

When adding a new rule, update the one authority file above and replace duplicates elsewhere with links.

## Source Of Truth Order

Use this order whenever files disagree:

1. Latest `origin/main` plus `src/curriculum/sample-lessons.json` is the shipping curriculum truth.
2. `public/assets/lessons/L###/` is the shipping asset truth for lessons already in `sample-lessons.json`.
3. `public/assets/reviews/R###/` is the shipping asset truth for review modules already in top-level `reviewLessons`.
4. `docs/CURRICULUM_LEDGER.md` is a derived human-readable summary of merged curriculum. It must be updated when a lesson or review module enters production, but it does not override production JSON.
5. `public/tools/planner-data.json` is a derived planner export. Regenerate it after production curriculum changes.
6. `docs/PARALLEL_LESSON_REGISTRY.md` is only for not-yet-merged parallel work. It is not a permanent progress ledger.
7. `curriculum-workflow/recommendations/` contains AI recommendation drafts only. A recommended character is not reserved, approved, or blocking.
8. `curriculum-workflow/lesson-requests/`, `curriculum-workflow/review-requests/`, `curriculum-workflow/drafts/`, and `curriculum-workflow/generated/` are work artifacts. They can explain how a unit was prepared, but they are not proof that it is shipped.

If Markdown and production JSON disagree, update Markdown or generated planner data to match `origin/main` unless the user explicitly asks to change production curriculum. In particular, `docs/CURRICULUM_LEDGER.md` `Current Character State` must match the final lesson order and cumulative `newChars` from `src/curriculum/sample-lessons.json`; `npm run curriculum:audit-state` must fail if that summary is stale.

If an AI recommendation draft or unmerged lesson request disagrees with the teacher's latest explicit selected character/sentences, the teacher's latest request wins. Do not reject the work because an old recommendation or stale draft says a different character was planned.

## Required Start Sequence

On this Windows machine, the preferred shared local working copy is:

```text
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\character-recognition-dojo
```

Do not create a new clone unless the user explicitly asks for one. If the current shell is not in this path, stop and tell the user before editing. Do not continue work from an older clone such as another `character-recognition-dojo` folder unless the user explicitly selects that clone for the task.

Every new conversation thread must start with:

```bash
git remote -v
git fetch origin
git status --short --branch
git log -1 --oneline
npm run tools:check
npm run curriculum:audit-state
```

GitHub CLI is installed and logged in on this Windows machine. Check it at startup when the task may need GitHub Actions, PR, issue, or deployment status:

```powershell
C:\Users\User\.local\bin\gh.cmd auth status
```

If bare `gh` is not found in PowerShell, use the full path above. Do not report GitHub CLI as unavailable until the full-path command fails.

Do not run `npm ci` as a routine start command in the shared working copy. `npm ci` deletes and recreates `node_modules`, and concurrent Codex threads, dev servers, or Node tools can lock native package files on Windows and cause `EPERM unlink` failures. Run `npm ci` only when dependencies are missing or known stale, and only after confirming no other thread or dev server is using this working copy.

GitHub CLI is available on this Windows machine. Use it for GitHub status, PRs, issues, and Actions when helpful. If bare `gh` is not on PATH, use the known logged-in wrapper:

```powershell
C:\Users\User\.local\bin\gh.cmd auth status
C:\Users\User\.local\bin\gh.cmd run list --branch main --limit 5
C:\Users\User\.local\bin\gh.cmd pr list
C:\Users\User\.local\bin\gh.cmd issue list
```

Current expected auth status is account `icelog-TU` with `repo` scope. If this fails, report the exact failure instead of assuming GitHub CLI is unavailable.

Then read:

- `docs/PROJECT_HANDOFF_SOP.md`
- `docs/CURRICULUM_OPERATING_SOP.md`
- `docs/CURRICULUM_PRODUCTION_SOP.md`
- `docs/SENTENCE_GENERATION_SOP.md`
- `docs/PARALLEL_LESSON_REGISTRY.md`
- `docs/CURRICULUM_LEDGER.md`
- `docs/CURRICULUM_SCHEMA.md`

Before editing, state the exact ownership in chat:

```text
I own L052 and these paths:
- curriculum-workflow/lesson-requests/L052.json
- curriculum-workflow/generated/L052-generation-packet.md
- curriculum-workflow/audio-inbox/L052/
- public/assets/lessons/L052/

I will not edit src/curriculum/sample-lessons.json until earlier dependency lessons are merged and I have rebased on latest origin/main.
```

## Parallel Work Model

Parallel work is allowed in two lanes:

- Planning lane: lesson requests, sentence candidates, teacher review notes, image prompts, and generation packets.
- Asset lane: raw image/audio generation and per-lesson asset review inside one owned lesson folder.

Production release is a single lane:

- Only one thread at a time may write `src/curriculum/sample-lessons.json`.
- Only one thread at a time may run JSON-writing asset commands: `assets:images`, `assets:audio`, `assets:align`, and `assets:align:ai`.
- Lessons must enter `main` in lesson order.
- A later lesson may be prepared before an earlier lesson is merged, but it must not be merged into `main` until every dependency lesson exists in latest `origin/main`.

This means three conversations can prepare L052, L053, and L054 at the same time, but `main` still receives L052 first, then L053, then L054.

## Parallel Registry Rules

Use `docs/PARALLEL_LESSON_REGISTRY.md` for every not-yet-merged parallel lesson.

Register before doing real work:

- lesson id
- new character(s)
- owner/thread
- branch/commit if available
- dependency lessons
- provisional learned characters
- owned request/packet/asset paths
- current status

Required checkpoints:

1. Start / claim: before creating request files, packets, images, audio, or curriculum JSON.
2. Assets prepared: after reviewed images, audio, and timings are prepared.
3. Uploaded / branch pushed: after a remote branch or draft has been pushed.

After the lesson enters `main`, remove the active row or mark it `merged` in the same cleanup commit. The registry must not show stale active work for lessons already in `src/curriculum/sample-lessons.json`.

If a registry update cannot be pushed, stop large invisible asset work and say so in chat.

## Lesson Build Sequence

For a normal new lesson:

1. Fetch latest `origin/main`.
2. Run `npm run curriculum:audit-state`.
3. If working in parallel, claim the lesson in `docs/PARALLEL_LESSON_REGISTRY.md`.
4. Create or update `curriculum-workflow/lesson-requests/L###.json`.
5. Generate the packet:

```bash
npm run curriculum:packet -- --request curriculum-workflow/lesson-requests/L###.json
```

6. Treat AI sentences as drafts only. The parent/teacher must approve sentences before production.
7. Generate or reuse one reviewed image per approved sentence.
8. Convert/compress final images and remove oversized public source images:

```bash
npm run assets:images -- --lesson L### --remove-original
```

9. Check the lesson/review asset folder size and largest files. New or touched production images must be WebP, longest edge `<= 1024px`, target `<= 250 KB`, hard maximum `<= 400 KB`; the lesson/review folder target is `<= 2.0 MB`, hard maximum `<= 2.5 MB`.
10. Generate reviewed AI audio for every new character and every approved full sentence.
11. Normalize audio:

```bash
npm run assets:audio -- --lesson L###
```

12. Generate production timings:

```bash
npm run assets:align:ai -- --lesson L###
```

13. Manually play every Stage 3 sentence and Stage 4 option audio on a phone-width viewport. Confirm audio starts on tap, final syllables are audible, `charTimings` follow the heard syllables, and `teach-character` playback boundaries do not duplicate or clip the target character.
14. Add reviewed lesson data to `src/curriculum/sample-lessons.json` only when its dependencies are already in `origin/main`.
15. Update `docs/CURRICULUM_LEDGER.md`, including the lesson row, merged-through line, review-module status, and the `Current Character State` lesson number plus cumulative learned-character string.
16. Regenerate planner data:

```bash
npm run curriculum:export-planner
```

17. Clear or update the registry row.
18. Run the full gate:

```bash
npm run verify
```

## Review Module Cycle

Starting after L060, the course inserts two review modules after every 30-lesson milestone. Review modules are not numbered lessons and must not occupy `L###` lesson ids.

The review cycle is delayed by one 30-lesson block so the review targets older material:

- After L060, add R001 and R002 for L001-L030. The next new-character lesson remains L061.
- After L090, add R003 and R004 for L031-L060. The next new-character lesson remains L091.
- After L120, add R005 and R006 for L061-L090.
- Continue the same pattern every 30 lessons.

Formula:

- Milestone `M` starts at 60 and increases by 30.
- The two review modules after milestone `M` cover lesson range `M - 59` through `M - 30`.
- Each review module has exactly 5 reviewed sentences.
- The pair therefore has 10 reviewed sentences total.
- Across those 10 sentences, every new character introduced in the covered 30-lesson range must appear at least once.

Rules:

- Review modules introduce no new characters.
- Review modules use `R###` ids, display as `複習一`, `複習二`, and live in top-level `reviewLessons`, not `lessons`.
- Review module assets live under `public/assets/reviews/R###/`, not `public/assets/lessons/L###/`.
- Review request files live under `curriculum-workflow/review-requests/R###.json`, not `curriculum-workflow/lesson-requests/L###.json`.
- Do not create `L061` or `L062` as review placeholders. `L061` is the next new-character lesson id, but the playable path after L060 is `R001` -> `R002` -> `L061`.
- Review sentence text may use characters learned by the milestone, but the required coverage target is the older 30-lesson range.
- The two review modules should be planned as one pair so coverage can be checked across all 10 sentences before either module ships.
- Do not add placeholder review modules to `src/curriculum/sample-lessons.json`. Only add production-ready review modules to top-level `reviewLessons` after sentences, images, audio, timings, Stage 4 games, and review coverage are complete.
- Production-ready review modules in `reviewLessons` must be inserted into the same playable sequence and square course-card grid as numbered lessons. They must not be reachable only through a temporary reservation section.
- The child-facing `漢字總覽` page must also provide a permanent `複習區` after the six color groups. This review area reserves `R001` through `R040` so completed review modules stay findable even after many later lessons are unlocked.
- In the `漢字總覽` review area, production-ready and unlocked review modules are clickable. Locked or not-yet-built review modules may appear only as UI placeholders; do not add empty placeholder review modules to `src/curriculum/sample-lessons.json`.
- Review modules grant the same one-time completion reward as lessons. Replaying an already completed review module must not grant another reward.
- Review modules are displayed as two-stage units only: first `看圖聽句子`, then `句子遊戲`. The UI must not show skipped normal-lesson Stage 1/2 rows, and must not label the review stages as `第三階段` or `第四階段`.
- The review module `下一課` button must follow the playable sequence. Example: `L060` -> `R001` -> `R002` -> `L061`.
- The first playable pair is after L060: R001/R002, two 5-sentence review modules covering all new characters from L001-L030.

## Dependency Recheck Before Merge

Before merging a parallel-prepared lesson:

1. Fetch latest `origin/main`.
2. Confirm all `dependsOnLessons` exist in `src/curriculum/sample-lessons.json`.
3. Rebase the branch on latest `origin/main`.
4. Re-check every sentence against the now-real learned character set.
5. Re-check `mustIncludeCharsAcrossLesson`, `allowedChars`, image prompts, sentence audio, option audio, and char timings.
6. Regenerate planner data if production curriculum changed.
7. Run `npm run verify`.

If any dependency changed its new character, sentence set, or review requirement, move the later lesson to `needs-rework` and do not merge it until reconciled.

## Required Done State

A lesson is done only when all of these are true:

- It is present in `src/curriculum/sample-lessons.json` in contiguous lesson order.
- Every sentence is approved.
- Every sentence uses only previously learned characters plus current new character(s).
- `charAudio`, sentence audio, images, and Stage 4 option audio exist where referenced.
- Character audio passes the production audibility check.
- New or touched sentence images satisfy the production hard limits: WebP, longest edge `<= 1024px`, target `<= 250 KB`, hard maximum `<= 400 KB`, and no oversized public PNG/JPG source files.
- New or touched normal lesson/review asset folder size is checked: target `<= 2.0 MB`, hard maximum `<= 2.5 MB`.
- Sentence and option audio are normalized `.m4a` files and are audibly clear on first tap.
- Sentence `charTimings` match final processed audio.
- Stage 3 sentence playback and Stage 4 option playback were manually checked on a phone-width viewport.
- `teach-character` pre-target and stitched replay playback boundaries were manually checked if the lesson uses that game type.
- `docs/CURRICULUM_LEDGER.md` includes the merged lesson.
- `public/tools/planner-data.json` has been refreshed.
- `docs/PARALLEL_LESSON_REGISTRY.md` has no stale active row for the merged lesson.
- `npm run verify` passes.
- The branch has been merged to `main` in lesson order and pushed, unless the user explicitly requested local-only work.

## Conflict Handling

If another thread pushed newer work:

1. Stop editing shared files.
2. Fetch and inspect the new commit.
3. Rebase or merge latest `origin/main`.
4. Preserve other active registry rows.
5. Re-run `npm run curriculum:audit-state`.
6. Continue only after the working tree and ownership scope are clear.

Do not overwrite another thread's lesson request, asset folder, registry row, or production JSON changes unless the user explicitly asks.

## Current Production State

As of latest `origin/main`, production curriculum is complete through L094, L094 introduces `壞`, and review modules are complete through R004.

L001-L005 use the simpler Stage 1-3 flow. L006-L094 already include Stage 4 sentence games after picture-supported sentence listening. Future production lessons should keep Stage 4 unless the teacher explicitly changes the lesson design.
