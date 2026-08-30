/* Category 03 deep dive — Concrete & Visual Template Bank
 * 12 layouts in 3 families (lettering continues from A-C and D-F):
 *   G Point & Name: annotated tour, labeled parts, zoom detail, multi-view
 *   H Walk It Through: photo steps, screen flow, before/during/after, demo storyboard
 *   I Set the Standard: correct vs incorrect, spot the hazards, good-better-best, acceptance standard
 * Every image area is a styled placeholder frame — "replace with the REAL screenshot/photo".
 */
const pptxgen = require("pptxgenjs");
const path = require("path");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
pptx.author = "L&D Template Bank";
pptx.title = "Concrete & Visual Template Bank";

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
  G: { color: NAVY, label: "G · POINT & NAME" },
  H: { color: STEEL, label: "H · WALK IT THROUGH" },
  I: { color: RED, label: "I · SET THE STANDARD" },
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

function imgPlaceholder(slide, x, y, w, h, label, icon) {
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: CARD }, line: { color: "B9C1CD", width: 1.25, dashType: "dash" }, rectRadius: 0.06 });
  const d = Math.min(0.75, h * 0.28);
  slide.addImage({ path: A(icon || "camera-gray"), x: x + w / 2 - d / 2, y: y + h / 2 - d / 2 - 0.16, w: d, h: d });
  txt(slide, label, { x: x + 0.15, y: y + h / 2 + 0.18, w: w - 0.3, h: Math.min(0.7, h / 2 - 0.2), fontSize: 9.5, color: FAINT, align: "center" });
}

function marker(slide, n, x, y, color, d) {
  const dd = d || 0.42;
  slide.addShape(pptx.shapes.OVAL, { x, y, w: dd, h: dd, fill: { color }, line: { color: WHITE, width: 2 }, shadow: { type: "outer", color: "9AA3B2", blur: 5, offset: 1, angle: 90, opacity: 0.4 } });
  txt(slide, String(n), { x, y, w: dd, h: dd, fontSize: dd > 0.38 ? 13 : 11, bold: true, color: WHITE, align: "center", valign: "middle" });
}

// ============================================================
// SLIDE 1 — TITLE
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: NAVY };
  txt(s, "CATEGORY 03  ·  DEEP DIVE", { x: 0.9, y: 1.25, w: 11.53, h: 0.32, fontSize: 12, bold: true, color: STEEL_LT, align: "center", charSpacing: 4 });
  txt(s, "Concrete & Visual\nTemplate Bank", { x: 0.9, y: 1.7, w: 11.53, h: 1.7, fontSize: 40, bold: true, color: WHITE, align: "center" });
  txt(s, "Twelve layouts for the real thing — point at it, walk through it, and judge it against the standard", { x: 1.8, y: 3.5, w: 9.73, h: 0.6, fontSize: 15, color: "C9D4E6", align: "center" });

  const chips = [
    ["pin-w", "G · Point & Name", "Annotated tour · Labeled parts · Zoom detail · Multi-view", NAVY_MID],
    ["listol-w", "H · Walk It Through", "Photo steps · Screen flow · Before/during/after · Demo storyboard", STEEL],
    ["clipcheck-w", "I · Set the Standard", "Correct vs incorrect · Spot the hazards · Good-better-best · Acceptance card", RED],
  ];
  chips.forEach((c, i) => {
    const x = 0.9 + i * 3.98;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: 4.55, w: 3.75, h: 1.5, fill: { color: WHITE, transparency: 90 }, rectRadius: 0.08 });
    iconCircle(s, c[0], c[3], x + 0.28, 4.85, 0.62, 0.52);
    txt(s, c[1], { x: x + 1.02, y: 4.82, w: 2.68, h: 0.35, fontSize: 13, bold: true, color: WHITE });
    txt(s, c[2], { x: x + 1.02, y: 5.18, w: 2.68, h: 0.7, fontSize: 9.5, color: "BFCCE0" });
  });
  txt(s, "Every image frame is a styled placeholder — drop in the REAL screenshot or photo and the layout does the rest", { x: 0.9, y: 6.6, w: 11.53, h: 0.3, fontSize: 11, color: "8FA3BC", align: "center" });
}

