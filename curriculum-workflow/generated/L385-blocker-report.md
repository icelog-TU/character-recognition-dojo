# L385 Partial Package Handoff

Production B. Status: partial-package. Do not integrate.
Base: 250ca4a3361a15104ba19158bb1b0710dac43ecc, re-fetched unchanged.
Dependencies: L380/L381/L382/L383/L384; provisional chars: 連/傳/相/信/寫.

## Hard Gate

The dedicated G02 prefix input is exactly `這個`. Four independent OpenAI TTS generations failed repository Whisper alignment, with transcripts `許一個`, empty, `格`, and `秋花`. A third-attempt diagnostic of raw MP3 versus processed M4A returned `J個` versus `J格`; processing is not established as the cause. This may be short-audio recognition failure rather than a pronunciation defect, but neither a listening PASS nor valid timing metadata has been established. Do not replace ASR text with the expected phrase, splice sentence audio, or fabricate timings. Preserve the approved fragment.

Five sentence ASRs matched the expected text after simplified/traditional orthographic normalization. Alignment aborts at the prefix before writing the final draft; sentence and Stage 4 final timings are therefore missing. Observed sentence end gaps were 1113/464/791/511/556 ms respectively and need investigation before final tail validation. All ten M4A files are candidates, not accepted final audio.

## Completed / Remaining

- Startup fetch, clean worktree, ownership, tools:check, ai:check and curriculum:audit-state: PASS.
- Registry claim committed and pushed before asset work.
- Approved request, packet, draft and supported Stage 4 correct metadata written. Initial allowed, coverage, display-line and index checks passed.
- Coverage: 字4, 寫3, 信2, 相2, 傳2, 連1.
- Repo audio generation and normalization completed for ten candidates, including standalone 字, five sentences, two G02 fragments and two G05 wrong choices.
- AI alignment: failed at G02 prefix. Final audio tail, timing, volume-spread and mobile playback gates remain incomplete.
- S01-S04 original images generated and visually inspected at original resolution, but final WebP style/cast acceptance has not run. S05 not generated. No rejected or unaccepted PNG is committed under public assets.
- All five final WebP paths currently missing. Phone-width Stage 3/4 QA not run. No browser-failure exemption claimed.
- Production JSON, planner, ledger unchanged. Full shared-state verify skipped; dependency-blocked integration belongs to Release.

## Local Image Recovery

Original PNGs remain under `C:/Users/User/.codex/generated_images/01a0290e-12a2-7581-9556-89630e267a80/`:

- S01: exec-4d41484f-298e-49fa-8d33-d5c3836fca19.png
- S02: exec-eff1bc15-5e8f-401a-a469-365aa1d4336e.png
- S03: exec-d92310e7-b79d-4e14-95ab-fe8020bddc59.png
- S04: exec-67ae87ff-edf6-4cde-9106-41b54c074d7e.png

Reference sheet: worktree `tmp/L374/reference-sheet.webp`. Raw MP3 candidates remain in ignored `curriculum-workflow/audio-inbox/L385/`. Latest diagnostic transcripts remain in ignored `tmp/L385/transcripts/`. These local originals are not portable branch deliverables.

The package must pass lesson-local validators and remote package-intake after repair before changing status to asset-complete.
