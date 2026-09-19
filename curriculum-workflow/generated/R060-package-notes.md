# R060 Production package

Status: dependency-blocked-asset-complete
Owner: Production D. Branch: codex/r059-r060-complete-package.
Claim commit: a430d6b385516ac198557edf11c3a424fe0f003d. Source main: 7d2827d50146a4a3a10ba2138b35b72802d497f8.

Review pair R059/R060 follows L480, covers L451-L480 across ten sentences, allowed ceiling 484 unique Han. No newChars, module-level zhuyin or charAudio. Release waits for R057/R058 and L466-L480; main integration is owned by Release.

## Package validation

Pair-local allowed-character, coverage, display lines, target indices, ordering, image format/size, AAC decode/volume, sentence timing counts/bounds and isolated validate:production: PASS. Five 1024-square WebP and nine mono 44.1kHz AAC/M4A per module. See R059-R060-technical-qa.json for hashes, sizes and per-image style/cast checks. Final exports were inspected beside L058, preferred examples and relevant cast anchors: all ten style/cast checks PASS.

## Browser QA

390x844 local isolated preview: both review modules expose two review stages; all five sentence play controls exercised, playing/highlight state observed; functional line breaks and no obstructing overlap. G01 correct selection, G03 correct missing card, G04 unsolved shuffled cards and correct-order acceptance, G05 all three readers and correct choice/reward transition exercised. Explicit pronunciation overrides visible (including 答應 vs 答案 and 事). R060 reward screen reaches 2/2; last-course next button disabled in the isolated fixture. Fixture uses a temporary order-480 launcher and is not included in production JSON.

Tool limitation: G02 press-and-hold microphone recording, ding and recorded-character concatenated playback require teacher/device verification; automation used the supported skip path after checking target and prefix/suffix setup. Browser state observations do not constitute human auditory approval. The final R060-S01 audio revision has technical/AI checks; teacher playback and perceived timing remain part of pre-merge review.

## Audio provenance and review limits

Whole utterances generated with gpt-4o-mini-tts; processed through assets:audio and assets:align:ai. Default voice coral; R059-S02, R059-S03 and both R059 G02 fragments use sage. G02 fragments were independently generated from exact fragment text; G05 distractors independently generated from full spokenText. No speech splicing. Only trailing near-silence trimmed with retained decay. Short suffixes normalized for audibility.

R060-S01 uses phonetic rendering input 搭應的事絕對不該忘記 to cue first-tone 答; approved text/spokenText remains 答應的事絕對不該忘記. Focused AI excerpt identified ㄉㄚ / ㄧㄥˋ. Full-clip AI phonetic transcriptions are inconsistent and retained as diagnostic evidence, not authoritative human listening approval. Teacher should particularly listen to 星期/突然/其實/答應/答案, R059 G05 wording, R060 花草 and both short G02 suffixes.

Raw MP3 stays in ignored curriculum-workflow/audio-inbox/. Final M4A, images and alignment records included. No production JSON, planner data, ledger or shared scripts changed. Full verify skipped: dependency-blocked, shared state left for Release. Pair-local production validation performed; no unrelated full-library media sweep.
