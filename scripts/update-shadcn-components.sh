#!/usr/bin/env bash

# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
UI_DIR="$PROJECT_ROOT/src/components/ui"

# Change to project root so shadcn can find components.json
cd "$PROJECT_ROOT" || exit 1

# Check if components.json exists
if [ ! -f "components.json" ]; then
  echo "Error: components.json not found in $PROJECT_ROOT"
  exit 1
fi

# Check if the UI directory exists
if [ ! -d "$UI_DIR" ]; then
  echo "Error: UI directory not found at $UI_DIR"
  exit 1
fi

# Update each component
for file in "$UI_DIR"/*.tsx; do
  if [ -f "$file" ]; then
    component=$(basename "$file" .tsx)
    echo "Updating component: $component"
    pnpm dlx shadcn@latest add "$component" --yes --overwrite
  fi
done

echo "All components updated!"
