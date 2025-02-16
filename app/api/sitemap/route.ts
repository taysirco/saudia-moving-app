import { NextResponse } from 'next/server'
import { cities } from '@/lib/constants'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.com'

  const services = [
    'moving-furniture',
    'moving-company',
    // ... other services
  ]

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  // Add static pages
  const staticPages = ['', '/about', '/contact', '/privacy', '/terms']
  staticPages.forEach(page => {
    xml += `
      <url>
        <loc>${baseUrl}${page}</loc>
        <changefreq>daily</changefreq>
        <priority>${page === '' ? '1.0' : '0.8'}</priority>
      </url>`
  })

  // Add city pages
  cities.forEach(city => {
    xml += `
      <url>
        <loc>${baseUrl}/${city.slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>`

    // Add service pages for each city
    services.forEach(service => {
      xml += `
        <url>
          <loc>${baseUrl}/${city.slug}/${service}</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>`
    })
  })

  xml += `</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
} 