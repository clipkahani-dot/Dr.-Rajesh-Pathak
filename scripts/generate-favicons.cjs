const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const sourceLogo = path.join(__dirname, '../public/images/logo/main-logo.jpg')
const publicDir = path.join(__dirname, '../public')

function createIcoFromPngs(pngBuffers) {
  // pngBuffers: array of { width, height, buffer }
  const count = pngBuffers.length
  const headerSize = 6 + count * 16
  let offset = headerSize

  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // Reserved
  header.writeUInt16LE(1, 2) // Type: 1 = ICO
  header.writeUInt16LE(count, 4) // Number of images

  const entries = []
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0)
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1)
    entry.writeUInt8(0, 2) // Color count (0 = no palette)
    entry.writeUInt8(0, 3) // Reserved
    entry.writeUInt16LE(1, 4) // Color planes
    entry.writeUInt16LE(32, 6) // Bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8) // Image size in bytes
    entry.writeUInt32LE(offset, 12) // Image data offset

    entries.push(entry)
    offset += item.buffer.length
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(p => p.buffer)])
}

async function generateFavicons() {
  console.log('Generating proper Google-compliant favicons from main-logo.jpg...')

  if (!fs.existsSync(sourceLogo)) {
    throw new Error('Source logo not found at ' + sourceLogo)
  }

  // 1. Generate 16, 32, 48 PNG buffers for true ICO
  const p16 = await sharp(sourceLogo).resize(16, 16, { fit: 'cover' }).png().toBuffer()
  const p32 = await sharp(sourceLogo).resize(32, 32, { fit: 'cover' }).png().toBuffer()
  const p48 = await sharp(sourceLogo).resize(48, 48, { fit: 'cover' }).png().toBuffer()

  // Build true .ico containing 16x16, 32x32, 48x48
  const icoBuffer = createIcoFromPngs([
    { width: 16, height: 16, buffer: p16 },
    { width: 32, height: 32, buffer: p32 },
    { width: 48, height: 48, buffer: p48 }
  ])
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer)
  console.log('Created true favicon.ico:', icoBuffer.length, 'bytes')

  // 2. Google Search Recommended 48x48 Favicon PNG
  const p48Path = path.join(publicDir, 'favicon-48x48.png')
  await sharp(sourceLogo).resize(48, 48, { fit: 'cover' }).png().toFile(p48Path)
  console.log('Created favicon-48x48.png:', fs.statSync(p48Path).size, 'bytes')

  // 3. Standard favicon.png (96x96)
  const p96Path = path.join(publicDir, 'favicon.png')
  await sharp(sourceLogo).resize(96, 96, { fit: 'cover' }).png().toFile(p96Path)
  console.log('Created favicon.png (96x96):', fs.statSync(p96Path).size, 'bytes')

  // 4. Apple Touch Icon (180x180)
  const applePath = path.join(publicDir, 'apple-touch-icon.png')
  await sharp(sourceLogo).resize(180, 180, { fit: 'cover' }).png().toFile(applePath)
  console.log('Created apple-touch-icon.png:', fs.statSync(applePath).size, 'bytes')

  // 5. Android Chrome Icons (192x192 and 512x512)
  const chrome192 = path.join(publicDir, 'android-chrome-192x192.png')
  await sharp(sourceLogo).resize(192, 192, { fit: 'cover' }).png().toFile(chrome192)
  console.log('Created android-chrome-192x192.png:', fs.statSync(chrome192).size, 'bytes')

  const chrome512 = path.join(publicDir, 'android-chrome-512x512.png')
  await sharp(sourceLogo).resize(512, 512, { fit: 'cover' }).png().toFile(chrome512)
  console.log('Created android-chrome-512x512.png:', fs.statSync(chrome512).size, 'bytes')

  console.log('All favicons successfully generated!')
}

generateFavicons().catch(err => {
  console.error(err)
  process.exit(1)
})
