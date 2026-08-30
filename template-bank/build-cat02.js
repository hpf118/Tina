/* Category 02 deep dive — Categorical Template Bank
 * 12 layouts in 3 families (lettering continues from Category 01's A-C):
 *   D Name & Chunk: category grid, topic breakdown, acronym frame, term card
 *   E Sort & Position: 2x2 matrix, spectrum, attribute matrix, sorting buckets
 *   F Compare & Contrast: comparison table, venn, do/don't, before/after
 */
const pptxgen = require("pptxgenjs");
const path = require("path");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
pptx.author = "L&D Template Bank";
pptx.title = "Categorical Template Bank";

// ---------- palette ----------
const NAVY = "1F3864";
const NAVY_MID = "3A5787";
const STEEL = "5B7699";
const STEEL_LT = "8FA3BC";
const RED = "9E3B3B";
const INK = "3A4150";
const GRAY = "6E7686";
const FAINT = "9AA3B2";
const CARD = "F3F4F7";
const LINE = "D3D8E0";
const TINT_NAVY = "DEE5F0";
const TINT_STEEL = "E6ECF3";
const TINT_RED = "F1E5E5";
const WHITE = "FFFFFF";

const FONT = "Calibri";
const A = (n) => path.join(__dirname, "assets", n + ".png");

const FAM = {
  D: { color: NAVY, label: "D · NAME & CHUNK" },
  E: { color: STEEL, label: "E · SORT & POSITION" },
  F: { color: RED, label: "F · COMPARE & CONTRAST" },
};

// ---------- helpers ----------
function txt(slide, text, o) {
  slide.addText(text, Object.assign({ fontFace: FONT, isTextBox: true, margin: 0 }, o));
}

function connLine(slide, x1, y1, x2, y2, o = {}) {
  const x = Math.min(x1, x2), y = Math.min(y1, y2);
  const w = Math.abs(x2 - x1), h = Math.abs(y2 - y1);
  const opts = {
    x, y, w, h,
    flipH: x2 < x1, flipV: y2 < y1,
    line: { color: o.color || "A6AFBE", width: o.width || 1.5 },
  };
  if (o.dash) opts.line.dashType = o.dash;
  if (o.arrow) opts.line.endArrowType = "triangle";
  slide.addShape(pptx.shapes.LINE, opts);
}

function iconCircle(slide, icon, color, x, y, d, iconScale) {
  const s = iconScale || 0.5;
  slide.addShape(pptx.shapes.OVAL, { x, y, w: d, h: d, fill: { color } });
  const id = d * s;
  slide.addImage({ path: A(icon), x: x + (d - id) / 2, y: y + (d - id) / 2, w: id, h: id });
}

function header(slide, code, title, sub, famKey) {
  const f = FAM[famKey];
  txt(slide, "TEMPLATE " + code, { x: 0.55, y: 0.32, w: 4, h: 0.28, fontSize: 11, bold: true, color: f.color, charSpacing: 2 });
  txt(slide, title, { x: 0.55, y: 0.58, w: 8.6, h: 0.55, fontSize: 26, bold: true, color: NAVY });
  txt(slide, sub, { x: 0.55, y: 1.12, w: 8.9, h: 0.3, fontSize: 11.5, color: GRAY });
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 9.55, y: 0.42, w: 3.23, h: 0.44, fill: { color: f.color }, rectRadius: 0.08 });
  txt(slide, f.label, { x: 9.55, y: 0.42, w: 3.23, h: 0.44, fontSize: 10.5, bold: true, color: WHITE, align: "center", valign: "middle" });
}

function useWhen(slide, text, color) {
  iconCircle(slide, "lightbulb-navy", CARD, 0.55, 6.98, 0.34, 0.55);
  slide.addText([
    { text: "USE WHEN  ", options: { bold: true, color, fontSize: 10.5 } },
    { text: text, options: { color: GRAY, fontSize: 10.5, italic: true } },
  ], { x: 1.0, y: 6.98, w: 11.8, h: 0.36, fontFace: FONT, isTextBox: true, margin: 0, valign: "middle" });
}

function caption(slide, text, y) {
  txt(slide, text, { x: 0.55, y: y || 6.5, w: 12.23, h: 0.26, fontSize: 9, color: FAINT, align: "center" });
}

// ============================================================
// SLIDE 1 — TITLE
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: NAVY };
  txt(s, "CATEGORY 02  ·  DEEP DIVE", { x: 0.9, y: 1.25, w: 11.53, h: 0.32, fontSize: 12, bold: true, color: STEEL_LT, align: "center", charSpacing: 4 });
  txt(s, "Categorical\nTemplate Bank", { x: 0.9, y: 1.7, w: 11.53, h: 1.7, fontSize: 40, bold: true, color: WHITE, align: "center" });
  txt(s, "Twelve layouts for introducing new information — name it, place it, contrast it, so working memory has somewhere to file it", { x: 1.8, y: 3.5, w: 9.73, h: 0.6, fontSize: 15, color: "C9D4E6", align: "center" });

  const chips = [
    ["tag-w", "D · Name & Chunk", "Category grid · Topic breakdown · Acronym frame · Term card", NAVY_MID],
    ["sliders", "E · Sort & Position", "2×2 matrix · Spectrum · Attribute matrix · Sorting buckets", STEEL],
    ["columns-w", "F · Compare & Contrast", "Comparison table · Venn · Do vs don't · Before vs after", RED],
  ];
  chips.forEach((c, i) => {
    const x = 0.9 + i * 3.98;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: 4.55, w: 3.75, h: 1.5, fill: { color: WHITE, transparency: 90 }, rectRadius: 0.08 });
    iconCircle(s, i === 1 ? "arrowsh-w" : c[0], c[3], x + 0.28, 4.85, 0.62, 0.52);
    txt(s, c[1], { x: x + 1.02, y: 4.82, w: 2.68, h: 0.35, fontSize: 13, bold: true, color: WHITE });
    txt(s, c[2], { x: x + 1.02, y: 5.18, w: 2.68, h: 0.7, fontSize: 9.5, color: "BFCCE0" });
  });
  txt(s, "Use when introducing new material — the categories come first, the details follow", { x: 0.9, y: 6.6, w: 11.53, h: 0.3, fontSize: 11, color: "8FA3BC", align: "center" });
}

