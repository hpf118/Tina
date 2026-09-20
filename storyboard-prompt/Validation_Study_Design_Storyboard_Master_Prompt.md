# Validation Study Design: the Storyboard Generator Master Prompt as a Program

Version 1.0, 20 September 2026. Companion to Master Prompt v3.4, the v3.3 audit, and the twelve-agent Copilot design.

## 0. What this document is for

It answers one question: how do we show, with evidence that a reader outside the team would accept, that the master prompt does what it is meant to do, for the people it is meant to serve? It proposes a theoretical framework, turns the four stakeholder groups into a single evaluation architecture, and supplies the instruments, the analysis plan, and the success criteria. It is written so that the study can be run inside the department and reported as an internal evaluation or as a practitioner paper.

The stakeholders named in the brief are: learning designers, who use the prompt; developers, who build from its output; managers, who own throughput and quality; and client subject-matter experts (SMEs), who review the storyboards. Each group sees a different part of the program, so each group answers a different evaluation question. The framework below is chosen because it gives every group a defined place rather than treating them as four separate surveys.

## 1. From language-testing validation to program evaluation: what transfers

Language-testing validation asks whether the interpretations and uses of a score are justified. Kane's argument-based approach (Kane, 2013) states the intended interpretation and use as a chain of claims, then gathers evidence for each link: scoring, generalization, extrapolation, and use or decision. Messick's unified view (Messick, 1989) adds consequences: a use is valid only if its consequences are the intended ones. Bachman and Palmer's Assessment Use Argument (Bachman & Palmer, 2010) makes the same chain stakeholder-facing: records, interpretations, decisions, and consequences, each with a beneficiary.

Three things transfer directly to a prompt:

- The object of validation is not the artifact itself but the interpretation and use of what it produces. For the prompt, the "record" is the storyboard, the "interpretation" is "this storyboard is source-faithful, complete, and build-ready", the "decision" is "send it to development and to the client", and the "consequences" are fewer review rounds, fewer developer questions, faster handoff, and better learner-facing content.
- Validity is an argument, not a property. The study therefore states each claim and the evidence that would support or rebut it, rather than asking a single satisfaction question.
- Consequences and stakeholder perception are evidence, not decoration. Whether designers, developers, managers, and SMEs perceive the intended purpose is part of the argument, exactly as test-taker and score-user perceptions are in assessment validation.

Two things do not transfer. There is no test taker and no score, so reliability cannot be a correlation between forms; it becomes reproducibility of output and agreement between raters. And the prompt is a designed artifact embedded in a workflow, so its evaluation needs a program-evaluation architecture that covers the design, the use, and the results, not only the results.

## 2. Recommended framework

### 2.1 Architecture: the CIPP model

The CIPP model (Stufflebeam & Zhang, 2017) evaluates a program through four questions: Context (what needs does it address), Input (is the design sound), Process (is it being used as intended, and how well), and Product (what did it achieve, and for whom). It is the most practical fit for three reasons. It is built for improvement as well as accountability, so it supports the formative loop into v3.5 as well as a summative verdict. It separates the design of the prompt from its use, which matters because a sound prompt used badly and a weak prompt used well produce the same symptoms. And it gives each stakeholder group a natural home, shown in Table 1.

| CIPP component | Evaluation question for the prompt | Primary stakeholders | Status |
|---|---|---|---|
| Context | What failures in storyboard production did the prompt set out to remove, and what was the baseline? | Managers, client SMEs, developers | Baseline to be reconstructed from historical storyboards and review logs |
| Input | Is the prompt internally consistent, aligned to standards, and complete enough to do the job? | Learning Design, standards owners | Largely done: the v3.3 audit and the v3.4 rewrite are the Input evaluation; the study records them as evidence |
| Process | Do designers use the prompt as intended, and what is their experience of using it across projects? | Learning designers | To be studied |
| Product | Are the storyboards better for the people downstream: developers, client SMEs, managers, and ultimately learners? | Developers, client SMEs, managers | To be studied; the summative core |

Stufflebeam divides Product into impact (who was reached), effectiveness (quality of outcomes), sustainability (will it last), and transportability (does it work on other projects). The design below reports all four.

