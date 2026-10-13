# Transforming Learning Design at Scale: A Qualitative Design-Based Study of a Human-in-the-Loop Generative AI Storyboarding Workflow

@center Learning Engineering Team
@center Military Personnel Command Learning Support Center

[LOCAL COPY STILL NEEDED] Add author names, affiliations, corresponding author email, and ORCID if required by the target journal.

[UPDATED FROM LOCAL COPIES — 2026-06-17] Blue text marked [UPDATED FROM LOCAL COPIES — 2026-06-17] contains new verified data added from uploaded local copies. Red/yellow text marked [LOCAL COPY STILL NEEDED] identifies items that still require organizational confirmation, final submission metadata, or additional missing local files. This version updates the previously marked local-copy gaps using the newly uploaded prompt-review, prompt-source, survey/thematic-analysis, and storyboard-version files.

[UPDATED FROM BASELINE PROMPTS — 2026-07-15] Green text identifies additions derived from the consolidated baseline individual-prompt records.

[UPDATED FROM MATCHED STORYBOARD PAIRS — 2026-07-15] Purple text identifies additions derived from the newly supplied matched baseline and final storyboard pairs for Modules 3, 4, and 13.

## Abstract

Generative artificial intelligence (AI) is increasingly used to support instructional design activities such as learning-objective development, content structuring, assessment drafting, narration generation, and storyboard production. In team-based learning environments, however, the value of generative AI depends not only on individual productivity but also on whether AI-supported design can be made consistent, source-grounded, reviewable, and scalable across practitioners and projects. This qualitative design-based study examined the development of a human-in-the-loop generative AI storyboarding workflow in a professional military training design environment. The study drew on project artifacts produced across 17 module-level storyboarding tasks by seven practitioner contributors. The dataset included individual prompt histories, practitioner reflections, OPUS-guided reviews, CRAFT-coded prompt elements, learning-objective and source-traceability records, embedded review comments, and 21 storyboard versions representing all 17 modules. Matched baseline and final storyboards for three modules enabled within-module examination of changes in instructional structure, source and scope control, interaction design, multimedia guidance, accessibility, and production readiness. Document analysis and thematic analysis showed that individually developed prompts encoded substantially different assumptions about source use, learner context, instructional sequencing, assessment, media, formatting, and quality assurance. Multi-turn prompt histories also revealed considerable corrective prompting and manual repair. Practitioner feedback and artifact comparisons were translated into four interrelated guardrail dimensions: governance and source control; instructional design and learning architecture; content quality and cognitive-load management; and user experience, accessibility, and production readiness. These dimensions were operationalized as workflow control gates for source validation, scope continuity, objective alignment, uncertainty handling, interaction design, accessibility, developer handoff, and human approval. The study contributes a transferable qualitative model for converting distributed practitioner expertise into explicit and auditable rules for responsible AI-supported instructional design.

*Keywords: human-in-the-loop AI; AI-assisted learning design; storyboarding workflow; Prompt-informed workflow governance; responsible AI governance*

## Introduction

Generative artificial intelligence is increasingly being used to support instructional design activities, including learning-objective development, content structuring, scenario generation, assessment drafting, narration writing, and storyboard production. These capabilities create new opportunities for educational technology because they can help instructional designers produce early drafts, reorganize source content, and explore alternative instructional sequences more efficiently. However, the educational value of generative AI does not depend only on whether individual users can produce coherent instructional materials. In team-based and organizational learning environments, the more important challenge is whether AI-supported design work can be made consistent, reliable, trusted, accessible, and reviewable across users, courses, and production contexts.

This challenge is increasingly important because much current generative AI use in instructional design begins as individual experimentation. Instructional designers may develop their own prompts, apply their own assumptions about instructional structure, and use their own judgment to determine whether AI-generated outputs are accurate, complete, and instructionally useful. While this individual-use model can support local productivity, it does not automatically scale to large organizations. Output quality may vary depending on each designer's AI literacy, prompt-engineering skill, instructional design experience, source interpretation, and ability to detect gaps or unsupported content. As a result, individual prompting can produce uneven storyboards, inconsistent source coverage, variable interaction guidance, and different levels of production readiness.

For instructional design teams, this creates a central educational-technology problem: how can generative AI be integrated into learning-design workflows in ways that support consistency without removing human judgment? Human-centered and human-in-the-loop approaches are relevant because AI-supported systems require users and domain experts to shape, validate, and refine outputs throughout the design process (Amershi et al., 2014; Li et al., 2025). In instructional design, this means that AI cannot be treated only as a text-generation tool. It must be embedded within workflows that preserve learning-objective alignment, source fidelity, learner relevance, accessibility, cognitive-load control, and human accountability.

Although existing work has examined generative AI for instructional design and educational content creation, less attention has been paid to how instructional design teams can convert distributed practitioner expertise into explicit, auditable, and reusable AI workflow guardrails. This gap is important because team-based learning design requires not only usable outputs but also source traceability, reviewability, accessibility, and human accountability.

The present study addresses this gap through the development of a human-in-the-loop generative AI storyboarding workflow for learning-objective and storyboard development. In this study, the term storyboarding workflow refers to a structured AI-supported process that coordinates learning-objective generation, source-grounded content synthesis, storyboard sequencing, interaction design, accessibility guidance, and developer-facing production notes through explicit human-defined guardrails and review gates. The workflow was not developed to replace instructional designers. Rather, it was designed to make instructional design expectations explicit, reusable, and reviewable so that AI-supported storyboarding could be used more consistently across a team.

The study is situated in a professional military training design environment, but the problem it examines is relevant to many educational and workplace learning settings. Instructional design teams in higher education, professional education, workplace learning, online course development, and training organizations are all facing similar questions about responsible AI adoption. ==These teams need to know how practitioner expertise can be captured, how AI-supported outputs can remain source-grounded, how accessibility and instructional quality can be maintained, and how users with different levels of AI literacy can participate in a shared design process.== This study uses the military training context as a bounded case to examine a broader educational-technology issue that how individual AI use can be transformed into a scalable, team-based, human-governed instructional design workflow.

The organizational context also makes this case timely. The Department of National Defence and Canadian Armed Forces Artificial Intelligence Strategy commits the Defence Team to becoming AI-enabled by 2030 and emphasizes the need for AI adoption that is ethical, legal, inclusive, safe, and trusted (Department of National Defence & Canadian Armed Forces, 2024). For training development, this strategic direction means that AI adoption cannot be limited to isolated individual use. It requires trusted processes that can support consistent practice, source traceability, human review, and accountable decision-making across instructional design teams.

The immediate setting for this study is the Canadian Forces Training Development Centre and its affiliated Learning Support Center. The Canadian Forces Training Development Centre is described as the Canadian Armed Forces centre of expertise in instructor development, with a mission to develop and deliver adaptive individual training and provide Individual Training and Education consultancy services and advice on innovative training methods to support operational readiness (National Defence, 2021). Within this environment, the Learning Engineering team supports the design stage of training development by producing learning products such as learning-objective maps, lesson plans, e-learning storyboards, multimedia scripts, and related design artifacts that guide downstream courseware and media production.

The design stage is a critical point in the learning-development workflow. Storyboards play the role of design blueprints that connect learning objectives, instructional sequence, learner-facing content, media guidance, interaction design, assessment logic, accessibility considerations, and developer handoff. A weak storyboard can create downstream problems, including misalignment between objectives and content, unsupported instructional claims, unclear interaction design, poor accessibility of readiness, and unnecessary rework. For this reason, storyboarding provides a useful context for studying how generative AI can support instructional design with a human-in-the-loop approach to review and provide pedagogical control.

