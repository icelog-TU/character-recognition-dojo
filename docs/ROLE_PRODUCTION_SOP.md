# Role SOP: Production Slots

Production slots build `asset-complete-package` lesson or review-module packages from Editor handoffs. The active slot names and worktree paths come from the latest Supervisor/teacher assignment; do not assume the pool can only be A/B/C/D.

Production threads may work in parallel, but each thread owns exactly one assigned unit and one assigned worktree slot at a time.

## Read First

1. `docs/PROJECT_HANDOFF_SOP.md`
2. `docs/ROLE_PRODUCTION_SOP.md`
3. `docs/CURRICULUM_OPERATING_SOP.md`
4. `docs/CURRICULUM_PRODUCTION_SOP.md`
5. `docs/SENTENCE_GENERATION_SOP.md`
6. `docs/LESSON_VISUAL_CAST_SOP.md`
7. `docs/CURRICULUM_SCHEMA.md`
8. `docs/AI_GENERATION_SETUP.md`
9. `docs/PARALLEL_LESSON_REGISTRY.md`
10. `docs/CURRICULUM_LEDGER.md`

## Assigned Worktrees

Use only the slot assigned by the teacher or Supervisor:

```text
Production A:
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-a

Production B:
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-b

Production C:
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-c

Production D:
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-d
```

If the shell is not in the assigned slot, stop before editing.

If the assigned slot is dirty, stop and report the dirty files. Do not stash, reset, revert, or overwrite another thread's work.

## Startup

Run this first from the assigned worktree:

```bash
git remote -v
git fetch origin
git status --short --branch
git log -1 --oneline
```

If the worktree is dirty, stop and report the dirty files. If the worktree is clean but currently on an old package branch, that only means it is safe to switch branches. It does not mean the old branch is a valid base for the next assignment.

For every new lesson or review-pair assignment, create the unit branch from latest `origin/main` before running package startup audits:

```bash
git switch -c codex/l###-complete-package origin/main
```

Use `r###` in the branch name for review modules.

After switching to the new branch from `origin/main`, run:

```bash
npm run tools:check
npm run curriculum:audit-state
```

Do not run a new assignment's `curriculum:audit-state` on an old `*-complete-package` branch. Old branches may contain registry rows for packages that have since merged into `main`, which creates false blockers.

If this is a newly created worktree and `npm run tools:check` reports FFmpeg/FFprobe unavailable, check whether `node_modules` is missing. When `Test-Path node_modules` returns `False`, run `npm ci` once in the assigned clean and idle worktree, then rerun `npm run tools:check`. Do not use bare `ffmpeg` or `ffprobe` PATH checks to bypass the repo scripts.

## Claim Before Work

Before creating request files, packets, images, audio, or JSON, add or update exactly one row in `docs/PARALLEL_LESSON_REGISTRY.md` for the assigned unit.

The row must include:

- Unit id.
- New character(s) or review kind.
- Status, starting with `claimed`.
- Assigned owner/thread slot.
- Branch name.
- Dependencies.
- Provisional learned characters, if any.
- Owned request/packet/draft/asset paths.

Commit and push the claim before large image/audio work when possible. If the registry cannot be updated or pushed, stop and report the blocker.

## Asset-Complete Package Requirements

A normal lesson package is not `asset-complete-package` unless it contains:

- `curriculum-workflow/lesson-requests/L###.json`
- `curriculum-workflow/generated/L###-generation-packet.md`
- `curriculum-workflow/drafts/L###-draft.json`
- Final compressed images under `public/assets/lessons/L###/images/`
- Processed sentence audio under `public/assets/lessons/L###/audio/`
- Standalone `charAudio` generated from the single target character
- Referenced `G02` teach audio
- Referenced `G05` wrong-choice whole-sentence audio
- Accurate registry row until Release merges/cleans it

For review modules, use `curriculum-workflow/review-requests/R###.json` and `public/assets/reviews/R###/`. Review modules have no `newChars`, `zhuyin`, or `charAudio`. Verify the review request's coverage target and allowed-character ceiling match the milestone schedule in `docs/CURRICULUM_OPERATING_SOP.md`; overdue review modules must not use characters learned after their milestone ceiling.