### 2.2 Logic: an interpretation and use argument

Inside the CIPP architecture, the evaluation questions are organized as a validity argument in Kane's sense. Each claim about the prompt is written with its warrant, the evidence that would support it, the stakeholder who supplies that evidence, the instrument, the success criterion, and the rebuttal that would defeat it. This is what makes the four groups "organically" one study: they are witnesses to different links in one chain. Table 3 in Section 4 is that argument.

### 2.3 Stakeholder lens: implementation outcomes

To make the Process and Product questions measurable, the study borrows the implementation-outcome taxonomy from implementation science (Proctor et al., 2011): acceptability, appropriateness, feasibility, fidelity, adoption, penetration, sustainability, and cost. These eight outcomes are the practical vocabulary for "positive and negative experience", "reliable", "faster", and "the client thinks it is better". Fidelity in particular is essential: the prompt only makes claims for storyboards produced by attaching the approved file and following the lead-in; a run where the designer pasted a paraphrase is a different program (Carroll et al., 2007).

### 2.4 Why not the alternatives alone

- Kirkpatrick's four levels (Kirkpatrick & Kirkpatrick, 2016) evaluate training, not a production tool; its levels can be borrowed for the manager's results question but it has no place for design quality or fidelity.
- Technology acceptance models (Davis, 1989; Venkatesh et al., 2003) give validated constructs for the designer questionnaire, perceived usefulness, ease of use, effort and performance expectancy, facilitating conditions, and intention, but they explain adoption, not output quality. They are used here as instrument sources, not as the framework.
- Design science research (Hevner et al., 2004) and its evaluation framework FEDS (Venable et al., 2016) describe the right sequence for an artifact like this: formative, artificial evaluation first (the audit and the rewrite), then summative, naturalistic evaluation in real projects with real users. This study is the naturalistic phase.
- Utilization-focused evaluation (Patton, 2008) supplies the governing rule: the intended users of the evaluation, the department's managers and Learning Design lead, decide the questions and the decision rules in advance.

## 3. Theory of change

| Inputs | Activities | Outputs | Short-term outcomes | Medium-term outcomes | Impact |
|---|---|---|---|---|---|
| Master Prompt v3.4; intake; approved sources; storyboard template; the AI tool; designer time | Designer completes intake and Part P, attaches the prompt file and sources, sends the lead-in, reviews the six blocks, routes gap markers to owners | A storyboard in the locked order with the five-column table, plus internal artifacts on request | Storyboards pass the Part Q checks; fewer Blocking gaps reach Development; developers ask fewer clarification questions; client review comments fall and change type | Fewer review rounds; shorter intake-to-Developer-Ready and intake-to-sign-off times; less rework; consistent quality across designers and projects | Learners receive source-faithful, accessible, well-structured modules; the department delivers faster at the same or higher quality |

The evaluation measures each column. Fidelity measures the Activities column; Part Q scores and marker counts measure Outputs; developer and SME data measure short-term outcomes; manager metrics measure medium-term outcomes. Impact on learners is out of scope for this study and is named as a limitation and a follow-on.

## 4. Evaluation questions and the validity argument

The study asks five evaluation questions (EQ). Table 3 states the claims under each question as an argument.

- EQ1 (Input): Is the prompt a sound design against the standards it claims to encode?
- EQ2 (Process): Do designers use the prompt as intended, and what is their experience, positive and negative, across projects?
- EQ3 (Product, developers): Are prompt-generated storyboards more reliable to build from than the baseline?
- EQ4 (Product, client SMEs): Do client reviewers find prompt-generated storyboards clearer and better, and does their review effort change?
- EQ5 (Product, managers): Does the department deliver faster, with less rework, at equal or better quality?

Table 3. The interpretation and use argument

