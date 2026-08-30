/* Training Slide Template Bank — corporate L&D template deck
 * 3 categories: Logical & Structural / Categorical / Concrete & Visual
 */
const pptxgen = require("pptxgenjs");
const path = require("path");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
pptx.author = "L&D Template Bank";
pptx.title = "Training Slide Template Bank";

// ---------- palette ----------
const NAVY = "1F3864";
const NAVY_MID = "3A5787";
const STEEL = "5B7699";
const STEEL_LT = "8FA3BC";
const RED = "9E3B3B";
const INK = "3A4150";      // body text
const GRAY = "6E7686";     // secondary text
const FAINT = "9AA3B2";    // captions
const CARD = "F3F4F7";     // light card fill
const LINE = "D3D8E0";     // borders
const TINT_NAVY = "DEE5F0";
const TINT_STEEL = "E6ECF3";
const TINT_RED = "F1E5E5";
const WHITE = "FFFFFF";

const FONT = "Calibri";
const A = (n) => path.join(__dirname, "assets", n + ".png");

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

// content-slide header: template tag, title, subtitle, category chip
function header(slide, tplNo, title, sub, catLabel, catColor) {
  txt(slide, "TEMPLATE " + tplNo, { x: 0.55, y: 0.32, w: 4, h: 0.28, fontSize: 11, bold: true, color: catColor, charSpacing: 2 });
  txt(slide, title, { x: 0.55, y: 0.58, w: 8.6, h: 0.55, fontSize: 26, bold: true, color: NAVY });
  txt(slide, sub, { x: 0.55, y: 1.12, w: 8.9, h: 0.3, fontSize: 11.5, color: GRAY });
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 9.55, y: 0.42, w: 3.23, h: 0.44, fill: { color: catColor }, rectRadius: 0.08 });
  txt(slide, catLabel, { x: 9.55, y: 0.42, w: 3.23, h: 0.44, fontSize: 10.5, bold: true, color: WHITE, align: "center", valign: "middle" });
}

function useWhen(slide, text, catColor) {
  iconCircle(slide, "lightbulb-navy", CARD, 0.55, 6.98, 0.34, 0.55);
  slide.addText([
    { text: "USE WHEN  ", options: { bold: true, color: catColor, fontSize: 10.5 } },
    { text: text, options: { color: GRAY, fontSize: 10.5, italic: true } },
  ], { x: 1.0, y: 6.98, w: 11.8, h: 0.36, fontFace: FONT, isTextBox: true, margin: 0, valign: "middle" });
}

function imgPlaceholder(slide, x, y, w, h, label, icon) {
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: CARD }, line: { color: "B9C1CD", width: 1.25, dashType: "dash" }, rectRadius: 0.06 });
  const d = Math.min(0.8, h * 0.3);
  slide.addImage({ path: A(icon || "image-gray"), x: x + w / 2 - d / 2, y: y + h / 2 - d / 2 - 0.18, w: d, h: d });
  txt(slide, label, { x: x + 0.2, y: y + h / 2 + 0.22, w: w - 0.4, h: 0.5, fontSize: 10, color: FAINT, align: "center" });
}

// ============================================================
// SLIDE 1 — TITLE
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: NAVY };
  txt(s, "L&D  ·  INSTRUCTIONAL DESIGN TOOLKIT", { x: 0.9, y: 1.35, w: 11.53, h: 0.32, fontSize: 12, bold: true, color: STEEL_LT, align: "center", charSpacing: 4 });
  txt(s, "Training Slide Template Bank", { x: 0.9, y: 1.8, w: 11.53, h: 0.85, fontSize: 44, bold: true, color: WHITE, align: "center" });
  txt(s, "Match the visual to the knowledge type — reusable slide patterns for adult training in large organizations", { x: 2.2, y: 2.75, w: 8.93, h: 0.6, fontSize: 15, color: "C9D4E6", align: "center" });

  const chips = [
    ["diagram-w", "01 · Logical & Structural", "Concept map · Process map · Flowchart · Hierarchy"],
    ["grid-w", "02 · Categorical", "Category grid · 2×2 matrix · Comparison · Breakdown"],
    ["camera-w", "03 · Concrete & Visual", "Annotated image · Layers · Photo steps · Right vs wrong"],
  ];
  const colors = [NAVY_MID, STEEL, RED];
  chips.forEach((c, i) => {
    const x = 0.9 + i * 3.98;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: 4.35, w: 3.75, h: 1.5, fill: { color: WHITE, transparency: 90 }, rectRadius: 0.08 });
    iconCircle(s, c[0], colors[i], x + 0.28, 4.65, 0.62, 0.52);
    txt(s, c[1], { x: x + 1.02, y: 4.62, w: 2.68, h: 0.35, fontSize: 13, bold: true, color: WHITE });
    txt(s, c[2], { x: x + 1.02, y: 4.98, w: 2.68, h: 0.7, fontSize: 9.5, color: "BFCCE0" });
  });
  txt(s, "12 reusable layouts  ·  built for instructor-led and virtual corporate training", { x: 0.9, y: 6.55, w: 11.53, h: 0.3, fontSize: 11, color: "8FA3BC", align: "center" });
}

