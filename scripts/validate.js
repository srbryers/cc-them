#!/usr/bin/env node
/**
 * cc-them profile validator
 * Usage: node scripts/validate.js profiles/rich-hickey
 *        node scripts/validate.js profiles/*   (glob)
 *        node scripts/validate.js              (all profiles)
 */

import { readFileSync, existsSync, readdirSync } from "fs";
import { join, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = new URL(".", import.meta.url).pathname;
const REPO_ROOT = resolve(__dirname, "..");
const PROFILES_DIR = join(REPO_ROOT, "profiles");

// ─── Rules per template type ──────────────────────────────────────────────────

const FRONTMATTER_REQUIRED = ["name", "description", "template", "model"];

const TEMPLATE_RULES = {
  structured: {
    label: "A — Structured Sections",
    requiredSections: [
      "Core Values",
      "How to Approach",
      "Vocabulary",
      "What to Challenge",
      "Guardrails",
    ],
    optionalSections: ["Tone", "On Specific Topics"],
  },
  "voice-first": {
    label: "B — Voice First",
    requiredSections: ["Behavioral rules", "Guardrails"],
    optionalSections: [],
    extraChecks: [
      {
        description: "Must have at least 3 behavioral rules (bullet points in Behavioral rules)",
        check: (body) => {
          const section = extractSection(body, "Behavioral rules");
          if (!section) return false;
          const bullets = section.match(/^[-*]\s/gm) || [];
          return bullets.length >= 3;
        },
      },
    ],
  },
  scenario: {
    label: "C — Scenario-Driven",
    requiredSections: [
      "Foundational commitments",
      "Mode: CODE REVIEW",
      "Mode: ARCHITECTURE",
      "Mode: OPINION",
      "Guardrails",
    ],
    optionalSections: [],
  },
  dialectical: {
    label: "D — Dialectical",
    requiredSections: [
      "The central tension they navigate",
      "What they are certain about",
      "What they are genuinely uncertain about",
      "How to reason when stuck",
      "Guardrails",
    ],
    optionalSections: ["Secondary tensions"],
  },
};

const VALID_TEMPLATES = Object.keys(TEMPLATE_RULES);

// ─── Helpers ──────────────────────────────────────────────────────────────────

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { frontmatter: null, body: content };

  const raw = match[1];
  const body = content.slice(match[0].length).trim();

  // Minimal YAML parse — handles string scalars, block scalars, lists
  const frontmatter = {};
  let currentKey = null;
  let inBlockScalar = false;
  let blockLines = [];

  for (const line of raw.split("\n")) {
    if (inBlockScalar) {
      if (line.match(/^\s+/)) {
        blockLines.push(line.trim());
        continue;
      } else {
        frontmatter[currentKey] = blockLines.join(" ").trim();
        inBlockScalar = false;
        blockLines = [];
      }
    }

    const keyVal = line.match(/^([a-zA-Z_-]+):\s*(.*)$/);
    if (keyVal) {
      currentKey = keyVal[1];
      const val = keyVal[2].trim();
      if (val === ">") {
        inBlockScalar = true;
        blockLines = [];
      } else if (val === "") {
        frontmatter[currentKey] = [];
      } else {
        frontmatter[currentKey] = val;
      }
    } else if (line.match(/^\s+-\s+/) && Array.isArray(frontmatter[currentKey])) {
      frontmatter[currentKey].push(line.replace(/^\s+-\s+/, "").trim());
    }
  }

  if (inBlockScalar) {
    frontmatter[currentKey] = blockLines.join(" ").trim();
  }

  return { frontmatter, body };
}

function extractSection(body, heading) {
  // Match headings that START WITH the required text (allows parenthetical suffixes
  // like "## Core Values (in priority order)" matching "Core Values")
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`##+ ${escaped}[^\\n]*\\n([\\s\\S]*?)(?=\\n##|$)`);
  const match = body.match(regex);
  return match ? match[1] : null;
}

function hasPlaceholders(text) {
  return /\{[A-Za-z][^}]*\}|\[.*?\]/.test(text);
}

// ─── Validator ────────────────────────────────────────────────────────────────

