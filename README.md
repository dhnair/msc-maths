# 🎓 M.Sc. Mathematics Notes

[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-blueviolet)](https://docusaurus.io/)
[![View Site](https://img.shields.io/badge/View-Site-brightgreen)](https://dhnair.github.io/msc-maths/)
[![License](https://img.shields.io/badge/License-Educational-lightgrey)]()

Welcome to **M.Sc. Mathematics Notes**, a structured, open repository of **lecture transcripts**, **study notes**, and **reference materials** created and maintained by **Deepak Nair**.

This project combines:
- **Obsidian** for writing and personal knowledge management,
- **Python** and **Node.js** scripts for automatic content structuring,
- **Docusaurus 3** for publishing as a fully responsive static website on **GitHub Pages**.

The goal is to build a living, math-rich archive of the M.Sc. Mathematics curriculum — with reproducible, automated publishing.

---

## 🧩 Features

- ✅ **MathJax rendering** for LaTeX equations (`$...$`, `$$...$$`)
- ✅ **Obsidian-compatible Markdown** structure  
- ✅ **Automated sidebar & index generation** (no manual navigation editing)
- ✅ **Python & Node.js build pipeline**
- ✅ **Deployed automatically** to GitHub Pages via GitHub Actions  
- ✅ **Educational focus** — full transcripts + condensed study notes

> _“Mathematics is not about numbers, equations, computations, or algorithms: it’s about understanding.”_  
> — William Paul Thurston

---

## 🧮 Directory Structure

```
msc-maths/
├── website/
│   ├── docusaurus.config.js
│   ├── sidebars.js
│   ├── docs/
│   │   ├── index/
│   │   │   └── index.md
│   │   ├── sem1/
│   │   │   ├── ecap145/
│   │   │   │   ├── u01/
│   │   │   │   │   ├── 1.1/
│   │   │   │   │   │   ├── ecap145_u01_1.1_a_transcript.md
│   │   │   │   │   │   └── ecap145_u01_1.1_b_notes.md
│   │   │   │   └── _catalogue.md
│   │   │   ├── emth515/
│   │   │   └── emth516/
│   │   └── zzz_references/
│   │       ├── math_symbols_glossary.md
│   │       └── intervals_and_partitions.md
│   └── scripts/
│       └── generate-index.js
├── toc/
│   └── sem1/
│       └── ECAP145.md
├── bin/
│   └── generate_catalogues.py
├── .github/
│   └── workflows/
│       └── deploy.yaml
└── README.md
```

### Key directories

| Directory | Purpose |
|------------|----------|
| `website/docs/` | Source Markdown files for each course and semester |
| `toc/` | Table of Contents files used to generate `_catalogue.md` files |
| `bin/` | Python automation scripts for cataloguing courses |
| `scripts/` | Node.js automation scripts for generating index pages |
| `.github/workflows/` | CI/CD automation (deploys site to GitHub Pages) |

---

## ⚙️ Build Prerequisites

Before running locally or in CI:

### 1. **System Requirements**
- Node.js ≥ **18.0**
- Python ≥ **3.10**
- npm ≥ **9.0**

### 2. **Install dependencies**

```bash
# From the project root
cd website
npm install
```

### 3. **Generate index and catalogues**

```bash
# Create _catalogue.md in each folder based on TOC
python3 bin/generate_catalogues.py

# Generate docs/index/index.md with YAML + sidebar structure
npm run prestart
```

### 4. **Run local dev server**

```bash
npm run start
```

Then open:  
👉 [http://localhost:3000/msc-maths/](http://localhost:3000/msc-maths/)

---

## 🔁 Automated Build Pipeline

Publishing is **fully automated** through **GitHub Actions** using [`deploy.yaml`](.github/workflows/deploy.yaml).

### Pipeline overview:

1. **Trigger:**  
   Any push or merge to the `main` branch.
2. **Steps:**  
   - Checkout the repository  
   - Install Node + Python dependencies  
   - Run:
     ```bash
     python3 bin/generate_catalogues.py
     node website/scripts/generate-index.js
     npm run build
     ```
   - Deploy the static site to the **`gh-pages`** branch
3. **Result:**  
   ✅ Your live site updates automatically at:  
   [https://dhnair.github.io/msc-maths/](https://dhnair.github.io/msc-maths/)

You can manually trigger the workflow from:  
**GitHub → Actions → Deploy Docusaurus site to GitHub Pages → Run workflow**

---

## 📚 Authoring Notes

- All notes are written in **Obsidian**, synced via Git, and auto-integrated into the Docusaurus site.  
- Every folder represents a **chapter/unit**, with:
  - `notes.md` → Short-form summary  
  - `transcript.md` → Full lecture transcript  
  - `_catalogue.md` → Auto-generated section title  

- Each semester (`sem1`, `sem2`, etc.) is grouped logically, and the `generate-index.js` script creates a global site index.

---

## 🧠 MathJax Support

All math expressions render automatically using Docusaurus’s **MathJax integration** via the `remark-math` and `rehype-katex` plugins.

```markdown
Inline: $E = mc^2$  
Block:
$$
\int_a^b f(x)\,dx = F(b) - F(a)
$$
```

Works both in Obsidian and on the published site.

---

## 🧩 Credits

- Built with [Docusaurus](https://docusaurus.io/)
- Math rendering powered by [KaTeX / MathJax](https://www.mathjax.org/)
- Original content derived from the **M.Sc. Mathematics (2025–2027)** curriculum
- Site automation inspired by [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) workflows

---

## ⚖️ Copyright & Fair Use Disclaimer

This repository, **M.Sc. Mathematics Notes**, is an **independent educational project** created and maintained by **Deepak Nair**.

All contents within this repository are independently curated and authored, drawing from universally available mathematical knowledge. Some sections were drafted or refined using AI tools and subsequently reviewed, verified, and edited by the author. No proprietary or confidential university materials are included.

### ✅ What This Project Contains

- Author’s own **transcripts and notes**, written from personal study and understanding.  
- **Universally known mathematical content** such as theorems, formulas, and proofs.  
- Course and module identifiers (e.g., `EMTH515`, `ECAP145`) used only for organizational purposes.  
- Curriculum outlines that are **factual** and **not copyrightable**.

### 🚫 What This Project Does *Not* Contain

- Any **verbatim university materials** such as lecture slides, PDFs, or internal notes.  
- Any **publisher-owned textbook excerpts** or proprietary examples.  
- Any content that violates **copyright, confidentiality, or academic integrity**.

### 📘 Fair Use & Educational Intent

This project is provided **solely for educational and personal learning purposes**.  
It operates under the principles of **fair use**, **academic sharing**, and **open educational resources (OER)**.  
All content is intended to support lifelong learning and collaborative education without commercial gain.

If any content is believed to infringe upon rights or should be removed, please open an issue or contact the repository maintainer.

---

## 🪶 Author

**Deepak Nair**  
📍 M.Sc. Mathematics  
🔗 [https://dhnair.github.io/msc-maths/](https://dhnair.github.io/msc-maths/)

© 2025 Deepak Nair — Shared under an **Educational Use License**.  
All trademarks, course codes, and curriculum references remain the property of their respective institutions.
