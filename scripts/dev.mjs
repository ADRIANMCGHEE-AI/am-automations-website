import { spawn } from "node:child_process";
// Translate the preview runner's Vite-style options for the Next.js CLI.
const input = process.argv.slice(2);
const args = ["node_modules/next/dist/bin/next", "dev"];
for (let i = 0; i < input.length; i++) {
  if (input[i] === "--strictPort") continue;
  args.push(input[i] === "--host" ? "--hostname" : input[i]);
}
const child = spawn(process.execPath, args, { stdio: "inherit" });
child.on("exit", (code) => process.exit(code ?? 1));
