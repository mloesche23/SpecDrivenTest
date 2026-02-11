#!/usr/bin/env zsh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUB="$ROOT/public"

echo "HTML Quick Checks"

fail=0

# 1) Ensure lang attribute exists on <html>
missing_lang=()
for f in "$PUB"/*.html; do
  grep -q "<html" "$f" && grep -q "lang=\"" "$f" || missing_lang+="$f"
done
if [ ${#missing_lang[@]:-0} -gt 0 ]; then
  echo "[FAIL] Missing lang attribute on:"; printf "%s\n" $missing_lang; fail=1
else
  echo "[PASS] All pages have lang attribute"
fi

# 2) Ensure <title> exists
missing_title=()
for f in "$PUB"/*.html; do
  grep -q "<title>" "$f" || missing_title+="$f"
done
if [ ${#missing_title[@]:-0} -gt 0 ]; then
  echo "[FAIL] Missing <title> on:"; printf "%s\n" $missing_title; fail=1
else
  echo "[PASS] All pages have <title>"
fi

# 3) Ensure images have alt attributes
no_alt=$(grep -n "<img" "$PUB"/*.html | grep -v "alt=\"" || true)
if [ -n "$no_alt" ]; then
  echo "[FAIL] Images missing alt attribute:"; echo "$no_alt"; fail=1
else
  echo "[PASS] All <img> elements include alt attributes"
fi

# 4) Check skip-to-content link presence
missing_skip=()
for f in "$PUB"/*.html; do
  grep -q "class=\"skip-link\"" "$f" || missing_skip+="$f"
done
if [ ${#missing_skip[@]:-0} -gt 0 ]; then
  echo "[WARN] Some pages missing skip-to-content link:"; printf "%s\n" $missing_skip
else
  echo "[PASS] All pages include skip-to-content link"
fi

echo "Checks complete."
exit $fail
