# L390 Package Rescue completed

Status: **asset-complete-package**.

- Source: origin/codex/l390-complete-package at 5659b5c99cd32e2d8954e7d861d2649fa28813c4.
- Rescue: codex/l390-package-rescue.
- Latest checked origin/main: 2be6834d0e35978cc417da5721dbd891e8974948, formal curriculum through L389.
- All declared learner dependencies L385-L389 are now on main. Removed satisfied dependency/provisional entries from request, draft and registry; locked approved allowed-character set and lesson content remain unchanged.
- R047/R048 follow L390 and precede L391. They are not a prerequisite for integrating L390.

## Teacher acceptance, 2026-09-16

The teacher listened to the three unchanged files and replied: **「這三段都正確，不用改了」**.

1. Standalone 數: ㄕㄨˋ, fourth tone — PASS.
2. S03 數了三次，還是少一本書: initial 數 ㄕㄨˇ, third tone — PASS.
3. S01 車號的第一個數字怎麼念: 數字 ㄕㄨˋ, fourth tone — PASS.

Exact SHA256 values and review scope are in L390-teacher-audio-review.json. This human verdict resolves the three Production AI-listener concerns. Raw AI results remain in L390-listening-evidence.json, including superseded takes and contradictory observations; they were not rewritten as human evidence.

## Change boundary

No audio regeneration, trimming, image changes, sentence changes, timing changes, or pronunciation-override changes. All fourteen final audio/image files match the source package bytes. Only review/status/dependency metadata and handoff records changed. No main integration or deployment.

## Technical verification

- Source-preservation assertions: fourteen assets unchanged; teacher verdict hashes match displayed files.
- Five sentence timing arrays and all G02/G05 alignment records are retained. Prior rescue check: complete Han counts, ordered indexes, no overlaps, spans 80–900 ms, first start below 500 ms and timing-to-file final gap ≤300 ms.
- L390-rescue-audio-evidence.json: all nine files decode as mono AAC/44100 Hz, final detected silence 109–206 ms, mean levels -18.8 to -17.7 dB, peaks -4.6 to -2 dB; G05 mean spread 0.6 dB.
- Required final tools:check, validate:production, owned-draft validator/strict asset audit, HEAD and pushed-ref strict intake, and git diff --check are reported with the final pushed handoff. The existing production JSON validator alone is not proof of future L390 integration.
- Full verify skipped: this source-based package checkout retains its original shipping JSON through L375. Current-main integration verification belongs to Release, even though current main already satisfies L390's learner dependencies.

## Browser evidence retained

Production browser playback, layout, highlight and game checks remain valid evidence for unchanged content. G02 has a recorded browser-control hold/record/replay limitation; no new physical-device, full recording, or reward QA is claimed by this teacher response. The formal Package Rescue SOP permits the documented Production tooling fallback. Exact scope is retained in L390-package-notes.md. The teacher verdict covers only the three requested pronunciation questions.

No SOP modification or Supervisor escalation is needed. Release should use the pushed rescue branch and rerun intake before integration.
