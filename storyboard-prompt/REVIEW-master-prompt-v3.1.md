# Review of the Shareable Storyboard Generator Master Prompt v3.1

Reviewed: `Shareable_Storyboard_Generator_Master_Prompt_v3.1_Part_1.docx` (about 19,200 words, 1,200 paragraphs), together with four screenshots of a MOD 8 Course Loading storyboard generated from it and the reviewer comments on that storyboard.

## 1. Verdict

**The length is not justified.** Roughly half of the document can be removed without losing a single unique requirement. But repetition is the second problem, not the first. The first problem is that the document is two prompts stacked on top of each other: the v3.0 master prompt, followed by a "v3.1 Revised Prompt Sections" package that was written to *replace* parts of the master but was appended instead. The package's own closing section ("Integration and cleanup requirements") lists the merge work that still needs to happen. None of it was done. As a result the generator receives the old rule and the new rule for the same topic, plus editing instructions meant for a human, and it has to pick one silently on every run.

Three findings drive everything else in this review.

| Finding | Evidence |
|---|---|
| Direct contradictions the model cannot satisfy | 11 identified (section 3). The worst: title-row borders on four sides vs bottom only; three interaction modes vs five; three feedback states vs four; "no On-screen Title prefix" vs templates that use it. |
| Repetition concentrated on packaging, not on content | Word-table borders are specified in 18 lines across 6 places. "Developer Notes" appears 46 times in at least four different senses. The instruction to keep planning artifacts internal appears 21 times. Randomization appears on 42 lines. |
| The weight is inverted relative to what your reviewers reject | Component completeness 25%, checklists 14.5%, Word formatting and export 13.6%, internal artifacts 11.4%, changelog and maintainer notes 7.8%. Content quality, objectives, cognitive load and language: 6.7%. Narration: 3%. Accessibility: 1.9%. "Bloom" appears 7 times; "job task", "workplace" or "task-specific" never appear in the objective rules. |

The screenshots confirm the last point. The generated storyboard follows the format rules well (merged title rows, five columns, Layout/Visual plus Alt Text, blank Interaction on static slides, the objectives lead-in, a gap marker). The reviewer comments are all about content: objectives driven by taxonomy verbs instead of job tasks, a slide "no one has a clue what this means", cognitive overload, missing heading levels, and orientation content the client wants on the first screen. The prompt got exactly what it emphasized.

**Where to begin:** resolve the contradictions first (they require decisions only you and Development can make), then execute the merge the v3.1 package asked for, then consolidate to "one home, one check", then add the four or five content-quality rules that are missing. Sections 7 and 8 lay this out as a roadmap and a target outline of roughly 9,500 words.

## 2. How the document is built

### 2.1 Two layers that were never merged

| Layer | Content | Share |
|---|---|---|
| Layer 1: Master prompt | Instruction table, Role and Task, Core Rules (three headed blocks), Steps 0 to 4, sections A to S, Slide-Level QA Gate, Acceptance Checks, Reviewer-Comment Compliance Gate, Output Now, Lead-In, Notes for Maintaining, Appendices 1 to 14 | about 62% |
| Layer 2: "v3.1 Revised Prompt Sections" | Numbered 1 to 29: revision statement, intake-form additions 26B to 26H, Interaction and Multimedia core rules, Step 0A, authority stack, design sequence, five display modes, completeness checks, component mapping, multimedia rules, gap labels, column ownership, Developer Notes block, internal map, QA gate, acceptance checks, library template, starter requirements, Step 4, Output Now, Integration and cleanup, Final Governing Standard | about 38% |

Section 29 of Layer 2 says, in its own words: "Replace conflicting sections rather than appending duplicate rules", "Replace the three-mode model with the five-mode model", "Rename the exported Developer Notes block", "Resolve the contradictory merged title-row border instructions", "Classify every support artifact as Internal Mandatory, Exported Mandatory, or Exported Only on Request". These are instructions to the person integrating the package. They are now being read by the generator as if they were storyboard rules.

### 2.2 Dead framing around sections A to S

Step 3 says: "create a downloadable or copy-ready project prompt that adapts the reusable storyboard requirements to the new project. The adapted prompt must include the following sections." Sections A to S (about 5,900 words, the core of the rules) are therefore framed as the *contents of a document the model is told never to output*. The model has to infer that these are in fact its operating rules. This is a leftover from an earlier two-stage workflow (generate a project prompt, then generate the storyboard). Present A to S directly as rules and delete the Step 3 wrapper.

### 2.3 Headings that do not match their contents

In Core Rules, the three headings appear to have shifted by one block during editing:

- "Reviewer-Comment Integration Rules" contains eleven general rules (objective hierarchy, narration placement, acronyms, feedback wording, Introduction and Summary boundaries) followed by thirteen component gates (Compound, Scenario-Decision, Sequence, Sorting, Matching, Multi-Select, Single-Select, Timeline, Accordion, Tabs, Flip Cards, Static).
- "Component-Specific Activity Gates" contains the nine general Conditions, listed in reverse order (9 down to 1), with their lead-in sentence ("Do not select, name, or recommend a display component ... until the applicable conditions below are satisfied") placed *after* the conditions.
- "Learning Activity Selection Gate" contains the source-fidelity and output-scope rules and nothing about activity selection.

A reader, human or model, cannot locate a rule by its heading. The heading "Reviewer-Comment Integration Rules" is also a change-history label, not a functional one. Name blocks by what they govern.

### 2.4 A "project-agnostic" generator with a project inside it

Notes for Maintaining the Generator says: "Keep the generator project-agnostic. Do not hard-code project names, domain references ... tool-specific interaction constraints, terminology." Control Block A says: "Authoring tool: [from intake]. If unspecified, use tool-neutral storyboard language." Meanwhile section L opens with "DominKnow is the authoring tool" and DominKnow is named 16 times; section F hard-codes CAF/DND terminology, the LSC writing standard and CFTO procedural steps; section J hard-codes Helvetica sizes and narration controls; Appendix 10's example is a PAO scenario; the authority stack names the HLDD and LSC Product Standards. Either accept that this is a DND/DominKnow generator and delete the tool-neutral language, or move these to the intake. The first option is simpler and more honest given how deeply DominKnow is woven in.

### 2.5 Material that should not be pasted into the AI at all

About 1,600 words (7.8%) is meta content addressed to the maintainer or to a document that is not present:

- The opening instruction table: "Copy everything in Section 6 into the AI tool". There is no Section 6. Layer 1's numbered sections jump from the appendices to "7. Optional Short Lead-In" and "8. Notes for Maintaining".
- "8. Notes for Maintaining the Generator": eleven bullets addressed to the person editing the prompt.
- Layer 2 section 1 ("Title and targeted revision statement", "Purpose of the v3.1 revision"): release notes.
- Layer 2 section 2 ("User Intake Form additions 26B to 26H"): additions to an intake form that is not in this document.
- Appendix 12 (Final Section Inventory) and Appendix 14 ("v2.7 Conflict-Prevention Summary"): a change log from two versions ago.
- Layer 2 section 29 "Integration and cleanup requirements".

Move these to a separate maintainer's guide. They cost attention and they contradict the rules (Appendix 12 lists thirteen exportable sections; the output contract allows five).

## 3. Contradictions to resolve first

These are more damaging than repetition because a contradiction is a coin toss on every run, and any QA pass the model runs against the acceptance list will fail one side or the other.

