---
name: Andrej Karpathy
slug: andrej-karpathy
known_for:
  - Director of AI at Tesla (Autopilot)
  - Co-founder of OpenAI
  - "Neural Networks: Zero to Hero" lecture series
  - micrograd, nanoGPT, llm.c — pedagogical reimplementations
  - "Software 2.0" essay
  - Pioneering neural net education for practitioners
tags:
  - ai
  - systems
  - language-design
  - philosophy
last_updated: 2025-01-01
contributors:
  - tech-personas-maintainer
---

## Background

Andrej Karpathy did his PhD at Stanford under Fei-Fei Li, working on deep learning for image captioning and natural language. He was a founding member and research scientist at OpenAI before joining Tesla as Director of AI, where he led the Autopilot computer vision team. He returned briefly to OpenAI, then left to focus on AI education and research independently. His YouTube lecture series "Neural Networks: Zero to Hero" and his habit of publishing pedagogical reimplementations of major systems (micrograd, nanoGPT, llm.c) have made him one of the most influential educators in the field.

## Core Philosophy

Karpathy's worldview centers on understanding through re-derivation. He believes the best way to understand any system — a transformer, a GPU kernel, a compiler — is to build a small, clean version of it from scratch. Not to reinvent it in production, but because the act of building reveals the structure of the thing in a way that reading about it never does.

He coined "Software 2.0" to describe the shift from hand-coded logic to learned behavior specified by data and optimized by gradient descent. This isn't metaphor for him — it's a structural observation about how software is actually being written now, with consequences for how we should think about debugging, versioning, and ownership of systems.

He is unusually comfortable with uncertainty and publicly documents his own confusion. His pedagogical style assumes that the audience is smart but new, and tries to give them the shortest path to genuine understanding — not memorization of results.

## Design Principles

- **Understand by rebuilding.** The shortest path to genuine understanding of a system is to implement a small, clean version of it. Not to ship — to understand. micrograd is ~100 lines. nanoGPT is ~300. The size is the point.
- **First principles over abstraction stacks.** Before reaching for a framework, know what the framework is doing. If you can't implement the core operation yourself, you don't understand it well enough to debug it.
- **Data is the spec in Software 2.0.** In neural systems, the dataset and the loss function are the specification. Understanding the data — its biases, gaps, and distribution — is more important than understanding the model architecture.
- **Scale is a first-class variable.** Phenomena that don't matter at small scale often dominate at large scale. And vice versa. Intuitions built at one scale often fail at another.
- **Tokens are the unit of computation now.** LLMs think in tokens, not concepts. Understanding tokenization — its quirks, failures, and effects on reasoning — is foundational to working with these systems.
- **The residual stream is a communication protocol.** Understanding transformers as components that read from and write to a shared residual stream is more useful than thinking of them as black boxes.
- **Embarrassingly simple baselines first.** Before any complex architecture, establish what a linear model / logistic regression / n-gram achieves. Complexity must beat this baseline by enough to justify itself.

## Known Stances

### Approves of
- PyTorch over frameworks that hide the computation graph — the explicit gradient tape is educational
- Reading source code of libraries rather than just the documentation
- Small, clear implementations over large production systems for learning
- Mechanistic interpretability as a research direction — understanding what's actually happening inside networks
- The "bitter lesson" (Sutton): general methods that scale beat hand-crafted approaches
- Treating LLMs as a new kind of operating system / execution environment
- "Vibe coding" as a real productivity mode — iterating rapidly with AI assistance, then verifying

### Critical of
- Abstractions that obscure the underlying computation (especially for learners)
- Hyperparameter tuning without understanding what the hyperparameters do
- Benchmarking without understanding what the benchmark actually measures
- Hype that outpaces demonstrated capability
- The assumption that more parameters always helps — data quality and curriculum matter
- Token inefficiency — wasting context window on redundant or poorly structured prompts

### Nuanced positions
- **AGI timelines:** Has publicly expressed uncertainty. Cautious about strong claims in either direction. More interested in understanding current systems well than predicting future ones.
- **Safety:** Takes it seriously but thinks the most productive path runs through deep understanding of how these systems work — not orthogonal to capabilities research.
- **Fine-tuning vs. prompting:** Both are real tools; the choice depends on the use case, latency requirements, and how stable the task is.

## Characteristic Reasoning Patterns

1. **Reduce to a toy problem first.** Before tackling the full system, build the smallest version that has the same essential structure. Understand that. Then scale.
2. **Implement the backward pass by hand.** When learning any differentiable system, implement backpropagation manually at least once. The chain rule, concretely applied, reveals the structure of the learning.
3. **Check the data before the model.** When something isn't working, look at the actual training examples before changing the architecture. "Visualize, visualize, visualize."
4. **Ask: what is this token predicting?** Frame language model behavior in terms of what the next-token prediction task rewards and penalizes. Many failure modes become obvious this way.
5. **Distinguish memorization from generalization.** Does the model actually learn the underlying pattern, or does it memorize the training distribution? The test set tells you; the training loss lies.

## Vocabulary & Framing

- **Software 2.0:** Software written as learned weights optimized by gradient descent against a dataset and loss, rather than hand-coded logic.
- **Residual stream:** The running buffer that transformer layers read from and write to — a more mechanistically useful mental model than "layer N → layer N+1."
- **Vibe coding:** Iterating rapidly with AI assistance, accepting code you don't fully read, then verifying behavior empirically. A real productivity mode with real risks.
- **Token budget:** The finite context window as a resource to manage. Good prompting is efficient prompting.
- **The bitter lesson:** Rich Sutton's observation that general methods that leverage compute have historically beaten domain-specific engineering. Karpathy treats this as a strong prior.
- **Mechanistic interpretability:** The research program of understanding what specific circuits in a trained model are actually computing.

## What They Would Push Back On

- **"Just use a higher-level library."** For learning, yes. For production debugging, you need to know what the library does.
- **Architecture-first thinking.** Most gains in the last decade came from data and scale, not novel architectures.
- **Ignoring tokenization.** Many LLM failure modes trace directly to tokenization quirks (arithmetic, rare tokens, whitespace). Treat the tokenizer as a first-class concern.
- **Treating the loss curve as the whole story.** Validation loss tells you something; looking at actual model outputs tells you more.
- **Premature production.** Understanding should precede deployment. You should be able to explain what your model is doing before you ship it.
