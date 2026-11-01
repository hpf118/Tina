# Good Practice Initiative: team briefing deck

`Good-Practice-Initiative-Team-Briefing.pptx` is a 27-slide deck. It introduces the e-learning design and assessment good-practice initiative to instructional designers. Every slide has speaker notes.

| Part | Slides | What it covers |
| --- | --- | --- |
| Opening | 1–4 | The idea in one slide, why it matters, what it is and is not |
| 1. What we look for | 5–14 | The six lenses, the CFITES alignment, the evidence base, then one slide per domain: practices, evidence and what to look for |
| 2. How we document | 15–21 | Two capture routes, which lens to use at each review stage, the What / Why / Reuse note, vague versus specific notes, four quality tests, the shared bank |
| 3. Implementation | 22–25 | Roles and rhythm, an eight-week pilot, toolkit and first asks |
| Close | 26–27 | Discussion questions; sources (APA 7th) |

The deck uses the same palette, fonts and icons as [`../template-bank`](../template-bank). It draws on the guides in [`../evidence-guide`](../evidence-guide), and every quotation on the slides comes from those guides.

## Rebuild

```bash
npm install pptxgenjs
node build-deck.js
```

The script reads icons from `../template-bank/assets`. It can also write the palette into the deck's theme if an `apply_theme.js` helper is available (set `APPLY_THEME` to its path). That step is optional; the slides look the same without it.