Initial AI-assisted storyboarding in this context showed both promise and limitation. When instructional designers used individually designed prompts, the resulting storyboards varied in structure, format fit, source coverage, interaction quality, multimedia guidance, learner relevance, and production readiness. Reported challenges included content gaps, bullet-heavy outputs, limited visual or interaction guidance, underdeveloped multimedia specifications, unclear learner relevance, and a continued need for manual editing, sequencing review, and source validation. These baseline observations suggested that generative AI could support instructional design work, but that individual prompting alone was insufficient for scalable team adoption.

Rather than treating prompt writing as an individual practice, this project investigated how instructional designers' expertise could be captured, compared, synthesized, and operationalized into a reusable team-based AI workflow. The development process used OPUS-guided review, CRAFT-based prompt structuring, and thematic analysis of team experience to translate individual storyboarding knowledge into four guardrail dimensions: governance and source control, instructional design and learning architecture, content quality and cognitive-load management, and user experience/accessibility/production readiness. These dimensions were then converted into workflow control gates intended to support consistency, accessibility, source traceability, and reliable human review. Document analysis and thematic analysis are appropriate for this type of qualitative inquiry because they support systematic examination of project artifacts, practitioner comments, and recurring patterns across design evidence (Bowen, 2009; Braun & Clarke, 2006).

This study addressed the following research questions:

RQ1. What limitations emerged when instructional designers used individual prompting approaches to generate AI-assisted storyboards?

RQ2. How were instructional designers' comments, reflections, and prompt practices translated into shared AI workflow guardrails?

RQ3. What guardrail dimensions and control gates emerged from the OPUS-guided and CRAFT-structured review process?

RQ4. What transferable design principles can inform responsible human-in-the-loop generative AI workflows for instructional design?

The contribution of this study is a qualitative workflow-development model that shows how practitioner feedback can be converted into traceable codes, themes, guardrails, and control gates for responsible AI-supported instructional design.

## Literature Review

### Generative AI in Instructional Design

Generative AI has become increasingly relevant to instructional design because it can support content drafting, learning-objective refinement, example generation, assessment item development, scenario-based learning, narration, and storyboard production. Recent instructional-design research suggests that designers use generative AI to brainstorm ideas, streamline lower-risk tasks, accelerate course-planning work, and support collaboration; however, these uses also raise concerns about output quality, privacy, authorship, contextualization, and the continuing need for expert review (Choi et al., 2024; Li et al., 2025; Luo et al., 2025). AI-assisted instructional design frameworks increasingly emphasize transparency, human agency, collaboration, and alignment with learning objectives (Li et al., 2025).

For instructional design teams, the central issue is not whether AI can produce text or structured tables. The central issue is whether AI-supported outputs preserve learning design quality. In storyboard development, quality depends on objective alignment, instructional sequence, source fidelity, cognitive load, interaction purpose, learner relevance, accessibility, and development handoff. This literature establishes the opportunity for AI-assisted instructional design but leaves unresolved how teams can govern AI-supported design work across multiple designers, source documents, and production expectations.

### Human-in-the-Loop AI and Learning Design Accountability

Human-in-the-loop AI is central to this study because instructional design requires judgment, contextual interpretation, and accountability. AI-generated storyboards may appear coherent while still containing unsupported assumptions, weak sequencing, vague media guidance, inaccessible interaction designs, or misaligned assessments. Prior research on interactive machine learning emphasizes that user involvement is important throughout exploration, refinement, and system design because human interaction can improve system effectiveness and usability (Amershi et al., 2014).

The proposed workflow positions instructional designers as the decision-makers who define standards, identify failure patterns, revise prompt logic, validate sources, and contextualize outputs. In this model, AI supports drafting and orchestration, while instructional designers retain responsibility for pedagogical judgment, source interpretation, accessibility, and final design decisions. This approach aligns with responsible AI guidance that emphasizes governance, accountability, transparency, explainability, reliability, human oversight, institutional readiness, and educational validation of generative AI systems (Miao & Holmes, 2023; National Institute of Standards and Technology, 2023; North Atlantic Treaty Organization, 2024).

In this study, human-in-the-loop design is treated not as a final review step only, but as a workflow principle embedded throughout prompting, source selection, storyboard generation, feedback interpretation, and control-gate refinement.

### Prompt Engineering as Collaborative Design

Prompt engineering is often treated as an individual skill. This study reframes prompt engineering as collaborative instructional design work. In the baseline stage, instructional designers used individual prompts, producing varied storyboard outputs and exposing differences in assumptions about structure, source use, interaction design, multimedia guidance, and learner-facing language.

The team then used OPUS and CRAFT to convert individual expertise into shared design logic. OPUS supported reflection through Observe, Process, Understand, and Synthesize. CRAFT structured prompt elements into Context, Role, Action, Format, and Target audience. This process allowed team members to identify reusable prompt elements, hidden assumptions, missing constraints, risks, gaps, and improvement suggestions. Collaborative prompt authoring research suggests that subject-matter experts can contribute meaningfully to AI-supported educational content development when workflows support iteration, comparison, prompt sharing, and refinement (Reza et al., 2025). From a methodological perspective, Shah's prompt-science argument further supports the need to make prompt development transparent, documented, verifiable, repeatable, and human-in-the-loop; in the present study, this source is used as methodological support for documenting and reviewing prompt logic rather than as direct evidence about instructional design practice (Shah, 2025).

The present study extends this perspective by examining how individual prompt fragments and review comments were converted into a shared prompt architecture and reusable guardrails.

### Responsible AI and Educational Technology Governance

Responsible AI use in educational technology requires more than tool access. It requires governance structures that define source boundaries, human review expectations, accessibility requirements, uncertainty handling, privacy considerations, institutional readiness, pedagogical validation, and accountability. In AI-supported instructional design, governance must be operationalized into practical workflow rules rather than remaining at the level of abstract principles (Miao & Holmes, 2023; National Institute of Standards and Technology, 2023). Because this study is situated in a Department of National Defence learning context, defence-sector AI governance also remains relevant to the organizational rationale for human oversight, traceability, validation, and responsible use (North Atlantic Treaty Organization, 2024).

This study addresses responsible AI governance by examining how team feedback was translated into guardrails and control gates. These included source hierarchy rules, no-invention constraints, SME-validation triggers, objective-alignment checks, cognitive-load controls, accessibility guidance, interaction-purpose requirements, and developer-handoff standards. These governance mechanisms are consistent with education-specific guidance on human-centered generative AI use and broader AI risk-management approaches that emphasize validity, reliability, accountability, transparency, documentation, provenance, testing, and lifecycle risk management (Autio et al., 2024; Miao & Holmes, 2023; National Institute of Standards and Technology, 2023).

## Method

### Context

This study was conducted in a professional training design environment in which instructional designers develop learning products for downstream development and multimedia production teams. Within this environment, storyboards function as design blueprints that connect learning objectives, instructional content, sequencing, interaction design, media guidance, accessibility considerations, and production requirements.

Although the project was situated in a military training design environment, the unit of analysis was the instructional design workflow rather than military training content. The broader relevance of the study lies in a challenge shared by many instructional design teams: how to adopt generative artificial intelligence while preserving pedagogical quality, source traceability, accessibility, reviewability, and human accountability.

### Research Design

The study used a qualitative design-based research approach to examine the development of a human-in-the-loop generative AI storyboarding workflow for learning-objective and storyboard development. The study was design-based because it examined the creation and refinement of a practical educational technology artifact: a governed AI-supported workflow intended to assist instructional designers with learning-objective generation, source-grounded content synthesis, storyboard sequencing, interaction design, accessibility guidance, and developer-facing production notes.

The study was qualitative because the primary evidence consisted of project artifacts generated during the design and review process. These artifacts included practitioner reflections, prompt annotations, team review comments, storyboard feedback, learning-objective maps, traceability records, AI-generated storyboard drafts, and workflow documentation. The purpose was not to measure the isolated effect of a single AI tool. Rather, the purpose was to explain how instructional design expertise was captured, synthesized, and operationalized into workflow rules, guardrails, and control gates for responsible AI-supported instructional design.

