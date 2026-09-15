# L370 Release Notes

- Source package: codex/l370-complete-package at e88dbe1dbd99b426344f6d72e3e7e86a48aece36.
- Integration base: origin/main 7e630478; only intended L370 files transplanted. No package-branch merge.
- Two-character pilot: one lesson order, title 朋友, newChars 朋 and 友, separate zhuyin and charAudio. Both enter the learned-character pool together.
- Release-side metadata repair: copied approved imageNotes into required imagePrompt for all five sentences, synchronized request, packet, draft, production and planner. No sentence or media changes.
- Package intake PASS; strict format audit PASS (5 images, 11 audio files); npm run verify PASS. Existing lint warnings remain unrelated to this lesson. Existing 369 lessons and 44 reviews unchanged.
- Stage 4 canonical order and single-Han targets checked. G03 has three distinct options: 朋, 明, 月.
- Local browser smoke: 390x844 Stage 1 shows both characters and zhuyin without overlap; one L370 course-grid entry. G05 answer/retry/selection and reward claim exercised using isolated local test progress, not cloud records.
- Completion smoke at 390x844 and 768x1024: return-home control visible without footer obstruction. L370 is the current boundary, so next-lesson control correctly shows disabled 沒有下一課.
- Teacher/Supervisor override: Stage 2 two-target-cards-per-character behavior is a post-main teacher verification item, not an L370 release blocker. Production observed both characters selectable but one card each, with 2/2 completion. Known render-phase update warning is retained for App/UI follow-up; no UI code changed here.
- Teacher image/audio review remains post-main. Existing scoped pre-merge teacher audio evidence is retained without extending its approval scope.
- Post-deploy review: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L370&ref=main
