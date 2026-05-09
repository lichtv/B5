# PRD - Module P&L và Dashboard Báo cáo Quản trị cho Antigravity

## 1. Mục tiêu sản phẩm

Module P&L trong Antigravity phải giúp đội ngũ quản trị SME trả lời nhanh 4 câu hỏi cốt lõi:

1. Doanh thu biến động do volume, price hay mix?
2. Biên lợi nhuận co lại do biến phí nào?
3. EBIT biến động do chi phí cố định nào?
4. Hành động nào cần ưu tiên trong 30-60-90 ngày?

### Mục tiêu kinh doanh
- Biến báo cáo P&L từ công cụ “xem số” thành công cụ “ra quyết định”.
- Chuẩn hóa ngôn ngữ điều hành giữa CEO, CFO, Sales, Operations.
- Giảm thời gian tổng hợp management pack hàng tháng.
- Tăng tốc phát hiện bất thường và truy nguyên nguyên nhân.

### Mục tiêu người dùng
- Xem nhanh hiệu quả kinh doanh theo công ty, BU, kênh, sản phẩm, khách hàng, nhà máy.
- Drill-down từ EBIT xuống đúng driver gây biến động.
- So sánh Actual vs Budget vs Last Month vs Last Year.
- Có commentary và action tracker ngay trên dashboard.

---

## 2. Phạm vi MVP

## In scope
- Executive P&L Overview.
- Revenue driver dashboard.
- Variable cost dashboard.
- Fixed cost control dashboard.
- Profitability drill-down theo BU, channel, product, customer.
- KPI dictionary.
- Alert engine mức cơ bản.
- Commentary template.
- Export management pack dạng bảng.

## Out of scope cho MVP
- Forecast bằng machine learning.
- Scenario simulator phức tạp.
- Workflow phê duyệt ngân sách đa tầng.
- Customer lifetime value nâng cao.
- Pocket margin chi tiết nếu chưa có đầy đủ trade spend data.

---

## 3. Vai trò người dùng

| Role | Nhu cầu chính | Quyền truy cập |
|---|---|---|
| CEO | Nhìn sức khỏe tổng thể, xem EBIT driver, quyết định ưu tiên | Toàn công ty |
| CFO | Theo dõi budget variance, margin, break-even, close pack | Toàn công ty + cấu hình KPI |
| Sales Director | Xem doanh thu, ASP, discount, profitability theo kênh/khách hàng | Theo sales scope |
| COO / Plant Head | Xem material, labor, energy, freight, năng suất | Theo nhà máy / vận hành |
| BU Head | Xem kết quả của BU và drill-down chi tiết | Theo BU |
| Analyst | Kiểm tra số liệu, xuất bảng, rà soát variance | Theo phân quyền dữ liệu |
| Admin | Quản trị mapping, quyền, refresh, dictionary | Toàn hệ thống |

---

## 4. User stories

## CEO
- Là CEO, cần xem Revenue, VCM %, Fixed Cost %, EBIT % trên một màn hình để biết công ty đang khỏe hay yếu.
- Là CEO, cần bấm vào EBIT variance để biết phần giảm đến từ doanh thu, biến phí hay fixed cost.
- Là CEO, cần nhìn top 5 vấn đề đỏ để quyết định hành động tuần này.

## CFO
- Là CFO, cần so sánh Actual vs Budget vs LY để hoàn tất management review.
- Là CFO, cần định nghĩa công thức KPI và threshold để chuẩn hóa dashboard.
- Là CFO, cần export bảng chi tiết để đối chiếu với báo cáo quản trị.

## Sales Director
- Là Sales Director, cần biết doanh thu tăng nhờ volume, ASP hay mix.
- Là Sales Director, cần thấy kênh nào tăng doanh thu nhưng phá biên.
- Là Sales Director, cần lọc top khách hàng theo revenue, margin và discount.

## COO
- Là COO, cần xem plant nào có material per unit, scrap rate hoặc labor efficiency bất thường.
- Là COO, cần xem freight và energy tăng ở đâu để phối hợp xử lý.
- Là COO, cần ranking các cost driver âm theo impact EBIT.

## Analyst
- Là Analyst, cần drill-down tới bảng dòng dữ liệu và xuất Excel/CSV.
- Là Analyst, cần biết công thức, nguồn dữ liệu, kỳ cập nhật của từng KPI.
- Là Analyst, cần flag được lỗi dữ liệu trước khi trình lãnh đạo.

