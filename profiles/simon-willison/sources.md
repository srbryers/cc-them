# Sources: Simon Willison

All sources are freely available public posts, talks, or documentation.

## Foundational Posts

- [Prompt injection attacks against GPT-3](https://simonwillison.net/2022/Sep/12/) — simonwillison.net, September 12, 2022. The post that coined the term "prompt injection," drawing a parallel to SQL injection. Argues that untrusted user input flowing into LLM prompts is a fundamental security vulnerability with no easy parameterization fix.

- [The Dual LLM pattern for building AI assistants that can resist prompt injection](https://simonwillison.net/2023/Apr/25/dual-llm-pattern/) — simonwillison.net, April 25, 2023. Proposes a two-model architecture: a Privileged LLM with tool access that handles trusted user input, and a Quarantined LLM without tools that processes untrusted content. Acknowledges the solution is imperfect but is the best available structural defense.

- [The lethal trifecta for AI agents: private data, untrusted content, and external communication](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) — simonwillison.net, June 16, 2025. Defines the three conditions that together enable data theft via prompt injection: access to private data, exposure to untrusted content, and ability to externally communicate. Argues the only reliable defense is to eliminate one of the three legs entirely.

## LLM Usage & Engineering

- [Here's how I use LLMs to help me write code](https://simonwillison.net/2025/Mar/11/using-llms-for-code/) — simonwillison.net, March 11, 2025. Comprehensive guide to using LLMs for software development. Distinguishes "vibe-coding" (fully delegating to the model, acceptable for throwaway projects) from production coding (requires precise specifications, mandatory testing, human verification). Emphasizes that LLMs amplify existing expertise rather than replace it.

- [AI for Data Journalism: demonstrating what we can do with this stuff right now](https://simonwillison.net/2024/Apr/17/ai-for-data-journalism/) — simonwillison.net, April 17, 2024. Writeup of a talk at the Story Discovery at Scale conference at Stanford. Demonstrates 12 live use cases of LLMs for journalism, including failures alongside successes. Introduces "demo-driven development" as an explicit research methodology.

- [December in LLMs has been a lot](https://simonwillison.net/2024/Dec/20/december-in-llms-has-been-a-lot/) — simonwillison.net, December 20, 2024. Year-end analysis arguing that model efficiency gains and pricing collapse are the defining story of LLMs in 2024. Notes GPT-4-class capability became available locally on a laptop by year's end.

## Security & Agent Patterns

- [New prompt injection papers: Agents Rule of Two and The Attacker Moves Second](https://simonwillison.net/2025/Nov/2/new-prompt-injection-papers/) — simonwillison.net, November 2, 2025. Covers Meta's "Rule of Two" (agents should satisfy no more than two of: processing untrustworthy inputs, accessing sensitive systems, changing state externally) and a paper demonstrating that adaptive attacks bypass all 12 published prompt injection defenses at over 90% success rates.

- [My fireside chat about agentic engineering at the Pragmatic Summit](https://simonwillison.net/2026/Mar/14/pragmatic-summit/) — simonwillison.net, March 14, 2026. Covers test-driven development with agents, sandboxing practices, trust earned through sustained model use, and the lethal trifecta in the context of production agentic systems.

## Agentic Engineering Guide

- [Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns/) — simonwillison.net, published February 2026. Full guide covering what agentic engineering is, how coding agents work, subagent patterns, testing and QA strategies, and annotated prompt examples. Defines agentic engineering as "the practice of developing software with the assistance of coding agents."

  - [What is agentic engineering?](https://simonwillison.net/guides/agentic-engineering-patterns/what-is-agentic-engineering/) — Distinguishes agentic engineering from vibe-coding. Argues the engineer's role shifts to specifying problems, equipping agents with tools, and verifying results — not to being replaced.
  - [Subagents](https://simonwillison.net/guides/agentic-engineering-patterns/subagents/) — Covers when and how to dispatch subagents to preserve parent context windows, with sequential, parallel, and specialist-role patterns.
  - [How coding agents work](https://simonwillison.net/guides/agentic-engineering-patterns/how-coding-agents-work/) — Defines a coding agent as an LLM + system prompt + tool-calling loop, and explains token caching economics and reasoning model tradeoffs.

## Benchmarks & Model Evaluation

- [What happens if AI labs train for pelicans riding bicycles?](https://simonwillison.net/2025/Nov/13/training-for-pelicans-riding-bicycles/) — simonwillison.net, November 13, 2025. Explains his pelican benchmark (ask the model to produce an SVG of a California brown pelican riding a bicycle with spokes and correct anatomy). Argues that genuinely difficult creative benchmarks resist gaming because deception would be visible across related tasks.

## Datasette

- [Datasette](https://datasette.io/) — datasette.io. The project homepage, stating the mission: "Find stories in data." Describes Datasette as infrastructure for data journalists, archivists, governments, scientists, and researchers to publish data as an interactive website and API without managing backend infrastructure.
