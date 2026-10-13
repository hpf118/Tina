const path = require('path');
const NM = path.resolve(__dirname, 'node_modules'); // run: npm install pptxgenjs react-icons react react-dom sharp
const pptxgen = require(path.join(NM, 'pptxgenjs'));
const React = require(path.join(NM, 'react'));
const RDS = require(path.join(NM, 'react-dom', 'server'));
const Fa = require(path.join(NM, 'react-icons', 'fa'));
const sharp = require(path.join(NM, 'sharp'));

// ---------- palette ----------
const INK = '12303D', TEAL = '1F7A8C', AQUA = 'EEF6F5', ICE = 'CDE7E3', AMBER = 'F0A202', CORAL = 'D64545';
const TEXT = '1E2A30', MUTED = '5C6B73', WHITE = 'FFFFFF';
const HFONT = 'Cambria', BFONT = 'Calibri';
const W = 13.333, H = 7.5, M = 0.6;

// ---------- icon helper ----------
const iconCache = {};
async function icon(name, color = '#FFFFFF') {
  const key = name + color;
  if (iconCache[key]) return iconCache[key];
  const Comp = Fa[name];
  if (!Comp) throw new Error('no icon ' + name);
  const svg = RDS.renderToStaticMarkup(React.createElement(Comp, { color, size: 256 }));
  const buf = await sharp(Buffer.from(svg)).resize(256, 256).png().toBuffer();
  iconCache[key] = 'image/png;base64,' + buf.toString('base64');
  return iconCache[key];
}
async function iconCircle(slide, x, y, d, fill, name, iconColor = '#FFFFFF') {
  slide.addShape(pres.ShapeType.ellipse, { x, y, w: d, h: d, fill: { color: fill }, line: { color: fill, width: 0 } });
  const data = await icon(name, iconColor);
  const s = d * 0.52;
  slide.addImage({ data, x: x + (d - s) / 2, y: y + (d - s) / 2, w: s, h: s });
}
function card(slide, x, y, w, h, fill = AQUA, opts = {}) {
  slide.addShape(pres.ShapeType.roundRect, { x, y, w, h, fill: { color: fill }, line: { color: opts.line || fill, width: opts.lineW || 0 }, rectRadius: opts.r ?? 0.12,
    shadow: opts.noShadow ? undefined : { type: 'outer', blur: 4, offset: 2, angle: 60, color: '000000', opacity: 0.12 } });
}
function txt(slide, text, o) {
  slide.addText(text, Object.assign({ isTextBox: true, margin: 0, fontFace: BFONT, fontSize: 13, color: TEXT, valign: 'top', align: 'left' }, o));
}
function title(slide, text, color = TEXT) {
  txt(slide, text, { x: M, y: 0.42, w: W - 2 * M, h: 0.95, fontFace: HFONT, fontSize: 28, bold: true, color, valign: 'middle' });
}
function bullets(items, size = 12.5, color = TEXT) {
  return items.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < items.length - 1, fontSize: size, color, paraSpaceAfter: 4 } }));
}

const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE';
pres.author = 'Learning Design';
pres.title = 'Storyboard Generator Master Prompt: an introduction';

