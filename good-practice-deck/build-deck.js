/* Good Practice Initiative — team briefing deck
 *
 * Introduces the e-learning design & assessment good-practice initiative to
 * instructional designers: why we do it, the six lenses and their evidence,
 * how to capture and document good practices, and how we roll it out.
 *
 * Style follows ../template-bank (navy / steel / muted-red palette, Calibri,
 * white icons in colored circles). Build:  node build-deck.js
 */
const pptxgen = require("pptxgenjs");
const path = require("path");

const OUT = path.join(__dirname, "Good-Practice-Initiative-Team-Briefing.pptx");

// ---------- palette (shared with template-bank) ----------
const NAVY = "1F3864";
const NAVY_MID = "3A5787";
const STEEL = "5B7699";
const STEEL_LT = "8FA3BC";
const RED = "9E3B3B";
const INK = "3A4150";
const GRAY = "6E7686";
const LINE = "D3D8E0";
const TINT_NAVY = "E9EDF4";
const TINT_RED = "F4E9E9";
const WHITE = "FFFFFF";
const FONT = "Calibri";

const THEME = {
  name: "Good Practice Initiative",
  headFontFace: FONT,
  bodyFontFace: FONT,
  colors: {
    dk1: INK, lt1: WHITE, dk2: NAVY, lt2: TINT_NAVY,
    accent1: NAVY, accent2: STEEL, accent3: RED,
    accent4: NAVY_MID, accent5: STEEL_LT, accent6: GRAY,
    hlink: NAVY_MID, folHlink: STEEL,
  },
};

const ICON = (n) => path.join(__dirname, "..", "template-bank", "assets", n + ".png");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5 in
pres.theme = { headFontFace: FONT, bodyFontFace: FONT };
pres.author = "Instructional Design Team";
pres.title = "Good Practice Initiative: Team Briefing";
pres.subject = "Finding, documenting and reusing e-learning design and assessment good practices";

// ---------- layouts ----------
const FOOTER = "Good Practice Initiative  ·  E-learning design and assessment";

pres.defineSlideMaster({
  title: "TITLE",
  background: { color: NAVY },
  objects: [
    { placeholder: { options: { name: "kicker", type: "body", x: 0.9, y: 1.25, w: 11.5, h: 0.4, fontFace: FONT, fontSize: 14, bold: true, color: STEEL_LT, margin: 0, valign: "top", align: "left" }, text: "" } },
    { placeholder: { options: { name: "title", type: "title", x: 0.9, y: 1.7, w: 11.5, h: 0.95, fontFace: FONT, fontSize: 44, bold: true, color: WHITE, margin: 0, valign: "top", align: "left" }, text: "" } },
    { placeholder: { options: { name: "subtitle", type: "body", x: 0.9, y: 2.75, w: 10.8, h: 0.9, fontFace: FONT, fontSize: 20, color: TINT_NAVY, margin: 0, valign: "top", align: "left" }, text: "" } },
  ],
});

pres.defineSlideMaster({
  title: "SECTION",
  background: { color: NAVY },
  objects: [
    { placeholder: { options: { name: "kicker", type: "body", x: 0.9, y: 2.75, w: 11.5, h: 0.4, fontFace: FONT, fontSize: 14, bold: true, color: STEEL_LT, margin: 0, valign: "top", align: "left" }, text: "" } },
    { placeholder: { options: { name: "title", type: "title", x: 0.9, y: 3.15, w: 11.5, h: 0.95, fontFace: FONT, fontSize: 40, bold: true, color: WHITE, margin: 0, valign: "top", align: "left" }, text: "" } },
    { placeholder: { options: { name: "body", type: "body", x: 0.9, y: 4.15, w: 10.5, h: 0.8, fontFace: FONT, fontSize: 18, color: TINT_NAVY, margin: 0, valign: "top", align: "left" }, text: "" } },
  ],
});

pres.defineSlideMaster({
  title: "CONTENT",
  background: { color: WHITE },
  objects: [
    { placeholder: { options: { name: "kicker", type: "body", x: 0.6, y: 0.32, w: 10, h: 0.3, fontFace: FONT, fontSize: 12, bold: true, color: RED, margin: 0, valign: "top", align: "left" }, text: "" } },
    { placeholder: { options: { name: "title", type: "title", x: 0.6, y: 0.6, w: 12.13, h: 0.55, fontFace: FONT, fontSize: 30, bold: true, color: NAVY, margin: 0, valign: "top", align: "left" }, text: "" } },
    { placeholder: { options: { name: "subtitle", type: "body", x: 0.6, y: 1.15, w: 12.13, h: 0.36, fontFace: FONT, fontSize: 17, color: NAVY_MID, margin: 0, valign: "top", align: "left" }, text: "" } },
    { text: { text: FOOTER, options: { x: 0.6, y: 7.0, w: 8, h: 0.3, fontFace: FONT, fontSize: 10, color: GRAY, margin: 0, valign: "middle" } } },
  ],
  slideNumber: { x: 12.13, y: 7.0, w: 0.6, h: 0.3, fontFace: FONT, fontSize: 10, color: GRAY, align: "right" },
});

// ---------- helpers ----------
function T(slide, text, o) {
  slide.addText(text, Object.assign({ fontFace: FONT, isTextBox: true, margin: 0, valign: "top", color: INK }, o));
}
function card(slide, x, y, w, h, fill, extra) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, Object.assign({ x, y, w, h, fill: { color: fill }, line: { color: fill, width: 0 }, rectRadius: 0.08 }, extra || {}));
}
function iconCircle(slide, icon, color, x, y, d, scale) {
  const s = scale || 0.52;
  slide.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color }, line: { color, width: 0 } });
  const id = d * s;
  slide.addImage({ path: ICON(icon), x: x + (d - id) / 2, y: y + (d - id) / 2, w: id, h: id });
}
function numCircle(slide, n, color, x, y, d, fontSize) {
  slide.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color }, line: { color, width: 0 } });
  T(slide, String(n), { x, y, w: d, h: d, fontSize: fontSize || 14, bold: true, color: WHITE, align: "center", valign: "middle" });
}
function chevron(slide, x, y, w, h, color) {
  slide.addShape(pres.shapes.CHEVRON, { x, y, w, h, fill: { color: color || STEEL_LT }, line: { color: color || STEEL_LT, width: 0 } });
}
function label(slide, text, x, y, w, color) {
  T(slide, text, { x, y, w: w || 6, h: 0.3, fontSize: 12, bold: true, color: color || RED, charSpacing: 1 });
}
function content(sectionTitle, kicker, title, subtitle) {
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle });
  s.addText(kicker, { placeholder: "kicker" });
  s.addText(title, { placeholder: "title" });
  s.addText(subtitle, { placeholder: "subtitle" });
  return s;
}

// ======================================================================
// 1. TITLE
// ======================================================================
pres.addSection({ title: "Opening" });
{
  const s = pres.addSlide({ masterName: "TITLE", sectionTitle: "Opening" });
  s.addText("TEAM BRIEFING  ·  E-LEARNING DESIGN AND ASSESSMENT", { placeholder: "kicker" });
  s.addText("Good Practice Initiative", { placeholder: "title" });
  s.addText("Finding, documenting and reusing good practices in our design and assessment work", { placeholder: "subtitle" });
  const steps = [
    ["search-w", "Collect", "through six lenses"],
    ["clipboard-w", "Document", "in one short note"],
    ["share-w", "Reuse", "from one shared bank"],
  ];
  steps.forEach((st, i) => {
    const x = 0.9 + i * 3.9;
    iconCircle(s, st[0], STEEL, x, 4.3, 0.85);
    T(s, st[1], { x: x + 1.05, y: 4.33, w: 2.4, h: 0.4, fontSize: 20, bold: true, color: WHITE });
    T(s, st[2], { x: x + 1.05, y: 4.75, w: 2.4, h: 0.35, fontSize: 14, color: TINT_NAVY });
    if (i < 2) chevron(s, x + 3.3, 4.52, 0.3, 0.42, STEEL_LT);
  });
  T(s, "Team briefing  ·  November 2026", { x: 0.9, y: 6.6, w: 6, h: 0.35, fontSize: 14, color: STEEL_LT });
  s.addNotes(
    "Purpose of this session: introduce a simple, shared way to find, document and reuse the good practices that already exist in our e-learning products.\n\n" +
    "Three verbs carry the whole idea: collect, document, reuse. By the end you should know what we look for, why each point matters, how to write a good-practice note, and what happens next.\n\n" +
    "Timing: about 40 minutes plus discussion."
  );
}

