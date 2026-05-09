# UI Spec chi tiết cho Frontend - Antigravity P&L Module

## 1. Mục tiêu tài liệu

Tài liệu này đặc tả lớp UI ở mức frontend-ready cho module P&L trong Antigravity. Mục tiêu là giúp team frontend có thể dựng màn hình, tách component, chuẩn hóa props, xử lý state và thống nhất hành vi tương tác trước khi backend hoàn tất API thật.

Tài liệu này kế thừa từ các tài liệu đã có:
- Knowledge base module P&L
- PRD module P&L
- Wireframe dashboard và component tree
- Mock JSON từ P&L 2026 mẫu

---

## 2. Nguyên tắc UI tổng thể

### Mục tiêu trải nghiệm
- Người dùng cấp lãnh đạo phải hiểu sức khỏe tài chính trong dưới 30 giây.
- Người dùng vận hành phải drill-down từ EBIT xuống driver trong tối đa 3 click.
- Analyst phải xem được bảng chi tiết mà không mất filter context.
- Hệ thống phải nhất quán về màu, trạng thái, format số và cách hiển thị variance.

### Triết lý trình bày
- Ưu tiên hierarchy: KPI → bridge/trend → exception → detail table.
- Một màn hình chỉ nên có một câu hỏi quản trị chính.
- Mọi component hiển thị số phải cho biết ngữ cảnh so sánh: Budget, Prior, LY hoặc Forecast.
- Màu không thay thế con số; màu chỉ ưu tiên mức độ chú ý.
- Tooltip là thành phần bắt buộc với mọi KPI và chart point quan trọng.

---

## 3. Layout spec

## Breakpoints

| Breakpoint | Width | Mục tiêu |
|---|---:|---|
| mobile | 0-767px | Xem nhanh KPI, chart đơn giản, alert |
| tablet | 768-1279px | Review dashboard, comment, drill-down vừa phải |
| desktop | 1280px+ | Phân tích đầy đủ, xem bảng chi tiết, so sánh đa chiều |

## Grid system

### Desktop
- Grid 12 cột.
- Gap ngang 16px.
- Gap dọc 16px.
- Outer padding 24px.
- Max content width 1600px.

### Tablet
- Grid 6 cột.
- Gap 12px.
- Outer padding 16px.

### Mobile
- Grid 1 cột.
- Gap 12px.
- Outer padding 12px.

## Shell layout

```text
AppShell
├── TopNavigation (fixed)
├── SideNavigation (desktop/tablet only)
├── PageHeader
├── StickyFilterBar
├── KPISection
├── InsightSection
├── AnalysisSection
└── FooterMeta
```

### Sticky behavior
- TopNavigation cố định trên cùng.
- FilterBar sticky ngay dưới PageHeader.
- Side panel alert/commentary sticky trên desktop nếu chiều cao cho phép.
- Bảng chi tiết không tạo nested scroll trừ khi số cột quá lớn.

---

## 4. Navigation spec

## Top navigation

### Nội dung
- Logo / workspace switcher
- Tên module: P&L Management
- Saved views
- Quick search
- Export menu
- User menu

### Hành vi
- Saved view load lại toàn bộ filter + compare mode + tab active.
- Export menu cho phép export current view.
- Quick search hỗ trợ KPI, customer, product, service line.

## Side navigation

### Mục menu
1. Overview
2. Revenue
3. Variable Costs
4. Fixed Costs
5. Profitability
6. Alerts & Actions
7. Commentary
8. KPI Dictionary

### Hành vi
- Hiển thị trạng thái active rõ ràng.
- Cho phép collapse ở tablet.
- Mobile chuyển thành bottom sheet menu hoặc drawer.

---

## 5. Page header spec

## Thành phần
- Page title
- Subtitle mô tả câu hỏi quản trị
- Period selector
- Compare mode toggle
- Currency/unit selector nếu cần
- Export button
- Share button

