/* Category 01 deep dive — Logical & Structural Template Bank
 * 15 layouts in 3 families:
 *   A Flow & Sequence: process map, flowchart, swimlane, cycle, timeline, funnel
 *   B Structure & Levels: hierarchy, pyramid, staircase, nested layers
 *   C Relationships & Systems: concept map, hub & spoke, IPO, fishbone, gap bridge
 */
const pptxgen = require("pptxgenjs");
const path = require("path");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
pptx.author = "L&D Template Bank";
pptx.title = "Logical & Structural Template Bank";

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

// family accents
const FAM = {
  A: { color: NAVY, label: "A · FLOW & SEQUENCE" },
  B: { color: STEEL, label: "B · STRUCTURE & LEVELS" },
  C: { color: RED, label: "C · RELATIONSHIPS & SYSTEMS" },
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
  txt(s, "CATEGORY 01  ·  DEEP DIVE", { x: 0.9, y: 1.25, w: 11.53, h: 0.32, fontSize: 12, bold: true, color: STEEL_LT, align: "center", charSpacing: 4 });
  txt(s, "Logical & Structural\nTemplate Bank", { x: 0.9, y: 1.7, w: 11.53, h: 1.7, fontSize: 40, bold: true, color: WHITE, align: "center" });
  txt(s, "Fifteen layouts for knowledge that flows, nests, and connects — every structural shape a trainer needs", { x: 2.0, y: 3.5, w: 9.33, h: 0.6, fontSize: 15, color: "C9D4E6", align: "center" });

  const chips = [
    ["route-w", "A · Flow & Sequence", "Process · Flowchart · Swimlane · Cycle · Timeline · Funnel", NAVY_MID],
    ["sitemap-w", "B · Structure & Levels", "Hierarchy · Pyramid · Staircase · Nested layers", STEEL],
    ["diagram-w", "C · Relationships & Systems", "Concept map · Hub & spoke · IPO · Fishbone · Gap bridge", RED],
  ];
  chips.forEach((c, i) => {
    const x = 0.9 + i * 3.98;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: 4.55, w: 3.75, h: 1.5, fill: { color: WHITE, transparency: 90 }, rectRadius: 0.08 });
    iconCircle(s, c[0], c[3], x + 0.28, 4.85, 0.62, 0.52);
    txt(s, c[1], { x: x + 1.02, y: 4.82, w: 2.68, h: 0.35, fontSize: 13, bold: true, color: WHITE });
    txt(s, c[2], { x: x + 1.02, y: 5.18, w: 2.68, h: 0.7, fontSize: 9.5, color: "BFCCE0" });
  });
  txt(s, "Use when the structure IS the content — how things connect, in what order, and what depends on what", { x: 0.9, y: 6.6, w: 11.53, h: 0.3, fontSize: 11, color: "8FA3BC", align: "center" });
}

// ============================================================
// SLIDE 2 — FAMILY MAP
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  txt(s, "THE MAP", { x: 0.55, y: 0.32, w: 4, h: 0.28, fontSize: 11, bold: true, color: RED, charSpacing: 2 });
  txt(s, "Say your content out loud — the verb picks the family", { x: 0.55, y: 0.58, w: 11.5, h: 0.55, fontSize: 26, bold: true, color: NAVY });
  txt(s, "Structural knowledge always does one of three things: it moves, it nests, or it connects.", { x: 0.55, y: 1.12, w: 11.5, h: 0.3, fontSize: 11.5, color: GRAY });

  const cards = [
    {
      key: "A", icon: "route-w", name: "Flow & Sequence", verb: "“It moves.”",
      def: "Content unfolds in order — steps, decisions, loops, phases, narrowing stages.",
      ask: "Does it happen over time, or in a fixed order?",
      tools: "Process map · Flowchart · Swimlane · Cycle · Timeline · Funnel", count: "6 templates",
    },
    {
      key: "B", icon: "sitemap-w", name: "Structure & Levels", verb: "“It nests.”",
      def: "Content stacks or contains — hierarchies, levels that build, cores wrapped in context.",
      ask: "Does one thing sit inside, above, or on top of another?",
      tools: "Hierarchy · Pyramid · Staircase · Nested layers", count: "4 templates",
    },
    {
      key: "C", icon: "diagram-w", name: "Relationships & Systems", verb: "“It connects.”",
      def: "Content is a web — parts influence each other, causes pile up, systems feed back.",
      ask: "Would arrows between the parts carry real meaning?",
      tools: "Concept map · Hub & spoke · Input–Process–Output · Fishbone · Gap bridge", count: "5 templates",
    },
  ];
  cards.forEach((c, i) => {
    const f = FAM[c.key];
    const x = 0.55 + i * 4.18, y = 1.62, w = 3.98, h = 4.9;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: CARD }, rectRadius: 0.07 });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 1.0, fill: { color: f.color }, rectRadius: 0.07 });
    s.addShape(pptx.shapes.RECTANGLE, { x, y: y + 0.5, w, h: 0.5, fill: { color: f.color } });
    iconCircle(s, c.icon, c.key === "A" ? NAVY_MID : (c.key === "B" ? "6E87A8" : "AF5252"), x + 0.25, y + 0.19, 0.62, 0.52);
    txt(s, "FAMILY " + c.key + "  ·  " + c.count.toUpperCase(), { x: x + 1.02, y: y + 0.18, w: w - 1.2, h: 0.25, fontSize: 9, bold: true, color: "D8E0EC", charSpacing: 1 });
    txt(s, c.name, { x: x + 1.02, y: y + 0.42, w: w - 1.2, h: 0.4, fontSize: 15.5, bold: true, color: WHITE });
    txt(s, c.verb, { x: x + 0.28, y: y + 1.2, w: w - 0.56, h: 0.4, fontSize: 15, bold: true, italic: true, color: f.color });
    txt(s, c.def, { x: x + 0.28, y: y + 1.66, w: w - 0.56, h: 0.95, fontSize: 11, color: INK });
    s.addText([
      { text: "ASK YOURSELF:  ", options: { bold: true, fontSize: 9, color: f.color } },
      { text: c.ask, options: { fontSize: 10.5, color: INK, italic: true } },
    ], { x: x + 0.28, y: y + 2.68, w: w - 0.56, h: 0.75, fontFace: FONT, isTextBox: true, margin: 0 });
    txt(s, "IN THIS FAMILY", { x: x + 0.28, y: y + 3.5, w: w - 0.56, h: 0.24, fontSize: 9, bold: true, color: f.color, charSpacing: 2 });
    txt(s, c.tools, { x: x + 0.28, y: y + 3.78, w: w - 0.56, h: 0.95, fontSize: 10.5, color: GRAY });
  });
  txt(s, "When two families both fit, pick the one whose shape the learner must remember on the job.", { x: 0.55, y: 6.85, w: 12.23, h: 0.32, fontSize: 11.5, italic: true, color: GRAY, align: "center" });
}

