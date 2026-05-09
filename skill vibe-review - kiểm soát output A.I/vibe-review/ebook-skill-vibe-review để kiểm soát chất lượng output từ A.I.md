**LỘC ĐẶNG** 

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 

**Hướng dẫn sử dụng  vibe-review** 

Quality Gate cho AI-generated output — 6  phương pháp đánh giá đa chiều 

*Đồng hành phát triển* 

05/2026 

locdang.com  
**MỤC LỤC** 

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ **Chương 1: Giới thiệu vibe-review** 

**Chương 2: Tổng quan 6 phương pháp đánh giá Chương 3: Hướng dẫn cài đặt** 

**Chương 4: Quick Start — Bắt đầu trong 5 phút Chương 5: Full Mode — Quy trình đánh giá đầy đủ Chương 6: Chi tiết từng phương pháp đánh giá Chương 7: Quick Mode và Single-Method Mode Chương 8: Loại tác vụ và ma trận trọng số Chương 9: Tích hợp với các skill khác** 

**Chương 10: Khắc phục sự cố và câu hỏi thường gặp**  
Chương 1 

**Giới thiệu vibe-review** 

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 

**Vấn đề: Không phải mọi kết quả AI đều đáng  tin cậy** 

Trí tuệ nhân tạo (Artificial Intelligence — AI) ngày càng được sử dụng rộng rãi để tạo  ra nội dung: bài viết, mã nguồn, thiết kế giao diện, tài liệu chiến lược, quy trình làm  việc và nhiều hơn nữa. Nhưng một sự thật không thể phủ nhận là kết quả do AI tạo  ra không phải lúc nào cũng đạt chất lượng mong muốn. 

AI có thể tạo ra văn bản trôi chảy nhưng lại chứa thông tin sai lệch (hallucination). AI  có thể viết mã nguồn chạy được nhưng lại lọt lỗi bảo mật nghiêm trọng. AI có thể thiết kế giao diện đẹp mắt nhưng lại không đáp ứng tiêu chuẩn truy cập  (Accessibility). Đây chính là khoảng trống mà vibe-review lấp đầy. 

**ĐIỂM CHÍNH:** vibe-review là cổng kiểm soát chất lượng (Quality Gate) toàn diện  cho mọi kết quả do AI tạo ra. Skill áp dụng 6 phương pháp đánh giá đa chiều,  đảm bảo output xứng đáng được giao đến tay người dùng cuối. 

**vibe-review giải quyết vấn đề gì?** 

Hãy tưởng tượng bạn vừa dùng AI để tạo một bài báo chuyên sâu, một tài liệu yêu  cầu sản phẩm (PRD), hoặc một đoạn mã nguồn quan trọng. Trước khi gửi cho khách  hàng, đồng nghiệp hoặc publish, bạn cần chắc chắn rằng: 

• Nội dung không chứa thông tin sai hoặc bịa đặt 

• Văn phong phù hợp với đối tượng độc giả mục tiêu 

• Mã nguồn không có lỗi bảo mật hoặc lỗi logic 

• Thiết kế giao diện đáp ứng tiêu chuẩn ngành 

• Tài liệu có cấu trúc logic, dễ theo dõi 

• Không còn placeholder chưa điền, không có text rác  
Thay vì tự đọc và kiểm tra thủ công — dễ bỏ sót, thiếu khách quan — bạn có thể gọi  vibe-review. Skill sẽ tự động phát hiện loại output, chọn phương pháp đánh giá phù  hợp, và trả về báo cáo chi tiết với điểm số cụ thể cùng danh sách hành động ưu tiên. 

**Đối tượng sử dụng** 

vibe-review được thiết kế cho bất kỳ ai sử dụng AI để tạo ra output và muốn đảm  bảo chất lượng trước khi giao hàng: 

• Người sáng tạo nội dung (Content Creator) — review bài viết, email, bài mạng xã  hội 

• Lập trình viên (Developer) — review mã nguồn, script, hàm (function) • Nhà thiết kế (Designer) — review giao diện, trải nghiệm người dùng (UX/UI) • Quản lý dự án (Project Manager) — review tài liệu, báo cáo, quy trình • Người xây dựng kiến thức (Knowledge Builder) — review tài liệu đào tạo, ebook,  SOP 

**Triết lý thiết kế** 

vibe-review hoạt động theo 5 nguyên tắc cốt lõi: 

1\. Dựa trên bằng chứng (Evidence-based) — Mỗi nhận xét đều có căn cứ cụ thể,  không nhận xét chung chung 

2\. Khả thi (Actionable) — Mỗi vấn đề đi kèm hướng dẫn sửa cụ thể: "thay X bằng  Y", không phải "cần cải thiện" 

3\. Ưu tiên rõ ràng (Prioritized) — Phân loại CRITICAL / HIGH / MEDIUM / LOW,  giúp bạn biết phải sửa gì trước 

4\. Cân bằng (Balanced) — Ghi nhận điểm mạnh cùng điểm yếu, review một chiều là  không đầy đủ 

5\. Nhận biết lĩnh vực (Domain-aware) — Tự điều chỉnh tiêu chí theo loại output  (content, code, design...) 

**MẸO:** Khi sử dụng vibe-review, hãy cung cấp đầy đủ context: đối tượng độc giả,  mục đích sử dụng, nền tảng publish. Context càng rõ, review càng chính xác. 

**Tóm tắt chương**  
• vibe-review là skill kiểm soát chất lượng toàn diện cho output do AI tạo ra • Áp dụng 6 phương pháp đánh giá đa chiều với trọng số phù hợp từng loại output • Dành cho mọi người sử dụng AI cần đảm bảo chất lượng trước khi giao hàng • Hoạt động theo nguyên tắc: bằng chứng, khả thi, ưu tiên, cân bằng, nhận biết  lĩnh vực 

**Câu hỏi ôn tập** 

6\. vibe-review giải quyết vấn đề cốt lõi nào trong quy trình sử dụng AI? 7\. Nêu 3 nguyên tắc hoạt động của vibe-review mà bạn thấy quan trọng nhất đối với  công việc của mình. 

8\. Bạn thường tạo loại output nào bằng AI? Loại output đó sẽ được hưởng lợi gì từ vibe-review?  
Chương 2 

**Tổng quan 6 phương pháp đánh  giá** 

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ **Tại sao cần 6 phương pháp?**   
Một output chất lượng cần được đánh giá từ nhiều góc nhìn khác nhau. Nếu chỉ đọc  lại, bạn có thể bỏ sót lỗi logic. Nếu chỉ chạy test tự động, bạn có thể miss vấn đề về trải nghiệm người dùng. Nếu chỉ hỏi ý kiến chuyên gia, bạn có thể bỏ qua các lỗi kỹ thuật cụ thể. 

vibe-review kết hợp 6 phương pháp bổ sung cho nhau, tạo thành mạng lưới đánh giá  toàn diện. Mỗi phương pháp bắt được một loại vấn đề mà phương pháp khác không  phát hiện được. Kết quả là bạn nhận được bức tranh chất lượng hoàn chỉnh nhất. 

**Phương pháp 1: Đánh giá theo chân dung  người dùng (AI Persona Review)** 

Phương pháp này mô phỏng phản hồi từ 4 đến 7 chân dung người dùng (persona)  khác nhau: từ người dùng mục tiêu, người hoài nghi, người mới bắt đầu, đến chuyên  gia trong lĩnh vực. Mỗi persona sẽ nhìn output từ góc nhìn riêng và phản hồi theo  cách khác nhau. 

Ví dụ, khi review một bài viết về quản lý dự án, persona "Quản lý dự án kỳ cựu" sẽ chú ý đến tính thực tế của khuyến nghị, trong khi persona "Người mới học" sẽ quan  tâm đến mức độ dễ hiểu. Phương pháp này giúp phát hiện những vấn đề mà chỉ nhìn từ một góc độ sẽ không thấy. 