// ============================================================
// SLIDE 2 — FAMILY MAP
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  txt(s, "THE MAP", { x: 0.55, y: 0.32, w: 4, h: 0.28, fontSize: 11, bold: true, color: RED, charSpacing: 2 });
  txt(s, "New information needs a filing system", { x: 0.55, y: 0.58, w: 11.5, h: 0.55, fontSize: 26, bold: true, color: NAVY });
  txt(s, "Working memory holds 3–5 chunks. Give learners the drawers before you hand them the papers.", { x: 0.55, y: 1.12, w: 11.5, h: 0.3, fontSize: 11.5, color: GRAY });

  const cards = [
    {
      key: "D", icon: "tag-w", name: "Name & Chunk", verb: "“Give it a name.”",
      def: "Brand-new material grouped into labeled buckets — types, chunks, letters, and terms with clean edges.",
      ask: "Is this the learner's first meeting with the material?",
      tools: "Category grid · Topic breakdown · Acronym frame · Term card",
    },
    {
      key: "E", icon: "arrowsh-w", name: "Sort & Position", verb: "“Put it in its place.”",
      def: "One or two dimensions decide how each item is treated — and position on the slide does the teaching.",
      ask: "Would knowing where it sits tell learners what to do with it?",
      tools: "2×2 matrix · Spectrum · Attribute matrix · Sorting buckets",
    },
    {
      key: "F", icon: "columns-w", name: "Compare & Contrast", verb: "“Hold them side by side.”",
      def: "Similar things learners mix up — kept next to each other until the differences are impossible to miss.",
      ask: "Seen apart, would learners confuse these?",
      tools: "Comparison table · Venn diagram · Do vs don't · Before vs after",
    },
  ];
  cards.forEach((c, i) => {
    const f = FAM[c.key];
    const x = 0.55 + i * 4.18, y = 1.62, w = 3.98, h = 4.9;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: CARD }, rectRadius: 0.07 });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 1.0, fill: { color: f.color }, rectRadius: 0.07 });
    s.addShape(pptx.shapes.RECTANGLE, { x, y: y + 0.5, w, h: 0.5, fill: { color: f.color } });
    iconCircle(s, c.icon, c.key === "D" ? NAVY_MID : (c.key === "E" ? "6E87A8" : "AF5252"), x + 0.25, y + 0.19, 0.62, 0.52);
    txt(s, "FAMILY " + c.key + "  ·  4 TEMPLATES", { x: x + 1.02, y: y + 0.18, w: w - 1.2, h: 0.25, fontSize: 9, bold: true, color: "D8E0EC", charSpacing: 1 });
    txt(s, c.name, { x: x + 1.02, y: y + 0.42, w: w - 1.2, h: 0.4, fontSize: 15.5, bold: true, color: WHITE });
    txt(s, c.verb, { x: x + 0.28, y: y + 1.2, w: w - 0.56, h: 0.4, fontSize: 15, bold: true, italic: true, color: f.color });
    txt(s, c.def, { x: x + 0.28, y: y + 1.66, w: w - 0.56, h: 0.95, fontSize: 11, color: INK });
    s.addText([
      { text: "ASK YOURSELF:  ", options: { bold: true, fontSize: 9, color: f.color } },
      { text: c.ask, options: { fontSize: 10.5, color: INK, italic: true } },
    ], { x: x + 0.28, y: y + 2.72, w: w - 0.56, h: 0.75, fontFace: FONT, isTextBox: true, margin: 0 });
    txt(s, "IN THIS FAMILY", { x: x + 0.28, y: y + 3.55, w: w - 0.56, h: 0.24, fontSize: 9, bold: true, color: f.color, charSpacing: 2 });
    txt(s, c.tools, { x: x + 0.28, y: y + 3.83, w: w - 0.56, h: 0.9, fontSize: 10.5, color: GRAY });
  });
  txt(s, "Rule of thumb: 3–5 groups, never more — if you need six, two of them are really one.", { x: 0.55, y: 6.85, w: 12.23, h: 0.32, fontSize: 11.5, italic: true, color: GRAY, align: "center" });
}

// ============================================================
// DIVIDER helper
// ============================================================
function divider(famKey, shade, name, blurb, tiles) {
  const f = FAM[famKey];
  const s = pptx.addSlide();
  s.background = { color: f.color };
  txt(s, famKey, { x: 0.6, y: 0.55, w: 3.4, h: 2.2, fontSize: 130, bold: true, color: shade });
  txt(s, "FAMILY " + famKey, { x: 4.0, y: 0.95, w: 7.5, h: 0.32, fontSize: 12, bold: true, color: "E3E8F0", charSpacing: 4 });
  txt(s, name, { x: 4.0, y: 1.32, w: 9.0, h: 0.75, fontSize: 36, bold: true, color: WHITE });
  txt(s, blurb, { x: 4.0, y: 2.15, w: 8.6, h: 0.85, fontSize: 13.5, color: "DCE3EE" });

  const rows = [];
  if (tiles.length === 4) { rows.push(tiles.slice(0, 2), tiles.slice(2)); }
  else { for (let i = 0; i < tiles.length; i += 3) rows.push(tiles.slice(i, i + 3)); }
  const tw = 3.95, th = 1.32, gap = 0.22;
  rows.forEach((row, r) => {
    const rowW = row.length * tw + (row.length - 1) * gap;
    const x0 = (13.333 - rowW) / 2;
    row.forEach((t, i) => {
      const x = x0 + i * (tw + gap), y = 3.55 + r * (th + 0.25);
      s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w: tw, h: th, fill: { color: WHITE, transparency: 88 }, rectRadius: 0.07 });
      s.addImage({ path: A(t[0]), x: x + 0.24, y: y + 0.24, w: 0.36, h: 0.36 });
      txt(s, t[1] + " · " + t[2], { x: x + 0.76, y: y + 0.18, w: tw - 0.95, h: 0.32, fontSize: 12.5, bold: true, color: WHITE });
      txt(s, t[3], { x: x + 0.76, y: y + 0.52, w: tw - 0.95, h: 0.7, fontSize: 9.5, color: "E4E9F1" });
    });
  });
  return s;
}

// ============================================================
// SLIDE 3 — DIVIDER D
// ============================================================
divider("D", "44598C", "Name & Chunk",
  "New material has no mental home yet. Build one: name the types, chunk the topic, hang steps on letters, and draw hard edges around new terms.",
  [
    ["grid-w", "D1", "Category Grid", "One card per type — name, signs, what to do."],
    ["boxes-w", "D2", "Topic Breakdown", "A big topic chunked into teachable groups."],
    ["font-w", "D3", "Acronym Frame", "Steps hung on letters people can carry."],
    ["tag-w", "D4", "Term Card", "A new term defined by is, is not, and the edge case."],
  ]);

// ============================================================
// SLIDE 4 — D1 CATEGORY GRID (communication styles)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "D1", "Category Grid", "Example — four communication styles you will meet in every meeting", "D");

  const cards = [
    { icon: "chart-w", color: NAVY, name: "Analytical", tag: "precise · data-first · deliberate", spot: "Asks for evidence; dislikes being rushed.", adapt: "Bring the numbers, give thinking time." },
    { icon: "rocket-w", color: RED, name: "Driver", tag: "direct · decisive · results-now", spot: "Short emails; interrupts to reach the point.", adapt: "Lead with the bottom line, offer options." },
    { icon: "handshake-w", color: STEEL, name: "Amiable", tag: "steady · relationship-first · consensus", spot: "Asks how others feel; avoids open conflict.", adapt: "Slow down; make it safe to disagree." },
    { icon: "comments-w", color: NAVY_MID, name: "Expressive", tag: "energetic · big-picture · story-driven", spot: "Thinks out loud; jumps between topics.", adapt: "Headline the vision; capture actions in writing." },
  ];
  cards.forEach((c, i) => {
    const x = 0.55 + (i % 2) * 6.28, y = 1.62 + Math.floor(i / 2) * 2.62, w = 5.95, h = 2.42;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: CARD }, rectRadius: 0.07 });
    iconCircle(s, c.icon, c.color, x + 0.28, y + 0.3, 0.72, 0.5);
    txt(s, c.name, { x: x + 1.22, y: y + 0.24, w: w - 1.45, h: 0.35, fontSize: 15.5, bold: true, color: NAVY });
    txt(s, c.tag, { x: x + 1.22, y: y + 0.6, w: w - 1.45, h: 0.28, fontSize: 9.5, italic: true, color: c.color });
    s.addText([
      { text: "SPOT IT:  ", options: { bold: true, fontSize: 9, color: c.color } },
      { text: c.spot, options: { fontSize: 10.5, color: INK } },
    ], { x: x + 1.22, y: y + 1.0, w: w - 1.45, h: 0.6, fontFace: FONT, isTextBox: true, margin: 0 });
    s.addText([
      { text: "ADAPT:  ", options: { bold: true, fontSize: 9, color: c.color } },
      { text: c.adapt, options: { fontSize: 10.5, color: INK } },
    ], { x: x + 1.22, y: y + 1.68, w: w - 1.45, h: 0.6, fontFace: FONT, isTextBox: true, margin: 0 });
  });
  useWhen(s, "learners meet a set of types for the first time — one card per type: the name, the tell-tale signs, and what to do about it.", NAVY);
  s.addNotes("Same fields on every card — name, spot it, adapt — so learners compare types instead of re-reading layouts. Quiz the room: read a 'spot it' line, they name the style.");
}

