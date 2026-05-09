# 📜 VISIA & READY2US PROJECT RULES (MASTER REFERENCE)

Tài liệu này tổng hợp toàn bộ các quy tắc, tiêu chuẩn và triết lý vận hành đã được thống nhất cho dự án Ready2US và VietnamMade. Antigravity bắt buộc phải đối chiếu với tài liệu này trước khi thực hiện bất kỳ thay đổi nào.

---

## 🏛️ 0. PHÂN TẦNG WORKSPACE (TIER ENFORCEMENT)
Mọi hoạt động của AI Agent phải tuân thủ nghiêm ngặt phân tầng Workspace:
1. **TIER 1 - LICHTV (System Master / R&D):** `Project/01_Lichtv_System_Master/`. 
   - `cdp/`: Hub chứa code vận hành chính thức (approved).
   - `sandbox/`: Nơi nghiên cứu và phát triển tính năng mới. Tuyệt đối không đưa code/data khách hàng vào đây.
2. **TIER 2 - AGOS (Operations Hub):** `Project/02_AGOS_Commercial_Hub/`. 
   - `*/cdp/`: Dự án vận hành chính thức cho khách hàng (`Viet-Ceramics`, `ATV`).
   - `*/sandbox/`: Môi trường kiểm thử và tùy chỉnh riêng cho khách hàng. Bắt buộc có `RESEARCH_LOG.md` và `CLIENT_ONBOARDING_SPEC.md`.
3. **TIER 3 - B5 (Training Sandbox):** `Project/03_B5_Training_Sandbox/`. 
   - `cdp/`: Phiên bản **V2 Legacy** ổn định.
   - `sandbox/`: Nơi thực hành cho học viên.

---

## 🛑 QUY TẮC VÀNG: STAGED DEPLOYMENT
**Mọi dự án mới hoặc cập nhật quan trọng BẮT BUỘC phải tuân thủ quy trình phân tầng:**
1.  **Giai đoạn Sandbox:** Triển khai và hiệu chỉnh toàn bộ mã nguồn trong thư mục `sandbox/`.
2.  **Giai đoạn Review:** Gửi link Sandbox cho USER/Doanh nghiệp kiểm duyệt giao diện và tính năng.
3.  **Giai đoạn Production:** Sau khi có xác nhận "Thống nhất", mới được copy/deploy nội dung từ thư mục `sandbox/` vào thư mục `cdp/` của doanh nghiệp.

---

## 🏗️ 1. Triết lý Thiết kế Phễu (Sales Funnel Philosophy)
Dự án áp dụng triết lý **"Value-First"** (Giá trị đi đầu) của Sabri Suby:
- **Thẩm định trước - Tư vấn sau:** Không bao giờ ép khách hàng mua hàng hoặc show giá ngay khi họ chưa được "làm ấm". 
- **Micro-commitment:** Sử dụng bài khảo sát (Assessment) để tạo ra các cam kết nhỏ trước khi yêu cầu thông tin lớn hoặc lịch hẹn.
- **Giáo dục khách hàng:** Tập trung vào việc cung cấp lộ trình (Roadmap) và kiến thức (Lead Magnet) để xây dựng niềm tin.
- **Chiến lược 2 giai đoạn (Agile Scaling):**
    - **Giai đoạn 1 (Khởi động):** Ưu tiên hệ sinh thái Google miễn phí, kết hợp các công cụ hỗ trợ tìm kiếm lead bản Free (Snov, Hunter, Apollo) và Brevo SMTP Free để bắt đầu nhanh với chi phí 0đ.
    - **Giai đoạn 2 (Tăng tốc):** Sử dụng n8n và các gói dịch vụ trả phí (CRM, Automation) khi hệ thống đã có dòng tiền để tối ưu hóa quy mô và tốc độ.