**Khi nào phát huy tác dụng** 

• Content: Bài viết, bài mạng xã hội, email marketing 

• Design/Giao diện: Thiết kế UI, landing page 

• Document: Tài liệu hướng dẫn, báo cáo  
**ĐIỂM CHÍNH:** Persona Review đặc biệt hiệu quả khi output hướng đến đối  tượng đa dạng. Nếu chỉ có 1 loại độc giả, phương pháp này ít mang lại giá trị mới. 

**Phương pháp 2: So sánh tiêu chuẩn ngành  (Benchmark Assessment)** 

Phương pháp này so sánh output với các tiêu chuẩn ngành được công nhận rộng  rãi. Tùy loại output mà áp dụng bộ tiêu chuẩn khác nhau: Flesch-Kincaid và  Hemingway cho readability (content), PEP8 và OWASP Top 10 cho code, WCAG 2.1  và Core Web Vitals cho giao diện, Pyramid Principle và MECE cho tài liệu. 

Điểm mạnh của phương pháp này là tính khách quan — tiêu chuẩn ngành không  phụ thuộc vào ý kiến cá nhân. Bạn nhận được đánh giá so sánh rõ ràng: output đạt  bao nhiêu phần trăm so với tiêu chuẩn, khoảng cách ở đâu, cần cải thiện gì. 

**Bộ tiêu chuẩn theo loại output** 

• Nội dung: Flesch-Kincaid Readability, Hemingway Grade, BLUF, Hook  effectiveness 

• Mã nguồn: Style guide (PEP8, Airbnb), Cyclomatic Complexity, OWASP Top 10 • Giao diện: WCAG 2.1 AA, Nielsen Usability Heuristics, Core Web Vitals • Tài liệu: Pyramid Principle (McKinsey), MECE, Executive Summary quality • Dữ liệu: Tufte Data-Ink Ratio, context, uncertainty, source citation 

**Phương pháp 3: Kiểm tra quy tắc và chất  lượng (Rules & Quality Control)** 

Phương pháp này kiểm tra output theo bộ quy tắc cụ thể — những lỗi AI thường mắc  phải nhất. Bao gồm 6 quy tắc phổ quát (Universal Rules) áp dụng cho mọi loại  output, cộng thêm bộ quy tắc riêng cho từng lĩnh vực. 

Quy tắc phổ quát bao gồm: không chứa thông tin sai (hallucination), không mâu  thuẫn nội bộ, không có placeholder chưa điền, không dùng ngôn ngữ quá chung  chung, đúng phạm vi yêu cầu, không có thiên kiến ngầm. Đây là những lỗi cơ bản  nhất nhưng lại dễ bị bỏ qua nhất khi tự review.  
**Ví dụ quy tắc theo lĩnh vực** 

Với mã nguồn: kiểm tra hardcoded credentials, error handling cho mọi external call,  input validation tại ranh giới hệ thống, không có SQL injection hay XSS. 

Với nội dung: hook dưới 3 câu, mỗi claim có evidence, call-to-action cụ thể, tone  nhất quán, không kết thúc bằng generic summary. 

Với giao diện: contrast ratio lớn hơn 4.5:1, touch targets tối thiểu 44x44 pixel, loading  states cho async operations, empty states được thiết kế. 

**Phương pháp 4: Đánh giá theo góc nhìn  chuyên gia (Expert Tips Review)** 

Phương pháp này áp dụng kiến thức và heuristic từ các chuyên gia hàng đầu trong  lĩnh vực tương ứng. Thay vì chỉ kiểm tra theo rules, phương pháp này mang lại  insights sâu hơn — những điều mà rules đơn thuần không bao quát được. 

Với nội dung, áp dụng triết lý của David Ogilvy (specificity, benefit-first), Ann Handley  (useful, inspired, well-written), Gary Vaynerchuk (native content). Với mã nguồn, áp  dụng Martin Fowler (code humans can understand), Uncle Bob (Clean Code), Kent  Beck (make it work first). Với thiết kế, áp dụng Don Norman (design as  communication), Steve Jobs (simplicity), Dieter Rams (as little design as possible). 

**MẸO:** Expert Tips Review chọn 2-4 chuyên gia phù hợp nhất với loại output,  không áp dụng tất cả. Điều này đảm bảo mỗi đánh giá đều focused và relevant. 

**Phương pháp 5: Kiểm thử tự động (Automated  Tests)** 

Phương pháp này chạy các bài kiểm thử xác định (deterministic) — trả lời chắc chắn  ĐẠT/KHÔNG ĐẠT (PASS/FAIL), không cần phán đoán chủ quan. Ưu tiên dùng code  hoặc công thức thực để đo lường. 

Với nội dung: đếm số từ, tính readability score (Flesch-Kincaid), kiểm tra heading  hierarchy, scan placeholder text, validate URL format, tính keyword density. Với mã  nguồn: syntax validation, function length, scan hardcoded secrets, đếm   
TODO/FIXME. Với giao diện: contrast ratio calculation, alt text check, form labels  verification. 

**Phương pháp 6: Kiểm thử thực tế trên trình  duyệt (UAT Browser Testing)** 

Phương pháp này đánh giá output thực tế bằng trình duyệt — thiết kế, trải nghiệm  người dùng, giao diện, tương tác. Chỉ áp dụng khi output có phiên bản web (URL có  thể truy cập). 

Gồm 6 kịch bản kiểm thử: ấn tượng đầu tiên (5 giây), luồng chính (happy flow),  tương tác cốt lõi, trạng thái lỗi, responsive trên mobile, và cảm nhận hiệu suất. Khi  không có URL, trọng số của phương pháp này được phân bổ đều cho 5 phương  pháp còn lại. 

**LƯU Ý:** UAT Browser Testing yêu cầu có Browser MCP tools (chrome-devtools  hoặc tương đương). Nếu không có, vibe-review vẫn hoạt động đầy đủ với 5  phương pháp đầu. 

**Tóm tắt chương** 

• 6 phương pháp đánh giá bổ sung cho nhau, tạo mạng lưới kiểm soát chất lượng  toàn diện 

• Persona Review: mô phỏng phản hồi đa góc nhìn từ người dùng thực tế • Benchmark Assessment: so sánh với tiêu chuẩn ngành được công nhận • Rules & QC: kiểm tra theo bộ quy tắc cụ thể, bắt lỗi AI thường mắc phải • Expert Tips: áp dụng insights từ chuyên gia hàng đầu trong lĩnh vực 

• Automated Tests: chạy deterministic PASS/FAIL tests 

• UAT Browser Testing: đánh giá thực tế trên trình duyệt 

**Câu hỏi ôn tập** 

9\. Tại sao cần kết hợp 6 phương pháp thay vì chỉ dùng 1-2 phương pháp? 10\. Phương pháp nào phù hợp nhất với loại output bạn thường tạo? 11\. Phương pháp UAT Browser Testing áp dụng khi nào? Khi nào nên bỏ qua?  
Chương 3 

**Hướng dẫn cài đặt** 

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ **Yêu cầu hệ thống**   
Trước khi cài đặt vibe-review, bạn cần đảm bảo đã có sẵn các công cụ sau trên máy  tính: 

• Claude Code CLI — phiên bản mới nhất. Đây là công cụ dòng lệnh chính thức  của Anthropic, cho phép chạy các skill như vibe-review 

• Hoặc bất kỳ ứng dụng tương thích với định dạng SKILL.md (ví dụ: Antigravity) 

**MẸO:** Để kiểm tra Claude Code đã cài chưa, mở Terminal và gõ: claude \-- version. Nếu thấy số phiên bản, bạn đã sẵn sàng. 

**Cài đặt cho cá nhân (áp dụng mọi dự án)** 

Đây là cách cài đặt phổ biến nhất — vibe-review sẽ khả dụng trong mọi dự án bạn  làm việc. 