// ======================================================================
// 2. THE IDEA IN ONE SLIDE
// ======================================================================
{
  const s = content("Opening", "OPENING", "Initiative Overview", "Three steps: collect good practices, document them, and reuse them across the team.");
  const cols = [
    ["search-w", "1  ·  COLLECT", "Look through six lenses", "Use the six domains of our review form during the reviews we already do."],
    ["clipboard-w", "2  ·  DOCUMENT", "Write one short note", "What you saw, why it works (with a source), and how others can reuse it."],
    ["share-w", "3  ·  REUSE", "Share it in one bank", "Proven patterns go into a shared bank, our huddles and our templates."],
  ];
  cols.forEach((c, i) => {
    const x = 0.6 + i * 4.2;
    card(s, x, 1.9, 3.6, 3.45, TINT_NAVY);
    iconCircle(s, c[0], NAVY, x + 0.35, 2.2, 0.9);
    label(s, c[1], x + 0.35, 3.3, 3.0);
    T(s, c[2], { x: x + 0.35, y: 3.63, w: 3.0, h: 0.45, fontSize: 20, bold: true, color: NAVY });
    T(s, c[3], { x: x + 0.35, y: 4.15, w: 2.95, h: 0.95, fontSize: 15 });
    if (i < 2) chevron(s, x + 3.75, 3.4, 0.3, 0.45);
  });
  card(s, 0.6, 5.7, 12.0, 0.85, NAVY);
  iconCircle(s, "medal-w", STEEL, 0.85, 5.8, 0.65);
  T(s, "The result: a shared, evidence-backed playbook built from our own products.", { x: 1.75, y: 5.7, w: 10.6, h: 0.85, fontSize: 18, bold: true, color: WHITE, valign: "middle" });
  s.addNotes(
    "Lead with the message: we are not starting from zero. Good practices already exist in our courses; they are just not named, explained or shared.\n\n" +
    "Collect: we use the six domains of the review form as lenses, inside reviews we already run.\n" +
    "Document: one short note per practice: what you saw, why it works with a source, and how someone else could reuse it.\n" +
    "Reuse: notes that pass four quick tests go into a shared bank that feeds our huddles, onboarding and templates.\n\n" +
    "Over time this becomes our own evidence-backed playbook."
  );
}

// ======================================================================
// 3. WHY THIS MATTERS (before / after)
// ======================================================================
{
  const s = content("Opening", "OPENING", "Current State and Opportunity", "Good practices already exist in our products, but they are rarely named, explained or shared.");
  const today = [
    "Reviews tend to focus on defects, so what works goes unnamed",
    "Strong solutions stay in one person's files",
    "We explain design choices with “I think” rather than evidence",
    "New IDs often start from a blank page",
  ];
  const tomorrow = [
    "Reviews also name what works, and why",
    "Proven patterns are shared and reused across projects",
    "We explain choices to SMEs and stakeholders with research and CAF policy",
    "New IDs start from our own best examples",
  ];
  card(s, 0.6, 1.7, 5.6, 5.05, TINT_RED);
  iconCircle(s, "warn-w", RED, 0.9, 1.95, 0.6);
  T(s, "TODAY", { x: 1.7, y: 2.07, w: 3, h: 0.4, fontSize: 16, bold: true, color: RED });
  today.forEach((t, i) => {
    const y = 2.9 + i * 0.95;
    iconCircle(s, "times-w", RED, 0.95, y + 0.03, 0.38, 0.5);
    T(s, t, { x: 1.55, y, w: 4.4, h: 0.85, fontSize: 16 });
  });
  chevron(s, 6.38, 3.95, 0.38, 0.6, STEEL_LT);
  card(s, 6.95, 1.7, 5.78, 5.05, TINT_NAVY);
  iconCircle(s, "check-w", NAVY, 7.25, 1.95, 0.6);
  T(s, "WITH A SHARED GOOD-PRACTICE BANK", { x: 8.05, y: 2.07, w: 4.5, h: 0.4, fontSize: 16, bold: true, color: NAVY });
  tomorrow.forEach((t, i) => {
    const y = 2.9 + i * 0.95;
    iconCircle(s, "check-w", NAVY, 7.3, y + 0.03, 0.38, 0.5);
    T(s, t, { x: 7.9, y, w: 4.6, h: 0.85, fontSize: 16 });
  });
  s.addNotes(
    "Name the problem in terms the team will recognize; adjust the examples to fit your own experience.\n\n" +
    "Our reviews are good at catching defects but rarely record what works and why. That means strong solutions stay with one person, we defend design choices with opinion instead of evidence, and new team members cannot find good models.\n\n" +
    "What changes: reviews also name strengths, proven patterns travel between projects, and we can answer an SME or stakeholder with “here is the research or the CAF policy behind this choice”. New IDs learn from our own best work.\n\n" +
    "Ask the room: when did you last want to reuse something a colleague built, but could not find it?"
  );
}

// ======================================================================
// 4. WHAT THIS IS / IS NOT
// ======================================================================
{
  const s = content("Opening", "OPENING", "Scope and Expectations", "A strengths-based peer-learning process, not a performance assessment.");
  const is = [
    ["Strengths-based", "We look for what works, and say why."],
    ["Built into reviews", "No new approval gate or extra meeting."],
    ["Evidence-backed", "Each practice links to research or CAF policy."],
    ["Co-owned", "We calibrate and refine it together."],
  ];
  const isNot = [
    ["A rating of people", "Notes describe products, never individuals."],
    ["Paperwork per screen", "One to three notes per review is plenty."],
    ["A rigid checklist", "Professional judgement still decides."],
    ["One person's project", "Everyone contributes, everyone benefits."],
  ];
  label(s, "THIS IS", 0.6, 1.65, 4, NAVY);
  is.forEach((c, i) => {
    const x = 0.6 + i * 3.09;
    card(s, x, 2.0, 2.85, 1.95, TINT_NAVY);
    iconCircle(s, "check-w", NAVY, x + 0.25, 2.22, 0.5, 0.5);
    T(s, c[0], { x: x + 0.25, y: 2.85, w: 2.4, h: 0.4, fontSize: 17, bold: true, color: NAVY });
    T(s, c[1], { x: x + 0.25, y: 3.25, w: 2.45, h: 0.65, fontSize: 14 });
  });
  label(s, "THIS IS NOT", 0.6, 4.3, 4, RED);
  isNot.forEach((c, i) => {
    const x = 0.6 + i * 3.09;
    card(s, x, 4.65, 2.85, 1.95, TINT_RED);
    iconCircle(s, "times-w", RED, x + 0.25, 4.87, 0.5, 0.5);
    T(s, c[0], { x: x + 0.25, y: 5.5, w: 2.4, h: 0.4, fontSize: 17, bold: true, color: RED });
    T(s, c[1], { x: x + 0.25, y: 5.9, w: 2.45, h: 0.65, fontSize: 14 });
  });
  s.addNotes(
    "Address the unspoken worries before they surface.\n\n" +
    "This is strengths-based: the form is a good-practice form, not a defect log. It lives inside reviews we already do. Every practice is backed by research or CAF policy, so it is not personal taste. And we will calibrate and adjust it together.\n\n" +
    "It is not a rating of people: notes describe products and screens, never individuals. It is not paperwork for every screen: one to three good notes per review is enough. It does not replace professional judgement. And it is not my project; it only works if everyone contributes."
  );
}

// ======================================================================
// 5. SECTION — PART 1
// ======================================================================
const DOMAINS = [
  { n: 1, icon: "bullseye-w", name: "Performance Relevance and Learner Context", short: "Relevance", q: "Right training, right learners, right setting?", count: 3 },
  { n: 2, icon: "sitemap-w", name: "Outcomes, Content and Alignment", short: "Alignment", q: "Clear objectives, right content, one target?", count: 4 },
  { n: 3, icon: "chalkboard-w", name: "Learning Strategy and Experience", short: "Strategy", q: "Will the way we teach build the skill?", count: 6 },
  { n: 4, icon: "clipcheck-w", name: "Assessment, Feedback and Mastery", short: "Assessment", q: "Can we trust the result?", count: 5 },
  { n: 5, icon: "layers-w", name: "Multimedia, Accessibility and Development Readiness", short: "Media & access", q: "Usable by every learner, and ready to build?", count: 6 },
  { n: 6, icon: "sync-w", name: "Quality Assurance and Continuous Improvement", short: "QA", q: "Tested before release, improved after?", count: 5 },
];

function section(title, partNo, partTitle, blurb, icons, notes) {
  pres.addSection({ title });
  const s = pres.addSlide({ masterName: "SECTION", sectionTitle: title });
  T(s, String(partNo).padStart(2, "0"), { x: 0.85, y: 0.55, w: 3.5, h: 2.0, fontSize: 110, bold: true, color: STEEL });
  s.addText("PART " + partNo, { placeholder: "kicker" });
  s.addText(partTitle, { placeholder: "title" });
  s.addText(blurb, { placeholder: "body" });
  icons.forEach((ic, i) => iconCircle(s, ic, NAVY_MID, 0.9 + i * 0.95, 5.55, 0.7));
  s.addNotes(notes);
  return s;
}

section("Part 1: What We Look For", 1, "What We Look For and Why",
  "Six lenses from our review form, each backed by learning research, assessment science or CAF policy.",
  DOMAINS.map((d) => d.icon),
  "Part 1 answers two questions: what are we looking for, and why should anyone accept that these are the right things to look for?\n\nThe short answer: six lenses, 29 practices, each with a source we can cite."
);

