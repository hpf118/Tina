# Storyboard Generator Master Prompt

A CRAFT-structured master prompt that turns a completed intake, approved source materials, and review inputs into a production-ready eLearning storyboard (Word document: Title, Document Control, Style, Developer Notes – All Slides, Learning Objectives table, Storyboard table).

| File | What it is |
|---|---|
| `Storyboard_Generator_Master_Prompt_v3.4.md` | The prompt, canonical source. Paste everything between the two scissors lines into the AI tool. |
| `Storyboard_Generator_Master_Prompt_v3.4.docx` | The same prompt as a Word document for sharing. Generated from the Markdown by `build-docx.js`. |
| `audit-v3.3-zh.md` | The audit of v3.3 that drove the v3.4 rewrite: evaluation criteria, 22 conflicts, 10 broken references, redundancy clusters, and the recommendations (Chinese). |
| `build-docx.js` | Markdown to Word builder (`node build-docx.js in.md out.docx`, needs the `docx` npm package). |

## How v3.4 is organized

- **Part 0** Non-negotiables. **Part P** project configuration: every project-specific value lives here as `P.NAME` with a default. **Part G** glossary: one name per thing.
- **Part C** context: readers, output contract, sources and authority, gap decision tree (Critical / Blocking / Non-blocking), owner markers, known failure patterns.
- **Part R** role. **Part A** action, Steps 1 to 6. **Part F** format, including the F3 column ownership matrix. **Part T** language and narration. **Part Q** the single QA table. **Part S** pre-delivery self-check.
- **Appendices 1 to 8**: interaction templates and worked examples, objective maps, slide planning, scenario artifacts, reviewer log, library entry, internal logs, and the optional combined first screen.

## Editing rules

Each rule has exactly one home; elsewhere cite the section ID. Change a project value in Part P, never in the body. After editing the Markdown, rebuild the Word file:

```bash
npm install docx
node build-docx.js Storyboard_Generator_Master_Prompt_v3.4.md Storyboard_Generator_Master_Prompt_v3.4.docx
```
