// Render diagrams/*.svg to 2x PNG for the Word build.
// Usage: NODE_PATH=$(npm root -g) node render-diagrams.js
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const dir = path.join(__dirname, 'diagrams');
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 2 });
  for (const f of fs.readdirSync(dir).filter(n => n.endsWith('.svg'))) {
    const svg = fs.readFileSync(path.join(dir, f), 'utf8');
    await page.setContent(`<html><body style="margin:0;background:#fff">${svg}</body></html>`);
    await page.locator('svg').screenshot({ path: path.join(dir, f.replace(/\.svg$/, '.png')) });
    console.log('rendered', f);
  }
  await browser.close();
})();