The study did not evaluate learner outcomes or compare experimental conditions. Instead, it examined the design and refinement process through which practitioner feedback, prompt artifacts, and storyboard review evidence were transformed into AI workflow guardrails.

The research design was organized into two sequential and interrelated phases. Phase 1 focused on the development of a source-grounded learning-objective prompt. Phase 2 focused on the development of a governed storyboard master prompt. Together, the two phases moved the project from source-grounded learning-objective generation to team-based AI-supported storyboard production.

### Practitioner Contributors

[UPDATED FROM COMPLETE MOD 3, MOD 4, AND MOD 13 STORYBOARD SET — 2026-07-15] The local copies confirm 7 practitioner contributors in the open-ended survey workbook and 4 prompt-review contributors in the CRAFT review workbook. Direct storyboard coverage now extends to all 17 assigned modules through 21 storyboard-version files. Modules 3, 4, and 13 are represented by explicit baseline and final storyboard pairs.

[UPDATED FROM MATCHED STORYBOARD PAIRS — 2026-07-15] With the addition of the Module 3, Module 4, and Module 13 baseline and final storyboards, direct storyboard coverage now extends to all 17 assigned modules.

Practitioner contributors included instructional designers who participated in storyboard review, prompt refinement, and workflow feedback activities. Their comments and tracked-change feedback were treated as project artifacts and were de-identified before analysis. The contributors were not evaluated as individual participants; rather, their comments were analyzed as evidence of recurring instructional design concerns and workflow requirements.

[LOCAL COPY STILL NEEDED] Confirm whether practitioner contributors consented to publication use of de-identified comments and whether organizational permission was obtained.

### Phase 1: Learning-Objective Prompt Development

Phase 1 focused on the development of a comprehensive learning-objective prompt. The purpose of this phase was to ensure that AI-generated learning objectives and sub-learning objectives were grounded in authoritative instructional source materials rather than generated from unsupported general knowledge.

@caption Figure 1. Phase 1 Learning-Objective Prompt Development Using Lightweight Retrieval-Augmented Generation, Document Analysis, and Thematic Analysis

[UPDATED FROM LOCAL COPIES — 2026-06-17] The uploaded preliminary survey presentation contains workflow material that can support reconstruction of the Phase 1/overall process figure, including storyboard development, data collection, data analysis, follow-up explanatory interviews, and strategy adjustment. [LOCAL COPY STILL NEEDED] Insert the final Figure 1 file or approve reconstruction from the available workflow slide material.

This phase integrated three methodological components: a lightweight retrieval-augmented generation approach, document analysis, and thematic analysis. First, a lightweight retrieval-augmented generation approach was used to constrain AI output to relevant source materials. Source use was organized through an authority hierarchy that prioritized assigned instructional documents, enabling objectives, teaching points, reference columns, annexes, chapters, page numbers, and topic locations. The prompt required source traceability and instructed the AI system not to invent missing information. When information was unclear, incomplete, or unsupported, the workflow required human review or subject-matter expert validation.

Second, document analysis was used to locate, review, and extract relevant evidence from the instructional source materials. This process involved identifying where assigned topics appeared in the training package and extracting only the evidence that directly explained, supported, defined, contextualized, or applied to the broad learning objective. Third, thematic analysis was used to convert extracted source evidence into a structured learning-objective table. Source evidence was reviewed, coded, grouped, and refined into broad learning objectives and more specific sub-learning objectives. Initial codes captured concepts that supported each broad learning objective. Related codes were then grouped into themes and refined into action-oriented, Bloom-guided sub-learning objectives.

The output of Phase 1 was a comprehensive learning-objective table that linked broad learning objectives, sub-learning objectives, supporting evidence, and source references. This table served as the instructional foundation for Phase 2 storyboard master prompt development.

### Phase 2: Storyboard Master Prompt Development

Phase 2 focused on the development of the storyboard master prompt. The purpose of this phase was to translate individual instructional design expertise into a shared AI-supported workflow capable of producing more consistent, source-grounded, accessible, and production-ready storyboard outputs.

@caption Figure 2. Phase 2 Storyboard Master Prompt Development Through OPUS Review, CRAFT Structuring, Practitioner Feedback, and Guardrail/Control-Gate Refinement

[UPDATED FROM LOCAL COPIES — 2026-06-17] The uploaded preliminary survey presentation contains OPUS/CRAFT workflow material for Phase 2, including Observe, Processing, Understand, and Synthesize steps and the CRAFT categories Context, Role, Actions, Format, and Target audience. The prompt-review workbook provides the supporting coded evidence. [LOCAL COPY STILL NEEDED] Insert the final Figure 2 file or approve reconstruction from the available OPUS/CRAFT slide material.

This phase began with baseline AI storyboarding. Instructional designers generated storyboard drafts using individual prompting approaches. The resulting outputs and practitioner reflections were collected as baseline evidence. These baseline outputs helped identify recurring problems, including inconsistent storyboard structure, variable source coverage, weak learning-objective alignment, limited multimedia and interaction guidance, bullet-heavy language, missing learner relevance, and uneven production readiness.

The team then reviewed prompt artifacts and storyboard outputs using an OPUS-guided process. OPUS supported a structured review cycle of observing the AI-generated output, processing how the output responded to the prompt and source materials, understanding assumptions and gaps, and synthesizing review insights into reusable prompt and workflow improvements. Useful prompt elements were then organized using the CRAFT structure: Context, Role, Action, Format, and Target audience.

Through OPUS review and CRAFT tagging, individual prompting practices were converted into shared design knowledge. Practitioner feedback, prompt revisions, and storyboard review comments were analyzed to identify recurring risks, gaps, and improvement suggestions. These patterns were then translated into AI workflow guardrails and control gates.

Four guardrail dimensions emerged from this process. The first dimension, governance and source control, included source hierarchy, source traceability, no-invention rules, subject-matter expert validation triggers, and review and approval gates. The second dimension, instructional design and learning architecture, included learning-objective alignment, storyboard sequencing, teach-example-practice logic, instructional chunking, assessment alignment, interaction purpose, and learner progression. The third dimension, content quality and cognitive-load management, included clarity, concision, terminology consistency, learner relevance, bullet discipline, sentence-length control, and scannability. The fourth dimension, user experience, accessibility, and production readiness, included accessibility guidance, multimedia intent, visual design logic, interaction mechanics, feedback quality, developer notes, formatting consistency, and production handoff requirements.

### Data Sources

The study analyzed multiple project artifacts generated during the two-phase workflow development process. Data sources included instructional source documents, comprehensive learning-objective maps, learning-objective/storyboard traceability records, baseline AI-generated storyboard drafts, individual instructional designer prompts or prompt fragments, practitioner reflections on AI storyboarding experience, OPUS-guided prompt review comments, CRAFT-tagged prompt elements, team review comments identifying risks, gaps, and suggestions, AI-generated storyboard drafts, storyboard review and contextualization notes, and final prompt or agent guardrail documentation.

[UPDATED FROM COMPLETE MOD 3, MOD 4, AND MOD 13 STORYBOARD SET — 2026-07-15] The current dataset includes 17 assigned module-level storyboarding tasks; 12 modules with documented open-ended practitioner feedback; 24 preliminary coded evidence entries; 48 CRAFT-coded prompt-review entries; 6 prompt-source/development files; and 21 storyboard-version files representing all 17 unique modules. The explicit Module 3, 4, and 13 baseline–final pairs enable within-module comparison of scope, structure, objective alignment, learner context, narration, multimedia guidance, interaction design, accessibility, SME-verification mechanisms, and developer-handoff detail. Prompt-review comments are dated 2026-03-10 to 2026-03-12, the prompt-review result workbook is dated 2026-03-16, and storyboard-review comments are dated primarily 2026-03-24 to 2026-03-31.