// ============================================================
// DIVIDER helper (rows of tiles)
// ============================================================
function divider(famKey, shade, name, blurb, tiles) {
  const f = FAM[famKey];
  const s = pptx.addSlide();
  s.background = { color: f.color };
  txt(s, famKey, { x: 0.6, y: 0.55, w: 3.4, h: 2.2, fontSize: 130, bold: true, color: shade });
  txt(s, "FAMILY " + famKey, { x: 4.0, y: 0.95, w: 7.5, h: 0.32, fontSize: 12, bold: true, color: "E3E8F0", charSpacing: 4 });
  txt(s, name, { x: 4.0, y: 1.32, w: 9.0, h: 0.75, fontSize: 36, bold: true, color: WHITE });
  txt(s, blurb, { x: 4.0, y: 2.15, w: 8.6, h: 0.85, fontSize: 13.5, color: "DCE3EE" });

  // chunk tiles into rows (3 per row; 4 tiles => 2+2)
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
// SLIDE 3 — DIVIDER A
// ============================================================
divider("A", "44598C", "Flow & Sequence",
  "Content that moves — through steps, decisions, roles, loops, calendars, and narrowing stages. Direction is the message: never let the eye wonder where to go next.",
  [
    ["route-w", "A1", "Process Map", "Stages in order, with owners and outputs."],
    ["branch-w", "A2", "Flowchart", "Decisions and branches, every path visible."],
    ["stream-w", "A3", "Swimlane Map", "Steps laid across roles — hand-offs exposed."],
    ["sync-w", "A4", "Cycle Loop", "A sequence that repeats and improves."],
    ["flag-w", "A5", "Timeline Roadmap", "Phases anchored to real dates."],
    ["filter-w", "A6", "Funnel", "A population narrowing stage by stage."],
  ]);

// ============================================================
// SLIDE 4 — A1 PROCESS MAP (ADDIE)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "A1", "Process Map", "Example — how a course gets made: the ADDIE production line", "A");

  const stages = [
    { name: "Analyze", tag: "Who needs what?", color: NAVY, items: ["Performance gap & root cause", "Learner profile & context", "Success measures agreed"] },
    { name: "Design", tag: "The blueprint", color: NAVY_MID, items: ["Objectives — do, not know", "Practice & assessment first", "Outline signed off"] },
    { name: "Develop", tag: "Build & test", color: STEEL, items: ["Build activities & materials", "Pilot with real learners", "Fix what confused them"] },
    { name: "Implement", tag: "Deliver", color: STEEL_LT, items: ["Train the facilitators", "Schedule & communicate", "Support in the flow of work"] },
    { name: "Evaluate", tag: "Prove & improve", color: RED, items: ["Reaction & learning checks", "Behavior on the job", "Results the sponsor owns"] },
  ];
  const w = 2.6, gap = -0.12, x0 = 0.55, y0 = 2.15, h = 0.95;
  // iterate loop arrow above
  txt(s, "iterate — evaluation feeds the next analysis", { x: 4.55, y: 1.44, w: 4.2, h: 0.24, fontSize: 9, italic: true, color: FAINT, align: "center" });
  connLine(s, 11.9, 1.78, 1.9, 1.78, { color: STEEL_LT, width: 1.25, dash: "dash", arrow: true });
  connLine(s, 11.9, y0, 11.9, 1.78, { color: STEEL_LT, width: 1.25, dash: "dash" });
  connLine(s, 1.9, 1.78, 1.9, y0, { color: STEEL_LT, width: 1.25, dash: "dash" });

  stages.forEach((st, i) => {
    const x = x0 + i * (w + gap);
    s.addShape(pptx.shapes.CHEVRON, { x, y: y0, w, h, fill: { color: st.color } });
    txt(s, st.name, { x: x + 0.32, y: y0 + 0.12, w: w - 0.5, h: 0.42, fontSize: 14, bold: true, color: WHITE, align: "center" });
    txt(s, st.tag, { x: x + 0.32, y: y0 + 0.55, w: w - 0.5, h: 0.28, fontSize: 9, color: "E2E8F1", align: "center" });
  });
  stages.forEach((st, i) => {
    const cw2 = 2.42, x = x0 + i * (w + gap) + 0.03, y = 3.5, ch2 = 2.5;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w: cw2, h: ch2, fill: { color: CARD }, rectRadius: 0.06 });
    connLine(s, x + cw2 / 2, y0 + h, x + cw2 / 2, y, { color: LINE, width: 1 });
    s.addText(st.items.map((t, j) => ({
      text: t, options: { bullet: { code: "2022", indent: 9 }, color: INK, fontSize: 10.5, breakLine: j < st.items.length - 1, paraSpaceAfter: 7 },
    })), { x: x + 0.2, y: y + 0.22, w: cw2 - 0.38, h: 2.1, fontFace: FONT, isTextBox: true, margin: 0, valign: "top" });
  });
  caption(s, "Name each stage with a verb, give it one question to answer, and cap the detail at three bullets.", 6.35);
  useWhen(s, "work moves through named stages toward a deliverable — and the order itself is what learners must internalize.", NAVY);
  s.addNotes("Facilitation tip: walk the chevrons left to right once, then go back and ask 'what happens if we skip this stage?' — the failure stories teach the sequence better than the definitions.");
}

// ============================================================
// SLIDE 5 — A2 FLOWCHART (is training the answer?)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "A2", "Flowchart", "Example — “is training even the answer?”: the decision every request should face", "A");

  const RR = pptx.shapes.ROUNDED_RECTANGLE, DI = pptx.shapes.DIAMOND;
  const box = (x, y, w, h, fill, line, text, tcolor, shape, fs) => {
    s.addShape(shape || pptx.shapes.RECTANGLE, Object.assign({ x, y, w, h, fill: { color: fill } }, line ? { line: { color: line, width: 1.25 } } : {}, shape === RR ? { rectRadius: 0.14 } : {}));
    txt(s, text, { x: x + 0.08, y, w: w - 0.16, h, fontSize: fs || 10.5, bold: true, color: tcolor, align: "center", valign: "middle" });
  };

  box(0.55, 2.05, 1.85, 0.95, NAVY, null, "Performance gap\nidentified", WHITE, RR);
  box(2.95, 2.05, 2.05, 0.95, CARD, STEEL, "Find the root cause\n— observe, ask,\nmeasure", INK, null, 10);
  s.addShape(DI, { x: 5.5, y: 1.75, w: 2.35, h: 1.55, fill: { color: TINT_RED }, line: { color: RED, width: 1.25 } });
  txt(s, "Skill or\nknowledge gap?", { x: 5.75, y: 1.75, w: 1.85, h: 1.55, fontSize: 10.5, bold: true, color: RED, align: "center", valign: "middle" });
  s.addShape(DI, { x: 8.45, y: 1.75, w: 2.35, h: 1.55, fill: { color: TINT_RED }, line: { color: RED, width: 1.25 } });
  txt(s, "Used often &\nunder pressure?", { x: 8.7, y: 1.75, w: 1.85, h: 1.55, fontSize: 10.5, bold: true, color: RED, align: "center", valign: "middle" });
  box(11.25, 2.05, 1.7, 0.95, NAVY, null, "Build practice-\nbased training", WHITE, RR);
  box(5.65, 4.0, 2.05, 0.85, TINT_STEEL, STEEL, "Fix process, tools,\nor incentives", INK, RR);
  box(8.6, 4.0, 2.05, 0.85, TINT_STEEL, STEEL, "Ship a job aid at the\nmoment of need", INK, RR);

  const AC = "8792A5";
  connLine(s, 2.4, 2.525, 2.95, 2.525, { color: AC, arrow: true });
  connLine(s, 5.0, 2.525, 5.5, 2.525, { color: AC, arrow: true });
  connLine(s, 7.85, 2.525, 8.45, 2.525, { color: AC, arrow: true });
  connLine(s, 10.8, 2.525, 11.25, 2.525, { color: AC, arrow: true });
  connLine(s, 6.675, 3.3, 6.675, 4.0, { color: AC, arrow: true });
  connLine(s, 9.625, 3.3, 9.625, 4.0, { color: AC, arrow: true });
  const yn = (x, y, t, c) => txt(s, t, { x, y, w: 0.5, h: 0.22, fontSize: 9, bold: true, color: c, align: "center", fill: { color: WHITE } });
  yn(8.0, 2.3, "YES", STEEL);
  yn(10.85, 2.3, "YES", STEEL);
  yn(6.75, 3.5, "NO", RED);
  yn(9.7, 3.5, "NO", RED);

  // synthesis row
  const rules = [
    { tag: "TRAIN", color: NAVY, text: "Frequent, high-stakes, and must be fluent — build it, practice it, coach it." },
    { tag: "JOB AID", color: STEEL, text: "Rare or reference-able — a checklist at the moment of need beats a course." },
    { tag: "FIX THE SYSTEM", color: RED, text: "Cause is process, tools, or motivation — no amount of training closes it." },
  ];
  rules.forEach((r, i) => {
    const x = 0.55 + i * 4.18, y = 5.35, w = 3.98, h = 1.15;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: CARD }, rectRadius: 0.07 });
    txt(s, r.tag, { x: x + 0.24, y: y + 0.14, w: w - 0.48, h: 0.26, fontSize: 10, bold: true, color: r.color, charSpacing: 2 });
    txt(s, r.text, { x: x + 0.24, y: y + 0.42, w: w - 0.48, h: 0.65, fontSize: 10, color: INK });
  });
  useWhen(s, "the right action depends on a chain of judgments — walk every branch, because learners will meet every branch.", NAVY);
  s.addNotes("This is the performance-consulting triage. Run real requests from your intake queue through the chart live — the audience should disagree at the diamonds; that argument is the learning.");
}

