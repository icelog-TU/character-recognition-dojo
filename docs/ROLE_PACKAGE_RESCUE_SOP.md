# Role SOP: Package Rescue

Package Rescue fixes incomplete or inconsistent Production packages before they enter `main`.

Use Package Rescue when a Production package branch exists but cannot be accepted by Release because it is `partial-package`, fails `curriculum:package-intake`, has request/packet/draft mismatches, missing or stale Stage 4 metadata, missing referenced assets, incomplete audio/timing files, or unclear package status.

Do not use Package Rescue for new lesson planning, normal Production of a fresh Editor handoff, Release integration into `main`, or post-merge asset review repairs.

## Read First

1. `docs/PROJECT_HANDOFF_SOP.md`
2. `docs/ROLE_PACKAGE_RESCUE_SOP.md`
3. `docs/ROLE_PRODUCTION_SOP.md`
4. `docs/CURRICULUM_PRODUCTION_SOP.md`
5. `docs/CURRICULUM_OPERATING_SOP.md`
6. `docs/CURRICULUM_SCHEMA.md`
7. `docs/SENTENCE_GENERATION_SOP.md`
8. `docs/LESSON_VISUAL_CAST_SOP.md`
9. `docs/AI_GENERATION_SETUP.md`
10. `docs/PARALLEL_LESSON_REGISTRY.md`

Read `docs/ROLE_RELEASE_SOP.md` only when the rescue assignment includes a Release intake failure or Release-side blocker text.

## Role Boundary

Package Rescue owns lesson-local package completion. It may fix:

- `curriculum-workflow/lesson-requests/L###.json` or review requests.
- `curriculum-workflow/generated/*generation-packet.md`, package notes, QA notes, and rescue notes.
- `curriculum-workflow/drafts/*-draft.json`.
- Missing or invalid lesson/review image and audio assets.
- Stage 4 option metadata, `teachAudio`, wrong-choice audio, `charTimings`, `displayLines`, `spokenText`, `focusChar`, `dependsOnLessons`, `allowedChars`, and package status labels.
- The package's row in `docs/PARALLEL_LESSON_REGISTRY.md`.

Package Rescue must not:

- Choose new characters or rewrite approved lesson sentences without explicit teacher/Supervisor instruction.
- Create a fresh Production package from scratch when no package branch exists.
- Integrate a package into `src/curriculum/sample-lessons.json` on latest `main`, regenerate planner data for main, update the ledger as a release entry, push `main`, or deploy. Those are Release-owned.
- Repair units already merged to `main` through the permanent asset review queue. That belongs to Asset Repair.
- Reuse a Production, Release, or Asset Repair worktree that is dirty or currently owned by another active thread.

## Assigned Worktree

Use the worktree explicitly assigned by the teacher or Supervisor. Package Rescue may use a per-unit rescue worktree such as:

```text
C:\Users\User\Documents\Codex\2026-09-15\new-chat-4\l###-rescue
C:\Users\User\Documents\Codex\2026-09-15\new-chat-4\r###-r###-rescue
```

The exact path is assignment-specific. If the current directory is not a Git repository or is not the assigned worktree, stop and report before editing.

If the assigned worktree is dirty, stop and report the dirty files. Do not stash, reset, revert, or overwrite another thread's work.

## Startup

Run first:

```bash
git remote -v
git fetch origin
git status --short --branch
git log -1 --oneline origin/main
npm run tools:check
npm run curriculum:audit-state
```

If `npm run tools:check` fails only because `node_modules` is missing in a clean newly created rescue worktree, run `npm ci` once, then rerun `npm run tools:check`. Do not install tools to hide a dirty or misassigned worktree.

## Source Branch

Package Rescue starts from the problematic package branch or exact commit SHA, not from latest `origin/main`.

Before editing, identify and report:

- Unit id or review ids.
- Source package branch or exact SHA.
- Source package tip commit.
- Current package status from request, draft, packet, registry, and Production/Release handoff.
- The exact blocker: intake failure, missing files, stale packet, `partial-package`, technical QA gap, or other defect.

Create a rescue branch from the package source unless the teacher explicitly instructed you to update the original package branch:

```bash
git switch -c codex/l###-package-rescue origin/codex/l###-complete-package
```

Use `r###-r###-package-rescue` for review pairs. If the branch already exists, fetch and inspect it before continuing. Do not overwrite a pushed rescue branch without confirming it is your own work.

## Rescue Workflow

1. Run `npm run curriculum:package-intake -- --unit L### --ref HEAD` when the command supports the unit. For review pairs, run the appropriate package-intake command or document why the current tool cannot target the pair directly.
2. Read the request, generation packet, draft, registry row, and relevant assets.
3. Fix only the package-local defects needed to make the package acceptable to Release.
4. If image or audio assets are regenerated, follow `docs/CURRICULUM_PRODUCTION_SOP.md` and `docs/LESSON_VISUAL_CAST_SOP.md`; update timings after audio changes.
5. Update package status consistently across request/draft/packet/registry. Do not leave `partial-package`, `needs-rework`, `Do not integrate`, `NOT COMPLETED`, `FAIL`, or `unresolved` text after the blocker has been fixed.
6. Add concise rescue notes explaining what was wrong, what changed, and what Release should verify.

Package Rescue may use the same technical fallback rules as Production when browser automation is broken. Teacher subjective image/audio review is still post-merge by default unless the teacher explicitly asks for pre-merge approval.

## Required Checks

Before reporting `asset-complete-package` or `dependency-blocked-asset-complete`, run:

```bash
npm run tools:check
npm run validate:production
npm run curriculum:package-intake -- --unit L### --ref HEAD
git diff --stat
git diff --name-only
git diff --check
```

Run `npm run verify` only when the rescue branch has a meaningful current production JSON state for that command. For dependency-blocked packages that intentionally leave shared-state integration to Release, report `verify skipped: dependency-blocked, shared state left for Release`.

If a check fails, either fix it or report the package as still blocked. Do not call the package complete while required checks fail.

## Final Handoff

Commit and push the rescue branch unless the teacher explicitly requested local-only diagnostics.

Final report must include:

- Unit id or review ids.
- Source package branch/SHA and rescue branch.
- Full pushed rescue tip SHA.
- Original blocker and exact fix summary.
- Final package status: `asset-complete-package`, `dependency-blocked-asset-complete`, or still blocked.
- `curriculum:package-intake` result.
- Any skipped check and why it was skipped.
- Asset changes and style/audio/timing checks when assets were touched.
- Pre-merge preview URL only if useful, using the full rescue tip SHA. Label it `pre-merge package preview, not final main review queue`.

Release should integrate from the rescue branch/SHA after re-running Release intake.
