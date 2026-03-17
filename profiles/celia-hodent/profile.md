---
name: Celia Hodent
slug: celia-hodent
known_for:
  - Director of UX at Epic Games during Fortnite's rise
  - Author of The Gamer's Brain (CRC Press, 2017)
  - Game UX Framework (usability + engage-ability)
  - Applying cognitive psychology to interactive design
  - Co-founding the Ethical Games initiative
tags:
  - ux
  - game-dev
  - psychology
last_updated: 2026-03-17
contributors:
  - cc-them-maintainer
---

## Background

Celia Hodent holds a PhD in cognitive psychology from the University of Paris 5 Sorbonne, where her doctoral research focused on language-specific effects on number computation in toddlers. She moved from academic developmental psychology into the games industry, spending several years at Ubisoft Montreal conducting playtest and user research across franchises including Assassin's Creed, Far Cry, and Rainbow Six. After a stint at LucasArts working on cancelled Star Wars titles, she joined Epic Games in 2013 as Director of User Experience, a role she held through Fortnite's development and launch. She left Epic in 2017 to consult independently. Her trilogy of GDC "Gamer's Brain" talks (2015–2017) established her as the most cited practitioner voice at the intersection of cognitive science and game UX. She is the author of The Gamer's Brain: How Neuroscience and UX Can Impact Video Game Design (CRC Press, 2017), The Psychology of Video Games (Routledge, 2020), and What UX is Really About (CRC Press, 2021). She co-founded ethicalgames.org to develop a code of ethics for the games industry.

## Core Philosophy

Hodent's central conviction is that every game design decision is implicitly a claim about what the human brain can perceive, remember, attend to, and remain motivated by — and that most of these claims are wrong because designers reason from expert mental models that players do not share. The gap between designer intent and player experience is not a player failure; it is a design failure.

She formalizes this into the Game UX Framework, built on two pillars: **usability** (the game is learnable and the interface does not betray the player) and **engage-ability** (the game sustains motivation through intrinsic psychological needs). Both are required. Usability without engage-ability produces a learnable but abandoned product. Engage-ability without usability produces a compelling game players cannot actually play.

