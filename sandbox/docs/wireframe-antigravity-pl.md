# Wireframe chi tiết cho từng dashboard và Component Tree cho Antigravity

Tài liệu này mô tả wireframe ở mức implementation-ready cho module P&L và dashboard quản trị Antigravity, bám theo cấu trúc P&L 5 tầng và bộ số liệu mẫu P&L 2026 của dự án dịch vụ người dùng đã gửi.

---

## 1. Nguyên tắc thiết kế màn hình

### Mục tiêu UI
- Lãnh đạo đọc được sức khỏe kinh doanh trong dưới 30 giây.
- Người quản trị drill-down từ EBIT tới đúng driver gây biến động.
- Analyst có thể truy bảng chi tiết mà không rời context.
- Mọi widget đều cùng một grammar: actual, target, variance, trend, status, owner.

### Design rules cho Antigravity
- Layout 12 cột desktop, 6 cột tablet, 1 cột mobile.
- Thanh filter cố định phía trên.
- KPI cards luôn đặt ở hàng đầu.
- Charts ở giữa, bảng exception ở cuối.
- Panel commentary và alert phải luôn hiện cùng hoặc ở tab liền kề.
- Tooltip chuẩn hóa: công thức, định nghĩa, owner, last refresh, source.

---

## 2. Global layout shell

## Wireframe tổng thể

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Top Nav: Logo | Workspace | Module P&L | Saved Views | User Menu   │
├──────────────────────────────────────────────────────────────────────┤
│ Page Header: Title | Period Picker | Compare Mode | Export | Share │
├──────────────────────────────────────────────────────────────────────┤
│ Sticky Filter Bar                                                   │
│ Entity | BU | Channel | Product | Customer | Plant | Segment       │
├──────────────────────────────────────────────────────────────────────┤
│ KPI Cards Row                                                       │
├──────────────────────────────────────────────────────────────────────┤
│ Main Insights Area                                                  │
│ Left: charts / bridge / trends | Right: alerts / commentary        │
├──────────────────────────────────────────────────────────────────────┤
│ Detail Analysis Area                                                │
│ Tables | heatmaps | ranking | drill-down details                   │
├──────────────────────────────────────────────────────────────────────┤
│ Footer Controls: last refresh | owner | data quality status         │
└──────────────────────────────────────────────────────────────────────┘
```

## Global component tree

```text
PLModulePage
├── AppShell
│   ├── TopNavigation
│   ├── SideNavigation
│   └── ContentArea
├── PageHeader
│   ├── PageTitle
│   ├── PeriodSelector
│   ├── CompareModeToggle
│   ├── SavedViewDropdown
│   ├── ExportButton
│   └── ShareButton
├── GlobalFilterBar
│   ├── EntityFilter
│   ├── BUFilter
│   ├── ChannelFilter
│   ├── ProductFilter
│   ├── CustomerFilter
│   ├── PlantFilter
│   └── ResetFiltersButton
├── StatusBanner
│   ├── DataRefreshChip
│   ├── DataQualityChip
│   └── ActiveScenarioChip
└── PageBody
```

---

## 3. Dashboard 1 - Executive P&L Overview

### Mục tiêu
Một màn hình để CEO/CFO trả lời: công ty đang tốt hay xấu, xấu ở mắt xích nào, và phải xử lý gì trước.

## Wireframe

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ Header + Filters                                                          │
├────────────────────────────────────────────────────────────────────────────┤
│ [Revenue] [Revenue Growth] [VCM] [VCM %] [Fixed Cost] [Fixed Cost %]     │
│ [EBIT] [EBIT %] [Break-even Revenue] [Run-rate]                           │
├───────────────────────────────────────┬────────────────────────────────────┤
│ Waterfall: Revenue → Var Cost → VCM  │ Alert Board                        │
│ → Fixed Cost → EBIT                  │ - P1 / P2 / P3                    │
│                                       │ - Owners                           │
├───────────────────────────────────────┼────────────────────────────────────┤
│ 12M Trend: Revenue / VCM % / EBIT %  │ Commentary                         │
│                                       │ - Summary                          │
│                                       │ - Root cause                       │
│                                       │ - 30/60/90 actions                 │
├───────────────────────────────────────┴────────────────────────────────────┤
│ Top Positive Contributors | Top Negative Contributors                     │
├────────────────────────────────────────────────────────────────────────────┤
│ Reconciliation Table: Actual vs Budget vs Prior vs LY                     │
└────────────────────────────────────────────────────────────────────────────┘
```

## Component tree