// ============================================================
// SLIDE 6 — A3 SWIMLANE
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "A3", "Swimlane Map", "Example — a training request, from ask to launch, across three roles", "A");

  const lanes = [
    { name: "Requester", color: NAVY, fill: CARD },
    { name: "L&D Partner", color: STEEL, fill: "EAEEF4" },
    { name: "Design Team", color: RED, fill: CARD },
  ];
  const lx = 2.0, lw = 10.78, ly0 = 1.6, lh = 1.62, lgap = 0.08;
  lanes.forEach((L, i) => {
    const y = ly0 + i * (lh + lgap);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.55, y, w: 1.35, h: lh, fill: { color: L.color }, rectRadius: 0.06 });
    txt(s, L.name, { x: 0.6, y, w: 1.25, h: lh, fontSize: 11.5, bold: true, color: WHITE, align: "center", valign: "middle" });
    s.addShape(pptx.shapes.RECTANGLE, { x: lx, y, w: lw, h: lh, fill: { color: L.fill } });
  });

  const steps = [
    { lane: 0, x: 2.3, name: "Submit request", sub: "problem, not solution" },
    { lane: 1, x: 4.05, name: "Intake & triage", sub: "training? job aid? fix?" },
    { lane: 1, x: 5.8, name: "Needs analysis", sub: "observe real work" },
    { lane: 0, x: 7.55, name: "Approve scope", sub: "success measures" },
    { lane: 2, x: 9.3, name: "Build & pilot", sub: "test with 5 learners" },
    { lane: 1, x: 11.05, name: "Launch & measure", sub: "30-day check-in" },
  ];
  const sw = 1.7, sh = 0.95;
  const stepY = (st) => ly0 + st.lane * (lh + lgap) + (lh - sh) / 2;
  // arrows first
  for (let i = 0; i < steps.length - 1; i++) {
    const a = steps[i], b = steps[i + 1];
    connLine(s, a.x + sw, stepY(a) + sh / 2, b.x, stepY(b) + sh / 2, { color: "8792A5", width: 1.5, arrow: true });
  }
  steps.forEach((st, i) => {
    const y = stepY(st);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: st.x, y, w: sw, h: sh, fill: { color: WHITE }, line: { color: lanes[st.lane].color, width: 1.25 }, rectRadius: 0.08 });
    s.addShape(pptx.shapes.OVAL, { x: st.x - 0.14, y: y - 0.14, w: 0.34, h: 0.34, fill: { color: lanes[st.lane].color } });
    txt(s, String(i + 1), { x: st.x - 0.14, y: y - 0.14, w: 0.34, h: 0.34, fontSize: 10.5, bold: true, color: WHITE, align: "center", valign: "middle" });
    txt(s, st.name, { x: st.x + 0.08, y: y + 0.14, w: sw - 0.16, h: 0.32, fontSize: 10, bold: true, color: NAVY, align: "center" });
    txt(s, st.sub, { x: st.x + 0.08, y: y + 0.46, w: sw - 0.16, h: 0.4, fontSize: 8.5, italic: true, color: GRAY, align: "center" });
  });
  caption(s, "Every lane crossing is a hand-off — and every hand-off is where requests stall. Make each one explicit.", 6.72);
  useWhen(s, "a process crosses roles or teams — learners must see who owns each step and where the work changes hands.", NAVY);
  s.addNotes("Ask the room: 'where does this actually get stuck for us?' Then mark those crossings in red. The template becomes a diagnosis tool, not just a description.");
}

// ============================================================
// SLIDE 7 — A4 CYCLE LOOP (Kolb)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "A4", "Cycle Loop", "Example — Kolb's experiential learning cycle: how adults actually learn", "A");

  const nodes = [
    { x: 5.2, y: 1.55, name: "Concrete Experience", sub: "Do the real task — a call, a draft, a rep.", color: NAVY },
    { x: 9.35, y: 3.3, name: "Reflective Observation", sub: "What happened? What surprised us?", color: NAVY_MID },
    { x: 5.2, y: 5.3, name: "Abstract Conceptualization", sub: "Name the principle behind it.", color: STEEL },
    { x: 1.05, y: 3.3, name: "Active Experimentation", sub: "Try again with the new approach.", color: RED },
  ];
  const nw = 2.95, nh = 1.15;
  // arrows around the loop
  connLine(s, 8.15, 2.35, 9.9, 3.3, { color: "8792A5", width: 1.75, arrow: true });
  connLine(s, 10.8, 4.45, 8.15, 5.7, { color: "8792A5", width: 1.75, arrow: true });
  connLine(s, 5.2, 5.7, 2.55, 4.45, { color: "8792A5", width: 1.75, arrow: true });
  connLine(s, 3.45, 3.3, 5.2, 2.35, { color: "8792A5", width: 1.75, arrow: true });
  // center
  iconCircle(s, "sync-w", NAVY, 5.99, 3.32, 1.35, 0.48);
  txt(s, "the loop never stops", { x: 5.24, y: 4.75, w: 2.85, h: 0.26, fontSize: 9, italic: true, color: FAINT, align: "center" });

  nodes.forEach((n, i) => {
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: n.x, y: n.y, w: nw, h: nh, fill: { color: CARD }, line: { color: n.color, width: 1.25 }, rectRadius: 0.09 });
    s.addShape(pptx.shapes.OVAL, { x: n.x - 0.16, y: n.y - 0.16, w: 0.4, h: 0.4, fill: { color: n.color } });
    txt(s, String(i + 1), { x: n.x - 0.16, y: n.y - 0.16, w: 0.4, h: 0.4, fontSize: 12, bold: true, color: WHITE, align: "center", valign: "middle" });
    txt(s, n.name, { x: n.x + 0.15, y: n.y + 0.16, w: nw - 0.3, h: 0.35, fontSize: 12.5, bold: true, color: NAVY, align: "center" });
    txt(s, n.sub, { x: n.x + 0.15, y: n.y + 0.54, w: nw - 0.3, h: 0.5, fontSize: 9.5, italic: true, color: GRAY, align: "center" });
  });
  useWhen(s, "a sequence repeats and improves each pass — close the loop visually, or learners will treat it as a one-way checklist.", NAVY);
  s.addNotes("Map any exercise you run onto the four beats. If your session is all beat 3 (theory), the diagram indicts itself — a useful moment of honesty in a train-the-trainer.");
}

