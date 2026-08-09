# Role SOP: Release

The Release thread moves completed Production work into `main` in playable order.

Release is the only normal role that writes production curriculum order on `main`.

## Read First

1. `docs/PROJECT_HANDOFF_SOP.md`
2. `docs/ROLE_RELEASE_SOP.md`
3. `docs/CURRICULUM_OPERATING_SOP.md`
4. `docs/CURRICULUM_PRODUCTION_SOP.md`
5. `docs/CURRICULUM_SCHEMA.md`
6. `docs/CURRICULUM_LEDGER.md`
7. `docs/PARALLEL_LESSON_REGISTRY.md`

Read `docs/SENTENCE_GENERATION_SOP.md` when dependency or allowed-character rechecks are needed.

## Source Of Truth

Start from latest `origin/main`, not from an old Production branch's base.

Before merging a Production branch:

- Fetch latest `origin/main`.
- Confirm production currently ends where expected.
- Confirm dependencies already exist in `src/curriculum/sample-lessons.json`.
- Inspect the Production branch diff against `origin/main`.
- Reject direct merges that would delete newer lessons, repair assets, tools, SOPs, or review state changes.

If a Production branch was built on an old base, create a fresh release branch from `origin/main` and move only the intended unit files.

## Startup

Run:

```bash
git remote -v
git fetch origin
git status --short --branch
git log -1 --oneline
npm run tools:check
npm run curriculum:audit-state
gh auth status
gh run list --branch main --limit 10
gh pr list --state open --limit 20
```

If bare `gh` fails, retry with `C:\Users\User\.local\bin\gh.cmd`.

## Merge Order

- Merge normal lessons in contiguous `L###` order.
- Insert review modules only according to the review cycle rules.
- Do not merge L172 before L171.
- Do not merge a lesson whose dependencies are only provisional.
- Do not infer final sentences from chat.

## Required Release Gate

For each unit entering `main`, confirm:

- Request file exists.
- Generated packet exists.
- Draft JSON exists.
- Production JSON entry is present in the correct playable order.
- Images and all referenced audio files exist.
- Sentence audio has `durationMs` and production `charTimings`.
- Stage 4 references are complete, including `G02` teach audio and `G05` wrong-choice audio when used.
- Ledger is updated.
- Planner data is regenerated.
- Registry has no stale active row for merged units.

Run:

```bash
npm run verify
git diff --stat
git diff --name-only
```

For asset-heavy releases, also run:

```bash
npm run assets:audit
```

`assets:audit` default findings should be reported. Strict mode is only required when the task is to enforce all asset findings.

## Push And Deployment

After checks pass and the diff is limited to the intended unit/release cleanup:

1. Commit.
2. Push to `main`.
3. Check GitHub Actions:

```bash
gh run list --branch main --limit 5
gh run list --branch gh-pages --limit 5
```

4. Report the commit SHA, checks, deployment status, and post-merge asset review URL.

## Stop Conditions

Stop and report instead of pushing if:

- The release branch has unrelated changes.
- A Production branch deletes or rewrites newer `main` work.
- Dependencies are missing.
- Request/packet/draft/final sentence data is missing.
- Stage 4 audio or timings are incomplete.
- `npm run verify` fails.
- GitHub Actions or Pages deployment fails after push.