// ======================================================================
// 6. SIX LENSES OVERVIEW
// ======================================================================
{
  const s = content("Part 1: What We Look For", "PART 1  ·  WHAT WE LOOK FOR", "The Six Review Domains", "Six domains and 29 practices give the team a shared vocabulary for good design.");
  DOMAINS.forEach((d, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = 0.6 + col * 4.13, y = 1.65 + row * 2.6;
    card(s, x, y, 3.87, 2.38, TINT_NAVY);
    iconCircle(s, d.icon, NAVY, x + 0.3, y + 0.28, 0.7);
    label(s, "DOMAIN " + d.n + "  ·  " + d.count + " PRACTICES", x + 1.15, y + 0.45, 2.6);
    T(s, d.name, { x: x + 0.3, y: y + 1.1, w: 3.35, h: 0.6, fontSize: 16, bold: true, color: NAVY });
    T(s, d.q, { x: x + 0.3, y: y + 1.72, w: 3.35, h: 0.55, fontSize: 14, italic: true });
  });
  s.addNotes(
    "These are the six domains on our review form. Think of them as lenses: each asks one question about the product.\n\n" +
    "1 Relevance: is this the right training for these learners in their setting? (3 practices)\n" +
    "2 Alignment: are objectives clear, content right, and is everything aimed at the same target? (4)\n" +
    "3 Strategy: will the way we teach actually build the skill? (6)\n" +
    "4 Assessment: can we trust the result, and do learners get what they need to reach the standard? (5)\n" +
    "5 Media and access: does every element earn its place, for every learner, in both languages, and can Development build it without guessing? (6)\n" +
    "6 QA: was it tested before release, and can we evaluate and improve it afterwards? (5)\n\n" +
    "Twenty-nine practices in total. The value is a shared vocabulary: when someone says “3.5”, we all know they mean spaced practice with fading support."
  );
}

// ======================================================================
// 7. BUILT ON CFITES
// ======================================================================
{
  const s = content("Part 1: What We Look For", "PART 1  ·  WHAT WE LOOK FOR", "Alignment with CFITES", "The five CAF IT&E principles map directly to criteria on our review form.");
  const rows = [
    ["Performance Orientation", "Start from the job", ["1.1", "2.1", "3.6", "4.2"]],
    ["Systems Thinking", "Everything connects", ["2.3", "6.3"]],
    ["Systematic Process", "Complete, traceable outputs", ["2.2", "5.6", "6.1"]],
    ["Optimum Efficiency", "No wasted time or media", ["1.3", "5.3", "6.5"]],
    ["Continuous Improvement", "Test, learn, fix", ["6.2", "6.4"]],
  ];
  label(s, "FIVE CAF IT&E PRINCIPLES  →  WHERE THEY SHOW UP ON OUR FORM", 0.6, 1.65, 7.5, NAVY);
  rows.forEach((r, i) => {
    const y = 2.05 + i * 0.92;
    card(s, 0.6, y, 3.6, 0.78, TINT_NAVY);
    T(s, r[0], { x: 0.8, y: y + 0.08, w: 3.3, h: 0.35, fontSize: 16, bold: true, color: NAVY });
    T(s, r[1], { x: 0.8, y: y + 0.43, w: 3.3, h: 0.3, fontSize: 13, color: GRAY });
    chevron(s, 4.32, y + 0.22, 0.22, 0.34);
    r[2].forEach((c, j) => {
      const cx = 4.7 + j * 0.85;
      card(s, cx, y + 0.17, 0.72, 0.44, NAVY);
      T(s, c, { x: cx, y: y + 0.17, w: 0.72, h: 0.44, fontSize: 14, bold: true, color: WHITE, align: "center", valign: "middle" });
    });
  });
  T(s, "Criterion numbers refer to our review form. The mapping is our interpretation.", { x: 0.6, y: 6.6, w: 7.5, h: 0.3, fontSize: 12, italic: true, color: GRAY });
  card(s, 8.35, 1.65, 4.38, 5.1, NAVY);
  label(s, "WHAT DOCTRINE SAYS", 8.7, 1.95, 3.8, STEEL_LT);
  T(s, "“All IT&E activities are to be managed in accordance with CAF IT&E System doctrine, which is grounded in the following five principles.”", { x: 8.7, y: 2.35, w: 3.75, h: 1.45, fontSize: 17, italic: true, color: WHITE });
  T(s, "DAOD 5031-2, para. 4.11 (National Defence, 2025b)", { x: 8.7, y: 3.85, w: 3.75, h: 0.3, fontSize: 12, color: TINT_NAVY });
  T(s, "Since December 2025, the system is called the CAF Individual Training and Education (IT&E) System. The A-P9-050 CFITES manuals remain the doctrine.", { x: 8.7, y: 4.6, w: 3.75, h: 1.4, fontSize: 14, color: TINT_NAVY });
  s.addNotes(
    "This is the answer to “is this extra work?”. DAOD 5031-2 says all individual training and education is managed by doctrine grounded in five principles: Performance Orientation, Systems Thinking, Systematic Process, Optimum Efficiency and Continuous Improvement (National Defence, 2025b, para. 4.11).\n\n" +
    "Our 29 practices are those principles made observable. For example, Performance Orientation shows up in 1.1 (validated purpose), 2.1 (objective quality), 3.6 (authenticity) and 4.2 (assessment alignment). The mapping is our interpretation, not wording from the DAOD.\n\n" +
    "Note the name change: since December 2025 DAOD 5031-2 calls it the CAF IT&E System. The A-P9-050 CFITES manuals are still the doctrine."
  );
}

// ======================================================================
// 8. EVIDENCE BASE
// ======================================================================
{
  const s = content("Part 1: What We Look For", "PART 1  ·  WHAT WE LOOK FOR", "Evidence Base", "Each practice is supported by research, CAF policy or a recognized standard.");
  const stats = [
    ["29", "practices, each with a source you can cite in a review note"],
    ["23", "backed by strong or moderate research evidence"],
    ["6", "grounded in CAF policy, Canadian law or recognized standards"],
    ["101", "sources in our full reference guide, quotations checked against the originals"],
  ];
  stats.forEach((st, i) => {
    const x = 0.6 + i * 3.09;
    T(s, st[0], { x, y: 1.65, w: 2.85, h: 1.0, fontSize: 60, bold: true, color: NAVY });
    T(s, st[1], { x, y: 2.7, w: 2.7, h: 0.95, fontSize: 15 });
  });
  const types = [
    ["lightbulb", "chalkboard-w", "Learning science", "Cognitive load, multimedia learning, practice, retrieval and feedback research"],
    ["", "clipcheck-w", "Assessment science", "Validity and fairness: construct validity and the testing standards"],
    ["", "users-w", "Training research", "Transfer of training and training evaluation"],
    ["", "shield-w", "CAF and federal policy", "DAOD 5031-2, DAOD 5039-6, Official Languages Act, Accessible Canada Act"],
  ];
  types.forEach((t, i) => {
    const x = 0.6 + i * 3.09;
    card(s, x, 4.0, 2.85, 2.75, TINT_NAVY);
    iconCircle(s, t[1], NAVY, x + 0.25, 4.25, 0.62);
    T(s, t[2], { x: x + 0.25, y: 5.0, w: 2.45, h: 0.4, fontSize: 16, bold: true, color: NAVY });
    T(s, t[3], { x: x + 0.25, y: 5.42, w: 2.45, h: 1.25, fontSize: 14 });
  });
  s.addNotes(
    "The point of this slide: these are not one person's preferences.\n\n" +
    "Of the 29 practices, 23 rest on strong or moderate research evidence: replicated experiments and meta-analyses in learning science, assessment science and training research. The other six (2.2, 5.4, 5.5, 5.6, 6.1, 6.4) are grounded mainly in CAF policy, Canadian law or professional standards, which is still a strong justification: we cite the requirement.\n\n" +
    "The full reference guide lists 101 sources, and every quotation in it was checked against the original or a reliable reproduction. The quick guide gives you the one line and the source you need for each practice."
  );
}

// ======================================================================
// 9-14. DOMAIN DEEP DIVES
// ======================================================================
const PRACTICES = {
  1: [["1.1", "Validated purpose and relevance"], ["1.2", "Learner and context fit"], ["1.3", "Content necessity"]],
  2: [["2.1", "Objective quality"], ["2.2", "Content accuracy and traceability"], ["2.3", "Constructive alignment"], ["2.4", "Instructional sufficiency"]],
  3: [["3.1", "Method–outcome fit"], ["3.2", "Sequence and progression"], ["3.3", "Demonstration and modelling"], ["3.4", "Meaningful participation"], ["3.5", "Practice and scaffolding"], ["3.6", "Authenticity and transfer"]],
  4: [["4.1", "Assessment purpose"], ["4.2", "Assessment alignment and validity"], ["4.3", "Fairness and clarity"], ["4.4", "Feedback quality"], ["4.5", "Remediation and mastery"]],
  5: [["5.1", "Multimedia purpose"], ["5.2", "Cognitive manageability"], ["5.3", "Technology appropriateness"], ["5.4", "Accessibility and inclusion"], ["5.5", "Official-language quality"], ["5.6", "Development clarity"]],
  6: [["6.1", "Specialist review"], ["6.2", "Learner trial and usability"], ["6.3", "Evaluation and transfer readiness"], ["6.4", "Revision and change control"], ["6.5", "Efficiency"]],
};