// ============================================================
// SLIDE 8 — A5 TIMELINE ROADMAP
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "A5", "Timeline Roadmap", "Example — rolling out the leadership program across four quarters", "A");

  const ly = 4.15;
  connLine(s, 0.7, ly, 12.75, ly, { color: NAVY, width: 2.25, arrow: true });
  txt(s, "Kickoff", { x: 0.62, y: ly + 0.12, w: 1.0, h: 0.24, fontSize: 9, bold: true, color: FAINT });
  txt(s, "Business as usual", { x: 11.15, y: ly + 0.12, w: 1.6, h: 0.24, fontSize: 9, bold: true, color: FAINT, align: "right" });

  const phases = [
    { dot: 2.3, above: true, q: "Q1", name: "Pilot", color: NAVY, items: ["20 leaders, 2 regions", "Weekly feedback loop"] },
    { dot: 5.0, above: false, q: "Q2", name: "Cohort One", color: NAVY_MID, items: ["60 leaders enrolled", "Managers briefed on their part"] },
    { dot: 7.7, above: true, q: "Q3", name: "Scale", color: STEEL, items: ["All regions live", "Train-the-trainer certified"] },
    { dot: 10.4, above: false, q: "Q4", name: "Embed", color: RED, items: ["Built into onboarding", "Alumni community launched"] },
  ];
  phases.forEach((p) => {
    const cw = 2.7, ch = 1.85, x = p.dot - cw / 2;
    const y = p.above ? ly - 0.35 - ch : ly + 0.5;
    connLine(s, p.dot, p.above ? y + ch : ly, p.dot, p.above ? ly : y, { color: LINE, width: 1.25 });
    s.addShape(pptx.shapes.OVAL, { x: p.dot - 0.12, y: ly - 0.12, w: 0.24, h: 0.24, fill: { color: p.color }, line: { color: WHITE, width: 2 } });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w: cw, h: ch, fill: { color: CARD }, rectRadius: 0.07 });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: x + 0.2, y: y + 0.18, w: 0.62, h: 0.34, fill: { color: p.color }, rectRadius: 0.1 });
    txt(s, p.q, { x: x + 0.2, y: y + 0.18, w: 0.62, h: 0.34, fontSize: 10.5, bold: true, color: WHITE, align: "center", valign: "middle" });
    txt(s, p.name, { x: x + 0.95, y: y + 0.17, w: cw - 1.1, h: 0.36, fontSize: 14, bold: true, color: NAVY, valign: "middle" });
    s.addText(p.items.map((t, j) => ({
      text: t, options: { bullet: { code: "2022", indent: 9 }, color: INK, fontSize: 10, breakLine: j < p.items.length - 1, paraSpaceAfter: 5 },
    })), { x: x + 0.24, y: y + 0.68, w: cw - 0.44, h: 1.05, fontFace: FONT, isTextBox: true, margin: 0, valign: "top" });
  });
  caption(s, "Alternate cards above and below the line — the zigzag keeps four phases from becoming a wall.", 6.68);
  useWhen(s, "stages are anchored to real dates and audiences need to locate 'now' — a roadmap earns trust that a bare list cannot.", NAVY);
  s.addNotes("Add a 'you are here' marker when presenting mid-rollout — the same slide then works in every steering meeting for a year.");
}

// ============================================================
// SLIDE 9 — A6 FUNNEL
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "A6", "Funnel", "Example — from hearing about the new CRM to championing it", "A");

  const layers = [
    { name: "1 · Aware", color: NAVY, pct: "100%", note: "know the change is coming" },
    { name: "2 · Understand", color: NAVY_MID, pct: "70%", note: "can say what changes for them" },
    { name: "3 · Try", color: STEEL, pct: "45%", note: "have used it on real work" },
    { name: "4 · Adopt", color: STEEL_LT, pct: "30%", note: "use it as their default" },
    { name: "5 · Champion", color: RED, pct: "12%", note: "teach it and defend it" },
  ];
  const cx = 4.05, y0 = 1.6, lh = 0.94, gap = 0.08;
  const widths = [6.9, 5.75, 4.6, 3.45, 2.3];
  layers.forEach((L, i) => {
    const w = widths[i], x = cx - w / 2, y = y0 + i * (lh + gap);
    s.addShape(pptx.shapes.TRAPEZOID, { x, y, w, h: lh, fill: { color: L.color }, flipV: true });
    txt(s, L.name, { x: x + 0.3, y, w: w - 0.6, h: lh, fontSize: 12.5, bold: true, color: WHITE, align: "center", valign: "middle" });
  });
  txt(s, "WHERE PEOPLE STAND TODAY", { x: 8.2, y: 1.35, w: 4.6, h: 0.24, fontSize: 8.5, bold: true, color: NAVY, charSpacing: 2 });
  layers.forEach((L, i) => {
    const y = y0 + i * (lh + gap);
    txt(s, L.pct, { x: 8.2, y: y + 0.08, w: 1.15, h: 0.78, fontSize: 20, bold: true, color: L.color, valign: "middle" });
    txt(s, L.note, { x: 9.45, y: y + 0.08, w: 3.35, h: 0.78, fontSize: 10.5, color: INK, valign: "middle" });
  });
  caption(s, "Each gap between stages is a specific leak — design one intervention per leak, not one big announcement.", 6.68);
  useWhen(s, "a population narrows stage by stage — the funnel shows where people drop off and where your effort should go.", NAVY);
  s.addNotes("Put real numbers in the right column before presenting. A funnel with placeholder percentages persuades no one; a funnel with your survey data sets the agenda.");
}

// ============================================================
// SLIDE 10 — DIVIDER B
// ============================================================
divider("B", "7E94B0", "Structure & Levels",
  "Content that nests and builds — what contains what, what rests on what, and what surrounds what. Position on the slide carries the meaning: higher, deeper, further along.",
  [
    ["sitemap-w", "B1", "Hierarchy", "What belongs inside what, level by level."],
    ["mountain-w", "B2", "Pyramid", "Levels that build toward a peak."],
    ["stairs-w", "B3", "Staircase", "Growth through recognizable stages."],
    ["circles-w", "B4", "Nested Layers", "A core wrapped in rings of context."],
  ]);

// ============================================================
// SLIDE 11 — B1 HIERARCHY
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "B1", "Hierarchy", "Example — a competency framework: from ambition to observable behavior", "B");

  txt(s, "FRAMEWORK", { x: 0.5, y: 1.9, w: 1.1, h: 0.24, fontSize: 8.5, bold: true, color: FAINT, charSpacing: 2 });
  txt(s, "COMPETENCIES", { x: 0.5, y: 3.32, w: 1.7, h: 0.24, fontSize: 8.5, bold: true, color: FAINT, charSpacing: 1 });
  txt(s, "BEHAVIORS", { x: 0.5, y: 4.78, w: 1.1, h: 0.24, fontSize: 8.5, bold: true, color: FAINT, charSpacing: 2 });

  const tx = 5.29, ty = 1.62, tw = 2.75, th = 0.78;
  const l2 = [
    { x: 1.75, name: "Discover Needs", sub: "Understand before proposing" },
    { x: 5.37, name: "Deliver Solutions", sub: "Match, commit, follow through" },
    { x: 8.98, name: "Build Trust", sub: "Earn the next conversation" },
  ];
  const l2y = 3.1, l2w = 2.6, l2h = 0.78;
  l2.forEach((n) => connLine(s, tx + tw / 2, ty + th, n.x + l2w / 2, l2y, { color: "AEB7C6", width: 1.5 }));
  l2.forEach((n) => connLine(s, n.x + l2w / 2, l2y + l2h, n.x + l2w / 2, 4.55, { color: "AEB7C6", width: 1.5 }));

  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: tx, y: ty, w: tw, h: th, fill: { color: STEEL }, rectRadius: 0.08 });
  txt(s, "Customer Excellence", { x: tx, y: ty + 0.09, w: tw, h: 0.38, fontSize: 14.5, bold: true, color: WHITE, align: "center" });
  txt(s, "what “good” means here", { x: tx, y: ty + 0.44, w: tw, h: 0.26, fontSize: 9, color: "E2E8F1", align: "center" });

  const mods = [
    ["Asks before pitching", "Maps the whole workflow", "Confirms the real problem"],
    ["Matches product to need", "Sets honest expectations", "Delivers on time, every time"],
    ["Owns mistakes fast", "Shares proactive updates", "Protects customer data"],
  ];
  l2.forEach((n, i) => {
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: n.x, y: l2y, w: l2w, h: l2h, fill: { color: NAVY }, rectRadius: 0.08 });
    txt(s, n.name, { x: n.x, y: l2y + 0.08, w: l2w, h: 0.36, fontSize: 13, bold: true, color: WHITE, align: "center" });
    txt(s, n.sub, { x: n.x, y: l2y + 0.44, w: l2w, h: 0.26, fontSize: 8.5, color: "C9D4E6", align: "center" });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: n.x, y: 4.55, w: l2w, h: 1.75, fill: { color: CARD }, line: { color: LINE, width: 1 }, rectRadius: 0.06 });
    s.addText(mods[i].map((t, j) => ({
      text: t, options: { bullet: { code: "2022", indent: 9 }, color: INK, fontSize: 10.5, breakLine: j < 2, paraSpaceAfter: 8 },
    })), { x: n.x + 0.22, y: 4.78, w: l2w - 0.4, h: 1.35, fontFace: FONT, isTextBox: true, margin: 0, valign: "top" });
  });
  caption(s, "The bottom row is the training content — behaviors you can observe, practice, and give feedback on.");
  useWhen(s, "content nests level by level — and learners must trace any behavior back up to the ambition it serves.", STEEL);
  s.addNotes("Test each leaf node: could two observers agree whether it happened? If not, it's not yet a behavior — it's still a value.");
}

// ============================================================
// SLIDE 12 — B2 PYRAMID (Kirkpatrick)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "B2", "Pyramid", "Example — Kirkpatrick's four levels: what training evaluation builds toward", "B");

  const layers = [ // bottom-up in meaning; drawn top-down
    { name: "Level 4 · Results", color: RED, who: "Sponsors", how: "KPIs the sponsor already owns — sales, safety, retention", fs: 10.5 },
    { name: "Level 3 · Behavior", color: STEEL, who: "Managers", how: "On-the-job observation, 60–90 days after the session", fs: 12 },
    { name: "Level 2 · Learning", color: NAVY_MID, who: "Facilitators", how: "Skill checks and scenario assessments at the end", fs: 12.5 },
    { name: "Level 1 · Reaction", color: NAVY, who: "Learners", how: "Post-session pulse — relevance matters more than fun", fs: 12.5 },
  ];
  const cx = 4.15, y0 = 1.7, lh = 1.0, gap = 0.1;
  const widths = [2.35, 3.9, 5.45, 7.0];
  layers.forEach((L, i) => {
    const w = widths[i], x = cx - w / 2, y = y0 + i * (lh + gap);
    s.addShape(pptx.shapes.TRAPEZOID, { x, y, w, h: lh, fill: { color: L.color } });
    txt(s, L.name, { x: x + 0.15, y, w: w - 0.3, h: lh, fontSize: L.fs, bold: true, color: WHITE, align: "center", valign: "middle" });
  });
  txt(s, "WHO ANSWERS FOR IT — AND HOW WE MEASURE IT", { x: 8.3, y: 1.38, w: 4.5, h: 0.24, fontSize: 8.5, bold: true, color: STEEL, charSpacing: 1 });
  layers.forEach((L, i) => {
    const y = y0 + i * (lh + gap);
    s.addShape(pptx.shapes.RECTANGLE, { x: 8.3, y: y + 0.2, w: 0.16, h: 0.6, fill: { color: L.color } });
    s.addText([
      { text: L.who.toUpperCase() + " — ", options: { bold: true, fontSize: 10, color: L.color } },
      { text: L.how, options: { fontSize: 10.5, color: INK } },
    ], { x: 8.6, y: y + 0.1, w: 4.2, h: 0.8, fontFace: FONT, isTextBox: true, margin: 0, valign: "middle" });
  });
  caption(s, "Design top-down, deliver bottom-up: start every project by asking what Level 4 result the sponsor wants.", 6.5);
  useWhen(s, "levels build on each other toward a peak — the pyramid states what is foundation and what is the actual point.", STEEL);
  s.addNotes("Most L&D teams measure only levels 1–2 because they're easy. Showing the pyramid makes the gap visible without blaming anyone.");
}

// ============================================================
// SLIDE 13 — B3 STAIRCASE (Dreyfus)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "B3", "Staircase", "Example — the five stages of skill, from first day to master coach", "B");

  const steps = [
    { name: "Novice", color: NAVY, desc: "Follows the script; needs rules and close support." },
    { name: "Advanced Beginner", color: NAVY_MID, desc: "Recognizes situations; still leans on guidelines." },
    { name: "Competent", color: STEEL, desc: "Plans own approach; owns the outcome." },
    { name: "Proficient", color: STEEL_LT, desc: "Reads context; adapts without thinking twice." },
    { name: "Expert", color: RED, desc: "Intuitive; coaches others and improves the system." },
  ];
  const x0 = 0.7, w = 2.34, gap = 0.1, base = 6.4;
  steps.forEach((st, i) => {
    const h = 1.2 + i * 0.92, x = x0 + i * (w + gap), y = base - h;
    s.addShape(pptx.shapes.RECTANGLE, { x, y, w, h, fill: { color: st.color } });
    s.addShape(pptx.shapes.OVAL, { x: x + 0.18, y: y + 0.16, w: 0.36, h: 0.36, fill: { color: WHITE, transparency: 25 } });
    txt(s, String(i + 1), { x: x + 0.18, y: y + 0.16, w: 0.36, h: 0.36, fontSize: 12, bold: true, color: st.color, align: "center", valign: "middle" });
    txt(s, st.name, { x: x + 0.64, y: y + 0.16, w: w - 0.78, h: 0.4, fontSize: 12, bold: true, color: WHITE, valign: "middle" });
    txt(s, st.desc, { x: x + 0.2, y: y + 0.62, w: w - 0.4, h: 0.75, fontSize: 9.5, color: "EDF1F6" });
  });
  connLine(s, x0, 6.52, 12.9, 6.52, { color: NAVY, width: 2, arrow: true });
  txt(s, "EXPERIENCE  +  DELIBERATE PRACTICE", { x: x0, y: 6.6, w: 12.2, h: 0.25, fontSize: 9, bold: true, color: GRAY, align: "center", charSpacing: 2 });
  useWhen(s, "capability grows through recognizable stages — name each step so learners can locate themselves and see the next climb.", STEEL);
  s.addNotes("Have learners self-place with a dot sticker (or poll). The spread across steps IS the needs analysis for your next program.");
}

