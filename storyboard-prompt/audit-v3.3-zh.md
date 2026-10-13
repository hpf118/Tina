# Storyboard Generator Master Prompt v3.3 审计报告

审计对象：Storyboard_Generator_Master_Prompt_Reconstructed_Complete_Screens_1-78.docx
审计日期：2026-09-20

## 0. 结论

v3.3 的骨架很强：CRAFT 分层、按角色归属的缺口标记、固定反馈措辞、验收清单、A4.2 组件最小信息表都是高质量设计。问题在于它是叠加式生长出来的：同一条规则平均出现 4 到 6 次，其中至少 20 处是真正互相矛盾的规则，另有 10 处引用指向不存在的模板或未定义的概念。最影响实际输出质量的三个冲突是：练习与测评行的内容归属哪一列（X4）、第 1 页是一屏还是两屏（X1）、Summary 能否复述目标（X2）。文档本身因为是从 78 张截图重建的，带有拆表、断句和丢编号的缺陷，直接粘贴进 AI 工具会被原样读入。

## 1. 检测标准

| # | 维度 | 判定方法 |
|---|---|---|
| 1 | 结构完整性 | 每个交叉引用落到真实存在的 section；步骤编号唯一且单调；每个内部产物恰好对应一个模板 |
| 2 | 单一事实来源 | 一条规则只在一处定义，其他地方只引用编号。统计每条规则出现的位置数，用 5-gram Jaccard 相似度找近似重复句 |
| 3 | 无矛盾 | 不存在两条同时不可满足的规则或不同默认值；同一个东西只有一个名字。把提示词自己的 "one slide, one term" 规则反用在它自己身上 |
| 4 | 规则与检查对齐 | 每条验收检查可追溯到前文一条规则；每条 must 规则有对应检查。只在检查里出现、前文无规则的要求算缺陷 |
| 5 | 可判定性 | 规则应能被读者判定通过或不通过。"appropriate""meaningful""where applicable" 无判据则算模糊 |
| 6 | 优先级明确 | 两条规则相撞时有明示的裁决顺序 |
| 7 | 项目无关性 | 文件自称 project-agnostic，项目常量应集中在配置块而非散落正文 |
| 8 | 示例覆盖 | 每种输出格式有一个通过全部规则的完整示例 |
| 9 | 缺口处理确定性 | 信息缺失时的行为是一棵有阈值的决策树 |
| 10 | 长度与位置效率 | 总 token、冗余率、关键规则是否处在模型注意力最弱的中段 |

### 基本数据

| 指标 | 值 |
|---|---|
| 字数 / 字符数 | 18,695 词 / 133,954 字符 |
| 估算 token | 约 25,000 |
| 编号小节 | 55 个，另加 6 个附录 |
| "unless" 出现次数 | 46 |
| "where applicable / when required" 类条件短语 | 23 |
| "appropriate" / "meaningful" | 15 / 22 |
| 近似重复句对，5-gram Jaccard ≥ 0.28 | 20 对，其中 10 对完全相同 |
| 规则重复簇，同一规则出现 ≥ 3 处 | 约 20 簇 |
| 分页符 / 跨页断句 | 77 / 至少 14 处 |

注：完全相同的 10 对里多数是示例答案文本的合法重复和被拆表格的重复表头，属于文档缺陷而非规则冗余。规则层面的近似重复以 A3.3 与 A5.3 那句 "Do not default to / use multiple choice when sorting, matching..." 为代表。

## 2. 冲突：两条规则不能同时满足，必须修

**X1 第 1 页是一屏还是两屏。** C3 默认 "Splash 标题页，随后一个简短 orientation 屏"，A2.3 前两段同样是两屏。但 A2.3 紧接着的 "Standardized Splash and Orientation Screen (Mandatory Slide 1)" 和 "Orientation Screen Lock" 规定第 1 页必须是合并的一屏、必须用 Tabs 三个标签加 Start 按钮。验收检查又说"当项目 Splash 合并两功能时出现两屏即拒绝"。A2.1 的必需流程 [Splash/Start] → [Introduction] 里没有 orientation 节点。此外这个 Mandatory 块自己违反 A3.2 和 A4.2 的 Tabs 规则，即每个面板只有一两句话时不得用 Tabs；也违反 C4.3 "约束只来自当前项目来源" 的原则，明显是某个具体项目的遗留设计。

