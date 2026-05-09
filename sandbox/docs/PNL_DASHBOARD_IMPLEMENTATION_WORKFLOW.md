# P&L Dashboard Implementation Workflow

Tài liệu này đóng gói bộ PRD, UI spec, wireframe và implementation guide của module P&L vào một quy trình triển khai thống nhất cho dự án `lp_hub`.

## 1. Khi nào dùng workflow này

Dùng workflow này cho mọi thay đổi liên quan đến:

- `pnl_dashboard.html`
- `admin/dashboard.html`
- `scripts/finance_api.gs`
- KPI dictionary, P&L mapping, budget/actual/forecast
- Dashboard 4 Fixed Cost, Dashboard 5 Profitability, Dashboard 6 Alerts & Actions
- Commentary, action tracker, export pack, audit/close workflow

Không dùng workflow này cho landing page marketing thông thường. Với landing page, tiếp tục dùng `SOP_DEPLOYMENT.md`.

## 2. Tài liệu nguồn và thứ tự đọc

Đọc theo đúng thứ tự sau để giảm token và tránh lệch scope:

1. `docs/PROJECT_MAP.md` - định vị file và quy tắc không đọc file output lớn.
2. `docs/prd-antigravity-pl-module.md` - mục tiêu sản phẩm, user stories, MVP scope.
3. `docs/module-pl-dashboard-antigravity.md` - logic quản trị P&L, dashboard blueprint, phase backlog.
4. `docs/ui-spec-antigravity-pl.md` - layout, navigation, component behavior, state.
5. `docs/wireframe-antigravity-pl.md` - wireframe từng dashboard và component tree.
6. `docs/design-tokens-component-props.md` - tokens, component props, chart/table contracts.
7. `docs/antigravity-pnl-implementation-guide.md` - data model, pipeline, governance, acceptance criteria.

Chỉ đọc toàn bộ bộ tài liệu khi lập kế hoạch sprint hoặc review kiến trúc. Khi sửa code, chỉ đọc phần tài liệu tương ứng với dashboard hoặc layer đang xử lý.

## 3. Phase-gate triển khai

### Gate 0: Scope lock

Trước khi viết code, phải xác định:

- Dashboard hoặc layer đang làm: Overview, Revenue, Variable Costs, Fixed Costs, Profitability, Alerts, Admin Rules.
- Version dữ liệu: Actual, Budget, Forecast, Prior, LY.
- Grain dữ liệu: period, entity, BU, channel, product, customer, account.
- File được phép sửa.
- Acceptance criteria cụ thể.

Output bắt buộc:

- Task scope ngắn trong changelog hoặc issue note.
- Danh sách file dự kiến thay đổi.

### Gate 1: Data contract

Trước UI, phải chốt dữ liệu đầu vào:

- KPI code, formula, unit, polarity.
- Source sheet/API field.
- Filter dimensions.
- Compare mode.
- Rule fallback khi mẫu số bằng 0.
- Data quality checks.

Không hard-code công thức tổng hợp trong dashboard nếu công thức thuộc semantic/calculation layer.

### Gate 2: Computation layer

Triển khai hoặc kiểm tra:

- Sign normalization.
- Net revenue, variable cost, fixed cost, VCM, EBIT.
- Actual vs Budget/Forecast/Prior variance.
- Status color rules: green/yellow/red.
- Drill-down payload hoặc mock data contract.

File ưu tiên:

- `scripts/finance_api.gs`
- API adapter hoặc data parsing trong dashboard hiện tại

### Gate 3: UI implementation

Triển khai UI theo thứ tự:

1. Shell: navigation, page header, filters.
2. KPI cards.
3. Primary chart: waterfall, trend, bridge hoặc matrix.
4. Exception/action panel.
5. Detail table.
6. Export/commentary controls.

Quy tắc UI:

- Một màn hình trả lời một câu hỏi quản trị chính.
- KPI và chart point quan trọng phải có tooltip hoặc metadata rõ nguồn/công thức.
- Bảng phải giữ filter context.
- Mobile/tablet chỉ cần usable, desktop là chế độ phân tích đầy đủ.

### Gate 4: Governance

Bắt buộc cho phase 4+:

- Audit trail cho mapping, adjustment, reclass.
- Close status: Open, Soft Close, Review, Locked, Reopened.
- Role matrix cho CEO/CFO/Controller/FP&A/Department Head/Data Admin.
- Export snapshot theo kỳ.
- Queue cho unmapped account, reconciliation breach, manual adjustment.

### Gate 5: Verification

Trước khi coi là hoàn thành:

