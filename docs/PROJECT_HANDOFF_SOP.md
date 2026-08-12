# 認字練功房 Project Handoff SOP

這份文件是新對話串的共同入口。每個新對話串先讀本文件，再依自己的角色讀一份 `ROLE_*_SOP.md`。

不要依賴舊聊天紀錄、本機舊分支、舊 worktree 名稱、或口頭記憶判斷目前進度。最新真相一律在 GitHub `origin/main`。

## Source Of Truth

- Repo: `https://github.com/icelog-TU/character-recognition-dojo`
- GitHub Pages: `https://icelog-tu.github.io/character-recognition-dojo/`
- Shipping curriculum truth: latest `origin/main:src/curriculum/sample-lessons.json`
- Shipping lesson assets: latest `origin/main:public/assets/lessons/`
- Shipping review assets: latest `origin/main:public/assets/reviews/`
- Merged human summary: `docs/CURRICULUM_LEDGER.md`
- Not-yet-merged parallel board: `docs/PARALLEL_LESSON_REGISTRY.md`

If Markdown and production JSON disagree, latest `origin/main:src/curriculum/sample-lessons.json` wins. Fix the Markdown summary; do not block work because a stale note disagrees.

## Current Production State

As of latest `origin/main`:

- App name: `認字練功房`
- Current reviewed lessons: L001-L215
- L215 introduces `池`.
- Production review modules: R001-R012.
- Overdue review blockers: none at L215. Next blockers are R013-R014 after L240, before L241.
- L001-L005 use Stage 1-3.
- L006-L215 include Stage 4 fixed sentence games.
- Review modules use `R###` ids and do not consume `L###` lesson numbers.

Every new thread must still verify this with `git fetch origin` and `npm run curriculum:audit-state`.

## Role SOPs

Open exactly one role SOP after this file:

- Supervisor / coordination / SOP maintenance: `docs/ROLE_SUPERVISOR_SOP.md`
- Sentence editor: `docs/ROLE_EDITOR_SOP.md`
- Production A/B/C/D: `docs/ROLE_PRODUCTION_SOP.md`
- Release / ordered push to `main`: `docs/ROLE_RELEASE_SOP.md`
- Asset repair after teacher review: `docs/ROLE_ASSET_REPAIR_SOP.md`
- Old-image visual refresh batches: `docs/ROLE_VISUAL_REFRESH_SOP.md`

Role SOPs are entry adapters. Detailed authority still belongs to:

- Multi-thread source of truth, worktrees, registry, merge order: `docs/CURRICULUM_OPERATING_SOP.md`
- Lesson/review production assets, image/audio/alignment, Stage 4 QA: `docs/CURRICULUM_PRODUCTION_SOP.md`
- Sentence drafting, allowed characters, coverage, `spokenText`, `focusChar`: `docs/SENTENCE_GENERATION_SOP.md`
- Lesson image role identity and cast continuity: `docs/LESSON_VISUAL_CAST_SOP.md`
- JSON schema and validation expectations: `docs/CURRICULUM_SCHEMA.md`
- Merged lesson ledger and continuity notes: `docs/CURRICULUM_LEDGER.md`
- AI key and generation commands: `docs/AI_GENERATION_SETUP.md`
- Firebase account/device/review-state setup: `docs/FIREBASE_ACCOUNT_DEVICE_SETUP.md`

When SOP files conflict, use the most specific authority file above and update the stale file.

## Standard Startup

Run from the assigned worktree:

```bash
git remote -v
git fetch origin
git status --short --branch
git log -1 --oneline
npm run tools:check
npm run curriculum:audit-state
```

If the task needs GitHub PRs, Actions, Pages, or deployment status, also run:

```powershell
gh auth status
gh run list --branch main --limit 5
gh pr list
```

If bare `gh` is not found, use:

```powershell
C:\Users\User\.local\bin\gh.cmd auth status
C:\Users\User\.local\bin\gh.cmd run list --branch main --limit 5
C:\Users\User\.local\bin\gh.cmd pr list
```

Do not report GitHub CLI as unavailable until the full-path command fails.

Do not run `npm ci` as a routine startup command. Run it only when dependencies are missing or known stale, and only after confirming no other thread or dev server is using that worktree.

Newly created git worktrees do not automatically get ignored dependency folders such as `node_modules`. If `npm run tools:check` reports FFmpeg/FFprobe unavailable and `Test-Path node_modules` is false, the issue is missing repo dependencies in that worktree, not missing system tools. In that case, after confirming the assigned worktree is clean and idle, run:

```bash
npm ci
npm run tools:check
```

Do not use bare `ffmpeg`, `ffprobe`, or PATH checks to bypass the repo tool check.

## Worktree Map

Coordination / SOP / release diagnostics:

```text
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\sop-coordination
```

Legacy coordination path, may be dirty or stale; inspect before use:

```text
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\character-recognition-dojo-profile-sync
```

Production slots:

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

Asset repair slots:

```text
Asset Repair A:
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\asset-repair

Asset Repair B:
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\asset-repair-b
```

Do not create a new clone unless the user explicitly asks. If the current shell is not in the assigned path, stop and report it before editing.

## Non-Negotiable Rules

- Use Taiwan zhuyin only. Do not use Hanyu pinyin.
- AI sentences and AI recommended next characters are drafts until teacher approved.
- Final teacher-approved sentence sets must be captured in repo files, not only in chat.
- Supervisor must run Lesson Gap Audit before assigning new multi-lesson batches, before Release pushes dependency-blocked packages, and whenever the teacher suspects skipped lesson numbers.
- Production delivers `asset-complete-package`; Release owns `release-ready-package` and `in-main`. Do not make Production spend time on shared-state release integration for dependency-blocked lessons.
- Review pairs are blockers: after L060/L090/L120/L150/L180 milestones, ship the required review pair before the next numbered lesson. Overdue review modules keep their original milestone allowed-character ceiling, not latest `origin/main`.
- The review cycle continues through the full 600-lesson course and uses R001-R040. R037/R038 follow L600 for L541-L570, and final capstone R039/R040 cover L571-L600.
- Production handoffs must be one-paste executable.
- A branch with only images plus `S01-S05` audio plus `charAudio` is `assets-only`, not a complete course.
- Production audio must use OpenAI audio, `npm run assets:audio`, and `npm run assets:align:ai` unless the teacher explicitly approves an exception.
- Standalone character-card `charAudio` must be generated from the single target character. Do not cut it from sentence audio.
- Wrong-choice audio must be generated as whole-sentence audio from the exact wrong text. Do not splice or patch correct audio.
- Teacher subjective review is post-merge by default through the permanent asset review pages. Automated gates still block release.
- `ref=main` asset review URLs are valid only after Release merges the unit into `main` and GitHub Pages deploys. Before release, Production may provide only a pre-merge package preview URL using `ref=<package-branch-or-full-commit-sha>`, clearly labeled as not the final main review queue.
- Preserve user and other-thread changes. Never stash, reset, revert, or overwrite unrelated work unless explicitly requested.

## Review URLs

Post-merge asset review:

```text
https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L###&ref=main
npm run asset:review-status -- --unit L### --ref main
npm run asset:review-status -- --list --ref main
```

Use those `ref=main` URLs only after Release has integrated and deployed the unit. If a newly completed Production package is still only on a package branch, `ref=main` will correctly report that the unit is missing.

Pre-merge package preview, when explicitly useful:

```text
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L###&ref=codex%2Fl###-complete-package
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L###&ref=<full-commit-sha>
```

Label pre-merge links: `pre-merge package preview, not final main review queue`.

Pre-merge audio review only when explicitly requested:

```text
https://icelog-TU.github.io/character-recognition-dojo/tools/audio-review.html?unit=L###&ref=<branch-or-commit-sha>
npm run audio:review-status -- --unit L### --ref <branch-or-commit-sha>
```

Do not publish temporary review pages.

## Copy Prompts For New Threads

### Supervisor

```text
You are the Supervisor. When assigning new batches, before Release pushes dependency-blocked lessons, or when the teacher asks whether lessons through L### are complete, run the Lesson Gap Audit in docs/ROLE_SUPERVISOR_SOP.md and docs/CURRICULUM_OPERATING_SOP.md. Report only; do not edit, commit, or push unless the teacher explicitly asks.

你是「認字練功房」Supervisor / 總管對話串。

Repo:
https://github.com/icelog-TU/character-recognition-dojo

請以 GitHub origin/main 為唯一真相，不要相信舊 chat 或本機舊分支。
先讀：
- docs/PROJECT_HANDOFF_SOP.md
- docs/ROLE_SUPERVISOR_SOP.md

使用 coordination/SOP 工作區：
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\sop-coordination

先執行角色 SOP 的起手檢查，只回報狀態，不要修改、commit、push，除非我明確要求。
```

### Editor

```text
你是「認字練功房」Editor / 句子編輯對話串。

Repo:
https://github.com/icelog-TU/character-recognition-dojo

請以 GitHub origin/main 為唯一真相，不要相信舊 chat 或本機舊分支。
先讀：
- docs/PROJECT_HANDOFF_SOP.md
- docs/ROLE_EDITOR_SOP.md

你的工作是跟我選新字、定稿五句話，然後輸出可一鍵貼給 Production A/B/C/D 的完整 handoff。不要製作圖片或音檔，除非我另外明確要求。
```

### Production A/B/C/D