Production does not own normal release integration. Do not spend time rebasing old branches, rebuilding `src/curriculum/sample-lessons.json`, refreshing `public/tools/planner-data.json`, or updating `docs/CURRICULUM_LEDGER.md` for dependency-blocked lessons. Release owns those shared files. If a command temporarily changes shared production state while generating timings, remove those temporary shared-state changes before the final Production commit.

A package is not handoff-ready while it exists only as local dirty files. Unless the teacher explicitly requested a local-only diagnostic run, Production must commit and push the package branch after the required package checks pass. If a handoff both assigns an `asset-complete-package` and says not to commit or push, stop and ask for a corrected Production Activation Handoff before doing large work.

Review migration replacement packages are a narrow exception to the normal `curriculum:audit-state` rule. When a Production Activation Handoff explicitly says that `R###/R###` replaces existing legacy `reviewLessons` ids, an `audit-state` failure that only says the active registry rows already exist in production `reviewLessons` is an expected legacy id collision. Production may continue only if:

- The handoff labels the work as `review migration replacement package`.
- The package request/draft metadata uses the current schedule, not the legacy schedule.
- `src/curriculum/sample-lessons.json`, `public/tools/planner-data.json`, and `docs/CURRICULUM_LEDGER.md` are not changed.
- `npm run tools:check` and `npm run validate:production` pass.
- The final report clearly says `curriculum:audit-state` failed only because of the expected legacy review id collision.

If `curriculum:audit-state` reports any other failure, stop and report it.

## Asset Rules

- Use the full L058 image style anchor set unless the teacher approved another style. L058 is style-only; do not copy the L058 adult woman or any other L058 person into unrelated roles.
- Also use the refined preferred style/proportion examples listed in `docs/LESSON_VISUAL_CAST_SOP.md`, especially `public/assets/lessons/L115/images/L115-S01.webp`, `public/assets/lessons/L115/images/L115-S02.webp`, `public/assets/lessons/L118/images/L118-S02.webp`, `public/assets/lessons/L119/images/L119-S01.webp`, and `public/assets/lessons/L128/images/L128-S03.webp`.
- Before accepting each final image, open or preview the actual exported WebP side by side with the L058 reference set, the refined preferred examples, and any relevant cast anchors. This is a hard style-lock gate, not a loose inspiration check. Regenerate images that are merely semantically correct but drift into simpler cartoon/watercolor, overly round generic faces, tiny/random child proportions, unstable protagonist-girl age/proportions, or non-recurring identities.
- Side-by-side style-lock is not the same as checking whether the image "reads correctly." A picture can show the correct action, object, or location and still fail if its style or recurring cast identity drifts. Do not accept an image based only on semantic correctness.
- For every S01-S05 image or review sentence image, compare the final exported WebP against the L058 anchors and the relevant cast anchors before it becomes final. Reject and regenerate drafts that drift into generic/simple watercolor, thin detailed Japanese-style watercolor, flat cartoon, anime, 3D render, photorealism, simplified round child faces, or redesigned recurring characters.
- Rejected draft images must not be committed or described as final. If audio or JSON work was already started, restore any temporary production JSON diffs and regenerate only the failed images unless another blocker requires broader rework.
- Follow `docs/LESSON_VISUAL_CAST_SOP.md` for mother, father, teacher, classmate, elder, passerby, and other human role identity.
- New or replacement sentence images must be square `1:1` compositions with safe margins.
- Final referenced images must be WebP and size-compliant.
- Generate full-sentence AI audio from `spokenText`.
- Generate standalone character-card audio from the single target character.
- Generate wrong-choice audio from the exact full wrong-option text.
- Process audio with `npm run assets:audio`.
- Generate timings with `npm run assets:align:ai`.
- Do not cut, splice, mute, patch, or extract production character/option audio from other files.

## Fast Package Audit Before Handoff

Before reporting done, run a fast lesson-local audit. This should be minutes, not a second release process:

- `request`, `draft`, and `generation packet` agree on lesson id, new character(s), zhuyin, final sentence text, `spokenText`, `focusChar`, and `displayLines`.
- The `generation packet` contains the final approved sentence records that match the draft, including `text`, `spokenText`, `focusChar`, `displayLines`, and `imageNotes` for every sentence or review sentence. A packet that contains only generation prompts, stale candidates, or missing final records is not package-complete.
- Top-level `dependsOnLessons` exists when the lesson uses provisional characters from earlier unmerged lessons.
- `displayLines`, when present, join exactly back to `text`; each zhuyin line must stay at `<= 6` visible characters, including punctuation and any other learner-facing visible symbol.
- `displayLines` uses the fewest readable lines: two lines when possible, three lines only when no functional two-line split works, and four or more lines only with a clear reason.
- `displayLines` must use functional phrase breaks, not arbitrary count-only breaks. Do not split natural words or phrases such as `彩色筆`; return to Editor/Review Migration/Supervisor if the handoff line breaks are awkward or unclear.
- Every sentence has final `imageSrc`, sentence `audio.src`, `durationMs`, and non-empty `charTimings`.
- `charAudio` uses the repo path form `char-uXXXX.m4a`, not `char-字.m4a`.
- Five-sentence Stage 4 lessons have exactly five `sentenceGames`, use each supported type once, use every reviewed sentence exactly once, and follow canonical normal-lesson order: `G01 find-character`, `G02 teach-character`, `G03 missing-character`, `G04 partial-order`, `G05 choose-pronunciation`.
- If Editor hands off a different Stage 4 order without an explicit teacher-approved exception and reason, stop and return to Editor/Supervisor instead of producing assets from the drifted order.
- Stage 4 option schema is complete: option ids are present, correct options are marked, and ordering metadata such as `correctOrder` is present where the game type requires it.
- `choose-pronunciation` wrong options are near misses: same sentence length where possible and only 1-2 Han characters different from the correct option.
- `choose-pronunciation` wrong-option audio was generated from the exact full wrong-option text after final text changes.
- All referenced images and audio files exist in the owned lesson/review asset folder.
- Touched asset folder size was checked.

Run these commands when feasible:

```bash
npm run validate:production
git diff --stat
git diff --name-only
```

Run `npm run verify` only when the branch has a valid production JSON entry on a current enough base for that command to test the lesson meaningfully. For dependency-blocked packages that intentionally do not touch production JSON, report `verify skipped: dependency-blocked, shared state left for Release`.

Also inspect touched asset folder size as required by `docs/CURRICULUM_PRODUCTION_SOP.md`.

Push the production branch and report:

- Branch name and commit SHA.
- Full pushed package ref, such as `origin/codex/l###-complete-package`, plus the full tip commit SHA.
- Unit id and new character/review kind.
- Whether it is `asset-complete-package`, `dependency-blocked-asset-complete`, `partial-package`, or `assets-only`.
- Per-image L058 side-by-side style-lock result and recurring cast identity result for every changed image, written explicitly as `S01 style-lock PASS, cast PASS; S02 style-lock PASS, cast PASS ...`. Do not replace this with a vague range note when any people or recurring roles appear.
- Any image drafts rejected for style/cast drift, and confirmation that rejected drafts were not committed.
- Any failed checks or skipped manual QA.
- Pre-merge package preview URL only if useful, using `ref=<branch-or-full-commit-sha>`. Label it clearly as "pre-merge package preview, not the final main review queue".
- Post-merge `ref=main` asset review URL may be listed only as the Release-owned final review URL and must be labeled "usable after Release merges and deploys".

Do not call a package `asset-complete-package` if final text exists only in chat or if request/packet/draft/Stage 4 audio/alignment is missing. Do not call it `release-ready-package`; that status belongs to Release after integration on latest `origin/main`.

Never give the teacher a `lesson-asset-review.html?unit=L###&ref=main` URL as proof that an unmerged Production package can be reviewed. Before Release integrates the unit, `ref=main` will not contain that unit and the page will correctly report that the draft or production JSON is missing. Use the pushed package branch or full commit SHA for pre-merge preview.