12\. Tải file ZIP vibe-review về máy 

13\. Mở Terminal và chạy lệnh sau để giải nén vào thư mục skills: 

unzip vibe-review.zip \-d \~/.claude/skills/ 

14\. Khởi động lại Claude Code (nếu đang chạy) 

15\. Xác nhận cài đặt bằng cách gõ trong Claude Code: 

/vibe-review 

**Cài đặt cho riêng một dự án** 

Nếu bạn chỉ muốn dùng vibe-review trong một dự án cụ thể, không ảnh hưởng các  dự án khác: 

cd /duong/dan/toi/project 

unzip vibe-review.zip \-d .claude/skills/ 

**LƯU Ý:** Cài đặt theo dự án chỉ hoạt động khi bạn chạy Claude Code từ thư mục  dự án đó. Nếu chuyển sang dự án khác, vibe-review sẽ không khả dụng.  
**Cài đặt công cụ bổ sung (tùy chọn)** 

**Phương pháp 5 — Kiểm thử tự động** 

Phương pháp này cần Bash tool — đã có sẵn mặc định trong Claude Code. Không  cần cài thêm gì. 

**Phương pháp 6 — Kiểm thử trên trình duyệt** 

Phương pháp này cần Browser MCP tools (chrome-devtools hoặc tương đương).  Nếu bạn cần review giao diện web có URL, hãy cài đặt Browser MCP tools. Nếu chỉ review nội dung, mã nguồn, tài liệu — không cần. 

Khi không có Browser MCP tools, vibe-review tự động phân bổ lại trọng số: 5  phương pháp đầu vẫn hoạt động đầy đủ và chất lượng review không bị giảm đáng  kể. 

**Gỡ cài đặt** 

Nếu muốn gỡ vibe-review: 

rm \-rf \~/.claude/skills/vibe-review 

Khởi động lại Claude Code để áp dụng thay đổi. 

**Xác nhận cài đặt thành công** 

Sau khi cài đặt, mở Claude Code và gõ /vibe-review. Nếu thấy thông báo xác nhận  hoặc skill bắt đầu chạy, cài đặt thành công. Nếu không thấy skill, kiểm tra lại đường  dẫn giải nén và đảm bảo file SKILL.md nằm đúng vị trí. 

**BÀI TẬP:** Thử cài đặt vibe-review ngay bây giờ. Sau khi cài xong, chạy lệnh  /vibe-review để xác nhận. Nếu gặp lỗi, xem phần Troubleshooting ở Chương 10\. 

**Tóm tắt chương** 

• Yêu cầu: Claude Code CLI phiên bản mới nhất 

• Cài đặt cá nhân: giải nén ZIP vào \~/.claude/skills/ 

• Cài đặt theo dự án: giải nén vào .claude/skills/ trong thư mục dự án  
• Phương pháp 5 dùng Bash tool (có sẵn), Phương pháp 6 cần Browser MCP tools  (tùy chọn) 

**Câu hỏi ôn tập** 

16\. Lệnh nào dùng để cài đặt vibe-review cho mọi dự án? 

17\. Khi nào nên chọn cài đặt theo dự án thay vì cài đặt cá nhân? 

18\. Công cụ bổ sung nào cần thiết cho Phương pháp 6? Đó là công cụ bắt buộc hay  tùy chọn?  
Chương 4 

**Quick Start — Bắt đầu trong 5  phút** 

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ **Trường hợp 1: Review bài viết / nội dung**   
Bạn vừa dùng AI để tạo một bài blog và muốn kiểm tra chất lượng trước khi publish.  Đây là cách nhanh nhất để dùng vibe-review: 

**Bước thực hiện** 

19\. Mở Claude Code 

20\. Gõ lệnh sau, paste bài viết sau dấu cách: 

/vibe-review \[paste bài viết của bạn vào đây\] 

21\. Đợi vibe-review chạy — khoảng 10-15 phút cho full review 

22\. Đọc báo cáo kết quả, tập trung vào: Overall Score, Top 3 Critical Issues, Priority  Action List 

23\. Sửa theo thứ tự ưu tiên: CRITICAL → HIGH → MEDIUM 

**Kết quả mong đợi** 

Bạn sẽ nhận được báo cáo chi tiết với: điểm chất lượng tổng thể (Overall Quality  Score) trên thang 100, điểm từng phương pháp, danh sách vấn đề ưu tiên (Priority  Action List) kèm hướng dẫn sửa cụ thể, và những điểm mạnh đáng ghi nhận. 

**MẸO:** Nếu chỉ cần review nhanh, thêm flag \--quick: /vibe-review \[bài viết\] \--quick.  Review sẽ hoàn thành trong khoảng 5 phút với báo cáo 1 trang. 

**Trường hợp 2: Review mã nguồn** 

Bạn vừa dùng AI để viết một hàm hoặc module và muốn kiểm tra trước khi commit. 

**Bước thực hiện** 

24\. Gõ lệnh sau với đường dẫn file hoặc paste code trực tiếp: 

/vibe-review /duong/dan/toi/file.py  
\# Hoặc paste trực tiếp: 

/vibe-review def my\_function(): ... 

25\. vibe-review sẽ tự nhận diện đây là mã nguồn và điều chỉnh trọng số: tập trung  nhiều hơn vào Rules & QC (30%) và Automated Tests (25%) 

26\. Đặc biệt chú ý đến các phát hiện về bảo mật: hardcoded credentials, SQL  injection, XSS, error handling thiếu 

**Điểm khác biệt so với review nội dung** 

Khi review code, vibe-review tự động chuyển sang bộ quy tắc dành riêng cho lập  trình: kiểm tra style guide, Cyclomatic Complexity, function length, dead code,  naming convention. Phương pháp Persona Review được giảm trọng số (10%) vì  code thường không có "độc giả" đa dạng như nội dung. 

**Trường hợp 3: Quick review nhanh** 

Khi cần review nhanh, không cần báo cáo chi tiết — chỉ muốn biết output có vấn đề gì nghiêm trọng không: 

/vibe-review \[output\] \--quick 

Quick Mode chạy subset của mỗi phương pháp, hoàn thành trong khoảng 5 phút: 

• Persona Review: chỉ 2 persona quan trọng nhất (Target User \+ Skeptic) • Benchmark Assessment: chỉ 3 tiêu chuẩn liên quan nhất 

• Rules & QC: chỉ kiểm tra CRITICAL \+ HIGH rules 

• Expert Tips: chỉ 1 chuyên gia phù hợp nhất 

• Automated Tests: chỉ smoke tests cơ bản 

• UAT: chỉ 2 kịch bản đầu tiên (nếu có URL) 

**ĐIỂM CHÍNH:** Quick Mode phù hợp cho lần review đầu tiên hoặc khi cần quick  sanity check. Khi cần đánh giá sâu, dùng Full Mode (không thêm flag). 

**Workflow hoàn chỉnh** 

Đây là quy trình lý tưởng khi dùng vibe-review: 

27\. Tạo output bằng AI (bài viết, code, design...) 

28\. Chạy /vibe-review \[output\] để review đầy đủ  
29\. Đọc Overall Score \+ Priority Action List 

30\. Sửa theo thứ tự: CRITICAL → HIGH → MEDIUM 

31\. Chạy lại /vibe-review \[output đã sửa\] \--quick để xác nhận fixes 32\. Khi Overall Score đạt 80+ và không còn CRITICAL issues → sẵn sàng giao hàng 

**Tóm tắt chương** 

• Review nội dung: /vibe-review \[paste bài viết\] — tập trung readability, tone,  evidence 

• Review code: /vibe-review \[file path hoặc code\] — tập trung security, style, tests • Review nhanh: thêm \--quick — 5 phút, báo cáo 1 trang 

• Workflow: review → sửa theo ưu tiên → re-review → giao hàng khi ≥80 điểm 

**Câu hỏi ôn tập** 

