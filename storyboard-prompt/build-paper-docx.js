// Markdown-ish -> Word builder for manuscripts with colour-coded editorial markers.
// Usage: node build_paper_docx.js in.md out.docx [footerLabel]
const fs = require('fs');
const path = require('path');
function req(name) { try { return require(name); } catch (e) { return require(path.resolve(__dirname, '..', 'node_modules', name)); } }
const D = req('docx');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType,
        BorderStyle, ShadingType, AlignmentType, LevelFormat, Footer, PageNumber, PageBreak } = D;

const src = process.argv[2], out = process.argv[3];
const lines = fs.readFileSync(src, 'utf8').split('\n');
const docTitle = (lines.find(l => /^# /.test(l)) || '# Document').replace(/^# /, '').trim();
const footerLabel = process.argv[4] || docTitle;
const FONT = 'Times New Roman';
const BODY = 24; // 12pt
const PAGE_W = 12240, PAGE_H = 15840, MARGIN = 1440; // Letter, 1in margins
const USABLE = PAGE_W - 2 * MARGIN;

// ---- colour rules -------------------------------------------------------
const BLUE = '1F4E9C', GREEN = '1E7A3A', PURPLE = '7030A0', RED = 'C00000', BLACK = '000000';
const MARKERS = [
  { re: /^\[UPDATED FROM LOCAL COPIES — 2026-06-17\]/, color: BLUE },
  { re: /^\[ADDED FROM AVAILABLE PROJECT RECORDS\]/, color: BLUE },
  { re: /^\[UPDATED FROM BASELINE PROMPTS — 2026-07-15\]/, color: GREEN },
  { re: /^\[UPDATED FROM MATCHED STORYBOARD PAIRS — 2026-07-15\]/, color: PURPLE },
  { re: /^\[UPDATED FROM COMPLETE MOD 3, MOD 4, AND MOD 13 STORYBOARD SET — 2026-07-15\]/, color: PURPLE },
  { re: /^\[LOCAL COPY STILL NEEDED\]/, color: RED, highlight: 'yellow' },
  { re: /^\[(?:DATA|PLACEHOLDER|TO BE COMPLETED|INSERT|RESULT)[^\]]*\]/, color: RED, highlight: 'yellow', inlineOnly: true },
];
const NAMED = { blue: BLUE, green: GREEN, purple: PURPLE, red: RED, black: BLACK };

// Split a paragraph into runs. Handles markers (colour switches), **bold**, *italic*, ==highlight==.
function styleRuns(text, o = {}) {
  const runs = [];
  let color = o.color || BLACK;
  let i = 0, buf = '';
  let bold = !!o.bold, italics = !!o.italics, hl = null;
  const size = o.size || BODY;
  const flush = () => { if (buf) { runs.push(new TextRun({ text: buf, font: FONT, size, color, bold, italics, highlight: hl || undefined })); buf = ''; } };
  while (i < text.length) {
    const rest = text.slice(i);
    // marker?
    if (rest[0] === '[') {
      const prev = text.slice(0, i);
      const atBoundary = prev === '' || /[.!?:]\s$/.test(prev) || /^\s*$/.test(prev);
      let matched = null;
      for (const m of MARKERS) { const mm = rest.match(m.re); if (mm) { matched = { m, tag: mm[0] }; break; } }
      if (matched && (atBoundary || matched.m.inlineOnly)) {
        flush();
        const { m, tag } = matched;
        runs.push(new TextRun({ text: tag, font: FONT, size, color: m.color, bold: true, italics, highlight: m.highlight || undefined }));
        if (!m.inlineOnly) color = m.color;
        i += tag.length; continue;
      }
    }
    if (rest.startsWith('**')) { flush(); bold = !bold; i += 2; continue; }
    if (rest.startsWith('==')) { flush(); hl = hl ? null : 'yellow'; i += 2; continue; }
    if (rest[0] === '*' && !rest.startsWith('**')) { flush(); italics = !italics; i += 1; continue; }
    buf += rest[0]; i += 1;
  }
  flush();
  return runs;
}
function para(text, o = {}) {
  return new Paragraph({ children: styleRuns(text, o), spacing: { after: o.after ?? 160, line: o.line ?? 276 },
    alignment: o.align, indent: o.indent, keepNext: o.keepNext, pageBreakBefore: o.pageBreakBefore });
}

const children = [];
let i = 0, tableIdx = 0;
while (i < lines.length) {
  let l = lines[i];
  if (!l.trim()) { i++; continue; }
  let m;
  if ((m = l.match(/^(#{1,5})\s+(.*)$/))) {
    const lvl = m[1].length; const t = m[2];
    const map = { 1: HeadingLevel.TITLE, 2: HeadingLevel.HEADING_1, 3: HeadingLevel.HEADING_2, 4: HeadingLevel.HEADING_3, 5: HeadingLevel.HEADING_4 };
    children.push(new Paragraph({ children: [new TextRun({ text: t, font: FONT, bold: true, color: BLACK, size: lvl === 1 ? 28 : lvl === 2 ? 26 : 24, italics: lvl === 4 })],
      heading: map[lvl], keepNext: true, alignment: lvl === 1 ? AlignmentType.CENTER : undefined,
      spacing: { before: lvl === 1 ? 0 : lvl === 2 ? 360 : 240, after: 120 } }));
    i++; continue;
  }
  if (l.startsWith('@pagebreak')) { children.push(new Paragraph({ children: [new PageBreak()] })); i++; continue; }
  if ((m = l.match(/^@center\s+(.*)$/))) { children.push(para(m[1], { align: AlignmentType.CENTER, after: 60 })); i++; continue; }
  if ((m = l.match(/^@join\s+(.*)$/))) { children.push(para(m[1])); i++; continue; }
  if ((m = l.match(/^@caption\s+(.*)$/))) { children.push(para(m[1], { keepNext: true, after: 120 })); i++; continue; }
  if ((m = l.match(/^@note\s+(.*)$/))) { children.push(para(m[1], { italics: true })); i++; continue; }
  if ((m = l.match(/^@ref\s+(.*)$/))) { children.push(para(m[1], { indent: { left: 720, hanging: 720 }, after: 120 })); i++; continue; }
  if (l.startsWith('|')) {
    const rows = [];
    while (i < lines.length && lines[i].startsWith('|')) { rows.push(lines[i]); i++; }
    const cells = rows.filter(r => !/^\|\s*-{2,}/.test(r)).map(r => r.replace(/^\|/, '').replace(/\|\s*$/, '').split('|').map(c => c.trim()));
    const ncol = Math.max(...cells.map(r => r.length));
    const maxLen = Array(ncol).fill(0);
    cells.forEach(r => r.forEach((c, k) => { maxLen[k] = Math.max(maxLen[k], Math.min(c.length, 400)); }));
    let w = maxLen.map(x => Math.sqrt(x + 8));
    const sum = w.reduce((a, b) => a + b, 0);
    let widths = w.map(x => Math.max(Math.round(USABLE * x / sum), 900));
    const s2 = widths.reduce((a, b) => a + b, 0);
    widths = widths.map(x => Math.round(x * USABLE / s2));
    widths[ncol - 1] += USABLE - widths.reduce((a, b) => a + b, 0);
    const border = { style: BorderStyle.SINGLE, size: 4, color: '000000' };
    const borders = { top: border, bottom: border, left: border, right: border };
    const trows = cells.map((r, ri) => {
      // row colour: {name} prefix in first cell, or a leading marker in first cell
      let rowColor = undefined;
      let first = r[0] || '';
      const cm = first.match(/^\{(blue|green|purple|red|black)\}\s*/);
      if (cm) { rowColor = NAMED[cm[1]]; r[0] = first.slice(cm[0].length); }
      else { for (const mk of MARKERS) { if (mk.re.test(first) && !mk.inlineOnly) { rowColor = mk.color; break; } } }
      return new TableRow({
        tableHeader: ri === 0 ? true : undefined, cantSplit: true,
        children: Array.from({ length: ncol }, (_, k) => new TableCell({
          width: { size: widths[k], type: WidthType.DXA }, borders,
          shading: ri === 0 ? { type: ShadingType.CLEAR, fill: 'D9E2F3', color: 'auto' } : undefined,
          margins: { top: 60, bottom: 60, left: 90, right: 90 },
          children: [new Paragraph({ children: styleRuns(r[k] || '', { bold: ri === 0, size: 18, color: rowColor }), spacing: { after: 0, line: 240 } })]
        }))
      });
    });
    children.push(new Table({ rows: trows, width: { size: USABLE, type: WidthType.DXA }, columnWidths: widths,
      borders: { top: border, bottom: border, left: border, right: border, insideHorizontal: border, insideVertical: border } }));
    children.push(new Paragraph({ text: '', spacing: { after: 120 } }));
    tableIdx++;
    continue;
  }
  if ((m = l.match(/^- (.*)$/))) {
    children.push(new Paragraph({ children: styleRuns(m[1]), numbering: { reference: 'bullets', level: 0 }, spacing: { after: 80, line: 276 } }));
    i++; continue;
  }
  if ((m = l.match(/^(\d+)\. (.*)$/))) {
    children.push(new Paragraph({ children: [new TextRun({ text: m[1] + '.\t', font: FONT, size: BODY, color: BLACK }), ...styleRuns(m[2])],
      indent: { left: 540, hanging: 540 }, spacing: { after: 80, line: 276 } }));
    i++; continue;
  }
  children.push(para(l));
  i++;
}

const doc = new Document({
  creator: 'Learning Engineering Team',
  title: docTitle,
  styles: {
    default: { document: { run: { font: FONT, size: BODY, color: BLACK } } },
  },
  numbering: { config: [{ reference: 'bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 480, hanging: 300 } } } }] }] },
  sections: [{
    properties: { page: { size: { width: PAGE_W, height: PAGE_H }, margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
      new TextRun({ text: footerLabel + '   |   Page ', font: FONT, size: 18, color: BLACK }),
      new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 18, color: BLACK }) ] })] }) },
    children
  }]
});
Packer.toBuffer(doc).then(async buf => {
  // drop w:highlightCs (docx-js emits it after w:highlight, which breaks schema order)
  const JSZip = req('jszip');
  const zip = await JSZip.loadAsync(buf);
  const xml = await zip.file('word/document.xml').async('string');
  zip.file('word/document.xml', xml.replace(/<w:highlightCs w:val="[^"]*"\/>/g, ''));
  buf = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });
  fs.writeFileSync(out, buf); console.log('wrote', out, buf.length, 'bytes; tables:', tableIdx, 'blocks:', children.length); });