| Claim | Warrant | Evidence and instrument | Stakeholder | Success criterion | Rebuttal to test |
|---|---|---|---|---|---|
| C1. The prompt is internally consistent and encodes the organization's standards | A design with conflicting rules cannot produce consistent output | The v3.3 audit (22 conflicts, 10 broken references) and the v3.4 resolution; independent review by a standards owner using the audit criteria | Learning Design, standards owner | Reviewer confirms no open conflict on the ten audit dimensions | A reviewer finds a rule that contradicts the accessibility plan or the style guide |
| C2. Designers can use the prompt as intended | Claims about output hold only under fidelity | Fidelity checklist per run (Appendix E): file attached rather than pasted, Part P completed, lead-in used, Critical stops answered, markers routed; practice diary; interview | Learning designers | At least 80% of logged runs meet all fidelity items; departures are explained | Designers routinely paste, edit, or skip Part P because it is too heavy |
| C3. Designers find the prompt useful, usable, and worth continuing | Acceptability and adoption predict sustained use | Questionnaire (Appendix A: usefulness, ease of use, output quality, trust, effort, intention); interviews; focus group | Learning designers | Mean of 4.0 or higher on 5-point usefulness and intention scales; negative themes documented with proposed fixes | Usefulness is high but ease of use is low, or use depends on one expert designer |
| C4. Output is reproducible | A tool whose output changes materially between identical runs cannot carry the reliability claim | Reproducibility protocol (Appendix F): identical inputs run twice; Part Q comparison; structural agreement | Learning Design, QA | No difference on any Blocker or Major Part Q item between runs; structural agreement of 90% or more on slide list and modes | Runs differ in objectives, modes, or answer keys |
| C5. Storyboards are build-ready | The C1 build question in the prompt is the operational definition | Developer rubric (Appendix C) on blinded samples, baseline versus prompt-generated; count of clarification questions per storyboard; rework log | Developers | Clarification questions per storyboard fall by at least half against baseline; rubric mean of 4.0 or higher; inter-rater agreement acceptable | Developers rate them higher but still ask as many questions, or questions move to a new category such as component names |
| C6. Storyboards are clearer for client reviewers and need fewer rounds | Reviewer readability rules target one-reading comprehension | Client SME questionnaire (Appendix D); Reviewer Comment Log analysis by issue type; number of review rounds to sign-off | Client SMEs | Comments of type formatting, accuracy, and instructional-design fall against baseline; review rounds fall; one-reading item mean of 4.0 or higher | Comments fall because reviewers read less carefully, not because clarity rose (check comment depth) |
| C7. The department delivers faster with less rework at equal or better quality | Throughput claims require time and rework data, not perception alone | Metrics sheet (Appendix E): intake to Developer Ready, intake to client sign-off, review rounds, rework hours, QA pass rate; manager interview | Managers | Median cycle time and rework hours fall against matched baseline projects; QA pass rate does not fall | Time falls because projects were simpler; check the matching variables |
| C8. The gains transport across projects and designers | Sustainability and transportability are Product sub-questions | Variation in C3, C5, and C7 across projects and designers; interview evidence on new-project setup through Part P | All | No project or designer is an outlier explained only by the prompt; Part P setup takes one working session | Gains appear only on the project the prompt was written for |

## 5. Study design

### 5.1 Design type

A convergent mixed-methods design (Creswell & Plano Clark, 2018) with a quasi-experimental pre and post comparison. Quantitative artifact metrics and questionnaires are collected in parallel with qualitative interviews and diaries; the two strands are analysed separately, then merged in a joint display organized by the claims in Table 3. The baseline is historical: storyboards produced before the prompt, matched to prompt-generated storyboards on module type, screen count, and interaction density. An embedded reproducibility test (Appendix F) supplies the reliability evidence. An optional crossover task, in which two designers produce a short module with and without the prompt in counterbalanced order, adds a controlled comparison if time allows.

### 5.2 Participants and sampling

- Learning designers: every designer who produces at least one storyboard with the prompt during the study window. Expect five to ten.
- Developers: every developer who builds from at least one study storyboard, plus two developers who rate blinded samples. Expect three to six.
- Managers: the Learning Design lead and the production or department manager. Expect two to three.
- Client SMEs: the reviewers assigned to the study modules. Expect four to ten, one to three per module.
- Storyboards: six to ten prompt-generated storyboards across at least three projects, and an equal number of matched historical storyboards.