- KPI reconcile với P&L source hoặc mock source.
- Variance đúng với compare mode.
- Drill-down không mất filter.
- Dashboard executive tải dưới 5 giây với dataset chuẩn.
- Empty/loading/error states hiển thị rõ.
- Không sửa `index.html` hoặc `en.html` nếu không chạy build từ source.

## 4. Mapping giai đoạn 4, 5, 6

Trong tài liệu hiện tại, các dashboard 4-6 được hiểu là:

- Dashboard 4: Fixed Cost Control.
- Dashboard 5: Profitability Drill-down.
- Dashboard 6: Alerts & Actions.

Triển khai theo thứ tự khuyến nghị:

1. Fixed Cost Control: cost center ranking, fixed cost %, revenue/headcount, stacked monthly trend.
2. Profitability Drill-down: EBIT by BU/channel/product/customer, bottom 10 margin destroyers, profitability matrix.
3. Alerts & Actions: KPI status board, severity P1-P4, owner, due date, 30-60-90 action plan.

Không triển khai Alerts trước khi KPI/status rules đã ổn định.

## 5. Token và model workflow

Thứ tự ưu tiên model chi tiết nằm tại `docs/MODEL_AND_BILLING_OPTIMIZATION.md`. Với Finance/P&L, mặc định dùng Gemini Pro cho quyết định nghiệp vụ/kiến trúc, Claude Sonnet 4.6 cho coding/refactor nhiều file, Claude Opus 4.6 cho review khó/security/architecture risk, Codex/ChatGPT trong IDE cho sửa file/kiểm chứng, và OpenAI API chỉ khi cần AI runtime trong sản phẩm hoặc automation.

### 5.0 ChatGPT Plus/Codex IDE workflow

Khi dùng ChatGPT Plus có **Select model** và **Include context IDE**, áp dụng theo nguyên tắc sau:

- **Select model** theo layer: Gemini Pro/Opus cho quyết định nghiệp vụ và rủi ro kiến trúc; Sonnet/Codex cho code; Flash/Go cho checklist, copy hoặc docs hẹp.
- **Include context IDE** chỉ bật khi cần repo context thật: sửa `pnl_dashboard.html`, `admin/dashboard.html`, `scripts/finance_api.gs`, xem terminal log, chạy build, kiểm diff hoặc debug.
- Với P&L, context IDE tối thiểu là `PROJECT_MAP.md` + workflow này + tài liệu chuyên sâu đúng layer + 1-3 file code liên quan.
- Không để IDE context kéo vào `index.html`, `en.html`, file ảnh, `.git`, hoặc `docs/antigravity-pnl-module-prototype.html` nếu không có lý do cụ thể.
- Dùng Anti/Antigravity để chốt data contract, KPI formula, governance và phase plan. Dùng Codex trực tiếp để sửa file, kiểm build, cập nhật changelog và xác nhận diff.
- Nếu một yêu cầu cần cả data model, computation, UI, governance và export, tách thành nhiều phiên trước khi nâng model.

## 5.1 Nguyên tắc ChatGPT Go-ready

Mục tiêu của workflow này là đảm bảo gói ChatGPT Go vẫn đáp ứng được nhu cầu triển khai dự án bằng cách chia nhỏ context và scope. Không thiết kế quy trình theo kiểu cần đọc toàn bộ repo hoặc toàn bộ knowledge base trong một phiên.

Với ChatGPT Go hoặc context giới hạn, bắt buộc:

- Mỗi phiên chỉ xử lý một dashboard hoặc một layer.
- Luôn bắt đầu bằng `PROJECT_MAP.md`, sau đó đọc workflow này, rồi mới mở tài liệu chuyên sâu.
- Không đọc ảnh, `.git`, `index.html`, `en.html`, `antigravity-pnl-module-prototype.html` nếu không có lý do cụ thể.
- Ưu tiên `rg` để tìm section cần đọc.
- Khi cần dùng toàn bộ tài liệu, chỉ đọc heading và đoạn liên quan trước, sau đó mở chi tiết.
- Không yêu cầu AI "đọc hết và build hết" phase 4-6 trong một lần.
- Mỗi lần sửa code phải có danh sách file hẹp, lý tưởng 1-3 file.
- Nếu một nhiệm vụ cần đụng cả data model, API, UI và governance, tách thành nhiều phiên theo layer.

## 5.2 Ngân sách context khuyến nghị cho từng loại việc