[UPDATED FROM BASELINE PROMPTS — 2026-07-15] For the baseline-prompt analysis, a prompt episode was treated as an initial prompt together with documented follow-up prompts used to refine, reformat, correct, or complete the same storyboard task.

[UPDATED FROM MATCHED STORYBOARD PAIRS — 2026-07-15] The completed storyboard corpus includes 21 version files representing all 17 assigned modules. Modules 3, 4, and 13 now have explicit baseline and final artifacts, enabling within-module comparison of scope, structure, instructional design detail, multimedia guidance, interaction specification, accessibility support, SME-verification mechanisms, and developer-handoff requirements.

| Data source | Purpose in study | Where used in analysis |
|---|---|---|
| Baseline AI-generated storyboard drafts | Identified limitations of individual prompting | RQ1 |
| Individual prompt fragments | Compared prompting assumptions across designers | RQ2 |
| Instructional designer reflections | Captured practitioner experience and perceived risks | RQ1, RQ2 |
| Tracked-change comments | Provided direct evidence of storyboard review concerns | RQ2, RQ3 |
| OPUS review comments | Structured observation, interpretation, and synthesis of prompt/output issues | RQ2 |
| CRAFT-tagged prompt elements | Organized reusable prompt logic into Context, Role, Action, Format, and Target audience | RQ2, RQ3 |
| Learning-objective maps | Supported objective alignment and traceability | RQ3 |
| Source-traceability records | Supported governance and source-control guardrails | RQ3 |
| Final prompt/guardrail documentation | Showed how themes became workflow control gates | RQ3, RQ4 |
| [UPDATED FROM BASELINE PROMPTS — 2026-07-15] Baseline individual prompt episodes | Compared explicit instructional, source-control, format, media, assessment, and validation requirements; identified iterative repair | RQ1, RQ2, RQ3 |
| [UPDATED FROM MATCHED STORYBOARD PAIRS — 2026-07-15] Matched baseline–final storyboard pairs (Modules 3, 4, and 13) | Supported within-module comparison of design elaboration, scope change, accessibility, interaction logic, verification, and production handoff | RQ1, RQ2, RQ3 |

### Data Collection

Data were collected across two phases as part of the instructional design workflow development process. In Phase 1, source documents were reviewed and converted into learning-objective maps and traceability records. In Phase 2, instructional designers produced baseline storyboard drafts using individual prompts. These drafts were reviewed using tracked changes and structured comments. Prompt artifacts and review comments were then examined through OPUS-guided reflection and CRAFT-based tagging. All review comments were de-identified before analysis.

[UPDATED FROM LOCAL COPIES — 2026-06-17] The local copies show multiple forms of data preservation: open-ended survey/thematic-analysis workbook entries; a prompt-review workbook with CRAFT-coded entries; original prompt-source documents with embedded comments and inline suggestions; a prompt-development collection documenting module-level prompt examples; and reviewed storyboard Word files containing embedded reviewer comments, SME verification lists, and developer notes. The local storyboard set contains 105 embedded Word comments across 15 storyboard-version files. [LOCAL COPY STILL NEEDED] Confirm the formal data collection date range, official number of review cycles, and whether embedded Word comments were exported separately, preserved in the original Word files, or both.

[UPDATED FROM BASELINE PROMPTS — 2026-07-15] The baseline records preserve prompt text and process evidence, including constraint restatement, template conversion, multimedia requests, content-preservation instructions, and manual reconciliation across versions.

[UPDATED FROM MATCHED STORYBOARD PAIRS — 2026-07-15] The newly supplied paired artifacts comprise baseline and final storyboards for Modules 3, 4, and 13. The pairs preserve naturalistic version differences rather than a controlled experimental manipulation. They were therefore analyzed as design-evolution cases, with attention to both improvement and scope change.

### Data Analysis

The analysis combined document analysis and thematic analysis. Document analysis was used to systematically review and evaluate project artifacts, including source documents, prompts, review comments, storyboard drafts, learning-objective maps, and traceability records. Thematic analysis was used to identify recurring patterns across practitioner feedback, prompt annotations, storyboard review comments, and design-review evidence.

[UPDATED FROM BASELINE PROMPTS — 2026-07-15] Baseline prompt episodes were coded using the CRAFT categories and additional codes for source boundaries, no-invention rules, SME validation, objective/audience specification, timing, narration, media, interaction, assessment, terminology, template compliance, output validation, and manual intervention.

[UPDATED FROM MATCHED STORYBOARD PAIRS — 2026-07-15] Matched-pair comparison examined: slide count and timing; scope continuity; objective alignment; learner-facing context and narration; specificity of visuals and interactions; feedback and attempt logic; accessibility metadata; SME-verification lists; developer notes; and preservation or introduction of unsupported/cross-module content. Differences were interpreted as evidence of workflow development, not as causal effects of a single prompt feature.

First, artifacts were organized by workflow phase, distinguishing Phase 1 learning-objective prompt development from Phase 2 storyboard master-prompt development.

Second, comments, prompt annotations, and storyboard feedback were read repeatedly to identify recurring concerns.

Third, initial codes were generated inductively. Examples included source coverage risk, unsupported content, weak learner relevance, bullet-heavy presentation, unclear interaction purpose, accessibility concern, and developer-handoff ambiguity.

Fourth, related codes were grouped into broader themes that reflected recurring instructional design and AI workflow concerns.

Fifth, themes were mapped to AI workflow guardrail dimensions.

Sixth, guardrails were translated into workflow control gates, such as source-check requirements, SME-validation triggers, learner-relevance checks, bullet-discipline rules, interaction-purpose requirements, and accessibility/developer-handoff requirements.

[UPDATED FROM LOCAL COPIES — 2026-06-17] The local prompt-development and storyboard files document use of Copilot/M365 Copilot for prompt development, storyboard generation, template conversion attempts, and multimedia/image prompting. The survey workbook also documents team reflections on AI-assisted storyboarding outputs. [LOCAL COPY STILL NEEDED] Confirm whether AI tools assisted with qualitative coding, clustering, summarizing, or thematic grouping. If yes, specify the exact task and state that final codes, themes, guardrails, and interpretations were determined through human review.

### Use of Generative AI in the Research and Writing Process

Generative AI tools were used in two ways during this project. First, AI tools were part of the design intervention itself, supporting learning-objective generation, source-grounded content synthesis, storyboard drafting, and prompt refinement. Second, AI-assisted tools were used during manuscript preparation to support organization, language refinement, and drafting. All AI-generated outputs were reviewed, revised, and verified by the author. AI tools were not treated as authors, analysts, or independent decision-makers. Human instructional designers retained responsibility for source interpretation, coding decisions, guardrail development, and final manuscript content.

[UPDATED FROM LOCAL COPIES — 2026-06-17] Local artifacts identify Copilot/M365 Copilot use in the storyboarding and prompt-development workflow. The prompt-development collection includes module-level prompts and notes about Copilot-generated storyboards, template conversion, and image/multimedia prompting. [LOCAL COPY STILL NEEDED] Insert exact AI tool names, deployment context, dates used, and versions if known. If AI assisted qualitative analysis or manuscript drafting, specify the exact task, output, and human verification process.

### Trustworthiness

Trustworthiness was supported through triangulation, audit trail documentation, peer debriefing, traceability mapping, and reflexive memoing. Triangulation was supported by comparing evidence across storyboard drafts, prompt artifacts, tracked-change comments, learning-objective maps, and traceability records. An audit trail documented how comments were coded, how codes were grouped into themes, and how themes informed guardrail revisions. Peer debriefing occurred through review with instructional designers familiar with the workflow. Traceability mapping linked practitioner evidence to codes, themes, guardrails, and workflow changes. Reflexive memoing was used to distinguish local implementation decisions from transferable design principles.

