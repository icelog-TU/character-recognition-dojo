# Audio Inbox

Put reviewed AI audio files here before processing.

Folder shape:

```text
curriculum-workflow/audio-inbox/
  L001/
    char-一.wav
    char-二.wav
    char-三.wav
    char-人.wav
    L001-S01.wav
    L001-S02.wav
    L001-S03.wav
    L001-S04.wav
```

Run:

```bash
npm run assets:audio -- --lesson L001
```

The processed `.m4a` files will be written to:

```text
public/assets/lessons/L001/audio/
```

The script also writes:

```text
curriculum-workflow/audio-duration-report.json
```

Use that report when filling `audio.durationMs` in the curriculum JSON.
