# Training Slide Template Bank

A PowerPoint template bank for **corporate instructional training** (adult learning in large organizations). The deck is **`Training-Slide-Template-Bank.pptx`** — 18 slides, all English, presenting 12 reusable layouts organized by knowledge type, each shown with a worked L&D example and a "use when" rule.

## The three categories

| # | Category | Templates | Use for |
|---|----------|-----------|---------|
| 01 | **Logical & Structural** | 1.1 Concept map · 1.2 Process map · 1.3 Flowchart · 1.4 Hierarchy | How ideas, steps, and roles connect — systems, workflows, decisions, structures |
| 02 | **Categorical** | 2.1 Category grid · 2.2 2×2 matrix · 2.3 Comparison table · 2.4 Topic breakdown | Introducing new information — name the groups first so learners can file the details |
| 03 | **Concrete & Visual** | 3.1 Annotated image · 3.2 Layer diagram · 3.3 Photo step sequence · 3.4 Correct vs incorrect | Content needing an accurate picture, staged in a logical layer, order, or contrast |

Supporting slides: title, framework overview, three section dividers, and a closing quick-reference chooser ("if the content is X → use template Y") with design guardrails.

## Design principles

- One idea per slide; the layout carries the logic.
- 3–5 chunks per group (working-memory limit).
- Accurate images only where accuracy matters; diagrams everywhere else.
- Consistent navy / steel / muted-red palette, Calibri type, and fixed header/footer pattern on every template slide.
- Attention through structure and contrast — no decoration that competes with meaning.

Grounded in instructional content-type research (Ruth Clark, *Developing Technical Training*; Clark & Lyons, *Graphics for Learning*) and cognitive-load chunking.

## Rebuilding the deck

The deck is generated from code, so it can be re-themed or extended reproducibly:

```bash
cd template-bank
npm install pptxgenjs react-icons react react-dom sharp
node make-icons.js    # renders the icon PNGs into assets/
node build-deck.js    # writes Training-Slide-Template-Bank.pptx
```

Palette, fonts, and shared layout helpers are constants at the top of `build-deck.js`.