// ============================================================
// SLIDE 2 — FAMILY MAP
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  txt(s, "THE MAP", { x: 0.55, y: 0.32, w: 4, h: 0.28, fontSize: 11, bold: true, color: RED, charSpacing: 2 });
  txt(s, "Accuracy first — then stage the picture", { x: 0.55, y: 0.58, w: 11.5, h: 0.55, fontSize: 26, bold: true, color: NAVY });
  txt(s, "When learners must recognize or operate the real thing, only the real image teaches. Your job is staging: direct the eye, order the moments, define the standard.", { x: 0.55, y: 1.12, w: 12.0, h: 0.3, fontSize: 11.5, color: GRAY });

  const cards = [
    {
      key: "G", icon: "pin-w", name: "Point & Name", verb: "“Show me where.”",
      def: "Orientation and vocabulary — learners must find and name things on the real object or screen.",
      ask: "Could they locate it on the real thing right now?",
      tools: "Annotated tour · Labeled parts · Zoom detail · Multi-view",
    },
    {
      key: "H", icon: "listol-w", name: "Walk It Through", verb: "“Show me how.”",
      def: "Performance in order — one accurate image per moment, so the sequence rehearses itself.",
      ask: "Could they do it, in order, without you in the room?",
      tools: "Photo steps · Screen flow · Before/during/after · Demo storyboard",
    },
    {
      key: "I", icon: "clipcheck-w", name: "Set the Standard", verb: "“Show me the bar.”",
      def: "Judgment against quality — right vs wrong, hazards found, work accepted or rejected.",
      ask: "Could they tell done-right from done-wrong at a glance?",
      tools: "Correct vs incorrect · Spot the hazards · Good–better–best · Acceptance card",
    },
  ];
  cards.forEach((c, i) => {
    const f = FAM[c.key];
    const x = 0.55 + i * 4.18, y = 1.62, w = 3.98, h = 4.9;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: CARD }, rectRadius: 0.07 });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 1.0, fill: { color: f.color }, rectRadius: 0.07 });
    s.addShape(pptx.shapes.RECTANGLE, { x, y: y + 0.5, w, h: 0.5, fill: { color: f.color } });
    iconCircle(s, c.icon, c.key === "G" ? NAVY_MID : (c.key === "H" ? "6E87A8" : "AF5252"), x + 0.25, y + 0.19, 0.62, 0.52);
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
  txt(s, "The one hard rule: real images only — a mock-up teaches learners to recognize the mock-up.", { x: 0.55, y: 6.85, w: 12.23, h: 0.32, fontSize: 11.5, italic: true, color: GRAY, align: "center" });
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
// SLIDE 3 — DIVIDER G
// ============================================================
divider("G", "44598C", "Point & Name",
  "Learners must find and name things on the real object or screen. Use the accurate image, then direct the eye — a numbered tour, part labels, a magnified detail, or every angle the job needs.",
  [
    ["image-w", "G1", "Annotated Tour", "Numbered callouts, in the order eyes should travel."],
    ["tag-w", "G2", "Labeled Parts", "Names attached to the real thing with leader lines."],
    ["zoomin-w", "G3", "Zoom Detail", "The whole for context, the part magnified."],
    ["cube-w", "G4", "Multi-View", "The same real thing from every required angle."],
  ]);

// ============================================================
// SLIDE 4 — G1 ANNOTATED TOUR (forklift pre-shift)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "G1", "Annotated Tour", "Example — the forklift pre-shift check: five stops, in walking order", "G");

  const fx = 0.55, fy = 1.62, fw = 7.1, fh = 5.05;
  imgPlaceholder(s, fx, fy, fw, fh, "Replace with the REAL truck — your fleet, your yard, current livery");
  const marks = [
    { x: 1.5, y: 5.6, c: NAVY },
    { x: 2.6, y: 3.1, c: NAVY_MID },
    { x: 5.3, y: 5.9, c: STEEL },
    { x: 4.3, y: 2.0, c: NAVY_MID },
    { x: 6.4, y: 3.6, c: RED },
  ];
  marks.forEach((m, i) => marker(s, i + 1, m.x, m.y, m.c));

  const notes = [
    { c: NAVY, name: "Forks & heel", def: "Cracks, bends, uneven tips — heel wear past the line fails the truck." },
    { c: NAVY_MID, name: "Mast, chains & hoses", def: "Kinked chains, weeping hoses. Never reach through the mast." },
    { c: STEEL, name: "Tires & wheel nuts", def: "Chunking, cords showing, a missing nut — any one parks it." },
    { c: NAVY_MID, name: "Overhead guard", def: "Bent legs or cracked welds mean no protection when it matters." },
    { c: RED, name: "Data plate", def: "Legible capacity, matching attachments. No plate, no operation." },
  ];
  notes.forEach((n, i) => {
    const y = 1.62 + i * 1.04;
    marker(s, i + 1, 8.0, y, n.c, 0.38);
    txt(s, n.name, { x: 8.52, y: y - 0.03, w: 4.25, h: 0.3, fontSize: 12.5, bold: true, color: NAVY });
    txt(s, n.def, { x: 8.52, y: y + 0.27, w: 4.25, h: 0.65, fontSize: 10, color: INK });
  });
  useWhen(s, "learners must find things on the real object in a set order — number the tour so the eye walks the same route their feet will.", NAVY);
  s.addNotes("Number in the order of the physical walkaround, not by importance — the tour doubles as the checklist. Then hand out the same photo unmarked and have them place the numbers.");
}

