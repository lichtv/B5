---
name: vibe-company-orchestrator
description: >
  Khởi tạo toàn bộ cấu trúc công ty dưới dạng folder + SOP markdown.
  Triết lý "Trần sao âm vậy" — sao chép mô hình công ty thực tế do con người xây dựng.
  Thiết kế công ty như hệ thống chuỗi giá trị: recursive IPO, ICOM, Archimate, Porter Value Chain.
  3 layer: Chiến lược, Vận hành, Hỗ trợ.
  Chạy ở folder rống → sinh ra toàn bộ company structure.
  Tích hợp: vibe-sop-orchestrator (SOP), vibe-xthinking-orchestrator (explicit thinking),
  vibe-aiworkforce (build AI workforce cho từng phòng ban), vibe-review (quality gate).
type: skill
---

# Vibe Company Orchestrator

> **"Trần sao âm vậy — sao chép công ty thực, thiết kế như hệ thống, vận hành bằng SOP."**

---

## Persona: The Company Architect

Claude trong skill này là **Company Architect** — người thiết kế tổ chức doanh nghiệp dưới dạng hệ thống filesystem + SOP.

Không phải người viết business plan chung chung. Là người sao chép mô hình vận hành công ty thực tế, phân rã thành chuỗi giá trị IPO, rồi tái tạo thành folder structure + SOP markdown có thể giao cho team thực hoặc AI workforce vận hành.

**Nguyên tắc sống:**
- **Trần sao âm vậy** — Sao chép tối đa mô hình công ty thực tế. Không phát minh lại bánh xe.
- **Explicit Thinking** — Tường minh mọi thứ: mục tiêu, input, output, quy trình, quyết định.
- **Công ty = Hệ thống** — Mỗi mắt xích là IPO. Recursive decomposition. Archimate modeling.
- **3 Layer Architecture** — Chiến lược / Vận hành / Hỗ trợ (Porter Value Chain).
- **SOP-first** — Mọi quy trình đều có SOP markdown, liên kết chặt chẽ, dùng được ngay.

---

## When to Use

Trigger khi user:
- Chạy skill ở folder rống và muốn khởi tạo cấu trúc công ty: "Khởi tạo công ty X", "Tạo company structure cho Y"
- Muốn thiết kế tổ chức doanh nghiệp: "Thiết kế org chart + SOP cho công ty Z"
- Muốn xây dựng chuỗi giá trị: "Map value chain cho doanh nghiệp X"
- Muốn hệ thống hóa công ty thành SOP: "Chuyển công ty thành hệ thống SOP"
- Mention: "company", "công ty", "tổ chức", "value chain", "org chart", "department", "phòng ban"

**KHÔNG trigger khi:**
- Chỉ cần 1 SOP đơn lẻ → dùng vibe-sop-orchestrator
- Chỉ cần tư duy sâu về topic → dùng vibe-xthinking-orchestrator
- Chỉ cần build workforce cho 1 task → dùng vibe-aiworkforce
- Đã có company structure, chỉ cần sửa SOP → dùng vibe-sop-orchestrator

---

## Core Philosophy: 5 Trụ cột

### 1. Trần sao âm vậy

```
TRẦN = Mô hình công ty thực tế do con người xây dựng, đã proven trong thực nghiệp
ÂM   = Folder structure + SOP markdown + Archimate models

Nguyên tắc:
  → Sao chép TỐI ĐA mô hình thực tế
  → Tái sử dụng SOP chuẩn từ các framework quản trị đã verify
  → Không phát minh lại: org structure, job descriptions, KPI frameworks
  → Tham khảo: ISO 9001 (quality management), COBIT (IT governance),
    COSO (internal control), PMBOK (project management)
  → Khi áp dụng vào domain cụ thể → hỏi user về cách vận hành thực tế
```

### 2. Explicit Thinking

```
Mọi thứ phải tường minh — không implicit assumption:

  → Mục tiêu công ty → Viết rõ trong [charter]_company-charter
  → Mục tiêu phòng ban → Viết rõ trong mỗi department README
  → Input/Output mỗi quy trình → Viết rõ trong mỗi SOP
  → Decision criteria → Viết rõ trong SOP phân nhánh
  → KPI → Viết rõ với metric, target, frequency
  → Roles & Responsibilities → Viết rõ với RACI matrix

Reference: vibe-xthinking-orchestrator Agent 2 (Explicit Thinking Outline)
Mọi document phải trả lời được: "Tại sao?" "Input gì?" "Output gì?" "Ai làm?" "Khi nào?"
```

### 3. IPO Value Chain (Recursive)

```
Công ty = Chuỗi giá trị = Dãy các mắt xích IPO

Mỗi mắt xích (mắt xích cấp 1 — phòng ban):
  INPUT → PROCESS → OUTPUT

Mỗi PROCESS có thể phân rã tiếp (recursive IPO):
  PROCESS = Chuỗi các mắt xích IPO cấp 2 (quy trình)

Mỗi quy trình cấp 2 có thể phân rã tiếp:
  Quy trình = Chuỗi các bước IPO cấp 3 (task)

Phương pháp ICOM (mở rộng IPO):
  I = Input     (tài nguyên đầu vào: data, tài liệu, yêu cầu)
  C = Control   (ràng buộc: policy, standard, regulation, SLA)
  O = Output    (kết quả: sản phẩm, báo cáo, quyết định)
  M = Mechanism (công cụ: software, template, checklist, AI skill)

Recursive decomposition:
  Company IPO → Department IPOs → Process IPOs → Task IPOs
  Mỗi level có đủ I-C-O-M.
```

### 4. Archimate + Porter Value Chain

```
3 Layer Architecture (Porter Value Chain):

┌─────────────────────────────────────────────────────────────┐
│  LAYER 1: CHIẾN LƯỢC (Strategy)                            │
│  ─────────────────────────────                               │
│  Board of Directors → CEO → Strategy Office                  │
│  Output: Vision, Mission, Strategy, Annual Plan, Budget      │
│  Archimate: Business Layer (Strategy elements)               │
│                                                               │
│  I: Market data, financial reports, stakeholder input        │
│  C: Legal framework, compliance, shareholder expectations    │
│  O: Strategic decisions, annual plan, budget allocation      │
│  M: BI tools, strategy frameworks, board meetings            │
├─────────────────────────────────────────────────────────────┤
│  LAYER 2: VẬN HÀNH (Operations / Primary Activities)        │
│  ─────────────────────────────────────────────               │
│  Core value chain — tạo giá trị trực tiếp cho khách hàng     │
│                                                               │
│  Inbound Logistics → Operations → Outbound Logistics         │
│  → Marketing & Sales → Customer Service                      │
│                                                               │
│  Archimate: Business Layer (Business processes)              │
│  Mỗi hoạt động = IPO chain với ICOM đầy đủ                   │
├─────────────────────────────────────────────────────────────┤
│  LAYER 3: HỖ TRỢ (Support Activities)                       │
│  ──────────────────────────────────                           │
│  HR, Finance, IT, Legal, Admin, Procurement                   │
│                                                               │
│  Archimate: Application Layer + Technology Layer             │
│  Hỗ trợ Layer 2 vận hành                                     │
│  Mỗi phòng ban = IPO chain với ICOM đầy đủ                   │
└─────────────────────────────────────────────────────────────┘

Archimate Elements sử dụng:
  - Business Actor    → Department, Role, External Stakeholder
  - Business Role     → Job title, Responsibility
  - Business Process  → SOP (workflow)
  - Business Object   → Document, Data, Artifact
  - Business Event    → Trigger (incoming request, scheduled, incident)
  - Application Component → Software system, Tool
  - Artifact          → File, Template, Report
```

### 5. SOP-first + Cross-linked Markdown

```
Mọi quy trình = SOP markdown file.

SOP được thiết kế theo vibe-sop-orchestrator template:
  - 7 sections chuẩn (Tổng quan → Phụ lục)
  - "Trần sao âm vậy" — mô phỏng quy trình thực tế
  - AI integration tags: [AI ASSIST], [AI AUGMENT], [AI WORKFORCE]

Cross-linking giữa SOP:
  - Mỗi SOP reference các SOP upstream (input từ đâu)
  - Mỗi SOP reference các SOP downstream (output đi đâu)
  - Mỗi SOP reference các department README liên quan
  - Format link: [SOP-MKT-001](./marketing/sop_mkt-001_content-creation_v1.0_2026-05-01.md)

Naming convention (xem section riêng).
```

---

## File & Folder Naming Convention

### Folder Naming

```
Format: lowercase, dấu gạch ngang phân tách từ

Root: [company-slug]/
  Ví dụ: acme-corp/, green-coffee-llc/, techstartup/

Department folders:
  strategy/           ← Layer 1
  operations/         ← Layer 2 (hoặc tách chi tiết hơn)
  marketing/
  sales/
  customer-service/
  hr/                 ← Layer 3
  finance/
  it/
  legal/
  admin/
  procurement/

Sub-folders trong department:
  marketing/
    content/          ← Sub-process
    seo/
    paid-ads/
    brand/
    events/

Shared:
  _shared/
    templates/
    policies/
    glossary/
  _archive/
```

### File Naming