// ============================================================
// SLIDE 2 — FRAMEWORK OVERVIEW
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  txt(s, "THE FRAMEWORK", { x: 0.55, y: 0.32, w: 4, h: 0.28, fontSize: 11, bold: true, color: RED, charSpacing: 2 });
  txt(s, "One bank, three kinds of knowledge", { x: 0.55, y: 0.58, w: 10, h: 0.55, fontSize: 26, bold: true, color: NAVY });
  txt(s, "Every training slide starts with one question: what kind of knowledge is this? The answer picks the template family.", { x: 0.55, y: 1.12, w: 11.5, h: 0.3, fontSize: 11.5, color: GRAY });

  const cards = [
    {
      color: NAVY, icon: "diagram-w", no: "1", name: "Logical & Structural",
      def: "Knowledge about how things connect, flow, and depend on each other. The structure IS the content.",
      tools: ["Concept map", "Process map", "Flowchart", "Hierarchy"],
      when: "Systems, workflows, decisions, org & curriculum structures.",
    },
    {
      color: STEEL, icon: "grid-w", no: "2", name: "Categorical",
      def: "New information broken into named groups, so working memory has somewhere to file each detail.",
      tools: ["Category grid", "2×2 matrix", "Comparison table", "Topic breakdown"],
      when: "Introducing new material; sorting, contrasting, chunking.",
    },
    {
      color: RED, icon: "camera-w", no: "3", name: "Concrete & Visual",
      def: "Content that needs an accurate picture of the real thing — staged in a logical layer, order, or contrast.",
      tools: ["Annotated image", "Layer diagram", "Photo step sequence", "Correct vs incorrect"],
      when: "Software tours, equipment, physical procedures, safety.",
    },
  ];
  cards.forEach((c, i) => {
    const x = 0.55 + i * 4.18, y = 1.62, w = 3.98, h = 4.85;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: CARD }, rectRadius: 0.07 });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 1.0, fill: { color: c.color }, rectRadius: 0.07 });
    s.addShape(pptx.shapes.RECTANGLE, { x, y: y + 0.5, w, h: 0.5, fill: { color: c.color } });
    iconCircle(s, c.icon, c.color === NAVY ? NAVY_MID : (c.color === STEEL ? "6E87A8" : "AF5252"), x + 0.25, y + 0.19, 0.62, 0.52);
    txt(s, "CATEGORY " + c.no, { x: x + 1.02, y: y + 0.18, w: w - 1.2, h: 0.25, fontSize: 9.5, bold: true, color: "D8E0EC", charSpacing: 2 });
    txt(s, c.name, { x: x + 1.02, y: y + 0.42, w: w - 1.2, h: 0.4, fontSize: 16.5, bold: true, color: WHITE });
    txt(s, c.def, { x: x + 0.28, y: y + 1.22, w: w - 0.56, h: 0.95, fontSize: 11, color: INK });
    txt(s, "TEMPLATES", { x: x + 0.28, y: y + 2.28, w: w - 0.56, h: 0.24, fontSize: 9, bold: true, color: c.color, charSpacing: 2 });
    s.addText(c.tools.map((t, j) => ({
      text: t, options: { bullet: { code: "2022", indent: 10 }, color: INK, fontSize: 11, breakLine: j < c.tools.length - 1, paraSpaceAfter: 4 },
    })), { x: x + 0.32, y: y + 2.56, w: w - 0.6, h: 1.35, fontFace: FONT, isTextBox: true, margin: 0 });
    s.addText([
      { text: "REACH FOR IT WHEN:  ", options: { bold: true, fontSize: 9, color: c.color } },
      { text: c.when, options: { fontSize: 10, color: GRAY, italic: true } },
    ], { x: x + 0.28, y: y + 3.98, w: w - 0.56, h: 0.75, fontFace: FONT, isTextBox: true, margin: 0 });
  });
  txt(s, "Design rule for every template:  the layout carries the logic — decoration never competes with meaning.", { x: 0.55, y: 6.85, w: 12.23, h: 0.32, fontSize: 11.5, italic: true, color: GRAY, align: "center" });
}

// ============================================================
// DIVIDER helper
// ============================================================
function divider(bg, shade, no, name, blurb, tiles) {
  const s = pptx.addSlide();
  s.background = { color: bg };
  txt(s, no, { x: 0.6, y: 0.72, w: 4.4, h: 2.2, fontSize: 130, bold: true, color: shade });
  txt(s, "CATEGORY " + no, { x: 4.9, y: 1.05, w: 7.5, h: 0.32, fontSize: 12, bold: true, color: "E3E8F0", charSpacing: 4 });
  txt(s, name, { x: 4.9, y: 1.45, w: 8.1, h: 1.35, fontSize: 36, bold: true, color: WHITE, valign: "top" });
  txt(s, blurb, { x: 4.9, y: 2.95, w: 7.6, h: 0.85, fontSize: 13.5, color: "DCE3EE" });
  tiles.forEach((t, i) => {
    const x = 0.6 + i * 3.13, y = 4.55, w = 2.93, h = 1.95;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: WHITE, transparency: 88 }, rectRadius: 0.07 });
    s.addImage({ path: A(t[0]), x: x + 0.25, y: y + 0.26, w: 0.4, h: 0.4 });
    txt(s, t[1], { x: x + 0.8, y: y + 0.24, w: w - 0.9, h: 0.28, fontSize: 10, bold: true, color: "D9E0EC", charSpacing: 1 });
    txt(s, t[2], { x: x + 0.8, y: y + 0.5, w: w - 0.9, h: 0.35, fontSize: 12.5, bold: true, color: WHITE });
    txt(s, t[3], { x: x + 0.25, y: y + 1.02, w: w - 0.5, h: 0.8, fontSize: 10, color: "E4E9F1" });
  });
  return s;
}

// ============================================================
// SLIDE 3 — DIVIDER 01
// ============================================================
divider(NAVY, "44598C", "01", "Logical & Structural Knowledge",
  "Use when learners must grasp how ideas, steps, and roles connect. Prioritize maps of relationships over lists of facts.",
  [
    ["diagram-w", "1.1", "Concept Map", "A system of related ideas, with the relationships labeled."],
    ["route-w", "1.2", "Process Map", "Stages in sequence, with owners and hand-offs."],
    ["branch-w", "1.3", "Flowchart", "Decisions and branches learners must rehearse."],
    ["sitemap-w", "1.4", "Hierarchy", "What nests inside what, from program to module."],
  ]);

// ============================================================
// SLIDE 4 — 1.1 CONCEPT MAP
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "1.1", "Concept Map", "Example — how the pieces of continuous performance management relate", "01 · LOGICAL & STRUCTURAL", NAVY);

  const cx = 5.35, cy = 3.65, cw = 2.65, ch = 1.0;
  const nodes = [
    { x: 1.15, y: 1.85, label: "Goal Setting", link: "sets targets for" },
    { x: 9.55, y: 1.85, label: "Continuous Feedback", link: "is measured by" },
    { x: 0.7, y: 3.7, label: "Coaching Conversations", link: "is steered by" },
    { x: 10.0, y: 3.7, label: "Development Plans", link: "feeds" },
    { x: 1.15, y: 5.55, label: "Recognition & Reward", link: "reinforces" },
    { x: 9.55, y: 5.55, label: "Year-End Summary", link: "rolls up into" },
  ];
  const nw = 2.55, nh = 0.75;
  // connectors first, so nodes sit on top
  nodes.forEach((n) => {
    const nxc = n.x + nw / 2, nyc = n.y + nh / 2;
    connLine(s, cx + cw / 2, cy + ch / 2, nxc, nyc, { color: "AEB7C6", width: 1.5 });
  });
  // cross-link between outer nodes (dashed) — feedback informs coaching
  connLine(s, nodes[1].x + 0.4, nodes[1].y + nh, nodes[3].x + 0.9, nodes[3].y, { color: STEEL_LT, width: 1.25, dash: "dash", arrow: true });
  // link labels
  const labels = [
    [3.45, 2.62], [8.35, 2.62], [4.4, 3.86], [9.0, 3.86], [3.45, 4.85], [8.35, 4.85],
  ];
  nodes.forEach((n, i) => {
    txt(s, n.link, { x: labels[i][0] - 0.75, y: labels[i][1] - 0.12, w: 1.5, h: 0.24, fontSize: 8.5, italic: true, color: GRAY, align: "center", fill: { color: WHITE } });
  });
  // outer nodes
  nodes.forEach((n) => {
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: n.x, y: n.y, w: nw, h: nh, fill: { color: CARD }, line: { color: NAVY, width: 1.25 }, rectRadius: 0.09 });
    txt(s, n.label, { x: n.x + 0.1, y: n.y, w: nw - 0.2, h: nh, fontSize: 12.5, bold: true, color: NAVY, align: "center", valign: "middle" });
  });
  // center node
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: cx, y: cy, w: cw, h: ch, fill: { color: NAVY }, rectRadius: 0.09, shadow: { type: "outer", color: "9AA3B2", blur: 6, offset: 2, angle: 90, opacity: 0.35 } });
  txt(s, "Performance\nManagement Cycle", { x: cx + 0.1, y: cy, w: cw - 0.2, h: ch, fontSize: 14, bold: true, color: WHITE, align: "center", valign: "middle" });
  // legend note
  txt(s, "Nodes = concepts   ·   labeled lines = relationships   ·   dashed = cross-link", { x: 4.0, y: 6.45, w: 5.4, h: 0.26, fontSize: 9, color: FAINT, align: "center" });

  useWhen(s, "learners need the big picture of how the parts of a system influence each other — before any single part is taught in depth.", NAVY);
}

