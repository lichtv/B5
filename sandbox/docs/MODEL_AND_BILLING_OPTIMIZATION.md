# Model Priority & Billing Optimization Guide

## 🚀 Chiến lược Phân bổ Model (Cập nhật v3.2.0)

Để tối ưu hóa chi phí và tận dụng tối đa hệ sinh thái Google, chúng ta áp dụng phân cấp Model như sau:

### 1. Model Chính (Ưu tiên số 1): Gemini & Codex
- **Gemini Pro:** Sử dụng cho mọi tác vụ Logic, Planning, và Phân tích chuyên sâu.
- **Codex / ChatGPT (IDE):** Sử dụng cho việc viết code, kiểm tra diff và thực thi lệnh trực tiếp trên workspace.
- **Gemini Flash:** Sử dụng cho các tác vụ nháp, tóm tắt và kiểm tra checklist nhanh.

### 2. Model Hạn chế: Claude (Sonnet & Opus)
- **Claude Sonnet/Opus:** CHỈ sử dụng khi Gemini/Codex không thể giải quyết được vấn đề sau 2-3 lần thử, hoặc cho các tác vụ refactor toàn bộ cấu trúc cực kỳ phức tạp.
- **QUY TẮC BẮT BUỘC:** AI Agent phải hỏi ý kiến USER và nhận được sự đồng ý trước khi chuyển sang sử dụng bất kỳ model Claude nào.

### 3. Quy trình Escalation:
1. Thử nghiệm với **Gemini Pro**.
2. Nếu thất bại, thử chia nhỏ task và dùng **Codex**.
3. Nếu vẫn bế tắc, báo cáo lỗi cho USER và đề xuất sử dụng **Claude (Sonnet/Opus)**.

## 2. Thứ tự ưu tiên model theo loại việc

| Loại việc | Model ưu tiên | Model thay thế | Ghi chú tối ưu chi phí |
|---|---|---|---|
| Lập kế hoạch sprint, roadmap phase 4-6 | Gemini Pro | ChatGPT Go/Codex | Dùng Pro vì cần reasoning từ nhiều tài liệu. |
| Đọc/tóm tắt tài liệu dài | Gemini Pro | Gemini Flash | Nếu chỉ cần summary, dùng Flash trước. |
| Thiết kế kiến trúc P&L/data model | Gemini Pro | Claude Opus 4.6 | Dùng Opus khi cần kiểm tra quyết định rủi ro cao. |
| KPI dictionary, formula, data contract | Gemini Pro | Claude Sonnet 4.6 hoặc ChatGPT Go theo từng phần | Không gom toàn bộ dashboard trong một prompt. |
| UI dashboard HTML/CSS | Claude Sonnet 4.6 hoặc Codex | Gemini Flash cho chỉnh nhẹ | Sonnet mạnh cho coding/refactor, Codex tốt khi cần patch trực tiếp. |
| JavaScript/API/computation logic | Codex hoặc Claude Sonnet 4.6 | Claude Opus 4.6/Gemini Pro để review logic khó | Codex đọc/sửa/chạy lệnh tốt hơn trong repo. |
| Debug lỗi cụ thể | Codex | Claude Opus 4.6 nếu lỗi logic/security khó | Luôn cung cấp log và file liên quan. |
| Copywriting/SEO/AEO | Gemini Flash | Gemini Pro cho chiến lược thông điệp | Tách copy theo section. |
| Review cuối trước release | Claude Opus 4.6 hoặc Gemini Pro + Codex | ChatGPT Go nếu scope hẹp | Opus/Pro review logic, Codex kiểm file/test. |
| Tạo checklist/quy trình | Gemini Flash | ChatGPT Go | Không cần model mạnh nếu scope rõ. |
| AI feature trong app/API backend | OpenAI Responses API | Gemini API | Dùng khi cần function calling, structured output, agent/tool workflows hoặc provider fallback. |
| Private/local inference thử nghiệm | gpt-oss-120b | gpt-oss-20b nếu cần nhẹ hơn | Cần hạ tầng GPU/provider riêng; không mặc định cho production nhỏ. |

## 3. Quy tắc chọn model cho Finance/P&L Dashboard

### Data foundation

Dùng Gemini Pro cho:

- Taxonomy P&L.
- COA mapping strategy.
- Dim/fact model.
- Actual/Budget/Forecast versioning.
- Governance và close workflow.

Dùng Codex khi:

- Cần sửa `scripts/finance_api.gs`.
- Cần đọc/sửa `pnl_dashboard.html`.
- Cần chạy local check hoặc kiểm tra diff.

Dùng Claude Sonnet 4.6 khi:

- Cần refactor dashboard nhiều file.
- Cần viết code/DOM/CSS/JS với chất lượng cao nhưng vẫn tối ưu chi phí hơn Opus.
- Cần đọc tài liệu dài và triển khai thành patch có cấu trúc.

Dùng Claude Opus 4.6 khi:

- Cần kiểm tra kiến trúc P&L, audit/governance hoặc security.
- Cần review logic khó trước release.
- Cần xử lý bug dai dẳng qua nhiều layer mà Sonnet/Codex chưa kết luận được.

### Dashboard 4-6

| Dashboard | Model đề xuất | Cách chia để tiết kiệm |
|---|---|---|
| Dashboard 4 Fixed Cost Control | Gemini Pro cho KPI/data contract, Claude Sonnet 4.6 hoặc Codex cho UI/API | Tách cost center ranking, trend, revenue/headcount. |
| Dashboard 5 Profitability Drill-down | Gemini Pro hoặc Claude Sonnet 4.6 | Tách BU/channel/product/customer từng phiên. |
| Dashboard 6 Alerts & Actions | Gemini Pro/Claude Opus 4.6 cho rules, Codex/Sonnet cho UI/action state | Chỉ làm sau khi KPI/status ổn định. |

## 4. Workflow mặc định để tối ưu token

1. Dùng Gemini Flash để nháp checklist hoặc phân rã task.
2. Dùng Gemini Pro để quyết định kiến trúc, data contract hoặc business rules.
3. Dùng Claude Sonnet 4.6 cho coding/refactor/tài liệu dài khi cần nhiều chất lượng hơn Flash nhưng chưa cần Opus.
4. Dùng Claude Opus 4.6 cho review khó, architecture risk, security/debugging hoặc quyết định phase-gate quan trọng.
5. Dùng Codex để sửa file trong repo và kiểm chứng.
6. Dùng ChatGPT Go cho các task hẹp, ví dụ review một dashboard, cập nhật một tài liệu, hoặc sửa một layer.
7. Dùng gpt-oss-120b khi có yêu cầu local/private inference hoặc thử nghiệm open-weight.
8. Nếu task vượt context, tách task trước khi nâng model.

Context pack tối thiểu cho mỗi phiên:

- `docs/PROJECT_MAP.md`
- Tài liệu workflow liên quan, ví dụ `docs/PNL_DASHBOARD_IMPLEMENTATION_WORKFLOW.md`
- Một tài liệu chuyên sâu đúng phần
- 1-3 file code liên quan

## 4.1 ChatGPT Plus: Select model và Include context IDE

Khi dùng ChatGPT Plus/Codex trong dự án này, hai tuỳ chọn mới phải được hiểu như công cụ điều phối scope:

- **Select model:** chọn model theo bản chất nhiệm vụ, không chọn model mạnh nhất theo thói quen.
- **Include context IDE:** cho model dùng thêm ngữ cảnh từ IDE/workspace như file đang mở, đoạn code đang chọn, terminal log, lỗi build hoặc cấu trúc repo.

Quy tắc mặc định:

- Bật **Include context IDE** khi nhiệm vụ cần sửa file thật, đọc log, kiểm diff, chạy build hoặc debug.
- Tắt hoặc giới hạn **Include context IDE** khi chỉ brainstorm, viết copy, lập kế hoạch, hoặc hỏi chiến lược không cần repo state.
- Khi bật context IDE, chỉ mở đúng file liên quan. Tránh để context tự kéo vào file output lớn như `index.html`, `en.html`, file ảnh, `.git` hoặc prototype HTML lớn.
- Nếu task chỉ liên quan landing page, context nên nằm ở `sections/`, `templates/`, `index.js`, `index.css`, `lead_api.js`.
- Nếu task liên quan P&L, context nên nằm ở `docs/PROJECT_MAP.md`, `docs/PNL_DASHBOARD_IMPLEMENTATION_WORKFLOW.md`, tài liệu chuyên sâu đúng dashboard/layer, và 1-3 file code như `pnl_dashboard.html`, `admin/dashboard.html`, `scripts/finance_api.gs`.

### Bảng chọn model/context cho `lp_hub`