function domainFrame(d, subtitle) {
  const s = content("Part 1: What We Look For", "PART 1  ·  WHAT WE LOOK FOR", "Domain " + d.n + ": " + d.name, subtitle);
  card(s, 0.6, 1.65, 3.95, 5.1, TINT_NAVY);
  iconCircle(s, d.icon, NAVY, 0.85, 1.88, 0.62);
  label(s, "THE PRACTICES", 1.62, 2.06, 2.7);
  T(s, d.q, { x: 0.85, y: 2.62, w: 3.5, h: 0.5, fontSize: 14, italic: true, color: NAVY });
  PRACTICES[d.n].forEach((p, i) => {
    const y = 3.2 + i * 0.58;
    card(s, 0.85, y, 0.6, 0.38, NAVY);
    T(s, p[0], { x: 0.85, y, w: 0.6, h: 0.38, fontSize: 13, bold: true, color: WHITE, align: "center", valign: "middle" });
    T(s, p[1], { x: 1.6, y: y + 0.05, w: 2.8, h: 0.5, fontSize: 14 });
  });
  label(s, "WHY IT MATTERS", 4.9, 1.65, 4);
  return s;
}
function evidenceCard(s, x, head, quote, cite, opts) {
  const o = opts || {};
  card(s, x, 2.0, 3.85, 3.0, WHITE, { line: { color: LINE, width: 1 } });
  let y = 2.2;
  if (o.stat) {
    T(s, o.stat, { x: x + 0.25, y, w: 3.4, h: 0.7, fontSize: 36, bold: true, color: NAVY });
    y += 0.72;
  }
  T(s, head, { x: x + 0.25, y, w: 3.4, h: o.stat ? 0.5 : 0.62, fontSize: o.stat ? 14 : 17, bold: true, color: NAVY });
  y += o.stat ? 0.52 : 0.66;
  T(s, quote, { x: x + 0.25, y, w: 3.4, h: 4.75 - y - 0.05, fontSize: 13, italic: true });
  T(s, cite, { x: x + 0.25, y: 4.4, w: 3.4, h: 0.5, fontSize: 11, color: GRAY, valign: "bottom" });
}
function lookFor(s, items) {
  label(s, "LOOK FOR IN THE PRODUCT", 4.9, 5.25, 5);
  items.forEach((t, i) => {
    const x = 4.9 + i * 2.62;
    iconCircle(s, "check-w", STEEL, x, 5.65, 0.4, 0.5);
    T(s, t, { x: x + 0.5, y: 5.62, w: 2.0, h: 1.1, fontSize: 14 });
  });
}

// Domain 1
{
  const s = domainFrame(DOMAINS[0], "Training answers a validated job requirement and fits the learners and their setting.");
  evidenceCard(s, 4.9, "Training must answer a job requirement",
    "“Validation seeks to determine whether the objectives of IT&E satisfy the job-performance requirement for which the program was initially produced.”",
    "CATO 24-09, para. 4 (National Defence, 2009)");
  evidenceCard(s, 8.88, "One design does not fit every learner",
    "“Instructional techniques that are highly effective with inexperienced learners can lose their effectiveness and even have negative consequences when used with more experienced learners.”",
    "(Kalyuga et al., 2003, p. 23)");
  lookFor(s, ["Design names the QS or PO it serves", "Learner profile and delivery setting described", "Test-out or skip for experienced members"]);
  s.addNotes(
    "Domain 1 asks whether this is the right training, for these learners, in their setting.\n\n" +
    "Why: CFITES validation checks whether training objectives satisfy the job-performance requirement the program was built for (CATO 24-09). A course with no traceable requirement cannot pass that test. Performance-analysis research adds that training only fixes gaps caused by missing knowledge or skill (Mager & Pipe, 1997, in the full guide).\n\n" +
    "Learners differ: the expertise reversal effect shows that techniques that help novices can hinder experienced learners (Kalyuga et al., 2003). So a good design profiles the learners and offers test-out or skip options.\n\n" +
    "Content necessity (1.3): extraneous content lowers learning (Mayer, 2014, p. 63).\n\n" +
    "Good-practice examples to look for: the design names the QS or PO it serves; a learner profile and delivery setting are described; experienced members can test out."
  );
}
// Domain 2
{
  const s = domainFrame(DOMAINS[1], "Objectives, content, practice and assessment all aim at the same performance.");
  evidenceCard(s, 4.9, "gains when instruction and assessment match",
    "“When critical features of instructional stimuli match those of assessment, effect sizes routinely reach 1.2 to 3 sigma.”",
    "(Cohen, 1987, p. 16)", { stat: "1.2–3 σ" });
  evidenceCard(s, 8.88, "The PO defines the target",
    "A performance objective is “a statement of the job performance standards to be met and the conditions under which they are performed.”",
    "DAOD 5031-1, para. 2 (National Defence, 2025a)");
  lookFor(s, ["Observable verb, conditions and standard", "Traceability: PO → EO → screen → item", "Practice and test at the objective's level"]);
  s.addNotes(
    "Domain 2 is the backbone: clear objectives, correct and traceable content, and everything aimed at the same target.\n\n" +
    "Cohen (1987) reported very large effects when instruction and assessment match. Treat the 1.2 to 3 sigma figure as showing that alignment matters a lot, not as a precise estimate: it comes from a small set of studies.\n\n" +
    "In CAF terms the target is the PO: job performance, conditions and standard (DAOD 5031-1). Biggs (2014) calls it constructive alignment: define outcomes first, then align teaching and assessment to them.\n\n" +
    "Look for: objectives with an observable verb, conditions and a standard; a traceability matrix from PO to EO to screen to item; and practice and test at the same level as the objective."
  );
}
// Domain 3
{
  const s = domainFrame(DOMAINS[2], "Learners see good performance, then think, decide and practise with support that fades.");
  evidenceCard(s, 4.9, "Two techniques stand out",
    "“Practice testing and distributed practice received high utility assessments because they benefit learners of different ages and abilities…”",
    "(Dunlosky et al., 2013, p. 5)");
  // ICAP card with mini staircase
  card(s, 8.88, 2.0, 3.85, 3.0, WHITE, { line: { color: LINE, width: 1 } });
  T(s, "Clicking is not thinking", { x: 9.13, y: 2.2, w: 3.4, h: 0.4, fontSize: 17, bold: true, color: NAVY });
  const steps = [["Passive", STEEL_LT], ["Active", STEEL], ["Constructive", NAVY_MID], ["Interactive", NAVY]];
  steps.forEach((st, i) => {
    const h = 0.42 + i * 0.32, x = 9.13 + i * 0.86;
    card(s, x, 4.15 - h, 0.78, h, st[1]);
    T(s, st[0], { x: x - 0.05, y: 4.2, w: 0.88, h: 0.28, fontSize: 10.5, color: INK, align: "center" });
  });
  T(s, "learning increases →", { x: 9.13, y: 2.68, w: 2.3, h: 0.3, fontSize: 12, italic: true, color: GRAY });
  T(s, "(Chi & Wylie, 2014, p. 219)", { x: 9.13, y: 4.4, w: 3.4, h: 0.5, fontSize: 11, color: GRAY, valign: "bottom" });
  lookFor(s, ["A demonstration before every practice", "Decide, predict or explain, not click-to-reveal", "Spaced recall and support that fades"]);
  s.addNotes(
    "Domain 3 has the deepest research base of the six.\n\n" +
    "Demonstration first: Merrill's First Principles say learning is promoted when instruction demonstrates rather than merely tells (Merrill, 2002, p. 47).\n\n" +
    "Participation: the ICAP framework predicts learning increases as engagement moves from passive to active to constructive to interactive (Chi & Wylie, 2014, p. 219). A click-to-reveal tab is behaviourally active but cognitively passive.\n\n" +
    "Practice: Dunlosky et al. (2013) rated practice testing and distributed practice as high-utility techniques. Scaffolds should be temporary and gradually withdrawn (Rosenshine, 2012).\n\n" +
    "Look for: a demonstration before every practice; interactions where learners decide, predict or explain; spaced recall and support that fades."
  );
}
// Domain 4
{
  const s = domainFrame(DOMAINS[3], "Assessments measure the intended competence; feedback explains how to improve.");
  card(s, 4.9, 2.0, 3.85, 3.0, WHITE, { line: { color: LINE, width: 1 } });
  T(s, "Explaining why beats marking right or wrong", { x: 5.15, y: 2.2, w: 3.4, h: 0.62, fontSize: 16, bold: true, color: NAVY });
  s.addChart(pres.charts.BAR, [{ name: "Effect size", labels: ["Correct / incorrect", "Correct answer shown", "Explains why"], values: [0.05, 0.32, 0.49] }], {
    x: 5.0, y: 2.85, w: 3.65, h: 1.7, barDir: "bar", catAxisOrientation: "maxMin",
    chartColors: [STEEL_LT, STEEL, NAVY], showValue: true, dataLabelPosition: "outEnd", dataLabelFormatCode: "0.00",
    dataLabelColor: INK, dataLabelFontSize: 11, dataLabelFontFace: FONT,
    catAxisLabelColor: INK, catAxisLabelFontSize: 11, catAxisLabelFontFace: FONT,
    valAxisHidden: true, valAxisMaxVal: 0.65, valAxisMinVal: 0, valGridLine: { style: "none" }, catGridLine: { style: "none" },
    catAxisLineShow: false, showLegend: false, barGapWidthPct: 45,
  });
  T(s, "Effect sizes (Van der Kleij et al., 2015)", { x: 5.15, y: 4.4, w: 3.4, h: 0.5, fontSize: 11, color: GRAY, valign: "bottom" });
  evidenceCard(s, 8.88, "Fairness means removing irrelevant barriers",
    "“The central idea of fairness in testing is to identify and remove construct-irrelevant barriers to maximal performance for any examinee.”",
    "(American Educational Research Association et al., 2014, p. 63)");
  lookFor(s, ["Blueprint maps every item to an EO", "No trick wording, no give-away clues", "Feedback that explains; retests use new items"]);
  s.addNotes(
    "Domain 4 protects the meaning of the score and closes the gap to the standard.\n\n" +
    "Feedback: in a meta-analysis of computer-based learning, feedback that explains (elaborated feedback) had an effect of 0.49, showing the correct answer 0.32, and just marking correct or incorrect 0.05 (Van der Kleij et al., 2015). Feedback can also backfire: over a third of feedback interventions lowered performance, especially when focused on the person rather than the task (Kluger & DeNisi, 1996, in the full guide).\n\n" +
    "Fairness: the testing standards define fairness as removing construct-irrelevant barriers (AERA, APA & NCME, 2014, p. 63). If wording, reading load or the interface makes an item harder, or a clue makes it easier, the score no longer reflects the skill.\n\n" +
    "Look for: a blueprint mapping items to EOs; no trick wording or give-away clues; option-specific explanatory feedback; and retests that use different items on the same objective."
  );
}
// Domain 5
{
  const s = domainFrame(DOMAINS[4], "Purposeful media, built-in accessibility, equal English and French quality, and a buildable storyboard.");
  evidenceCard(s, 4.9, "Cut what does not help learning",
    "“People learn more deeply from a multimedia message when extraneous material is excluded rather than included.”",
    "(Mayer, 2014, p. 63)");
  card(s, 8.88, 2.0, 3.85, 3.0, WHITE, { line: { color: LINE, width: 1 } });
  T(s, "Access and language are requirements", { x: 9.13, y: 2.2, w: 3.4, h: 0.62, fontSize: 17, bold: true, color: NAVY });
  T(s, "“Online training that the CAF mandates or provides must always be offered in both OLs.”", { x: 9.13, y: 2.86, w: 3.4, h: 0.5, fontSize: 13, italic: true });
  T(s, "DAOD 5039-6, para. 6.5 (National Defence, 2022)", { x: 9.13, y: 3.38, w: 3.4, h: 0.28, fontSize: 11, color: GRAY });
  T(s, "Accessible ICT standard (WCAG 2.1 AA) phases in from December 2027.", { x: 9.13, y: 3.78, w: 3.4, h: 0.5, fontSize: 13 });
  T(s, "(Regulations Amending the Accessible Canada Regulations, 2025)", { x: 9.13, y: 4.4, w: 3.4, h: 0.5, fontSize: 11, color: GRAY, valign: "bottom" });
  lookFor(s, ["Every asset has a stated purpose", "Keyboard, captions, alt text; EN and FR of equal quality", "Storyboard buildable without guessing"]);
  s.addNotes(
    "Domain 5 checks that the build works for real learners on real systems.\n\n" +
    "Multimedia and load: extraneous material lowers learning (Mayer, 2014, p. 63). Learner-paced segments and pre-teaching key terms help (Mayer, 2014; Sweller et al., 2019, in the full guide). Learning comes from the method, not the technology (Clark, 1983).\n\n" +
    "Policy: DAOD 5039-6 requires mandated or provided online training to be offered in both official languages, and materials to be of equal quality. New accessibility regulations adopt the accessible ICT standard CAN/ASC-EN 301 549, which incorporates WCAG 2.1 Level AA, phased in from December 2027.\n\n" +
    "Development clarity (5.6) is practice-based: a storyboard that leaves feedback, branches or scoring undecided lets design decisions drift away from the objectives.\n\n" +
    "Look for: every asset has a stated purpose; keyboard, captions and alt text; EN and FR of equal quality; a storyboard Development can build without guessing."
  );
}
// Domain 6
{
  const s = domainFrame(DOMAINS[5], "Specialist review and learner trials before release; evaluation and change control after.");
  evidenceCard(s, 4.9, "of usability problems found by the first five test users",
    "“After the first study with five participants has found 85% of the usability problems…”",
    "(Nielsen, 2000)", { stat: "85%" });
  evidenceCard(s, 8.88, "Ask “was it useful?”, not only “did you like it?”",
    "“Utility-type reaction measures were more strongly related to learning or on-the-job performance (transfer) than affective-type reaction measures.”",
    "(Alliger et al., 1997, p. 341)");
  lookFor(s, ["Logged SME, ID, accessibility, language and tech reviews", "A small learner trial before release", "Results by EO; change log in both languages"]);
  s.addNotes(
    "Domain 6 is Continuous Improvement in practice.\n\n" +
    "Learner trials: Nielsen's usability work suggests a small test with about five users finds most problems, so several small rounds beat one big test (Nielsen, 2000). The 85% figure comes from a model of problem discovery; it is about finding problems, not measuring learning.\n\n" +
    "Evaluation: survey items about usefulness for the job relate more strongly to learning and transfer than satisfaction items (Alliger et al., 1997). So our end-of-course survey should ask “will you use this on the job?”.\n\n" +
    "Specialist review and change control are practice-based: each reviewer catches a different class of defect, and without a change log fixes land unevenly, especially across the two language versions.\n\n" +
    "Look for: logged reviews from SME, ID, accessibility, language and technical perspectives; a small learner trial; results recorded by EO; a change log applied to both languages."
  );
}

