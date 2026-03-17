#!/usr/bin/env bash
set -euo pipefail

# cc-them demo: full experience in 60 seconds
# Run: bash docs/demo.sh

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  cc-them: sourced reasoning agents for Claude Code"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Step 1: See what's available
echo "Step 1: See all available profiles"
echo "$ npx cc-them list"
echo ""
npx cc-them list

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Step 2: Preview before you install
echo "Step 2: Preview a profile to see what you're getting"
echo "$ npx cc-them preview rich-hickey"
echo ""
npx cc-them preview rich-hickey

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Step 3: Install
echo "Step 3: Install the agent"
echo "$ npx cc-them install rich-hickey"
echo ""
npx cc-them install rich-hickey

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Done. Next steps:"
echo ""
echo "  1. Start a new Claude Code session to activate the agent"
echo "  2. Type: \"Use rich-hickey to review this data model.\""
echo ""
echo "The agent is now at .claude/agents/rich-hickey.md"
echo "It's a single 4KB markdown file. Read it, edit it, or delete it."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "What to expect, without vs. with cc-them:"
echo ""
echo "  Without (\"review this like Rich Hickey\"):"
echo "  > This looks reasonable. You might consider using"
echo "  > immutable data structures and keeping things simple."
echo ""
echo "  With (rich-hickey agent installed):"
echo "  > You're using \"simple\" to mean \"easy to write,\" but"
echo "  > simplicity is an objective property: it means \"not"
echo "  > interleaved.\" This ORM is complecting your information"
echo "  > model with a persistence strategy."
echo ""
echo "If it doesn't change how you think in one session, delete the file."
echo ""