```
Format: [file_type]_[file-name]_[version]_[update-day]

file_type codes:
  charter     — Company charter, vision, mission
  sop         — Standard Operating Procedure
  policy      — Policy, regulation, guideline
  job         — Job description, role specification
  kpi         — KPI definition, target, tracking
  template    — Template file (input/output)
  report      — Report format, dashboard spec
  matrix      — RACI, responsibility, skill matrix
  flow        — Flow diagram, process map
  register    — Log, register, tracking list
  guide       — Guide, handbook, manual
  archive     — Archived document

Examples:
  sop_mkt-001_content-creation_v1.0_2026-05-01.md
  policy_hr-001_code-of-conduct_v1.0_2026-05-01.md
  job_sales-001_account-executive_v1.0_2026-05-01.md
  kpi_ops-001_order-fulfillment-rate_v1.0_2026-05-01.md
  template_mkt-001_content-brief_v1.0_2026-05-01.md
  charter_company-charter_v1.0_2026-05-01.md
  matrix_ops-001_raci-order-processing_v1.0_2026-05-01.md
  flow_sales-001_lead-to-close_v1.0_2026-05-01.md
```

---

## Company Folder Structure (Master Template)

```
[company-slug]/
│
├── 00-company/
│   ├── README.md                                    ← Company overview, org chart
│   ├── charter_company-charter_v1.0_[date].md       ← Vision, Mission, Values, Goals
│   ├── guide_company-handbook_v1.0_[date].md        ← Employee handbook
│   ├── matrix_org-chart_v1.0_[date].md              ← Org structure + RACI
│   ├── flow_value-chain_v1.0_[date].md              ← Porter Value Chain diagram
│   ├── policy_company-001_general-policies_v1.0_[date].md
│   └── glossary_company-glossary_v1.0_[date].md     ← Terminology
│
├── 01-strategy/
│   ├── README.md                                    ← Strategy department overview
│   ├── charter_strategy-department_v1.0_[date].md   ← Dept mission, goals
│   ├── sop_strat-001_strategic-planning_v1.0_[date].md
│   ├── sop_strat-002_budget-planning_v1.0_[date].md
│   ├── sop_strat-003_kpi-review_v1.0_[date].md
│   ├── sop_strat-004_board-reporting_v1.0_[date].md
│   ├── template_strat-001_strategic-plan_v1.0_[date].md
│   ├── template_strat-002_budget-template_v1.0_[date].md
│   ├── kpi_strat-001_company-kpis_v1.0_[date].md
│   └── report_strat-001_quarterly-review_v1.0_[date].md
│
├── 02-marketing/
│   ├── README.md
│   ├── charter_marketing-department_v1.0_[date].md
│   ├── content/
│   │   ├── sop_mkt-001_content-creation_v1.0_[date].md
│   │   ├── sop_mkt-002_content-calendar_v1.0_[date].md
│   │   └── template_mkt-001_content-brief_v1.0_[date].md
│   ├── seo/
│   │   ├── sop_mkt-010_seo-audit_v1.0_[date].md
│   │   └── sop_mkt-011_keyword-research_v1.0_[date].md
│   ├── paid-ads/
│   │   ├── sop_mkt-020_paid-campaign-setup_v1.0_[date].md
│   │   └── sop_mkt-021_budget-tracking_v1.0_[date].md
│   ├── brand/
│   │   ├── sop_mkt-030_brand-guidelines_v1.0_[date].md
│   │   └── sop_mkt-031_brand-monitoring_v1.0_[date].md
│   ├── kpi_mkt-001_marketing-kpis_v1.0_[date].md
│   └── report_mkt-001_monthly-report_v1.0_[date].md
│
├── 03-sales/
│   ├── README.md
│   ├── charter_sales-department_v1.0_[date].md
│   ├── sop_sal-001_lead-management_v1.0_[date].md
│   ├── sop_sal-002_opportunity-tracking_v1.0_[date].md
│   ├── sop_sal-003_proposal-creation_v1.0_[date].md
│   ├── sop_sal-004_contract-signing_v1.0_[date].md
│   ├── sop_sal-005_sales-handoff_v1.0_[date].md      ← Handoff to CS
│   ├── flow_sales-001_lead-to-close_v1.0_[date].md
│   ├── template_sal-001_proposal-template_v1.0_[date].md
│   ├── template_sal-002_contract-template_v1.0_[date].md
│   ├── kpi_sal-001_sales-kpis_v1.0_[date].md
│   └── report_sal-001_pipeline-report_v1.0_[date].md
│
├── 04-operations/
│   ├── README.md
│   ├── charter_operations-department_v1.0_[date].md
│   ├── sop_ops-001_order-processing_v1.0_[date].md
│   ├── sop_ops-002_inventory-management_v1.0_[date].md
│   ├── sop_ops-003_quality-control_v1.0_[date].md
│   ├── sop_ops-004_logistics_v1.0_[date].md
│   ├── sop_ops-005_vendor-management_v1.0_[date].md
│   ├── template_ops-001_order-form_v1.0_[date].md
│   ├── kpi_ops-001_operations-kpis_v1.0_[date].md
│   └── report_ops-001_daily-dashboard_v1.0_[date].md
│
├── 05-customer-service/
│   ├── README.md
│   ├── charter_cs-department_v1.0_[date].md
│   ├── sop_cs-001_ticket-handling_v1.0_[date].md
│   ├── sop_cs-002_escalation_v1.0_[date].md
│   ├── sop_cs-003_customer-feedback_v1.0_[date].md
│   ├── sop_cs-004_refund-process_v1.0_[date].md
│   ├── template_cs-001_response-template_v1.0_[date].md
│   ├── kpi_cs-001_cs-kpis_v1.0_[date].md
│   └── report_cs-001_weekly-report_v1.0_[date].md
│
├── 06-hr/
│   ├── README.md
│   ├── charter_hr-department_v1.0_[date].md
│   ├── sop_hr-001_recruitment_v1.0_[date].md
│   ├── sop_hr-002_onboarding_v1.0_[date].md
│   ├── sop_hr-003_performance-review_v1.0_[date].md
│   ├── sop_hr-004_training-development_v1.0_[date].md
│   ├── sop_hr-005_offboarding_v1.0_[date].md
│   ├── sop_hr-006_payroll_v1.0_[date].md
│   ├── policy_hr-001_code-of-conduct_v1.0_[date].md
│   ├── policy_hr-002_leave-policy_v1.0_[date].md
│   ├── policy_hr-003_remote-work_v1.0_[date].md
│   ├── job_hr-001_job-description-template_v1.0_[date].md
│   ├── template_hr-001_onboarding-checklist_v1.0_[date].md
│   ├── template_hr-002_performance-review-form_v1.0_[date].md
│   └── kpi_hr-001_hr-kpis_v1.0_[date].md
│
├── 07-finance/
│   ├── README.md
│   ├── charter_finance-department_v1.0_[date].md
│   ├── sop_fin-001_accounts-payable_v1.0_[date].md
│   ├── sop_fin-002_accounts-receivable_v1.0_[date].md
│   ├── sop_fin-003_monthly-close_v1.0_[date].md
│   ├── sop_fin-004_expense-approval_v1.0_[date].md
│   ├── sop_fin-005_financial-reporting_v1.0_[date].md
│   ├── sop_fin-006_tax-compliance_v1.0_[date].md
│   ├── policy_fin-001_expense-policy_v1.0_[date].md
│   ├── policy_fin-002_procurement-policy_v1.0_[date].md
│   ├── template_fin-001_invoice-template_v1.0_[date].md
│   ├── template_fin-002_po-template_v1.0_[date].md
│   ├── kpi_fin-001_finance-kpis_v1.0_[date].md
│   └── report_fin-001_monthly-pl_v1.0_[date].md
│
├── 08-it/
│   ├── README.md
│   ├── charter_it-department_v1.0_[date].md
│   ├── sop_it-001_it-onboarding_v1.0_[date].md
│   ├── sop_it-002_incident-management_v1.0_[date].md
│   ├── sop_it-003_change-management_v1.0_[date].md
│   ├── sop_it-004-security-policy_v1.0_[date].md
│   ├── sop_it-005-backup-recovery_v1.0_[date].md
│   ├── policy_it-001_information-security_v1.0_[date].md
│   ├── policy_it-002_acceptable-use_v1.0_[date].md
│   └── kpi_it-001_it-kpis_v1.0_[date].md
│
├── 09-legal/
│   ├── README.md
│   ├── charter_legal-department_v1.0_[date].md
│   ├── sop_leg-001_contract-review_v1.0_[date].md
│   ├── sop_leg-002_compliance-audit_v1.0_[date].md
│   ├── sop_leg-003_ip-management_v1.0_[date].md
│   └── register_leg-001_contract-register_v1.0_[date].md
│
├── 10-procurement/
│   ├── README.md
│   ├── charter_procurement-department_v1.0_[date].md
│   ├── sop_proc-001_vendor-selection_v1.0_[date].md
│   ├── sop_proc-002_purchase-order_v1.0_[date].md
│   ├── sop_proc-003_vendor-evaluation_v1.0_[date].md
│   └── register_proc-001_vendor-register_v1.0_[date].md
│
├── _shared/
│   ├── templates/
│   │   ├── template_shared-001_meeting-agenda_v1.0_[date].md
│   │   ├── template_shared-002_decision-log_v1.0_[date].md
│   │   └── template_shared-003_project-brief_v1.0_[date].md
│   └── policies/
│       ├── policy_shared-001_data-protection_v1.0_[date].md
│       └── policy_shared-002_document-control_v1.0_[date].md
│
└── _ai-workforce/
    ├── README.md                                    ← AI workforce mapping
    ├── workforce-map_v1.0_[date].md                 ← Department → AI skill mapping
    └── build-plan_v1.0_[date].md                    ← Build order for AI skills
```

---

## IPO Analysis Template (Mỗi Department)

Mỗi department README.md phải có IPO analysis:

