/**
 * Image to WebP Conversion Script
 * 
 * Converts PNG and JPG images to WebP format with:
 * - Quality: 80
 * - Target size: 100-200KB
 * 
 * Usage: npx tsx scripts/convert-to-webp.ts
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

// Configuration
const QUALITY = 80;
const TARGET_MIN_SIZE = 100 * 1024; // 100KB
const TARGET_MAX_SIZE = 200 * 1024; // 200KB

// Directories to process
const SCENE_DIRS = [
  'src/assets/scenes',
  'src/assets/scenes/graduation'
];

interface ConversionResult {
  source: string;
  target: string;
  originalSize: number;
  newSize: number;
  compressionRatio: number;
}

/**
 * Get all image files from a directory
 */
async function getImageFiles(dir: string): Promise<string[]> {
  const files: string[] = [];
  
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      
      if (entry.isFile()) {
        const ext = extname(entry.name).toLowerCase();
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
  }
  
  return files;
}

/**
 * Convert a single image to WebP
 */
async function convertToWebP(
  sourcePath: string, 
  quality: number = QUALITY
): Promise<ConversionResult> {
  const ext = extname(sourcePath);
  const targetPath = sourcePath.replace(ext, '.webp');
  
  // Get original size
  const stats = await stat(sourcePath);
  const originalSize = stats.size;
  
  // Convert to WebP
  await sharp(sourcePath)
    .webp({ quality })
    .toFile(targetPath);
  
  // Get new size
  const newStats = await stat(targetPath);
  const newSize = newStats.size;
  
  const compressionRatio = ((1 - newSize / originalSize) * 100);
  
  return {
    source: sourcePath,
    target: targetPath,
    originalSize,
    newSize,
    compressionRatio
  };
}

/**
 * Adjust quality to meet target file size
 */
async function convertWithTargetSize(
  sourcePath: string
): Promise<ConversionResult> {
  let quality = QUALITY;
  let result = await convertToWebP(sourcePath, quality);
  
  // If file is too large, reduce quality iteratively
  while (result.newSize > TARGET_MAX_SIZE && quality > 20) {
    quality -= 5;
    console.log(`  Adjusting quality to ${quality} for ${basename(sourcePath)}...`);
    result = await convertToWebP(sourcePath, quality);
  }
  
  // If file is still under min target, we're good
  // This is acceptable as we prioritize quality within the target range
  
  return result;
}

/**
 * Format file size for display
 */
function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)}MB`;
}

/**
 * Main conversion process
 */
async function main() {
  console.log('🎨 Starting image conversion to WebP...\n');
  console.log(`Quality: ${QUALITY}`);
  console.log(`Target size: ${formatSize(TARGET_MIN_SIZE)} - ${formatSize(TARGET_MAX_SIZE)}\n`);
  
  const allResults: ConversionResult[] = [];
  
  for (const dir of SCENE_DIRS) {
    console.log(`📁 Processing directory: ${dir}`);
    const files = await getImageFiles(dir);
    
    if (files.length === 0) {
      console.log(`  No images found.\n`);
      continue;
    }
    
    console.log(`  Found ${files.length} images to convert\n`);
    
    for (const file of files) {
      const fileName = basename(file);
      console.log(`  Converting: ${fileName}`);
      
      try {
        const result = await convertWithTargetSize(file);
        allResults.push(result);
        
        console.log(`    ✓ ${formatSize(result.originalSize)} → ${formatSize(result.newSize)} (${result.compressionRatio.toFixed(1)}% reduction)`);
        
        // Flag if outside target range
        if (result.newSize > TARGET_MAX_SIZE) {
          console.log(`    ⚠️  File size ${formatSize(result.newSize)} exceeds target ${formatSize(TARGET_MAX_SIZE)}`);
        } else if (result.newSize < TARGET_MIN_SIZE) {
          console.log(`    ℹ️  File size ${formatSize(result.newSize)} is under target (good quality!)`);
        } else {
          console.log(`    ✅ File size within target range`);
        }
      } catch (error) {
        console.error(`    ✗ Failed to convert: ${error}`);
      }
      
      console.log('');
    }
  }
  
  // Summary
  console.log('\n📊 Conversion Summary');
  console.log('═'.repeat(60));
  
  const totalOriginalSize = allResults.reduce((sum, r) => sum + r.originalSize, 0);
  const totalNewSize = allResults.reduce((sum, r) => sum + r.newSize, 0);
  const totalSavings = totalOriginalSize - totalNewSize;
  const avgCompression = (totalSavings / totalOriginalSize) * 100;
  
  console.log(`Total images converted: ${allResults.length}`);
  console.log(`Original total size: ${formatSize(totalOriginalSize)}`);
  console.log(`New total size: ${formatSize(totalNewSize)}`);
  console.log(`Total savings: ${formatSize(totalSavings)} (${avgCompression.toFixed(1)}% reduction)`);
  
  // Count files within target range
  const withinTarget = allResults.filter(
    r => r.newSize >= TARGET_MIN_SIZE && r.newSize <= TARGET_MAX_SIZE
  ).length;
  
  console.log(`\nFiles within target range (${formatSize(TARGET_MIN_SIZE)}-${formatSize(TARGET_MAX_SIZE)}): ${withinTarget}/${allResults.length}`);
  
  console.log('\n✨ Conversion complete!');
}

// Run the script
main().catch(console.error);
