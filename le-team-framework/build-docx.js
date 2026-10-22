// Markdown -> Word builder for the Learning Engineering role-architecture document.
// Usage: NODE_PATH=$(npm root -g) node build-docx.js LE-Team-Role-Architecture.md LE-Team-Role-Architecture.docx
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, ImageRun, Table, TableRow, TableCell, WidthType,
  BorderStyle, ShadingType, AlignmentType, LevelFormat, Footer, PageNumber, HeadingLevel, PageBreak,
} = require('docx');

const src = process.argv[2], out = process.argv[3];
const baseDir = path.dirname(path.resolve(src));
const lines = fs.readFileSync(src, 'utf8').split('\n');

const FONT = 'Calibri', MONO = 'Consolas';
const NAVY = '1F3864', STEEL = '5B7699', RED = '9E3B3B', GREY = '595959', INK = '262626';
const TINT_NAVY = 'DEE5F0', TINT_ROW = 'F4F6F9', RULE = 'B4C0D3';
const BODY = 21, SMALL = 18; // half-points: 10.5pt body, 9pt tables
const PAGE_W = 12240, MARGIN = 1080, USABLE = PAGE_W - 2 * MARGIN; // Letter, 0.75in margins

// ---- inline formatting: **bold**, *italic*, `code` ----------------------------
function runs(text, o = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|`[^`]+`)/g;
  let last = 0, m;
  const size = o.size || BODY, color = o.color || INK;
  const push = (t, extra = {}) => t && out.push(new TextRun({ text: t, font: FONT, size, color, bold: o.bold, italics: o.italics, ...extra }));
  while ((m = re.exec(text))) {
    push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith('**')) push(tok.slice(2, -2), { bold: true });
    else if (tok.startsWith('`')) out.push(new TextRun({ text: tok.slice(1, -1), font: MONO, size: size - 2, color }));
    else push(tok.slice(1, -1), { italics: true });
    last = m.index + tok.length;
  }
  push(text.slice(last));
  return out;
}

const para = (text, o = {}) => new Paragraph({
  children: runs(text, o), alignment: o.align, keepNext: o.keepNext,
  spacing: { before: o.before ?? 0, after: o.after ?? 140, line: o.line ?? 276 },
  numbering: o.numbering, indent: o.indent,
});

// ---- tables --------------------------------------------------------------------
const cellBorder = { style: BorderStyle.SINGLE, size: 4, color: RULE };
const borders = { top: cellBorder, bottom: cellBorder, left: cellBorder, right: cellBorder };

