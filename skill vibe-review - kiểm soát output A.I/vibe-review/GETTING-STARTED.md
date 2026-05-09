# Getting Started — vibe-review

## 30 giây đầu tiên

1. Install (xem INSTALL.md)
2. Gọi skill: `/vibe-review [paste output hoặc mô tả output]`
3. Đọc review report → hành động theo Priority Action List

## vibe-review là gì?

**Skill review chất lượng toàn diện cho AI-generated output** — áp dụng 6 phương pháp đánh giá đa chiều để đảm bảo output xứng đáng được giao cho user.

## 6 Methods

| # | Method | Mục đích |
|---|--------|----------|
| 1 | AI Persona Review | Simulate feedback từ 4-7 user personas khác nhau |
| 2 | Benchmark Assessment | So sánh với tiêu chuẩn ngành (Flesch-Kincaid, WCAG, OWASP...) |
| 3 | Rules & Quality Control | Check universal + domain-specific rules |
| 4 | Expert Tips Review | Áp dụng insights từ chuyên gia (Ogilvy, Fowler, Norman...) |
| 5 | Automated Tests | Chạy deterministic PASS/FAIL tests |
| 6 | UAT Browser Testing | Test thực tế trên browser (nếu có URL) |

## 3 Use Case phổ biến

### 1. Review bài viết / content
```
/vibe-review [paste bài viết]
```
→ Persona review + readability tests + content rules + expert copywriting tips

### 2. Review code
```
/vibe-review [paste code hoặc file path]
```
→ Security checks + style rules + expert engineering tips + syntax tests

### 3. Quick review nhanh
```
/vibe-review [output] --quick
```
→ Subset của mỗi method, report 1 trang, ~5 phút

## Modes

| Mode | Invoke | Thời gian | Output |
|------|--------|-----------|--------|
| Full | `/vibe-review [output]` | 10-20 min | Full report tất cả 6 methods |
| Quick | `/vibe-review [output] --quick` | ~5 min | 1-page summary |
| Single | `/vibe-review [output] --method 3` | 3-5 min | Chi tiết 1 method duy nhất |

## Task Types hỗ trợ

- **Content** — bài viết, blog, email, social media
- **Code** — source code, scripts, functions
- **Design/UI** — giao diện, mockups, web pages
- **Document** — report, strategy doc, PRD
- **Data** — charts, tables, analytics
- **Workflow** — process flows, SOPs
- **Mixed** — bất kỳ combination nào

## Workflow cơ bản

```
Tạo output bằng AI
    ↓
/vibe-review [output]
    ↓
Đọc Overall Score + Priority Action List
    ↓
Fix theo CRITICAL → HIGH → MEDIUM
    ↓
/vibe-review [output đã fix] --quick  ← verify
    ↓
✅ Sẵn sàng giao hàng
```

## Integration với skills khác

- Sau khi dùng `/vibe-prd-creator`, `/vibe-architecture-design`, `/vibe-aiworkforce`... → gọi `/vibe-review` để QC output
- Khi review phát hiện issues phức tạp → dùng `/vibe-gps` để giải quyết structured
