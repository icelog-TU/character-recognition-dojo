# L400 Production QA

- Source boundary: 23cae19103e760f23700f5ff90d72fbd2e59bfc6, formal L001-L390; fetched again before handoff.
- Learner dependencies: L395/L396/L397/L398/L399; provisional 印/單/雙/選/或. Release sequence also needs R047/R048 after L390 and L391-L399.
- Shared production JSON was used only as a temporary isolated generation/playback fixture and restored byte-for-byte before commit. Planner and ledger are Release-owned.
- Normal one-character lesson 者, not a two-character word lesson. No word cards or word audio.

## Images
Final 1024x1024 WebP exports were opened individually and compared to full L058 style sheet, refined L115-S01/S02, L118-S02, L119-S01, L128-S03, and family anchors L154-S01, L162-S04, L163-S02.
- S01 style-lock PASS, cast PASS. Left court two players (one per side), right court four (two per side); recurring father and girl outside courts.
- S02 style-lock PASS, cast PASS. Separate flower/tree example sheets, blank pupil sheet; ponytailed teal-clad teacher distinct from mother.
- S03 style-lock PASS, cast PASS. Three distinct generic professionals; safe extinguished site without active fire or casualty.
- S04 style-lock PASS, cast PASS. Only teacher-authorized image text Lily, small separate author line; girl's finger indicates it. No Lily in learner text or audio.
- S05 style-lock PASS, cast PASS. One hat off head, both hands grip brim at chest; mother/girl/grass wind direction agrees.
- S05 initial draft had mother's loose hair blowing the opposite direction. Edited with built-in imagegen; rejected version not shipped. No rejected style/cast drafts.
- Built-in imagegen; final image prompts stored in draft. Source PNGs remain outside public assets.
- Image sizes: 160518 / 150816 / 217562 / 193334 / 212828 bytes. Full asset folder: 1328092 bytes.

## Audio And Alignment
- Ten independently generated OpenAI gpt-4o-mini-tts inputs: five exact spokenText, standalone 者, exact G02 prefix/suffix, and two complete wrong-option sentences.
- Final voices: cedar for standalone 者; nova for S05 and both G05 near misses; coral for S01-S04 and G02 fragments. No cross-file splicing or target extraction.
- Standalone cedar input was the single character 者, with explicit third-tone pronunciation instruction; independent blind model listening identified dipping third tone. 1656 ms.
- G02 prefix input 這本書上印著作; full-sentence pronunciation context supplied without adding context to speech input. Independent model heard final zuo fourth tone and no extra target 者.
- G02 suffix input 的名字. Whisper and separate unprompted gpt-4o-transcribe identified all three characters.
- Regenerated short audio when model tone/transcript concerns arose. Model-listening evidence retains earlier attempts and SHA256 hashes; only hashes matching shipped audio describe final assets.
- AI listening is NOT human/teacher approval. Short-fragment models disagree on written homophones: the prefix was also guessed as 坐/做 and by another ASR as 字; the word-context alignment and independent phonetic observation support 作 (zuo4). The suffix also produced low-confidence guesses in the conversational audio model; two transcription engines identified 的名字. These observations are retained, not rewritten as unanimous model agreement.
- Trailing silence only removed from sentence/game source recordings with 180 ms safety margin, then processed again using assets:audio. Standalone character was never sliced from other speech.
- AI alignment run on all nine non-character final M4A files using assets:align:ai, with optional context prompt 這本書上印著作. Strict expected-text equality remains enabled; no same-sound character mapping added.
- Shared alignment update adds only simplified/traditional equivalents 選/單/雙/記/樹/風 and optional transcription prompt. Shared TTS update adds optional instructions, prefix context and explicit isolated third-tone guidance. Release should inspect these two small shared-script changes.
- Two sub-80 ms AI spans smoothed: S04 的/名 boundary moved 3160 to 3120 ms; S05 別 start moved 1980 to 1900 ms (correct G05 copy synchronized). No audio changed by timing adjustment. All final timing spans 80-900 ms, nonoverlapping, within duration; final tails <=300 ms.
- assets:audit --lesson L400 --strict: PASS, five images and ten audio sources, zero warnings. All M4A AAC mono 44100 Hz decode, duration and loudness checks pass.
- Production asset validator and lesson-local package audit PASS. Allowed set 400; coverage 者4/或2/選2/雙2/單1/印1; approved records/lines/indexes/paths/timings agree.

## Browser QA
Local isolated L400 fixture at 390x844 in Codex in-app browser. Stage 1 character/zhuyin readable and character playback completed. Stage 3 all five sentence audio buttons played to completion; app displayed 句子都聽完了. G02 prefix reached target red-frame 者 and press-hold prompt. G03 three distinct single-Han options and correct choice worked. G04 或/者/畫/樹 cards separately accepted in correct order.
Physical microphone hold/record/replay and physical-device speaker quality are not claimed as tested. Teacher subjective image/audio review remains post-main. No pre-main teacher signoff is implied.
G05 all three option buttons played to completion (UI returned from playback to lesson state after each); no browser warning/error logs. Stage 2 and final reward navigation were not part of this package-local playback pass; no application/completion-flow code was changed.
