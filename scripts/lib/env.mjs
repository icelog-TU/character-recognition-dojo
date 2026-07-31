import fs from "node:fs";
import path from "node:path";

const envFiles = [".env.local", ".env"];

function stripQuotes(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

export function loadLocalEnv() {
  for (const file of envFiles) {
    const filePath = path.resolve(file);
    if (!fs.existsSync(filePath)) continue;

    const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const separator = trimmed.indexOf("=");
      if (separator === -1) continue;

      const key = trimmed.slice(0, separator).trim();
      const value = stripQuotes(trimmed.slice(separator + 1));
      if (!key || process.env[key]) continue;
      process.env[key] = value;
    }
  }
}

export function requireOpenAIKey() {
  loadLocalEnv();
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || apiKey === "sk-your-key-here") {
    console.error("OPENAI_API_KEY is not set.");
    console.error("Create an API key later, then set it as a User environment variable or in .env.local.");
    process.exit(1);
  }
  return apiKey;
}

export function getEnv(name, fallback) {
  loadLocalEnv();
  return process.env[name] || fallback;
}