// ============================================================
// SLIDE 5 — D2 TOPIC BREAKDOWN (year one as a manager)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "D2", "Topic Breakdown", "Example — everything a first-year manager must learn, chunked into three homes", "D");

  const bx = 0.55, by = 2.55, bw = 2.9, bh = 2.5;
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: bx, y: by, w: bw, h: bh, fill: { color: NAVY }, rectRadius: 0.08 });
  iconCircle(s, "compass-w", NAVY_MID, bx + bw / 2 - 0.36, by + 0.35, 0.72, 0.5);
  txt(s, "Year One as a Manager", { x: bx + 0.25, y: by + 1.2, w: bw - 0.5, h: 0.7, fontSize: 15.5, bold: true, color: WHITE, align: "center" });
  txt(s, "9 skills → 3 chunks", { x: bx + 0.25, y: by + 1.92, w: bw - 0.5, h: 0.3, fontSize: 10, color: "C9D4E6", align: "center" });

  const groups = [
    { icon: "clipboard-w", color: NAVY, name: "Managing the Work", items: ["Set priorities & goals", "Run useful meetings", "Report up honestly"] },
    { icon: "users-w", color: STEEL, name: "Managing People", items: ["Weekly 1:1s that matter", "Feedback & recognition", "Delegation that develops"] },
    { icon: "user-w", color: RED, name: "Managing Yourself", items: ["Time & energy budgets", "Asking for help early", "From doer to enabler"] },
  ];
  const gx = 4.5, gw = 8.28, gh = 1.55;
  groups.forEach((g, i) => {
    const y = 1.55 + i * 1.78;
    connLine(s, bx + bw, by + bh / 2, gx, y + gh / 2, { color: "AEB7C6", width: 1.5 });
  });
  groups.forEach((g, i) => {
    const y = 1.55 + i * 1.78;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: gx, y, w: gw, h: gh, fill: { color: CARD }, rectRadius: 0.07 });
    iconCircle(s, g.icon, g.color, gx + 0.25, y + gh / 2 - 0.31, 0.62, 0.5);
    txt(s, "CHUNK " + (i + 1), { x: gx + 1.05, y: y + 0.2, w: 2.4, h: 0.22, fontSize: 8.5, bold: true, color: g.color, charSpacing: 2 });
    txt(s, g.name, { x: gx + 1.05, y: y + 0.42, w: 2.7, h: 0.62, fontSize: 14.5, bold: true, color: NAVY });
    g.items.forEach((it, j) => {
      const cx2 = gx + 3.85, cy2 = y + 0.16 + j * 0.44;
      s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: cx2, y: cy2, w: 4.2, h: 0.38, fill: { color: WHITE }, line: { color: LINE, width: 1 }, rectRadius: 0.12 });
      txt(s, it, { x: cx2 + 0.18, y: cy2, w: 3.9, h: 0.38, fontSize: 10, color: INK, valign: "middle" });
    });
  });
  caption(s, "Teach one chunk per session, then close the loop: show all three chunks together and let learners place each skill.", 6.65);
  useWhen(s, "a big new topic would overwhelm — chunk it into 3–5 named groups, teach group by group, then reassemble.", NAVY);
  s.addNotes("The chunk names become the program's vocabulary — module names, survey sections, coaching guides. Naming is a design decision, not decoration.");
}

// ============================================================
// SLIDE 6 — D3 ACRONYM FRAME (SMART)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "D3", "Acronym Frame", "Example — SMART goals: five letters that survive without the slide", "D");

  const letters = [
    { L: "S", word: "Specific", q: "What exactly will change?", ex: "“Repeat orders,” not “loyalty”", color: NAVY },
    { L: "M", word: "Measurable", q: "How will we count it?", ex: "18% → 25%", color: NAVY_MID },
    { L: "A", word: "Achievable", q: "Can we actually reach it?", ex: "A stretch — not a fantasy", color: STEEL },
    { L: "R", word: "Relevant", q: "Why this, and why us?", ex: "Ties to the growth priority", color: STEEL_LT },
    { L: "T", word: "Time-bound", q: "By when, checked how often?", ex: "Before Q4 kickoff", color: RED },
  ];
  const x0 = 0.7, w = 2.35, gap = 0.09;
  letters.forEach((l, i) => {
    const x = x0 + i * (w + gap);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: x + (w - 1.15) / 2, y: 1.7, w: 1.15, h: 1.15, fill: { color: l.color }, rectRadius: 0.12 });
    txt(s, l.L, { x: x + (w - 1.15) / 2, y: 1.7, w: 1.15, h: 1.15, fontSize: 40, bold: true, color: WHITE, align: "center", valign: "middle" });
    txt(s, l.word, { x, y: 3.05, w, h: 0.35, fontSize: 14.5, bold: true, color: NAVY, align: "center" });
    txt(s, l.q, { x: x + 0.08, y: 3.44, w: w - 0.16, h: 0.55, fontSize: 10, italic: true, color: GRAY, align: "center" });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: x + 0.08, y: 4.05, w: w - 0.16, h: 0.72, fill: { color: CARD }, rectRadius: 0.06 });
    txt(s, l.ex, { x: x + 0.18, y: 4.05, w: w - 0.36, h: 0.72, fontSize: 9.5, color: INK, align: "center", valign: "middle" });
  });

  // worked example strip
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.7, y: 5.25, w: 11.93, h: 1.1, fill: { color: TINT_NAVY }, rectRadius: 0.07 });
  txt(s, "PUT TOGETHER", { x: 1.0, y: 5.42, w: 2.0, h: 0.24, fontSize: 8.5, bold: true, color: NAVY, charSpacing: 2 });
  s.addText([
    { text: "“Increase repeat orders ", options: { fontSize: 12, color: INK, italic: true } },
    { text: "(S)", options: { fontSize: 10, bold: true, color: NAVY } },
    { text: " from 18% to 25% ", options: { fontSize: 12, color: INK, italic: true } },
    { text: "(M·A)", options: { fontSize: 10, bold: true, color: STEEL } },
    { text: " by enabling sales on the new bundle ", options: { fontSize: 12, color: INK, italic: true } },
    { text: "(R)", options: { fontSize: 10, bold: true, color: STEEL_LT } },
    { text: " before Q4 kickoff ", options: { fontSize: 12, color: INK, italic: true } },
    { text: "(T)", options: { fontSize: 10, bold: true, color: RED } },
    { text: ".”", options: { fontSize: 12, color: INK, italic: true } },
  ], { x: 1.0, y: 5.66, w: 11.3, h: 0.55, fontFace: FONT, isTextBox: true, margin: 0, valign: "middle" });
  caption(s, "One tile per letter, one question per tile — then always show the letters doing their job in a real sentence.", 6.6);
  useWhen(s, "a checklist must survive without the slide — hang the steps on letters people can carry in their heads.", NAVY);
  s.addNotes("Test of a good acronym frame: cover the tiles and ask the room to rebuild it from the letters alone. If they can't, the letters aren't carrying the content yet.");
}

