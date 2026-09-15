# L373 Release

- Source: ff872a2d9de4066d4b25f4eb2cb8e24e417fdf5b, codex/l373-complete-package. Base: ff2d4dfb. Earlier dependencies are in main.
- Only intended L373 files transplanted. Request/packet/draft approved texts and actual learned-character boundary checked.
- Release-side repair: missing G04/G05 targetChar caused validate:curriculum to throw. Added G04 交 and G05 通 using their approved sentence focusChar; synchronized request, both packet JSON blocks, draft, production and planner. No text/options/timings/media changed. Intake did not catch this missing field; no shared validator changed here.
- Full npm run verify passed after repair. Scoped unchanged asset audit --strict PASS: 5 images, 10 audio references, zero warnings. Baseline full assets:audit through L371 also completed: 415 units, 2034 image references, 4027 audio references, zero warnings.
- 390x844 and 768x1024 actual-app G05 answer/retry/selection and first-reward smoke PASS. Completion controls automatically visible above footer, with next disabled at the current course boundary and return-home visible.
- Teacher subjective image/audio review is post-main. Local test progress only; no cloud changes. Registry has no active row to remove.
- Post-deploy review: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L373&ref=main
