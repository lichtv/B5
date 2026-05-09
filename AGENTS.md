# 🤖 AGENT ROLES & WORKSPACE GOVERNANCE

This workspace follows a 3-tier architecture. Agents must identify their role based on the current tier:

### 🏛️ TIER 1: Master Architect (R&D)
- **Scope:** `01_Lichtv_System_Master/`
- **Role:** Maintain the "Source of Truth". Only perform core system updates, documentation refinement, and R&D for new skills.
- **Authority:** **FINANCE & P&L AUTHORITY.** All financial calculation engines, tax logic (PIT), and P&L dashboards reside strictly in this tier.
- **Rule:** Never allow customer-specific data to leak into this tier.

### 🚀 TIER 2: Production Agent (Operations)
- **Scope:** `02_AGOS_Commercial_Hub/`
- **Role:** Execute SME onboarding, campaign deployment, and lead tracking. Use templates from Tier 1.
- **Priority:** Projects must be deployed **ASAP** (High Priority). The legacy "30-Day LeanOS" is deprecated for this tier.
- **Rule:** **SANDBOX-FIRST MANDATORY.** All implementation must happen in `sandbox/` first. Move to `cdp/` ONLY after User/CEO approval ("Thống nhất"). Every project must have a `RESEARCH_LOG.md` and follow the `CLIENT_ONBOARDING_SPEC.md`.

### 🎓 TIER 3: Training Instructor (Sandbox)
- **Scope:** `03_B5_Training_Sandbox/`
- **Role:** Guide students through AI workflows. 
- **Framework:** Uses the **V3.0_30Days_LeanOS** curriculum for structured training.
- **Rule:** Do not deviate from the 30-day schedule unless specifically instructed.

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
- `admin/dashboard.html` - internal admin dashboard.
- `build.sh` - builds generated landing pages.
- `docs/` - source of truth for project rules, SOPs, blueprints. (NO FINANCE DATA).

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

- **Karpathy Protocol:** Follow [docs/karpathy_guidelines.md](file:///Users/mac/Library/CloudStorage/GoogleDrive-lichtv@gmail.com/.shortcut-targets-by-id/1-8YUtQWBFiEH5mEvaQJI-esJZvHl4ePY/PROJECT/READY2US/2026%20%7C%20vietnam-made/Project/01_Lichtv_System_Master/VietnamMade_Master/cdp/docs/karpathy_guidelines.md) for every coding task (Think Before Coding, Simplicity First, Surgical Changes, Goal-Driven).
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

---

## 🎯 AI Marketing Skills Deployment Strategy (v3.2.0)

Agents must select the appropriate skills from `cdp/docs/mkt_skills/` based on the project phase and market focus.

### 1. Phase-Based Skill Selection:

| Phase | Core Objective | Primary Skills (cdp/docs/mkt_skills/) |
| :--- | :--- | :--- |
| **Gate 0** | Research & USP | `08-nghien-cuu-doi-thu.md`, `09-insight-khach-hang.md`, `product-marketing-context.md` |
| **Onboarding** | Strategy & Planning | `00-ke-hoach-mkt.md`, `01-lich-noi-dung.md`, `10-tinh-kpi-nguoc.md` |
| **Production** | Execution & Growth | `03-danh-gia-hieu-suat.md`, `07-bao-cao-marketing.md`, `21-audit-ads-performance.md` |

### 2. Market-Focus Selection (Local vs. Global US):

#### 🇻🇳 Vietnam Local Focus:
- Use `benchmarks-vietnam.md` for industry standards.
- Use `09-insight-khach-hang.md` for local consumer behavior.
- **Backoffice (Agent 04):** Use `backoffice_skills/thue-tncn-vietnam.md` for tax, PIT 2026, and social insurance compliance.

#### 🇺🇸 Global US Focus (High-Priority):
Agents must prioritize the `mkt_skills/global_us/` library for US-bound projects (ATV, Viet-Ceramics US):
- **Outreach:** `global_us/cold-email.md`, `global_us/sales-enablement.md`.
- **Content/Psychology:** `global_us/copywriting.md`, `global_us/marketing-psychology.md`, `global_us/brand-storytelling.md`.
- **Conversion:** `global_us/page-cro.md`, `global_us/lead-magnets.md`, `global_us/email-sequence.md`.
- **Visibility:** `global_us/paid-ads.md`, `global_us/seo-audit.md`, `global_us/social-content.md`.

### 3. Agent Execution Rule:
- **Research First:** Trước khi viết code hoặc tạo nội dung cho khách hàng US, Codex/Antigravity BẮT BUỘC phải đọc tài liệu `global_us/copywriting.md` và `global_us/marketing-psychology.md` để đảm bảo văn phong và tâm lý học hành vi phù hợp với thị trường Mỹ.
- **Data-Driven:** Khi tính toán ngân sách, phải dùng `10-tinh-kpi-nguoc.md`.