// ============================================================
// SLIDE 7 — D4 TERM CARD (near miss)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "D4", "Term Card", "Example — “near miss”: a term that only works if its edges are sharp", "D");

  // term banner
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.55, y: 1.55, w: 12.23, h: 0.85, fill: { color: NAVY }, rectRadius: 0.08 });
  txt(s, "NEAR MISS", { x: 0.9, y: 1.55, w: 2.6, h: 0.85, fontSize: 20, bold: true, color: WHITE, valign: "middle", charSpacing: 1 });
  txt(s, "An unplanned event that could have caused injury or damage — but this time didn't.", { x: 3.7, y: 1.55, w: 8.8, h: 0.85, fontSize: 12.5, italic: true, color: "DCE3EE", valign: "middle" });

  const isItems = [
    ["A ladder slips — no one was on it", "harm was possible, luck intervened"],
    ["Forklift brakes late; pedestrian steps back", "seconds from an injury"],
    ["Wrong chemical delivered, caught before use", "the error happened; the harm didn't"],
  ];
  const notItems = [
    ["A worker sprains an ankle", "harm occurred → that's an incident"],
    ["A frayed cable found in inspection", "no event yet → that's a hazard"],
    ["A machine guard removed on purpose", "deliberate → that's a violation"],
  ];
  const colY = 2.65, colH = 2.85;
  // IS column
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.55, y: colY, w: 5.95, h: colH, fill: { color: CARD }, rectRadius: 0.07 });
  iconCircle(s, "check-w", NAVY, 0.85, colY + 0.22, 0.44, 0.5);
  txt(s, "IT IS A NEAR MISS", { x: 1.45, y: colY + 0.22, w: 4.8, h: 0.44, fontSize: 13, bold: true, color: NAVY, valign: "middle", charSpacing: 1 });
  isItems.forEach((it, j) => {
    const y = colY + 0.85 + j * 0.68;
    s.addImage({ path: A("check-navy"), x: 0.9, y: y + 0.02, w: 0.26, h: 0.26 });
    txt(s, it[0], { x: 1.3, y, w: 5.0, h: 0.3, fontSize: 11, bold: true, color: INK });
    txt(s, it[1], { x: 1.3, y: y + 0.28, w: 5.0, h: 0.26, fontSize: 9.5, italic: true, color: GRAY });
  });
  // IS NOT column
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.83, y: colY, w: 5.95, h: colH, fill: { color: CARD }, rectRadius: 0.07 });
  iconCircle(s, "times-w", RED, 7.13, colY + 0.22, 0.44, 0.5);
  txt(s, "IT IS NOT", { x: 7.73, y: colY + 0.22, w: 4.8, h: 0.44, fontSize: 13, bold: true, color: RED, valign: "middle", charSpacing: 1 });
  notItems.forEach((it, j) => {
    const y = colY + 0.85 + j * 0.68;
    s.addImage({ path: A("times-red"), x: 7.18, y: y + 0.02, w: 0.26, h: 0.26 });
    txt(s, it[0], { x: 7.58, y, w: 5.0, h: 0.3, fontSize: 11, bold: true, color: INK });
    txt(s, it[1], { x: 7.58, y: y + 0.28, w: 5.0, h: 0.26, fontSize: 9.5, italic: true, color: GRAY });
  });
  // boundary case
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.55, y: 5.7, w: 12.23, h: 1.0, fill: { color: TINT_STEEL }, rectRadius: 0.07 });
  txt(s, "THE TRICKY ONE", { x: 0.85, y: 5.85, w: 2.0, h: 0.24, fontSize: 8.5, bold: true, color: STEEL, charSpacing: 2 });
  txt(s, "A spill is cleaned up before anyone walks through — near miss or hazard? Report it either way: the categories exist to trigger action, not to win arguments.", { x: 0.85, y: 6.1, w: 11.6, h: 0.5, fontSize: 11, color: INK });
  useWhen(s, "a term will be misused unless its edges are drawn — define it by what it is, what it is not, and the tricky case in between.", NAVY);
  s.addNotes("The non-examples teach more than the examples — each one names the neighboring category it belongs to instead. That's what makes the boundary stick.");
}

// ============================================================
// SLIDE 8 — DIVIDER E
// ============================================================
divider("E", "7E94B0", "Sort & Position",
  "Where an item sits tells learners how to treat it. One axis or two, a scored grid, or buckets with rules — position does the teaching.",
  [
    ["matrix-w", "E1", "2×2 Matrix", "Two yes/no dimensions — the quadrant is the instruction."],
    ["arrowsh-w", "E2", "Spectrum", "Items placed by degree along one line."],
    ["thlist-w", "E3", "Attribute Matrix", "Options scored on several attributes at once."],
    ["inbox-w", "E4", "Sorting Buckets", "Classify fast, with one clear rule per bucket."],
  ]);