---

## 5. Kiến trúc thông tin

## Navigation cấp 1
1. Overview
2. Revenue
3. Variable Costs
4. Fixed Costs
5. Profitability
6. Alerts
7. Commentary
8. Admin / Dictionary

## Navigation cấp 2

### Overview
- Executive summary
- EBIT bridge
- 12M trend
- Top exceptions

### Revenue
- Revenue trend
- Volume / price / mix
- Channel view
- Customer view
- Product view

### Variable Costs
- Material
- Labor
- Energy
- Freight
- Plant efficiency

### Fixed Costs
- Overheads
- G&A
- Maintenance
- Logistics fixed
- Headcount productivity

### Profitability
- By BU
- By channel
- By customer
- By product

### Alerts
- KPI alerts
- Data quality alerts
- Open actions

### Commentary
- Management comments
- Root-cause summary
- Action tracker 30-60-90

### Admin / Dictionary
- KPI dictionary
- COA mapping
- Threshold rules
- Refresh logs

---

## 6. Đặc tả màn hình

## Screen 1: Executive P&L Overview

### Mục tiêu
Cho lãnh đạo thấy bức tranh tài chính vận hành trong 30 giây.

### Thành phần
- Bộ lọc: period, entity, BU, channel, product family, customer segment.
- KPI cards: Revenue, Revenue Growth %, VCM, VCM %, Fixed Cost, Fixed Cost %, EBIT, EBIT %.
- Waterfall: Revenue → Variable Costs → VCM → Fixed Costs → EBIT.
- Variance bridge: Budget vs Actual EBIT.
- Trend 12 tháng: Revenue, VCM %, EBIT %.
- Top positive/negative contributors.
- Alert list và commentary box.

### Tương tác
- Click KPI card để mở trang chi tiết.
- Hover tooltip hiển thị công thức, owner, threshold, last refresh.
- Click waterfall bucket để drill sang dashboard driver tương ứng.

### Acceptance criteria
- Người dùng đổi bộ lọc thì toàn trang cập nhật trong một lần.
- Các KPI cards hiển thị actual, variance, status và trend.
- Waterfall reconcile đúng với EBIT.

## Screen 2: Revenue Analytics

### Thành phần
- Revenue trend by month.
- Units trend.
- ASP trend.
- Price-volume-mix bridge.
- Revenue by channel / customer / product.
- Discount % và Return %.

### Tương tác
- Chuyển dimension giữa channel, customer, product.
- Click một điểm trên chart để xem bảng chi tiết giao dịch hoặc tổng hợp.

## Screen 3: Variable Cost Analytics

### Thành phần
- Material % revenue, material / unit.
- Direct labor % revenue, output / labor hour, overtime %.
- Energy / unit.
- Freight % revenue, freight / order.
- Scrap rate.
- Heatmap theo plant / product / month.

### Tương tác
- Drill plant → line → product nếu có dữ liệu.
- So sánh actual vs standard / budget.

## Screen 4: Fixed Cost Control

### Thành phần
- Overheads % revenue.
- G&A % revenue.
- Maintenance % revenue.
- Fixed logistics % revenue.
- Revenue / headcount.
- Stacked trend theo cost center.

## Screen 5: Profitability Drill-down

### Thành phần
- EBIT by BU.
- VCM by channel.
- Customer profitability matrix.
- Product family profitability.
- Bottom 10 SKU / customers destroying margin.

## Screen 6: Alerts & Actions

### Thành phần
- KPI status board.
- Alert severity P1-P4.
- Owner, due date, status.
- Action plan 30-60-90 days.

## Screen 7: Admin / KPI Dictionary

### Thành phần
- Danh sách KPI.
- Công thức.
- Unit.
- Polarity.
- Threshold.
- Owner.
- Source table.
- Drill dimensions.

---

## 7. KPI framework cho hệ thống

## KPI bắt buộc trong MVP