// ============================================================
// SLIDE 5 — G2 LABELED PARTS (AED station)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "G2", "Labeled Parts", "Example — the AED on the wall: six parts everyone should know by name", "G");

  const fx = 4.42, fy = 1.62, fw = 4.5, fh = 4.95;
  imgPlaceholder(s, fx, fy, fw, fh, "Replace with YOUR model —\nthe one on YOUR wall");
  const left = [
    { name: "Status indicator", def: "Green blink = ready. Red or silent = report it today.", py: 2.2 },
    { name: "Pads cartridge", def: "Sealed and in date — expiry is on the front.", py: 3.9 },
    { name: "Battery", def: "Check the sticker; it expires before the pads do.", py: 5.6 },
  ];
  const right = [
    { name: "Shock button", def: "Lights up only when a shock is advised.", py: 2.4 },
    { name: "Speaker", def: "Voice-guides every step — you cannot do it wrong quietly.", py: 4.1 },
    { name: "Cabinet handle", def: "Pulling it sounds the alarm and calls for help. Good.", py: 5.8 },
  ];
  left.forEach((l, i) => {
    const by = 1.85 + i * 1.7;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.55, y: by, w: 3.35, h: 1.05, fill: { color: CARD }, rectRadius: 0.07 });
    txt(s, l.name, { x: 0.8, y: by + 0.14, w: 2.9, h: 0.3, fontSize: 12, bold: true, color: NAVY });
    txt(s, l.def, { x: 0.8, y: by + 0.44, w: 2.9, h: 0.55, fontSize: 9.5, color: INK });
    s.addShape(pptx.shapes.OVAL, { x: fx + 0.55 - 0.07, y: l.py - 0.07, w: 0.14, h: 0.14, fill: { color: NAVY } });
    connLine(s, 3.9, by + 0.5, fx + 0.55, l.py, { color: "AEB7C6", width: 1.25 });
  });
  right.forEach((l, i) => {
    const by = 1.85 + i * 1.7;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 9.42, y: by, w: 3.35, h: 1.05, fill: { color: CARD }, rectRadius: 0.07 });
    txt(s, l.name, { x: 9.67, y: by + 0.14, w: 2.9, h: 0.3, fontSize: 12, bold: true, color: NAVY });
    txt(s, l.def, { x: 9.67, y: by + 0.44, w: 2.9, h: 0.55, fontSize: 9.5, color: INK });
    s.addShape(pptx.shapes.OVAL, { x: fx + fw - 0.55 - 0.07, y: l.py - 0.07, w: 0.14, h: 0.14, fill: { color: RED } });
    connLine(s, 9.42, by + 0.5, fx + fw - 0.55, l.py, { color: "AEB7C6", width: 1.25 });
  });
  caption(s, "Labels teach names; the tour (G1) orders actions — different jobs, different templates.", 6.72);
  useWhen(s, "the part names ARE the content — attach vocabulary to the accurate image so words and thing arrive together.", NAVY);
  s.addNotes("Six labels is the ceiling — past that, split by zone into two slides. Quiz by covering the label boxes and pointing at the dots.");
}

// ============================================================
// SLIDE 6 — G3 ZOOM DETAIL (SDS section 4)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "G3", "Zoom Detail", "Example — the safety data sheet: sixteen sections, one that matters in an emergency", "G");

  // full-page context frame
  imgPlaceholder(s, 0.55, 1.62, 3.1, 4.4, "Replace with page 1 of\nYOUR product's SDS", "image-gray");
  txt(s, "THE WHOLE — for context", { x: 0.55, y: 6.1, w: 3.1, h: 0.26, fontSize: 8.5, bold: true, color: FAINT, align: "center", charSpacing: 1 });
  // zoom circle on the page
  s.addShape(pptx.shapes.OVAL, { x: 1.35, y: 2.85, w: 1.5, h: 1.0, fill: { color: RED, transparency: 92 }, line: { color: RED, width: 2 } });
  // zoom rays to the inset
  connLine(s, 2.85, 3.0, 4.55, 1.9, { color: RED, width: 1.25, dash: "dash" });
  connLine(s, 2.85, 3.7, 4.55, 5.55, { color: RED, width: 1.25, dash: "dash" });
  // inset
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 4.55, y: 1.75, w: 8.2, h: 3.9, fill: { color: WHITE }, line: { color: RED, width: 2 }, rectRadius: 0.06 });
  imgPlaceholder(s, 4.75, 1.95, 4.4, 3.5, "Zoomed crop —\nSection 4, legible at room distance");
  txt(s, "SECTION 4 · FIRST-AID MEASURES", { x: 9.3, y: 2.0, w: 3.3, h: 0.28, fontSize: 10, bold: true, color: RED, charSpacing: 1 });
  const zn = [
    ["Eyes", "Rinse 15 minutes — know where the wash station is before you need it."],
    ["Skin", "Contaminated clothing comes off first, then water."],
    ["Always", "The sheet travels with the casualty to the medic."],
  ];
  zn.forEach((z, i) => {
    const y = 2.4 + i * 1.0;
    s.addShape(pptx.shapes.RECTANGLE, { x: 9.3, y: y + 0.04, w: 0.14, h: 0.62, fill: { color: i === 2 ? RED : STEEL } });
    txt(s, z[0], { x: 9.55, y, w: 3.1, h: 0.28, fontSize: 11.5, bold: true, color: NAVY });
    txt(s, z[1], { x: 9.55, y: y + 0.28, w: 3.1, h: 0.65, fontSize: 9.5, color: INK });
  });
  caption(s, "Show the whole once, then live in the zoom — never make a room squint at a full page.", 6.35);
  useWhen(s, "one small region carries the meaning — show the whole for orientation, then magnify the part that matters until it is legible from the back row.", NAVY);
  s.addNotes("The zoom circle on the context image is doing quiet work: next time learners hold the real document, their eyes go to that region unprompted.");
}