// ============================================================
// SLIDE 5 — 1.2 PROCESS MAP
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "1.2", "Process Map", "Example — the new-hire onboarding journey, stage by stage", "01 · LOGICAL & STRUCTURAL", NAVY);

  const stages = [
    { name: "Offer & Paperwork", time: "Day −21 to −14", color: NAVY, owner: "Recruiting", items: ["Offer signed & filed", "Background check done", "Start date confirmed"] },
    { name: "Pre-Boarding", time: "Day −14 to 0", color: NAVY_MID, owner: "HR Ops", items: ["Accounts & laptop ready", "Welcome pack sent", "Buddy assigned"] },
    { name: "Week 1 Orientation", time: "Day 1–5", color: STEEL, owner: "People Team", items: ["Company & values intro", "Compliance basics", "Team introductions"] },
    { name: "30 / 60 / 90 Ramp", time: "Day 6–90", color: STEEL_LT, owner: "Manager", items: ["Role goals agreed", "Weekly 1:1 cadence", "First deliverable shipped"] },
    { name: "Fully Productive", time: "Day 90+", color: RED, owner: "Manager + HRBP", items: ["90-day review held", "Development plan set", "Buddy phase closed"] },
  ];
  const w = 2.6, gap = -0.12, x0 = 0.55, y0 = 1.7, h = 0.95;
  stages.forEach((st, i) => {
    const x = x0 + i * (w + gap);
    s.addShape(pptx.shapes.CHEVRON, { x, y: y0, w, h, fill: { color: st.color } });
    txt(s, st.name, { x: x + 0.32, y: y0 + 0.08, w: w - 0.5, h: 0.5, fontSize: 12.5, bold: true, color: WHITE, align: "center" });
    txt(s, st.time, { x: x + 0.32, y: y0 + 0.56, w: w - 0.5, h: 0.28, fontSize: 9, color: "E2E8F1", align: "center" });
  });
  // detail cards
  stages.forEach((st, i) => {
    const cw2 = 2.42, x = x0 + i * (w + gap) + 0.03, y = 3.0, ch2 = 3.05;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w: cw2, h: ch2, fill: { color: CARD }, rectRadius: 0.06 });
    connLine(s, x + cw2 / 2, y0 + h, x + cw2 / 2, y, { color: LINE, width: 1 });
    s.addText(st.items.map((t, j) => ({
      text: t, options: { bullet: { code: "2022", indent: 9 }, color: INK, fontSize: 10.5, breakLine: j < st.items.length - 1, paraSpaceAfter: 6 },
    })), { x: x + 0.2, y: y + 0.22, w: cw2 - 0.38, h: 1.9, fontFace: FONT, isTextBox: true, margin: 0, valign: "top" });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: x + 0.2, y: y + ch2 - 0.62, w: cw2 - 0.4, h: 0.4, fill: { color: WHITE }, line: { color: st.color, width: 1 }, rectRadius: 0.12 });
    txt(s, "Owner: " + st.owner, { x: x + 0.2, y: y + ch2 - 0.62, w: cw2 - 0.4, h: 0.4, fontSize: 9, bold: true, color: st.color, align: "center", valign: "middle" });
  });
  txt(s, "One chevron per stage · one owner per stage · 3 bullets max — if a stage needs more, it is two stages.", { x: 0.55, y: 6.35, w: 12.23, h: 0.26, fontSize: 9, color: FAINT, align: "center" });

  useWhen(s, "the content is a sequence with a clear direction, stages, and hand-offs between owners.", NAVY);
}

