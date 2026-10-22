# Learning Engineering Cell — Role Architecture and Operating Model

How the Team Lead (EDS 03), the Digital Learning Specialists (EDS 02) and the Instructional
Designers (EDS 01) of the MILPERSCOM LSC Learning Engineering Cell divide the work by level of
design, product line and deliverable. Built from the three TORs (EDS 01, EDS 02, EDS 03).

| File | What it is |
|---|---|
| [`LE-Team-Role-Architecture.md`](LE-Team-Role-Architecture.md) | Source text: the model, the levels × products matrix, engagement tiers, RACI and gates, deliverables cascade, two lifecycles, worked examples (adaptive assessment, VR), time mix and measures, TOR housekeeping, 90-day plan, checklists |
| `LE-Team-Role-Architecture.docx` | The Word version for team discussion (16 pages) |
| [`diagrams/`](diagrams/) | Figure 1 (three levels of work) and Figure 2 (line vs. design authority) as SVG sources and rendered PNGs |
| [`infographic/`](infographic/) | The presentable version: an 11-page 16:9 infographic deck for the team and the manager. `LE-Team-Role-Architecture-Infographic.pdf` (project or print), `pages/page-NN.png` (one slide each, drop into PowerPoint), `infographic.html` (source), `render.js` (build) |
| `build-docx.js`, `render-diagrams.js` | Build scripts |

## The model in one line

The Team Lead owns the **problem** (why, which approach, what counts as success); the EDS 02 owns
the **solution system** of a product line (blueprint, patterns, golden sample, specs); the EDS 01
owns each **instance** (course/module HLD, storyboards, assessment tools, builds); the TDO decides
**when and who** for the EDS 01s. Complexity sets *how much* EDS 02 time a project gets (Tiers
T0–T3), never *what kind* of work the EDS 02 does.

## Rebuild

```bash
NODE_PATH=$(npm root -g) node render-diagrams.js     # SVG -> PNG (Playwright/Chromium)
NODE_PATH=$(npm root -g) node build-docx.js LE-Team-Role-Architecture.md LE-Team-Role-Architecture.docx
```

`<!-- pagebreak -->` on its own line in the Markdown forces a page break in the Word output.

```bash
cd infographic && NODE_PATH=$(npm root -g) node render.js   # infographic.html -> PDF + pages/*.png
```
