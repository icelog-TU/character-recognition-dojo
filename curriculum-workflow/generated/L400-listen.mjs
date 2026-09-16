// Independent model listening, not teacher/manual listening.
import fs from "node:fs";
import { createRequire } from "node:module";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { requireOpenAIKey } from "../../scripts/lib/env.mjs";
const require = createRequire(import.meta.url), ff = require("@ffmpeg-installer/ffmpeg").path;
const folder = "public/assets/lessons/L400/audio", out = "curriculum-workflow/generated/L400-listening-evidence.json";
const prompt = "Listen to this Mandarin audio. Transcribe verbatim Traditional Chinese. Report any omitted or added syllables, clipped final syllable, unnatural pauses. If zhe or zuo occurs, report the ACTUALLY HEARD tone and contour, not a tone inferred only from spelling; say uncertain if unreliable. Return concise JSON with transcript, toneObservations, finalSyllableComplete, defects, confidence. No expected transcript is provided.";
const rows = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out)) : [];
for (const file of fs.readdirSync(folder).filter(f => f.endsWith(".m4a"))) {
  const sha256 = createHash("sha256").update(fs.readFileSync(folder + "/" + file)).digest("hex");
  if (process.argv[2] && file !== process.argv[2]) continue;
  if (rows.some(r => r.file === file && r.sha256 === sha256)) continue;
  const wav = execFileSync(ff, ["-v", "error", "-i", folder + "/" + file, "-f", "wav", "-acodec", "pcm_s16le", "pipe:1"], { maxBuffer: 8000000 });
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST", headers: { Authorization: "Bearer " + requireOpenAIKey(), "Content-Type": "application/json" },
    body: JSON.stringify({ model: "gpt-audio-1.5", modalities: ["text"], messages: [{ role: "user", content: [
      { type: "text", text: prompt }, { type: "input_audio", input_audio: { data: wav.toString("base64"), format: "wav" } }
    ] }] })
  });
  if (!response.ok) throw Error("Audio QA HTTP " + response.status);
  const data = await response.json();
  const row = { file, sha256, model: data.model, method: "AI listening, not human QA", prompt, result: data.choices[0].message.content };
  rows.push(row); fs.writeFileSync(out, JSON.stringify(rows, null, 2) + "\n"); console.log(file + ": " + row.result);
}