**X2 Summary 能否复述目标。** A2.3 规定 Summary 以 "You should now be able to:" 开头并列出已批准的学习目标；验收检查却把 "the Summary repeats the learning objectives" 列为拒绝条件。Conclusion 需要 "completion statement, restated objectives, Exit button" 只出现在验收检查里，正文没有任何一条规则定义 Conclusion 的内容。A2.1 第一句写 "a Summary or Conclusion" 二选一，同段流程图却把两者列为两个节点。

**X3 步骤编号重复。** "Step 3" 同时指 Adapted Project Prompt（C2.3 表、A1.5）和 "Design the module architecture"（A2 标题）。A9 标题是 Step 4f，其下 A9.1 又叫 "Step 4"。A8 没有步骤号。用户说明里写 "Steps 0 through 4"，但 A3 到 A9 是 4a 到 4f。

**X4 练习和测评行的内容归属哪一列。** 这是对实际输出影响最大的冲突。F3.1 规定 Text Content 包含 "scenario, prompt, task instruction, options, ... required learner-visible feedback"，结构标签里也有 Feedback、Retry Guidance、Model Answer。A4.5 规定 "Move answers, mappings, attempts, scoring, feedback, and completion to Interaction" 但 "Keep learner-visible scenarios, prompts, instructions, options in Text Content"。T3 却规定 "Place scenarios, prompts, options, hints, answer explanations, and corrective feedback ... in the Interaction column"。F5.2 的 Mode 4 字段把 Question/Task、Options、三种 Feedback 全放在 Interaction 单元格。于是每一道题都面临：题干和选项要么两列重复，违反 "do not repeat"；要么只在 Interaction，违反 "Text Content 必须可独立理解"。

**X5 Final Incorrect 反馈措辞自相矛盾。** A5.2 要求 Final Incorrect Feedback 以 "That is incorrect." 开头；同一节又规定当组件自动揭示模型答案时 "the Final Incorrect Feedback uses the same text as the Correct Feedback"，而 Correct Feedback 以 "That is correct." 开头。附录 A 的 Mode 3 模板重复了这个错误。

**X6 叙述音频的放置规则自相矛盾。** T3 Placement 明令 Splash、Learning Objectives、practice、Summary、Conclusion 不得有叙述；同一节 Depth 段却说 "Brief narration is appropriate only for splash, navigation, transition, summary, conclusion ... slides"。

**X7 前置信息无处安放。** C3 要求记录 storyboard 版本日期、prompt 版本、来源文档版本、QC 版本、审核人、修订状态、未决决定；验收检查第 5 条把"有版本信息却未记录"列为失败。但 C2.2 锁定的可见输出只有 5 个块，没有任何一个块允许放这些信息，而"未决决定"又属于 C2.3 禁止导出的 SME 项。

**X8 控件名称不一致，提示词自己违反了 "one term per thing"。** 前进按钮在 A2.3 叫 "Forward/Next" 和 "Next"，在 A5.2、F1、F5.1 和 orientation 提示语里叫 "Continue"。音频控件在 A2.3 Tab 1 是 "Play, Pause, Replay, Skip Backward, Skip Forward"，Style 块是 "Pause, Replay, Skip Backward, Skip Forward" 没有 Play，T3 是 "Play/Pause and Replay"。"Transcript button" 一行写的是 "Stop, Pause, and Play controls for narration"，这在语义上是播放控件而不是字幕按钮。反馈状态在 F1 叫 "guided feedback / corrective feedback"，在 A5.2 叫 "First Incorrect Feedback (Hint) / Final Incorrect Feedback"。Developer Notes 必需行叫 "Performance target" 和 "Fallback"，验收检查叫 "Performance" 和 "Fallback"，F1 字段建议叫 "Performance" 和 "Fallbacks"。

**X9 派生目标的 Draft 标记去向不明。** A1.2 要求派生的 broad objective 标 "Draft — SME verification required"；A1.4 要求验证备注留在内部产物；C2.2 要求最终文档没有 "unfinished decisions"。三者合起来，可见的 Learning Objectives 表要么带着 Draft 标记，要么把未验证目标当已验证呈现。

**X10 缺口处理有四种行为、没有决策树。** C2.1 说"只问那一个阻断决定"；C4.3 Blocking Source Rule 说"停止起草受影响的页"；A8 说"只有 Development 无法构建时才把标记留在单元格"；C2.2 说最终文档 "free of placeholders ... unfinished decisions"；F3.2 又说学习者面向列不得含 "approval requests"，而缺口标记本身就是 approval request。什么算 critical、blocking、non-blocking 没有阈值。

