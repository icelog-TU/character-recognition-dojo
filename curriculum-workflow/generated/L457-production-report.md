# L457 Production E delivery

Status: `dependency-blocked-asset-complete`.

L457 introduces `實` ㄕˊ. Its vocabulary ceiling is exactly the 447 characters in `origin/main` L001-L443 plus teacher-approved provisional `候演表現突` and new `實`, for 453 unique Han. The five approved sentences and fixed Stage 4 plan are unchanged. Production did not edit production curriculum JSON, planner data, ledger data, or Release ordering.

## Visual acceptance

All five final 1024-square WebPs were opened as a contact sheet and compared with the L058 style sheet plus refined and family/cast references. Style, cast, scene meaning, phone readability, and the no-readable-text rule pass. S04's first generated version changed the fixed father's clothes to orange sportswear and gave the girl an unnecessary bag; it was rejected and replaced with the fixed blue-shirt/tan-trouser father and pink-cardigan/navy-skirt girl. Rejected drafts remain outside shipping assets.

S01 is a distinct generic young adult on a professional film set with a wordless past-wish memory. S02 clearly centers the girl's hands, one fresh fruit and one clean small hole. S03 shows the healthy father making a playful face in a clinic waiting area. S04 shows a low intact supported bridge and safe reassurance. S05 remains clear at night and shows the girl waking toward the barking family dog without horror content.

## Audio and timing

The package contains standalone `實`, five full sentence clips, two dedicated G02 fragments, and two complete G05 distractor clips. Files use OpenAI `gpt-4o-mini-tts` coral followed by the repository AAC pipeline. No audio is spliced.

The first `現了` fragment was rejected after transcription produced `羨慕`; the complete fragment was regenerated. Final Whisper writes the homophonic `限了`, while independent gpt-audio confirms the actual two syllables are ㄒㄧㄢˋ ˙ㄌㄜ with no added `實`. S05 and both G05 distractors were regenerated as complete sentences to lock `突然` to ㄊㄨˊ ㄖㄢˊ. Final targeted auditory checks pass standalone `實` ㄕˊ, `實現` and `果實` ㄕˊ, S04 `結實` ㄐㄧㄝ ˙ㄕ, the G02 fragments, and all G05 options. AI review is not human acceptance.

Every sentence, G02 fragment, and wrong-choice clip has final per-Han timing metadata. The correct G05 choice reuses the final S05 audio and timing.

## Browser QA and limit

Browser QA fallback applies because the remote control surface has no reliable computer-audio return or physical-phone microphone channel. Human continuous listening, syllable-by-syllable highlight synchronization, and G02 recording/replay are not claimed. The required non-browser media, decode, transcript, timing, allowed-character, format, and package checks are the release evidence. Teacher subjective review remains post-merge by default.

## Dependency state

Base and latest checked main were `5622c827569df36e09c1767d61f114b35973bbea`, with formal production through L443. Direct declared dependencies are L452-L456. Ordered integration also remains behind L444-L451 and the R055/R056 milestone pair after L450. Release owns dependency recheck and integration.


## Validation

- Allowed-character and coverage audit: PASS.
- Package-local production asset validation: PASS.
- Package-local strict format audit: PASS, zero warnings; 5 images and 10 audio files.
- Folder size: 1134104 bytes.
- Full curriculum validation is deferred to Release because L444-L456 are not yet all integrated.

## Pushed intake evidence

Immutable asset commit: `d7d37c780aa739cc2b32bd207d10be0acc3df14f`. `npm run curriculum:package-intake -- --unit L457 --ref origin/codex/l457-complete-package --strict` passed with 5 images, 10 audio files, canonical five-game order, complete G02 timing metadata, and no warning.


## Teacher repair 2026-09-18

Review ref 7d59861cf9ae23b54117af59ee2a0c7caa20ae4a reported two defects. S02's artificial black apple hole was replaced with a small irregular opening that visibly exposes creamy white apple flesh. S04 was regenerated as a complete sentence; final targeted auditory review confirms 放心 ㄈㄤˋ ㄒㄧㄣ and 結實 ㄐㄧㄝ ˙ㄕ. The repaired S04 final M4A was re-transcribed and re-aligned. Renewed teacher review is required on the new immutable commit.


## Repaired pushed intake evidence

Repaired asset commit: 22f8478f978409b87f9b91b988d73c9103cbae0. Strict package intake passed with 5 images and 10 audio files. Renewed teacher review is pending on this immutable ref.

## Second S04 audio repair

At review ref 6383c53441e13c94ef1d9b8c58244643215fa30f, the teacher confirmed the S02 image is OK and reported that S04 木橋 sounded clipped as mu橋. Three complete-sentence candidates were generated; all passed targeted AI review, and candidate 1 was selected. The final processed M4A independently passes 木橋 ㄇㄨˋ ㄑㄧㄠˊ with a complete rounded ㄨ and falling fourth tone, plus 結實 ㄐㄧㄝ ˙ㄕ and 放心 ㄈㄤˋ ㄒㄧㄣ. Final transcript and timings were regenerated. The teacher accepted the repaired S04 audio at ref fff405c18fac57bfd63afdb1390efa0b232d7aaa. This acceptance is scoped to S04 audio; live highlight synchronization and G02 phone recording/replay remain unverified.

## Second repair pushed intake evidence

Second S04 repair asset commit: 7989c873782a84a8b78b9e2cd480189022317005. Strict package intake passed with 5 images and 10 audio files. Teacher audio review PASS at fff405c18fac57bfd63afdb1390efa0b232d7aaa for the repaired S04 audio.
