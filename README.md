# cc-them

[![npm version](https://img.shields.io/npm/v/cc-them)](https://www.npmjs.com/package/cc-them)
[![npm downloads](https://img.shields.io/npm/dm/cc-them)](https://www.npmjs.com/package/cc-them)
[![GitHub stars](https://img.shields.io/github/stars/srbryers/cc-them)](https://github.com/srbryers/cc-them)

> Get Rich Hickey, Linus Torvalds, or John Carmack to review your code. Every position sourced, none invented.

Expert reasoning agents for Claude Code. Each profile is a researched framework built from public works (talks, posts, mailing lists, interviews), not training-data approximation. One command to install. One 4KB file. Delete it if it doesn't change how you think.

For engineers and founders using Claude Code who want structured, expert pushback, not just faster autocomplete.

```bash
npx cc-them install rich-hickey
# → .claude/agents/rich-hickey.md (ready on next Claude Code session)
```

---

## Why

You're about to make an architectural decision and there's no one to push back. You want Rich Hickey looking at your data model. You want Carmack asking if your abstraction earns its cost. You want Dunford auditing whether your landing page communicates value or features.

These agents apply documented frameworks as a reasoning lens. Every position grounded in public record, every pushback traceable to a real source.

### Why not just say "review this like Rich Hickey"?

You can. Claude will give you something that sounds like Hickey. But it will blend in positions he never held, miss the priority order of his values, and flatten his vocabulary into generic "simplicity" advice.

cc-them profiles are researched documents. Every stance traces to a specific talk, post, or design decision. The agent doesn't guess what Hickey would say. It reasons from what he actually said. The difference is the same as asking a colleague who once read a blog post vs. one who studied the primary sources.

### What the difference looks like

#### Engineering: Rich Hickey reviewing a data model

![Before and after: Rich Hickey reviewing an ORM data model](./docs/images/before-after.png)

#### Strategy: April Dunford auditing a landing page

![Before and after: April Dunford auditing a landing page](./docs/images/before-after-strategy.png)

One side is polite generics. The other applies a documented value hierarchy with specific vocabulary.

The sourcing is auditable. Every profile's [`sources.md`](./profiles/rich-hickey/sources.md) links the cited talks, posts, and decisions. Read the citations before you trust the agent.

---

## Quick Start

```bash
npx cc-them list                  # see all profiles
npx cc-them list --tag growth     # filter by tag
npx cc-them preview rich-hickey   # see what you're getting before install
npx cc-them install rich-hickey   # install to .claude/agents/
```

Installs to `.claude/agents/{slug}.md`. Restart Claude Code to pick them up.

**Using cc-them on a team?** Commit `.claude/agents/` to your repo. Collaborators who clone the project get the agents automatically. Don't gitignore it.

---

## Available Profiles

Each profile uses a reasoning mode matched to how that person actually thinks. Hickey's applies a fixed value hierarchy; Carmack's reasons through context-dependent tradeoffs; Torvalds's challenges you directly. The profiles aren't all the same shape with different names. The reasoning structure itself is different.

### Engineering

| Slug | Reasoning Mode | Tags | Known For |
|------|---------------|------|-----------|
| `rich-hickey` | Structured | language-design, data, philosophy | Clojure, simplicity vs. complexity, data orientation |
| `linus-torvalds` | Voice First | systems, open-source | Linux, Git, taste in systems code |
| `john-carmack` | Scenario | systems, game-dev | Game engines, first principles, empiricism |
| `andrej-karpathy` | Voice First | ai, systems, philosophy | Neural nets, Software 2.0, understanding by rebuilding |
| `sid-meier` | Dialectical | game-dev, product, philosophy | Civilization, interesting decisions, fun as design goal |

### Strategy

| Slug | Reasoning Mode | Tags | Known For |
|------|---------------|------|-----------|
| `alex-hormozi` | Structured | growth, marketing | Value Equation, Grand Slam Offers, conversion mechanics |
| `april-dunford` | Structured | marketing, product | Positioning framework, competitive alternatives, market category |
| `lenny-rachitsky` | Structured | growth, product | Growth loops, activation benchmarks, launch strategy |

**What they'll tell you:**

- **Hickey**: "You're complecting your information model with a persistence strategy. Separate what from how."
- **Torvalds**: "Bad programmers worry about the code. Good programmers worry about data structures and their relationships."
- **Carmack**: "Every layer of abstraction hides information you need. Measure the cost before you pay it."
- **Dunford**: "You're leading with features. Your customer doesn't care what it does. They care what it does for them."
- **Hormozi**: "Run it through the Value Equation. Which variable is binding: dream outcome, likelihood, time delay, or effort?"

**Example usage:**
```
Use rich-hickey to review this data model for unnecessary complexity.
Use april-dunford to audit whether our landing page communicates value or features.
Use john-carmack to evaluate whether this abstraction layer earns its cost.
```

Preview any profile before installing: `npx cc-them preview <slug>`

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

**This library is only as good as the community that builds it.** Adding a profile is the main way to contribute, and it's designed to be approachable.

### Who's missing?

Some obvious gaps: DHH, Alan Kay, Barbara Liskov, Joe Armstrong, Martin Fowler, Grace Hopper, Dan Abramov, Kent Beck. If someone shaped how you think about building things and has a substantial public body of work, they probably belong here.

### How to add a profile

1. Fork this repo
2. Create `/profiles/{slug}/` with three files: `profile.md`, `sources.md`, `agent.md`
3. Pick a template from `/schema/templates/` (`a-structured.md` is the default)
4. Run the validator: `node scripts/validate.js profiles/{slug}`
5. Open a PR titled `Add profile: {Full Name}`

Full contribution guide: **[CONTRIBUTING.md](./CONTRIBUTING.md)**

### Other ways to help

- **Dispute a profile.** If something misrepresents someone's documented positions, open an issue with a source.
- **Improve an existing profile.** Found a great talk or post that isn't in `sources.md`? Add it.
- **Request a profile.** Open an issue with [this template](.github/ISSUE_TEMPLATE/request-persona.md). No code required.

---

## Repository Structure

```
/profiles/{slug}/
  profile.md      # Researched philosophy, stances, vocabulary (cited throughout)
  sources.md      # All cited public works with URLs
  agent.md        # Ready-to-install Claude Code sub-agent

/schema/
  profile-schema.md       # Full contribution spec
  templates/              # Four reasoning mode templates

/mcp/src/index.ts         # MCP server (auto-discovers all profiles)
/scripts/cli.ts           # npx cc-them CLI
```

---

## License

MIT