// ============================================================
// SLIDE 6 — 1.3 FLOWCHART
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "1.3", "Flowchart with Decision Points", "Example — handling a customer escalation, branch by branch", "01 · LOGICAL & STRUCTURAL", NAVY);

  const box = (x, y, w, h, fill, line, text, tcolor, shape, fs) => {
    s.addShape(shape || pptx.shapes.RECTANGLE, Object.assign({ x, y, w, h, fill: { color: fill } }, line ? { line: { color: line, width: 1.25 } } : {}, shape === pptx.shapes.ROUNDED_RECTANGLE ? { rectRadius: 0.16 } : {}));
    txt(s, text, { x: x + 0.06, y, w: w - 0.12, h, fontSize: fs || 10.5, bold: true, color: tcolor, align: "center", valign: "middle" });
  };
  const RR = pptx.shapes.ROUNDED_RECTANGLE, DI = pptx.shapes.DIAMOND;

  // top row
  box(0.6, 1.85, 1.85, 0.75, NAVY, null, "Issue logged\nby customer", WHITE, RR);
  box(3.0, 1.85, 2.0, 0.75, CARD, STEEL, "Tier 1 triage\n& diagnosis", INK);
  s.addShape(DI, { x: 5.6, y: 1.55, w: 2.3, h: 1.35, fill: { color: TINT_RED }, line: { color: RED, width: 1.25 } });
  txt(s, "Resolvable\nat Tier 1?", { x: 5.85, y: 1.55, w: 1.8, h: 1.35, fontSize: 10.5, bold: true, color: RED, align: "center", valign: "middle" });
  box(8.5, 1.85, 2.0, 0.75, CARD, STEEL, "Resolve &\ndocument fix", INK);
  box(11.1, 1.85, 1.8, 0.75, NAVY, null, "Close loop\nwith customer", WHITE, RR);
  // middle
  box(5.75, 3.65, 2.0, 0.7, CARD, STEEL, "Escalate to\nTier 2 queue", INK);
  s.addShape(DI, { x: 5.6, y: 4.75, w: 2.3, h: 1.35, fill: { color: TINT_RED }, line: { color: RED, width: 1.25 } });
  txt(s, "Security or\ndata risk?", { x: 5.85, y: 4.75, w: 1.8, h: 1.35, fontSize: 10.5, bold: true, color: RED, align: "center", valign: "middle" });
  // bottom row
  box(8.5, 5.05, 2.0, 0.75, TINT_RED, RED, "Trigger incident\nresponse", RED);
  box(11.1, 5.05, 1.8, 0.75, RED, null, "Incident\ncommander owns", WHITE, RR);
  box(3.0, 5.05, 2.0, 0.75, CARD, STEEL, "Tier 2 resolves\nwithin SLA", INK);
  box(0.6, 5.05, 1.85, 0.75, NAVY, null, "Close loop\nwith customer", WHITE, RR);

  // arrows
  const AC = "8792A5";
  connLine(s, 2.45, 2.225, 3.0, 2.225, { color: AC, arrow: true });
  connLine(s, 5.0, 2.225, 5.6, 2.225, { color: AC, arrow: true });
  connLine(s, 7.9, 2.225, 8.5, 2.225, { color: AC, arrow: true });
  connLine(s, 10.5, 2.225, 11.1, 2.225, { color: AC, arrow: true });
  connLine(s, 6.75, 2.9, 6.75, 3.65, { color: AC, arrow: true });
  connLine(s, 6.75, 4.35, 6.75, 4.75, { color: AC, arrow: true });
  connLine(s, 7.9, 5.425, 8.5, 5.425, { color: AC, arrow: true });
  connLine(s, 10.5, 5.425, 11.1, 5.425, { color: AC, arrow: true });
  connLine(s, 5.6, 5.425, 5.0, 5.425, { color: AC, arrow: true });
  connLine(s, 3.0, 5.425, 2.45, 5.425, { color: AC, arrow: true });
  // yes/no labels
  const yn = (x, y, t, c) => txt(s, t, { x, y, w: 0.5, h: 0.22, fontSize: 9, bold: true, color: c, align: "center", fill: { color: WHITE } });
  yn(8.05, 2.02, "YES", STEEL);
  yn(6.85, 3.18, "NO", RED);
  yn(8.05, 5.2, "YES", RED);
  yn(5.05, 5.2, "NO", STEEL);

  // legend
  s.addShape(RR, { x: 3.6, y: 6.5, w: 0.5, h: 0.26, fill: { color: NAVY }, rectRadius: 0.1 });
  txt(s, "start / end", { x: 4.18, y: 6.5, w: 0.9, h: 0.26, fontSize: 9, color: GRAY, valign: "middle" });
  s.addShape(pptx.shapes.RECTANGLE, { x: 5.3, y: 6.5, w: 0.5, h: 0.26, fill: { color: CARD }, line: { color: STEEL, width: 1 } });
  txt(s, "action", { x: 5.88, y: 6.5, w: 0.7, h: 0.26, fontSize: 9, color: GRAY, valign: "middle" });
  s.addShape(DI, { x: 6.8, y: 6.46, w: 0.4, h: 0.34, fill: { color: TINT_RED }, line: { color: RED, width: 1 } });
  txt(s, "decision", { x: 7.28, y: 6.5, w: 0.9, h: 0.26, fontSize: 9, color: GRAY, valign: "middle" });
  txt(s, "· read left to right, decisions branch down", { x: 8.2, y: 6.5, w: 3.4, h: 0.26, fontSize: 9, color: FAINT, valign: "middle" });

  useWhen(s, "the right action depends on decisions — make every branch visible so learners rehearse the judgment, not just the happy path.", NAVY);
}

// ============================================================
// SLIDE 7 — 1.4 HIERARCHY
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "1.4", "Hierarchy", "Example — curriculum architecture: what nests inside what", "01 · LOGICAL & STRUCTURAL", NAVY);

  // level labels (left edge)
  txt(s, "PROGRAM", { x: 0.5, y: 1.9, w: 1.0, h: 0.24, fontSize: 8.5, bold: true, color: FAINT, charSpacing: 2 });
  txt(s, "COURSES", { x: 0.5, y: 3.32, w: 1.0, h: 0.24, fontSize: 8.5, bold: true, color: FAINT, charSpacing: 2 });
  txt(s, "MODULES", { x: 0.5, y: 4.78, w: 1.0, h: 0.24, fontSize: 8.5, bold: true, color: FAINT, charSpacing: 2 });

  // top node
  const tx = 5.29, ty = 1.62, tw = 2.75, th = 0.78;
  // L2 nodes
  const l2 = [
    { x: 1.75, name: "Lead Self", sub: "Individual contributors" },
    { x: 5.37, name: "Lead Teams", sub: "New & front-line managers" },
    { x: 8.98, name: "Lead the Business", sub: "Function heads" },
  ];
  const l2y = 3.1, l2w = 2.6, l2h = 0.78;
  // connectors
  l2.forEach((n) => connLine(s, tx + tw / 2, ty + th, n.x + l2w / 2, l2y, { color: "AEB7C6", width: 1.5 }));
  l2.forEach((n) => connLine(s, n.x + l2w / 2, l2y + l2h, n.x + l2w / 2, 4.55, { color: "AEB7C6", width: 1.5 }));

  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: tx, y: ty, w: tw, h: th, fill: { color: NAVY }, rectRadius: 0.08 });
  txt(s, "Leadership Academy", { x: tx, y: ty + 0.09, w: tw, h: 0.38, fontSize: 14.5, bold: true, color: WHITE, align: "center" });
  txt(s, "18-month development program", { x: tx, y: ty + 0.44, w: tw, h: 0.26, fontSize: 9, color: "C9D4E6", align: "center" });

  const mods = [
    ["Self-awareness & feedback", "Personal productivity", "Influencing without authority"],
    ["Coaching conversations", "Delegation & development", "Running effective 1:1s"],
    ["Strategy into priorities", "Financial acumen", "Leading through change"],
  ];
  l2.forEach((n, i) => {
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: n.x, y: l2y, w: l2w, h: l2h, fill: { color: STEEL }, rectRadius: 0.08 });
    txt(s, n.name, { x: n.x, y: l2y + 0.08, w: l2w, h: 0.36, fontSize: 13.5, bold: true, color: WHITE, align: "center" });
    txt(s, n.sub, { x: n.x, y: l2y + 0.44, w: l2w, h: 0.26, fontSize: 9, color: "E2E8F1", align: "center" });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: n.x, y: 4.55, w: l2w, h: 1.75, fill: { color: CARD }, line: { color: LINE, width: 1 }, rectRadius: 0.06 });
    s.addText(mods[i].map((t, j) => ({
      text: t, options: { bullet: { code: "2022", indent: 9 }, color: INK, fontSize: 10.5, breakLine: j < 2, paraSpaceAfter: 8 },
    })), { x: n.x + 0.22, y: 4.78, w: l2w - 0.4, h: 1.35, fontFace: FONT, isTextBox: true, margin: 0 });
  });
  txt(s, "Three levels maximum on one slide — deeper structures get one slide per branch.", { x: 0.55, y: 6.5, w: 12.23, h: 0.26, fontSize: 9, color: FAINT, align: "center" });

  useWhen(s, "content nests — programs into courses, functions into teams — and learners must know what belongs where.", NAVY);
}

