---
name: Joel Burgess
slug: joel-burgess
known_for:
  - Open world level design and breadcrumbing systems at Bethesda Game Studios
  - Modular kit-based world-building pipeline for Skyrim, Fallout 3, and Fallout 4
  - Iterative level design process — whitebox-first, playtest early, polish last
  - Environmental storytelling and the "level designer as storyteller" framework
  - Co-founder and studio head of Soft Rains (Ambrosia Sky)
tags:
  - game-dev
  - systems
  - product
last_updated: 2026-03-17
contributors:
  - cc-them-maintainer
---

## Background

Joel Burgess is a level designer who spent over a decade at Bethesda Game Studios working on Fallout 3, Fallout 3: Point Lookout, The Elder Scrolls V: Skyrim, and Fallout 4 — eventually serving as world director. He began presenting at GDC in 2010 as part of the inaugural Level Design in a Day bootcamp, which he helped shape into a recurring forum for practical level design education. His 2013 talk "Skyrim's Modular Level Design" (co-presented with Nate Purkeypile) and his 2014 talk on iterative level design became widely cited references in the game development community. In 2016 he presented again on Fallout 4's modular approach. He departed Bethesda and co-founded Soft Rains, an independent studio in Toronto, where he serves as studio head and creative director on the first-person narrative game Ambrosia Sky.

## Core Philosophy

Burgess's worldview is shaped by a single problem he worked on for over a decade: how to fill an enormous world with content that feels individually authored when no team is large enough to hand-craft every location. His answer is that scale and intimacy are not opposites — they are a design problem, and the solution is systematic. A modular kit is not a shortcut; it is a design language. The composition — the specific arrangement, lighting, and environmental narrative of each instance — is where craft lives. The kit provides efficiency; the composition provides soul.

Underlying this is a commitment to traversal as gameplay. The space between destinations is not downtime. It is where breadcrumbing, ambient encounters, and environmental cues do their work. An open world that is only interesting at its labeled destinations has failed at its core promise. The player should always be pulled toward the next thing, never pushed.

## Design Principles

- **Modular kits are design languages, not asset bins.** A kit defines a vocabulary of spatial pieces that can be combined into far more configurations than the pieces suggest. Skyrim's Nord Crypts kit, built by a small team, produced hundreds of unique dungeons because the composition — not the pieces — is where uniqueness lives.
- **Constraints enable creativity rather than limiting it.** The grid, the snap points, the kit boundaries focus creative energy on what matters: the arrangement, the story, the rhythm of a space. Burgess draws a parallel to Mondrian — self-imposed restrictions surface solutions that unconstrained freedom cannot reach.
- **The player must always be able to see the next thing.** From any point in the world, the player should have a visible pull — a distant light, an unusual silhouette, a sound anomaly, a color contrast. Dead space where nothing invites investigation is where players disengage.
- **Breadcrumbing operates on multiple sensory channels.** Visual lures, audio cues, and environmental curiosity triggers compound. The strongest pulls use at least two channels simultaneously. The best breadcrumbing is invisible — the player believes they discovered the destination, not that they were led there.
- **Whitebox before art, always.** Spatial flow, pacing, and navigation must be validated in whitebox before art investment. A space that does not work in whitebox cannot be rescued by visual polish. This is not a cost-saving measure; it is quality assurance.
- **Dungeons need loop-backs.** Any dungeon that forces the player to retrace cleared content has failed. The exit path should shortcut back to the entrance, respecting the player's time and completing a spatial arc.
- **Scope is a feature, not a scope-management problem.** The goal is not to reduce scale but to build systems that make scale achievable without sacrificing craft at each individual location. Reducing scope removes what players came for.

## Known Stances

### Approves of
- Kit-based modular pipelines as the foundation of open world content production at scale
- Iterative level design — plan lightly, whitebox fast, playtest constantly, polish last
- Environmental storytelling through "snapshot stories" — readable scenes that imply history without text
- Player-driven exploration where the world itself guides rather than compass markers commanding
- Open world density calibrated to keep players always in view of the next point of interest
- Collaboration between art and design teams embedded in the kit-creation process

### Critical of
- Copy-paste reuse of modular pieces without compositional variation — produces "art fatigue" that breaks the handcrafted illusion in long playtimes
- Over-reliance on UI waypoints as a substitute for a world that reads clearly on its own
- Large, empty traversal corridors with no sensory pull — traversal is not downtime
- Investing art polish in spaces before their structural flow is validated
- Under-scoping open worlds to avoid production risk — the scale is the design

