# Module P&L và Dashboard Báo cáo Quản trị cho Antigravity

## Mục tiêu tài liệu

Tài liệu này đóng gói bộ tri thức cốt lõi để thiết kế một module P&L và dashboard báo cáo quản trị cho doanh nghiệp SME trong Antigravity. Cấu trúc được xây theo flow đọc P&L 5 tầng:

1. Doanh thu
2. Chi phí biến đổi
3. Lợi nhuận góp biên (VCM)
4. Chi phí cố định
5. EBIT

Nguyên tắc xuyên suốt: mọi biến động lợi nhuận phải được lần ngược về đúng mắt xích vận hành gây ra biến động đó.

---

## 1) Triết lý thiết kế module P&L

Module không chỉ để “xem báo cáo”, mà phải trả lời được 4 câu hỏi quản trị:

1. Doanh thu biến động do volume, price hay mix?
2. Biên lợi nhuận co lại do nhóm biến phí nào?
3. EBIT biến động do chi phí cố định nào?
4. Vấn đề là nhất thời, cơ cấu hay do kỷ luật vận hành?

### Nguyên tắc thiết kế

- Một nguồn dữ liệu chuẩn cho Revenue, COGS, Opex, EBIT.
- Tách rõ chỉ số kết quả (lagging) và chỉ số dẫn dắt (leading).
- Cho phép so sánh Actual vs Budget vs Last Month vs Same Period Last Year.
- Ưu tiên khả năng drill-down từ EBIT xuống từng driver.
- Dashboard phải nhìn được cả mức công ty, BU, kênh, sản phẩm, khách hàng và nhà máy/điểm vận hành.
- Mỗi chỉ số phải có owner, công thức, ngưỡng cảnh báo và hành động tương ứng.

---

## 2) Cấu trúc P&L chuẩn cho SME

## Tier 1: Revenue

### Driver chính
- Sales Volume
- Selling Price / ASP
- Product Mix
- Channel Mix
- Customer Mix
- Return / Discount / Rebate

### Công thức lõi
- Revenue = Volume x ASP
- ASP = Net Revenue / Units Sold
- Net Revenue = Gross Revenue - Discount - Return - Rebate

### Câu hỏi quản trị
- Doanh thu tăng do bán nhiều hơn hay bán giá tốt hơn?
- Tăng trưởng đến từ khách hàng mới, khách hàng cũ hay thay đổi mix?
- Có đang hy sinh giá để giữ volume không?

## Tier 2: Variable Costs

### Nhóm chi phí
- Material Costs
- Variable Labor
- Energy
- Transportation / Freight
- Packaging (nếu có)
- Sales commission biến đổi (nếu bản chất là biến phí)

### Công thức lõi
- Total Variable Cost = Material + Variable Labor + Energy + Freight + Other Variable Cost
- Variable Cost / Revenue = Total Variable Cost / Revenue
- Variable Cost / Unit = Total Variable Cost / Units Sold

### Câu hỏi quản trị
- Biến phí tăng do giá đầu vào, định mức tiêu hao hay năng suất?
- Vận chuyển tăng do cước, tuyến đường, SLA hay cơ cấu đơn hàng?
- Có dấu hiệu thất thoát, scrap, overtime, underutilization không?

## Tier 3: Variable Contribution Margin (VCM)

### Công thức lõi
- VCM = Revenue - Variable Costs
- VCM % = VCM / Revenue
- VCM per Unit = VCM / Units Sold

### Ý nghĩa quản trị
VCM cho biết phần lợi nhuận còn lại để hấp thụ chi phí cố định. Nếu doanh thu tăng mà VCM % giảm, mô hình tăng trưởng đang suy yếu.

## Tier 4: Fixed Costs

### Nhóm chi phí
- Maintenance
- Factory/Office Overheads
- Fixed Logistics
- G&A
- Fixed payroll indirect
- Rent, software, admin, compliance