(async () => {
  // ================= S1 Title =================
  {
    const s = pres.addSlide(); s.background = { color: INK };
    txt(s, 'Storyboard Generator Master Prompt', { x: 0.8, y: 1.45, w: 7.7, h: 1.9, fontFace: HFONT, fontSize: 42, bold: true, color: WHITE, valign: 'middle' });
    txt(s, 'What it is, how to use it, and why a 200-word prompt cannot replace it', { x: 0.8, y: 3.45, w: 7.4, h: 1.2, fontSize: 20, color: ICE });
    txt(s, 'CRAFT Edition  ·  v3.4  ·  Learning Design', { x: 0.8, y: 6.45, w: 7, h: 0.4, fontSize: 13, color: '8FB5B0' });
    txt(s, 'The visible output, always in this order', { x: 9.2, y: 1.0, w: 3.6, h: 0.4, fontSize: 12, color: ICE, italic: true });
    const blocks = ['Project or Module Title', 'Document Control', '1. Style', '2. Developer Notes – All Slides', '3. Learning Objectives', '4. Storyboard'];
    blocks.forEach((b, i) => {
      const last = i === blocks.length - 1;
      card(s, 9.2, 1.5 + i * 0.8, 3.6, 0.64, last ? AMBER : ICE, { noShadow: true, r: 0.08 });
      txt(s, b, { x: 9.4, y: 1.5 + i * 0.8, w: 3.2, h: 0.64, fontSize: 13, bold: last, color: INK, valign: 'middle' });
    });
    s.addNotes('Opening: this deck explains what the master prompt is made of, how we use it, and why it cannot be reduced to a short prompt. The stack on the right is the only thing the generator shows: six blocks in a locked order.');
  }

  // ================= S2 How to use =================
  {
    const s = pres.addSlide(); s.background = { color: WHITE };
    title(s, 'How to use it: attach the file, do not paste it');
    const steps = [
      ['Complete the intake', 'FaClipboardList', 'Fill the intake and the Part P configuration: authoring tool, client, learners, assessment architecture, first screen, language, standards, template.'],
      ['Attach the prompt file', 'FaPaperclip', 'Upload the approved prompt document together with the source materials and the storyboard template. Never cut and paste 18,900 words into the chat: the file is the instruction.'],
      ['Say the lead-in', 'FaComment', '"Generate the storyboard." The generator follows everything between the scissors lines, runs Steps 0 to 5 internally, and returns the finished document.'],
    ];
    const cw = 3.75, gap = (W - 2 * M - 3 * cw) / 2;
    for (let i = 0; i < 3; i++) {
      const x = M + i * (cw + gap), y = 1.55, h = 3.4;
      card(s, x, y, cw, h);
      s.addShape(pres.ShapeType.ellipse, { x: x + 0.25, y: y + 0.25, w: 0.6, h: 0.6, fill: { color: AMBER }, line: { color: AMBER, width: 0 } });
      txt(s, String(i + 1), { x: x + 0.25, y: y + 0.25, w: 0.6, h: 0.6, fontSize: 20, bold: true, color: INK, align: 'center', valign: 'middle' });
      await iconCircle(s, x + cw - 1.1, y + 0.25, 0.85, TEAL, steps[i][1]);
      txt(s, steps[i][0], { x: x + 0.25, y: y + 1.25, w: cw - 0.5, h: 0.5, fontSize: 17, bold: true, color: INK });
      txt(s, steps[i][2], { x: x + 0.25, y: y + 1.8, w: cw - 0.5, h: 1.5, fontSize: 12.5, color: TEXT });
    }
    const flow = [['Steps 0 to 5 run unseen: sources, objectives, gate, architecture, slides, QA', TEAL, WHITE], ['Only a Critical gap stops the run, to ask one question', AMBER, INK], ['Visible output: the six locked blocks, build-ready', INK, WHITE]];
    const fw = 3.95, fg = 0.14;
    flow.forEach((f, i) => {
      const x = M + i * (fw + fg);
      s.addShape(i === 0 ? pres.ShapeType.homePlate : pres.ShapeType.chevron, { x, y: 5.3, w: fw, h: 0.95, fill: { color: f[1] }, line: { color: f[1], width: 0 } });
      txt(s, f[0], { x: x + (i === 0 ? 0.2 : 0.45), y: 5.3, w: fw - 0.75, h: 0.95, fontSize: 11.5, color: f[2], valign: 'middle', bold: true });
    });
    txt(s, 'Internal artifacts (source log, objective map, planning rows, QA record) stay internal. Ask for one only when you want to review it.', { x: M, y: 6.5, w: W - 2 * M, h: 0.5, fontSize: 12, color: MUTED, italic: true });
    s.addNotes('Usage first. Three actions for the designer: complete the intake, attach the prompt file with the sources and template, and send the lead-in. The generator does the rest internally and only interrupts for a Critical gap.');
  }

  // ================= S3 Can it be 200 words =================
  {
    const s = pres.addSlide(); s.background = { color: WHITE };
    title(s, 'Can it be shrunk to a 200-word prompt?');
    card(s, M, 1.5, 4.9, 5.35, INK, { r: 0.15 });
    txt(s, 'No.', { x: M + 0.35, y: 1.75, w: 4.2, h: 1.6, fontFace: HFONT, fontSize: 84, bold: true, color: AMBER, valign: 'middle' });
    txt(s, 'A 200-word prompt describes a wish. This document defines a contract: inputs, authority, process, format, language, and checks.', { x: M + 0.35, y: 3.55, w: 4.2, h: 1.7, fontSize: 16, color: WHITE });
    txt(s, 'Every number on the right is a decision a reviewer would otherwise make by hand, differently, every time.', { x: M + 0.35, y: 5.35, w: 4.2, h: 1.3, fontSize: 12.5, color: ICE, italic: true });
    const stats = [['18,900', 'words of rules, templates, and examples'], ['66', 'numbered sections plus 8 appendices'], ['37', 'QA checks, each with a severity'], ['18', 'component specifications with minimum fields'], ['36', 'project configuration keys with defaults'], ['9', 'owner-based gap markers']];
    const tw = 2.25, th = 2.45, gx = 0.28, gy = 0.42, x0 = 5.85, y0 = 1.5;
    stats.forEach((st, i) => {
      const c = i % 3, r = Math.floor(i / 3), x = x0 + c * (tw + gx), y = y0 + r * (th + gy);
      card(s, x, y, tw, th);
      txt(s, st[0], { x: x + 0.15, y: y + 0.2, w: tw - 0.3, h: 1.1, fontFace: HFONT, fontSize: 36, bold: true, color: TEAL, align: 'center', valign: 'middle' });
      txt(s, st[1], { x: x + 0.2, y: y + 1.35, w: tw - 0.4, h: 0.95, fontSize: 12.5, color: TEXT, align: 'center' });
    });
    s.addNotes('The question we get most often. The answer is no, and the numbers show why: the document is not long because it is wordy; it is long because it fixes decisions that a short prompt leaves to the model.');
  }

  // ================= S4 CRAFT backbone =================
  {
    const s = pres.addSlide(); s.background = { color: WHITE };
    title(s, 'The CRAFT backbone: one home for every rule');
    const cols = [
      ['C', 'Context', 'Who reads it, what counts as authority, what to do with gaps', ['Three readers', 'Output contract', 'Sources and the 9-level authority stack', 'Gap decision tree', 'Known failure patterns']],
      ['R', 'Role', 'Who decides what', ['Generator generates, structures, maps, checks', 'Learning Design, SMEs, Multimedia, Accessibility, Development own the decisions', 'Design or QA mode']],
      ['A', 'Action', 'What happens, in what order', ['0 Intake and references', '1 Objectives as job tasks', '2 Verification gate', '3 Architecture', '4 Slide design', '5 Assemble and QA', '6 Adapted prompt']],
      ['F', 'Format', 'What the deliverable looks like', ['Locked block order', 'Word table rules', 'Column ownership matrix', 'Text, Multimedia, Interaction schemas', 'Five interaction modes']],
      ['T', 'Tone', 'How it reads, and for whom', ['Language and punctuation', 'Complete sentences, one term per thing', 'Acronyms and cognitive load', 'Narration placement']],
    ];
    const cw = 2.3, gap = (W - 2 * M - 5 * cw) / 4;
    cols.forEach((c, i) => {
      const x = M + i * (cw + gap), y = 1.45, h = 4.75;
      card(s, x, y, cw, h);
      txt(s, c[0], { x: x + 0.15, y: y + 0.1, w: cw - 0.3, h: 1.0, fontFace: HFONT, fontSize: 54, bold: true, color: TEAL, align: 'center', valign: 'middle' });
      txt(s, c[1], { x: x + 0.15, y: y + 1.12, w: cw - 0.3, h: 0.4, fontSize: 16, bold: true, color: INK, align: 'center' });
      txt(s, c[2], { x: x + 0.15, y: y + 1.55, w: cw - 0.3, h: 0.75, fontSize: 11, italic: true, color: MUTED, align: 'center' });
      s.addText(bullets(c[3], 11.5), { x: x + 0.15, y: y + 2.3, w: cw - 0.25, h: 2.35, isTextBox: true, margin: 0, fontFace: BFONT, valign: 'top' });
    });
    card(s, M, 6.45, W - 2 * M, 0.62, ICE, { noShadow: true, r: 0.08 });
    txt(s, 'Wrapped by:  0 Non-negotiables  ·  P Configuration  ·  G Glossary  ·  Q QA table  ·  S Self-check  ·  8 Appendices', { x: M + 0.2, y: 6.45, w: W - 2 * M - 0.4, h: 0.62, fontSize: 12.5, color: INK, align: 'center', valign: 'middle', bold: true });
    s.addNotes('CRAFT is the spine: Context, Role, Action, Format, Target audience and Tone. Around it sit the parts that make it project-agnostic and checkable: the non-negotiables, the configuration block, the glossary, the QA table, the self-check, and the appendices with templates and worked examples.');
  }

  // ================= S5 Context =================
  {
    const s = pres.addSlide(); s.background = { color: WHITE };
    title(s, 'C — Context: readers, authority, and gaps');
    const pw = 3.85, gap = (W - 2 * M - 3 * pw) / 2, y = 1.45, h = 5.55;
    // panel A readers
    let x = M; card(s, x, y, pw, h);
    txt(s, 'Three readers', { x: x + 0.25, y: y + 0.2, w: pw - 0.5, h: 0.45, fontSize: 16, bold: true, color: INK });
    const readers = [['FaUserGraduate', 'Learner', 'must be able to learn from Text Content alone'], ['FaUserTie', 'Client reviewer and SME', 'must understand every row on one reading, without the sources beside them'], ['FaCode', 'Developer', 'builds from Multimedia and Interaction and needs nothing the standard already gives']];
    for (let i = 0; i < 3; i++) {
      const ry = y + 0.85 + i * 1.5;
      await iconCircle(s, x + 0.25, ry, 0.7, TEAL, readers[i][0]);
      txt(s, [{ text: readers[i][1], options: { bold: true, breakLine: true, fontSize: 13, color: INK } }, { text: readers[i][2], options: { fontSize: 11.5, color: TEXT } }], { x: x + 1.1, y: ry - 0.05, w: pw - 1.35, h: 1.35 });
    }
    // panel B authority
    x = M + pw + gap; card(s, x, y, pw, h);
    txt(s, 'Authority: level 1 wins', { x: x + 0.25, y: y + 0.2, w: pw - 0.5, h: 0.45, fontSize: 16, bold: true, color: INK });
    const levels = ['Client decisions and project requirements', 'Signed-off HLDD, template, style, assessment, accessibility plans', 'Organizational product standards', 'Approved QC checklists', 'Approved Interaction Requirements Library', 'Component, icon, and stock references', 'Development-validated defaults', 'Accepted storyboard examples', 'General design and accessibility practice'];
    s.addText(levels.map((t, i) => ({ text: `${i + 1}.  ${t}`, options: { breakLine: i < levels.length - 1, fontSize: 11.5, color: TEXT, paraSpaceAfter: 5 } })), { x: x + 0.25, y: y + 0.8, w: pw - 0.5, h: 4.6, isTextBox: true, margin: 0, fontFace: BFONT, valign: 'top' });
    // panel C gap tree
    x = M + 2 * (pw + gap); card(s, x, y, pw, h);
    txt(s, 'Gap decision tree', { x: x + 0.25, y: y + 0.2, w: pw - 0.5, h: 0.45, fontSize: 16, bold: true, color: INK });
    card(s, x + 0.3, y + 0.8, pw - 0.6, 0.7, INK, { noShadow: true, r: 0.08 });
    txt(s, 'Missing or contradictory item', { x: x + 0.4, y: y + 0.8, w: pw - 0.8, h: 0.7, fontSize: 12.5, bold: true, color: WHITE, align: 'center', valign: 'middle' });
    const branches = [['Critical', 'No source-faithful output is possible. Stop and ask the user one question.', CORAL, WHITE], ['Blocking', 'A developer would build it wrong. Keep the row, one owner marker in the cell, row Blocked.', AMBER, INK], ['Non-blocking', 'Everything else. Recorded in the internal artifact only.', TEAL, WHITE]];
    branches.forEach((b, i) => {
      const by = y + 1.75 + i * 1.25;
      s.addShape(pres.ShapeType.downArrow, { x: x + pw / 2 - 0.15, y: by - 0.25, w: 0.3, h: 0.22, fill: { color: MUTED }, line: { color: MUTED, width: 0 } });
      card(s, x + 0.3, by, pw - 0.6, 1.0, b[2], { noShadow: true, r: 0.08 });
      txt(s, [{ text: b[0], options: { bold: true, breakLine: true, fontSize: 12.5, color: b[3] } }, { text: b[1], options: { fontSize: 10.5, color: b[3] } }], { x: x + 0.45, y: by + 0.08, w: pw - 0.9, h: 0.88 });
    });
    s.addNotes('Context answers three questions before any writing happens: who the storyboard is for, which source wins when two disagree, and what to do when something is missing. The gap tree is the reason the generator never invents: a gap is classified once and either stops the run, marks the cell, or stays internal.');
  }

  // ================= S6 Role =================
  {
    const s = pres.addSlide(); s.background = { color: WHITE };
    title(s, 'R — Role: the generator drafts, people decide');
    const roles = [['FaRobot', 'Generator', 'Generates, structures, maps, and checks. It never decides purpose, accuracy, or feasibility on its own.'], ['FaChalkboardTeacher', 'Learning Design', 'Learner purpose and instructional decisions. Owns the [LD TO COMPLETE], [LD TO DECIDE], and [LD TO IDENTIFY] markers.'], ['FaUserCheck', 'Subject-matter experts', 'Accuracy, procedures, terminology, and answer logic. Owns [SME TO CONFIRM], which is never a catch-all.'], ['FaPhotoVideo', 'Multimedia', 'Supplies or validates assets, stock, and requests. Owns [MULTIMEDIA TO PROVIDE] and [MULTIMEDIA TO CONFIRM].'], ['FaUniversalAccess', 'Accessibility', 'Validates exceptional treatments and equivalents. Owns [ACCESSIBILITY TO CONFIRM].'], ['FaCogs', 'Development', 'Component feasibility, platform behaviour, and defaults. Owns [DEVELOPER TO ADVISE] and the Development standard.']];
    const cw = 3.75, gap = (W - 2 * M - 3 * cw) / 2, ch = 2.35;
    for (let i = 0; i < 6; i++) {
      const x = M + (i % 3) * (cw + gap), y = 1.45 + Math.floor(i / 3) * (ch + 0.35);
      card(s, x, y, cw, ch);
      await iconCircle(s, x + 0.25, y + 0.25, 0.7, i === 0 ? AMBER : TEAL, roles[i][0], i === 0 ? '#12303D' : '#FFFFFF');
      txt(s, roles[i][1], { x: x + 1.1, y: y + 0.28, w: cw - 1.3, h: 0.65, fontSize: 16, bold: true, color: INK, valign: 'middle' });
      txt(s, roles[i][2], { x: x + 0.25, y: y + 1.05, w: cw - 0.5, h: 1.2, fontSize: 12, color: TEXT });
    }
    txt(s, 'P.ROLE_MODE: Design generates a storyboard; QA audits an existing storyboard against the QA table and returns the record and the SME Verification List.', { x: M, y: 6.75, w: W - 2 * M, h: 0.45, fontSize: 12, color: MUTED, italic: true });
    s.addNotes('Role is about ownership. The generator produces and checks, but every judgement that needs a person is routed to that person through a named marker. That is why the output never contains a vague "TBD".');
  }

  // ================= S7 Action =================
  {
    const s = pres.addSlide(); s.background = { color: WHITE };
    title(s, 'A — Action: seven internal steps, always in this order');
    const steps = [['0', 'Intake and source access'], ['0A', 'Interaction and Development references'], ['1', 'Objectives as job tasks, with evidence'], ['2', 'Verification gate'], ['3', 'Module architecture'], ['4', 'Design each slide'], ['5', 'Assemble, validate, deliver'], ['6', 'Adapted project prompt (on request)']];
    const n = steps.length, sw = (W - 2 * M + 0.25 * (n - 1)) / n;
    steps.forEach((st, i) => {
      const x = M + i * (sw - 0.25), fill = st[0] === '2' ? AMBER : (i % 2 ? INK : TEAL), col = st[0] === '2' ? INK : WHITE;
      s.addShape(i === 0 ? pres.ShapeType.homePlate : pres.ShapeType.chevron, { x, y: 1.5, w: sw, h: 0.8, fill: { color: fill }, line: { color: WHITE, width: 1 } });
      txt(s, st[0], { x: x + (i === 0 ? 0.1 : 0.42), y: 1.5, w: sw - 0.85, h: 0.8, fontSize: 18, bold: true, color: col, align: 'center', valign: 'middle' });
      txt(s, st[1], { x: x + 0.05, y: 2.4, w: sw - 0.35, h: 0.7, fontSize: 10.5, color: INK, align: 'center', valign: 'top' });
    });
    txt(s, 'Inside Step 4, for every slide', { x: M, y: 3.15, w: 6, h: 0.4, fontSize: 15, bold: true, color: INK });
    const chips = ['4a Content-first sequence', '4b Display versus learning interaction', '4c Component minimums, 18 specs', '4d Completeness check', '4e Plain-pair parsing', '4f Assessment and feedback wording', '4g Multimedia schema', '4h Accessibility: baseline once, exceptions only'];
    const cw = 1.44, cg = (W - 2 * M - 8 * cw) / 7;
    chips.forEach((c, i) => {
      const x = M + i * (cw + cg);
      card(s, x, 3.6, cw, 1.0, AQUA, { noShadow: true, r: 0.1 });
      txt(s, c, { x: x + 0.1, y: 3.6, w: cw - 0.2, h: 1.0, fontSize: 10.5, color: INK, align: 'center', valign: 'middle', bold: true });
    });
    const bw = (W - 2 * M - 0.3) / 2;
    card(s, M, 4.85, bw, 2.15);
    txt(s, [{ text: 'Step 1 turns objectives into job tasks', options: { bold: true, fontSize: 14, color: INK, breakLine: true, paraSpaceAfter: 6 } },
      { text: 'Terminal: "Process a training request from receipt to confirmed approval."', options: { fontSize: 11.5, color: TEXT, breakLine: true, paraSpaceAfter: 4 } },
      { text: 'Enabling: "Determine which approval authority a request type requires, using the approval reference."', options: { fontSize: 11.5, color: TEXT, breakLine: true, paraSpaceAfter: 4 } },
      { text: 'Job verbs, job order, one quoted source per objective. Bloom stays internal.', options: { fontSize: 11.5, color: MUTED, italic: true } }], { x: M + 0.25, y: 5.0, w: bw - 0.5, h: 1.9 });
    card(s, M + bw + 0.3, 4.85, bw, 2.15);
    txt(s, [{ text: 'Step 2 is a gate, not a report', options: { bold: true, fontSize: 14, color: INK, breakLine: true, paraSpaceAfter: 6 } },
      { text: 'Design starts only when every objective is verified or gap-approved, the source hierarchy is applied, scenario seeds are logged, and every gap is classified.', options: { fontSize: 11.5, color: TEXT, breakLine: true, paraSpaceAfter: 4 } },
      { text: 'The gate is shown only on request or when a Critical gap stops generation.', options: { fontSize: 11.5, color: MUTED, italic: true } }], { x: M + bw + 0.55, y: 5.0, w: bw - 0.5, h: 1.9 });
    s.addNotes('Action is the pipeline. Nothing is drafted before the sources are audited and the objectives are verified; every slide then passes through the same eight design moves. This order is what makes the output repeatable.');
  }

  // ================= S8 Format =================
  {
    const s = pres.addSlide(); s.background = { color: WHITE };
    title(s, 'F — Format: locked document, one owner per column');
    const blocks = ['Project or Module Title', 'Document Control (when available)', '1. Style', '2. Developer Notes – All Slides', '3. Learning Objectives: # | Objective | Level', '4. Storyboard table'];
    blocks.forEach((b, i) => {
      const last = i === 5;
      card(s, M, 1.5 + i * 0.62, 4.6, 0.5, last ? AMBER : ICE, { noShadow: true, r: 0.07 });
      txt(s, b, { x: M + 0.2, y: 1.5 + i * 0.62, w: 4.2, h: 0.5, fontSize: 12, bold: last, color: INK, valign: 'middle' });
    });
    const cols = ['Slide #', 'Slide Title', 'Text Content', 'Multimedia', 'Interaction'];
    const ccw = 4.6 / 5;
    cols.forEach((c, i) => {
      s.addShape(pres.ShapeType.rect, { x: M + i * ccw, y: 5.35, w: ccw, h: 0.55, fill: { color: WHITE }, line: { color: INK, width: 1 } });
      txt(s, c, { x: M + i * ccw + 0.03, y: 5.35, w: ccw - 0.06, h: 0.55, fontSize: 9.5, bold: true, color: INK, align: 'center', valign: 'middle' });
    });
    txt(s, 'One row per slide. Real black borders, merged title rows, template preserved when supplied.', { x: M, y: 6.0, w: 4.6, h: 0.7, fontSize: 11, color: MUTED, italic: true });
    const ox = 5.6, ow = W - M - ox, kw = (ow - 0.4) / 3;
    txt(s, 'Column ownership: every object lives in exactly one place', { x: ox, y: 1.45, w: ow, h: 0.4, fontSize: 14, bold: true, color: INK });
    const owners = [['Text Content', ['Title as Heading 1', 'Body and section headings', 'Stem and task instruction', 'Options, items, targets, categories', 'Card, tab, and panel content', 'One narration script']], ['Multimedia', ['Layout/Visual', 'Asset/Request, only when needed', 'Alt Text', 'Mock-up when a layout has more than five objects']], ['Interaction', ['Component name and Mode', 'Object map by cross-reference', 'Plain-pair correct results', 'Three feedback states', 'Scoring, placement, randomization']]];
    owners.forEach((o, i) => {
      const x = ox + i * (kw + 0.2);
      card(s, x, 1.95, kw, 3.25);
      txt(s, o[0], { x: x + 0.2, y: 2.1, w: kw - 0.4, h: 0.4, fontSize: 13, bold: true, color: TEAL });
      s.addText(bullets(o[1], 11), { x: x + 0.2, y: 2.55, w: kw - 0.35, h: 2.55, isTextBox: true, margin: 0, fontFace: BFONT, valign: 'top' });
    });
    txt(s, 'Five interaction modes', { x: ox, y: 5.4, w: ow, h: 0.35, fontSize: 13, bold: true, color: INK });
    const modes = ['1 Static: cell blank', '2 Exploratory display', '3 Non-scored practice', '4 Scored assessment', '5 Custom or complex'];
    const mw = (ow - 4 * 0.12) / 5;
    modes.forEach((m, i) => {
      const x = ox + i * (mw + 0.12);
      card(s, x, 5.8, mw, 0.55, AQUA, { noShadow: true, r: 0.1 });
      txt(s, m, { x: x + 0.05, y: 5.8, w: mw - 0.1, h: 0.55, fontSize: 10.5, color: INK, align: 'center', valign: 'middle', bold: true });
    });
    txt(s, 'Internal Slide Notes hold source anchors, rationale, misconception logic, and build logic. They are never exported.', { x: ox, y: 6.5, w: ow, h: 0.5, fontSize: 11, color: MUTED, italic: true });
    s.addNotes('Format is the contract with Development and the client reviewer. The block order never changes, the storyboard table has five fixed columns, and each kind of information has exactly one column. The ownership matrix is what removes the duplication and the missing pieces we used to see.');
  }

  // ================= S9 Tone =================
  {
    const s = pres.addSlide(); s.background = { color: WHITE };
    title(s, 'T — Tone: one voice for three readers');
    const rules = [['FaAlignLeft', 'Complete sentences for every line that states a fact, rule, condition, or action, including card sides and tab panels.'], ['FaTag', 'One term per thing across the title, Text Content, Multimedia, Interaction, and narration: stage, step, or phase, never a mix.'], ['FaSpellCheck', 'Acronyms spelled out at first use, on screen and separately in narration; none undefined in a title.'], ['FaLayerGroup', 'At most about seven items or two panels of four, and three new acronyms per slide. Split, never compress.'], ['FaHandPointer', '"Select", never "click". Active voice, second person, the configured spelling variant.'], ['FaQuoteRight', 'Controlled wording (SHALL, SHOULD, MAY; controlled procedural steps) reproduced verbatim, with a plain-language gloss after it.']];
    for (let i = 0; i < rules.length; i++) {
      const y = 1.5 + i * 0.86;
      await iconCircle(s, M, y, 0.6, TEAL, rules[i][0]);
      txt(s, rules[i][1], { x: M + 0.8, y, w: 5.6, h: 0.8, fontSize: 12, color: TEXT, valign: 'middle' });
    }
    const tx = 7.35, tw = W - M - tx;
    card(s, tx, 1.45, tw, 5.0);
    txt(s, 'Narration placement', { x: tx + 0.25, y: 1.6, w: tw - 0.5, h: 0.4, fontSize: 14, bold: true, color: INK });
    const rows = [['Screen', 'Narration'], ['Splash', 'None'], ['Orientation', 'Optional, brief, controls only'], ['Introduction', 'Optional, orienting only'], ['Learning Objectives', 'None'], ['Teach, example, demonstration', 'Allowed when it adds explanation beyond the screen'], ['Practice, checks, assessment', 'None; one neutral lead-in only if approved'], ['Summary, Conclusion', 'None unless approved']];
    s.addTable(rows.map((r, i) => r.map(c => ({ text: c, options: { bold: i === 0, color: i === 0 ? WHITE : TEXT, fill: { color: i === 0 ? TEAL : (i % 2 ? WHITE : 'F7FBFA') }, fontSize: 10.5, fontFace: BFONT, margin: 0.05 } }))), { x: tx + 0.25, y: 2.1, w: tw - 0.5, colW: [2.0, tw - 2.5], border: { type: 'solid', pt: 0.5, color: 'C9D6D3' }, rowH: 0.42 });
    txt(s, 'Narration teaches; it never repeats the screen and never cues an answer.', { x: tx + 0.25, y: 5.75, w: tw - 0.5, h: 0.55, fontSize: 11, color: MUTED, italic: true });
    txt(s, 'Learner-task transformation: decision content is organized around the learner\'s job question, never around the organization chart.', { x: M, y: 6.75, w: W - 2 * M, h: 0.45, fontSize: 12, color: MUTED, italic: true });
    s.addNotes('Tone protects the learner and the reviewer. The rules are testable: a line can be read aloud alone, an outsider can say who does what after one reading, and narration has a fixed placement table.');
  }

  // ================= S10 Standards =================
  {
    const s = pres.addSlide(); s.background = { color: WHITE };
    title(s, 'Where the standards live: set once in Part P');
    const lw = 5.7;
    card(s, M, 1.45, lw, 5.55);
    txt(s, 'Part P: 36 configuration keys with defaults', { x: M + 0.25, y: 1.6, w: lw - 0.5, h: 0.4, fontSize: 14, bold: true, color: INK });
    const kv = [['Accessibility', 'WCAG 2.2 AA: 4.5:1 text, 3:1 large text, 3:1 UI'], ['Language', 'Canadian English'], ['Authoring tool', 'DominKnow'], ['Typography', 'Helvetica 16 pt body, 18 pt title'], ['Limits', 'At most 10 modules; fewer than 50 screens'], ['Performance', '500 KB or less per static image'], ['Attempts', '2 for knowledge checks and assessment'], ['Randomize options', 'Yes'], ['Forward control', 'Continue'], ['Audio controls', 'Play, Pause, Replay, Skip Backward, Skip Forward'], ['First screen', 'Separate Splash and Orientation'], ['Sensitive data', 'Fictional or redacted; no service numbers']];
    s.addTable(kv.map((r, i) => r.map((c, j) => ({ text: c, options: { bold: j === 0, color: j === 0 ? TEAL : TEXT, fill: { color: i % 2 ? WHITE : 'F7FBFA' }, fontSize: 10.5, fontFace: BFONT, margin: 0.04 } }))), { x: M + 0.25, y: 2.1, w: lw - 0.5, colW: [1.6, lw - 2.1], border: { type: 'solid', pt: 0.5, color: 'C9D6D3' }, rowH: 0.34 });
    txt(s, 'Change a value here and it applies everywhere. The body never restates it.', { x: M + 0.25, y: 6.5, w: lw - 0.5, h: 0.4, fontSize: 11, color: MUTED, italic: true });
    const rx = M + lw + 0.3, rw = W - M - rx;
    card(s, rx, 1.45, rw, 2.75);
    txt(s, 'Feedback wording is fixed', { x: rx + 0.25, y: 1.6, w: rw - 0.5, h: 0.4, fontSize: 14, bold: true, color: INK });
    const fb = [['Correct Feedback', '"That is correct." … explanation … "Please continue."'], ['First Incorrect Feedback (Hint)', '"That is incorrect. Please try again." … a hint that never reveals the answer'], ['Final Incorrect Feedback', '"That is incorrect. Correct answer: …. This is correct because …" … "Please continue."']];
    fb.forEach((f, i) => {
      const y = 2.1 + i * 0.68;
      card(s, rx + 0.25, y, 2.3, 0.55, i === 2 ? CORAL : (i === 1 ? AMBER : TEAL), { noShadow: true, r: 0.08 });
      txt(s, f[0], { x: rx + 0.3, y, w: 2.2, h: 0.55, fontSize: 9.5, bold: true, color: i === 1 ? INK : WHITE, align: 'center', valign: 'middle' });
      txt(s, f[1], { x: rx + 2.7, y, w: rw - 3.0, h: 0.55, fontSize: 10.5, color: TEXT, valign: 'middle' });
    });
    card(s, rx, 4.45, rw, 2.55);
    txt(s, 'Gaps are owned, never invented', { x: rx + 0.25, y: 4.6, w: rw - 0.5, h: 0.4, fontSize: 14, bold: true, color: INK });
    const markers = ['[LD TO COMPLETE]', '[LD TO DECIDE]', '[LD TO IDENTIFY]', '[SME TO CONFIRM]', '[MULTIMEDIA TO PROVIDE]', '[MULTIMEDIA TO CONFIRM]', '[ACCESSIBILITY TO CONFIRM]', '[DEVELOPER TO ADVISE]'];
    const mw = (rw - 0.5 - 3 * 0.12) / 4;
    markers.forEach((m, i) => {
      const x = rx + 0.25 + (i % 4) * (mw + 0.12), y = 5.1 + Math.floor(i / 4) * 0.6;
      card(s, x, y, mw, 0.48, ICE, { noShadow: true, r: 0.08 });
      txt(s, m, { x: x + 0.05, y, w: mw - 0.1, h: 0.48, fontSize: 9, bold: true, color: INK, align: 'center', valign: 'middle' });
    });
    txt(s, 'Glossary: one name per thing, so the forward control, the feedback states, the modes, and the gap classes are never called two things.', { x: rx + 0.25, y: 6.35, w: rw - 0.5, h: 0.6, fontSize: 10.5, color: MUTED, italic: true });
    s.addNotes('This is the answer to "where are the standards?". They are not sprinkled through the rows. Organizational defaults live in Part P, fixed wording lives in the feedback model, and every unknown becomes a named marker for a named owner.');
  }

  // ================= S11 Quality gates =================
  {
    const s = pres.addSlide(); s.background = { color: WHITE };
    title(s, 'Quality gates: 37 checks, three severities');
    const lw = 5.7;
    card(s, M, 1.45, lw, 5.55);
    txt(s, 'Part Q, the QA table', { x: M + 0.25, y: 1.6, w: lw - 0.5, h: 0.4, fontSize: 14, bold: true, color: INK });
    const sev = [['Blocker', 6, CORAL, 'do not deliver'], ['Major', 26, TEAL, 'row Revise or Blocked; storyboard not Developer Ready'], ['Minor', 5, AMBER, 'fix before delivery']];
    const maxW = lw - 2.3;
    sev.forEach((v, i) => {
      const y = 2.25 + i * 1.35;
      txt(s, v[0], { x: M + 0.25, y, w: 1.3, h: 0.5, fontSize: 13, bold: true, color: INK, valign: 'middle' });
      const bw = Math.max(0.5, maxW * v[1] / 26);
      s.addShape(pres.ShapeType.rect, { x: M + 1.6, y: y + 0.05, w: bw, h: 0.42, fill: { color: v[2] }, line: { color: v[2], width: 0 } });
      txt(s, String(v[1]), { x: M + 1.6 + bw + 0.1, y, w: 0.7, h: 0.5, fontFace: HFONT, fontSize: 18, bold: true, color: v[2], valign: 'middle' });
      txt(s, v[3], { x: M + 1.6, y: y + 0.55, w: lw - 2.0, h: 0.5, fontSize: 11, color: MUTED, italic: true });
    });
    txt(s, 'Every check cites the rule it enforces. Package checks run once; row checks run on every slide.', { x: M + 0.25, y: 6.3, w: lw - 0.5, h: 0.6, fontSize: 11, color: MUTED, italic: true });
    const rx = M + lw + 0.3, rw = W - M - rx;
    const cards = [['Developer Ready means', 'Every required field, object, mapping, answer, feedback state, asset reference, scoring decision, feasibility confirmation, and accessibility decision is present, and no Blocking marker remains. The storyboard is ready only when every row is.', 1.45, 2.0], ['Part S: a ten-line self-check before every output', 'Locked blocks only; no Draft objective; every row anchored; every stem and object once, in Text Content; feedback wording; no repeated Developer Notes; every gap owned; Multimedia schema; narration placement; the build question.', 3.6, 1.8], ['The rule', 'Revise rather than deliver a known failure. The final build question: could a developer who has never met the designer build it from the storyboard, the standards, and the referenced assets alone?', 5.55, 1.45]];
    cards.forEach(c => {
      card(s, rx, c[2], rw, c[3]);
      txt(s, [{ text: c[0], options: { bold: true, fontSize: 13.5, color: INK, breakLine: true, paraSpaceAfter: 4 } }, { text: c[1], options: { fontSize: 11, color: TEXT } }], { x: rx + 0.25, y: c[2] + 0.12, w: rw - 0.5, h: c[3] - 0.2 });
    });
    s.addNotes('Quality is not a final read-through. It is a table of 37 fail conditions with severities, a ten-line self-check, and a hard definition of Developer Ready. The generator must revise rather than deliver a known failure.');
  }

  // ================= S12 Strength =================
  {
    const s = pres.addSlide(); s.background = { color: WHITE };
    title(s, 'Six guarantees a short prompt cannot make');
    const g = [['FaLock', 'Source-locked', 'Every learner-facing claim traces to an accessible source or becomes an owned gap. Nothing is invented, including assets, availability, and platform behaviour.'], ['FaBullseye', 'Objective-complete', 'Every objective is a job task with quoted evidence and is taught, exemplified, practised, and assessed, or carries a recorded exception.'], ['FaTools', 'Build-ready', 'Every component carries its minimum fields, plain-pair answers, and exact feedback. A developer who never met the designer can build it.'], ['FaUniversalAccess', 'Accessible by default', 'WCAG 2.2 AA is stated once; only exceptions appear at slide level; matching, hotspot, and custom interactions carry keyboard equivalents.'], ['FaGlasses', 'Reviewer-readable', 'Complete sentences, one term per thing, acronyms defined, no index codes, no repeated conventions. One reading is enough.'], ['FaSyncAlt', 'Repeatable', 'Same six blocks, same wording rules, same checks on every run. Change a project value once, in Part P, and it applies everywhere.']];
    const cw = 3.75, gap = (W - 2 * M - 3 * cw) / 2, ch = 2.5;
    for (let i = 0; i < 6; i++) {
      const x = M + (i % 3) * (cw + gap), y = 1.5 + Math.floor(i / 3) * (ch + 0.35);
      card(s, x, y, cw, ch);
      await iconCircle(s, x + 0.25, y + 0.25, 0.7, TEAL, g[i][0]);
      txt(s, g[i][1], { x: x + 1.1, y: y + 0.28, w: cw - 1.3, h: 0.65, fontSize: 16, bold: true, color: INK, valign: 'middle' });
      txt(s, g[i][2], { x: x + 0.25, y: y + 1.05, w: cw - 0.5, h: 1.35, fontSize: 11.5, color: TEXT });
    }
    s.addNotes('These six are the "magic". None of them is a feature of the model; each one is a rule, a format, or a check in the document. Take the document away and all six go with it.');
  }

  // ================= S13 Closing =================
  {
    const s = pres.addSlide(); s.background = { color: INK };
    title(s, 'Why a simple prompt cannot replace it', WHITE);
    const rows = [['Decision', '200-word prompt', 'Master prompt'], ['Output shape', 'Whatever the model picks that day', 'Six locked blocks, five fixed columns, real Word tables'], ['Sources', 'Whatever it remembers or assumes', 'Accessible sources only, ranked by a nine-level authority stack'], ['Missing information', 'Filled in silently', 'Classified Critical, Blocking, or Non-blocking and assigned an owner'], ['Answers and feedback', 'Improvised and inconsistent', 'Plain-pair answers, exact feedback wording, randomization rules'], ['Accessibility', 'Mentioned, maybe', 'Baseline once, exceptions per slide, keyboard equivalents required'], ['Quality', 'Trust and hope', '37 checks with severities and a defined Developer Ready']];
    s.addTable(rows.map((r, i) => r.map((c, j) => ({ text: c, options: { bold: i === 0 || j === 0, color: i === 0 ? AMBER : (j === 1 ? 'B8C7CC' : WHITE), fill: { color: i === 0 ? '0B2129' : (i % 2 ? '163A48' : '12303D') }, fontSize: 12, fontFace: BFONT, margin: 0.06 } }))), { x: 0.8, y: 1.5, w: W - 1.6, colW: [2.4, 3.6, W - 1.6 - 6.0], border: { type: 'solid', pt: 0.5, color: '2E5563' }, rowH: 0.55 });
    txt(s, 'Attach the document.  Say "Generate the storyboard."  Review the six blocks.', { x: 0.8, y: 6.3, w: W - 1.6, h: 0.7, fontFace: HFONT, fontSize: 20, bold: true, color: AMBER, align: 'center', valign: 'middle' });
    s.addNotes('Close on the contrast. A short prompt cannot carry a contract; this document is the contract. The workflow stays simple for the designer: attach, ask, review.');
  }

  await pres.writeFile({ fileName: path.join(__dirname, 'Storyboard_Master_Prompt_Introduction.pptx') });
  console.log('wrote deck');
})().catch(e => { console.error(e); process.exit(1); });
