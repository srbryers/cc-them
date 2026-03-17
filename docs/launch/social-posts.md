# Social Posts

## Twitter/X Thread

### Tweet 1 (Hook)
I built an open-source library of expert reasoning agents for Claude Code.

Rich Hickey reviewing your data model. Linus Torvalds on your systems code. April Dunford auditing your positioning.

Every stance sourced from public works — not training-data approximation.

`npx cc-them install rich-hickey`

### Tweet 2 (Differentiation)
The problem with "review this like Rich Hickey": Claude gives you plausible generics.

cc-them profiles are researched documents. Every stance traces to a specific talk, post, or design decision. The agent reasons from what they actually said — not what sounds right.

### Tweet 3 (How it works + proof)
One command, one 4KB file. Delete it if it doesn't change how you think:

`npx cc-them install rich-hickey`

Also works as an MCP server for Claude Desktop. 8 profiles today — engineering (Hickey, Torvalds, Carmack, Karpathy, Meier) and strategy (Hormozi, Dunford, Rachitsky).

[Attach: screenshot of before/after comparison from README]

### Tweet 4 (CTA)
It's community-maintained. Adding a profile = researching someone's public record + picking a reasoning template + running the validator.

Who's missing? DHH? Alan Kay? Kent Beck? If someone shaped how you think about building things, they probably belong here.

https://github.com/srbryers/cc-them

---

## Reddit r/programming

### Title
cc-them: Open-source library of sourced reasoning agents — get Rich Hickey, Torvalds, or Carmack to review your code in Claude Code

### Body
I've been building sourced reasoning agents for Claude Code — expert profiles where every position traces to a public talk, commit, or blog post.

The problem: telling an LLM "review this like Rich Hickey" gives you plausible generics. It blends in positions he never held, misses the priority order of his values, and flattens his vocabulary.

cc-them profiles are researched documents built from primary sources. Hickey's agent knows "simple" means "not interleaved," knows his priority order, and applies his actual vocabulary. Same rigor for Torvalds on data structures, Carmack on abstraction costs, and five others.

**How it works:**

```
npx cc-them list                  # see all profiles
npx cc-them preview rich-hickey   # see what you're getting
npx cc-them install rich-hickey   # install to .claude/agents/
```

Also works as an MCP server for any Claude client.

8 profiles ship today — 5 engineering (Hickey, Torvalds, Carmack, Karpathy, Sid Meier) and 3 strategy (Hormozi, Dunford, Rachitsky). It's community-maintained — anyone can add a profile by researching the public record and running the validator.

**Who's missing?** DHH, Alan Kay, Barbara Liskov, Joe Armstrong, Martin Fowler? If someone shaped how you think about building things, open a profile request issue.

GitHub: https://github.com/srbryers/cc-them

---

## Reddit r/ClaudeAI

### Title
I built sourced reasoning agents for Claude Code — Rich Hickey, Torvalds, Carmack, and 5 others as installable sub-agents

### Body
One thing I've found limiting about Claude Code: when you ask it to "think like X," it gives you a surface-level impression. It sounds right but flattens nuance, misses priority order, and invents positions.

I built cc-them — an open-source library of expert reasoning agents where every stance is sourced from public works (talks, commits, blog posts). One command installs a 4KB markdown agent into `.claude/agents/`.

```
npx cc-them install rich-hickey
# Then in Claude Code: "Use rich-hickey to review this data model"
```

**What's different from just prompting?** The agents are researched documents, not character prompts. Hickey's agent knows his actual priority order (information model first, then names, then state management), uses his real vocabulary ("complecting," "situated"), and reasons from his documented value hierarchy.

8 profiles today:
- **Engineering:** Rich Hickey, Linus Torvalds, John Carmack, Andrej Karpathy, Sid Meier
- **Strategy:** Alex Hormozi, April Dunford, Lenny Rachitsky

Works two ways:
- **CLI:** `npx cc-them install <slug>` → Claude Code sub-agent
- **MCP:** `npx cc-them-mcp` → works in Claude Desktop or any MCP client

It's open-source and community-maintained. Adding a profile = researching someone's public record + picking a reasoning template + running the validator. Who would you want to add?

GitHub: https://github.com/srbryers/cc-them