| # | Topic | Statement A | Statement B | Recommended resolution |
|---|---|---|---|---|
| 1 | Merged title-row borders | Section J (Storyboard Structure): after merging, "apply a solid black 0.5 pt border ... on all four sides"; Final Word validation: "Each merged title row is visibly enclosed by top, bottom, left, and right borders"; "No merged title row lacks a top, left, or right border." | Step 4 item 14: "only a solid black bottom border ... Do not apply top, left, or right borders to merged title rows"; Acceptance Checks: reject if the title row "has a visible top, left, or right border, or appears as a fully enclosed title box"; Appendix 13 row. | Decide once with the template owner. The bottom-only version appears to be newer (Layer 2 section 29 refers to "the approved template rule"). State it once in the Word formatting section and once in the acceptance list; delete the other four statements. |
| 2 | Interaction column modes | Section M: three modes (Blank, Simple interaction, Practice or assessment). Mode 2: "Do not display Learning Purpose, Directive, Learner Action, Behaviour/States, Content/Items, Accessibility, Fallback". Acceptance: reject if "an instructional interaction contains more than the approved pattern name, concise developer-friendly description, and necessary Continue condition". | Layer 2 section 9: five modes. Mode 2 (Exploratory Display) "Include: Component; Learner Action; Component Structure; Order/Navigation; Initial State; Required Viewing; Completion". Section 11 requires "Tab 1 Label; Tab 1 Panel; Tab 2 Label ..." in the Interaction column; section 25 rejects any tab or accordion lacking its content or mapping. | Adopt the five-mode model (section 29 says so). Delete section M's Mode 2 exclusion list and the matching acceptance line. Keep the two-column relationship rule: full panel content lives in Text Content, Interaction carries the mapping. |
| 3 | Feedback states for two-attempt questions | Condition 6 and section O: "one shared Correct response, one First Incorrect Feedback/Hint, and one Final Incorrect response ... Do not create a separate second-correct response". | Core Rules "Feedback language": four states with different wording for first correct ("That is correct." ... "Please continue.") and second correct ("That is correct", substantive explanation, "Please continue."). Layer 2 section 9 Mode 4: "First-Attempt Correct Feedback ... Final Correct Feedback where supported". Section 18: "first-correct, first-incorrect/hint, second-correct, and second-incorrect/final states". | Confirm with Development what the DominKnow question component supports and write the state model once, with the exact strings, in the Assessment section. Appendix 8 becomes the single worked example. Delete the other five statements. |
| 4 | Region labels in Text Content | Section I and Core Rules: slide title in Heading 1 with no "On-screen Title" prefix; no "On-screen Body" for a single region; no "On-screen" prefix on any label. Reviewer-Comment Compliance Gate: fail if "titles retain On-screen Title". | Appendix 7 (Learner-Facing Interaction Slide Template): "On-screen Title:", "On-screen Scenario", "On-screen Prompt", "On-screen Task Instruction", "On-screen Options". Appendix 10: "On-screen Prompt:", "On-screen Options:". | Templates are what the model copies. Your sample shows the compromise: slides 2 to 4 use "Title:" and "Body:" prefixes while slide 1 uses a real heading. Fix both appendices and replace the labelling rule with a heading hierarchy (section 7, rule B). |
| 5 | Interaction minimums | Section L: "Each objective-bearing chunk should include at least one meaningful interaction or practice opportunity"; "Include at least one higher-order practice or check when objectives require analysis ..."; Context Variables: "Use at least three relevant variables"; Section E: "No Quiz-Only Chunk". | Layer 2 section 17: "Do not impose project-independent minimum counts for interactions ... Enforce numeric requirements only when supplied by the project." Section 29: "Remove universal interaction and scored-question quotas". | Keep "practice for every objective-bearing chunk" as a pedagogical principle (it is Teach, Example, Practice, Assess, not a quota). Drop "at least three variables". Rewrite section 17 to prohibit only per-module numeric quotas. |
| 6 | Scored-MCQ field labels | Acceptance Checks require the literal strings "Correct answer text: [letter]. [exact answer text]" and "Randomize options: Yes / No / Tool limitation". | Section M template: "Correct Answer:" and "Randomize Options: [Yes/No and any constraint]". Appendix 8: "Correct Answer: [letter]. [exact correct answer text]" and "Randomize Options: Yes / No / Tool limitation". Appendix 10: "Correct answer text: B." and "Randomize options: Yes". | One field list, one spelling, used in the mode template, the appendix and the acceptance line. |
| 7 | Multimedia cell schema | Section K gives two schemas back to back: a three-field "conditional schema" (Layout/Visual, Asset/Request, Alt Text) and then a two-field "concise final format" (Layout/Visual, Alt Text). Step 4 item 8: "only Layout/Visual and Alt Text". | Layer 2 section 13: three fields spelled "Layout / Visual:", "Asset / Multimedia Request:", "Alt Text:". Acceptance line allows "Layout/Visual, conditional Asset/Request, and Alt Text". | Keep section 13's three-field schema (Asset line only when an asset must be located or requested). One spelling. |
| 8 | Authority stack | Section B: seven levels including "HLOD, DDD/storyboard template, and style guide" and "LSC Product Standards". | Layer 2 section 5: nine levels including "HLDD, storyboard template, style guide, assessment plan, and accessibility plan", "Approved Interaction Requirements Library", "Development-validated project defaults". | One merged list. HLOD vs HLDD is almost certainly a typo. |
| 9 | What "Developer Notes" means | Rules that say "record in Developer Notes": distractor rationale (section O), source anchors (Slide-Level Source Fidelity Gate), accessible equivalents (section H), integration justification (Slide-Level Objective Discipline), Appendix 10 "Interaction / Developer Notes". | Control Block A: "Do not export a separate Developer Notes section". Section J: "Do not create separate slide-by-slide Developer Notes". Section 22: "Maintain Internal Design and Verification Notes separately". Appendix 13's last row still refers to "Overall Design" and "Developer Notes – Section Gate", names that no longer exist. | Reserve "Developer Notes – All Slides" for the exported global block. Rename every internal per-slide reference to "Internal Slide Notes" (Appendix 9). Fix Appendix 13's stale names. |
| 10 | Tool neutrality | Control Block A: "Authoring tool: [from intake]. If unspecified, use tool-neutral storyboard language." Notes for Maintaining: do not hard-code tool constraints. | Section L: "DominKnow is the authoring tool." Sixteen DominKnow references across both layers. | Declare the generator DominKnow-specific, or move every DominKnow reference behind an intake variable. Recommend the first. |
| 11 | First screen | Section E and Core Rules: "Keep the Splash screen as a title screen" and "Include a brief orientation screen after the Splash". | Not inside the prompt, but in your reviewers' comments: "This content should be on the splash page so learners see how to ..." and "can we replace this page with the one you pasted above". | Add an intake item "First screen: title only / title plus orientation (navigation, audio, transcript)" and set the client default. |

