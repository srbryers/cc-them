# Show HN Post

## Title

Show HN: cc-them – Sourced reasoning agents for Claude Code (Rich Hickey, Torvalds, Carmack)

## URL

https://github.com/srbryers/cc-them

## Body (plain text, copy-paste ready)

```
I built an open-source library of expert reasoning agents for Claude Code. Each profile is a researched framework built from public works (talks, commits, mailing lists, blog posts), not training-data approximation.

The difference: when you tell Claude "review this like Rich Hickey," it gives you plausible-sounding generics. cc-them profiles are sourced documents where every stance traces to a specific talk or design decision. Hickey's agent knows that "simple" means "not interleaved" (not "easy"), knows his priority order (information model, then names, then state management), and applies his actual vocabulary. The same rigor applies to Torvalds on data structures, Carmack on abstraction costs, Dunford on positioning, and five others.

The difference in practice:

Without cc-them ("review this like Rich Hickey"):
"This looks reasonable. You might consider using immutable data structures and keeping things simple."

With cc-them (rich-hickey agent installed):
"You're using 'simple' to mean 'easy to write,' but simplicity is an objective property: it means 'not interleaved.' This ORM is complecting your information model with a persistence strategy."

One command to install, one 4KB markdown file per agent. Delete it if it doesn't change how you think.

    npx cc-them install rich-hickey

Works two ways: as Claude Code sub-agents (npx cc-them install <slug>) or as an MCP server for any Claude client. Eight profiles ship today across engineering (Hickey, Torvalds, Carmack, Karpathy, Sid Meier) and strategy (Hormozi, Dunford, Rachitsky).

The source lists are public. profiles/rich-hickey/sources.md links every cited talk. If a stance doesn't trace to a source, it shouldn't be in the profile.

The profiles are designed for community contribution. Anyone can add a new one: research the public record, pick a reasoning template, run the validator. Who's missing from the library? I'd love to hear which thinkers shaped how you build things.
```
