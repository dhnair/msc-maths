const fs = require("fs");
const path = require("path");

const DOCS_ROOT = path.join(__dirname, "../content");
const INDEX_DIR = path.join(DOCS_ROOT, "index");
const INDEX_FILE = path.join(INDEX_DIR, "index.md");

// --- helpers ---

function getTitle(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, "utf8");
  const match = content.match(/^#\s+(.*)$/m);
  return match ? match[1].trim() : null;
}

function getFolderTitle(dir) {
  const cat = path.join(dir, "_catalogue.md");
  const idx = path.join(dir, "index.md");
  if (fs.existsSync(cat)) return getTitle(cat);
  if (fs.existsSync(idx)) return getTitle(idx);
  return prettify(path.basename(dir));
}

function prettify(name) {
  return name
    .replace(/^u(\d+)/i, "Unit $1")
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/\b(\w)/g, (c) => c.toUpperCase());
}

function listMarkdownFiles(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(
      (e) =>
        e.isFile() &&
        e.name.endsWith(".md") &&
        !["_catalogue.md", "index.md"].includes(e.name)
    )
    .map((e) => e.name)
    .sort();
}

function listSubdirs(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();
}

/**
 * Recursively generate nested bullet lists.
 * Folders appear as bold headers (not links).
 * Only .md files get clickable links.
 */
function generateList(dir, depth = 0) {
  const indent = "  ".repeat(depth);
  let output = "";

  // markdown files (notes, transcript, etc.)
  const mdFiles = listMarkdownFiles(dir);
  for (const file of mdFiles) {
    const filePath = path.join(dir, file);
    const rel = path
      .relative(DOCS_ROOT, filePath)
      .replace(/\\/g, "/")
      .replace(/\.md$/, "");
    const title = getTitle(filePath) || prettify(file.replace(".md", ""));
    output += `${indent}- [${title}](${rel})\n`;
  }

  // subdirectories (rendered as plain section headers)
  const subdirs = listSubdirs(dir);
  for (const folder of subdirs) {
    const subdir = path.join(dir, folder);
    const subTitle = getFolderTitle(subdir);
    const subContent = generateList(subdir, depth + 1);

    if (subContent.trim().length > 0) {
      output += `${indent}- **${subTitle}**\n`;
      output += subContent;
    }
  }

  return output;
}

/**
 * Build docs/index/index.md with YAML frontmatter and nested list.
 */
function buildIndex() {
  const yaml = [
    "---",
    'title: "Index"',
    "sidebar_position: 0",
    'sidebar_label: "Index"',
    'slug: "/"',
    "---",
    "",
  ].join("\n");

  const header =
    "# 📘 M.Sc. Mathematics\n\nWelcome to your M.Sc. Mathematics notes and transcripts.\n\n";

  const body = generateList(DOCS_ROOT);

  fs.mkdirSync(INDEX_DIR, { recursive: true });
  fs.writeFileSync(INDEX_FILE, yaml + header + body);
  console.log("✅ Generated docs/index/index.md with YAML frontmatter");
}

buildIndex();
