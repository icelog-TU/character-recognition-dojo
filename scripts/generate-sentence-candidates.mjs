import fs from "node:fs";
import path from "node:path";
import { getEnv, requireOpenAIKey } from "./lib/env.mjs";

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const item = argv[i];
    if (!item.startsWith("--")) continue;
    const key = item.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
    } else {
      args[key] = next;
      i += 1;
    }
  }
  return args;
}

function extractOutputText(response) {
  if (typeof response.output_text === "string") return response.output_text;
  const chunks = [];
  for (const item of response.output ?? []) {
    for (const content of item.content ?? []) {
      if (typeof content.text === "string") chunks.push(content.text);
    }
  }
  return chunks.join("\n").trim();
}

function lessonFromPacketPath(packetPath) {
  const match = path.basename(packetPath).match(/^(L\d{3})-/i);
  return match ? match[1].toUpperCase() : "L000";
}

const args = parseArgs(process.argv.slice(2));
const packetPath = path.resolve(args.packet || "curriculum-workflow/generated/L004-generation-packet.md");
const outputDir = path.resolve(args.out || "curriculum-workflow/ai-outputs");

if (!fs.existsSync(packetPath)) {
  console.error(`Packet not found: ${packetPath}`);
  console.error("Run npm run curriculum:packet first.");
  process.exit(1);
}

const apiKey = requireOpenAIKey();
const model = getEnv("OPENAI_TEXT_MODEL", "gpt-5-mini");
const packet = fs.readFileSync(packetPath, "utf8");
const lessonId = lessonFromPacketPath(packetPath);

const response = await fetch("https://api.openai.com/v1/responses", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model,
    input: [
      {
        role: "system",
        content:
          "You generate draft curriculum sentences for a Taiwan preschool Chinese character recognition app. Return JSON only. Never introduce forbidden Han characters.",
      },
      {
        role: "user",
        content: packet,
      },
    ],
  }),
});

if (!response.ok) {
  const body = await response.text();
  console.error(`OpenAI sentence generation failed: ${response.status} ${response.statusText}`);
  console.error(body);
  process.exit(1);
}

const data = await response.json();
const text = extractOutputText(data);
fs.mkdirSync(outputDir, { recursive: true });

const outputPath = path.join(outputDir, `${lessonId}-sentence-candidates.json`);
fs.writeFileSync(outputPath, `${text.trim()}\n`, "utf8");
console.log(`Wrote ${outputPath}`);