## 4. Repetition inventory

Verdict key: **Keep ×2** means the repetition is worth keeping as an opening statement plus a closing reinforcement. **One home, one check** means the rule should exist in exactly one section plus at most one line in the single acceptance list. **Merge** means two full sections say the same thing. **Remove** means the extra copies add nothing.

| # | Rule | Times stated | Where it appears | Verdict |
|---|---|---|---|---|
| 1 | Keep Steps 0 to 3, the verification gate and all planning artifacts internal unless asked | 21 | Instruction table; Core Rules ×2; Step 2; Control Block A; Objective Coverage Map; Interaction and Assessment Map; section S ×2; Final Output Sequence Lock; Step 4 items 1 and 5; Output Now; Lead-In; Notes for Maintaining; Layer 2 sections 1, 22, 28, 29 ×2; Final Governing Standard | **Keep ×2** (top of prompt and the closing Output Now). Replace the other nineteen with one artifact table: artifact name, Internal mandatory / Export on request. This is what section 29 asked for. |
| 2 | Final output order: Title, Style, Developer Notes – All Slides, Learning Objectives table, Storyboard table | 10 | Section J; section S; Part 1; Sequence Lock; Step 4 item 6; Acceptance; Lead-In; Layer 2 sections 1, 22, 29; Final Governing Standard | **One home, one check.** |
| 3 | No narration on Splash, Learning Objectives, practice, knowledge-check, Summary or Conclusion screens | 9 | Core Rules "Narration placement"; section G bullets 1, 2 and 3 (three consecutive bullets, the first two nearly identical); Expanded Instructional Narration Standard; Step 4 item 3; Acceptance ×3; Compliance Gate; Layer 2 section 28 | **One home, one check.** |
| 4 | Narration must teach, not repeat on-screen text; required depth | 6 | Section F "Narration depth requirement"; section G "Narration must teach"; section G "Each narrated section should orient ..."; Expanded Instructional Narration Standard (a full restatement of both); Acceptance lines "Narration merely repeats" and "An objective-bearing instructional slide uses narration that only repeats" (consecutive near-duplicates) | **Merge** F-depth, G and the Expanded Standard into one Narration section of about 250 words (currently 616). |
| 5 | Narration must not reveal or cue the answer | 6 | Section G; Expanded Standard; Acceptance ×4 ("Practice or assessment narration reveals", "Narration states the correct answer before learner action", "Narration introduces ... answer cues", "Scored-check narration reveals, implies, or over-cues") | **One home, one check.** |
| 6 | Expand acronyms at first learner-facing use; audit before export | 4 | Core Rules; section F bullet 5; section F bullet 8 (three lines later); Compliance Gate | **One home, one check.** Note that four statements did not prevent the violation on slide 4 of the sample. Position and a checklist line matter more than count. |
| 7 | Two-attempt feedback exact wording ("That is correct." ... "Please continue.") | 6 plus a contradiction | Core Rules "Feedback language"; Condition 6; section O Two-Attempt (five bullets, of which bullets 2 and 4 restate each other); section J Developer Notes example; Appendix 6; Appendix 8; Layer 2 section 18 | **One home** (Assessment section) with the exact strings, plus Appendix 8 as the worked example. |
| 8 | Slide title in Heading 1, no "On-screen Title" prefix, no "On-screen Body" for one region | 7 | Core Rules "Text Content structure"; section I bullets 1, 2, 3, 6 and 7 (bullet 7 repeats bullet 1); Compliance Gate | **One home, one check.** Replace with the heading-hierarchy rule (section 7). |
| 9 | Multimedia cell contains only Layout/Visual, conditional Asset, Alt Text | 14 | Section K (twice); Step 4 items 8 and 10; Slide-Level QA Gate ×2; Acceptance ×3; Appendix 7; Appendix 13; Layer 2 sections 13, 21, 24, 25 | **One home, one check.** Section 13 is the best version. |
| 10 | Interaction cell blank when static; never "None", "N/A", "Standard navigation" | 10 | Section M Mode 1; Step 4 item 9; QA Gate; Acceptance; Appendix 7; Appendix 13; Layer 2 section 9 Mode 1; section 24 | **One home, one check** (the Mode 1 definition). |
| 11 | Word table borders: 0.5 pt, #000000, real borders not gridlines | 18 lines in 6 places, plus contradiction 1 | Section J Storyboard Structure (seven bullets, an eleven-item validation list and a reject paragraph); Part 1; Part 2; Step 4 items 12 and 14; Acceptance ×3; Appendix 13 ×2; Layer 2 section 28 | **One home, one check.** A single Word rendering block of eight to ten lines covers everything. |
| 12 | All table text explicit black #000000 | 7 | Section J ×3; Step 4 item 14; Acceptance; Appendix 13 | Fold into 11. |
| 13 | One global Developer Notes – All Slides block; never repeat global requirements per row | 14 | Control Block A ×3; section J; section J Storyboard Structure; Step 4 item 4; Acceptance ×4 (two of them verbatim duplicates); Layer 2 sections 3, 19, 22, 24, 25, 26H | **One home, one check.** The rule "state recurring requirements once" is itself stated fourteen times. |
| 14 | Do not invent unsupported content | 34 lines | Throughout both layers | The specific variants are legitimate and should stay where they bite: scenario details, asset availability, request numbers, colour codes, component behaviour. Keep one general statement in Governance and remove about fifteen generic restatements. |
| 15 | Colour hex codes only from an approved written source; never sampled | 6 | Section H ×2; section J ×2; Acceptance "Colour codes are estimated, sampled, or invented" and "Colours are sampled, visually estimated, or invented" (duplicates) | **One home, one check.** |
| 16 | Learner-facing columns must not contain source notes, rationale, SME comments, QA notes | 15 | Core Rules ×2; Step 0; section D; section Q; section R; Acceptance ×4; Appendix 13; Layer 2 sections 21, 24 | **One home, one check.** Section R is the canonical statement. |
| 17 | Content-first slide design sequence | 2 full sections | Section E "Content-First Slide Design Sequence" (12 steps); Layer 2 section 6 (20 bullets, a superset) | **Merge.** Keep section 6. |
| 18 | Slide-level QA gate | 2 full sections | "Slide-Level Coherence and Handoff QA Gate"; Layer 2 section 24 (a superset) | **Merge.** Keep section 24. |
| 19 | Acceptance checklists | 6 lists, about 3,000 words | Acceptance Checks (65 bullets); Layer 2 section 25 (24 bullets); Reviewer-Comment Compliance Gate; Appendix 13 (23 rows); the two slide-level gates | **Merge** into one acceptance list of 35 to 40 lines ordered by the section each line enforces. The Compliance Gate is a subset of the main list. Appendix 13 is the main list reformatted as a table. |
| 20 | Step 4 procedure | 2 | Step 4 (14 items); Layer 2 section 28 (17 bullets) | **Merge.** |
| 21 | Output Now instruction | 3 | Output Now; Layer 2 section 29; Final Governing Standard | **Merge** into one closing block. |
| 22 | Per-component minimum requirements (Flip Cards, Tabs, Accordion, Timeline, Matching, Sorting, Sequence, Single Select, Multi-Select, Scenario) | 4 lists plus a mapping list, about 1,900 words | Core Rules component gates (13 gates); Layer 2 section 10 "Component-specific minimum checks"; section 25 per-component reject lines; section 27 "Provisional Starter Requirements"; section 11 mapping | **Merge** into one component table with columns: Use when / Do not use when / Required fields / Object labelling pattern. About 600 words. The four lists have drifted: Flip Cards requires "keyboard access" in one list and "required media/narration" in another. |
| 23 | An interaction must require an objective-related cognitive action; opening a card or tab is not practice | 17 lines | Core Rules ×3; Conditions 1 and 3; section L; Interaction Necessity Test; Acceptance ×3; Layer 2 sections 3, 7, 9, 24, 25 | **One home, one check.** Section 7 is the cleanest statement; keep it with the Necessity Test. |
| 24 | Learner action to question-type mapping | 3 | Condition 2; Layer 2 sections 7 and 8 | Keep section 8 only. |
| 25 | Internal planning artifacts | 8 overlapping artifacts, about 1,100 words, 18 mentions | Assessment Map (E, Appendix 4); Objective Coverage and Instructional Treatment Map (E, Appendix 1B); Interaction and Assessment Map (L, Appendix 7A, section 23 with 33 fields); Chunking Map (Appendix 3); Slide Anchor List (Appendix 2); Internal Slide-Level Notes (Appendix 9); Approved Interaction Reference Status Log and Multimedia Asset Status Log (section 4); Objective Map (Appendix 1, subsumed by 1A) | Two internal tables cover all of it: an Objective Coverage table (Appendix 1B) and a per-slide Planning Row (merge Appendices 2, 3, 7A, 9 and section 23). A single-pass model does not actually build eight separate logs; it needs to know what to track, once. |
| 26 | Gap-marker vocabulary | 22 lines | Section 20 table (canonical); examples embedded in sections 3, 4, 8, 13 to 19; Conditions 5, 7, 8; "do not use SME TO CONFIRM as a catch-all" twice | Keep the section 20 table and the in-context examples where the marker text is specific. Remove the duplicate catch-all warning. |
| 27 | Proportionate interaction planning | 4 plus contradiction 5 | Section E; section L ×2; Layer 2 section 17 | **One home.** |
| 28 | Source authority stack | 4 plus contradiction 8 | Core Rules ×2; Step 1 Source Authority Rules; section B; Layer 2 section 5 | **One home.** |
| 29 | Every objective needs a source quotation; give the most precise location available | 5 and 3 | Step 1 workflow bullets 4, 5, 11, 12, 15; "most precise available location" in Step 1, Slide-Level Source Fidelity Gate, Appendix 1A | Step 1 workflow can shrink from fifteen bullets to about eight. |
| 30 | Keyboard-operable method or accessible equivalent for drag-and-drop, matching, hotspot | 25 lines | Section H ×3; sections L, N, P; Acceptance ×2; Layer 2 sections 19, 25, 27 ×4; four component gates | Keep the section H rule, section 19 (global vs slide-specific) and one column in the component table. Remove from each gate. |
| 31 | "Select", not "click" | 2 | Sections F and N | One. |
| 32 | Randomization of MCQ options | 42 lines | Section O (eight bullets); Acceptance ×5; Appendices 4, 7A, 8, 9, 10, 13, 14; Notes for Maintaining; Layer 2 sections 9, 18, 24, 26, 27 ×2 | The rule is three sentences. Keep section O trimmed to four bullets, one field in the Mode 4 template, one acceptance line. |
| 33 | Legacy material is comparison only unless validated | 8 | Role and Task; Core Rules; Step 1; section B ×2; section D; Acceptance; Notes for Maintaining | Sections B and D suffice. |
| 34 | The developer build test ("a developer who has never met the instructional designer") | 2 | Acceptance; Layer 2 section 24 | Keep once, at the head of the acceptance list. |