// ======================================================================
// 15. SECTION — PART 2
// ======================================================================
section("Part 2: How We Document", 2, "How We Capture and Document",
  "Two routes, the right lens at each review stage, one short note, four quick tests.",
  ["search-w", "route-w", "clipboard-w", "inbox-w"],
  "Part 2 is the operational core: how a good practice gets from a product into our shared bank."
);

// ======================================================================
// 16. TWO ROUTES
// ======================================================================
{
  const s = content("Part 2: How We Document", "PART 2  ·  HOW WE DOCUMENT", "Capture Routes", "Practices are captured during peer reviews or documented by the designer who created them.");
  const routes = [
    ["search-w", "ROUTE A  ·  PEER-SPOTTED", "Spot it in a review", "During any scheduled review of a colleague's product", [
      "Review as usual, using the six domains",
      "When something works well, note it under “Observed good practice”",
      "Add the criterion number and why it works",
      "Flag strong ones for the bank",
    ]],
    ["user-w", "ROUTE B  ·  SELF-DOCUMENTED", "Log your own", "When you solve a design problem well in your own work", [
      "Write the note within the week, while details are fresh",
      "Attach a screenshot or storyboard excerpt",
      "Link it to a criterion and a source from the quick guide",
      "Ask a peer to confirm it against the four tests",
    ]],
  ];
  routes.forEach((r, i) => {
    const x = 0.6 + i * 6.18;
    card(s, x, 1.65, 5.95, 4.75, TINT_NAVY);
    iconCircle(s, r[0], NAVY, x + 0.3, 1.9, 0.78);
    label(s, r[1], x + 1.25, 1.95, 4.5);
    T(s, r[2], { x: x + 1.25, y: 2.25, w: 4.5, h: 0.45, fontSize: 22, bold: true, color: NAVY });
    T(s, r[3], { x: x + 0.3, y: 2.88, w: 5.4, h: 0.35, fontSize: 14, italic: true, color: GRAY });
    r[4].forEach((st, j) => {
      const y = 3.4 + j * 0.75;
      numCircle(s, j + 1, i === 0 ? NAVY : STEEL, x + 0.3, y, 0.42, 14);
      T(s, st, { x: x + 0.9, y: y + 0.02, w: 4.8, h: 0.65, fontSize: 15 });
    });
  });
  T(s, "Both routes use the same form, the same note format and the same four tests.", { x: 0.6, y: 6.5, w: 12.1, h: 0.35, fontSize: 15, italic: true, color: NAVY });
  s.addNotes(
    "There are two ways a practice enters the system.\n\n" +
    "Route A, peer-spotted: during a review you are already doing, when something works well, write it in the “Observed good practice” cell, add the criterion number and why, and flag strong ones for the bank.\n\n" +
    "Route B, self-documented: most good solutions are invisible to reviewers because they were solved quietly. When you solve a design problem well, log it yourself within the week, attach evidence, link it to a criterion, and ask a peer to confirm it against the four tests.\n\n" +
    "Same form, same note format, same tests either way."
  );
}

