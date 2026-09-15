# L376–L380 Package Rescue handoff

Branch: `codex/l376-l380-package-rescue`

All five packages are `dependency-blocked-asset-complete`. R045/R046 production is owned separately. Release must validate those prerequisites and integrate L376 → L377 → L378 → L379 → L380 in order against its current main. This branch does not update the formal curriculum, planner, ledger, or deployment.

## Required shared UI repair

Include commit `58a063d089d6f3c6a31d54a2159867bcdbad6461` before releasing these packages. Merely copying package assets omits the L379 clipping repair. Sentence text scales to its card width and can wrap at narrow sizes. Stage 2 completion now calls the parent outside the React state updater, after collecting the final target.

## Package repairs

| Unit | Repairs |
| --- | --- |
| L376 已 | Five sentence timings and G02/G05 metadata; excessive trailing silence removed; regenerate exact G02 suffix 經打通了. |
| L377 近 | Recheck existing package; repair G02 走 pronunciation and two sentence timing boundaries; refresh final metadata. |
| L378 接 | Restore missing G02 suffix 住 audio; complete sentence and G02/G05 alignment metadata. |
| L379 送 | Repair tail/timing boundaries and mobile clipping; complete G01–G05 and reward/next-lesson browser regression. |
| L380 連 | Deliver complete draft/request/packet and all assets; repair short timing intervals and G02 tail boundary. |

All approved sentence text, display lines, game design, standalone new-character audio, and 25 image files are preserved from the pinned source packages. Three regenerated raw MP3s are retained; final AAC and all 45 transcript-alignment records have SHA/duration/acoustic evidence in the per-unit rescue QA files. Superseded production notes are historical evidence only.

## Validation

- `npm run tools:check` and `npm run verify`: PASS (existing advisory warnings remain).
- In-memory ordered curriculum validation: 380 lessons PASS, no main file write and no fabricated review content.
- Per-unit strict asset formats: five images/ten audio files each, zero warnings.
- Per-unit production assets and strict package intake: all five PASS.
- Rescue audit: allowed characters, text/game/image preservation, packet parity, final hashes, AAC speech-packet preservation, 80–900 ms Han intervals, no overlap, and acoustic/metadata tails ≤300 ms PASS.
- `git diff --check`: PASS.
- Chrome: 55 audio controls / 50 unique files played to ended. L379 390×844 and desktop layout, G01–G05, reward and L380 navigation checked. Stage 2: no completion at 1/3 or 2/3; completion at 3/3.
- G02 uses a synthetic hold and oscillator microphone fixture with real MediaRecorder/replay. Physical phone/microphone and subjective teacher review are not claimed. Additional viewport overrides did not take effect; 320/820 px are not claimed.

Run the provided `L376-L380-rescue-audit.cjs` and `L376-L380-rescue-validate.cjs` from the repository root. The pipeline adapter invokes unchanged repository validation/media entry points on owned drafts in memory.

## Teacher review

Normal subjective review belongs to the post-main queue. After Release merges and deploys, use the [main asset review index](https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main) and `npm run asset:review-status -- --unit L### --ref main`. No new teacher approval is asserted by this rescue.
