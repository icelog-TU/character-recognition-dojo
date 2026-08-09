# Role SOP: Supervisor

The Supervisor is the cross-thread coordinator for `認字練功房`.

Use this role for SOP maintenance, status consolidation, conflict detection, GitHub/Pages checks, worktree triage, release planning, and copy-paste instructions for other conversation threads.

## Read First

1. `docs/PROJECT_HANDOFF_SOP.md`
2. `docs/ROLE_SUPERVISOR_SOP.md`
3. `docs/CURRICULUM_OPERATING_SOP.md`
4. `docs/CURRICULUM_LEDGER.md`
5. `docs/PARALLEL_LESSON_REGISTRY.md`

Read additional authority files only when the task needs them:

- Production/image/audio/Stage 4: `docs/CURRICULUM_PRODUCTION_SOP.md`
- Sentence drafting rules: `docs/SENTENCE_GENERATION_SOP.md`
- JSON shape: `docs/CURRICULUM_SCHEMA.md`
- AI setup: `docs/AI_GENERATION_SETUP.md`
- Firebase/review-state/account sync: `docs/FIREBASE_ACCOUNT_DEVICE_SETUP.md`

## Assigned Worktree

Preferred coordination/SOP worktree:

```text
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\sop-coordination
```

Legacy coordination path may be stale or dirty and must be inspected before use:

```text
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\character-recognition-dojo-profile-sync
```

Do not perform ordinary lesson production from the Supervisor thread.

## Startup Checks

Run:

```bash
git remote -v
git fetch origin
git status --short --branch
git log -1 --oneline
git worktree list
npm run tools:check
npm run curriculum:audit-state
```

When GitHub state matters, also run:

```bash
gh auth status
gh pr list --state open --limit 20
gh run list --branch main --limit 10
gh run list --branch gh-pages --limit 10
```

If bare `gh` fails, retry with `C:\Users\User\.local\bin\gh.cmd`.

## Responsibilities

- Treat latest `origin/main` as the source of truth.
- Identify stale local worktrees and branches before assigning work.
- Keep SOP files concise, role-specific, and non-duplicative.
- Remove or replace stale, contradictory, or repeated SOP rules.
- Produce one-paste instructions for Editor, Production A/B/C, Release, and Asset Repair.
- Diagnose GitHub Pages, Firebase, review pages, audio review pages, registry, ledger, and planner-data drift.
- Never assume another conversation thread knows this chat's context.

## Boundaries

The Supervisor should not:

- Draft final lesson sentences unless explicitly acting as Editor for that turn.
- Generate lesson images/audio unless explicitly acting as Production or Asset Repair.
- Merge Production branches unless explicitly acting as Release.
- Reuse a dirty worktree by stashing or resetting other people's work.

## SOP Maintenance Rules

When adding a new process rule:

1. Put it in the most specific authority file.
2. Keep role SOPs as short entry instructions.
3. Keep `PROJECT_HANDOFF_SOP.md` as the shared index and copy-prompt source.
4. If the same rule appears in multiple files, replace duplicates with references.
5. After SOP edits, run at least:

```bash
npm run curriculum:audit-state
npm run verify
git diff --stat
git diff --name-only
```

Push SOP updates to `main` only after checks pass and the diff contains no unrelated lesson work.

## Standard Handoff Output

Every instruction for another conversation thread must include:

- Role name.
- Repo URL.
- Required worktree path.
- Exact files to read.
- Current production boundary from latest `origin/main`.
- What the thread owns.
- What it must not touch.
- Startup commands.
- Stop conditions.
- Next concrete action.

Do not write handoffs that require the teacher to fill in missing context from memory.
