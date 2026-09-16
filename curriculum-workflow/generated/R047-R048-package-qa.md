# R047 / R048 package QA

## Scope and boundary

Production D; same pair branch codex/r047-r048-complete-package. Latest fetched main 23cae19103e760f23700f5ff90d72fbd2e59bfc6 contains L001-L390 and R045/R046. No remaining lesson dependency; preserve playable order L390 → R047 → R048 → L391 and L390 vocabulary ceiling. Reviews have no newChars, top-level zhuyin or charAudio.

## Approved data / technical checks

Final request/draft data mechanically compared with committed approved handoff 1bc94a41. Text, spokenText, displayLines, focusChar, imageNotes and pronunciation overrides agree. Allowed 394 Han; 31/31 pair coverage; 朋友 whole-word count 2. Five standard game types and one use of each sentence per review. G03 has three distinct single-Han choices and one correct answer. G04 cards and index mapping checked. All 18 final AAC/M4A files decode, mono 44100 Hz; timings present for every sentence and dedicated G02/G05 audio. G05 mean-volume spread: R047 0.5 dB, R048 1.0 dB. Unit-local production and format validators pass, zero format warnings.

## Teacher decision on R047-G02

Teacher listened and explicitly accepted the current suffix:「複習課 R047 G02 的那個音檔是沒有問題的，這樣就可以了」. Scope is this fragment only, not a blanket review of the pair. SHA256 6ab9d349e6b26729adcc6b1dc9a6d58d6920a9fc9c559ec4859c59d61edcc999. Exact TTS input and curriculum remain 地送來一盒點心. No 的 substitution and no audio replacement after approval. Fresh context-assisted Whisper timestamps cover seven syllables; raw output retained. Automated phonetic disagreement is preserved, with the teacher decision controlling acceptance. Final speech endpoint 2041ms, file 2496ms: 455ms trailing pause in this accepted dedicated teach suffix is retained, with no artificial timing extension into silence. Sentence and G05 tails meet the sentence-tail rule.

## Images and reuse

All ten final WebP images opened and compared against full L058 style anchors, refined L115/L118/L119/L128 references and relevant family/teacher/Xiaoyue/Xiaoguang cast anchors. All square 1024×1024. Reuse decision: no existing asset matched these exact approved scenes and states, so all ten were generated.

- R047-S01: style-lock PASS; cast PASS.
- R047-S02: style-lock PASS; cast PASS.
- R047-S03: style-lock PASS; cast PASS.
- R047-S04: style-lock PASS; cast PASS.
- R047-S05: style-lock PASS; cast PASS.
- R048-S01: style-lock PASS; cast PASS.
- R048-S02: style-lock PASS; cast PASS.
- R048-S03: style-lock PASS; cast PASS.
- R048-S04: style-lock PASS; cast PASS.
- R048-S05: style-lock PASS; cast PASS.

Rejected drafts were not submitted: R047-S01 hands corrected to receive flower; R047-S03 teacher-reported double/damaged coat replaced (girl wears only cream shirt, mother holds one intact pink coat); R048-S01 initial landscape replaced by square composition. Xiaoyue and Xiaoguang remain distinct. R048-S04 uses generic father/toddler, not recurring cast. Only R048-S01 has the approved readable route digit 1.

## Image prompt record

Scene prompts: exact approved imageNotes in each request. Shared generation constraints: square 1:1; match full L058 pencil/watercolor texture, warm light, bright clean detailed setting and stable child proportions; refined style references and exact recurring cast anchors; no text/logos/numbers except approved route digit 1. R047-S03 correction: remove the girl’s worn outer coat entirely, intact cream long-sleeve shirt only; mother holds one separate intact pink coat; girl prepares to put it on. Final source paths are recorded in R047-R048-image-sources.json.

## Audio and browser evidence

Standard OpenAI whole-text audio generated independently for sentences, teach fragments and wrong choices; no character audio for reviews and no splicing. Independent AI listening is recorded as AI evidence, not human listening. R048-S04 and G05 wrong-two report 數數 as shǔ shù; overrides index 7 ㄕㄨˇ and 8 ㄕㄨˋ preserved. Raw transcripts and final-audio hashes retained.

Browser fixture: localhost:5175, with owned drafts supplied in memory; no shipping app or production JSON edited. R048 five sentences observed playing and completion reached; mobile 390×844 layout and both 數 pronunciations displayed. R047 five sentences observed playing; four-line S05 mobile layout is clear, current-character highlight visible. G02 recording/replay is not certified: supported browser API lacks sustained press/hold; instantaneous click cannot establish a controlled spoken recording. A later state reached Next but no verified captured utterance/replay exists. Browser also produced a CDP Runtime.evaluate timeout and a detached-node error; recovered UI navigation. Do not interpret these as asset defects or claim full manual playback/highlight synchronization QA. Technical-gate browser fallback applies under CURRICULUM_PRODUCTION_SOP. Teacher subjective whole-pair review remains post-merge.

## Asset sizes

- R047: images 825050 bytes; audio 402933 bytes; total 1227983 bytes.
- R048: images 829134 bytes; audio 359660 bytes; total 1188794 bytes.

## Release checks

Full shared-state verify is left to Release because these review drafts are deliberately not integrated into shipping curriculum. Each unit must pass HEAD and pushed-ref package intake before the final report. Local helper ENOBUFS when reading large production JSON was corrected by increasing the read buffer to 30MB; the corrected boundary audit passes.

Additional UI checks: both G03 screens show three choices; both G01 correct finds and G04 completion work. R047 G04 initially shuffled into correct order; input card presentation order adjusted only, retaining approved IDs/text/correctOrder. Shipping shuffle now produces 幫/的/他/忙 (see R047-G04-shuffle-check.json). Both G05 sets were clicked individually and playback UI started; this is UI evidence, not live human listening.
