# Parallel Lesson Registry

This file is the shared coordination board for parallel lesson production.

Use this file only for **not-yet-merged** lesson work. The source of truth for merged curriculum remains:

- `src/curriculum/sample-lessons.json`
- `docs/CURRICULUM_LEDGER.md`

When the teacher wants to prepare 2-3 lessons at the same time, register each active lesson here before generating assets.

## Active Parallel Lessons

| Lesson | New Character(s) | Status | Owner / Thread | Branch / Commit | Depends On | Provisional Learned Chars | Request / Packet | Assets | Notes |
|---|---|---|---|---|---|---|---|---|---|
| _none_ |  |  |  |  |  |  |  |  | Add a row before starting parallel lesson work. |

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
2. Add or update exactly one row for the lesson this thread owns.
3. Fill `New Character(s)` as soon as the teacher chooses the character.
4. If a prior lesson is not merged, list it in `Depends On`, for example `L050:來`.
5. Put those not-yet-merged characters in `Provisional Learned Chars`.
6. Commit and push the registry update before starting large image/audio work when possible.

Each parallel lesson thread must also state ownership in chat, for example:

```text
I am claiming L051「到」.
I own curriculum-workflow/lesson-requests/L051.json, curriculum-workflow/generated/L051-generation-packet.md, curriculum-workflow/audio-inbox/L051/, and public/assets/lessons/L051/.
I depend on L050「來」.
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
```

If another thread changed the registry, rebase first and preserve both threads' rows. Do not delete another active row unless that lesson is already merged or the user explicitly cancels it.
