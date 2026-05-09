#!/bin/bash

# ==========================================================
# B5 TRAINING SANDBOX RESET SCRIPT v1.0
# Purpose: Resets the student workspace to a clean state.
# ==========================================================

PROJECT_PATH="/Users/mac/Library/CloudStorage/GoogleDrive-lichtv@gmail.com/.shortcut-targets-by-id/1-8YUtQWBFiEH5mEvaQJI-esJZvHl4ePY/PROJECT/READY2US/2026 | vietnam-made/Project/03_B5_Training_Sandbox/B5_V2_Legacy"
TIER1_DOCS="/Users/mac/Library/CloudStorage/GoogleDrive-lichtv@gmail.com/.shortcut-targets-by-id/1-8YUtQWBFiEH5mEvaQJI-esJZvHl4ePY/PROJECT/READY2US/2026 | vietnam-made/Project/01_Lichtv_System_Master/VietnamMade_Master/cdp/docs"

echo "🚀 Starting B5 Sandbox Reset..."

# 1. Clean up student-generated sections
echo "🧹 Pruning student-generated sections..."
CORE_SECTIONS=("header.html" "footer.html" "topbar.html" "script.html")

for dir in "cdp/sections/vi" "cdp/sections/en" "sandbox/sections/vi" "sandbox/sections/en"; do
  if [ -d "$PROJECT_PATH/$dir" ]; then
    find "$PROJECT_PATH/$dir" -type f ! \( -name "header.html" -o -name "footer.html" -o -name "topbar.html" -o -name "script.html" \) -delete
    # Remove empty subdirectories (like old global-sale)
    find "$PROJECT_PATH/$dir" -type d -empty -delete
  fi
done

# 2. Clear scratch directory
echo "📂 Clearing scratch directory..."
rm -rf "$PROJECT_PATH/scratch/"*
touch "$PROJECT_PATH/scratch/README.md"
echo "# Student Scratchpad\nPlace your temporary files and experiments here." > "$PROJECT_PATH/scratch/README.md"

# 3. Refresh Training Wiki from Tier 1
echo "📚 Refreshing Training Wiki..."
mkdir -p "$PROJECT_PATH/cdp/docs/training"
mkdir -p "$PROJECT_PATH/cdp/docs/training/v3.0_30Days_LeanOS"

# Sync documents
cp "$TIER1_DOCS/wiki/AI_BOOTCAMP_CURRICULUM_v2.0.md" "$PROJECT_PATH/cdp/docs/training/" 2>/dev/null
cp "$TIER1_DOCS/wiki/AI_BOOTCAMP_CURRICULUM_v3.0.md" "$PROJECT_PATH/cdp/docs/training/" 2>/dev/null
cp "$TIER1_DOCS/wiki/30_DAY_IMPLEMENTATION_ROADMAP_v3.0.md" "$PROJECT_PATH/cdp/docs/training/" 2>/dev/null
cp -R "$TIER1_DOCS/v3.0_30Days_LeanOS/"* "$PROJECT_PATH/cdp/docs/training/v3.0_30Days_LeanOS/" 2>/dev/null

# Find and sync GTM/Outreach/Data Mining docs
find "$TIER1_DOCS" -name "*GTM_STRATEGY*" -exec cp {} "$PROJECT_PATH/cdp/docs/training/" \; 2>/dev/null
find "$TIER1_DOCS" -name "*B2B_OUTREACH*" -exec cp {} "$PROJECT_PATH/cdp/docs/training/" \; 2>/dev/null
find "$TIER1_DOCS" -name "*DATA_MINING*" -exec cp {} "$PROJECT_PATH/cdp/docs/training/" \; 2>/dev/null

# 4. Final Cleanup
echo "✨ Removing junk files..."
find "$PROJECT_PATH" -name ".DS_Store" -delete

echo "✅ Sandbox Reset Complete. Ready for next student."
