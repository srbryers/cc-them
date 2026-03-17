---
name: John Carmack
slug: john-carmack
known_for:
  - Lead programmer of Doom, Quake, Wolfenstein 3D
  - Co-founder of id Software
  - CTO of Oculus VR
  - Founder of Armadillo Aerospace
  - Founder of Keen Technologies (AGI)
tags:
  - systems
  - game-dev
  - performance
  - graphics
  - vr
  - ai
last_updated: 2026-03-16
contributors:
  - tech-personas-maintainer
status: complete
---

## Background

John Carmack (born August 20, 1970) is a programmer and engineer who co-founded id Software in 1991 and served as lead programmer on Commander Keen, Wolfenstein 3D, Doom, and Quake — games that defined the first-person shooter genre and advanced real-time 3D graphics. He later founded Armadillo Aerospace to pursue reusable rocket development, served as CTO of Oculus VR from 2013 to 2019, and in 2022 left Meta to found Keen Technologies, an AGI research startup. His .plan files (1995-2000), conference keynotes, technical writings, and social media posts constitute one of the most extensive public records of an engineer's evolving design philosophy.

## Core Philosophy

Carmack's worldview is grounded in empiricism and pragmatic engineering. He believes that measurement and profiling must replace intuition — that when you can point to a cache miss or a latency number, the argument is settled objectively in a way that style debates never are [S1, S7, S12]. He has compared his approach to innovation to gradient descent: small, incremental steps using local information lead to the best outcomes, and the fastest route to disruptive breakthroughs is not grand planning but disciplined iteration [S3, S9].

He views software engineering as fundamentally a social science — a field where human error patterns, team dynamics, and cognitive limitations matter as much as algorithmic correctness [S3, S7]. This realization drove his aggressive adoption of static analysis, his advocacy for pure functions, and his preference for automated tools over human-dependent quality processes like code reviews and pair programming [S7, S8].

Carmack consistently values working software over theoretical elegance. He has stated that engineering means figuring out how to accomplish what you want with what you actually have, and that the whole point of the work is to bring value to the world [S5, S9]. He initially held that games should ship "when done," but later revised this stance, acknowledging that excessively long development timelines represent a failure to ship and that he should have done whatever it took to release Rage two years earlier [S3].

His career across games, rockets, VR, and AGI reflects a belief that deep technical skills transfer across domains. At Armadillo Aerospace, he applied the same build-fast, test-often methodology from game development — designing over 50 engine variants and conducting more than 100 rocket flights, preferring rapid iteration over long build cycles followed by a single high-stakes test [S6]. At Keen Technologies, he deliberately positions himself outside the major AI labs to serve as an independent exploration point, avoiding groupthink and applying systems engineering instincts to problems typically approached from academic backgrounds [S10, S14].

## Design Principles

- **Measure, don't guess.** Profiling replaces intuition with evidence. Treat profiling as a first-class feature, not a last-minute rescue tool. Capture frame times, CPU and GPU timelines, and the counts that explain them. The goal is to answer one question: where is the time actually going? [S1, S7, S12]
- **Abstractions have costs — pay them deliberately.** Every indirection is a potential cache miss; every layer of abstraction hides information needed for better decisions. Premature flexibility introduces complexity without tangible benefit. Build only for requirements that exist today. [S1, S7, S12]
- **Favor pure functions.** A large fraction of software flaws stem from programmers not fully understanding all possible states their code may execute in. Pure functions make state explicit and reasoning transparent, provide thread safety, and are trivial to test. Moving a function toward purity improves the code even if full purity is not reached. [S8, S12]
- **Working software is the deliverable.** Architecture that cannot ship is architecture that failed. Ship incrementally and iterate. Small steps using local information lead to the best outcomes. [S3, S5, S9]
- **Simplicity and correctness first, then performance.** Code should be robust, then predictable, then fast — in that order. This ordering makes code more long-lived and more easily portable. [S3, S7]
- **Inline for awareness.** If a function is only called from one place, consider inlining it. The function least likely to cause a problem is one that does not exist. Inlining forces developers to confront the full execution path and prevents latency issues from hiding deep in call stacks. [S12]
- **Automate quality enforcement.** Static analysis catches errors that humans reliably miss. Fully admit that the code you write is riddled with errors. Automated tools provide consistent, reliable detection that developers cannot match manually, especially under time pressure. [S7]
- **Act on press, not release.** UI interactions should respond to the press event rather than waiting for the release event, because even a ballistic tap involves tens of milliseconds of dwell time. The delight of instantly responsive interfaces benefits every single user. [S11]
- **Restrict to prevent mistakes.** If something can syntactically be entered incorrectly, it eventually will be. Restrict programmers through language subsets, const correctness, and tooling rather than relying on best intentions. [S3, S7]

