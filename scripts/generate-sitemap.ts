import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'

const DOMAIN = 'https://www.saudiamoving.com'

async function generateSitemap() {
  try {
    const prettierConfig = await prettier.resolveConfig('./.prettierrc')
    
    // Get all pages except API routes, _* files, and admin pages
    const pages = await globby([
      'app/**/page.tsx',
      '!app/api/**/*',
      '!app/admin/**/*',
      '!app/_*/**/*',
    ])

    // Add static service URLs
    const services = [
      '/services/filipino-movers',
      '/services/pickup-moving',
      '/services/motorcycle-moving',
      '/services/trained-movers',
      '/services/crane-lifting',
      '/services/furniture-storage',
    ]

    const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!-- Pages -->
        ${pages
          .map((page) => {
            const path = page
              .replace('app', '')
              .replace('/page.tsx', '')
              .replace('/index', '')
            const route = path === '' ? '' : path
            
            return `
              <url>
                <loc>${DOMAIN}${route}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>daily</changefreq>
                <priority>${route === '' ? '1.0' : '0.8'}</priority>
              </url>
            `
          })
          .join('')}
          
        <!-- Services -->
        ${services
          .map(
            (service) => `
              <url>
                <loc>${DOMAIN}${service}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.9</priority>
              </url>
            `
          )
          .join('')}
      </urlset>
    `

    const formatted = await prettier.format(sitemap, {
      ...prettierConfig,
      parser: 'html',
    })

    writeFileSync('public/sitemap.xml', formatted)
    console.log('Sitemap generated successfully!')
  } catch (error) {
    console.error('Error generating sitemap:', error)
  }
}

// IIFE to handle async/await
;(async () => {
  await generateSitemap()
})() 