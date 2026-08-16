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

Production branches are not assumed to be directly mergeable. Treat `asset-complete-package` branches as lesson-local source packages. Shared state inside an old Production branch, including `src/curriculum/sample-lessons.json`, `public/tools/planner-data.json`, `docs/CURRICULUM_LEDGER.md`, SOP files, tools, and repair assets, is not trusted unless the branch was freshly rebased and verified against latest `origin/main`.

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
- Review modules are blockers. After L060, L090, L120, L150, L180, and every later 30-lesson milestone, ship the required review pair before the next numbered lesson.
- Continue blockers through the 600-lesson course. After L600, ship R037/R038 for L541-L570, then final capstone R039/R040 for L571-L600 before calling the 600-lesson curriculum complete.
- If review modules were skipped, stop merging further numbered lessons and catch up overdue review pairs first. With main currently at L311 and R001-R018 shipped, no review pair is overdue; R019-R020 are required after L330 and before L331.
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
- For numbered lessons, all review pairs required before that playable position are already present in `reviewLessons`.

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

## Production Package Intake

Before integrating a Production package, classify it:

- `asset-complete-package`: lesson-local files are complete and Production's fast package audit passed, but Release still owns main integration.
- `dependency-blocked-asset-complete`: lesson-local files are complete, but earlier lessons must enter `origin/main` first.
- `partial-package` or `assets-only`: do not integrate; return it to Production with the missing items.

Use the package branch and tip commit from Production's handoff as the source. Do not look only at `origin/main` for a newly completed Production package, because `asset-complete-package` explicitly means the unit is not yet integrated into `src/curriculum/sample-lessons.json` on `main`.

If a teacher or Production gives a `lesson-asset-review.html?unit=L###&ref=main` URL for a unit that has not yet been released, and that page says the unit is missing, do not conclude the package is missing. First run:

```bash
git fetch origin
git branch -r --list origin/codex/l###-complete-package
git ls-tree -r --name-only origin/codex/l###-complete-package | rg "L###|R###"
```

Then inspect the actual package files from the branch. The `ref=main` asset review URL becomes valid only after Release integrates, pushes `main`, and GitHub Pages deploys.

Release should fix release-owned integration issues, such as rebasing from latest `origin/main`, transplanting the intended lesson files, inserting the production JSON entry, regenerating planner data, updating the ledger, clearing registry rows, running `npm run verify`, pushing, and checking deployment.

If Release finds production-local defects, do not silently absorb them as normal release work. Fix only when needed to keep the current release moving, then report a `release-side repairs` list to Supervisor. Production-local defects include stale request/draft/packet mismatch, invalid `displayLines`, missing top-level `dependsOnLessons`, missing Stage 4 option ids or correctness metadata, repeated/missing Stage 4 sentence usage, stale `charAudio` path examples, wrong-option text that differs too much, wrong-option audio that does not match the final text, and failed lesson-local audio loudness checks.

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
- Request/packet/draft/final sentence data is missing or internally inconsistent.
- Stage 4 audio or timings are incomplete.
- `npm run verify` fails.
- GitHub Actions or Pages deployment fails after push.