// Width by mean text length, but never narrower than the column's longest word.
function columnWidths(rows) {
  const n = rows[0].length;
  const plain = s => (s || '').replace(/\*|`/g, '');
  const w = Array.from({ length: n }, (_, c) => {
    const lens = rows.map(r => plain(r[c]).length);
    const mean = lens.reduce((a, b) => a + b, 0) / lens.length;
    return Math.pow(Math.min(Math.max(mean, 6), 90), 0.75);
  });
  const minW = Array.from({ length: n }, (_, c) => {
    const longest = Math.max(...rows.map(r => Math.max(0, ...plain(r[c]).split(/[\s/]+/).map(x => x.length))));
    return longest * 100 + 220;
  });
  let widths = w.map(x => (x / w.reduce((a, b) => a + b, 0)) * USABLE);
  for (let pass = 0; pass < 3; pass++) {
    const fixed = widths.map((x, c) => x < minW[c]);
    const need = widths.reduce((a, x, c) => a + (fixed[c] ? minW[c] - x : 0), 0);
    const flexSum = widths.reduce((a, x, c) => a + (fixed[c] ? 0 : x), 0);
    widths = widths.map((x, c) => fixed[c] ? minW[c] : x - need * (x / flexSum));
  }
  return widths.map(Math.round);
}

function table(rows) {
  const widths = columnWidths(rows);
  return new Table({
    width: { size: USABLE, type: WidthType.DXA },
    columnWidths: widths,
    rows: rows.map((r, ri) => new TableRow({
      tableHeader: ri === 0, cantSplit: true,
      children: r.map((cell, ci) => new TableCell({
        width: { size: widths[ci], type: WidthType.DXA }, borders,
        shading: ri === 0 ? { type: ShadingType.CLEAR, color: 'auto', fill: NAVY }
          : ri % 2 === 0 ? { type: ShadingType.CLEAR, color: 'auto', fill: TINT_ROW } : undefined,
        margins: { top: 60, bottom: 60, left: 90, right: 90 },
        children: [new Paragraph({
          spacing: { after: 0, line: 252 },
          children: runs(cell, ri === 0 ? { size: SMALL, color: 'FFFFFF', bold: true } : { size: SMALL }),
        })],
      })),
    })),
  });
}

function callout(text) {
  const side = { style: BorderStyle.SINGLE, size: 24, color: NAVY };
  const none = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
  return new Table({
    width: { size: USABLE, type: WidthType.DXA }, columnWidths: [USABLE],
    rows: [new TableRow({ children: [new TableCell({
      width: { size: USABLE, type: WidthType.DXA },
      borders: { left: side, top: none, bottom: none, right: none },
      shading: { type: ShadingType.CLEAR, color: 'auto', fill: TINT_NAVY },
      margins: { top: 120, bottom: 120, left: 200, right: 200 },
      children: [para(text, { after: 0 })],
    })] })],
  });
}

function image(rel, caption) {
  const file = path.join(baseDir, rel);
  const buf = fs.readFileSync(file);
  const w = buf.readUInt32BE(16), h = buf.readUInt32BE(20); // PNG IHDR
  const outW = 660, outH = Math.round(outW * h / w);
  return [
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 60 }, keepNext: true,
      children: [new ImageRun({ type: 'png', data: buf, transformation: { width: outW, height: outH },
        altText: { title: caption, description: caption, name: path.basename(rel) } })] }),
    para(caption, { italics: true, size: SMALL, color: GREY, align: AlignmentType.CENTER, after: 200 }),
  ];
}

// ---- walk the markdown ---------------------------------------------------------
const children = [];
let listInstance = 0, inNumbered = false;
let docTitle = 'Document';
for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  if (!/^\d+\.\s/.test(l)) inNumbered = false;
  if (!l.trim()) continue;
  if (l.trim() === '<!-- pagebreak -->') { children.push(new Paragraph({ children: [new PageBreak()] })); continue; }
  let m;
  if ((m = l.match(/^# (.*)$/))) {
    docTitle = m[1];
    children.push(new Paragraph({ heading: HeadingLevel.TITLE, spacing: { after: 160 },
      children: [new TextRun({ text: m[1], font: FONT, size: 40, bold: true, color: NAVY })] }));
  } else if ((m = l.match(/^## (.*)$/))) {
    children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, keepNext: true, spacing: { before: 360, after: 140 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: NAVY, space: 4 } },
      children: [new TextRun({ text: m[1], font: FONT, size: 28, bold: true, color: NAVY })] }));
  } else if ((m = l.match(/^### (.*)$/))) {
    children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, keepNext: true, spacing: { before: 240, after: 100 },
      children: [new TextRun({ text: m[1], font: FONT, size: 24, bold: true, color: STEEL })] }));
  } else if ((m = l.match(/^!\[(.*)\]\((.*)\)$/))) {
    children.push(...image(m[2], m[1]));
  } else if (l.startsWith('|')) {
    const rows = [];
    while (i < lines.length && lines[i].startsWith('|')) {
      const cells = lines[i].trim().replace(/^\||\|$/g, '').split('|').map(s => s.trim());
      if (!cells.every(c => /^:?-+:?$/.test(c))) rows.push(cells);
      i++;
    }
    i--;
    children.push(table(rows));
    children.push(new Paragraph({ spacing: { after: 120 }, children: [] }));
  } else if (l.startsWith('> ')) {
    children.push(callout(l.slice(2)));
    children.push(new Paragraph({ spacing: { after: 120 }, children: [] }));
  } else if ((m = l.match(/^(\s*)- (.*)$/))) {
    const level = m[1].length >= 2 ? 1 : 0;
    children.push(para(m[2], { numbering: { reference: 'bullets', level }, after: 80 }));
  } else if ((m = l.match(/^(\d+)\.\s+(.*)$/))) {
    if (!inNumbered) { listInstance++; inNumbered = true; }
    children.push(para(m[2], { numbering: { reference: 'numbers', level: 0, instance: listInstance }, after: 80 }));
  } else if (/^\*[^*].*\*$/.test(l.trim()) && children.length < 3) {
    children.push(para(l.trim().slice(1, -1), { italics: true, size: 24, color: STEEL, after: 120 }));
  } else if (/^MILPERSCOM/.test(l)) {
    children.push(para(l, { size: SMALL, color: GREY, after: 280 }));
  } else {
    const allBold = /^\*\*[^*]+\*\*$/.test(l.trim());
    children.push(para(l, { keepNext: allBold, after: allBold ? 80 : 140 }));
  }
}

const doc = new Document({
  creator: 'LSC Learning Engineering Cell',
  title: docTitle,
  styles: { default: { document: { run: { font: FONT, size: BODY, color: INK } } } },
  numbering: { config: [
    { reference: 'bullets', levels: [
      { level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 260 } } } },
      { level: 1, format: LevelFormat.BULLET, text: '–', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 260 } } } },
    ] },
    { reference: 'numbers', levels: [
      { level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 400 } } } },
    ] },
  ] },
  sections: [{
    properties: { page: { size: { width: PAGE_W, height: 15840 }, margin: { top: 1080, bottom: 1080, left: MARGIN, right: MARGIN } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [
      new TextRun({ text: `${docTitle} · Draft v1.0 · `, font: FONT, size: 16, color: GREY }),
      new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 16, color: GREY }),
    ] })] }) },
    children,
  }],
});

Packer.toBuffer(doc).then(b => { fs.writeFileSync(out, b); console.log('wrote', out, b.length, 'bytes'); });