// ======================================================================
// 17. WHEN TO LOOK (stage x domain matrix)
// ======================================================================
{
  const s = content("Part 2: How We Document", "PART 2  ·  HOW WE DOCUMENT", "Review Stages and Domains", "Each review stage focuses on the domains most relevant to the products under review.");
  const P = "●", S = "○";
  const head = ["Review stage", "D1 Relevance", "D2 Alignment", "D3 Strategy", "D4 Assessment", "D5 Media & access", "D6 QA", "What you look at"];
  const body = [
    ["Design document review", P, P, S, S, "", "", "Design document, QS/PO links, learner profile"],
    ["Storyboard review", "", S, P, P, P, "", "Storyboard, scripts, feedback text"],
    ["Build review (alpha / beta)", "", "", S, S, P, S, "Built module on the LMS, both languages"],
    ["Assessment review", "", P, "", P, "", "", "Blueprint, items, answer keys"],
    ["Pilot and post-launch", S, "", "", "", "", P, "Trial notes, results by EO, surveys"],
  ];
  const hdr = head.map((h, i) => ({ text: h, options: { bold: true, color: WHITE, fill: { color: NAVY }, align: i === 0 || i === 7 ? "left" : "center", fontSize: 12 } }));
  const rows = [hdr].concat(body.map((r, ri) => r.map((c, ci) => {
    const isMark = ci >= 1 && ci <= 6;
    return {
      text: c,
      options: {
        fill: { color: ri % 2 === 0 ? WHITE : TINT_NAVY },
        align: isMark ? "center" : "left",
        fontSize: isMark ? 20 : 13,
        bold: ci === 0,
        color: isMark ? (c === P ? NAVY : STEEL) : INK,
      },
    };
  })));
  s.addTable(rows, {
    x: 0.6, y: 1.65, w: 12.13, colW: [2.75, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 3.08], rowH: [0.62, 0.78, 0.78, 0.78, 0.78, 0.78],
    fontFace: FONT, valign: "middle", border: { type: "solid", pt: 0.75, color: LINE }, margin: [0.06, 0.1, 0.06, 0.1],
  });
  T(s, [
    { text: P + "  main focus      ", options: { color: NAVY, bold: true } },
    { text: S + "  also check", options: { color: STEEL, bold: true } },
  ], { x: 0.6, y: 6.35, w: 4, h: 0.32, fontSize: 14 });
  T(s, "Proposed mapping, aligned with the CFITES phases. We will confirm it during calibration.", { x: 5.0, y: 6.35, w: 7.73, h: 0.32, fontSize: 13, italic: true, color: GRAY, align: "right" });
  s.addNotes(
    "You do not need all six lenses at every review. This proposed map tells you where to focus, and it follows the CFITES phases.\n\n" +
    "Design document review: relevance and alignment are the main focus, because that is where purpose, learners and objectives are decided.\n" +
    "Storyboard review: strategy, assessment design and media.\n" +
    "Build review: media, accessibility, both languages, plus the specialist and technical checks.\n" +
    "Assessment review: alignment and assessment.\n" +
    "Pilot and post-launch: QA and evaluation, plus a second look at relevance.\n\n" +
    "Record the stage in the form's “Review Stage” field. We will adjust this map together during calibration."
  );
}

// ======================================================================
// 18. ANATOMY OF A GOOD NOTE
// ======================================================================
{
  const s = content("Part 2: How We Document", "PART 2  ·  HOW WE DOCUMENT", "Note Format: What, Why, Reuse", "Each note answers three questions and fits the two note cells of our review form.");
  const parts = [
    ["WHAT", "did you see?", "Specific and observable. Say where: screen, activity or item."],
    ["WHY", "does it work?", "Criterion number, a one-line reason and a source from the quick guide."],
    ["REUSE", "how can others use it?", "The pattern someone else can copy, in one sentence."],
  ];
  parts.forEach((p, i) => {
    const x = 0.6 + i * 4.19;
    card(s, x, 1.65, 3.74, 1.95, TINT_NAVY);
    T(s, p[0], { x: x + 0.3, y: 1.85, w: 3.2, h: 0.45, fontSize: 24, bold: true, color: RED });
    T(s, p[1], { x: x + 0.3, y: 2.3, w: 3.2, h: 0.4, fontSize: 17, bold: true, color: NAVY });
    T(s, p[2], { x: x + 0.3, y: 2.75, w: 3.2, h: 0.8, fontSize: 14 });
    if (i < 2) chevron(s, x + 3.86, 2.4, 0.24, 0.42);
  });
  card(s, 0.6, 3.85, 12.13, 2.9, WHITE, { line: { color: LINE, width: 1 } });
  label(s, "EXAMPLE  ·  3.5 PRACTICE AND SCAFFOLDING", 0.9, 4.05, 8);
  const ex = [
    "Module 2 opens every lesson with three recall questions on the previous lesson. Hints appear in Lesson 1 and are gone by Lesson 4.",
    "Spaced recall with fading support makes learning last and builds independent performance (Dunlosky et al., 2013; Rosenshine, 2012).",
    "Add a three-question recall opener to every lesson, and remove hints step by step.",
  ];
  ex.forEach((t, i) => {
    const x = 0.9 + i * 4.19;
    T(s, t, { x, y: 4.45, w: 3.3, h: 1.55, fontSize: 14 });
  });
  T(s, "→ Form cell: “Observed good practice”", { x: 0.9, y: 6.2, w: 3.6, h: 0.32, fontSize: 12, bold: true, color: STEEL });
  T(s, "→ Form cell: “Reusable example or note” (why + reuse)", { x: 5.09, y: 6.2, w: 7.3, h: 0.32, fontSize: 12, bold: true, color: STEEL });
  s.addNotes(
    "This is the one format to remember: What, Why, Reuse.\n\n" +
    "What did you see? Be specific and point to the place: screen 3.2, the EO 4 knowledge check, item 12.\n" +
    "Why does it work? Name the criterion number, give a one-line reason, and add the source from the quick guide.\n" +
    "Reuse: how could someone else apply this pattern in their course?\n\n" +
    "On our form, What goes in “Observed good practice”; Why and Reuse go in “Reusable example or note”.\n\n" +
    "Walk through the example: a recall opener with fading hints. The reason is spaced retrieval and scaffolding (Dunlosky et al., 2013; Rosenshine, 2012), and the reusable pattern is one sentence long."
  );
}

// ======================================================================
// 19. SPECIFIC BEATS GENERAL
// ======================================================================
{
  const s = content("Part 2: How We Document", "PART 2  ·  HOW WE DOCUMENT", "Writing Effective Notes", "Specific notes name the criterion, the location, the reason and the reusable pattern.");
  const pairs = [
    ["“Nice interactive activities.”",
      [{ text: "3.4 Meaningful participation — ", options: { bold: true, color: NAVY } },
       { text: "Screen 3.2 asks learners to predict the system's response before showing the result. " },
       { text: "Reuse: ", options: { bold: true, color: NAVY } },
       { text: "replace click-to-reveal tabs with prediction prompts (Chi & Wylie, 2014)." }]],
    ["“Good feedback.”",
      [{ text: "4.4 Feedback quality — ", options: { bold: true, color: NAVY } },
       { text: "Each wrong option's feedback names the misconception and links to the review screen. " },
       { text: "Reuse: ", options: { bold: true, color: NAVY } },
       { text: "write option-specific feedback, never just “Try again” (Shute, 2008)." }]],
  ];
  pairs.forEach((p, i) => {
    const y = 1.85 + i * 2.4;
    card(s, 0.6, y, 3.9, 2.0, TINT_RED);
    iconCircle(s, "times-w", RED, 0.85, y + 0.25, 0.45, 0.5);
    label(s, "VAGUE", 1.45, y + 0.33, 2.5);
    T(s, p[0], { x: 0.85, y: y + 0.9, w: 3.4, h: 0.9, fontSize: 18, italic: true, color: INK });
    chevron(s, 4.7, y + 0.75, 0.32, 0.5);
    card(s, 5.25, y, 7.48, 2.0, TINT_NAVY);
    iconCircle(s, "check-w", NAVY, 5.5, y + 0.25, 0.45, 0.5);
    label(s, "SPECIFIC AND REUSABLE", 6.1, y + 0.33, 4, NAVY);
    T(s, p[1], { x: 5.5, y: y + 0.85, w: 7.0, h: 1.1, fontSize: 15, color: INK });
  });
  s.addNotes(
    "The most common weakness in good-practice notes is vagueness. “Nice interactions” tells the next designer nothing.\n\n" +
    "Compare: “3.4, screen 3.2 asks learners to predict the system's response before showing the result. Reuse: replace click-to-reveal tabs with prediction prompts.” That names the criterion, points to the place, gives the reason through the citation, and hands over a reusable pattern.\n\n" +
    "The citation does real work: ICAP research (Chi & Wylie, 2014) explains why prediction beats clicking, and Shute (2008) explains why explanatory feedback beats “try again”."
  );
}

// ======================================================================
// 20. FOUR TESTS
// ======================================================================
{
  const s = content("Part 2: How We Document", "PART 2  ·  HOW WE DOCUMENT", "Quality Criteria for the Bank", "A practice must pass four tests before it is added to the shared bank.");
  const tests = [
    ["zoomin-w", "Observable", "Can you point to it on a screen, in a storyboard or in a test item?"],
    ["sitemap-w", "Linked", "Does it clearly match one of the 29 criteria on our form?"],
    ["book-w", "Backed", "Is there research or policy behind it? The quick guide gives a source for each criterion."],
    ["share-w", "Reusable", "Would it work in another course with small changes?"],
  ];
  tests.forEach((t, i) => {
    const x = 0.6 + i * 3.09;
    card(s, x, 1.65, 2.85, 3.5, TINT_NAVY);
    iconCircle(s, t[0], NAVY, x + 0.3, 1.95, 0.85);
    T(s, "TEST " + (i + 1), { x: x + 0.3, y: 3.0, w: 2.3, h: 0.3, fontSize: 12, bold: true, color: RED, charSpacing: 1 });
    T(s, t[1], { x: x + 0.3, y: 3.3, w: 2.3, h: 0.45, fontSize: 22, bold: true, color: NAVY });
    T(s, t[2], { x: x + 0.3, y: 3.85, w: 2.35, h: 1.65, fontSize: 15 });
  });
  card(s, 0.6, 5.45, 5.95, 0.9, NAVY);
  T(s, [{ text: "Passes all four  →  ", options: { bold: true } }, { text: "add it to the bank" }], { x: 0.85, y: 5.45, w: 5.5, h: 0.9, fontSize: 17, color: WHITE, valign: "middle" });
  card(s, 6.78, 5.45, 5.95, 0.9, TINT_NAVY);
  T(s, [{ text: "Passes three  →  ", options: { bold: true, color: NAVY } }, { text: "keep it in the review notes; raise it at the huddle" }], { x: 7.03, y: 5.45, w: 5.5, h: 0.9, fontSize: 17, color: INK, valign: "middle" });
  s.addNotes(
    "Before a note goes into the shared bank, it passes four quick tests.\n\n" +
    "Observable: you can point to it. Linked: it maps to one of the 29 criteria. Backed: there is research or policy behind it, and the quick guide already gives a source for each criterion, so this is a lookup, not a literature search. Reusable: it would work in another course with small changes.\n\n" +
    "All four: it goes in the bank. Three of four: keep it in the review notes and bring it to the monthly huddle, where we can decide together."
  );
}

