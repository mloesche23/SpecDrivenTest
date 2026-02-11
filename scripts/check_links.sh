#!/usr/bin/env sh
set -eu

BASE_URL="${BASE_URL:-http://localhost:8001}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUB="$ROOT/public"

echo "Link Check (BASE=$BASE_URL)"

tmp_links="$(mktemp)"
trap 'rm -f "$tmp_links"' EXIT

for f in "$PUB"/*.html; do
  grep -o 'href="[^"]\+"' "$f" | while read -r href; do
    url="${href#href=\"}"
    url="${url%\"}"
    case "$url" in
      mailto:*|http:*|https:*) continue ;;
    esac
    path="$url"
    case "$path" in
      /*) ;; 
      ./*) path="/${path#./}" ;;
      *) path="/$path" ;;
    esac
    path_no_frag="${path%%#*}"
    echo "$BASE_URL$path_no_frag" >> "$tmp_links"
  done
done

sort -u "$tmp_links" | while read -r u; do
  code="$(curl -s -o /dev/null -w "%{http_code}" "$u" || echo 000)"
  size="$(curl -s -o /dev/null -w "%{size_download}" "$u" || echo 0)"
  echo "$code $size $u"
  if [ "$code" != "200" ]; then
    echo "[FAIL] Broken link: $u" >&2
    exit 1
  fi
done

echo "[PASS] All links resolved with HTTP 200"
