# Parallel Lesson Registry

This file is the shared coordination board for parallel lesson production.

Use this file only for **not-yet-merged** lesson work. The source of truth for merged shipping curriculum is:

- `src/curriculum/sample-lessons.json`

`docs/CURRICULUM_LEDGER.md` is the required human-readable merged summary and must be kept synced, but it does not override production JSON.

See `docs/CURRICULUM_OPERATING_SOP.md` for the complete multi-thread workflow. In short: this registry coordinates provisional work, but production shipping still happens through one ordered release lane.

When the teacher wants to prepare 2-3 lessons at the same time, register each active lesson here before any real work starts. This registry is mandatory coordination state, not optional notes.

## Active Parallel Lessons

| Lesson | New Character(s) | Status | Owner / Thread | Branch / Commit | Depends On | Provisional Learned Chars | Request / Packet | Assets | Notes |
|---|---|---|---|---|---|---|---|---|---|
| L060 | 去 | request-ready | Codex thread L060 去 | codex/l060-qu @ local | none | none | `curriculum-workflow/lesson-requests/L060.json`; `curriculum-workflow/generated/L060-generation-packet.md`; `curriculum-workflow/drafts/L060-draft.json` | `public/assets/lessons/L060/`; `curriculum-workflow/audio-inbox/L060/` | Request/packet created and hard-checked. L059 起 is already merged on origin/main. |
| L061 | review lesson 1 | claimed | Codex L061-L062 review thread | pending | L060:去 | 去 | curriculum-workflow/lesson-requests/L061.json / curriculum-workflow/generated/L061-generation-packet.md | public/assets/lessons/L061/ | First review pair after L060; covers L001-L030 together with L062. Do not merge until L060 is merged and review lesson flow is production-ready. |
| L062 | review lesson 2 | claimed | Codex L061-L062 review thread | pending | L060:去 L061:review | 去 | curriculum-workflow/lesson-requests/L062.json / curriculum-workflow/generated/L062-generation-packet.md | public/assets/lessons/L062/ | Second review lesson in the first pair; pair-level coverage must be checked before either lesson ships. |

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
3. Before creating request files, generating packets, images, audio, or editing lesson JSON, add or update exactly one row for the lesson this thread owns.
4. Fill `New Character(s)` as soon as the teacher chooses the character.
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