[UPDATED FROM LOCAL COPIES — 2026-06-17] The local copies document reviewer triangulation at the artifact level: four contributors in the CRAFT-coded prompt-review workbook, multiple prompt-source reviewers, and six distinct storyboard-comment authors across the reviewed storyboard files. The storyboard comments and SME verification lists provide an audit trail of human review, correction, and validation needs. [LOCAL COPY STILL NEEDED] Confirm whether the qualitative coding itself used a second coder, peer review of codes, member checking, reviewer agreement, or another formal trustworthiness procedure.

[UPDATED FROM MATCHED STORYBOARD PAIRS — 2026-07-15] Full module-level artifact coverage improves triangulation by enabling each of the 17 assigned modules to be represented in the storyboard corpus. The three matched pairs also permit direct comparison within the same module topic, reducing reliance on cross-module inference when describing workflow evolution.

### Ethics Statement

[LOCAL COPY STILL NEEDED] Insert final ethics approval or exemption statement, including committee/authority name, date, approval/exemption number if applicable, and whether the project analyzed de-identified internal workflow artifacts.

[LOCAL COPY STILL NEEDED] Add informed-consent and/or organizational-permission statement, if applicable.

## Findings

### Finding 1: Individual Prompting Produced Inconsistent Storyboard Outputs

Analysis of baseline AI-generated storyboard drafts showed that individual prompting produced inconsistent results across structure, source coverage, instructional sequencing, multimedia guidance, interaction design, and production readiness. Practitioner comments indicated that some outputs were overly compressed, bullet-heavy, and insufficiently contextualized for learners.

[UPDATED FROM BASELINE PROMPTS — 2026-07-15] The baseline prompt corpus shows substantial variation in what practitioners made explicit, ranging from short topic-and-duration requests to prompts containing source hierarchy, context rules, no-invention safeguards, template requirements, interaction specifications, and SME-confirmation markers.

[UPDATED FROM COMPLETE MOD 3, MOD 4, AND MOD 13 STORYBOARD SET — 2026-07-15] The matched pairs provide direct within-module evidence of design evolution. Module 3 changed from a 20-screen External SIP/recruiting-constraints and financial-support storyboard with four branching scenarios to a 17-screen production- oriented storyboard that integrated posting gates, Position Change Notice reading, Temporary Duty versus attached posting, relocation-policy distinctions, Separation Expense, priority training dates, accessibility specifications, SME checks, and slide-level developer notes. Module 4 changed from a 10-screen, 20–30-minute overview with minimal interaction specification to a 16-screen, 15–20-minute storyboard with narration, a worked example, repeated practice, alt-text plans, feedback logic, SME-verification items, and developer guidance. Module 13 changed from a broad DMCPG 5 storyboard addressing selection programs, occupational transfers, postings, and entitlements to a 16-screen BMQ Offload and Position Change Notice storyboard organized around mailbox routing, the November-to-April timeline, organizational responsibilities, environmental streams, privacy, interaction answer keys, SME checks, and developer notes. The pairs show increased production specificity, while the substantial Module 13 scope change demonstrates the need for explicit scope-lineage approval.

[UPDATED FROM COMPLETE MOD 3, MOD 4, AND MOD 13 STORYBOARD SET — 2026-07-15] The completed storyboard corpus supports direct document analysis of 21 storyboard-version files representing all 17 assigned modules. The files show recurring review issues including source-fidelity and scope risk, unsupported or cross-module content, missing source details, SME-verification needs, template and format issues, assessment sequencing concerns, narration/on-screen redundancy, unclear visual or interaction specifications, and developer-handoff/accessibility requirements. The corpus contains 105 embedded Word comments; the six newly supplied Module 3, 4, and 13 files add matched version evidence but no additional embedded comments. Exact issue-category frequencies should be reported only after the final coding pass is completed.

[UPDATED FROM MATCHED STORYBOARD PAIRS — 2026-07-15] The completed set now supports direct document analysis of 21 storyboard-version files covering all 17 assigned modules. The new Module 3, 4, and 13 files add no embedded comments; therefore, the verified comment count remains 105.

These challenges were not treated as failures of one system. Rather, they provided evidence of a broader educational technology issue: unguided generative AI use can amplify inconsistency when instructional design expertise remains implicit and individually distributed.

### Finding 2: OPUS and CRAFT Made Tacit Instructional Design Expertise Visible

The OPUS review process helped instructional designers identify not only whether AI-generated outputs were acceptable, but why specific prompt elements succeeded or failed. During OPUS review, instructional designers identified reusable prompt elements, hidden assumptions, missing constraints, and reasons why certain prompt elements worked. CRAFT tagging then converted those observations into reusable prompt components related to context, role, action, format, and target audience.

[UPDATED FROM BASELINE PROMPTS — 2026-07-15] Prompt histories indicate that human-in-the-loop work existed before the formal workflow but was reactive and individually managed. Corrective prompts exposed tacit requirements for audience, pacing, source use, acronym handling, assessment format, template structure, multimedia, and content preservation.

[UPDATED FROM MATCHED STORYBOARD PAIRS — 2026-07-15] The matched pairs show how those tacit requirements became visible in the artifacts. Final versions more often contained explicit narration, interaction mechanics, attempt limits, guided and corrective feedback, alt-text plans, SME-verification lists, and developer acceptance criteria. At the same time, the Module 13 pair demonstrates why version lineage and scope-control gates are necessary: the baseline and final documents address materially different instructional scopes despite being treated as versions of the same assigned module.

[ADDED FROM AVAILABLE PROJECT RECORDS] One example came from the Roles and Responsibilities storyboard task. An initial metaprompt asked Copilot to use the source presentation for a CAF audience and produced a detailed breakdown with slide references and relevant interactions. However, the output was structured like a facilitator storyboard and remained too bullet-heavy for storyboard development. The revised prompt narrowed the task to a 20-minute instructional storyboard, constrained the source section, and explicitly instructed the AI not to structure the output like a facilitator storyboard. This illustrates how output review was translated into reusable prompt refinements involving context, action, format, and audience control. A second example came from the BMQ/BMOQ Offload and PCN task, where three prompt versions were tested. The final two-level prompting approach treated the original PowerPoint as the primary reference while allowing limited learner context to address gaps normally supplied verbally by instructors. This improved content richness, visual representation, and SME-verification support while preserving source primacy.

This process made tacit design knowledge visible. Instead of treating prompt writing as individual experimentation, the team converted review comments into shared design logic that could be operationalized in a reusable AI workflow.

### Finding 3: Four Guardrail Dimensions Emerged

The analysis identified four thematic guardrail dimensions. The first dimension, governance and source control, included source hierarchy, no-invention rules, traceability requirements, SME validation triggers, uncertainty handling, source conflict management, and review gates.

The second dimension, instructional design and learning architecture, included learning-objective alignment, storyboard sequencing, teach-example-practice logic, instructional chunking, assessment alignment, interaction purpose, and learner progression.

The third dimension, content quality and cognitive-load management, included clarity, concision, terminology consistency, active voice, learner relevance, bullet discipline, sentence-length control, and cognitive-load management.

The fourth dimension, user experience, accessibility, and production readiness, included accessibility guidance, multimedia intent, visual design logic, interaction mechanics, feedback quality, developer notes, formatting consistency, and production handoff requirements.

[UPDATED FROM LOCAL COPIES — 2026-06-17] The preliminary thematic analysis still includes 24 coded evidence entries across 5 practitioner-experience categories. The local-copy expansion now adds 48 CRAFT-coded prompt-review entries and 105 embedded storyboard-review comments that can be mapped to the final guardrail dimensions. The CRAFT prompt-review distribution is: Context = 28, Actions = 8, Role = 6, Format = 3, Target audience = 3. [LOCAL COPY STILL NEEDED] Add exact evidence counts by final guardrail dimension only after a final coding pass maps the 24 preliminary evidence entries, 48 CRAFT-coded prompt-review entries, and 105 storyboard-review comments into the final analytic framework.

