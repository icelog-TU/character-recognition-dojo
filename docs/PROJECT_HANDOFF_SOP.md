# 認字練功房 Project Handoff SOP

這份文件只做新對話串交接入口。不要把所有細節規範複製到這裡；如果要修改流程，請改對應的權威文件，再讓本文件只保留連結與摘要。

## 權威文件分工

- 多對話串協作、工作區、Git、起手檢查、平行備課、合併順序：`docs/CURRICULUM_OPERATING_SOP.md`
- 課程製作、圖片、音檔、壓縮、AI alignment、Stage 4、QA gate：`docs/CURRICULUM_PRODUCTION_SOP.md`
- AI 造句提示、前五課複習字覆蓋、句子品質、`spokenText`、`focusChar`：`docs/SENTENCE_GENERATION_SOP.md`
- 課程 JSON 結構、review module schema、validation schema：`docs/CURRICULUM_SCHEMA.md`
- 目前已合併課程序、字表、視覺連續性、地點連續性：`docs/CURRICULUM_LEDGER.md`
- 尚未合併的平行課程占用與 provisional dependencies：`docs/PARALLEL_LESSON_REGISTRY.md`
- OpenAI key、AI 句子/音檔生成指令：`docs/AI_GENERATION_SETUP.md`
- Firebase Auth、Firestore 帳號/profile/device 設定與 rules：`docs/FIREBASE_ACCOUNT_DEVICE_SETUP.md`
- 商品行為規格：`docs/PRODUCT_SPEC.md`
- 角色收藏與轉蛋系統：`docs/COLLECTION_SYSTEM.md`
- 收藏角色美術規格：`docs/CHARACTER_ART_STYLE_SPEC.md`
- Planner Worker 設定：`docs/AI_PLANNER_WORKER_SETUP.md`

如果文件互相衝突，使用上面最具體的權威文件；如果 Markdown 與 production JSON 衝突，latest `origin/main` 的 `src/curriculum/sample-lessons.json` 是出貨真相。

## 目前狀態

- Repo: `https://github.com/icelog-TU/character-recognition-dojo`
- GitHub Pages: `https://icelog-tu.github.io/character-recognition-dojo/`
- App name: `認字練功房`
- Current reviewed lessons: L001-L101
- L101 introduces `圓`.
- Production review modules: R001-R004 after L090, covering L001-L060.
- L001-L005 use Stage 1-3.
- L006-L101 include Stage 4 fixed sentence games.
- Review modules do not occupy `L###` lesson numbers. After L060, the next new-character lesson is L061.

Always verify current state with `git fetch origin`, `npm run curriculum:audit-state`, and `docs/CURRICULUM_LEDGER.md`; do not trust an older chat transcript as current progress. If ledger Markdown disagrees with production JSON, production JSON wins and the Markdown summary must be corrected, not used to block the current lesson.

## 新對話串起手

Preferred shared local working copy:

```text
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\character-recognition-dojo
```

Do not create a new clone unless the user explicitly asks for one. If the current shell is not in this path, stop and tell the user before editing.

Run:

```bash
git remote -v
git fetch origin
git status --short --branch
git log -1 --oneline
npm run tools:check
npm run curriculum:audit-state
```

Do not run `npm ci` as a routine start command in the shared working copy. On Windows it can fail with `EPERM unlink` when another Codex thread, dev server, or Node process locks native package files. Use it only when dependencies are actually missing or stale, and only after confirming the shared working copy is not actively being used.

GitHub CLI is available on this machine. If bare `gh` is not found, use:

```powershell
C:\Users\User\.local\bin\gh.cmd auth status
C:\Users\User\.local\bin\gh.cmd run list --branch main --limit 5
C:\Users\User\.local\bin\gh.cmd pr list
C:\Users\User\.local\bin\gh.cmd issue list
```

Read these files before lesson or SOP work:

- `docs/PROJECT_HANDOFF_SOP.md`
- `docs/CURRICULUM_OPERATING_SOP.md`
- `docs/CURRICULUM_PRODUCTION_SOP.md`
- `docs/SENTENCE_GENERATION_SOP.md`
- `docs/CURRICULUM_LEDGER.md`
- `docs/PARALLEL_LESSON_REGISTRY.md`
- `docs/CURRICULUM_SCHEMA.md`
- `docs/AI_GENERATION_SETUP.md`

Before editing, state the exact ownership in chat, including lesson id and owned paths. Do not edit `src/curriculum/sample-lessons.json` for a later lesson until its dependency lessons exist in latest `origin/main`.

## 不可違反的規則

- Use Taiwan zhuyin only. Do not use Hanyu pinyin.
- AI sentences are drafts until teacher approved.
- AI recommended next characters are also drafts. Do not treat a recommendation file, `approval.selectedChoiceId`, or an unmerged lesson request as a reserved lesson choice unless the teacher explicitly approved that character and final sentence set.
- Sentence drafting must follow `docs/SENTENCE_GENERATION_SOP.md`.
- Production audio must use the standard AI audio -> `assets:audio` -> `assets:align:ai` pipeline unless the teacher explicitly approves an exception.
- Before saying FFmpeg, FFprobe, ImageMagick, or OpenAI setup is unavailable, run `npm run tools:check` and/or `npm run ai:check`.
- Character-card `charAudio` must be standalone OpenAI TTS generated from the single target character. Never cut, trim, slice, copy, or extract character-card audio from sentence audio.
- Do not create production wrong-choice audio by cutting or patching the correct sentence audio. Generate each wrong option as whole-sentence AI audio from its final text.
- New or replacement sentence images must use the L058 style anchors unless the teacher approves a new style direction:
  - `public/assets/lessons/L058/images/L058-S01.webp`
  - `public/assets/lessons/L058/images/L058-S02.webp`
  - `public/assets/lessons/L058/images/L058-S03.webp`
