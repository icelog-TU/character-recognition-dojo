# L368 Production D — partial package

Do not integrate. Required audio/alignment QA has not passed.

{
  "status": "partial-package",
  "date": "2026-09-15",
  "base": "cd4abf4b1ffe125be5402883a31b3197e1e892cd",
  "boundary": "L001-L365 / 368 learned Han / R044 after360",
  "dependencies": [
    "L366",
    "L367"
  ],
  "imageQa": [
    {
      "id": "L368-S01",
      "styleLock": "PASS",
      "cast": "PASS",
      "note": "S01: fixed blue/green 你 boy receives water from distinct teal-clad teacher beside stable child table."
    },
    {
      "id": "L368-S02",
      "styleLock": "PASS",
      "cast": "PASS",
      "note": "S02: recurring father and protagonist girl resting safely on mountain trail; sweat and happy smile readable."
    },
    {
      "id": "L368-S03",
      "styleLock": "PASS",
      "cast": "PASS",
      "note": "S03: recurring girl and mother, healthy puppy present and matching puppy in wordless memory bubble; joyful tears visible."
    },
    {
      "id": "L368-S04",
      "styleLock": "PASS",
      "cast": "PASS",
      "note": "S04: mother offers refill, empty bowl, protagonist girl politely declines while full; no pain or tantrum."
    },
    {
      "id": "L368-S05",
      "styleLock": "PASS",
      "cast": "PASS",
      "note": "S05: same 你 boy as S01, protagonist girl offers illustrated book; dog wears a shoe as hat, no readable text."
    }
  ],
  "imageGeneration": {
    "mode": "built-in imagegen",
    "rejectedImages": 0,
    "referenceSet": "All L058 S01-S05; refined L115 S01/S02, L118 S02, L119 S01, L128 S03; family L154 S01/L162 S04/L163 S02; 你 L012 S01; teacher L364 S02"
  },
  "blockers": [
    "Mandatory full AI alignment stops at G02 suffix: expected 到很開心, latest actual 很開心.",
    "Raw AI timings include 1 ms, 20 ms and 60 ms spans and one overlap; tail work not accepted yet.",
    "Standalone 感 second generation transcribes as homophone 敢 without text prompt; exact character/tone needs playback verification."
  ],
  "audioRegenerations": {
    "L368-G02-suffix": 4,
    "char-u611f": 1,
    "L368-S03": 1,
    "L368-S05": 1
  },
  "browserQa": {
    "status": "not-executed-after-technical-blocker",
    "capability": "Fresh browser inventory exposes Chrome extension; no L368 browser playback/recording failure claimed.",
    "manualPlayback": "Stage 3 phone-width listening/highlights, Stage 4 first tap, G02 recording/replay and all G05 options not completed. No fallback used to waive technical blockers."
  },
  "checks": {
    "startup": "tools:check, ai:check, curriculum:audit-state PASS",
    "packet": "curriculum:packet PASS; final approved records restored afterwards",
    "content": "371 allowed Han; exact approved sentence/imageNotes/layout/index/coverage PASS",
    "images": "5 actual WebP, 1024 square, each under250KB; full final images compared with style/cast references",
    "audioFormat": "10 AAC M4A, 44100 Hz mono, all decode; strict scoped assets audit PASS, no warnings",
    "g05MeanSpreadDb": 0.3,
    "alignment": "Full gate FAIL; recovery-only alignment saved 8 other clips for diagnosis, not an acceptance override",
    "technicalAudit": "FAIL: missing accepted suffix metadata; additional timing defects listed in diagnostic report",
    "verify": "Skipped: dependency-blocked and incomplete package; Release owns shared-state integration"
  },
  "nextAction": "Resolve G02 suffix pronunciation/recognition with real playback or corrected standalone TTS; rerun full AI alignment and fix documented collapsed boundaries based on audio evidence; trim tails, complete playback QA, then validators and unmodified package-intake before promoting status."
}

## Diagnostic evidence