[UPDATED FROM MATCHED STORYBOARD PAIRS — 2026-07-15] The three matched pairs provide additional artifact-level support for all four guardrail dimensions: source and scope control; objective, sequencing, and practice architecture; content clarity and cognitive-load control; and accessibility/production readiness. Exact counts by guardrail dimension should be reported only after the pairwise coding matrix is finalized.

### Finding 4: Practitioner Feedback Was Translated Into Workflow Control Gates

Practitioner feedback was translated into AI workflow control gates through an evidence-to-design mapping process. The analysis mapped comments to initial codes, grouped codes into themes, translated themes into guardrails, and then operationalized guardrails as workflow/control-gate changes. This mapping demonstrated that the workflow was not created through ad hoc prompting but through systematic qualitative synthesis.

[UPDATED FROM BASELINE PROMPTS — 2026-07-15] Baseline prompt omissions and repair sequences provided a second evidence stream: source restriction supported source-hierarchy gates; template failures supported schema and integrity checks; acronym/narration revisions supported content-quality rules; and media failures supported asset-status and post-transformation validation.

[UPDATED FROM MATCHED STORYBOARD PAIRS — 2026-07-15] The matched pairs further support control gates for version lineage, scope continuity, objective-to-screen coverage, interaction answer-key validation, accessibility metadata, SME escalation, and developer-handoff completeness. In particular, large scope changes between baseline and final artifacts should trigger an explicit human approval gate rather than being treated automatically as quality improvement.

@caption Table 1. Mapping Practitioner Evidence to Codes, Guardrails, and Workflow Control Gates

| Practitioner evidence | Initial code | Theme | Guardrail | Control-gate change |
|---|---|---|---|---|
| "Storyboard was bullet heavy and basic." | Weak instructional presentation | Content quality and cognitive-load management | Learner-facing clarity and cognitive-load control | Added sentence-length, bullet-use, narration, and scannability rules |
| "No images or interactions." | Weak engagement design | User experience, accessibility, and production readiness | Multimedia and interaction design | Added visual-intent, interaction-purpose, and feedback requirements |
| "Review was needed to ensure key points included." | Source coverage risk | Governance and source control | Source traceability and validation | Added source-check and SME-validation gate |
| "Why or relevance appears to be missing." | Weak learner relevance | Instructional design and learning architecture | Relevance and transfer alignment | Added rationale and learner-application requirements |
| "Copilot kept reducing the content down to fit in the tables." | Format-content conflict | Governance and instructional architecture | Format should not override instructional completeness | Added rule requiring content completeness before format compression |

Note. Practitioner evidence should be de-identified and verified against the original comments before submission. Replace or expand these excerpts with the final coded dataset.

## Discussion

### From Individual Prompting to Governed AI Workflow

The findings show that generative AI integration in instructional design should move beyond individual prompting toward governed workflow design. Individual prompting can produce useful drafts, but it can also create variability, undocumented assumptions, and uneven quality. A team-governed workflow makes instructional design expectations explicit, reusable, and reviewable.

This study contributes a model for translating practitioner expertise into AI workflow rules. The model includes baseline experience capture, OPUS-guided review, CRAFT-based structuring, thematic analysis, guardrail development, control-gate implementation, and human review. This model provides a practical pathway for educational teams seeking to adopt generative AI without reducing instructional design to prompt improvisation.

### Prompt Engineering as Team Knowledge Capture

The findings suggest that prompt engineering can function as a form of team knowledge capture. In this study, prompts were not treated only as instructions to an AI system. They became artifacts through which instructional designers made design assumptions explicit, compared expectations, identified quality risks, and translated tacit expertise into reusable workflow logic.

### From Paired Artifacts to Version-Control Evidence

[UPDATED FROM MATCHED STORYBOARD PAIRS — 2026-07-15] The completed module coverage changes the evidentiary basis of the study. The analysis no longer depends only on prompt fragments, reflections, and unmatched storyboard outputs; it now includes three direct baseline–final comparisons. These pairs show that workflow maturation involved richer instructional and production specifications, but they also show that "final" versions may alter topic boundaries. Responsible AI workflow governance therefore requires both quality gates and lineage gates: reviewers must verify not only whether a storyboard is better specified, but whether it remains faithful to the approved module scope and authoritative sources.

### Guardrails as Qualitative Design Outputs

The guardrails functioned as qualitative design outputs: they translated recurring practitioner concerns into operational workflow constraints that could be reused, reviewed, and refined. This is important because responsible AI adoption requires more than general principles. It requires practical mechanisms that determine how sources are used, how uncertainty is handled, how outputs are checked, and how human review is preserved.

### Implications for Instructional Design Practice

The study has implications for instructional designers, learning design teams, educational technology units, and organizations adopting AI-supported course development. For instructional designers, the study shows how individual expertise can be captured and transformed into shared workflow rules. For teams, the study shows how AI outputs can become more reviewable, consistent, and pedagogically aligned when prompt logic is governed by qualitative evidence.

For organizations, the study demonstrates that responsible AI adoption requires workflow design, review structures, source-control mechanisms, accessibility expectations, and human accountability. The study also highlights that AI-supported efficiency is educationally meaningful only when linked to learning-objective alignment, learner relevance, interaction quality, cognitive-load management, and accessible design.

### Transferable Design Principles

First, make practitioner expertise explicit before automating or scaling the workflow.

Second, treat prompt engineering as collaborative design rather than individual skill.

Third, convert review comments into traceable codes, themes, guardrails, and control gates.

Fourth, separate learner-facing instructional quality from production-format compliance.

Fifth, require source traceability and uncertainty handling.

Sixth, preserve human review and contextualization as core parts of the AI workflow.

These principles are intended to apply beyond the immediate context to professional education, workplace learning, higher education instructional design, online learning development, and AI-supported course production.

## Limitations and Future Research

This study has several limitations. First, it was conducted in a single professional training design environment, which may limit transferability to other educational settings. Second, the study examined workflow development rather than learner outcomes, so it cannot determine whether the resulting storyboards improved learning performance. Third, the author's role in the design environment may have shaped artifact selection, interpretation, and theme development. Fourth, practitioner comments were generated during naturalistic workflow activity rather than through formal interviews, which limited opportunities for follow-up questioning. Fifth, the study focused on the development of guardrails and control gates rather than long-term implementation across multiple courses.

[UPDATED FROM COMPLETE MOD 3, MOD 4, AND MOD 13 STORYBOARD SET — 2026-07-15] The artifact dataset now includes prompt-source documents, a CRAFT prompt-review workbook, a module-level prompt-development collection, and 21 storyboard-version files representing all 17 assigned modules. Modules 3, 4, and 13 have explicitly identified baseline–final pairs, so these modules are not missing. The remaining version-history limitation is different: a consistently reconstructed baseline-to-final lineage is not available for every other module. Therefore, module-level coverage is complete, but longitudinal version-level coverage remains uneven.

[UPDATED FROM MATCHED STORYBOARD PAIRS — 2026-07-15] The storyboard artifact set now covers all 17 assigned modules and includes 21 version files. However, only Modules 3, 4, and 13 are represented by explicitly identified baseline–final pairs in the newly supplied set; full version histories for every module remain incomplete.

[UPDATED FROM MATCHED STORYBOARD PAIRS — 2026-07-15] The matched pairs are naturalistic and were not produced under controlled conditions. Changes may reflect different prompts, source selections, tool contexts, reviewers, or evolving module scope. The comparisons therefore support analytic description of design evolution, not causal attribution. A future controlled comparison should hold source package, module scope, model version, and review criteria constant.

Future research should evaluate the workflow across multiple courses, design teams, and institutional contexts. Comparative studies could examine differences among individual prompting, standardized prompting, and team-governed prompting. Additional research should examine reviewer agreement, SME trust, instructional designer workload, accessibility quality, production efficiency, and downstream courseware quality. Future studies could also investigate whether similar qualitative workflow-development methods can support AI-assisted lesson planning, assessment design, simulation design, scenario-based learning, and adaptive content generation.

