const fs = require('fs');
const path = require('path');
const D = require('docx');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType,
        BorderStyle, ShadingType, AlignmentType, LevelFormat, Footer, PageNumber, TabStopType } = D;

const src = process.argv[2], out = process.argv[3];
const lines = fs.readFileSync(src, 'utf8').split('\n');
const FONT = 'Arial';
const PAGE_W = 12240, PAGE_H = 15840, MARGIN = 1080; // Letter, 0.75in margins
const USABLE = PAGE_W - 2 * MARGIN; // 10080

function runs(text, opts = {}) {
  // supports **bold** inline
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map(p => {
    const m = p.match(/^\*\*([^*]+)\*\*$/);
    return new TextRun({ text: m ? m[1] : p, bold: m ? true : opts.bold, italics: opts.italics,
                         font: FONT, size: opts.size || 20, color: '000000' });
  });
}
function para(text, o = {}) {
  return new Paragraph({ children: runs(text, o), spacing: { after: o.after ?? 100, line: 276 },
                         alignment: o.align, indent: o.indent, numbering: o.numbering, keepNext: o.keepNext });
}
const children = [];
let i = 0;
let tableIdx = 0;
const counts = [];
while (i < lines.length) {
  let l = lines[i];
  if (!l.trim()) { i++; continue; }
  let m;
  if ((m = l.match(/^(#{1,5})\s+(.*)$/))) {
    const lvl = m[1].length; const t = m[2];
    const map = { 1: HeadingLevel.TITLE, 2: HeadingLevel.HEADING_1, 3: HeadingLevel.HEADING_2, 4: HeadingLevel.HEADING_3, 5: HeadingLevel.HEADING_4 };
    children.push(new Paragraph({ text: t, heading: map[lvl], keepNext: true, spacing: { before: lvl === 1 ? 0 : 240, after: 120 } }));
    i++; continue;
  }
  if (l.startsWith('✂')) {
    children.push(new Paragraph({ children: runs(l.trim(), { bold: true, size: 24 }), alignment: AlignmentType.CENTER,
      spacing: { before: 240, after: 240 }, border: { top: { style: BorderStyle.DASHED, size: 6, color: '000000', space: 4 }, bottom: { style: BorderStyle.DASHED, size: 6, color: '000000', space: 4 } } }));
    i++; continue;
  }
  if (l.startsWith('```')) {
    const label = l.slice(3).trim();
    const body = [];
    i++;
    while (i < lines.length && !lines[i].startsWith('```')) { body.push(lines[i]); i++; }
    i++; // closing fence
    const text = body.join('\n');
    const nchars = text.length;
    const limit = label === 'instructions' ? 8000 : label === 'description' ? 1000 : label === 'name' ? 30 : null;
    const border = { style: BorderStyle.SINGLE, size: 6, color: '000000' };
    const paras = body.map(b => new Paragraph({ children: [new TextRun({ text: b.length ? b : ' ', font: FONT, size: 18, color: '000000' })], spacing: { after: 40, line: 252 } }));
    children.push(new Table({ rows: [new TableRow({ children: [new TableCell({ width: { size: USABLE, type: WidthType.DXA },
      borders: { top: border, bottom: border, left: border, right: border },
      shading: { type: ShadingType.CLEAR, fill: 'F3F3F3', color: 'auto' }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: paras })] })],
      width: { size: USABLE, type: WidthType.DXA }, columnWidths: [USABLE] }));
    if (limit) {
      const ok = nchars <= limit;
      children.push(new Paragraph({ children: [new TextRun({ text: `Character count: ${nchars.toLocaleString()} of ${limit.toLocaleString()} allowed${ok ? '' : '  — OVER LIMIT'}`, italics: true, font: FONT, size: 16, color: ok ? '000000' : 'C00000' })], spacing: { after: 160 } }));
      counts.push({ label, nchars, limit, ok });
    } else {
      children.push(new Paragraph({ text: '', spacing: { after: 120 } }));
    }
    continue;
  }
  if (l.startsWith('|')) {
    // collect table
    const rows = [];
    while (i < lines.length && lines[i].startsWith('|')) { rows.push(lines[i]); i++; }
    const cells = rows.filter(r => !/^\|\s*-{2,}/.test(r)).map(r => r.replace(/^\|/, '').replace(/\|\s*$/, '').split('|').map(c => c.trim()));
    const ncol = Math.max(...cells.map(r => r.length));
    // width heuristic: proportional to sqrt of max content length, min share
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
    const trows = cells.map((r, ri) => new TableRow({
      tableHeader: ri === 0 ? true : undefined,
      children: Array.from({ length: ncol }, (_, k) => new TableCell({
        width: { size: widths[k], type: WidthType.DXA },
        borders,
        shading: ri === 0 ? { type: ShadingType.CLEAR, fill: 'D9E2F3', color: 'auto' } : undefined,
        margins: { top: 60, bottom: 60, left: 90, right: 90 },
        children: [new Paragraph({ children: runs(r[k] || '', { bold: ri === 0, size: 17 }), spacing: { after: 0, line: 240 } })]
      }))
    }));
    children.push(new Table({ rows: trows, width: { size: USABLE, type: WidthType.DXA }, columnWidths: widths,
      borders: { top: border, bottom: border, left: border, right: border, insideHorizontal: border, insideVertical: border } }));
    children.push(new Paragraph({ text: '', spacing: { after: 120 } }));
    tableIdx++;
    continue;
  }
  if ((m = l.match(/^- (.*)$/))) {
    children.push(new Paragraph({ children: runs(m[1]), numbering: { reference: 'bullets', level: 0 }, spacing: { after: 60, line: 276 } }));
    i++; continue;
  }
  if ((m = l.match(/^(\d+)\. (.*)$/))) {
    children.push(new Paragraph({ children: [new TextRun({ text: m[1] + '.\t', font: FONT, size: 20, color: '000000' }), ...runs(m[2])],
      indent: { left: 540, hanging: 540 }, tabStops: [{ type: TabStopType.LEFT, position: 540 }], spacing: { after: 60, line: 276 } }));
    i++; continue;
  }
  // paragraph (single line in this markdown)
  children.push(para(l));
  i++;
}

const doc = new Document({
  creator: 'Learning Design',
  title: 'Storyboard Generator Master Prompt v3.4',
  styles: {
    default: {
      document: { run: { font: FONT, size: 20, color: '000000' } },
      title: { run: { font: FONT, size: 36, bold: true, color: '000000' }, paragraph: { spacing: { after: 200 } } },
      heading1: { run: { font: FONT, size: 30, bold: true, color: '000000' }, paragraph: { spacing: { before: 360, after: 120 }, outlineLevel: 0 } },
      heading2: { run: { font: FONT, size: 26, bold: true, color: '000000' }, paragraph: { spacing: { before: 280, after: 100 }, outlineLevel: 1 } },
      heading3: { run: { font: FONT, size: 22, bold: true, color: '000000' }, paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 2 } },
      heading4: { run: { font: FONT, size: 20, bold: true, italics: true, color: '000000' }, paragraph: { spacing: { before: 160, after: 60 }, outlineLevel: 3 } },
    }
  },
  numbering: { config: [{ reference: 'bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 480, hanging: 300 } } } }] }] },
  sections: [{
    properties: { page: { size: { width: PAGE_W, height: PAGE_H }, margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
      new TextRun({ text: 'Storyboard Generator Master Prompt v3.4   |   Page ', font: FONT, size: 16, color: '000000' }),
      new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 16, color: '000000' }) ] })] }) },
    children
  }]
});
Packer.toBuffer(doc).then(buf => { fs.writeFileSync(out, buf); console.log('wrote', out, buf.length, 'bytes; tables:', tableIdx, 'blocks:', children.length); counts.forEach(c => console.log((c.ok ? '  ok  ' : '  OVER') + ' ' + c.label + ' ' + c.nchars + '/' + c.limit)); });
