/* Deck 4 — Text + Image Combination Bank
 * 12 layouts in 3 families (lettering continues the A-I series):
 *   J Text-Led: concept intro, center image, split hero, statement + band
 *   K Balanced: tilted strips, arc cascade, wave circles, editorial rows
 *   L Image-Led: film strip, fan, mosaic + text tile, gallery wall
 * BOTH placeholders modeled: image frames ("REAL photo/screenshot") AND
 * guided text placeholders ("[Definition · 2-3 sentences ...]").
 */
const pptxgen = require("pptxgenjs");
const path = require("path");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
pptx.author = "L&D Template Bank";
pptx.title = "Text + Image Layout Bank";

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
  J: { color: NAVY, label: "J · TEXT-LED" },
  K: { color: STEEL, label: "K · BALANCED" },
  L: { color: RED, label: "L · IMAGE-LED" },
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
  txt(slide, "LAYOUT " + code, { x: 0.55, y: 0.32, w: 4, h: 0.28, fontSize: 11, bold: true, color: f.color, charSpacing: 2 });
  txt(slide, title, { x: 0.55, y: 0.58, w: 8.6, h: 0.55, fontSize: 26, bold: true, color: NAVY });
  txt(slide, sub, { x: 0.55, y: 1.12, w: 8.9, h: 0.3, fontSize: 11.5, color: GRAY });
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 9.55, y: 0.42, w: 3.23, h: 0.44, fill: { color: f.color }, rectRadius: 0.08 });
  txt(slide, f.label, { x: 9.55, y: 0.42, w: 3.23, h: 0.44, fontSize: 10.5, bold: true, color: WHITE, align: "center", valign: "middle" });
}

function useWhen(slide, text, color, x0) {
  const x = x0 || 0.55;
  iconCircle(slide, "lightbulb-navy", CARD, x, 6.98, 0.34, 0.55);
  slide.addText([
    { text: "USE WHEN  ", options: { bold: true, color, fontSize: 10.5 } },
    { text: text, options: { color: GRAY, fontSize: 10.5, italic: true } },
  ], { x: x + 0.45, y: 6.98, w: 12.35 - x, h: 0.36, fontFace: FONT, isTextBox: true, margin: 0, valign: "middle" });
}

function caption(slide, text, y) {
  txt(slide, text, { x: 0.55, y: y || 6.5, w: 12.23, h: 0.26, fontSize: 9, color: FAINT, align: "center" });
}

function imgPlaceholder(slide, x, y, w, h, label, icon) {
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: CARD }, line: { color: "B9C1CD", width: 1.25, dashType: "dash" }, rectRadius: 0.06 });
  const d = Math.min(0.7, h * 0.28, w * 0.28);
  slide.addImage({ path: A(icon || "camera-gray"), x: x + w / 2 - d / 2, y: y + h / 2 - d / 2 - (h > 1.4 ? 0.14 : 0), w: d, h: d });
  if (h > 1.4) {
    txt(slide, label, { x: x + 0.12, y: y + h / 2 + 0.16, w: w - 0.24, h: Math.min(0.6, h / 2 - 0.2), fontSize: 9, color: FAINT, align: "center" });
  }
}

// guided text placeholder (italic, bracketed)
function ph(slide, text, o) {
  txt(slide, text, Object.assign({ italic: true, color: GRAY }, o));
}

// ============================================================
// SLIDE 1 — TITLE
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: NAVY };
  txt(s, "DECK 4  ·  COMBINATION LAYOUTS", { x: 0.9, y: 1.25, w: 11.53, h: 0.32, fontSize: 12, bold: true, color: STEEL_LT, align: "center", charSpacing: 4 });
  txt(s, "Text + Image\nLayout Bank", { x: 0.9, y: 1.7, w: 11.53, h: 1.7, fontSize: 40, bold: true, color: WHITE, align: "center" });
  txt(s, "Twelve layouts that hold a concept's words AND its pictures — title, definition, breakdown, and image frames, all pre-placed", { x: 1.7, y: 3.5, w: 9.93, h: 0.6, fontSize: 15, color: "C9D4E6", align: "center" });

  const chips = [
    ["font-w", "J · Text-Led", "Concept intro · Center image · Split hero · Statement + band", NAVY_MID],
    ["balance-w", "K · Balanced", "Tilted strips · Arc cascade · Wave circles · Editorial rows", STEEL],
    ["image-w", "L · Image-Led", "Film strip · Fan · Mosaic + text tile · Gallery wall", RED],
  ];
  chips.forEach((c, i) => {
    const x = 0.9 + i * 3.98;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: 4.55, w: 3.75, h: 1.5, fill: { color: WHITE, transparency: 90 }, rectRadius: 0.08 });
    iconCircle(s, c[0], c[3], x + 0.28, 4.85, 0.62, 0.52);
    txt(s, c[1], { x: x + 1.02, y: 4.82, w: 2.68, h: 0.35, fontSize: 13, bold: true, color: WHITE });
    txt(s, c[2], { x: x + 1.02, y: 5.18, w: 2.68, h: 0.7, fontSize: 9.5, color: "BFCCE0" });
  });
  txt(s, "Text placeholders tell you what to write · image frames tell you what to shoot — nothing arrives empty", { x: 0.9, y: 6.6, w: 11.53, h: 0.3, fontSize: 11, color: "8FA3BC", align: "center" });
}