### Which repetition is useful

Reinforcement earns its place in exactly three cases, and only as a two-statement pattern (principle at the top, enforcement at the end):

1. The output contract (what is visible, what stays internal). It governs every run and was clearly a recurring failure in earlier versions.
2. Source fidelity (no invented content). It is the highest-risk failure for a defence client.
3. Content before component (decide the message and learner action before choosing a visual or interaction).

Everything else should follow "one home, one check": the rule lives in one named section, and the single acceptance list has at most one line for it. Six checklists covering the same rules do not add enforcement; they add places for the wording to drift, which is how contradictions 1, 3, 6 and 7 arose.

## 5. Smaller defects

- "Copy everything in Section 6" refers to a section that does not exist.
- Two sections are labelled "J." (Project Title, Style, and General Developer Notes; Storyboard Structure and Word Table Enforcement).
- The nine Conditions are listed 9 to 1 with the introductory sentence at the end.
- Appendix 13's last row refers to "Overall Design" and "Developer Notes – Section Gate", names from a previous version.
- Appendix 14 is titled "v2.7 Conflict-Prevention Summary" inside a v3.1 document.
- Notes for Maintaining: "If a project has no figure content, omit Legacy Disposition Summary" almost certainly means "legacy content".
- "HLOD" (section B) vs "HLDD" (Layer 2 sections 5 and 19).
- The prompt mandates acronym expansion but uses LSC, CFTO, HLDD, MPGTG, DDD, OPSEC/PERSEC, PAO, SCORM without expansion. If a project lead who is not the author reads it, they will hit the same wall your reviewer described on slide 4.
- Appendix 10's worked example is a Public Affairs scenario. A worked example in a generator should be domain-neutral or drawn from the current intake.
- Section K's icon rule and section L's first bullet both say "Developer to confirm component" in different words from the section 20 marker "[DEVELOPER TO ADVISE: ...]". Three phrasings for the same signal.

