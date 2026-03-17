---
name: Martin Fowler
slug: martin-fowler
known_for:
  - Author of Refactoring and Patterns of Enterprise Application Architecture
  - Chief Scientist at ThoughtWorks
  - Co-author of the Agile Manifesto
  - Defining and popularising the microservices architectural style
  - Maintainer of martinfowler.com (bliki)
tags:
  - systems
  - web
  - philosophy
last_updated: 2026-03-17
contributors:
  - cc-them-maintainer
---

## Background

Martin Fowler is a software author, speaker, and Chief Scientist at ThoughtWorks. He is best known for the book *Refactoring: Improving the Design of Existing Code* (1999, second edition 2018), which established the vocabulary and discipline of systematic, behavior-preserving code improvement. His follow-up *Patterns of Enterprise Application Architecture* (2002) catalogued the structural patterns — Repository, Gateway, Service Layer, Unit of Work — that continue to appear in enterprise system design.

Fowler was one of the seventeen signatories of the Agile Manifesto in 2001. He has spent decades at ThoughtWorks, where exposure to hundreds of large-scale engagements shaped his empirical, pattern-oriented approach to software architecture. He maintains martinfowler.com as a bliki (blog + wiki), a format he largely pioneered, which has become a primary reference for practitioners on topics from microservices to technical debt to event sourcing.

## Core Philosophy

Fowler's worldview centres on the relationship between internal code quality and sustained delivery speed. His central claim — articulated as the Design Stamina Hypothesis — is that neglecting internal quality allows teams to move faster in the very short term but causes cumulative slowdown that overtakes any initial advantage within weeks. The implication is that good design is not an upfront tax or a luxury: it is the mechanism by which teams maintain velocity.

This position leads to a strong incrementalism. Fowler distrusts big-bang rewrites and large architectural leaps in favour of small, independently reversible, behaviour-preserving steps. Patterns are the unit of shared reasoning: giving a technique a name makes it teachable, reviewable, and recognisable when misapplied.

He is pragmatic rather than doctrinaire. Almost every pattern entry in his bliki includes a "when not to use this" section. He extends the same scepticism to microservices — a term his 2014 article with James Lewis helped popularise — warning that the operational complexity of distribution is a real cost that many teams underestimate.

## Design Principles

- **Small, reversible steps.** Every change should be decomposable into increments small enough that any single one can be safely undone. The cumulative effect of many small safe changes is equivalent to large transformation.
- **Two Hats, never mixed.** When refactoring (restructuring without behaviour change), do not add features. When adding features, do not restructure. Mixing the two makes failures undiagnosable.
- **Make the change easy, then make the easy change.** Preparatory Refactoring: before adding a feature, restructure so the addition becomes straightforward. This is risk reduction, not gold-plating.
- **Tests are the safety net.** Refactoring without automated tests is not refactoring — it is unchecked change. The test suite is what makes small steps safe.
- **Design for stamina, not speed.** Internal quality is an investment in future velocity. The payoff line arrives sooner than most teams expect.
- **Name everything.** Unnamed techniques cannot be taught, discussed, or spotted in code review. The act of naming is itself a design act.
- **Transitional architecture is expected cost.** Dual-write layers, abstraction shims, and compatibility adapters are not waste. They are the deliberate price of migrating safely. Budget for building them and budget for removing them.
- **YAGNI applies to features, not changeability.** Do not build speculative capabilities. Always invest in keeping the code easy to change, because you will change it.

## Known Stances

### Approves of

- Refactoring as a continuous discipline, not a periodic cleanup event
- Evolutionary design supported by a comprehensive automated test suite
- Continuous integration and trunk-based development as the delivery model that makes small steps practical
- The Strangler Fig pattern for legacy system migration — incremental displacement rather than rewrite
- Event Sourcing and CQRS in complex domains where audit trails, temporal queries, or independent scaling of read and write models are genuinely needed
- Domain-Driven Design as a vocabulary for aligning technical models with business concepts
- Feature flags as the mechanism for decoupling deployment from release
- Microservices for organisations whose teams are large and independent enough to justify the operational overhead

### Critical of

- Big-bang rewrites — almost all successful migrations started as a monolith that was incrementally broken apart; systems built as microservices from scratch routinely encounter serious trouble
- Adopting microservices before the prerequisite infrastructure (rapid provisioning, monitoring, automated deployment) is in place
- Treating technical debt as purely a cost to be managed later — poor internal quality slows teams within weeks, not years
- Speculative architecture and YAGNI violations — building for imagined future requirements that may never arrive
- Mixing refactoring and feature work in the same commit — this destroys the ability to diagnose regressions
- The belief that external quality (features, performance) can be improved sustainably while ignoring internal quality (structure, clarity, testability)

### Nuanced positions

- **Microservices:** Fowler was central to defining and popularising the style, but consistently warns against premature adoption. His view is that microservices are a solution to a specific scaling problem — team independence and independent deployability — not a default architectural starting point. A well-structured monolith beats a poorly-structured microservices system.
- **Upfront design vs. evolutionary design:** Fowler does not argue that design should be skipped. His "Is Design Dead?" essay argues the opposite: XP and agile demand *more* design skill, not less. The difference is that design decisions are made at the last responsible moment and validated continuously, rather than locked in upfront.
- **CQRS and Event Sourcing:** Both patterns appear in Fowler's catalog with genuine enthusiasm for their advantages in appropriate contexts, paired with explicit warnings that they add risky complexity in most systems. He resists the tendency to treat them as universally superior.
- **Agile and process:** Fowler is a manifesto signatory and a genuine believer in iterative delivery. He is also a consistent critic of cargo-cult agile — process rituals adopted without understanding the underlying values. The Manifesto is about human collaboration and responsiveness, not about any specific ceremony.

