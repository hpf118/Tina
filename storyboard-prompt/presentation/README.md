# Presentation: Transforming Learning Design at Scale

A ten-minute deck for visitors to the Learning Support Centre, presenting the team-based, practitioner-governed AI storyboarding tool.

- `AI-Storyboarding-Transforming-Learning-Design-at-Scale.pptx`: twelve slides, 16:9, with the full script in the speaker notes.
- `Presentation-Script.md` / `.docx`: the same script with a timing plan (10 min 25 s) and answers to likely questions.

## Structure

| Slides | Content | Origin |
|---|---|---|
| 1 to 4 | Title; TPACK; prompt development (OPUS, CRAFT, control gates); educator knowledge in numbers | Unchanged from the earlier deck, embedded as full-slide images |
| 5 | From TPACK to a working tool: client sources (CK), practitioner pedagogy (PK) and platform and AI knowledge (TK) joined in the master prompt, then storyboard, developer, DominKnow course | New |
| 6 | The CRAFT prompt in one view, replacing the earlier one-slide-per-letter walkthrough | Consolidates earlier slides 5 to 11 |
| 7 | One standard, six kinds of expertise: the socio-technical model (people decide, the process gates, the technology drafts) and what it changes for the team | New |
| 8 | Three ways the team uses it: generate, standardize, convert | New |
| 9 | Quality governed by reviewers: the comment-to-rule-to-check loop with five real reviewer comments | Consolidates earlier slides 12 to 15 |
| 10 | Where it still falls short: presentation of information, human review, no outside benchmark | New |
| 11 | The platform, not the prompt, is now the limit: today versus what scale needs, and the two routes tried | New |
| 12 | Where we would welcome your expertise: a benchmark, a path to scale, an exchange | New |

## Rebuilding

`build/build.js` generates slides 5 to 12 with pptxgenjs and reads the speaker notes from `build/notes.json`; `build/make_script.py` turns the same notes into `Presentation-Script.md`. Slides 1 to 4 are read from `orig/keep1.png` to `orig/keep4.png`, rendered at 192 dpi from the PDF export of the earlier deck (not committed; render them with PyMuPDF from the original PDF or export the four slides from the original `.pptx` as PNG). Run:

```
npm install pptxgenjs sharp react-icons react react-dom
node build/build.js AI-Storyboarding-Transforming-Learning-Design-at-Scale.pptx
python3 build/make_script.py Presentation-Script.md
```

To replace the four embedded slides with the original editable ones, open both decks in PowerPoint and paste slides 1 to 4 from the earlier deck with "Keep Source Formatting".
