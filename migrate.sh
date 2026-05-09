#!/bin/bash
DEST_BASE="/Users/mac/Library/CloudStorage/GoogleDrive-lichtv@gmail.com/.shortcut-targets-by-id/1-8YUtQWBFiEH5mEvaQJI-esJZvHl4ePY/PROJECT/READY2US/2026 | vietnam-made/Project"

# Sao chép hình ảnh AI vào dự án Viet-Ceramics
cp "/Users/mac/.gemini/antigravity/brain/e5cacd18-3191-481e-8453-157a75c25828/luxury_ceramics_hero_1778098010636.png" "$DEST_BASE/Viet-Ceramics/lp_hub/images/luxury_ceramics_hero.png"
cp "/Users/mac/.gemini/antigravity/brain/e5cacd18-3191-481e-8453-157a75c25828/artisan_painting_detail_1778098023081.png" "$DEST_BASE/Viet-Ceramics/lp_hub/images/artisan_painting_detail.png"
cp "/Users/mac/.gemini/antigravity/brain/e5cacd18-3191-481e-8453-157a75c25828/modern_us_kitchen_ceramics_1778098038439.png" "$DEST_BASE/Viet-Ceramics/lp_hub/images/modern_us_kitchen_ceramics.png"

# Chuyển (Copy) toàn bộ B5 sang thư mục Project thật và đổi tên thành AGOS
# Sử dụng copy thay vì move để tránh làm sập phiên làm việc hiện tại của AI
cp -R "/Users/mac/Library/CloudStorage/GoogleDrive-lichtv@gmail.com/.shortcut-targets-by-id/1-0pzxcETMsBmJu_MoWwB6F4oaLah4QjI/LICHTV/LEARNING/AI TOOLS/Google AI Bootcamp/B5" "$DEST_BASE/AGOS"
