import { getEnv, getSecretEnv, loadLocalEnv } from "./lib/env.mjs";

loadLocalEnv();

const apiKey = getSecretEnv("OPENAI_API_KEY");
const textModel = getEnv("OPENAI_TEXT_MODEL", "gpt-5-mini");
const ttsModel = getEnv("OPENAI_TTS_MODEL", "gpt-4o-mini-tts");
const ttsVoice = getEnv("OPENAI_TTS_VOICE", "coral");

console.log(`OPENAI_TEXT_MODEL=${textModel}`);
console.log(`OPENAI_TTS_MODEL=${ttsModel}`);
console.log(`OPENAI_TTS_VOICE=${ttsVoice}`);

if (!apiKey || apiKey === "sk-your-key-here") {
  console.log("OPENAI_API_KEY is not set yet. No API calls will work until it is added.");
  process.exit(0);
}

const masked = `${apiKey.slice(0, 7)}...${apiKey.slice(-4)}`;
console.log(`OPENAI_API_KEY=${masked}`);
console.log("AI setup looks ready for local generation scripts.");
