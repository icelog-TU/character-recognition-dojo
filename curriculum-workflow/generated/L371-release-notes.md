# L371 Release

- Source: 70937914b1fba2c2ef716f822340070c2f7834d3, codex/l371-complete-package.
- Initial integration base: 387662cd; rebased onto 3955e983 after concurrent Supervisor Stage 2 fix. Dependencies L368/L369/L370 are in main. Only L371 request, packet, draft, QA report and assets transplanted; old shared-state/tool/App changes excluded.
- Request/packet/draft sentence agreement and real learned-character boundary checked. Canonical Stage 4; G03 has three distinct single-Han options.
- Package intake, full npm run verify and scoped unchanged repository asset audit --strict PASS (5 images, 10 audio references, zero warnings).
- Actual app local smoke at 390x844 and 768x1024: G05 answer reveal/retry/correct selection and first reward claim tested. Completion controls automatically visible, unobscured by footer. At this release boundary, next lesson correctly disabled; return-home control visible.
- Temporary local progress used; no cloud records changed. Production browser fallback remains documented in its QA report; subjective teacher asset review is post-main.
- No production-local content or asset repairs. Existing lessons and reviews unchanged. Registry has no active row to remove.
- Post-deploy review: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L371&ref=main
