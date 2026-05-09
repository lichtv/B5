# Antigravity P&L Module Implementation Guide

## Mục tiêu

Tài liệu này hướng dẫn từng bước để triển khai module Profit & Loss (P&L) và dashboard báo cáo quản trị trên Antigravity theo hướng có thể dùng ngay cho product build, data model, workflow vận hành và nghiệm thu.

## Phạm vi module

Module gồm 4 lớp:

1. **Data foundation**: nguồn dữ liệu, mapping COA, dimension, kỳ kế toán, version dữ liệu.
2. **Computation engine**: rule tính Net Revenue, Gross Profit, EBITDA, EBIT, Net Profit, variance và bridge analysis.
3. **Application layer**: màn hình dashboard, P&L statement, variance, drill-down, comment, approval, export.
4. **Governance layer**: phân quyền, data quality, close checklist, audit log, release management.

## Cách triển khai trên Antigravity

### Bước 1: Chốt business design

Chốt 7 đầu vào sau trước khi build:

- Legal entities / business units / cost centers.
- Chart of accounts (COA) chuẩn.
- Mapping từ account sang P&L line item.
- Chu kỳ đóng sổ: monthly, quarterly, YTD.
- Version dữ liệu: Actual, Budget, Forecast, Last Forecast.
- Cấu trúc phân tích: theo company, BU, region, product, channel, customer segment.
- Người chịu trách nhiệm từng line và từng dashboard.

### Bước 2: Thiết kế taxonomy P&L chuẩn

Dùng cây P&L 5 tầng:

1. Revenue
2. Contra Revenue / Discounts / Returns
3. Net Revenue
4. COGS
5. Gross Profit
6. Operating Expenses (Sales, Marketing, G&A, R&D, Fulfillment, Support)
7. EBITDA
8. D&A
9. EBIT
10. Finance income/expense, tax, other items
11. Net Profit

### Bước 3: Thiết kế dimension model

Tạo các dimension cốt lõi trong Antigravity:

- `dim_period`: month, quarter, year, fiscal attributes, close status.
- `dim_entity`: company code, legal entity, country, currency.
- `dim_department`: function, cost center owner, hierarchy.
- `dim_account`: account code, account name, natural class, sign rule.
- `dim_pnl_line`: line code, parent line, level, display order, formula type.
- `dim_product`: product family, SKU, brand.
- `dim_channel`: direct, distributor, marketplace, online/offline.
- `dim_customer_segment`: enterprise, SMB, retail, strategic account.
- `dim_version`: Actual, Budget, Forecast, prior forecast.
- `dim_scenario`: base, downside, upside.

### Bước 4: Thiết kế fact tables

Tối thiểu nên có 5 fact table:

- `fact_gl_actual`: số phát sinh ledger theo account, entity, period.
- `fact_budget`: budget theo line hoặc account.
- `fact_forecast`: rolling forecast.
- `fact_operational_driver`: volume, ASP, orders, headcount, CAC, logistics units.
- `fact_adjustment`: manual journal, management adjustment, reclass.

### Bước 5: Thiết kế mapping engine

Trong Antigravity, tạo 3 lớp mapping tách biệt:

1. **Account to P&L line**: mỗi account map vào đúng line item.
2. **Sign normalization**: revenue, cost, expense được chuẩn hóa dấu hiển thị.
3. **Allocation / reclass rule**: các khoản shared cost được phân bổ theo doanh thu, headcount, usage hoặc driver riêng.

Rule quan trọng:

- Một account chỉ có 1 logic map chính, mọi ngoại lệ phải dùng override rule có hiệu lực theo thời gian.
- Không hard-code công thức trong dashboard; chỉ đọc từ semantic layer hoặc calculation layer.
- Toàn bộ line tổng hợp phải được tính bằng công thức line-level, không nhập tay.

### Bước 6: Xây semantic layer

Tạo metric definitions trong Antigravity:

- Gross Margin = Gross Profit / Net Revenue.
- EBITDA Margin = EBITDA / Net Revenue.
- Net Margin = Net Profit / Net Revenue.
- Budget Variance = Actual - Budget.
- Budget Variance % = (Actual - Budget) / Budget.
- Forecast Variance = Actual - Forecast.
- Mix / Price / Volume bridge cho Revenue và Gross Profit.
- Opex per Revenue = Opex / Net Revenue.
- Headcount productivity = Net Revenue / Avg Headcount.