| Tình huống | Select model | Include context IDE |
|---|---|---|
| Sửa wording, headline, FAQ, CTA trong một section | Model nhanh/rẻ hoặc Gemini Flash | Có thể bật, chỉ mở đúng `sections/...` |
| Sửa layout landing page, hero, footer, mobile nav | Codex hoặc Claude Sonnet 4.6 | Bật với section liên quan + `index.css`/`index.js` |
| Sửa form, UTM, localStorage, modal, exit intent | Codex | Bật với `index.js`, `lead_api.js`, section liên quan |
| Chạy build hoặc kiểm tra lỗi local | Codex | Bật với terminal log và file vừa sửa |
| Thiết kế KPI dictionary, formula, data contract | Gemini Pro | Chỉ bật context tài liệu liên quan, chưa cần mở nhiều code |
| Sửa `scripts/finance_api.gs` hoặc computation layer | Codex hoặc Claude Sonnet 4.6 | Bật với workflow P&L + implementation guide phần data + `finance_api.gs` |
| Build UI `pnl_dashboard.html` | Codex hoặc Claude Sonnet 4.6 | Bật với UI spec/wireframe phần liên quan + dashboard file |
| Review governance, audit, close workflow, security | Gemini Pro hoặc Claude Opus 4.6 | Bật context tài liệu/rules; thêm code chỉ khi review implementation |
| Viết changelog/SOP/checklist | Gemini Flash, ChatGPT Go hoặc Codex | Bật file docs cần sửa, không cần toàn repo |

### Anti/Antigravity so với Codex trực tiếp

Trong dự án này, Anti/Antigravity và Codex không thay thế nhau hoàn toàn:

- **Anti/Antigravity hiệu quả hơn cho planning:** đọc PRD dài, chia phase, chốt KPI, reasoning tài chính, wireframe, product logic và roadmap.
- **Codex trực tiếp hiệu quả hơn cho coding thật:** đọc file local, sửa patch, chạy lệnh, kiểm build, xem diff và giữ scope theo repo.
- **Workflow tốt nhất:** dùng Anti/Gemini Pro để nghĩ và chốt quyết định; dùng Codex để sửa file, chạy verification và cập nhật tài liệu.
- **Không dùng Anti để yêu cầu "đọc hết repo và build hết":** với repo này phải đi theo modular context pack.
- **Không dùng Codex cho việc chỉ cần brainstorm dài nếu không cần đụng file:** làm vậy dễ tiêu hao quota coding mà không tăng chất lượng triển khai.

## 5. Khi nào nên dùng model mạnh hơn

Dùng Gemini Pro hoặc model cao hơn khi:

- Phải ra quyết định kiến trúc ảnh hưởng nhiều phase.
- Cần đối chiếu PRD, data model, UI state, governance và acceptance criteria cùng lúc.
- Cần phân tích công thức tài chính có rủi ro sai số cao.
- Cần review logic phức tạp trước release.

Dùng Claude Opus 4.6 thay vì Gemini Pro khi:

- Nhiệm vụ chủ yếu là code review, debugging, security hoặc agentic coding nhiều bước.
- Cần khả năng theo đuổi lỗi trong codebase lớn qua nhiều file.
- Cần kiểm tra quyết định của Sonnet/Codex trước khi release.

Dùng Claude Sonnet 4.6 thay vì Gemini Pro khi:

- Nhiệm vụ thiên về viết/sửa code, refactor UI, tạo component, xử lý DOM/CSS/JS.
- Cần cân bằng giữa chi phí và chất lượng cho tác vụ coding lặp lại.

Dùng gpt-oss-120b khi:

- Cần open-weight model để chạy trong hạ tầng riêng.
- Có yêu cầu data residency/private inference.
- Muốn fine-tune/customize hoặc thử nghiệm local agent.

Không dùng gpt-oss-120b làm mặc định nếu:

- Chưa có GPU/provider đủ năng lực.
- Cần chất lượng frontier ổn định ngay.
- Việc chỉ là sửa tài liệu/code nhỏ trong repo.

Không dùng model mạnh hơn chỉ vì:

- Muốn đọc toàn bộ repo trong một lần.
- Muốn gom nhiều task không liên quan vào một prompt.
- Chưa chia nhỏ tài liệu/file.

## 6. Billing/Budget API cho kiểm soát chi phí

Có hai API Google Cloud thường cần phân biệt:

- **Cloud Billing API** (`cloudbilling.googleapis.com`): xem billing account, project billing info, catalog/SKU pricing và liên kết billing account với project.
- **Cloud Billing Budget API** (`billingbudgets.googleapis.com`): tạo/quản lý budget, budget alerts và Pub/Sub notification để theo dõi chi phí.