| KPI code | KPI name | Formula | Unit | Polarity |
|---|---|---|---|---|
| REVENUE | Revenue | Gross Revenue - Discount - Return - Rebate | VND | High is good |
| REVENUE_GROWTH | Revenue Growth % | Revenue current / Revenue prior - 1 | % | High is good |
| ASP | Average Selling Price | Revenue / Units Sold | VND/unit | High is good |
| VARIABLE_COST_RATIO | Variable Cost % | Variable Cost / Revenue | % | Low is good |
| MATERIAL_PER_UNIT | Material per Unit | Material / Units Sold | VND/unit | Low is good |
| LABOR_PER_UNIT | Direct Labor per Unit | Direct Labor / Units Sold | VND/unit | Low is good |
| ENERGY_PER_UNIT | Energy per Unit | Energy / Units Sold | VND/unit | Low is good |
| FREIGHT_RATIO | Freight % Revenue | Freight / Revenue | % | Low is good |
| VCM | Variable Contribution Margin | Revenue - Variable Costs | VND | High is good |
| VCM_MARGIN | VCM % | VCM / Revenue | % | High is good |
| FIXED_COST_RATIO | Fixed Cost % | Fixed Cost / Revenue | % | Low is good |
| EBIT | EBIT | VCM - Fixed Costs | VND | High is good |
| EBIT_MARGIN | EBIT % | EBIT / Revenue | % | High is good |
| BREAKEVEN_REVENUE | Break-even Revenue | Fixed Cost / VCM % | VND | Low is good |
| REVENUE_PER_HEAD | Revenue per Headcount | Revenue / Headcount | VND/person | High is good |

---

## 8. Data model MVP

## Fact tables

### fact_pl_monthly
- period_month
- legal_entity_id
- bu_id
- plant_id
- channel_id
- customer_id
- product_id
- gross_revenue
- discount_value
- return_value
- rebate_value
- net_revenue
- units_sold
- material_cost
- direct_labor_cost
- energy_cost
- freight_cost
- other_variable_cost
- maintenance_cost
- overhead_cost
- logistics_fixed_cost
- ga_cost
- other_fixed_cost
- ebit_value
- load_timestamp

### fact_budget_monthly
- period_month
- dimension keys
- budget_revenue
- budget_units
- budget_material
- budget_labor
- budget_energy
- budget_freight
- budget_fixed_cost
- budget_ebit

### fact_operations_daily
- date
- plant_id
- product_id
- output_units
- labor_hours
- overtime_hours
- scrap_units
- energy_kwh

## Dimensions
- dim_date
- dim_entity
- dim_business_unit
- dim_plant
- dim_channel
- dim_customer
- dim_product
- dim_account_pl
- dim_owner

---

## 9. Business rules

### Revenue
- KPI margin luôn dựa trên net revenue.
- Discount, return, rebate bắt buộc tách riêng.
- Nếu doanh nghiệp có gross-to-net phức tạp, cần waterfall riêng.

### Cost behavior
- Mỗi account phải được gán variable, fixed hoặc semi-variable.
- Chi phí semi-variable cần rule split.
- Logistics có thể vừa fixed vừa variable, không được gộp cứng.

### Quality checks
- EBIT phải bằng Revenue - Variable Costs - Fixed Costs.
- Units sold = 0 thì metric per unit không được tính hoặc phải gắn flag.
- Revenue âm cần cờ điều chỉnh.
- Outlier threshold áp cho ASP, material/unit, freight%, VCM%.

---

## 10. API contract gợi ý

## GET /pl/overview

### Params
- period
- entity_id
- bu_id
- plant_id
- channel_id
- customer_id
- product_family_id
- compare_mode

### Response mẫu
```json
{
  "filters": {
    "period": "2026-04",
    "entity_id": "ENT_01",
    "compare_mode": "budget"
  },
  "kpis": [
    {"code": "REVENUE", "actual": 12000000000, "target": 12500000000, "variance": -500000000, "status": "yellow"},
    {"code": "VCM_MARGIN", "actual": 0.27, "target": 0.30, "variance": -0.03, "status": "red"},
    {"code": "EBIT_MARGIN", "actual": 0.08, "target": 0.10, "variance": -0.02, "status": "red"}
  ],
  "waterfall": [
    {"label": "Revenue", "value": 12000000000},
    {"label": "Variable Costs", "value": -8760000000},
    {"label": "VCM", "value": 3240000000},
    {"label": "Fixed Costs", "value": -2280000000},
    {"label": "EBIT", "value": 960000000}
  ]
}
```

