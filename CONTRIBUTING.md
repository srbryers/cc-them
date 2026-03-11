# Contributing to cc-them

Thank you for helping build this library. Here's everything you need to know.

---

## Who qualifies for a profile?

A person qualifies if they have a **substantial body of freely available public work** that expresses a coherent technical philosophy. This typically means:

- Multiple public talks, blog posts, or technical writings
- Documented design decisions in open source projects
- A recognizable, consistent point of view that goes beyond "I like X language"

Politicians, executives who don't write or speak technically, and people whose primary output is private/paywalled don't qualify.

---

## What sources are acceptable?

✅ **Yes:**
- Conference talks (YouTube, InfoQ, Vimeo)
- Personal blog posts
- Open source commit messages and design documents
- Public mailing list threads (LKML, Clojure mailing list, etc.)
- Freely available interviews and podcasts
- Personal social media (Twitter/X, Mastodon, Hacker News comments)
- Open source project documentation they authored

❌ **No:**
- Paywalled articles
- Private correspondence or leaked communications
- Secondhand accounts of what someone said
- Content from companies they work for (unless they are clearly the sole author)

---

## Profile guidelines

### Be accurate, not flattering

A profile should capture the person's actual documented positions — including their criticisms and what they're wrong about. Don't sanitize.

### No direct quotes

Paraphrase everything. This protects the project legally and forces you to synthesize rather than copy. See the schema for the correct format.

### Ground every claim

Every bullet point in `profile.md` must be traceable to a source in `sources.md`. If you can't source it, don't include it.

### Capture their vocabulary precisely

Many technical thinkers use common words with specific meanings (Hickey's "simple," Carmack's "first principles"). Capture these in the Vocabulary section.

### What they push back on matters as much as what they advocate

A profile that only captures someone's positive stances is incomplete. Their criticisms of the industry often define their thinking most sharply.

---

## Submitting a profile

1. Fork this repository
2. Create `/profiles/{slug}/` with all three files (`profile.md`, `sources.md`, `agent.md`)
3. Follow the schema in `/schema/profile-schema.md`
4. Run validation: `npm run validate profiles/{slug}`
5. Open a PR with the title: `Add profile: {Full Name}`

### PR checklist

- [ ] All three files present and complete
- [ ] No direct quotes longer than 10 words
- [ ] All claims sourced
- [ ] `agent.md` frontmatter is valid YAML
- [ ] Slug is lowercase, hyphenated, matches directory name
- [ ] `last_updated` set to today
- [ ] Your GitHub username in `contributors`
- [ ] Validation passes

---

## Requesting a profile

Open an issue using the "Request a persona" template. Include:
- Who you want
- Why they qualify (link to 2-3 representative public works)
- What you think the key principles are

---

## Improving an existing profile

Profiles improve over time as more sources are discovered. To update:

1. Add new sources to `sources.md`
2. Expand or correct `profile.md` based on those sources
3. Update `agent.md` to reflect any new principles
4. Update `last_updated`
5. Add your username to `contributors`

---

## Disputing a profile

If you believe a profile misrepresents someone's documented positions, open an issue citing the specific claim and the source that contradicts it. We'll update or remove.

---

## Code of conduct

Profiles represent real people. Be accurate, be fair, cite everything. Don't use this library to put words in people's mouths — the `agent.md` guardrails exist for this reason.