// ============================================================
// SLIDE 7 — G4 MULTI-VIEW (vehicle walkaround)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "G4", "Multi-View", "Example — the pool van, four corners: one view always hides the damage", "G");

  const views = [
    { name: "FRONT", color: NAVY, checks: ["Lights, glass, wipers whole", "Plate present and clean"] },
    { name: "DRIVER SIDE", color: NAVY_MID, checks: ["Tires: tread & pressure look", "New scrapes vs the sheet"] },
    { name: "REAR", color: STEEL, checks: ["Doors latch and lock", "Indicators & brake lights"] },
    { name: "PASSENGER SIDE", color: RED, checks: ["Mirror intact and firm", "Sliding door runs free"] },
  ];
  const w = 2.95, gap = 0.16, x0 = 0.55, y0 = 1.62;
  views.forEach((v, i) => {
    const x = x0 + i * (w + gap);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: y0, w, h: 0.5, fill: { color: v.color }, rectRadius: 0.08 });
    txt(s, v.name, { x, y: y0, w, h: 0.5, fontSize: 11.5, bold: true, color: WHITE, align: "center", valign: "middle", charSpacing: 1 });
    imgPlaceholder(s, x, y0 + 0.65, w, 2.55, "Same van,\nthis angle");
    v.checks.forEach((c, j) => {
      const y = y0 + 3.4 + j * 0.62;
      s.addImage({ path: A("check-navy"), x: x + 0.06, y: y + 0.03, w: 0.24, h: 0.24 });
      txt(s, c, { x: x + 0.42, y, w: w - 0.5, h: 0.6, fontSize: 9.5, color: INK });
    });
  });
  caption(s, "Same vehicle, same day, same light — four honest angles beat one flattering one.", 6.6);
  useWhen(s, "one view hides half the story — show the same real thing from every angle the job actually requires.", NAVY);
  s.addNotes("Walk the room through the corners in the order of the physical walkaround. Then show last month's damage photo and ask which corner would have caught it.");
}

// ============================================================
// SLIDE 8 — DIVIDER H
// ============================================================
divider("H", "7E94B0", "Walk It Through",
  "Learners must perform it, in order. Give every moment its own accurate image — steps, screens, states, and demo frames — so the sequence rehearses itself before they ever touch the real thing.",
  [
    ["camera-w", "H1", "Photo Steps", "One accurate photo per step, in strict order."],
    ["tv-w", "H2", "Screen Flow", "One real screenshot per decision, arrows carry the order."],
    ["exchange-w", "H3", "Before / During / After", "Same scene, same angle, three moments."],
    ["film-w", "H4", "Demo Storyboard", "A video's defining frames, frozen for rehearsal."],
  ]);

// ============================================================
// SLIDE 9 — H1 PHOTO STEPS (hybrid meeting room)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "H1", "Photo Steps", "Example — the hybrid meeting room: four photos between you and a clean start", "H");

  const steps = [
    { name: "Power the room", def: "Tap the console awake; both displays should light within seconds." },
    { name: "Connect & share", def: "One cable to the laptop — the room takes over camera, mic, and screen." },
    { name: "Sound check", def: "Call the test number. Hear the far end; have them hear you.", caution: "Do this BEFORE guests join — not during introductions." },
    { name: "Reset for the next team", def: "Cables docked, displays off, chairs back. Thirty seconds of civilization." },
  ];
  const w = 2.92, gap = 0.185, x0 = 0.55, y0 = 1.62, h = 4.85;
  steps.forEach((st, i) => {
    const x = x0 + i * (w + gap);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: y0, w, h, fill: { color: CARD }, rectRadius: 0.07 });
    imgPlaceholder(s, x + 0.15, y0 + 0.15, w - 0.3, 2.15, "Photo of THIS step,\nYOUR room");
    s.addShape(pptx.shapes.OVAL, { x: x + 0.28, y: y0 + 0.28, w: 0.52, h: 0.52, fill: { color: i === 2 ? RED : STEEL }, line: { color: WHITE, width: 2 } });
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
  useWhen(s, "a physical procedure must be performed exactly — one accurate photo per step, in strict order, cautions attached to the step they protect.", STEEL);
  s.addNotes("Shoot the photos in your actual room with the actual console. Users forgive bad lighting; they don't forgive a photo of hardware they don't have.");
}