## 🎨 2. Tiêu chuẩn UI/UX & Thẩm mỹ
- **Premium Aesthetics:** Giao diện phải mang lại cảm giác cao cấp, chuyên nghiệp cho doanh nghiệp (B2B). Tránh các màu cơ bản (Red/Blue/Green đơn thuần), ưu tiên các palette màu tinh tế:
    - Primary: `Red-600` (Thương hiệu).
    - Background: `Slate-900` (Dark Mode cho Global Sale) hoặc `White/Red-50` (Light Mode cho VietnamMade).
    - Accent: Glassmorphism (Backdrop blur), Subtle Gradients.
- **Micro-animations:** Sử dụng hover effects, pulse animations và transitions nhẹ nhàng để giao diện trông "sống động".
- **Responsive-First:** Mọi tính năng phải hoạt động hoàn hảo trên Mobile, đặc biệt là các bảng biểu và biểu đồ (Chart.js).

## ✍️ 3. Quy tắc Nội dung & Messaging
- **Tone of Voice:** Chuyên nghiệp, hỗ trợ, không áp đặt.
- **Tránh từ ngữ cực đoan:** 
    - Thay "Thống lĩnh" bằng **"Thành công"**.
    - Thay "Kiểm tra điều kiện gia nhập" bằng **"Đánh giá mức độ sẵn sàng"**.
    - Thay "Gói khởi động" bằng **"Gói Tiêu chuẩn"**.
    - Thay "Gói tăng tốc" bằng **"Gói Cao cấp"**.
- **Cam kết thực tế:** Không cam kết "ra đơn hàng" (vì phụ thuộc nhiều yếu tố doanh nghiệp). Thay bằng **"Cam kết đồng hành đến khi có kết quả"** (kết quả theo từng giai đoạn chiến dịch).
- **Hoàn phí:** Luôn đi kèm thông điệp **"Hoàn phí nếu không đạt cam kết"** để giảm thiểu rủi ro cho khách hàng.

## 💻 4. Quy tắc Kỹ thuật & Code
- **Cấu trúc Modular:** Đọc kỹ `docs/PROJECT_MAP.md` để hiểu cách tổ chức dự án nhằm tối ưu token. Mọi thành phần (sections) được quản lý riêng rẽ, tuyệt đối không được đọc hay sửa các tệp build (`index.html`, `en.html`) do kích thước quá lớn gây tốn token. AI chỉ được can thiệp vào mã nguồn trong `sections/`, `templates/` hoặc `index.js`, `index.css`.
- **Tập trung Logic (Centralized JS):** Mọi logic xử lý form, điều hướng, và hiệu ứng phải nằm trong `index.js`.
- **Tối ưu Token:** Hạn chế lặp lại code CSS/JS trong HTML. Sử dụng class Tailwind kết hợp với `index.css` cho các style đặc thù. Điều này giúp tối ưu hóa ngữ cảnh khi làm việc với AI.
- **Backend:** Trung tâm hóa dữ liệu tại Google Apps Script (`Code.js`). Luôn sử dụng URL `/exec` và chế độ "New Version" khi triển khai.
- **Smart Recognition:** Sử dụng `localStorage` để ghi nhớ Email khách hàng, giúp cá nhân hóa trải nghiệm khi họ quay lại.
- **Data Persistence:** Luôn truyền tham số `email` qua URL khi điều hướng giữa các trang.
- **Mobile Navigation (v2.4.7):** Mọi menu di động phải có nút đóng (X) trực quan. Sự kiện JS phải đồng bộ với checkbox hack để đảm bảo menu đóng khi link được click.

