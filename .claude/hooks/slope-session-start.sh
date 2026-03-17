#!/usr/bin/env bash
# SLOPE hook: session-start

# === SLOPE MANAGED (do not edit above this line) ===
# Resolve slope binary: project node_modules → global PATH → npx fallback
SLOPE_PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(git rev-parse --show-toplevel 2>/dev/null || pwd)}"
if [ -x "$SLOPE_PROJECT_DIR/node_modules/.bin/slope" ]; then
  _SLOPE_BIN="$SLOPE_PROJECT_DIR/node_modules/.bin/slope"
elif command -v slope >/dev/null 2>&1; then
  _SLOPE_BIN="$(command -v slope)"
else
  _SLOPE_BIN="npx --yes @slope-dev/slope"
fi
slope() { "$_SLOPE_BIN" "$@"; }

slope session start --ide="$SLOPE_IDE" --role=primary
slope briefing --compact
# === SLOPE END ===

# Add your custom commands below:
