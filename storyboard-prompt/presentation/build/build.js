/* Transforming Learning Design at Scale — v2 deck
 * Slides 1-4: the original slides, kept as full-bleed images (rendered from the PDF).
 * Slides 5-12: new, consolidated content in the same visual language.
 */
const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const Fa = require("react-icons/fa");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const OUT = process.argv[2] || path.join(__dirname, "AI-Storyboarding-v2.pptx");
const KEEP = (n) => path.join(__dirname, "orig", `keep${n}.png`);

// ---------- palette (from the original deck) ----------
const NAVY = "0F3D5C";
const DARK = "0B2A3B";
const TEAL = "1B6B78";
const TEAL_DK = "155E68";
const ORANGE = "F08A00";
const RED = "D0412F";
const GOLD = "F5C518";
const CARD = "F2F3EF";
const BG = "FCFCFA";
const LINE = "D9DDD6";
const INK = "1F2A37";
const GRAY = "5B6770";
const MINT = "DCE7E3";
const WHITE = "FFFFFF";

const HFONT = "Cambria";
const BFONT = "Calibri";

const W = 13.333, H = 7.5, M = 0.55;

// ---------- icons ----------
async function iconData(name, color) {
  const el = React.createElement(Fa[name], { size: 256, color: "#" + color });
  let svg = ReactDOMServer.renderToStaticMarkup(el);
  svg = svg.replace(/currentColor/g, "#" + color);
  if (!/xmlns=/.test(svg)) svg = svg.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ');
  const buf = await sharp(Buffer.from(svg)).resize(256, 256, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  return "image/png;base64," + buf.toString("base64");
}
const ICONS = {};
async function icon(name, color = WHITE) {
  const k = name + color;
  if (!ICONS[k]) ICONS[k] = await iconData(name, color);
  return ICONS[k];
}

// ---------- helpers ----------
const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "LSC Learning Engineering Team";
pptx.title = "Transforming Learning Design at Scale";

function shadow() { return { type: "outer", color: "000000", blur: 6, offset: 2, angle: 45, opacity: 0.16 }; }

function txt(slide, text, o) {
  slide.addText(text, Object.assign({ fontFace: BFONT, isTextBox: true, margin: 0, color: INK }, o));
}
function title(slide, text, o = {}) {
  txt(slide, text, Object.assign({ x: M, y: 0.34, w: W - 2 * M, h: 0.72, fontFace: HFONT, fontSize: 30, bold: true, color: INK, valign: "middle" }, o));
}
function subtitle(slide, text, o = {}) {
  txt(slide, text, Object.assign({ x: M, y: 1.02, w: W - 2 * M, h: 0.34, fontSize: 13, italic: true, color: GRAY, valign: "middle" }, o));
}
function card(slide, x, y, w, h, o = {}) {
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: o.fill || CARD }, line: { color: o.line || LINE, width: 0.75 }, rectRadius: o.r || 0.12, shadow: o.noShadow ? undefined : shadow() });
}
async function iconCircle(slide, name, x, y, d, color = TEAL, iconColor = WHITE, scale = 0.52) {
  slide.addShape(pptx.shapes.OVAL, { x, y, w: d, h: d, fill: { color }, line: { color, width: 0 } });
  const id = d * scale;
  slide.addImage({ data: await icon(name, iconColor), x: x + (d - id) / 2, y: y + (d - id) / 2, w: id, h: id });
}
function bullets(slide, items, o) {
  const arr = items.map((t, i) => ({ text: t, options: { bullet: { indent: 12 }, breakLine: i < items.length - 1, paraSpaceAfter: o.gap == null ? 5 : o.gap } }));
  slide.addText(arr, Object.assign({ fontFace: BFONT, isTextBox: true, margin: 0, color: INK, fontSize: 12, valign: "top" }, o));
}
function footer(slide, n, dark = false) {
  txt(slide, "LSC Learning Engineering Team  ·  AI Storyboarding", { x: M, y: 7.06, w: 6, h: 0.26, fontSize: 9, color: dark ? "9DB4C0" : GRAY });
  txt(slide, String(n), { x: W - M - 0.6, y: 7.06, w: 0.6, h: 0.26, fontSize: 9, color: dark ? "9DB4C0" : GRAY, align: "right" });
}
function rightArrow(slide, x, y, w, h, color = TEAL) {
  slide.addShape(pptx.shapes.RIGHT_ARROW, { x, y, w, h, fill: { color }, line: { color, width: 0 } });
}
function downArrow(slide, x, y, w, h, color = TEAL) {
  slide.addShape(pptx.shapes.DOWN_ARROW, { x, y, w, h, fill: { color }, line: { color, width: 0 } });
}
function line(slide, x1, y1, x2, y2, color = "A8B3B0", width = 1.5) {
  const x = Math.min(x1, x2), y = Math.min(y1, y2);
  slide.addShape(pptx.shapes.LINE, { x, y, w: Math.abs(x2 - x1), h: Math.abs(y2 - y1), flipH: x2 < x1, flipV: y2 < y1, line: { color, width } });
}

