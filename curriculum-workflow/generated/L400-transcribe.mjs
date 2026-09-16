import fs from "node:fs";
import { createHash } from "node:crypto";
import { requireOpenAIKey } from "../../scripts/lib/env.mjs";
const root = "public/assets/lessons/L400/audio", rows = [];
for (const file of fs.readdirSync(root).filter(f => f.endsWith(".m4a"))) {
  const bytes = fs.readFileSync(root + "/" + file);
  const form = new FormData();
  form.append("model", "gpt-4o-transcribe");
  form.append("language", "zh");
  form.append("file", new Blob([bytes], {type:"audio/mp4"}), file);
  const res = await fetch("https://api.openai.com/v1/audio/transcriptions", {method:"POST",headers:{Authorization:"Bearer "+requireOpenAIKey()},body:form});
  if (!res.ok) throw Error(res.status);
  const result = await res.json();
  rows.push({file,sha256:createHash("sha256").update(bytes).digest("hex"),model:"gpt-4o-transcribe",prompt:null,result});
  fs.writeFileSync("curriculum-workflow/generated/L400-transcript-evidence.json",JSON.stringify(rows,null,2)+"\n");
  console.log(file, result.text);
}
