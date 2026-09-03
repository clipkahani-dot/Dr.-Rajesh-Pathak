const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const publicDir = path.join(__dirname, '../public/images')

async function optimize() {
  console.log('Optimizing images...')

  // 1. Logo (From 499 KB -> ~10 KB WebP)
  const logoIn = path.join(publicDir, 'logo/main-logo.jpg')
  const logoWebp = path.join(publicDir, 'logo/main-logo.webp')
  const logoSmallJpg = path.join(publicDir, 'logo/main-logo-optimized.jpg')

  if (fs.existsSync(logoIn)) {
    await sharp(logoIn)
      .resize(192, 192, { fit: 'cover' })
      .webp({ quality: 90 })
      .toFile(logoWebp)
    console.log('Created:', logoWebp, fs.statSync(logoWebp).size, 'bytes')

    await sharp(logoIn)
      .resize(192, 192, { fit: 'cover' })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(logoSmallJpg)
    console.log('Created:', logoSmallJpg, fs.statSync(logoSmallJpg).size, 'bytes')
  }

  // 2. Doctor Portrait (Hero LCP Image)
  const docIn = path.join(publicDir, 'doctor/dr-rajesh-pathak-portrait.jpg')
  const docWebp = path.join(publicDir, 'doctor/dr-rajesh-pathak-portrait.webp')
  if (fs.existsSync(docIn)) {
    await sharp(docIn)
      .resize(600, null, { withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(docWebp)
    console.log('Created:', docWebp, fs.statSync(docWebp).size, 'bytes')
  }

  // 3. Poster Banner
  const bannerIn = path.join(publicDir, 'banner/poster-banner.jpg')
  const bannerWebp = path.join(publicDir, 'banner/poster-banner.webp')
  if (fs.existsSync(bannerIn)) {
    await sharp(bannerIn)
      .resize(900, null, { withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(bannerWebp)
    console.log('Created:', bannerWebp, fs.statSync(bannerWebp).size, 'bytes')
  }

  // 4. Vibrant Hospital Building
  const hospIn = path.join(publicDir, 'gallery/vibrant-hospital-building.jpg')
  const hospWebp = path.join(publicDir, 'gallery/vibrant-hospital-building.webp')
  if (fs.existsSync(hospIn)) {
    await sharp(hospIn)
      .resize(800, null, { withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(hospWebp)
    console.log('Created:', hospWebp, fs.statSync(hospWebp).size, 'bytes')
  }

  console.log('Image optimization complete!')
}

optimize().catch(err => {
  console.error(err)
  process.exit(1)
})
