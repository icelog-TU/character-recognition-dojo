# L390 Production D package notes

Status: **partial-package**. Required phonetic acceptance is not established. Do not integrate this tip as an asset-complete package.

## Boundary and ownership

- Branch: `codex/l390-complete-package`; claimed and pushed before asset work.
- Base: `b313ded8ddae7844e4af667191c4bf2b0737ab59`. Final fetch: `3f1056012de99f2d2f3d12f84dee5025731fc700` (Production E/F documentation only; relevant role delta read).
- Direct `origin/main` curriculum remains L001-L375, latest 經, 379 learned Han; latest reviews R043/R044 after L360.
- Learner-character dependencies: L385-L389; provisional 字名第念號. Locked allowed set: 385 Han. Earlier playable lessons and R045/R046 remain Release blockers. L390→R047→R048→L391 is the next milestone; reviews are outside this package.
- No shipping curriculum, planner, ledger, application source or other worktree edited.

## Approved data

Request, packet and draft preserve all five approved texts, spokenText, displayLines, focusChar, imageNotes, four zhuyinOverrides and exact Stage 4 plans. Coverage: 數4、號2、念2、第2、名1、字1. Allowed/forbidden character checks, Han counts 11/10/10/9/10, line joining/width and target indexes pass.

G02 has no prefix, target index 0 and dedicated suffix `了三次還是少一本書`. G03 has three distinct single-Han options with one correct answer. G04 has four shuffled single-Han cards. G05 uses exact complete wrong sentences; no splicing.

## Images

Built-in imagegen generated each asset independently from the full L058 style contact sheet, refined examples and family anchors; S04 additionally used the actual Xiaoguang anchor. Approved imageNotes and imagePrompt are the stored prompt set. Originals remain outside Git; final images are 1024×1024 WebP, quality 78.

Actual exported WebPs were opened individually and in a contact sheet alongside all five L058 images, the five refined examples and relevant cast anchors:

- S01 style-lock PASS, cast PASS. Girl points to first blurred plate position beside father; parked car, no readable marks.
- S02 style-lock PASS, cast PASS. Girl still waiting with mother while another adult approaches the calling receptionist.
- S03 style-lock PASS, cast PASS. Matching book series, one visible gap, puzzled counting girl and mother.
- S04 style-lock PASS, cast PASS. Xiaoguang matches glasses/vest/shorts anchor; teacher distinct from mother; math tools and highest central podium. Initial generic girl resembled protagonist and was rejected. Targeted regeneration replaced her with braided hair, mint shirt and yellow shorts. Rejected version is not committed.
- S05 style-lock PASS, cast PASS. Father and girl count many sky stars on flat safe ground; night lighting remains readable.

Reuse decision: no existing image exactly expresses these approved scenarios. The inspected L347-S02 depicts girl/older brother seated at a porch, not father/girl counting in a clearing, so it was not reused. This comparison was recorded during production, not claimed as a completed pre-generation gate.

## Audio and reading evidence

Nine processed mono AAC/44100 Hz M4A files exist: standalone character, five sentences, one G02 suffix, two full wrong choices. Raw MP3 generation inbox remains local/ignored. TTS: standard OpenAI gpt-4o-mini-tts/coral, exact inputs; per-attempt instructions in `L390-tts-inputs.json`.

`L390-listening-evidence.json` contains independent gpt-audio-1.5 listening responses and SHA256 of the actual final audio supplied. Expected transcript/tone was not supplied. This is **AI listening evidence, not human auditory QA**. Its reliability limits and contradictory/omitted observations must not be hidden:

| Asset | Required reading | Final evidence / acceptance |
|---|---|---|
| char-u6578 | ㄕㄨˋ | Multiple exact-character generations still classified as 書/first tone; latest file classified first tone. Unresolved pronunciation blocker. |
| S01 | 數字 ㄕㄨˋ | Final transcript correct; final model responses omit a tone observation. Actual fourth tone not independently confirmed. Earlier superseded file was classified fourth tone. |
| S03 / G02 sentence replay | 數了 ㄕㄨˇ | Multiple exact-sentence generations, latest file classified fourth tone. Unresolved pronunciation blocker. |
| S04 | 數學 ㄕㄨˋ | Final-file AI listening classified fourth tone; complete final 名. |
| S05 / G05 correct | 數不完 ㄕㄨˇ | Final-file AI listening classified third/low-dipping tone; complete 完. |
| G05 wrong-two | 數不完 ㄕㄨˇ | Regenerated complete wrong sentence; final-file AI listening classified third/low-dipping tone. |
| G02 suffix | no target 數 | Final transcript `了三次還是少一本書`, complete final 書; no target duplication or empty prefix. |
| G05 wrong-one | no target 數 | Final transcript matches full approved text, complete final 完. |