With samples this size the study is descriptive and comparative, not inferential in the population sense. Report medians, ranges, and effect sizes; use non-parametric tests (Wilcoxon signed-rank for matched pairs, Mann-Whitney U for independent groups) only to support, never to replace, the descriptive comparison and the qualitative findings.

### 5.3 Units of analysis

Three units, kept distinct in every table: the storyboard (artifact metrics, rubric ratings, comment logs), the project (cycle time, review rounds, rework), and the person (questionnaires, interviews). Every artifact record carries the designer, the project, the run date, the model or tool version, and the prompt version, because model updates are a confound that must be reportable.

### 5.4 Measures

Artifact measures, per storyboard:

- Part Q result: number of Blocker, Major, and Minor failures at first QA; pass rate on the 37 checks.
- Blocking markers reaching Development: count by owner marker type.
- Developer clarification questions: count and category (content, component, answer logic, asset, accessibility, format), taken from the build log or a short form the developer completes per storyboard.
- Client review comments: count and issue type from the Reviewer Comment Log (content addition, accuracy, instructional design, narration, assessment, accessibility, SME decision, formatting); number of review rounds to sign-off.
- Rework: hours logged by Learning Design and Development after the first handoff.
- Cycle time: intake complete to Developer Ready; intake complete to client sign-off.
- Reproducibility: Part Q difference and structural agreement between two identical runs (Appendix F).

Perception measures, per person:

- Learning designer questionnaire (Appendix A), administered after the designer's second prompt-generated storyboard, and once more at the end of the window.
- Developer rubric and questionnaire (Appendix C), per storyboard built.
- Client SME questionnaire (Appendix D), after each review.
- Manager interview (Appendix B), at the end of the window, with the metrics sheet in hand.

Fidelity measures, per run (Appendix E): file attached rather than pasted; Part P completed; lead-in used verbatim; Critical stops answered rather than worked around; gap markers routed to owners; internal artifacts requested only for review.

### 5.5 Procedures and timeline

| Phase | Weeks | Work | Output |
|---|---|---|---|
| 0. Input evaluation | done | v3.3 audit; v3.4 rewrite; independent standards review of v3.4 | Evidence for C1 |
| 1. Instruments and baseline | 1 to 3 | Adapt and pilot the questionnaires with two designers and one developer; reconstruct the baseline from six to ten historical storyboards and their review logs; agree decision rules with managers | Piloted instruments; baseline data set; signed-off decision rules |
| 2. Data collection | 4 to 13 | Designers produce study storyboards under fidelity logging; developers build and log; SMEs review and complete questionnaires; reproducibility test on two modules; mid-point focus group with designers | Complete data set |
| 3. Analysis | 14 to 16 | Quantitative comparison; thematic analysis; rater agreement; joint display by claim | Findings by claim |
| 4. Reporting and decision | 17 to 18 | Report; manager decision (adopt, revise to v3.5, or stop); feed negative themes into the revision backlog | Report; decision record; v3.5 backlog |

### 5.6 Analysis plan

- Quantitative: for each artifact and project measure, report baseline versus prompt medians and ranges, the paired or independent non-parametric test, and an effect size (Cliff's delta or rank-biserial). For questionnaires, report item means, construct means, and internal consistency (Cronbach's alpha, reported per construct; below 0.70 the construct is reported item by item).
- Rater reliability: two developers rate a blinded sample with the rubric; report Cohen's kappa for the pass or fail items and an intraclass correlation for the scale items; resolve disagreements by discussion and report the resolved values.
- Qualitative: reflexive thematic analysis (Braun & Clarke, 2006) of interview and diary text, with a starting codebook drawn from the CIPP components and the eight implementation outcomes and open codes added as they arise; a second coder codes a quarter of the material; member checking with two designers and one developer.
- Integration: a joint display with one row per claim in Table 3, showing the quantitative result, the qualitative themes, whether they converge, diverge, or expand each other, and the resulting judgement on the claim.
- Fidelity conditioning: report every Product result twice, for all runs and for fidelity-compliant runs only, so that a weak result can be attributed to the prompt or to its use.

### 5.7 Threats to validity and mitigations