// ============================================================
// SLIDE 9 — E1 2×2 MATRIX (Eisenhower)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "E1", "2×2 Matrix", "Example — the urgent / important grid: where your week actually goes", "E");

  const gx = 2.7, gy = 1.58, qw = 4.7, qh = 2.28, gap = 0.18;
  const quads = [
    { x: gx, y: gy, tint: TINT_NAVY, color: NAVY, name: "SCHEDULE", who: "Important · not urgent — strategy, development, relationships.", act: "Block time this week. This quadrant is where growth lives." },
    { x: gx + qw + gap, y: gy, tint: TINT_RED, color: RED, name: "DO NOW", who: "Important · urgent — the crisis, today's deadline.", act: "Do it yourself, immediately — then ask what put it here." },
    { x: gx, y: gy + qh + gap, tint: "ECEEF2", color: "6E7686", name: "DELETE", who: "Neither — busywork, most FYI email.", act: "Decline politely. Unsubscribe. Let it go." },
    { x: gx + qw + gap, y: gy + qh + gap, tint: TINT_STEEL, color: STEEL, name: "DELEGATE", who: "Urgent · not important — interruptions, some meetings.", act: "Hand off with clear success criteria — don't just forward it." },
  ];
  quads.forEach((q) => {
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: q.x, y: q.y, w: qw, h: qh, fill: { color: q.tint }, rectRadius: 0.06 });
    txt(s, q.name, { x: q.x + 0.3, y: q.y + 0.2, w: qw - 0.6, h: 0.4, fontSize: 17, bold: true, color: q.color, charSpacing: 1 });
    txt(s, q.who, { x: q.x + 0.3, y: q.y + 0.66, w: qw - 0.6, h: 0.55, fontSize: 11, bold: true, color: INK });
    txt(s, q.act, { x: q.x + 0.3, y: q.y + 1.26, w: qw - 0.6, h: 0.8, fontSize: 10.5, color: GRAY });
  });
  connLine(s, gx - 0.35, gy + 2 * qh + gap, gx - 0.35, gy, { color: NAVY, width: 2, arrow: true });
  connLine(s, gx, gy + 2 * qh + gap + 0.35, gx + 2 * qw + gap, gy + 2 * qh + gap + 0.35, { color: NAVY, width: 2, arrow: true });
  txt(s, "IMPORTANCE — does it move the goals?", { x: gx - 2.87, y: gy + qh - 0.14, w: 4.4, h: 0.3, fontSize: 10, bold: true, color: NAVY, align: "center", rotate: 270 });
  txt(s, "URGENCY — does it demand attention now?", { x: gx + qw - 2.2 + gap / 2, y: gy + 2 * qh + gap + 0.42, w: 4.4, h: 0.3, fontSize: 10, bold: true, color: NAVY, align: "center" });
  caption(s, "The trap is living in DO NOW. The win is growing SCHEDULE — audit a real week against the grid.", 6.68);
  useWhen(s, "two yes/no dimensions decide the action — the quadrant a case lands in IS the instruction.", STEEL);
  s.addNotes("Exercise: everyone lists Monday's ten tasks, then places them. The room's collective bottom-right pile makes the delegation lesson for you.");
}

// ============================================================
// SLIDE 10 — E2 SPECTRUM (delegation levels)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "E2", "Spectrum", "Example — five levels of delegated authority: say the level out loud", "E");

  // gradient bar (segments)
  const bx = 0.9, bw = 11.5, by = 4.0, bh = 0.34;
  const segColors = [NAVY, NAVY_MID, STEEL, STEEL_LT, RED];
  segColors.forEach((c, i) => {
    s.addShape(pptx.shapes.RECTANGLE, { x: bx + i * (bw / 5), y: by, w: bw / 5, h: bh, fill: { color: c } });
  });
  txt(s, "MANAGER HOLDS THE DECISION", { x: bx, y: by - 0.4, w: 4.0, h: 0.26, fontSize: 9, bold: true, color: NAVY, charSpacing: 1 });
  txt(s, "TEAM MEMBER HOLDS THE DECISION", { x: bx + bw - 4.0, y: by - 0.4, w: 4.0, h: 0.26, fontSize: 9, bold: true, color: RED, align: "right", charSpacing: 1 });

  const levels = [
    { name: "“Do as I say”", sub: "I decide; you execute. For safety-critical or crisis work.", above: true },
    { name: "“Let me explain”", sub: "I decide — and I sell the why, so you learn the reasoning.", above: false },
    { name: "“Let's talk first”", sub: "You recommend; I decide. The classic development stage.", above: true },
    { name: "“Decide, then tell me”", sub: "You decide; keep me informed. Trust with a safety net.", above: false },
    { name: "“Your call”", sub: "You own it — outcome included. Full delegation.", above: true },
  ];
  levels.forEach((l, i) => {
    const cx = bx + (i + 0.5) * (bw / 5);
    s.addShape(pptx.shapes.OVAL, { x: cx - 0.26, y: by + bh / 2 - 0.26, w: 0.52, h: 0.52, fill: { color: segColors[i] }, line: { color: WHITE, width: 2.5 } });
    txt(s, String(i + 1), { x: cx - 0.26, y: by + bh / 2 - 0.26, w: 0.52, h: 0.52, fontSize: 14, bold: true, color: WHITE, align: "center", valign: "middle" });
    const cw = 2.5, ch = 1.25;
    const cy = l.above ? by - 0.62 - ch : by + bh + 0.62;
    connLine(s, cx, l.above ? cy + ch : by + bh + 0.26, cx, l.above ? by - 0.26 + bh / 2 : cy, { color: LINE, width: 1.25 });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: cx - cw / 2, y: cy, w: cw, h: ch, fill: { color: CARD }, rectRadius: 0.07 });
    txt(s, l.name, { x: cx - cw / 2 + 0.14, y: cy + 0.12, w: cw - 0.28, h: 0.3, fontSize: 11.5, bold: true, color: segColors[i] });
    txt(s, l.sub, { x: cx - cw / 2 + 0.14, y: cy + 0.42, w: cw - 0.28, h: 0.75, fontSize: 9, color: INK });
  });
  caption(s, "Most delegation failures are two people assuming different levels — the fix is saying the number out loud.", 6.72);
  useWhen(s, "items differ by degree, not kind — place them on one line so learners see the poles and every stop between.", STEEL);
  s.addNotes("Have managers mark where each of their direct reports sits per task area. The spread — and the surprises — drive the discussion.");
}

// ============================================================
// SLIDE 11 — E3 ATTRIBUTE MATRIX (delivery methods)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "E3", "Attribute Matrix", "Example — choosing a delivery method: no option wins every column", "E");

  const attrs = ["Reach & scale", "Cost efficiency", "Practice depth", "Speed to launch"];
  const rows = [
    { name: "Instructor-led workshop", scores: [1, 1, 3, 2] },
    { name: "Virtual classroom", scores: [2, 2, 2, 2] },
    { name: "Self-paced e-learning", scores: [3, 3, 1, 1] },
    { name: "On-the-job coaching", scores: [1, 2, 3, 3] },
  ];
  const x0 = 0.55, labelW = 3.3, colW = 2.23, y0 = 1.75, headH = 0.55, rowH = 0.95;
  // header
  attrs.forEach((a, j) => {
    const x = x0 + labelW + j * colW;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: x + 0.08, y: y0, w: colW - 0.16, h: headH, fill: { color: STEEL }, rectRadius: 0.08 });
    txt(s, a, { x: x + 0.08, y: y0, w: colW - 0.16, h: headH, fontSize: 10.5, bold: true, color: WHITE, align: "center", valign: "middle" });
  });
  rows.forEach((r, i) => {
    const y = y0 + headH + 0.12 + i * (rowH + 0.12);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: x0, y, w: labelW + 4 * colW, h: rowH, fill: { color: i % 2 ? "FAFBFC" : CARD }, rectRadius: 0.06 });
    txt(s, r.name, { x: x0 + 0.25, y, w: labelW - 0.35, h: rowH, fontSize: 12, bold: true, color: NAVY, valign: "middle" });
    r.scores.forEach((sc, j) => {
      const cx = x0 + labelW + j * colW + colW / 2;
      for (let d = 0; d < 3; d++) {
        const dx = cx - 0.42 + d * 0.32;
        if (d < sc) {
          s.addShape(pptx.shapes.OVAL, { x: dx, y: y + rowH / 2 - 0.09, w: 0.19, h: 0.19, fill: { color: sc === 3 ? NAVY : STEEL } });
        } else {
          s.addShape(pptx.shapes.OVAL, { x: dx, y: y + rowH / 2 - 0.09, w: 0.19, h: 0.19, fill: { color: WHITE }, line: { color: "B9C1CD", width: 1 } });
        }
      }
    });
  });
  // legend
  const ly = y0 + headH + 0.12 + 4 * (rowH + 0.12) + 0.12;
  s.addShape(pptx.shapes.OVAL, { x: 4.7, y: ly + 0.04, w: 0.16, h: 0.16, fill: { color: NAVY } });
  txt(s, "= strong", { x: 4.92, y: ly, w: 0.85, h: 0.26, fontSize: 9, color: GRAY, valign: "middle" });
  s.addShape(pptx.shapes.OVAL, { x: 5.95, y: ly + 0.04, w: 0.16, h: 0.16, fill: { color: WHITE }, line: { color: "B9C1CD", width: 1 } });
  txt(s, "= weak", { x: 6.17, y: ly, w: 0.8, h: 0.26, fontSize: 9, color: GRAY, valign: "middle" });
  txt(s, "No row sweeps the board — that is the lesson. Blend methods; don't crown one.", { x: 7.3, y: ly, w: 5.4, h: 0.26, fontSize: 9.5, italic: true, color: GRAY, align: "right", valign: "middle" });
  useWhen(s, "options must be weighed on several attributes at once — score them so trade-offs, not opinions, drive the choice.", STEEL);
  s.addNotes("Fill the dots live with the room before revealing your scoring — disagreement about a cell is the most useful conversation this slide can start.");
}