// ======================================================================
// 21. THE BANK
// ======================================================================
{
  const s = content("Part 2: How We Document", "PART 2  ·  HOW WE DOCUMENT", "The Good Practice Bank", "One shared record of proven practices, used in huddles, onboarding and templates.");
  card(s, 0.6, 1.65, 6.6, 5.1, WHITE, { line: { color: LINE, width: 1 } });
  label(s, "SAMPLE BANK ENTRY", 0.9, 1.88, 3);
  T(s, "GP-2026-014", { x: 4.6, y: 1.84, w: 2.35, h: 0.35, fontSize: 15, bold: true, color: NAVY, align: "right" });
  const fields = [
    ["Criterion", "3.5 Practice and scaffolding"],
    ["Where", "Course X, Module 2, Lessons 1–4"],
    ["What", "Three recall questions open each lesson; hints fade by Lesson 4"],
    ["Why + source", "Spaced recall with fading support (Dunlosky et al., 2013)"],
    ["How to reuse", "Add a recall opener to every lesson; remove hints step by step"],
    ["Attachments", "Screenshot; storyboard p. 12"],
    ["Contributor, date", "Name, date logged"],
  ];
  fields.forEach((f, i) => {
    const y = 2.35 + i * 0.62;
    if (i > 0) s.addShape(pres.shapes.LINE, { x: 0.9, y: y - 0.07, w: 6.0, h: 0, line: { color: LINE, width: 0.75 } });
    T(s, f[0], { x: 0.9, y, w: 1.75, h: 0.5, fontSize: 13, bold: true, color: GRAY });
    T(s, f[1], { x: 2.7, y, w: 4.25, h: 0.52, fontSize: 13, color: INK });
  });
  label(s, "HOW WE USE THE BANK", 7.6, 1.65, 5);
  const uses = [
    ["comments-w", "Monthly huddle", "The curator brings the top three new practices for a 30-minute share."],
    ["users-w", "Onboarding", "New IDs see real examples of good design from our own products."],
    ["layers-w", "Templates and standards", "Proven practices are built into our storyboard and assessment templates."],
  ];
  uses.forEach((u, i) => {
    const y = 2.1 + i * 1.3;
    iconCircle(s, u[0], NAVY, 7.6, y, 0.65);
    T(s, u[1], { x: 8.45, y: y - 0.02, w: 4.25, h: 0.38, fontSize: 17, bold: true, color: NAVY });
    T(s, u[2], { x: 8.45, y: y + 0.38, w: 4.25, h: 0.75, fontSize: 14 });
  });
  card(s, 7.6, 6.0, 5.13, 0.75, TINT_NAVY);
  T(s, "Where it lives (SharePoint list, Excel or Teams): we will decide together.", { x: 7.8, y: 6.0, w: 4.8, h: 0.75, fontSize: 14, italic: true, color: NAVY, valign: "middle" });
  s.addNotes(
    "Notes that pass the four tests go into one shared bank. Each entry has the same fields: criterion, where it is, what, why with a source, how to reuse, attachments, contributor and date.\n\n" +
    "The bank is only valuable if we use it: the monthly huddle reviews the top three new entries; onboarding uses it to show new IDs real examples; and every quarter we promote proven practices into our storyboard and assessment templates.\n\n" +
    "The tool is open: a SharePoint list, an Excel tracker or a Teams channel. Let's choose the one we will actually use."
  );
}

// ======================================================================
// 22. SECTION — PART 3
// ======================================================================
section("Part 3: Implementation", 3, "Implementation Plan",
  "Light roles, a steady rhythm and a pilot we shape together.",
  ["users-w", "calendar-w", "flag-w", "rocket-w"],
  "Part 3 covers who does what, how often, and how we start: small, with a pilot we refine together."
);

// ======================================================================
// 23. ROLES & RHYTHM
// ======================================================================
{
  const s = content("Part 3: Implementation", "PART 3  ·  IMPLEMENTATION", "Roles and Rhythm", "Light roles and a regular rhythm keep the effort small and steady.");
  label(s, "ROLES", 0.6, 1.65, 4, NAVY);
  const roles = [
    ["users-w", "Every ID", "Logs practices from reviews and from their own work."],
    ["search-w", "Peer reviewer", "Spots practices during reviews and checks the four tests."],
    ["tag-w", "Curator (rotates monthly)", "Tags entries, removes duplicates, picks the top three."],
    ["flag-w", "Lead", "Keeps the form, guides and bank current; reports themes."],
  ];
  roles.forEach((r, i) => {
    const y = 2.05 + i * 1.18;
    iconCircle(s, r[0], NAVY, 0.6, y, 0.7);
    T(s, r[1], { x: 1.5, y: y - 0.02, w: 4.9, h: 0.38, fontSize: 17, bold: true, color: NAVY });
    T(s, r[2], { x: 1.5, y: y + 0.38, w: 4.9, h: 0.6, fontSize: 15 });
  });
  label(s, "RHYTHM", 7.0, 1.65, 4, NAVY);
  const rhythm = [
    ["EVERY REVIEW  ·  5–10 MIN", "Note one to three good practices on the form."],
    ["MONTHLY  ·  30 MIN", "Huddle: the curator shares the top three; we discuss and tag."],
    ["QUARTERLY", "Promote proven practices into templates and standards; refresh the form."],
  ];
  rhythm.forEach((r, i) => {
    const y = 2.05 + i * 1.6;
    card(s, 7.0, y, 5.73, 1.38, i === 0 ? NAVY : TINT_NAVY);
    T(s, r[0], { x: 7.3, y: y + 0.2, w: 5.2, h: 0.32, fontSize: 13, bold: true, color: i === 0 ? STEEL_LT : RED, charSpacing: 1 });
    T(s, r[1], { x: 7.3, y: y + 0.55, w: 5.2, h: 0.75, fontSize: 16, color: i === 0 ? WHITE : INK });
  });
  s.addNotes(
    "Roles are deliberately light. Every ID contributes. Peer reviewers spot practices and apply the four tests. A curator, rotating monthly so nobody carries it alone, tags entries and picks the top three. I keep the form, guides and bank current and report themes.\n\n" +
    "The rhythm: five to ten minutes per review to note one to three practices; a 30-minute monthly huddle; and a quarterly step where proven practices become part of our templates and standards.\n\n" +
    "These times are a proposal. If the monthly huddle can ride on an existing team meeting, even better."
  );
}

// ======================================================================
// 24. PILOT ROADMAP
// ======================================================================
{
  const s = content("Part 3: Implementation", "PART 3  ·  IMPLEMENTATION", "Pilot Plan", "An eight-week pilot to calibrate, test and refine the process before full rollout.");
  const phases = [
    ["WEEKS 1–2", "Calibrate", "Everyone reviews the same sample module, compares notes and agrees what “good” looks like."],
    ["WEEKS 3–6", "Pilot", "Use the form and note format on current projects; log practices in the bank."],
    ["WEEK 7", "Reflect", "Retrospective: what helped, what caused friction; adjust the form and process."],
    ["WEEK 8+", "Roll out", "Adopt on all projects and run the first quarterly update."],
  ];
  s.addShape(pres.shapes.LINE, { x: 0.9, y: 2.95, w: 11.5, h: 0, line: { color: STEEL_LT, width: 2.5 } });
  phases.forEach((p, i) => {
    const x = 0.6 + i * 3.09;
    T(s, p[0], { x, y: 1.65, w: 2.85, h: 0.3, fontSize: 12, bold: true, color: RED, charSpacing: 1 });
    T(s, p[1], { x, y: 1.95, w: 2.85, h: 0.5, fontSize: 22, bold: true, color: NAVY });
    numCircle(s, i + 1, i === 3 ? RED : NAVY, x, 2.7, 0.5, 16);
    card(s, x, 3.45, 2.85, 1.75, TINT_NAVY);
    T(s, p[2], { x: x + 0.25, y: 3.65, w: 2.4, h: 1.45, fontSize: 15 });
  });
  label(s, "WHAT SUCCESS LOOKS LIKE AFTER THE PILOT", 0.6, 5.7, 8, NAVY);
  const success = ["Practices logged in all six domains", "At least one practice reused in another project", "Notes take under 10 minutes per review"];
  success.forEach((t, i) => {
    const x = 0.6 + i * 4.13;
    iconCircle(s, "check-w", STEEL, x, 6.12, 0.42, 0.5);
    T(s, t, { x: x + 0.55, y: 6.12, w: 3.2, h: 0.65, fontSize: 15 });
  });
  s.addNotes(
    "We start small and learn.\n\n" +
    "Weeks 1 to 2, calibrate: everyone reviews the same sample module independently, then we compare notes. This is where we agree what good looks like and tune the stage map.\n" +
    "Weeks 3 to 6, pilot: use the form and the note format on current projects and log practices in the bank.\n" +
    "Week 7, reflect: a short retrospective on what helped and what caused friction. We change the form and the process based on your feedback.\n" +
    "Week 8 onward: adopt across projects and run the first quarterly update.\n\n" +
    "Success signals: practices in all six domains, at least one practice reused in another project, and notes that take under ten minutes per review. Adjust the dates to our project calendar."
  );
}

