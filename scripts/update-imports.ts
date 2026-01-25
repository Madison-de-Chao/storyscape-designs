/**
 * Update Image Imports Script
 * 
 * Updates import statements to use .webp instead of .png or .jpg
 * 
 * Usage: npx tsx scripts/update-imports.ts
 */

import { readFile, writeFile } from 'fs/promises';

const FILES_TO_UPDATE = [
  'src/data/yi1/sceneImages.ts',
  'src/data/journeyReflections.ts'
];

async function updateImports(filePath: string) {
  console.log(`\n📝 Updating: ${filePath}`);
  
  try {
    let content = await readFile(filePath, 'utf-8');
    let changes = 0;
    
    // Replace .png with .webp
    const pngMatches = content.match(/\.png'/g);
    if (pngMatches) {
      content = content.replace(/\.png'/g, ".webp'");
      changes += pngMatches.length;
      console.log(`  ✓ Replaced ${pngMatches.length} .png imports`);
    }
    
    // Replace .jpg with .webp
    const jpgMatches = content.match(/\.jpg'/g);
    if (jpgMatches) {
      content = content.replace(/\.jpg'/g, ".webp'");
      changes += jpgMatches.length;
      console.log(`  ✓ Replaced ${jpgMatches.length} .jpg imports`);
    }
    
    // Replace .jpeg with .webp
    const jpegMatches = content.match(/\.jpeg'/g);
    if (jpegMatches) {
      content = content.replace(/\.jpeg'/g, ".webp'");
      changes += jpegMatches.length;
      console.log(`  ✓ Replaced ${jpegMatches.length} .jpeg imports`);
    }
    
    if (changes > 0) {
      await writeFile(filePath, content, 'utf-8');
      console.log(`  ✅ Total changes: ${changes}`);
    } else {
      console.log(`  ℹ️  No changes needed`);
    }
  } catch (error) {
    console.error(`  ✗ Error updating file: ${error}`);
  }
}

async function main() {
  console.log('🔄 Updating image imports to WebP...\n');
  
  for (const file of FILES_TO_UPDATE) {
    await updateImports(file);
  }
  
  console.log('\n✨ Import updates complete!');
}

main().catch(console.error);
