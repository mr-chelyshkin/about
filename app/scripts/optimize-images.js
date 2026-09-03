import { fileURLToPath } from 'url'

import sharp from 'sharp'
import path from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const inputDir = path.join(__dirname, '../src/assets/images-source')
const outputDir = path.join(__dirname, '../public/images')

const sizes = [400, 800, 1200, 1600]
const quality = 90

async function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) { fs.mkdirSync(dirPath, { recursive: true }) }
}

async function optimizeImages() {
  if (!fs.existsSync(inputDir)) {
    console.log(`Dictionary with source images not found, check ${inputDir}`)
    return
  }
  await ensureDirectoryExists(outputDir)

  const files = fs.readdirSync(inputDir)
  const imageFiles = files.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))

  if (imageFiles.length === 0) {
    console.log(`No images found in ${inputDir}`)
    return
  }
  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file)
    const name = path.parse(file).name
    
    console.log(`\noptimizing: ${file}`)
    for (const size of sizes) {
      const outputPath = path.join(outputDir, `${name}-${size}.webp`)
      
      try {
        await sharp(inputPath)
          .resize(size, null, { withoutEnlargement: true, fit: 'inside'})
          .webp({ quality })
          .toFile(outputPath)
        
        const stats = fs.statSync(outputPath)
        const sizeKB = Math.round(stats.size / 1024)
        console.log(` ${name}-${size}.webp (${sizeKB}KB)`)
      } catch (error) {
        console.log(`  Error while optimizing ${name}-${size}.webp:`, error.message)
      }
    }
  }
}

optimizeImages().catch(console.error)