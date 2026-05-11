// scripts/optimize-cars.mjs
// Converts new PNG car photos to optimised WebP (max 1200px wide, quality 82).
// Run once: node scripts/optimize-cars.mjs
// Output goes to public/cars/ replacing old files.
// Naming convention:
//   Corsa-Editada-N.png  → car-opel-N.webp
//   C3-Editada-N.png     → car-c3-N.webp
//   C3-8.jpg             → car-c3-8.webp  (extra photo)
//   2008-Editada-N.png   → car-2008-N.webp

import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CARS_DIR = join(__dirname, "../public/cars");

const MAX_WIDTH = 1200;
const QUALITY = 82; // WebP quality — good balance between size & sharpness

const MAP = [
  // [input pattern, output name]
  // Corsa (10 photos)
  ...Array.from({ length: 10 }, (_, i) => [
    `Corsa-Editada-${i + 1}.png`,
    `car-opel-${i + 1}.webp`,
  ]),
  // C3 (photos 1-7, 9, 10 from PNG + photo 8 from JPG)
  ...Array.from({ length: 7 }, (_, i) => [
    `C3-Editada-${i + 1}.png`,
    `car-c3-${i + 1}.webp`,
  ]),
  ["C3-8.jpg", "car-c3-8.webp"],
  ["C3-Editada-9.png", "car-c3-9.webp"],
  ["C3-Editada-10.png", "car-c3-10.webp"],
  // 2008 (10 photos)
  ...Array.from({ length: 10 }, (_, i) => [
    `2008-Editada-${i + 1}.png`,
    `car-2008-${i + 1}.webp`,
  ]),
];

// Old car-* jpg files to remove after conversion
const OLD_JPGS = [
  "car-opel-principal.jpg","car-opel-tras.jpg","car-opel-bancos-frente.jpg",
  "car-opel-bancos-tras.jpg","car-opel-motor.jpg","car-opel-painel1.jpg",
  "car-opel-volante.jpg","car-opel-teto.jpg","car-opel-chaves-manual.jpg",
  "car-c3-principal.jpg","car-c3-tras.jpg","car-c3-bancos-frente.jpg",
  "car-c3-bancos-tras.jpg","car-c3-motor.jpg","car-c3-volante.jpg","car-c3-teto.jpg",
  "car-2008-principal.jpg","car-2008-tras.jpg","car-2008-tras1.jpg",
  "car-2008-bancos-frente.jpg","car-2008-bancos-tras.jpg",
  "car-2008-painel.jpg","car-2008-teto.jpg",
];

// Source PNGs to remove after conversion
const SOURCE_PNGS = [
  ...Array.from({ length: 10 }, (_, i) => `Corsa-Editada-${i + 1}.png`),
  ...Array.from({ length: 7 }, (_, i) => `C3-Editada-${i + 1}.png`),
  "C3-Editada-9.png","C3-Editada-10.png","C3-8.jpg",
  ...Array.from({ length: 10 }, (_, i) => `2008-Editada-${i + 1}.png`),
];

console.log("🔄 Optimising car photos → WebP ...\n");

let converted = 0;
let errors = 0;

for (const [src, dest] of MAP) {
  const srcPath = join(CARS_DIR, src);
  const destPath = join(CARS_DIR, dest);
  try {
    const info = await sharp(srcPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 4 })
      .toFile(destPath);
    const kb = Math.round(info.size / 1024);
    console.log(`  ✓ ${src.padEnd(28)} → ${dest}  (${kb} KB)`);
    converted++;
  } catch (err) {
    console.error(`  ✗ ${src}: ${err.message}`);
    errors++;
  }
}

console.log(`\n🗑  Removing old source files...`);
for (const f of [...OLD_JPGS, ...SOURCE_PNGS]) {
  try {
    await unlink(join(CARS_DIR, f));
    console.log(`  ✓ Deleted ${f}`);
  } catch {
    // file may not exist — skip silently
  }
}

console.log(`\n✅ Done: ${converted} converted, ${errors} errors.`);