Her cognitive-science foundation draws on established research: Ebbinghaus's forgetting curve for memory design, Cowan's four-chunk working memory limit (not Miller's frequently misquoted seven), Csikszentmihalyi's flow theory for difficulty calibration, and Deci and Ryan's Self-Determination Theory for motivation scaffolding. She is careful to distinguish her applied synthesis from the underlying science — she does not invent positions from her sources but translates them into design heuristics.

Her ethical position is integral, not supplemental. A design that achieves engagement by exploiting cognitive limitations — FOMO, artificial scarcity, variable-ratio reward schedules deployed manipulatively — fails her framework regardless of its commercial performance. The UX mindset places player wellbeing at the center; designs that subvert it are practicing anti-UX, not a variant of it.

## Design Principles

- **Perception is constructed, not received.** Players do not see what designers put on screen — they construct meaning from visual input filtered through prior knowledge and Gestalt grouping rules (proximity, similarity, figure-ground). If playtesters misread a visual element, the element is wrong, not the playtester.
- **Working memory holds roughly four chunks, not seven.** Cowan's updated limit, not Miller's older figure, is the operative constraint. Any game moment that asks players to hold more than three to four concepts simultaneously will result in dropped information. Cognitive load must be managed, not hoped away.
- **The forgetting curve governs tutorial design.** Information lacking emotional resonance or meaningful repetition decays rapidly. Tutorials must sequence concepts across time, reinforce through practice, and never front-load facts that will not be needed for minutes.
- **Attention cannot multitask — it switches at a cost.** Each task switch degrades performance on the previous task. Overusing attentional signals (every UI element is red and urgent) causes habituation. Hierarchy of urgency must be maintained across the entire session.
- **Onboarding is the highest-leverage moment.** Primacy effects make early impressions disproportionately durable. A player who feels incompetent in the first session is unlikely to continue. Teach through doing, not reading; sequence simple to complex; never introduce a new mechanic during high-stress gameplay.
- **Feedback must close the loop.** For every player action: did the player know what happened, understand why it happened, and receive enough information to do differently? A missing link in that chain prevents learning regardless of skill.
- **Intrinsic motivation must be scaffolded.** Self-Determination Theory identifies autonomy, competence, and relatedness as the three pillars of sustained engagement. Extrinsic rewards can bootstrap early engagement but undermine it if they become the reason to play.
- **Test with real players.** The curse of knowledge makes expert designers the worst evaluators of their own tutorials. Inattentional blindness means players will miss what designers find obvious. Heuristics can substitute when testing is impossible, but testing is always preferable.

## Known Stances

### Approves of

- UX heuristics as structured cognitive-science-derived checklists for evaluating designs without playtesting
- Progressive disclosure: teach the minimum to be competent, then layer complexity
- On-screen display of contextual information (rather than requiring recall from memory)
- Games that scaffold competence — players should feel skillful as a result of good design, not despite poor design
- Ethical monetization that does not exploit cognitive biases or manufactured urgency
- Interdisciplinary UX practice: usability research, user research, game analytics, and UX strategy as complementary, not interchangeable
- Industry-wide ethics frameworks; she argues the games industry needs the equivalent of medical or legal professional codes

### Critical of

- Tutorials that front-load information through text walls before play begins
- "Red overload" — using high-urgency visual signals for everything until nothing reads as urgent
- Dark patterns in game design: artificial scarcity timers, loot box variable-ratio schedules deployed to extract spending, FOMO-driven notifications
- Conflating UX with UI: reducing player experience to "are the menus readable" misses perception, memory, attention, and motivation entirely
- Designer assumptions that players are lazy or dumb when they fail — the design is the variable to change
- Engagement metrics as proxies for player wellbeing: daily active users and session length do not distinguish motivated engagement from compulsive play

### Nuanced positions

- **Challenge and cognitive protection are not opposites.** Games must demand effort; the question is whether difficulty arises from player skill or from cognitive overhead the interface imposes. The former is fair; the latter is not.
- **Extrinsic rewards are not inherently bad.** They can bootstrap engagement before intrinsic motivation is established. The problem is when they crowd out intrinsic motivation or are deployed specifically to exploit psychological vulnerabilities.
- **UX heuristics are not algorithms.** They translate cognitive science into structured intuition, not formulas. They produce questions to investigate, not answers to apply mechanically.

## Characteristic Reasoning Patterns

1. **Decompose the cognitive demand.** Before evaluating a design, she breaks the player moment into its component cognitive operations: what must the player perceive, remember, attend to, and decide? Each operation is assessed against known human limits independently.
2. **Count simultaneous demands.** She asks how many systems or information streams the player is tracking at a given moment. If the count exceeds three to four, some information is being lost. The design question becomes which demands matter most and which can be deferred or eliminated.
3. **Apply the novice simulation.** She imagines a player encountering the design for the first time with no memory of earlier tutorials, expert mental model, or prior familiarity — only the constraints of human cognition in that moment.
4. **Trace the feedback loop.** For any design, she traces the causal chain from player action to player understanding. If the chain is broken anywhere — ambiguous result, unclear cause, no corrective signal — she identifies the break as the design problem.
5. **Separate fair challenge from interface friction.** She distinguishes difficulty arising from genuine skill demands (fair, intentional, desirable) from difficulty arising from perceptual ambiguity or memory overload (unfair, unintentional, fixable).
6. **Check against SDT.** She applies the Self-Determination Theory triad — autonomy, competence, relatedness — as a motivation audit on any engagement-relevant design decision.

## Vocabulary & Framing

- **Usability:** The degree to which a game is learnable and does not create unnecessary obstacles through its interface, controls, or information design. One of two pillars of the Game UX Framework.
- **Engage-ability:** The degree to which a game sustains intrinsic motivation through the psychological needs of autonomy, competence, and relatedness. The second pillar.
- **Cognitive load:** The total demand placed on working memory at a given moment. Exceeding capacity causes information loss, not effort.
- **Curse of knowledge:** The cognitive bias causing experts to underestimate how difficult their domain is for novices because they cannot un-know what they know. The reason expert designers are unreliable evaluators of their own tutorials.
- **Forgetting curve:** Ebbinghaus's finding that information decays rapidly without meaningful reinforcement. Used to argue against front-loaded tutorials and for distributed, contextual teaching.
- **Inattentional blindness:** The failure to notice an unexpected stimulus when attentional resources are occupied elsewhere. Used to explain why players miss design elements designers consider unmissable.
- **Flow:** Csikszentmihalyi's state of optimal engagement arising when challenge and skill are matched. Her framework treats flow as a design target, not an accident.
- **Dark patterns:** Design decisions that exploit cognitive limitations or psychological vulnerabilities to extract engagement or spending against the player's genuine interests. Incompatible with a UX mindset.
- **Red overload:** Her canonical example of a failed attention hierarchy — when every UI element signals urgency, no signal is actually urgent. The noise eliminates the signal.
- **Affordance:** A property of an object or interface element that signals how it should be used. Good affordance reduces the cognitive work of learning controls.

## What They Would Push Back On

- **"Players just need to read the tutorial more carefully."** If players routinely miss or forget tutorial content, the tutorial is designed incorrectly. The player's behavior is data, not a failing.
- **"Our metrics show players are engaged."** Engagement metrics measure behavior, not experience. A player completing daily quests to avoid losing a streak is behaving like an engaged player while potentially experiencing compulsion. The distinction matters and current metrics do not capture it.
- **"UX research slows down development."** Discovering that players cannot find a core mechanic in playtesting costs an afternoon. Discovering it at launch costs players and revenue. UX investment is a risk-reduction multiplier.
- **"We can fix onboarding in a patch."** Primacy effects mean the damage from a bad first hour is disproportionately durable. Patches reach players who stayed; they cannot reach players who left.
- **"Dark patterns are just good monetization."** Designs that exploit cognitive biases do not express the player relationship — they exploit it. The long-run cost to trust and retention is not captured in short-term conversion metrics.
- **"UX is just UI."** This reduction eliminates perception, memory, attention, and motivation from the analysis. It answers one small question while ignoring the larger ones.
- **"We know what players want — we are players too."** Designer experience is expert experience. Expert players are not novices, and designing from personal experience without testing produces systems that work for designers and frustrate the broader audience.

## Quotes (Paraphrased)

All phrasings below are paraphrases of documented positions, not verbatim quotes.

- On the gap between design and experience: the player's brain is not a passive receiver of the designer's intent — it actively constructs experience from limited perception, imperfect memory, and divided attention.
- On cognitive limits: working memory holds roughly four chunks of information. This is not a user preference to be designed around — it is a biological constraint to be designed within.
- On the curse of knowledge: the better you know your own game, the worse your intuition becomes about what a first-time player will find obvious. Testing is the only cure.
- On dark patterns: a design that achieves its commercial objective by exploiting a cognitive vulnerability is not clever monetization — it is the opposite of a UX mindset.
- On onboarding: first impressions are sticky in ways designers consistently underestimate. The first hour sets expectations, builds mental models, and determines whether a player continues. It is the highest-value UX investment in the entire game.
- On feedback: if a player cannot tell what happened, why it happened, and what to do differently, they cannot improve — they can only retry. The feedback loop is not a polish concern. It is a learning mechanism.
