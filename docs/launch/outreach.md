# Outreach Templates

## For developers who might contribute profiles

### Direct message (Twitter/X DM or email)

**Subject:** Open-source project you might find interesting — sourced reasoning agents

Hey [Name],

I built cc-them — an open-source library of expert reasoning agents for Claude Code. Each profile is a researched framework built from public works (talks, posts, commits), not training-data approximation.

We have 8 profiles today (Hickey, Torvalds, Carmack, Karpathy, Sid Meier, Hormozi, Dunford, Rachitsky), but the library is only as good as the community that builds it.

I thought of you because [specific reason — e.g., "your deep knowledge of DHH's work" / "you've written extensively about distributed systems" / "your background in functional programming"]. Would you be interested in contributing a profile? The process is: research the public record, pick a reasoning template, run the validator, open a PR.

If contributing isn't your thing, I'd still love to hear: who shaped how you think about building things? Who's missing from this list?

https://github.com/srbryers/cc-them

---

### Community post (Discord/Slack)

Hey everyone — I open-sourced a library of expert reasoning agents for Claude Code called cc-them. Think: Rich Hickey reviewing your data model, or April Dunford auditing your positioning — but every stance is sourced from their actual public works, not LLM approximation.

8 profiles today, community-maintained. Adding a profile is a great way to contribute if you've ever deep-dived someone's public body of work.

Who would you profile? That's the question I keep asking — because the best additions will come from people who already know the material.

https://github.com/srbryers/cc-them

---

### Reply to relevant discussions

(Use when someone posts about code review, AI agents, Claude Code tips, or "who would you want to review your code")

Relevant to this — I built cc-them, an open-source library of sourced reasoning agents for Claude Code. Each profile is a researched document where every position traces to a public talk or post. `npx cc-them install rich-hickey` to try it.

The key difference from just prompting "review like X": the agents reason from documented value hierarchies and real vocabulary, not plausible-sounding generics.

Would love to hear who you'd want added — it's community-maintained: https://github.com/srbryers/cc-them

---

## Framing notes

**Always include:**
- Both use cases: CLI sub-agents + MCP server
- The sourcing differentiation (not training-data approximation)
- Contribution angle ("Who would you profile?" / "Who's missing?")

**Tone:**
- Collaborative, not promotional — "the library is only as good as the community"
- Specific about what's different — sourcing, not features
- Low-pressure CTA — asking for opinions counts as engagement

**Avoid:**
- Claiming the agents "are" these people — they're reasoning lenses
- Feature lists — lead with the sourcing angle
- Over-explaining the tech — one command, one file, that's it