Nguyên tắc:

- Metric có owner.
- Metric có grain rõ ràng.
- Metric có data source rõ ràng.
- Metric có công thức và rule fallback khi mẫu số bằng 0.

### Bước 7: Build ingestion pipeline

Trên Antigravity, dựng pipeline theo thứ tự:

1. ERP / accounting export -> staging.
2. Validation schema -> reject bad rows.
3. Enrichment với entity, account, department, product.
4. Mapping sang `dim_pnl_line`.
5. Aggregation sang mart theo month / entity / department / product.
6. Publish semantic model cho dashboard.

Checklist validation:

- Dòng nào thiếu account hoặc period thì reject.
- Account chưa mapping phải vào exception queue.
- Total trial balance phải khớp trước và sau transform.
- Tổng Revenue / Expense theo entity phải reconcile với source.

### Bước 8: Xây exception workflow

Tạo 3 queue vận hành:

- **Unmapped account queue**.
- **Reconciliation breach queue**.
- **Manual adjustment approval queue**.

Mỗi queue cần có:

- severity,
- owner,
- due date,
- status,
- audit trail,
- comment thread.

### Bước 9: Xây dashboard structure

Nên tách thành 5 màn hình chính trong Antigravity:

#### 1. Executive Overview

Hiển thị:

- Net Revenue, Gross Profit, EBITDA, Net Profit.
- Margin %.
- Actual vs Budget vs Forecast.
- Top 5 variance drivers.
- Alert cards theo threshold.

#### 2. P&L Statement

Hiển thị dạng financial statement:

- Current month.
- YTD.
- Prior year.
- Budget.
- Forecast.
- Variance tuyệt đối và %.
- Expand/collapse theo line hierarchy.

#### 3. Variance Analysis

Hiển thị:

- waterfall / bridge cho Revenue và EBITDA,
- variance by department,
- variance by product / channel / region,
- root-cause commentary.

#### 4. Operational Drivers

Nối tài chính với vận hành:

- volume,
- ASP,
- gross margin by product,
- CAC,
- fulfillment cost per order,
- headcount efficiency,
- sales productivity.

#### 5. Admin & Rules

Dành cho power users:

- mapping table,
- allocation rule,
- close status,
- exception resolution,
- audit log,
- metric dictionary.

### Bước 10: Thiết kế interaction model

Cách người dùng đi qua module nên là:

1. Xem KPI tổng quan.
2. Phát hiện variance bất thường.
3. Click vào line item.
4. Drill xuống department / product / channel / account.
5. Xem bridge analysis.
6. Ghi comment và assign action.
7. Theo dõi resolution đến khi close.

### Bước 11: Phân quyền

Đề xuất role model:

| Role | Quyền chính |
|---|---|
| CFO / CEO | Xem toàn bộ, duyệt adjustment, xem executive dashboard |
| Finance Controller | Quản lý close, mapping, variance, comment, export |
| FP&A | Phân tích budget/forecast, tạo scenario, variance notes |
| Department Head | Xem P&L phần mình phụ trách, comment và action |
| Data Admin | Quản lý pipeline, schema, exception, audit |

### Bước 12: Thiết kế close workflow

Mỗi kỳ đóng sổ nên có trạng thái:

- Open
- Soft Close
- Review
- Locked
- Reopened

Checklist close:

- GL load complete.
- Mapping exception = 0.
- Reconciliation passed.
- Manual adjustment approved.
- Variance note completed for material movements.
- Dashboard snapshot published.

### Bước 13: Thiết kế ngưỡng cảnh báo

Ngưỡng khuyến nghị:

- Revenue variance > 5% hoặc > ngưỡng tiền tuyệt đối.
- Gross margin giảm > 2 điểm %.
- Opex vượt budget > 7%.
- EBITDA hụt forecast > 10%.
- Any unmapped balance > 0 là cảnh báo đỏ.

### Bước 14: Xây commentary workflow