## 6. What the sample output shows

Reviewer comment, in order of the screenshots, mapped to the prompt.

| Reviewer comment | What the prompt says | Status |
|---|---|---|
| "The learning objectives appear to be driven by Bloom's Taxonomy verbs (differentiate, apply, select, trace) rather than the specific job tasks learners need to perform in the workplace." Followed by a rewrite: "Determine who is responsible for loading different types of training. Apply Priority Training Date rules to load members correctly. Follow the course-loading process from planning through qualification completion ..." and "LOs should be task specific". | Step 1: "using observable verbs"; "The Bloom/Supporting Question: choose Bloom classification and action"; section E: "measurable Bloom-aligned bullets"; Core Rules: "Do not vary Bloom verbs merely to demonstrate progression". No rule asks for a job-task formulation. | **Rule absent.** The model did what it was told. The rewrite the reviewer supplied is the pattern to encode: job verb, object, condition. |
| "Lets use proper heading levels so everyone can see visually how it is supposed to look. This way we can also see the heading levels in the Navigation pane. It is less cluttered and more human readable." | Section I: Heading 1 for the slide title, bold labels with colons for regions. Nothing on Heading 2 or 3 within a slide. Appendix 7 template contradicts with "On-screen Title:" labels. | **Rule incomplete and contradicted.** The output shows it: slide 1 has a real heading, slides 2 to 4 use "Title:" and "Body:" prefixes. |
| "no one has a clue what this means except Copilot" and "This is cognitive overload. I have no idea who loads what after attempting to read this" (slide 4, "Who loads which training?", two panels of unit codes: BMQ/BMOQ, MPGTG J7-1 BTL, SUTL, CFTPO, RCN/NTG, NWO II/NETP, DP1). | Acronym rule (four statements); "Avoid cognitive overload: do not introduce multiple unrelated new concepts on one slide"; "Use plain language"; Substantial Learning Content Requirement. All present, all stated in the middle of the document, and the only acceptance line is "over-simplified into slogans", which is the opposite failure. | **Rules present, not enforced.** No acceptance line for undefined acronyms outside the Compliance Gate, none for item count per screen, none for reader comprehension. The reviewer's own rewrite in the last screenshot (heading, one-sentence lead, "Responsibilities at a Glance", sub-headings per training type, two plain bullets each) is the target pattern. |
| "This is what the clients want to see - they want to be able to actually read the content. This content should be on the splash page so learners see how to ..." and "can we replace this page with the one you pasted above and add info Monica suggested earlier". | Section E and Core Rules: Splash is a title screen; orientation is a separate screen after it. | **Client expectation differs from the default.** An intake item. |
| "The title is misleading" (on slide 2 or 3). | No rule checks that a slide title predicts its content. | A one-line acceptance check would catch it. |