### Công thức lõi
- Total Fixed Cost = Maintenance + Overheads + Logistics Fixed + G&A + Other Fixed Cost
- Fixed Cost / Revenue = Total Fixed Cost / Revenue

### Câu hỏi quản trị
- Chi phí cố định đang tăng vì mở rộng cần thiết hay vì bộ máy phình?
- Phần tăng chi phí có đi trước tăng trưởng doanh thu hay không?
- Có khoản chi nào không tạo năng lực hay không tạo sản lượng?

## Tier 5: EBIT

### Công thức lõi
- EBIT = VCM - Fixed Costs
- EBIT % = EBIT / Revenue

### Câu hỏi quản trị
- EBIT giảm vì revenue, biến phí hay fixed cost?
- Mức EBIT hiện tại có bền vững không nếu volume giảm 10%?
- Break-even revenue hiện ở đâu?

---

## 3) Bộ KPI đánh giá SME

## A. KPI cấp công ty

| Nhóm | KPI | Công thức | Ý nghĩa | Owner gợi ý |
|---|---|---|---|---|
| Growth | Revenue Growth % | (Revenue kỳ này / Revenue kỳ trước) - 1 | Tăng trưởng top-line | CEO / Sales |
| Quality of revenue | Net Revenue Ratio | Net Revenue / Gross Revenue | Kiểm soát discount, rebate, return | Sales / Finance |
| Pricing | ASP | Revenue / Units | Chất lượng giá bán | Sales |
| Scale | Units Sold | Tổng sản lượng bán | Động lực volume | Sales / Ops |
| Variable efficiency | Variable Cost % | Variable Cost / Revenue | Mức ăn biên của biến phí | COO / Finance |
| Core economics | VCM % | VCM / Revenue | Sức khỏe mô hình lõi | CEO / Finance |
| Overhead control | Fixed Cost % | Fixed Cost / Revenue | Kỷ luật vận hành | CFO / Admin |
| Profitability | EBIT % | EBIT / Revenue | Hiệu quả cuối cùng | CEO / CFO |
| Cash quality | EBITDA to Cash Conversion | Operating Cash Flow / EBITDA | Lợi nhuận chuyển thành tiền | CFO |
| Resilience | Break-even Revenue | Fixed Cost / VCM % | Điểm hòa vốn | CFO |

## B. KPI theo doanh thu

| Mảng | KPI | Công thức | Tín hiệu xấu |
|---|---|---|---|
| Volume | Sales Volume Growth % | Units kỳ này / kỳ trước - 1 | Volume giảm liên tục |
| Price | ASP Growth % | ASP kỳ này / kỳ trước - 1 | ASP giảm dù mix không đổi |
| Mix | Mix Margin Index | VCM mix thực tế / VCM mix chuẩn | Mix xấu kéo biên xuống |
| Khách hàng | Top 5 Customer Revenue % | Revenue top 5 / Total Revenue | Quá lệ thuộc khách hàng lớn |
| Kênh | Channel Profitability | EBIT hoặc VCM theo kênh | Có kênh tăng doanh thu nhưng âm biên |
| Chất lượng doanh thu | Return % | Return / Gross Revenue | Hoàn trả tăng |
| Chất lượng doanh thu | Discount % | Discount / Gross Revenue | Bán tăng nhờ giảm giá sâu |

## C. KPI theo biến phí

| Mảng | KPI | Công thức | Ý nghĩa |
|---|---|---|---|
| Material | Material % Revenue | Material / Revenue | Kiểm soát giá vốn đầu vào |
| Material | Material / Unit | Material / Units | Theo dõi định mức và giá mua |
| Material | Scrap Rate | Scrap / Material Input | Theo dõi hao hụt |
| Labor | Direct Labor % Revenue | Direct Labor / Revenue | Kiểm soát chi phí nhân công trực tiếp |
| Labor | Output / Labor Hour | Units / Labor Hours | Năng suất lao động |
| Labor | Overtime % | OT Hours / Total Hours | Dấu hiệu kém cân bằng năng lực |
| Energy | Energy / Unit | Energy / Units | Hiệu suất năng lượng |
| Freight | Freight % Revenue | Freight / Revenue | Độ tối ưu vận chuyển |
| Freight | Freight / Order | Freight / Orders | Hiệu quả giao hàng |