33\. Lệnh nào dùng để review nhanh một bài viết trong 5 phút? 

34\. Khi review code, vibe-review tự động điều chỉnh gì so với review nội dung? 35\. Điểm Overall Score bao nhiêu được coi là sẵn sàng giao hàng?  
Chương 5 

**Full Mode — Quy trình đánh giá  đầy đủ** 

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ **Tổng quan quy trình 4 bước**   
Khi bạn gọi /vibe-review mà không thêm flag, skill sẽ chạy ở Full Mode — đánh giá  đầy đủ tất cả 6 phương pháp. Quy trình gồm 4 bước chính, mỗi bước có vai trò riêng  và output riêng: 

36\. Tự động phát hiện loại output (Auto-detect Task Type) — xác định đây là content,  code, design, document, data hay workflow 

37\. Chạy 6 phương pháp đánh giá — thực hiện từng method với trọng số phù hợp 38\. Tổng hợp và chấm điểm (Aggregate & Score) — tính Overall Quality Score 39\. Xuất báo cáo review (Review Report) — báo cáo chi tiết với Priority Action List 

**Bước 1: Tự động phát hiện loại output** vibe-review đọc output và quét các tín hiệu (signals) để xác định loại: 

• Có HTML/CSS/JS? → Mã nguồn hoặc Giao diện 

• Có deployed URL? → Kích hoạt UAT Browser Testing 

• Có def/function/class? → Mã nguồn 

• Có headings, paragraphs, prose? → Nội dung hoặc Tài liệu 

• Có charts, tables, metrics? → Dữ liệu 

• Có steps, nodes, actors? → Quy trình 

• Nhiều loại mix → Hỗn hợp (Mixed) 

Sau khi phát hiện, vibe-review sẽ thông báo cho bạn: 

"Xác định đây là task loại \[X\]. Sẽ áp dụng \[N\] methods: 

✅ ![][image1]Method 1: Persona Review 

✅ ![][image2]Method 2: Benchmark Assessment 

..." 

Bạn có thể ghi đè loại output bằng cách chỉ định trong lệnh.  
**MẸO:** Nếu vibe-review nhận diện sai loại output, bạn có thể nói rõ: "Đây là tài  liệu chiến lược, không phải nội dung blog." Skill sẽ điều chỉnh trọng số tương  ứng. 

**Bước 2: Chạy 6 phương pháp đánh giá** 

Mỗi phương pháp chạy độc lập và trả về kết quả riêng. Kết quả từ mỗi phương pháp  bao gồm: điểm số trên thang 100, danh sách phát hiện cụ thể (findings), và đề xuất  hành động (recommendations). 

Chi tiết từng phương pháp sẽ được trình bày đầy đủ ở Chương 6\. Trong chương  này, chúng ta tập trung vào tổng quan quy trình và cách các bước kết nối với nhau. 

**Bước 3: Tổng hợp và chấm điểm** 

**Công thức tính điểm** 

Mỗi phương pháp trả về điểm trên thang 100\. Điểm tổng hợp (Overall Quality Score)  được tính bằng tổng có trọng số: 

Overall \= Σ(M\_score × M\_weight) 

Trong đó: 

\- M\_score \= điểm từng phương pháp (0-100) 

\- M\_weight \= trọng số theo loại output 

Ví dụ cho Content: 

\- M1 Persona: 85 × 25% \= 21.25 

\- M2 Benchmark: 72 × 20% \= 14.40 

\- M3 Rules: 90 × 20% \= 18.00 

\- M4 Expert: 78 × 20% \= 15.60 

\- M5 Auto: 95 × 10% \= 9.50 

\- M6 UAT: 80 × 5% \= 4.00 

Overall \= 82.75 → Good 

**Thang điểm** 

Kết quả Overall Quality Score được phân loại theo thang 5 mức: 

• 90-100: Sẵn sàng sản xuất (Production Ready) — chỉ cần polish nhỏ • 80-89: Tốt (Good) — cần vài cải thiện nhỏ  
• 70-79: Chấp nhận được (Acceptable) — cần sửa một số vấn đề quan trọng • 60-69: Cần cải thiện (Needs Work) — có vấn đề nghiêm trọng cần giải quyết • Dưới 60: Chưa sẵn sàng (Not Ready) — cần làm lại đáng kể 

**Quy tắc ghi đè theo mức độ nghiêm trọng** 

Điểm tổng hợp có thể bị giảm (cap down) nếu phát hiện vấn đề nghiêm trọng, bất kể điểm trung bình: 

• Có vấn đề CRITICAL bất kỳ → Overall grade không vượt quá "Needs Work" (69  điểm) 

• Có 3+ vấn đề HIGH → Overall grade không vượt quá "Acceptable" (79 điểm) 

**ĐIỂM CHÍNH:** Quy tắc ghi đè đảm bảo không bao giờ đánh giá cao output có lỗi  nghiêm trọng. Ngay cả khi 5/6 phương pháp cho điểm cao, 1 CRITICAL issue đủ để cảnh báo "Needs Work". 

**Bước 4: Xuất báo cáo review** 

Báo cáo cuối cùng có cấu trúc chuẩn, bao gồm: 

• Tóm tắt điều hành (Executive Summary) — Overall Score \+ thang điểm \+ bảng  điểm từng phương pháp 

• Top 3 điểm mạnh — với evidence cụ thể 

• Top 3 vấn đề nghiêm trọng nhất — với method phát hiện \+ hướng dẫn sửa • Danh sách hành động ưu tiên (Priority Action List) — phân loại  CRITICAL/HIGH/MEDIUM/LOW 

• Chi tiết từng phương pháp — báo cáo đầy đủ cho mỗi method • Ghi chú của reviewer — caveats, limitations, assumptions 

**Tóm tắt chương** 

• Full Mode chạy 4 bước: auto-detect → run methods → aggregate → report • Auto-detect xác định loại output và chọn trọng số phù hợp 

• Điểm tổng hợp là tổng có trọng số, nhưng bị cap bởi severity override rules • Báo cáo output chuẩn hóa với Priority Action List rõ ràng  
**Câu hỏi ôn tập** 

40\. Nêu 4 bước trong quy trình Full Mode. 

41\. Điều gì xảy ra với Overall Score khi phát hiện 1 CRITICAL issue? 42\. Priority Action List phân loại theo những mức nào?  
Chương 6 

**Chi tiết từng phương pháp đánh  giá** 

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 

**Phương pháp 1: Đánh giá theo chân dung  người dùng (chi tiết)** 

**Tạo chân dung người dùng (Persona Generation)** vibe-review tạo 4-7 persona phù hợp với loại output và đối tượng mục tiêu. Bộ persona tiêu chuẩn gồm: Người dùng mục tiêu (Target User), Người hoài nghi  (Skeptic), Người mới bắt đầu (Newcomer), Người dùng nâng cao (Power User),  Chuyên gia lĩnh vực (Domain Expert), Người ra quyết định (Decision Maker), và  Người dùng trường hợp đặc biệt (Edge Case User). 

Số lượng persona được điều chỉnh theo độ phức tạp output. Output đơn giản (blog,  email ngắn) dùng 4 persona. Output phức tạp (sản phẩm, ứng dụng, tài liệu chiến  lược) dùng đầy đủ 7 persona. 

**Nhập vai và phản hồi (Roleplay Feedback)** 