// ============================================================
// SLIDE 8 — DIVIDER 02
// ============================================================
divider(STEEL, "7E94B0", "02", "Categorical Information",
  "Use when introducing new material. Name the groups first — 3 to 5 of them — so learners have somewhere to file every detail that follows.",
  [
    ["grid-w", "2.1", "Category Grid", "Named groups with a definition and an example each."],
    ["matrix-w", "2.2", "2×2 Matrix", "Items sorted by two dimensions — position teaches."],
    ["columns-w", "2.3", "Comparison Table", "Similar things contrasted attribute by attribute."],
    ["balance-w", "2.4", "Topic Breakdown", "One big topic chunked into teachable groups."],
  ]);

// ============================================================
// SLIDE 9 — 2.1 CATEGORY GRID
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "2.1", "Category Grid", "Example — the four ways we deliver learning, and when each earns its cost", "02 · CATEGORICAL", STEEL);

  const cards = [
    { icon: "chalkboard-w", color: NAVY, name: "Instructor-Led Workshop", def: "A facilitator works a room through practice, discussion, and feedback in real time.", best: "High-stakes skills that need live practice — negotiation, feedback conversations." },
    { icon: "laptop-w", color: STEEL, name: "Virtual Classroom", def: "Live online sessions with breakouts, polls, and shared exercises across locations.", best: "Distributed teams learning together without travel — rollouts, cohort programs." },
    { icon: "book-w", color: NAVY_MID, name: "Self-Paced E-Learning", def: "Modules learners complete on their own schedule, with checks for understanding.", best: "Consistent knowledge at scale — compliance, product basics, onboarding theory." },
    { icon: "handshake-w", color: RED, name: "On-the-Job Coaching", def: "A manager or expert guides real work — observe, attempt, feedback, retry.", best: "Transfer to the job — the step every other method exists to set up." },
  ];
  cards.forEach((c, i) => {
    const x = 0.55 + (i % 2) * 6.28, y = 1.62 + Math.floor(i / 2) * 2.62, w = 5.95, h = 2.42;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: CARD }, rectRadius: 0.07 });
    iconCircle(s, c.icon, c.color, x + 0.28, y + 0.3, 0.72, 0.5);
    txt(s, c.name, { x: x + 1.22, y: y + 0.26, w: w - 1.45, h: 0.35, fontSize: 15, bold: true, color: NAVY });
    txt(s, c.def, { x: x + 1.22, y: y + 0.64, w: w - 1.45, h: 0.75, fontSize: 10.5, color: INK });
    s.addText([
      { text: "BEST FOR:  ", options: { bold: true, fontSize: 9, color: c.color } },
      { text: c.best, options: { fontSize: 10, color: GRAY, italic: true } },
    ], { x: x + 1.22, y: y + 1.5, w: w - 1.45, h: 0.75, fontFace: FONT, isTextBox: true, margin: 0 });
  });

  useWhen(s, "you introduce new material — give each group a name, a one-line definition, and one concrete example. Keep it to 3–5 groups.", STEEL);
}

// ============================================================
// SLIDE 10 — 2.2 MATRIX
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "2.2", "2×2 Matrix", "Example — the skill / will matrix: matching your coaching style to the person", "02 · CATEGORICAL", STEEL);

  const gx = 2.7, gy = 1.62, qw = 4.7, qh = 2.3, gap = 0.18;
  const quads = [
    { x: gx, y: gy, tint: TINT_STEEL, color: STEEL, name: "GUIDE", who: "High will · low skill — keen but green.", act: "Structured practice, short feedback loops, early wins." },
    { x: gx + qw + gap, y: gy, tint: TINT_NAVY, color: NAVY, name: "DELEGATE", who: "High will · high skill — your engine room.", act: "Stretch goals, autonomy, visibility. Stay out of the way." },
    { x: gx, y: gy + qh + gap, tint: TINT_RED, color: RED, name: "DIRECT", who: "Low will · low skill — diagnose the cause first.", act: "Clear standards, close check-ins, honest conversation." },
    { x: gx + qw + gap, y: gy + qh + gap, tint: "E8E4EF", color: "5F5680", name: "MOTIVATE", who: "Low will · high skill — able but disengaged.", act: "Reconnect to purpose, new challenge, remove blockers." },
  ];
  quads.forEach((q) => {
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: q.x, y: q.y, w: qw, h: qh, fill: { color: q.tint }, rectRadius: 0.06 });
    txt(s, q.name, { x: q.x + 0.3, y: q.y + 0.22, w: qw - 0.6, h: 0.4, fontSize: 17, bold: true, color: q.color, charSpacing: 1 });
    txt(s, q.who, { x: q.x + 0.3, y: q.y + 0.68, w: qw - 0.6, h: 0.55, fontSize: 11, bold: true, color: INK });
    txt(s, q.act, { x: q.x + 0.3, y: q.y + 1.28, w: qw - 0.6, h: 0.8, fontSize: 10.5, color: GRAY });
  });
  // axes
  connLine(s, gx - 0.35, gy + 2 * qh + gap, gx - 0.35, gy, { color: NAVY, width: 2, arrow: true });
  connLine(s, gx, gy + 2 * qh + gap + 0.35, gx + 2 * qw + gap, gy + 2 * qh + gap + 0.35, { color: NAVY, width: 2, arrow: true });
  txt(s, "WILL — motivation & commitment", { x: gx - 2.87, y: gy + qh - 0.14, w: 4.4, h: 0.3, fontSize: 10, bold: true, color: NAVY, align: "center", rotate: 270 });
  txt(s, "SKILL — capability & experience", { x: gx + qw - 2.2 + gap / 2, y: gy + 2 * qh + gap + 0.42, w: 4.4, h: 0.3, fontSize: 10, bold: true, color: NAVY, align: "center" });

  useWhen(s, "two dimensions sort everything that matters — place each case on the grid so position itself does the teaching.", STEEL);
}