// ============================================================
// SLIDE 14 — B4 NESTED LAYERS
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "B4", "Nested Layers", "Example — the rings around a learner that decide whether training sticks", "B");

  const cxc = 3.55, cyc = 4.15;
  const rings = [
    { r: 2.35, fill: "EAEFF5", label: "ORGANIZATION", lc: STEEL },
    { r: 1.85, fill: "CBD7E6", label: "TEAM", lc: NAVY_MID },
    { r: 1.35, fill: "9FB2C9", label: "MANAGER", lc: NAVY },
  ];
  rings.forEach((rg) => {
    s.addShape(pptx.shapes.OVAL, { x: cxc - rg.r, y: cyc - rg.r, w: rg.r * 2, h: rg.r * 2, fill: { color: rg.fill }, line: { color: WHITE, width: 1.5 } });
  });
  rings.forEach((rg) => {
    txt(s, rg.label, { x: cxc - 1.3, y: cyc - rg.r + 0.09, w: 2.6, h: 0.26, fontSize: 9, bold: true, color: rg.lc, align: "center", charSpacing: 2 });
  });
  s.addShape(pptx.shapes.OVAL, { x: cxc - 0.85, y: cyc - 0.85, w: 1.7, h: 1.7, fill: { color: NAVY } });
  txt(s, "THE\nLEARNER", { x: cxc - 0.85, y: cyc - 0.4, w: 1.7, h: 0.7, fontSize: 11, bold: true, color: WHITE, align: "center" });

  txt(s, "EVERY RING EITHER REINFORCES OR ERODES THE CHANGE", { x: 6.5, y: 1.75, w: 6.3, h: 0.26, fontSize: 8.5, bold: true, color: STEEL, charSpacing: 2 });
  const rows = [
    { color: NAVY, name: "The Learner", text: "Deliberate practice, reflection, asking for feedback." },
    { color: NAVY, name: "The Manager", text: "Sets expectations, coaches weekly, protects time to practice." },
    { color: NAVY_MID, name: "The Team", text: "Norms that make the new behavior safe to try — and normal." },
    { color: STEEL, name: "The Organization", text: "Systems, incentives, and tools that reward the change." },
  ];
  rows.forEach((r, i) => {
    const y = 2.15 + i * 1.12;
    s.addShape(pptx.shapes.RECTANGLE, { x: 6.5, y: y + 0.06, w: 0.16, h: 0.72, fill: { color: r.color } });
    txt(s, r.name, { x: 6.8, y, w: 5.9, h: 0.3, fontSize: 12.5, bold: true, color: NAVY });
    txt(s, r.text, { x: 6.8, y: y + 0.32, w: 5.9, h: 0.55, fontSize: 10.5, color: INK });
  });
  caption(s, "Training touches only the core — transfer is decided in the rings. Budget effort accordingly.", 6.72);
  useWhen(s, "context wraps a core in layers — show what surrounds the learner, because the outer rings decide if the inner change lasts.", STEEL);
  s.addNotes("A hard question for sponsors: 'which ring are you personally in, and what will you do differently?' The diagram makes the ask concrete.");
}

// ============================================================
// SLIDE 15 — DIVIDER C
// ============================================================
divider("C", "B56A6A", "Relationships & Systems",
  "Content that connects — webs of influence, causes that pile up, systems that feed back. The lines are the lesson: draw only relationships you are willing to explain.",
  [
    ["diagram-w", "C1", "Concept Map", "Ideas joined by labeled relationships."],
    ["share-w", "C2", "Hub & Spoke", "One center, many contributors."],
    ["cogs-w", "C3", "Input–Process–Output", "The whole system, with its feedback loop."],
    ["fish-w", "C4", "Fishbone", "Many causes behind one effect."],
    ["road-w", "C5", "Gap Bridge", "From today's state to the target state."],
  ]);

// ============================================================
// SLIDE 16 — C1 CONCEPT MAP (feedback)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "C1", "Concept Map", "Example — what makes feedback actually land, and how the parts interact", "C");

  const cx = 5.35, cy = 3.65, cw = 2.65, ch = 1.0;
  const nodes = [
    { x: 1.15, y: 1.85, label: "Psychological Safety", link: "opens the door" },
    { x: 9.55, y: 1.85, label: "Timeliness", link: "keeps it fresh" },
    { x: 0.7, y: 3.7, label: "Two-Way Dialogue", link: "turns it into learning" },
    { x: 10.0, y: 3.7, label: "Specificity", link: "makes it actionable" },
    { x: 1.15, y: 5.55, label: "Manager Skill", link: "is modeled by" },
    { x: 9.55, y: 5.55, label: "Follow-Up", link: "makes it stick" },
  ];
  const nw = 2.55, nh = 0.75;
  nodes.forEach((n) => {
    connLine(s, cx + cw / 2, cy + ch / 2, n.x + nw / 2, n.y + nh / 2, { color: "AEB7C6", width: 1.5 });
  });
  connLine(s, nodes[0].x + nw - 0.4, nodes[0].y + nh, nodes[2].x + 1.3, nodes[2].y, { color: STEEL_LT, width: 1.25, dash: "dash", arrow: true });
  const labels = [
    [4.35, 3.02], [8.35, 2.62], [4.4, 3.86], [9.0, 3.86], [3.45, 4.85], [8.35, 4.85],
  ];
  nodes.forEach((n, i) => {
    txt(s, n.link, { x: labels[i][0] - 0.9, y: labels[i][1] - 0.12, w: 1.8, h: 0.24, fontSize: 8.5, italic: true, color: GRAY, align: "center", fill: { color: WHITE } });
  });
  nodes.forEach((n) => {
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: n.x, y: n.y, w: nw, h: nh, fill: { color: CARD }, line: { color: RED, width: 1.25 }, rectRadius: 0.09 });
    txt(s, n.label, { x: n.x + 0.1, y: n.y, w: nw - 0.2, h: nh, fontSize: 12, bold: true, color: NAVY, align: "center", valign: "middle" });
  });
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: cx, y: cy, w: cw, h: ch, fill: { color: RED }, rectRadius: 0.09, shadow: { type: "outer", color: "9AA3B2", blur: 6, offset: 2, angle: 90, opacity: 0.35 } });
  txt(s, "Feedback\nThat Lands", { x: cx + 0.1, y: cy, w: cw - 0.2, h: ch, fontSize: 14.5, bold: true, color: WHITE, align: "center", valign: "middle" });
  txt(s, "Nodes = concepts   ·   labeled lines = relationships   ·   dashed = cross-link (safety enables dialogue)", { x: 3.3, y: 6.5, w: 6.8, h: 0.26, fontSize: 9, color: FAINT, align: "center" });
  useWhen(s, "learners need the big picture of how parts influence each other — every line must survive the question “why is this here?”", RED);
  s.addNotes("Build it live: start with the center and one node, then let the room propose links — and force them to label each one. Unlabeled lines are decoration.");
}

// ============================================================
// SLIDE 17 — C2 HUB & SPOKE
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "C2", "Hub & Spoke", "Example — the L&D ecosystem: who feeds the work, and what each spoke brings", "C");

  const hx = 6.665, hy = 4.15; // hub center
  const sats = [
    { x: 3.35, y: 2.78, icon: "book-w", color: NAVY, name: "Subject-Matter Experts", give: "the expertise worth teaching" },
    { x: 9.98, y: 2.78, icon: "users-w", color: NAVY_MID, name: "Managers", give: "practice time & reinforcement" },
    { x: 1.75, y: 4.15, icon: "handshake-w", color: STEEL, name: "HR Business Partners", give: "the capability agenda" },
    { x: 11.58, y: 4.15, icon: "laptop-w", color: STEEL, name: "IT & Platforms", give: "the delivery rails" },
    { x: 3.35, y: 5.72, icon: "rocket-w", color: NAVY_MID, name: "Vendors & Coaches", give: "specialist depth on demand" },
    { x: 9.98, y: 5.72, icon: "chart-w", color: RED, name: "The Business", give: "problems worth solving — and the verdict" },
  ];
  sats.forEach((t) => connLine(s, hx, hy, t.x, t.y, { color: "C3CBD7", width: 1.5 }));
  // hub
  s.addShape(pptx.shapes.OVAL, { x: hx - 1.05, y: hy - 1.05, w: 2.1, h: 2.1, fill: { color: RED }, shadow: { type: "outer", color: "9AA3B2", blur: 6, offset: 2, angle: 90, opacity: 0.35 } });
  txt(s, "L&D\nCORE TEAM", { x: hx - 1.05, y: hy - 0.42, w: 2.1, h: 0.7, fontSize: 13, bold: true, color: WHITE, align: "center" });
  txt(s, "orchestrates", { x: hx - 1.05, y: hy + 0.28, w: 2.1, h: 0.26, fontSize: 8.5, italic: true, color: "F0DADA", align: "center" });
  // satellites
  sats.forEach((t) => {
    iconCircle(s, t.icon, t.color, t.x - 0.42, t.y - 0.42, 0.84, 0.5);
    const below = t.y < hy; // labels away from hub
    const ly = below ? t.y - 1.12 : t.y + 0.5;
    txt(s, t.name, { x: t.x - 1.55, y: ly, w: 3.1, h: 0.3, fontSize: 11.5, bold: true, color: NAVY, align: "center" });
    txt(s, t.give, { x: t.x - 1.55, y: ly + (below ? 0.28 : 0.3), w: 3.1, h: 0.3, fontSize: 9, italic: true, color: GRAY, align: "center" });
  });
  useWhen(s, "one function coordinates many parties — show the whole ecosystem at a glance before detailing any single relationship.", RED);
  s.addNotes("Unlike a concept map, spokes here are unlabeled on purpose — each satellite instead states what it contributes. Ask 'which spoke is weakest for us?' to turn the map into a working session.");
}

