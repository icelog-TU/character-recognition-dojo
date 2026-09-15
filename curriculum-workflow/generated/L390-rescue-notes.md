# L390 Package Rescue

Status: **partial-package**; pronunciation acceptance is pending. Not ready for Release.

- Source: `origin/codex/l390-complete-package` at `5659b5c99cd32e2d8954e7d861d2649fa28813c4`.
- Rescue: `codex/l390-package-rescue`, starting from that exact package commit.
- SOP authority: `origin/main` at `2169c169d62e6889534bbfd3de67c62f9d985684`; formal curriculum ends at L380.
- Scope: resolve standalone 數 fourth tone, S03 數了 third tone, and S01 數字 fourth tone acceptance. Preserve approved text and images.
- Initial strict intake: five images and nine audio files present; blocked by partial status and explicit pronunciation blocker records.
- Existing context overrides correctly specify S01[6]/S04[2] fourth tone and S03[0]/S05[7] third tone. Metadata correctness does not establish audio pronunciation.
- Original final files were presented for teacher listening, with required readings labeled separately. No teacher verdict received yet; no audio changed.
- Source browser QA is limited evidence as described in `L390-package-notes.md`; no new browser or physical-device completion is claimed.
- Earlier lessons remain Release dependencies. R047/R048 belong after L390 and before L391; their production is outside this rescue.

Raw Production listening history is preserved in `L390-listening-evidence.json`; responses include superseded audio and must be matched by SHA256 before use.

## Rescue technical checks (2026-09-16)

- `tools:check`, `curriculum:audit-state`: PASS (expected unmerged L390 asset-folder warning).
- `L390-audit.cjs`: PASS for approved text, request/draft consistency, character coverage, game structure, asset decoding and total size (1,161,157 bytes).
- Owned-draft adapter production validator and strict asset format audit: PASS, five images/nine audio references, zero format warnings.
- `npm run validate:production`: PASS for the branch's existing production JSON; this alone does not validate future L390 integration.
- All eight sentence/fragment timing records: full Han count, ordered indexes, no overlaps, 80–900 ms spans, first start below 500 ms, final timing-to-file gap no greater than 300 ms. G02 suffix and G05 option metadata match their referenced records.
- Fresh FFmpeg decode/silence/volume evidence: `L390-rescue-audio-evidence.json`. Nine files are mono AAC/44100 Hz; detected final silence 109–206 ms at -40 dB; means -18.8 to -17.7 dB, peaks -4.6 to -2 dB. G05 correct/wrong mean spread 0.6 dB.
- Audio SHA256 hashes are recorded so the pending teacher verdict can be tied to the exact supplied files. Inspection mode changed no media.
- Strict intake remains blocked by the documented pronunciation acceptance and partial status. No SOP change is presently needed; teacher listening can resolve an inaccurate AI tone assessment, or identify the specific assets to regenerate.
- `verify` skipped: dependency-blocked, shared state left for Release. No new browser QA is claimed by these technical checks.