## 🚀 5. Quy trình Vận hành & Deployment
- **Không tự động FTP:** Quy trình triển khai tự động qua FTP đã bị loại bỏ để đảm bảo an toàn.
- **Chỉ sửa đổi tại Local:** Mọi thay đổi code chỉ được thực hiện và kiểm tra tại môi trường local trước.
- **HỎI TRƯỚC KHI PUSH:** Antigravity **BẮT BUỘC** phải hỏi ý kiến và nhận được sự đồng ý của USER trước khi thực hiện lệnh `git push` lên host trong mọi trường hợp.
- **Quản lý phiên bản (Backlog & Versioning):** 
    - Phải duy trì nhật ký thay đổi chi tiết tại `CHANGELOG.md`.
    - **Thư viện Section:** Mỗi khi sửa đổi hoàn toàn giao diện của một section (Hero, Footer, v.v.), phải tạo một phiên bản mới và lưu trữ tại `SECTION_LIBRARY.md` để sử dụng linh hoạt sau này.
    - Mọi commit lên GitHub phải có mô tả rõ ràng để phục vụ việc rollback (quay lại phiên bản cũ) bất cứ khi nào USER yêu cầu.
- **Hosting:** Sử dụng Plesk với Webhook tự động cập nhật mã nguồn từ GitHub sau mỗi lệnh `push` đã được USER phê duyệt.
- **Tài liệu:** Sau mỗi phiên làm việc lớn, bắt buộc phải cập nhật:
    1. `CHANGELOG.md` (Nhật ký thay đổi).
    2. `VISIA_MASTER_BLUEPRINT.md` (SOP kỹ thuật).
    3. `rules.md` (Tài liệu quy tắc này).
- **Triển khai Phân tầng (Staged Deployment):** Mọi triển khai cho doanh nghiệp mới hoặc cập nhật lớn phải được thực hiện trong thư mục con phiên bản (ví dụ: `sandbox/`) để tạo môi trường Sandbox/Dự án mẫu. Chỉ sau khi khách hàng/USER đã thống nhất và kiểm thử thành công trên Sandbox mới được tiến hành chuyển (deploy) vào thư mục chính của doanh nghiệp (`cdp` hoặc root).

### 5.0 Quy trình bắt buộc khi tạo dự án mới cho doanh nghiệp
- **Không bắt đầu từ code:** Mỗi dự án doanh nghiệp mới phải bắt đầu bằng việc đọc đầy đủ tài liệu kỹ thuật, nghiệp vụ, đào tạo và GTM liên quan theo `docs/v3.0_30Days_LeanOS/CLIENT_ONBOARDING_SPEC.md`.
- **Gate 0 bắt buộc:** Trước khi tạo sandbox/clone template, phải có context pack gồm project brief, ICP giả định, offer, 3 outreach angles, rủi ro compliance và danh sách tài sản nội dung sẵn có.
- **Onboarding 4 bước:** Sau Gate 0, triển khai đúng 4 bước: Deep Research & USP -> Data & Scoring -> Outbound & Tracking -> Review & Meeting.
- **Bước 1 dùng Gemini Pro hoặc Perplexity:** Khách hàng phải được hướng dẫn nghiên cứu sâu bằng Gemini Pro hoặc Perplexity trước khi chốt funnel/message. Nội dung hướng dẫn phải bám `docs/wiki/AI_BOOTCAMP_CURRICULUM_v3.0.md`.
- **Đào tạo phải khớp thực chiến:** Nếu curriculum chưa có bài thực hành hoặc output mẫu tương ứng với onboarding, cập nhật curriculum trước khi triển khai khách hàng.
- **Repo hygiene:** Khi tách dự án doanh nghiệp mới thành thư mục riêng, phải khởi tạo git repo cục bộ, thêm `.gitignore`, tạo baseline commit, rồi mới thực hiện các chỉnh sửa để luôn có `git status`/`git diff` rõ ràng.

### 5.1 Quy trình OPC - Bộ máy nhân sự AI
- **OPC là One Person Company 1+1+N:** OPC nghĩa là `1 founder + 1 AI workforce + N đối tác`. Đây là một company AI-native, không phải một cá nhân đơn lẻ và không phải phong trào hô hào.
- **Agent 01 - Growth (Master Skillset):** Hệ thống đã được tích hợp bộ kỹ năng **Fullstack Marketing** chuyên dụng cho thị trường VN 2025-2026 tại `docs/mkt_skills/`. 
    - Khi đóng vai trò Growth Agent, phải sử dụng `docs/mkt_skills/product-marketing-context.md` làm nền tảng.
    - Mọi kế hoạch marketing phải tham chiếu `benchmarks-vietnam.md` để đảm bảo tính thực tế.
    - Ưu tiên sử dụng MCP (nếu có) để pull dữ liệu thay vì nhập tay.