All final audio files decode. G05 mean-volume spread 0.6 dB. No accepted alternative transcript, phoneme substitution, cut-out character audio or source-text changes were used to evade pronunciation checks.

Recommendation: Supervisor should resolve the two recurring pronunciation issues with a verified supported pronunciation-generation approach (or independently establish that the model listener is mistaken). Do not substitute the fourth-tone standalone file into G02. S01 needs explicit final tone confirmation. No asset-complete claim until these are resolved.

## Alignment and tail review

Final processed files passed Whisper text alignment, with documented simplified/Traditional equivalence normalization only. Raw transcription evidence is retained. Counts match every Han. Local SOP-authorized timing review redistributed S02 下一個 over original 2500–2800 ms (100 ms each), and G05 wrong-two 多得 over 1460–3020 ms (780 ms each). These are approximate timestamp-granularity repairs, not manual auditory synchronization PASS.

Only final detected silence was shortened, preserving 100–150 ms after -45 dB speech decay. No sentence endings, character clips or option splices were used. Sentence tail gaps are 241/266/209/234/254 ms; all spans 80–900 ms, ordered and within durations. See timing/tail reports.

## Browser QA scope

Local Vite fixture uses the final owned draft plus provisional metadata in memory; no shared production integration. Chrome, phone 390×844.

- Stage 1: visible non-overlapping 數/ㄕㄨˋ; first click enters playback and returns to completed state. Pronunciation remains blocked above.
- Stage 2: exactly three 數 and three old characters (車/的/號); observed 1/3, 2/3 and completion only after 3/3. A React `FindManyChallenge` setState-in-render console warning occurred despite correct visible completion; app source left to its owner.
- Stage 3: each of the five cards entered and left playback; visible initial per-Han highlights and context zhuyin overrides. All text fits phone width. Browser control does not provide audio listening to the agent; full audible synchronization and tail acceptance are not claimed as manual PASS.
- G01 accepted 數; G02 visibly displays 數 ㄕㄨˇ and answer `解答是「數」，念作ㄕㄨˇ。`. Source reads sentence overrides for that prompt and replays the full S03 file; dedicated suffix replay uses recorded target then suffix, not standalone charAudio.
- G02 click reaches the hold-to-record cue, but the exposed control has no persistent pointer-down/hold operation. Recording and stitched replay were not completed; no microphone permission was granted. Used the visible skip button to continue QA, not a fabricated completion.
- G03: three options 找/數/看, one blank, correct answer accepted; mobile sentence fits. G04: all four single-Han cards fill 下一個是 in order.

- G05: tapped all three animal readers; each entered playback and returned to idle. Phone layout and an 820×1180 viewport spot-check fit the sentence/options. This proves UI operation, not human auditory acceptance.
- Console also contained asynchronous listener/message-channel closure errors. No playback load error was observed. Temporary viewport override reset; local preview is not deployed.
- Completion/reward flow not certified: G02 was skipped for QA, and no complete lesson claim is made.

## Checks

PASS: tools:check; ai:check; curriculum:audit-state (expected unmerged asset-folder warning); curriculum:packet generation before restoring approved records; standard audio processing and AI alignment via owned-draft adapter; lesson-local format audit and production validator; mechanical audit, full audio decode, volume and size checks. Standard main `validate:production` also passes, but is not used as proof for L390.

Full verify skipped: dependency-blocked, no shipping production JSON integration; Release owns it. Pushed-ref package-intake must be run and reported; this partial status intentionally prevents acceptance.

Final media: images 780178 bytes; audio 380979 bytes; total 1161157 bytes. Every image under 250 KiB. Exact per-file sizes/durations in `L390-audit-report.json`.

Pre-merge preview must use full pushed SHA and be labeled **pre-merge package preview, not final main review queue**. Post-merge `ref=main` URLs are usable only after Release merges and deploys; not proof of current acceptance.
