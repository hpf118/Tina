# From Workflow Development to Multi-Stakeholder Validation: Assessment, Publication Strategy, and Integrated Manuscript Plan

@center Companion to the reconstructed draft manuscript "Transforming Learning Design at Scale" and to the Validation Study Design for the Storyboard Generator Master Prompt

@center Prepared 2026-09-20

@note How to read this document. Part A answers the two questions asked: can the draft paper and the validation design become one study, and should the result be one paper or two. Part B gives the programme-level framework that binds them. Part C is the full manuscript plan for the validation paper, written as far as possible in final prose, with every piece of evidence that does not yet exist shown as a placeholder in the form [DATA TO COLLECT: what, from whom, with which instrument]. Part D is the data-collection register that maps every placeholder to an instrument, a sample, a timing, and an analysis. Part E gives the single-paper alternative. Part F is the schedule. Placeholders are highlighted so they can be searched for and cleared one by one.

## Part A. Assessment

### A1. What exists today

Two documents describe the same artefact from two sides.

- **The draft manuscript** (reconstructed from screenshots, 37 screens, about 9,000 words including markers) is a qualitative design-based study. It answers how a team converted individual prompting practice into a governed storyboarding workflow. Its evidence is documentary: 17 module-level tasks, seven practitioner contributors, 48 CRAFT-coded prompt-review entries, 105 embedded storyboard comments, 21 storyboard versions, and three matched baseline–final pairs. Its outputs are four guardrail dimensions and a set of workflow control gates. It does not evaluate whether the workflow works for anyone downstream, and it says so.
- **The validation study design** is a programme evaluation of the current version of that workflow, the Storyboard Generator Master Prompt v3.4. It uses the CIPP model as architecture, an interpretation-and-use argument (eight claims, C1 to C8) as logic, and implementation outcomes as the stakeholder lens. It specifies instruments for learning designers, developers, managers, and client subject-matter experts (SMEs), artefact metrics, a fidelity log, a reproducibility protocol, decision rules, and a timeline. None of its data has been collected.

The two are not competing accounts. They are consecutive phases of one design-based research (DBR) programme: analysis and exploration, then design and construction, then evaluation and reflection (McKenney & Reeves, 2018). The draft covers the first two phases. The validation design is the third. Table A1 shows the fit.

| DBR phase (McKenney & Reeves, 2018) | What the programme did or will do | Evidence | Where reported |
|---|---|---|---|
| Analysis and exploration | Baseline individual prompting; practitioner reflections; problem identification | Baseline prompt episodes, survey workbook, reflections (RQ1 of the draft) | Draft manuscript, Finding 1 |
| Design and construction | OPUS review, CRAFT structuring, thematic analysis, guardrails, control gates, master prompt v1 to v3.4 | Prompt-review workbook, storyboard comments, matched pairs, the v3.3 audit and v3.4 rewrite (RQ2 to RQ4) | Draft manuscript, Findings 2 to 4; audit report as Input evidence |
| Evaluation and reflection | Naturalistic use of v3.4 across projects; four stakeholder groups; artefact metrics; reproducibility | Questionnaires, interviews, rubric ratings, comment logs, cycle time, fidelity log (claims C1 to C8) | Validation paper (Part C of this document) |

### A2. Can they be one integrated study? Yes, on three conditions

They can be reported as one research programme provided three links are made explicit; without them a reviewer will see two loosely related projects.

1. **The artefact must be the same object.** The draft speaks of "the storyboard master prompt" and "final prompt or agent guardrail documentation"; the validation design speaks of "Master Prompt v3.4". The programme must state the version lineage: baseline individual prompts, the team master prompt studied in the draft, the v3.3 audit, and v3.4 as the evaluated version. A one-paragraph version history with dates belongs in both papers.
2. **The guardrails must become the claims.** The four guardrail dimensions derived qualitatively in the draft are the warrants for the validation claims. Table B1 in Part B makes this mapping row by row. This is what turns "we built it" and "we tested it" into one argument: Paper 1 supplies the warrants, Paper 2 supplies the backing.
3. **The gap the draft names must be the question the validation answers.** The draft's Limitations say the study "cannot determine whether the resulting storyboards improved" anything, and its Future Research names reviewer agreement, SME trust, designer workload, accessibility quality, production efficiency, and downstream courseware quality. Those are precisely EQ2 to EQ5 in the validation design. The validation paper should open by quoting that gap.

### A3. One paper or two? Recommendation: two linked papers

**Recommendation.** Publish two papers in sequence, framed as Part 1 (development) and Part 2 (validation) of one programme, each cross-referencing the other, with a shared version history and a shared description of the artefact. Revise and submit Paper 1 now, in parallel with ethics approval and instrument piloting for Paper 2. The reasoning follows.

| Criterion | One integrated paper | Two linked papers | Weight of evidence |
|---|---|---|---|
| Length | Draft alone is about 8,000 words of prose after markers are removed; validation adds 6,000 to 8,000 words of method and results, plus tables. Total 14,000 to 16,000 words, beyond most journals' 7,000 to 10,000 limit. | Each paper fits a standard limit with room for tables and a joint display. | Favours two |
| Research questions | Development questions (how was expertise converted) and evaluation questions (does it work for stakeholders) require different designs, different data, and different quality criteria (trustworthiness versus reliability and validity). Mixing them invites the reviewer comment "this is two studies". | Each paper has one coherent design and one set of quality criteria. | Favours two |
| Timing | The validation needs roughly ten weeks of data collection plus analysis; the integrated paper cannot be submitted for five to six months. | Paper 1 can be submitted within four to six weeks once the blocking items in A4 are cleared. | Favours two |
| Author role | The same person developed and evaluates the workflow. In one paper this reads as self-evaluation. | Paper 2 can build in blinding (developer rubric), a second coder, and an independent standards reviewer, and can state the evaluator's role as a limitation without contaminating Paper 1. | Favours two |
| Novelty and contribution | One paper has a stronger single narrative: problem, solution, proof. | Two papers risk a "salami-slicing" reading if the artefact description is repeated at length. Mitigation: Paper 2 describes the artefact in under 600 words and cites Paper 1; the two use non-overlapping data. | Favours one slightly; manageable |
| Journal fit | Long DBR reports are accepted by a few outlets (for example ETR&D development articles, Educational Design Research). | Paper 1 fits qualitative and DBR outlets; Paper 2 fits evaluation and educational-technology outlets. Wider choice. | Favours two |
| Organizational permission | One approval cycle. | Two approval cycles, but the second can be requested with the first. | Neutral |

**When one paper would be the better choice.** Choose the single-paper route (Part E) only if (a) the organization will approve exactly one publication, or (b) the target journal explicitly welcomes full-cycle DBR reports and permits 12,000 words or more, or (c) Paper 1 cannot clear the ethics and consent items in A4 on its own, so that the retrospective artefacts can only be used once a prospective, consented study exists.

**Strengthening Paper 1 without waiting for Paper 2.** The weakest point of Paper 1 in review will be "so what: do the guardrails work?" The cheapest defensible answer is a small content-validity check of the guardrails and control gates by an expert panel (five to eight instructional designers, developers, and SMEs, inside and outside the team), reporting an item-level content validity index (I-CVI) and a scale-level index (S-CVI/Ave) with the usual thresholds (Polit & Beck, 2006). This takes two to three weeks, needs the same consent as Paper 2 and can be run under the same ethics approval, and it doubles as the Input evidence for claim C1 in Paper 2. It is optional; Paper 1 is publishable as a pure development study without it, but it will draw fewer "premature" comments with it.

