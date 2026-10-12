# One-Shot Prompt — Procedure Sources → Developer-Ready VR Storyboard

**How to use:** Fill in the `{{PLACEHOLDERS}}`, attach your files (official manual section, training
plan, video transcript, and the EDS2 video action log), set `{{MODE}}`, then paste everything below
the line into Microsoft 365 Copilot chat. One message in → one Storyboard Build Document out.

**Pick the mode for who is running it** (matches the VR Storyboard Workflow guide):

| `{{MODE}}` | Who runs it | Gives you | Stops at |
|---|---|---|---|
| `FRAMEWORK` | EDS2 | Source register, step inventory, cross-check, rows + critical flags + standards, traceability, decision log (v0.1) | Gate 1 |
| `PILOT` | EDS1 | The approved framework plus two fully written rows (v0.3) | Gate 2 |
| `DETAIL` | EDS1 | Every row written, global systems, parameters, assets, voice script (v0.9 draft) | Joint review |
| `QC` | QC | Findings QC-01, QC-02… against the QC checklist | QC loop |
| `FULL` | Lead or EDS2, for a first draft | All of the above, pausing after the framework and after the pilot rows | Each gate |

**Works in:** Microsoft 365 Copilot chat (attach files from OneDrive/SharePoint), Copilot in Word,
or any capable AI assistant. Copilot reads a video only through its transcript, so attach the
**EDS2 video action log** for anything the performer does without saying it.

**Never paste course material into a consumer AI tool.** Use your organization's Copilot only.

---

## ✂️ COPY EVERYTHING BELOW THIS LINE ✂️

# TASK: Build a developer-ready VR training storyboard for `{{PROCEDURE}}` in mode `{{MODE}}`

## C — CONTEXT

Our team produces VR training scene packs. Developers build each scene pack directly from a
storyboard, so the storyboard must say exactly what the learner sees and does, what the system
checks, and how it responds. Two roles share the work:

- **EDS2 (senior)** owns the framework: which steps exist, which are critical, and the standard
  ("what correct looks like") for each step, all traceable to the sources.
- **EDS1 (junior)** owns the detail: every cell inside each step.
- The **Lead** approves at three gates, **QC** checks before handoff, and the **Developer team
  lead** receives only an approved package. Clinical questions go to the **SME** through the Lead.

Inputs for this run:

1. **Scene pack:** `{{SCENE PACK NAME}}` · course `{{COURSE / UNIT}}`
2. **Official manual** (highest authority for steps, order, numbers): `{{ATTACH — edition, pages}}`
3. **Training plan / lesson plan and slides** (objectives, assessment checklist, critical criteria):
   `{{ATTACH — version, slide numbers}}`
4. **Procedure video transcript** (if narrated): `{{ATTACH OR "none"}}`
5. **EDS2 video action log** (every action with a timestamp, written by watching): `{{ATTACH OR "none"}}`
6. **Previous storyboard or board notes** (optional, e.g. a v1 whiteboard export): `{{ATTACH OR "none"}}`
7. **Platform:** `{{e.g. Meta Quest 3, standalone, two controllers, teleport locomotion}}`
8. **Phase / setting:** `{{e.g. Tactical Field Care, no effective hostile fire}}`
9. **Prerequisite pack:** `{{e.g. Scene Pack 0 — controller practice (teleport, trigger select, grip grab)}}`
10. **Approved framework** (for `PILOT`, `DETAIL`, `QC`): `{{ATTACH OR "none"}}`
11. **Pilot rows** (for `PILOT`): `{{e.g. one critical + one non-critical row: S4 and S3}}`
12. **Storyboard to check** (for `QC`): `{{ATTACH OR "none"}}`

## R — ROLE

Act as a **senior VR instructional designer and XR interaction designer** who writes storyboards
developers can build without asking questions. You know adult learning, cognitive load, diegetic
feedback design, hint scaffolding, and accessible voice scripting. You are rigorous about
**traceability**: every row and every standard traces to a source ID. You organize and specify;
**you never invent procedure content, clinical values or numbers.** When a source does not say,
you write an open item for the SME instead.

## A — ACTION

Run only the steps your `{{MODE}}` needs (table at the end of this section). Show the output of
each step before the next.

### Step 1 — Source register and inventory
- List every source with its version: manual edition and pages, training plan version and slides,
  video file name and date, board notes.
- Give every distinct item an ID:
  - `M-01…` manual steps, each with page/paragraph and any number, limit or condition.
  - `T-01…` training plan items: objectives, checklist items, critical criteria (mark which).
  - `V-01…` video actions from the transcript **and** the action log, each with a timestamp.
  - `B-01…` notes from a previous board (questions, comments, decisions).