- **Đọc framework trước:** Mọi nhiệm vụ OPC phải bắt đầu từ `docs/opc/OPC_1_1_N_FRAMEWORK.md`.
- **OPC là quy trình điều phối:** Khi tạo dự án riêng cho doanh nghiệp/đối tác, dùng `docs/opc/` để chia vai trò Strategy, Growth, Product, Delivery, Backoffice, AI Ops, BA, Research, Content, Data, Codex, QA và Deployment.
- **Không clone máy móc:** Đổi logo/đổi tên chưa phải là triển khai. Nội dung, form, email, dashboard và tracking phải căn cứ vào onboarding của doanh nghiệp.
- **Codex không tự đoán nghiệp vụ:** Codex chỉ sửa file sau khi có context pack hoặc yêu cầu rõ ràng từ BA/OPC Lead.
- **Quality gate bắt buộc:** Nếu có `vibe-review`, dùng skill này trước khi đưa sản phẩm AI cho USER/đối tác review. Nếu không có, dùng checklist tương đương trong `docs/opc/`.
- **Company hóa dự án:** Nếu có `vibe-company-orchestrator`, dùng skill này để biến folder dữ liệu thành AI-native company có org chart, SOP, AI workforce và CEO/GPS agent.
- **Nói đơn giản cho USER:** Báo cáo OPC phải dùng ngôn ngữ dễ hiểu: đã xóa gì của mẫu, đã thay gì cho doanh nghiệp, còn thiếu thông tin gì.
- **Task nhỏ, có kiểm tra:** Mỗi việc giao Codex phải có mục tiêu, file được sửa, nguồn thông tin và cách kiểm tra. Tham chiếu `docs/opc/OPC_CODEX_TASKS.md`.

### 5.2 Quy trình Finance & P&L Dashboard
- **Workflow bắt buộc:** Mọi thay đổi liên quan đến `pnl_dashboard.html`, `admin/dashboard.html`, `scripts/finance_api.gs`, KPI dictionary, variance, alert/action hoặc governance phải bắt đầu từ `docs/PNL_DASHBOARD_IMPLEMENTATION_WORKFLOW.md`.
- **Không hard-code sai layer:** Công thức P&L, mapping, sign normalization, variance và status rules phải thuộc data/computation layer hoặc contract rõ ràng. Frontend chỉ render từ contract đã thống nhất.
- **Phase gate:** Trước khi build dashboard phase 4-6, phải chốt scope, KPI dictionary, data contract, compare mode và acceptance criteria.
- **Governance-first cho phase 4+:** Role-based access, audit log, close workflow, snapshot/export và exception queue là tiêu chí bắt buộc khi mở rộng finance dashboard.
- **Token discipline:** Không đọc toàn bộ bộ tài liệu P&L nếu chỉ sửa một dashboard. Đọc `PROJECT_MAP.md`, workflow P&L, rồi mở đúng tài liệu theo layer đang xử lý.
- **ChatGPT Go-ready:** Mỗi phiên Go chỉ xử lý một dashboard hoặc một layer. Nếu nhiệm vụ cần cả data model, computation, UI và governance, bắt buộc tách thành nhiều phiên trước khi cân nhắc nâng model.
- **File scope hẹp:** Khi dùng Go, mỗi phiên sửa code nên giới hạn 1-3 file. Không gom phase 4-6 vào một yêu cầu build duy nhất.