// ============================================================
// SLIDE 2 — FAMILY MAP + TEXT ANATOMY
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  txt(s, "THE MAP", { x: 0.55, y: 0.32, w: 4, h: 0.28, fontSize: 11, bold: true, color: RED, charSpacing: 2 });
  txt(s, "Who leads — the words or the pictures?", { x: 0.55, y: 0.58, w: 11.5, h: 0.55, fontSize: 26, bold: true, color: NAVY });
  txt(s, "Every layout carries the same four text parts (below). What changes is the balance of ink to image.", { x: 0.55, y: 1.12, w: 11.5, h: 0.3, fontSize: 11.5, color: GRAY });

  const cards = [
    {
      key: "J", icon: "font-w", name: "Text-Led", verb: "“The words teach; the image anchors.”",
      def: "Introducing a concept — a definition paragraph with breakdown structure, and one strong image for grounding.",
      tools: "Concept intro · Center image · Split hero · Statement + band",
    },
    {
      key: "K", icon: "balance-w", name: "Balanced", verb: "“Words and pictures share the frame.”",
      def: "Sets of results or facets — each image travels with its own stat, name, and two lines of text.",
      tools: "Tilted strips · Arc cascade · Wave circles · Editorial rows",
    },
    {
      key: "L", icon: "image-w", name: "Image-Led", verb: "“The pictures carry it; text captions.”",
      def: "Galleries, journeys, and collections — many images arranged with intent, text reduced to captions.",
      tools: "Film strip · Fan spread · Mosaic + text tile · Gallery wall",
    },
  ];
  cards.forEach((c, i) => {
    const f = FAM[c.key];
    const x = 0.55 + i * 4.18, y = 1.6, w = 3.98, h = 4.1;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: CARD }, rectRadius: 0.07 });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 1.0, fill: { color: f.color }, rectRadius: 0.07 });
    s.addShape(pptx.shapes.RECTANGLE, { x, y: y + 0.5, w, h: 0.5, fill: { color: f.color } });
    iconCircle(s, c.icon, c.key === "J" ? NAVY_MID : (c.key === "K" ? "6E87A8" : "AF5252"), x + 0.25, y + 0.19, 0.62, 0.52);
    txt(s, "FAMILY " + c.key + "  ·  4 LAYOUTS", { x: x + 1.02, y: y + 0.18, w: w - 1.2, h: 0.25, fontSize: 9, bold: true, color: "D8E0EC", charSpacing: 1 });
    txt(s, c.name, { x: x + 1.02, y: y + 0.42, w: w - 1.2, h: 0.4, fontSize: 15.5, bold: true, color: WHITE });
    txt(s, c.verb, { x: x + 0.28, y: y + 1.18, w: w - 0.56, h: 0.62, fontSize: 12.5, bold: true, italic: true, color: f.color });
    txt(s, c.def, { x: x + 0.28, y: y + 1.85, w: w - 0.56, h: 1.15, fontSize: 11, color: INK });
    txt(s, "IN THIS FAMILY", { x: x + 0.28, y: y + 3.05, w: w - 0.56, h: 0.24, fontSize: 9, bold: true, color: f.color, charSpacing: 2 });
    txt(s, c.tools, { x: x + 0.28, y: y + 3.33, w: w - 0.56, h: 0.7, fontSize: 10.5, color: GRAY });
  });

  // text anatomy strip
  txt(s, "THE TEXT ANATOMY — the same four placeholders, in every layout", { x: 0.55, y: 5.95, w: 12.23, h: 0.26, fontSize: 9, bold: true, color: NAVY, charSpacing: 2, align: "center" });
  const anatomy = [
    ["1 · TITLE", "the concept, in plain words"],
    ["2 · DEFINITION", "2–3 sentences, under 40 words"],
    ["3 · BREAKDOWN", "3–5 named parts, one line each"],
    ["4 · CAPTION", "under every image: what it proves"],
  ];
  anatomy.forEach((a, i) => {
    const x = 0.55 + i * 3.12;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: 6.28, w: 2.94, h: 0.62, fill: { color: TINT_NAVY }, rectRadius: 0.08 });
    txt(s, a[0], { x: x + 0.16, y: 6.36, w: 2.65, h: 0.22, fontSize: 9.5, bold: true, color: NAVY });
    txt(s, a[1], { x: x + 0.16, y: 6.58, w: 2.65, h: 0.24, fontSize: 8.5, italic: true, color: GRAY });
  });
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
// SLIDE 3 — DIVIDER J
// ============================================================
divider("J", "44598C", "Text-Led",
  "For introducing a concept: the definition paragraph does the teaching, the breakdown gives it structure, and one strong image keeps it concrete. The words lead; the picture anchors.",
  [
    ["font-w", "J1", "Concept Intro", "Definition + breakdown left, hero image right."],
    ["bullseye-w", "J2", "Center Image", "The image in the middle; text orbits it."],
    ["columns-w", "J3", "Split Hero", "Full-height image beside a clean text panel."],
    ["comments-w", "J4", "Statement + Band", "One bold claim, a paragraph, an image band."],
  ]);