## D. KPI theo chi phí cố định

| Mảng | KPI | Công thức | Ý nghĩa |
|---|---|---|---|
| Overheads | Overheads % Revenue | Overheads / Revenue | Kỷ luật nền chi phí |
| G&A | G&A % Revenue | G&A / Revenue | Tỷ lệ chi phí quản trị |
| Maintenance | Maintenance % Revenue | Maintenance / Revenue | Tương quan bảo trì và quy mô |
| Logistics fixed | Fixed Logistics % Revenue | Fixed Logistics / Revenue | Chi phí nền mạng lưới |
| People productivity | Revenue / Headcount | Revenue / Headcount | Hiệu suất bộ máy |
| EBIT absorption | Fixed Cost Absorption | VCM / Fixed Cost | Khả năng hấp thụ fixed cost |

## E. KPI cảnh báo sớm

- Doanh thu tăng nhưng VCM % giảm.
- Volume tăng nhưng EBIT không tăng.
- Material cost / unit tăng nhanh hơn ASP.
- Overtime tăng trong khi output không tăng tương ứng.
- Freight % tăng mạnh ở một vùng hoặc kênh.
- Fixed cost tăng 3 tháng liên tục nhanh hơn doanh thu.
- EBIT dương nhưng operating cash flow âm.
- Top 5 khách hàng chiếm tỷ trọng quá cao.

---

## 4) KPI dictionary để cấu hình trong Antigravity

Mỗi KPI trong hệ thống nên có metadata chuẩn như sau:

| Field | Mô tả |
|---|---|
| kpi_code | Mã KPI duy nhất, ví dụ `EBIT_MARGIN` |
| kpi_name | Tên KPI hiển thị |
| business_layer | Revenue / Variable Cost / VCM / Fixed Cost / EBIT |
| description | Mô tả ngắn về ý nghĩa |
| formula | Công thức tính |
| numerator | Tử số |
| denominator | Mẫu số |
| unit | VND, %, unit, hour, order |
| polarity | High is good / Low is good |
| frequency | Daily / Weekly / Monthly |
| owner_role | Sales, COO, CFO, CEO |
| threshold_green | Ngưỡng xanh |
| threshold_yellow | Ngưỡng vàng |
| threshold_red | Ngưỡng đỏ |
| drill_dimensions | Product, customer, channel, BU, plant, region |
| source_table | Bảng nguồn dữ liệu |
| refresh_rule | Tần suất cập nhật |
| action_playbook | Hành động khi đỏ |

### Ví dụ dictionary

| kpi_code | kpi_name | formula | unit | polarity | owner_role |
|---|---|---|---|---|---|
| REV_GROWTH | Revenue Growth % | Revenue current / Revenue prior - 1 | % | High is good | CEO / Sales |
| ASP | Average Selling Price | Revenue / Units Sold | VND/unit | High is good | Sales |
| MAT_PER_UNIT | Material per Unit | Material / Units Sold | VND/unit | Low is good | Procurement / Ops |
| VCM_MARGIN | VCM % | VCM / Revenue | % | High is good | CEO / Finance |
| FIXED_COST_RATIO | Fixed Cost % | Fixed Cost / Revenue | % | Low is good | CFO |
| EBIT_MARGIN | EBIT % | EBIT / Revenue | % | High is good | CEO / CFO |

---

## 5) Data model cho module

## A. Fact tables

### fact_pl_monthly
- period_month
- company_id
- bu_id
- plant_id
- channel_id
- customer_id
- product_id
- revenue_gross
- discount
- return_value
- rebate
- revenue_net
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
- ebit

### fact_sales_daily
- date
- order_id
- customer_id
- channel_id
- product_id
- quantity
- net_sales
- discount
- return_flag

