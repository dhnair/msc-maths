#!/bin/bash
set -euo pipefail

export course=$(b=$(basename "$(pwd)"); printf "%s" "${b%%_*}")

for u in $(seq -w 1 14); do
    prefix="${course}_U${u}_T"
    out=$(echo ${course}_U${u}_transcript.txt | tr 'A-Z' 'a-z')

    echo "Building $out"
    rm -f "$out"

    for f in ${prefix}*.txt; do
        [ -e "$f" ] || continue
        lect=$(echo "$f" | sed -E 's/.*(U[0-9]+)_T([0-9]+).*/\1L\2/')
        echo "START:$lect" | tee -a "$out"
        tr -d "\f" < "$f" | sed '/^U[0-9][0-9]_T[0-9][0-9]$/d' >> "$out"
        echo "END:$lect" | tee -a "$out"
    done

    dos2unix "$out"
done

echo "Done generating 14 unit files."