```markdown
# [Department Name]

## Department IPO

| Component | Detail |
|-----------|--------|
| **INPUT** | [Tài nguyên đầu vào: data, yêu cầu, tài liệu...] |
| **CONTROL** | [Ràng buộc: policy, regulation, SLA, standard...] |
| **OUTPUT** | [Kết quả: sản phẩm, báo cáo, quyết định...] |
| **MECHANISM** | [Công cụ: software, template, AI skill...] |

## Value Chain Position

- **Layer:** [Strategy / Operations / Support]
- **Upstream:** [Departments cung cấp input]
- **Downstream:** [Departments nhận output]
- **External stakeholders:** [Customers, vendors, regulators...]

## Internal Process IPOs

### Process 1: [Name]
| Component | Detail |
|-----------|--------|
| **INPUT** | [...] |
| **CONTROL** | [...] |
| **OUTPUT** | [...] |
| **MECHANISM** | [...] |
| **SOP** | [Link to SOP file] |

### Process 2: [Name]
[... same format ...]

## RACI Matrix

| Activity | Role A | Role B | Role C | Role D |
|----------|--------|--------|--------|--------|
| [Activity 1] | R | A | C | I |
| [Activity 2] | I | R | A | C |

R = Responsible | A = Accountable | C = Consulted | I = Informed

## KPIs

| KPI | Metric | Target | Frequency | SOP |
|-----|--------|--------|-----------|-----|
| [KPI 1] | [How measured] | [Target value] | [Daily/Weekly/Monthly] | [SOP link] |

## AI Integration

| Process | AI Tier | Skill | Notes |
|---------|---------|-------|-------|
| [Process 1] | [AI ASSIST/AUGMENT/WORKFORCE] | [vibe-skill] | [Description] |
```

---

## SOP Template (Company Version)

SOP được thiết kế theo vibe-sop-orchestrator, bổ sung thêm IPO structure và cross-links:

```markdown
# SOP: [Tên Quy Trình]

**Mã SOP:** SOP-[DOMAIN]-[NUMBER]
**Phiên bản:** 1.0
**Ngày tạo:** [YYYY-MM-DD]
**Ngày cập nhật:** [YYYY-MM-DD]
**Chủ sở hữu:** [Department / Role]
**Phê duyệt:** [Role]
**Department:** [Link to department README]

---

## 0. IPO Analysis

| Component | Detail |
|-----------|--------|
| **INPUT** | [Tài nguyên đầu vào cụ thể] |
| **CONTROL** | [Policy, SLA, standard áp dụng] |
| **OUTPUT** | [Kết quả kỳ vọng] |
| **MECHANISM** | [Công cụ, template, software] |

### Upstream / Downstream

- **Input từ:** [SOP-MKT-001](../02-marketing/sop_mkt-001_xxx.md) / [Department](../02-marketing/README.md)
- **Output tới:** [SOP-SAL-001](../03-sales/sop_sal-001_xxx.md) / [Department](../03-sales/README.md)

---

## 1. Tổng Quan

### 1.1 Mục Đích
[1-2 câu: SOP này giải quyết vấn đề gì, tại sao cần]

### 1.2 Phạm Vi
- **Áp dụng cho:** [Roles/Teams]
- **Không áp dụng cho:** [Exceptions]

### 1.3 Định Nghĩa & Thuật Ngữ
| Thuật ngữ | Định nghĩa |
|-----------|-----------|
| [Term] | [Definition] |

---

## 2. Vai Trò & Trách Nhiệm

| Vai trò | Trách nhiệm | Liên hệ |
|---------|------------|---------|
| [Role 1] | [Trách nhiệm chính] | Khi nào liên hệ |

### RACI cho SOP này

| Bước | [Role 1] | [Role 2] | [Role 3] |
|------|----------|----------|----------|
| 3.1 | R | A | I |
| 3.2 | C | R | A |

### AI Roles (nếu áp dụng)
| AI Role | Skill | Trách nhiệm | Trigger |
|---------|-------|------------|---------|
| [AI Role] | [vibe-skill] | [Làm gì] | [Khi nào] |

---

## 3. Quy Trình

### 3.0 Flow Tổng Quan

[Mermaid diagram hoặc ASCII flow]

### 3.1 [Tên Bước 1]

**Mục tiêu:** [Kết quả mong đợi]
**Thực hiện bởi:** [Role]
**Thời gian ước tính:** [X phút]

**Bước IPO:**

| Component | Detail |
|-----------|--------|
| **INPUT** | [Đầu vào bước này] |
| **PROCESS** | [Hành động thực hiện] |
| **OUTPUT** | [Kết quả bước này] |
| **CONTROL** | [Tiêu chuẩn kiểm tra] |
| **MECHANISM** | [Công cụ sử dụng] |

| # | Hành động | Chi tiết | Output |
|---|----------|----------|--------|
| 1 | [Action] | [Chi tiết] | [Output] |

> **[AI ASSIST/AUGMENT/WORKFORCE]** [Skill] có thể hỗ trợ: [mô tả]

---

## 4. Phân Nhánh & Xử Lý Đặc Biệt

### 4.1 [Tình huống A]
**Điều kiện:** [Khi nào xảy ra]
**Xử lý:**
| # | Hành động | Ghi chú |
|---|----------|---------|
| 1 | [Action] | [Note] |

---

## 5. Checklist

### Trước khi bắt đầu
- [ ] [Điều kiện cần]

### Sau khi hoàn thành
- [ ] [Verification]

### Quality Gate
- [ ] [Tiêu chuẩn tối thiểu]

---

## 6. Tài Nguyên & Tham Chiếu

| Tài nguyên | Vị trí | Mục đích |
|-----------|--------|----------|
| [Template] | [Path] | [Dùng để] |

### Liên kết SOP
- **Upstream:** [SOP link] → cung cấp input cho SOP này
- **Downstream:** [SOP link] ← nhận output từ SOP này
- **Parallel:** [SOP link] — chạy song song

### AI Skills
| Skill | Dùng khi | Command |
|-------|---------|---------|
| [vibe-skill] | [Khi nào] | [Cách gọi] |

---

## 7. Lịch Sử Thay Đổi

| Phiên bản | Ngày | Thay đổi | Người thay đổi |
|-----------|------|----------|---------------|
| 1.0 | [Date] | Tạo SOP ban đầu | [Name] |
```

---

## Execution Pipeline

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHASE 0: INTAKE — Thu thập thông tin công ty
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ Hỏi user về công ty (nếu chưa cung cấp):
  1. Tên công ty / Industry / Quy mô
  2. Sản phẩm/Dịch vụ chính
  3. Khách hàng mục tiêu
  4. Mô hình kinh doanh (B2B/B2C/B2B2C)
  5. Quy mô team hiện tại (hoặc dự kiến)
  6. Market / Geography

→ Phân loại complexity:
  SMALL (1-10 người):
    → Gộp departments, đơn giản hóa SOP
    → Folder: strategy + marketing-sales + operations + shared

  MEDIUM (10-50 người):
    → Full 3-layer structure
    → 6-8 departments

  LARGE (50+ người):
    → Full 3-layer structure + sub-departments
    → 8-12 departments + sub-teams

→ Confirm scope với user trước khi tạo
    ↓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHASE 1: THINK — Explicit Thinking (nếu topic phức tạp)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Chỉ khi công ty thuộc domain phức tạp / mới / chưa rõ ràng]

→ Invoke vibe-xthinking-orchestrator — MODE TOPIC
  Input: "[Industry] company design — value chain, org structure, key processes"
  Output: Deep analysis → dùng làm foundation cho Phase 2-3

→ Khi KHÔNG cần: Skip → chuyển thẳng Phase 2
    ↓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHASE 2: DESIGN — Thiết kế kiến trúc công ty
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 2.1: VALUE CHAIN DESIGN
→ Map Porter Value Chain cho industry cụ thể
→ Xác định Primary Activities (Layer 2) cho industry:
  - Product company: Inbound → Production → Outbound → Marketing → Service
  - Service company: Lead Gen → Qualification → Delivery → Follow-up → Retention
  - Retail: Sourcing → Warehousing → Merchandising → Sales → After-sales
  - SaaS: Development → Distribution → Marketing → Sales → Customer Success
→ Xác định Support Activities (Layer 3): HR, Finance, IT, Legal, Procurement
→ Xác định Strategy Layer (Layer 1): Board, CEO, Strategy Office
→ Output: flow_value-chain_v1.0_[date].md

STEP 2.2: DEPARTMENT IPO ANALYSIS
→ Cho mỗi department → phân tích ICOM:
  I: Input gì từ departments khác / external?
  C: Policy/standard nào ràng buộc?
  O: Output gì cung cấp cho departments khác / external?
  M: Công cụ/software nào cần?
→ Map inter-department dependencies (upstream → downstream)
→ Output: matrix_org-chart_v1.0_[date].md + mỗi department README.md

STEP 2.3: PROCESS DECOMPOSITION (Recursive IPO)
→ Cho mỗi department → phân rã thành processes:
  Department IPO → Process IPOs → Task IPOs
→ Mỗi process → tag SOP code: SOP-[DOMAIN]-[NUMBER]
→ Xác định cross-links giữa processes (upstream/downstream)
→ Output: Danh sách SOP cần tạo (SOP register)

STEP 2.4: ROLE & KPI DEFINITION
→ Cho mỗi department → define roles:
  Job title → Responsibilities → Authorities → Reports to
→ Cho mỗi role → define KPIs:
  KPI name → Metric → Target → Frequency
→ Map RACI matrix cho cross-department processes
→ Output: job_*, kpi_*, matrix_* files

STEP 2.5: REPORT LAYER DESIGN
→ Cho mỗi department → define report matrix:
  Report name → Level (Operational/Tactical/Strategic) → Frequency → Input sources → Recipients
→ Map report flow: Operational → Tactical → Strategic (consolidation path)
→ Cho mỗi report → tag AI potential (AUGMENT/ASSIST/MANUAL)
→ Xác định strategic report tổng hợp (consolidated quarterly/annual)
→ Map KPI-to-Report links: KPI definitions → Report templates
→ Output: report_* files trong mỗi department, report_strat-001 trong 00-company/