{
  "status": "partial-package",
  "images": [
    {
      "name": "L368-S01.webp",
      "dimensions": "1024x1024",
      "bytes": 152760,
      "sha256": "71a5c39b28f9d9178a3428a47e4ff280afe3f3576aa4d8515b4d0268732ced6a",
      "styleLock": "PASS",
      "cast": "PASS"
    },
    {
      "name": "L368-S02.webp",
      "dimensions": "1024x1024",
      "bytes": 244946,
      "sha256": "df599b9384a43f6d53cdf1449bacb528c89d743c97c4035a74a01d55960d6975",
      "styleLock": "PASS",
      "cast": "PASS"
    },
    {
      "name": "L368-S03.webp",
      "dimensions": "1024x1024",
      "bytes": 170776,
      "sha256": "14f2e0dae0241ea4bfc5fae70f47bcff13e6b049c2f930d9ff5dc44ade8189f2",
      "styleLock": "PASS",
      "cast": "PASS"
    },
    {
      "name": "L368-S04.webp",
      "dimensions": "1024x1024",
      "bytes": 183704,
      "sha256": "ffd2275ef2b498eaee9f75a9dbafa6d6ed098a979f667a4c121bca6d9608a8ba",
      "styleLock": "PASS",
      "cast": "PASS"
    },
    {
      "name": "L368-S05.webp",
      "dimensions": "1024x1024",
      "bytes": 177794,
      "sha256": "464bb9f1df078cd1f24472d404b83a6afb0ca00e7f87a9e80be05c3a374af6a4",
      "styleLock": "PASS",
      "cast": "PASS"
    }
  ],
  "audio": [
    {
      "name": "char-u611f.m4a",
      "bytes": 20446,
      "sha256": "5dcd4128bb1b4ef15a73961578aeb2cdab313e03de9def833dcf7c2c2d422c73",
      "decode": "PASS",
      "codec": "aac",
      "sampleRate": "44100",
      "channels": 1,
      "durationMs": 1323,
      "meanDb": -20.8,
      "peakDb": -2
    },
    {
      "name": "L368-G02-prefix.m4a",
      "bytes": 39236,
      "sha256": "7e5191ef2a53d9480a56fb682982d4a1f17dde564ff0784c38831a2cf6af5b2c",
      "decode": "PASS",
      "codec": "aac",
      "sampleRate": "44100",
      "channels": 1,
      "durationMs": 3210,
      "meanDb": -18.4,
      "peakDb": -2.1
    },
    {
      "name": "L368-G02-suffix.m4a",
      "bytes": 31796,
      "sha256": "d2b98c2ddd5a400f4a3435bd4158459da4be55e0b4082a5770445a550f1b131d",
      "decode": "PASS",
      "codec": "aac",
      "sampleRate": "44100",
      "channels": 1,
      "durationMs": 4115,
      "meanDb": -19.9,
      "peakDb": -2
    },
    {
      "name": "L368-G05-wrong-one.m4a",
      "bytes": 43868,
      "sha256": "5844123e8d9388656f12824cfba73ca877446b5d0cbf40dbfac15fa8b79b119a",
      "decode": "PASS",
      "codec": "aac",
      "sampleRate": "44100",
      "channels": 1,
      "durationMs": 3860,
      "meanDb": -18.9,
      "peakDb": -2.2
    },
    {
      "name": "L368-G05-wrong-two.m4a",
      "bytes": 47519,
      "sha256": "1900fa81423151860c415de6bd166fc0b522b02bb386e97c1ffaa79b1bad64cc",
      "decode": "PASS",
      "codec": "aac",
      "sampleRate": "44100",
      "channels": 1,
      "durationMs": 3932,
      "meanDb": -18.6,
      "peakDb": -2
    },
    {
      "name": "L368-S01.m4a",
      "bytes": 50666,
      "sha256": "e7e83786e30344cc0d33460556f32f3df20e4fa751274b3b2e4ca613d5d62314",
      "decode": "PASS",
      "codec": "aac",
      "sampleRate": "44100",
      "channels": 1,
      "durationMs": 4171,
      "meanDb": -18.8,
      "peakDb": -4.3
    },
    {
      "name": "L368-S02.m4a",
      "bytes": 56157,
      "sha256": "b37f4a68b3e8c2491c07188694b489a6e556349ab68299fbd79899b13ee5114a",
      "decode": "PASS",
      "codec": "aac",
      "sampleRate": "44100",
      "channels": 1,
      "durationMs": 4661,
      "meanDb": -18.4,
      "peakDb": -2
    },
    {
      "name": "L368-S03.m4a",
      "bytes": 57199,
      "sha256": "137e57e3de8ee86da068f7f37d263d96a3bb93b06f5090aa7e20530412241128",
      "decode": "PASS",
      "codec": "aac",
      "sampleRate": "44100",
      "channels": 1,
      "durationMs": 4687,
      "meanDb": -18.5,
      "peakDb": -2
    },
    {
      "name": "L368-S04.m4a",
      "bytes": 46408,
      "sha256": "b6f21c7f6ca5018f2714465958f12cb601568c78fe2a8d7e03ef8082b60b541f",
      "decode": "PASS",
      "codec": "aac",
      "sampleRate": "44100",
      "channels": 1,
      "durationMs": 4017,
      "meanDb": -19.7,
      "peakDb": -2.6
    },
    {
      "name": "L368-S05.m4a",
      "bytes": 57364,
      "sha256": "99a5d06df1cc5127fea53377540a509c115cc9b4dff23f7644e2d19fd5aa6c5b",
      "decode": "PASS",
      "codec": "aac",
      "sampleRate": "44100",
      "channels": 1,
      "durationMs": 5112,
      "meanDb": -18.9,
      "peakDb": -2.3
    }
  ],
  "timingIssues": [
    {
      "id": "L368-S01",
      "tailMs": 711
    },
    {
      "id": "L368-S02",
      "charIndex": 9,
      "spanMs": 20,
      "startMs": 3400,
      "endMs": 3420
    },
    {
      "id": "L368-S02",
      "tailMs": 1041
    },
    {
      "id": "L368-S03",
      "charIndex": 9,
      "spanMs": 1,
      "startMs": 3620,
      "endMs": 3621
    },
    {
      "id": "L368-S03",
      "charIndex": 10,
      "overlap": true
    },
    {
      "id": "L368-S03",
      "tailMs": 727
    },
    {
      "id": "L368-S04",
      "tailMs": 837
    },
    {
      "id": "L368-S05",
      "tailMs": 1452
    },
    {
      "id": "L368-G02-prefix",
      "tailMs": 550
    },
    {
      "id": "L368-G05-wrong-one",
      "tailMs": 440
    },
    {
      "id": "L368-G05-wrong-two",
      "charIndex": 6,
      "spanMs": 60,
      "startMs": 2520,
      "endMs": 2580
    },
    {
      "id": "L368-G05-wrong-two",
      "tailMs": 492
    },
    {
      "id": "L368-G02-suffix",
      "issue": "No accepted AI timing metadata: expected 到很開心; latest whisper-1 transcript 很開心."
    }
  ],
  "imageBytes": 929980,
  "audioBytes": 450659,
  "folderBytes": 1380639,
  "g05MeanSpreadDb": 0.3
}

