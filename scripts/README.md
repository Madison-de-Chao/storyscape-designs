# Image Optimization Scripts

This directory contains scripts for managing and optimizing game assets.

## Scripts

### `convert-to-webp.ts`

Converts PNG and JPG images to WebP format with optimized settings.

**Features:**
- Quality setting: 80 (configurable)
- Target file size: 100-200KB
- Automatic quality adjustment to meet target size
- Batch processing for multiple directories
- Detailed conversion statistics

**Usage:**
```bash
npx tsx scripts/convert-to-webp.ts
```

**Configuration:**
Edit the script to modify:
- `QUALITY`: Default quality level (default: 80)
- `TARGET_MIN_SIZE`: Minimum target file size (default: 100KB)
- `TARGET_MAX_SIZE`: Maximum target file size (default: 200KB)
- `SCENE_DIRS`: Directories to process

### `update-imports.ts`

Updates TypeScript import statements to use `.webp` extensions instead of `.png` or `.jpg`.

**Usage:**
```bash
npx tsx scripts/update-imports.ts
```

**Files Updated:**
- `src/data/yi1/sceneImages.ts`
- `src/data/journeyReflections.ts`

### `cleanup-old-images.ts`

Removes old PNG and JPG files after WebP conversion.

**Usage:**
```bash
npx tsx scripts/cleanup-old-images.ts
```

**Warning:** This permanently deletes original image files. Make sure WebP conversion was successful before running.

## Workflow

When adding new images to the project:

1. Add PNG/JPG images to `src/assets/scenes/` or appropriate subdirectory
2. Run conversion: `npx tsx scripts/convert-to-webp.ts`
3. Update imports: `npx tsx scripts/update-imports.ts`
4. Test the application to ensure images load correctly
5. Clean up old files: `npx tsx scripts/cleanup-old-images.ts`

## Conversion Results

Most recent conversion (2026-01-25):
- Total images converted: 264
- Original total size: 866.61MB
- New total size: 40.93MB
- Total savings: 825.68MB (95.3% reduction)
- Files within target range (100-200KB): 232/264

## Requirements

- Node.js
- Dependencies:
  - `sharp`: Image processing library
  - `tsx`: TypeScript execution
  - `@types/sharp`: TypeScript definitions

Install dependencies:
```bash
npm install --save-dev sharp @types/sharp tsx
```