### A4. What Paper 1 needs to reach a publishable standard

Items are grouped by priority. Blocking items prevent submission; Major items will draw a revise-and-resubmit; Minor items are polish. The manuscript's own coloured markers are treated as the author's checklist and are included.

#### Blocking

- **Ethics, consent, and organizational permission.** Insert the approval or exemption statement, the informed-consent or organizational-permission statement, and confirm that de-identified internal artefacts may be quoted. Without this, Table 1's quotations and the file inventory cannot be published. (Manuscript markers in Practitioner Contributors, Ethics Statement, Declarations.)
- **Remove the change-log layer.** Every coloured [UPDATED FROM ...] paragraph must be merged into the surrounding prose and the colour removed. In several places the same fact is stated three times in three colours (for example 21 version files and 17 modules appear in the Abstract, Practitioner Contributors, Data Sources, Data Collection, Trustworthiness, Finding 1, and Limitations). State each fact once, in the Method.
- **Final coding pass and counts.** The text repeatedly defers exact frequencies "until the final coding pass is completed". A qualitative paper may report counts sparingly, but it cannot promise them. Either complete the pass and report one frequency table (evidence entries by guardrail dimension and by source type) or remove every reference to forthcoming counts.
- **Figures 1 and 2.** Both exist only as captions. Produce the two workflow figures (Phase 1 lightweight retrieval-augmented generation, document analysis, thematic analysis; Phase 2 OPUS review, CRAFT structuring, feedback, guardrail and control-gate refinement). A third figure, the evidence-to-design chain (comment, code, theme, guardrail, control gate), would make Finding 4 legible at a glance.
- **Author metadata and declarations.** Author list, affiliations, corresponding author, ORCID, competing interests, funding, and the exact AI tools used in the workflow and in writing (tool, version, dates).
- **Reference verification.** Verify every DOI and URL. The reference list is otherwise correctly formatted in APA 7 style.

#### Major

- **Design-based research needs its own literature.** The paper calls itself design-based but cites no DBR source. Add the Design-Based Research Collective (2003), Anderson and Shattuck (2012), and McKenney and Reeves (2018), and state which DBR phases the paper covers and which it does not (this also sets up Paper 2).
- **Method transparency for the survey and the review workbook.** The Method describes artefacts but not how the open-ended survey was administered (when, to whom, which questions), how the CRAFT review workbook was completed (by whom, with what instructions), or how the "24 preliminary coded evidence entries across 5 practitioner-experience categories" were produced. Add a short instruments subsection and put the survey questions in an appendix.
- **Trustworthiness of the coding.** State whether a second coder, peer review of codes, or member checking was used. If the analysis was single-coder, say so and frame the analysis as reflexive thematic analysis (Braun & Clarke, 2019, 2021), which does not require inter-coder agreement but does require a reflexivity statement. Add that statement: the author's role in the team, in the prompt development, and in the review.
- **Cut repetition.** The four guardrail dimensions are enumerated in the Abstract, the Introduction, Phase 2, Finding 3, the Discussion, and the Conclusion. Enumerate once in Finding 3 with a table (dimension, components, example evidence, control gates) and refer to it elsewhere. Finding 3 currently duplicates the Phase 2 Method paragraph almost verbatim.
- **Findings need more evidence and less assertion.** Findings 1, 2, and 4 are largely narrative. Add de-identified excerpts (two or three per finding), the frequency table, and a compact matched-pair comparison table for Modules 3, 4, and 13 (screens, minutes, interactions specified, alt-text present, SME items, developer notes, scope change).
- **Title and framing.** "At scale" overstates a single-team study. Consider "Transforming Learning Design in a Team Setting" or "Toward Scalable Learning Design". Keep the bounded-case argument in the Introduction.
- **The Learning Support Centre and the Learning Engineering team appear as both authors and setting.** Decide whether authorship is individual (the text says "the author") or institutional, and make the front matter consistent. Spell "Centre/Center" one way.
- **Literature coverage.** Add cognitive-load and multimedia-learning sources for the third guardrail dimension (Sweller, van Merriënboer, & Paas, 2019; Mayer, 2014), an accessibility standard for the fourth (W3C, 2018, WCAG 2.1), and one or two recent sources on generative AI in instructional design beyond the three cited (for example Kasneci et al., 2023). Keep the list under 35 references.

#### Minor

- Two sentences split across screens read as typos and are highlighted in the reconstruction ("issue that how"; "poor accessibility of readiness"). Fix.
- Keywords: use consistent capitalization; five keywords is right for Elsevier.
- Highlights: Elsevier requires three to five bullet points of at most 85 characters each. The current five are close; shorten "Demonstrated how prompt engineering can become collaborative design work."
- Table 1 note ("Replace or expand these excerpts with the final coded dataset") must be removed once the excerpts are final.
- Use one term for the AI tool throughout ("Microsoft 365 Copilot"), and give the model or version where known.
- The Appendix update log and file inventory are working documents, not manuscript content. Remove before submission; keep as supplementary material only if the organization permits file names to be published (several contain staff first names).

### A5. What Paper 2 needs

Everything in Part C marked as a placeholder. In summary: ethics approval and consent for prospective data; piloted instruments; a reconstructed historical baseline of six to ten storyboards with their review logs; ten weeks of naturalistic use of v3.4 under fidelity logging across at least three projects; questionnaires from designers, developers, and SMEs; interviews with designers and managers; two blinded developer raters; a reproducibility run at the start and the end; the metrics register. Part D lists every item with sample sizes and timing.

### A6. Candidate outlets

Verify aims, scope, article types, and word limits on each journal's site before choosing; limits change.

| Outlet | Fit for Paper 1 (development) | Fit for Paper 2 (validation) | Notes |
|---|---|---|---|
| Computers and Education: Artificial Intelligence (Elsevier) | Good: qualitative studies of AI in educational practice | Good: mixed-methods evaluation with stakeholder data | The draft's "Highlights for Elsevier Submission" suggests this was the intended home; open access fees apply |
| Educational Technology Research and Development (Springer) | Very good: DBR and development articles are a recognized type | Good: evaluation of a designed artefact | Two article tracks (Research, Development); Paper 1 fits Development |
| British Journal of Educational Technology (Wiley) | Good | Good | Strong preference for theoretical contribution; word limit around 6,000 to 8,000 |
| Evaluation and Program Planning (Elsevier) | Weak | Very good: CIPP-based programme evaluation is core scope | Audience is evaluators; educational-technology framing must be explained |
| International Journal of Educational Technology in Higher Education (Springer, open access) | Fair: workplace context must be argued as relevant | Fair | Higher-education focus |
| Performance Improvement Quarterly (Wiley, ISPI) | Good: practitioner instructional-design audience | Good: efficiency and quality outcomes | Smaller readership; practitioner framing |
| Journal of Military Learning (Army University Press, open access) | Good: military training context is native | Good | Lower citation reach; no fees; may suit organizational approval |

## Part B. The programme framework that binds the two papers

### B1. Theory of change across both papers