Với dự án này, ưu tiên bật **Cloud Billing Budget API** trước để đặt ngân sách và cảnh báo. Bật thêm **Cloud Billing API** nếu cần lấy thông tin billing account, project billing hoặc catalog pricing qua API.

## 6.1 Option OpenAI API

Codex chạy trên nền OpenAI, nhưng **ChatGPT/Codex subscription không đồng nghĩa với OpenAI API credit**. Nếu dự án cần gọi model từ backend, automation hoặc dashboard, phải cấu hình OpenAI API riêng.

### Khi nào dùng OpenAI API

Dùng OpenAI API khi:

- Cần nhúng AI trực tiếp vào `pnl_dashboard.html`, admin workflow hoặc Apps Script/backend.
- Cần structured output cho KPI commentary, root-cause notes hoặc action plan.
- Cần function calling/tool calling để gọi API nội bộ.
- Cần provider fallback nếu Gemini quota/billing gặp giới hạn.
- Cần batch hoặc automation không phụ thuộc phiên chat thủ công.

Không dùng OpenAI API cho:

- Việc chỉ cần tôi sửa file trong IDE.
- Việc có thể xử lý bằng Gemini Pro/Flash trong chat.
- Prompt thử nghiệm chưa có budget hoặc guardrail.

### API surface mặc định

- Mặc định dùng **Responses API** cho integration mới vì đây là API thống nhất cho text/image input, tool use, function calling, file search/web search và stateful workflows.
- Chỉ dùng Chat Completions nếu đang duy trì code legacy hoặc thư viện phụ thuộc endpoint đó.

### Model tier đề xuất

Tên model thay đổi theo thời điểm, nên trước khi triển khai production phải kiểm tra lại trang model chính thức của OpenAI.

| Nhu cầu | Tier OpenAI đề xuất | Ghi chú |
|---|---|---|
| Reasoning/coding phức tạp | Flagship/frontier model mới nhất | Dùng cho review logic P&L, agent workflow, code generation khó. |
| Tác vụ app ổn định, chi phí vừa phải | Mini model | Dùng cho commentary, classification, structured summary. |
| Tóm tắt, phân loại, routing | Nano/small model | Dùng cho tác vụ hàng loạt, rẻ, ít rủi ro. |
| Realtime voice | Realtime model | Chỉ bật nếu có voice workflow rõ. |
| Image generation/editing | Image model | Không dùng cho dashboard data nếu không cần asset. |
| Open-weight/private inference | gpt-oss-120b | Cần hạ tầng tự host hoặc provider hỗ trợ; kiểm tra license/ops trước khi dùng. |

### Biến môi trường chuẩn

Không hard-code API key trong repo. Dùng biến môi trường hoặc secret manager:

```bash
OPENAI_API_KEY="sk-..."
OPENAI_MODEL_PRIMARY="gpt-5.4-mini"
OPENAI_MODEL_REASONING="gpt-5.5"
OPENAI_MODEL_CHEAP="gpt-5.4-nano"
OPENAI_MAX_INPUT_TOKENS="120000"
OPENAI_MAX_OUTPUT_TOKENS="4096"
OPENAI_MONTHLY_BUDGET_USD="50"
```

Các model ID trên chỉ là placeholder theo thế hệ model hiện tại. Kiểm tra lại docs trước khi deploy.

### Guardrails chi phí

Bắt buộc có trước khi gọi OpenAI API từ production:

- Giới hạn model theo task: cheap/mini/default/reasoning.
- Giới hạn `max_output_tokens`.
- Log usage theo endpoint, user/session, model, input tokens, output tokens.
- Cache kết quả cho prompt lặp lại.
- Không gửi toàn bộ tài liệu dự án vào API nếu chỉ cần một đoạn liên quan.
- Budget stop thủ công: khi vượt ngưỡng nội bộ, chuyển sang model rẻ hơn hoặc dừng batch.

### Routing provider đề xuất

```text
if task == product_planning or finance_reasoning:
  use Gemini Pro
elif task == repo_edit or local_verification:
  use Codex/ChatGPT IDE
elif task == app_runtime_ai and needs structured output/tools:
  use OpenAI Responses API
elif task == cheap_summary_or_classification:
  use Gemini Flash or OpenAI cheap model
else:
  use ChatGPT Go for narrow scoped assistance
```

### Checklist triển khai OpenAI API

