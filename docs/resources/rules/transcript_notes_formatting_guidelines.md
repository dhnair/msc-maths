---
title: "Transcript and Notes Formatting Guidelines"
type: "Guidelines"
tags: [MScMathematics, Transcript, Notes, Formatting, Standards]
---

# 📚 Transcript & Notes Formatting Guidelines

This document defines the agreed-upon format for all transcripts and study notes (Mathematics, IT, CS, Data Science, Machine Learning, etc.).  
The goal is **pedagogical, self-contained, Obsidian-compatible notes**.

---

## 1. File Types
- **Full Transcript** → Pedagogical, detailed, expanded with explanations and proofs.
- **Study Notes** → Concise, revision-friendly version.

---

## 2. Math Formatting
- Always use **Obsidian-friendly LaTeX delimiters**:
  - Inline math: `$ ... $`
  - Block math: `$$ ... $$`

---

## 3. Content Layers
- **Learning Outcomes**: Always included at the start of transcripts.
- **Main Body**: Follows lecture flow, expanded with background explanations when needed, includes all equations and proofs.
- **Refresher Notes**: Inline clarifications for assumed UG-level topics.
- **Examples**: Only when essential to illustrate a definition/theorem.
- **Diagrams**: Described in text, with placeholders if needed.

---

## 4. Theorems and Proofs
- Every theorem/proposition is **explicitly stated and labeled**.
- Proofs are written under a **“Proof:” heading** and end with **QED (□)**.

Example:

**Theorem 1.1 (Riemann Integrability Criterion).**  
Statement here...

**Proof:**  
Steps of proof...  
□

---

## 5. Cross-links
- Use **Obsidian-style cross-links** `[[...]]` wherever possible to connect concepts across notes.

---

## 6. IT/CS/DS/ML Courses
- Use **fenced code blocks** for code:
  - Example:  
    ```python
    def f(x):
        return x**2  # Example function
    ```
- Embed math inside code blocks if relevant.
- Use LaTeX math blocks (`$$ ... $$`) when only math is present.

---

## 7. Footer Section
- Always include:
  - **Glossary of formal definitions** introduced in the lecture.
  - **Notation conventions** (e.g., $\mathbb{R}$ = reals, $\mathbb{N}$ = naturals).
  - **References** if lecture cites a theorem/book.

---

## 8. Metadata (YAML Frontmatter)
Each file includes metadata:

```yaml
---
title: "Course Code - Unit Title"
course: "Course Name"
lecture: "Unit and Lecture Title"
type: "Transcript | StudyNotes | ExpandedTranscript"
tags: [MScMathematics, IT, CS, DS, ML, Transcript, Notes]
---
```

---

## 9. Structure Consistency
Each transcript follows the same structure:
1. Learning Outcomes
2. Introduction / Setup
3. Definitions
4. Main Content (theorems, proofs, derivations)
5. Examples (if any)
6. Summary
7. Footer: Glossary + Notation

---

## 10. File Naming Convention
- Snake case, with course code + unit number:
  - `emth515_u01t01_full_transcript.md`
  - `emth515_u01t01_study_notes.md`

---

## 11. Scope
- Applies to **all subjects**: Mathematics, IT, CS, Data Science, Machine Learning.
- Consistent style across courses.

---

## 12. Master Index
- Not needed now.
- To be created later once enough courseware is completed.

---

End of Guidelines
