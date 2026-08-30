# One-Shot Prompt — Script → Accessible Foundational-Teaching PowerPoint

**How to use:** Fill in the `{{PLACEHOLDERS}}`, attach your files (script, source material, and your
organizational PowerPoint template), then paste everything below the line into your AI tool.
One message in → one PowerPoint package out.

**Works in:** Microsoft 365 Copilot chat, Copilot in PowerPoint (paste + attach), or any capable AI
assistant. If the tool cannot produce a .pptx directly, it will output the complete Slide Build
Document instead (Part F, Fallback), which Copilot in PowerPoint can turn into a deck
("Create a presentation from file").

---

## ✂️ COPY EVERYTHING BELOW THIS LINE ✂️

# TASK: Build an accessible, traceable PowerPoint teaching package from the attached client script

## C — CONTEXT

Our team produces PPT-based multimedia training packages for a large public-sector organization.
A client has provided:

1. **THE SCRIPT** (the narration/teaching script — the authoritative content source):
   `{{PASTE SCRIPT HERE, OR REFERENCE THE ATTACHED FILE}}`
2. **SOURCE MATERIAL** (policy documents, references, supporting detail):
   `{{ATTACH OR REFERENCE SOURCE MATERIAL}}`
3. **ORGANIZATIONAL TEMPLATE** (.potx/.pptx with our slide masters, fonts, colors, backgrounds):
   `{{ATTACH ORGANIZATIONAL TEMPLATE FILE}}`
4. Topic: `{{TOPIC — e.g., official languages policy, accessibility/disability policy, universality of service}}`
5. Constraints: `{{OPTIONAL — target slide count, runtime, due date, mandatory statements}}`

The script contains **foundational teaching content** and may also contain **scenario/branching
content**. THIS TASK COVERS THE FOUNDATIONAL TEACHING CONTENT ONLY. Identify any scenario
content, list it in the appendix as "Out of scope — scenario package," and do not build slides for it.

## R — ROLE

Act as a **senior instructional designer and accessible presentation designer** with expertise in:
adult learning, Bloom's taxonomy, cognitive load theory and chunking, Mayer's multimedia learning
principles, WCAG 2.1 Level AA, plain language, and PPT-based video production. You are rigorous
about **traceability**: every objective and every slide must be traceable to the client's script.
You synthesize; you never invent.

## A — ACTION (perform these steps in order; show your work for steps 1–4 before the deck)

### Step 1 — Inventory (make the script traceable)
- Read the ENTIRE script. Assign an ID to every distinct teaching point: S-01, S-02, …
- Assign IDs to source-material points you will use: M-01, M-02, …
- Split the inventory into: (a) foundational teaching points, (b) scenario content (flag, exclude),
  (c) housekeeping (titles, transitions).

### Step 2 — Learning objectives (traceable, full coverage)
- Derive **3–5 measurable learning objectives** that together FULLY represent the script.
- Each objective: one sentence, observable performance verb (Bloom's — e.g., identify, apply,
  distinguish, locate; never "understand/know"), written for the learner.
- Under each objective, list the script IDs it covers (e.g., "LO2 ← S-04, S-07–S-11").
- **Coverage rule:** every foundational S-ID maps to exactly one primary objective. If any S-ID is
  orphaned, or an objective would need content not in the script, STOP and report it as a GAP with
  a question for the client — do not fill gaps by inventing content.

### Step 3 — Synthesize and chunk (build the scaffold)
The script's points may arrive unorganized. For each objective:
- Group its points into **3–5 named chunks** — categories learners can file information under
  (e.g., WHO it applies to / WHERE & WHEN / DO's & DON'Ts / THE PROCESS / KEY TERMS).
- 3–5 items per chunk, each rewritten in plain language (aim ≈ grade 8, short sentences,
  translation-friendly), each tagged with its source IDs.
- Synthesis means reorganizing and condensing the script's meaning — never adding new claims.
  Detail drawn from source material (not the script) must carry its M-ID.
- *Micro-example:* a script with 10 scattered bullets about a service becomes chunks like
  "Where to go [S-02, S-06] · When it applies [S-03, S-08, M-01] · Do & Don't [S-04, S-05, S-09]."

### Step 4 — Classify each chunk and choose its slide layout
For every chunk, decide which knowledge type it is, then pick a layout from that family:

| Knowledge type | Ask yourself | Layout options |
|---|---|---|
| **1 · Logical & structural** — it moves, nests, or connects | "Is the STRUCTURE the content — order, hierarchy, cause, system?" | process map (chevrons) · flowchart with decisions · swimlane (roles × steps) · cycle loop · timeline · hierarchy/tree · pyramid (levels) · staircase (stages) · concept map (labeled links) · fishbone (causes) · input–process–output |
| **2 · Categorical** — name it, place it, contrast it | "Is this new info the learner must file into groups, sort, or stop confusing?" | category grid (one card per type) · topic breakdown (topic → named chunks) · acronym frame · term card (is / is not / edge case) · 2×2 matrix · spectrum · attribute matrix · sorting buckets (one rule per bucket) · comparison table · do vs don't · before vs after |
| **3 · Concrete & visual** — the real thing, accurately | "Must the learner recognize, operate, or judge the REAL object/screen?" | annotated image (numbered tour) · labeled parts · zoom detail · photo-per-step sequence · screen flow · correct vs incorrect · spot the hazards · acceptance card · concept intro (definition + breakdown + hero image) · center image with orbiting callouts |

- For type 3, and wherever a definition needs grounding, use **text + image combination** slides:
  a title, a definition placeholder ("[Definition · 2–3 sentences]"), breakdown rows, AND image
  placeholder frames labeled "REPLACE WITH THE REAL PHOTO/SCREENSHOT — [what to shoot]".
  Never use stock imagery or mock-ups where accuracy matters; leave a labeled frame instead.
- One idea per slide. A chunk that needs two ideas gets two slides.

### Step 5 — Build the slide plan, then the deck
Fixed skeleton (always in this order):
1. **Title slide** — course title, client/branch line, date placeholder.
2. **Learning objectives slide** — the 3–5 objectives, learner-facing wording.
3. **One section per objective** — optional section divider, then the chunk slides for that
   objective, each using the layout chosen in Step 4.
4. **Recap slide** — objectives restated with the one takeaway per objective.
5. **Appendix (hidden or final slides)** — (a) traceability matrix: Objective → Slide #s → S-IDs/M-IDs;
   (b) GAP questions for the client; (c) scenario content flagged out of scope.
- **Speaker notes:** paste the client's script narration VERBATIM into the notes of the slide it
  belongs to — the notes drive the video recording; the slide shows keywords and visuals only.

### Step 6 — Apply design + accessibility rules (non-negotiable)
- **Template:** build ON the attached organizational template — use its slide masters, built-in
  placeholder layouts (never loose text boxes), theme fonts and colors. Do not invent branding.
  If no template is attached, use a neutral high-contrast theme and mark every slide "THEME: TBD".
- **WCAG 2.1 AA:** text contrast ≥ 4.5:1 (≥ 3:1 for large text ≥ 18 pt regular / 14 pt bold, and for
  meaningful graphics); never use color alone to carry meaning (add labels/icons/patterns);
  alt text on every meaningful visual (one sentence, what it teaches), decorative items marked
  decorative; every slide has a UNIQUE title; logical reading order (title first); meaningful
  hyperlink text; no auto-playing motion.
- **Typography:** sans-serif theme font; body text minimum 18 pt (target 20–24 pt); slide titles
  28–40 pt; captions/labels never below 14 pt; max ~6 lines of text per slide, ~8 words per line;
  line spacing ≥ 1.2; left-align body text.
- **Mayer's multimedia principles (this deck becomes a narrated video):**
  - *Redundancy:* on-screen text = keywords and structure, NOT the narration verbatim (narration
    lives in the notes).
  - *Coherence:* cut decoration that doesn't teach; no filler imagery.
  - *Signaling:* headings, numbering, and color-consistent categories show the structure.
  - *Segmenting:* one idea per slide; sections match objectives.

## F — FORMAT (the deliverable)

**Primary output: a complete PowerPoint file (.pptx)** built on the attached template, containing
the full skeleton from Step 5, with speaker notes, alt text, and the appendix.
Also print in chat: the objectives + coverage map (Step 2), the chunk plan (Step 3), and any GAPs.

**Fallback (if this tool cannot generate .pptx):** output a **Slide Build Document** — one block per
slide with: Slide # · Unique title · Layout name (from Step 4 menu) · On-screen text (exact,
final wording) · Visual spec (diagram description or image-placeholder label) · Alt text ·
Speaker notes (verbatim script) · Source IDs. Format it so Copilot in PowerPoint can build from it.

**Before delivering, self-check and state PASS/FAIL for each:** every S-ID covered or flagged ·
every slide traceable · notes carry the narration · unique titles · contrast & font-size rules met ·
alt text present · no invented content · scenario content excluded and flagged.

## T — TARGET

Adult learners in a large public-sector organization; mixed roles and prior knowledge NOT assumed;
consuming this as a narrated video and later as a self-paced reference deck; includes screen-reader
users and low-vision users; plain-language expectation ≈ grade 8; content may later be translated,
so keep sentences short and idiom-free. The client (script owner) will review the traceability
matrix — their script must be fully and faithfully represented.

## ✂️ END OF PROMPT ✂️
