#!/bin/bash
# Merges all transcript files in the current directory into a single transcript file.
# The output file is named based on the current directory name.
set -euo pipefail

export target=$(b=$(basename "$(pwd)"); printf "%s" "${b%%_*}_transcript.txt" | tr 'A-Z' 'a-z')
rm -f $target
ls -1 | while read file; do
    lect=$(echo "$file" | sed -E 's/.*(U[0-9]+)_T([0-9]+).*/\1L\2/')
    echo START:$lect | tee -a $target
    tr -d "\f" < "$file" | sed '/^U[0-9][0-9]_T[0-9][0-9]$/d' >> "$target"
    echo END:$lect | tee -a $target
done
dos2unix $target
echo Success: Transcripts merged to: $target