1. Tạo OpenAI API key trong dashboard OpenAI.
2. Lưu key vào secret manager hoặc `.env` cục bộ không commit.
3. Chọn model theo tier, không hard-code một model duy nhất cho mọi task.
4. Dùng Responses API cho integration mới.
5. Bật logging usage và budget guardrail trước khi chạy batch.
6. Viết adapter provider để có thể chuyển Gemini/OpenAI mà không sửa UI.
7. Test bằng prompt nhỏ trước, sau đó mới tăng context.
8. Cập nhật `CHANGELOG.md` nếu OpenAI API được đưa vào runtime.

## 7. Checklist cài đặt Billing/Budget API

### Bước 1: Tạo hoặc chọn project FinOps

- Tạo một Google Cloud project riêng cho quản trị chi phí, ví dụ `ready2us-finops`.
- Bật billing cho project này.
- Dùng project này để gọi Billing/Budget API thay vì trộn vào project sản phẩm.

### Bước 2: Lấy Billing Account ID

- Vào Google Cloud Console -> Billing -> Manage billing accounts.
- Ghi lại Billing Account ID cần theo dõi.

### Bước 3: Bật API

Bật các API cần thiết:

```bash
gcloud services enable billingbudgets.googleapis.com --project=YOUR_FINOPS_PROJECT_ID
gcloud services enable cloudbilling.googleapis.com --project=YOUR_FINOPS_PROJECT_ID
```

### Bước 4: Cấp IAM tối thiểu

Tài khoản hoặc service account dùng để quản lý budget cần:

- Quyền bật API trên project: `roles/serviceusage.serviceUsageAdmin`.
- Quyền xem/quản lý billing budget trên billing account theo nhu cầu vận hành.
- Nếu dùng service account, chỉ cấp quyền đúng billing account cần theo dõi.

Không lưu service account key trong repo. Lưu ở thư mục credentials cục bộ hoặc secret manager.

### Bước 5: Xác thực local

Với user account:

```bash
gcloud auth login
gcloud config set project YOUR_FINOPS_PROJECT_ID
```

Với service account:

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/Users/mac/.credentials/ready2us-finops-billing.json"
```

### Bước 6: Kiểm tra list budget

```bash
curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \
  "https://billingbudgets.googleapis.com/v1/billingAccounts/YOUR_BILLING_ACCOUNT_ID/budgets"
```

### Bước 7: Tạo budget cảnh báo

Khuyến nghị tạo ít nhất 3 ngưỡng cảnh báo:

- 50%: cảnh báo sớm.
- 80%: kiểm tra lại usage/model selection.
- 100%: dừng hoặc chuyển sang model rẻ hơn nếu không khẩn cấp.

Nếu cần tự động hóa, cấu hình budget notification qua Pub/Sub để đẩy alert sang Slack, email hoặc dashboard nội bộ.

## 8. Tích hợp vào quy trình triển khai

Trước mỗi sprint Finance/P&L:

1. Chọn model theo bảng ưu tiên ở mục 2.
2. Ghi model chính và model phụ trong task note.
3. Kiểm tra budget hiện tại nếu sprint có dùng Gemini API/Google Cloud nhiều.
4. Nếu dùng OpenAI API, kiểm tra quota/billing OpenAI và đặt giới hạn model/output trước khi chạy batch.
5. Nếu budget đạt 80%, chuyển task còn lại sang Gemini Flash/ChatGPT Go/OpenAI cheap tier hoặc tách nhỏ hơn.
6. Cập nhật `CHANGELOG.md` khi thay đổi quy tắc model hoặc billing.

## 9. Nguồn chính thức

- Claude Sonnet 4.6: https://www.anthropic.com/claude/sonnet
- Claude Opus 4.6: https://www.anthropic.com/claude/opus
- Cloud Billing API overview: https://docs.cloud.google.com/billing/v1/getting-started
- Cloud Billing Budget API setup: https://cloud.google.com/billing/docs/how-to/budget-api-setup
- Cloud Billing Budget API usage: https://cloud.google.com/billing/docs/how-to/budget-api
- Cloud Billing Budget API reference: https://cloud.google.com/billing/docs/reference/budget/rest
- OpenAI gpt-oss-120b model: https://platform.openai.com/docs/models/gpt-oss-120b
- OpenAI open models: https://openai.com/open-models
- OpenAI Responses API reference: https://platform.openai.com/docs/api-reference/responses
- OpenAI model guide: https://developers.openai.com/api/docs/models
- OpenAI API pricing: https://openai.com/api/pricing