## Conclusion

This study examined how instructional designers transformed individual AI storyboarding practices into a shared, human-in-the-loop generative AI workflow. Through document analysis, thematic analysis, OPUS-guided review, and CRAFT-based prompt structuring, practitioner comments and prompt artifacts were translated into four guardrail dimensions: governance and source control, instructional design and learning architecture, content quality and cognitive-load management, and user experience/accessibility/production readiness. The study contributes a qualitative model for converting distributed practitioner expertise into auditable AI workflow rules. Rather than treating prompt writing as an individual skill, the study shows how AI-supported instructional design can be governed through source traceability, human review, accessibility expectations, and explicit pedagogical control gates.

## Highlights for Elsevier Submission

Developed a human-in-the-loop generative AI storyboarding workflow for instructional design.

Used thematic analysis to translate practitioner expertise into AI guardrails.

Identified four guardrail dimensions for AI-supported storyboard generation.

Demonstrated how prompt engineering can become collaborative design work.

Offers transferable principles for responsible AI use in learning design.

## Declarations

### Declaration of Generative AI and AI-Assisted Technologies in the Writing Process

During the preparation of this manuscript, the author used generative AI tools, including [insert tool names], to support drafting, organization, language refinement, and revision. The author reviewed, edited, verified, and approved all content and takes full responsibility for the accuracy, integrity, and originality of the manuscript.

### Ethics Approval

[LOCAL COPY STILL NEEDED] Insert final ethics approval or exemption statement, including committee/authority, date, approval/exemption number if applicable, and organizational review status.

### Informed Consent

[LOCAL COPY STILL NEEDED] Insert final informed-consent statement, including whether practitioner contributors consented to use of de-identified comments and project artifacts for research/publication.

### Data Availability

The data are not publicly available because they contain internal project artifacts and potentially sensitive organizational information. De-identified excerpts relevant to the analysis are included in the manuscript.

### Declaration of Competing Interest

[LOCAL COPY STILL NEEDED] Insert final competing-interest statement, e.g., "The author declares no competing interests," if accurate.

### Funding

[LOCAL COPY STILL NEEDED] Insert final funding statement, e.g., "This research received no external funding," if accurate.

## References

@ref Amershi, S., Cakmak, M., Knox, W. B., & Kulesza, T. (2014). Power to the people: The role of humans in interactive machine learning. AI Magazine, 35(4), 105–120. https://doi.org/10.1609/aimag.v35i4.2513

@ref Autio, C., Schwartz, R., Dunietz, J., Jain, S., Stanley, M., Tabassi, E., Hall, P., & Roberts, K. (2024). Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1). National Institute of Standards and Technology. https://doi.org/10.6028/NIST.AI.600-1

@ref Bowen, G. A. (2009). Document analysis as a qualitative research method. Qualitative Research Journal, 9(2), 27–40. https://doi.org/10.3316/QRJ0902027

@ref Braun, V., & Clarke, V. (2006). Using thematic analysis in psychology. Qualitative Research in Psychology, 3(2), 77–101. https://doi.org/10.1191/1478088706qp063oa

@ref Choi, G. W., Kim, S. H., Lee, D., & Moon, J. (2024). Utilizing generative AI for instructional design: Exploring strengths, weaknesses, opportunities, and threats. TechTrends, 68(4), 832–844. https://doi.org/10.1007/s11528-024-00967-w

@ref Department of National Defence & Canadian Armed Forces. (2024). The Department of National Defence and Canadian Armed Forces artificial intelligence strategy. Government of Canada. https://www.canada.ca/en/department-national-defence/corporate/reports-publications/dnd-caf-artificial-intelligence-strategy.html

@ref Li, H., Fang, Y., Zhang, S., Lee, S. M., Wang, Y., Trexler, M., & Botelho, A. F. (2025). ARCHED: A human-centered framework for transparent, responsible, and collaborative AI-assisted instructional design. In Proceedings of the Innovation and Responsibility in AI-Supported Education Workshop (PMLR Vol. 273, pp. 94–104). https://proceedings.mlr.press/v273/li25a.html

@ref Luo, T., Muljana, P. S., Ren, X., & Young, D. (2025). Exploring instructional designers' utilization and perspectives on generative AI tools: A mixed methods study. Educational Technology Research and Development, 73(2), 741–766. https://doi.org/10.1007/s11423-024-10437-y

@ref Miao, F., & Holmes, W. (2023). Guidance for generative AI in education and research. UNESCO. https://doi.org/10.54675/EWZM9535

@ref National Defence. (2021, October 29). Canadian Forces Training Development Centre. Government of Canada. https://www.canada.ca/en/department-national-defence/services/benefits-military/education-training/establishments/canadian-forces-training-development-centre.html

@ref National Institute of Standards and Technology. (2023). Artificial Intelligence Risk Management Framework (AI RMF 1.0) (NIST AI 100-1). U.S. Department of Commerce. https://doi.org/10.6028/NIST.AI.100-1

@ref North Atlantic Treaty Organization. (2024, July 10). Summary of NATO's revised Artificial Intelligence (AI) strategy. https://www.nato.int/en/about-us/official-texts-and-resources/official-texts/2024/07/10/summary-of-natos-revised-artificial-intelligence-ai-strategy

@ref Reza, M., Anastasopoulos, I., Bhandari, S., & Pardos, Z. A. (2025). PromptHive: Bringing subject matter experts back to the forefront with collaborative prompt engineering for educational content creation. In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (Article 148, pp. 1–22). Association for Computing Machinery. https://doi.org/10.1145/3706598.3714051

@ref Shah, C. (2025). From prompt engineering to prompt science with humans in the loop. Communications of the ACM, 68(6). https://doi.org/10.1145/3709599

[LOCAL COPY STILL NEEDED] Manually verify every reference, DOI, URL, journal title, capitalization style, and access link before submission.

## Appendix: Local-Copy Update Log — Added 2026-06-17

[UPDATED FROM LOCAL COPIES — 2026-06-17] This appendix records which marked manuscript gaps were filled or partially filled by uploaded local copies, and which items remain outstanding before submission.

| Marked manuscript area | Status after local-copy update | Data inserted / evidence now available | Still needed |
|---|---|---|---|
| Author/submission metadata | Still needed | No local copy supplied for author list, affiliations, corresponding author email, ORCID, target-journal metadata. | Author metadata and target-journal requirements. |
| Survey / preliminary thematic analysis | Updated | 17 module-level tasks; 7 practitioner contributors; 12 feedback modules; 24 coded evidence entries across 5 preliminary categories. | Confirm contributor descriptors for publication. |
| Prompt-review / OPUS / CRAFT | Updated | 48 CRAFT-coded prompt-review entries: Context 28, Actions 8, Role 6, Format 3, Target 3; four prompt-review contributors; prompt-review result workbook dated 2026-03-16. | Confirm whether separate OPUS-note counts exist outside the CRAFT workbook. |
| Prompt-source documents | Updated | Six prompt-source/development files reviewed, including golden-prompt documents and the BTL prompt-development collection; 40 embedded comments in comment-enabled prompt-source files. | Confirm whether all prompt versions are final and whether any additional prompt history/export files exist. |
| Storyboard-version files | Updated — complete module coverage | 21 storyboard-version files representing all 17 assigned modules; explicit baseline–final pairs for MOD 3, MOD 4, and MOD 13; 105 embedded Word comments across the corpus. | Reconstruct complete baseline-to-final lineages for the remaining modules only if longitudinal version-level claims are required. |
| Storyboard review dates and method | Partially updated | Embedded storyboard comments are dated primarily 2026-03-24 to 2026-03-31; prompt-source comments are dated 2026-03-10 to 2026-03-12. | Confirm official project date range, review-cycle count, and whether comments were exported separately. |
| AI-tool use statement | Partially updated | Local artifacts document Copilot/M365 Copilot use for storyboard generation, prompt development, template conversion, and multimedia/image prompting. | Confirm exact AI tool names, dates/versions, and whether AI supported qualitative coding or manuscript drafting. |
| Trustworthiness / coding validation | Partially updated | Artifact-level review is evidenced by CRAFT review entries, embedded reviewer comments, SME verification lists, and developer notes. | Confirm formal second-coder, peer-review, member-checking, or reviewer-agreement process. |
| Figures 1 and 2 | Partially updated | Uploaded preliminary survey PPT contains workflow and OPUS/CRAFT content that can support figure reconstruction. | Insert final figure files or approve reconstruction. |
| Ethics / consent / organizational permission | Still needed | No local copy supplied for ethics, consent, publication permission, or organizational approval. | Final ethics/exemption and informed-consent/permission wording. |
| Declarations | Still needed | No final competing-interest or funding statements supplied. | Final competing-interest and funding statements. |
| References | Still needed | No final reference verification supplied. | Manual reference/DOI/URL verification before submission. |
| Matched MOD 3/4/13 storyboard pairs | Updated and available | Six files are available: three baseline and three final storyboards. These complete module-level coverage and support direct within-module comparison. | Complete the formal pairwise coding matrix and verify approved scope lineage, particularly for MOD 13. |

