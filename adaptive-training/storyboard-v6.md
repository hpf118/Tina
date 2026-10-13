# MOD 13 DMCPG-5 — Bloom-Ladder Placement Design (v6)

**Adaptive training storyboard — placement test, scoring, routing and reporting.**

v6 regenerates the v5 Word storyboard as a maintainable package: this document is the
single source of truth for the design, and `prototype/index.html` is a working, clickable
implementation of the whole flow (placement → scoring → routing → refutation → post-test →
reporting) for stakeholder review before any dominKnow authoring begins.

Scope is unchanged from v5: it replaces the confidence-based gates of v4 with one
course-front scenario placement test measuring mastery level per sub-objective on Bloom's
taxonomy. All other v4 content (teach, worked examples, practice, item bank, summary) is
unchanged; this document specifies the new placement test, scoring, routing and reporting.

---

## 1. Why this replaces confidence rating

Confidence self-report is cheap but hard to trust: learners are unevenly calibrated, and
the measure is an inference about their state. The Bloom ladder measures mastery directly:
each sub-objective is tested by a chunk of three questions inside one scenario, climbing
**Remember/Understand → Apply → Analyze/Evaluate**. The learner's mastery level is simply
the highest rung they can pass — an observable, not a self-report.

It also produces a 0–3 scale per sub-objective, which is more granular than v4's three
routes and directly reportable as pre/post growth.

## 2. The mastery metric (what makes it measurable)

| Level | Bloom band | Definition | Operational rule |
|---|---|---|---|
| **L3** | Analyze / Evaluate | Judges the best action, sequences the process, resolves a complication | Q1, Q2 and Q3 all correct |
| **L2** | Apply | Acts correctly on the rule in a routine case | Q1 and Q2 correct; Q3 incorrect |
| **L1** | Remember / Understand | Identifies the concept, trigger or fact in context | Q1 correct; Q2 incorrect |
| **L0** | Below threshold | Cannot identify the concept in context | Q1 incorrect |

- **Consecutive-pass (Guttman) rule:** a level only counts if every level below it is also
  passed.
- **Anomaly rule:** if a learner fails a lower rung but passes a higher one (statistically
  rare), route to the **lowest failed level** — the design never over-credits.
- No self-report enters the score.

## 3. Placement test structure

- **One placement event** at the very start of the course (after slide 0.3), before any
  instruction — no duplicated per-module design.
- **Four scenario blocks**, one per sub-objective. Each block is a single realistic case
  with three questions climbing the ladder. **12 questions total, ~6–8 minutes.**
