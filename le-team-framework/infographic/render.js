// Render infographic.html to a PDF and one PNG per page.
// Usage: NODE_PATH=$(npm root -g) node render.js
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const dir = __dirname;
  const outDir = path.join(dir, 'pages');
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1.5 });
  await page.goto('file://' + path.join(dir, 'infographic.html'));
  await page.evaluate(() => document.fonts.ready);

  // Flag anything that overflows its page (content pushed below the fold or past the right edge).
  const overflow = await page.evaluate(() => {
    const out = [];
    document.querySelectorAll('.page').forEach((p, i) => {
      const pr = p.getBoundingClientRect();
      p.querySelectorAll('*').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        if (r.bottom > pr.bottom - 48 && !el.closest('.ft')) out.push(`page ${i + 1}: bottom overflow ${Math.round(r.bottom - pr.bottom)}px <${el.tagName.toLowerCase()}> "${(el.textContent || '').trim().slice(0, 40)}"`);
        if (r.right > pr.right + 1) out.push(`page ${i + 1}: right overflow <${el.tagName.toLowerCase()}>`);
      });
    });
    return out.slice(0, 40);
  });
  if (overflow.length) console.log(overflow.join('\n')); else console.log('no overflow');

  const pages = await page.$$('.page');
  for (let i = 0; i < pages.length; i++) {
    await pages[i].screenshot({ path: path.join(outDir, `page-${String(i + 1).padStart(2, '0')}.png`) });
  }
  await page.pdf({ path: path.join(dir, 'LE-Team-Role-Architecture-Infographic.pdf'), width: '1920px', height: '1080px', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  console.log('rendered', pages.length, 'pages');
  await browser.close();
})();