The programme's claim is a chain: individual prompting produced uneven storyboards (Paper 1, Finding 1); practitioner expertise was made explicit as guardrails and control gates (Paper 1, Findings 2 to 4); those guardrails were encoded in a master prompt and audited for internal consistency (v3.3 audit, v3.4); when used with fidelity, the prompt produces storyboards that designers find usable, developers can build from, SMEs can review in one reading, and managers deliver faster (Paper 2, C2 to C8). Learner outcomes remain outside both papers and are named as the next phase.

### B2. Mapping guardrail dimensions to validation claims

Table B1. How Paper 1's guardrails become Paper 2's claims

| Guardrail dimension (Paper 1) | Control gates it produced | Validation claim (Paper 2) | Stakeholder who supplies the evidence | Instrument |
|---|---|---|---|---|
| Governance and source control | Source hierarchy, no-invention rule, traceability, SME-validation triggers, uncertainty handling, scope-lineage approval | C1 (internally consistent, encodes standards); C4 (reproducible); C6 items on source fidelity and invented content | Standards owner; QA; client SMEs | Independent standards review; reproducibility protocol; SME questionnaire items 4 to 6; comment log by issue type |
| Instructional design and learning architecture | Objective alignment, teach-example-practice sequencing, chunking, assessment alignment, interaction purpose | C5 items on objectives and answer logic; C6 items on objectives and assessment | Developers; client SMEs | Developer rubric items 3 and 8; SME questionnaire items 3, 6, 7 |
| Content quality and cognitive-load management | Sentence length, bullet discipline, narration placement, terminology, scannability | C6 (clear on one reading; fewer corrections) | Client SMEs | SME questionnaire items 1, 2, 8, 9, 10; comment depth coding |
| User experience, accessibility, and production readiness | Multimedia intent, alt text, interaction mechanics, feedback states, developer notes, handoff completeness | C5 (build-ready); part of C7 (rework) | Developers; managers | Developer rubric items 1 to 12; clarification-question log; rework hours |
| All four together, as used by designers | Owner markers, Critical stops, Part P configuration, lead-in procedure | C2 (used as intended); C3 (useful, usable, intention to continue); C8 (transports across projects) | Learning designers | Fidelity log; designer questionnaire; interviews; focus group |

### B3. Shared elements to keep identical in both papers

- The artefact description (name, version, structure in one paragraph, the five-column storyboard table, the owner markers, the Part Q quality table with 37 checks).
- The version history with dates: baseline individual prompts (2026-03); team master prompt and review workbook (2026-03-16); storyboard reviews (2026-03-24 to 31); v3.3 audit and v3.4 rewrite (2026-09); v3.4 as the evaluated version.
- The de-identification rules and the ethics statement.
- The reflexivity statement about the author's role.

## Part C. Manuscript plan for Paper 2 (validation)

@note Everything below is written as manuscript text where the content is already known. Highlighted placeholders mark evidence that does not yet exist. Where a number is a target rather than a result, it is stated as a target.

### Title

Does a Governed Storyboarding Prompt Work for the People Who Use It? A Multi-Stakeholder Mixed-Methods Validation of a Human-in-the-Loop Generative AI Workflow

Alternative: Validating a Human-in-the-Loop Generative AI Storyboarding Workflow: Evidence from Learning Designers, Developers, Managers, and Client Reviewers

### Abstract (structured; target 250 words)

Background. A previous qualitative design-based study converted instructional designers' distributed expertise into four guardrail dimensions and workflow control gates for AI-supported storyboarding [INSERT: citation to Paper 1]. Whether the resulting governed prompt delivers value for the stakeholders downstream had not been tested.

Purpose. This study validated the current version of the workflow (Storyboard Generator Master Prompt v3.4) as a programme, asking whether it is sound in design, used as intended, and better for developers, client reviewers, and managers than the pre-existing practice.

Method. A convergent mixed-methods programme evaluation organized by the CIPP model and an interpretation-and-use argument with eight claims. Over [DATA TO COLLECT: number] weeks, [DATA TO COLLECT: n] learning designers produced [DATA TO COLLECT: n] storyboards across [DATA TO COLLECT: n] projects under fidelity logging; [DATA TO COLLECT: n] developers built from them and two rated blinded samples; [DATA TO COLLECT: n] client SMEs reviewed them; [DATA TO COLLECT: n] managers supplied throughput data. Prompt-generated storyboards were compared with [DATA TO COLLECT: n] matched historical storyboards on quality-check results, clarification questions, review comments, review rounds, rework, and cycle time. Interviews, a focus group, and diaries were analysed thematically and merged with the quantitative strand in a joint display.

Results. [RESULT: one sentence per claim group: fidelity rate; designer acceptability and intention; reproducibility; developer build-readiness and clarification questions; SME clarity and comment change; cycle time and rework; transport across projects; the main negative themes.]

Conclusions. [RESULT: the adopt, revise, or stop decision and the two most important design implications.]

Keywords: human-in-the-loop AI; instructional design; storyboarding; programme evaluation; CIPP; validity argument; mixed methods

### 1. Introduction

Generative AI is now routinely used to draft instructional materials, and the open question for organizations is no longer whether it can produce a storyboard but whether a team can rely on the result. A previous study in this programme [INSERT: Paper 1 citation] documented how one learning design team moved from individual prompting, which produced uneven structure, source coverage, and production readiness, to a governed workflow in which practitioner expertise was made explicit as four guardrail dimensions (governance and source control; instructional design and learning architecture; content quality and cognitive-load management; user experience, accessibility, and production readiness) and operationalized as workflow control gates. That study was a development study. It could not say whether the storyboards produced under the governed workflow were more usable for designers, more buildable for developers, clearer for client reviewers, or faster for the department, and it named those questions as its next step.

This paper answers them. It treats the workflow, now encoded in the Storyboard Generator Master Prompt v3.4, as a programme and evaluates it with the people who bear its consequences: the learning designers who run it, the developers who build from its output, the client subject-matter experts who review that output, and the managers accountable for delivery. The evaluation is framed as a validity argument: each claim the prompt makes for itself is stated with its warrant, the evidence that would support it, the stakeholder who supplies that evidence, and the finding that would defeat it.

The study contributes (a) evidence on whether guardrails derived from practitioner expertise deliver stakeholder-perceived and artefact-measured quality, (b) a reusable evaluation design for AI-supported design tools that integrates multiple stakeholders through one argument rather than a set of separate surveys, and (c) a fidelity-conditioned analysis that separates the tool's effect from the effect of how it was used.

### 2. Background and framework

#### 2.1 The programme being evaluated

[INSERT: 400 to 600 words describing v3.4: CRAFT structure; Parts 0, P, G, C, R, A, F, T, Q, S; the five-column storyboard table; gap decision tree with Critical, Blocking, and Non-blocking gaps; owner markers; the 37-check Part Q table with 6 Blocker, 26 Major, and 5 Minor checks; the lead-in procedure of attaching the prompt file rather than pasting; the version history from the team master prompt through the v3.3 audit to v3.4. Cite Paper 1 for the derivation and the audit report as the Input evaluation.]

#### 2.2 Evaluation framework

