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
| L105 | 過 | ready-blocked-by-dependency | Codex | `codex/l105-guo-assets` / `326d5d7` | L103:難, L104:得 | none | `curriculum-workflow/lesson-requests/L105.json`; `curriculum-workflow/generated/L105-generation-packet.md`; `curriculum-workflow/drafts/L105-draft.json` | `public/assets/lessons/L105/` | Branch-only assets; blocked until L103-L104 enter production. |
| L106 | 分 | ready-blocked-by-dependency | Codex | `codex/l106-fen-assets` / `ebae623` | L101:圓, L102:太, L103:難, L104:得, L105:過 | 過 | `curriculum-workflow/lesson-requests/L106.json`; `curriculum-workflow/generated/L106-generation-packet.md`; `curriculum-workflow/drafts/L106-draft.json` | `public/assets/lessons/L106/` | Branch-only assets; blocked until dependencies enter production. |
| L107 | 幾 | ready-blocked-by-dependency | Codex | `codex/l107-ji-assets` / `a151865` | L102:太, L103:難, L104:得, L105:過, L106:分 | 過, 分 | `curriculum-workflow/lesson-requests/L107.json`; `curriculum-workflow/generated/L107-generation-packet.md`; `curriculum-workflow/drafts/L107-draft.json` | `public/assets/lessons/L107/` | Branch-only assets; blocked until dependencies enter production. |
| L108 | 點 | ready-blocked-by-dependency | Codex | `codex/l108-dian-assets` / `4f8ea1f` | L103:難, L104:得, L105:過, L106:分, L107:幾 | 過, 分, 幾 | `curriculum-workflow/lesson-requests/L108.json`; `curriculum-workflow/generated/L108-generation-packet.md`; `curriculum-workflow/drafts/L108-draft.json` | `public/assets/lessons/L108/` | Branch-only assets; blocked until dependencies enter production. |
| L109 | 玩 | claimed | Codex | `codex/l109-wan-assets` / `2cd6c6e` | L104:得, L105:過, L106:分, L107:幾, L108:點 | 過, 分, 幾, 點 | pending | pending | Branch-only claim; assets not yet prepared. |
| L110 | 打 | ready-blocked-by-dependency | Codex | `codex/l110-da-assets` / `cab414d` | L105:過, L106:分, L107:幾, L108:點, L109:玩 | 過, 分, 幾, 點, 玩 | `curriculum-workflow/lesson-requests/L110.json`; `curriculum-workflow/generated/L110-generation-packet.md`; `curriculum-workflow/drafts/L110-draft.json` | `public/assets/lessons/L110/` | Branch-only assets; blocked until dependencies enter production. |
| L111 | 球 | claimed | Codex | `codex/l111-qiu-assets` / `d8ea8d5` | L105:過, L106:分, L107:幾, L108:點, L109:玩, L110:打 | 過, 分, 幾, 點, 玩, 打 | `curriculum-workflow/lesson-requests/L111.json`; `curriculum-workflow/generated/L111-generation-packet.md`; `curriculum-workflow/drafts/L111-draft.json` | `curriculum-workflow/audio-inbox/L111/`; `public/assets/lessons/L111/` | L111 sentence 3 uses 過, so L105 is recorded as an indirect provisional dependency; branch-only until dependencies enter production. |

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
