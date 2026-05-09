# 🚀 AGOS v3.0.0 - LEAN REVENUE OS (DỰ ÁN MẪU)

Chào mừng bạn đến với phiên bản tinh gọn của hệ thống AGOS, được thiết kế đặc biệt cho các doanh nghiệp trong hệ sinh thái **Ready2US / VietnamMade** để triển khai nhanh trong 30 ngày.

## 🎯 MỤC TIÊU CỦA V3.0.0
- **Triển khai cực nhanh (30 ngày)**: Không cần cài đặt hệ thống phức tạp (n8n/CRM).
- **Chi phí tối ưu**: Tận dụng hạ tầng Google Workspace (Sheets, Gmail, Apps Script).
- **An toàn Tuyệt đối (Safe Ramp)**: Tích hợp cơ chế kiểm duyệt email thủ công (Human-in-the-loop) để bảo vệ uy tín tên miền.

## 📁 CẤU TRÚC DỰ ÁN
- `index.html`: Landing page thu thập Lead mẫu.
- `dashboard.html`: Hệ thống quản trị tập trung (Command Center, Prompt Lab, Sales Queue).
- `Code.js`: Backend xử lý logic (Copy nội dung này vào Google Apps Script).
- `lead_api.js`: Thư viện kết nối Landing Page với Backend.
- `LOOKER_STUDIO_SETUP.md`: Hướng dẫn kết nối Looker Studio vào tab reporting `AGOS_Metrics`.

## 🛠️ HƯỚNG DẪN TRIỂN KHAI (QUICK START)

### Bước 1: Thiết lập Google Sheet & Apps Script
1. Tạo một Google Sheet mới.
2. Mở **Extensions > Apps Script**.
3. Copy toàn bộ mã trong file `Code.js` dán vào trình soạn thảo.
4. Nhấn **Deploy > New Deployment**. 
   - Type: Web App
   - Execute as: Me
   - Who has access: Anyone
5. Copy URL nhận được (Web App URL).

### Bước 2: Cấu hình Dashboard
1. Mở file `dashboard.html`.
2. Nhập URL Apps Script vừa copy và mật khẩu mặc định: `agos2026`.
3. Bạn đã có quyền truy cập vào 3 màn hình cốt lõi.

### Bước 2.1: Đồng bộ dữ liệu Looker Studio
1. Trong Apps Script, chạy hàm `syncLookerMetrics()` để tạo/cập nhật tab `AGOS_Metrics`.
2. Mở Looker Studio và kết nối Google Sheets vào tab `AGOS_Metrics`.
3. Dựng scorecard và chart theo `LOOKER_STUDIO_SETUP.md`.

### Bước 3: Kết nối Landing Page
1. Trong file `index.js` (hoặc cấu hình endpoint trong landing page), trỏ `webAppUrl` về URL Apps Script của bạn.
2. Thử điền form trên Landing Page và kiểm tra xem Lead có xuất hiện trong Dashboard không.

## 🌊 QUY TRÌNH VẬN HÀNH "LEAN REVENUE"
1. **Lead Captured**: Lead được thu thập từ Landing Page và lưu vào Google Sheets.
2. **AI Draft (Prompt Lab)**: Hệ thống tự động gợi ý email cá nhân hóa (Personalized Email). Bạn vào Prompt Lab để duyệt hoặc chỉnh sửa.
3. **Outreach**: Nhấn "Approve & Send", email sẽ được gửi trực tiếp từ Gmail của bạn.
4. **Pipeline Tracking (Sales Queue)**: Theo dõi trạng thái phản hồi của khách hàng (Replied, Meeting, Deal) để tối ưu hóa tỷ lệ chuyển đổi.

---
*Phát triển bởi đội ngũ AGOS Agent OPC Team.*