The evaluation uses the CIPP model (Stufflebeam & Zhang, 2017) as its architecture. Context asks what failures the workflow set out to remove and what the baseline was; Input asks whether the design is sound; Process asks whether designers use it as intended and how they experience it; Product asks whether the storyboards are better for developers, client SMEs, and managers, including impact, effectiveness, sustainability, and transportability. Inside that architecture, the evaluation questions are organized as an interpretation-and-use argument in Kane's (2013) sense: a chain of claims from the design to its consequences, each with a warrant, evidence, and rebuttals. To make Process and Product measurable, the study borrows the implementation-outcome taxonomy of Proctor et al. (2011): acceptability, appropriateness, feasibility, fidelity, adoption, penetration, sustainability, and cost. Technology-acceptance constructs (Davis, 1989; Venkatesh et al., 2003) supply validated questionnaire items but are not the framework, because they explain adoption rather than output quality. Fidelity of implementation (Carroll et al., 2007) is central: the prompt makes claims only for runs in which the approved file is attached and the lead-in used, so every outcome is reported for all runs and for fidelity-compliant runs.

#### 2.3 Evaluation questions and claims

- EQ1 (Input): Is the prompt a sound design against the standards it claims to encode?
- EQ2 (Process): Do designers use the prompt as intended, and what is their experience, positive and negative, across projects?
- EQ3 (Product, developers): Are prompt-generated storyboards more reliable to build from than the baseline?
- EQ4 (Product, client SMEs): Do client reviewers find prompt-generated storyboards clearer and better, and does their review effort change?
- EQ5 (Product, managers): Does the department deliver faster, with less rework, at equal or better quality?

Table 1. The interpretation and use argument

| Claim | Warrant (from Paper 1 guardrails) | Evidence and instrument | Stakeholder | Success criterion (agreed in advance) | Rebuttal to test |
|---|---|---|---|---|---|
| C1. The prompt is internally consistent and encodes the organization's standards | Governance and source control | v3.3 audit and v3.4 resolution; independent review by a standards owner; optional expert-panel content validity index | Learning Design; standards owner | No open conflict on the ten audit dimensions; I-CVI of 0.78 or higher per gate and S-CVI/Ave of 0.90 or higher if the panel is run | A reviewer finds a rule contradicting the accessibility plan or style guide |
| C2. Designers can use the prompt as intended | All four, as operationalized in the lead-in procedure | Fidelity log per run; practice diary; interviews | Learning designers | 80% or more of logged runs meet all fidelity items; departures explained | Designers routinely paste, edit, or skip configuration |
| C3. Designers find the prompt useful, usable, and worth continuing | Acceptability and adoption | Designer questionnaire (two waves); interviews; focus group | Learning designers | Construct means of 4.0 or higher (5-point) for usefulness and intention; negative themes documented with fixes | Usefulness high but ease of use low, or use depends on one expert |
| C4. Output is reproducible | Governance and source control | Reproducibility protocol: identical inputs run twice, start and end of window | Learning Design; QA | No Blocker or Major Part Q difference between runs; structural agreement of 90% or more | Runs differ in objectives, modes, or answer keys |
| C5. Storyboards are build-ready | UX, accessibility, production readiness; learning architecture | Developer rubric on blinded samples; clarification-question log; rework log | Developers | Clarification questions per storyboard fall by half or more; rubric mean of 4.0 or higher; acceptable rater agreement | Ratings rise but questions do not fall, or move to a new category |
| C6. Storyboards are clearer for client reviewers and need fewer rounds | Content quality and cognitive load; source control; learning architecture | SME questionnaire; comment log by issue type and depth; review rounds to sign-off | Client SMEs | Formatting, accuracy, and instructional-design comments fall against baseline; review rounds fall; one-reading item mean of 4.0 or higher | Comments fall because reviewers read less carefully |
| C7. The department delivers faster with less rework at equal or better quality | All four, through fewer defects reaching later stages | Metrics register: cycle times, review rounds, rework hours, QA pass rate; manager interview | Managers | Median cycle time and rework hours fall against matched baseline; QA pass rate does not fall | Time falls because projects were simpler |
| C8. Gains transport across projects and designers | Sustainability and transportability | Variation in C3, C5, C7 across projects and designers; setup evidence for new projects | All | No project or designer is an outlier explained only by the prompt; new-project setup within one working session | Gains appear only on the project the prompt was written for |

### 3. Method

#### 3.1 Design

A convergent mixed-methods design (Creswell & Plano Clark, 2018) with a quasi-experimental comparison of prompt-generated storyboards against matched historical storyboards, an embedded reproducibility test, and, if resources allow, a counterbalanced crossover task in which two designers each produce a short module with and without the prompt. Quantitative and qualitative strands were collected in parallel, analysed separately, and merged in a joint display organized by the eight claims. The study is descriptive and comparative; with the samples available it does not support population inference, and effect sizes and ranges are reported alongside any test.

#### 3.2 Setting and version under evaluation

[INSERT: the same setting paragraph as Paper 1, shortened to 150 words; the version history; the tool and model in use during the window: DATA TO COLLECT: tool name, model version(s), and any change during the window, recorded per run.]

#### 3.3 Participants

Table 2. Participants

| Group | Inclusion rule | Target n | Achieved n | Characteristics to report |
|---|---|---|---|---|
| Learning designers | Produced at least one storyboard with v3.4 during the window | 5 to 10 | [DATA TO COLLECT: n] | Years in instructional design; prior generative AI use (months); number of study storyboards produced; anonymous ID |
| Developers | Built from at least one study storyboard, or rated blinded samples | 3 to 6 (two as blinded raters) | [DATA TO COLLECT: n] | Years in eLearning development; authoring tool; storyboards built in study |
| Managers | Learning Design lead; production or department manager | 2 to 3 | [DATA TO COLLECT: n] | Role; span of responsibility |
| Client SMEs | Assigned reviewer for a study module | 4 to 10 (1 to 3 per module) | [DATA TO COLLECT: n] | Modules reviewed; prior experience reviewing storyboards from this team |
| Storyboards (prompt-generated) | Produced with v3.4 under fidelity logging | 6 to 10 across 3 or more projects | [DATA TO COLLECT: n; projects; screen counts] | Project; module type; screens; interactions; designer ID |
| Storyboards (historical baseline) | Produced before the governed workflow; matched on module type, screen count, interaction density | Equal to prompt-generated | [DATA TO COLLECT: n; matching table] | Same fields plus review logs available (yes/no) |

Recruitment, consent, and de-identification: [DATA TO COLLECT: ethics approval or exemption reference; consent procedure per group; how client SME participation was covered under the client review agreement].

#### 3.4 Instruments and measures

Artefact measures were recorded once per storyboard in a metrics register: Part Q result at first QA (Blocker, Major, Minor counts; pass rate over the 37 checks); Blocking owner markers reaching Development by marker type; developer clarification questions by category (content, component, answer logic, asset, accessibility, format); client review comments by issue type (content addition, accuracy, instructional design, narration, assessment, accessibility, SME decision, formatting) and by depth (surface, substantive); review rounds to sign-off; rework hours after first handoff, by Learning Design and Development; cycle time from intake complete to Developer Ready and to client sign-off; and, for the reproducibility test, Part Q differences and structural and content agreement between two identical runs.

Perception measures: the learning designer questionnaire (five constructs: perceived usefulness, ease of use, output quality, trust and reliability, intention and workload; 5-point agreement scale; two waves) adapted from technology-acceptance items; the developer build-readiness rubric (8 pass/fail items and 4 scaled items) completed blinded to origin; the client reviewer questionnaire (10 scaled items and 2 open items) completed after each review; semi-structured interview guides for designers and managers; a designer focus group at mid-point; and practice diaries. Fidelity measures per run: file attached rather than pasted; Part P configuration completed; lead-in used verbatim; Critical stops answered rather than worked around; gap markers routed to owners; internal artefacts requested only for review.