### fact_operations
- date
- plant_id
- product_id
- output_units
- labor_hours
- overtime_hours
- scrap_units
- energy_kwh
- uptime_percent

### fact_budget
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

## B. Dimension tables

- dim_date
- dim_product
- dim_customer
- dim_channel
- dim_region
- dim_business_unit
- dim_plant
- dim_account_pl
- dim_owner

## C. Mapping logic

- Chuẩn hóa chart of accounts về nhóm P&L quản trị.
- Mỗi GL account phải map về 1 node trong cây P&L.
- Cho phép tách fixed/variable cho cùng một loại chi phí nếu bản chất hỗn hợp.
- Có version control cho mapping rule.

---

## 6) Business rules quan trọng

## A. Revenue rules
- Luôn ưu tiên Net Revenue để tính biên.
- Return, rebate, promotion phải được loại khỏi gross revenue.
- Nếu doanh nghiệp có trade marketing lớn, tách gross-to-net waterfall riêng.

## B. Cost classification rules
- Chi phí phải được phân loại theo hành vi: variable, semi-variable, fixed.
- Nếu chi phí bán hàng có phần commission theo doanh số, map vào variable cost.
- Nếu logistics có phần tối thiểu cố định và phần theo chuyến, phải tách 2 bucket.

## C. Time rules
- Báo cáo tháng khóa số liệu tại cut-off date.
- Cho phép view MTD, YTD, rolling 3M, rolling 12M.
- Mọi dashboard phải thống nhất timezone và kỳ kế toán.

## D. Data quality rules
- Không cho doanh thu âm mà không có flag điều chỉnh.
- Không cho units = 0 nhưng revenue khác 0 nếu metric dựa trên sản lượng.
- Cảnh báo khi ASP hoặc material/unit vượt ngưỡng outlier.
- Kiểm tra cân đối: EBIT = Revenue - Variable Cost - Fixed Cost.

---

## 7) Dashboard framework cho Antigravity

## Dashboard 1: Executive P&L Overview

### Mục tiêu
Cung cấp ảnh chụp nhanh sức khỏe tài chính vận hành toàn doanh nghiệp.

### Widget đề xuất
1. Revenue
2. Revenue Growth %
3. VCM
4. VCM %
5. Fixed Cost
6. Fixed Cost %
7. EBIT
8. EBIT %
9. Break-even Revenue
10. Cash conversion (nếu có)

### Visual đề xuất
- KPI cards với Actual, Budget, Variance, Trend sparkline
- Waterfall: Revenue → Variable Cost → VCM → Fixed Cost → EBIT
- Variance bridge: Actual vs Budget EBIT
- Trend line 12 tháng cho Revenue, VCM %, EBIT %

## Dashboard 2: Revenue Driver

### Mục tiêu
Tách tăng/giảm doanh thu thành Volume, Price, Mix.

### Widget đề xuất
- Revenue by month
- Units by month
- ASP by month
- Price-volume-mix bridge
- Revenue by customer/channel/product
- Discount %, Return %

### Drill-down
- Channel → Customer → Product
- Region → Sales team → Customer

## Dashboard 3: Variable Cost Driver

### Mục tiêu
Phát hiện nhóm biến phí ăn biên.

### Widget đề xuất
- Material % revenue
- Material / unit
- Direct labor / unit
- Energy / unit
- Freight % revenue
- Scrap rate
- Overtime %

### Visual đề xuất
- Trend charts theo tháng
- Heatmap theo plant / product / channel
- Variance decomposition theo cost bucket

## Dashboard 4: Fixed Cost Control

### Mục tiêu
Kiểm soát bộ máy và năng lực hấp thụ chi phí cố định.

### Widget đề xuất
- Overheads % revenue
- G&A % revenue
- Maintenance % revenue
- Revenue / headcount
- Fixed cost absorption ratio

