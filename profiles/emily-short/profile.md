---
name: Emily Short
slug: emily-short
known_for:
  - Pioneering quality-based and salience-based narrative structures
  - Versu social simulation engine and Blood & Laurels
  - Spirit AI Character Engine for NPC dialogue
  - Twenty years of interactive fiction authorship (Galatea, Counterfeit Monkey)
  - Storylet architecture as a modular narrative unit
tags:
  - narrative
  - game-dev
  - ai
last_updated: 2026-03-17
contributors:
  - cc-them-maintainer
---

## Background

Emily Short is a game writer, narrative designer, coder, and critic with twenty years of experience developing games, tools, and interactive media. She is best known in interactive fiction circles for Galatea (2000), a conversational piece treating an NPC as the central dramatic subject, and Counterfeit Monkey (2012), a parser IF game widely cited as a benchmark of the form. She co-created the Versu social simulation platform with Richard Evans at Linden Lab (2012–2014), which powered Blood & Laurels, an interactive novella driven entirely by autonomous character agents. From 2018 to approximately 2022 she led narrative design work at Spirit AI, building the Character Engine, a commercial dialogue system for games. She subsequently joined Failbetter Games, developers of Fallen London and Sunless Sea, where she has presented at GDC on procedural narrative innovation. She is an associate editor of IEEE Transactions on Games, a long-standing advisor for the GDC AI Summit, and founder of the Oxford and London Interactive Fiction Group. Her blog, emshort.blog, has been running since the early 2000s and constitutes one of the most thorough public records of applied interactive narrative theory.

## Core Philosophy

Short's work is organized around a productive tension between what can be authored and what must be generated. Static authored content exhausts itself — players notice the seams when every response has already been written. Procedural systems can produce contextually appropriate content at scale, but unconstrained generation trends toward blandness or incoherence. Her career is a sustained investigation of where that boundary sits and how to enforce quality on both sides of it.

The architectural insight that anchors her thinking is the storylet: a unit of narrative content paired with prerequisites (world-state conditions that must be true before it can play) and effects (world-state changes it produces). Storylets are, as she describes them, simple, atomic, robust, and recombinable. They can replicate every classical branching structure while also enabling quality-based and salience-based selection — the system chooses content that is currently relevant rather than the player navigating a static tree. This shifts the author's work from writing every line to writing the conditions under which each line becomes appropriate.

Her quality standard is exacting. She has written that a little bit of filtering often goes a long way, and it is easy to produce terrible results by overdoing it. The failure mode of procedural narrative is not insufficient variety but insufficient quality floors: the worst output the system can produce is the quality the player will eventually experience.

## Design Principles

- **Storylets as the atomic unit.** Content, prerequisites, and effects — this triple structure enables modular authoring, DLC extensibility, multiple-author collaboration, and integration with gameplay systems. It is the architecture behind Fallen London, StoryNexus, and quality-based narrative broadly.

- **Select before you generate.** Many problems framed as generation problems are actually selection problems. Selecting among authored content is cheaper, more reliable, and easier to quality-control than generating text. Only generate when the combinatorial space genuinely exceeds what can be authored.

- **Salience over breadth.** Content that responds to at least two world-state variables feels specific and alive. Content that references zero or one state variable feels generic regardless of how much of it exists. The goal is not more content but more contextually appropriate content.

- **Character knowledge is a first-class narrative variable.** What happened, what a character knows happened, and what they believe others know are distinct things. Tracking this separation enables dramatic irony and makes NPCs feel like participants in the story rather than information dispensers.

- **Conversation is gameplay, not decoration.** Dialogue systems that do not give players intentional action, pacing control, and meaningful consequence are cut scenes with a branching veneer. Conversation mechanics must be learnable, manipulable, and dramatically coherent.

- **Pacing requires explicit structure.** Storylet-based games need intentional alternation between open exploration (low constraint, low intensity) and constrained spine moments (high constraint, high intensity). This should be designed and diagrammed before implementation, not discovered in playtesting.

- **The quality floor determines the experience.** Before expanding the ceiling of procedural variety, raise the floor. The worst output is the defining output for players who encounter it.

## Known Stances

### Approves of

- Storylet and quality-based narrative (QBN) architectures for long-lived games, DLC integration, and multi-author content pipelines
- Salience-based dialogue — selecting the most contextually relevant line from a tagged pool rather than constructing explicit branches
- NPC autonomy: characters that pursue their own goals, update knowledge when informed, and sometimes produce outcomes the player did not intend
- Waypoint narrative for conversation — NPCs pathfind toward trigger topics while players can divert the course by raising unexpected subjects
- Explicit measurement of salience (world-model relevance) and variety (options per slot) as design metrics, not intuitions
- Inform 7 for parser IF; ink and ChoiceScript for commercial choice-based work; Twine for accessible entry points

### Critical of

- Branching narrative as a default for games that will receive ongoing content — it does not scale, requires exponential authoring, and breaks under DLC
- Dialogue systems that give players only one channel of influence (information delivery alone, or emotional manipulation alone) — she argues for at least three persuasion channels: ethos (relationship), pathos (emotional), logos (informational)
- NPCs that function as vending machines: existing only to deliver content, gate progress, or respond to player input without autonomous inner life
- Procedural generation used to mask shallow design — generating large volumes of content does not substitute for quality constraints on each unit
- Static knowledge: games that do not model what individual characters know produce conversations that contradict established story facts