## Reproduction

Use owned L368-pipeline.cjs to invoke unchanged repository scripts against the draft in memory. No shared production JSON writes.

- node curriculum-workflow/generated/L368-pipeline.cjs align: reproduces suffix transcript mismatch.
- node curriculum-workflow/generated/L368-pipeline.cjs align without-suffix: recovery-only output, not a gate PASS.
- node curriculum-workflow/generated/L368-audit.cjs content: PASS.
- node curriculum-workflow/generated/L368-audit.cjs technical: FAIL.
- node curriculum-workflow/generated/L368-pipeline.cjs formats: PASS.
- Independent final ASR output: L368-independent-transcription.json. Earlier suffix variants produced 趙很開心, 很開心, or an empty context-assisted transcript. No phonetic substitution was used to force a PASS.

Image prompts are stored per sentence in draft and packet. Original generated PNGs and comparison sheets remain outside the repository; no rejected image variants were committed. Raw MP3 inbox is local and ignored by repository policy.

After recovery, rerun complete alignment, final-tail and metadata work, lesson-local audits and pushed-ref package-intake. Keep the approved text and exact G02 prefix/suffix unchanged. Full shared-state verify belongs to Release after dependencies L366/L367.

## Pushed-ref intake

Unmodified curriculum:package-intake against pushed cc800929 returned exit 1: package status partial-package, registry needs-rework and missing G02 suffix timing metadata. Scoped L368 asset validation and baseline validate:production passed, but these do not override the failed full alignment and technical audit. The branch is a preserved recovery package, not Release-ready.
