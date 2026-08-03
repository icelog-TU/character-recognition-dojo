# Curriculum Operating SOP

This is the operating SOP for building curriculum in `認字練功房` when several Codex/GPT threads may be active at the same time.

The goal is to allow parallel lesson preparation without letting `main`, Markdown notes, generated packets, images, audio, and GitHub Pages drift apart.

## Source Of Truth Order

Use this order whenever files disagree:

1. Latest `origin/main` plus `src/curriculum/sample-lessons.json` is the shipping curriculum truth.
2. `public/assets/lessons/L###/` is the shipping asset truth for lessons already in `sample-lessons.json`.
3. `docs/CURRICULUM_LEDGER.md` is a derived human-readable summary of merged curriculum. It must be updated when a lesson enters production, but it does not override production JSON.
4. `public/tools/planner-data.json` is a derived planner export. Regenerate it after production curriculum changes.
5. `docs/PARALLEL_LESSON_REGISTRY.md` is only for not-yet-merged parallel work. It is not a permanent progress ledger.
6. `curriculum-workflow/lesson-requests/`, `curriculum-workflow/drafts/`, and `curriculum-workflow/generated/` are work artifacts. They can explain how a lesson was prepared, but they are not proof that the lesson is shipped.

If Markdown and production JSON disagree, update Markdown or generated planner data to match `origin/main` unless the user explicitly asks to change production curriculum.

## Required Start Sequence

Every new conversation thread must start with:

```bash
git remote -v
git fetch origin
git status --short --branch
git log -1 --oneline
npm ci
npm run curriculum:audit-state
```

Then read:

- `docs/PROJECT_HANDOFF_SOP.md`
- `docs/CURRICULUM_OPERATING_SOP.md`
- `docs/CURRICULUM_PRODUCTION_SOP.md`
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
8. Generate reviewed AI audio for every new character and every approved full sentence.
9. Normalize audio:

```bash
npm run assets:audio -- --lesson L###
```

10. Generate production timings:

```bash
npm run assets:align:ai -- --lesson L###
```

11. Add reviewed lesson data to `src/curriculum/sample-lessons.json` only when its dependencies are already in `origin/main`.
12. Update `docs/CURRICULUM_LEDGER.md`.
13. Regenerate planner data:

```bash
npm run curriculum:export-planner
```

14. Clear or update the registry row.
15. Run the full gate:

```bash
npm run verify
```

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
- Sentence `charTimings` match final processed audio.
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

As of latest `origin/main`, production curriculum is complete through L051, and L051 introduces `樣`.

L001-L005 use the simpler Stage 1-3 flow. L006-L051 already include Stage 4 sentence games after picture-supported sentence listening. Future production lessons should keep Stage 4 unless the teacher explicitly changes the lesson design.