- Question stems within a block are **answerable independently** (no question reveals
  another's answer), which controls the testlet-dependency problem of scenario sets.
- **One attempt per question; no feedback during placement;** options randomized
  (sequence items excepted). All results write variables `v_SO1_L … v_SO4_L`.
- **dominKnow build:** the placement is a scored question-page module (**M-P**), not the
  native per-module pre-test feature (which is module-bound and binary). Routing uses
  variables + conditional navigation. **Fallback Tier A:** revert to native per-module
  gates with *Skip Content if Passed* (v2 pattern) — content is authored once either way.
- **Scaling:** for a multi-module course, the same pattern scales — one scenario block per
  module's broad objective in a single course-front placement, or blocks grouped per
  module if the course is long (placement fatigue above ~20 minutes outweighs the
  benefit).

## 4. Routing map (placement level → entry point in v4 storyboard)

| Level | Route | Entry point (v4 slide) | What is skipped |
|---|---|---|---|
| **L3** | SKIP | Next scenario block / next section | Entire section; credited 100% |
| **L2** | POLISH | Full-problem practice (1.5 / 2.5 / 3.4 / 4.4) → Section Test | Teach, worked example, completion practice |
| **L1** | PRACTICE | Completion practice (1.4 / 2.4 / 3.3 / 4.3) → full problem → Section Test | Teach pages and worked example |
| **L0** | FULL | Teach (1.1 / 2.1 / 3.1 / 4.1) → worked example → completion → full problem → Section Test | Nothing |

**Refutation cards (1.R–4.R)** are triggered by the **distractor chosen**, not by
confidence: each L-determining wrong answer carries a misconception tag, and if a tagged
distractor was selected anywhere in the block, the matching refutation card opens the
learner's route. Section tests, remediation loop, spiral review and booster are unchanged
from v4.

## 5. Misconception-tag registry (new in v6)

v5 scattered the tags through the item tables; v6 consolidates them so refutation authoring
and xAPI analytics share one vocabulary.

| Tag | Misconception it marks | Fires in | Refutation card |
|---|---|---|---|
| `all-wait-on-BTL` | "Every selected/transferring member just sits on the BTL" | A-Q1, A-Q3, SO1-Q3b | 1.R |
| `DMCPG-manages` | "DMCPG 5-3 manages members directly" | A-Q2 | 1.R |
| `anticipating-outcome` | "Act on an expected decision before it is authorized" | B-Q2, D-Q2 | 2.R / 4.R |
| `compulsory-is-one-thing` | "All compulsory transfers are identical, incl. pay protection" | B-Q3, SO2-Q3b | 2.R |
| `authority-sequence` | "Wrong organization/order at the end of CMOT" | C-Q1, C-Q2, C-Q3, SO3-Q3b | 3.R |
| `review-skipped` | "Decision letter can precede DMCA 3's review" | C-Q2, C-Q3, SO3-Q3b | 3.R |
| `informal-is-enough` | "A supervisor's word substitutes for an authorized decision" | D-Q1, D-Q2, SO4-Q3b | 4.R |
| `half-message` | "One unit actioning the OT/CT message completes it" | D-Q3, SO4-Q3b | 4.R |

## 6. The Placement Test — full content

Item IDs use form **p** (placement). Section tests keep v4 form-b items, extended with the
four Q3-level items in §7 so the post-test mirrors the ladder. Distractor feedback lines
shown here are used later as refutation/corrective content — **never shown during
placement**.

### Scenario A — SO1 Annual In-Service Programs

> **Scenario (on screen throughout the block):** You are the BTL Manager. Three files
> arrive today: MCpl Arsenault, selected for UTPNCM; Pte Béland, selected VOT-T;
> Lt Cormier, a qualified member under CFRP.

| Q (Bloom) | Question | Options — correct (✓); misconception tags in brackets | Measures |
|---|---|---|---|
| **A-Q1** (Understand) | Which of the three members will be posted to an educational institution or ULO? | **A. MCpl Arsenault (UTPNCM) (✓)** · B. Pte Béland (VOT-T) — "VOT-T members are posted to the BTL to await training." `[all-wait-on-BTL]` · C. Lt Cormier (CFRP) — "CFRP members are usually skilled and posted to BTL." · D. All three — `[all-wait-on-BTL]` | Identify management arrangement by program |
| **A-Q2** (Apply) | Pte Béland asks who will course-load him while he awaits training. What do you tell him? | **A. The BTL Manager course-loads VOT-T members on the BTL (✓)** · B. The educational institution — "Applies to UTPNCM/specialist members." · C. DMCPG 5-3 — "DMCPG 5-3 does not manage members." `[DMCPG-manages]` · D. His career manager — "Career-manager control applies to qualified CFRP members." | Act on the arrangement in a routine case |
| **A-Q3** (Analyze) | It is the break between academic years. MCpl Arsenault's institution says military coursing "is not their responsibility," and Lt Cormier asks why his file is being handled differently from the other two. Which handling is correct? | **A. The BTL Manager arranges Arsenault's military coursing between academic years, and Cormier, being qualified, may return to career-manager control (✓)** · B. The institution must arrange the coursing — "Between academic years, coursing is the BTL Manager's." · C. All three files are handled identically on the BTL — `[all-wait-on-BTL]` · D. Arsenault transfers to the BTL for the break — "The member remains institution-managed; only coursing is arranged by the BTL Manager." | Resolve a complication across two arrangements |

### Scenario B — SO2 VOT-U, COT-U and CMOT

> **Scenario:** Three members, one week. Cpl Dion volunteered for a new occupation after
> completing BMQ and awaits board results. Pte Ellis failed an academic requirement; a PRB
> was held and a legitimate retention requirement identified. Sgt Fortin received an
> AR/MEL decision from DMCA with medical employment limitations.

| Q (Bloom) | Question | Options — correct (✓); misconception tags in brackets | Measures |
|---|---|---|---|
| **B-Q1** (Understand) | Which pathway applies to Cpl Dion? | **A. VOT-U (✓)** · B. COT-U — "COT-U is non-voluntary." · C. CMOT — "CMOT follows an AR/MEL decision." · D. VOT-T — "VOT-T is a selection program, not this volunteer transfer process." | Identify pathway from trigger |
| **B-Q2** (Apply) | Cpl Dion's supervisor expects the board will select him and proposes removing him from current training now. What is the correct action? | **A. Keep Dion on his current course; VOT-U is competitive and selection is not guaranteed (✓)** · B. Remove him to prepare for the new occupation — `[anticipating-outcome]` · C. Pause his course until the board reports — `[anticipating-outcome]` · D. Request early posting — `[anticipating-outcome]` | Apply the remain-on-course rule |
| **B-Q3** (Evaluate) | A staff note describes Ellis and Fortin as "two identical compulsory transfers with the same pay protection." Evaluate the note. | **A. Wrong twice: Ellis is COT-U (retention requirement after a PRB) and Fortin is CMOT (AR/MEL decision) — different triggers and controlling processes — and CBI 204.03 defines compulsory differently for pay protection, so the definition must be checked (✓)** · B. Correct: both are compulsory, so identical — `[compulsory-is-one-thing]` · C. Wrong only about pay protection — "The triggers and processes also differ." · D. Wrong only about the pathways — "Pay protection also follows the CBI 204.03 definition." `[compulsory-is-one-thing]` | Distinguish pathways + pay-protection trap |

### Scenario C — SO3 CMOT Processing Steps

> **Scenario:** Sgt Fortin's CMOT file. So far: DMCA 3 issued the AR/MEL advisory to the
> CO and PSO office; the Chain of Command referred Fortin to the PSO; the PSO completed
> the abbreviated interview and required processing.

| Q (Bloom) | Question | Options — correct (✓); misconception tags in brackets | Measures |
|---|---|---|---|
| **C-Q1** (Remember) | Who started this process, and with what? | **A. DMCA 3, by issuing the AR/MEL advisory to the CO and PSO office (✓)** · B. The CoC, by referring Fortin — "That is step 2, after the trigger." · C. The PSO, by opening the interview — "PSO acts on the referral." · D. DMCPG 5-3, by issuing an instruction — "DMCPG 5-3 acts at the end of the process." `[authority-sequence]` | Recall trigger + responsible organization |
| **C-Q2** (Apply) | What happens next with Fortin's file? | A. DMCA 3 issues the decision letter — "The decision letter cannot precede DMCA 3's review of the completed file." `[review-skipped]` · **B. The PSO sends DND 2790 and required documents to DMCA 3 (✓)** · C. DMCPG 5-3 issues the COT instruction — `[authority-sequence]` · D. The CoC selects the effective date — "The effective date is consulted between DMCA 3 and DMCPG 5-3." | Determine next action mid-process |
| **C-Q3** (Analyze, Sequence) | DMCA 3 has now received the file. Place the remaining steps in order: [DMCA 3 issues decision letter] [DMCPG 5-3 issues COT instruction] [DMCA 3 reviews and consults DMCPG 5-3 on effective date] | **Correct: reviews/consults → decision letter → COT instruction (✓)** · Instruction before letter — `[authority-sequence]` · Letter before review — `[review-skipped]` | Sequence the closing stages |

### Scenario D — SO4 Protect the Process

> **Scenario:** Back to Cpl Dion (VOT-U pending). His supervisor has told the orderly room
> "it's basically approved." Days later an OT message arrives naming a gaining unit and a
> losing unit; your (losing) unit reads and actions its part.

| Q (Bloom) | Question | Options — correct (✓); misconception tags in brackets | Measures |
|---|---|---|---|
| **D-Q1** (Understand) | The supervisor proposes withdrawing Dion from his current course today. Which avoidable issue is this? | **A. Withdrawing a member before an authorized decision (✓)** · B. Failing to action a transfer message — "No message exists yet at this point." · C. Applying routine handling to a special case — "The issue here is timing, not case type." · D. It is not an issue — `[informal-is-enough]` | Recognize the issue in context |
| **D-Q2** (Apply) | What is the best action for Dion's course right now? | **A. Keep him on the current course while awaiting the authorized decision (✓)** · B. Withdraw and begin preparation — `[anticipating-outcome]` · C. Request a BTL posting before the board meets — `[anticipating-outcome]` · D. Pause the course on the supervisor's confirmation — `[informal-is-enough]` | Apply the protect-the-process rule |
| **D-Q3** (Evaluate) | Regarding the OT message: your unit has actioned its part; the gaining unit has not seen the message. Evaluate the state of the transfer actions. | **A. Incomplete — both gaining and losing units must read and action the message; confirm the gaining unit does so (✓)** · B. Complete — the losing unit actioned its part — `[half-message]` · C. The member should relay it — "Message actions are unit responsibilities." · D. Wait for a further instruction — "The OT message already contains the required actions." `[half-message]` | Judge completeness of message actions |

## 7. Post-test parallel form (added to v4 section tests)

To make growth measurable on the same 0–3 scale, each section test becomes a
three-question ladder: v4 items `SOn-T1b` (Q1 level) and `SOn-T2b` (Q2 level) plus one new
Q3-level item below. Mastery level at exit is computed with the same consecutive-pass
rule; pre/post is reported as level change per SO (e.g., SO2: L1 → L3).

**Pass standard for section completion: exit level ≥ L2, with L3 recommended for SO3 and
SO4** (procedural and judgement objectives).

| ID | New Q3-level section-test item |
|---|---|
| **SO1-Q3b** | It is late August. A UTPNCM member needs two weeks of military coursing before the academic year resumes, and a newly qualified CFRP member is still shown on the BTL. Which handling is correct for each? (✓ BTL Manager arranges the UTPNCM coursing between academic years; the qualified CFRP member may return to career-manager control. Distractors swap the arrangements or leave both on BTL `[all-wait-on-BTL]`.) |
| **SO2-Q3b** | A briefing slide states: "Any compulsory transfer means pay protection under the general transfer meaning." Evaluate. (✓ Wrong — CBI 204.03 defines compulsory differently for pay protection; check the applicable CBI definition before applying it. Distractors accept the slide `[compulsory-is-one-thing]` or limit the error to one pathway.) |
| **SO3-Q3b** | Sequence all seven CMOT steps for a new file, naming the responsible organization at each. (✓ advisory (DMCA 3) → CoC referral → PSO interview/processing → PSO sends DND 2790 to DMCA 3 → DMCA 3 reviews/consults DMCPG 5-3 → DMCA 3 decision letter → DMCPG 5-3 COT instruction. Tile-level feedback names the misplaced organization `[authority-sequence / review-skipped]`.) |
| **SO4-Q3b** | A CT message was actioned at the losing unit only, and the member asks to pause the course based on the expected transfer. Judge the situation and pick the complete correct handling. (✓ Keep the member on course until direction is issued AND ensure the gaining unit reads and actions the CT message — both required. Distractors satisfy only one requirement `[half-message / informal-is-enough]`.) |

## 8. Reporting (what the LMS and the team see)

- **Per learner:** a 4-cell profile of placement level and exit level per SO
  (e.g., SO1 L3→skip; SO2 L1→L3; SO3 L0→L2; SO4 L2→L3), plus time saved by skipped
  content.
- **Course score for SCORM:** mean of section-test ladders (L/3 per SO), skipped SOs
  credited L3.
- **Cohort view (xAPI):** distribution of placement levels per SO — tells the team which
  topics the audience already owns (candidates for pruning) and which misconception tags
  fire most (candidates for stronger refutation content).
- **QA validation of the ladder itself:** after Alpha, check that pass rates decrease
  monotonically **Q1 ≥ Q2 ≥ Q3** within each scenario; any inversion means a mis-levelled
  item to rewrite.

## 9. dominKnow build spec (expanded in v6)

Variables written by module M-P:

| Variable | Type | Values | Written by | Read by |
|---|---|---|---|---|
| `v_SO1_L … v_SO4_L` | number | 0–3 | M-P scoring page (Guttman + anomaly rule) | Conditional navigation into each section |
| `v_tag_<name>` (8 tags, §5) | boolean | true/false | Each tagged distractor's *on selected* action | Refutation-card triggers 1.R–4.R |
| `v_SOn_exit` | number | 0–3 | Section-test scoring | Completion gate (≥2; ≥3 recommended SO3/SO4), reporting |

Logic per sub-objective *n* after M-P:

```
if v_SOn_L == 3 → jump next section (credit 100%)
if v_SOn_L == 2 → [refutation card n.R if any v_tag for SOn] → full-problem practice
if v_SOn_L == 1 → [refutation card n.R if any v_tag for SOn] → completion practice
if v_SOn_L == 0 → [refutation card n.R if any v_tag for SOn] → teach page
```

**Fallback Tier A** (if variables + conditional navigation prove unreliable in the target
LMS): revert to native per-module gates with *Skip Content if Passed* (v2 pattern).
Content is authored once either way.

## 10. QA checklist (alpha)

- [ ] Every placement item answerable independently of its block-mates (no answer leakage).
- [ ] One attempt enforced; no feedback shown anywhere in M-P.
- [ ] Option order randomized (except C-Q3 and SO3-Q3b sequence items).
- [ ] `v_SOn_L` computed with consecutive-pass rule; anomaly rule verified with a scripted anomalous run.
- [ ] Each tagged distractor sets its `v_tag_*`; each refutation card fires only on its tags.
- [ ] Routing verified for all 4 levels × 4 SOs (16 paths).
- [ ] Post-test ladders compute `v_SOn_exit`; completion gate ≥ L2 (L3 recommended SO3/SO4).
- [ ] SCORM score = mean(L/3), skipped SOs credited L3.
- [ ] Pass-rate monotonicity Q1 ≥ Q2 ≥ Q3 checked per scenario after Alpha.

## 11. Change control vs v4

- **Removed:** confidence follow-up taps, correctness × confidence matrix, variables `v_*conf`.
- **Replaced:** four 2-item gates (1.G–4.G) → one placement module **M-P** of four
  3-question scenario blocks; routing table §4 replaces v4 Routing Rules.
- **Retriggered:** refutation cards now fire on tagged distractors instead of Wrong+Sure.
- **Extended:** section tests gain one Q3-level item each (§7); exit standard = level ≥ L2
  (L3 for SO3/SO4).
- **Unchanged:** all teach, worked-example, practice and close slides; item bank forms
  b/c; spiral review; booster; accessibility and design specs.

### Change control v5 → v6

- **Reformatted:** Word document → markdown source of truth (this file).
- **Added:** misconception-tag registry (§5), explicit variable/logic build spec (§9),
  alpha QA checklist (§10), interactive prototype (`prototype/index.html`).
- **Content:** placement items, routing, scoring and reporting carried over from v5
  verbatim — no item wording changed.