// ============================================================
// SLIDE 4 — J1 CONCEPT INTRO
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "J1", "Concept Intro", "The workhorse — introduce any new concept: define it, break it down, ground it", "J");

  // text side
  txt(s, "THE CONCEPT", { x: 0.55, y: 1.62, w: 3, h: 0.24, fontSize: 9, bold: true, color: RED, charSpacing: 2 });
  txt(s, "[Concept name — in plain words]", { x: 0.55, y: 1.88, w: 6.5, h: 0.5, fontSize: 21, bold: true, color: NAVY });
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.55, y: 2.5, w: 6.45, h: 1.2, fill: { color: TINT_NAVY }, rectRadius: 0.07 });
  ph(s, "[Definition · 2–3 sentences in plain language: what it is, what it does on the job, and why this audience should care. Under 40 words — the breakdown below carries the detail.]", { x: 0.8, y: 2.66, w: 5.95, h: 0.9, fontSize: 11, valign: "top" });
  txt(s, "THE BREAKDOWN", { x: 0.55, y: 3.95, w: 3, h: 0.24, fontSize: 9, bold: true, color: NAVY, charSpacing: 2 });
  const parts = [NAVY, STEEL, RED];
  parts.forEach((c, i) => {
    const y = 4.28 + i * 0.82;
    s.addShape(pptx.shapes.OVAL, { x: 0.55, y, w: 0.42, h: 0.42, fill: { color: c } });
    txt(s, String(i + 1), { x: 0.55, y, w: 0.42, h: 0.42, fontSize: 12, bold: true, color: WHITE, align: "center", valign: "middle" });
    txt(s, "[Part " + (i + 1) + " — name it]", { x: 1.15, y: y - 0.02, w: 5.85, h: 0.3, fontSize: 12.5, bold: true, color: NAVY });
    ph(s, "[One line — what this part covers, in the learner's words.]", { x: 1.15, y: y + 0.28, w: 5.85, h: 0.28, fontSize: 10 });
  });

  // image side
  imgPlaceholder(s, 7.4, 1.62, 5.38, 4.85, "REAL photo or screenshot —\nthe concept in its natural habitat");
  ph(s, "[Caption — what this image proves about the concept.]", { x: 7.4, y: 6.55, w: 5.38, h: 0.28, fontSize: 9.5, align: "center" });

  useWhen(s, "you introduce any new concept — definition first, breakdown for structure, one accurate image so it never stays abstract.", NAVY);
  s.addNotes("The 40-word cap on the definition is the discipline of this layout: everything longer belongs in the breakdown rows or in your narration, not on the slide.");
}

// ============================================================
// SLIDE 5 — J2 CENTER IMAGE
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "J2", "Center Image", "The image in the middle — four text callouts orbit the thing itself", "J");

  // definition strip
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.55, y: 1.55, w: 12.23, h: 0.72, fill: { color: TINT_NAVY }, rectRadius: 0.07 });
  ph(s, "[Definition · one or two sentences framing what sits in the middle — and why every part around it matters.]", { x: 0.85, y: 1.55, w: 11.6, h: 0.72, fontSize: 11, valign: "middle" });

  // center image
  const ix = 4.55, iy = 2.55, iw = 4.2, ih = 3.3;
  imgPlaceholder(s, ix, iy, iw, ih, "REAL image —\nthe thing itself, centered");
  ph(s, "[Caption — name exactly what we are looking at.]", { x: ix, y: iy + ih + 0.1, w: iw, h: 0.28, fontSize: 9.5, align: "center" });

  // callouts
  const callouts = [
    { x: 0.55, y: 2.6, side: "L", color: NAVY },
    { x: 0.55, y: 4.5, side: "L", color: STEEL },
    { x: 9.25, y: 2.6, side: "R", color: NAVY_MID },
    { x: 9.25, y: 4.5, side: "R", color: RED },
  ];
  callouts.forEach((c, i) => {
    const w = 3.55;
    txt(s, "[Part " + (i + 1) + " — name it]", { x: c.x, y: c.y, w, h: 0.3, fontSize: 12.5, bold: true, color: c.color, align: c.side === "L" ? "right" : "left" });
    ph(s, "[One line — what this part does, or what to notice about it in the image.]", { x: c.x, y: c.y + 0.3, w, h: 0.55, fontSize: 9.5, align: c.side === "L" ? "right" : "left" });
    const lx1 = c.side === "L" ? c.x + w + 0.08 : c.x - 0.08;
    const lx2 = c.side === "L" ? ix : ix + iw;
    connLine(s, lx1, c.y + 0.4, lx2, c.y + 0.55, { color: "AEB7C6", width: 1.25 });
    s.addShape(pptx.shapes.OVAL, { x: lx2 - 0.06, y: c.y + 0.49, w: 0.12, h: 0.12, fill: { color: c.color } });
  });

  useWhen(s, "one real thing has parts worth naming — put its image in the middle and let the text orbit, close enough to point.", NAVY);
  s.addNotes("Keep callout lines short and never crossing — if a line has to travel, move the callout, not the line.");
}