// ============================================================
// SLIDE 18 — C3 INPUT–PROCESS–OUTPUT
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "C3", "Input – Process – Output", "Example — the course production system, including the loop most teams forget", "C");

  const cards = [
    {
      x: 0.7, color: NAVY, name: "INPUTS", sub: "what the system consumes",
      items: ["Business problem & target metrics", "SME knowledge & calendar time", "Learner context & constraints", "Budget and deadline"],
    },
    {
      x: 4.87, color: STEEL, name: "PROCESS", sub: "what transforms it",
      items: ["Analyze the gap & design practice", "Build, pilot, and fix confusion", "Deliver with trained facilitators", "Support in the flow of work"],
    },
    {
      x: 9.04, color: RED, name: "OUTPUTS", sub: "what comes out the other side",
      items: ["People capable on the job", "Course, practice sets, job aids", "Adoption & performance data", "A sponsor who saw the result"],
    },
  ];
  const cy2 = 1.7, cw2 = 3.6, ch2 = 3.15;
  cards.forEach((c, i) => {
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: c.x, y: cy2, w: cw2, h: ch2, fill: { color: CARD }, rectRadius: 0.07 });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: c.x, y: cy2, w: cw2, h: 0.72, fill: { color: c.color }, rectRadius: 0.07 });
    s.addShape(pptx.shapes.RECTANGLE, { x: c.x, y: cy2 + 0.36, w: cw2, h: 0.36, fill: { color: c.color } });
    txt(s, c.name, { x: c.x + 0.25, y: cy2 + 0.08, w: cw2 - 0.5, h: 0.34, fontSize: 14, bold: true, color: WHITE, charSpacing: 1 });
    txt(s, c.sub, { x: c.x + 0.25, y: cy2 + 0.4, w: cw2 - 0.5, h: 0.26, fontSize: 9, italic: true, color: "E2E8F1" });
    s.addText(c.items.map((t, j) => ({
      text: t, options: { bullet: { code: "2022", indent: 9 }, color: INK, fontSize: 10.5, breakLine: j < c.items.length - 1, paraSpaceAfter: 7 },
    })), { x: c.x + 0.28, y: cy2 + 0.95, w: cw2 - 0.52, h: 2.05, fontFace: FONT, isTextBox: true, margin: 0, valign: "top" });
    if (i < 2) {
      s.addShape(pptx.shapes.RIGHT_ARROW, { x: c.x + cw2 + 0.08, y: cy2 + 1.25, w: 0.42, h: 0.5, fill: { color: STEEL_LT } });
    }
  });
  // feedback loop
  connLine(s, 10.84, cy2 + ch2, 10.84, 5.6, { color: RED, width: 1.5, dash: "dash" });
  connLine(s, 10.84, 5.6, 2.5, 5.6, { color: RED, width: 1.5, dash: "dash" });
  connLine(s, 2.5, 5.6, 2.5, cy2 + ch2, { color: RED, width: 1.5, dash: "dash", arrow: true });
  txt(s, "the feedback loop — evaluation data becomes next cycle's input", { x: 3.9, y: 5.7, w: 5.5, h: 0.26, fontSize: 9.5, italic: true, bold: true, color: RED, align: "center" });
  caption(s, "A process map shows steps; a system map shows what feeds them — and what the output changes.", 6.45);
  useWhen(s, "learners must see the system, not just the steps — what goes in, what transforms it, and how output feeds back.", RED);
  s.addNotes("The dashed loop is the teaching point. Cover it up, ask 'what's missing?', then reveal — the room usually finds it, and owns it.");
}

// ============================================================
// SLIDE 19 — C4 FISHBONE
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "C4", "Fishbone", "Example — why did adoption stall? Four families of cause behind one effect", "C");

  const spineY = 4.2;
  // head
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 10.55, y: spineY - 0.55, w: 2.35, h: 1.1, fill: { color: RED }, rectRadius: 0.09 });
  txt(s, "Rollout adoption\nstalled at 40%", { x: 10.6, y: spineY - 0.55, w: 2.25, h: 1.1, fontSize: 12, bold: true, color: WHITE, align: "center", valign: "middle" });
  // spine
  connLine(s, 0.9, spineY, 10.55, spineY, { color: NAVY, width: 2.5, arrow: true });

  const bones = [
    { sx: 3.6, tip: [2.3, 2.15], label: "PEOPLE", color: NAVY, lx: 1.35, ly: 1.72, causes: ["No time carved out to learn", "Managers not using it themselves"], cx: 2.75, cy: 2.35 },
    { sx: 7.4, tip: [6.1, 2.15], label: "PROCESS", color: NAVY_MID, lx: 5.15, ly: 1.72, causes: ["Old workflow still allowed", "No feedback loop after go-live"], cx: 6.55, cy: 2.35 },
    { sx: 3.6, tip: [2.3, 6.25], label: "TOOLS", color: STEEL, lx: 1.35, ly: 6.32, causes: ["Single sign-on came late", "Slow performance on day one"], cx: 2.75, cy: 5.35 },
    { sx: 7.4, tip: [6.1, 6.25], label: "COMMS", color: RED, lx: 5.15, ly: 6.32, causes: ["One launch email, then silence", "Benefits never made personal"], cx: 6.55, cy: 5.35 },
  ];
  bones.forEach((b) => {
    connLine(s, b.sx, spineY, b.tip[0], b.tip[1], { color: "8792A5", width: 1.75 });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: b.lx, y: b.ly, w: 1.55, h: 0.42, fill: { color: b.color }, rectRadius: 0.1 });
    txt(s, b.label, { x: b.lx, y: b.ly, w: 1.55, h: 0.42, fontSize: 10.5, bold: true, color: WHITE, align: "center", valign: "middle", charSpacing: 1 });
    s.addText(b.causes.map((t, j) => ({
      text: t, options: { bullet: { code: "2013", indent: 9 }, color: INK, fontSize: 10, breakLine: j < b.causes.length - 1, paraSpaceAfter: 5 },
    })), { x: b.cx, y: b.cy, w: 2.75, h: 0.85, fontFace: FONT, isTextBox: true, margin: 0, valign: "top" });
  });
  caption(s, "Ask “why?” down each bone until you hit something you can actually change — then the fix list writes itself.", 6.72);
  useWhen(s, "one disappointing effect has many contributing causes — grouping them stops the room from arguing about a single villain.", RED);
  s.addNotes("Run it as a workshop: empty bones, sticky notes, ten minutes. The categories do the facilitation for you.");
}