```text
你是「認字練功房」Production <A|B|C|D> 對話串。

Repo:
https://github.com/icelog-TU/character-recognition-dojo

請以 GitHub origin/main 為唯一真相，不要相信舊 chat 或本機舊分支。
先讀：
- docs/PROJECT_HANDOFF_SOP.md
- docs/ROLE_PRODUCTION_SOP.md

指定 worktree:
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-<a|b|c|d>

Production goal: deliver `asset-complete-package`, not `release-ready-package`. Do the fast package audit in docs/ROLE_PRODUCTION_SOP.md and docs/CURRICULUM_PRODUCTION_SOP.md. Do not spend time on shared-state release integration for dependency-blocked lessons; Release owns production JSON, planner, ledger, final verify, push, and deployment.

Final handoff must include the pushed package branch and full tip commit SHA. If you provide a pre-merge asset preview URL, it must use `ref=<package-branch-or-full-SHA>` and be labeled `pre-merge package preview, not final main review queue`. Do not give `lesson-asset-review.html?unit=L###&ref=main` as usable before Release merges and deploys.

如果這個 worktree 不是 clean，停止並回報。不要 stash、reset、revert、或覆蓋別人的工作。
收到 Editor 的完整 handoff 後，依 SOP claim registry，從 origin/main 建新分支，並直接製作 `asset-complete-package`；不要做 Release 的 shared-state 整合。
```

### Release

```text
Treat Production branches as lesson-local `asset-complete-package` sources unless they have been freshly rebased and verified. Release owns integration on latest origin/main: production JSON, planner, ledger, registry cleanup, final verify, push, and deployment. Report any production-local fixes as `release-side repairs` to Supervisor.

If `lesson-asset-review.html?unit=L###&ref=main` says a newly completed package is missing, do not conclude Production failed. `ref=main` is post-merge only. First fetch origin and inspect the package branch and tip commit from the Production handoff.

你是「認字練功房」Release / 推課對話串。

Repo:
https://github.com/icelog-TU/character-recognition-dojo

請以 GitHub origin/main 為唯一真相，不要相信舊 chat 或本機舊分支。
先讀：
- docs/PROJECT_HANDOFF_SOP.md
- docs/ROLE_RELEASE_SOP.md

你的工作是把 Production A/B/C/D 已推到遠端分支的完整課程包，按 playable lesson order 一課一課移植/合併到 main，跑 gate，push，並檢查 GitHub Pages 部署。
不要直接 merge 舊基底分支；先從 origin/main 檢查 diff 和依賴。
```

### Asset Repair A

```text
你是「認字練功房」Asset Repair A / 修圖修音對話串。

Repo:
https://github.com/icelog-TU/character-recognition-dojo

請以 GitHub origin/main 為唯一真相，不要相信舊 chat 或本機舊分支。
先讀：
- docs/PROJECT_HANDOFF_SOP.md
- docs/ROLE_ASSET_REPAIR_SOP.md

使用 repair 工作區：
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\asset-repair

你的工作只處理已進 main 的 asset review repair queue。一次只修被指派的一課或一組明確檔案。不要和 Asset Repair B 同時修同一課或同一檔。
根據我提供的 review 摘要修圖或修音，推回 main，讓我重新到 review page 清除 repair 並勾整課 OK。
```

### Asset Repair B

```text
你是「認字練功房」Asset Repair B / 修圖修音對話串。

Repo:
https://github.com/icelog-TU/character-recognition-dojo

請以 GitHub origin/main 為唯一真相，不要相信舊 chat 或本機舊分支。
先讀：
- docs/PROJECT_HANDOFF_SOP.md
- docs/ROLE_ASSET_REPAIR_SOP.md

使用 repair 工作區：
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\asset-repair-b

你的工作只處理已進 main 的 asset review repair queue。一次只修被指派的一課或一組明確檔案。不要和 Asset Repair A 同時修同一課或同一檔。
根據我提供的 review 摘要修圖或修音，推回 main，讓我重新到 review page 清除 repair 並勾整課 OK。
```

## Windows UTF-8

Markdown and JSON files are UTF-8. Garbled Chinese in PowerShell output usually means terminal decoding is wrong, not that the file is corrupted.

Use explicit UTF-8 reads:

```powershell
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new()
$OutputEncoding = [System.Text.UTF8Encoding]::new()
Get-Content -Encoding UTF8 docs/PROJECT_HANDOFF_SOP.md
```

For exact agent-side reads:

```powershell
node -e "process.stdout.write(require('fs').readFileSync('docs/PROJECT_HANDOFF_SOP.md','utf8'))"
```

Only report real corruption if explicit UTF-8 decoding fails, replacement characters appear in the decoded file, or GitHub/a UTF-8-aware editor shows the same damaged text.