// ============================================================
// SLIDE 6 — J3 SPLIT HERO
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  // full-height image left
  imgPlaceholder(s, 0, 0, 5.65, 7.5, "REAL image, full height —\nchoose one with a calm area\nso it can breathe");
  // right panel
  txt(s, "LAYOUT J3", { x: 6.15, y: 0.5, w: 3, h: 0.28, fontSize: 11, bold: true, color: NAVY, charSpacing: 2 });
  const f = FAM.J;
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 9.55, y: 0.42, w: 3.23, h: 0.44, fill: { color: f.color }, rectRadius: 0.08 });
  txt(s, f.label, { x: 9.55, y: 0.42, w: 3.23, h: 0.44, fontSize: 10.5, bold: true, color: WHITE, align: "center", valign: "middle" });
  txt(s, "Split Hero", { x: 6.15, y: 0.82, w: 6.5, h: 0.55, fontSize: 26, bold: true, color: NAVY });
  txt(s, "Half the slide is image, half is words — nothing competes", { x: 6.15, y: 1.36, w: 6.5, h: 0.3, fontSize: 11.5, color: GRAY });

  txt(s, "[Concept name — in plain words]", { x: 6.15, y: 2.1, w: 6.6, h: 0.5, fontSize: 20, bold: true, color: NAVY });
  ph(s, "[Definition · 2–3 sentences. The image on the left sets the scene; this paragraph says what the scene means. Keep them talking about the same thing.]", { x: 6.15, y: 2.7, w: 6.55, h: 0.95, fontSize: 11.5 });
  const rows = ["[Part 1 — name it]", "[Part 2 — name it]", "[Part 3 — name it]"];
  rows.forEach((r, i) => {
    const y = 3.85 + i * 0.72;
    s.addImage({ path: A("check-navy"), x: 6.15, y: y + 0.02, w: 0.28, h: 0.28 });
    txt(s, r, { x: 6.58, y, w: 2.9, h: 0.3, fontSize: 12, bold: true, color: NAVY });
    ph(s, "[one line of detail]", { x: 9.55, y, w: 3.2, h: 0.3, fontSize: 10.5 });
  });
  // stat chip
  s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.15, y: 6.1, w: 6.63, h: 0.62, fill: { color: TINT_RED }, rectRadius: 0.09 });
  txt(s, "+XX%", { x: 6.4, y: 6.1, w: 1.3, h: 0.62, fontSize: 18, bold: true, color: RED, valign: "middle" });
  ph(s, "[the one number that makes this concept worth the room's time]", { x: 7.75, y: 6.1, w: 4.9, h: 0.62, fontSize: 10.5, valign: "middle" });

  useWhen(s, "one strong image can hold half the slide — give it the space, and keep every word in the other half.", NAVY, 6.15);
  s.addNotes("The image must earn 42% of the slide: real, high-resolution, and with a calm zone. If you're tempted to shrink it to fit more text, this is the wrong layout — use J1.");
}

// ============================================================
// SLIDE 7 — J4 STATEMENT + BAND
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "J4", "Statement + Band", "One bold claim, one supporting paragraph, three images as evidence", "J");

  txt(s, "[The takeaway in one bold sentence — say the point, not the topic.]", { x: 0.55, y: 1.7, w: 12.23, h: 0.85, fontSize: 22, bold: true, color: NAVY, italic: true });
  ph(s, "[Supporting paragraph · 3–4 sentences that earn the claim above: the situation, what changed, and what the evidence below shows. This is the only paragraph on the slide — let it work.]", { x: 0.55, y: 2.65, w: 12.23, h: 0.75, fontSize: 11.5 });

  for (let i = 0; i < 3; i++) {
    const x = 0.55 + i * 4.18;
    imgPlaceholder(s, x, 3.6, 3.98, 2.5, "REAL image " + (i + 1) + " —\nevidence, not decoration");
    ph(s, "[caption — what this image proves]", { x, y: 6.2, w: 3.98, h: 0.28, fontSize: 9.5, align: "center" });
  }
  useWhen(s, "you have a point to land and pictures to prove it — claim first, paragraph second, evidence band third.", NAVY);
  s.addNotes("Read the claim aloud before showing the band. If the images don't visibly back the sentence, they're decoration — swap them or cut them.");
}