## 🤝 6. Quy tắc Network & Cộng đồng
- **Đặc quyền:** Thay cụm từ "Cộng đồng thượng lưu/tinh hoa" bằng **"Network doanh nhân Việt - Mỹ chất lượng"**.
- **VietnamMade:** Luôn nhấn mạnh tư cách thành viên và sự hỗ trợ chéo trong cộng đồng.

---

## 🏷️ 7. Quy tắc Thương hiệu AGOS (v2.4.0)
- **Tên đầy đủ:** **AGOS | Automation Global Growth OS** (Hoặc **AI Global Growth OS** tùy ngữ cảnh nhấn mạnh công nghệ).
- **Vị trí hiển thị:** Phải xuất hiện tại Header của section Giải pháp, Metadata trang web và các tài liệu hướng dẫn.
- **Cam kết:** Luôn đi kèm thông điệp "Hoàn phí nếu không đạt cam kết" và "Đồng hành đến khi có kết quả".

---

## 💎 8. Chiến lược Tối ưu Model & Quota
Tài khoản AI chính của hệ thống hiện là **Gemini Pro**. Mọi quyết định chọn model phải đối chiếu `docs/MODEL_AND_BILLING_OPTIMIZATION.md` trước khi triển khai sprint lớn hoặc mở rộng module Finance/P&L.

### 8.1 Phân bổ Model theo Layer:
1. **Planning / Architecture / Finance reasoning:** Dùng **Gemini Pro**.
2. **Draft / Summary / Checklist / Copy iteration:** Dùng **Gemini Flash/Fast**.
3. **Coding / refactor / agent workflow:** Dùng **Claude Sonnet 4.6** khi cần chất lượng cao và chi phí hợp lý.
4. **Deep review / security / architecture risk:** Dùng **Claude Opus 4.6** cho các quyết định khó hoặc lỗi dai dẳng.
5. **Codebase edits / local verification / diff review:** Dùng **Codex/ChatGPT trong IDE**.
6. **Task hẹp, context nhỏ:** Dùng **ChatGPT Go** nếu đã chia scope theo workflow modular.
7. **Runtime AI / backend automation:** Dùng **OpenAI API** hoặc Gemini API qua provider adapter, không gắn cứng vào UI.
8. **Private/local/open-weight inference:** Dùng **gpt-oss-120b** khi có hạ tầng/provider phù hợp và yêu cầu data residency/customization.
9. **Escalation:** Chỉ dùng model cao hơn khi task không thể chia nhỏ mà vẫn cần reasoning nhiều layer.

### 8.2 Quy trình Workflow tối ưu Credit:
1. **Draft:** Gemini Flash/Fast để lên outline và checklist.
2. **Decision:** Gemini Pro để chốt kiến trúc, data contract, KPI/formula hoặc governance.
3. **Implementation:** Claude Sonnet 4.6 hoặc Codex/ChatGPT trong IDE để viết/sửa code.
4. **Local verification:** Codex/ChatGPT trong IDE để chạy kiểm tra và cập nhật tài liệu.
5. **Narrow review:** ChatGPT Go cho review từng dashboard/layer nếu context pack nhỏ.
6. **Final review:** Claude Opus 4.6, Gemini Pro hoặc Codex tùy nội dung là architecture, business logic hay code diff.

### 8.3 Quản lý Tài nguyên:
- **Gemini Pro là tài nguyên chính:** Dùng cho quyết định có rủi ro cao, không dùng cho thao tác format/lặp lại.
- **Modular hóa tiết kiệm:** Luôn tách biệt HTML, CSS, JS để giảm Token lặp lại trong Context Window. AI tập trung vào nhiệm vụ duy nhất (Single Responsibility) giúp giảm lỗi và tiết kiệm chat lần.
- **Budget-first:** Với các task có dùng Google Cloud/Gemini API, kiểm tra budget hoặc cảnh báo trước khi chạy batch lớn.
- **Tạm dừng khi vượt ngân sách:** Nếu công việc không khẩn cấp, chuyển sang Flash/Go hoặc tách task thay vì tiếp tục dùng model đắt.