- Quote steps as written. Do not merge, reword or add.

### Step 2 — Cross-check
- Build one table: step · in M · in V · in T · order difference · number/limit difference.
- Resolve each gap with these rules, in order: (1) the manual wins; (2) a step only in the video or
  training plan is kept only if the manual allows it, otherwise flag it; (3) a real conflict becomes
  an open item `Q##` for the Lead, tagged `SME` when clinical.

### Step 3 — Decide the rows
Apply the row rules:
- **One row = one learner action or decision the system can check as done or not done.**
- Split a manual step that has two separate checks into two rows.
- Merge sub-steps the learner does in one motion with one check into one row (label them 4a, 4b).
- No row for narration alone; it becomes a voice line in the row it belongs to.
- Controller tutorials live in the prerequisite pack, not here.
- **Nothing disappears silently:** every `M-` step maps to a row or to a recorded removal with its
  reason (e.g. "classroom-only step", "out of scope", "redundant per B-04").
- Number the rows `S1, S2…` in learner order and add `END` for the debrief.

### Step 4 — Critical flags and standards (the framework)
- A step is **critical** when any is true: the training plan lists it as a critical criterion; missing
  it or doing it wrong harms the casualty/user or defeats the procedure; the manual gives it a
  measurable standard (distance, time, count, fixed order). Otherwise it is *required* or *context*.
  If you cannot decide from the sources, mark it `SME to confirm`.
- Write **one standard per row**: one line saying what correct looks like, quoted from the source,
  with its ID. Never invent a number; if none exists, write a `Q##` tagged `SME`.
- Output the **Framework table**: ID · step name · objective (one sentence, observable verb) ·
  critical / required / context · standard · source IDs.
- Output the **Traceability table**: every `M-` (and critical `T-`) item → VR row or "Removed: reason".

### Step 5 — Write the cells of each row
For each row, fill the ten fixed columns in this order. Rules in *italics* are mandatory.

| Column | Write | Rules |
|---|---|---|
| Step | ID, name, objective, source IDs, critical flag | *From the framework; do not change it* |
| Frame | A first-person sketch description + one-line caption | *Describe what the learner sees; mark anything shown only as a hint* |
| Learner sees | Scene state when the step starts | *Objects, positions, what is and isn't highlighted* |
| Learner does | The input on the platform | *Name the button (grip, trigger, thumbstick); one action per bullet* |
| Success check | What the system tests to pass the step | *Measurable; every number is a named parameter in snake_case; say when it is checked* |
| Errors & hints | Each wrong action → system response; then H1, H2, H3 | *Every error has an ID (E1, E2…) and a response; the step does not advance on an error* |
| Voice | Every Instructor NPC line: ID · trigger · line · origin | *IDs `VO-S4-P` prompt, `-H1` hint, `-E2` error, `-C` completion; tag origin kept / edited / new* |
| Feedback | Sound, haptic, visual response | *In the world; no 2D pop-ups during the task; never reveal right or wrong before H2* |
| Assets & tech | Models, rigs, animations, VFX, colliders, sounds | *Name each one so the asset list can be built from this column* |
| Open items | `Q##` · owner · question | *Anything undecided; never guess* |

Writing rules for every cell:
- **Write what the system checks, not what the learner should know.** "Applies the CAT correctly"
  cannot be built; "d between zone_min_cm and zone_max_cm, checked on release" can.
- Voice: say the full term on first use, never an acronym aloud; one instruction per line; no
  meta-language such as "In the next step…"; keep good wording from previous boards and tag it.
- Short sentences, present tense, no vague adjectives ("properly", "appropriately").

### Step 6 — Global systems (apply to every row; rows list only what is specific)
Write these once, adapted to `{{PROCEDURE}}` and `{{PLATFORM}}`:
- **G1 Controls** — input mapping, same as the prerequisite pack.
- **G2 Step loop** — enter → prompt VO → wait; success → completion VO + tone → auto-advance after
  `auto_advance_s`; error → error VO, logged, stay in step; idle → hint ladder. No branching in
  guided mode.
- **G3 Hint ladder** — H1 verbal at `hint_h1_s` or 1st error; H2 in-world highlight at `hint_h2_s`
  or 2nd error; H3 show-me (ghost hand/object) at `hint_h3_s` or 3rd error. Hints never complete
  the step.
- **G4 Feedback policy** — diegetic first; the only non-diegetic UI is the debrief board.
- **G5 Voice rules** — as in Step 5.
- **G6 State model** — the one state that drives the procedure's visible result (e.g.
  `bleeding_state: ARTERIAL → OOZING → STOPPED`); every effect and check reads it.
