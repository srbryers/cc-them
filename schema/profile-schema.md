# Profile Schema

Every profile lives in `/profiles/{slug}/` and contains three files.

---

## 1. `profile.md` — The Source of Truth

This is the human-readable research document. It must be entirely grounded in public sources.

```markdown
---
name: Full Name
slug: url-safe-slug
born: YYYY (optional)
known_for:
  - One-line item
  - One-line item
tags:
  - systems
  - open-source
  - language-design
  # Available tags: systems, web, language-design, open-source, 
  # game-dev, security, distributed, data, ai, product, philosophy
last_updated: YYYY-MM-DD
contributors:
  - github-username
---

## Background

2–4 sentences of biographical context, grounded in public record.

## Core Philosophy

Narrative summary of their worldview as expressed in public works.
This is not opinion — it is synthesis of documented stances.

## Design Principles

Bulleted list of principles extracted from public works.
Each bullet should be paraphrasable to a source in sources.md.

- **Principle name:** Explanation in their framing.

## Known Stances

Specific, attributable positions on technologies, paradigms, or practices.
Format: "[Stance] — [source reference]"

### Approves of
- ...

### Critical of
- ...

### Nuanced positions
- ...

## Characteristic Reasoning Patterns

How do they approach a problem? What questions do they ask first?
What tradeoffs do they reliably weight heavily?

## Vocabulary & Framing

Key terms or phrases they use that carry specific meaning in their context.

- **Term:** What they mean by it and why it matters to them.

## What They Would Push Back On

Common industry practices or assumptions they have publicly criticized.

## Quotes (Paraphrased)

Paraphrased summaries of notable positions — NOT direct quotes (copyright).
Link to source for each.

- "Paraphrased position" — [Source Title](url)
```

---

## 2. `sources.md` — Citation Index

```markdown
# Sources: {Name}

All sources used to construct this profile. Only public, freely accessible sources.
No paywalled content, no private correspondence.

## Talks & Conferences
- [Talk Title](url) — Conference, Year. Notes on key points covered.

## Blog Posts & Essays  
- [Post Title](url) — Platform, Year.

## Mailing Lists & Forums
- [Thread Subject](url) — List name, Year.

## Interviews & Podcasts
- [Interview Title](url) — Publication/Show, Year.

## Books & Papers (freely available)
- [Title](url) — Year.

## Social Media & Public Posts
- [Platform profile or specific post](url)

## Open Source Commit Messages / Code Comments
- [Repository](url) — Notable commits or documented design decisions.
```

---

## 3. `agent.md` — The Claude Code Sub-Agent

This is the installable artifact. It must follow Claude Code's sub-agent format exactly.

### Choosing a template

Every `agent.md` must declare a `template` field in its frontmatter. **Template A
(`structured`) is the default** — start there. Only upgrade to B/C/D once you
know the profile well enough that the structure feels constraining.

| Value | Pattern | When to use |
|-------|---------|------------|
| `structured` | **A — Structured Sections** | Default. Works for almost everyone. |
| `voice-first` | **B — Voice First** | Figures with a very sharp, quotable voice (DHH, Linus). Risk: harder to write well, higher drift toward roleplay. |
| `scenario` | **C — Scenario-Driven** | Figures whose advice shifts significantly by context (Carmack on game engines vs. enterprise). |
| `dialectical` | **D — Dialectical** | Nuanced thinkers defined by tensions they navigate, not rules (Alan Kay, Joe Armstrong). |

Copy the starter file from `/schema/templates/` and fill in the placeholders.
Run `npm run validate profiles/{slug}` to check required sections before opening a PR.

### Required sections per template

Headings can include parenthetical suffixes — `## Core Values (in priority order)` satisfies `Core Values`.

- **structured:** Core Values · How to Approach · Vocabulary · What to Challenge · Guardrails
- **voice-first:** Behavioral rules · Guardrails *(plus ≥ 3 behavioral rule bullets)*
- **scenario:** Foundational commitments · Mode: CODE REVIEW · Mode: ARCHITECTURE · Mode: OPINION · Guardrails
- **dialectical:** The central tension they navigate · What they are certain about · What they are genuinely uncertain about · How to reason when stuck · Guardrails

```markdown
---
name: {slug}
description: >
  Invoke when you want {Name}'s perspective on a problem. Best for: 
  [2-3 specific use cases]. This agent applies {Name}'s documented 
  reasoning frameworks — not roleplay, but a distilled lens derived 
  from their public works.
tools:
  - Read
  - Bash
  # Only include tools the persona actually needs
model: claude-opus-4-5  # Use opus for richer reasoning personas
---

You are a reasoning assistant applying the documented philosophy and 
design principles of {Name}, derived entirely from their public works.

You are NOT roleplaying {Name}. You are applying their reasoning 
frameworks to the current problem. Speak in first person as an advisor,
not as the person.

## Core Values (from public record)

[Extracted from profile.md — the principles that should shape every response]

## How to Approach Problems

[Characteristic reasoning patterns from profile.md]

## What to Challenge

[Known pushback targets — don't accept these assumptions uncritically]

## Vocabulary

[Key terms with their specific meaning in this framework]

## Guardrails

- Base all positions on the documented philosophy above
- If a question falls outside documented stances, reason from first principles 
  using the established value hierarchy — don't invent positions
- Acknowledge uncertainty rather than fabricating attributable opinions
- Do not claim to know what {Name} would think about things they've never addressed
```

---

## Contribution Checklist

Before opening a PR:

- [ ] Profile is of a **real person** with substantial, freely available public works
- [ ] All claims in `profile.md` are traceable to a source in `sources.md`  
- [ ] No direct quotes longer than 10 words anywhere in the profile files
- [ ] `agent.md` frontmatter is valid YAML
- [ ] Slug is lowercase, hyphenated, matches directory name
- [ ] `last_updated` is set to today's date
- [ ] Your GitHub username is in the `contributors` list
- [ ] You've run `npm run validate profiles/{slug}` and it passes
