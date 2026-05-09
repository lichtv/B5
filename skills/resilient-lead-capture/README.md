# Kỹ năng: Thu thập dữ liệu khách hàng bền bỉ / Skill: Resilient Lead Capture

Mô hình kiến trúc để thu thập dữ liệu khách hàng với khả năng phục hồi mạng cao, sử dụng LocalStorage làm hàng đợi. / Architectural pattern for lead capture with high network resilience, using LocalStorage as a queue.

## 1. Giới thiệu / Introduction
Mẫu này đảm bảo không có dữ liệu khách hàng nào bị mất ngay cả khi kết nối mạng không ổn định hoặc bị ngắt hoàn toàn trong quá trình gửi form. / This pattern ensures no leads are lost even when network connection is unstable or completely severed during form submission.

## 2. Tính năng chính / Key Features
- **Hàng đợi LocalStorage / LocalStorage Queue**: Lưu trữ dữ liệu khách hàng cục bộ khi ngoại tuyến. / Stores lead data locally when offline.
- **Tự động đồng bộ / Auto-Sync**: Tự động gửi dữ liệu khi có mạng trở lại. / Automatically posts data when network returns.
- **Phản hồi giao diện người dùng / UI Feedback**: Thông báo trạng thái gửi dữ liệu theo thời gian thực. / Real-time submission status notifications.

## 3. Cách sử dụng / How to Use
1. Sao chép `lead_api.js` vào dự án của bạn. / Copy `lead_api.js` to your project.
2. Cấu hình `SCRIPT_URL` trong đối tượng `CONFIG`. / Configure `SCRIPT_URL` in the `CONFIG` object.
3. Gọi `LeadAPI.submitLead(data)` từ trình xử lý form của bạn. / Call `LeadAPI.submitLead(data)` from your form handler.

---
*Thuộc hệ thống Lichtv Master / Part of Lichtv Master System*
