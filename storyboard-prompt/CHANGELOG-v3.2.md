# v3.2 change log and crosswalk

Companion to `Storyboard-Generator-Master-Prompt-v3.2.md`. It records what changed from v3.1, why, and where every v3.1 section went. Nothing in this file is pasted into the AI tool.

## 1. What v3.2 does

- Merges the two layers of v3.1 (the master prompt and the appended "v3.1 Revised Prompt Sections" package) into one document, executing the package's own "Integration and cleanup requirements".
- Keeps every unique requirement and every specific standard (exact feedback strings, Style block, Developer Notes – All Slides lines, border specification, gap-marker vocabulary, component minimums, acceptance checks).
- Gives every rule one home and one acceptance line ("one home, one check"). Six overlapping checklists become one slide-level gate and one acceptance list.
- Resolves the contradictions listed in section 2 below.
- Adds the content-quality rules the review found missing (section 3 below).
- Removes maintainer-facing material from the prompt and moves it here (section 5 below).

Word count: v3.1 about 19,200 words; v3.2 about 15,900 words. The reduction is smaller than the review's 9,500-word estimate because every component minimum, every acceptance condition, every exact standard, and every internal artifact field list was retained in full rather than trimmed; only duplicate statements, contradictions, and maintainer-facing material were removed.

## 2. Decisions taken on the v3.1 contradictions

Each of these can be reversed by editing the single place in v3.2 where the rule now lives.

