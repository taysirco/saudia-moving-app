import { MetadataRoute } from 'next'
import { services } from '../lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saudimoving.com'

  // الصفحات الثابتة الموجودة فعلياً
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // المدن الرئيسية
  const cities = [
    {
      slug: 'riyadh',
      services: [
        'moving-furniture',
        'furniture-transport',
        'best-moving-company',
        'furniture-moving',
        'cheap-moving',
        'moving-companies',
        'moving-prices',
        'moving-with-installation',
        'moving-with-packaging',
        'moving-trucks'
      ]
    },
    {
      slug: 'jeddah',
      services: [
        'moving-furniture',
        'furniture-transport',
        'best-moving-company',
        'furniture-moving',
        'cheap-moving',
        'moving-companies',
        'moving-prices',
        'moving-with-installation',
        'moving-with-packaging',
        'moving-trucks'
      ]
    },
    {
      slug: 'dammam',
      services: [
        'moving-furniture',
        'furniture-transport',
        'best-moving-company',
        'furniture-moving',
        'cheap-moving',
        'moving-companies',
        'moving-prices',
        'moving-with-installation',
        'moving-with-packaging',
        'moving-trucks'
      ]
    }
  ]

  // صفحات المدن
  const cityPages = cities.map(city => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // صفحات الخدمات في المدن
  const cityServicePages = cities.flatMap(city =>
    city.services.map(service => ({
      url: `${baseUrl}/${city.slug}/${service}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  // صفحات الخدمات الرئيسية
  const mainServices = [
    { path: '/filipino-movers', slug: 'filipino-moving-service' },
    { path: '/pickup-moving', slug: 'pickup-moving-service' },
    { path: '/motorcycle-moving', slug: 'motorcycle-moving-service' },
    { path: '/trained-movers', slug: 'trained-moving-service' },
    { path: '/crane-lifting', slug: 'crane-lifting-service' },
    { path: '/furniture-storage', slug: 'furniture-storage-service' }
  ]

  const servicePages = mainServices.map(service => ({
    url: `${baseUrl}/services${service.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [
    ...staticPages,
    ...cityPages,
    ...cityServicePages,
    ...servicePages
  ]
} 