// ============================================================
// SLIDE 12 — E4 SORTING BUCKETS (data classification)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "E4", "Sorting Buckets", "Example — data classification: every document lands in exactly one bucket", "E");

  // items to sort
  txt(s, "ITEMS TO SORT", { x: 0.55, y: 1.5, w: 2.5, h: 0.24, fontSize: 8.5, bold: true, color: STEEL, charSpacing: 2 });
  const items = ["Press release", "Job posting", "Org chart", "Product roadmap", "Salary data", "Customer contract"];
  items.forEach((it, i) => {
    const x = 0.55 + i * 2.06;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: 1.8, w: 1.92, h: 0.44, fill: { color: WHITE }, line: { color: STEEL_LT, width: 1.25, dashType: "dash" }, rectRadius: 0.14 });
    txt(s, it, { x, y: 1.8, w: 1.92, h: 0.44, fontSize: 10, bold: true, color: INK, align: "center", valign: "middle" });
  });
  // arrows down
  [2.6, 6.66, 10.7].forEach((cx) => {
    connLine(s, cx, 2.4, cx, 2.85, { color: "AEB7C6", width: 1.5, arrow: true, dash: "dash" });
  });

  const buckets = [
    { icon: "globe-w", color: NAVY, name: "PUBLIC", rule: "Could sit on our website and cause no harm.", lands: "Press release · Job posting" },
    { icon: "building-w", color: STEEL, name: "INTERNAL", rule: "Fine for any employee — but not for outsiders.", lands: "Org chart · Product roadmap" },
    { icon: "lock-w", color: RED, name: "CONFIDENTIAL", rule: "Named people only. A leak causes real damage.", lands: "Salary data · Customer contract" },
  ];
  buckets.forEach((b, i) => {
    const x = 0.55 + i * 4.18, y = 2.95, w = 3.98, h = 3.35;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: CARD }, rectRadius: 0.07 });
    iconCircle(s, b.icon, b.color, x + 0.28, y + 0.26, 0.66, 0.5);
    txt(s, b.name, { x: x + 1.1, y: y + 0.26, w: w - 1.3, h: 0.66, fontSize: 16, bold: true, color: b.color, valign: "middle", charSpacing: 1 });
    txt(s, "THE RULE", { x: x + 0.28, y: y + 1.15, w: w - 0.56, h: 0.24, fontSize: 8.5, bold: true, color: b.color, charSpacing: 2 });
    txt(s, b.rule, { x: x + 0.28, y: y + 1.42, w: w - 0.56, h: 0.75, fontSize: 11.5, color: INK });
    txt(s, "LANDS HERE", { x: x + 0.28, y: y + 2.3, w: w - 0.56, h: 0.24, fontSize: 8.5, bold: true, color: b.color, charSpacing: 2 });
    txt(s, b.lands, { x: x + 0.28, y: y + 2.57, w: w - 0.56, h: 0.35, fontSize: 11, bold: true, color: NAVY });
  });
  caption(s, "Run it live: read an item, the room shouts a bucket, then test it against the rule — the rule settles ties, not seniority.", 6.6);
  useWhen(s, "learners must classify things fast on the job — give each bucket one memorable rule and let them practice sorting.", STEEL);
  s.addNotes("The one-sentence rule is the whole template. If a bucket needs three rules, it's two buckets.");
}

// ============================================================
// SLIDE 13 — DIVIDER F
// ============================================================
divider("F", "B56A6A", "Compare & Contrast",
  "Confusion lives between similar things. Hold them side by side — same attributes, same order, differences called out — until mixing them up becomes impossible.",
  [
    ["columns-w", "F1", "Comparison Table", "Similar frameworks, attribute by attribute."],
    ["shapes-w", "F2", "Venn Diagram", "What is shared, what is distinct, what falls between."],
    ["thumbs-w", "F3", "Do vs Don't", "Good and bad practice, paired theme by theme."],
    ["exchange-w", "F4", "Before vs After", "The old way beside the new — change made concrete."],
  ]);

// ============================================================
// SLIDE 14 — F1 COMPARISON TABLE (conversation frameworks)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "F1", "Comparison Table", "Example — three conversation frameworks managers merge into mush", "F");

  const headOpts = { bold: true, color: WHITE, fontSize: 13, align: "center", valign: "middle" };
  const attr = { bold: true, color: NAVY, fontSize: 11, align: "left", valign: "middle" };
  const cell = { color: INK, fontSize: 10.5, align: "left", valign: "middle" };
  const rows = [
    [
      { text: "", options: { fill: { color: WHITE } } },
      { text: "SBI", options: Object.assign({ fill: { color: NAVY } }, headOpts) },
      { text: "GROW", options: Object.assign({ fill: { color: STEEL } }, headOpts) },
      { text: "STAR", options: Object.assign({ fill: { color: RED } }, headOpts) },
    ],
    [
      { text: "Built for", options: attr },
      { text: "Delivering feedback about a specific moment", options: cell },
      { text: "Coaching someone through their own problem", options: cell },
      { text: "Interviewing for evidence of past behavior", options: cell },
    ],
    [
      { text: "The letters", options: attr },
      { text: "Situation · Behavior · Impact", options: cell },
      { text: "Goal · Reality · Options · Will", options: cell },
      { text: "Situation · Task · Action · Result", options: cell },
    ],
    [
      { text: "Who talks most", options: attr },
      { text: "You — short, specific, then listen", options: cell },
      { text: "Them — you mostly ask", options: cell },
      { text: "Them — you probe for the 'A'", options: cell },
    ],
    [
      { text: "Sounds like", options: attr },
      { text: "“In Tuesday's review, when you cut Ana off, the room went quiet.”", options: Object.assign({}, cell, { italic: true }) },
      { text: "“What options do you see? Which will you actually try?”", options: Object.assign({}, cell, { italic: true }) },
      { text: "“Walk me through what YOU did — not the team.”", options: Object.assign({}, cell, { italic: true }) },
    ],
  ];
  s.addTable(rows, {
    x: 0.55, y: 1.7, w: 12.23,
    colW: [2.0, 3.41, 3.41, 3.41],
    rowH: [0.55, 0.95, 0.75, 0.85, 1.15],
    border: { type: "solid", color: LINE, pt: 1 },
    fill: { color: "FAFBFC" },
    fontFace: FONT,
    margin: [0.06, 0.12, 0.06, 0.12],
    autoPage: false,
  });
  caption(s, "Same rows, same order for every column — the grid does the contrasting so the reader doesn't have to.", 6.6);
  useWhen(s, "similar frameworks get mixed up — contrast them attribute by attribute, ending with what each one sounds like.", RED);
  s.addNotes("The 'sounds like' row converts abstractions into rehearsal lines — read them aloud in role-play pairs before moving on.");
}

