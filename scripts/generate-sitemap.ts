const { writeFileSync } = require('fs')
const globby = require('globby')
const prettier = require('prettier')

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc')
  
  // قائمة الصفحات الثابتة
  const pages = [
    '',
    'about',
    'contact',
    'services',
    'cities',
    'blog',
    'terms',
    'privacy',
  ]

  // قائمة المدن
  const cities = [
    'riyadh',
    'jeddah', 
    'dammam',
    'mecca',
    'medina',
    'tabuk',
    'abha',
    'khamis-mushait',
    'taif',
    'yanbu',
    'jubail',
    'khobar',
  ]

  // قائمة الخدمات
  const services = [
    'furniture-moving',
    'office-moving',
    'villa-moving',
    'apartment-moving',
    'storage',
    'packing',
  ]

  const routes = [
    // الصفحات الثابتة
    ...pages.map((page) => ({
      url: `https://saudiamoving.com/${page}`,
      lastModified: new Date().toISOString(),
    })),

    // صفحات المدن
    ...cities.map((city) => ({
      url: `https://saudiamoving.com/cities/${city}`,
      lastModified: new Date().toISOString(),
    })),

    // صفحات الخدمات
    ...services.map((service) => ({
      url: `https://saudiamoving.com/services/${service}`,
      lastModified: new Date().toISOString(),
    })),
  ]

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map((route) => {
          return `
            <url>
              <loc>${route.url}</loc>
              <lastmod>${route.lastModified}</lastmod>
            </url>
          `
        })
        .join('')}
    </urlset>
  `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  writeFileSync('public/sitemap.xml', formatted)
  console.log('Sitemap generated successfully!')
}

generate() 