// ============================================================
// SLIDE 20 — C5 GAP BRIDGE
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "C5", "Gap Bridge", "Example — closing the quoting-capability gap in one selling season", "C");

  // TODAY card
  const t = { x: 0.7, y: 1.95, w: 3.2, h: 3.7 };
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: t.x, y: t.y, w: t.w, h: t.h, fill: { color: TINT_RED }, rectRadius: 0.07 });
  txt(s, "TODAY", { x: t.x + 0.25, y: t.y + 0.2, w: t.w - 0.5, h: 0.35, fontSize: 15, bold: true, color: RED, charSpacing: 2 });
  s.addText([
    "Quotes take 3 days and 4 tools",
    "Every rep quotes differently",
    "Errors caught by the customer",
  ].map((x2, j) => ({ text: x2, options: { bullet: { code: "2022", indent: 9 }, color: INK, fontSize: 10.5, breakLine: j < 2, paraSpaceAfter: 8 } })),
    { x: t.x + 0.3, y: t.y + 0.75, w: t.w - 0.55, h: 1.6, fontFace: FONT, isTextBox: true, margin: 0, valign: "top" });
  txt(s, "“We win on product and lose on paperwork.”", { x: t.x + 0.25, y: t.y + 2.75, w: t.w - 0.5, h: 0.75, fontSize: 10, italic: true, color: GRAY });

  // TARGET card
  const g = { x: 9.45, y: 1.95, w: 3.2, h: 3.7 };
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: g.x, y: g.y, w: g.w, h: g.h, fill: { color: TINT_NAVY }, rectRadius: 0.07 });
  txt(s, "TARGET", { x: g.x + 0.25, y: g.y + 0.2, w: g.w - 0.5, h: 0.35, fontSize: 15, bold: true, color: NAVY, charSpacing: 2 });
  s.addText([
    "Quotes out in 2 hours",
    "One standard flow, one tool",
    "Errors caught before send",
  ].map((x2, j) => ({ text: x2, options: { bullet: { code: "2022", indent: 9 }, color: INK, fontSize: 10.5, breakLine: j < 2, paraSpaceAfter: 8 } })),
    { x: g.x + 0.3, y: g.y + 0.75, w: g.w - 0.55, h: 1.6, fontFace: FONT, isTextBox: true, margin: 0, valign: "top" });
  txt(s, "“The quote is the first proof we're easy to work with.”", { x: g.x + 0.25, y: g.y + 2.75, w: g.w - 0.5, h: 0.75, fontSize: 10, italic: true, color: GRAY });

  // bridge planks
  txt(s, "THE BRIDGE — 90 DAYS, THREE PLANKS, ALL REQUIRED", { x: 4.15, y: 2.0, w: 5.05, h: 0.26, fontSize: 8.5, bold: true, color: RED, align: "center", charSpacing: 1 });
  const planks = [
    { color: NAVY, text: "Process training + simulation practice" },
    { color: STEEL, text: "Manager-led deal reviews for 6 weeks" },
    { color: RED, text: "New quoting tool with built-in checks" },
  ];
  planks.forEach((p, i) => {
    const y = 2.4 + i * 0.92;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 4.15, y, w: 5.05, h: 0.72, fill: { color: p.color }, rectRadius: 0.09 });
    txt(s, p.text, { x: 4.3, y, w: 4.75, h: 0.72, fontSize: 11.5, bold: true, color: WHITE, align: "center", valign: "middle" });
    connLine(s, 3.9, y + 0.36, 4.15, y + 0.36, { color: "AEB7C6", width: 1.25 });
    connLine(s, 9.2, y + 0.36, 9.45, y + 0.36, { color: "AEB7C6", width: 1.25 });
  });
  connLine(s, 4.3, 5.5, 9.05, 5.5, { color: FAINT, width: 1.25, dash: "dash" });
  txt(s, "the gap — remove any plank and people fall back to the old way", { x: 4.15, y: 5.6, w: 5.05, h: 0.26, fontSize: 9, italic: true, color: FAINT, align: "center" });
  useWhen(s, "learners must move from a named current state to a named future state — show both ends honestly, and every plank in between.", RED);
  s.addNotes("The quotes at the bottom of each card are doing real work — they make the states felt, not just listed. Source them from actual interviews.");
}

// ============================================================
// SLIDE 21 — CHOOSER
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  txt(s, "QUICK REFERENCE", { x: 0.55, y: 0.32, w: 4, h: 0.28, fontSize: 11, bold: true, color: RED, charSpacing: 2 });
  txt(s, "Fifteen shapes of logic", { x: 0.55, y: 0.58, w: 10, h: 0.55, fontSize: 26, bold: true, color: NAVY });
  txt(s, "Say the sentence of your content out loud — the verb picks the template.", { x: 0.55, y: 1.12, w: 11.5, h: 0.3, fontSize: 11.5, color: GRAY });

  const cols = [
    {
      key: "A", title: "IT MOVES", sub: "Flow & Sequence",
      rows: [
        ["A1  Process map", "stages with owners and outputs"],
        ["A2  Flowchart", "decisions and branches"],
        ["A3  Swimlane", "hand-offs across roles"],
        ["A4  Cycle loop", "a sequence that repeats"],
        ["A5  Timeline", "phases on a real calendar"],
        ["A6  Funnel", "a population narrowing"],
      ],
    },
    {
      key: "B", title: "IT NESTS", sub: "Structure & Levels",
      rows: [
        ["B1  Hierarchy", "what belongs inside what"],
        ["B2  Pyramid", "levels toward a peak"],
        ["B3  Staircase", "growth through stages"],
        ["B4  Nested layers", "context around a core"],
      ],
    },
    {
      key: "C", title: "IT CONNECTS", sub: "Relationships & Systems",
      rows: [
        ["C1  Concept map", "labeled relationships"],
        ["C2  Hub & spoke", "one center, many parties"],
        ["C3  Input–Process–Output", "the whole system"],
        ["C4  Fishbone", "many causes, one effect"],
        ["C5  Gap bridge", "from today to target"],
      ],
    },
  ];
  cols.forEach((c, i) => {
    const f = FAM[c.key];
    const x = 0.55 + i * 4.18, y = 1.62, w = 3.98, h = 5.0;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: CARD }, rectRadius: 0.07 });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 0.78, fill: { color: f.color }, rectRadius: 0.07 });
    s.addShape(pptx.shapes.RECTANGLE, { x, y: y + 0.39, w, h: 0.39, fill: { color: f.color } });
    txt(s, "“" + c.title + "”", { x: x + 0.28, y: y + 0.1, w: w - 0.56, h: 0.36, fontSize: 15, bold: true, italic: true, color: WHITE });
    txt(s, "FAMILY " + c.key + " · " + c.sub.toUpperCase(), { x: x + 0.28, y: y + 0.46, w: w - 0.56, h: 0.24, fontSize: 8.5, bold: true, color: "D8E0EC", charSpacing: 1 });
    c.rows.forEach((r, j) => {
      const ry = y + 1.0 + j * 0.66;
      txt(s, r[0], { x: x + 0.28, y: ry, w: w - 0.56, h: 0.28, fontSize: 11.5, bold: true, color: f.color });
      txt(s, r[1], { x: x + 0.28, y: ry + 0.27, w: w - 0.56, h: 0.26, fontSize: 9.5, color: GRAY });
    });
  });
  txt(s, "Still unsure? Draw it rough on a whiteboard first — the shape your hand wants to make is usually the right template.", { x: 0.55, y: 6.85, w: 12.23, h: 0.32, fontSize: 11.5, italic: true, color: GRAY, align: "center" });
}

// ---------- write ----------
const out = path.join(__dirname, "Category-01-Logical-Structural-Bank.pptx");
pptx.writeFile({ fileName: out }).then(() => console.log("wrote", out));
