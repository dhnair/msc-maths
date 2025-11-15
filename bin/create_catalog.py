import os
import re

TERM = "1"  # Change this for different semesters/terms

# Directories relative to this script’s location
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
TOC_DIR = os.path.join(SCRIPT_DIR, "../toc/term_" + TERM)
DOCS_DIR = os.path.join(SCRIPT_DIR, "../website/docs/term_" + TERM)

def parse_toc(toc_path):
    """Parse a TOC markdown file into a nested dict structure."""
    with open(toc_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    toc_data = {"course": "", "units": {}}
    current_unit = None

    for line in lines:
        line = line.strip()
        if line.startswith("# "):  # Course title
            toc_data["course"] = line.lstrip("# ").strip()
        elif line.startswith("## "):  # Unit title
            current_unit = line.lstrip("# ").strip()
            toc_data["units"][current_unit] = []
        elif line.startswith("### ") and current_unit:  # Subunit
            sub = line.lstrip("# ").strip()
            toc_data["units"][current_unit].append(sub)

    return toc_data


def write_catalogue(folder, title):
    """Write a _catalogue.md file with a single header line."""
    cat_path = os.path.join(folder, "_catalogue.md")
    os.makedirs(folder, exist_ok=True)
    with open(cat_path, "w", encoding="utf-8") as f:
        f.write(f"# {title}\n")
    print(f"📘 Created catalogue: {os.path.relpath(cat_path)}")


def list_dirs(path):
    """Return only subdirectories (ignore files)."""
    return [d for d in os.listdir(path) if os.path.isdir(os.path.join(path, d))]


def create_catalogues():
    for toc_file in os.listdir(TOC_DIR):
        if not toc_file.endswith(".md"):
            continue  # Only TOC markdowns

        course_code = toc_file.split("_")[0]
        toc_path = os.path.join(TOC_DIR, toc_file)
        toc_data = parse_toc(toc_path)

        course_folder = os.path.join(DOCS_DIR, course_code)
        if not os.path.isdir(course_folder):
            print(f"⚠️ Skipping {course_code} — no matching docs folder found.")
            continue

        # Course level
        write_catalogue(course_folder, toc_data["course"])

        # Unit level
        unit_folders = sorted([d for d in list_dirs(course_folder) if re.match(r"u\d+", d)])
        for idx, (unit_title, subunits) in enumerate(toc_data["units"].items()):
            if idx < len(unit_folders):
                unit_folder = os.path.join(course_folder, unit_folders[idx])
                write_catalogue(unit_folder, unit_title)

                # Subunit level
                sub_folders = sorted(list_dirs(unit_folder))
                for sub_idx, sub_title in enumerate(subunits):
                    if sub_idx < len(sub_folders):
                        sub_folder = os.path.join(unit_folder, sub_folders[sub_idx])
                        write_catalogue(sub_folder, sub_title)


if __name__ == "__main__":
    create_catalogues()