// ============================================================
// SLIDE 10 — H2 SCREEN FLOW (expense approval)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "H2", "Screen Flow", "Example — approving an expense report: three screens, one decision each", "H");

  const screens = [
    { name: "SCREEN 1 · The queue", color: NAVY, tips: ["Open oldest first — SLA clock runs per report", "Amber flag = policy exception, read it before the receipts"] },
    { name: "SCREEN 2 · The report", color: STEEL, tips: ["Receipt matches amount, date, and merchant", "Per-diem lines are auto-checked — skip to the exceptions"] },
    { name: "SCREEN 3 · The decision", color: RED, tips: ["Approve, or return WITH a note they can act on", "Never approve “just to unblock” — that is the audit finding"] },
  ];
  const w = 3.85, gap = 0.32, x0 = 0.55, y0 = 1.65;
  screens.forEach((sc, i) => {
    const x = x0 + i * (w + gap);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: y0, w, h: 0.46, fill: { color: sc.color }, rectRadius: 0.08 });
    txt(s, sc.name, { x, y: y0, w, h: 0.46, fontSize: 10.5, bold: true, color: WHITE, align: "center", valign: "middle", charSpacing: 1 });
    imgPlaceholder(s, x, y0 + 0.6, w, 2.5, "Replace with the REAL screen —\ncurrent release, real (anonymized) data", "image-gray");
    marker(s, i + 1, x + 0.18, y0 + 0.78, sc.color, 0.38);
    sc.tips.forEach((t, j) => {
      const y = y0 + 3.3 + j * 0.78;
      s.addShape(pptx.shapes.RECTANGLE, { x: x + 0.04, y: y + 0.05, w: 0.12, h: 0.55, fill: { color: sc.color } });
      txt(s, t, { x: x + 0.28, y, w: w - 0.34, h: 0.75, fontSize: 9.5, color: INK });
    });
    if (i < 2) {
      s.addShape(pptx.shapes.RIGHT_ARROW, { x: x + w + 0.02, y: y0 + 1.6, w: 0.28, h: 0.34, fill: { color: STEEL_LT } });
    }
  });
  caption(s, "One decision per screen — if a screenshot needs a lecture, the flow needs another screen.", 6.62);
  useWhen(s, "the task lives in software — one real screenshot per decision point, with arrows carrying the order.", STEEL);
  s.addNotes("Re-shoot on every release. An outdated screenshot quietly teaches people the old UI — and erodes trust in everything else on the slide.");
}

// ============================================================
// SLIDE 11 — H3 BEFORE / DURING / AFTER (5S reset)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "H3", "Before / During / After", "Example — the 5S workstation reset: same bench, same angle, three moments", "H");

  const phases = [
    { name: "BEFORE", color: RED, sub: "clutter hides problems", pts: ["Tools buried — the missing torque wrench isn't even missed", "Cables and cups where parts should be"] },
    { name: "DURING", color: STEEL, sub: "sort, then label", pts: ["Everything out, sorted: keep / move / bin", "Shadow-board outlines drawn for what stays"] },
    { name: "AFTER", color: NAVY, sub: "a place for everything", pts: ["One glance shows what's missing", "Reset takes 90 seconds at shift end"] },
  ];
  const w = 3.9, gap = 0.26, x0 = 0.55, y0 = 1.65;
  phases.forEach((p, i) => {
    const x = x0 + i * (w + gap);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: y0, w: 1.55, h: 0.44, fill: { color: p.color }, rectRadius: 0.08 });
    txt(s, p.name, { x, y: y0, w: 1.55, h: 0.44, fontSize: 11, bold: true, color: WHITE, align: "center", valign: "middle", charSpacing: 2 });
    txt(s, p.sub, { x: x + 1.7, y: y0, w: w - 1.7, h: 0.44, fontSize: 10, italic: true, color: GRAY, valign: "middle" });
    imgPlaceholder(s, x, y0 + 0.6, w, 2.6, "SAME bench, SAME angle —\nmoment " + (i + 1) + " of 3");
    p.pts.forEach((t, j) => {
      const y = y0 + 3.4 + j * 0.72;
      s.addShape(pptx.shapes.RECTANGLE, { x: x + 0.04, y: y + 0.05, w: 0.12, h: 0.5, fill: { color: p.color } });
      txt(s, t, { x: x + 0.28, y, w: w - 0.34, h: 0.7, fontSize: 9.5, color: INK });
    });
    if (i < 2) {
      s.addShape(pptx.shapes.RIGHT_ARROW, { x: x + w + 0.0, y: y0 + 1.7, w: 0.26, h: 0.32, fill: { color: STEEL_LT } });
    }
  });
  caption(s, "The tripod position is the template — shoot all three from one spot and the comparison makes itself.", 6.68);
  useWhen(s, "the change itself is the lesson — same scene, same angle, three moments, differences called out under each.", STEEL);
  s.addNotes("Before-photos are gold: collect them the day BEFORE the initiative is announced, or you'll never get an honest one again.");
}