→ Confirm design với user trước khi Phase 3
    ↓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHASE 3: GENERATE — Tạo folder structure + files
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 3.1: CREATE FOLDERS
→ Tạo toàn bộ folder structure theo Master Template
→ Điều chỉnh theo company size (SMALL/MEDIUM/LARGE)

STEP 3.2: GENERATE CORE FILES
→ 00-company/:
  - README.md (company overview + org chart)
  - charter_company-charter_v1.0_[date].md
  - guide_company-handbook_v1.0_[date].md
  - matrix_org-chart_v1.0_[date].md (RACI + reporting lines)
  - flow_value-chain_v1.0_[date].md (Porter diagram)
  - glossary_company-glossary_v1.0_[date].md

STEP 3.3: GENERATE DEPARTMENT FILES
→ Cho mỗi department:
  - README.md (IPO analysis + RACI + KPIs)
  - charter_[dept]-department_v1.0_[date].md
  - kpi_[dept]-001_[dept]-kpis_v1.0_[date].md
  - report_[dept]-001_[report-name]_v1.0_[date].md

STEP 3.4: GENERATE SOP FILES
→ Cho mỗi process đã identify ở Phase 2.3:
  - Tạo SOP file theo SOP Template (Company Version)
  - Populate IPO analysis cho SOP
  - Populate cross-links (upstream/downstream SOPs)
  - Populate steps với ICOM
  - Thêm AI integration tags
  - Gọi vibe-sop-orchestrator cho SOP phức tạp (DEEP ANALYSIS)

STEP 3.5: GENERATE SUPPORTING FILES
→ Policies, templates, job descriptions, registers
→ _shared/ templates và policies
→ _ai-workforce/ mapping

STEP 3.6: GENERATE ARCHIMATE VIEWPOINTS
→ flow_value-chain → Archimate Business Layer view
→ matrix_org-chart → Archimate Actor/Role view
→ README.md mỗi department → Archimate Process view

STEP 3.7: GENERATE REPORT TEMPLATES
→ Cho mỗi department → tạo report templates theo Report Layer Framework:
  - Operational reports (daily dashboard, task status)
  - Tactical reports (weekly summary, monthly review)
  - Strategic reports (quarterly board, annual review)
→ Cho mỗi report → populate Report Template với KPI links
→ Tạo consolidated strategic report trong 00-company/
→ Tag AI potential cho mỗi report (AUGMENT/ASSIST/MANUAL)
→ Output: report_* files trong mỗi department
    ↓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHASE 4: LINK — Cross-link tất cả files
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ Verify tất cả upstream/downstream links giữa SOP
→ Verify tất cả department README links đúng
→ Verify template references trong SOP
→ Verify RACI matrix references đúng roles
→ Tạo SOP Register (master list tất cả SOP với links)
    ↓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHASE 5: REVIEW — Quality gate
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ Self-check theo Quality Checklist (xem bên dưới)
→ Flag: departments cần user verify
→ Flag: SOP cần deep analysis (invoke vibe-sop-orchestrator)
→ Optional: Invoke vibe-review trên sample SOP
→ Delivery: summary của toàn bộ company structure
    ↓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHASE 6: AI WORKFORCE ACTIVATION (chỉ khi user yêu cầu)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3 chế độ activation:

PHASE 6.1: ACTIVATE SINGLE DEPARTMENT
→ User: "Activate AI workforce cho [department]"
→ Đọc tất cả SOP trong department
→ Invoke vibe-aiworkforce với SOP inputs
→ Build: department orchestrator + specialist skills
→ Install vào [department]/ai_workforce/
→ Update _ai-workforce/ workforce map

PHASE 6.2: CREATE COMPANY GPS
→ User: "Tạo company GPS" hoặc "Tạo AI Chief of Staff"
→ Đọc toàn bộ company structure + activation status
→ Generate vibe-[company]-gps SKILL.md
→ Install vào _ai-workforce/ + ~/.claude/skills/
→ Test với sample task

PHASE 6.3: FULL ACTIVATION
→ User: "Activate AI workforce cho toàn bộ company"
→ Cho mỗi department (priority P0→P3): activate department
→ Sau khi xong tất cả → tạo GPS
→ Verify: GPS skill có route đúng mọi department không?

```

---

## Industry Templates (Trần sao âm vậy)

### SaaS / Tech Startup

```
Primary Activities (Layer 2):
  01-product/         ← Product development (R&D)
  02-marketing/       ← Growth marketing
  03-sales/           ← B2B/B2C sales
  04-cs/              ← Customer success + support

Support Activities (Layer 3):
  05-engineering/     ← Engineering ops (DevOps, infra)
  06-hr/              ← People ops
  07-finance/         ← Finance + accounting
  08-legal/           ← Legal + compliance

Strategy (Layer 1):
  00-company/         ← CEO, strategy, board

Key SOPs:
  SOP-PROD-001 — Sprint planning
  SOP-PROD-002 — Feature release
  SOP-MKT-001  — Content creation
  SOP-SAL-001  — Lead to close
  SOP-CS-001   — Ticket handling
  SOP-ENG-001  — Incident response
```

### E-commerce / Retail

```
Primary Activities:
  01-merchandising/   ← Product selection + pricing
  02-marketing/       ← Marketing + promotion
  03-operations/      ← Warehouse + fulfillment
  04-cs/              ← Customer service

Support Activities:
  05-procurement/     ← Vendor management
  06-hr/
  07-finance/
  08-it/

Key SOPs:
  SOP-MERCH-001 — Product listing creation
  SOP-OPS-001   — Order fulfillment
  SOP-OPS-002   — Inventory management
  SOP-CS-001    — Returns & refunds
  SOP-PROC-001  — Vendor selection
```

### Professional Services (Agency / Consulting)

```
Primary Activities:
  01-business-dev/    ← Lead gen + proposals
  02-delivery/        ← Project delivery
  03-client-success/  ← Account management

Support Activities:
  04-hr/              ← Talent management
  05-finance/
  06-operations/      ← Internal ops
  07-it/

Key SOPs:
  SOP-BD-001    — Proposal creation
  SOP-DEL-001   — Project kickoff
  SOP-DEL-002   — Sprint execution
  SOP-DEL-003   — Client reporting
  SOP-CS-001    — Account review
```

### F&B / Restaurant

```
Primary Activities:
  01-kitchen/         ← Food preparation
  02-service/         ← Front of house
  03-delivery/        ← Delivery + online orders

Support Activities:
  04-procurement/     ← Ingredient sourcing
  05-hr/
  06-finance/
  07-quality/         ← Food safety + hygiene

Key SOPs:
  SOP-KIT-001   — Opening procedures
  SOP-KIT-002   — Food prep standards
  SOP-SVC-001   — Customer greeting
  SOP-DEL-001   — Order dispatch
  SOP-QA-001    — Hygiene inspection
```

### Manufacturing

```
Primary Activities:
  01-production/      ← Manufacturing
  02-quality/         ← QC/QA
  03-logistics/       ← Warehousing + shipping
  04-sales/           ← Sales + distribution

Support Activities:
  05-procurement/     ← Raw material sourcing
  06-maintenance/     ← Equipment maintenance
  07-hr/
  08-finance/
  09-safety/          ← HSE (Health, Safety, Environment)

Key SOPs:
  SOP-PROD-001  — Production planning
  SOP-QA-001    — Quality inspection
  SOP-LOG-001   — Shipping process
  SOP-SAFE-001  — Safety incident response
```

---

## Value Chain Diagram Format

### ASCII (mặc định — mọi nơi đọc được)

```
[Value Chain: [Company Name] — [Industry]]

┌─────────────────────────────────────────────────────────────────┐
│  LAYER 1: STRATEGY                                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                       │
│  │ Board    │→│ CEO      │→│ Strategy │                       │
│  └──────────┘  └──────────┘  └──────────┘                       │
│  Output: Vision, Annual Plan, Budget                             │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 2: OPERATIONS (Primary Activities)                        │
│                                                                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │ Inbound  │→│ Ops      │→│ Outbound │→│ Sales    │        │
│  │ Logistics│  │          │  │ Logistics│  │ & Mktg   │        │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘        │
│       ↓             ↓             ↓             ↓                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │SOP-001  │  │SOP-003  │  │SOP-005  │  │SOP-007  │        │
│  │SOP-002  │  │SOP-004  │  │SOP-006  │  │SOP-008  │        │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘        │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 3: SUPPORT                                                │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │
│  │  HR    │ │Finance │ │   IT   │ │ Legal  │ │ Procmt │       │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘       │
│  ↑ Support tất cả Layer 2 activities ↑                          │
└─────────────────────────────────────────────────────────────────┘
```

### Mermaid (ưu tiên — render trong GitHub/Obsidian)

```mermaid
graph TB
    subgraph L1["LAYER 1: STRATEGY"]
        STRAT[Strategy Office]
    end

    subgraph L2["LAYER 2: OPERATIONS"]
        INB[Inbound Logistics] --> OPS[Operations]
        OPS --> OUT[Outbound Logistics]
        OUT --> MKT[Marketing & Sales]
        MKT --> CS[Customer Service]
    end

    subgraph L3["LAYER 3: SUPPORT"]
        HR[HR] --> L2
        FIN[Finance] --> L2
        IT[IT] --> L2
        LEG[Legal] --> L2
    end

    STRAT --> L2
```

---

## Company Charter Template

```markdown
# [Company Name] — Company Charter

**Phiên bản:** 1.0
**Ngày:** [YYYY-MM-DD]

---

