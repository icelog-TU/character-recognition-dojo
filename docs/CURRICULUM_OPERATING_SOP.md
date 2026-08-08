# Curriculum Operating SOP

This is the operating SOP for building curriculum in `認字練功房` when several Codex/GPT threads may be active at the same time.

The goal is to allow parallel lesson preparation without letting `main`, Markdown notes, generated packets, images, audio, and GitHub Pages drift apart.

## SOP Authority Map

Do not duplicate detailed rules across SOP files. Use this authority order when updating docs:

- This file is the authority for source-of-truth order, assigned worktree roles, new-thread startup, parallel lesson ownership, dependency gates, merge order, and done-state checks.
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

Chat transcripts, pasted messages, and branch names are never source-of-truth. Final teacher-approved lesson text must be captured in the repo as a lesson/review request, generated packet, draft JSON, and eventually production JSON. A release thread must reject any unit whose final sentence set exists only in chat.

If Markdown and production JSON disagree, update Markdown or generated planner data to match `origin/main` unless the user explicitly asks to change production curriculum. In particular, `docs/CURRICULUM_LEDGER.md` `Current Character State` must match the final lesson order and cumulative `newChars` from `src/curriculum/sample-lessons.json`, and `Recent review pool for the next lesson` must match the latest production lesson `newChars` list; `npm run curriculum:audit-state` must fail if those summaries are stale.

If an AI recommendation draft or unmerged lesson request disagrees with the teacher's latest explicit selected character/sentences, the teacher's latest request wins. Do not reject the work because an old recommendation or stale draft says a different character was planned.

## Worktree Roles And Required Start Sequence

On this Windows machine, the coordination/release working copy is:

```text
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\character-recognition-dojo-profile-sync
```

This path must stay clean for cross-thread coordination, SOP maintenance, release merging, GitHub Pages checks, and emergency diagnostics. Do not assign normal parallel lesson production threads to this path unless the user explicitly says that thread owns release or SOP work.

Normal parallel production threads must use one of these fixed git worktree slots:

```text
Production thread A:
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-a

Production thread B:
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-b

Production thread C:
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-c
```

These are git worktrees of the same repo, not new clones. A dirty state in one slot means only that slot is occupied; it must not block the other production slots. A dirty state in `character-recognition-dojo-profile-sync` means the coordination/release workspace is occupied and must not be reused for new lesson production.

Do not create a new clone unless the user explicitly asks for one. If the current shell is not in the assigned path, stop and tell the user before editing. Do not continue work from an older clone such as another `character-recognition-dojo` folder unless the user explicitly selects that clone for the task.

When a production slot receives an assigned lesson, start from that slot and create a lesson-named branch from latest `origin/main`, for example:

```powershell
cd C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-a
git fetch origin
git status --short --branch
git switch -c codex/l135-complete-package origin/main
```

If `git status --short` is not clean in the assigned slot, that slot is still occupied. Stop and report the dirty files instead of stashing, reverting, or overwriting another thread's work. The coordinator must either wait for that slot to finish or assign a different clean slot.

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

Do not run `npm ci` as a routine start command in any active worktree. `npm ci` deletes and recreates `node_modules`, and concurrent Codex threads, dev servers, or Node tools can lock native package files on Windows and cause `EPERM unlink` failures. Run it only when dependencies are missing or known stale, and only after confirming no other thread or dev server is using that worktree.

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

This means three conversations can prepare L052, L053, and L054 at the same time only if they are in separate worktree slots. `main` still receives L052 first, then L053, then L054.

## Five-Thread Curriculum Workflow

The standard parallel curriculum workflow uses five conversation threads:

1. **Sentence editor thread:** drafts with the teacher, performs the allowed-character and coverage audits, and records the teacher-approved final sentence set.
2. **Production thread A:** builds one assigned lesson/review unit from a complete handoff in `worktrees\parallel-a`.
3. **Production thread B:** builds one assigned lesson/review unit from a complete handoff in `worktrees\parallel-b`.
4. **Production thread C:** builds one assigned lesson/review unit from a complete handoff in `worktrees\parallel-c`.
5. **Release thread:** receives completed units, rebases on latest `origin/main`, merges in playable order, runs gates, pushes, and checks deployment.

The sentence editor thread is not allowed to send only "make images and audio" instructions. After the teacher approves sentences, it must output a complete production handoff for each unit and either create or explicitly require the receiving production thread to create all source files listed below.

The production handoff must be one-paste executable. The teacher often sends the handoff from a mobile or tablet remote session and may not return to that production conversation before the task should continue. Therefore the receiving production thread must claim the work in the repo and then continue automatically. It must not stop after saying only "claimed" unless a blocker is present.

Required production handoff fields:

- repo URL and required local working copy path
- assigned production slot: A, B, or C, with the exact worktree path
- unit id, such as `L127` or `R005`
- unit kind: normal lesson or review module
- approved new character(s), Taiwan zhuyin, title, and dependency lessons, or review `afterLessonOrder` and coverage range
- latest known merged boundary from `origin/main`, plus any provisional learned characters
- exact `allowedChars` boundary and forbidden/unlearned characters noted by the teacher
- five approved sentences, each with `text`, `spokenText`, `focusChar`, optional `displayLines`, and `imageNotes`
- coverage counts for current target and previous-five review targets, or review-pair coverage counts
- Stage 4 plan: one fixed game per sentence for normal lessons, or two-stage review-module plan
- required image style anchor: L058 reference assets unless the teacher approves another style
- audio rule: standalone OpenAI character audio, whole-sentence AI audio, whole wrong-option AI audio, `assets:audio`, then `assets:align:ai`
- teacher review requirement: permanent `public/tools/lesson-asset-review.html` URL and `npm run asset:review-status` command for post-merge repair queue; include `public/tools/audio-review.html` only when the teacher explicitly requests pre-merge audio approval
- complete required file list and final status expectation
- an auto-claim-and-continue block telling the production thread exactly when to continue and exactly when to stop

For a normal lesson, the complete required file list is:

```text
curriculum-workflow/lesson-requests/L###.json
curriculum-workflow/generated/L###-generation-packet.md
curriculum-workflow/drafts/L###-draft.json
curriculum-workflow/audio-inbox/L###/
public/assets/lessons/L###/images/L###-S01.webp ... L###-S05.webp
public/assets/lessons/L###/audio/L###-S01.m4a ... L###-S05.m4a
public/assets/lessons/L###/audio/char-uXXXX.m4a
public/assets/lessons/L###/audio/L###-G02-prefix.m4a and/or L###-G02-suffix.m4a when `teach-character` needs them
public/assets/lessons/L###/audio/L###-G05-wrong-one.m4a
public/assets/lessons/L###/audio/L###-G05-wrong-two.m4a
src/curriculum/sample-lessons.json, only when dependencies are merged and the unit is entering production
public/tools/planner-data.json, after production curriculum changes
docs/CURRICULUM_LEDGER.md, after production curriculum changes
docs/PARALLEL_LESSON_REGISTRY.md, while the unit is not yet merged
```

For a review module, replace lesson request/assets paths with `curriculum-workflow/review-requests/R###.json` and `public/assets/reviews/R###/`. Review modules have no `newChars`, `zhuyin`, or `charAudio`.

Production threads must not call a unit complete or merge-ready unless the repo contains the request/packet/draft, final images, final sentence audio, Stage 4 option or teach audio where referenced, production JSON entry when allowed, planner export, ledger update, registry cleanup/update, and passing checks. A branch that contains only images plus `S01-S05` sentence audio plus `charAudio` is `assets-only`, not a course.

The release thread must merge only in playable order and must reject:

- missing request, packet, or draft source files
- final sentences that exist only in chat
- missing Stage 4 `G02` or `G05` audio referenced by production JSON
- `durationMs` without production `charTimings`
- unresolved provisional learned characters
- stale branches not rebased on latest `origin/main`

## Auto-Claim And Continue Workflow

Every production handoff from the sentence editor must include this workflow in plain text for the receiving production thread.

The receiving production thread must:

1. Confirm it is in the assigned worktree slot.
2. Run the required startup checks: `git fetch origin`, `git status --short --branch`, `git log -1 --oneline`, `npm run tools:check`, and `npm run curriculum:audit-state`.
3. Stop immediately if the assigned worktree is dirty, on the wrong branch, missing dependencies, or otherwise cannot safely own the lesson.
4. If clean, create the lesson branch from latest `origin/main`, for example `git switch -c codex/l###-complete-package origin/main`.
5. Add or update exactly one row in `docs/PARALLEL_LESSON_REGISTRY.md` with status `claimed`, the assigned owner/thread, branch, dependencies, provisional learned characters, and owned request/packet/assets paths.
6. Continue immediately into request, packet, draft, images, audio, Stage 4, alignment, and validation work. Do not wait for teacher confirmation after a successful claim.

The purpose of the claim is repo-visible evidence that the pasted handoff actually started. If a handoff was pasted but the remote connection failed before Codex ran, no branch or registry row will appear, and the coordinator can detect the missed lesson by auditing lesson-number gaps, branches, and the registry.

Stop instead of continuing only when there is a real blocker: the assigned worktree is dirty, the startup checks fail, the production handoff is missing required approved sentence data, the registry cannot be updated or pushed before large asset work, or the allowed-character/dependency audit fails.

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

If the start/claim update succeeds, the production thread should continue without waiting for a second teacher message. If the registry update cannot be written or pushed, stop large invisible asset work and say so in chat.

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
15. Update `docs/CURRICULUM_LEDGER.md`, including the lesson row, merged-through line, review-module status, `Current Character State`, and `Recent review pool for the next lesson`. Do not derive the recent pool from sentence text; it must come from the latest production lesson `newChars` list.
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

As of latest `origin/main`, production curriculum is complete through L157, L157 introduces `吹`, and review modules are complete through R004.

L001-L005 use the simpler Stage 1-3 flow. L006-L157 already include Stage 4 sentence games after picture-supported sentence listening. Future production lessons should keep Stage 4 unless the teacher explicitly changes the lesson design.