// ======================================================================
// 25. TOOLKIT & ASKS
// ======================================================================
{
  const s = content("Part 3: Implementation", "PART 3  ·  IMPLEMENTATION", "Toolkit and Next Steps", "Resources available now, and three actions for this month.");
  label(s, "YOUR TOOLKIT", 0.6, 1.65, 4, NAVY);
  const kit = [
    ["clipcheck-w", "Review form", "6 domains, 29 practices, two note cells per practice"],
    ["book-w", "Quick guide (17 pages)", "What to look for, why it works and a source for every practice"],
    ["database-w", "Full reference guide (61 pages)", "Complete quotations, page numbers and discussion"],
    ["inbox-w", "Note examples and bank template", "Copy, adapt and go"],
  ];
  kit.forEach((k, i) => {
    const y = 2.05 + i * 1.15;
    iconCircle(s, k[0], NAVY, 0.6, y, 0.68);
    T(s, k[1], { x: 1.5, y: y - 0.02, w: 5.2, h: 0.38, fontSize: 17, bold: true, color: NAVY });
    T(s, k[2], { x: 1.5, y: y + 0.37, w: 5.2, h: 0.6, fontSize: 15 });
  });
  card(s, 7.0, 1.65, 5.73, 5.1, NAVY);
  label(s, "THIS MONTH, WE ASK YOU TO", 7.35, 1.95, 5, STEEL_LT);
  const asks = [
    "Read the six big ideas in the quick guide, plus one domain you care about.",
    "Bring one good practice from your own recent work to the calibration session.",
    "Try the What, Why, Reuse note in your next review.",
  ];
  asks.forEach((a, i) => {
    const y = 2.5 + i * 1.35;
    numCircle(s, i + 1, STEEL, 7.35, y, 0.55, 18);
    T(s, a, { x: 8.1, y: y - 0.02, w: 4.35, h: 1.15, fontSize: 17, color: WHITE });
  });
  s.addNotes(
    "Everything you need already exists: the review form, a 17-page quick guide with a look-for, a reason and a source for each practice, the full 61-page reference guide for when you need complete quotations, and note examples with a bank template.\n\n" +
    "Three asks for this month: read the six big ideas plus one domain you care about; bring one good practice from your own recent work to the calibration session; and try the What, Why, Reuse note in your next review."
  );
}

// ======================================================================
// 26. CLOSING
// ======================================================================
pres.addSection({ title: "Close" });
{
  const s = pres.addSlide({ masterName: "TITLE", sectionTitle: "Close" });
  s.addText("DISCUSSION", { placeholder: "kicker" });
  s.addText("Questions and Discussion", { placeholder: "title" });
  s.addText("Our goal: make good work visible, explainable and reusable.", { placeholder: "subtitle" });
  const qs = [
    ["bullseye-w", "Which domain would you like to champion first?"],
    ["clipboard-w", "What would make documenting quick for you?"],
    ["inbox-w", "Where should our bank live?"],
  ];
  qs.forEach((q, i) => {
    const x = 0.9 + i * 3.95;
    card(s, x, 4.1, 3.65, 1.7, NAVY_MID);
    iconCircle(s, q[0], STEEL, x + 0.28, 4.35, 0.6);
    T(s, q[1], { x: x + 0.28, y: 5.05, w: 3.15, h: 0.7, fontSize: 16, bold: true, color: WHITE });
  });
  s.addNotes(
    "Close on the three words: visible, explainable, reusable.\n\n" +
    "Open the floor with three questions: which domain would you like to champion first, what would make documenting quick for you, and where should our bank live? Capture answers; they shape the pilot."
  );
}

// ======================================================================
// 27. SOURCES (appendix)
// ======================================================================
pres.addSection({ title: "Appendix" });
{
  const s = content("Appendix", "APPENDIX", "Sources", "References cited in this briefing (APA 7th edition).");
  // [plain, italic, plain] segments so journal and book titles are italic (APA 7th)
  const refs = [
    ["Alliger, G. M., Tannenbaum, S. I., Bennett, W., Jr., Traver, H., & Shotland, A. (1997). A meta-analysis of the relations among training criteria. ", "Personnel Psychology, 50", "(2), 341–358. https://doi.org/10.1111/j.1744-6570.1997.tb00911.x"],
    ["American Educational Research Association, American Psychological Association, & National Council on Measurement in Education. (2014). ", "Standards for educational and psychological testing", ". American Educational Research Association."],
    ["Chi, M. T. H., & Wylie, R. (2014). The ICAP framework: Linking cognitive engagement to active learning outcomes. ", "Educational Psychologist, 49", "(4), 219–243. https://doi.org/10.1080/00461520.2014.965823"],
    ["Cohen, S. A. (1987). Instructional alignment: Searching for a magic bullet. ", "Educational Researcher, 16", "(8), 16–20. https://doi.org/10.3102/0013189X016008016"],
    ["Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students’ learning with effective learning techniques: Promising directions from cognitive and educational psychology. ", "Psychological Science in the Public Interest, 14", "(1), 4–58. https://doi.org/10.1177/1529100612453266"],
    ["Kalyuga, S., Ayres, P., Chandler, P., & Sweller, J. (2003). The expertise reversal effect. ", "Educational Psychologist, 38", "(1), 23–31. https://doi.org/10.1207/S15326985EP3801_4"],
    ["Mayer, R. E. (2014). Research-based principles for designing multimedia instruction. In V. A. Benassi, C. E. Overson, & C. M. Hakala (Eds.), ", "Applying science of learning in education", " (pp. 59–70). Society for the Teaching of Psychology."],
    ["National Defence. (2009). ", "CATO 24-09 – Validation of Cadet Instructors Cadre training", ". Government of Canada."],
    ["National Defence. (2022). ", "DAOD 5039-6, Canadian Armed Forces training and education in both official languages", ". Government of Canada."],
    ["National Defence. (2025a). ", "DAOD 5031-1, Canadian Armed Forces recognition of prior learning and experience", ". Government of Canada."],
    ["National Defence. (2025b). ", "DAOD 5031-2, Canadian Armed Forces individual training and education system", ". Government of Canada."],
    ["Nielsen, J. (2000, March 18). ", "Why you only need to test with 5 users", ". Nielsen Norman Group."],
    ["Regulations Amending the Accessible Canada Regulations, SOR/2025-255. (2025). ", "Canada Gazette, Part II, 159", "(26)."],
    ["Rosenshine, B. (2012). Principles of instruction: Research-based strategies that all teachers should know. ", "American Educator, 36", "(1), 12–19, 39."],
    ["Shute, V. J. (2008). Focus on formative feedback. ", "Review of Educational Research, 78", "(1), 153–189. https://doi.org/10.3102/0034654307313795"],
    ["Van der Kleij, F. M., Feskens, R. C. W., & Eggen, T. J. H. M. (2015). Effects of feedback in a computer-based learning environment on students’ learning outcomes: A meta-analysis. ", "Review of Educational Research, 85", "(4), 475–511. https://doi.org/10.3102/0034654314564881"],
  ];
  const half = Math.ceil(refs.length / 2);
  [refs.slice(0, half), refs.slice(half)].forEach((col, ci) => {
    const runs = [];
    col.forEach((r, i) => {
      runs.push({ text: r[0] });
      runs.push({ text: r[1], options: { italic: true } });
      runs.push({ text: r[2], options: { breakLine: i < col.length - 1 } });
    });
    T(s, runs, { x: 0.6 + ci * 6.2, y: 1.6, w: 5.93, h: 5.2, fontSize: 10.5, color: INK, paraSpaceAfter: 6 });
  });
  s.addNotes("Full APA 7th references with URLs and DOIs are in the quick guide and the full reference guide. Works mentioned only in these speaker notes (for example Merrill, 2002; Biggs, 2014; Kluger & DeNisi, 1996; Clark, 1983; Sweller et al., 2019; Mager & Pipe, 1997) are referenced in the full guide.");
}

// ---------- write ----------
(async () => {
  await pres.writeFile({ fileName: OUT });
  try {
    // Optional: writes the palette into the deck's theme so new shapes match.
    const { applyTheme } = require(process.env.APPLY_THEME || "./apply_theme.js");
    await applyTheme(OUT, THEME);
  } catch (e) {
    console.log("(theme colors not applied: " + e.message.split("\n")[0] + ")");
  }
  console.log("Wrote " + OUT);
})();
