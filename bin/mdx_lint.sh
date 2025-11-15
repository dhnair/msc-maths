#!/usr/bin/env bash

# MDX / remark-math / rehype-katex linter
# Ensures dollar-based math delimiters only

TARGET_DIR="../generator"
PATTERN_FILES="$TARGET_DIR/*.md"

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

echo "Running MDX math syntax linter on $PATTERN_FILES"
echo

ERRORS=0

# Forbidden patterns: MDX-incompatible math delimiters
FORBIDDEN=(
  "\\\\("      # \(
  "\\\\)"      # \)
  "\\\\["      # \[
  "\\\\]"      # \]
)

for file in $PATTERN_FILES; do
  [[ ! -f "$file" ]] && continue

  echo "Checking $file ..."

  for pattern in "${FORBIDDEN[@]}"; do
    MATCHES=$(grep -nE "$pattern" "$file")
    if [[ -n "$MATCHES" ]]; then
      echo -e "${RED}ERROR:${NC} Forbidden math delimiter found:"
      echo "$MATCHES"
      echo
      ERRORS=1
    fi
  done
done

if [[ $ERRORS -eq 0 ]]; then
  echo -e "${GREEN}MDX MATH SYNTAX LINT PASSED.${NC}"
  exit 0
else
  echo -e "${RED}MDX MATH SYNTAX LINT FAILED.${NC}"
  exit 1
fi