// ============================================================
// SLIDE 11 — 2.3 COMPARISON TABLE
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "2.3", "Comparison Table", "Example — three conversations managers mix up: coaching, mentoring, managing", "02 · CATEGORICAL", STEEL);

  const headOpts = { bold: true, color: WHITE, fontSize: 13, align: "center", valign: "middle" };
  const attr = { bold: true, color: NAVY, fontSize: 11, align: "left", valign: "middle" };
  const cell = { color: INK, fontSize: 10.5, align: "left", valign: "middle" };
  const rows = [
    [
      { text: "", options: { fill: { color: WHITE } } },
      { text: "Coaching", options: Object.assign({ fill: { color: NAVY } }, headOpts) },
      { text: "Mentoring", options: Object.assign({ fill: { color: STEEL } }, headOpts) },
      { text: "Managing", options: Object.assign({ fill: { color: RED } }, headOpts) },
    ],
    [
      { text: "Purpose", options: attr },
      { text: "Unlock the person's own thinking on a current challenge", options: cell },
      { text: "Share experience to grow the person over time", options: cell },
      { text: "Direct work toward the team's goals and standards", options: cell },
    ],
    [
      { text: "Time horizon", options: attr },
      { text: "This situation, this month", options: cell },
      { text: "Career arc — quarters to years", options: cell },
      { text: "This week's priorities and results", options: cell },
    ],
    [
      { text: "Who drives", options: attr },
      { text: "The learner — coach asks, learner decides", options: cell },
      { text: "Shared — mentor offers, mentee chooses", options: cell },
      { text: "The manager — sets expectations, checks progress", options: cell },
    ],
    [
      { text: "Sounds like", options: attr },
      { text: "“What have you tried? What would good look like?”", options: Object.assign({}, cell, { italic: true }) },
      { text: "“When I faced this, here is what I learned…”", options: Object.assign({}, cell, { italic: true }) },
      { text: "“I need this by Friday — here is the standard.”", options: Object.assign({}, cell, { italic: true }) },
    ],
  ];
  s.addTable(rows, {
    x: 0.55, y: 1.7, w: 12.23,
    colW: [2.0, 3.41, 3.41, 3.41],
    rowH: [0.55, 1.0, 0.85, 1.0, 1.0],
    border: { type: "solid", color: LINE, pt: 1 },
    fill: { color: "FAFBFC" },
    fontFace: FONT,
    margin: [0.06, 0.12, 0.06, 0.12],
    autoPage: false,
  });
  txt(s, "Contrast only the attributes learners actually confuse — four rows beat ten.", { x: 0.55, y: 6.45, w: 12.23, h: 0.26, fontSize: 9, color: FAINT, align: "center" });

  useWhen(s, "learners confuse similar things — put them side by side and contrast them attribute by attribute, ending with what each “sounds like”.", STEEL);
}

// ============================================================
// SLIDE 12 — 2.4 TOPIC BREAKDOWN
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "2.4", "Topic Breakdown", "Example — chunking security awareness into three teachable groups", "02 · CATEGORICAL", STEEL);

  // big topic block
  const bx = 0.55, by = 2.55, bw = 2.9, bh = 2.5;
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: bx, y: by, w: bw, h: bh, fill: { color: NAVY }, rectRadius: 0.08 });
  iconCircle(s, "shield-w", NAVY_MID, bx + bw / 2 - 0.36, by + 0.35, 0.72, 0.5);
  txt(s, "Information Security Awareness", { x: bx + 0.25, y: by + 1.2, w: bw - 0.5, h: 0.7, fontSize: 15.5, bold: true, color: WHITE, align: "center" });
  txt(s, "9 behaviors → 3 groups", { x: bx + 0.25, y: by + 1.92, w: bw - 0.5, h: 0.3, fontSize: 10, color: "C9D4E6", align: "center" });

  const groups = [
    { icon: "key-w", color: NAVY, name: "Protect Access", items: ["Passphrases & MFA", "Phishing red flags", "Social engineering calls"] },
    { icon: "database-w", color: STEEL, name: "Protect Data", items: ["Classification labels", "Sharing & storage rules", "Clean-desk basics"] },
    { icon: "mobile-w", color: RED, name: "Protect Devices", items: ["Updates & patching", "Public Wi-Fi & travel", "Lost-device reporting"] },
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
    txt(s, "GROUP " + (i + 1), { x: gx + 1.05, y: y + 0.2, w: 2.4, h: 0.22, fontSize: 8.5, bold: true, color: g.color, charSpacing: 2 });
    txt(s, g.name, { x: gx + 1.05, y: y + 0.42, w: 2.6, h: 0.35, fontSize: 15, bold: true, color: NAVY });
    // item chips
    g.items.forEach((it, j) => {
      const cx2 = gx + 3.85, cy2 = y + 0.16 + j * 0.44;
      s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: cx2, y: cy2, w: 4.2, h: 0.38, fill: { color: WHITE }, line: { color: LINE, width: 1 }, rectRadius: 0.12 });
      txt(s, it, { x: cx2 + 0.18, y: cy2, w: 3.9, h: 0.38, fontSize: 10, color: INK, valign: "middle" });
    });
  });
  txt(s, "Teach group by group, then reassemble: end by showing all three groups on one summary visual.", { x: 0.55, y: 6.65, w: 12.23, h: 0.26, fontSize: 9, color: FAINT, align: "center" });

  useWhen(s, "a big topic would overwhelm — break it into 3–5 named chunks, teach chunk by chunk, then synthesize.", STEEL);
}

// ============================================================
// SLIDE 13 — DIVIDER 03
// ============================================================
divider(RED, "B56A6A", "03", "Concrete & Visual Information",
  "Use when accuracy matters. Show the real thing — the actual screen, machine, or posture — but stage it in layers, sequences, and contrasts.",
  [
    ["image-w", "3.1", "Annotated Image", "One accurate picture with a numbered guided tour."],
    ["layers-w", "3.2", "Layer Diagram", "Concrete options ranked in logical layers."],
    ["listol-w", "3.3", "Photo Sequence", "One accurate photo per step, in strict order."],
    ["check-w", "3.4", "Correct vs Incorrect", "Both versions side by side, differences called out."],
  ]);

