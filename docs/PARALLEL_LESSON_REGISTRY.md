# Parallel Lesson Registry

This file is the shared coordination board for parallel lesson and review-module production.

Use this file only for **not-yet-merged** lesson work. The source of truth for merged shipping curriculum is:

- `src/curriculum/sample-lessons.json`

`docs/CURRICULUM_LEDGER.md` is the required human-readable merged summary and must be kept synced, but it does not override production JSON.

See `docs/CURRICULUM_OPERATING_SOP.md` for the complete multi-thread workflow. In short: this registry coordinates provisional work, but production shipping still happens through one ordered release lane.

When the teacher wants to prepare 2-3 lessons or review modules at the same time, register each active unit here before any real work starts. This registry is mandatory coordination state, not optional notes.

## Active Parallel Lessons

| Unit | New Character(s) / Kind | Status | Owner / Thread | Branch / Commit | Depends On | Provisional Learned Chars | Request / Packet | Assets | Notes |
|---|---|---|---|---|---|---|---|---|---|
| L089 | 把 | claimed | Codex / L089 production assets thread | `codex/l089-ba-assets` / pending | L087:心, L088:放 | 心 放 | `curriculum-workflow/lesson-requests/L089.json`; `curriculum-workflow/generated/L089-generation-packet.md` | `curriculum-workflow/audio-inbox/L089/`; `public/assets/lessons/L089/` | Parallel prep only until L087 and L088 are merged into latest `origin/main`; do not merge production JSON yet. |
| L090 | 桌 | ready-blocked-by-dependency | Codex / L090 production assets thread | `codex/l090-zhuo-assets` / `db4c5da` | L086:紙, L087:心, L088:放, L089:把 | 紙 心 放 把 | `curriculum-workflow/lesson-requests/L090.json`; `curriculum-workflow/generated/L090-generation-packet.md` | `curriculum-workflow/audio-inbox/L090/`; `public/assets/lessons/L090/` | Assets prepared branch-only; blocked until L086-L089 are merged into latest `origin/main`; do not merge production JSON yet. After L090 production, R003 and R004 must follow before L091. |
| L091 | 子 | ready-blocked-by-dependency | Codex / L091 production assets thread | `codex/l091-zi-assets` / `714b5e4` | L090:桌, R003, R004 | 桌 | `curriculum-workflow/lesson-requests/L091.json`; `curriculum-workflow/generated/L091-generation-packet.md` | `curriculum-workflow/audio-inbox/L091/`; `public/assets/lessons/L091/` | Assets prepared branch-only; blocked until L090 and R003/R004 are merged into latest `origin/main`; do not merge production JSON yet. Single-character audio must be neutral-tone 台灣華語 ㄗ˙, not third tone. |
| L092 | 盒 | ready-blocked-by-dependency | Codex / L092 production assets thread | `codex/l092-he-assets` / `7c4e6e3` | L091:子 | 子 | `curriculum-workflow/lesson-requests/L092.json`; `curriculum-workflow/generated/L092-generation-packet.md` | `curriculum-workflow/audio-inbox/L092/`; `public/assets/lessons/L092/` | Assets prepared branch-only; blocked until L091 is merged into latest `origin/main`; do not merge production JSON yet. R003/R004 are already present on latest `origin/main`, but must still remain before L091 in the production sequence. |
| L093 | 掉 | ready-blocked-by-dependency | Codex / L093 production assets thread | `codex/l093-diao-assets` / `c2c0351` | L088:放, L089:把, L090:桌, L091:子, L092:盒 | 放 把 桌 子 盒 | `curriculum-workflow/lesson-requests/L093.json`; `curriculum-workflow/generated/L093-generation-packet.md` | `curriculum-workflow/audio-inbox/L093/`; `public/assets/lessons/L093/` | Assets prepared branch-only; blocked until L088-L092 are merged into latest `origin/main`; do not merge production JSON yet. R003/R004 are already present on latest `origin/main`, but must remain before L091 in the production sequence. |

## Status Values