## Hành vi
- Thay đổi period hoặc compare mode trigger reload toàn bộ widgets trên trang.
- Export button dùng current filter context.
- Subtitle thay đổi theo page.

### Ví dụ subtitle
- Overview: "Theo dõi Revenue, VCM, Fixed Cost và EBIT trong cùng một bức tranh quản trị"
- Revenue: "Tách doanh thu thành volume, price, mix, discount và return"
- Variable Costs: "Xác định bucket chi phí nào đang co biên"

---

## 6. Filter bar spec

## Filters mặc định
- Period
- Entity
- Business Unit
- Channel
- Product / Service Line
- Customer
- Plant / Delivery Unit
- Segment
- Compare mode

## Quy tắc hiển thị
- Filter chính hiển thị trực tiếp.
- Filter nâng cao nằm trong `More filters` dropdown.
- Các filter đang active hiển thị thành chip.
- Có nút `Reset` và `Save view`.

## Hành vi
- Multi-select cho Channel, Product, Customer.
- Period hỗ trợ monthly, quarterly, YTD, rolling 12M.
- Filter thay đổi phải debounce nhẹ, nhưng vẫn phản hồi nhanh.
- Nếu filter làm mất dữ liệu chart, phải hiện empty state rõ ràng.

---

## 7. KPI card spec

## Mục tiêu
Hiển thị nhanh trạng thái KPI và mức lệch so với benchmark.

## Cấu trúc
```text
KPIStatCard
├── HeaderRow
│   ├── KPI Label
│   ├── Info Tooltip Trigger
│   └── Status Dot / Badge
├── ValueRow
│   ├── Actual Value
│   └── Unit / Currency
├── ComparisonRow
│   ├── Variance Badge
│   ├── Target Label
│   └── Optional mini note
├── SparklineRow
└── FooterMetaRow
    ├── Owner
    ├── Last Refresh
    └── Drilldown affordance
```

## Nội dung bắt buộc
- Tên KPI.
- Giá trị actual.
- Target hoặc benchmark.
- Variance absolute và/hoặc variance %.
- Status: green/yellow/red/critical.
- Sparkline 6-12 kỳ gần nhất.

## Trạng thái
- `green`: đạt hoặc tốt hơn target.
- `yellow`: lệch nhẹ.
- `red`: lệch rõ ràng cần can thiệp.
- `critical`: ảnh hưởng nghiêm trọng như EBIT âm, data lỗi, hoặc hụt ngưỡng quá sâu.

## Hành vi
- Click card mở dashboard liên quan hoặc drawer chi tiết.
- Hover tooltip hiển thị formula, definition, owner, source, threshold.
- Card loading dùng skeleton có chiều cao cố định.

---

## 8. Chart card spec

## Cấu trúc chung
```text
ChartCard
├── CardHeader
│   ├── Title
│   ├── Subtitle
│   ├── Legend / Metric Toggle
│   └── Actions (expand, download, info)
├── CardBody
│   └── ChartCanvas / SVG
├── CardFooter
│   ├── Insight Snippet
│   └── Drilldown CTA
```

## Quy tắc chart
- Chart luôn có title và subtitle có nghĩa quản trị.
- Legend phải click được nếu có nhiều series.
- Trục Y format theo currency hoặc %.
- Tooltip hiển thị raw value, target, variance, dimension context.
- Với data ít, ưu tiên bar/line đơn giản thay vì chart phức tạp.

## Chart types theo page
- Overview: waterfall, multi-line trend, variance bridge.
- Revenue: line, stacked bar, PVM bridge.
- Variable Costs: line, heatmap, bridge.
- Fixed Costs: stacked bar, ranking bar.
- Profitability: pareto, matrix, ranking.

---

## 9. Table spec

## Mục tiêu
Hỗ trợ analyst và quản lý xem dữ liệu chi tiết, sort, filter và export.

## Cấu trúc
```text
DataTableCard
├── TableToolbar
│   ├── Search
│   ├── Column Selector
│   ├── Density Toggle
│   ├── Download
│   └── Freeze Column Toggle
├── TableGrid
├── Pagination / Infinite Scroll
└── FooterSummary
```

