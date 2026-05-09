# Cài đặt vibe-review

## Yêu cầu
- Claude Code CLI (phiên bản mới nhất)
- Hoặc bất kỳ SKILL.md-compatible client

## Cài đặt (Claude Code)

### Option 1: Personal (áp dụng mọi project)
```bash
unzip vibe-review.zip -d ~/.claude/skills/
```

### Option 2: Project-only (chỉ project hiện tại)
```bash
unzip vibe-review.zip -d .claude/skills/
```

## Xác nhận cài đặt

Khởi động lại Claude Code, rồi gõ:
```
/vibe-review
```

## Tool cần thêm (optional)

Để sử dụng đầy đủ 6 methods:
- **Method 5 (Automated Tests):** Cần Bash tool — có sẵn mặc định trong Claude Code
- **Method 6 (UAT Browser Testing):** Cần Browser MCP tools (chrome-devtools hoặc tương đương) — chỉ cần khi review web UI có URL

Nếu không có Browser MCP tools, vibe-review vẫn hoạt động với 5 methods đầu (Personas, Benchmark, Rules, Expert Tips, Automated Tests).

## Gỡ cài đặt
```bash
rm -rf ~/.claude/skills/vibe-review
```