```text
ExecutiveOverviewPage
├── KPIGrid
│   ├── KPIStatCard(REVENUE)
│   ├── KPIStatCard(REVENUE_GROWTH)
│   ├── KPIStatCard(VCM)
│   ├── KPIStatCard(VCM_MARGIN)
│   ├── KPIStatCard(FIXED_COST)
│   ├── KPIStatCard(FIXED_COST_RATIO)
│   ├── KPIStatCard(EBIT)
│   ├── KPIStatCard(EBIT_MARGIN)
│   ├── KPIStatCard(BREAKEVEN_REVENUE)
│   └── KPIStatCard(RUN_RATE)
├── MainSplitLayout
│   ├── PLWaterfallCard
│   ├── AlertBoardCard
│   ├── MultiTrendChartCard
│   └── CommentaryCard
├── ContributorsPanel
│   ├── PositiveContributorsTable
│   └── NegativeContributorsTable
└── ReconciliationTableCard
```

### UI notes
- KPI card phải có: actual, target, variance %, trend sparkline, status dot.
- Waterfall phải click được từng bucket để mở dashboard con.
- Commentary card cho phép manual edit hoặc AI-assisted draft.

---

## 4. Dashboard 2 - Revenue Analytics

### Mục tiêu
Tách doanh thu thành volume, price, mix, discount và return.

## Wireframe

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ KPI: Revenue | Units | ASP | Discount % | Return % | Net Revenue Ratio    │
├────────────────────────────────────────────────────────────────────────────┤
│ Revenue Trend by Month                 │ Revenue by Channel/Product       │
├────────────────────────────────────────┼───────────────────────────────────┤
│ Units Trend                            │ ASP Trend                        │
├────────────────────────────────────────┴───────────────────────────────────┤
│ Price-Volume-Mix Bridge                                                │
├────────────────────────────────────────────────────────────────────────────┤
│ Customer Ranking | Channel Ranking | Product Ranking Tabs                │
├────────────────────────────────────────────────────────────────────────────┤
│ Detailed Table: Month x Channel x Product x Customer                     │
└────────────────────────────────────────────────────────────────────────────┘
```

## Component tree

```text
RevenueAnalyticsPage
├── KPIGrid
│   ├── KPIStatCard(REVENUE)
│   ├── KPIStatCard(UNITS_SOLD)
│   ├── KPIStatCard(ASP)
│   ├── KPIStatCard(DISCOUNT_RATIO)
│   ├── KPIStatCard(RETURN_RATIO)
│   └── KPIStatCard(NET_REVENUE_RATIO)
├── ChartGrid
│   ├── RevenueTrendChart
│   ├── RevenueByDimensionChart
│   ├── UnitsTrendChart
│   ├── ASPTrendChart
│   └── PriceVolumeMixBridge
├── RankingTabs
│   ├── CustomerRankingTable
│   ├── ChannelRankingTable
│   └── ProductRankingTable
└── RevenueDetailTable
```

### UI notes
- Có toggle xem theo month, quarter, YTD.
- PVM bridge là widget bắt buộc vì đây là logic quản trị chính của revenue.

---

## 5. Dashboard 3 - Variable Cost Analytics

### Mục tiêu
Bóc tách driver làm co VCM.

## Wireframe

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ KPI: Material % | Material/Unit | Labor/Unit | Energy/Unit | Freight %    │
├────────────────────────────────────────────────────────────────────────────┤
│ Material Trend                         │ Material Variance vs Budget       │
├────────────────────────────────────────┼───────────────────────────────────┤
│ Labor Efficiency                       │ Overtime / Productivity           │
├────────────────────────────────────────┼───────────────────────────────────┤
│ Energy per Unit                        │ Freight by Channel / Region       │
├────────────────────────────────────────┴───────────────────────────────────┤
│ Heatmap: Plant/Product/Month                                               │
├────────────────────────────────────────────────────────────────────────────┤
│ Variable Cost Bridge: Material → Labor → Energy → Freight → Other         │
├────────────────────────────────────────────────────────────────────────────┤
│ Exception Table: Top drivers destroying margin                             │
└────────────────────────────────────────────────────────────────────────────┘
```

## Component tree

```text
VariableCostPage
├── KPIGrid
│   ├── KPIStatCard(MATERIAL_RATIO)
│   ├── KPIStatCard(MATERIAL_PER_UNIT)
│   ├── KPIStatCard(LABOR_PER_UNIT)
│   ├── KPIStatCard(ENERGY_PER_UNIT)
│   └── KPIStatCard(FREIGHT_RATIO)
├── CostChartsGrid
│   ├── MaterialTrendChart
│   ├── MaterialVarianceChart
│   ├── LaborEfficiencyChart
│   ├── OvertimeProductivityChart
│   ├── EnergyUnitChart
│   └── FreightDimensionChart
├── CostHeatmapCard
├── VariableCostBridgeCard
└── CostExceptionsTable
```