- Final sentence images must be WebP, phone-sized, and compressed according to `docs/CURRICULUM_PRODUCTION_SOP.md`.
- Review modules use `R###`, live in top-level `reviewLessons`, introduce no new characters, and do not consume `L###` lesson numbers.
- Production-ready review modules must be inserted into the normal playable course sequence and square course-card grid. Example path: `L060` -> `R001` -> `R002` -> `L061`.
- The child-facing `漢字總覽` page must keep a permanent `複習區` after the six color groups, reserving `R001` through `R040`. Future review slots may appear there only as locked placeholders, not as JSON curriculum records.
- Review modules grant the same one-time reward as lessons. Replaying a completed review module must not grant another reward.
- Review modules are two-stage units in the UI: `看圖聽句子` then `句子遊戲`. Do not show normal-lesson Stage 1/2 rows or `第三階段`/`第四階段` labels for review modules.
- Account progress belongs to profiles under `accounts/{uid}/profiles/{profileId}`. Device records under `accounts/{uid}/devices/{deviceId}` identify phones/tablets by generated system ID and store `activeProfileId`.
- A family account has up to three active learning profiles. Default labels are `學習檔案一`, `學習檔案二`, and `學習檔案三`; users may rename profile labels to names such as `媽媽`, `哥哥`, and `妹妹`.
- The app header account/profile button is the primary switching surface. It must show the signed-in account first, then the three learning profiles, and link into Settings for profile renaming.
- Free browsing is an internal Firestore device authorization for approved teacher/parent devices only; it must not appear as a user-facing mode or toggle.
- Unlocked lessons must allow direct entry to any stage. Do not force Stage 1 -> Stage 2 -> Stage 3 -> Stage 4 during review.
- In completed lessons, direct stage entry is replay mode: the selected stage must start at that stage's beginning instead of showing the old completed-stage advance prompt.
- Every Stage 4 round must have `按我看解答`; revealing the answer must not count as completion, and the revealed state must offer `重新挑戰這一題`.
- Preserve user/other-thread changes. Never revert unrelated work unless explicitly requested.

## Windows UTF-8

Markdown and JSON files are UTF-8. Garbled Chinese in PowerShell output usually means the terminal decoding path is wrong, not that the file is corrupted.

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

## Required Checks

For normal completed work:

```bash
npm run verify
git diff --stat
git diff --name-only
```

For media diagnostics:

```bash
npm run assets:audit
```

For production curriculum or asset changes, `npm run validate:production` must pass. If checks fail, conflicts appear, unrelated files are modified, or newer `origin/main` needs inspection, do not push until the issue is fixed or reported.

The user has standing approval for safe, checked, completed work to be merged to `main` so it is visible on GitHub Pages from a phone. Do not merge if the diff contains unrelated work or another thread's unfinished changes.

## 新對話串可複製提示

```text
We are continuing the `認字練功房` repo:
https://github.com/icelog-TU/character-recognition-dojo

Use this existing local working copy. Do not create a new clone:
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\character-recognition-dojo

If your current working directory is not exactly that repo path, stop and tell me before editing. Do not work from any older clone.

Before editing, run:
git remote -v
git fetch origin
git status --short --branch
git log -1 --oneline
npm run tools:check
npm run curriculum:audit-state

If GitHub CLI is needed and `gh` is not found, use:
C:\Users\User\.local\bin\gh.cmd

Please read:
- docs/PROJECT_HANDOFF_SOP.md
- docs/CURRICULUM_OPERATING_SOP.md
- docs/CURRICULUM_PRODUCTION_SOP.md
- docs/SENTENCE_GENERATION_SOP.md
- docs/CURRICULUM_LEDGER.md
- docs/PARALLEL_LESSON_REGISTRY.md
- docs/CURRICULUM_SCHEMA.md
- docs/AI_GENERATION_SETUP.md

Multiple Codex threads may be working on this repo. Before editing, fetch/status, confirm the current commit, read the parallel lesson registry, and state which files or subsystem this thread owns.

The app is a Taiwan zhuyin character-recognition app for young children. Do not use Hanyu pinyin.
AI sentence drafting must follow docs/SENTENCE_GENERATION_SOP.md.
Production audio must use AI audio, npm run assets:audio, and npm run assets:align:ai unless the teacher explicitly approves an exception.
Before saying FFmpeg/FFprobe/ImageMagick/OpenAI is unavailable, run npm run tools:check and/or npm run ai:check.
For new or replacement sentence images, use L058 style anchors:
public/assets/lessons/L058/images/L058-S01.webp
public/assets/lessons/L058/images/L058-S02.webp
public/assets/lessons/L058/images/L058-S03.webp
```
