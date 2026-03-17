# cc-them

An open-source library of agent profiles for notable technologists, installable as Claude Code sub-agents or queryable via MCP. Every profile is built from public works only — no impersonation, no invented positions.

## What this repo contains

```
/profiles/{slug}/
  profile.md      # Research doc — philosophy, stances, vocabulary, all cited
  sources.md      # Every source used, with URLs
  agent.md        # The installable Claude Code sub-agent

/schema/
  profile-schema.md         # Full contribution spec — read this before adding a profile
  templates/a-structured.md # Default template
  templates/b-voice-first.md
  templates/c-scenario.md
  templates/d-dialectical.md

/scripts/
  validate.js     # Profile validator — must pass before any PR merges
  cli.ts          # npx cc-them CLI source

/mcp/src/index.ts # MCP server — auto-discovers profiles at startup
```

## The template system

Every `agent.md` must have a `template` frontmatter field. The validator enforces required sections per template type:

| Value | Required sections |
|-------|------------------|
| `structured` | Core Values · How to Approach · Vocabulary · What to Challenge · Guardrails |
| `voice-first` | Behavioral rules (≥3 bullets) · Guardrails |
| `scenario` | Foundational commitments · Mode: CODE REVIEW · Mode: ARCHITECTURE · Mode: OPINION · Guardrails |
| `dialectical` | The central tension they navigate · What they are certain about · What they are genuinely uncertain about · How to reason when stuck · Guardrails |

Section headings can include parenthetical suffixes — `## Core Values (in priority order)` satisfies `Core Values`.

**Default is `structured`.** Only use other templates when the persona's voice or philosophy genuinely doesn't fit the structured format.

## Validation

```bash
node scripts/validate.js                     # validate all profiles
node scripts/validate.js profiles/rich-hickey  # validate one profile
```

Exit code 1 = errors (blocks PR). Warnings are non-blocking but should be addressed.

The validator checks:
- All three files present (profile.md, sources.md, agent.md)
- Valid YAML frontmatter with required fields (name, description, template, model)
- `name` in frontmatter matches directory slug
- Required sections present for the declared template
- No unfilled placeholders (`{...}` or `[...]`) in agent.md
- At least 3 source links in sources.md
- `last_updated` and `contributors` present in profile.md

## Adding a new profile

1. Create `/profiles/{slug}/` — slug is lowercase, hyphenated
2. Copy the appropriate template from `/schema/templates/`
3. Fill in all three files following `/schema/profile-schema.md`
4. Run `node scripts/validate.js profiles/{slug}` — fix all errors, address warnings
5. Open PR with title `Add profile: {Full Name}`

**Sources only.** Every claim in profile.md must be traceable to a source in sources.md. No direct quotes longer than 10 words. No paywalled sources.

**Choose the template carefully.** The profile research (profile.md) usually reveals which template fits — if the person has a very distinctive voice and documented behavioral stances, voice-first. If their advice shifts by context, scenario. If they're defined by tensions they navigate, dialectical. Otherwise, structured.

## npm / CLI

The CLI is `scripts/cli.ts` — compiled to `scripts/cli.js` for distribution. Commands:

```bash
npx cc-them list
npx cc-them list --tag growth
npx cc-them install <slug> [slug...]
```

The `list` command supports `--tag <tag>` to filter profiles by tag. Without a tag filter, it shows all profiles with their tags and lists available tags.

The `install` command copies `profiles/{slug}/agent.md` to `.claude/agents/{slug}.md` in the current working directory.

## MCP server

`mcp/src/index.ts` — TypeScript, uses `@modelcontextprotocol/sdk`. At startup it reads all profiles from `/profiles/` and registers:
- `list_personas` — meta tool, no params
- `ask_{slug}` — freeform question to the persona
- `review_{slug}_code` — code review through the persona's lens

Slugs with hyphens become underscores in tool names (`rich-hickey` → `ask_rich_hickey`).

## Tags

Profiles are tagged for filtering via `npx cc-them list --tag <tag>`. Available tags:

`systems` · `web` · `language-design` · `open-source` · `game-dev` · `security` · `distributed` · `data` · `ai` · `product` · `growth` · `marketing` · `philosophy`

Tags are defined in `profile.md` frontmatter. Each profile should have 2-3 tags from this list.

## Current profiles

| Slug | Template | Tags | Status |
|------|----------|------|--------|
| `alex-hormozi` | structured | growth, marketing | Complete |
| `andrej-karpathy` | voice-first | ai, systems, philosophy | Complete |
| `april-dunford` | structured | marketing, product | Complete |
| `john-carmack` | scenario | systems, game-dev | Complete |
| `lenny-rachitsky` | structured | growth, product | Complete |
| `linus-torvalds` | voice-first | systems, open-source | Complete |
| `rich-hickey` | structured | language-design, data, distributed, philosophy | Complete |
| `sid-meier` | dialectical | game-dev, product, philosophy | Complete |

Stub profiles need their `profile.md` and `sources.md` filled in. This is a good first contribution.

## Growth agents

`.claude/agents/` contains workflow agents for growing the repo. These are not persona profiles — they apply the growth/marketing profiles' frameworks to the repo itself:

- **`positioning.md`** — Audits the project's positioning using April Dunford's five-component framework
- **`launch-review.md`** — Evaluates growth strategy and launch readiness using Lenny Rachitsky's frameworks
- **`offer-audit.md`** — Audits the project's "offer" using Hormozi's Value Equation (adapted for open-source where price = time/effort)

## Good candidates for new profiles

Community-suggested additions that would cover different territory:

- **DHH** (voice-first) — Rails, convention over configuration, the "majestic monolith," strong contrarian stances
- **Alan Kay** (dialectical) — OOP vs. what OOP was supposed to be; the tension between objects-as-biology and objects-as-data
- **Barbara Liskov** (structured) — LSP, abstraction, data abstraction vs. OOP; extremely precise and well-documented
- **Joe Armstrong** (dialectical) — Erlang, let it crash, the tension between correctness and availability
- **Martin Fowler** (structured) — Refactoring, patterns, agile; extensive written record
- **Grace Hopper** (structured) — Compilers, COBOL, making computers accessible; strong documented philosophy

## Principles

- Public works only — no private correspondence, no paywalled sources, no secondhand accounts
- No impersonation — agent prompts are reasoning lenses, not characters
- No invented positions — if it's not documented, reason from the value hierarchy and flag it
- Community-maintained — profiles can be disputed, improved, or deprecated