// ============================================================
// SLIDE 8 — DIVIDER K
// ============================================================
divider("K", "7E94B0", "Balanced",
  "Sets of results, facets, or places — every image travels with its own stat, name, and two lines of text. The arrangement adds energy; the text keeps it honest.",
  [
    ["exchange-w", "K1", "Tilted Strips", "Four skewed image columns, stat + text under each."],
    ["route-w", "K2", "Arc Cascade", "Text block left, images sweeping an arc right."],
    ["circles-w", "K3", "Wave Circles", "Five circular images riding a wave band."],
    ["thlist-w", "K4", "Editorial Rows", "Image-text, text-image — the magazine spread."],
  ]);

// ============================================================
// SLIDE 9 — K1 TILTED STRIPS
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "K1", "Tilted Strips", "Four results, four skewed image columns — motion without chaos", "K");

  ph(s, "[Optional intro — one sentence naming what these four results have in common.]", { x: 0.55, y: 1.5, w: 12.23, h: 0.3, fontSize: 10.5, align: "center" });

  const colors = [NAVY, NAVY_MID, STEEL, RED];
  for (let i = 0; i < 4; i++) {
    const x = 0.55 + i * 3.12, w = 2.95;
    s.addShape(pptx.shapes.PARALLELOGRAM, { x, y: 1.95, w, h: 2.75, fill: { color: CARD }, line: { color: "B9C1CD", width: 1.25, dashType: "dash" } });
    s.addImage({ path: A("camera-gray"), x: x + w / 2 - 0.3, y: 3.0, w: 0.6, h: 0.6 });
    txt(s, "REAL image — tall crop", { x: x + 0.35, y: 3.68, w: w - 0.7, h: 0.26, fontSize: 8.5, color: FAINT, align: "center" });
    txt(s, "+XX%", { x, y: 4.95, w, h: 0.5, fontSize: 24, bold: true, color: colors[i] });
    txt(s, "[Metric name]", { x, y: 5.48, w, h: 0.3, fontSize: 12.5, bold: true, color: NAVY });
    ph(s, "[Two lines — what moved, and the one action that moved it.]", { x, y: 5.8, w: w - 0.15, h: 0.6, fontSize: 9.5 });
  }
  useWhen(s, "four wins share a stage — the skew adds momentum, and every image still carries its own stat and two honest lines.", STEEL);
  s.addNotes("Crop the four photos to the same visual weight before skewing — one busy image in a tilted row breaks the rhythm twice as loudly.");
}

// ============================================================
// SLIDE 10 — K2 ARC CASCADE
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  // arc backdrop first, so the header chip paints on top of it
  s.addShape(pptx.shapes.OVAL, { x: 7.3, y: -3.1, w: 10.6, h: 13.6, fill: { color: TINT_STEEL } });
  header(s, "K2", "Arc Cascade", "Text block left, five images sweeping an arc", "K");

  // left text block
  txt(s, "[Concept or place name]", { x: 0.55, y: 1.75, w: 6.3, h: 0.5, fontSize: 20, bold: true, color: NAVY });
  ph(s, "[Definition · 2–3 sentences: what this place, program, or portfolio is — and what the cascade of images at right walks the viewer through.]", { x: 0.55, y: 2.35, w: 6.1, h: 0.95, fontSize: 11.5 });
  const stats = [
    ["users-w", NAVY], ["chart-w", STEEL], ["bullseye-w", RED],
  ];
  stats.forEach((st, i) => {
    const x = 0.55 + i * 2.1;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: 3.55, w: 1.95, h: 1.45, fill: { color: CARD }, rectRadius: 0.08 });
    iconCircle(s, st[0], st[1], x + 0.2, 3.75, 0.5, 0.5);
    txt(s, "XX", { x: x + 0.85, y: 3.7, w: 1.0, h: 0.55, fontSize: 20, bold: true, color: st[1] });
    ph(s, "[metric label]", { x: x + 0.2, y: 4.4, w: 1.6, h: 0.5, fontSize: 9 });
  });
  ph(s, "[Closing line — the invitation: what to look for as the images sweep down the arc.]", { x: 0.55, y: 5.25, w: 6.1, h: 0.6, fontSize: 10.5 });

  // cascade images (growing along the arc)
  const cascade = [
    [8.0, 1.2, 1.45, 1.05],
    [9.0, 2.02, 1.6, 1.15],
    [9.8, 2.98, 1.75, 1.3],
    [10.35, 4.1, 1.9, 1.4],
    [10.55, 5.28, 2.0, 1.42],
  ];
  cascade.forEach((c) => imgPlaceholder(s, c[0], c[1], c[2], c[3], ""));

  useWhen(s, "five images tell one story with a direction — the arc gives the eye a path, the text block says why the journey matters.", STEEL);
  s.addNotes("Order the cascade deliberately — smallest to largest reads as approach, largest to smallest as departure. Pick one and load the photos to match.");
}

