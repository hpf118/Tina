// Build the business-plan Word document from the two Markdown files plus the prototype images.
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell,
  WidthType, ShadingType, AlignmentType, BorderStyle, LevelFormat, PageBreak,
  TableOfContents, Header, Footer, PageNumber, ImageRun, ExternalHyperlink,
} = require("docx");

const REPO = __dirname;
const OUT = process.argv[2] || path.join(REPO, "Personalized-Science-Comics-Business-Plan.docx");

const FONT = "Calibri";
const NAVY = "1F3A5F";
const ACCENT = "2E75B6";
const TABLE_W = 9360; // 6.5in in DXA

// ---------- inline markdown ----------
function inline(text, base = {}) {
  const runs = [];
  // tokens: **bold**, `code`, [text](url)
  const re = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) runs.push(new TextRun({ text: text.slice(last, m.index), ...base }));
    const t = m[0];
    if (t.startsWith("**")) runs.push(new TextRun({ text: t.slice(2, -2), bold: true, ...base }));
    else if (t.startsWith("`")) runs.push(new TextRun({ text: t.slice(1, -1), font: "Consolas", ...base }));
    else {
      const mm = /\[([^\]]+)\]\(([^)]+)\)/.exec(t);
      runs.push(new TextRun({ text: mm[1], ...base }));
    }
    last = m.index + t.length;
  }
  if (last < text.length) runs.push(new TextRun({ text: text.slice(last), ...base }));
  return runs;
}

// ---------- block markdown ----------
let numInstance = 0;
function mdToBlocks(md, opts = {}) {
  const shift = opts.shift || 0; // 0: "##" -> H1 ; 1: "##" -> H2
  const lines = md.split("\n");
  const out = [];
  let i = 0;
  let currentNumInstance = null;
  const headingFor = (level) => {
    const l = level + shift - 1;
    return l <= 1 ? HeadingLevel.HEADING_1 : l === 2 ? HeadingLevel.HEADING_2 : HeadingLevel.HEADING_3;
  };
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; currentNumInstance = null; continue; }
    if (/^---+$/.test(line.trim())) { i++; continue; }
    let h;
    if ((h = /^(#{1,3})\s+(.*)$/.exec(line))) {
      const level = h[1].length;
      if (level === 1 && opts.skipH1) { i++; continue; }
      out.push(new Paragraph({ heading: headingFor(level), children: inline(h[2]) }));
      i++; continue;
    }
    if (line.startsWith("|")) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith("|")) { rows.push(lines[i]); i++; }
      out.push(buildTable(rows));
      out.push(new Paragraph({ spacing: { after: 60 } }));
      continue;
    }
    let b;
    if ((b = /^\s*[-*]\s+(.*)$/.exec(line))) {
      out.push(new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: inline(b[1]), spacing: { after: 80 } }));
      i++; continue;
    }
    if ((b = /^\s*\d+\.\s+(.*)$/.exec(line))) {
      if (currentNumInstance === null) currentNumInstance = ++numInstance;
      out.push(new Paragraph({ numbering: { reference: "numbers", level: 0, instance: currentNumInstance }, children: inline(b[1]), spacing: { after: 80 } }));
      i++; continue;
    }
    // paragraph (one line each; the source keeps every paragraph on one line)
    out.push(new Paragraph({ children: inline(line), spacing: { after: 140 } }));
    i++;
  }
  return out;
}

function splitRow(row) {
  return row.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
}

function buildTable(rows) {
  const header = splitRow(rows[0]);
  const body = rows.slice(2).map(splitRow);
  const ncol = header.length;
  // proportional widths by max content length, with a floor
  const maxLen = header.map((h, c) => Math.max(h.length, ...body.map((r) => (r[c] || "").length)));
  const weights = maxLen.map((l) => Math.max(8, Math.min(l, 60)));
  const total = weights.reduce((a, b) => a + b, 0);
  let widths = weights.map((w) => Math.round((w / total) * TABLE_W));
  widths[ncol - 1] += TABLE_W - widths.reduce((a, b) => a + b, 0);
  const border = { style: BorderStyle.SINGLE, size: 4, color: "BFBFBF" };
  const borders = { top: border, bottom: border, left: border, right: border };
  const mkCell = (text, c, isHeader) => new TableCell({
    width: { size: widths[c], type: WidthType.DXA },
    borders,
    shading: isHeader ? { type: ShadingType.CLEAR, fill: "DCE6F1", color: "auto" } : undefined,
    margins: { top: 60, bottom: 60, left: 90, right: 90 },
    children: [new Paragraph({ children: inline(text, { size: 18, bold: isHeader || undefined }), spacing: { after: 0 } })],
  });
  const trs = [
    new TableRow({ tableHeader: true, children: header.map((h, c) => mkCell(h, c, true)) }),
    ...body.map((r) => new TableRow({ children: header.map((_, c) => mkCell(r[c] || "", c, false)) })),
  ];
  return new Table({ width: { size: TABLE_W, type: WidthType.DXA }, columnWidths: widths, rows: trs });
}