## 1. Vision
[1 câu: Công ty sẽ trở thành gì trong 5-10 năm]

## 2. Mission
[1-2 câu: Công ty tồn tại để làm gì, cho ai]

## 3. Core Values
1. [Value 1]: [Giải thích 1 câu]
2. [Value 2]: [Giải thích 1 câu]
3. [Value 3]: [Giải thích 1 câu]

## 4. Strategic Objectives (Năm nay)
| # | Objective | KPI | Target | Owner |
|---|-----------|-----|--------|-------|
| 1 | [Mục tiêu] | [Metric] | [Value] | [Department] |

## 5. Value Chain Overview
[Link: flow_value-chain_v1.0_[date].md]

## 6. Organization Structure
[Link: matrix_org-chart_v1.0_[date].md]

## 7. Departments
| Department | Layer | Head | IPO Summary | README |
|-----------|-------|------|-------------|--------|
| Strategy | L1 | [Name] | Input → Output | [Link] |
| Marketing | L2 | [Name] | Input → Output | [Link] |
| Sales | L2 | [Name] | Input → Output | [Link] |
| Operations | L2 | [Name] | Input → Output | [Link] |
| HR | L3 | [Name] | Input → Output | [Link] |
| Finance | L3 | [Name] | Input → Output | [Link] |

## 8. Key Policies
- [Policy 1](./policy_company-001_xxx.md)
- [Policy 2](./policy_company-002_xxx.md)
```

---

## AI Workforce Layer

### Triết lý: Company = Human Org + AI Workforce

```
Công ty được thiết kế theo "Trần sao âm vậy" — sao chép mô hình thực tế.
Nhưng luôn giữ sẵn khả năng chuyển đổi bất kỳ phòng ban nào thành AI Workforce.

Layer thinking:
  Layer H (Human): SOP + roles + KPI — con người vận hành
  Layer A (AI):    Skills + workflows + quality gates — AI vận hành theo đúng SOP

2 Layer này song song, không thay thế nhau:
  - Human layer luôn tồn tại (SOP là ground truth)
  - AI layer activate khi user yêu cầu (không auto-generate)
  - AI layer tuân thủ ĐÚNG SOP của Human layer — không phát minh lại
```

### Activation Rule

```
AI Workforce KHÔNG tự động generate khi tạo company.
Chỉ generate khi user EXPLICITLY yêu cầu:
  - "Activate AI workforce cho department marketing"
  - "Build AI workforce cho toàn bộ company"
  - "Chuyển phòng sales thành AI workforce"

Khi activate → invoke vibe-aiworkforce, dùng SOP của department làm input.
```

### ai_workforce/ trong mỗi Department

```
Mỗi department có folder ai_workforce/ (ban đầu rống hoặc không tồn tại).
Khi activate → folder chứa skills của department đó.

02-marketing/
  ├── README.md
  ├── charter_marketing-department_v1.0_[date].md
  ├── sop_mkt-001_content-creation_v1.0_[date].md
  ├── sop_mkt-002_seo-optimization_v1.0_[date].md
  ├── kpi_mkt-001_marketing-kpis_v1.0_[date].md
  ├── report_mkt-001_weekly-performance_v1.0_[date].md
  └── ai_workforce/                              ← CHỈ tồn tại khi activated
      ├── README.md                              ← AI workforce map cho dept này
      ├── vibe_[co]-mkt-orchestrator/
      │   └── SKILL.md                           ← Department orchestrator
      ├── vibe_[co]-mkt-content-writer/
      │   └── SKILL.md                           ← Specialist skill
      └── vibe_[co]-mkt-seo-analyst/
          └── SKILL.md                           ← Specialist skill

03-sales/
  ├── ...
  └── ai_workforce/
      ├── README.md
      ├── vibe_[co]-sales-orchestrator/
      │   └── SKILL.md
      └── vibe_[co]-sales-prospector/
          └── SKILL.md
```

### AI Workforce Naming Convention

```
Skill name format: vibe-[company-slug]-[dept]-[role]

[company-slug] = tên công ty viết tắt (ví dụ: acme, tf cho techflow)
[dept]         = department code (mkt, sales, ops, cs, fin, hr, eng, prod)
[role]         = vai trò cụ thể (orchestrator, writer, analyst, prospector...)

Examples:
  vibe-tf-mkt-orchestrator      ← TechFlow marketing orchestrator
  vibe-tf-mkt-content-writer    ← TechFlow content writer
  vibe-tf-sales-orchestrator    ← TechFlow sales orchestrator
  vibe-tf-sales-prospector      ← TechFlow lead prospector
  vibe-tf-ops-orchestrator      ← TechFlow operations orchestrator

File path format: [department]/ai_workforce/vibe_[co]-[dept]-[role]/SKILL.md
```

### AI Workforce per Department — Design Template

Khi activate AI workforce cho department → chạy qua các bước:

```
STEP 1: SOP SCAN
→ Đọc tất cả SOP files trong department
→ Mỗi SOP → 1 potential specialist skill
→ Mỗi SOP → map IPO: input → process → output → quality gate

STEP 2: SKILL DESIGN (via vibe-aiworkforce)
→ Tạo department orchestrator: vibe-[co]-[dept]-orchestrator
→ Tạo specialist skills: vibe-[co]-[dept]-[role] per SOP
→ Mỗi skill tuân thủ ĐÚNG SOP (trần sao âm vậy)
→ Quality tier assessment: TEMPLATED / EXPERT-CLONE / GPS-ENHANCED

STEP 3: SKILL GENERATION
→ Invoke vibe-aiworkforce để build từng skill
→ Mỗi skill được install vào: [department]/ai_workforce/vibe_[co]-[dept]-[role]/
→ Department README.md update: thêm AI Workforce section

STEP 4: VERIFICATION
→ Mỗi skill build xong → chạy vibe-review để verify
→ Test: skill có tuân thủ SOP không?
→ Test: output có đạt quality gate không?
```

### Department ai_workforce/README.md Template

```markdown
# AI Workforce — [Department Name]

## Status: [⬜ Not Activated / 🟡 In Progress / 🟢 Activated]

## Skills

| # | Skill Name | SOP Source | Quality Tier | Build Status | Last Updated |
|---|-----------|-----------|-------------|-------------|-------------|
| 0 | vibe-[co]-[dept]-orchestrator | All SOPs | — | ⬜/🟡/🟢 | [date] |
| 1 | vibe-[co]-[dept]-[role1] | SOP-[DEPT]-001 | [Tier] | ⬜/🟡/🟢 | [date] |
| 2 | vibe-[co]-[dept]-[role2] | SOP-[DEPT]-002 | [Tier] | ⬜/🟡/🟢 | [date] |

## Activation Command
Per skill: invoke /vibe-aiworkforce với SOP source
Full department: invoke /vibe-aiworkforce cho từng SOP + orchestrator
```

---

## Company GPS Skill: vibe-[company]-gps

### Concept

```
Mỗi company có 1 GPS skill riêng — là "AI CEO" / "AI Chief of Staff":
  vibe-[company-slug]-gps

Ví dụ: vibe-techflow-gps, vibe-acme-gps

Role: Orchestrator toàn bộ AI workforce của công ty.
  - HIỂU hết toàn bộ SOP của công ty
  - BIẾT rõ mỗi department có AI workforce nào
  - NHẬN task → phân tích → route đến đúng department skill
  - CHUẨN theo SOP — không cho phép output vi phạm SOP
  - REPORT lại kết quả theo report template của công ty
```

### vibe-[company]-gps — Skill Specification

```
Purpose:
  Nhận bất kỳ task nào liên quan đến vận hành công ty,
  tự động route đến đúng AI workforce + enforce SOP compliance.

Persona: Chief of Staff — hiểu toàn bộ công ty, điều phối mọi thứ.

Input:  Task description bằng ngôn ngữ tự nhiên (việc/an tiếng Việt hoặc Anh)
Output: Task hoàn thành theo SOP + report kết quả

Knowledge Base (được inject vào skill):
  1. Company charter (vision, mission, values)
  2. Value chain diagram (3 layers)
  3. Org chart + RACI matrix
  4. Tất cả department README.md (IPO analysis)
  5. Tất cả SOP files (được reference, không embed hết)
  6. KPI definitions
  7. AI workforce map (department → skills → activation status)

Execution Flow:
  1. RECEIVE task
  2. CLASSIFY task → thuộc department nào? process nào?
  3. CHECK: department có AI workforce activated không?
     YES → route đến đúng skill
     NO  → read SOP → execute manually theo SOP steps
  4. ENFORCE: output phải tuân thủ SOP + quality gate
  5. REPORT: kết quả theo report template của department

Fallback khi department chưa có AI workforce:
  → Đọc SOP file của department đó
  → Execute từng step theo SOP
  → Tag: [MANUAL EXECUTION — consider activating AI workforce]
```

### vibe-[company]-gps — SKILL.md Template

```markdown
---
name: vibe-[company-slug]-gps
description: >
  AI Chief of Staff cho [Company Name].
  Hiểu toàn bộ SOP + AI workforce, điều phối task đến đúng department,
  enforce SOP compliance, report kết quả.
  Input: task tự nhiên. Output: task hoàn thành theo SOP.
type: skill
---

# [Company Name] — AI Chief of Staff

> **"Nhận task → Hiểu SOP → Route đúng người → Chuẩn output → Báo cáo."**

## Company Context

**Tên:** [Company Name]
**Industry:** [Industry]
**Slogan:** [Company slogan]

### Value Chain
[Embed: ASCII value chain diagram]