**X11 Mode 2 示例违反 A4.2 的行为字段规则。** A4.2 明确 completion 属于 Development-owned 行为字段，不写入行内；F5.1 的 Mode 2 示例却写 "enable Continue after all tabs viewed"，且 Mode 2 字段清单要求 "Completion or Continue condition when required"。

**X12 Scenario Seed Log 字段两套。** C4.6 列的 10 个字段与附录 D1 的 10 列有 4 个不同：C4.6 有 scenario summary、audience or stakeholder、reusable use、source support status，D1 没有；D1 有 Context Clue、Possible Action、Possible Risk、Desired Outcome，C4.6 没有。

**X13 表格样式与模板保留相撞。** F2 要求 "set both tables to Table Grid or an equivalent style"，同节又要求使用客户模板时 "preserve ... shading, typography ... Do not substitute newly designed tables"，没有说哪个优先。

**X14 下划线。** T2.1 "underline only for hyperlinks"；F1 Typography 的 Subtitle 样式是 "Bold, 16 pt, Underlined"。

**X15 提示词自己的示例不符合自己的标点规则。** T2.1 要求片段不加标点；附录 A 的 MCQ 示例四个选项都是名词性从句却以句号结尾。A2.1 要求目标要点 "without punctuation"，但目标是完整祈使句，按 T2.1 完整句应加标点。

**X16 "Role Mode: [Design / QA]"** 中的 QA 模式全文再无定义。

**X17 A2.3 "Apply the first-screen decision from the control block"**，全文没有 "control block"。

**X18 数值上限规则的范围模糊。** A2.2 说 "do not impose project-independent numeric counts"，A2.1 却有 10 modules / 50 screens，T2.3 有 7 items / 2×4 panels / 3 acronyms。需要说明 A2.2 只约束交互数量。

**X19 无障碍默认值两说。** C3 说范围未指定时 "flag for confirmation"，A7.1 说 "use WCAG 2.2 Level AA as the default"。

**X20 [USE DEVELOPMENT STANDARD] 的说明** "Internal only; do not export it repeatedly" 前半句说不导出，后半句暗示可导出一次。

**X21 附录 A 的 "Correct answer logic" 行归属不明。** F5.2 字段清单没有这一行，且 F5.2 规定 "build logic ... stay in the Internal Slide Notes"，示例却把它写在单元格里。

**X22 Style 块的 Narration/VO 与 Transcript 行是无条件必需的**，验收检查 3 也无条件检查；但 T3 标题是 "(if in scope)"。无叙述项目会被迫写一条不适用的行。

## 3. 引用断裂与缺失模板

1. C2.3 说 Interaction and Assessment Map 模板在 Appendix C，Appendix C 只有 Slide Planning Row。
2. C2.3 说 Broad Learning Objective Map 和 Topic identification 在 Appendix B，Appendix B 只有 B1 和 B2。
3. C2.3 说 Supplemental Instructional Fidelity Evidence Log 在 Section A1.3，A1.3 是目标措辞规则，没有这个 log。
4. SME Verification List、Assumptions and Caveats、Design Decisions Requiring Confirmation 指向 C4.4，C4.4 只给了 4 个字段，没有模板。
5. Recommended Source Hierarchy 指向 C4.2，C4.2 没有模板。
6. T1 说 "reviewer-readability rules in Sections T2.1, A4.4, and A5.2"，A5.2 是尝试与反馈状态模型，应为 A4.5 或 A9.2。
7. C4.2 的 9 级权威栈与同节的 6 类 source role 是两套分类，没有映射；B1 用的是后者。
8. A4.2 表缺少 A3.3 提到的 Compare-and-Select、Ranking、Hotspot、Text-entry / Reflection / Builder、Drag-and-drop 的行。
9. 正式测评的默认尝试次数未定义，F1 只定义了 knowledge checks 两次尝试。
10. A9.1 第 14 条要求生成 Word 文件并逐页渲染检查，而 R 节说生成器是 Copilot；聊天式工具做不到这一步，规则会静默失效。

## 4. 冗余：同一规则多处出现

出现 3 次以上的规则簇里最重要的 15 个。"建议归属"是建议保留完整定义的唯一位置，其他处改为引用编号。