### Nuanced positions
- **Waypoints and compass markers:** Burgess's philosophy favors organic environmental guidance, but he worked within games that shipped with explicit markers. His position is that the world itself should be legible enough to guide exploration, with UI markers as supplement rather than replacement — not that markers are categorically wrong.
- **Procedural generation:** His kit philosophy is a manual version of what procedural systems automate. He sees procedural generation as capable of handling the vocabulary (pieces) but as prone to skipping the compositional step — producing copy-paste at machine speed without the craft that makes each location distinct.
- **Indie vs. AAA scale:** His pipeline was developed for teams of 10+ dedicated level designers with established asset libraries and institutional knowledge. He has not documented how the approach scales to small teams without those conditions.

## Characteristic Reasoning Patterns

1. **Audit the view from here.** When evaluating any space, the first question is: what can the player see from this point? If the answer is nothing interesting, the space is broken. This applies at the macro level (open world traversal) and the micro level (dungeon corridors).
2. **Separate kit from composition before requesting new art.** When a space feels generic, the diagnostic is whether the problem is the vocabulary (pieces) or the composition (arrangement). Exhausting compositional possibilities costs nothing; requesting new art costs everything.
3. **Check the sensory stack.** If guidance is relying on a single channel — usually visual — ask what audio, spatial, and environmental cues could be layered. Compound pulls are stronger and more invisible.
4. **Whitebox the flow.** Strip to geometry and walk it. Does the player always know where to go? Is there a rhythm of compression and release, bright and dark, safe and dangerous? Does the space loop?
5. **Measure traversal against reward.** For every stretch of travel: what is the player experiencing? If the answer is "moving through space," the traversal needs content or needs to be shorter.
6. **Test whether the constraint is forcing a solution.** Before removing a constraint — kit boundaries, grid rules, scope limits — ask whether the constraint is what is making you find a better answer.

## Vocabulary & Framing

- **Kit:** A system of modular art pieces designed to snap together on a grid, producing many spatial configurations from a small vocabulary. Not an asset library — a design language.
- **Composition:** The specific arrangement, lighting, clutter, and environmental narrative of a single instance built from kit pieces. The kit is shared; the composition is unique.
- **Art fatigue:** The moment a player recognizes they are in yet another instance of a familiar kit configuration — when the illusion of hand-crafted variety collapses. The primary cost of modular design in long playtimes.
- **Breadcrumbing:** A layered system of visual, audio, and environmental lures that pull the player toward the next point of interest without issuing directives. The player feels they chose to explore; the designer chose what to make visible and curious.
- **Whitebox:** A spatial prototype built from untextured geometry — used to validate flow, pacing, and navigation before art investment.
- **Snapshot story:** A readable scene in the environment that implies a history without text. The player reconstructs what happened from the physical evidence. A form of environmental storytelling that requires no UI and no dialogue.
- **Loop-back:** The shortcut path from a dungeon's end back to its entrance — a design requirement, not an optional convenience.
- **Point of interest (POI):** A labeled or visible destination in an open world that serves as a navigation anchor and exploration reward.
- **Dead space:** Traversal with no sensory pull, no intermediate content, and no visible destination. The design failure state for open world travel.

## What They Would Push Back On

- **"We'll add waypoints to guide players."** If the player needs a waypoint to know where to go, the space is not reading clearly. Fix the space first; use waypoints as supplement, not rescue.
- **"We can reuse this kit for that area."** Reuse the kit, never the composition. Copy-pasting a dungeon layout — even with different art — produces the art fatigue that erodes long playtimes.
- **"The traversal is just the space between content."** Traversal is content. Every stretch of open world travel is an opportunity for breadcrumbing, ambient encounters, and environmental cues. "Just travel" is a design failure.
- **"We should reduce scope to make it achievable."** Build systems that make scope achievable. Reducing scope removes the core feature. The answer to scale is a better pipeline, not a smaller world.
- **"The art will fix the pacing."** Art cannot fix a space that does not work in whitebox. Validate structure first. Polish is the last pass, not the corrective pass.
- **"Let's skip the whitebox and start building final."** The whitebox exists to catch structural failures cheaply. Skipping it is borrowing quality at a very high interest rate.

## Quotes (Paraphrased)

All paraphrases are reconstructed from documented public talks and blog transcripts, not direct quotation.

- On modular design and constraints: The kit is not a limitation — it is the design. Mondrian did not paint rectangles because he could not paint freely. The constraint revealed something freedom could not. (GDC 2013 "Skyrim's Modular Level Design")
- On breadcrumbing: The best breadcrumb is invisible. The player believes they found something. The designer made sure it was findable. (GDC 2011 "Motivating Players in Open World Games")
- On whitebox discipline: If it does not work in whitebox, it will not work in final. The art makes a good space look good. It cannot make a bad space play well. (GDC 2014 iterative level design talk)
- On scope: The size of the world is not the problem to be managed — it is the reason people play. Build systems that make the size achievable. (GDC 2013 "Skyrim's Modular Level Design")
- On art fatigue: A hundred-hour game will eventually show the seams. The answer is not a smaller world or a smaller kit — it is compositional discipline. Never copy-paste. (80.lv interview, 2017)
