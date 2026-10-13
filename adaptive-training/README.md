# Adaptive training — MOD 13 DMCPG-5 Bloom-Ladder Placement

Regeneration of the v5 Word storyboard (*MOD13_DMCPG5_Bloom_Ladder_Placement_v5.docx*)
as a maintainable, reviewable package.

| File | What it is |
|---|---|
| [`storyboard-v6.md`](storyboard-v6.md) | The design source of truth — placement test, mastery metric, routing, misconception-tag registry, post-test parallel form, reporting, dominKnow build spec, QA checklist. Item content carried over from v5 verbatim. |
| [`prototype/index.html`](prototype/index.html) | A working, single-file, click-through prototype of the whole adaptive flow. Open it in any browser — no build, no server. |

## The prototype

- **Learner view** — the placement experience as a learner sees it: four scenario blocks,
  one attempt per question, no feedback, then mastery profile, refutation cards, adaptive
  learning path, section-test ladders and the growth report.
- **Designer view** (toggle, top right) — the same screens annotated with item IDs, Bloom
  levels, correct answers, misconception tags, distractor feedback, variable writes
  (`v_SO1_L …`), the routing map, change control and QA notes. The storyboard and the
  prototype stay one artifact.
- **Demo learner** — one click on the brief screen reproduces the storyboard's worked
  example (SO1 L3 · SO2 L1 · SO3 L0 · SO4 L2) so reviewers can inspect routing and
  reporting without answering all 12 items.

Scoring implements the consecutive-pass (Guttman) rule with the anomaly rule (a failed
lower rung caps the level); SCORM course score = mean of section-test ladders (L/3 per
SO) with skipped SOs credited L3 — both as specified in the storyboard.