Instrument development and piloting: [DATA TO COLLECT: pilot with two designers and one developer; item changes made; Cronbach's alpha per construct from wave 1 (report items individually where alpha is below 0.70)]. Full instruments are in the supplementary material [INSERT: from the Validation Study Design, Appendices A to F].

#### 3.5 Procedure

Table 3. Procedure and timeline

| Phase | Weeks | Activity | Output | Status |
|---|---|---|---|---|
| 0. Input evaluation | done | v3.3 audit (22 conflicts, 10 broken references); v3.4 rewrite; independent standards review | Evidence for C1 | Audit and rewrite complete; [DATA TO COLLECT: independent standards review sign-off; optional expert-panel CVI] |
| 1. Instruments and baseline | 1 to 3 | Pilot questionnaires; reconstruct baseline from 6 to 10 historical storyboards and review logs; agree decision rules with managers | Piloted instruments; baseline data set; signed decision rules | [DATA TO COLLECT: dates; baseline storyboard list; signed decision-rule record] |
| 2. Data collection | 4 to 13 | Designers produce study storyboards under fidelity logging; developers build and log; SMEs review and answer; reproducibility test on two modules at start and end; mid-point focus group | Complete data set | [DATA TO COLLECT: as in Part D] |
| 3. Analysis | 14 to 16 | Quantitative comparison; thematic analysis; rater agreement; joint display by claim | Findings by claim | [TO BE COMPLETED] |
| 4. Reporting and decision | 17 to 18 | Report; manager decision (adopt, revise to v3.5, stop); negative themes to the revision backlog | Decision record; v3.5 backlog | [TO BE COMPLETED] |

#### 3.6 Analysis

Quantitative. For each artefact and project measure, baseline and prompt-generated medians and ranges; Wilcoxon signed-rank tests for matched pairs and Mann–Whitney U for independent groups; effect sizes as Cliff's delta or rank-biserial correlation. Questionnaires: item and construct means, standard deviations, and internal consistency. Rater reliability: Cohen's kappa for pass/fail rubric items and an intraclass correlation coefficient for scaled items across the two blinded developers, with disagreements resolved by discussion and reported before and after resolution. Every Product result is reported twice, for all runs and for fidelity-compliant runs.

Qualitative. Reflexive thematic analysis (Braun & Clarke, 2006, 2019) of interviews, focus group, diaries, and open questionnaire items, starting from a codebook seeded with the four CIPP components and the eight implementation outcomes and extended with open codes. A second coder codes 25% of the material; agreement is discussed rather than computed, following reflexive practice, but the codebook and its evolution are reported. Member checking with two designers and one developer.

Integration. A joint display with one row per claim: the quantitative result, the qualitative themes, whether they converge, diverge, or expand each other, and the resulting judgement against the pre-agreed criterion.

#### 3.7 Trustworthiness, validity threats, and the evaluator's role

[INSERT: the threats-and-mitigations table from the validation design (novelty and Hawthorne effects; project difficulty; rater bias; model drift; self-report bias; small samples; comments falling for the wrong reason; fidelity failures), each with its mitigation and, after the study, DATA TO COLLECT: what actually happened, for example the number of model version changes recorded.] The evaluator also developed the workflow. This is disclosed, and the design responds to it with blinded developer ratings, an independent standards reviewer for C1, a second coder, pre-registered success criteria and decision rules signed by managers before data collection, and a reflexivity statement [INSERT: 150 words].

#### 3.8 Ethics

[DATA TO COLLECT: approval or exemption body, date, reference; consent forms per group; anonymity of designer questionnaire; handling of client materials within the approved environment; data retention].

### 4. Results

Results are reported by claim, in the order of Table 1, and then integrated in Section 4.9. Each subsection has a fixed structure: quantitative result, qualitative evidence, judgement against the criterion.

#### 4.1 Sample and fidelity (C2)

Table 4. Study storyboards and fidelity

| Measure | All runs | Fidelity-compliant runs |
|---|---|---|
| Storyboards produced (projects; designers) | [DATA: n (p; d)] | [DATA: n] |
| Runs meeting all six fidelity items, n (%) | [DATA] | 100% by definition |
| Most common fidelity departure and reason | [DATA: from log and diary] | not applicable |
| Screens per storyboard, median (range) | [DATA] | [DATA] |
| Tool and model versions recorded (n changes) | [DATA] | [DATA] |

Qualitative evidence on use as intended: [DATA TO COLLECT: designer interview and diary themes on Part P setup effort, Critical stops, marker routing; two or three excerpts]. Judgement: [RESULT: C2 met, partly met, or not met against the 80% criterion].

#### 4.2 Input soundness (C1)

The v3.3 audit identified 22 rule conflicts and 10 broken cross-references; v3.4 resolved them by giving each rule one home and moving every project-specific value into a configuration part [INSERT: two-sentence summary with the audit report cited]. Independent standards review of v3.4: [DATA TO COLLECT: reviewer role; dimensions checked; open conflicts found; resolution]. Expert-panel content validity, if run: [DATA TO COLLECT: panel n and roles; I-CVI per control gate; S-CVI/Ave; gates below threshold and revisions]. Judgement: [RESULT].

#### 4.3 Designer experience (C3)

Table 5. Learning designer questionnaire, by construct and wave

| Construct (items) | Wave 1 mean (SD), n | Wave 2 mean (SD), n | Alpha | Criterion met |
|---|---|---|---|---|
| Perceived usefulness (5) | [DATA] | [DATA] | [DATA] | [RESULT] |
| Ease of use (4) | [DATA] | [DATA] | [DATA] | [RESULT] |
| Output quality (5) | [DATA] | [DATA] | [DATA] | [RESULT] |
| Trust and reliability (items per instrument) | [DATA] | [DATA] | [DATA] | [RESULT] |
| Intention and workload (items per instrument) | [DATA] | [DATA] | [DATA] | [RESULT] |

Positive themes: [DATA TO COLLECT: themes with excerpt; expected candidates from Paper 1 include gap detection before handoff, consistency across designers, and reduced formatting labour]. Negative themes: [DATA TO COLLECT: themes with excerpt; expected candidates include configuration burden, over-stopping on Critical questions, loss of creative control, and trust calibration]. Table 6 lists each negative theme with the proposed fix and its destination (prompt revision, training, workflow, or out of scope). Judgement: [RESULT].

#### 4.4 Reproducibility (C4)

Table 7. Reproducibility test, two modules, start and end of window

| Module (type) | Run pair | Structural agreement (slides matching title, mode, pattern) | Content agreement (answer keys and correct results) | Part Q divergences: Blocker / Major / Minor | Classification of differences |
|---|---|---|---|---|---|
| [DATA: module A, procedure-heavy] | Start | [DATA] | [DATA] | [DATA] | [DATA: cosmetic / acceptable / unacceptable counts] |
| [DATA: module A] | End | [DATA] | [DATA] | [DATA] | [DATA] |
| [DATA: module B, decision-heavy] | Start | [DATA] | [DATA] | [DATA] | [DATA] |
| [DATA: module B] | End | [DATA] | [DATA] | [DATA] | [DATA] |

Judgement: [RESULT: against the criterion of no Blocker or Major divergence and 90% structural agreement; note any model-version change between start and end].

#### 4.5 Build-readiness for developers (C5)

Table 8. Developer measures, baseline versus prompt-generated storyboards

| Measure | Baseline, median (range), n | Prompt-generated, all runs | Prompt-generated, fidelity-compliant | Test, effect size |
|---|---|---|---|---|
| Rubric pass/fail items passed (of 8) | [DATA] | [DATA] | [DATA] | [DATA] |
| Rubric scaled items mean (of 5) | [DATA] | [DATA] | [DATA] | [DATA] |
| Clarification questions per storyboard | [DATA] | [DATA] | [DATA] | [DATA] |
| Clarification questions by category (content, component, answer logic, asset, accessibility, format) | [DATA] | [DATA] | [DATA] | descriptive |
| Development rework hours after first build | [DATA] | [DATA] | [DATA] | [DATA] |
| Rater agreement (kappa; ICC), blinded sample n | [DATA] | | | |

Developer interview and questionnaire themes: [DATA TO COLLECT: what still needed asking; whether questions moved category; component naming]. Judgement: [RESULT].

#### 4.6 Clarity and review effort for client SMEs (C6)

Table 9. Client review measures, baseline versus prompt-generated

| Measure | Baseline | Prompt-generated (all; fidelity-compliant) | Test, effect size |
|---|---|---|---|
| Review comments per storyboard, total | [DATA] | [DATA] | [DATA] |
| Comments by issue type (eight types) | [DATA] | [DATA] | descriptive |
| Comment depth: substantive share (%) | [DATA] | [DATA] | [DATA] |
| Review rounds to sign-off | [DATA] | [DATA] | [DATA] |
| SME questionnaire: one-reading comprehension (items 1, 2) mean | not available for baseline | [DATA] | criterion 4.0 |
| SME questionnaire: fidelity to sources and no invented content (items 4, 5) | not available | [DATA] | criterion 4.0 |
| SME questionnaire: fewer corrections than before; less effort (items 9, 10) | not available | [DATA] | criterion 4.0 |

Open-item themes: what SMEs corrected most often; what was better or worse than earlier storyboards [DATA TO COLLECT]. Check of the rebuttal: comment depth and the direct question on reading effort [RESULT]. Judgement: [RESULT].

#### 4.7 Throughput and rework for managers (C7)

Table 10. Project-level measures, matched baseline projects versus study projects

| Measure | Baseline projects, median (range), n | Study projects | Test, effect size |
|---|---|---|---|
| Intake complete to Developer Ready (working days) | [DATA] | [DATA] | [DATA] |
| Intake complete to client sign-off (working days) | [DATA] | [DATA] | [DATA] |
| Review rounds | [DATA] | [DATA] | [DATA] |
| Rework hours, Learning Design | [DATA] | [DATA] | [DATA] |
| Rework hours, Development | [DATA] | [DATA] | [DATA] |
| Part Q pass rate at first QA (%) | [DATA: may be unavailable for baseline; if so, rate baseline retrospectively with the 37 checks] | [DATA] | [DATA] |
| Difficulty rating, designer and developer (1 to 5) | [DATA] | [DATA] | matching check |

Manager interview themes: [DATA TO COLLECT: value perceived, risks, conditions for adoption, cost of configuration and training]. Judgement: [RESULT].

#### 4.8 Transport across projects and designers (C8)

[DATA TO COLLECT: C3, C5, and C7 results broken down by project and by designer; setup time for each new project's Part P configuration; interview evidence on what had to change per project]. Judgement: [RESULT].

#### 4.9 Integration: the joint display

Table 11. Joint display by claim

| Claim | Quantitative result | Qualitative themes | Relationship (converge, diverge, expand) | Judgement against criterion |
|---|---|---|---|---|
| C1 | [RESULT] | [RESULT] | [RESULT] | [RESULT] |
| C2 | [RESULT] | [RESULT] | [RESULT] | [RESULT] |
| C3 | [RESULT] | [RESULT] | [RESULT] | [RESULT] |
| C4 | [RESULT] | [RESULT] | [RESULT] | [RESULT] |
| C5 | [RESULT] | [RESULT] | [RESULT] | [RESULT] |
| C6 | [RESULT] | [RESULT] | [RESULT] | [RESULT] |
| C7 | [RESULT] | [RESULT] | [RESULT] | [RESULT] |
| C8 | [RESULT] | [RESULT] | [RESULT] | [RESULT] |

Decision reached under the pre-agreed rules: [RESULT: adopt as standard practice; revise to v3.5 and re-evaluate the changed parts; or stop or redesign, with the rule that triggered it].

### 5. Discussion

#### 5.1 Did the guardrails deliver what they promised?

[TO BE COMPLETED: for each of the four guardrail dimensions from Paper 1, state which claims supported it, which did not, and what that says about the evidence-to-design chain. Expected structure: source control and reproducibility (C1, C4, C6 fidelity items); learning architecture (C5, C6 objective and assessment items); cognitive load and clarity (C6); production readiness (C5, C7).]

#### 5.2 Positive and negative experience: what the designers said

[TO BE COMPLETED: the balance of themes; the conditions under which the prompt helped and hindered; the AI-literacy question raised in Paper 1's Introduction, namely whether designers with different levels of AI literacy could participate equally.]

#### 5.3 Reliability for developers and value for clients

[TO BE COMPLETED: whether clarification questions fell or moved; whether client comments fell for the right reason; what the comment-type shift says about which control gates work.]

#### 5.4 Efficiency and the manager's decision

[TO BE COMPLETED: cycle time and rework against the matching check; the decision taken; the cost side, including configuration and training time.]

#### 5.5 Implications for evaluating AI-supported design tools

The argument-based structure allowed four stakeholder groups to be treated as witnesses to different links in one chain rather than as four separate surveys. Fidelity conditioning separated the tool from its use. [TO BE COMPLETED: what generalizes to other AI-supported instructional design tools and to other organizations; relation to responsible-AI guidance on validity, reliability, and human oversight (NIST, 2023; Miao & Holmes, 2023).]

#### 5.6 Limitations

Single organization; small, non-random samples; historical rather than concurrent baseline; the evaluator's dual role; model drift during the window [DATA TO COLLECT: number of version changes]; learner outcomes not measured; client SME data limited by review agreements; [TO BE COMPLETED: any departure from the plan].

#### 5.7 Future research

Learner-outcome study on modules produced under the workflow; controlled comparison of individual, standardized, and governed prompting with source package, module scope, and model version held constant (the study Paper 1 called for); replication in a non-military design team; longitudinal sustainability after the study window.

### 6. Conclusion

[TO BE COMPLETED: three sentences: what was validated, what was not, and what the organization decided.]

### Declarations

Generative AI in the workflow and in writing: [INSERT: tools, versions, dates, tasks; human verification statement]. Ethics: [DATA TO COLLECT]. Consent: [DATA TO COLLECT]. Competing interests: [INSERT]. Funding: [INSERT]. Data availability: the questionnaire data, codebook, metrics register template, and reproducibility protocol are available [INSERT: repository or "on request"]; storyboards and client materials are not available because they contain internal and client information.

### References for Paper 2 (verify every entry before use)

@ref Braun, V., & Clarke, V. (2006). Using thematic analysis in psychology. Qualitative Research in Psychology, 3(2), 77–101.

@ref Braun, V., & Clarke, V. (2019). Reflecting on reflexive thematic analysis. Qualitative Research in Sport, Exercise and Health, 11(4), 589–597.

@ref Carroll, C., Patterson, M., Wood, S., Booth, A., Rick, J., & Balain, S. (2007). A conceptual framework for implementation fidelity. Implementation Science, 2, 40.

@ref Creswell, J. W., & Plano Clark, V. L. (2018). Designing and conducting mixed methods research (3rd ed.). Sage.

@ref Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. MIS Quarterly, 13(3), 319–340.

@ref Kane, M. T. (2013). Validating the interpretations and uses of test scores. Journal of Educational Measurement, 50(1), 1–73.

@ref McKenney, S., & Reeves, T. C. (2018). Conducting educational design research (2nd ed.). Routledge.

@ref Miao, F., & Holmes, W. (2023). Guidance for generative AI in education and research. UNESCO.

@ref National Institute of Standards and Technology. (2023). Artificial Intelligence Risk Management Framework (AI RMF 1.0) (NIST AI 100-1). U.S. Department of Commerce.

@ref Patton, M. Q. (2008). Utilization-focused evaluation (4th ed.). Sage.

@ref Polit, D. F., & Beck, C. T. (2006). The content validity index: Are you sure you know what's being reported? Critique and recommendations. Research in Nursing & Health, 29(5), 489–497.

@ref Proctor, E., Silmere, H., Raghavan, R., Hovmand, P., Aarons, G., Bunger, A., Griffey, R., & Hensley, M. (2011). Outcomes for implementation research: Conceptual distinctions, measurement challenges, and research agenda. Administration and Policy in Mental Health and Mental Health Services Research, 38(2), 65–76.

@ref Stufflebeam, D. L., & Zhang, G. (2017). The CIPP evaluation model: How to evaluate for improvement and accountability. Guilford Press.

@ref Venable, J., Pries-Heje, J., & Baskerville, R. (2016). FEDS: A framework for evaluation in design science research. European Journal of Information Systems, 25(1), 77–89.

@ref Venkatesh, V., Morris, M. G., Davis, G. B., & Davis, F. D. (2003). User acceptance of information technology: Toward a unified view. MIS Quarterly, 27(3), 425–478.

Additional references recommended for Paper 1 (verify before use): Anderson, T., & Shattuck, J. (2012). Design-based research: A decade of progress in education research? Educational Researcher, 41(1), 16–25. Design-Based Research Collective. (2003). Design-based research: An emerging paradigm for educational inquiry. Educational Researcher, 32(1), 5–8. Braun, V., & Clarke, V. (2021). One size fits all? What counts as quality practice in (reflexive) thematic analysis? Qualitative Research in Psychology, 18(3), 328–352. Kasneci, E., et al. (2023). ChatGPT for good? On opportunities and challenges of large language models for education. Learning and Individual Differences, 103, 102274. Mayer, R. E. (Ed.). (2014). The Cambridge handbook of multimedia learning (2nd ed.). Cambridge University Press. Sweller, J., van Merriënboer, J. J. G., & Paas, F. (2019). Cognitive architecture and instructional design: 20 years later. Educational Psychology Review, 31(2), 261–292. W3C. (2018). Web Content Accessibility Guidelines (WCAG) 2.1.

## Part D. Data-collection register: what to collect, from whom, how, and where it lands

Each row is one data element. The last column names the manuscript location it fills, so the register doubles as a checklist for clearing placeholders. Instruments A to F are those in the Validation Study Design (A designer questionnaire; B interview guides; C developer rubric; D client reviewer questionnaire; E metrics and fidelity sheet; F reproducibility protocol).

Table D1. Register

| ID | Data element | Source (stakeholder or artefact) | Instrument or record | When | Target quantity | Analysis | Fills |
|---|---|---|---|---|---|---|---|
| D01 | Ethics approval or exemption; consent forms per group; client review-agreement coverage | Organization; ethics body | Approval letter; consent forms | Before week 1 | 1 approval; consent from every participant | none | 3.3, 3.8, Declarations |
| D02 | Decision rules and success criteria signed by managers | Managers | Decision-rule record (Section 6 of the design) | Week 1 | 1 signed record | none | 2.3, 3.5, 4.9 |
| D03 | Independent standards review of v3.4 | Standards owner (not the developer of the prompt) | Audit criteria checklist (ten dimensions) | Weeks 1 to 2 | 1 review | Count of open conflicts | 4.2 (C1) |
| D04 | Optional expert-panel content validity of control gates | 5 to 8 experts (designers, developers, SMEs) | 4-point relevance rating per gate | Weeks 1 to 3 | 1 rating per expert per gate | I-CVI, S-CVI/Ave | 4.2 (C1); Paper 1 strengthening |
| D05 | Pilot of instruments A, C, D | 2 designers, 1 developer | Instruments A, C, D with think-aloud | Weeks 1 to 2 | 3 pilots | Item revision log; wave-1 alpha later | 3.4 |
| D06 | Historical baseline storyboards and their review logs | Project archive | Metrics sheet E per storyboard (baseline fields) | Weeks 1 to 3 | 6 to 10, matched on module type, screens, interaction density | Matching table; retrospective Part Q rating | 3.3, Tables 8 to 10 |
| D07 | Baseline review comments coded by type and depth | Archive: reviewer comment logs, tracked changes | Coding sheet (8 issue types; surface/substantive) | Weeks 2 to 3 | All comments on D06 storyboards | Counts per storyboard; depth share | Table 9 (C6) |
| D08 | Baseline cycle time, review rounds, rework hours | Project records; managers | Metrics sheet E project fields | Weeks 2 to 3 | For each D06 project | Medians, ranges | Table 10 (C7) |
| D09 | Study storyboards produced with v3.4 | Designers | Storyboard file plus metrics sheet E | Weeks 4 to 13 | 6 to 10 across 3 or more projects | Unit of analysis for C4 to C7 | Table 4; all Product tables |
| D10 | Fidelity log per run (six items) plus tool and model version | Designers | Sheet E fidelity block | Every run | 1 per run | Compliance rate; conditioning variable | Table 4 (C2); every Product table |
| D11 | Part Q result at first QA for every study storyboard | QA reviewer | 37-check table: Blocker, Major, Minor | Per storyboard | 1 per storyboard | Pass rate; failures by severity | Tables 4, 10 |
| D12 | Blocking owner markers reaching Development, by marker type | Developers or QA | Sheet E | Per storyboard | 1 count set per storyboard | Counts by marker | 4.5 (C5) |
| D13 | Designer questionnaire, wave 1 | Designers, after their second study storyboard | Instrument A (anonymous) | Weeks 6 to 9 | Every designer (5 to 10) | Construct means, SD, alpha | Table 5 (C3) |
| D14 | Designer questionnaire, wave 2 | Designers | Instrument A | Week 13 | Every designer | As D13; change wave 1 to 2 | Table 5 (C3) |
| D15 | Designer practice diaries | Designers | Short template per run: what stopped you, what you overrode, time spent in Part P | Every run | 1 entry per run | Thematic analysis | 4.1, 4.3 |
| D16 | Designer interviews | Designers | Guide B (designer) | Weeks 10 to 13 | 5 to 8 interviews, 30 to 45 minutes | Reflexive thematic analysis | 4.3, 4.8 |
| D17 | Designer focus group | Designers | Guide B (focus group) | Week 8 | 1 session | Thematic analysis | 4.3 |
| D18 | Developer rubric on blinded samples | 2 developer raters | Instrument C, origin stripped | Weeks 8 to 14 | All D06 and D09 storyboards, both raters | Kappa; ICC; medians | Table 8 (C5) |
| D19 | Developer clarification questions and rework hours | Developers who build study storyboards | Sheet E developer block or build log | Per storyboard built | 1 record per storyboard | Counts by category; hours | Table 8 (C5) |
| D20 | Developer questionnaire and short interview | Developers | Instrument C questionnaire items; Guide B (developer) | Weeks 10 to 14 | 3 to 6 | Descriptives; themes | 4.5 |
| D21 | Client SME questionnaire | Client SMEs, after each review | Instrument D | Per review | 1 per SME per module reviewed | Item means; open-item themes | Table 9 (C6) |
| D22 | Client review comments on study storyboards, coded | Reviewer comment logs | Coding sheet as D07 | Per review | All comments | Counts; depth share; comparison to D07 | Table 9 (C6) |
| D23 | Review rounds to sign-off, study modules | Project records | Sheet E | Per module | 1 per module | Comparison to D08 | Tables 9, 10 |
| D24 | Study cycle times and rework hours | Project records; Learning Design and Development timesheets | Sheet E project fields | Per project | 1 per project | Medians; Wilcoxon or Mann–Whitney; effect size | Table 10 (C7) |
| D25 | Difficulty ratings, designer and developer | Designers; developers | Sheet E (1 to 5) | Per storyboard | 2 per storyboard | Matching check | Table 10 |
| D26 | Reproducibility runs | Learning Design lead or QA | Protocol F, two modules, twice each at start and end | Weeks 4 and 13 | 4 run pairs | Structural and content agreement; Part Q divergences | Table 7 (C4) |
| D27 | Manager interviews with metrics in hand | Managers | Guide B (manager) | Weeks 14 to 15 | 2 to 3 | Thematic analysis | 4.7 |
| D28 | Per-project Part P setup time | Designers | Diary field | First run per project | 1 per project | Descriptive | 4.8 (C8) |
| D29 | Second-coder coding of 25% of qualitative material; member checks | Second coder; 2 designers, 1 developer | Codebook; member-check notes | Weeks 14 to 16 | 25% of transcripts; 3 member checks | Codebook evolution report | 3.6, 3.7 |
| D30 | Decision record after results | Managers | Decision rules applied | Week 17 | 1 record | none | 4.9, Conclusion |

### D2. Minimum viable data set

If resources are cut, the study still stands with D01, D02, D06, D09, D10, D11, D13, D16, D18, D19, D22, D23, D24, and D26. Without D06 to D08 (the baseline) the study becomes descriptive of v3.4 only and claims C5 to C7 must be rewritten as absolute rather than comparative. Without D26 claim C4 must be dropped, which weakens the reliability argument that developers care most about.

### D3. Data that already exists and can be re-used

- The v3.3 audit and the v3.4 rewrite (Input evidence for C1).
- The 21 storyboard-version files from Paper 1 are candidates for the historical baseline in D06, provided their review logs and dates are available and they predate the governed workflow; the three matched pairs (Modules 3, 4, and 13) are especially useful because their scope changes are already documented.
- The 105 embedded reviewer comments from Paper 1 can be coded with the D07 sheet to give the baseline comment-type distribution.
- The prompt-review workbook's four contributors and the six storyboard-comment authors are the natural first participants for D16 and D18.

## Part E. If a single integrated paper is chosen

Use this structure only under the conditions in A3. Word budget for a 12,000-word limit.

| Section | Content | Words |
|---|---|---|
| Introduction | Problem; the programme; three research questions (how the workflow was developed; whether it is used as intended; whether it is better for stakeholders) | 900 |
| Framework | DBR as the overall design; CIPP and the validity argument for the evaluation phase; the guardrail-to-claim mapping (Table B1) | 1,000 |
| Phase 1 and 2: development | Condensed Paper 1: context, data sources, analysis, the four dimensions with one table, the evidence-to-design chain with one figure, matched pairs in one table | 2,800 |
| Phase 3: evaluation method | Participants, instruments, procedure, analysis, trustworthiness (Part C, Sections 3.1 to 3.8, condensed) | 1,800 |
| Phase 3: results | Results by claim, joint display, decision | 2,800 |
| Discussion | Did the guardrails deliver; stakeholder experience; implications; limitations; future research | 1,800 |
| Conclusion, declarations | | 300 |
| Total | | 11,400 |

The costs of this route are that the development phase loses its excerpts, its frequency table, and most of its literature, and that the paper cannot be submitted until Phase 3 is complete.

## Part F. Schedule and immediate actions

Table F1. Combined schedule (weeks from the decision to proceed)

| Weeks | Paper 1 (development) | Paper 2 (validation) |
|---|---|---|
| 0 to 2 | Clear Blocking items in A4: ethics and consent, remove change-log layer, final coding pass, author metadata | Submit ethics application covering both papers; identify standards reviewer and second coder; agree decision rules with managers (D02) |
| 2 to 4 | Produce Figures 1 to 3; add DBR literature; instruments appendix; reflexivity statement; cut repetition; frequency and matched-pair tables | Pilot instruments (D05); reconstruct baseline (D06 to D08); optional expert panel (D04); independent standards review (D03) |
| 4 to 6 | Internal review; reference verification; submit Paper 1 | Start data collection (D09 onward); reproducibility run at start (D26) |
| 6 to 13 | Respond to Paper 1 reviews as they arrive | Data collection continues; wave-1 questionnaire; focus group; interviews begin |
| 13 to 16 | | Wave-2 questionnaire; end reproducibility run; blinded rubric ratings; manager interviews; analysis; second coding; member checks |
| 16 to 20 | | Joint display; decision record; write Results and Discussion into Part C; internal review; submit Paper 2 |

Immediate actions, in order:

1. Decide the authorship model (individual or institutional) and the target outlet for Paper 1; this determines the word limit and the highlights format.
2. Request organizational permission and ethics review for both papers in one application, covering retrospective de-identified artefacts (Paper 1) and prospective questionnaires, interviews, rubric ratings, and metrics (Paper 2).
3. Complete the final coding pass for Paper 1 and produce the frequency table; this is the single largest remaining analytic task and it feeds the baseline for Paper 2.
4. Name the independent standards reviewer, the two blinded developer raters, and the second coder.
5. Sign the decision rules with managers before any Paper 2 data is collected.

@pagebreak

## Appendix. Placeholder conventions used in Part C

- [DATA TO COLLECT: ...] marks evidence that must be gathered during the study; Part D gives its register ID.
- [DATA] inside a table cell marks a value that comes from the register after analysis.
- [RESULT: ...] marks a judgement or sentence that can only be written after analysis.
- [TO BE COMPLETED: ...] marks a section whose structure is fixed but whose content depends on results.
- [INSERT: ...] marks material that already exists (in Paper 1, in the audit, or in the Validation Study Design) and needs to be pasted or condensed.

Searching the document for "[" followed by any of these words finds every open item.