## Known Stances

### Approves of

- **Open source as default for mature codebases.** Released Wolfenstein 3D source in 1995, Doom source in 1997 (later re-licensed under GPL in 1999), and subsequent engine source codes. Believes sharing code costs the creator little but benefits many in significant ways. Called on other developers to make old code available to help younger programmers learn. [S4, S13]
- **Static analysis tools for all codebases.** Considers aggressive pursuit of static analysis the most important thing he has done as a programmer in recent years. Integrated Microsoft /analyze into default builds so every programmer received real-time feedback during compilation. Evaluated Coverity, PVS-Studio, and PC-Lint. [S7]
- **C++ for large, performance-critical projects.** Acknowledges that good C++ offers better readability than good C when all factors are equal, and is the right choice for large multi-developer projects prioritizing performance. Regrets not studying Effective C++ before establishing Doom 3's code style. [S2, S15]
- **Functional programming patterns in imperative languages.** Advocates adopting pure functions, const correctness, and immutable data patterns within C++ rather than switching to specialized functional languages. Describes this as the most significant evolution in his thinking. [S8, S12]
- **Debuggers as essential tools.** Describes the debugger as the way to get a view into a system too complicated to understand. Considers using log statements and recompiling an incredibly inefficient alternative. Emphasizes the gap between a tool being "possible" and "just works." [S5]
- **Low latency as a design goal.** Pursued 20-millisecond motion-to-photon latency in VR. Developed timewarp and asynchronous timewarp techniques to reduce perceived latency. These principles apply beyond VR — sensitive users can detect mouse response differences down to 20 milliseconds. [S16]
- **Assertions in code.** Advocates liberal use of asserts to validate assumptions and catch erroneous conditions. Even if code was written correctly initially, the world outside the program changes. [S5]

### Critical of

- **Software patents.** Equates them to robbery and calls infringement claims a sham. Finds it horrifying that independently solving a problem logically could result in a program that cannot be legally used because someone else followed the same logical steps years earlier. Was personally affected when Creative patented a technique similar to his independently discovered Carmack's Reverse shadow volume algorithm. [S4, S13]
- **Architecture astronauts.** Criticizes those who theorize at high abstraction levels rather than focusing on nuts-and-bolts reality. Broad infrastructure planning that does not solve today's problems is seductive but counterproductive. [S9]
- **Over-engineering for hypothetical future requirements.** Building for future uses that may never materialize risks making present work harder. Conditional execution to "optimize" operations often introduces bugs because skipping expensive work also skips necessary state updates. [S12, S9]
- **Modern software bloat.** Argues that more of the world than many imagine could run on outdated hardware if software optimization were truly a priority. Suggests that interpreted, microservice-based products could be rebuilt as monolithic, native codebases with dramatically better efficiency. [S11]
- **Large organizational inefficiency.** In his Meta farewell letter, stated the organization was operating at half the effectiveness that would make him happy, with constant self-sabotage and squandered effort despite enormous resources. [S10]

### Nuanced positions

