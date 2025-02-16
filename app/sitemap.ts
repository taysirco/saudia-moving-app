import { MetadataRoute } from 'next'
import { cities } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.com'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/services',
    '/calculator',
    '/add-company'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8
  }))

  // City pages
  const cityPages = cities.map(city => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9
  }))

  // Service pages for each city
  const services = [
    'moving-furniture',
    'moving-company',
    'best-moving-company',
    'furniture-moving',
    'cheap-moving-company',
    'moving-companies',
    'moving-prices',
    'moving-with-installation',
    'moving-with-packaging',
    'moving-trucks'
  ]

  const servicePages = cities.flatMap(city =>
    services.map(service => ({
      url: `${baseUrl}/${city.slug}/${service}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7
    }))
  )

  return [...staticPages, ...cityPages, ...servicePages]
} 