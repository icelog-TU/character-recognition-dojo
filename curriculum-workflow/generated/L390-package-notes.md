# L390 current package handoff

Status: **asset-complete-package**. Source Production report is preserved at 5659b5c99cd32e2d8954e7d861d2649fa28813c4 at this path; current acceptance supersedes its three pronunciation questions.

Teacher manual audio review PASS: standalone 數 fourth tone, S03 數了 third tone, S01 數字 fourth tone. No media was changed. See L390-teacher-audio-review.json and L390-rescue-notes.md for hashes and final checks.

Latest main 2be6834d0e35978cc417da5721dbd891e8974948 includes all L385-L389 dependencies. R047/R048 follow L390, before L391. Shared release state is left to Release.

## Images

Built-in imagegen generated each asset independently from the full L058 style contact sheet, refined examples and family anchors; S04 additionally used the actual Xiaoguang anchor. Approved imageNotes and imagePrompt are the stored prompt set. Originals remain outside Git; final images are 1024×1024 WebP, quality 78.

Actual exported WebPs were opened individually and in a contact sheet alongside all five L058 images, the five refined examples and relevant cast anchors:

- S01 style-lock PASS, cast PASS. Girl points to first blurred plate position beside father; parked car, no readable marks.
- S02 style-lock PASS, cast PASS. Girl still waiting with mother while another adult approaches the calling receptionist.
- S03 style-lock PASS, cast PASS. Matching book series, one visible gap, puzzled counting girl and mother.
- S04 style-lock PASS, cast PASS. Xiaoguang matches glasses/vest/shorts anchor; teacher distinct from mother; math tools and highest central podium. Initial generic girl resembled protagonist and was rejected. Targeted regeneration replaced her with braided hair, mint shirt and yellow shorts. Rejected version is not committed.
- S05 style-lock PASS, cast PASS. Father and girl count many sky stars on flat safe ground; night lighting remains readable.

Reuse decision: no existing image exactly expresses these approved scenarios. The inspected L347-S02 depicts girl/older brother seated at a porch, not father/girl counting in a clearing, so it was not reused. This comparison was recorded during production, not claimed as a completed pre-generation gate.


## Audio and timing

All nine source audio files and all timing/context-zhuyin metadata are preserved. Teacher review resolves the three original AI tone questions; raw listening/transcription evidence remains unchanged. Existing technical QA and its timing-review limits remain documented in L390-timing-review.json and L390-rescue-audio-evidence.json. All assets total 1,161,157 bytes.

## Browser QA scope

Local Vite fixture uses the final owned draft plus provisional metadata in memory; no shared production integration. Chrome, phone 390×844.

- Stage 1: visible non-overlapping 數/ㄕㄨˋ; first click enters playback and returns to completed state. Standalone pronunciation accepted by the teacher in the rescue review.
- Stage 2: exactly three 數 and three old characters (車/的/號); observed 1/3, 2/3 and completion only after 3/3. A React `FindManyChallenge` setState-in-render console warning occurred despite correct visible completion; app source left to its owner.
- Stage 3: each of the five cards entered and left playback; visible initial per-Han highlights and context zhuyin overrides. All text fits phone width. Browser control does not provide audio listening to the agent; full audible synchronization and tail acceptance are not claimed as manual PASS.
- G01 accepted 數; G02 visibly displays 數 ㄕㄨˇ and answer `解答是「數」，念作ㄕㄨˇ。`. Source reads sentence overrides for that prompt and replays the full S03 file; dedicated suffix replay uses recorded target then suffix, not standalone charAudio.
- G02 click reaches the hold-to-record cue, but the exposed control has no persistent pointer-down/hold operation. Recording and stitched replay were not completed; no microphone permission was granted. Used the visible skip button to continue QA, not a fabricated completion.
- G03: three options 找/數/看, one blank, correct answer accepted; mobile sentence fits. G04: all four single-Han cards fill 下一個是 in order.

- G05: tapped all three animal readers; each entered playback and returned to idle. Phone layout and an 820×1180 viewport spot-check fit the sentence/options. This proves UI operation, not human auditory acceptance.
- Console also contained asynchronous listener/message-channel closure errors. No playback load error was observed. Temporary viewport override reset; local preview is not deployed.
- Completion/reward flow not certified: G02 was skipped for QA, and no complete lesson claim is made.


## Release checks

Use codex/l390-package-rescue after the required pushed-ref strict intake. See final rescue handoff for the exact full SHA and check results. No new browser or full physical-device test is claimed by the teacher's three-clip approval.
