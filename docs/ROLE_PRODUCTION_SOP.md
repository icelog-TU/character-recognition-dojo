# Role SOP: Production A/B/C

Production A/B/C build complete lesson or review-module packages from Editor handoffs.

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

## Complete Package Requirements

A normal lesson package is not complete unless it contains:

- `curriculum-workflow/lesson-requests/L###.json`
- `curriculum-workflow/generated/L###-generation-packet.md`
- `curriculum-workflow/drafts/L###-draft.json`
- Final compressed images under `public/assets/lessons/L###/images/`
- Processed sentence audio under `public/assets/lessons/L###/audio/`
- Standalone `charAudio` generated from the single target character
- Referenced `G02` teach audio
- Referenced `G05` wrong-choice whole-sentence audio
- Production JSON only when dependencies are already in latest `origin/main`
- Refreshed `public/tools/planner-data.json` and `docs/CURRICULUM_LEDGER.md` only when entering production
- Accurate registry row until Release merges/cleans it

For review modules, use `curriculum-workflow/review-requests/R###.json` and `public/assets/reviews/R###/`. Review modules have no `newChars`, `zhuyin`, or `charAudio`.

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

## Checks Before Handoff To Release

Run the strongest feasible checks for the package:

```bash
npm run validate:production
npm run verify
git diff --stat
git diff --name-only
```

Also inspect touched asset folder size as required by `docs/CURRICULUM_PRODUCTION_SOP.md`.

Push the production branch and report:

- Branch name and commit SHA.
- Unit id and new character/review kind.
- Whether it is `merge-ready`, `ready-blocked-by-dependency`, or `assets-only`.
- Any failed checks or skipped manual QA.
- Post-merge asset review URL.

Do not call a package merge-ready if final text exists only in chat or if request/packet/draft/Stage 4 audio/alignment is missing.
