# AI Generation Setup

This project can generate sentence candidates and audio drafts locally, but API keys must never be committed.

## Current Safety Rules

- `.env`, `.env.local`, and `.env.*` are ignored by Git.
- `.env.example` is safe to commit because it contains fake values only.
- AI output drafts under `curriculum-workflow/ai-outputs/` are ignored.
- Raw AI audio source files under `curriculum-workflow/audio-inbox/` are ignored, except for the README.
- Final reviewed assets go under `public/assets/lessons/`.

## Before You Have an API Key

Run:

```bash
npm run ai:check
```

It should say `OPENAI_API_KEY is not set yet`. That is expected.

## After You Have an API Key

Use one of these local-only options.

Option A: Windows user environment variable:

```powershell
[Environment]::SetEnvironmentVariable("OPENAI_API_KEY", "your_api_key_here", "User")
```

Then close PowerShell and open it again.

Option B: `.env.local` in this repo:

```text
OPENAI_API_KEY=your_api_key_here
OPENAI_TEXT_MODEL=gpt-5-mini
OPENAI_TTS_MODEL=gpt-4o-mini-tts
OPENAI_TTS_VOICE=coral
```

Do not edit `.env.example` with a real key.

## Generate Sentence Candidates

First create or refresh a lesson packet:

```bash
npm run curriculum:packet -- --request curriculum-workflow/lesson-requests/L004-example.json
```

Then generate draft sentence candidates:

```bash
npm run ai:sentences -- --packet curriculum-workflow/generated/L004-generation-packet.md
```

Output goes to:

```text
curriculum-workflow/ai-outputs/L004-sentence-candidates.json
```

These are draft candidates only. They still need teacher review before entering `src/curriculum/sample-lessons.json`.

## Generate Audio Drafts

After sentences are reviewed in the curriculum file:

```bash
npm run ai:audio -- --lesson L001
```

This creates raw MP3 drafts in:

```text
curriculum-workflow/audio-inbox/L001/
```

Then normalize them for the app:

```bash
npm run assets:audio -- --lesson L001
```

The normalized `.m4a` files go to:

```text
public/assets/lessons/L001/audio/
```

Then generate production character timings from the final `.m4a` files:

```bash
npm run assets:align:ai -- --lesson L001
```

This step uses AI transcription timestamps, verifies the transcript matches `spokenText`, and writes `audio.durationMs` plus `audio.charTimings` back into `src/curriculum/sample-lessons.json`.

## Important

The audio script creates natural whole-sentence audio. It does not create one audio file per sentence character. Character-by-character timing still needs to be produced from the final sentence audio before production release.

Do not accept a sentence audio file until transcription confirms every Han character in `spokenText` was actually spoken. Pay special attention to final neutral-tone `的` and final syllables, which can be too light or clipped if the audio processing trims the ending.