| Threat | Mitigation |
|---|---|
| Novelty and Hawthorne effects | Collect over at least ten weeks; compare early and late storyboards; include the second questionnaire wave |
| Confounding by project difficulty | Match baseline storyboards on module type, screen count, and interaction density; record difficulty ratings from the designer and the developer |
| Rater bias toward the new method | Blind the developer rubric ratings to the storyboard's origin; strip front matter and formatting cues before rating |
| Model or tool drift during the window | Record tool, model, and prompt version per run; run the reproducibility test at the start and the end |
| Self-report bias in questionnaires | Triangulate every perception claim with an artifact or process measure; guarantee anonymity for the designer questionnaire |
| Small samples | Treat the study as descriptive and comparative; report effect sizes and ranges; state the limitation |
| Reviewer comments falling for the wrong reason | Code comment depth as well as count; ask SMEs directly about reading effort |
| Fidelity failures masking the prompt's effect | Log fidelity per run and condition the analysis on it |

### 5.8 Ethics and data handling

Obtain departmental approval and, where the organization requires it, ethics review. Use written consent for interviews and diaries; make the designer questionnaire anonymous; hold client SME data under the client's review agreement. Store storyboards and logs on the organization's own systems. Do not upload client material to any tool outside the approved environment for the purposes of the study. Report results at the group level; never attribute a rating to an individual in the report.

## 6. Decision rules

Agree these with the managers before data collection, following utilization-focused practice.

- Adopt as standard practice: C2, C4, C5, and C7 meet their criteria, and no Blocker-level negative theme from designers or developers is unresolved.
- Revise to v3.5 and re-evaluate the changed parts: any of C3, C5, C6, or C7 misses its criterion but the qualitative strand identifies a specific, fixable cause in the prompt or the workflow.
- Stop or redesign: C4 fails (output not reproducible) or C5 fails under fidelity-compliant runs (build-ready claim does not hold even when used correctly).

## 7. Reporting

Structure the report in the order a reader of a validity argument expects: purpose and intended use; framework; the program (the prompt and the workflow, with the v3.3 audit summarized as Input evidence); method; results by claim, each with the joint display row; limitations; decision and next steps. Appendices carry the instruments, the codebook, the fidelity log summary, and the reproducibility protocol. For a practitioner paper, the same structure maps onto IMRaD with the framework in the introduction and the claims table as the method's centrepiece.

## Appendix A. Learning designer questionnaire

Five-point scale for every item: 1 strongly disagree, 2 disagree, 3 neither, 4 agree, 5 strongly agree. Items marked R are reverse-scored. Adapted from technology-acceptance constructs (Davis, 1989; Venkatesh et al., 2003) with prompt-specific constructs added; pilot before use.

Perceived usefulness

1. Using the prompt improves the quality of the storyboards I produce.
2. Using the prompt lets me produce a storyboard faster than my previous method.
3. The storyboards the prompt produces need less rework before handoff.
4. The prompt catches gaps in the sources that I would otherwise have found later or not at all.
5. Overall, the prompt is useful in my work.

Ease of use

6. Preparing the intake and Part P for a new project is straightforward.
7. I know what to do when the generator stops with a Critical question.
8. The visible output is easy to check against the sources.
9. (R) I need help from a colleague to use the prompt correctly.

Output quality

10. The objectives in the output read as job tasks the learner performs.
11. The Text Content column can be read and understood on its own.
12. The Interaction cells contain what a developer needs without further explanation.
13. The Multimedia cells describe what the learner should see clearly enough to hand off.
14. Gap markers land on the right owner.

Trust and reliability

15. I trust that the output contains no invented content when the sources are attached.
16. Running the prompt twice on the same inputs gives me materially the same storyboard.
17. I can predict what the output will look like before I run it.
18. (R) I check every cell against the sources because I do not trust the output.

Effort and workload

19. The time I spend reviewing the output is less than the time I used to spend drafting.
20. Routing gap markers to their owners adds acceptable effort.
21. (R) Reading the prompt document itself takes more time than it saves.

Fidelity of use

22. I attach the approved prompt file rather than pasting or paraphrasing it.
23. I complete Part P before the first run on a new project.
24. When the generator asks a Critical question, I answer it rather than working around it.
25. I request internal artifacts only when I want to review them.

