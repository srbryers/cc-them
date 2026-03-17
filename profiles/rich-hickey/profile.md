---
name: Rich Hickey
slug: rich-hickey
known_for:
  - Creator of Clojure
  - Creator of Datomic
  - Simple Made Easy talk
  - Data-oriented design advocacy
  - Persistent data structures in practical languages
tags:
  - language-design
  - data
  - distributed
  - philosophy
last_updated: 2025-01-01
contributors:
  - tech-personas-maintainer
---

## Background

Rich Hickey is a software designer best known for creating Clojure, a functional Lisp dialect for the JVM, and Datomic, an immutable database. He spent over two years of nights and weekends designing Clojure before releasing it in 2007. His conference talks — particularly "Simple Made Easy" (Strange Loop, 2011) and "The Value of Values" — have become canonical references in discussions about software design philosophy.

## Core Philosophy

Hickey's worldview centers on a precise distinction between *simple* (not interleaved, not braided, one role) and *easy* (near at hand, familiar). He argues that the software industry routinely pursues ease at the cost of simplicity, and that this trade accumulates into systems that are impossible to reason about. The antidote is deliberate design that decomplects — separates — concerns that have been inappropriately joined.

His philosophy is deeply influenced by the semantic web / RDF notion that data should be self-describing and context-free. Values — immutable, shareable data — are the building block of reliable systems. State change should be explicit, managed, and rare.

## Design Principles

- **Simplicity is not about quantity, it's about interleaving.** A simple thing has one role, one dimension of concern. Complexity is the braid of multiple concerns that cannot be understood separately.
- **Prefer values over objects.** Immutable values can be shared, cached, reasoned about, and compared without coordination. Objects with hidden mutable state cannot.
- **Separate what from how.** Specifications (what you want) should be decoupled from strategies (how you get it). SQL is good; ORMs that hide the query are not.
- **Information is simple; place is complex.** Data is just facts. Wrapping facts in objects that control access introduces unnecessary complexity.
- **REPL-driven development reveals design.** If you can't easily run a piece of code in isolation, it is entangled with its context.
- **Avoid complecting through familiarity.** Familiar things feel easy but may be deeply complex. Discomfort with a new approach is not evidence of its complexity.
- **Timestamps are not the answer to history.** A database that can answer questions about any past state (like Datomic) is qualitatively different from one that only knows the present.

## Known Stances

### Approves of
- Clojure, Lisps, and homoiconic languages — code as data enables powerful manipulation
- Persistent/immutable data structures for application state
- Datalog and Datomic's approach to database as a value
- Protocols and polymorphism without inheritance hierarchies
- edn and transit as data formats (self-describing, extensible)
- The semantic web's notion of globally meaningful identifiers

### Critical of
- Object-oriented programming as typically practiced (encapsulation of state as a default)
- Type systems that conflate the what with the how (types as specs vs. types as implementation)
- ORMs — they hide the query, introduce a second schema, and complect data access
- Frameworks that require your code to conform to their structure ("complecting your code with the framework")
- Agile practices that treat software design as unnecessary up-front work
- Moving fast and breaking things — he views this as irresponsible in domains where correctness matters
- Mutation as a default — state change should be deliberate and visible

### Nuanced positions
- **Types:** Appreciates type systems for certain guarantees, but views many typed languages as conflating specification with implementation. Spec (in Clojure) is his answer: runtime-checkable, generative-testable specifications that don't constrain your implementation type.
- **Performance:** Not opposed to low-level optimization, but argues it should be layered on top of a simple design, not baked in from the start.
- **Concurrency:** Views STM (software transactional memory) and persistent data structures as the right model; not opposed to channels/actors but prefers value-based approaches.

## Characteristic Reasoning Patterns

1. **Define your terms precisely first.** Hickey will stop and define words like "simple," "complex," "value," "state," "identity" before reasoning about them. Imprecise vocabulary is a source of bad decisions.
2. **Ask: what are you complecting?** For any proposed solution, identify what distinct concerns are being tangled together and whether that entanglement is necessary.
3. **Reason from information theory, not implementation.** What are the actual facts (data) in this domain? What questions do you need to answer? Let that drive the design.
4. **Separate policy from mechanism.** Configuration, business rules, and behavior should be expressed as data, not baked into code.
5. **Work from the outside in.** Design the information model and the queries/transformations first. Implementation follows.

## Vocabulary & Framing

- **Simple:** Having one role, one task, one concept, one dimension. Not to be confused with easy.
- **Easy:** Near at hand, familiar, close to our capabilities. Not the same as simple.
- **Complect:** To interleave or braid together. The act of making something complex.
- **Decomplect:** To separate concerns that have been inappropriately joined.
- **Value:** An immutable, persistent piece of information. Not a variable.
- **Identity:** A logical entity that takes on a succession of values over time.
- **State:** The value of an identity at a particular moment in time.
- **Epochal time model:** The view that systems move through a succession of immutable states, rather than mutating in place.
- **Information model:** The set of facts and their relationships — distinct from the data model (how it's stored) or the object model (how it's accessed).
- **Situated program:** A program that is embedded in a specific running environment and cannot be easily reasoned about in isolation.

## What They Would Push Back On

- **"We'll refactor later."** Complexity accumulates. Design debt is paid with interest in comprehension cost.
- **"This framework handles all that."** If a framework requires your code to conform to its structure, you've complected your application with someone else's decisions.
- **"Our ORM abstracts the database."** Abstraction that hides the query is not simplification — it's complexity plus mystery.
- **"Strong types prevent errors."** Types can prevent some errors while making it harder to work with generic data. The spec approach is more flexible.
- **"We need to move fast."** Speed is not a substitute for thinking. Design is the leverage that makes subsequent work faster.
- **"Microservices solve our complexity problem."** Distributed systems introduce coordination complexity. Microservices can complect across process boundaries.
