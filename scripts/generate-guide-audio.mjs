import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { getEnv, requireOpenAIKey } from "./lib/env.mjs";

const ffmpegCommand = process.env.FFMPEG_PATH || "ffmpeg";
const inboxDir = path.resolve("curriculum-workflow/audio-inbox/ui");
const outputDir = path.resolve("public/assets/ui/audio");

const narrations = [
  ["home-welcome", "嗨！按下面的大按鈕，我陪你一起認字。"],
  ["home-next", "先聽字，再找字，最後看圖片和句子。"],
  ["lesson-welcome", "我們一步一步來。先按大大的字，聽聽它怎麼念。"],
  ["block-hear", "每一張字卡都按一次。聽到聲音，就做得很好。"],
  ["block-find", "找找看，這些字躲在哪裡。看到一樣的字，就點它。"],
  ["block-picture", "點一張圖，聽一句話。亮起來的字，就是現在念到的字。"],
  ["learned", "都聽完了，就按我聽完了。"],
];

function ensureTool(command, versionArgs) {
  const result = spawnSync(command, versionArgs, { encoding: "utf8" });
  if (result.error || result.status !== 0) {
    console.error(`${command} was not found. Set FFMPEG_PATH or reopen PowerShell.`);
    process.exit(1);
  }
}

async function createSpeech({ apiKey, model, voice, input, outputPath }) {
  const response = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      voice,
      input,
      response_format: "mp3",
      speed: 1,
      instructions:
        "Use cheerful Taiwan Mandarin like a bright children's TV host. Speak to a preschool child. Keep it warm, clear, playful, and easy to follow. Do not read punctuation aloud.",
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`OpenAI guide audio failed for ${outputPath}: ${response.status} ${response.statusText}\n${body}`);
  }

  fs.writeFileSync(outputPath, Buffer.from(await response.arrayBuffer()));
}

const apiKey = requireOpenAIKey();
const model = getEnv("OPENAI_TTS_MODEL", "gpt-4o-mini-tts");
const voice = getEnv("OPENAI_TTS_VOICE", "coral");

ensureTool(ffmpegCommand, ["-version"]);
fs.mkdirSync(inboxDir, { recursive: true });
fs.mkdirSync(outputDir, { recursive: true });

for (const [id, text] of narrations) {
  const mp3Path = path.join(inboxDir, `${id}.mp3`);
  const m4aPath = path.join(outputDir, `${id}.m4a`);
  console.log(`Generating ${id}: ${text}`);
  await createSpeech({ apiKey, model, voice, input: text, outputPath: mp3Path });
  execFileSync(ffmpegCommand, [
    "-y",
    "-i",
    mp3Path,
    "-vn",
    "-af",
    "silenceremove=start_periods=1:start_duration=0.03:start_threshold=-45dB:stop_periods=1:stop_duration=0.18:stop_threshold=-45dB,loudnorm=I=-18:TP=-2:LRA=7",
    "-ac",
    "1",
    "-ar",
    "44100",
    "-c:a",
    "aac",
    "-b:a",
    "96k",
    "-movflags",
    "+faststart",
    m4aPath,
  ], { stdio: "ignore" });
}

console.log(`Wrote ${narrations.length} guide audio file(s) to ${outputDir}`);