| 规则 | 出现位置 | 次数 | 建议归属 |
|---|---|---|---|
| 可见输出只含 5 个块，内部产物不导出 | 用户说明、lead-in、C2.1、C2.2、C2.3×2、A1.5、A9.1、F1、验收 | 9 | C2.2 |
| 全局约定不在行内重复 / Development-owned defaults | C4.5、A3.1、A4.2、A4.3、A5.2×2、A7.1、A8、A9.1、A9.2×2、F1、F5.1、F5.2、验收×2 | 14 | A4.2 段落 + F1 一句 |
| 列所有权与污染 | A4.5、F3.1、F3.2、F4、F5.1、A3.1、A9.1×2、A9.2×2、验收×4 | 13 | 新建一张所有权矩阵 |
| Developer Ready 阻断条件 | A4.1×2、A4.3、A8、A9.1、A9.2、F5.1、验收×2 | 9 | A8 |
| 学习者任务化重组 | A2.5、A2.6、C5、T2.3、A9.2、附录 C、验收×2 | 8 | A2.5 与 A2.6 合并 |
| Stem 必需 | C5、A5.3、F5.1、F5.2、A9.2、附录 A、验收 | 7 | F5.1 |
| 任务化目标而非分类学动词 | A1.3 内 5 次、C5、验收 | 7 | A1.3 一段 |
| 不得杜撰 | C4.1、C4.5、A6.1、A8、T3、验收 | 6 | C4.1 |
| 反馈措辞与尝试模型 | A5.2、F1、F5.2、附录 A、附录 D2、验收 | 6 | A5.2 |
| 明文配对而非索引码 | C5、A4.4、F5.1、A9.2、附录 A、验收 | 6 | A4.4 |
| 点击展示不算练习 | A3.2×2、A4.1、F5.1、A9.2、验收 | 6 | A3.2 |
| 三读者 / 开发者能否独立构建 | C1、R、T1、A9.2、验收开头 | 5 | T1 |
| 原生组件优先于定制多媒体 | A3.1、A6.1、A9.1、A9.2、验收 | 5 | A6.1 |
| 不带入旧项目内容 | Role and Task、C4.3、A2.3、T3 | 4 | C4.3 |
| 不默认用 MCQ | A3.3、A5.3 近逐字、验收 | 3 | A3.3 |

另外：A9.2 的 12 项门检与末尾 Acceptance Checks 的约 30 项有八成重叠，属于两份互相漂移的 QA 清单。R 节第一段与 "Role and Task" 首段几乎逐字相同。对比度 4.5:1 在 A7.1、Style 块、Developer Notes 三处各写一遍。源位置精度的字段清单在 C4.3、A1.2 第 4 条、B1 三处各写一遍。

## 5. 项目无关性泄漏

文件标题声称 project-agnostic，正文却硬编码了：CAF/DND 学员、Canadian spelling、CFTO 与 military documentation、LSC 标准与 10/50 上限、"member information / service numbers" 资产行、Helvetica 16 pt 字体、500 KB 性能目标、hotspots 回退方案、DominKnow 默认、intake 字段编号 26B 到 26H，以及整个 Mandatory Slide 1 设计。这些与 Role and Task 里 "Do not preserve legacy details ... from any previous project" 和 C4.3 "constraints apply only when supplied by current project sources" 直接冲突。

## 6. 模糊、不可判定的规则

"unless" 出现 46 次，"where applicable / when required" 类 23 次，"appropriate" 15 次，"meaningful" 22 次，多数没有判据。典型例子：A2.2 "unless the product type makes this inappropriate"，A3.2 "meaningful instructional practice"，A4.2 表格里大量 "where relevant"。每一处都把判断推给模型，模型在不同次运行会判断不同。

## 7. 文档本身的重建缺陷

这份 docx 从 78 张截图重建，含 77 个分页符。带来的缺陷：

- A4.2 组件表被拆成 3 张独立表格，表头重复 3 次，Compound activity 行被复制成一个残片行。
- C2.3 表尾多出一个 "tailored to the project" 残片行。
- 至少 14 处跨页断句被拆成两个段落，含 "cell mar / gins"、"Inter / action"、"organ- / ization" 三处断词。
- 验收检查开头两条丢失了编号。

## 8. 优化建议与优先级

### 先修这 7 项，它们直接改变输出