- **G7 Zones & locomotion** — named trigger zones, what happens when the learner leaves them.
- **G8 Telemetry** — per step: times, errors by ID, hints by level; per run: the key outcome time.

### Step 7 — Build data
- **Parameter table:** name · default · used in · note. Defaults come from sources; anything not in a
  source is marked `SME` and gets a `Q##`.
- **Asset list:** grouped as environment, characters, props, VFX, audio, UI.
- **Voice script:** every line with ID · step · trigger · line · origin.
- **Decision log:** every `Q##` · step · owner (Dev, Art, SME, PM, Design) · status (Open, Needs SME,
  Answer proposed, Resolved) · question · proposed answer · source.

### Step 8 — QC (mode `QC`, and as a final self-check in every other mode)
Check and report PASS/FAIL for each:
- Every `M-` step maps to a row or a recorded removal.
- Every critical step has a measurable success check that matches its standard.
- Every standard and parameter traces to a source ID or carries `SME`.
- Every row has all ten columns filled or a `Q##`; every error has an ID and a response; H1–H3 exist.
- Every voice line has an ID, a trigger and an origin tag and follows the voice rules.
- No 2D pop-up feedback during the task; nothing reveals the answer before H2.
- IDs are unique and in sequence; parameter table, asset list and voice script match the rows.
- **No invented procedure content, numbers or clinical claims.**
In mode `QC`, log each failure as `QC-01…` with row, column, *must fix* or *should fix*, and the fix.

### Steps per mode

| Mode | Steps | Then |
|---|---|---|
| `FRAMEWORK` | 1–4, 8 | Stop. Say "Framework v0.1 ready for Gate 1." |
| `PILOT` | 5 for the pilot rows only, 6, 8 | Stop. Say "Pilot rows v0.3 ready for Gate 2." |
| `DETAIL` | 5 for all rows, 6, 7, 8 | Stop. Say "Draft v0.9 ready for joint review." |
| `QC` | 8 on the attached storyboard | Output the QC findings only. |
| `FULL` | 1–4 → **pause for my approval** → 5 for two pilot rows → **pause** → 5 for the rest, 6, 7, 8 | |

## F — FORMAT

Output a **Storyboard Build Document** in Word-ready Markdown, with these sections in this order
(skip the ones your mode does not produce):

0. **Cover** — scene pack, course, version (`v0.1` / `v0.3` / `v0.9`), date, platform, setting,
   prerequisite, mode (guided practice), terminal objective (one sentence), sources.
1. **Source register** — table.
2. **Inventory** — M / T / V / B tables.
3. **Cross-check** — table.
4. **Framework** — table (Step 4).
5. **Traceability** — table.
6. **Storyboard rows** — one block per row, fields in the fixed column order, each field a short
   bulleted list. Put a removed-step note where a removed source step would have been.
7. **Global systems** — G1–G8.
8. **Parameters** · 9. **Assets** · 10. **Voice script** · 11. **Decision log** — tables.
12. **Self-check** — PASS/FAIL list.

Also provide the Voice script, Parameters and Decision log as **tab-separated blocks** I can paste
into Excel. Keep IDs identical everywhere.

**Format example for one row (shape only — never copy its content):**

```
S4 · Position the CAT · critical · M-03, T-05
Objective: Place the CAT on the skin 5–7.5 cm above the wound, not over a joint.
- Frame: injured leg, hip left, wound right; valid zone shown only at H2.
- Learner sees: skin exposed around the wound; CAT in hand, band pre-looped.
- Learner does: bring the CAT to the leg (ghost preview follows the hand); release grip to place.
- Success check: zone_min_cm ≤ d ≤ zone_max_cm; not over knee_collider; checked on release.
- Errors & hints: E1 d < zone_min_cm → VO-S4-E1 · E2 d > zone_max_cm → VO-S4-E2 ·
  H1 15 s VO-S4-H1 · H2 30 s translucent zone on skin · H3 45 s ghost CAT.
- Voice: VO-S4-P prompt "Apply the tourniquet to the injured leg, directly on the skin…" (edited)
  · VO-S4-E2 "Move the tourniquet lower." (kept)
- Feedback: band-settle sound + haptic tick on place; error = voice only.
- Assets & tech: limb axis spline; knee joint collider; ghost CAT; zone decal.
- Open items: Q12 · SME · confirm placement range and tolerance.
```

## T — TARGET

Three readers use this document: **developers** (Unity/Unreal) who build each row literally,
the **Lead and QC** who check it against the gates, and the **SME** who signs off clinical values.
Write for a developer who has never seen the procedure: concrete, measurable, no jargon without a
definition, short sentences. The learners in the headset are adult trainees with mixed VR
experience who completed the prerequisite pack.

## ✂️ END OF PROMPT ✂️
