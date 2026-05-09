# Cài đặt Vibe Company Orchestrator

## Yêu cầu
- Claude Code CLI (phiên bản mới nhất)
- Git (tùy chọn, để quản lý phiên bản SOP)

## Cài đặt (Claude Code)

### Option 1: Personal (áp dụng mọi project)
```bash
unzip vibe-company-orchestrator.zip -d ~/.claude/skills/
```

### Option 2: Project-only (chỉ project hiện tại)
```bash
unzip vibe-company-orchestrator.zip -d .claude/skills/
```

## Xác nhận cài đặt

Khởi động lại Claude Code, rồi gõ:
```
/vibe-company-orchestrator
```

## Gỡ cài đặt
```bash
rm -rf ~/.claude/skills/vibe-company-orchestrator
```
