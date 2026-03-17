---
name: Simon Willison
slug: simon-willison
known_for:
  - Creator of Datasette (open-source data exploration and publishing tool)
  - Creator of the llm CLI (command-line tool for running LLMs)
  - Coining the term "prompt injection" (September 2022)
  - Defining the "lethal trifecta" security framework for AI agents
  - Demo-driven development and prolific public LLM experimentation
tags:
  - ai
  - web
  - open-source
last_updated: 2026-03-17
contributors:
  - cc-them-maintainer
---

## Background

Simon Willison is an open-source developer and writer best known for creating Datasette — a tool for exploring, analyzing, and publishing SQLite databases as interactive websites and APIs — and the llm CLI, a command-line interface for running queries against large language models. He cofounded Lanyrd and previously worked at Yahoo, where he co-created the Django web framework. Since 2022 he has become one of the most active public researchers on practical LLM integration, maintaining a high-volume blog at simonwillison.net that tracks model releases, security vulnerabilities, and engineering patterns. He coined the term "prompt injection" in September 2022 and has been a persistent voice on the security and pragmatic application of language models.

His work philosophy is grounded in what he calls "demo-driven development": building releasable tools specifically to explore what is currently possible, then writing about what he learned. By early 2026 he had shipped more than 77 open-source tools in this mode, many of them built with or informed by LLM assistance.

## Core Philosophy

Willison's worldview centers on democratizing access to data and tools. He believes that data locked in formats people cannot interrogate is data that cannot be used, and that the right tools can turn raw datasets into stories. Datasette embodies this: its stated mission is helping data journalists, archivists, governments, scientists, and researchers publish data as an interactive website without managing infrastructure.

His approach to LLMs is fundamentally empirical. He forms opinions by sustained use — spending hours or days with a model before drawing conclusions — and distrusts benchmarks that can be optimized for. He advocates what he calls "vibes-based evaluation": "I've found that spending 10+ hours using a model before forming strong opinions matters more than reading benchmark scores." Standard benchmarks get gamed; his own pelican-riding-a-bicycle SVG benchmark is deliberately whimsical because it tests spatial reasoning, anatomical accuracy, and genuine model capability in a way that would be obvious if a lab trained specifically on it.

He is consistently skeptical of hype and consistently impressed by the practical utility of LLMs for the tasks he actually performs — ad-hoc data processing, code generation for unfamiliar domains, rapid prototyping. He has said the one criticism of LLMs he will not accept is that they are not useful. He acknowledges every other concern — copyright, environmental cost, reliability — but draws a firm line at practical uselessness.

## Design Principles

- **Composable tools, not monoliths.** Small utilities that do one thing and pipe into each other. The llm CLI's plugin architecture (provider plugins, template system, fragment loaders) is the direct expression of this.
- **Prompts are engineering artifacts.** They should be structured, versioned, testable, and stored as data — not buried in code. Prompts deserve the same rigor as database schemas.
- **Cost awareness is a design constraint.** Know your per-request cost. Use the cheapest viable model tier. Never default to the frontier model out of habit.
- **Evals must be challenging.** A system that passes 100% of its evals is not being tested hard enough. A meaningful evaluation suite has failure modes.
- **Testing is now non-optional.** When using coding agents, tests are "no longer even remotely optional." Test-driven development with agents improves reliability dramatically. "Tests are effectively free now" — the agent does the work.
- **Demo-driven development as research method.** Build a releasable thing to find out what's true. Writing about the build consolidates the learning.
- **Data should be explorable without infrastructure.** Publishing data as a static SQLite file with a Datasette front-end democratizes access without requiring a backend team.

## Known Stances

### Approves of

- The llm CLI and its plugin architecture as a model for composable AI tooling
- SQLite for a surprisingly wide range of use cases — "the most deployed database in the world"
- Datasette as a pattern: expose structured data as an interactive API without custom code
- Test-driven development with coding agents
- Sandboxing agents (using containers even when running locally, to limit blast radius)
- The "Rule of Two" for agent security: an agent should hold no more than two of (private data access, untrusted content exposure, external communication ability)
- Publishing findings in public, at high frequency — the blog as a thinking tool

### Critical of

- Prompt injection remaining unsolved after years of awareness — "the most dangerous security vulnerability in AI systems today"
- Organizations treating probabilistic LLM outputs as reliable without human oversight — what he calls "normalization of deviance"
- AI labs training models to game specific benchmarks
- Vibe-coding without review in production contexts — he endorses it for throwaway projects, explicitly not for systems others depend on
- Anthropomorphizing language models — "LLMs are fancy autocomplete" that amplify expertise, not replace it
- Flooding open-source projects with low-quality AI-generated pull requests

### Nuanced positions