// ============================================================
// SLIDE 11 — K3 WAVE CIRCLES
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "K3", "Wave Circles", "Five facets riding one wave — softer than a grid, calmer than a collage", "K");

  ph(s, "[Definition · one sentence naming what these five facets belong to.]", { x: 0.55, y: 1.5, w: 12.23, h: 0.3, fontSize: 10.5, align: "center" });

  // wave band
  s.addShape(pptx.shapes.WAVE, { x: -0.3, y: 3.15, w: 13.95, h: 1.7, fill: { color: TINT_STEEL } });

  const cxs = [1.75, 4.2, 6.665, 9.13, 11.58];
  const cys = [3.35, 3.75, 3.98, 3.75, 3.35];
  const colors = [NAVY, NAVY_MID, STEEL, NAVY_MID, RED];
  cxs.forEach((cx, i) => {
    const d = 1.6, x = cx - d / 2, y = cys[i] - d / 2;
    s.addShape(pptx.shapes.OVAL, { x, y, w: d, h: d, fill: { color: CARD }, line: { color: "B9C1CD", width: 1.25, dashType: "dash" } });
    s.addImage({ path: A("camera-gray"), x: cx - 0.26, y: cys[i] - 0.26, w: 0.52, h: 0.52 });
    txt(s, "[Facet " + (i + 1) + "]", { x: cx - 1.15, y: 5.35, w: 2.3, h: 0.3, fontSize: 12, bold: true, color: colors[i], align: "center" });
    ph(s, "[two lines — what this facet is and the image to use]", { x: cx - 1.15, y: 5.66, w: 2.3, h: 0.6, fontSize: 9, align: "center" });
  });
  useWhen(s, "five parallel facets deserve equal weight — the wave keeps them one family while each keeps its own name and note.", STEEL);
  s.addNotes("Crop all five photos as circles with the subject centered — an off-center subject inside a circle reads as a mistake, not a style.");
}

// ============================================================
// SLIDE 12 — K4 EDITORIAL ROWS
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "K4", "Editorial Rows", "Image-text, then text-image — the magazine spread that never tires", "K");

  // row 1: image left, text right
  imgPlaceholder(s, 0.55, 1.62, 4.35, 2.45, "REAL image —\nwide crop, one subject");
  txt(s, "[Section head — the first idea]", { x: 5.25, y: 1.75, w: 7.5, h: 0.35, fontSize: 15, bold: true, color: NAVY });
  ph(s, "[Short paragraph · 2–3 sentences that this image illustrates. Write the paragraph first, then choose the image that proves it — never the reverse.]", { x: 5.25, y: 2.15, w: 7.45, h: 0.85, fontSize: 11 });
  ph(s, "[detail line — one fact, date, or number worth pulling out]", { x: 5.25, y: 3.15, w: 7.45, h: 0.3, fontSize: 10, bold: true });

  connLine(s, 0.55, 4.3, 12.78, 4.3, { color: LINE, width: 1 });

  // row 2: text left, image right
  txt(s, "[Section head — the second idea]", { x: 0.55, y: 4.55, w: 7.5, h: 0.35, fontSize: 15, bold: true, color: NAVY });
  ph(s, "[Short paragraph · 2–3 sentences. Alternating sides keeps the reading rhythm — eye lands on image, slides to text, and back.]", { x: 0.55, y: 4.95, w: 7.45, h: 0.85, fontSize: 11 });
  ph(s, "[detail line — one fact, date, or number worth pulling out]", { x: 0.55, y: 5.95, w: 7.45, h: 0.3, fontSize: 10, bold: true });
  imgPlaceholder(s, 8.43, 4.42, 4.35, 2.45, "REAL image —\nwide crop, one subject");

  useWhen(s, "two or three ideas each deserve a paragraph and a picture — alternate the sides and the page reads itself.", STEEL);
  s.addNotes("This is the safest layout in the deck — when in doubt, editorial rows. It scales to three rows if the paragraphs shrink to two lines.");
}

// ============================================================
// SLIDE 13 — DIVIDER L
// ============================================================
divider("L", "B56A6A", "Image-Led",
  "Galleries, journeys, and collections — many images arranged with intent, text reduced to captions that name what each picture proves. The pictures carry it.",
  [
    ["film-w", "L1", "Film Strip", "A journey in frames, captions running beneath."],
    ["shapes-w", "L2", "Fan Spread", "Five images fanned like a hand of cards."],
    ["grid-w", "L3", "Mosaic + Text Tile", "A gallery grid with one tile that talks."],
    ["image-w", "L4", "Gallery Wall", "Staggered frames hung from a rail."],
  ]);

