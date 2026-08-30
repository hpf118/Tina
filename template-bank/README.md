# Training Slide Template Bank

A PowerPoint template bank for **corporate instructional training** (adult learning in large organizations). Two decks, all English, every template shown with a worked L&D example and a "use when" rule:

- **`Training-Slide-Template-Bank.pptx`** — the overview bank: 18 slides, 12 reusable layouts across all three knowledge-type categories.
- **`Category-01-Logical-Structural-Bank.pptx`** — the Category 01 deep dive: 21 slides, 15 logical/structural layouts in 3 families (see below). Includes speaker notes with facilitation tips.

## Category 01 deep dive — the three families

| Family | Verb | Templates |
|--------|------|-----------|
| **A · Flow & Sequence** | "It moves." | A1 Process map (ADDIE) · A2 Flowchart (is training the answer?) · A3 Swimlane (request intake) · A4 Cycle loop (Kolb) · A5 Timeline roadmap (program rollout) · A6 Funnel (change adoption) |
| **B · Structure & Levels** | "It nests." | B1 Hierarchy (competency framework) · B2 Pyramid (Kirkpatrick) · B3 Staircase (Dreyfus skill stages) · B4 Nested layers (rings around the learner) |
| **C · Relationships & Systems** | "It connects." | C1 Concept map (feedback that lands) · C2 Hub & spoke (L&D ecosystem) · C3 Input–Process–Output (course production system) · C4 Fishbone (adoption stalled) · C5 Gap bridge (today → target) |

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
node build-cat01.js   # writes Category-01-Logical-Structural-Bank.pptx
```

Palette, fonts, and shared layout helpers are constants at the top of `build-deck.js`.
