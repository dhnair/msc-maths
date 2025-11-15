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

Math delimiter rule (required when output_format.math_delimiters == "dollars-only"):

- Use dollar delimiters only:
  - Inline math: `$ ... $`
  - Display math: `$$ ... $$`

- Forbidden:
  - `\(` `\)`
  - `\[ ` `\]`
  - Any backslash-wrapped delimiter sequences that denote math

- Allowed:
  - LaTeX commands inside dollar math (e.g. `\alpha`, `\sum`, `\int`).
  - Backslashes used inside allowed math blocks for LaTeX macros.

- Implementation requirements:
  - Generator must run a preflight check that rejects any output containing the forbidden delimiter patterns.
  - CI must fail if any committed content contains the forbidden delimiters.
  - Generator may automatically convert `\(...\)` -> `$...$` and `\[...\]` -> `$$...$$` when the manifest flag is `dollars-only`.

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

Every transcript file must be produced as a downloadable Markdown file by default.
Canvas rendering does not replace generating a downloadable file. The assistant must refrain
from skipping the downloadable file unless the user explicitly requests otherwise.

Two transcript modes are allowed:

1. Literal Transcript (Mode A)
   - A cleaned and lightly edited version of the original spoken transcript.
   - No reordering of ideas.
   - No addition, removal, or reinterpretation of content.
   - Grammar may be corrected; OCR errors may be fixed.
   - Structure follows the lecture flow exactly as delivered.
   - Used only when explicitly requested by the user.

2. Pedagogical Transcript (Mode B)
   - A structured, reorganized, explanatory rewrite.
   - Must include all content from the original transcript, without adding new material.
   - May reorganize ideas for clarity.
   - May expand short spoken fragments into full explanatory sentences.
   - This is the default transcript mode unless the user explicitly requests Mode A.

General Rules (apply to both modes):
- Must remain faithful to the mathematical meaning.
- Must use only ASCII-safe LaTeX.
- Must not invent examples, theorems, or steps not present in the source.
- Must be formatted in a clean, clear academic style.
- The first Markdown heading in the file body must be an H1 (#) that exactly matches the YAML title field.

## Structure for Pedagogical Transcripts (Mode B)
Pedagogical transcripts must follow this structure:

1. H1 Title  
   - Must exactly match the YAML `title:` value.

2. Learning Outcomes  
   - A short list summarizing what the lecture teaches.
   - Must be directly supported by the lecture content.

3. Introduction  
   - High-level context for the lecture.
   - No new information beyond what is in the transcript.

4. Definitions  
   - Precise definitions exactly as given in the lecture.
   - Reformulation allowed for clarity, but no new definitions.

5. Main Development  
   - Step-by-step structured explanation of all ideas, results, proofs, and calculations.
   - Reorganization for clarity is allowed.

6. Examples  
   - Only if examples appear in the transcript.
   - Must not create new examples.

7. Summary  
   - A concise restatement of the lecture’s essential points.

8. Glossary (optional)  
   - Only if terminology is explicitly introduced.

# 8. Notes Structure

Notes are compressed, bullet-based study notes derived strictly from the transcript of the same lecture.
They summarize but never invent content.

Every notes file must be produced as a downloadable Markdown file by default.
Canvas rendering does not replace generating a downloadable file. The assistant must refrain
from skipping the downloadable file unless the user explicitly requests otherwise.

General Rules:
- Must be concise.
- Must preserve all mathematical meaning.
- Must use bullet points, not paragraphs.
- Must use ASCII-safe LaTeX.
- Must never add new examples, proofs, results, or interpretations.
- Must follow the ordering of ideas in the pedagogical transcript (Mode B).
- The first Markdown heading in the file body must be an H1 (#) that exactly matches the YAML title field.

Required Notes Structure:

1. H1 Title  
   - Must exactly match the YAML `title:` value.

2. Key Points  
   - Bullet summary of the lecture's core ideas.
   - Must reflect every major topic covered.

3. Definitions and Notation  
   - Bullet list of all definitions, symbols, and notation introduced.

4. Core Results  
   - Bullet statements of all theorems, lemmas, or propositions appearing in the lecture.
   - Proofs should not be included unless the transcript explicitly walks through them, in which case a brief bullet outline is allowed.

5. Important Derivations  
   - Stepwise bullet summaries of any derivations, inequalities, or calculations shown.
   - All mathematics must be written in ASCII-safe LaTeX.

6. Relationships and Interpretations  
   - Bullet explanation of how the results fit together.
   - Includes inequality chains, monotonicity behavior, equivalence criteria, etc.

7. Summary  
   - Compact end-of-lecture recap.
   - No examples, no commentary, no new interpretations.

Optional:
8. Additional Remarks  
   - Only if such remarks appear explicitly in the transcript.
   - Must not introduce new insights, intuition, or external context.

# 9. Numbering Rules

1. Unit and lecture numbers must match the index file.
2. No invented lectures.
3. If uncertain, the assistant must ask.

# 9.1 Mapping Rules Between Transcript Markers, Index Entries, and File Names

1. Transcript markers use UUULLL (e.g., U01L02).
2. Index entries use UUULLL (e.g., U01L02).
3. Output filenames use uuulll (e.g., u01l02).
4. These mappings must match exactly.
5. If any mismatch appears, the assistant must stop and ask.

# 10. MDX and Obsidian Compatibility Rules

- ASCII only
- LaTeX only
- No HTML or JSX
- No raw < or >
- Avoid {} unless inside code blocks

## 10.1 MDX LaTeX Compatibility Rules (activated when check_mdx_syntax = true)

When this flag is enabled:

Allowed:
- Inline math wrapped with dollar signs: $ ... $
- Display math wrapped with double dollar signs:

  $$
  ...
  $$

- LaTeX macros inside math blocks (e.g., \alpha, \sum, \int)

Forbidden:
- \(...\)
- \[...\]
- any LaTeX math delimiter starting with backslash rather than $-delimiters
- any math expression containing a standalone backslash outside $...$ or $$...$$

The generator must reject or rewrite any output violating these rules.


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
