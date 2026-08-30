# Training Slide Template Bank

A PowerPoint template bank for **corporate instructional training** (adult learning in large organizations). Two decks, all English, every template shown with a worked L&D example and a "use when" rule:

- **`Training-Slide-Template-Bank.pptx`** — the overview bank: 18 slides, 12 reusable layouts across all three knowledge-type categories.
- **`Category-01-Logical-Structural-Bank.pptx`** — the Category 01 deep dive: 21 slides, 15 logical/structural layouts in 3 families (see below). Includes speaker notes with facilitation tips.
- **`Category-02-Categorical-Bank.pptx`** — the Category 02 deep dive: 18 slides, 12 categorical layouts in 3 families (see below). Includes speaker notes with facilitation tips.
- **`Category-03-Concrete-Visual-Bank.pptx`** — the Category 03 deep dive: 18 slides, 12 concrete/visual layouts in 3 families (see below). Image areas are styled placeholder frames ("replace with the REAL screenshot/photo") so the bank stays reusable. Includes speaker notes with facilitation tips.

## Category 01 deep dive — the three families

| Family | Verb | Templates |
|--------|------|-----------|
| **A · Flow & Sequence** | "It moves." | A1 Process map (ADDIE) · A2 Flowchart (is training the answer?) · A3 Swimlane (request intake) · A4 Cycle loop (Kolb) · A5 Timeline roadmap (program rollout) · A6 Funnel (change adoption) |
| **B · Structure & Levels** | "It nests." | B1 Hierarchy (competency framework) · B2 Pyramid (Kirkpatrick) · B3 Staircase (Dreyfus skill stages) · B4 Nested layers (rings around the learner) |
| **C · Relationships & Systems** | "It connects." | C1 Concept map (feedback that lands) · C2 Hub & spoke (L&D ecosystem) · C3 Input–Process–Output (course production system) · C4 Fishbone (adoption stalled) · C5 Gap bridge (today → target) |

## Category 02 deep dive — the three families

| Family | Verb | Templates |
|--------|------|-----------|
| **D · Name & Chunk** | "Give it a name." | D1 Category grid (communication styles) · D2 Topic breakdown (year one as a manager) · D3 Acronym frame (SMART goals) · D4 Term card (near miss: is / is not / edge case) |
| **E · Sort & Position** | "Put it in its place." | E1 2×2 matrix (urgent/important) · E2 Spectrum (delegation levels) · E3 Attribute matrix (delivery methods scored) · E4 Sorting buckets (data classification) |
| **F · Compare & Contrast** | "Hold them side by side." | F1 Comparison table (SBI vs GROW vs STAR) · F2 Venn (who owns development) · F3 Do vs don't (the weekly 1:1) · F4 Before vs after (performance conversations) |

## Category 03 deep dive — the three families

| Family | Verb | Templates |
|--------|------|-----------|
| **G · Point & Name** | "Show me where." | G1 Annotated tour (forklift pre-shift check) · G2 Labeled parts (the AED on the wall) · G3 Zoom detail (SDS section 4) · G4 Multi-view (vehicle walkaround) |
| **H · Walk It Through** | "Show me how." | H1 Photo steps (hybrid meeting room) · H2 Screen flow (expense approval) · H3 Before/during/after (5S reset) · H4 Demo storyboard (sales-demo video frames) |
| **I · Set the Standard** | "Show me the bar." | I1 Correct vs incorrect (pallet stacking) · I2 Spot the hazards (office fire safety) · I3 Good–better–best (defect photos) · I4 Acceptance card (ready-to-ship pallet) |

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
node build-cat02.js   # writes Category-02-Categorical-Bank.pptx
node build-cat03.js   # writes Category-03-Concrete-Visual-Bank.pptx
```

Palette, fonts, and shared layout helpers are constants at the top of `build-deck.js`.
