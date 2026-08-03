# AI Planner Worker Setup

The lesson planner is a public GitHub Pages page, so it must not contain an OpenAI API key. AI sentence generation goes through a Cloudflare Worker:

```text
Planner -> Cloudflare Worker -> OpenAI Responses API -> Planner
```

## Deploy

1. Copy the example config:

```powershell
Copy-Item wrangler.ai-sentence.example.toml wrangler.toml
```

2. Log in and deploy:

```powershell
npx wrangler login
npx wrangler secret put OPENAI_API_KEY
npx wrangler secret put TEACHER_TOKEN
npx wrangler deploy
```

`TEACHER_TOKEN` is a private password for the planner. It protects your OpenAI quota from public use.

3. Open the deployed Worker URL. It will look like:

```text
https://character-recognition-dojo-ai-sentences.<your-account>.workers.dev
```

## Planner Setup

In `public/tools/lesson-planner.html` on the live site:

1. Paste the Worker URL into `AI 句子服務`.
2. Paste the same `TEACHER_TOKEN`.
3. Press `儲存 AI 設定`.
4. Press `AI 重新推薦新字` to ask AI for next-character recommendations from the latest learned characters.
5. Add a self-selected character when needed. For words that should not be split, such as `朋友`, the planner may send multiple `newChars` in one lesson request, for example `["朋", "友"]`; the AI sentence generator must treat the whole set as the current lesson target and prefer sentences that practice the characters together.
6. For parallel lesson preparation, the teacher/Codex thread should register the provisional sequence in `docs/PARALLEL_LESSON_REGISTRY.md`; the lesson request should carry matching `dependsOnLessons` and `provisionalLearnedChars`.
6. Press `AI 生成 10 句` or `AI 再生成 10 句` on a character card.

The Planner stores only the Worker URL and teacher token in browser localStorage. The OpenAI key stays in Cloudflare Worker secrets.

## Worker Env

Required secrets:

- `OPENAI_API_KEY`
- `TEACHER_TOKEN`

Optional vars:

- `OPENAI_TEXT_MODEL`: defaults to `gpt-5-mini`.
- `PLANNER_ALLOWED_ORIGINS`: comma-separated CORS allowlist. The example uses `https://icelog-tu.github.io`.

## Validation

The Worker rejects AI candidates that:

- do not include the target character
- use Han characters outside `allowedChars`
- are shorter or longer than the lesson length range
- misuse known function characters such as `不`, `也`, or `是` in blocked mechanical patterns
- repeat the target character or the same phrase unnaturally, such as `我來我來我來`

The Planner validates the returned sentences again before showing them.

## Endpoints

- `POST /recommend-characters`: recommends next characters from the latest planner context and returns sentence candidates.
- `POST /generate-sentences`: regenerates sentence candidates for one chosen character.