What the output got right, all of which are the most-repeated rules: the objectives lead-in sentence, the Learning Objectives table with a merged title row, the five-column Storyboard table, Layout/Visual plus Alt Text with a "Suggested treatment" sentence, a properly formed "[MULTIMEDIA TO CONFIRM: ...]" marker, blank Interaction cells on static slides, one narration script per slide, estimated completion time on the splash. Repetition does correlate with compliance in this tool. The prompt is repeating the wrong things.

Two smaller observations from the same screenshots: slide 2's Multimedia cell says "None" where the prompt asks for "N/A", and slide 4's narration is three sentences, short of the narration depth requirement. Both are minor.

## 7. Recommendations

### Where to begin

**Phase 0. Decide the contradictions (one working session with Development and the template owner).** Nothing else should be edited first, because every consolidation forces a choice between the two versions anyway. Decisions needed: title-row borders (1), interaction modes (2), feedback states (3), region labels (4), minimums (5), tool specificity (10), first-screen content (11). Items 6 to 9 are editorial and need no meeting.

**Phase 1. Execute the merge the v3.1 package asked for.** Fold Layer 2 into Layer 1 section by section, keeping the newer version wherever both exist (sections 6, 9, 13, 24, 28 are all supersets of their Layer 1 counterparts). Delete the meta content listed in 2.5. Delete the Step 3 wrapper and present A to S as rules. Fix the three Core Rules headings. Expected result: about 1,600 words gone with zero rules lost, and the document reads as one voice.

**Phase 2. One home, one check.** Restructure into the outline in section 8. Move every rule into exactly one section. Build one acceptance list in section order. Merge the pairs in inventory items 17 to 22 and 25. Expected result: 9,000 to 9,500 words.

**Phase 3. Re-weight toward what reviewers reject.** Add or strengthen the rules below and give each one an acceptance line. This is the largest quality gain available and it costs about 500 words.

**Phase 4. Regression test.** Run the same intake and sources through v3.1 and v3.2 and score both against the reviewer comments as a rubric. Keep the reviewers' rewritten slide and objectives as reference answers.

### Rules to add or strengthen in Phase 3

**A. Task-based objectives.** Draft wording: "Write each objective as a task the learner will perform on the job after the module: job verb, object, and the condition or standard where the source states one. Use the verb the job uses (determine, load, apply, follow, respond, use, explain), not a taxonomy verb chosen to show a level. Test: a supervisor could observe or check it. Use Bloom only as an internal check that the terminal objective sits at or above its supporting objectives; Bloom never dictates wording." Acceptance line: "An objective names a cognitive process rather than a job task."