// ============================================================
// SLIDE 12 — H4 DEMO STORYBOARD (sales demo video)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "H4", "Demo Storyboard", "Example — the sales-demo video: four moments worth freezing", "H");

  const frames = [
    { t: "0:00", name: "The cold open", watch: "The problem is stated in the customer's words — not ours." },
    { t: "1:20", name: "First value", watch: "Under 90 seconds to a visible result. Count them." },
    { t: "3:45", name: "The objection", watch: "The pause before answering — that beat is the technique." },
    { t: "5:10", name: "The close", watch: "The next step is specific and dated, never “we'll follow up.”" },
  ];
  const w = 2.92, gap = 0.185, x0 = 0.55, y0 = 1.62, h = 4.7;
  frames.forEach((f, i) => {
    const x = x0 + i * (w + gap);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: y0, w, h, fill: { color: CARD }, rectRadius: 0.07 });
    imgPlaceholder(s, x + 0.15, y0 + 0.15, w - 0.3, 2.0, "Video still —\nthis exact moment", "image-gray");
    // timestamp chip
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: x + 0.28, y: y0 + 0.3, w: 0.85, h: 0.4, fill: { color: NAVY } , rectRadius: 0.1});
    s.addImage({ path: A("play-w"), x: x + 0.36, y: y0 + 0.4, w: 0.2, h: 0.2 });
    txt(s, f.t, { x: x + 0.58, y: y0 + 0.3, w: 0.55, h: 0.4, fontSize: 10.5, bold: true, color: WHITE, valign: "middle" });
    txt(s, f.name, { x: x + 0.22, y: y0 + 2.3, w: w - 0.44, h: 0.35, fontSize: 13.5, bold: true, color: NAVY });
    s.addText([
      { text: "WATCH FOR:  ", options: { bold: true, fontSize: 9, color: STEEL } },
      { text: f.watch, options: { fontSize: 10, color: INK } },
    ], { x: x + 0.22, y: y0 + 2.7, w: w - 0.44, h: 1.3, fontFace: FONT, isTextBox: true, margin: 0 });
    if (i < 3) {
      s.addShape(pptx.shapes.RIGHT_ARROW, { x: x + w - 0.05, y: y0 + 1.0, w: 0.3, h: 0.32, fill: { color: STEEL_LT } });
    }
  });
  caption(s, "Play the clip once, then teach from the storyboard — frozen frames can be studied; a stream cannot.", 6.55);
  useWhen(s, "a video carries the skill — freeze its defining frames so learners can rehearse and review without scrubbing.", STEEL);
  s.addNotes("Timestamps let learners jump straight to a moment on rewatch. Four frames is the sweet spot — a storyboard of twelve is just a slower video.");
}

// ============================================================
// SLIDE 13 — DIVIDER I
// ============================================================
divider("I", "B56A6A", "Set the Standard",
  "Learners must judge the real thing. Show right beside wrong, hide hazards to hunt, rank real examples, and turn acceptance into a picture with criteria — the accurate image IS the standard.",
  [
    ["check-w", "I1", "Correct vs Incorrect", "Both versions, differences called out."],
    ["warn-w", "I2", "Spot the Hazards", "One real photo, problems hidden in plain sight."],
    ["medal-w", "I3", "Good · Better · Best", "Real examples ranked, upgrades named."],
    ["ruler-w", "I4", "Acceptance Card", "The reference photo plus pass/fail criteria."],
  ]);

// ============================================================
// SLIDE 14 — I1 CORRECT VS INCORRECT (pallet stacking)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "I1", "Correct vs Incorrect", "Example — pallet stacking: the difference between shipped and spilled", "I");

  const halves = [
    {
      x: 0.55, color: NAVY, icon: "check-w", label: "CORRECT", chk: "check-navy",
      points: [
        "Heavy boxes low — the load pyramids upward",
        "Wrap starts anchored to the pallet, three full turns",
        "Nothing past the pallet edge, any side",
      ],
      cap: "Photo: a load your best packer built",
    },
    {
      x: 6.83, color: RED, icon: "times-w", label: "INCORRECT", chk: "times-red",
      points: [
        "Heavy riding on light — the crush is already happening",
        "Wrap stops halfway; the top layer is loose freight",
        "Overhang past the edge — the next fork will clip it",
      ],
      cap: "Photo: the load before last month's spill",
    },
  ];
  halves.forEach((hf) => {
    const w = 5.95, y = 1.62;
    iconCircle(s, hf.icon, hf.color, hf.x, y, 0.5, 0.5);
    txt(s, hf.label, { x: hf.x + 0.65, y, w: 3, h: 0.5, fontSize: 17, bold: true, color: hf.color, valign: "middle", charSpacing: 1 });
    imgPlaceholder(s, hf.x, y + 0.65, w, 2.5, hf.cap);
    hf.points.forEach((p, j) => {
      const py = y + 3.35 + j * 0.56;
      s.addImage({ path: A(hf.chk), x: hf.x + 0.05, y: py + 0.05, w: 0.28, h: 0.28 });
      txt(s, p, { x: hf.x + 0.48, y: py, w: w - 0.55, h: 0.52, fontSize: 11, color: INK, valign: "middle" });
    });
  });
  connLine(s, 6.665, 1.7, 6.665, 6.6, { color: LINE, width: 1, dash: "dash" });
  useWhen(s, "learners must tell right from wrong at a glance — show both versions side by side and call out exactly what differs.", RED);
  s.addNotes("Use real photos from your own floor for both sides — the incorrect one especially. Recognition ('that's OUR aisle') is what turns a slide into a policy.");
}