### Visual đề xuất
- Stacked bar theo tháng
- Cost center ranking
- Scatter plot Revenue vs Fixed Cost by BU

## Dashboard 5: Profitability Drill-down

### Mục tiêu
Xem lợi nhuận theo lát cắt quản trị.

### Widget đề xuất
- EBIT by BU
- EBIT by channel
- VCM by product family
- Customer profitability matrix
- Bottom 10 SKU / customer destroying margin

### Visual đề xuất
- Pareto chart
- Profit tree
- Quadrant chart: Revenue vs Margin

## Dashboard 6: Action & Alert Board

### Mục tiêu
Biến dashboard thành công cụ hành động chứ không chỉ quan sát.

### Widget đề xuất
- KPI đỏ / vàng / xanh
- Danh sách alert theo owner
- Root cause notes
- Action tracker 30-60-90 days
- ETA và status xử lý

---

## 8) Layout chi tiết cho UI dashboard

## A. Header toàn cục
- Kỳ báo cáo
- Entity selector
- BU / Plant / Channel / Product / Customer filters
- Actual / Budget / Forecast toggle
- Month / Quarter / YTD / Rolling 12M toggle

## B. Hàng 1: Executive KPI cards
Mỗi card gồm:
- Giá trị hiện tại
- Variance vs Budget
- Variance vs LY hoặc Last Month
- Trend 12M mini sparkline
- Status màu

## C. Hàng 2: Profit bridge
- Waterfall từ Revenue đến EBIT
- Có tooltip cho từng bucket
- Có click để drill sang dashboard chi tiết

## D. Hàng 3: Driver panels
- Revenue drivers
- Variable cost drivers
- Fixed cost drivers

## E. Hàng 4: Exception view
- Top 10 positive contributors
- Top 10 negative contributors
- Alerts cần xử lý ngay

## F. Hàng 5: Commentary
- Management comment
- Root cause summary
- Recommended actions
- Decision log

---

## 9) Mẫu logic cảnh báo màu

## A. Cách chấm màu chuẩn

### Với KPI “cao hơn là tốt”
- Xanh: Actual >= Budget
- Vàng: Actual thấp hơn Budget từ 0% đến 5%
- Đỏ: Actual thấp hơn Budget trên 5%

### Với KPI “thấp hơn là tốt”
- Xanh: Actual <= Budget
- Vàng: Actual cao hơn Budget từ 0% đến 5%
- Đỏ: Actual cao hơn Budget trên 5%

## B. Cách chấm màu theo margin points
Áp dụng cho VCM % và EBIT %:
- Xanh: lệch không quá 0.5 điểm %
- Vàng: lệch từ 0.5 đến 2 điểm %
- Đỏ: lệch trên 2 điểm %

## C. Alert priority
- P1: EBIT âm hoặc giảm mạnh ngoài ngưỡng
- P2: VCM % giảm 2 tháng liên tiếp
- P3: Material / unit hoặc Freight % vượt trần
- P4: Discount %, Return % bất thường

---

## 10) Root-cause framework để đọc P&L

Khi EBIT xấu đi, hệ thống nên ép người dùng đi qua cây chẩn đoán sau:

### Bước 1: Kiểm tra Revenue
- Volume giảm?
- ASP giảm?
- Mix xấu?
- Discount / return tăng?

### Bước 2: Kiểm tra Variable Costs
- Material tăng do giá mua hay định mức?
- Labor tăng do overtime hay productivity giảm?
- Energy tăng do inefficiency hay giá điện?
- Freight tăng do tuyến, tải trọng hay SLA?

### Bước 3: Kiểm tra VCM
- VCM tuyệt đối có tăng nhưng VCM % giảm không?
- Tăng trưởng có đang mua bằng biên lợi nhuận không?

### Bước 4: Kiểm tra Fixed Costs
- Overheads, G&A, maintenance hay logistics fixed tăng?
- Chi phí tăng có tạo năng lực tương ứng không?