Mỗi persona nhập vai và cho feedback theo format chuẩn: Ấn tượng đầu tiên (1-10),  Điều hoạt động tốt (Works for me), Điều không hoạt động (Doesn't work for me),  Điểm chí mạng (Dealbreaker), và Mong muốn lớn nhất (Top wish). 

Điều quan trọng là mỗi persona phải cho feedback khác nhau — phản ánh đúng góc  nhìn riêng. Nếu tất cả persona nói giống nhau, đó là dấu hiệu roleplay thất bại. 

**Tổng hợp theo trọng số (Weighted Aggregation)** Phản hồi được tổng hợp theo trọng số: Người dùng mục tiêu (×2), Chuyên gia  (×1.5), các persona khác (×1). Kết quả bao gồm: điểm trung bình có trọng số, điểm  đồng thuận tích cực (≥3 persona khen), điểm đồng thuận tiêu cực (≥3 persona chê),  và top 3 dealbreakers theo trọng số.  
**LƯU Ý:** Nếu bạn thấy tất cả persona cho feedback tương tự nhau, hãy cung cấp  thêm context về đối tượng mục tiêu. Context càng rõ, persona càng đa dạng. 

**Phương pháp 2: So sánh tiêu chuẩn ngành (chi  tiết)** 

**Xác định tiêu chuẩn áp dụng** 

Tùy loại output, vibe-review chọn bộ tiêu chuẩn phù hợp. Ví dụ, với nội dung blog, áp  dụng Flesch-Kincaid Readability (mục tiêu ≥60 cho độc giả phổ thông), Hemingway  Grade Level (≤ Grade 9), BLUF compliance (điểm chính trong 2 câu đầu tiên), và  Hook effectiveness (câu đầu tạo sự tò mò hoặc nêu giá trị). 

Mỗi tiêu chuẩn được đánh giá theo 4 mức: Xuất sắc (90-100), Tốt (75-89), Cần cải  thiện (60-74), và Không đạt (dưới 60). Khoảng cách (gap) được đo lường cụ thể để bạn biết cần cải thiện bao nhiêu. 

**Bảng điểm tiêu chuẩn (Benchmark Scorecard)** Kết quả được trình bày dưới dạng bảng với 3 cột: Tên tiêu chuẩn, Điểm (trên 100),  và Khoảng cách. Điểm trung bình của tất cả tiêu chuẩn chính là điểm của Phương  pháp 2\. 

**Phương pháp 3: Kiểm tra quy tắc (chi tiết)** 

**Quy tắc phổ quát (Universal Rules)** 

6 quy tắc áp dụng cho MỌI loại output do AI tạo ra: 

• UR-01 \[CRITICAL\]: Không có thông tin sai hoặc bịa đặt (hallucinated) • UR-02 \[CRITICAL\]: Không có mâu thuẫn nội bộ (claim A ở đầu, phủ nhận A ở cuối) 

• UR-03 \[HIGH\]: Không có placeholder chưa điền (\[TODO\], \[TBD\],  PLACEHOLDER...) 

• UR-04 \[HIGH\]: Không có ngôn ngữ quá chung chung ("nhiều người cho rằng",  "điều quan trọng là"...) 

• UR-05 \[HIGH\]: Output đúng scope — không thiếu section, không padding vô  nghĩa  
• UR-06 \[MEDIUM\]: Không có thiên kiến ngầm (gender, ethnicity, age, class) 

**Quy tắc theo lĩnh vực** 

Ngoài universal rules, mỗi lĩnh vực có bộ quy tắc riêng. Ví dụ với mã nguồn: không  hardcoded credentials (CRITICAL), error handling cho mọi external call (CRITICAL),  input validation tại system boundaries (CRITICAL), không SQL injection/XSS  (CRITICAL), không dead code (HIGH), functions có single responsibility (HIGH). 

Mỗi quy tắc được kiểm tra và báo cáo: ĐẠT/KHÔNG ĐẠT, kèm evidence (trích dẫn  từ output) và hướng dẫn sửa nếu KHÔNG ĐẠT. 

**Phương pháp 4: Đánh giá chuyên gia (chi tiết)** 

**Áp dụng lăng kính chuyên gia** 

vibe-review chọn 2-4 chuyên gia phù hợp nhất với loại output. Mỗi chuyên gia "đánh  giá" output theo triết lý riêng của họ. Ví dụ, David Ogilvy sẽ kiểm tra specificity và  benefit-first; Martin Fowler sẽ kiểm tra tên biến có tự giải thích không; Don Norman  sẽ kiểm tra affordances có rõ không. 

**Tổng hợp chuyên gia** 

Kết quả từ tất cả chuyên gia được tổng hợp: điểm đồng thuận tích cực (≥2 chuyên  gia khen), điểm đồng thuận tiêu cực (≥2 chuyên gia chê), và top 3 đề xuất có tác  động lớn nhất. Điểm của Phương pháp 4 ước tính dựa trên tỷ lệ giữa elements được  khen và bị chê. 

**Phương pháp 5: Kiểm thử tự động (chi tiết)** 

**Suite kiểm thử theo loại output** 

Mỗi loại output có bộ kiểm thử riêng. Ví dụ với nội dung: 

• AT-C01: Số từ trong khoảng mục tiêu (blog: 600-2500, LinkedIn: 150-300) • AT-C02: Readability score theo công thức Flesch-Kincaid 

• AT-C03: Heading hierarchy hợp lệ (H1 đúng 1 lần, không skip H2→H4) • AT-C04: Không có placeholder text (regex scan) 

• AT-C05: URL/link format hợp lệ  
• AT-C06: Keyword density (nếu SEO content, mục tiêu 1-3%) 

Với mã nguồn: syntax validation, function length (≤50 lines), hardcoded secrets scan,  TODO/FIXME count, import completeness. 

**Thực thi và báo cáo** 

Mỗi test được chạy thực tế (dùng Bash/code nếu có thể, tính toán thủ công nếu  không). Kết quả báo cáo: ID test, command/formula chạy, giá trị kỳ vọng, giá trị thực  tế, kết quả ĐẠT/KHÔNG ĐẠT. 

**Phương pháp 6: Kiểm thử trên trình duyệt (chi  tiết)** 

**Điều kiện áp dụng** 

Phương pháp này CHỈ chạy khi có một trong các điều kiện: user cung cấp URL,  output là web app đã deploy, output có interactive elements trên web, hoặc output là  web component có thể render. Nếu không có URL, trọng số được phân bổ cho 5  phương pháp còn lại. 

**6 kịch bản kiểm thử** 

43\. Ấn tượng đầu tiên (5 giây) — Load trang, chụp screenshot, trả lời: trong 5 giây,  user có hiểu purpose không? 

44\. Luồng chính (Golden Path) — Hoàn thành primary user journey end-to-end, ghi  nhận friction points 

45\. Tương tác cốt lõi — Click tất cả CTAs, test form inputs, verify links, test  dropdowns/modals 

46\. Trạng thái lỗi — Submit empty form, nhập invalid data, truy cập URL không hợp  lệ 

47\. Responsive trên mobile — Resize xuống 375px, kiểm tra readability, horizontal  scroll, touch targets 

48\. Cảm nhận hiệu suất — Thời gian đến meaningful content, layout shift, loading  states 

**Tóm tắt chương**  
• Mỗi phương pháp có workflow riêng: chuẩn bị → thực thi → tổng hợp → báo cáo • Persona Review dùng weighted aggregation (Target User ×2, Domain Expert  ×1.5) 

• Benchmark Assessment so sánh với tiêu chuẩn ngành cụ thể, đo lường gap • Rules & QC kiểm tra universal rules \+ domain-specific rules, mỗi rule có severity • Expert Tips áp dụng 2-4 chuyên gia phù hợp nhất, tổng hợp consensus • Automated Tests chạy deterministic PASS/FAIL tests với formula/code thực • UAT Browser Testing chạy 6 kịch bản thực tế trên trình duyệt 

**Câu hỏi ôn tập** 

49\. Trong Persona Review, tại sao Target User có trọng số cao hơn (×2)? 50\. Nêu 3 quy tắc CRITICAL trong Universal Rules. 

51\. Automated Tests ưu tiên phương pháp đo lường nào: chủ quan hay  deterministic?  
Chương 7 

**Quick Mode và Single-Method  Mode** 

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ **Quick Mode — Review nhanh trong 5 phút** 

**Khi nào dùng Quick Mode** 

Quick Mode là lựa chọn lý tưởng khi bạn cần một đánh giá nhanh, không cần báo  cáo chi tiết. Các trường hợp sử dụng phổ biến: 

• Lần review đầu tiên — muốn biết có vấn đề nghiêm trọng không trước khi review  sâu 

• Re-review sau khi sửa — xác nhận các fix đã giải quyết vấn đề • Sanity check — đảm bảo output cơ bản ổn trước khi gửi nhanh • Iteration nhanh — đang trong quá trình tạo output, cần feedback nhanh giữa  chừng 

**Cách gọi** 

/vibe-review \[output\] \--quick 

**Quick Mode chạy gì** 

Quick Mode chạy subset của mỗi phương pháp, giảm đáng kể thời gian nhưng vẫn  bắt được phần lớn vấn đề nghiêm trọng: 

• Persona Review: chỉ 2 persona quan trọng nhất — Target User và Skeptic • Benchmark Assessment: chỉ 3 tiêu chuẩn liên quan nhất 

• Rules & QC: chỉ kiểm tra CRITICAL và HIGH rules, bỏ qua MEDIUM/LOW • Expert Tips: chỉ 1 chuyên gia phù hợp nhất 

• Automated Tests: chỉ smoke tests cơ bản (AT-C01, AT-C04, AT-CD01, AT-CD03) • UAT: chỉ 2 kịch bản đầu tiên (nếu có URL) 

**DỮ LIỆU:** Quick Mode hoàn thành trong khoảng 5 phút. Báo cáo output 1 trang  với: Overall Score, Critical Issues, và Top 3 Fixes.  
**Single-Method Mode — Chỉ chạy 1 phương  pháp** 

**Khi nào dùng Single-Method Mode** 

Single-Method Mode cho phép bạn chỉ chạy 1 phương pháp cụ thể và nhận kết quả chi tiết cho phương pháp đó. Các trường hợp sử dụng: 

• Đã chạy Full Review, muốn đào sâu vào 1 phương pháp cụ thể • Chỉ quan tâm đến 1 khía cạnh (ví dụ: chỉ cần kiểm tra bảo mật, chỉ cần  readability) 

• Tiết kiệm thời gian — không cần chạy tất cả 6 methods khi chỉ cần 1 • Debugging — đang sửa lỗi trong 1 khía cạnh cụ thể, cần re-check nhiều lần 

**Cách gọi** 

/vibe-review \[output\] \--method \[1-6\] 

Ví dụ: 

/vibe-review \[code\] \--method 3 \# Chỉ chạy Rules & QC 

/vibe-review \[URL\] \--method 6 \# Chỉ chạy UAT Browser Testing 

/vibe-review \[bài viết\] \--method 5 \# Chỉ chạy Automated Tests 

**Bảng tham chiếu số phương pháp** 

Dưới đây là bảng tham chiếu nhanh cho từng số phương pháp: 

• \--method 1 → Đánh giá theo chân dung người dùng (Persona Review) • \--method 2 → So sánh tiêu chuẩn ngành (Benchmark Assessment) • \--method 3 → Kiểm tra quy tắc và chất lượng (Rules & QC) 

• \--method 4 → Đánh giá theo góc nhìn chuyên gia (Expert Tips) • \--method 5 → Kiểm thử tự động (Automated Tests) 

• \--method 6 → Kiểm thử trên trình duyệt (UAT Browser Testing) 

**MẸO:** Kết hợp Quick Mode và Single-Method:先用 \--quick tìm vấn đề, rồi dùng \-- method N đào sâu vào method phát hiện vấn đề đó. Đây là workflow hiệu quả nhất. 

**So sánh 3 modes**  
**Bảng so sánh nhanh** 

Full Mode: không có flag, thời gian 10-20 phút, chạy tất cả 6 methods, báo cáo đầy  đủ. Phù hợp cho: review cuối cùng trước khi giao hàng. 

Quick Mode: thêm \--quick, thời gian khoảng 5 phút, chạy subset mỗi method, báo  cáo 1 trang. Phù hợp cho: sanity check, re-review sau khi sửa. 

Single-Method Mode: thêm \--method N, thời gian 3-5 phút, chạy 1 method duy nhất,  báo cáo chi tiết cho method đó. Phù hợp cho: đào sâu 1 khía cạnh, debug cụ thể. 

**Tóm tắt chương** 

• Quick Mode (--quick): 5 phút, subset methods, báo cáo 1 trang — cho sanity  check và re-review 

• Single-Method Mode (--method N): 3-5 phút, 1 method chi tiết — cho đào sâu  hoặc debug 

• Workflow hiệu quả: \--quick tìm vấn đề → \--method N đào sâu → \--quick xác nhận  fix 

**Câu hỏi ôn tập** 

52\. Khi nào bạn chọn Quick Mode thay vì Full Mode? 

53\. Bạn muốn kiểm tra bảo mật code. Flag nào dùng để chỉ chạy Rules & QC? 54\. Nêu workflow kết hợp Quick Mode và Single-Method Mode.  
Chương 8 

**Loại tác vụ và ma trận trọng số** ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 

**7 loại tác vụ (Task Types)** 

vibe-review tự động nhận diện output thuộc 1 trong 7 loại sau. Mỗi loại có ma trận  trọng số riêng, xác định phương pháp nào được ưu tiên hơn: 

**1\. Nội dung (Content)** 

Bài viết, blog, email, bài mạng xã hội, copywriting. Trọng số: Persona Review 25%,  Benchmark 20%, Rules 20%, Expert 20%, Auto Tests 10%, UAT 5%. Đặc điểm: tập  trung vào trải nghiệm đọc, readability, tone, evidence. 

**BÀI TẬP:** Hãy lấy một bài blog bạn đã viết bằng AI. Gọi /vibe-review \--quick để xem Overall Score. Điểm nào thấp nhất? Phương pháp nào bắt được vấn đề đó? 

**2\. Mã nguồn (Code)** 

Source code, scripts, functions, modules. Trọng số: Rules & QC chiếm 30% (cao  nhất), Automated Tests 25%, Expert 20%, Benchmark 15%, Persona 10%, UAT 0%.  Đặc điểm: tập trung vào bảo mật, style, correctness. Persona Review ít quan trọng  hơn vì code thường không có "độc giả" đa dạng. 

**3\. Thiết kế / Giao diện (Design/UI)** 

UI mockups, landing pages, web components. Trọng số: Persona Review 25% (quan  trọng vì UI phục vụ nhiều loại user), UAT 20%, Rules 20%, Benchmark 15%, Expert  10%, Auto Tests 10%. Đặc điểm: tập trung vào trải nghiệm người dùng, accessibility,  responsive. 

**4\. Tài liệu (Document)** 

Report, strategy doc, PRD, whitepaper. Trọng số: Benchmark 25%, Expert 25% (cao  nhất — tài liệu cần Pyramid Principle, MECE), Persona 20%, Rules 20%, Auto Tests  10%, UAT 0%. Đặc điểm: tập trung vào cấu trúc logic, completeness, executive  summary.  
**5\. Dữ liệu (Data)** 

Charts, tables, analytics reports, dashboards. Trọng số: Benchmark 30% (cao nhất  — data cần tiêu chuẩn Tufte, context, uncertainty), Rules 25%, Expert 20%, Persona  10%, Auto Tests 15%, UAT 0%. Đặc điểm: tập trung vào accuracy, context,  visualization quality. 

**6\. Quy trình (Workflow)** 

Process flows, SOPs, automation workflows. Trọng số: Rules 30% (mỗi bước cần  actor \+ input \+ output rõ ràng), Expert 25%, Benchmark 20%, Persona 15%, Auto  Tests 10%, UAT 0%. Đặc điểm: tập trung vào completeness, error handling,  escalation paths. 

**7\. Hỗn hợp (Mixed)** 

Bất kỳ kết hợp nào. Trọng số phân bổ cân bằng: Persona 17%, Benchmark 21%,  Rules 24%, Expert 20%, Auto Tests 10%, UAT 8%. Đặc điểm: là fallback khi output  chứa nhiều loại nội dung pha trộn. 

**Bảng ma trận trọng số tổng hợp** 

Dưới đây là bảng tổng hợp trọng số cho tất cả loại output và 6 phương pháp. Khi  UAT không áp dụng (không có URL), trọng số 5-20% của UAT được phân bổ đều  cho 5 phương pháp còn lại: 

Loại Persona Benchmark Rules Expert Auto UAT 

──────────────────────────────────────────────────────────── Content 25% 20% 20% 20% 10% 5% 

Code 10% 15% 30% 20% 25% 0% 

Design/UI 25% 15% 20% 10% 10% 20% 

Document 20% 25% 20% 25% 10% 0% 

Data 10% 30% 25% 20% 15% 0% 

Workflow 15% 20% 30% 25% 10% 0% 

Mixed 17% 21% 24% 20% 10% 8% 

**Cách vibe-review sử dụng ma trận** 

Khi bạn gọi /vibe-review, skill tự động:  
55\. Phát hiện loại output dựa trên signals (code patterns, heading structure, UI  elements...) 

56\. Chọn ma trận trọng số tương ứng 

57\. Thông báo cho bạn loại output đã nhận diện và các phương pháp sẽ chạy 58\. Chạy 6 phương pháp với trọng số đã chọn 

59\. Tính Overall Score bằng tổng có trọng số 

Bạn luôn có thể ghi đè loại output bằng cách nói rõ trong lệnh. 

**Tóm tắt chương** 

• 7 loại tác vụ: Content, Code, Design/UI, Document, Data, Workflow, Mixed • Mỗi loại có ma trận trọng số riêng — phương pháp quan trọng nhất được ưu tiên • Code: Rules & QC cao nhất (30%). Document: Benchmark \+ Expert cao nhất  (25% mỗi loại) 

• Auto-detect chọn ma trận tự động, nhưng bạn luôn có thể ghi đè 

**Câu hỏi ôn tập** 

60\. Loại output nào ưu tiên Automated Tests nhiều nhất? Tại sao? 61\. Tại sao Design/UI có trọng số UAT cao (20%) trong khi Code là 0%? 62\. Bạn vừa tạo một landing page bằng AI. vibe-review sẽ nhận diện đây là loại gì?  
Chương 9 

**Tích hợp với các skill khác** ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 

**Kiến trúc tích hợp** 

vibe-review không hoạt động độc lập — nó là mắt xích quan trọng trong chuỗi skills.  Hãy tưởng tượng một quy trình hoàn chỉnh: bạn dùng skill tạo output → vibe-review  kiểm tra chất lượng → skill giải quyết vấn đề xử lý issues phức tạp. Đây là cách vibe review kết nối với các skill khác. 

**Upstream — Gọi vibe-review sau khi tạo output** 

vibe-review được thiết kế để review output từ bất kỳ skill nào. Các upstream skills  phổ biến nhất: 

**vibe-aiworkforce** 

Skill chuyển hóa task/workflow doanh nghiệp thành workforce AI. Sau khi tạo  workflow design, gọi vibe-review để kiểm tra: completeness của mỗi bước, error  handling paths, escalation definitions, và SLA/time estimates. 

**vibe-prd-creator** 

Skill tạo tài liệu yêu cầu sản phẩm (Product Requirements Document). Sau khi tạo  PRD, gọi vibe-review để kiểm tra: MECE structure, clarity of acceptance criteria,  completeness of user stories, và Pyramid Principle compliance. 

**vibe-architecture-design** 

Skill tạo tài liệu thiết kế kiến trúc. Sau khi tạo architecture doc, gọi vibe-review để kiểm tra: consistency between components, error handling coverage, scalability  considerations, và security considerations. 

**MẸO:** Pattern phổ biến nhất: tạo output bằng bất kỳ vibe-\* skill → review bằng  vibe-review → sửa theo Priority Action List → re-review bằng vibe-review \--quick.  Quy trình này đảm bảo mọi output đều được QC trước khi giao hàng.  
**Downstream — Sau khi vibe-review hoàn tất** 

**Hành động theo Priority Action List** 

Sau khi nhận báo cáo review, bước tiếp theo là hành động theo Priority Action List.  Sửa theo thứ tự: CRITICAL → HIGH → MEDIUM. Sau khi sửa, chạy lại vibe-review \- \-quick để xác nhận các fix đã giải quyết vấn đề. 

**vibe-gps** 

Nếu vibe-review phát hiện issues phức tạp cần phân tích sâu, bạn có thể gọi vibe gps — skill giải quyết vấn đề theo phương pháp luận cấu trúc. vibe-gps giúp phân  tích root cause, generate giải pháp, và tạo action plan cho những vấn đề mà "sửa  nhanh" không đủ. 

**Workflow tích hợp mẫu** 

Dưới đây là workflow hoàn chỉnh tích hợp vibe-review vào quy trình làm việc: 

63\. Tạo output bằng skill phù hợp (ví dụ: /vibe-prd-creator \[yêu cầu\]) 64\. Review output: /vibe-review \[PRD vừa tạo\] 

65\. Đọc báo cáo: tập trung vào Overall Score \+ Priority Action List 66\. Nếu Overall \< 70 hoặc có CRITICAL issues: 

67\. a. Sửa theo Priority Action List (CRITICAL → HIGH → MEDIUM) 68\. b. Nếu issue quá phức tạp: /vibe-gps \[mô tả issue\] 

69\. c. Re-review: /vibe-review \[output đã sửa\] \--quick 

70\. Khi Overall ≥ 80 và không còn CRITICAL → ![][image3]✅ Sẵn sàng giao hàng 

**Tóm tắt chương** 

• vibe-review review output từ bất kỳ skill nào — upstream connection • Sau review: hành động theo Priority Action List, re-review để xác nhận • vibe-gps hỗ trợ giải quyết issues phức tạp phát hiện qua review • Workflow: tạo → review → sửa → re-review → giao hàng 

**Câu hỏi ôn tập** 

71\. Nêu 3 upstream skills thường dùng cùng vibe-review.  
72\. Khi nào bạn cần gọi vibe-gps sau vibe-review? 

73\. Thiết kế workflow tích hợp cho trường hợp: bạn vừa dùng AI tạo một SOP mới.  
Chương 10 

**Khắc phục sự cố và câu hỏi  thường gặp** 

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ **Sự cố thường gặp** 

**Sự cố 1: Gọi /vibe-review nhưng skill không nhận diện** Nguyên nhân phổ biến nhất là file SKILL.md không nằm đúng vị trí. Kiểm tra: ls \~/.claude/skills/vibe-review/SKILL.md 

\# Nếu không thấy file, cài lại: 

unzip vibe-review.zip \-d \~/.claude/skills/ 

Nếu file tồn tại nhưng vẫn không chạy, khởi động lại Claude Code. 

**LƯU Ý:** Đảm bảo file nằm trong \~/.claude/skills/vibe-review/SKILL.md, không  phải \~/.claude/skills/SKILL.md. Thư mục vibe-review phải tồn tại. 

**Sự cố 2: Review chạy rất lâu** 

Full Mode với output dài (trên 5000 từ) có thể mất 15-20 phút. Đây là bình thường vì  6 phương pháp cần phân tích kỹ. Nếu cần nhanh hơn: 

• Dùng Quick Mode: /vibe-review \[output\] \--quick (khoảng 5 phút) • Chia nhỏ output: review từng phần riêng biệt 

• Chỉ chạy method cần thiết: /vibe-review \[output\] \--method 3 

**Sự cố 3: Phương pháp 6 (UAT) không chạy** 

Phương pháp 6 yêu cầu 2 điều kiện: 

74\. Output có URL có thể truy cập (web app, landing page...) 

75\. Browser MCP tools đã được cài đặt (chrome-devtools hoặc tương đương) Nếu thiếu 1 trong 2, vibe-review tự động bỏ qua Phương pháp 6 và phân bổ trọng số cho 5 phương pháp còn lại. Điều này không ảnh hưởng đáng kể đến chất lượng  review.  
**Sự cố 4: Kết quả review có vẻ không chính xác** Nguyên nhân thường gặp và cách khắc phục: 

• Loại output nhận diện sai → Nói rõ loại output trong lệnh: "Đây là tài liệu chiến  lược" 

• Context không đủ → Cung cấp thêm: đối tượng mục tiêu, mục đích sử dụng, nền  tảng publish 

• Output quá ngắn → vibe-review cần đủ nội dung để phân tích (tối thiểu 100 từ) • Output là code nhưng không có context → Nêu rõ ngôn ngữ lập trình, framework,  mục đích 

**Sự cố 5: Không hiểu scoring** 

Nhắc lại thang điểm: 90-100 \= Sẵn sàng sản xuất, 80-89 \= Tốt, 70-79 \= Chấp nhận  được, 60-69 \= Cần cải thiện, dưới 60 \= Chưa sẵn sàng. Điểm tổng hợp là weighted  average, nhưng bị cap bởi severity override rules: 1 CRITICAL issue đủ để cap ở 69,  3+ HIGH issues cap ở 79\. 

**ĐIỂM CHÍNH:** Nếu Overall Score thấp nhưng không thấy CRITICAL issues rõ  ràng, kiểm tra xem có CRITICAL rules bị FAIL không. Một số CRITICAL rules  (như hallucination check) có thể fail ngầm. 

**Câu hỏi thường gặp (FAQ)** 

**Câu hỏi 1: vibe-review có thể review output không phải do  AI tạo không?** 

Có. Mặc dù được thiết kế cho AI output, vibe-review hoàn toàn có thể review bất kỳ nội dung nào: bài viết do người viết, code do developer, tài liệu do team tạo. Các  phương pháp đánh giá (benchmark, rules, expert tips...) đều áp dụng được cho mọi  loại output. 

**Câu hỏi 2: Review mất bao lâu?** 

Full Mode: 10-20 phút tùy độ dài output. Quick Mode: khoảng 5 phút. Single-Method:  3-5 phút. Thời gian có thể dài hơn với output rất dài (trên 5000 từ) hoặc khi UAT  Browser Testing cần test nhiều pages.  
**Câu hỏi 3: Có cần Internet để chạy vibe-review không?** Không cần. vibe-review chạy hoàn toàn offline. Chỉ có Phương pháp 6 (UAT) cần  Internet nếu URL được review là trang web live. 5 phương pháp đầu hoạt động hoàn  toàn offline. 

**Câu hỏi 4: vibe-review có sửa output giúp tôi không?** Không. vibe-review chỉ đánh giá và đưa ra hướng dẫn sửa. Bạn cần tự sửa output  dựa trên Priority Action List, sau đó re-review để xác nhận. Tuy nhiên, mỗi issue đều  đi kèm hướng dẫn sửa cụ thể ("thay X bằng Y"), giúp bạn sửa nhanh chóng. 

**Câu hỏi 5: Tôi có thể tùy chỉnh trọng số không?** Hiện tại, trọng số được xác định tự động theo loại output. Bạn có thể ghi đè loại  output (ví dụ: nói "đây là tài liệu" thay vì để auto-detect), nhưng không thể thay đổi  trọng số trực tiếp. Nếu cần tập trung vào 1 khía cạnh, dùng Single-Method Mode (-- method N). 

**Câu hỏi 6: Có giới hạn độ dài output không?** 

Không có giới hạn cứng, nhưng output rất dài (trên 10000 từ) sẽ mất nhiều thời gian  review hơn. Khuyến nghị: chia output dài thành các phần nhỏ hơn và review từng  phần. 

**Tóm tắt chương** 

• Sự cố phổ biến: file sai vị trí, review lâu, UAT không chạy, nhận diện sai loại  output 

• Giải pháp: kiểm tra đường dẫn file, dùng \--quick cho nhanh, cung cấp context rõ  ràng 

• vibe-review hoạt động offline, không sửa output trực tiếp, không giới hạn độ dài 

**Câu hỏi ôn tập** 

76\. Khi /vibe-review không nhận diện, bước đầu tiên bạn kiểm tra là gì? 77\. Làm thế nào để giảm thời gian review xuống còn 5 phút? 

78\. vibe-review có cần Internet không? Có ngoại lệ nào?

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAABMElEQVR4Xp3OMUvDUBQF4BsCsbpUbHGyiHSwFCn4A3QIOKi7oOAkDo5SC1kEQQqu6h9QRASjCFZFoWKxlbgVQXhtBzMLtUhFVDIc332UVLEuGb4L97xz4VHvSp85ujfmssn8nDfVAecj9rjLtPWoSdGjYXdGLECp/DUrFpEWq5gXSwr3gx0Z5/1e2BnEf6zaGirvNUTu4wr3iU67PbrtQSeR0gDqH3VMPEy3c+7TieYN3cXBlh/T6CqEQDeasvW0DfvZ9ndF9gMeHZOnX+tgzquDbDWLZDGpND4biBVjoDy1yT7RoRxXcpESpQSaX02UX8qKVbVU/gv36UCOC7m0ZEQG4k0oxqXh5z7u0y65lJNLi36mI1VIKT9zH/cDHYU3yAztkMvUf+0OON+X72yTzG+Yv1qIDUY8qQAAAABJRU5ErkJggg==>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAABMElEQVR4Xp3OMUvDUBQF4BsCsbpUbHGyiHSwFCn4A3QIOKi7oOAkDo5SC1kEQQqu6h9QRASjCFZFoWKxlbgVQXhtBzMLtUhFVDIc332UVLEuGb4L97xz4VHvSp85ujfmssn8nDfVAecj9rjLtPWoSdGjYXdGLECp/DUrFpEWq5gXSwr3gx0Z5/1e2BnEf6zaGirvNUTu4wr3iU67PbrtQSeR0gDqH3VMPEy3c+7TieYN3cXBlh/T6CqEQDeasvW0DfvZ9ndF9gMeHZOnX+tgzquDbDWLZDGpND4biBVjoDy1yT7RoRxXcpESpQSaX02UX8qKVbVU/gv36UCOC7m0ZEQG4k0oxqXh5z7u0y65lJNLi36mI1VIKT9zH/cDHYU3yAztkMvUf+0OON+X72yTzG+Yv1qIDUY8qQAAAABJRU5ErkJggg==>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABbklEQVR4XqXRv0vDUBAH8AsUfyAtLRWEgkEqRamDTgUd/Adc3AoKztIgOLlacJEWcVKQDiIi+AvRhiIUXqvR0UzFOthBrEJBnYqYGuR897TBUA1Chs+Du3ffg7xAcC4gh5b7GBnLThjjuUnTCc341vsZkRa7ZWjLhNhMOYEkUVn4l+Y8Zd0v6DrpNQb1GDoZ0keFwqOGmbstHOA9QlmAY58pXQTQyez1vND4aGD0Kmb1KQtw1G7CeQf+xa/1YO21JqTuV+z3lHW/4BBMT9GDJFlO4pQ+jVAES/o2jdW3quDVvLY7ygIc8IPxglNuFDTeDRy+HBEiWkTU8VJcaM5Z9mnBLj/yvOCkvISFlwLqT7qgPqjInpm4+xVl3S/Y4ccpL76Fz8JYN+uC+G1a1LprQVnYBgNyvPhBKSlCqpKy9VtQFjb4c2R5QdQvkioJnblOq2fTnKes6wXBJZD9a8AIfxQD9vh3OaGZTT5LVkH+BCHPEr1AGIWbAAAAAElFTkSuQmCC>