## Quy tắc
- Cột đầu tiên cố định khi scroll ngang.
- Cột numeric căn phải.
- Cột tỷ lệ format phần trăm 1-2 chữ số thập phân.
- Có row hover state và clickable row state.
- Có thể mở row detail drawer.

## Table states
- Loading: skeleton rows.
- Empty: thông báo + gợi ý đổi filter.
- Error: retry button.
- Partial data: chip cảnh báo `incomplete`.

---

## 10. Alert board spec

## Mục tiêu
Biến KPI đỏ thành danh sách vấn đề phải xử lý.

## Cấu trúc
```text
AlertBoard
├── SummaryRow
│   ├── P1 count
│   ├── P2 count
│   ├── P3 count
│   └── P4 count
├── AlertList
│   └── AlertItem[]
└── FooterLink
```

## Alert item
- Severity badge.
- Title.
- Affected KPI / dimension.
- Owner.
- Due date.
- Status: open, in_progress, blocked, done.
- CTA: open action plan.

## Hành vi
- Click alert mở RootCause drawer.
- Có filter theo severity, owner, status.
- Alert P1 luôn hiển thị trên cùng.

---

## 11. Commentary spec

## Mục tiêu
Tạo khu vực để người dùng đọc, chỉnh sửa và lưu nhận định quản trị.

## Layout
```text
CommentaryCard
├── Header
│   ├── Title
│   ├── Auto Draft Tag
│   └── Edit / Save buttons
├── SummaryBlock
├── RootCauseBlock
├── Actions30_60_90Block
└── FooterMeta
```

## Hành vi
- Có mode read và edit.
- Edit mode dùng textarea rich-lite hoặc markdown-lite.
- Có nút reset về auto draft.
- Lưu theo period + filter scope.

---

## 12. Drilldown spec

## Pattern dùng chung
- Drilldown mặc định mở trong right drawer trên desktop.
- Ở mobile dùng full-screen sheet.
- Từ drawer có thể `Open full page` nếu user cần phân tích sâu.

## Nội dung drawer
- Header: metric name + current filter context.
- Mini KPI summary.
- Related chart.
- Detail table.
- Open actions.

---

## 13. Page-by-page UI spec

## 13.1 Overview

### Thành phần bắt buộc
- 8-10 KPI cards.
- Waterfall chart.
- 12M trend chart.
- Alert board.
- Commentary panel.
- Top positive/negative contributor tables.
- Reconciliation table.

### Ưu tiên thông tin
1. EBIT và EBIT %
2. Revenue và VCM %
3. Fixed cost ratio
4. Alert và action

### Layout desktop
- Row 1: 8 KPI cards, mỗi card span 3.
- Row 2: Waterfall span 8, Alert span 4.
- Row 3: Trend span 8, Commentary span 4.
- Row 4: Contributor tables span 6 + 6.
- Row 5: Reconciliation table span 12.

## 13.2 Revenue

### Thành phần bắt buộc
- KPI cards: Revenue, Units, ASP, Discount %, Return %, Net Revenue Ratio.
- Revenue trend.
- Units trend.
- ASP trend.
- Revenue by dimension.
- Price-Volume-Mix bridge.
- Ranking tabs.
- Detail table.

### Layout desktop
- KPI cards span 2 mỗi card.
- Row charts 1: Revenue trend span 8, revenue by dimension span 4.
- Row charts 2: Units trend span 6, ASP trend span 6.
- Row charts 3: PVM bridge span 12.
- Ranking tabs span 12.
- Detail table span 12.

## 13.3 Variable Costs

### Thành phần bắt buộc
- KPI cards: Material %, Material/Unit, Labor/Unit, Energy/Unit, Freight %.
- Material trend + variance.
- Labor efficiency + overtime/productivity.
- Energy/Unit + Freight by dimension.
- Heatmap.
- Variable cost bridge.
- Exception table.