// ============================================================
// SLIDE 14 — L1 FILM STRIP
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "L1", "Film Strip", "A journey in four frames — the strip implies time so you don't have to", "L");

  ph(s, "[Intro line — name the journey these frames walk through, start to finish.]", { x: 0.55, y: 1.5, w: 12.23, h: 0.3, fontSize: 10.5, align: "center" });

  // strip band
  s.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 2.0, w: 13.34, h: 2.95, fill: { color: NAVY } });
  // sprocket holes
  for (let i = 0; i < 24; i++) {
    const x = 0.18 + i * 0.56;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: 2.14, w: 0.16, h: 0.14, fill: { color: WHITE, transparency: 25 }, rectRadius: 0.03 });
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y: 4.67, w: 0.16, h: 0.14, fill: { color: WHITE, transparency: 25 }, rectRadius: 0.03 });
  }
  for (let i = 0; i < 4; i++) {
    const x = 0.85 + i * 3.2;
    imgPlaceholder(s, x, 2.45, 2.75, 2.05, "REAL frame " + (i + 1));
    txt(s, "[Frame " + (i + 1) + " — moment name]", { x, y: 5.3, w: 2.75, h: 0.3, fontSize: 12, bold: true, color: NAVY });
    ph(s, "[caption — what happens here, one line]", { x, y: 5.62, w: 2.75, h: 0.55, fontSize: 9.5 });
  }
  useWhen(s, "moments belong in strict order and the pictures carry them — the strip says 'time passes' before a single word is read.", RED);
  s.addNotes("Left-to-right is the timeline; never break it. If a moment needs more than a one-line caption, it has outgrown the strip — promote it to H1 photo steps.");
}

// ============================================================
// SLIDE 15 — L2 FAN SPREAD
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "L2", "Fan Spread", "Five images fanned like a hand of cards — a collection with one center of gravity", "L");

  const cx = 6.665, cy = 6.28, r = 3.35;
  const angles = [-52, -26, 0, 26, 52];
  const fw = 1.85, fh = 2.45;
  angles.forEach((a, i) => {
    const rad = (a * Math.PI) / 180;
    const fx = cx + r * Math.sin(rad) - fw / 2;
    const fy = cy - r * Math.cos(rad) - fh / 2;
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: fx, y: fy, w: fw, h: fh, fill: { color: CARD }, line: { color: "B9C1CD", width: 1.25, dashType: "dash" }, rectRadius: 0.06, rotate: a });
    s.addImage({ path: A("camera-gray"), x: fx + fw / 2 - 0.26, y: fy + fh / 2 - 0.26, w: 0.52, h: 0.52 });
  });
  // center hub
  s.addShape(pptx.shapes.OVAL, { x: cx - 0.875, y: 4.72, w: 1.75, h: 1.75, fill: { color: RED }, shadow: { type: "outer", color: "9AA3B2", blur: 6, offset: 2, angle: 90, opacity: 0.35 } });
  txt(s, "[Collection\nname]", { x: cx - 0.875, y: 5.17, w: 1.75, h: 0.85, fontSize: 12, bold: true, color: WHITE, align: "center" });
  ph(s, "[Caption line — what unites the five cards, and the order to read them: left to right.]", { x: 2.5, y: 6.62, w: 8.33, h: 0.28, fontSize: 9.5, align: "center" });

  useWhen(s, "a set has no sequence but one shared identity — the fan says 'family' while each card stays its own picture.", RED, 0.55);
  s.addNotes("Give every card the same portrait crop. Name each card verbally as you gesture across the fan — the layout is built for that sweep.");
}

// ============================================================
// SLIDE 16 — L3 MOSAIC + TEXT TILE
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "L3", "Mosaic + Text Tile", "A gallery grid where one tile talks — the text lives inside the mosaic", "L");

  const tw = 3.98, th = 2.42, gap = 0.14;
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 3; c++) {
      const x = 0.55 + c * (tw + gap), y = 1.62 + r * (th + gap);
      if (r === 0 && c === 1) {
        s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x, y, w: tw, h: th, fill: { color: NAVY }, rectRadius: 0.06 });
        txt(s, "[Collection name]", { x: x + 0.3, y: y + 0.3, w: tw - 0.6, h: 0.4, fontSize: 16, bold: true, color: WHITE });
        txt(s, "[Three lines — what unites these five images, what to notice in each, and the one you should remember.]", { x: x + 0.3, y: y + 0.8, w: tw - 0.6, h: 1.1, fontSize: 10.5, italic: true, color: "D9E0EC" });
        txt(s, "[X images · one story]", { x: x + 0.3, y: y + 1.98, w: tw - 0.6, h: 0.26, fontSize: 9, bold: true, color: STEEL_LT, charSpacing: 1 });
      } else {
        imgPlaceholder(s, x, y, tw, th, "REAL image —\nsame treatment as its neighbors");
        s.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: x + 0.14, y: y + th - 0.48, w: 1.7, h: 0.34, fill: { color: WHITE }, line: { color: LINE, width: 1 }, rectRadius: 0.1 });
        ph(s, "[caption]", { x: x + 0.28, y: y + th - 0.48, w: 1.45, h: 0.34, fontSize: 8.5, valign: "middle" });
      }
    }
  }
  useWhen(s, "the pictures are the point but the set still needs a voice — embed one text tile and keep the grid unbroken.", RED);
  s.addNotes("The text tile sits at position two, where the eye lands second — it introduces the set after the first image has already hooked attention.");
}

