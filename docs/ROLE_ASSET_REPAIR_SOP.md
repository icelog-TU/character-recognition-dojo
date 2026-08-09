# Role SOP: Asset Repair

Asset Repair fixes image and audio issues for units already merged to `main` and reported through the permanent review tools.

Do not use Asset Repair for new lesson production.

## Read First

1. `docs/PROJECT_HANDOFF_SOP.md`
2. `docs/ROLE_ASSET_REPAIR_SOP.md`
3. `docs/CURRICULUM_PRODUCTION_SOP.md`
4. `docs/CURRICULUM_OPERATING_SOP.md`
5. `docs/FIREBASE_ACCOUNT_DEVICE_SETUP.md`

Read `docs/CURRICULUM_SCHEMA.md` if production JSON references need repair.

## Assigned Worktree

Use the repair slot assigned by the teacher or Supervisor:

```text
Asset Repair A:
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\asset-repair

Asset Repair B:
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\asset-repair-b
```

If it is dirty, stop and report. Do not stash, reset, or overwrite another repair.

Two Asset Repair threads may run at the same time only when they own different units or clearly disjoint asset files. Do not repair the same lesson, review module, image, audio file, or production JSON section from both repair slots at once.

## Dependency Bootstrap

New repair worktrees may not have `node_modules` yet. If `npm run tools:check` reports FFmpeg/FFprobe unavailable, first check whether dependencies are missing:

```powershell
Test-Path node_modules
```

If this returns `False`, and the assigned repair worktree is clean and idle, run:

```bash
npm ci
npm run tools:check
```

This is allowed only to bootstrap missing dependencies in the assigned worktree. Do not run `npm ci` routinely in active worktrees, and do not use bare `ffmpeg` or `ffprobe` PATH checks as a substitute for repo scripts.

## Startup

Run:

```bash
git remote -v
git fetch origin
git status --short --branch
git log -1 --oneline
npm run tools:check
npm run curriculum:audit-state
```

When the teacher provides review output, also run the relevant status command:

```bash
npm run asset:review-status -- --unit L### --ref main
npm run asset:review-status -- --list --ref main
```

## Repair Source

Use the permanent review pages and Firestore-backed review state:

```text
https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L###&ref=main
```

If the teacher is not signed in, review checkbox changes may be local-only. Treat pasted `asset:review-status` output or teacher notes as the repair assignment.

## Repair Rules

- Repair only units already present in latest `origin/main`.
- State the exact unit and asset paths owned by this repair before editing.
- Check whether another repair thread is already assigned to the same unit or file.
- Keep changes limited to the flagged asset(s) and any required production JSON metadata.
- For image replacements, use square `1:1` composition and L058 style anchors unless the teacher approved a new style.
- Final referenced images must be WebP and size-compliant.
- For sentence or option audio replacements, generate whole-sentence AI audio from the exact final text.
- For character-card audio, generate standalone single-character audio.
- Process audio through `npm run assets:audio`.
- Regenerate timings with `npm run assets:align:ai` when sentence audio changes.
- Do not splice, cut, patch, or extract production audio from another file.

## Checks

Run:

```bash
npm run validate:production
npm run verify
git diff --stat
git diff --name-only
```

For audio/image repair diagnostics, also run:

```bash
npm run assets:audit
```

Report any remaining findings, especially if they are outside the repaired unit.

## Push And Teacher Recheck

After checks pass and the diff is limited to the intended repair:

1. Commit and push to `main`.
2. Check deployment:

```bash
gh run list --branch main --limit 5
gh run list --branch gh-pages --limit 5
```

3. Give the teacher the direct review URL:

```text
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L###&ref=main
```

Repair is not complete just because the branch preview looks correct. The repaired asset must be on `main`; then the teacher clears the `needs repair` item and marks the whole unit complete in the review page.