// ============================================================
// SLIDE 15 — I2 SPOT THE HAZARDS (office fire safety)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "I2", "Spot the Hazards", "Example — the office fire-safety walk: five problems hiding in one photo", "I");

  const fx = 0.55, fy = 1.62, fw = 7.1, fh = 5.05;
  imgPlaceholder(s, fx, fy, fw, fh, "Replace with a REAL corridor or office photo — stage the five hazards yourself");
  const marks = [
    { x: 1.4, y: 2.2 }, { x: 5.9, y: 2.6 }, { x: 2.7, y: 5.05 }, { x: 6.2, y: 5.3 }, { x: 1.7, y: 5.95 },
  ];
  marks.forEach((m, i) => marker(s, i + 1, m.x, m.y, RED));

  txt(s, "THE FIVE PROBLEMS — reveal after the hunt", { x: 8.0, y: 1.55, w: 4.8, h: 0.26, fontSize: 8.5, bold: true, color: RED, charSpacing: 1 });
  const notes = [
    ["Boxes in front of the fire exit", "“just for today” — for three weeks"],
    ["Daisy-chained power strips", "one socket, six devices, warm plug"],
    ["Fire door propped open", "with the extinguisher, for irony"],
    ["Storage to the ceiling", "sprinkler needs 45 cm of clearance"],
    ["E-bike battery charging overnight", "unattended lithium is a fire plan"],
  ];
  notes.forEach((n, i) => {
    const y = 1.95 + i * 0.98;
    marker(s, i + 1, 8.0, y, RED, 0.36);
    txt(s, n[0], { x: 8.5, y: y - 0.03, w: 4.3, h: 0.3, fontSize: 11.5, bold: true, color: NAVY });
    txt(s, n[1], { x: 8.5, y: y + 0.26, w: 4.3, h: 0.28, fontSize: 9.5, italic: true, color: GRAY });
  });
  caption(s, "In the room: show the photo clean first and let the hunt run two minutes — markers and answers come after.", 6.8);
  useWhen(s, "hazards hide in plain sight — let learners hunt the real photo before you reveal the markers; found beats told.", RED);
  s.addNotes("Stage the photo deliberately with your facilities team — five findable hazards, no fake-looking props. Keep an unmarked copy as the exercise slide and this one as the reveal.");
}

// ============================================================
// SLIDE 16 — I3 GOOD · BETTER · BEST (defect photos)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "I3", "Good · Better · Best", "Example — photographing a defect: the evidence ladder", "I");

  const rungs = [
    { name: "GOOD", color: STEEL_LT, sub: "usable", pts: ["In focus, defect visible", "But: nothing for scale, no context"], up: "ADD: a coin or ruler for scale" },
    { name: "BETTER", color: STEEL, sub: "credible", pts: ["Scale reference in frame", "Part number readable"], up: "ADD: a second, wide shot for location" },
    { name: "BEST", color: NAVY, sub: "forensic", pts: ["Wide + close-up pair, same defect", "Label, timestamp, and batch in frame"], up: "This one survives the supplier dispute" },
  ];
  const w = 3.9, gap = 0.26, x0 = 0.55, y0 = 1.65;
  rungs.forEach((r, i) => {
    const x = x0 + i * (w + gap);
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: y0, w: 1.5, h: 0.44, fill: { color: r.color }, rectRadius: 0.08 });
    txt(s, r.name, { x, y: y0, w: 1.5, h: 0.44, fontSize: 11, bold: true, color: WHITE, align: "center", valign: "middle", charSpacing: 2 });
    txt(s, r.sub, { x: x + 1.65, y: y0, w: w - 1.65, h: 0.44, fontSize: 10, italic: true, color: GRAY, valign: "middle" });
    imgPlaceholder(s, x, y0 + 0.6, w, 2.45, "REAL example photo\nat this quality rung");
    r.pts.forEach((t, j) => {
      const y = y0 + 3.25 + j * 0.58;
      s.addShape(pptx.shapes.RECTANGLE, { x: x + 0.04, y: y + 0.05, w: 0.12, h: 0.42, fill: { color: r.color } });
      txt(s, t, { x: x + 0.28, y, w: w - 0.34, h: 0.56, fontSize: 9.5, color: INK });
    });
    s.addText([
      { text: i < 2 ? "TO CLIMB —  " : "THE BAR —  ", options: { bold: true, fontSize: 8.5, color: r.color } },
      { text: r.up, options: { fontSize: 9.5, italic: true, color: GRAY } },
    ], { x: x + 0.04, y: y0 + 4.45, w: w - 0.1, h: 0.5, fontFace: FONT, isTextBox: true, margin: 0 });
    if (i < 2) {
      s.addShape(pptx.shapes.RIGHT_ARROW, { x: x + w + 0.0, y: y0 + 1.6, w: 0.26, h: 0.32, fill: { color: STEEL_LT } });
    }
  });
  useWhen(s, "quality is a ladder, not a switch — rank real examples and name the one upgrade between each rung.", RED);
  s.addNotes("Use the learners' own submissions as next cohort's GOOD examples (with permission) — the ladder stays honest and the bar visibly rises.");
}