// ============================================================
// SLIDE 14 — 3.1 ANNOTATED IMAGE
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "3.1", "Annotated Image", "Example — guided tour of the CRM home screen, in reading order", "03 · CONCRETE & VISUAL", RED);

  const fx = 0.55, fy = 1.62, fw = 7.2, fh = 5.05;
  imgPlaceholder(s, fx, fy, fw, fh, "Replace with the REAL screenshot — full resolution, current release, no mock-ups");
  // callout markers on the image
  const marks = [
    { x: 1.35, y: 2.15, color: NAVY },
    { x: 5.7, y: 2.5, color: STEEL },
    { x: 2.5, y: 5.1, color: NAVY_MID },
    { x: 6.35, y: 5.7, color: RED },
  ];
  marks.forEach((m, i) => {
    s.addShape(pptx.shapes.OVAL, { x: m.x, y: m.y, w: 0.44, h: 0.44, fill: { color: m.color }, line: { color: WHITE, width: 2 }, shadow: { type: "outer", color: "9AA3B2", blur: 5, offset: 1, angle: 90, opacity: 0.4 } });
    txt(s, String(i + 1), { x: m.x, y: m.y, w: 0.44, h: 0.44, fontSize: 13, bold: true, color: WHITE, align: "center", valign: "middle" });
  });

  const notes = [
    { color: NAVY, name: "Pipeline board", def: "Every open deal by stage. Start your day here — anything stuck 14+ days is flagged." },
    { color: STEEL, name: "Task queue", def: "Today's follow-ups, auto-sorted by deal value. Work top to bottom." },
    { color: NAVY_MID, name: "Health score", def: "Red means no contact in 30 days — call before it churns, not after." },
    { color: RED, name: "Alert center", def: "Customer replies and escalations. The 24-hour response clock starts here." },
  ];
  notes.forEach((n, i) => {
    const y = 1.72 + i * 1.28;
    s.addShape(pptx.shapes.OVAL, { x: 8.15, y, w: 0.4, h: 0.4, fill: { color: n.color } });
    txt(s, String(i + 1), { x: 8.15, y, w: 0.4, h: 0.4, fontSize: 12, bold: true, color: WHITE, align: "center", valign: "middle" });
    txt(s, n.name, { x: 8.7, y: y - 0.03, w: 4.05, h: 0.32, fontSize: 13.5, bold: true, color: NAVY });
    txt(s, n.def, { x: 8.7, y: y + 0.3, w: 4.05, h: 0.8, fontSize: 10.5, color: INK });
  });

  useWhen(s, "learners must recognize the real thing on the job — use the accurate image, and number the tour in the order they should read it.", RED);
}

// ============================================================
// SLIDE 15 — 3.2 LAYER DIAGRAM
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "3.2", "Layer Diagram", "Example — the hierarchy of hazard controls: concrete measures, ranked", "03 · CONCRETE & VISUAL", RED);

  const layers = [
    { name: "1 · Eliminate the hazard", color: NAVY, ex: "Automate pallet transfer so no one lifts at height." },
    { name: "2 · Substitute the risk", color: NAVY_MID, ex: "Swap the solvent for a non-flammable cleaner." },
    { name: "3 · Engineering controls", color: STEEL, ex: "Guard rails and light curtains at the press." },
    { name: "4 · Administrative controls", color: STEEL_LT, ex: "Rotation schedules, permits, floor markings." },
    { name: "5 · PPE — last line of defense", color: RED, ex: "Gloves, goggles, hearing protection — worn, not stored." },
  ];
  const cx = 4.35, y0 = 1.65, lh = 0.86, gap = 0.12;
  const widths = [6.6, 5.9, 5.2, 4.5, 3.8];
  layers.forEach((L, i) => {
    const w = widths[i], x = cx - w / 2, y = y0 + i * (lh + gap);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h: lh, fill: { color: L.color }, rectRadius: 0.06 });
    txt(s, L.name, { x: x + 0.2, y, w: w - 0.4, h: lh, fontSize: 13, bold: true, color: WHITE, align: "center", valign: "middle" });
  });
  // effectiveness arrow
  const ax = 0.72;
  connLine(s, ax, y0 + 5 * (lh + gap) - gap, ax, y0, { color: NAVY, width: 2.25, arrow: true });
  txt(s, "MORE EFFECTIVE", { x: ax - 2.04, y: y0 + 1.0, w: 3.44, h: 0.26, fontSize: 9, bold: true, color: NAVY, align: "center", rotate: 270, charSpacing: 2 });
  txt(s, "LESS EFFECTIVE", { x: ax - 2.04, y: y0 + 3.5, w: 3.44, h: 0.26, fontSize: 9, bold: true, color: FAINT, align: "center", rotate: 270, charSpacing: 2 });
  // per-layer concrete examples
  txt(s, "WHAT IT LOOKS LIKE ON OUR FLOOR", { x: 8.15, y: 1.4, w: 4.6, h: 0.24, fontSize: 8.5, bold: true, color: RED, charSpacing: 2 });
  layers.forEach((L, i) => {
    const y = y0 + i * (lh + gap);
    s.addShape(pptx.shapes.RECTANGLE, { x: 8.15, y: y + 0.16, w: 0.16, h: 0.55, fill: { color: L.color } });
    txt(s, L.ex, { x: 8.45, y: y + 0.08, w: 4.35, h: 0.75, fontSize: 10.5, color: INK, valign: "middle" });
  });

  useWhen(s, "concrete measures stack in a logical order — rank them in layers so learners see priority, not just a flat list.", RED);
}

// ============================================================
// SLIDE 16 — 3.3 PHOTO SEQUENCE
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "3.3", "Photo Step Sequence", "Example — lockout / tagout: isolating the conveyor before maintenance", "03 · CONCRETE & VISUAL", RED);

  const steps = [
    { name: "Notify & shut down", def: "Announce the maintenance window, then stop the line from the main control panel." },
    { name: "Isolate the energy", def: "Turn the disconnect switch to OFF and release any stored pressure in the system." },
    { name: "Lock & tag", def: "Apply your personal lock and a signed, dated tag. One worker, one lock, one key." },
    { name: "Verify, then work", def: "Attempt a restart to prove isolation. Only a failed start clears you to begin.", caution: "The try-start must FAIL before any work begins." },
  ];
  const w = 2.92, gap = 0.185, x0 = 0.55, y0 = 1.62, h = 4.85;
  steps.forEach((st, i) => {
    const x = x0 + i * (w + gap);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: y0, w, h, fill: { color: CARD }, rectRadius: 0.07 });
    imgPlaceholder(s, x + 0.15, y0 + 0.15, w - 0.3, 2.15, "Photo of THIS step,\nour equipment", "camera-gray");
    // step number badge
    s.addShape(pptx.shapes.OVAL, { x: x + 0.28, y: y0 + 0.28, w: 0.52, h: 0.52, fill: { color: i === 3 ? RED : NAVY }, line: { color: WHITE, width: 2 } });
    txt(s, String(i + 1), { x: x + 0.28, y: y0 + 0.28, w: 0.52, h: 0.52, fontSize: 15, bold: true, color: WHITE, align: "center", valign: "middle" });
    txt(s, st.name, { x: x + 0.22, y: y0 + 2.45, w: w - 0.44, h: 0.35, fontSize: 13.5, bold: true, color: NAVY });
    txt(s, st.def, { x: x + 0.22, y: y0 + 2.82, w: w - 0.44, h: 1.15, fontSize: 10.5, color: INK });
    if (st.caution) {
      s.addText([
        { text: "CAUTION:  ", options: { bold: true, fontSize: 9.5, color: RED } },
        { text: st.caution, options: { fontSize: 9.5, color: RED, italic: true } },
      ], { x: x + 0.22, y: y0 + 4.0, w: w - 0.44, h: 0.7, fontFace: FONT, isTextBox: true, margin: 0 });
    }
    if (i < 3) {
      s.addShape(pptx.shapes.RIGHT_ARROW, { x: x + w - 0.05, y: y0 + 1.05, w: 0.3, h: 0.32, fill: { color: STEEL_LT } });
    }
  });

  useWhen(s, "a physical procedure must be performed exactly — one accurate photo per step, in strict order, with cautions attached to the step they protect.", RED);
}