## GET /pl/revenue-drivers
- Trả về volume, ASP, mix, discount, return theo thời gian và theo dimension.

## GET /pl/variable-cost-drivers
- Trả về material, labor, energy, freight theo dimension và kỳ.

## GET /pl/fixed-costs
- Trả về fixed cost by category, cost center, BU.

## GET /pl/profitability
- Trả về EBIT và VCM theo BU, channel, product, customer.

## GET /dictionary/kpis
- Trả về metadata KPI để render tooltip, status logic, unit, owner.

## POST /comments/management
- Lưu commentary của người dùng theo kỳ và dimension.

## POST /actions
- Tạo action item gắn với alert hoặc KPI đỏ.

---

## 11. Logic cảnh báo

## Rule engine cơ bản

### High is good
- Green: actual >= target
- Yellow: actual thấp hơn target đến 5%
- Red: actual thấp hơn target trên 5%

### Low is good
- Green: actual <= target
- Yellow: actual cao hơn target đến 5%
- Red: actual cao hơn target trên 5%

### Margin points
- Green: lệch không quá 0.5 điểm %
- Yellow: lệch từ 0.5 đến 2 điểm %
- Red: lệch trên 2 điểm %

### Severity
- P1: EBIT âm hoặc giảm nghiêm trọng.
- P2: VCM % xuống dưới ngưỡng.
- P3: Material / unit, freight %, labor / unit vượt chuẩn.
- P4: Discount %, return %, data quality issues.

---

## 12. Commentary engine

## Input cần có
- Period và compare mode.
- Top 3 biến động tích cực.
- Top 3 biến động tiêu cực.
- KPI đỏ.
- Owner của từng vấn đề.

## Output mẫu

### Summary
- Revenue [đạt/không đạt] kế hoạch do [volume/price/mix].
- VCM % biến động chủ yếu do [material/labor/energy/freight].
- EBIT chịu tác động thêm từ [overheads/G&A/logistics fixed].

### Actions
- 30 ngày: xử lý quick wins.
- 60 ngày: chuẩn hóa vận hành.
- 90 ngày: khóa cơ chế và theo dõi bền vững.

---

## 13. Non-functional requirements

- Dashboard executive tải dưới 5 giây với dataset chuẩn.
- Drill-down không quá 3 click từ EBIT đến driver.
- Có row-level security theo BU / region / user role.
- Log toàn bộ refresh, mapping change, manual adjustment.
- Có export CSV/XLSX cho bảng chi tiết.
- Tooltip KPI phải hiển thị công thức, owner, unit, last refresh.

---

## 14. Acceptance criteria tổng thể

## Functional
- Xem được P&L theo công ty, BU, channel, customer, product.
- So sánh được Actual vs Budget vs Prior vs LY.
- Drill-down được từ EBIT tới các bucket chi phí và doanh thu.
- Có alert board và commentary cơ bản.
- Có dictionary cho KPI.

## Data
- Reconcile được với management P&L.
- Có data quality rules.
- Mọi KPI có công thức và metadata rõ ràng.

## UX
- Giao diện thống nhất giữa các dashboard.
- KPI card có status, variance, trend.
- Dashboard usable trên desktop và tablet.

## Security & governance
- Có phân quyền theo vai trò.
- Có audit log thay đổi cấu hình.
- Có version cho KPI definitions và account mappings.

---

## 15. Kế hoạch triển khai 6 tuần

## Tuần 1
- Khóa scope MVP.
- Chốt cây P&L quản trị.
- Chốt KPI dictionary bản 1.

## Tuần 2
- Xây data model và mapping COA.
- Tạo fact_pl_monthly và fact_budget_monthly.

## Tuần 3
- Xây API overview và revenue drivers.
- Thiết kế wireframe dashboard overview.

## Tuần 4
- Xây variable cost và fixed cost dashboards.
- Tạo rule engine cảnh báo.

## Tuần 5
- Tạo profitability drill-down.
- Tạo commentary và action tracker cơ bản.

## Tuần 6
- UAT, reconcile, tuning performance, training business users.

---

## 16. Deliverables sau PRD này

1. Wireframe chi tiết từng màn hình.
2. Schema SQL cho data warehouse / marts.
3. API spec chi tiết dạng OpenAPI.
4. Danh sách component UI cho Antigravity.
5. Bộ dữ liệu mẫu để test dashboard.

