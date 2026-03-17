#!/usr/bin/env node

/**
 * cc-them CLI
 * Usage: npx cc-them install <slug> [slug...]
 *        npx cc-them list [--tag <tag>]
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROFILES_DIR = join(__dirname, "../../profiles");

interface ProfileMeta {
  slug: string;
  name: string;
  tags: string[];
  template: string;
}

function getProfileMeta(slug: string): ProfileMeta | null {
  const profilePath = join(PROFILES_DIR, slug, "profile.md");
  const agentPath = join(PROFILES_DIR, slug, "agent.md");
  if (!existsSync(agentPath)) return null;

  let tags: string[] = [];
  let name = slug;

  if (existsSync(profilePath)) {
    try {
      const { data } = matter(readFileSync(profilePath, "utf-8"));
      tags = data.tags || [];
      name = data.name || slug;
    } catch {
      // fall through with defaults
    }
  }

  let template = "structured";
  try {
    const { data } = matter(readFileSync(agentPath, "utf-8"));
    template = data.template || "structured";
  } catch {
    // fall through with default
  }

  return { slug, name, tags, template };
}

function getAllProfiles(): ProfileMeta[] {
  return readdirSync(PROFILES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => getProfileMeta(d.name))
    .filter((p): p is ProfileMeta => p !== null)
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

function listPersonas(tagFilter?: string) {
  let profiles = getAllProfiles();

  if (tagFilter) {
    profiles = profiles.filter((p) => p.tags.includes(tagFilter));
    if (profiles.length === 0) {
      const allTags = getAllTags();
      console.error(`\nNo profiles found with tag "${tagFilter}".`);
      console.error(`Available tags: ${allTags.join(", ")}\n`);
      process.exit(1);
    }
    console.log(`\nProfiles tagged "${tagFilter}":\n`);
  } else {
    console.log("\nAvailable personas:\n");
  }

  const maxSlug = Math.max(...profiles.map((p) => p.slug.length));
  profiles.forEach((p) => {
    const tagStr = p.tags.length > 0 ? `  [${p.tags.join(", ")}]` : "";
    console.log(`  • ${p.slug.padEnd(maxSlug)}${tagStr}`);
  });

  if (!tagFilter) {
    const allTags = getAllTags();
    console.log(`\nFilter by tag: npx cc-them list --tag <tag>`);
    console.log(`Tags: ${allTags.join(", ")}`);
  }

  console.log(`\nInstall with: npx cc-them install <slug>\n`);
}

function getAllTags(): string[] {
  const tags = new Set<string>();
  getAllProfiles().forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return [...tags].sort();
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

// Parse args
const args = process.argv.slice(2);
const command = args[0];

// Extract --tag flag
let tagFilter: string | undefined;
const tagIdx = args.indexOf("--tag");
if (tagIdx !== -1) {
  tagFilter = args[tagIdx + 1];
  args.splice(tagIdx, 2);
}

const remaining = args.slice(1);

switch (command) {
  case "list":
    listPersonas(tagFilter);
    break;

  case "install":
    if (remaining.length === 0) {
      console.error("Usage: npx cc-them install <slug> [slug...]");
      process.exit(1);
    }
    remaining.forEach(installPersona);
    console.log("\nDone. Restart Claude Code to pick up new agents.\n");
    break;

  default:
    console.log(`
cc-them — install reasoning agents into Claude Code

Commands:
  list [--tag <tag>]       List available personas (optionally filter by tag)
  install <slug> [slug...]  Install agent(s) into .claude/agents/

Examples:
  npx cc-them list
  npx cc-them list --tag growth
  npx cc-them install rich-hickey
  npx cc-them install linus-torvalds rich-hickey john-carmack
`);
}
