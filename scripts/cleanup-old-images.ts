/**
 * Cleanup Old Images Script
 * 
 * Removes old PNG and JPG files after WebP conversion
 * 
 * Usage: npx tsx scripts/cleanup-old-images.ts
 */

import { unlink } from 'fs/promises';
import { readdir } from 'fs/promises';
import { join, extname } from 'path';

const SCENE_DIRS = [
  'src/assets/scenes',
  'src/assets/scenes/graduation'
];

async function cleanupDirectory(dir: string) {
  console.log(`\n🗑️  Cleaning: ${dir}`);
  
  try {
    const files = await readdir(dir);
    let removed = 0;
    
    for (const file of files) {
      const ext = extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const fullPath = join(dir, file);
        await unlink(fullPath);
        removed++;
      }
    }
    
    console.log(`  ✓ Removed ${removed} old image files`);
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