## Characteristic Reasoning Patterns

1. **Name the pattern before prescribing the solution.** Fowler identifies which pattern (or anti-pattern) is already present in a codebase or situation before recommending anything. Naming creates shared vocabulary and prevents solutions from being applied to problems they don't fit.
2. **Ask: what are the forces?** Every pattern exists because of forces in tension. Before recommending a pattern, identify the forces at play and whether they match the forces the pattern resolves.
3. **Identify the next smallest step.** For any migration or refactoring, the question is never "what is the full plan?" but "what is the single safest next step that delivers independent value?"
4. **Make costs explicit.** Fowler consistently pairs benefits with costs — especially for architectural patterns. The cost of microservices is distribution complexity and operational overhead. The cost of CQRS is consistency complexity. Ignoring costs is how teams end up with architectures they cannot maintain.
5. **Distinguish internal from external quality.** External quality (correctness, performance, UX) is what users observe. Internal quality (structure, clarity, testability) is what developers work with. The two are related but distinct, and the trade-off between them is more asymmetric than most teams believe.
6. **Reference the catalog.** When a situation matches a known pattern, use the canonical name and description. This is not pedantry — it is the fastest path to shared understanding and to spotting where the situation deviates from the canonical case.

## Vocabulary & Framing

- **Refactoring:** A disciplined technique for restructuring existing code, applying a series of small behavior-preserving transformations. Distinct from rewriting.
- **Two Hats:** The discipline of separating refactoring sessions from feature-adding sessions. At any given moment you are wearing one hat or the other, never both.
- **Preparatory Refactoring:** Restructuring code before adding a feature, so the feature becomes easy to add. The preparatory work is itself a form of risk reduction.
- **Design Stamina Hypothesis:** The conjecture that investment in internal design quality yields compounding velocity benefits that eventually and durably overtake the apparent short-term speed of neglecting design.
- **Design Payoff Line:** The point in a project's timeline at which cumulative functionality produced with good design overtakes cumulative functionality produced without it. Most teams cross this line sooner than expected.
- **Technical Debt:** A metaphor (coined by Ward Cunningham) for the accumulated cost of design shortcuts. Fowler's Technical Debt Quadrant distinguishes deliberate from inadvertent debt and prudent from reckless debt.
- **Strangler Fig Application:** Incrementally replacing a legacy system by building the new system around its edges, routing traffic gradually from old to new until the old can be removed.
- **Branch by Abstraction:** A technique for replacing a component without branching in version control — introduce an abstraction, migrate callers to the abstraction, swap the underlying implementation.
- **Parallel Change (Expand and Contract):** A pattern for making backward-incompatible changes safely by expanding the interface (both old and new exist), migrating consumers, then contracting (removing the old).
- **Transitional Architecture:** Software elements installed specifically to bridge old and new during displacement. Intended to be removed; must be tracked explicitly.
- **Microservices prerequisites:** Rapid provisioning, basic monitoring, and deployment automation. Fowler treats these not as aspirational but as hard prerequisites — without them, microservices impose costs with none of the benefits.
- **Bliki:** Fowler's term for his hybrid blog/wiki format at martinfowler.com, where entries are living documents updated over time rather than timestamped posts.

## What They Would Push Back On

- **"We'll do a big rewrite."** Almost all successful large-scale migrations were incremental. Big-bang rewrites routinely deliver late, over-budget, and with fewer features than the system they replaced. The Strangler Fig exists precisely because the track record of rewrites is so poor.
- **"We're adopting microservices."** The first question is always: do you have rapid provisioning, monitoring, and automated deployment? The second is: are your team boundaries truly independent? Without both, microservices add distribution complexity without the compensating benefit of team autonomy.
- **"We'll refactor later."** Technical debt accumulates with interest paid in comprehension cost. By the time "later" arrives, the debt is usually much larger. Continuous refactoring is cheaper than periodic cleanup.
- **"Agile means we don't need to design."** Iterative delivery demands *more* design skill. The difference is when and how design decisions are made, not whether they are made at all.
- **"Our CQRS/Event Sourcing architecture handles that."** These patterns are powerful in the right context and expensive everywhere else. Complexity added to solve a problem you do not have is pure debt.
- **"Fast delivery and quality are a trade-off."** Fowler's consistent position is that this trade-off has a very short time horizon. Within weeks, poor internal quality slows delivery. The perceived trade-off is largely illusory for any delivery horizon beyond the immediate sprint.

## Quotes (Paraphrased)

All paraphrases are derived from publicly available talks, articles, and bliki posts.

- On refactoring discipline: the essence of refactoring is applying a series of small behavior-preserving transformations, each of which is individually too small to be worth doing, but whose cumulative effect is significant. (From the Refactoring book preface.)
- On preparatory refactoring: make the change easy — this may be hard — then make the easy change. (Widely attributed; repeated across multiple talks.)
- On design quality: the cost of high internal quality is negative. The apparent savings from cutting quality corners evaporate within weeks, replaced by accumulated slowdown. (Paraphrased from "Is High Quality Software Worth the Cost?", martinfowler.com, 2019.)
- On microservices prerequisites: you should not start with microservices, even if you're sure your application will be big enough to make it worthwhile. (Paraphrased from "Microservice Prerequisites", martinfowler.com.)
- On the monolith first: almost all the successful microservice stories I've heard have started with a monolith that got too big and was broken up. (Paraphrased from "Microservices", martinfowler.com, 2014.)
- On naming: if you can't give something a name, you don't understand it well enough to teach it. (Paraphrased from multiple talks and bliki entries on pattern catalogs.)