function validateProfile(profileDir) {
  const slug = profileDir.split("/").filter(Boolean).pop();
  const errors = [];
  const warnings = [];

  // ── File existence ──
  const required = ["profile.md", "sources.md", "agent.md"];
  for (const file of required) {
    if (!existsSync(join(profileDir, file))) {
      errors.push(`Missing required file: ${file}`);
    }
  }
  if (errors.length) return { slug, errors, warnings };

  // ── agent.md frontmatter ──
  const agentRaw = readFileSync(join(profileDir, "agent.md"), "utf-8");
  const { frontmatter, body } = parseFrontmatter(agentRaw);

  if (!frontmatter) {
    errors.push("agent.md: Missing YAML frontmatter (expected --- block at top)");
    return { slug, errors, warnings };
  }

  for (const field of FRONTMATTER_REQUIRED) {
    if (!frontmatter[field]) {
      errors.push(`agent.md: Missing required frontmatter field: "${field}"`);
    }
  }

  // ── Slug consistency ──
  if (frontmatter.name && frontmatter.name !== slug) {
    errors.push(
      `agent.md: frontmatter "name" (${frontmatter.name}) doesn't match directory slug (${slug})`
    );
  }

  // ── Template field ──
  const template = frontmatter.template;
  if (!template) {
    errors.push(`agent.md: Missing "template" field. Must be one of: ${VALID_TEMPLATES.join(", ")}`);
    return { slug, errors, warnings };
  }

  if (!VALID_TEMPLATES.includes(template)) {
    errors.push(
      `agent.md: Invalid template "${template}". Must be one of: ${VALID_TEMPLATES.join(", ")}`
    );
    return { slug, errors, warnings };
  }

  const rules = TEMPLATE_RULES[template];

  // ── Required sections ──
  for (const section of rules.requiredSections) {
    if (!extractSection(body, section)) {
      errors.push(`agent.md [${template}]: Missing required section "## ${section}"`);
    }
  }

  // ── Extra checks per template ──
  if (rules.extraChecks) {
    for (const check of rules.extraChecks) {
      if (!check.check(body)) {
        errors.push(`agent.md [${template}]: ${check.description}`);
      }
    }
  }

  // ── Placeholder check — warn if unfilled ──
  if (hasPlaceholders(body)) {
    warnings.push(
      "agent.md: Contains unfilled placeholders ({...} or [...]) — is this profile complete?"
    );
  }
  if (frontmatter.description && hasPlaceholders(frontmatter.description)) {
    warnings.push("agent.md: frontmatter description contains unfilled placeholders");
  }

  // ── profile.md spot checks ──
  const profileRaw = readFileSync(join(profileDir, "profile.md"), "utf-8");
  const { frontmatter: profileFm } = parseFrontmatter(profileRaw);

  if (profileFm) {
    if (!profileFm.last_updated) {
      warnings.push("profile.md: Missing last_updated date");
    }
    if (!profileFm.contributors || profileFm.contributors.length === 0) {
      warnings.push("profile.md: No contributors listed");
    }
  } else {
    warnings.push("profile.md: Missing YAML frontmatter");
  }

  // ── sources.md — basic check ──
  const sourcesRaw = readFileSync(join(profileDir, "sources.md"), "utf-8");
  const links = sourcesRaw.match(/\[.*?\]\(https?:\/\/[^)]+\)/g) || [];
  if (links.length < 3) {
    warnings.push(`sources.md: Only ${links.length} links found — profiles should have at least 3 sources`);
  }

  return { slug, errors, warnings };
}

// ─── Runner ───────────────────────────────────────────────────────────────────

function findProfileDirs(args) {
  if (args.length === 0) {
    return readdirSync(PROFILES_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => join(PROFILES_DIR, d.name));
  }
  return args.map((a) => resolve(REPO_ROOT, a));
}

const targets = findProfileDirs(process.argv.slice(2));

if (targets.length === 0) {
  console.log("No profiles found.");
  process.exit(0);
}

let anyFailed = false;

for (const dir of targets) {
  const { slug, errors, warnings } = validateProfile(dir);
  const ok = errors.length === 0;

  console.log(`\n${ok ? "✓" : "✗"} ${slug}`);

  if (warnings.length) {
    for (const w of warnings) console.log(`  ⚠  ${w}`);
  }
  if (errors.length) {
    anyFailed = true;
    for (const e of errors) console.log(`  ✗  ${e}`);
  }
  if (ok && warnings.length === 0) {
    const rules = TEMPLATE_RULES[
      parseFrontmatter(readFileSync(join(dir, "agent.md"), "utf-8")).frontmatter?.template
    ];
    console.log(`     Template: ${rules?.label ?? "unknown"} — all checks passed`);
  }
}

console.log();
process.exit(anyFailed ? 1 : 0);