| Loại việc | Context nên nạp | Có phù hợp Go không |
|---|---|---|
| Review/tóm tắt roadmap P&L | `PROJECT_MAP.md` + workflow này + heading tài liệu liên quan | Có |
| Sửa một dashboard UI | Workflow + UI spec phần liên quan + file dashboard | Có |
| Sửa finance API/computation | Workflow + implementation guide phần data/computation + `finance_api.gs` | Có |
| Thiết kế KPI dictionary | PRD + module blueprint phần KPI + data contract | Có |
| Build Dashboard 4 Fixed Cost | UI spec/wireframe phần Fixed Costs + data contract + dashboard file | Có |
| Build Dashboard 5 Profitability | UI spec/wireframe phần Profitability + data contract + dashboard file | Có |
| Build Dashboard 6 Alerts | Alert rules + action workflow + dashboard file | Có, sau khi KPI/status rules ổn định |
| Full phase 4-6 end-to-end trong một lần | Toàn bộ docs + nhiều file code + governance | Không nên với Go |

## 5.3 Cách chia phiên mặc định

Với việc build module thật trên ChatGPT Go:

- Dùng phiên riêng cho data contract.
- Dùng phiên riêng cho UI.
- Dùng phiên riêng cho computation/API.
- Dùng phiên riêng cho governance/export/audit.

Trình tự khuyến nghị cho mỗi dashboard:

1. Phiên 1: chốt data contract và KPI/status rules.
2. Phiên 2: chỉnh computation/API hoặc mock adapter.
3. Phiên 3: dựng UI dashboard.
4. Phiên 4: kiểm thử, responsive, loading/empty/error, changelog.

## 5.4 Khi nào Go không còn đủ

Tạm dừng và tách task hoặc cân nhắc dùng gói/model cao hơn khi gặp một trong các dấu hiệu:

- Cần đọc trên 5 tài liệu dài cùng lúc và sửa nhiều file code trong cùng phiên.
- Cần reasoning xuyên suốt data model, finance rules, UI state, auth, audit và export cùng lúc.
- Cần giữ toàn bộ lịch sử quyết định của nhiều sprint trong một phiên.
- Cần phân tích dataset thật lớn hoặc nhiều sheet tài chính dài trong cùng prompt.

Mặc định ưu tiên tách task trước khi nâng model.

## 5.5 Ưu tiên model cho P&L phase 4-6

| Hạng mục | Model chính | Model phụ |
|---|---|---|
| Fixed Cost data contract | Gemini Pro | ChatGPT Go nếu scope hẹp |
| Fixed Cost UI/API patch | Claude Sonnet 4.6 hoặc Codex/ChatGPT IDE | Gemini Pro review formula |
| Profitability logic | Gemini Pro hoặc Claude Sonnet 4.6 | Codex khi sửa file |
| Alerts/action rules | Gemini Pro hoặc Claude Opus 4.6 | Gemini Flash cho checklist |
| Loading/empty/error/responsive | Claude Sonnet 4.6 hoặc Codex/ChatGPT IDE | Gemini Flash |
| Changelog/SOP updates | Gemini Flash hoặc Codex | ChatGPT Go |
| Runtime commentary/action suggestion API | OpenAI Responses API hoặc Gemini API | Dùng provider adapter, có budget guardrail |
| Private/local experiment | gpt-oss-120b | Chỉ khi có hạ tầng/provider phù hợp |

Không dùng Gemini Pro cho format nhỏ hoặc đổi wording đơn giản. Không dùng ChatGPT Go cho full phase 4-6 end-to-end.

## 5.6 OpenAI API trong P&L module

Chỉ dùng OpenAI API cho module P&L khi có runtime use case rõ:

- Sinh management commentary từ KPI variance.
- Gợi ý root cause/action plan 30-60-90 từ alert.
- Structured output JSON cho dashboard hoặc export pack.
- Function calling tới API nội bộ.
- Provider fallback khi Gemini quota hoặc billing bị giới hạn.

Yêu cầu trước khi triển khai:

- Có provider adapter tách khỏi UI.
- Có env vars `OPENAI_API_KEY`, `OPENAI_MODEL_PRIMARY`, `OPENAI_MODEL_CHEAP`.
- Có giới hạn output tokens và logging usage.
- Không gửi toàn bộ docs P&L vào API; chỉ gửi data contract và snapshot cần thiết.

## 6. Definition of done tổng thể

Một hạng mục P&L/dashboard chỉ hoàn tất khi:

- Có scope và acceptance criteria rõ.
- Có data contract hoặc mock contract.
- KPI/formula/status rules được định nghĩa.
- UI hoạt động với loading/empty/error.
- Logic không hard-code sai layer.
- Có verification local hoặc lý do chưa thể chạy verification.
- `CHANGELOG.md` được cập nhật nếu thay đổi quan trọng.