1. **列所有权矩阵。** 替换 A4.5、F3.1 后半、F3.2、T3 相关句。每一类对象一行：stem、options、feedback 三态、model answer、card 正反面、tab 面板、alt text、request 号、缺口标记、Narration/VO；列是 Text Content / Multimedia / Interaction / Internal Slide Notes。建议原则：所有学习者可见的文字只在 Text Content 出现一次，Interaction 只放对象标签、交叉引用、正确结果和反馈三态，Multimedia 只放布局、资产引用和 alt text。
2. **Slide 1。** 把 Mandatory Slide 1 移进项目配置块，默认按 C3 的两屏方案；配置块注明 "若客户 shell 采用合并页则启用"。删掉验收里那条只对合并页成立的检查，或改为条件句。
3. **Summary 与 Conclusion。** Summary 允许复述 outcomes，不引入新内容；Conclusion 含完成声明、下一步、Exit 控件说明。验收那条 "Summary repeats the learning objectives" 改为 "Summary introduces new information"。
4. **Final Incorrect 措辞。** 组件自动揭示答案时，写法改为：以 "That is incorrect." 开头，接 Correct Feedback 的解释部分，不复述配对或顺序，以 "Please continue." 结尾。同步改附录 A。
5. **缺口决策树。** 替换 C2.1、C4.3、A8、F3.2 里的四种说法。建议三级：Critical，影响整份文档范围或权威，只问用户一个问题；Blocking，影响学习者动作、答案、评分、安全或法律，该页保留但单元格内放 owner 标记且该行不得 Developer Ready；Non-blocking，其余全部进内部产物。在 F3.2 例外里加上 Blocking 标记。
6. **步骤号。** Step 0 intake、0A references、1 objectives、2 gate、3 architecture、4 slides 含 4a 到 4f、5 assemble and QA、6 Adapted Project Prompt 按需。全文 "Steps 0 through 4" 同步改。
7. **前置版本信息。** 在 Style 块之前加一个 "Document Control" 小块并写进 C2.2 的锁定顺序；未决决定仍留内部。

### 再做这 8 项，提升一致性与可维护性

8. **项目配置块。** 抽出 "P — PROJECT CONFIGURATION"，把第 5 节列出的所有常量改成变量：authoring tool、client、spelling variant、typography、performance target、fallback pattern、sensitive-data line、Slide 1 pattern、intake 字段编号。正文只引用变量名。
9. **单一事实来源。** 按第 4 节的表，每簇只保留"建议归属"处的完整定义，其余改为 "(A5.2)" 这种引用。估计可减少三到四成篇幅而不丢任何规则。
10. **合并 QA 清单。** A9.2 与 Acceptance Checks 合为一张表，列为 Check ID、Rule ID、通过条件、严重级别。反向核对：Conclusion 内容、Start 打开 Introduction 这类只有检查没有规则的，补规则。
11. **补齐或删除缺失模板。** Interaction and Assessment Map、Broad LO Map、Supplemental Fidelity Log、SME Verification List、Assumptions and Caveats、Recommended Source Hierarchy。补 A4.2 缺的组件行。定义正式测评的默认尝试次数。
12. **术语表。** Continue 与 Next 二选一，音频控件一套，反馈状态一套名字，source role 与权威等级的映射，Developer Ready / Revise / Blocked 三种行状态的定义。
13. **补示例并保证示例自身通过规则。** 一整行 Mode 2 三列齐全、一整行 Mode 3 matching、一个 Multimedia 单元格、一行 LO 表。修掉现有 MCQ 示例的标点问题，并决定 "Correct answer logic" 那行是单元格内容还是内部笔记。
14. **处理条件词。** 逐条处理 46 个 "unless" 和 23 个 "where applicable"：要么给出判据，要么删除。
15. **末尾自检块。** 在提示词末尾加一个 10 条以内的"交付前自检"，利用模型对末尾内容的注意力优势。

### 长度与工具限制

全文约 2.5 万 token。R 节写明生成器是 Copilot，而多个聊天类工具对指令的上限在 8,000 字符左右，例如 Copilot Studio 的 agent instructions 和自定义 GPT 的 instructions；本文件是 134,000 字符，整段粘贴要么被截断，要么只能作为附件与源材料争抢上下文。请核实实际使用的工具的上限。无论上限如何，长提示词中段的规则最容易被忽略，A5.2 的反馈措辞恰好处在正中间。完成第 9 条后目标是正文 8,000 到 10,000 词，模板和示例拆成附件。

### 修文档本身

合并被拆开的 A4.2 表格，删除残片行，接回断句，恢复验收检查前两条的编号。之后重新导出时从源文件而不是截图重建。