Mỗi line material cần các trường:

- issue summary,
- root cause,
- impact amount,
- owner,
- action,
- due date,
- expected recovery,
- confidence level.

Template ngắn:

> EBITDA hụt 3.2 tỷ do doanh thu channel distributor thấp hơn forecast 8%, đồng thời fulfillment cost tăng do mix đơn hàng nhỏ. Owner: Sales Director và Ops Head. Recovery plan: tối ưu incentive distributor và gom đơn theo tuyến trong 4 tuần tới.

### Bước 15: Nghiệm thu theo phase

#### Phase 1: Foundation

Mục tiêu:

- Load actual data.
- Xây P&L statement chuẩn.
- Reconcile với finance pack.

Definition of done:

- 100% account mapped.
- Statement khớp báo cáo chuẩn finance.
- Filter theo period/entity/department chạy đúng.

#### Phase 2: Management reporting

Mục tiêu:

- Dashboard KPI.
- Variance analysis.
- Comment workflow.

Definition of done:

- KPI tính đúng.
- Variance đúng với budget/forecast.
- Drill-down đến account level.

#### Phase 3: Driver-based planning

Mục tiêu:

- Driver metrics.
- Bridge analysis.
- Allocation logic.

Definition of done:

- Revenue/GP bridge dùng được.
- Shared cost allocation có audit.
- Bộ phận có thể tự giải trình variance.

#### Phase 4: Governance & scale

Mục tiêu:

- Role-based access.
- Audit log.
- Close workflow.
- Export pack.

Definition of done:

- Có lịch sử thay đổi.
- Có approval trail.
- Có snapshot theo kỳ.

## Backlog gợi ý cho Antigravity

### Epic 1: Data model

- Create dimensions.
- Create fact tables.
- Build account mapping UI.
- Build exception table.

### Epic 2: Calculation engine

- Sign normalization.
- Formula engine cho P&L lines.
- Version comparison logic.
- Margin metrics.

### Epic 3: Dashboards

- Executive overview.
- Statement view.
- Variance analysis.
- Driver view.

### Epic 4: Collaboration

- Commentary.
- Assign owner.
- Close tasks.
- Alert inbox.

### Epic 5: Governance

- Role matrix.
- Audit trail.
- Snapshot publish.
- Export to Excel/PDF.

## UI skeleton gợi ý

Thanh điều hướng trái:

- Overview
- P&L Statement
- Variance
- Drivers
- Reports
- Admin Rules

Vùng filter trên cùng:

- Period
- Version
- Entity
- Department
- Product / Channel
- Currency

Khu vực chính:

1. KPI cards.
2. Trend charts.
3. P&L tree table.
4. Variance panel.
5. Action / commentary inbox.

## Anti-pattern cần tránh

- Gộp business logic vào frontend.
- Cho phép nhập tay số tổng hợp mà không có audit.
- Không khóa kỳ sau close.
- Không có queue cho account chưa mapping.
- Không tách Actual / Budget / Forecast theo version rõ ràng.
- Chỉ có dashboard đẹp nhưng không drill xuống account.

## Acceptance criteria tổng thể

- Số liệu P&L khớp báo cáo tài chính quản trị gốc.
- Người dùng lọc được theo mọi dimension cốt lõi.
- Từ KPI có thể drill xuống đến line, account, transaction grain phù hợp.
- Variance có explanation, owner và due date.
- Kỳ đã khóa không bị sửa ngoài quy trình reopen.
- Mọi adjustment, reclass, mapping change đều có audit log.

## Thứ tự triển khai khuyến nghị trong Antigravity

1. Khóa taxonomy và KPI dictionary.
2. Dựng dim/fact model.
3. Xây mapping UI + exception queue.
4. Xây statement view.
5. Xây overview dashboard.
6. Xây variance / bridge.
7. Xây commentary và action tracking.
8. Xây close workflow, audit, export.

## Kết quả mong đợi

Sau khi hoàn tất, Antigravity sẽ có một module P&L đủ cho hai mục đích:

- **Finance control**: close, reconcile, audit, explain.
- **Management reporting**: theo dõi KPI, variance, root cause, action plan.