### 8.4 Quy tắc riêng cho ChatGPT Go:
- **Go là gói vận hành mặc định được chấp nhận** cho dự án nếu tuân thủ workflow modular.
- **Không dùng Go cho yêu cầu nguyên khối:** Tránh prompt dạng "đọc toàn bộ docs và build toàn bộ module P&L phase 4-6".
- **Một phiên, một mục tiêu:** Ví dụ `Dashboard 4 Fixed Cost UI`, `finance_api.gs variance rules`, hoặc `KPI dictionary contract`.
- **Context pack tối thiểu:** Mỗi phiên chỉ nạp `PROJECT_MAP.md`, workflow P&L, tài liệu chuyên sâu đúng phần và file code liên quan.
- **Escalation rule:** Ưu tiên tách phiên. Nếu vẫn không đủ, chuyển phần reasoning sang Gemini Pro.

### 8.5 Billing/Budget API:
- **Bắt buộc có budget alerts** nếu dự án bắt đầu dùng Gemini API/Google Cloud theo sprint.
- **Ưu tiên Cloud Billing Budget API** để tạo budget và ngưỡng cảnh báo 50% / 80% / 100%.
- **Bật Cloud Billing API** khi cần lấy billing account, project billing info hoặc catalog pricing.
- **Không lưu service account key trong repo.** Dùng credentials cục bộ hoặc secret manager.

### 8.6 OpenAI API Option:
- **OpenAI API là option runtime**, dùng khi cần nhúng AI vào sản phẩm, automation, structured output, function calling hoặc provider fallback.
- **Dùng Responses API cho integration mới** trừ khi đang bảo trì code legacy Chat Completions.
- **Không hard-code API key/model trong repo.** Dùng `OPENAI_API_KEY`, `OPENAI_MODEL_PRIMARY`, `OPENAI_MODEL_REASONING`, `OPENAI_MODEL_CHEAP`.
- **Có guardrail trước khi chạy batch:** giới hạn `max_output_tokens`, log usage theo model/endpoint, cache prompt lặp lại và có budget stop thủ công.
- **Không thay thế Codex:** Nếu việc là sửa file local hoặc kiểm diff, tiếp tục dùng Codex/ChatGPT IDE thay vì gọi OpenAI API.
- **gpt-oss-120b:** Chỉ dùng như open-weight/private/local option khi có hạ tầng hoặc provider phù hợp; không xem là API mặc định thay cho OpenAI Responses API/Gemini API.


---

## 🧠 9. Quy tắc Research-First & Auto-Absorption (v3.1.0)
Để đảm bảo tính thực chiến và dữ liệu hóa trong mọi hành động, Antigravity phải tuân thủ:

- **Research-First:** Tuyệt đối không được "đoán" nhu cầu khách hàng. Mọi thay đổi về copy hoặc tính năng phải có căn cứ từ nghiên cứu sâu (NotebookLM, Perplexity, Gemini, Tavily).
- **Quy trình Hấp thụ Tự động (Auto-Absorption):**
    1.  **Scanning:** Đầu mỗi phiên làm việc, Antigravity phải quét thư mục `docs/research/` để tìm file mới nhất.
    2.  **Mapping:** Đối chiếu insight từ file research với code hiện tại (ví dụ: insight về nỗi đau khách hàng -> cập nhật Hero Section).
    3.  **Syncing:** Cập nhật `docs/research/RESEARCH_LOG.md` để xác nhận đã "hấp thụ" kiến thức đó.
- **Tích hợp NotebookLM:** Khi User lưu kết quả từ NotebookLM vào Drive dự án, Antigravity sẽ coi đó là "Nguồn sự thật" (Source of Truth) cao nhất để điều chỉnh landing page.
- **Bridge via Google Sheets:** Sử dụng Sheet `Research_Hub` để nhận các insight nhanh từ mobile hoặc web research của User.

---
*Tài liệu này sẽ liên tục được cập nhật khi có quy tắc mới phát sinh.*