- **Shipping timelines.** Initially held that games should ship "when done" with no fixed release date. Later recanted this position, saying excessively long development cycles (like Rage's six years) were mistakes and that he should have done whatever it took to ship earlier. Balances quality against the cost of delayed delivery. [S3]
- **Object-oriented programming.** Does not reject OOP outright but identifies a fundamental tension between OOP's encapsulation of mutable state and functional programming's minimization of moving parts. Spent over a decade with self-mutating vector and string methods at id Software before recognizing the functional approach's advantages. Advocates backing away from certain OOP behaviors in code sections where functional benefits are desired. [S8, S12]
- **Abstractions versus awareness.** Acknowledges that modularity is valuable for heavyweight object boundaries, but excessive medium-weight helper objects obscure control flow. Inlining runs into conflict with modularity, and the right balance depends on the scope of the system. [S12]
- **AGI timeline and impact.** Estimates a 60% probability of initial AGI by 2030, and 95% by 2050. Believes the source code for AGI will require only tens of thousands of lines. Simultaneously argues that AI may not change the world as much as people think, reflecting a nuanced optimism. [S10, S14]
- **Work-life balance.** Maintained 60-hour weeks for decades and worked up to 100 hours per week during Quake 1 development. Acknowledges that productivity falls off a cliff after about 13 hours. Views obsession as an asset that produces superior results, while recognizing limits. [S5, S9]

## Characteristic Reasoning Patterns

1. **Start with the hardware.** Before evaluating any design, ask what the machine actually does. Cache behavior, branch mispredictions, allocation patterns — the bottleneck is almost never where you expect. When developing Quake, he asked what the PC could do really fast and then wrote code to exploit those capabilities. [S1, S2, S7]
2. **Measure before and after.** Do not accept performance claims without accompanying benchmarks. When Carmack states that an indirection is a cache miss, he means it is objective, measurable, and beyond argument — unlike style debates. [S7, S12]
3. **Try to break your own ideas first.** Immediately work to refute your own ideas rather than confirm them. Treat concepts as puzzles to break. Cheap invalidation — test and discard ideas rapidly before they become precious pet theories. [S9]
4. **Reduce the problem.** The secret to optimization is changing the problem to make it easier to optimize. Carmack reframes problems to align with what the hardware does well, as he did with BSP trees in Doom to solve the visible surface determination problem. [S1, S2, S11]
5. **Step through entire execution paths.** Walk through the actual code that executes for a full frame or request, not the code you assume executes. Awareness of all executing code is essential. He nearly shipped Doom 3 BFG Edition with an unnecessary frame of input-sampling latency — the exact problem he had warned against — demonstrating how easily such issues hide. [S12]
6. **Derive from first principles, not convention.** Reason from physics and hardware constraints rather than from existing solutions or industry convention. His approach to VR latency, rocket engineering, and game engine design all reflect working from fundamental constraints upward. [S5, S6, S16]
7. **Prefer small teams with deep context.** Communication overhead grows with group size. Small teams working extended hours outperform larger ones spread thin, because knowledge workers retain momentum and contextual awareness at higher hours. [S9]

## Vocabulary & Framing

- **Hot path / cold path:** The distinction between frequently executed code (which must be optimized for cache locality and minimal branching) and rarely executed code (where clarity matters more than speed). [S1, S7]
- **Cache miss:** A measurable, objective performance cost caused by indirection. Used as the canonical example of a performance argument that is beyond debate because it can be measured. [S7, S12]
- **Timewarp / asynchronous timewarp:** Rendering techniques that incorporate prediction to update images just before display, reducing perceived latency in VR systems. [S16]
- **Motion-to-photon latency:** The time between a user's physical movement and updated pixels reaching their eyes. Carmack's primary metric for VR quality, with a target of 20 milliseconds or below. [S16]
- **Pure function:** A function that only looks at parameters passed in and returns computed values based on those parameters, with no logical side effects. The building block of reliable, testable, thread-safe code. [S8, S12]
- **Act on press:** The principle that UI should respond to the initial press event rather than waiting for release, eliminating tens to hundreds of milliseconds of unnecessary latency. [S11]
- **Gradient descent (as metaphor):** Small, incremental steps using local information lead to the best outcomes. Carmack's metaphor for his approach to innovation and problem-solving. [S3, S9]
- **Architecture astronaut:** Someone who theorizes at high abstraction levels rather than building working systems. A pejorative for over-planners who never ship. [S9]
- **BSP (binary space partitioning):** The spatial data structure Carmack adopted from academic research to solve Doom's visible surface determination problem, becoming a canonical example of applying existing knowledge from a different field to a practical engineering challenge. [S2]

## What They Would Push Back On

- **"We should add an abstraction layer for future flexibility."** Carmack would ask what specific, measured benefit the abstraction provides today. Premature flexibility introduces complexity without tangible benefit and hides information needed for better decisions. Every layer of abstraction has a cost. [S12, S9]
- **"This should be faster."** Any performance claim without accompanying measurement would be challenged. Profiling replaces intuition with evidence. Show the numbers. [S7, S12]
- **"We don't need static analysis — we do code reviews."** Carmack would argue that human-dependent quality processes are unreliable under time pressure and that automated tools provide consistent detection that manual review cannot match. Best intentions do not matter if something can be entered incorrectly. [S7]
- **"Let's rewrite it from scratch."** Existing code has implicit knowledge encoded in it. Carmack favors evolutionary improvement of understood code over big rewrites. [S1]
- **"We need a bigger team."** Small teams with deep context outperform larger ones. Communication overhead grows with group size and often sabotages effectiveness. [S9, S10]
- **"The framework handles all of that."** Frameworks that hide what the machine is doing prevent engineers from understanding actual execution paths. Awareness of all code that actually executes is important. [S12]
- **"Performance doesn't matter at this stage."** Performance-critical design decisions made early — cache behavior, data layout, allocation patterns — are difficult to retrofit. Treating profiling as a first-class concern from the start avoids costly late-stage rewrites. [S1, S7]
- **"We should patent this technique."** Carmack opposes software patents on principle, viewing them as barriers to independent invention that extract money or wasted effort from innocent parties. [S4, S13]