// ============================================================
// SLIDE 15 — F2 VENN (who owns development)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "F2", "Venn Diagram", "Example — who owns employee development? All three circles — on purpose", "F");

  const r = 1.72;
  const c1 = { x: 3.7, y: 3.2 };  // Employee (top-left)
  const c2 = { x: 5.9, y: 3.2 };  // Manager (top-right)
  const c3 = { x: 4.8, y: 4.9 };  // Organization (bottom)
  s.addShape(pptx.shapes.OVAL, { x: c1.x - r, y: c1.y - r, w: 2 * r, h: 2 * r, fill: { color: NAVY, transparency: 55 } });
  s.addShape(pptx.shapes.OVAL, { x: c2.x - r, y: c2.y - r, w: 2 * r, h: 2 * r, fill: { color: STEEL, transparency: 55 } });
  s.addShape(pptx.shapes.OVAL, { x: c3.x - r, y: c3.y - r, w: 2 * r, h: 2 * r, fill: { color: RED, transparency: 60 } });
  // zone labels
  txt(s, "EMPLOYEE", { x: c1.x - 1.6, y: 1.85, w: 1.9, h: 0.28, fontSize: 11, bold: true, color: NAVY, align: "center" });
  txt(s, "ambition & effort", { x: c1.x - 1.6, y: 2.12, w: 1.9, h: 0.24, fontSize: 8.5, italic: true, color: NAVY, align: "center" });
  txt(s, "MANAGER", { x: c2.x - 0.3, y: 1.85, w: 1.9, h: 0.28, fontSize: 11, bold: true, color: STEEL, align: "center" });
  txt(s, "time & opportunity", { x: c2.x - 0.3, y: 2.12, w: 1.9, h: 0.24, fontSize: 8.5, italic: true, color: STEEL, align: "center" });
  txt(s, "ORGANIZATION", { x: c3.x - 0.95, y: 6.15, w: 1.9, h: 0.28, fontSize: 11, bold: true, color: RED, align: "center" });
  txt(s, "systems & budget", { x: c3.x - 0.95, y: 6.42, w: 1.9, h: 0.24, fontSize: 8.5, italic: true, color: RED, align: "center" });
  // overlap labels
  txt(s, "career\ntalks", { x: 4.32, y: 2.35, w: 1.0, h: 0.55, fontSize: 8.5, bold: true, color: WHITE, align: "center" });
  txt(s, "self-serve\nlearning", { x: 3.0, y: 4.25, w: 1.1, h: 0.55, fontSize: 8.5, bold: true, color: WHITE, align: "center" });
  txt(s, "staffing &\nsuccession", { x: 5.5, y: 4.25, w: 1.15, h: 0.55, fontSize: 8.5, bold: true, color: WHITE, align: "center" });
  txt(s, "growth", { x: 4.32, y: 3.7, w: 1.0, h: 0.3, fontSize: 9.5, bold: true, color: WHITE, align: "center" });

  // right annotation
  txt(s, "READ THE ZONES, NOT JUST THE CIRCLES", { x: 8.0, y: 1.75, w: 4.8, h: 0.26, fontSize: 8.5, bold: true, color: RED, charSpacing: 1 });
  const zones = [
    { c: NAVY, t: "Only the employee can supply ambition, honesty about goals, and practice hours." },
    { c: STEEL, t: "Only the manager can supply stretch work, feedback, and time carved out of delivery." },
    { c: RED, t: "Only the organization can supply budget, pathways, and systems that don't punish learning." },
    { c: NAVY_MID, t: "The center — growth — exists only where all three show up in the same quarter." },
  ];
  zones.forEach((z, i) => {
    const y = 2.2 + i * 1.08;
    s.addShape(pptx.shapes.RECTANGLE, { x: 8.0, y: y + 0.05, w: 0.16, h: 0.7, fill: { color: z.c } });
    txt(s, z.t, { x: 8.3, y, w: 4.5, h: 0.85, fontSize: 10.5, color: INK, valign: "middle" });
  });
  caption(s, "If a zone has no owner in your org, the diagram just found your retention problem.", 6.72);
  useWhen(s, "responsibilities overlap and everyone assumes someone else owns it — draw the overlaps and name what lives in each zone.", RED);
  s.addNotes("Ask each group in the room to claim their circle's unique zone out loud. The silence around a zone is the finding.");
}

// ============================================================
// SLIDE 16 — F3 DO VS DON'T (weekly 1:1)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "F3", "Do vs Don't", "Example — the weekly 1:1, paired habit by habit", "F");

  iconCircle(s, "check-w", NAVY, 0.55, 1.55, 0.46, 0.5);
  txt(s, "DO", { x: 1.15, y: 1.55, w: 2.0, h: 0.46, fontSize: 16, bold: true, color: NAVY, valign: "middle", charSpacing: 2 });
  iconCircle(s, "times-w", RED, 7.4, 1.55, 0.46, 0.5);
  txt(s, "DON'T", { x: 8.0, y: 1.55, w: 2.0, h: 0.46, fontSize: 16, bold: true, color: RED, valign: "middle", charSpacing: 2 });

  const pairs = [
    { theme: "AGENDA", d: "Their topics first — yours go last.", x: "Open with your status questions." },
    { theme: "TALK RATIO", d: "Aim to listen 70% of the time.", x: "Turn it into your project update." },
    { theme: "TONE", d: "Ask before advising: “want ideas?”", x: "Fix everything they bring you." },
    { theme: "FOLLOW-UP", d: "End with one noted action each.", x: "Let last week's notes vanish." },
  ];
  pairs.forEach((p, i) => {
    const y = 2.25 + i * 1.08;
    // theme chip center
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 5.92, y: y + 0.24, w: 1.5, h: 0.4, fill: { color: WHITE }, line: { color: LINE, width: 1 }, rectRadius: 0.12 });
    txt(s, p.theme, { x: 5.92, y: y + 0.24, w: 1.5, h: 0.4, fontSize: 8.5, bold: true, color: GRAY, align: "center", valign: "middle", charSpacing: 1 });
    // do card
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.55, y, w: 5.2, h: 0.88, fill: { color: TINT_NAVY }, rectRadius: 0.07 });
    s.addImage({ path: A("check-navy"), x: 0.82, y: y + 0.3, w: 0.28, h: 0.28 });
    txt(s, p.d, { x: 1.25, y, w: 4.4, h: 0.88, fontSize: 11.5, bold: true, color: NAVY, valign: "middle" });
    // don't card
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 7.58, y, w: 5.2, h: 0.88, fill: { color: TINT_RED }, rectRadius: 0.07 });
    s.addImage({ path: A("times-red"), x: 7.85, y: y + 0.3, w: 0.28, h: 0.28 });
    txt(s, p.x, { x: 8.28, y, w: 4.4, h: 0.88, fontSize: 11.5, bold: true, color: RED, valign: "middle" });
  });
  caption(s, "Pair every do with its matching don't — unpaired lists read as platitudes; pairs read as choices.", 6.72);
  useWhen(s, "good and bad practice look similar from a distance — pair each do with its matching don't, theme by theme.", RED);
  s.addNotes("The don'ts should be recognizable, not absurd — each one is something a well-meaning manager actually does. Recognition is what makes the room laugh, then change.");
}