| # | Topic | Decision in v3.2 | Where |
|---|---|---|---|
| 1 | Merged title-row borders | Bottom border only (solid black, 0.5 pt, #000000); no top, left, or right border on merged title rows. All four sides on every header and body cell. This follows Step 4 item 14, the Acceptance Checks, and Appendix 13 of v3.1, which section 29 identified as "the approved template rule". | 13.2; acceptance check 6 |
| 2 | Interaction column modes | Five modes (v3.1 Layer 2 section 9). Mode 2 includes Component, Learner Action, Component Structure, Order, Initial State, Required Viewing, Completion. Excluded from every mode: Learning Purpose, Directive, design rationale, tool-validation notes, routine accessibility, covered fallbacks, low-level implementation logic. The Mode 2 example now shows the object mapping form. | 7.4; acceptance check 18 |
| 3 | Two-attempt feedback states | Three states by default (shared Correct, First Incorrect Hint, Final Incorrect). Separate First-Attempt Correct and Second-Attempt Correct only when Development confirms support and the project requires them. One set of exact strings for all states. | 9.2; acceptance checks 22 and 23 |
| 4 | Region labels in Text Content | Heading hierarchy (H1 title, H2 region or section, H3 sub-group, bold label with colon only for Narration/VO and interaction fields). "On-screen" prefixes removed from the templates in Appendix A. | 5.4; acceptance check 10 |
| 5 | Interaction minimums | No project-independent numeric quotas. Kept as pedagogy, not as counts: practice for every objective-bearing chunk and at least one higher-order check where objectives require it. "At least three context variables" became "the variables that genuinely affect performance". | 4.2; 7.5 |
| 6 | Scored-MCQ field labels | One spelling everywhere: "Correct answer text: [letter]. [exact answer text]" and "Randomize options: Yes / No / Tool limitation". | 9.4; Appendix A; acceptance check 24 |
| 7 | Multimedia cell schema | Three fields, one spelling: "Layout/Visual:", "Asset/Request:" (only when an asset must be located, inserted, verified, or requested), "Alt Text:". Request numbers and filenames are permitted on the Asset/Request line; v3.1 section K's "do not display Request #" was written for the older richer schema and was removed. | 10.1; acceptance check 25 |
| 8 | Authority stack | One nine-level list. "HLOD" corrected to HLDD (High-Level Design Document). | 2.2 |
| 9 | Meaning of "Developer Notes" | "Developer Notes – All Slides" is the exported global block only. Every internal per-slide reference is now "Internal Slide Notes" (part of the Slide Planning Row, Appendix C). Appendix 13's stale "Overall Design" and "Developer Notes – Section Gate" names are gone. | 13.1; Appendix C |
| 10 | Tool neutrality | DominKnow is the default. An intake that names another tool applies every DominKnow rule to that tool's approved component reference. With no tool and no reference, tool-neutral language. Both v3.1 behaviours are preserved. | 1.4 |
| 11 | First screen | Intake decision with a default: Splash is a title screen with estimated completion time, orientation screen next. Intake or client may place the orientation content on the first screen, or the course shell may already provide it. | 1.4; 4.3 |
| 12 | "None" vs "N/A" in Multimedia | N/A when no visual is needed (v3.1 section K). | 10.1 |
| 13 | Public Affairs example in Appendix 10 | Replaced with a domain-neutral request-approval example in the same notation. | Appendix A |
| 14 | Three phrasings of "Developer to confirm component" | One marker: [DEVELOPER TO ADVISE: Confirm the closest approved DominKnow component or question type.]. | 7.3; 12 |

## 3. Rules added

| Rule | Why | Where |
|---|---|---|
| Task-based objective wording (job verb, object, condition; Bloom internal only) | Reviewer comment: objectives were Bloom-verb driven, not job tasks. v3.1 had no rule asking for a job-task formulation. | 3.3; acceptance check 7 |
| Heading hierarchy in Text Content | Reviewer comment: use proper heading levels so they show in the Navigation pane. v3.1 defined Heading 1 only and its templates contradicted it. | 5.4; acceptance check 10 |
| Cognitive-load limits (one idea per slide; about seven items or two panels of four; three new acronyms; split, do not compress) | Reviewer comments: "cognitive overload", "no one has a clue what this means". v3.1 stated the principle with no limit and no check. | 5.3; acceptance check 12 |
| Plain-language pass (role first, unit code second; reader outside the unit can say who does what) | Same comments. | 5.3; acceptance check 12 |
| Title accuracy | Reviewer comment: "The title is misleading". No v3.1 check. | 5.4; 14.1; acceptance check 10 |
| First-screen intake item | Reviewer comment: orientation content belongs on the splash page for this client. | 1.4; 4.3 |
| Acronym audit as a named step in Step 4 | The rule existed four times in v3.1 and the sample still violated it; it is now a named pass with an acceptance line. | 13.3 item 11; acceptance check 11 |

## 4. Where every v3.1 section went

| v3.1 section | v3.2 location |
|---|---|
| Instruction for users table; "Copy everything in Section 6" | Instruction for users (not part of the prompt), with the correct copy range |
| Role and Task | Role and Task |
| Core Rules: Reviewer-Comment Integration Rules (11 general rules) | 3.3 (objective hierarchy), 6 (narration placement), 5.4 (Text Content structure, coherent content), 10.1 (developer-ready multimedia), 7.2 (meaningful display components), 5.2 (acronyms), 9.2 (feedback language), 4.3 (Introduction, Summary, orientation) |
| Core Rules: 13 component gates | 8.2 component table (Compound, Scenario-Decision, Sequence, Sorting, Matching, Multi-Select, Single-Select, Timeline, Accordion, Tabs, Flip Cards, Static) |
| Core Rules: Conditions 9 to 1 | 8.1, in order 1 to 9 |
| Core Rules: Learning Activity Selection Gate (source and output rules) | 1.1 (direct generation), 2.1 (sources, no invention, hierarchy, backward design), 2.3 (scenario realism), 3.5 (Step 2 internal), 1.3 and 5.5 (unresolved items, column separation), 4.4 (coverage map), 7.2 (meaningful action), 14.2 (QA before output) |
| Step 0; Reviewer Comment Resolution Workflow; Client SME Scenario Harvesting | 2.1, 2.4, 2.6 |
| Step 1 (source authority rules, workflow, required outputs) | 3.1, 3.2 |
| Step 2 Verification Gate | 3.5 |
| Step 3 wrapper ("generate the adapted project prompt") | Removed; sections A to S are presented directly as rules |
| A Control Block | 1.4, 13.1 |
| B Single Source of Truth Stack | 2.2 (merged with Layer 2 section 5) |
| C Craft Header | 1.4 (project frame) |
| D Governance Compliance and Source Control | 2.3 |
| E Instructional Design Architecture and Objective Integrity | 4.1, 4.2, 4.4 |
| Objective Coverage Map; Slide-Level Objective Discipline; Substantial Learning Content; Slide-Level Source Fidelity Gate | 4.4 |
| Content-First Slide Design Sequence | 7.1 (merged with Layer 2 section 6) |
| F Content Quality, Language, and Cognitive Load; Narration depth requirement | 5.1, 5.2, 5.3; 6 |
| G Narration rules; Expanded Instructional Narration Standard | 6 |
| H UX, Accessibility, and Technical Production | 11.1, 11.2 |
| I On-Screen Layout Labeling Rule | 5.4 (replaced by the heading hierarchy; label lists retained) |
| J Project Title, Style, and General Developer Notes | 13.1 |
| J Storyboard Structure and Word Table Enforcement | 13.2 |
| K Multimedia Column Standard; Icon Source Verification | 10.1, 10.2 |
| L Interaction Architecture, Scenario-Rich Design, and Distribution | 7.2, 7.3, 7.5, 4.2 (proportionate planning) |
| M Interaction Column Build-Ready Pattern | 7.4, 9.4 |
| N Learner-Facing Interaction Text | 5.1, 7.4 |
| O Assessment Quality, MCQ Randomization, and Feedback | 9.2, 9.3, 9.4 |
| P Multi-State Interaction Rule | 7.4 |
| Q Internal Design and Source-Control Notes | 2.3, 2.4, 5.5 |
| R Learner-Facing Column Contamination Rule | 5.5 |
| S Outputs; Part 1; Part 2; Final Output Sequence Lock | 1.2, 3.4, 13.1, 13.2 |
| Step 4 (14 items) | 13.3 (merged with Layer 2 section 28) |
| Slide-Level Coherence and Handoff QA Gate | 14.1 (merged with Layer 2 section 24) |
| Acceptance Checks – Fail Fast (65 bullets) | 14.2 (merged with Layer 2 section 25, the Compliance Gate, and Appendix 13) |
| Reviewer-Comment Compliance Gate | 14.2 |
| Output Now Instruction | 1.1 |
| 7. Optional Short Lead-In Prompt | Instruction for users |
| 8. Notes for Maintaining the Generator | Section 5 of this file |
| Appendix 1, 1A | Appendix B1 |
| Appendix 1B | Appendix B2 |
| Appendices 2, 3, 4, 7A, 9 | Appendix C (Slide Planning Row) |
| Appendix 5, 6 | Appendix D |
| Appendix 7, 8, 10 | Appendix A |
| Appendix 11 | Appendix E |
| Appendix 12 Final Section Inventory | 1.3 artifact table (Included or Excluded recorded per row) |
| Appendix 13 Evidence-Based Production QA Checklist | 14.2 (the QA record format is stated in its opening paragraph) |
| Appendix 14 v2.7 Conflict-Prevention Summary | Removed; each resolution is now the rule itself (9.4, 13.1, 1.2, 2.3) |
| Layer 2 section 1 (revision statement, purpose) | Removed (release notes) |
| Layer 2 section 2 (intake additions 26B to 26H) | 1.4, 2.5 (what the generator reads from those intake fields) |
| Layer 2 section 3 (Interaction and Multimedia Core Rules) | 7.4, 8.1, 8.4, 12 |
| Layer 2 section 4 (Step 0A) | 2.5 |
| Layer 2 section 5 (authority) | 2.2 |
| Layer 2 sections 6, 7, 8, 9 | 7.1, 7.2, 7.3, 7.4 |
| Layer 2 sections 10, 11, 12 | 8.3, 8.4 |
| Layer 2 sections 13, 14, 15, 16 | 10.1, 10.2, 10.3 |
| Layer 2 sections 17, 18 | 9.1, 9.2, 4.2 |
| Layer 2 section 19 | 11 |
| Layer 2 section 20 | 12 |
| Layer 2 section 21 | 8.5, 5.4 |
| Layer 2 section 22 | 13.1 |
| Layer 2 section 23 | Appendix C |
| Layer 2 sections 24, 25 | 14.1, 14.2 |
| Layer 2 section 26 | Appendix F |
| Layer 2 section 27 | 8.2 (marked provisional, Development validation required) |
| Layer 2 sections 28, 29; Final Governing Standard | 13.3; 1.1; Role and Task (responsibilities) |

## 5. Notes for maintaining the generator

- Keep the generator project-agnostic. Do not hard-code project names, domain references, scenario details, template filenames, or source inventories unless supplied in the intake. DominKnow, the LSC writing standard, CAF/DND terminology, and the Style block typography are deliberate defaults for the current production environment; change them in 1.4, 5.1, and 13.1 if the environment changes.
- Maintain the verification gate as an internal quality-control checkpoint. Display it only when the user explicitly requests objective review or a critical blocking gap prevents accurate generation.
- When a project has mandatory production rules, add them through the intake rather than editing the reusable master generator.
- When a project specifies a different authoring tool, supply its approved component reference in intake item 26B; section 1.4 applies the DominKnow rules to it.
- When a project specifies Word storyboard output, section 13.2 enforces explicit table borders, label formatting, template preservation, and final validation.
- When a project includes narration or facilitator scripting, section 6 applies (narration depth, placement, answer-leak prevention). If a project has no narration, keep section 6 marked "if in scope" rather than deleting it.
- When a project includes scored MCQs, section 9.4 preserves A/B/C/D labels for the authored key, requires the Randomize options and Correct answer text notation, and keeps written feedback valid under randomization.
- If a client requires a different storyboard structure, replace the five-column rule in 13.2 through the intake only.
- If no legacy material was reviewed, the Legacy Disposition Summary states "No legacy material reviewed".
- Periodically update the accessibility wording in section 11 to align with the organization's current accessibility standard and production environment.
- Editing discipline: every rule has one home and at most one acceptance line. When adding a rule, add it in one section and add one line to 14.2. When changing a rule, change it in its home and its acceptance line and nowhere else. Do not append revision packages; integrate them.
- Before each release, re-run the checks that produced this version: search for duplicate statements of the same rule, search for a rule and its acceptance line disagreeing, and confirm that every template in the appendices matches the field spellings in sections 9.4 and 10.1.

# v3.3 (CRAFT edition): what changed from v3.2

v3.3 restructures v3.2 into the CRAFT frame used by the other prompts in this repository (Context, Role, Action, Format, Target audience and Tone) and adds the rules needed by the second and third batches of reviewer comments on the MOD 8 storyboard. Every v3.2 rule is carried into v3.3 unchanged unless listed below; the build script verifies that every v3.2 body line survives.

## Where the v3.2 sections went

| v3.2 | v3.3 | v3.2 | v3.3 |
|---|---|---|---|
| Role and Task | Role and Task (first section after the scissors line, as in v3.1), with responsibilities in R — Role | 7.1 to 7.3, 7.5 | A3.1 to A3.4 |
| 1.1 to 1.3 | C2.1 to C2.3 | 7.4 | F5.1 |
| 1.4 | C3 | 8.1 to 8.5 | A4.1 to A4.5 |
| 2.1 to 2.6 | C4.1 to C4.6 | 9.1 to 9.3 | A5.1 to A5.3 |
| 3.1 to 3.5 | A1.1 to A1.5 | 9.4 | F5.2 |
| 4.1 to 4.4 | A2.1 to A2.4 | 10.1 | F4 |
| 5.1 to 5.3 | T2.1 to T2.3 | 10.2, 10.3 | A6.1, A6.2 |
| 5.4, 5.5 | F3.1, F3.2 | 11.1, 11.2 | A7.1, A7.2 |
| 6 | T3 | 12 | A8 |
| 13.1, 13.2 | F1, F2 | 13.3, 14.1 | A9.1, A9.2 |
| 14.2 | Acceptance Checks (final section) | Appendices A to F | Appendices A to F |

## Rules added in v3.3

| Rule | Reviewer comment it answers | Where |
|---|---|---|
| Complete sentences for any line that states a fact, rule, condition, relationship, or action; fragments only for names, labels, and noun-phrase options | "Should use full sentences - otherwise it is difficult to understand and connect meaning" | T2.1; acceptance line 12 |
| One slide, one term | "You call them stages and processes - which is it?" | T2.1; acceptance line 12 |
| Slide Title column equals the Heading 1 | "Titles should be the same" | F3.1; acceptance line 10 |
| Teach by the job question: decision-type objectives are taught as a decision walk-through; comparison tables support, never replace, the worked example | "Consider restructuring the content around a workplace decision"; "not clear on when to use each one" | A2.5; A9.2; acceptance line 20 |
| Stem before every practice or assessment activity | "What is the actual question stem? The intent of this activity is not immediately clear" | F5.1, F5.2, Appendix A; acceptance line 20 |
| Plain-pair mappings using learner-visible names; no re-listing of items already in Text Content | "show this - no one has the time to try to figure out what this means" | A4.4; acceptance line 19 |
| Behaviour fields (keyboard, focus, retry, reset, retained items, attempts, completion) are Development-owned and stay out of rows unless the slide is an exception | "Devs don't program this. Delete."; "it's already explained in the Dev notes at the top - no need to repeat here" | A4.2, A5.2; acceptance line 4 |
| Attempts and Completion lines only when different from Developer Notes – All Slides | "if it's non-scoring why 2 attempts?" | A5.2, F5.2, Appendix A |
| Non-scored practice: Final Incorrect Feedback repeats the Correct Feedback when the component reveals the model answer | "The correct feedback and 2nd incorrect should be the same. There is no need to state what the matches are" | A5.2 (decision 15 below) |
| Mock-up for any layout with more than five objects or a non-obvious arrangement | "So you have a visual of how you want them to arrange the processes?" | F4; acceptance line 26 |
| Objective derivation procedure with a domain-neutral worked example | Question on how the generator gets from a job requirement to progressive, task-based objectives | A1.3 |
| Three readers (learner, client reviewer, developer) and known failure patterns | Context for all of the above | T1, C5, R |

## Decisions taken in v3.3

| # | Decision | Where to reverse it |
|---|---|---|
| 15 | For non-scored practice, when the component reveals the model answer after the final attempt (assumed for DominKnow matching, sorting, and sequence), Final Incorrect Feedback uses the Correct Feedback text and does not restate the answer. Scored questions still state the exact correct answer. If Development confirms the components do not reveal the model answer, delete the reveal clause in A5.2. | A5.2 |
| 16 | Non-scored practice follows the Developer Notes – All Slides attempt convention unless intake 26E supplies a practice convention. If the client wants unlimited or single-attempt practice, state it in 26E. | A5.2 |
| 17 | Behaviour fields default to the Development standard and are never marked for Development confirmation in a row; an undocumented behaviour is recorded in the Internal Slide Notes instead. | A4.2, A5.2 |
| 18 | The mock-up threshold is five objects or more than one axis of arrangement. | F4 |

## Word count

v3.2 about 15,900 words; v3.3 about 17,900 words. The additions are the rules above and the two context blocks; nothing was removed.
