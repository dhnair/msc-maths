---
title: "Master Project Purpose and Guidelines"
type: "Guidelines"
project: "MSc Mathematics - Unified Transcript and Notes Generation Rules"
version: "2.0"
---

# 1. Project Purpose

The goal of this project is to build a complete, coherent, and well-structured archive of:
- Lecture Transcripts
- Study Notes

for all MSc-level courses, using the user's uploaded PDFs, text transcripts, and index files as the only sources of truth. This archive is intended both for personal study and for public deployment through a GitHub Pages site powered by Docusaurus, forming a permanent, navigable, and academically rigorous online reference for the MSc Mathematics curriculum.

All generated content must be:
- pedagogical and explanatory
- accurate and faithful to the source material
- systematically structured
- Obsidian-compatible
- Docusaurus and MDX-compatible
- future-proof and easy to maintain
- ASCII-only and LaTeX-only for maximum compatibility

This project must operate with strict discipline:
- no guessing
- no hallucination
- no external textbook assumptions
- no invented lecture structures or topics
- all content derived strictly from uploaded materials

The final objective is a unified, publishable, academically rigorous digital library representing the full MSc Mathematics curriculum.

# 2. Source of Truth Rules

1. All content must come strictly from uploaded files, such as:
   - Course PDFs
   - Full transcript .txt files
   - Course index .md files
   - Any additional user-provided materials

2. If anything is missing or ambiguous, the assistant must stop and ask the user.

3. No guessing, prediction, or use of outside textbook knowledge is allowed.

4. No invented theorems, examples, definitions, or additional lecture topics.

# 3. Tone and Style Rules

All transcripts and notes must be written in a clear, pedagogical, explanatory tone:
- Concept-first
- Student-friendly but academically rigorous
- No fluff or filler
- No personality chatter
- No oversimplification
- No cryptic or compressed writing

The tone should reflect an expert teacher explaining concepts step-by-step.

# 4. ASCII-Only and LaTeX-Only Rules

All generated content must be strict ASCII.

Allowed:
- ASCII characters only
- LaTeX math inside $...$ or $$...$$
- ASCII hyphen - only

Forbidden:
- Any Unicode math symbols, such as:
  ± × ÷ √ → ⇒ ∞ ≥ ≤ ≠ ≈ ∫
- Any Unicode punctuation, such as:
  – — “ ” ‘ ’ …
- Unicode superscripts or subscripts, such as:
  ² ³ ⁴

Math must use valid LaTeX form:
- \int_a^b f(x) d\alpha(x)
- x^2, not x²
- \sqrt{x}, not √x

# 4.1 LaTeX Rendering Rules

To ensure correct rendering in Obsidian, MkDocs, Markor, and Docusaurus:

1. Inline math must use $...$.
2. Display math must use:
   $$
   ...
   $$
3. Do not use \( ... \) or \[ ... \].
4. Every LaTeX command must start with a single backslash.
5. LaTeX commands must not appear outside $ or $$.
6. No escaping LaTeX with extra backslashes.

# 5. Metadata and Frontmatter Rules

Each file must begin with:

---
title: "<UNIT NUMBER><LECTURE NUMBER> - <Lecture Title> (Transcript or Notes)"
type: "Transcript" or "Notes"
course: "<COURSE CODE> - <COURSE NAME>"
unit: "<UNIT NUMBER> - <UNIT TITLE>"
lecture: "<LECTURE NUMBER> - <LECTURE TITLE>"
file: <exact filename>
tags:
  - MScMathematics
  - <Course Code>
  - <UNIT NUMBER><LECTURE NUMBER>
  - <Concept>
  - Transcript or Notes
---

Rules:
- Unit number starts with U, and lecture number starts with L
- Title must begin with the unit and lecture number. eg; U05L02
- Title must use ASCII hyphens.
- The file field must exactly match the filename.

# 6. Filename Rules

Case:
All lower case

Pattern:
- Transcript: <course code>_<unit number><lecture number>_1_t.md
- Notes: <course code>_<unit number><lecture number>_1_n.md

Example:
emth515_u01l01_1_t.md
emth515_u01l01_2_n.md
egen530_u11l03_1_t.md
egen530_u11l03_2_n.md

Rule:
If numbering does not match the index, the assistant must ask user before generating.

# 7. Transcript Structure

Transcripts must:
- be pedagogical and structured
- remain faithful to original content
- clarify but not alter mathematical meaning
- reorganize for clarity but not omit any content

Structure:
- Learning Outcomes
- Introduction
- Definitions
- Main Development
- Examples
- Summary
- Glossary (if needed)

# 8. Notes Structure

Notes must:
- be concise
- use bullet points
- contain no invented content
- compress information without losing meaning

# 9. Numbering Rules

1. Unit and lecture numbers must match the index file.
2. No invented lectures.
3. No phantom entries such as 1.6 or 2.8.
4. If uncertain, the assistant must ask.

# 9.1 Mapping Rules Between Transcript Markers, Index Entries, and File Names

1. Transcript markers use UUU_TLL (e.g., U01_T02).
2. Index entries use UUU L LL (e.g., U01L02).
3. Output filenames use uUU_LL (e.g., 1.2).
4. These mappings must match exactly.
5. If any mismatch appears, the assistant must stop and ask.

# 10. MDX and Obsidian Compatibility Rules

- ASCII only
- LaTeX only
- No HTML or JSX
- No raw < or >
- Avoid {} unless inside code blocks

# 11. Error Prevention Rules

The assistant must never:
- substitute external textbook content
- contradict the index
- produce wrong numbering
- inject Unicode
- use smart quotes
- mix units or lectures
- rewrite math incorrectly
- reorder lecture structure without source support

# 12. Allowed Transformations

The assistant may:
- correct OCR mistakes
- clean grammar
- rewrite unclear sentences
- reorganize for clarity
- fix broken LaTeX tokens
- convert all math to ASCII-safe LaTeX

The assistant may not:
- alter mathematical meaning
- add new content not present in transcripts

# 13. If in Doubt, Ask the User

The assistant must pause and ask whenever:
- numbering is unclear
- transcript boundaries are ambiguous
- math is malformed
- index and transcript disagree

# 14. Cross-Course Applicability

These rules apply to:
- EMTH515
- EMTH516
- EMTH517
- EGEN530
- ECAP145
- all future courses

# 15. Practical Enforcement Steps

Before writing any file:

1. Validate ASCII only.
2. Validate proper LaTeX.
3. Validate numbering.
4. Validate filename matches frontmatter.
5. Validate math is wrapped correctly.
6. If any check fails, stop and ask.

# 16. Using This File to Recover Context

When starting a new chat, paste this file first. The assistant must:
- load the rules
- load uploaded transcripts and indices
- verify lecture mapping
- clarify before generating

# 17. Appendix: Forbidden and Allowed Notation

Allowed:
- $u' = \\alpha u$
- $$\\int_a^b f(x) d\\alpha(x)$$

Forbidden:
- u' = alpha u (missing backslash)
- u' = x² (Unicode)
- Riemann-Stieltjes (Unicode dash)