// ============================================================
// SLIDE 17 — 3.4 CORRECT VS INCORRECT
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "3.4", "Correct vs Incorrect", "Example — workstation ergonomics: spot the difference before your back does", "03 · CONCRETE & VISUAL", RED);

  const halves = [
    {
      x: 0.55, color: NAVY, icon: "check-w", label: "CORRECT", chk: "check-navy",
      points: [
        "Screen at eye level, one arm's length away",
        "Elbows at 90°, wrists neutral on the desk",
        "Feet flat, lower back supported by the chair",
      ],
      cap: "Photo: the SAME desk, set up right",
    },
    {
      x: 6.83, color: RED, icon: "times-w", label: "INCORRECT", chk: "times-red",
      points: [
        "Laptop flat on the desk — neck bent for hours",
        "Wrists cocked upward on the keyboard edge",
        "Perched forward, feet hooked on chair legs",
      ],
      cap: "Photo: the habit we are un-teaching",
    },
  ];
  halves.forEach((hf) => {
    const w = 5.95, y = 1.62;
    iconCircle(s, hf.icon, hf.color, hf.x, y, 0.5, 0.5);
    txt(s, hf.label, { x: hf.x + 0.65, y, w: 3, h: 0.5, fontSize: 17, bold: true, color: hf.color, valign: "middle", charSpacing: 1 });
    imgPlaceholder(s, hf.x, y + 0.65, w, 2.5, hf.cap, "camera-gray");
    hf.points.forEach((p, j) => {
      const py = y + 3.35 + j * 0.52;
      s.addImage({ path: A(hf.chk), x: hf.x + 0.05, y: py + 0.04, w: 0.28, h: 0.28 });
      txt(s, p, { x: hf.x + 0.48, y: py, w: w - 0.55, h: 0.4, fontSize: 11.5, color: INK, valign: "middle" });
    });
  });
  // center divider
  connLine(s, 6.665, 1.7, 6.665, 6.55, { color: LINE, width: 1, dash: "dash" });

  useWhen(s, "learners must tell right from wrong at a glance — show both versions side by side and call out exactly what differs.", RED);
}

// ============================================================
// SLIDE 18 — CHOOSER + GUARDRAILS
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  txt(s, "QUICK REFERENCE", { x: 0.55, y: 0.32, w: 4, h: 0.28, fontSize: 11, bold: true, color: RED, charSpacing: 2 });
  txt(s, "Choosing fast: from content to template", { x: 0.55, y: 0.58, w: 10, h: 0.55, fontSize: 26, bold: true, color: NAVY });
  txt(s, "Diagnose the knowledge type first — then the template picks itself.", { x: 0.55, y: 1.12, w: 11.5, h: 0.3, fontSize: 11.5, color: GRAY });

  const rows = [
    ["How the parts of a system relate", "1.1  Concept map", NAVY],
    ["A sequence with stages and hand-offs", "1.2  Process map", NAVY],
    ["A judgment call with branches", "1.3  Flowchart", NAVY],
    ["Structure that nests, level by level", "1.4  Hierarchy", NAVY],
    ["New information learners must file in groups", "2.1  Category grid  ·  2.4  Breakdown", STEEL],
    ["Items sorted by two dimensions", "2.2  2×2 matrix", STEEL],
    ["Similar things learners confuse", "2.3  Comparison table", STEEL],
    ["The real thing, recognized or done exactly", "3.1 – 3.4  Image templates", RED],
  ];
  const tbl = [[
    { text: "IF THE CONTENT IS…", options: { bold: true, color: WHITE, fontSize: 10.5, fill: { color: NAVY }, valign: "middle" } },
    { text: "USE…", options: { bold: true, color: WHITE, fontSize: 10.5, fill: { color: NAVY }, valign: "middle" } },
  ]].concat(rows.map((r, i) => [
    { text: r[0], options: { color: INK, fontSize: 11, valign: "middle", fill: { color: i % 2 ? "FAFBFC" : WHITE } } },
    { text: r[1], options: { bold: true, color: r[2], fontSize: 11, valign: "middle", fill: { color: i % 2 ? "FAFBFC" : WHITE } } },
  ]));
  s.addTable(tbl, {
    x: 0.55, y: 1.62, w: 7.75,
    colW: [4.35, 3.4],
    rowH: [0.42].concat(rows.map(() => 0.56)),
    border: { type: "solid", color: LINE, pt: 1 },
    fontFace: FONT,
    margin: [0.04, 0.12, 0.04, 0.12],
    autoPage: false,
  });

  // guardrails card
  const gx = 8.7, gy = 1.62, gw = 4.08, gh = 4.95;
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: gx, y: gy, w: gw, h: gh, fill: { color: CARD }, rectRadius: 0.07 });
  iconCircle(s, "compass-w", NAVY, gx + 0.28, gy + 0.28, 0.55, 0.5);
  txt(s, "Design guardrails", { x: gx + 0.98, y: gy + 0.3, w: gw - 1.2, h: 0.5, fontSize: 16, bold: true, color: NAVY, valign: "middle" });
  const rails = [
    "One idea per slide — the layout carries the logic.",
    "3–5 chunks per group. Working memory is small; respect it.",
    "Accurate images only where accuracy matters. Diagrams everywhere else.",
    "Same palette, type, and spacing on every slide — novelty taxes attention.",
    "Catch attention with structure and contrast, never with decoration that competes with meaning.",
  ];
  s.addText(rails.map((t, j) => ({
    text: t, options: { bullet: { code: "2022", indent: 12 }, color: INK, fontSize: 11, breakLine: j < rails.length - 1, paraSpaceAfter: 12 },
  })), { x: gx + 0.32, y: gy + 1.05, w: gw - 0.62, h: 3.7, fontFace: FONT, isTextBox: true, margin: 0, valign: "top" });

  txt(s, "Built on instructional content-type research (Clark, Developing Technical Training; Graphics for Learning) and cognitive load principles.", { x: 0.55, y: 6.95, w: 12.23, h: 0.3, fontSize: 9, italic: true, color: FAINT });
}

// ---------- write ----------
const out = path.join(__dirname, "Training-Slide-Template-Bank.pptx");
pptx.writeFile({ fileName: out }).then(() => console.log("wrote", out));
