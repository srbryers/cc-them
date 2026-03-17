---
generated_at: "2026-03-17T02:19:53.944Z"
git_sha: "ab9e74a21ae76ad2fb5c57c5633b646309f4e8ee"
sprint: 1
source_files: 0
test_files: 0
cli_commands: 46
guards: 28
flows: 0
---

# SLOPE Codebase Map

Sprint Lifecycle & Operational Performance Engine — pluggable-metaphor sprint scoring.

## Package Inventory

<!-- AUTO-GENERATED: START packages -->

<!-- AUTO-GENERATED: END packages -->

## API Surface (core)

Re-exports from `src/core/index.ts`:

<!-- AUTO-GENERATED: START api -->

<!-- AUTO-GENERATED: END api -->

## CLI Commands

<!-- AUTO-GENERATED: START cli -->

- `slope init` — Initialize .slope/ directory
- `slope help` — Show detailed per-command usage
- `slope quickstart` — Interactive tutorial for new users
- `slope doctor` — Check repo health and auto-fix issues
- `slope version` — Show version or bump with automated PR workflow
- `slope session` — Manage live sessions
- `slope claim` — Claim a ticket or area for the sprint
- `slope release` — Release a claim by ID or target
- `slope status` — Show sprint course status and conflicts
- `slope next` — Show next sprint number (auto-detect)
- `slope sprint` — Manage sprint lifecycle state and gates
- `slope card` — Display handicap card
- `slope validate` — Validate scorecard(s)
- `slope review` — Format sprint review or manage review state
- `slope auto-card` — Generate scorecard from git + CI signals
- `slope classify` — Classify a shot from execution trace
- `slope tournament` — Build tournament review from sprints
- `slope briefing` — Pre-round briefing with hazards and nutrition
- `slope plan` — Pre-shot advisor (club + training + hazards)
- `slope report` — Generate HTML performance report
- `slope dashboard` — Live local performance dashboard
- `slope standup` — Generate or ingest standup report
- `slope analyze` — Scan repo and generate profile
- `slope hook` — Manage lifecycle hooks
- `slope guard` — Run guard handler or manage guard activation
- `slope extract` — Extract events into SLOPE store
- `slope distill` — Promote event patterns to common issues
- `slope map` — Generate/update codebase map
- `slope flows` — Manage user flow definitions
- `slope inspirations` — Track external OSS inspiration sources
- `slope metaphor` — Manage metaphor display themes
- `slope plugin` — Manage custom plugins
- `slope store` — Store diagnostics and management
- `slope escalate` — Escalate issues based on severity triggers
- `slope transcript` — View session transcript data
- `slope roadmap` — Strategic planning and roadmap tools
- `slope vision` — Display project vision document
- `slope initiative` — Multi-sprint initiative orchestration
- `slope loop` — Autonomous sprint execution loop
- `slope worktree` — Manage git worktrees
- `slope index-cmd` — Semantic embedding index management
- `slope context` — Semantic context search for agents
- `slope prep` — Generate execution plan for a ticket
- `slope enrich` — Batch-enrich backlog with file context
- `slope stats` — Export stats JSON for slope-web live dashboard
- `slope docs` — Generate documentation manifest and changelog
<!-- AUTO-GENERATED: END cli -->

## Guard Definitions

<!-- AUTO-GENERATED: START guards -->

| Guard | Hook Event | Matcher | Description |
|-------|-----------|---------|-------------|
| `explore` | PreToolUse | Read|Glob|Grep|Edit|Write | Suggest checking codebase index before deep exploration |
| `hazard` | PreToolUse | Edit|Write | Warn about known issues in file areas being edited |
| `commit-nudge` | PostToolUse | Edit|Write | Nudge to commit/push after prolonged editing |
| `scope-drift` | PreToolUse | Edit|Write | Warn when editing files outside claimed ticket scope |
| `compaction` | PreCompact | — | Extract events before context compaction |
| `stop-check` | Stop | — | Check for uncommitted/unpushed work before session end |
| `subagent-gate` | PreToolUse | Agent | Enforce model selection on Explore/Plan subagents |
| `push-nudge` | PostToolUse | Bash | Nudge to push after git commits when unpushed count or time is high |
| `workflow-gate` | PreToolUse | ExitPlanMode | Block ExitPlanMode until review rounds are complete |
| `review-tier` | PostToolUse | Edit|Write | Suggest plan review with specialist reviewers after plan file write |
| `version-check` | PreToolUse | Bash | Block push to main when package versions have not been bumped |
| `stale-flows` | PreToolUse | Edit|Write | Warn when editing files belonging to a stale flow definition |
| `next-action` | Stop | — | Suggest next actions before session end |
| `pr-review` | PostToolUse | Bash | Prompt for review workflow after PR creation |
| `transcript` | PostToolUse | — | Append tool call metadata to session transcript |
| `branch-before-commit` | PreToolUse | Bash | Block git commit on main/master — create a feature branch first |
| `worktree-check` | PreToolUse | Edit|Write|Bash | Block concurrent sessions without worktree isolation |
| `sprint-completion` | PreToolUse | Bash | Block PR creation when sprint gates are incomplete |
| `sprint-completion` | Stop | — | Block session end when sprint gates are incomplete |
| `sprint-completion` | PostToolUse | Bash | Auto-detect test pass and mark gate complete |
| `worktree-merge` | PreToolUse | Bash | Block gh pr merge --delete-branch in worktrees (causes false failure) |
| `worktree-self-remove` | PreToolUse | Bash | Block git worktree remove when targeting own cwd |
| `phase-boundary` | PreToolUse | Bash | Block starting sprint in new phase if previous phase cleanup incomplete |
| `claim-required` | PreToolUse | Edit|Write | Warn when editing code without an active sprint claim |
| `post-push` | PostToolUse | Bash | Suggest next workflow step after git push |
| `session-briefing` | PostToolUse | — | Inject sprint context on first tool call of session |
| `review-stale` | Stop | — | Warn about scored sprints with missing reviews at session end |
| `worktree-reuse` | PreToolUse | EnterWorktree | Guide agent to reuse existing worktrees instead of recreating |
<!-- AUTO-GENERATED: END guards -->

## MCP Tools

<!-- AUTO-GENERATED: START mcp -->

<!-- AUTO-GENERATED: END mcp -->

## User Flows

<!-- AUTO-GENERATED: START flows -->

No flows defined. Run `slope flows init` to create flow definitions.

<!-- AUTO-GENERATED: END flows -->

## Test Inventory

<!-- AUTO-GENERATED: START tests -->

<!-- AUTO-GENERATED: END tests -->

## Recent Sprint History

<!-- AUTO-GENERATED: START history -->

| Sprint | Theme | Tickets | Score |
|--------|-------|---------|-------|
| **1** | Example Sprint | 3 | par |
<!-- AUTO-GENERATED: END history -->

## Known Gotchas

Top recurring patterns from common-issues:

<!-- AUTO-GENERATED: START gotchas -->

- **Example pattern** (general, 1 sprint): This is an example recurring pattern. Replace with your own.
<!-- AUTO-GENERATED: END gotchas -->