const NOTES = require("./notes.json");

// =====================================================================
// Slides 1-4: kept from the original deck
// =====================================================================
for (let i = 1; i <= 4; i++) {
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  s.addImage({ path: KEEP(i), x: 0, y: 0, w: W, h: H });
  s.addNotes(NOTES[i - 1].text);
}

(async () => {
  // =====================================================================
  // Slide 5: From TPACK to a working tool
  // =====================================================================
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    title(s, "From TPACK to a working tool");
    subtitle(s, "The prompt is where the three kinds of knowledge are joined, and the storyboard is how they reach the developer.");

    const LX = M, LW = 3.95, CH = 1.5;
    const inputs = [
      { tag: "CK", ic: "FaBook", head: "Content: client sources", lines: ["Manuals, policies, legacy courseware, SME input", "Ranked by a nine-level authority stack; nothing is invented"] },
      { tag: "PK", ic: "FaChalkboardTeacher", head: "Pedagogy: the practitioners", lines: ["Objectives as job tasks; teach, show, practise, assess", "Feedback wording, cognitive-load limits, plain language"] },
      { tag: "TK", ic: "FaLaptopCode", head: "Technology: platform, AI", lines: ["DominKnow components, five interaction modes, WCAG 2.2 AA", "Prompt engineering: CRAFT structure, gates and checks"] },
    ];
    const ys = [1.5, 3.2, 4.9];
    for (let i = 0; i < 3; i++) {
      const y = ys[i], it = inputs[i];
      card(s, LX, y, LW, CH);
      await iconCircle(s, it.ic, LX + 0.18, y + 0.2, 0.62);
      txt(s, it.tag, { x: LX + 0.18, y: y + 0.9, w: 0.62, h: 0.3, fontSize: 11, bold: true, color: TEAL, align: "center" });
      txt(s, it.head, { x: LX + 0.95, y: y + 0.16, w: LW - 1.1, h: 0.42, fontSize: 13, bold: true, color: INK, valign: "top" });
      bullets(s, it.lines, { x: LX + 0.95, y: y + 0.6, w: LW - 1.1, h: 0.85, fontSize: 11, gap: 3 });
      rightArrow(s, LX + LW + 0.12, y + CH / 2 - 0.17, 0.5, 0.34);
    }

    // centre engine
    const CX = 5.25, CW = 2.95, CY = 1.5, CHh = 4.9;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: CX, y: CY, w: CW, h: CHh, fill: { color: DARK }, line: { color: DARK, width: 0 }, rectRadius: 0.14, shadow: shadow() });
    txt(s, "The master prompt", { x: CX, y: CY + 0.18, w: CW, h: 0.36, fontSize: 15, bold: true, color: GOLD, align: "center" });
    txt(s, "TPACK, written down as rules the AI must follow", { x: CX + 0.15, y: CY + 0.52, w: CW - 0.3, h: 0.5, fontSize: 10.5, italic: true, color: "CADCFC", align: "center", valign: "top" });
    const letters = [["C", "Context: readers, authority, gaps"], ["R", "Role: the generator drafts, people decide"], ["A", "Action: seven steps, in order"], ["F", "Format: locked document, five columns"], ["T", "Tone: one voice for three readers"]];
    letters.forEach(([l, d], i) => {
      const y = CY + 1.12 + i * 0.72;
      txt(s, l, { x: CX + 0.2, y, w: 0.55, h: 0.6, fontFace: HFONT, fontSize: 28, bold: true, color: WHITE, valign: "middle" });
      txt(s, d, { x: CX + 0.82, y, w: CW - 1.0, h: 0.6, fontSize: 10.5, color: WHITE, valign: "middle" });
    });
    rightArrow(s, CX + CW + 0.12, CY + CHh / 2 - 0.17, 0.5, 0.34, ORANGE);

    // right: production chain
    const RX = 8.95, RW = W - M - RX, RH = 1.3;
    const chain = [
      { ic: "FaFileAlt", head: "Storyboard", body: "Five columns, real Word tables, every gap owned. Developer Ready when every row is." },
      { ic: "FaCode", head: "Built in DominKnow", body: "The developer builds from Multimedia and Interaction alone; nothing the standard already gives is repeated." },
      { ic: "FaGraduationCap", head: "eLearning course", body: "The learner can learn from Text Content alone; the client reviewer can read every row once." },
    ];
    const rys = [1.5, 3.3, 5.1];
    for (let i = 0; i < 3; i++) {
      const y = rys[i], c = chain[i];
      card(s, RX, y, RW, RH);
      await iconCircle(s, c.ic, RX + 0.18, y + 0.34, 0.62, i === 1 ? ORANGE : TEAL);
      txt(s, c.head, { x: RX + 0.95, y: y + 0.14, w: RW - 1.1, h: 0.34, fontSize: 13, bold: true, color: INK, valign: "top" });
      txt(s, c.body, { x: RX + 0.95, y: y + 0.48, w: RW - 1.1, h: 0.8, fontSize: 10.5, color: INK, valign: "top" });
      if (i < 2) downArrow(s, RX + RW / 2 - 0.17, y + RH + 0.08, 0.34, 0.34, "A8B3B0");
    }
    txt(s, "ConteXtual knowledge: the project intake sets the context once, and every rule applies inside it.", { x: M, y: 6.62, w: W - 2 * M, h: 0.3, fontSize: 11, italic: true, color: GRAY, align: "center" });
    footer(s, 5);
    s.addNotes(NOTES[4].text);
  }

  // =====================================================================
  // Slide 6: The CRAFT prompt in one view
  // =====================================================================
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    title(s, "The CRAFT prompt in one view");
    subtitle(s, "Every rule has one home and one check. Change a value once, and it applies everywhere.");
    const cols = [
      ["C", "Context", "Who reads it, what counts as authority, what to do with gaps", ["Three readers: learner, client reviewer, developer", "Nine-level source authority stack", "Gaps classified Critical, Blocking or Non-blocking, each with an owner"]],
      ["R", "Role", "The generator drafts, people decide", ["Generates, structures, maps and checks", "Never decides purpose, accuracy or feasibility on its own", "Learning Design, SMEs, Multimedia, Accessibility and Development own the decisions"]],
      ["A", "Action", "Seven steps, always in this order", ["Objectives as job tasks, with quoted evidence", "A verification gate before any design starts", "Every slide: content first, component minimums, feedback, accessibility"]],
      ["F", "Format", "What the deliverable looks like", ["Locked block order and real Word tables", "Five columns, one owner per column", "Five interaction modes; a mock-up for any complex layout"]],
      ["T", "Tone", "One voice for three readers", ["Complete sentences, one term per thing", "Acronyms defined; cognitive-load limits per slide", "Narration teaches; it never repeats the screen"]],
    ];
    const gap = 0.2, cw = (W - 2 * M - 4 * gap) / 5, cy = 1.5, ch = 4.55;
    cols.forEach(([l, n, q, bl], i) => {
      const x = M + i * (cw + gap);
      card(s, x, cy, cw, ch);
      txt(s, l, { x, y: cy + 0.15, w: cw, h: 0.8, fontFace: HFONT, fontSize: 44, bold: true, color: TEAL, align: "center", valign: "middle" });
      txt(s, n, { x, y: cy + 0.95, w: cw, h: 0.34, fontSize: 16, bold: true, color: INK, align: "center" });
      txt(s, q, { x: x + 0.15, y: cy + 1.3, w: cw - 0.3, h: 0.62, fontSize: 10.5, italic: true, color: GRAY, align: "center", valign: "top" });
      bullets(s, bl, { x: x + 0.18, y: cy + 1.98, w: cw - 0.34, h: ch - 2.1, fontSize: 11, gap: 5 });
    });
    // bottom band
    const by = 6.25, bh = 0.68;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: M, y: by, w: W - 2 * M, h: bh, fill: { color: MINT }, line: { color: MINT, width: 0 }, rectRadius: 0.08 });
    const stats = [["FaSlidersH", "Set once", "36 configuration keys with defaults"], ["FaClipboardCheck", "Checked on every run", "37 quality checks in three severities"], ["FaUserTag", "Owned, never invented", "9 gap markers, each naming a human owner"]];
    const sw = (W - 2 * M) / 3;
    for (let i = 0; i < 3; i++) {
      const x = M + i * sw + 0.25;
      await iconCircle(s, stats[i][0], x, by + 0.14, 0.4, TEAL, WHITE, 0.5);
      txt(s, [{ text: stats[i][1] + ":  ", options: { bold: true, color: INK } }, { text: stats[i][2], options: { color: INK } }], { x: x + 0.5, y: by, w: sw - 0.9, h: bh, fontSize: 11.5, valign: "middle" });
    }
    footer(s, 6);
    s.addNotes(NOTES[5].text);
  }

  // =====================================================================
  // Slide 7: One standard, six kinds of expertise
  // =====================================================================
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    title(s, "One standard, six kinds of expertise");
    subtitle(s, "A socio-technical system: people decide, the process gates, the technology drafts.");

    const cx = 4.15, cy = 4.2, R = 2.05, ND = 0.66;
    const nodes = [
      { a: -90, ic: "FaChalkboardTeacher", label: "Instructional designer", pos: "top" },
      { a: -30, ic: "FaProjectDiagram", label: "Learning-engineering analyst", pos: "right" },
      { a: 30, ic: "FaTasks", label: "Assessment designer", pos: "right" },
      { a: 90, ic: "FaUniversalAccess", label: "Accessibility and UX reviewer", pos: "bottom" },
      { a: 150, ic: "FaBookOpen", label: "Source-fidelity reviewer", pos: "left" },
      { a: 210, ic: "FaDraftingCompass", label: "Storyboard-production architect", pos: "left" },
    ];
    // spokes first
    nodes.forEach((n) => {
      const t = (n.a * Math.PI) / 180;
      const nx = cx + R * Math.cos(t), ny = cy + R * Math.sin(t);
      line(s, cx + 1.02 * Math.cos(t), cy + 1.02 * Math.sin(t), nx - 0.33 * Math.cos(t), ny - 0.33 * Math.sin(t), "A8B3B0", 2);
    });
    // hub
    s.addShape(pptx.shapes.OVAL, { x: cx - 1.05, y: cy - 1.05, w: 2.1, h: 2.1, fill: { color: DARK }, line: { color: DARK, width: 0 }, shadow: shadow() });
    txt(s, [{ text: "The master prompt", options: { bold: true, color: GOLD, fontSize: 13, breakLine: true } }, { text: "one shared standard", options: { color: WHITE, fontSize: 11 } }], { x: cx - 1.05, y: cy - 1.05, w: 2.1, h: 2.1, align: "center", valign: "middle" });
    for (const n of nodes) {
      const t = (n.a * Math.PI) / 180;
      const nx = cx + R * Math.cos(t), ny = cy + R * Math.sin(t);
      await iconCircle(s, n.ic, nx - ND / 2, ny - ND / 2, ND, TEAL, WHITE, 0.5);
      const lw = 1.75, lh = 0.4;
      let lx, ly, align;
      if (n.pos === "top") { lx = nx - lw / 2; ly = ny - ND / 2 - lh - 0.04; align = "center"; }
      else if (n.pos === "bottom") { lx = nx - lw / 2; ly = ny + ND / 2 + 0.04; align = "center"; }
      else if (n.pos === "right") { lx = nx + ND / 2 + 0.08; ly = ny - lh / 2; align = "left"; }
      else { lx = nx - ND / 2 - 0.08 - lw; ly = ny - lh / 2; align = "right"; }
      txt(s, n.label, { x: lx, y: ly, w: lw, h: lh, fontSize: 10.5, bold: true, color: INK, align, valign: "middle" });
    }
    // right benefits
    const RX = 8.25, RW = W - M - RX;
    txt(s, "Rules and examples flow in; the same standard flows back to everyone.", { x: RX, y: 6.68, w: RW, h: 0.3, fontSize: 10, italic: true, color: GRAY });
    txt(s, "What this changes for the team", { x: RX, y: 1.5, w: RW, h: 0.36, fontSize: 15, bold: true, color: INK });
    const ben = [
      ["FaEquals", "Same shape, whoever runs it", "A storyboard from any team member arrives in the same format with the same checks."],
      ["FaUserPlus", "Day-one onboarding", "A new member produces a standard-compliant storyboard on their first project."],
      ["FaArchive", "Knowledge outlives turnover", "Expertise lives in the prompt and its change log, not only in one person's head."],
      ["FaGavel", "Practitioners govern it", "Reviewer comments become rules; the team, not the tool, decides what changes."],
    ];
    for (let i = 0; i < 4; i++) {
      const y = 2.0 + i * 1.18;
      await iconCircle(s, ben[i][0], RX, y + 0.02, 0.52, i === 3 ? ORANGE : TEAL, WHITE, 0.5);
      txt(s, ben[i][1], { x: RX + 0.7, y, w: RW - 0.7, h: 0.3, fontSize: 13, bold: true, color: INK });
      txt(s, ben[i][2], { x: RX + 0.7, y: y + 0.32, w: RW - 0.7, h: 0.7, fontSize: 11, color: INK, valign: "top" });
    }
    footer(s, 7);
    s.addNotes(NOTES[6].text);
  }

  // =====================================================================
  // Slide 8: Three ways the team uses it
  // =====================================================================
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    title(s, "Three ways the team uses it");
    subtitle(s, "The same prompt generates, standardizes, and converts.");
    const uses = [
      { n: "01", ic: "FaMagic", head: "Generate", body: "Attach the intake, the sources and any reviewer comments, and say “Generate the storyboard.” The result is a Developer Ready storyboard in the locked format, with every unresolved item assigned to an owner.", before: "Intake, sources, review comments", after: "A Developer Ready storyboard in the locked format" },
      { n: "02", ic: "FaRulerCombined", head: "Standardize", body: "The template and the writing standard are built into every run. Nobody has to remember to follow the format; it is already there. Individual judgement stays where it belongs: in the design decisions, not in the shape of the document.", before: "Six personal templates, uneven compliance", after: "One template on every storyboard, by default" },
      { n: "03", ic: "FaExchangeAlt", head: "Convert", body: "A storyboard or standard from another unit, in any format, is rebuilt in the LSC format that the developers accept. The same rules apply, so a converted storyboard is checked like one of ours.", before: "A partner unit's storyboard in its own format", after: "The LSC storyboard the developers can build from" },
    ];
    const gap = 0.24, cw = (W - 2 * M - 2 * gap) / 3, cy = 1.5, ch = 5.0;
    for (let i = 0; i < 3; i++) {
      const u = uses[i], x = M + i * (cw + gap);
      card(s, x, cy, cw, ch);
      await iconCircle(s, u.ic, x + 0.25, cy + 0.25, 0.7, i === 1 ? ORANGE : TEAL, WHITE, 0.5);
      txt(s, u.n, { x: x + cw - 1.1, y: cy + 0.2, w: 0.85, h: 0.6, fontFace: HFONT, fontSize: 30, bold: true, color: "C9D3D0", align: "right" });
      txt(s, u.head, { x: x + 0.25, y: cy + 1.1, w: cw - 0.5, h: 0.4, fontSize: 18, bold: true, color: INK });
      txt(s, u.body, { x: x + 0.25, y: cy + 1.55, w: cw - 0.5, h: 1.75, fontSize: 12.5, color: INK, valign: "top" });
      // before -> after
      const by = cy + 3.4, bh = 1.3;
      s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: x + 0.25, y: by, w: (cw - 0.5 - 0.45) / 2, h: bh, fill: { color: WHITE }, line: { color: LINE, width: 0.75 }, rectRadius: 0.06 });
      s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: x + 0.25 + (cw - 0.5 - 0.45) / 2 + 0.45, y: by, w: (cw - 0.5 - 0.45) / 2, h: bh, fill: { color: MINT }, line: { color: MINT, width: 0 }, rectRadius: 0.06 });
      rightArrow(s, x + 0.25 + (cw - 0.5 - 0.45) / 2 + 0.08, by + bh / 2 - 0.12, 0.29, 0.24, TEAL);
      txt(s, [{ text: "Before", options: { bold: true, fontSize: 9, color: GRAY, breakLine: true } }, { text: u.before, options: { fontSize: 10.5, color: INK } }], { x: x + 0.35, y: by + 0.08, w: (cw - 0.5 - 0.45) / 2 - 0.2, h: bh - 0.16, valign: "top" });
      txt(s, [{ text: "After", options: { bold: true, fontSize: 9, color: TEAL_DK, breakLine: true } }, { text: u.after, options: { fontSize: 10.5, color: INK } }], { x: x + 0.35 + (cw - 0.5 - 0.45) / 2 + 0.45, y: by + 0.08, w: (cw - 0.5 - 0.45) / 2 - 0.2, h: bh - 0.16, valign: "top" });
    }
    footer(s, 8);
    s.addNotes(NOTES[7].text);
  }

  // =====================================================================
  // Slide 9: Quality is governed by the people who review
  // =====================================================================
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    title(s, "Quality is governed by the people who review");
    subtitle(s, "A polished sentence is not evidence of sound design. Failures must be observable, classified, and correctable.");

    // cycle
    const cx = 3.35, cy = 4.15, R = 1.85;
    s.addShape(pptx.shapes.OVAL, { x: cx - R, y: cy - R, w: 2 * R, h: 2 * R, fill: { color: BG }, line: { color: "B9C6C2", width: 3 } });
    await iconCircle(s, "FaSyncAlt", cx - 0.42, cy - 0.72, 0.84, MINT, TEAL_DK, 0.5);
    txt(s, "continuous\nimprovement", { x: cx - 1.0, y: cy + 0.2, w: 2.0, h: 0.6, fontSize: 10.5, italic: true, color: GRAY, align: "center" });
    const steps = ["Reviewer comment", "Defect classified", "Rule written into the prompt", "Acceptance check added", "Next storyboard, checked"];
    const NW = 1.7, NH = 0.62;
    steps.forEach((t, i) => {
      const a = (-90 + i * 72) * Math.PI / 180;
      const nx = cx + R * Math.cos(a), ny = cy + R * Math.sin(a);
      const fill = i === 0 ? ORANGE : i === 2 ? DARK : TEAL;
      s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: nx - NW / 2, y: ny - NH / 2, w: NW, h: NH, fill: { color: fill }, line: { color: fill, width: 0 }, rectRadius: 0.1, shadow: shadow() });
      txt(s, [{ text: (i + 1) + "  ", options: { bold: true, color: i === 2 ? GOLD : WHITE } }, { text: t, options: { color: WHITE } }], { x: nx - NW / 2 + 0.08, y: ny - NH / 2, w: NW - 0.16, h: NH, fontSize: 10.5, align: "center", valign: "middle" });
    });

    // right table
    const RX = 6.2, RW = W - M - RX;
    txt(s, "Reviewer said", { x: RX, y: 1.5, w: 2.9, h: 0.32, fontSize: 12, bold: true, color: GRAY });
    txt(s, "The prompt now requires", { x: RX + 3.05, y: 1.5, w: RW - 3.05, h: 0.32, fontSize: 12, bold: true, color: GRAY });
    const rows = [
      ["“Should use full sentences, otherwise it is difficult to connect meaning.”", "Complete sentences for any line that states a fact, rule, condition or action."],
      ["“You call them stages and processes. Which is it?”", "One term per thing across the title, every column and the narration."],
      ["“What is the actual question stem?”", "A stem before every practice or assessment activity."],
      ["“Devs don't program this. Delete.”", "Platform behaviour stays out of the rows; Development owns it."],
      ["“The distractors are not plausible.”", "Item-quality rules: plausible distractors, one defensible answer."],
    ];
    const rh = 0.74;
    rows.forEach((r, i) => {
      const y = 1.88 + i * (rh + 0.08);
      s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: RX, y, w: RW, h: rh, fill: { color: i % 2 ? WHITE : CARD }, line: { color: LINE, width: 0.75 }, rectRadius: 0.06 });
      txt(s, r[0], { x: RX + 0.15, y, w: 2.75, h: rh, fontSize: 10.5, italic: true, color: INK, valign: "middle" });
      rightArrow(s, RX + 2.95, y + rh / 2 - 0.1, 0.22, 0.2, TEAL);
      txt(s, r[1], { x: RX + 3.25, y, w: RW - 3.4, h: rh, fontSize: 10.5, color: INK, valign: "middle" });
    });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: RX, y: 6.1, w: RW, h: 0.74, fill: { color: MINT }, line: { color: MINT, width: 0 }, rectRadius: 0.08 });
    txt(s, [{ text: "14 ", options: { bold: true, fontSize: 16, color: TEAL_DK } }, { text: "reviewer comments on one storyboard became rules. Every rule has one home in the prompt and one line in the acceptance checks.", options: { fontSize: 11 } }], { x: RX + 0.2, y: 6.1, w: RW - 0.4, h: 0.74, valign: "middle" });
    footer(s, 9);
    s.addNotes(NOTES[8].text);
  }

  // =====================================================================
  // Slide 10: Where it still falls short
  // =====================================================================
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    title(s, "Where it still falls short");
    subtitle(s, "Three limits we can see from the inside. Each is on the change log; none has a complete answer yet.");
    const lim = [
      { ic: "FaImage", head: "Presentation of information", body: "The content is right more often than it is well presented. Layouts, visual treatment and the balance between text and media are still uneven from slide to slide.", now: "Mock-ups are now required for complex layouts, but a designer's eye is still needed before hand-off." },
      { ic: "FaUserCheck", head: "Human review is not optional", body: "The generator drafts; people decide. A storyboard still needs a subject-matter expert to confirm accuracy and a learning designer to read it as a learner would.", now: "The gap markers make that work visible and assignable, but they do not make it smaller." },
      { ic: "FaCompass", head: "No outside benchmark", body: "Every improvement came from our own reviewers. We do not know how the approach compares with how other organizations govern AI in learning design, or what we have not thought of.", now: "This is the limit we can only remove with help from outside the team." },
    ];
    const gap = 0.24, cw = (W - 2 * M - 2 * gap) / 3, cy = 1.5, ch = 4.1;
    for (let i = 0; i < 3; i++) {
      const l = lim[i], x = M + i * (cw + gap);
      card(s, x, cy, cw, ch);
      await iconCircle(s, l.ic, x + 0.25, cy + 0.25, 0.66, i === 2 ? ORANGE : TEAL, WHITE, 0.5);
      txt(s, l.head, { x: x + 1.05, y: cy + 0.25, w: cw - 1.3, h: 0.66, fontSize: 15, bold: true, color: INK, valign: "middle" });
      txt(s, l.body, { x: x + 0.25, y: cy + 1.15, w: cw - 0.5, h: 1.45, fontSize: 12, color: INK, valign: "top" });
      s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: x + 0.25, y: cy + 2.7, w: cw - 0.5, h: 1.15, fill: { color: WHITE }, line: { color: LINE, width: 0.75 }, rectRadius: 0.06 });
      txt(s, [{ text: "Where we are  ", options: { bold: true, color: TEAL_DK, fontSize: 9.5 } }, { text: l.now, options: { fontSize: 10.5, color: INK } }], { x: x + 0.38, y: cy + 2.75, w: cw - 0.76, h: 1.05, valign: "middle" });
    }
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: M, y: 5.9, w: W - 2 * M, h: 0.7, fill: { color: DARK }, line: { color: DARK, width: 0 }, rectRadius: 0.08 });
    txt(s, "We treat these as design problems, not as reasons to stop: each one is observable, classified, and assigned to someone.", { x: M + 0.3, y: 5.9, w: W - 2 * M - 0.6, h: 0.7, fontSize: 12.5, color: WHITE, align: "center", valign: "middle" });
    footer(s, 10);
    s.addNotes(NOTES[9].text);
  }

  // =====================================================================
  // Slide 11: The platform, not the prompt, is now the limit
  // =====================================================================
  {
    const s = pptx.addSlide();
    s.background = { color: BG };
    title(s, "The platform, not the prompt, is now the limit");
    subtitle(s, "The standard is ready to scale beyond the team. The way it runs today is not.");
    const LW = 4.3, RW = 4.3, LX = M, RX = W - M - RW, cy = 1.5, ch = 4.1;
    // today
    card(s, LX, cy, LW, ch);
    await iconCircle(s, "FaLink", LX + 0.25, cy + 0.25, 0.62, GRAY, WHITE, 0.5);
    txt(s, "Today: a document and a link", { x: LX + 1.0, y: cy + 0.25, w: LW - 1.2, h: 0.62, fontSize: 15, bold: true, color: INK, valign: "middle" });
    bullets(s, ["The prompt runs in a general-purpose AI chat; each run starts with a manual paste of the standard.", "Upload and context limits cap how much of a source set one run can read.", "No shared workspace: versions, usage and results are not tracked, and only one person runs it at a time."], { x: LX + 0.25, y: cy + 1.1, w: LW - 0.5, h: ch - 1.3, fontSize: 11.5, gap: 7 });
    // target
    card(s, RX, cy, RW, ch);
    await iconCircle(s, "FaCloud", RX + 0.25, cy + 0.25, 0.62, TEAL, WHITE, 0.5);
    txt(s, "What scale needs: a governed team tool", { x: RX + 1.0, y: cy + 0.25, w: RW - 1.2, h: 0.62, fontSize: 15, bold: true, color: INK, valign: "middle" });
    bullets(s, ["The prompt, the standards and the reference libraries stored once, versioned, and updated in one place.", "Shared by the whole team and by partner units, with usage and results tracked.", "Enough capacity to read a full source set and return a full storyboard in one run."], { x: RX + 0.25, y: cy + 1.1, w: RW - 0.5, h: ch - 1.3, fontSize: 11.5, gap: 7 });
    // middle: gap
    const MX = LX + LW + 0.3, MW = RX - MX - 0.3;
    rightArrow(s, MX + 0.2, cy + 0.42, MW - 0.4, 0.5, ORANGE);
    txt(s, "the gap", { x: MX, y: cy + 0.95, w: MW, h: 0.3, fontSize: 11, italic: true, color: GRAY, align: "center" });
    txt(s, "What we have tried", { x: MX, y: cy + 1.45, w: MW, h: 0.3, fontSize: 12, bold: true, color: INK, align: "center" });
    const tried = [["Azure AI Foundry", "Capacity and compute limits in our environment; too small for a full source set."], ["Copilot agent, current tier", "Feature and upload limits; the standard cannot be stored and shared as an agent."]];
    tried.forEach((t, i) => {
      const y = cy + 1.85 + i * 1.1;
      s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: MX, y, w: MW, h: 1.0, fill: { color: WHITE }, line: { color: LINE, width: 0.75 }, rectRadius: 0.06 });
      txt(s, [{ text: t[0], options: { bold: true, fontSize: 11, color: INK, breakLine: true } }, { text: t[1], options: { fontSize: 10, color: GRAY } }], { x: MX + 0.15, y: y + 0.06, w: MW - 0.3, h: 0.88, valign: "middle" });
    });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: M, y: 5.85, w: W - 2 * M, h: 0.95, fill: { color: MINT }, line: { color: MINT, width: 0 }, rectRadius: 0.08 });
    txt(s, [{ text: "The question we cannot answer alone:  ", options: { bold: true, color: TEAL_DK } }, { text: "which platform, and which hosting approach, lets a practitioner-governed prompt run as a shared, governed tool inside a Government of Canada environment?", options: { color: INK } }], { x: M + 0.3, y: 5.85, w: W - 2 * M - 0.6, h: 0.95, fontSize: 12, valign: "middle" });
    footer(s, 11);
    s.addNotes(NOTES[10].text);
  }

  // =====================================================================
  // Slide 12: Where we would welcome your expertise (dark close)
  // =====================================================================
  {
    const s = pptx.addSlide();
    s.background = { color: DARK };
    title(s, "Where we would welcome your expertise", { color: WHITE });
    subtitle(s, "We can describe the problem precisely. We do not have the capacity to solve it alone.", { color: "CADCFC" });
    const asks = [
      { ic: "FaSearch", head: "A benchmark", body: "Tell us how this compares with your own practice: what is strong, what you would change, and what we have not seen yet.", col: TEAL },
      { ic: "FaRoute", head: "A path to scale", body: "A platform, a person, or an approach that lets the prompt run as a governed, shared tool: any of the three would move us forward.", col: ORANGE },
      { ic: "FaHandshake", head: "An exchange", body: "We will share the standard, the change log and the review method. We would like to learn how others govern AI in learning design.", col: TEAL },
    ];
    const gap = 0.3, cw = (W - 2 * M - 2 * gap) / 3, cy = 1.7, ch = 3.35;
    for (let i = 0; i < 3; i++) {
      const a = asks[i], x = M + i * (cw + gap);
      s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: cy, w: cw, h: ch, fill: { color: "123A4E" }, line: { color: "1E4D63", width: 0.75 }, rectRadius: 0.12 });
      await iconCircle(s, a.ic, x + cw / 2 - 0.45, cy + 0.35, 0.9, a.col, WHITE, 0.5);
      txt(s, a.head, { x: x + 0.2, y: cy + 1.4, w: cw - 0.4, h: 0.42, fontSize: 18, bold: true, color: GOLD, align: "center" });
      txt(s, a.body, { x: x + 0.35, y: cy + 1.9, w: cw - 0.7, h: 1.7, fontSize: 12, color: WHITE, align: "center", valign: "top" });
    }
    txt(s, "Thank you.", { x: M, y: 5.45, w: W - 2 * M, h: 0.5, fontFace: HFONT, fontSize: 24, bold: true, color: WHITE, align: "center" });
    txt(s, "LSC Learning Engineering Team  ·  Learning Support Centre  /  Centre de soutien à l’apprentissage", { x: M, y: 6.02, w: W - 2 * M, h: 0.34, fontSize: 12, color: "CADCFC", align: "center" });
    footer(s, 12, true);
    s.addNotes(NOTES[11].text);
  }

  await pptx.writeFile({ fileName: OUT });
  console.log("wrote", OUT);
})().catch((e) => { console.error(e); process.exit(1); });