---

## 6. Dashboard 4 - Fixed Cost Control

### Mục tiêu
Kiểm soát bộ máy và chi phí nền.

## Wireframe

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ KPI: Fixed Cost | Fixed Cost % | Overheads % | G&A % | Maintenance %      │
├────────────────────────────────────────────────────────────────────────────┤
│ Fixed Cost Trend                        │ Cost Center Ranking              │
├─────────────────────────────────────────┼──────────────────────────────────┤
│ Overheads vs Revenue                    │ Revenue per Headcount            │
├─────────────────────────────────────────┼──────────────────────────────────┤
│ Maintenance Trend                       │ Logistics Fixed Trend            │
├─────────────────────────────────────────┴──────────────────────────────────┤
│ Stacked Bar by Month: Maintenance / Overheads / G&A / Logistics Fixed     │
├────────────────────────────────────────────────────────────────────────────┤
│ Table: Cost center details                                                 │
└────────────────────────────────────────────────────────────────────────────┘
```

## Component tree

```text
FixedCostPage
├── KPIGrid
│   ├── KPIStatCard(FIXED_COST)
│   ├── KPIStatCard(FIXED_COST_RATIO)
│   ├── KPIStatCard(OVERHEAD_RATIO)
│   ├── KPIStatCard(GA_RATIO)
│   └── KPIStatCard(MAINTENANCE_RATIO)
├── FixedCostChartsGrid
│   ├── FixedCostTrendChart
│   ├── CostCenterRankingChart
│   ├── OverheadsVsRevenueChart
│   ├── RevenuePerHeadcountChart
│   ├── MaintenanceTrendChart
│   └── LogisticsFixedTrendChart
├── FixedCostStackedBarCard
└── CostCenterDetailTable
```

---

## 7. Dashboard 5 - Profitability Drill-down

### Mục tiêu
Tìm BU, kênh, sản phẩm, khách hàng phá hoặc tạo lợi nhuận.

## Wireframe

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ KPI: EBIT | EBIT % | VCM | VCM % | Revenue | Revenue Share                │
├────────────────────────────────────────────────────────────────────────────┤
│ Profitability by BU                    │ Profitability by Channel         │
├────────────────────────────────────────┼───────────────────────────────────┤
│ Product Family Margin                  │ Customer Profitability Matrix    │
├────────────────────────────────────────┴───────────────────────────────────┤
│ Pareto: Top 20 contributors to EBIT                                        │
├────────────────────────────────────────────────────────────────────────────┤
│ Bottom 10 destructive customers / SKU                                      │
├────────────────────────────────────────────────────────────────────────────┤
│ Detail table with sortable columns                                         │
└────────────────────────────────────────────────────────────────────────────┘
```

## Component tree

```text
ProfitabilityPage
├── KPIGrid
│   ├── KPIStatCard(EBIT)
│   ├── KPIStatCard(EBIT_MARGIN)
│   ├── KPIStatCard(VCM)
│   ├── KPIStatCard(VCM_MARGIN)
│   ├── KPIStatCard(REVENUE)
│   └── KPIStatCard(REVENUE_SHARE)
├── ProfitabilityChartsGrid
│   ├── ProfitByBUChart
│   ├── ProfitByChannelChart
│   ├── ProductMarginChart
│   └── CustomerProfitMatrix
├── ParetoContributionCard
├── DestructiveEntitiesTable
└── ProfitabilityDetailTable
```

---

## 8. Dashboard 6 - Alerts & Actions

### Mục tiêu
Biến insight thành action.

