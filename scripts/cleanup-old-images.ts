/**
 * Cleanup Old Images Script
 * 
 * Removes old PNG and JPG files after WebP conversion
 * 
 * Usage: npx tsx scripts/cleanup-old-images.ts
 */

import { unlink, access } from 'fs/promises';
import { readdir } from 'fs/promises';
import { join, extname, basename } from 'path';

const SCENE_DIRS = [
  'src/assets/scenes',
  'src/assets/scenes/graduation'
];

async function cleanupDirectory(dir: string) {
  console.log(`\n🗑️  Cleaning: ${dir}`);
  
  try {
    const files = await readdir(dir);
    let removed = 0;
    let skipped = 0;
    
    for (const file of files) {
      const ext = extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const fullPath = join(dir, file);
        // Get the base name without extension
        const baseNameWithoutExt = basename(file, ext);
        // Check if corresponding .webp file exists
        const webpPath = join(dir, `${baseNameWithoutExt}.webp`);
        
        try {
          await access(webpPath);
          // WebP file exists, safe to delete original
          await unlink(fullPath);
          removed++;
        } catch {
          // WebP file doesn't exist, skip deletion
          console.log(`  ⚠️  Skipping ${file} - no corresponding .webp file found`);
          skipped++;
        }
      }
    }
    
    console.log(`  ✓ Removed ${removed} old image files`);
    if (skipped > 0) {
      console.log(`  ⚠️  Skipped ${skipped} files (no .webp counterpart)`);
    }
  } catch (error) {
    console.error(`  ✗ Error: ${error}`);
  }
}

async function main() {
  console.log('🧹 Cleaning up old PNG and JPG files...\n');
  
  for (const dir of SCENE_DIRS) {
    await cleanupDirectory(dir);
  }
  
  console.log('\n✨ Cleanup complete!');
}

main().catch(console.error);
