#!/usr/bin/env node

/**
 * cc-them CLI
 * Usage: npx cc-them install <slug> [slug...]
 *        npx cc-them list
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROFILES_DIR = join(__dirname, "../profiles");

const [, , command, ...slugs] = process.argv;

function listPersonas() {
  const available = readdirSync(PROFILES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(PROFILES_DIR, d.name, "agent.md")))
    .map((d) => d.name);

  console.log("\nAvailable personas:\n");
  available.forEach((s) => console.log(`  • ${s}`));
  console.log(`\nInstall with: npx cc-them install <slug>\n`);
}

function installPersona(slug: string) {
  const agentSrc = join(PROFILES_DIR, slug, "agent.md");

  if (!existsSync(agentSrc)) {
    console.error(`✗ No profile found for "${slug}". Run \`npx cc-them list\` to see available personas.`);
    process.exit(1);
  }

  const agentsDir = join(process.cwd(), ".claude", "agents");
  mkdirSync(agentsDir, { recursive: true });

  const dest = join(agentsDir, `${slug}.md`);
  const content = readFileSync(agentSrc, "utf-8");
  writeFileSync(dest, content);

  console.log(`✓ Installed ${slug} → .claude/agents/${slug}.md`);
}

switch (command) {
  case "list":
    listPersonas();
    break;

  case "install":
    if (slugs.length === 0) {
      console.error("Usage: npx cc-them install <slug> [slug...]");
      process.exit(1);
    }
    slugs.forEach(installPersona);
    console.log("\nDone. Restart Claude Code to pick up new agents.\n");
    break;

  default:
    console.log(`
cc-them — loop in tech thinker reasoning agents into Claude Code

Commands:
  list                     List available personas
  install <slug> [slug...]  Install agent(s) into .claude/agents/

Examples:
  npx cc-them list
  npx cc-them install rich-hickey
  npx cc-them install linus-torvalds rich-hickey john-carmack
`);
}
