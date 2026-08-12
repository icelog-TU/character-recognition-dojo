# Role SOP: Visual Refresh

Visual Refresh rebuilds images for already-merged lessons so old course art matches the current refined L058-L200 visual standard.

This role is separate from ordinary Production and ordinary Asset Repair:

- Production A/B/C/D create new lesson or review-module packages.
- Asset Repair A/B fix teacher-marked image/audio defects from the review queue.
- Visual Refresh works through old merged lessons in planned image-only batches, starting from L001 when assigned.

## Read First

1. `docs/PROJECT_HANDOFF_SOP.md`
2. `docs/ROLE_VISUAL_REFRESH_SOP.md`
3. `docs/LESSON_VISUAL_CAST_SOP.md`
4. `docs/CURRICULUM_PRODUCTION_SOP.md`
5. `docs/CURRICULUM_OPERATING_SOP.md`
6. `docs/CURRICULUM_SCHEMA.md`
7. `docs/FIREBASE_ACCOUNT_DEVICE_SETUP.md`

Read `docs/CURRICULUM_LEDGER.md` only as human-readable continuity context. Latest `origin/main:src/curriculum/sample-lessons.json` is the production truth.

## Assigned Worktree

Use only the Visual Refresh worktree assigned by the Supervisor or teacher. Recommended default:

```text
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\visual-refresh
```

If this worktree does not exist, ask Supervisor to create it from latest `origin/main`. Do not reuse Production A/B/C/D or Asset Repair A/B unless the teacher explicitly assigns that slot for a one-off batch.

If the assigned worktree is dirty, stop and report the dirty files. Do not stash, reset, revert, or overwrite another thread's work.

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

If clean, create the batch branch from latest `origin/main`:

```bash
git switch -c codex/visual-refresh-l001-l010 origin/main
```

Use the actual assigned range in the branch name.

## Scope

Visual Refresh is image-only unless the teacher explicitly expands scope.

Allowed:

- Replace `.webp` sentence images under the assigned lesson range.
- Keep the same `imageSrc` paths by replacing images in place.
- Update image-related notes or review documentation only when needed for the batch handoff.

Not allowed by default:

- Changing lesson text.
- Changing `spokenText`.
- Changing audio.
- Changing Stage 4 data.
- Changing `charTimings`.
- Changing `src/curriculum/sample-lessons.json` only to churn paths that already exist.
- Refreshing lessons outside the assigned batch.

## Batch Size

Start small.

Recommended first batches:

- L001-L005 if the first pass is still being calibrated.
- L001-L010 once prompts are stable.
- Smaller than five lessons when a batch has many people, count-sensitive scenes, or confusing early visual language.

Do not attempt dozens of lessons in one branch until the teacher has approved the first refreshed batch on a phone/tablet.

## Image Rules

Every refreshed image must preserve the original sentence meaning exactly.

- Match the current refined L058-L200 visual standard.
- Follow `docs/LESSON_VISUAL_CAST_SOP.md` for cast and location continuity.
- The L154/L162/L163 protagonist family is the current identity anchor for the protagonist family.
- Do not use older L001-L053 family images as current identity anchors when they conflict with the refined protagonist family.
- Terrain is sentence-specific. Do not make `我家`, `你家`, or `他家` permanently mountain/uphill/downhill unless the current sentence says so.
- Do not add visible text, labels, signs, letters, numbers, zhuyin, or watermarks.
- Do not add unmentioned people, objects, counts, terrain, or role relationships.
- Count, size, left/right, body-part, and position meanings must remain clear on a phone screen.

## Handoff

When done, report:

- assigned batch range
- branch name and final commit
- exact image paths changed
- any images intentionally left unchanged and why
- validation commands run
- permanent review URLs for the refreshed lessons after merge

Visual Refresh should not ask the teacher to inspect branch previews as the normal final check. After Release or Supervisor merges the batch into `main`, the teacher reviews through:

```text
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L###&ref=main
```

## Checks

Run at minimum:

```bash
npm run validate:production
npm run verify
git diff --stat
git diff --name-only
```

Run image-specific audits when available for the touched range. If no lesson-range command exists, explicitly report that only whole-repo validation was available.
