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

  return { slug, name, tags };
}

function getAllProfiles(): ProfileMeta[] {
  return readdirSync(PROFILES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => getProfileMeta(d.name))
    .filter((p): p is ProfileMeta => p !== null)
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

function getTagsFromProfiles(profiles: ProfileMeta[]): string[] {
  const tags = new Set<string>();
  profiles.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return [...tags].sort();
}

function listPersonas(tagFilter?: string) {
  const allProfiles = getAllProfiles();
  let profiles = allProfiles;

  if (tagFilter) {
    profiles = allProfiles.filter((p) => p.tags.includes(tagFilter));
    if (profiles.length === 0) {
      const allTags = getTagsFromProfiles(allProfiles);
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
    const allTags = getTagsFromProfiles(allProfiles);
    console.log(`\nFilter by tag: npx cc-them list --tag <tag>`);
    console.log(`Tags: ${allTags.join(", ")}`);
  }

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

// Parse args: extract flags first, then positional command + rest
function parseArgs(argv: string[]): { command?: string; rest: string[]; tagFilter?: string } {
  const positional: string[] = [];
  let tagFilter: string | undefined;

  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--tag") {
      if (i + 1 >= argv.length) {
        console.error("Error: --tag requires a value. Usage: npx cc-them list --tag <tag>");
        process.exit(1);
      }
      tagFilter = argv[i + 1];
      i++; // skip the value
    } else {
      positional.push(argv[i]);
    }
  }

  return { command: positional[0], rest: positional.slice(1), tagFilter };
}

const { command, rest, tagFilter } = parseArgs(process.argv.slice(2));

switch (command) {
  case "list":
    listPersonas(tagFilter);
    break;

  case "install":
    if (rest.length === 0) {
      console.error("Usage: npx cc-them install <slug> [slug...]");
      process.exit(1);
    }
    rest.forEach(installPersona);
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
