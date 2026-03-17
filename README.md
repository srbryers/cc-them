# cc-them

> Sourced reasoning agents for Claude Code.

Install a sub-agent that applies Rich Hickey's design philosophy, Linus Torvalds' systems taste, or April Dunford's positioning methodology to your actual codebase — every position grounded in public works, not hallucination.

```bash
npx cc-them install rich-hickey
# → .claude/agents/rich-hickey.md — ready on next Claude Code session
```

---

## Why

You want Rich Hickey looking at your data model. You want Carmack asking if your abstraction earns its cost. You want Dunford auditing whether your landing page communicates value or features. You want Karpathy asking whether you've actually looked at the data before changing the architecture.

These agents don't pretend to be those people. They apply their documented frameworks as a reasoning lens — every position grounded in public record, every pushback traceable to a real source.

### Why not just say "review this like Rich Hickey"?

You can. Claude will give you something that sounds like Hickey. But it will blend in positions he never held, miss the priority order of his values, and flatten his vocabulary into generic "simplicity" advice.

cc-them profiles are researched documents — every stance traces to a specific talk, post, or design decision. The agent doesn't guess what Hickey would say. It reasons from what he actually said. The difference is the same as asking a colleague who once read a blog post vs. one who studied the primary sources.

---

## Quick Start

```bash
npx cc-them install rich-hickey
npx cc-them install linus-torvalds john-carmack andrej-karpathy
npx cc-them list
npx cc-them list --tag growth
```

Installs to `.claude/agents/{slug}.md`. Restart Claude Code to pick them up.

One command. One 4KB file. Delete it if it doesn't change how you think.

---

## Available Profiles

### Engineering

| Slug | Template | Tags | Known For |
|------|----------|------|-----------|
| `rich-hickey` | Structured | language-design, data, philosophy | Clojure, simplicity vs. complexity, data orientation |
| `linus-torvalds` | Voice First | systems, open-source | Linux, Git, taste in systems code |
| `john-carmack` | Scenario | systems, game-dev | Game engines, first principles, empiricism |
| `andrej-karpathy` | Voice First | ai, systems, philosophy | Neural nets, Software 2.0, understanding by rebuilding |
| `sid-meier` | Dialectical | game-dev, product, philosophy | Civilization, interesting decisions, fun as design goal |

### Strategy

| Slug | Template | Tags | Known For |
|------|----------|------|-----------|
| `alex-hormozi` | Structured | growth, marketing | Value Equation, Grand Slam Offers, conversion mechanics |
| `april-dunford` | Structured | marketing, product | Positioning framework, competitive alternatives, market category |
| `lenny-rachitsky` | Structured | growth, product | Growth loops, activation benchmarks, launch strategy |

---

## Principles

- **Public works only.** Every claim must link to a public source.
- **No impersonation.** Prompts frame the persona as a reasoning lens, not a character.
- **Opinionated but grounded.** Capture real stances, not vague approximations.
- **Community-maintained.** Anyone can submit, improve, or dispute a profile.

---

## MCP Server

For use outside Claude Code (or alongside it). Add to your `.claude/settings.json` or `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "cc-them": {
      "command": "npx",
      "args": ["cc-them-mcp"]
    }
  }
}
```

Then in any Claude session:

```
Use ask_rich_hickey to evaluate this data model.
Use review_john_carmack_code on this render loop.
```

---

## Contributing

**This library is only as good as the community that builds it.** Adding a profile is the main way to contribute — and it's designed to be approachable.

### Who's missing?

Some obvious gaps: DHH, Alan Kay, Barbara Liskov, Joe Armstrong, Martin Fowler, Grace Hopper, Dan Abramov, Kent Beck. If someone shaped how you think about building things and has a substantial public body of work, they probably belong here.

### How to add a profile

1. Fork this repo
2. Create `/profiles/{slug}/` with three files: `profile.md`, `sources.md`, `agent.md`
3. Pick a template from `/schema/templates/` — `a-structured.md` is the default
4. Run the validator: `node scripts/validate.js profiles/{slug}`
5. Open a PR titled `Add profile: {Full Name}`

Every PR runs the validator automatically via CI — it must pass before merging.

Full contribution guide: **[CONTRIBUTING.md](./CONTRIBUTING.md)**

### Want to request a profile instead?

Open an issue using the [Request a persona](.github/ISSUE_TEMPLATE/request-persona.md) template. No code required — just a name and a few links to their public work.

### Other ways to help

- **Dispute a profile** — If something is wrong or misrepresents someone's documented positions, open an issue with a source. We'll fix it.
- **Improve an existing profile** — Found a great talk or post that isn't in `sources.md`? Add it and update the profile to reflect it.

---

## Repository Structure

```
/profiles/{slug}/
  profile.md      # Researched philosophy, stances, vocabulary — cited throughout
  sources.md      # All cited public works with URLs
  agent.md        # Ready-to-install Claude Code sub-agent

/schema/
  profile-schema.md       # Full contribution spec
  templates/
    a-structured.md       # Default — works for almost everyone
    b-voice-first.md      # For figures with a very sharp, distinctive voice
    c-scenario.md         # For figures whose advice shifts by context
    d-dialectical.md      # For thinkers defined by tensions they navigate

/mcp/
  src/index.ts            # MCP server — auto-discovers all profiles

/scripts/
  validate.js             # Profile validator — runs on every PR via CI
  cli.ts                  # npx cc-them CLI
```

---

## License

MIT