### Local-copy source inventory used for this update

#### Survey / thematic analysis:

- BTL-management-storyboarding-AI-backward design.xlsx
- BTL-management-AI-storyboarding-experience-preliminary-survey.pptx

#### Prompt review / prompt development:

- Project prompt team review result_2026-03-16.xlsx
- LSC-standard-aligned Golden Prompt-Chris.docx
- LSC-standard-aligned Golden Prompt - Copy.docx
- LSC-standard-aligned Golden Prompt_Frances.docx
- LSC-standard-aligned Golden Prompt Andrews.docx
- BTL-Prompt-Golden-Janice-Tracking.docx
- BTL-Prompt-Development Andrews.docx

#### Storyboard versions:

- 2511-MPGTG-BTL_Mgnt-303-SB-MOD1_BTL_Fundamentals_Storyboard_Jason.docx
- 2511_MPGTG-BTL_Mgnt-303-SB-MOD2_Roles_and_Responsibilities-Janice-Jia.docx
- 2511-MPGTG-BTL_Mgnt-303-SB-MOD5_Indigenous_Cultures_Awareness_Storyboard-Craig.docx
- 2511-MPGTG-BTL_Mgnt-303-SB-MOD6_Entry_Plans_Impact-EN-Chris.docx
- 2511-MPGTG-BTL_Mgnt-303-SB-MOD7_BMQ_BMOQ_Offload_PCN_Storyboard-Jia.docx
- 2511-MPGTG-BTL_Mgnt-303-SB-MOD08-CourseLoading-to be reviewed - Copy.docx
- MOD8_Course_Loading_Storyboard_v1.0_2026-03-31 - Copy.docx
- 2511-MPGTG-BTL_Mgnt-303-SB-MOD9_Language_Training_Frances-Jia.docx
- 2511-MPGTG-BTL_Mgnt-303-SB-MOD10_Coordination_Monica.docx
- 2511-MPGTG-BTL_Mgnt-303-SB-MOD11_BTL_Finances_Storyboard-Craig.docx
- M2511-MPGTG-BTL-303-SB-MOD12_Moves-Postings_Chris_Jia.docx
- 2511-MPGTG-BTL_Mgnt-303-SB-MOD14_Systems-and-Programs_new - Copy.docx
- 2511-MPGTG-BTL_Mgnt-303-SB-MOD15_Element_Variations_Storyboard_Monica.docx
- 2511-MPGTG-BTL_Mgnt-303-SB-MOD16_Transition_Group_Storyboard-Craig.docx
- 2511-MPGTG-BTL_Mgnt-303-SB-MOD17-DMCA3_Chris.docx

[UPDATED FROM MATCHED STORYBOARD PAIRS — 2026-07-15] New matched storyboard-pair sources:

- 2511-MPGTG-BTL-303-SB-MOD3_Exterior SIP and Recruit Constraints.docx
- 2511-MPGTG-BTL_Mgnt-303-SB-MOD03_ExternalSIP_RecruitingConstraints_Financial_Impacts.docx
- 2511-MPGTG-BTL-303-SB Mod -4 Path to OFP and Probationary Period TRIAL.docx
- 2511-MPGTG-BTL_Mgnt-303-SB-MOD04_Path_to_OFP_and_Probationary_Period_Storyboard.docx
- 2511-MPGTG-BTL-303-SB-MOD7-DMCPG 5.docx (baseline artifact supplied for MOD 13)

@pagebreak

## Transcription Notes (added by the reconstruction, not part of the manuscript)

@note These notes were added during reconstruction from the 12 uploaded screenshots (36 of 37 read-mode screens). Delete this section before submission.

- **Coverage.** The screenshots cover screens 1–36 of 37. Screen 37 was not captured. The last visible line is the final matched-pair source entry ending "(baseline artifact supplied for MOD 13)". Any content on screen 37 (for example a closing note or a further inventory list) is missing and must be pasted from the original file.
- **Text read across screen boundaries.** Two sentences were split across screens and were transcribed exactly as displayed even though the wording looks like a draft typo: (1) Introduction, paragraph 6: "...a broader educational-technology issue that how individual AI use can be transformed..." (probably "issue: how" or "issue of how"); (2) Introduction, paragraph 9: "...unclear interaction design, poor accessibility of readiness, and unnecessary rework." (probably "poor accessibility, uneven production readiness"). Both are marked ==with yellow highlight== in the body so they can be corrected.
- **Colour coding.** The original uses blue for [UPDATED FROM LOCAL COPIES — 2026-06-17] and [ADDED FROM AVAILABLE PROJECT RECORDS], green for [UPDATED FROM BASELINE PROMPTS — 2026-07-15], purple for [UPDATED FROM MATCHED STORYBOARD PAIRS — 2026-07-15] and [UPDATED FROM COMPLETE MOD 3, MOD 4, AND MOD 13 STORYBOARD SET — 2026-07-15], and a yellow-highlighted tag followed by red text for [LOCAL COPY STILL NEEDED]. The same scheme is reproduced here, including inside table cells. One sentence in the Introduction ("The workflow was not developed to replace instructional designers. Rather,") appears in a lighter colour in the screenshot, which may be a tracked change or leftover formatting; it is transcribed in black.
- **Heading styles.** The original mixes manual bold headings with Word heading styles (the Appendix heading and "From Paired Artifacts to Version-Control Evidence" appear in a blue or sans-serif heading style). All headings here use consistent Word heading styles so the navigation pane works; adjust to the target journal's template.
- **Figures.** Figures 1 and 2 exist only as captions in the source; no figure images were present in the screenshots.
- **Tables.** The untitled data-source table (11 rows), Table 1 (5 rows) and the appendix update log (13 rows) were transcribed from enlarged crops. Cell text in the appendix table is small in the source; the entries "40 embedded comments" (prompt-source documents row) and the date ranges should be checked against the original file.
- **File names.** File names in the source inventory were transcribed character by character, but underscores versus hyphens and spaces are hard to distinguish at screenshot resolution (for example "2511_MPGTG-BTL_Mgnt-303-SB-MOD2..." and "M2511-MPGTG-BTL-303-SB-MOD12..."). Verify against the actual folder listing.
- **Highlighted sentence.** The yellow-highlighted sentence in the Introduction ("These teams need to know how practitioner expertise can be captured...") is highlighted in the original and is reproduced with the same highlight.
- **Keywords line.** The keyword "Prompt-informed workflow governance" is capitalised in the original while the other keywords are lower-case; transcribed as-is.
