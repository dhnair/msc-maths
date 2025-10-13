#!/bin/bash

if [ -z "$1" ]; then
  echo "Error: No file supplied." >&2
  echo "Usage: $0 <path_to_file.pdf_or_file.txt>" >&2
  exit 1
fi

INPUT_FILE="$1"
FILE_TXT=""

case "${INPUT_FILE##*.}" in
  pdf)
    # If the file ends in .pdf
    FILE_TXT="${INPUT_FILE%.*}.txt"
    pdftotext -layout "$INPUT_FILE" "$FILE_TXT" 2>/dev/null
    ;;
  txt)
    # If the file ends in .txt
    FILE_TXT="$INPUT_FILE"
    if [ ! -f "$FILE_TXT" ]; then
        echo "Error: Input text file '$FILE_TXT' not found." >&2
        exit 1
    fi
    ;;
  *)
    echo "Error: Invalid file type. Please provide a .pdf or .txt file." >&2
    exit 1
    ;;
esac

process_header() {
  echo "$FILE_TXT" | awk -F'[_.]' '{
    OFS=" "
    $1=""
    $(NF)=""
    print "#", $0
  }' | xargs
}

process_units() {
  awk '
    /^Unit/ { sub("Unit",""); $NF=""; print "##", $0; next }
    /^Content|^CONTENT/ { f=1; next }
    /^Summary/ { f=0 }
    f && /^[0-9]+\.[0-9]+/ { $1=$1; print "###", $0 }
    ' "$FILE_TXT"

  perl -pe 's/^\h+//' "$FILE_TXT" | awk '
    /^Content|^CONTENT|^UNIT [0-9][0-9]:|^Unit [0-9][0-9]:/ { f=1; next }
    /^Summary/ { f=0 }
    f && /^[1-9]+\.[1-9]+/ { $1=$1; print "###", $0 }
    '
}

HEADER_LINE=$(process_header)
TOC_FILENAME=$(echo "$HEADER_LINE" | awk '{print $2}')
toc_file="$(dirname $0)/../toc/term1/${TOC_FILENAME}.md"

echo "$HEADER_LINE" > "$toc_file"
process_units | sort -nk2 | uniq | sed "s/^## /\n## /g" >> "$toc_file"
echo "Generated TOC saved to $toc_file"