// ---------- images ----------
function imageParagraphs() {
  const items = [
    ["01-wonderland-physics-overview.jpg", "Prototype 1: Physics Detectives at the amusement park (overview page)", 1672, 941],
    ["02-wonderland-physics-level1.jpg", "Prototype 2: Amusement-park physics, Level 1 (Grades 2 to 3)", 1024, 1536],
    ["03-puddle-mystery-water-cycle-level2.jpg", "Prototype 3: Puddle Mystery, water cycle, Level 2 (Grade 4)", 1024, 1536],
    ["04-rainbow-mystery-level2.jpg", "Prototype 4: Rainbow Mystery, Level 2 (Grade 4)", 1024, 1536],
    ["05-rainbow-mystery-level1.jpg", "Prototype 5: Rainbow Mystery, Level 1 (Grades 2 to 3)", 1024, 1536],
  ];
  const out = [];
  for (const [file, caption, w, h] of items) {
    const data = fs.readFileSync(path.join(REPO, "prototypes", file));
    let width, height;
    if (w > h) { width = 624; height = Math.round((624 * h) / w); } // 6.5in wide
    else { height = 620; width = Math.round((620 * w) / h); }        // ~6.5in tall
    out.push(new Paragraph({ children: [new PageBreak()] }));
    out.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [new ImageRun({ type: "jpg", data, transformation: { width, height } })] }));
    out.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 80, after: 200 }, children: [new TextRun({ text: caption, italics: true, size: 18, color: "595959" })] }));
  }
  return out;
}

// ---------- assemble ----------
const planMd = fs.readFileSync(path.join(REPO, "business-plan.md"), "utf8");
const actionMd = fs.readFileSync(path.join(REPO, "action-plan-90-days.md"), "utf8");

// strip the metadata block at the top of the plan (cover page carries it)
const planBody = planMd.split("\n").filter((l, idx) => !(idx < 8 && (l.startsWith("**") || l.startsWith("# ")))).join("\n");
const actionBody = actionMd.replace(/^# .*\n/, "");

const cover = [
  new Paragraph({ spacing: { before: 3200 } }),
  new Paragraph({ alignment: AlignmentType.LEFT, children: [new TextRun({ text: "Personalized Science Comics", size: 64, bold: true, color: NAVY, font: FONT })], spacing: { after: 120 } }),
  new Paragraph({ children: [new TextRun({ text: "Business Plan and 90-Day Action Plan", size: 36, color: ACCENT, font: FONT })], spacing: { after: 600 }, border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: ACCENT, space: 8 } } }),
  new Paragraph({ children: [new TextRun({ text: "A direct-to-consumer publisher of personalized, curriculum-aligned science and social-emotional comics for children aged 5 to 10, built on each child's own avatar, family, friends and life experiences.", size: 24, color: "404040" })], spacing: { after: 800 } }),
  new Paragraph({ children: [new TextRun({ text: "Prepared for: ", bold: true }), new TextRun("the founder (PhD, education measurement; professional learning designer; ten years of ESL teaching and student consulting)")], spacing: { after: 80 } }),
  new Paragraph({ children: [new TextRun({ text: "Working title: ", bold: true }), new TextRun("Science Detective Club (placeholder; see Section 9, Brand and naming)")], spacing: { after: 80 } }),
  new Paragraph({ children: [new TextRun({ text: "Date: ", bold: true }), new TextRun("September 2026")], spacing: { after: 80 } }),
  new Paragraph({ children: [new TextRun({ text: "Status: ", bold: true }), new TextRun("Draft v2 for founder review. All financial figures are planning estimates in Canadian dollars.")], spacing: { after: 80 } }),
  new Paragraph({ children: [new PageBreak()] }),
  new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun("Contents")] }),
  new TableOfContents("Contents", { hyperlink: true, headingStyleRange: "1-2" }),
  new Paragraph({ children: [new PageBreak()] }),
  new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun("Part 1: Business Plan")] }),
];

const part2 = [
  new Paragraph({ children: [new PageBreak()] }),
  new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun("Part 2: 90-Day Action Plan")] }),
];

const appendix = [
  new Paragraph({ children: [new PageBreak()] }),
  new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Appendix: Prototype comics (internal reference only)")] }),
  new Paragraph({ children: inline("These five prototypes were made for the founder's daughter and her friend. They demonstrate the pedagogy (child as protagonist, inquiry dialogue, two reading levels, bilingual keyword cards, assessment questions) that the business is built on. They also contain third-party characters and trademarks (Peppa Pig, Peanuts, Canada's Wonderland) and **must not be published, sold, or used in marketing**. The launch titles rebuild each of them on the child-avatar and life-experience model described in Section 0 and Section 2."), spacing: { after: 140 } }),
  ...imageParagraphs(),
];

const doc = new Document({
  creator: "Founder",
  title: "Personalized Science Comics: Business Plan",
  styles: {
    default: { document: { run: { font: FONT, size: 22 }, paragraph: { spacing: { line: 276 } } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal", next: "Normal", run: { size: 44, bold: true, color: NAVY, font: FONT }, paragraph: { spacing: { before: 0, after: 300 } } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 32, bold: true, color: NAVY, font: FONT }, paragraph: { spacing: { before: 360, after: 160 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 26, bold: true, color: ACCENT, font: FONT }, paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 23, bold: true, color: "404040", font: FONT }, paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 2 } },
    ],
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 270 } } } }] },
      { reference: "numbers", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 360 } } } }] },
    ],
  },
  features: { updateFields: true },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Personalized Science Comics: Business Plan (draft, confidential)", size: 16, color: "808080" })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: ["Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES], size: 16, color: "808080" })] })] }) },
    children: [...cover, ...mdToBlocks(planBody, { skipH1: true }), ...part2, ...mdToBlocks(actionBody, { shift: 1 }), ...appendix],
  }],
});

Packer.toBuffer(doc).then((buf) => { fs.writeFileSync(OUT, buf); console.log("wrote", OUT, buf.length, "bytes"); });