Continued use

26. I intend to use the prompt on my next project.
27. I would recommend the prompt to a new designer joining the team.
28. I would object if the prompt were withdrawn.

Open questions

29. What has been the most positive effect of the prompt on your work? Give one concrete example.
30. What has been the most negative effect, or the biggest frustration? Give one concrete example.
31. On which project or module type did the prompt work best, and on which worst? Why?
32. What one change to the prompt or the workflow would help you most?

## Appendix B. Interview guides

Semi-structured, 30 to 45 minutes, recorded with consent. Probe every answer for a concrete example.

Learning designers

- Walk me through your last storyboard with the prompt, from intake to handoff. Where did it save time? Where did it cost time?
- How did you set up Part P for that project? What was missing or unclear?
- Tell me about a time the generator stopped with a Critical question. What did you do?
- Tell me about a gap marker that reached Development or the client. Was it the right owner?
- Which parts of the output do you always check, and why?
- What do you do differently across projects? Are there project types where the prompt fits badly?
- If you could change one rule in the prompt, which one?

Developers

- Compare a storyboard built from the prompt with one from before. What did you have to ask about, and what did you not have to ask about?
- Which cells did you copy directly into the tool, and which did you have to interpret?
- How did the plain-pair answers and the fixed feedback wording affect the build?
- Where did you find Development-owned behaviour written into rows, or missing when it was needed as an exception?
- Did the accessibility direction at slide level tell you what you needed, or too much or too little?
- What would make a storyboard from this prompt unbuildable?

Managers

- Looking at the metrics sheet, which numbers moved, and do you believe them? What else changed at the same time?
- Has the number of review rounds or rework hours changed on the study projects?
- How consistent is quality across designers now, compared with before?
- What did the prompt cost to introduce, and what would it cost to maintain?
- Would you adopt it as standard practice, revise it, or stop? What evidence would change your mind?

Client SMEs

- When you reviewed this storyboard, could you understand each row on one reading? Where did you have to decode something?
- What kinds of comments did you make, and how does that compare with earlier storyboards from this team?
- Did the answer keys and feedback read as accurate and complete? Where did you have to correct them?
- Did anything in the storyboard look invented or unsupported?
- Was the review quicker, slower, or the same? Why?

## Appendix C. Developer build-readiness rubric

Rate each storyboard, blinded to its origin. Items 1 to 8 are pass or fail; items 9 to 12 are on the five-point scale. Derived from the prompt's build question and Part Q.

1. Every slide has a title that matches the Heading 1 in Text Content.
2. Every interactive slide names a component I can build, or carries a [DEVELOPER TO ADVISE] marker.
3. Every practice or assessment item has a stem, options or items, a correct result in plain pairs, and its feedback states.
4. No row restates a Developer Notes convention or Development-owned behaviour, except as a labelled exception.
5. Every Multimedia cell has Layout/Visual, Asset/Request where needed, and Alt Text, and asserts no asset I could not locate.
6. Every gap in the storyboard carries an owner marker; none says "TBD" or "developer to determine".
7. Nothing in Text Content, Multimedia, or Interaction is a note to the designer, a source citation, or QA residue.
8. I could build every slide without asking the designer a question. If not, list the questions.
9. Objects were on separate lines and could be counted and copied without re-segmenting.
10. Slide-specific accessibility direction was present where needed and absent where the standard covers it.
11. The storyboard was consistent from slide to slide in terminology and structure.
12. Overall, this storyboard was build-ready.

Record: number of clarification questions asked, by category; rework hours after first build; build time if tracked.

## Appendix D. Client reviewer questionnaire

Five-point scale as in Appendix A, completed after the review.

1. I could understand what the learner sees on each slide from the storyboard alone.
2. I could understand what the learner does on each slide, and why, on one reading.
3. The learning objectives describe tasks the learner performs on the job.
4. The content was faithful to the source documents I know.
5. Nothing in the storyboard looked invented or unsupported.
6. The practice and assessment items tested the right things, and the answer keys were correct.
7. The feedback wording was clear and consistent.
8. Terminology and acronyms were used correctly and defined where needed.
9. The storyboard needed fewer corrections than storyboards I have reviewed before from this team.
10. The review took less effort than I expected for a module of this size.
11. What did you have to correct most often? (open)
12. What was better or worse than earlier storyboards? (open)