### Bước 5: Kết luận quản trị
- Vấn đề do thị trường?
- Do pricing?
- Do operational inefficiency?
- Do bộ máy?
- Do mix khách hàng/sản phẩm?

---

## 11) Bộ câu hỏi quản trị theo từng vai trò

## CEO
- Tăng trưởng hiện tại có tạo ra EBIT chất lượng không?
- Kênh, khách hàng, sản phẩm nào đang kéo lợi nhuận xuống?
- Nếu cắt 10% volume, công ty còn giữ EBIT dương không?

## CFO
- Chênh lệch EBIT so với budget đến từ bucket nào?
- Break-even revenue thay đổi thế nào 6 tháng gần nhất?
- Lợi nhuận có chuyển hóa thành dòng tiền không?

## COO
- Material / unit và labor / unit đang lệch do đâu?
- Plant nào có scrap rate hoặc energy / unit bất thường?
- Năng lực vận hành có hấp thụ được growth không?

## Sales Director
- Revenue growth đến từ volume, ASP hay discount?
- Kênh nào tăng trưởng tốt nhưng biên xấu?
- Top account nào đang yêu cầu trade-off biên quá lớn?

---

## 12) Comment template cho báo cáo quản trị

## A. Template commentary 1 dòng
- Revenue đạt/không đạt kế hoạch do [volume/price/mix].
- VCM biến động chủ yếu do [material/labor/energy/freight].
- EBIT chịu tác động thêm từ [overheads/G&A/logistics fixed].
- Hành động ưu tiên kỳ tới là [3 việc].

## B. Template commentary chuẩn

### Tổng quan
- Revenue: [tăng/giảm] x% vs Budget do [driver].
- VCM %: [tăng/giảm] y điểm % do [driver].
- Fixed cost: [tăng/giảm] z% do [driver].
- EBIT: [tăng/giảm] a% vs Budget.

### Nguyên nhân gốc
- Driver 1:
- Driver 2:
- Driver 3:

### Hành động
- 30 ngày:
- 60 ngày:
- 90 ngày:

---

## 13) Metrics cần có để build dashboard nâng cao

## A. Phân tích mix
- Revenue mix by SKU / category / channel / customer
- VCM mix by SKU / category / channel / customer
- Mix shift impact

## B. Phân tích năng lực
- Capacity utilization
- Output per labor hour
- Revenue per machine hour
- OEE nếu doanh nghiệp sản xuất có dữ liệu

## C. Phân tích khách hàng
- Customer lifetime gross margin
- Customer acquisition payback nếu có marketing cost
- Customer profitability after service cost

## D. Phân tích giá
- ASP waterfall
- Discount waterfall
- Pocket margin nếu có đủ dữ liệu trade spend

---

## 14) Design requirements cho Antigravity

## A. UX principles
- Một màn hình phải dẫn tới một quyết định quản trị rõ ràng.
- Mọi KPI card đều có link drill-down.
- Tooltip phải giải thích công thức, nguồn dữ liệu và owner.
- Màu dùng để ưu tiên, không thay thế con số.
- Ưu tiên đọc trên desktop nhưng vẫn usable trên tablet.

## B. Widget standards
- KPI cards dùng cùng format số, cùng đơn vị, cùng logic màu.
- Chart phải có benchmark line cho budget/target.
- Waterfall và variance bridge phải click được.
- Bảng chi tiết phải có sorting, filtering, export, save view.

## C. Governance
- Có data owner cho từng domain.
- Có approval flow khi thay đổi mapping tài khoản.
- Có audit log cho budget, forecast và manual adjustment.

---

## 15) Backlog triển khai theo phase

## Phase 1: Foundation
- Chuẩn hóa cây P&L quản trị
- Mapping COA vào Revenue / Variable Cost / Fixed Cost
- Xây bảng fact_pl_monthly
- Xây KPI dictionary
- Xây dashboard Executive Overview

## Phase 2: Driver analytics
- Xây revenue bridge volume-price-mix
- Xây variable cost dashboards
- Xây fixed cost control dashboards
- Xây variance vs budget / prior / LY