// ============================================================
// SLIDE 17 — I4 ACCEPTANCE CARD (ready-to-ship pallet)
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "I4", "Acceptance Card", "Example — “ready to ship”: one reference photo, criteria anyone can apply", "I");

  imgPlaceholder(s, 0.55, 1.62, 6.4, 4.95, "THE STANDARD — replace with a photo of your flagship pallet, shot straight-on");
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.85, y: 1.92, w: 2.3, h: 0.44, fill: { color: NAVY }, rectRadius: 0.1 });
  txt(s, "THE REFERENCE", { x: 0.85, y: 1.92, w: 2.3, h: 0.44, fontSize: 10, bold: true, color: WHITE, align: "center", valign: "middle", charSpacing: 1 });

  txt(s, "PASS — all five, every time", { x: 7.35, y: 1.62, w: 5.4, h: 0.3, fontSize: 12, bold: true, color: NAVY, charSpacing: 1 });
  const pass = [
    "Wrap anchored to the pallet, three full turns minimum",
    "Label on two adjacent sides, scannable at arm's length",
    "Height under 1.8 m — nothing above the top of the wrap",
    "Corner boards on any load marked fragile",
    "Zero overhang — run a palm down every edge",
  ];
  pass.forEach((p, i) => {
    const y = 2.0 + i * 0.56;
    s.addImage({ path: A("check-navy"), x: 7.35, y: y + 0.04, w: 0.26, h: 0.26 });
    txt(s, p, { x: 7.75, y, w: 5.0, h: 0.52, fontSize: 10.5, color: INK, valign: "middle" });
  });
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 7.35, y: 4.95, w: 5.4, h: 1.62, fill: { color: TINT_RED }, rectRadius: 0.07 });
  txt(s, "AUTO-REJECT — no discussion", { x: 7.65, y: 5.12, w: 4.9, h: 0.26, fontSize: 10, bold: true, color: RED, charSpacing: 1 });
  const rej = ["Any visible lean", "A crushed or wet box anywhere in the stack", "Hazard label missing where the manifest requires one"];
  rej.forEach((r, i) => {
    const y = 5.42 + i * 0.36;
    s.addImage({ path: A("times-red"), x: 7.65, y: y + 0.04, w: 0.22, h: 0.22 });
    txt(s, r, { x: 7.98, y, w: 4.6, h: 0.34, fontSize: 10, color: INK, valign: "middle" });
  });
  caption(s, "Laminate this card at the station — the deck version trains; the station version decides.", 6.75);
  useWhen(s, "acceptance is a judgment call today — turn it into a reference picture plus criteria that any trained eye applies the same way.", RED);
  s.addNotes("The photo carries what words can't (how tight 'tight wrap' looks); the criteria carry what photos can't (1.8 m, three turns). It takes both.");
}

// ============================================================
// SLIDE 18 — CHOOSER
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  txt(s, "QUICK REFERENCE", { x: 0.55, y: 0.32, w: 4, h: 0.28, fontSize: 11, bold: true, color: RED, charSpacing: 2 });
  txt(s, "Twelve ways to stage the real thing", { x: 0.55, y: 0.58, w: 11, h: 0.55, fontSize: 26, bold: true, color: NAVY });
  txt(s, "Point at it, walk through it, or judge it — pick by what the learner must do with the image.", { x: 0.55, y: 1.12, w: 11.5, h: 0.3, fontSize: 11.5, color: GRAY });

  const cols = [
    {
      key: "G", title: "SHOW ME WHERE", sub: "Point & Name",
      rows: [
        ["G1  Annotated tour", "numbered stops, in order"],
        ["G2  Labeled parts", "names on the real thing"],
        ["G3  Zoom detail", "whole for context, part magnified"],
        ["G4  Multi-view", "every angle the job needs"],
      ],
    },
    {
      key: "H", title: "SHOW ME HOW", sub: "Walk It Through",
      rows: [
        ["H1  Photo steps", "one photo per step"],
        ["H2  Screen flow", "one screenshot per decision"],
        ["H3  Before/during/after", "same angle, three moments"],
        ["H4  Demo storyboard", "a video's frames, frozen"],
      ],
    },
    {
      key: "I", title: "SHOW ME THE BAR", sub: "Set the Standard",
      rows: [
        ["I1  Correct vs incorrect", "both, differences named"],
        ["I2  Spot the hazards", "hunt first, reveal after"],
        ["I3  Good · better · best", "a ladder of real examples"],
        ["I4  Acceptance card", "reference photo + criteria"],
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
  txt(s, "And the golden rule: if accuracy doesn't matter, don't use a photo — use a diagram from Category 01.", { x: 0.55, y: 6.65, w: 12.23, h: 0.32, fontSize: 11.5, italic: true, color: GRAY, align: "center" });
}

// ---------- write ----------
const out = path.join(__dirname, "Category-03-Concrete-Visual-Bank.pptx");
pptx.writeFile({ fileName: out }).then(() => console.log("wrote", out));
