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
- Review modules are Release/main blockers. After L045, L060, L075, L090, and every later 15-lesson milestone, ship the required review pair before the next numbered lesson enters `main`. This does not prevent Production from preparing dependency-blocked later packages; it only controls Release order.
- Continue blockers through the 600-lesson course. After L600, ship R075/R076 for L571-L600 before calling the 600-lesson curriculum complete. There is no extra capstone pair beyond R076.
- If review modules were skipped, stop merging further numbered lessons and catch up overdue review pairs first. For any milestone already passed by latest `origin/main`, Release must confirm the corresponding current-schedule review pair is present and valid before merging later numbered lessons. Legacy review modules from the retired 30-lesson schedule do not count until audited or rebuilt against the current milestone, coverage range, and allowed-character ceiling.
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
- Stage 4 `G03 missing-character` has exactly three single-Han options: one correct answer and two distractors. A one-button `missing-character` round is a production-local defect and must not be released unless Supervisor gives an explicit exception.
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

Release intake is intentionally strict. Missing image/audio files, missing timings, missing Stage 4 referenced audio, failed package intake, or package files that still say `partial-package` are not release integration problems. Stop before transplanting files and route the unit to Production or Package Rescue.

Run the package intake gate on the package branch or exact SHA before transplanting files:

```bash
npm run curriculum:package-intake -- --unit L### --ref origin/codex/l###-complete-package
```

If the gate fails, stop intake and report the exact errors. Do not trust a `*-complete-package` branch name when the draft, packet, registry row, or notes still say `partial-package`, `needs-rework`, `Do not integrate`, `NOT COMPLETED`, `FAIL`, or `unresolved`. If a historical pre-gate package needs a Supervisor exception, record that exception explicitly in the release notes instead of silently merging it.

When an unmerged package branch needs package-local fixes and the original Production slot has moved on or should not be interrupted, ask Supervisor to assign Package Rescue. Release should not turn broad package rescue into normal release work. Release may fix small release-owned integration issues, but package-local defects belong to Production or Package Rescue.

Teacher image/audio review is normally post-merge through the permanent `ref=main` asset review queue. Do not block ordinary Release because the teacher has not reviewed or synced a pre-merge branch preview. Branch preview review is optional and only supports special cases.

If a package was completed using the browser automation fallback, Release may accept it when the package is explicitly marked `asset-complete-package` or `dependency-blocked-asset-complete`, records the automation failure reason and passed technical checks, and otherwise passes Release intake checks. Teacher manual pre-merge PASS may be recorded when available, but it is not required for ordinary release unless the teacher explicitly requested pre-merge approval for that unit. Do not integrate a package that merely says assets are missing, validators failed, or the package is still partial.

Use the package branch and tip commit from Production's handoff as the source. Do not look only at `origin/main` for a newly completed Production package, because `asset-complete-package` explicitly means the unit is not yet integrated into `src/curriculum/sample-lessons.json` on `main`.

If a teacher or Production gives a `lesson-asset-review.html?unit=L###&ref=main` URL for a unit that has not yet been released, and that page says the unit is missing, do not conclude the package is missing. First run:

```bash
git fetch origin
git branch -r --list origin/codex/l###-complete-package
git ls-tree -r --name-only origin/codex/l###-complete-package | rg "L###|R###"
```

Then inspect the actual package files from the branch. The `ref=main` asset review URL becomes valid only after Release integrates, pushes `main`, and GitHub Pages deploys.

Release should fix release-owned integration issues, such as rebasing from latest `origin/main`, transplanting the intended lesson files, inserting the production JSON entry, regenerating planner data, updating the ledger, clearing registry rows, running `npm run verify`, pushing, and checking deployment.

If Release finds production-local defects, do not silently absorb them as normal release work. Fix only when needed to keep the current release moving, then report a `release-side repairs` list to Supervisor. Production-local defects include stale request/draft/packet mismatch, generation packets that are missing final approved sentence records, invalid `displayLines`, missing top-level `dependsOnLessons`, missing Stage 4 option ids or correctness metadata, repeated/missing Stage 4 sentence usage, non-canonical normal-lesson Stage 4 order without a teacher-approved exception, stale `charAudio` path examples, wrong-option text that differs too much, wrong-option audio that does not match the final text, and failed lesson-local audio loudness checks.

For larger production-local defects, stop and provide a Package Rescue handoff: unit id, package branch/tip SHA, intake errors, exact files or checks that failed, and confirmation that the unit has not been integrated into `main`.

After integrating a lesson or review module that touches Stage 4 or lesson completion flow, Release must smoke-test that the final reward state is usable on a phone/tablet-width viewport: after `領取獎勵`, the red `下一課` button and white `回首頁休息` button must be visible or automatically scrolled into view and must not be hidden behind the floating playback bar. This is app behavior QA, not subjective image/audio review.

## Two-Character Word Lesson Release Gate

For a normal lesson whose `newChars` has two characters because the teacher approved a natural target word such as `朋友`, Release must verify these additional points before pushing:

- The lesson consumes exactly one `L###` order and appears once in the course grid.
- `title` is the target word and `newChars`, `zhuyin`, and `charAudio` contain both single Han characters.
- Ledger and character overview behavior treat both characters as learned at the same lesson order.
- Stage 1 renders the word target and both zhuyin readings without overlap on phone width.
- Stage 2 accepts both introduced characters as target finds. The intended six-card rule is exact: one-character lessons use 3 current-target cards plus 3 distractors; two-character word lessons use 2 cards for each current lesson character plus 2 distractors, completing after all 4 target cards are tapped.
- Stage 4 uses canonical order and single-Han interactions. No `targetChar`, missing slot, or option card may be the whole two-character word.
- `npm run curriculum:package-intake -- --unit L### --ref <package-ref>` passes on the package branch or exact SHA.

The first two-character word lesson after this SOP change is a pilot. Do not block Release solely because a pre-merge card-count simulation cannot prove the 2+2 Stage 2 distribution; record it as a post-merge teacher verification item. Stop before pushing only for hard package defects, failed validation, a missing/unsupported target character, broken Stage 4 single-Han data, or another app/UI issue that prevents the lesson from being opened and tested on `main`.

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
