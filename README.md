# 🎓 M.Sc Mathematics Notes

[![Built with MkDocs](https://img.shields.io/badge/Built%20with-MkDocs%20Material-blue)](https://squidfunk.github.io/mkdocs-material/)
[![View Site](https://img.shields.io/badge/View-Site-brightgreen)](https://dhnair.github.io/msc-math/)
[![License](https://img.shields.io/badge/License-Educational-lightgrey)]()

Welcome to **M.Sc Mathematics Notes**, a structured, open repository containing detailed **transcripts**, **study notes**, and **reference materials** created and maintained by **Deepak Nair**.

This project combines **Obsidian** for knowledge management and **MkDocs Material** for public publishing.  
It is designed to provide pedagogical, math-rich, LaTeX-compatible notes for the M.Sc Mathematics curriculum.

---

## 🧩 Features

- ✅ **LaTeX-ready**: Math equations render via MathJax (`$...$`, `$$...$$`)  
- ✅ **Obsidian-compatible**: Directly usable inside Obsidian  
- ✅ **MkDocs + Material**: Professional, responsive documentation site  
- ✅ **Auto-deployed**: Hosted on GitHub Pages via GitHub Actions  
- ✅ **Pedagogical**: Each unit includes full transcripts and condensed study notes  

> _“Mathematics is not about numbers, equations, computations, or algorithms: it’s about understanding.”_  
> — William Paul Thurston

---

## 🧮 Structure

```
msc-math/
├── mkdocs.yml
├── index.md
├── requirements.txt
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   ├── stylesheets/
│   │   └── custom.css
│   ├── resources/
│   │   ├── references/
│   │   │   ├── intervals_and_partitions.md
│   │   │   ├── math_symbols_glossary.md
│   │   │   └── math_symbols_cheat_sheet.md
│   │   └── rules/
│   │       ├── transcript_notes_formatting_guidelines.md
│   │       └── transcript_template.md
│   └── term1/
│       ├── real_analysis_i/
│       │   ├── transcripts/emth515_u01t01_transcript.md
│       │   └── notes/emth515_u01t01_study_notes.md
│       ├── advanced_abstract_algebra_i/
│       │   ├── transcripts/emth516_u01_transcript.md
│       │   └── notes/emth516_u01_study_notes.md
│       └── fundamentals_of_information_technology/
│           ├── transcripts/ecap145_u01l01_full_transcript.md
│           └── notes/ecap145_u01l01_study_notes.md
```

---

## 🚀 Local Development

You can preview the site locally before deployment.

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Serve locally
mkdocs serve

# 3. Build static site
mkdocs build
```

Visit **http://127.0.0.1:8000/** in your browser to preview the site.

---

## 🌐 Deployment

Deployment is **fully automated** using GitHub Actions.

Every push to the `main` branch:
- Builds your MkDocs site  
- Checks for broken links  
- Deploys to the `gh-pages` branch  

You can trigger a manual build anytime under  
**GitHub → Actions → Deploy MkDocs site to GitHub Pages → Run workflow**

Your live site:  
👉 [https://dhnair.github.io/msc-math/](https://dhnair.github.io/msc-math/)

---

## 🧠 Notes on Compatibility

- Obsidian and MkDocs both support the same **Markdown + LaTeX** syntax.
- `$ ... $` → inline math  
- `$$ ... $$` → display math  
- All notes are written to be cross-compatible, portable, and editable in any Markdown editor.

---

## 🧩 Credits and Acknowledgments

- Built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/)  
- Math rendering via [MathJax](https://www.mathjax.org/)  
- Formatting inspired by [Pymdown Extensions](https://facelessuser.github.io/pymdown-extensions/)  
- Original lecture materials: MSc Mathematics Curriculum 2024–2025  

---

## 🪶 License

This project is released for **educational and personal use**.  
You may view, fork, or adapt it with attribution.  
For academic integrity, please do not redistribute institutional materials verbatim without citation.

---

## ✨ Author

**Deepak Nair**  
📍 M.Sc Mathematics 
🔗 [LinkedIn Profile](https://linkedin.com/in/dhnair)  
🧮 “Turning notes into a living mathematical library.”