## Phase 3: Decision engine
- Alert rules
- Commentary templates
- Action tracker
- Owner-based notification
- Forecast and scenario simulation

## Phase 4: Advanced analytics
- Customer profitability
- Product profitability
- Break-even simulator
- What-if pricing and cost model

---

## 16) Danh sách công thức nên cấu hình sẵn

| Metric | Formula |
|---|---|
| Revenue | Gross Revenue - Discount - Return - Rebate |
| ASP | Revenue / Units Sold |
| Total Variable Cost | Material + Direct Labor + Energy + Freight + Other Variable |
| Variable Cost % | Total Variable Cost / Revenue |
| VCM | Revenue - Total Variable Cost |
| VCM % | VCM / Revenue |
| Total Fixed Cost | Maintenance + Overheads + Logistics Fixed + G&A + Other Fixed |
| Fixed Cost % | Total Fixed Cost / Revenue |
| EBIT | VCM - Total Fixed Cost |
| EBIT % | EBIT / Revenue |
| Break-even Revenue | Total Fixed Cost / VCM % |
| Revenue per Headcount | Revenue / Headcount |
| Material per Unit | Material / Units Sold |
| Freight per Order | Freight / Orders |
| Output per Labor Hour | Units Produced / Labor Hours |

---

## 17) Data contract tối thiểu giữa Finance và Business

Để module hoạt động tốt, cần thống nhất data contract:

- Finance cung cấp số liệu đã khóa kỳ.
- Sales cung cấp volume, ASP, discount, return theo khách hàng/kênh/sản phẩm.
- Operations cung cấp output, labor hour, overtime, scrap, energy.
- Procurement cung cấp purchase price trends nếu cần variance analysis.
- HR/Admin cung cấp headcount, payroll mapping, org changes.

### SLA gợi ý
- D+1: sales operational data
- D+3: operations data
- D+5: preliminary finance close
- D+7: final management pack

---

## 18) Mẫu acceptance criteria cho module

## Functional
- Xem được P&L từ company tới BU, channel, customer, product.
- So sánh được Actual vs Budget vs Prior vs LY.
- Drill-down được từ EBIT đến chi tiết driver.
- Export được bảng chi tiết và management pack.
- Lưu được filter preset theo vai trò.

## Data
- Reconcile được với báo cáo tài chính quản trị.
- Có data quality checks tự động.
- Không có metric orphan không rõ công thức.

## UX
- Tải dashboard executive dưới 5 giây ở dataset chuẩn.
- Người dùng hiểu được định nghĩa KPI qua tooltip.
- Có view mobile/tablet đủ dùng cho lãnh đạo.

## Governance
- Có audit log cho manual adjustment.
- Có versioning cho KPI definitions.
- Có phân quyền xem theo BU / region / channel.

---

## 19) Blueprint màn hình nên có trong Antigravity

1. Executive P&L Overview
2. Revenue Analytics
3. Variable Cost Analytics
4. Fixed Cost Control
5. Profitability by Product
6. Profitability by Customer
7. Profitability by Channel
8. Plant / Operations Efficiency
9. Budget vs Actual Variance Center
10. Alerts & Action Tracker
11. Commentary & Management Pack Export
12. Scenario / What-if Simulator

---

## 20) Kết luận triển khai

Module P&L tốt phải biến dữ liệu kế toán thành hệ thống điều hành. Trọng tâm không nằm ở việc hiển thị số đẹp, mà ở việc nối được EBIT với volume, price, mix, biến phí và fixed cost để ra quyết định nhanh.

Nếu phải ưu tiên, nên bắt đầu từ 3 khối:
- Cây P&L quản trị chuẩn
- KPI dictionary chuẩn
- Executive dashboard có drill-down đến root cause

Khi ba khối này ổn, các lớp nâng cao như alert, commentary, action tracker và scenario modeling mới thực sự tạo giá trị quản trị.
