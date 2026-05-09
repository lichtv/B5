# Bản thiết kế kỹ thuật - Dự án OWEN US / Technical Blueprint - OWEN US Project v1.0

Kiến trúc hệ thống Trang đích OWEN US tích hợp khung AGOS "1+1+N". / OWEN US Landing Page system architecture integrating AGOS "1+1+N" framework.

## 1. Khung kiến trúc "1+1+N" / "1+1+N" Architectural Framework
- **Tier 1: Master (Lichtv)**: Chứa các logic cốt lõi có thể tái sử dụng và bản thiết kế kỹ thuật chính. / Contains reusable core logic and the master technical blueprint.
- **Tier 2: Commercial Hub (AGOS)**: Thư mục dự án thương mại, quản lý nội dung và triển khai. / Commercial project folder, managing content and deployment.
- **Tier 3: Training Sandbox (B5)**: Môi trường đào tạo và thử nghiệm. / Training and experimental environment.

## 2. Kiến trúc Data / Data Architecture
- **Lead API (Resilient)**: Hệ thống gửi dữ liệu hai lớp (Fetch + LocalStorage). / Two-layer data submission system (Fetch + LocalStorage).
- **Cơ chế đồng bộ / Sync Mechanism**: Đồng bộ hóa nền khi trạng thái mạng khả dụng. / Background synchronization when network status is available.

## 3. Quy chuẩn Thiết kế / Design Standards
- **Token Chủ đạo / Primary Tokens**:
  - `bg-primary`: `#0A192F` (Midnight Navy)
  - `accent`: `#64FFDA` (Eco-Green)
  - `glass`: `backdrop-filter: blur(10px); background: rgba(255,255,255,0.05);`

---
*Tài liệu cấp độ Master / Master Level Documentation*
