# 🤖 AGENT ROLES & WORKSPACE GOVERNANCE

This workspace follows a 3-tier architecture. Agents must identify their role based on the current tier:

### 🏛️ TIER 1: Master Architect (R&D)
- **Scope:** `01_Lichtv_System_Master/`
- **Role:** Maintain the "Source of Truth". Only perform core system updates, documentation refinement, and R&D for new skills.
- **Rule:** Never allow customer-specific data to leak into this tier.

### 🚀 TIER 2: Production Agent (Operations)
- **Scope:** `02_AGOS_Commercial_Hub/`
- **Role:** Execute SME onboarding, campaign deployment, and lead tracking. Use templates from Tier 1.
- **Rule:** Every project must have a `RESEARCH_LOG.md` and follow the `CLIENT_ONBOARDING_SPEC.md`.

### 🎓 TIER 3: Training Instructor (Sandbox)
- **Scope:** `03_B5_Training_Sandbox/`
- **Role:** Guide students through AI workflows using the simplified V2 Legacy framework.
- **Rule:** Do not upgrade to V3 logic unless specifically instructed.

---

## Project Shape

Main project directory:

- `cdp/` (Production Hub)
- `sandbox/` (R&D Sandbox)

Important files and folders (inside `cdp/` or `sandbox/`):

- `sections/vi/` - Vietnamese landing page source sections.
- `sections/en/` - English landing page source sections.
- `sections/shared/` - shared UI sections.
- `templates/` - page wrappers used by the build process.
- `index.js` - centralized frontend behavior.
- `index.css` - centralized styling and design tokens.
- `lead_api.js` - lead capture / UTM tracking gateway.
- `Code.js` - main Google Apps Script backend.
- `scripts/finance_api.gs` - finance/P&L Apps Script API.
- `pnl_dashboard.html` - finance/P&L dashboard.
- `admin/dashboard.html` - internal admin dashboard.
- `build.sh` - builds generated landing pages.
- `docs/` - source of truth for project rules, P&L workflow, SOPs, blueprints.

Generated output files:

- `index.html`
- `en.html`

Do not edit generated output directly. Edit source files in `sections/`, `templates/`, `index.js`, or `index.css`, then run the build script when needed.

## Required Reading By Task

For any task, first read:

- `docs/PROJECT_MAP.md`
- `docs/rules.md`

For landing page, funnel, lead capture, or deployment tasks, also read:

- `docs/SOP_DEPLOYMENT.md`
- Relevant source section/template/JS/CSS files only.

For AI Workforce / OPC tasks, read in this order:

1. `docs/PROJECT_MAP.md`
2. `docs/opc/OPC_MASTER_SPEC.md`
3. `docs/opc/OPC_BA_SPEC.md`
4. `docs/opc/OPC_IMPLEMENTATION_PLAYBOOK.md`
5. `docs/opc/OPC_CODEX_TASKS.md`

## Context Discipline

- Prefer `rg` and `rg --files` to find files and sections.
- Do not read all docs or all code by default.
- Avoid opening `cdp/index.html`, `cdp/en.html`, image files, `.git`, or large prototypes unless the task explicitly requires it.
- Keep each coding task scoped to 1-3 files when possible.
- If a task spans data model, computation/API, UI, governance, and export, split it into separate tasks.

## Coding Rules

- Preserve the existing modular architecture.
- Keep frontend behavior centralized in `cdp/index.js`.
- Keep shared/custom styles in `cdp/index.css`.
- Do not duplicate large inline scripts/styles inside sections unless there is a strong reason.
- For Google Apps Script, keep runtime endpoints and secrets out of committed source.
- Never hard-code API keys, tokens, or production secrets.
- Do not run `git push` unless the project owner explicitly approves it.
- Do not use destructive git commands unless explicitly requested.

## AI Workforce / OPC Rules

For changes involving Company-ization, re-branding projects, or OPC task execution:

- **Context First:** Codex must read the project-specific `context_pack` (e.g., `Viet-Ceramics/context/project_brief.md`) before editing.
- **Master Rule:** Do not modify the original AGOS/Ready2US modules unless explicitly asked. Work in the project's sandbox.
- **Git Baseline:** Always check `git status` and create a baseline commit before starting a re-brand task.
- **Clean Cleanup:** Remove all template placeholders, sample images, and legacy campaign metadata that doesn't belong to the new brand.
- **Build & QA:** Run `./build.sh` and report the diff. Mention any gaps in the context (missing logos, colors, etc.).
- **Approval:** Only move from sandbox to production when the User/CEO Agent confirms "Thống nhất".

## Anti/Antigravity And Codex Workflow

Use Anti/Antigravity mainly for:

- Planning and architecture.
- Long PRD or blueprint reasoning.
- KPI dictionary, data contract, governance, and phase planning.

Use Codex IDE mainly for:

- Editing files directly.
- Running local commands and build checks.
- Debugging logs.
- Reviewing diffs.
- Updating changelog and implementation docs.

Do not let Anti/Antigravity and Codex edit the same file at the same time. Before switching tools, check the current diff/status and continue from the latest workspace state.

## Verification

When code changes are made:

- Run the smallest relevant verification command.
- For section/template changes, run `cdp/build.sh` if appropriate.
- For JS/CSS/dashboard changes, inspect the changed file and run any available local checks.
- If verification cannot be run, state why in the final response.