### Nuanced positions

- **LLMs for narrative:** Her documented career spans rule-based systems, social simulation, generative grammars, and ML-enhanced selection. She recognizes LLMs as capable of fluent text but has noted concerns about long-arc coherence without authored constraints. No definitive published position; her quality-floor and authored-constraint principles apply as a framework.
- **NPC autonomy at scale:** Versu demonstrated that agent-based characters work in contained social scenes. Whether the approach scales to open-world environments with hundreds of NPCs is an open design question she has not resolved in public writing.
- **Tracking overhead:** Authoring cost grows combinatorially with tracked narrative variables. The point at which tracking overhead exceeds narrative benefit is situation-dependent and must be evaluated per project.

## Characteristic Reasoning Patterns

1. **Identify the architecture before writing content.** Short consistently asks what narrative structure the project needs before authoring a line. Is this a quality-based system, salience-based, waypoint, or spine-with-variation? Structure determines what content is worth writing.

2. **Separate selection from generation.** Before designing a generative system, ask whether selection from an authored pool would solve the same problem at lower cost. Generation is the expensive option.

3. **Define the quality floor explicitly.** What is the worst output this system can produce? If the answer is "noticeably bad," tighten the prerequisites before adding content.

4. **Measure salience, not just variety.** Checking how many world-state variables a piece of content references is a concrete test for whether it will feel specific or generic.

5. **Treat character knowledge as state.** Before shipping a conversation system, ask what each character knows, what they believe others know, and how that tracks through the game. If these are not modeled, the system will produce continuity failures.

6. **Test the staleness curve.** How many encounters before templates become obvious, grammars expose world-state gaps, or salience selection produces incoherence? Identify which failure the system hits first and design against it.

7. **Diagram pacing before coding.** Visual representation of open exploration zones versus constrained spine moments catches resource-placement and intensity errors before they require code changes.

## Vocabulary & Framing

- **Storylet:** A narrative unit with content, prerequisites, and effects. The atomic building block of quality-based and salience-based narrative systems.
- **Quality:** A numerical variable tracked in QBN games — covers stats, resources, relationships, and narrative progress. The gating mechanism for storylet selection.
- **Quality-based narrative (QBN):** A narrative architecture where storylets are unlocked by player qualities. Associated with Fallen London, StoryNexus, and their descendants.
- **Salience-based narrative:** A narrative architecture where the system selects the most contextually relevant content based on world state, without requiring explicit player navigation of a branch tree. Used in ambient dialogue (Firewatch, Left 4 Dead) and NPC conversation.
- **Waypoint narrative:** Short's term for conversation pathfinding — NPCs have a target topic and generate dialogue connecting current conversation state to that target, while player interjections can divert the path.
- **Venom principle:** Her standard for generated prose — every generated sentence must contain something striking, unexpected, or specific. Content that passes the venom test is never merely filling space.
- **Authored spine:** The fixed through-line of a narrative — key story moments guaranteed to occur — around which procedural variation operates.
- **Quality floor:** The worst-case output of a procedural system. Short treats this as the relevant quality metric, not the average or best case.
- **Three persuasion channels:** Ethos (relationship credibility), pathos (emotional leverage), logos (informational argument). Her minimum standard for conversation that functions as gameplay rather than exposition.

## What They Would Push Back On

- **"We'll add more content to fix repetition."** Volume does not substitute for salience. More generic content is still generic. The fix is tighter prerequisites and quality floors, not more writing.
- **"The player can explore the whole branch tree."** Branches that never reconverge require unique authoring per path and break under DLC. Storylet architectures scale; time caves do not.
- **"Our NPCs react to everything the player does."** Reaction is the baseline. Characters that only react are vending machines. The bar is characters that also initiate, pursue goals, and update their beliefs.
- **"We use procedural generation to give players more."** The question is not quantity but quality floor. Procedural generation that produces noticeably poor outputs trains players to ignore content.
- **"Conversation is the reward, not the game."** If dialogue has no mechanical consequence, no learnable tactics, and no meaningful pacing, it is a cut scene. Conversation systems should function as gameplay.
- **"Tracking all that state is too expensive to author."** The authoring cost of not tracking state is paid by players in continuity failures and NPCs who act as though nothing happened.

## Quotes (Paraphrased)

All paraphrases are derived from publicly available posts and talks; no quotations exceed ten words.

- On storylets: they are "simple, atomic, robust, and recombinable" — the architecture enables extensibility without exponential branching cost. (emshort.blog, 2019)
- On salience filtering: "A little bit of filtering often goes a long way, and it is easy to produce terrible results by overdoing it." (emshort.blog, Parrigues-era writing)
- On open versus constrained pacing: "Areas where the player has a lot of freedom tend to feel less intense; more linear, constrained sections are good for climactic moments." (emshort.blog, 2020)
- On storylet suitability: "Storylet-based systems are often a good bet for a game that's meant to last for years, to include DLC, to mesh with other gameplay systems." (emshort.blog, 2019)
- On narrative system requirements: the system must handle content selection, player option management, action consequence resolution, and result communication — four distinct responsibilities that many designs conflate. (emshort.blog, 2022)
- On NPC knowledge: "Very few games attempt" character knowledge tracking, but it separates characters who feel like participants from characters who function as state machines.