## Appendix E. Per-storyboard metrics and fidelity sheet

Record one sheet per storyboard; the Learning Design lead keeps them in the study register.

| Field | Value |
|---|---|
| Storyboard ID; project; module; designer; screen count; interaction count | |
| Baseline or prompt-generated; prompt version; tool and model version; run date | |
| Fidelity: file attached (Y/N); Part P completed (Y/N); lead-in verbatim (Y/N); Critical stops answered (count, Y/N); markers routed (Y/N); internal artifacts requested only for review (Y/N) | |
| Part Q at first QA: Blocker, Major, Minor counts; pass rate | |
| Blocking markers reaching Development, by marker type | |
| Developer clarification questions, by category | |
| Rework hours: Learning Design; Development | |
| Client review: comments by issue type; review rounds to sign-off | |
| Cycle time: intake complete to Developer Ready; intake complete to sign-off | |
| Difficulty rating, designer and developer (1 to 5) | |
| Notes | |

## Appendix F. Reproducibility protocol

1. Choose two modules of different types, one procedure-heavy and one decision-heavy.
2. For each, run the prompt twice on identical inputs, in separate sessions, on the same day, with the same tool and model version recorded.
3. Compare the two outputs on: the Learning Objectives table (identical wording or not); the slide list (number, order, titles, Modes); every answer key and correct result; the feedback states; the Multimedia schema lines; Part Q results at first QA.
4. Score structural agreement as the proportion of slides whose title, Mode, and pattern match; score content agreement as the proportion of answer keys and correct results that match exactly.
5. Record every difference, classify it as cosmetic, substantive but acceptable, or substantive and unacceptable (any Blocker or Major Part Q divergence), and report the classification.
6. Repeat once at the end of the data-collection window to detect model drift.

## Appendix G. Suggested references

Author and year are given for retrieval; confirm publication details before citing.

- Bachman, L. F., and Palmer, A. S. (2010). Language Assessment in Practice. Oxford University Press.
- Braun, V., and Clarke, V. (2006). Using thematic analysis in psychology. Qualitative Research in Psychology, 3(2).
- Carroll, C., Patterson, M., Wood, S., Booth, A., Rick, J., and Balain, S. (2007). A conceptual framework for implementation fidelity. Implementation Science, 2(40).
- Creswell, J. W., and Plano Clark, V. L. (2018). Designing and Conducting Mixed Methods Research, 3rd edition. Sage.
- Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. MIS Quarterly, 13(3).
- Hevner, A. R., March, S. T., Park, J., and Ram, S. (2004). Design science in information systems research. MIS Quarterly, 28(1).
- Kane, M. T. (2013). Validating the interpretations and uses of test scores. Journal of Educational Measurement, 50(1).
- Kirkpatrick, J. D., and Kirkpatrick, W. K. (2016). Kirkpatrick's Four Levels of Training Evaluation. ATD Press.
- Messick, S. (1989). Validity. In R. L. Linn (Ed.), Educational Measurement, 3rd edition. American Council on Education and Macmillan.
- Patton, M. Q. (2008). Utilization-Focused Evaluation, 4th edition. Sage.
- Proctor, E., Silmere, H., Raghavan, R., Hovmand, P., Aarons, G., Bunger, A., Griffey, R., and Hensley, M. (2011). Outcomes for implementation research: conceptual distinctions, measurement challenges, and research agenda. Administration and Policy in Mental Health and Mental Health Services Research, 38(2).
- Stufflebeam, D. L., and Zhang, G. (2017). The CIPP Evaluation Model: How to Evaluate for Improvement and Accountability. Guilford Press.
- Venable, J., Pries-Heje, J., and Baskerville, R. (2016). FEDS: a framework for evaluation in design science research. European Journal of Information Systems, 25(1).
- Venkatesh, V., Morris, M. G., Davis, G. B., and Davis, F. D. (2003). User acceptance of information technology: toward a unified view. MIS Quarterly, 27(3).