## Wireframe

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ KPI status summary: Green | Yellow | Red | Critical                       │
├────────────────────────────────────────────────────────────────────────────┤
│ Alert Queue                             │ Owner Workload                  │
├─────────────────────────────────────────┼──────────────────────────────────┤
│ Root Cause Detail                       │ 30-60-90 Action Plan            │
├─────────────────────────────────────────┴──────────────────────────────────┤
│ Action Tracker Table                                                      │
├────────────────────────────────────────────────────────────────────────────┤
│ Notes / Comments / Resolution Log                                          │
└────────────────────────────────────────────────────────────────────────────┘
```

## Component tree

```text
AlertsActionsPage
├── AlertSummaryCards
├── AlertQueueTable
├── OwnerWorkloadPanel
├── RootCausePanel
├── ActionPlanBoard
└── ResolutionLogTable
```

---

## 9. Dashboard 7 - Commentary & Management Pack

### Mục tiêu
Tổng hợp góc nhìn điều hành và xuất báo cáo.

## Wireframe

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ Summary Header: Period / Scope / Status / Export Pack                     │
├────────────────────────────────────────────────────────────────────────────┤
│ Auto Commentary Draft                  │ Manual Commentary Editor         │
├────────────────────────────────────────┼───────────────────────────────────┤
│ KPI Highlights                         │ Risk Highlights                  │
├────────────────────────────────────────┴───────────────────────────────────┤
│ 30-60-90 Actions                                                        │
├────────────────────────────────────────────────────────────────────────────┤
│ Export Preview: PDF / PPT / XLSX / MD                                      │
└────────────────────────────────────────────────────────────────────────────┘
```

## Component tree

```text
CommentaryPage
├── SummaryHeaderCard
├── CommentarySplitEditor
│   ├── AutoDraftPanel
│   └── ManualEditorPanel
├── HighlightsPanels
│   ├── KPIHighlightsList
│   └── RiskHighlightsList
├── ActionPlanBoard
└── ExportPreviewPanel
```

---

## 10. Dashboard 8 - Admin / KPI Dictionary

### Mục tiêu
Chuẩn hóa định nghĩa KPI và nguồn dữ liệu.

## Wireframe

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ Search KPI | Filter by layer | Filter by owner | Add KPI                  │
├────────────────────────────────────────────────────────────────────────────┤
│ KPI List Table                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│ Detail Drawer                                                             │
│ Name | Code | Formula | Unit | Polarity | Thresholds | Owner | Sources    │
├────────────────────────────────────────────────────────────────────────────┤
│ Mapping Preview                                                           │
└────────────────────────────────────────────────────────────────────────────┘
```

## Component tree

```text
KPIDictionaryPage
├── DictionaryToolbar
├── KPITable
├── KPIDetailDrawer
└── MappingPreviewCard
```

---

## 11. Shared reusable components cho Antigravity

```text
SharedComponents
├── KPIStatCard
├── VarianceBadge
├── TrendSparkline
├── SectionHeader
├── ChartCard
├── TableCard
├── AlertChip
├── StatusLegend
├── CommentaryCard
├── WaterfallChart
├── VarianceBridgeChart
├── HeatmapChart
├── ParetoChart
├── ProfitMatrix
├── FilterBar
├── EntitySwitcher
├── PeriodSelector
├── CompareModeToggle
├── ExportMenu
├── DrilldownDrawer
├── DetailTable
└── EmptyState / ErrorState / LoadingSkeleton
```

---

## 12. Grid mapping gợi ý

### Desktop 12 columns
- KPIStatCard: span 2 hoặc 3.
- Waterfall: span 8.
- Alerts/Commentary side panel: span 4.
- Major trend charts: span 6.
- Detail tables: span 12.

### Tablet 6 columns
- KPI cards: span 3.
- Charts: span 6 hoặc 3 tuỳ ưu tiên.
- Side panel xuống dưới charts.

### Mobile 1 column
- KPI cards thành carousel hoặc stack.
- Charts full width.
- Table chuyển thành accordion/card rows.

---

## 13. Áp dữ liệu mẫu P&L 2026 vào dashboard

Dựa trên sheet mẫu, cấu trúc phù hợp nhất là xem đây như một dự án dịch vụ có nhiều dòng sản phẩm/dịch vụ như Startup Visa, thương mại công nghệ, tư vấn và MICE, với lớp doanh thu, chi phí trực tiếp, chi phí gián tiếp và lãi/lỗ theo tháng. Vì vậy ở bản MVP frontend, nên dựng dataset demo theo project/service P&L trước, sau đó mới tổng quát hóa cho đa ngành.

### Mapping từ sheet mẫu sang cấu trúc quản trị
- Revenue: Doanh thu theo service line.
- Variable Costs: Cost + một phần chi phí triển khai trực tiếp.
- Fixed Costs: quản lý dự án, hỗ trợ cá nhân, chia sẻ doanh thu và phần overhead nếu doanh nghiệp muốn xem là fixed.
- EBIT: lãi/lỗ cuối kỳ.

### Service lines từ mẫu
- Japan Entry Pack - Startup Visa
- Thương mại hoá công nghệ
- Tư vấn
- Dịch vụ MICE tại Nhật

