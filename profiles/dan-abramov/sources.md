# Sources: Dan Abramov

All sources are freely available public recordings, transcripts, or posts. No paywalled content.

## Blog Posts — overreacted.io

- [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/) — overreacted.io, March 2019. The canonical deep-dive into `useEffect`: synchronization mental model, dependency arrays, cleanup, common pitfalls. One of the most widely read technical posts in the React ecosystem.
- [Writing Resilient Components](https://overreacted.io/writing-resilient-components/) — overreacted.io, March 2019. Four principles for components that handle changing props and state gracefully: don't stop the data flow, always be ready to render, no component is a singleton, keep local state isolated.
- [React as a UI Runtime](https://overreacted.io/react-as-a-ui-runtime/) — overreacted.io, February 2019. Extended essay on React's execution model — host trees, reconciliation, rendering rules — framing React as a programming runtime rather than a library.
- [The Two Reacts](https://overreacted.io/the-two-reacts/) — overreacted.io, January 2024. Conceptual foundation for React Server Components: why some components belong on the server and some on the client, and how the component model can span both.
- [Before You memo()](https://overreacted.io/before-you-memo/) — overreacted.io, February 2021. Two structural techniques — moving state down and lifting content up — that eliminate unnecessary re-renders without adding `memo()`.
- [I'm Doing a Little Consulting](https://overreacted.io/im-doing-a-little-consulting/) — overreacted.io, 2025. Personal update post-Bluesky; provides context on his career arc from Meta to Bluesky to independent work.

## Blog Posts — Medium / dev.to

- [Making Sense of React Hooks](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889) — Medium, October 2018. Written alongside the React Conf 2018 Hooks announcement; explains the motivation for hooks, why classes create friction for logic reuse, and what problems hooks were designed to solve.

## Conference Talks

- [Beyond React 16 — JSConf Iceland 2018](https://www.youtube.com/watch?v=nLF0n9SACd4) — JSConf Iceland, March 2018. Presentation of the async rendering / Concurrent Mode vision: time-slicing and Suspense prototypes, with the argument that React's model is a prerequisite for making these optimizations possible.
- [React Today and Tomorrow — React Conf 2018](https://www.youtube.com/watch?v=V-QO-KO90iQ) — React Conf, October 2018. Co-presented with Sophie Alpert; the formal introduction of React Hooks to the community. Demonstrates `useState`, `useEffect`, and `useContext` converting class components to functions.

## Podcasts & Interviews

- [Redux, React, and Functional JavaScript — The Changelog #187](https://changelog.com/podcast/187) — The Changelog, December 2015. Early interview covering his path to open source, Redux's origin (the Flux pattern's debuggability problems), and the influence of functional programming on his thinking.
- [A Rundown of What's Next for React — Chats with Kent #4](https://kentcdodds.com/chats/01/04/a-rundown-of-whats-next-for-react-with-dan-abramov) — Chats with Kent C. Dodds, 2019. Covers Concurrent Mode, Suspense, and the philosophy behind deferring work to keep UIs responsive.
- [Dan Abramov — Bluesky, Core React Team, RSC, Strict DOM](https://www.devtools.fm/episode/92) — devtools.fm Episode 92, April 2024. Wide-ranging conversation on his move to Bluesky, React Server Components, the React compiler, and the long-arc design decisions behind React's evolution.
- [Dan Abramov on Working at Bluesky, React, and the Social Internet](https://tomorrow.fm/95/transcript) — How About Tomorrow? Episode 95, 2024. Transcript available. Covers his experience shipping a large React Native app at Bluesky, how Meta thinks about React, and product vs. framework work.
- [Inside Facebook: Bad Tests Are Worse Than Product Issues](https://www.software-engineering-unlocked.com/episode-13-bad-tests-dan-abramov/) — Software Engineering Unlocked Episode 13. Discussion of testing philosophy: why tests that couple to implementation details are a liability, and what "good" test coverage looks like at Meta's scale.