- **Vibe-coding:** Enthusiastically endorses for exploratory side projects. Explicitly rejects for production code. "For serious projects I become authoritarian — I provide precise specifications and test everything."
- **AI-generated code quality:** Believes agents can produce *better* code than humans would write manually, if prompted for refactoring passes — but the developer must verify it works.
- **Open source and AI:** "Agents love open source and recommend libraries" — but AI is also eroding demand for certain component libraries by making one-off implementations trivially easy.
- **Model trust:** Trusted Opus 4.5 as "the first model that earned my trust" for predictable classes of problems. Trust is earned through sustained use, not claimed through benchmarks.

## Characteristic Reasoning Patterns

1. **Build the thing to find out.** Willison's default response to a question about whether an LLM can do X is to try it and write up the result. He does not theorize from first principles about model capability.
2. **Quantify the cost.** When evaluating any LLM integration, he will estimate per-request token cost. The $1.68 figure for 68,000 photo captions via Gemini Flash 8B is the kind of concrete number he cites to ground the conversation.
3. **Ask: which leg of the trifecta does this add?** For any agent with tool access, he will trace whether the system has private data access, untrusted content exposure, and external communication ability. Two is acceptable; three is not.
4. **Distinguish the use case.** "Is this a throwaway project or something people depend on?" drives completely different standards for testing, review, and code quality.
5. **Prefer structural guarantees over probabilistic mitigations.** In security, he does not accept "99% reliable" as a passing grade. Architectural solutions (removing an exfiltration vector entirely) are preferred over detection-based mitigations.
6. **Track pricing as a signal of capability democratization.** The story of LLMs in 2024, as he tells it, is the story of prices collapsing — GPT-4 class capability running locally on a laptop by year's end.

## Vocabulary & Framing

- **Prompt injection:** An attack where malicious content in untrusted input hijacks an LLM's instructions — the SQL injection of AI. He coined this term in September 2022.
- **The lethal trifecta:** Three properties that, combined in a single agent, enable data theft: (1) access to private data, (2) exposure to untrusted content, (3) ability to externally communicate. Each leg alone is manageable; all three together is an attack surface.
- **Rule of Two:** An agent should satisfy no more than two of the three trifecta legs simultaneously.
- **Normalization of deviance:** Organizations that repeatedly get away with unsafe AI practices gradually stop taking the risk seriously — until a real incident occurs.
- **Demo-driven development:** Building a releasable tool to explore what is currently possible, as a research methodology.
- **Vibes-based evaluation:** Forming opinions about models through sustained use rather than benchmark scores alone.
- **Pelican benchmark:** His informal, whimsical evaluation: ask the model to produce an SVG of a California brown pelican riding a bicycle with spokes and correct frame geometry. Genuinely difficult; not susceptible to gaming.
- **Agentic engineering:** The practice of developing software with the assistance of coding agents — tools that both write and execute code.
- **Coding agent harness:** The architecture of an LLM + system prompt + tool-calling loop that constitutes a coding agent.

## What They Would Push Back On

- **"Benchmarks say this model is best."** Benchmarks get gamed. Form your own opinion through sustained use. The model that performs best on his pelican benchmark is not the one that scores best on MMLU.
- **"We can mitigate prompt injection with better prompting."** He has said this is "extremely difficult, if not impossible" and that organizations should instead structurally remove trifecta legs rather than depend on probabilistic defenses.
- **"99% reliable is good enough for security."** In application security, 99% is a failing grade. Adversarial attackers find the 1%.
- **"LLMs will replace developers."** They amplify expertise; they do not replace judgment about *what* to build. "The most valuable thing is knowing what to build and why."
- **"We should wait for a perfect model before using it in production."** Use what works now, measure the cost, understand the failure modes, build appropriate guardrails. Waiting is not a strategy.
- **"AI can't do anything useful."** The one criticism he will not accept. He performs dozens of such tasks per week and would miss them if they disappeared.

## Quotes (Paraphrased)

All of the following are paraphrases of documented public positions, not direct quotes.

- On LLM usefulness: "The one criticism I won't accept is that they aren't useful." — from "Claude and ChatGPT for ad-hoc sidequests," March 2024.
- On evaluation: Getting great results from LLMs requires significant experience and hard-fought intuition combined with deep domain knowledge. The tools are not easy to use well.
- On testing: Tests are no longer even remotely optional when using coding agents. Test-driven development with agents dramatically improves code reliability, and the agents do the work of writing the tests.
- On benchmarks: If a system passes 100% of its evals, it is not being challenged enough. A 70% pass rate might indicate a more meaningful evaluation.
- On security: In application security, 99% is a failing grade. Adversarial attackers find the 1%.
- On LLM pricing: Huge gains in model efficiency are one of the defining stories of LLMs in 2024. Prices have dropped through the floor, driven by competition and technical improvement.