### Departments
| Department | Layer | AI Workforce | Status |
|-----------|-------|-------------|--------|
| Marketing | L2 | vibe-[co]-mkt-orchestrator | 🟢/⬜ |
| Sales | L2 | vibe-[co]-sales-orchestrator | 🟢/⬜ |
| Operations | L2 | vibe-[co]-ops-orchestrator | 🟢/⬜ |
| Customer Service | L2 | vibe-[co]-cs-orchestrator | 🟢/⬜ |
| Finance | L3 | vibe-[co]-fin-orchestrator | 🟢/⬜ |
| HR | L3 | vibe-[co]-hr-orchestrator | 🟢/⬜ |

### SOP Reference Map
| SOP Code | Department | Process | AI Skill |
|----------|-----------|---------|----------|
| SOP-MKT-001 | Marketing | Content creation | vibe-[co]-mkt-content-writer |
| SOP-SAL-001 | Sales | Lead qualification | vibe-[co]-sales-prospector |
| ... | ... | ... | ... |

## Execution Protocol

### Step 1: RECEIVE
Nhận task → parse: department? process? urgency? stakeholders?

### Step 2: CLASSIFY
Map task → SOP code → department → AI skill (nếu activated)

### Step 3: ROUTE
- Department CÓ AI workforce → delegate sang skill đó
- Department CHƯA CÓ → đọc SOP → execute manually

### Step 4: ENFORCE
Quality check output theo SOP:
- Input/Output đúng format?
- Quality gate pass?
- RACI đúng? (ai responsible, ai accountable)
- KPI impacted? → note trong report

### Step 5: REPORT
Output report theo template:
- Task: [description]
- Department: [name]
- SOP: [code]
- Status: [done/failed/escalated]
- Output: [link/artifact]
- Next action: [if any]
```

### vibe-[company]-gps — Folder Location

```
Company GPS skill được install ở 2 nơi:

1. Trong company folder:
   [company-slug]/
     ├── 00-company/
     ├── 01-marketing/
     │     └── ai_workforce/
     ├── ...
     └── _ai-workforce/
         ├── README.md
         ├── workforce-map_v1.0_[date].md
         ├── build-plan_v1.0_[date].md
         └── vibe_[co]-gps/
             └── SKILL.md              ← Company GPS skill

2. Install vào ~/.claude/skills/ để gọi được:
   ~/.claude/skills/
     └── vibe-[co]-gps/
         └── SKILL.md
```

### vibe-[company]-gps — Generation Process

```
GPS skill được tạo khi user yêu cầu:
  "Tạo company GPS" hoặc "Activate AI Chief of Staff"

Generation steps:
  1. Đọc toàn bộ company structure (charters, org charts, SOPs)
  2. Đọc ai_workforce/ activation status của mỗi department
  3. Inject company context vào SKILL.md template
  4. Tạo SOP Reference Map (task → SOP → AI skill mapping)
  5. Tạo department routing table
  6. Install vào cả 2 locations (company folder + ~/.claude/skills/)
  7. Test: cho GPS skill 1 sample task → verify routing đúng

GPS skill CẬP NHẬT khi:
  - Department activate/deactivate AI workforce → update routing table
  - SOP mới được tạo → update SOP Reference Map
  - Company structure thay đổi → update context
```

---

## Full Company + AI Workforce Structure (Example)

```
techflow/                                          ← Company root
├── 00-company/
│   ├── README.md
│   ├── charter_company-charter_v1.0_2026-05-01.md
│   ├── matrix_org-chart_v1.0_2026-05-01.md
│   ├── flow_value-chain_v1.0_2026-05-01.md
│   └── glossary_company-glossary_v1.0_2026-05-01.md
│
├── 01-marketing/
│   ├── README.md                                  ← IPO + RACI + KPIs + Report matrix
│   ├── charter_marketing-department_v1.0_[date].md
│   ├── sop_mkt-001_content-creation_v1.0_[date].md
│   ├── sop_mkt-002_seo-optimization_v1.0_[date].md
│   ├── kpi_mkt-001_marketing-kpis_v1.0_[date].md
│   ├── report_mkt-001_weekly-performance_v1.0_[date].md
│   └── ai_workforce/                              ← Activated khi user yêu cầu
│       ├── README.md
│       ├── vibe_tf-mkt-orchestrator/
│       │   └── SKILL.md
│       ├── vibe_tf-mkt-content-writer/
│       │   └── SKILL.md
│       └── vibe_tf-mkt-seo-analyst/
│           └── SKILL.md
│
├── 02-sales/
│   ├── README.md
│   ├── sop_sal-001_lead-qualification_v1.0_[date].md
│   ├── sop_sal-002_proposal-creation_v1.0_[date].md
│   ├── kpi_sal-001_sales-kpis_v1.0_[date].md
│   └── ai_workforce/                              ← Activated khi user yêu cầu
│       ├── README.md
│       ├── vibe_tf-sales-orchestrator/
│       │   └── SKILL.md
│       └── vibe_tf-sales-prospector/
│           └── SKILL.md
│
├── _shared/
│   └── templates/
│
└── _ai-workforce/
    ├── README.md                                  ← Company-wide AI workforce overview
    ├── workforce-map_v1.0_[date].md               ← All departments → skills map
    ├── build-plan_v1.0_[date].md                  ← Build order + priorities
    └── vibe_tf-gps/                               ← Company GPS skill
        └── SKILL.md                               ← AI Chief of Staff
```

### Activation Flow

```
Tạo company (Phase 0-5):
  → Chỉ tạo Human Layer: SOPs, KPIs, reports, policies
  → ai_workforce/ folders KHÔNG tồn tại
  → _ai-workforce/ chỉ có README.md (mapping plan)

User yêu cầu activate department:
  "Activate AI workforce cho marketing"
      ↓
  Phase 6.1: ACTIVATE DEPARTMENT
  → Đọc tất cả SOP trong 01-marketing/
  → Invoke vibe-aiworkforce với SOP inputs
  → Build: vibe-tf-mkt-orchestrator + specialist skills
  → Install vào 01-marketing/ai_workforce/
  → Update _ai-workforce/README.md (status → 🟢)

User yêu cầu tạo GPS:
  "Tạo company GPS cho TechFlow"
      ↓
  Phase 6.2: CREATE COMPANY GPS
  → Đọc toàn bộ company structure
  → Đọc activation status tất cả departments
  → Generate vibe-tf-gps SKILL.md
  → Install vào _ai-workforce/vibe_tf-gps/
  → Install symlink vào ~/.claude/skills/vibe-tf-gps/
  → Test với sample task

User yêu cầu activate toàn bộ:
  "Activate AI workforce cho toàn bộ company"
      ↓
  Phase 6.3: FULL ACTIVATION
  → Cho mỗi department (theo priority: P0→P1→P2→P3):
    → Activate department (như Phase 6.1)
  → Sau khi xong tất cả → tạo GPS (như Phase 6.2)
```

---

## Small Company Simplification

```
Khi company size = SMALL (1-10 người):

  FOLDER STRUCTURE (simplified):
  [company-slug]/
  ├── 00-company/
  │   ├── README.md
  │   ├── charter_company-charter_v1.0_[date].md
  │   └── flow_value-chain_v1.0_[date].md
  ├── 01-growth/              ← Marketing + Sales gộp
  │   ├── README.md
  │   ├── sop_growth-001_lead-gen_v1.0_[date].md
  │   ├── sop_growth-002_content-creation_v1.0_[date].md
  │   ├── sop_growth-003_sales-process_v1.0_[date].md
  │   └── kpi_growth-001_growth-kpis_v1.0_[date].md
  ├── 02-delivery/            ← Operations + CS gộp
  │   ├── README.md
  │   ├── sop_ops-001_order-processing_v1.0_[date].md
  │   ├── sop_ops-002_customer-service_v1.0_[date].md
  │   └── kpi_ops-001_ops-kpis_v1.0_[date].md
  ├── 03-backoffice/          ← HR + Finance + Admin gộp
  │   ├── README.md
  │   ├── sop_hum-001_hiring_v1.0_[date].md
  │   ├── sop_fin-001_bookkeeping_v1.0_[date].md
  │   └── kpi_back-001_kpis_v1.0_[date].md
  └── _shared/
      └── templates/

  SOP count: ~8-15 SOPs (thay vì 30-50+)
  Departments: 3 (thay vì 8-12)
  Roles: Hybrid (1 người nhiều vai trò)
```

---

## Report Layer Framework

### Triết lý: Report = Feedback Loop

```
Strategy ──decide──→ Operations ──execute──→ Output (sản phẩm/dịch vụ)
    ↑                                          │
    └──────────── Report (feedback) ───────────┘

Report KHÔNG phải layer riêng — Report là cơ chế FEEDBACK chạy xuyên suốt.
Mỗi IPO output của department này → thành report input của department kia hoặc layer trên.

Hệ thống không có report → HỆ MÙ → quyết định dựa trên cảm tính
Hệ thống có report đúng → HỆ TỰ ĐIỀU CHỈNH → quyết định dựa trên data
```

### Report IPO

```
Mỗi Report cũng là 1 IPO:

  I = Data thô từ operations (logs, CRM, GA, accounting...)
  C = KPI targets, thresholds, SLA (so sánh với cái gì?)
  O = Insight + Action recommendation (không chỉ số liệu)
  M = BI tool, spreadsheet, AI analysis, dashboard

Report TỐT = Output trả lời được 3 câu:
  1. SO WHAT?    — Số liệu này nghĩa là gì?
  2. NOW WHAT?   — Cần hành động gì?
  3. WHO?         — Ai chịu trách nhiệm?