// ============================================================
// SLIDE 17 — F4 BEFORE VS AFTER (performance conversations)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "F4", "Before vs After", "Example — performance conversations: the old way beside the new", "F");

  txt(s, "THE OLD WAY", { x: 0.55, y: 1.6, w: 5.2, h: 0.35, fontSize: 13, bold: true, color: FAINT, charSpacing: 2 });
  txt(s, "THE NEW WAY", { x: 7.58, y: 1.6, w: 5.2, h: 0.35, fontSize: 13, bold: true, color: NAVY, charSpacing: 2 });

  const pairs = [
    ["One annual review, ranked and rated", "Monthly check-ins, notes shared live"],
    ["Feedback saved up for the big day", "Feedback within 48 hours of the moment"],
    ["Manager writes; employee listens", "Employee's self-review starts the talk"],
    ["The rating lands as a surprise ending", "No-surprises rule — nothing new in the review"],
  ];
  pairs.forEach((p, i) => {
    const y = 2.1 + i * 0.98;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.55, y, w: 5.2, h: 0.8, fill: { color: "EFF0F3" }, rectRadius: 0.07 });
    txt(s, p[0], { x: 0.85, y, w: 4.7, h: 0.8, fontSize: 11.5, color: GRAY, valign: "middle" });
    s.addShape(pptx.shapes.RIGHT_ARROW, { x: 6.05, y: y + 0.21, w: 1.25, h: 0.38, fill: { color: STEEL_LT } });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 7.58, y, w: 5.2, h: 0.8, fill: { color: TINT_NAVY }, rectRadius: 0.07 });
    txt(s, p[1], { x: 7.88, y, w: 4.7, h: 0.8, fontSize: 11.5, bold: true, color: NAVY, valign: "middle" });
  });

  // metric strip
  const stats = [
    { n: "2×", t: "feedback frequency" },
    { n: "–40%", t: "review prep time" },
    { n: "0", t: "surprise ratings" },
  ];
  stats.forEach((st, i) => {
    const x = 2.2 + i * 3.2;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: 6.15, w: 2.9, h: 0.62, fill: { color: CARD }, rectRadius: 0.09 });
    txt(s, st.n, { x: x + 0.2, y: 6.15, w: 1.0, h: 0.62, fontSize: 18, bold: true, color: RED, valign: "middle" });
    txt(s, st.t, { x: x + 1.2, y: 6.15, w: 1.65, h: 0.62, fontSize: 10, color: INK, valign: "middle" });
  });
  useWhen(s, "a change replaces old habits — put the old way beside the new so the shift is concrete, and back it with numbers.", RED);
  s.addNotes("Write the old-way lines in the room's own words — if the left column doesn't sound familiar, the right column won't sound necessary.");
}

// ============================================================
// SLIDE 18 — CHOOSER
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  txt(s, "QUICK REFERENCE", { x: 0.55, y: 0.32, w: 4, h: 0.28, fontSize: 11, bold: true, color: RED, charSpacing: 2 });
  txt(s, "Twelve ways to give information a home", { x: 0.55, y: 0.58, w: 11, h: 0.55, fontSize: 26, bold: true, color: NAVY });
  txt(s, "Name it, place it, or contrast it — pick by what the learner must do with the categories.", { x: 0.55, y: 1.12, w: 11.5, h: 0.3, fontSize: 11.5, color: GRAY });

  const cols = [
    {
      key: "D", title: "NAME IT", sub: "Name & Chunk",
      rows: [
        ["D1  Category grid", "one card per type"],
        ["D2  Topic breakdown", "a topic chunked into groups"],
        ["D3  Acronym frame", "steps hung on letters"],
        ["D4  Term card", "is / is not / the edge case"],
      ],
    },
    {
      key: "E", title: "PLACE IT", sub: "Sort & Position",
      rows: [
        ["E1  2×2 matrix", "the quadrant is the instruction"],
        ["E2  Spectrum", "degrees along one line"],
        ["E3  Attribute matrix", "options scored on attributes"],
        ["E4  Sorting buckets", "one rule per bucket"],
      ],
    },
    {
      key: "F", title: "CONTRAST IT", sub: "Compare & Contrast",
      rows: [
        ["F1  Comparison table", "attribute by attribute"],
        ["F2  Venn diagram", "shared vs distinct"],
        ["F3  Do vs don't", "paired habits"],
        ["F4  Before vs after", "old way beside new"],
      ],
    },
  ];
  cols.forEach((c, i) => {
    const f = FAM[c.key];
    const x = 0.55 + i * 4.18, y = 1.62, w = 3.98, h = 4.6;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: CARD }, rectRadius: 0.07 });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 0.78, fill: { color: f.color }, rectRadius: 0.07 });
    s.addShape(pptx.shapes.RECTANGLE, { x, y: y + 0.39, w, h: 0.39, fill: { color: f.color } });
    txt(s, "“" + c.title + "”", { x: x + 0.28, y: y + 0.1, w: w - 0.56, h: 0.36, fontSize: 15, bold: true, italic: true, color: WHITE });
    txt(s, "FAMILY " + c.key + " · " + c.sub.toUpperCase(), { x: x + 0.28, y: y + 0.46, w: w - 0.56, h: 0.24, fontSize: 8.5, bold: true, color: "D8E0EC", charSpacing: 1 });
    c.rows.forEach((r, j) => {
      const ry = y + 1.05 + j * 0.85;
      txt(s, r[0], { x: x + 0.28, y: ry, w: w - 0.56, h: 0.28, fontSize: 12, bold: true, color: f.color });
      txt(s, r[1], { x: x + 0.28, y: ry + 0.29, w: w - 0.56, h: 0.26, fontSize: 10, color: GRAY });
    });
  });
  txt(s, "And always: 3–5 groups, the same fields on every card, and one slide per chunk when in doubt.", { x: 0.55, y: 6.65, w: 12.23, h: 0.32, fontSize: 11.5, italic: true, color: GRAY, align: "center" });
}

// ---------- write ----------
const out = path.join(__dirname, "Category-02-Categorical-Bank.pptx");
pptx.writeFile({ fileName: out }).then(() => console.log("wrote", out));
