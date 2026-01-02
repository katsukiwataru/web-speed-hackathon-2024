import fs from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';

const IMAGES_DIR = new URL('../seeds/images', import.meta.url).pathname;

const convertFile = async (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  const baseName = path.basename(filePath, ext);
  const outputPath = path.join(IMAGES_DIR, `${baseName}.webp`);

  try {
    const webpBuffer = await sharp(filePath).webp({ quality: 80 }).toBuffer();
    await fs.writeFile(outputPath, webpBuffer);
    await fs.unlink(filePath);
    console.log(`Converted: ${path.basename(filePath)} -> ${baseName}.webp`);
  } catch (err) {
    console.error(`Failed: ${path.basename(filePath)} - ${err.message}`);
  }
};

const main = async () => {
  const files = await fs.readdir(IMAGES_DIR);
  const imageFiles = files.filter((f) => /\.(jpg|jpeg|png|gif|bmp|tiff)$/i.test(f));

  console.log(`Found ${imageFiles.length} images to convert`);

  for (const file of imageFiles) {
    await convertFile(path.join(IMAGES_DIR, file));
  }

  console.log('Done!');
};

main().catch(console.error);