## 13.4 Fixed Costs

### Thành phần bắt buộc
- KPI cards: Fixed Cost, Fixed Cost %, Overheads %, G&A %, Maintenance %.
- Trend charts theo bucket.
- Revenue per headcount.
- Cost center ranking.
- Detailed table.

## 13.5 Profitability

### Thành phần bắt buộc
- KPI cards: EBIT, EBIT %, VCM, VCM %, Revenue, Revenue share.
- Profit by BU/channel/product/customer.
- Pareto chart.
- Bottom destructive table.
- Detail table.

## 13.6 Alerts & Actions

### Thành phần bắt buộc
- Alert summary cards.
- Alert queue table.
- Owner workload panel.
- Root cause panel.
- 30/60/90 board.
- Resolution log.

## 13.7 Commentary

### Thành phần bắt buộc
- Summary header.
- Auto draft panel.
- Manual edit panel.
- KPI highlights.
- Risk highlights.
- Action board.
- Export preview.

## 13.8 KPI Dictionary

### Thành phần bắt buộc
- Search + filters.
- KPI list table.
- Detail drawer.
- Formula preview.
- Mapping preview.

---

## 14. State management spec

## Global state
- Current page.
- Current filters.
- Compare mode.
- Period granularity.
- Theme.
- Saved view id.

## Remote state
- KPI summary data.
- Charts data.
- Table data.
- Alerts data.
- Commentary data.
- Dictionary data.

## Local UI state
- Expanded card.
- Active tab.
- Open drawer id.
- Sort state.
- Table density.
- Column visibility.
- Draft commentary.

## Khuyến nghị structure
```ts
interface PLViewState {
  page: string;
  filters: PLFilterState;
  compareMode: CompareMode;
  periodGranularity: PeriodGranularity;
  theme: 'light' | 'dark';
  savedViewId?: string;
}
```

---

## 15. Loading, empty, error states

## Loading
- KPI cards dùng skeleton block.
- Chart cards giữ chiều cao cố định để tránh layout shift.
- Tables dùng 5-8 skeleton rows.

## Empty
- Text gợi ý rõ ràng: `Không có dữ liệu với filter hiện tại`.
- Có CTA `Reset filters`.
- Nếu dashboard chưa được cấu hình, hiện CTA `Go to Dictionary` hoặc `Check data mapping`.

## Error
- Hiển thị message đơn giản, không lộ chi tiết kỹ thuật.
- Có nút `Retry`.
- Nếu partial failure, các widget khác vẫn hiển thị bình thường.

---

## 16. Format spec

## Number formatting
- Currency lớn: `1.2M`, `25.4K` ở card; bảng vẫn hiển thị full value khi hover.
- %: mặc định 1 chữ số thập phân ở card, 2 chữ số ở bảng nếu cần.
- Ratio per unit: format theo đơn vị, ví dụ `2,450 USD/unit`.

## Date formatting
- Period card: `Apr 2026`.
- Tooltip chi tiết: `2026-04` hoặc `05 May 2026` tùy context.

## Variance formatting
- Dương tốt: màu xanh nếu `high is good`.
- Âm xấu: màu đỏ nếu `high is good`.
- Phải đọc theo polarity của KPI, không chỉ theo dấu số.

---

## 17. Accessibility spec

- Mọi button có `aria-label` nếu chỉ dùng icon.
- Bảng hỗ trợ keyboard navigation cơ bản.
- Tooltip mở được bằng keyboard focus.
- Màu status phải có text hoặc icon bổ trợ, không chỉ màu.
- Contrast của status chip và badge phải đủ đọc.

---

## 18. Handoff checklist cho frontend

- Có mock JSON cho từng page.
- Có component props chuẩn hóa.
- Có design tokens dùng chung.
- Có empty/loading/error states.
- Có format rules cho currency, %, variance.
- Có page layout map cho desktop/tablet/mobile.
- Có rule drilldown và navigation.

