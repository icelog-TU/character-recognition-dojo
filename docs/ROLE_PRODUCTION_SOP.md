# Role SOP: Production A/B/C

Production A/B/C build `asset-complete-package` lesson or review-module packages from Editor handoffs.

Production threads may work in parallel, but each thread owns exactly one assigned unit and one assigned worktree slot at a time.

## Read First

1. `docs/PROJECT_HANDOFF_SOP.md`
2. `docs/ROLE_PRODUCTION_SOP.md`
3. `docs/CURRICULUM_OPERATING_SOP.md`
4. `docs/CURRICULUM_PRODUCTION_SOP.md`
5. `docs/SENTENCE_GENERATION_SOP.md`
6. `docs/CURRICULUM_SCHEMA.md`
7. `docs/AI_GENERATION_SETUP.md`
8. `docs/PARALLEL_LESSON_REGISTRY.md`
9. `docs/CURRICULUM_LEDGER.md`

## Assigned Worktrees

Use only the slot assigned by the teacher or Supervisor:

```text
Production A:
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-a

Production B:
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-b

Production C:
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-c
```

If the shell is not in the assigned slot, stop before editing.

If the assigned slot is dirty, stop and report the dirty files. Do not stash, reset, revert, or overwrite another thread's work.

## Startup

Run from the assigned worktree:

```bash
git remote -v
git fetch origin
git status --short --branch
git log -1 --oneline
npm run tools:check
npm run curriculum:audit-state
```

If clean, create the unit branch from latest `origin/main`:

```bash
git switch -c codex/l###-complete-package origin/main
```

Use `r###` in the branch name for review modules.

If this is a newly created worktree and `npm run tools:check` reports FFmpeg/FFprobe unavailable, check whether `node_modules` is missing. When `Test-Path node_modules` returns `False`, run `npm ci` once in the assigned clean and idle worktree, then rerun `npm run tools:check`. Do not use bare `ffmpeg` or `ffprobe` PATH checks to bypass the repo scripts.

## Claim Before Work

Before creating request files, packets, images, audio, or JSON, add or update exactly one row in `docs/PARALLEL_LESSON_REGISTRY.md` for the assigned unit.

The row must include:

- Unit id.
- New character(s) or review kind.
- Status, starting with `claimed`.
- Owner/thread A/B/C.
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

## Asset Rules

- Use L058 image style anchors unless the teacher approved another style.
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
- Top-level `dependsOnLessons` exists when the lesson uses provisional characters from earlier unmerged lessons.
- `displayLines`, when present, join exactly back to `text`; each zhuyin line should stay at `<= 5` Han characters.
- Every sentence has final `imageSrc`, sentence `audio.src`, `durationMs`, and non-empty `charTimings`.
- `charAudio` uses the repo path form `char-uXXXX.m4a`, not `char-字.m4a`.
- Five-sentence Stage 4 lessons have exactly five `sentenceGames`, use each supported type once, and use every reviewed sentence exactly once.
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
- Any failed checks or skipped manual QA.
- Pre-merge package preview URL only if useful, using `ref=<branch-or-full-commit-sha>`. Label it clearly as "pre-merge package preview, not the final main review queue".
- Post-merge `ref=main` asset review URL may be listed only as the Release-owned final review URL and must be labeled "usable after Release merges and deploys".

Do not call a package `asset-complete-package` if final text exists only in chat or if request/packet/draft/Stage 4 audio/alignment is missing. Do not call it `release-ready-package`; that status belongs to Release after integration on latest `origin/main`.

Never give the teacher a `lesson-asset-review.html?unit=L###&ref=main` URL as proof that an unmerged Production package can be reviewed. Before Release integrates the unit, `ref=main` will not contain that unit and the page will correctly report that the draft or production JSON is missing. Use the pushed package branch or full commit SHA for pre-merge preview.
