# Codex Project Context: `sandbox` (Tier 1 R&D)

This workspace contains the `sandbox` project for VietnamMade / Ready2US / AGOS.
This is the **ONLY** location where Finance and P&L development is permitted.

## Project Shape

Main project directory:

- `sandbox/`

Important files and folders:

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

## Required Reading By Task

For any task, first read:

- `docs/PROJECT_MAP.md`
- `docs/rules.md`

For Finance/P&L dashboard tasks, read in this order:

1. `docs/PROJECT_MAP.md`
2. `docs/PNL_DASHBOARD_IMPLEMENTATION_WORKFLOW.md`
3. `docs/MODEL_AND_BILLING_OPTIMIZATION.md`
4. One specialized P&L doc relevant to the current layer.
5. Only 1-3 code files relevant to the task.

Specialized P&L docs:

- `docs/prd-antigravity-pl-module.md`
- `docs/module-pl-dashboard-antigravity.md`
- `docs/ui-spec-antigravity-pl.md`
- `docs/wireframe-antigravity-pl.md`
- `docs/design-tokens-component-props.md`
- `docs/antigravity-pnl-implementation-guide.md`

## Finance/P&L Rules

For changes involving `pnl_dashboard.html`, `admin/dashboard.html`, `scripts/finance_api.gs`, KPI dictionary, variance, alert/action, export, or governance:

- Start from `docs/PNL_DASHBOARD_IMPLEMENTATION_WORKFLOW.md`.
- Lock scope before editing: dashboard/layer, data version, grain, files allowed, acceptance criteria.
- Define or confirm data contract before UI work.
- Keep formula, sign normalization, variance, and status rules in the computation/data contract layer, not hard-coded ad hoc in UI.
- Include loading, empty, and error states for user-facing dashboard changes.
- Update `docs/CHANGELOG.md` for important changes.