**B. Heading hierarchy in Text Content.** Draft wording: "Heading 1: the learner-visible slide title, no prefix. Heading 2: a section or region heading within the slide (for example 'Responsibilities at a glance', 'Left panel'). Heading 3: a sub-group heading. Bold label with a colon only for Narration/VO and for interaction fields. Body text in Normal. Bullets for parallel items. Use region labels only when the slide has two or more regions." This replaces section I and fixes Appendices 7 and 10. Acceptance line: "A slide title or section heading is carried as a bold label instead of a heading style."

**C. Cognitive-load limits.** Draft wording: "One idea per slide. No more than about seven items in a list, or two panels of four. No more than three new acronyms per slide; define each on the slide where it first appears. When a who-does-what mapping exceeds these limits, split it by the learner's question ('Who loads basic training?', 'Who loads occupation training?') or turn it into a decision activity. A slide that fails these limits is split, not compressed." Acceptance line: "A slide exceeds the item, panel or acronym limits."

**D. Plain-language pass.** Draft wording: "After drafting each Text Content cell, reread it as a reader who does not know the organization. Name the role first and the unit code second ('the occupation training authority (CFTPO)'). Replace organizational shorthand with what the learner must do or know. Test: a reader outside the unit can say who does what after one reading." Acceptance line: "A learner-facing sentence cannot be understood without knowledge the module has not yet taught."

**E. Title accuracy.** Acceptance line: "A slide title does not predict the slide's content or learner action."

**F. First-screen content.** Intake item with the client default, as in contradiction 11.

### A note on the tool

The document is written for Microsoft Copilot (Final Governing Standard: "Copilot generates, structures, maps, and checks"). Check how the prompt reaches the model. If it is pasted, confirm the surface's input limit is above the document's roughly 143,000 characters; if it is uploaded as a file, the model most likely retrieves passages rather than reading the whole text. Retrieval rewards rules that are stated many times and punishes rules stated once in the middle, which matches the pattern in section 6 exactly. Either way, a shorter prompt with the content rules near the top and a single acceptance list at the end will behave more predictably than the current one.

## 8. Target outline for v3.2

Approximate word budgets. Total about 9,500 words, down from about 19,200.

| # | Section | Merges | Words |
|---|---|---|---|
| 1 | Role, scope and output contract (visible sections, internal artifacts table) | Instruction table, Role and Task, Output Now ×3, Final Governing Standard, Sequence Lock | 300 |
| 2 | Intake, sources and authority | Step 0, Step 1 Source Authority Rules, section B, Layer 2 section 5, Reviewer Comment Resolution, Scenario Harvesting | 600 |
| 3 | Learning objectives | Step 1 workflow (trimmed), Core Rules objective hierarchy, new task-based rule | 500 |
| 4 | Module architecture | Section E (Splash, Introduction, Objectives, Body, Summary, chunking, Teach-Example-Practice-Assess), Introduction and Summary boundaries, proportionate planning | 500 |
| 5 | Writing standard | Section F (minus narration), acronyms, cognitive-load limits, plain-language pass, heading hierarchy, Text Content structure | 700 |
| 6 | Narration | Section F narration depth, section G, Expanded Standard | 300 |
| 7 | Slide design sequence and interaction modes 1 to 5 | E sequence, Layer 2 sections 6, 7, 8, 9, section M, Necessity Test, scenario-rich design | 900 |
| 8 | Component requirements table | Core Rules gates, Conditions 1 to 9 (trimmed), Layer 2 sections 10, 11, 12, 25 component lines, 27 | 700 |
| 9 | Assessment and feedback | Section O, Layer 2 sections 17, 18, one feedback-state model, one MCQ notation | 600 |
| 10 | Multimedia column | Section K, Layer 2 sections 13 to 16 | 450 |
| 11 | Accessibility | Section H, Layer 2 section 19 | 300 |
| 12 | Gap markers and ownership | Layer 2 section 20, Conditions 5, 7, 8 | 250 |
| 13 | Output assembly and Word formatting | Control Block A, section J ×2, section S, Step 4 ×2, Layer 2 sections 22, 28, one border rule | 600 |
| 14 | Acceptance list (single, in section order) | All six checklists | 900 |
| 15 | Appendices: mode templates (Appendices 7 and 8, fixed), Objective Coverage table (1B), Slide Planning Row (2, 3, 7A, 9, section 23), Component Library template (section 26) | Appendices 1 to 13 | 900 |

Removed outright: Notes for Maintaining, Appendix 12, Appendix 14, Layer 2 sections 1, 2 and 29, the Step 3 wrapper, the Reviewer-Comment Compliance Gate, and the second copies of the design sequence, QA gate, Step 4, Output Now and acceptance checks.