- `planned`: Teacher has chosen the lesson order and new character(s), but no Codex thread owns it yet.
- `claimed`: A Codex thread has announced ownership, but lesson request work has not started.
- `request-ready`: The lesson request exists and has been checked against the intended provisional boundary.
- `drafting`: Sentences, image prompts, or teacher review are in progress.
- `assets`: Images, audio, or char timings are being generated.
- `ready-blocked-by-dependency`: Lesson assets are prepared, but earlier dependency lessons are not merged yet.
- `merge-ready`: Dependencies are merged, the lesson has been rebased and rechecked, and full production checks pass.
- `merged`: The lesson has entered `main`; remove or archive the row after `docs/CURRICULUM_LEDGER.md` is updated.
- `needs-rework`: A dependency changed or teacher feedback requires sentence/image/audio changes before merge.

## How To Register Work

1. Run `git fetch origin` and inspect latest `origin/main`.
2. Run `npm run curriculum:audit-state` to confirm main, ledger, registry, planner data, and lesson asset folders agree before claiming new work.
3. Before creating request files, generating packets, images, audio, or editing JSON, add or update exactly one row for the unit this thread owns.
4. Fill `New Character(s) / Kind` as soon as the teacher chooses the character or review module.
5. If a prior lesson is not merged, list it in `Depends On`, for example `L051:樣`.
6. Put those not-yet-merged characters in `Provisional Learned Chars`.
7. Commit and push the registry update before starting large image/audio work. If a quick local claim is needed first, update and push the registry as the first commit before any asset generation.

## Required Registry Checkpoints

Every parallel lesson thread must update this registry at these three checkpoints:

1. **Start / claim:** before lesson request, packet, image, audio, or curriculum JSON work starts.
   - Status should be `claimed`, `request-ready`, or `drafting`.
   - `Owner / Thread`, `Branch / Commit`, `Depends On`, and owned file paths must be filled.
2. **Assets prepared:** after reviewed images, audio, and timings are prepared but before the lesson can merge.
   - Status should be `ready-blocked-by-dependency` if an earlier lesson is not merged yet.
   - Status should be `merge-ready` only if dependencies are already merged and full checks pass.
   - `Assets` must list `public/assets/lessons/L###/` and any audio inbox or draft locations used.
3. **Uploaded / pushed branch:** after pushing a task branch or any remote work for that lesson.
   - Update `Branch / Commit` to the pushed branch and short commit hash.
   - `Notes` must say whether it is only a branch/draft push or ready to merge.
Merge cleanup is separate from the three parallel-prep checkpoints. After the lesson enters `main` and `docs/CURRICULUM_LEDGER.md` is updated, remove the active row or change it to `merged` in the same cleanup commit. The registry must not keep stale active rows for lessons already merged into `src/curriculum/sample-lessons.json`.

If a thread cannot push the registry update, it must say so in chat and must not start large image/audio work as invisible parallel work.

Each parallel lesson thread must also state ownership in chat, for example:

```text
I am claiming L051:樣.
I own curriculum-workflow/lesson-requests/L051.json, curriculum-workflow/generated/L051-generation-packet.md, curriculum-workflow/audio-inbox/L051/, and public/assets/lessons/L051/.
I depend on L050:好 being merged first.
```

## Dependency Rules

- A later lesson may draft against provisional previous characters only when those characters are registered here or explicitly included in the user's lesson request.
- Review modules must use R### ids, not L### ids. They do not introduce new characters, do not use `newChars`, and do not advance the next new-character lesson number.
- After L060, the two review modules are R001 and R002. The next new-character lesson remains L061.
- Do not merge a later lesson while any `Depends On` row is not merged.
- If a dependency lesson changes its new character(s), every later row that listed it must move to `needs-rework` until rechecked.
- After each dependency merges, the later lesson thread must fetch/rebase and re-check `allowedChars`, `mustIncludeCharsAcrossLesson`, sentence text, image prompts, audio, and timings.

## Conflict Rule

This file is intentionally small and may be touched by several Codex threads. Before editing it:

```bash
git fetch origin
git status --short --branch
npm run curriculum:audit-state
```

If another thread changed the registry, rebase first and preserve both threads' rows. Do not delete another active row unless that lesson is already merged or the user explicitly cancels it.