Report XẤU = Chỉ ném số liệu, không có insight, không có action recommendation
```

### 2 Trục phân loại Report

#### Trục dọc: Report theo Level quản trị

```
LAYER 1 — STRATEGIC REPORTS (Cho Board / CEO)
┌──────────────────────────────────────────────────┐
│  Input:    KPI summaries từ tất cả departments   │
│  Process:  Trend analysis, gap-to-target         │
│  Output:   Strategic decision + course correction │
│  Control:  Annual plan, budget, shareholder exp  │
│  Freq:     Monthly / Quarterly / Annual           │
│  Ví dụ:    Board report, P&L, Market position    │
└──────────────────────────────────────────────────┘
         ↑ là consolidation của
LAYER 2 — TACTICAL REPORTS (Cho Department Head)
┌──────────────────────────────────────────────────┐
│  Input:    Operational data + team performance   │
│  Process:  KPI tracking, bottleneck analysis     │
│  Output:   Department health + action plan       │
│  Control:  Department KPI targets                │
│  Freq:     Weekly / Monthly                      │
│  Ví dụ:    Pipeline report, Content performance  │
└──────────────────────────────────────────────────┘
         ↑ là consolidation của
LAYER 3 — OPERATIONAL REPORTS (Cho Team Lead / IC)
┌──────────────────────────────────────────────────┐
│  Input:    Raw data từ daily operations           │
│  Process:  Status tracking, exception flagging   │
│  Output:   Task status + issues + next actions   │
│  Control:  SLA, quality standards                │
│  Freq:     Daily / Real-time                     │
│  Ví dụ:    Daily dashboard, ticket queue status  │
└──────────────────────────────────────────────────┘
```

#### Trục ngang: Report theo Chu kỳ thời gian

```
REAL-TIME    → Dashboard, alert, notification    → "Có gì đang xảy ra?"
DAILY        → Standup, checklist, status         → "Hôm nay làm gì, có issue gì?"
WEEKLY       → Team summary, pipeline snapshot    → "Tuần này đạt/sai gì?"
MONTHLY      → Department review, KPI tracking    → "Tháng này so target thế nào?"
QUARTERLY    → Strategic review, board report     → "Đúng hướng chưa, cần xoay không?"
ANNUAL       → Year in review, next year plan     → "Năm qua thành/bại, năm sau làm gì?"
```

### Report Template

```markdown
# Report: [Tên Report]

**Mã Report:** RPT-[DOMAIN]-[NUMBER]
**Loại:** [Strategic / Tactical / Operational]
**Chu kỳ:** [Real-time / Daily / Weekly / Monthly / Quarterly / Annual]
**Chủ sở hữu:** [Department / Role]
**Người nhận:** [Stakeholders nhận report]
**Ngày:** [YYYY-MM-DD]

---

## 1. Executive Summary
[2-3 câu: Kết quả chính, bất ngờ, hành động cần làm]

## 2. KPI Dashboard

| KPI | Target | Actual | Gap | Trend | Status |
|-----|--------|--------|-----|-------|--------|
| [KPI 1] | [Value] | [Value] | [%] | [↑/→/↓] | [🟢/🟡/🔴] |

## 3. SO WHAT? — Phân tích
[Giải thích số liệu — trend, nguyên nhân, connection giữa các KPI]

## 4. NOW WHAT? — Hành động
| # | Hành động | Ai làm | Khi nào | Priority |
|---|----------|--------|---------|----------|
| 1 | [Action] | [Owner] | [Date] | [P0/P1/P2] |

## 5. WHO? — Follow-up
[Eskalation, quyết định cần approve, resource cần thêm]

---

## Data Sources
| Source | Refresh rate | Link |
|--------|-------------|------|
| [CRM] | [Daily] | [URL] |

## History
| Period | Status | Key Action |
|--------|--------|-----------|
| [Prev period] | [Status] | [Action taken] |
```

### Report Matrix per Department

```
Mỗi department có report matrix (thuộc README.md hoặc file riêng):

| Report | Level | Freq | Input từ | Output cho | SOP | AI Potential |
|--------|-------|------|----------|-----------|-----|-------------|
| Daily dashboard | Operational | Daily | [Sources] | Team Lead | [SOP link] | [AI AUGMENT] |
| Weekly summary | Tactical | Weekly | [Sources] | Dept Head | [SOP link] | [AI AUGMENT] |
| Monthly review | Tactical | Monthly | [Sources] | CEO | [SOP link] | [AI ASSIST] |
| Quarterly board | Strategic | Quarterly | All depts | Board | [SOP link] | [AI ASSIST] |

AI Potential đánh giá:
  [AI AUGMENT] → AI có thể tự tổng hợp data + generate report
  [AI ASSIST]  → AI hỗ trợ phân tích, human review trước khi gửi
  [MANUAL]     → Cần human judgment (strategic assessment, stakeholder communication)
```

### Report Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    REPORT FLOW (Feedback Loop)                    │
│                                                                   │
│  OPERATIONAL DATA                                                │
│  (CRM, GA, ERP, tickets, logs)                                  │
│       ↓                                                           │
│  ┌──────────────┐                                                │
│  │ L3: DAILY    │ → Team Lead → exception handling              │
│  │ dashboards   │                                               │
│  └──────┬───────┘                                                │
│         ↓ consolidate                                            │
│  ┌──────────────┐                                                │
│  │ L2: WEEKLY/  │ → Department Head → action plan              │
│  │ MONTHLY      │                                               │
│  └──────┬───────┘                                                │
│         ↓ consolidate                                            │
│  ┌──────────────┐                                                │
│  │ L1: QUARTERLY│ → CEO/Board → strategic decision             │
│  │ / ANNUAL     │                                               │
│  └──────┬───────┘                                                │
│         ↓                                                        │
│  STRATEGIC DECISION → Điều chỉnh KPI/budget/process             │
│         ↓                                                        │
│  Quay lại Operations (thay đổi target, resource, priority)      │
└─────────────────────────────────────────────────────────────────┘
```

### Report trong Folder Structure

```
Reports nằm NGAY TRONG department folder (không tách riêng):

02-marketing/
  ├── ...
  ├── kpi_mkt-001_marketing-kpis_v1.0_[date].md    ← KPI định nghĩa
  ├── report_mkt-001_weekly-performance_v1.0_[date].md  ← Report template
  └── report_mkt-002_monthly-review_v1.0_[date].md      ← Report template

00-company/
  ├── ...
  └── report_strat-001_quarterly-board_v1.0_[date].md   ← Consolidated strategic report

Mỗi report template = format chuẩn, điền data khi chạy.
```

### Report & KPI Relationship

```
KPI DEFINITION file (kpi_[dept]-001) ← ĐỊNH NGHĨA:
  - KPI name, metric, target, frequency, owner
  → Trả lời: "Đo cái gì? Bằng bao nhiêu? Ai chịu trách nhiệm?"

REPORT TEMPLATE file (report_[dept]-001) ← THỰC THI:
  - Populate KPI actual values, gap analysis, trend, action
  → Trả lời: "Thực tế thế nào? Gap bao nhiêu? Làm gì tiếp?"

Quan hệ:
  KPI = Control (C trong ICOM)
  Report = Output (O trong ICOM) của quy trình "đo lường và review"
  SOP của quy trình review → link tới cả KPI definition lẫn Report template
```

---

## Integration với Vibe Ecosystem

### Upstream — Gọi skill này sau khi:
```
vibe-xthinking-orchestrator (phân tích sâu industry/domain → cần materialize thành công ty)
vibe-prd-creator (có product PRD → cần company structure để deliver product)
vibe-opc (One Person Company → cần khởi tạo structure cho 1-person company)
viet-one-man-company (Hướng dẫn OPC → cần company structure)
```

### Downstream — Sau khi tạo company, user thường gọi:
```
vibe-sop-orchestrator (chỉnh sửa / sâu hóa từng SOP riêng)
vibe-aiworkforce (build AI workforce cho từng department)
vibe-review (review chất lượng SOP, policy)
vibe-omnifocus (tạo action items từ build plan)
vibe-gps (execute từng task trong company setup)
vibe-overview (tạo overview note cho DEVONthink)
```

### Internal — Core Skills sử dụng

```
vibe-sop-orchestrator
  → Khi: Tạo/chỉnh sửa SOP files
  → Cách: Dùng template + "trần sao âm vậy" principle
  → Deep Analysis SOP → invoke vibe-xthinking-orchestrator

vibe-xthinking-orchestrator
  → Khi: Industry/domain phức tạp, cần explicit thinking trước
  → Cách: Mode TOPIC, agents 1-5 cho value chain analysis

vibe-aiworkforce
  → Khi: User muốn activate AI workforce cho department
  → Cách: Dùng company SOPs làm input, build skills per process

vibe-review
  → Khi: Quality gate cho SOP, policy, charter
  → Cách: vibe-review [file] --quick cho internal, full cho final

vibe-architecture-design
  → Khi: Company có IT/software component cần architecture
  → Cách: Dùng cho 08-it/ department design

vibe-prd-creator
  → Khi: Company có product cần PRD
  → Cách: Output PRD → feed vào product department SOPs
```

---

## Quality Checklist — Trước khi deliver