// ============================================================
// SLIDE 17 — L4 GALLERY WALL
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  header(s, "L4", "Gallery Wall", "Staggered frames hung from a rail — five moments, casually formal", "L");

  // rail
  connLine(s, 0.7, 1.8, 12.63, 1.8, { color: NAVY, width: 2.5 });
  const frames = [
    { x: 0.85, y: 2.5, w: 2.15, h: 1.6 },
    { x: 3.3, y: 3.1, w: 2.15, h: 1.6 },
    { x: 5.7, y: 2.3, w: 2.15, h: 1.6 },
    { x: 8.1, y: 3.25, w: 2.15, h: 1.6 },
    { x: 10.5, y: 2.65, w: 2.15, h: 1.6 },
  ];
  frames.forEach((fr, i) => {
    connLine(s, fr.x + fr.w / 2, 1.8, fr.x + fr.w / 2, fr.y, { color: "AEB7C6", width: 1 });
    imgPlaceholder(s, fr.x, fr.y, fr.w, fr.h, "");
    txt(s, "[Moment " + (i + 1) + "]", { x: fr.x - 0.2, y: fr.y + fr.h + 0.12, w: fr.w + 0.4, h: 0.28, fontSize: 11, bold: true, color: NAVY, align: "center" });
    ph(s, "[one-line caption]", { x: fr.x - 0.2, y: fr.y + fr.h + 0.4, w: fr.w + 0.4, h: 0.28, fontSize: 9, align: "center" });
  });
  ph(s, "[Closing line — what this wall adds up to: the year, the team, the journey, the proof.]", { x: 0.55, y: 6.35, w: 12.23, h: 0.3, fontSize: 10.5, align: "center" });

  useWhen(s, "you are honoring a set of moments — the stagger feels human, the rail keeps it a collection instead of clutter.", RED);
  s.addNotes("Vary frame heights, never widths — the rail plus equal widths is what keeps the stagger from reading as misalignment. Perfect for retrospectives and team-year-in-review closers.");
}

// ============================================================
// SLIDE 18 — CHOOSER
// ============================================================
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  txt(s, "QUICK REFERENCE", { x: 0.55, y: 0.32, w: 4, h: 0.28, fontSize: 11, bold: true, color: RED, charSpacing: 2 });
  txt(s, "Twelve ways to marry words and pictures", { x: 0.55, y: 0.58, w: 11, h: 0.55, fontSize: 26, bold: true, color: NAVY });
  txt(s, "Ask who leads. Then fill the four text placeholders — title, definition, breakdown, captions — before you touch a single image.", { x: 0.55, y: 1.12, w: 12.0, h: 0.3, fontSize: 11.5, color: GRAY });

  const cols = [
    {
      key: "J", title: "WORDS LEAD", sub: "Text-Led",
      rows: [
        ["J1  Concept intro", "define, break down, ground"],
        ["J2  Center image", "text orbits the thing itself"],
        ["J3  Split hero", "half image, half words"],
        ["J4  Statement + band", "claim, paragraph, evidence"],
      ],
    },
    {
      key: "K", title: "THEY SHARE", sub: "Balanced",
      rows: [
        ["K1  Tilted strips", "four results with momentum"],
        ["K2  Arc cascade", "a guided visual journey"],
        ["K3  Wave circles", "five facets, equal weight"],
        ["K4  Editorial rows", "the magazine spread"],
      ],
    },
    {
      key: "L", title: "PICTURES LEAD", sub: "Image-Led",
      rows: [
        ["L1  Film strip", "time in frames"],
        ["L2  Fan spread", "one family of images"],
        ["L3  Mosaic + text tile", "a grid with a voice"],
        ["L4  Gallery wall", "moments on a rail"],
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
  txt(s, "Write the words first, then shoot for the frames — a layout filled text-first never ends up with orphan images.", { x: 0.55, y: 6.65, w: 12.23, h: 0.32, fontSize: 11.5, italic: true, color: GRAY, align: "center" });
}

// ---------- write ----------
const out = path.join(__dirname, "Text-Image-Combination-Bank.pptx");
pptx.writeFile({ fileName: out }).then(() => console.log("wrote", out));