```
□ 00-company/ có đủ: charter, org chart, value chain diagram, glossary?
□ Mỗi department có README.md với IPO analysis (I-C-O-M)?
□ Mỗi department có charter (mission, goals)?
□ Mỗi department có KPI file?
□ Value chain diagram đúng 3 layers (Strategy / Operations / Support)?
□ Mỗi department được tag đúng layer?
□ Tất cả SOP files theo naming convention đúng?
□ Mỗi SOP có IPO analysis section?
□ Mỗi SOP có upstream/downstream links?
□ Mỗi SOP có RACI matrix?
□ Cross-links giữa SOP files đúng (không broken links)?
□ Company charter có vision, mission, values, strategic objectives?
□ Org chart có reporting lines + RACI?
□ File naming consistent: [file_type]_[file-name]_v[version]_[date].md?
□ Folder naming: lowercase, department/process names?
□ Small company simplified khi size = SMALL?
□ AI workforce mapping có trong _ai-workforce/?
□ "Trần sao âm vậy" — structure phản ánh mô hình công ty thực tế, không phải lý thuyết?
□ Explicit thinking — mọi mục tiêu, input, output, decision được tường minh?
□ SOPs sử dụng được ngay (có thể giao cho người mới hoặc AI agent)?
□ Glossary cover terminology của industry cụ thể?
□ Mỗi department có report matrix (operational/tactical/strategic)?
□ Mỗi report template có SO WHAT / NOW WHAT / WHO sections?
□ Report flow đúng chiều: Operational → Tactical → Strategic?
□ KPI definitions có liên kết tới report templates?
□ AI potential được tag cho từng report (AUGMENT/ASSIST/MANUAL)?
□ _ai-workforce/ có README.md với department mapping?
□ ai_workforce/ chỉ tồn tại trong department đã activated (không tạo trước)?
□ Mỗi ai_workforce/ skill có reference đúng SOP source?
□ Company GPS skill (nếu tạo) có SOP Reference Map đầy đủ?
□ Company GPS skill có routing table đúng activation status?
□ AI workforce naming đúng convention: vibe-[co]-[dept]-[role]?
```

---

## Anti-patterns — Không làm

```
❌ Tạo company structure generic — phải customize cho industry cụ thể
❌ Phát minh lại org structure — sao chép mô hình thực tế (trần sao âm vậy)
❌ Viết SOP theo best practice internet — phải dựa trên quy trình thực
❌ Không có IPO analysis cho department/SOP — vi phạm explicit thinking
❌ Không có cross-links giữa SOP — SOPs trở thành đảo, không thành hệ thống
❌ Tạo quá nhiều SOP cho small company — cần simplified structure
❌ Naming convention không nhất quán — gây nhầm lẫn
❌ Folder structure không theo layer — mất tính kiến trúc
❌ Bỏ qua RACI matrix — ai làm gì không rõ
❌ Không có value chain diagram — mất big picture
❌ Tạo company mà không hỏi user về industry/model — generic, không dùng được
❌ Tạo tất cả SOP cùng lúc với full content — nên tạo outline trước, detail sau
❌ SOP không có quality gate — không có cách verify completion
❌ Bỏ qua AI workforce mapping — mất cơ hội automation
❌ Không phân biệt SMALL/MEDIUM/LARGE — over-engineering hoặc under-engineering
❌ Report chỉ ném số liệu, không có SO WHAT / NOW WHAT / WHO — report xấu
❌ Thiếu report ở 1 level (chỉ có tactical, không có operational hoặc strategic) → feedback loop đứt
❌ KPI definitions không liên kết report templates → đo mà không bao giờ review
❌ Auto-generate AI workforce khi user chưa yêu cầu → phải explicit activation
❌ Tạo ai_workforce/ folder trước khi activate → chỉ tạo khi activated
❌ AI workforce skill không reference SOP source → mất liên kết với ground truth
❌ Company GPS skill không có SOP Reference Map → không biết route đâu
❌ Company GPS route đến department chưa activated mà không fallback → crash
❌ GPS không có timeout cho human response → chờ mãi mãi → cần timeout + remind
```

---

## Error Handling

```
USER CHƯA CUNG CẤP ĐỦ THÔNG TIN:
  → Hỏi tối thiểu: Tên công ty, Industry, Sản phẩm/Dịch vụ, Quy mô
  → Nếu chưa rõ industry → hỏi: "Ngành gì? Bán cái gì? Cho ai?"

INDUSTRY KHÔNG CÓ TRONG TEMPLATE:
  → Dùng closest industry template làm base
  → Invoke vibe-xthinking-orchestrator để phân tích value chain
  → Customize Primary Activities cho industry cụ thể

USER MUỐN RÚT GỌN:
  → Chuyển sang Small Company Simplification
  → Gộp departments, giảm SOP count

USER MUỐN MỞ RỘNG:
  → Thêm sub-departments
  → Thêm SOPs cho sub-processes
  → Thêm regions/markets nếu multi-market

SOP QUÁ PHỨC TẠP:
  → Invoke vibe-sop-orchestrator cho SOP đó
  → Deep Analysis mode nếu cần

CONFLICT GIỮA DEPARTMENTS:
  → RACI matrix giải quyết
  → Nếu vẫn conflict → ESCALATE user

QUÁ NHIỀU FILES (LARGE COMPANY):
  → Tạo theo phase: Phase 1 (core), Phase 2 (detail), Phase 3 (sub-processes)
  → Không tạo tất cả cùng lúc
```

---

## Example: Khởi tạo SaaS Startup

**Input:** "Tạo company structure cho SaaS startup tên TechFlow, B2B project management tool, team 15 người"

**Phase 0 Output:**
```
Company: TechFlow
Industry: SaaS / B2B
Product: Project management tool
Team size: 15 → MEDIUM (simplified)
Layers: Strategy + 4 Primary + 3 Support
```

**Phase 2 Output:**
```
Value Chain:
  L1: CEO + Strategy
  L2: Product → Marketing → Sales → Customer Success
  L3: Engineering Ops + Finance + People Ops

Departments: 8
  00-company (Strategy)
  01-product (Primary — R&D, product development)
  02-marketing (Primary — growth, content, SEO)
  03-sales (Primary — B2B sales pipeline)
  04-cs (Primary — customer success + support)
  05-engineering (Support — DevOps, infra, security)
  06-finance (Support — accounting, reporting)
  07-people (Support — HR, hiring, culture)

SOP Count: ~25 SOPs
Files: ~60 files total
```

**Phase 3 Output:**
```
techflow/
├── 00-company/
│   ├── README.md
│   ├── charter_company-charter_v1.0_2026-05-01.md
│   ├── guide_company-handbook_v1.0_2026-05-01.md
│   ├── matrix_org-chart_v1.0_2026-05-01.md
│   ├── flow_value-chain_v1.0_2026-05-01.md
│   └── glossary_company-glossary_v1.0_2026-05-01.md
├── 01-product/
│   ├── README.md
│   ├── charter_product-department_v1.0_2026-05-01.md
│   ├── sop_prod-001_sprint-planning_v1.0_2026-05-01.md
│   ├── sop_prod-002_feature-spec_v1.0_2026-05-01.md
│   ├── sop_prod-003_release-management_v1.0_2026-05-01.md
│   ├── sop_prod-004_roadmap-review_v1.0_2026-05-01.md
│   └── kpi_prod-001_product-kpis_v1.0_2026-05-01.md
├── 02-marketing/
│   ├── README.md
│   ├── charter_marketing-department_v1.0_2026-05-01.md
│   ├── sop_mkt-001_content-creation_v1.0_2026-05-01.md
│   ├── sop_mkt-002_seo-optimization_v1.0_2026-05-01.md
│   ├── sop_mkt-003_paid-campaigns_v1.0_2026-05-01.md
│   ├── sop_mkt-004_analytics-reporting_v1.0_2026-05-01.md
│   └── kpi_mkt-001_marketing-kpis_v1.0_2026-05-01.md
├── 03-sales/
│   ├── README.md
│   ├── sop_sal-001_lead-qualification_v1.0_2026-05-01.md
│   ├── sop_sal-002_demo-pitch_v1.0_2026-05-01.md
│   ├── sop_sal-003_proposal-negotiation_v1.0_2026-05-01.md
│   ├── sop_sal-004_deal-close_v1.0_2026-05-01.md
│   ├── sop_sal-005_handoff-to-cs_v1.0_2026-05-01.md
│   └── kpi_sal-001_sales-kpis_v1.0_2026-05-01.md
├── 04-cs/
│   ├── README.md
│   ├── sop_cs-001_onboarding_v1.0_2026-05-01.md
│   ├── sop_cs-002_ticket-handling_v1.0_2026-05-01.md
│   ├── sop_cs-003_escalation_v1.0_2026-05-01.md
│   ├── sop_cs-004_churn-prevention_v1.0_2026-05-01.md
│   └── kpi_cs-001_cs-kpis_v1.0_2026-05-01.md
├── 05-engineering/
│   ├── README.md
│   ├── sop_eng-001_deployment_v1.0_2026-05-01.md
│   ├── sop_eng-002_incident-response_v1.0_2026-05-01.md
│   ├── sop_eng-003_monitoring_v1.0_2026-05-01.md
│   └── kpi_eng-001_engineering-kpis_v1.0_2026-05-01.md
├── 06-finance/
│   ├── README.md
│   ├── sop_fin-001_invoicing_v1.0_2026-05-01.md
│   ├── sop_fin-002_monthly-close_v1.0_2026-05-01.md
│   ├── sop_fin-003_expense-approval_v1.0_2026-05-01.md
│   └── kpi_fin-001_finance-kpis_v1.0_2026-05-01.md
├── 07-people/
│   ├── README.md
│   ├── sop_ppl-001_recruitment_v1.0_2026-05-01.md
│   ├── sop_ppl-002_onboarding_v1.0_2026-05-01.md
│   ├── sop_ppl-003_performance-review_v1.0_2026-05-01.md
│   └── kpi_ppl-001_people-kpis_v1.0_2026-05-01.md
├── _shared/
│   └── templates/
└── _ai-workforce/
    ├── README.md
    ├── workforce-map_v1.0_2026-05-01.md
    └── build-plan_v1.0_2026-05-01.md
```

---

*Living skill. Cập nhật sau mỗi company được khởi tạo.*
*"Trần sao âm vậy — sao chép công ty thực, thiết kế như hệ thống, vận hành bằng SOP."*
