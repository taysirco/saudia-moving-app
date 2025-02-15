import { MetadataRoute } from 'next'
import { services } from '../lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saudimoving.com'

  // الصفحات الثابتة
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
      url: `${baseUrl}/calculator`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ads/search`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ads/stats`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    }
  ]

  // المدن الرئيسية وخدماتها
  const cities = [
    {
      slug: 'riyadh',
      name: 'Riyadh',
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
        'moving-trucks',
        'furniture-storage',
        'crane-lifting',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving',
        'trained-movers'
      ]
    },
    {
      slug: 'jeddah',
      name: 'Jeddah',
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
        'moving-trucks',
        'furniture-storage',
        'crane-lifting',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving',
        'trained-movers'
      ]
    },
    {
      slug: 'dammam',
      name: 'Dammam',
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
        'moving-trucks',
        'furniture-storage',
        'crane-lifting',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving',
        'trained-movers'
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

  // الخدمات الرئيسية
  const mainServices = [
    { path: '/filipino-movers', slug: 'filipino-moving-service' },
    { path: '/pickup-moving', slug: 'pickup-moving-service' },
    { path: '/motorcycle-moving', slug: 'motorcycle-moving-service' },
    { path: '/trained-movers', slug: 'trained-moving-service' },
    { path: '/crane-lifting', slug: 'crane-lifting-service' },
    { path: '/furniture-storage', slug: 'furniture-storage-service' }
  ]

  // صفحات الخدمات الرئيسية
  const servicePages = mainServices.map(service => ({
    url: `${baseUrl}/services${service.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // API صفحات
  const apiPages = [
    {
      url: `${baseUrl}/api/ads/search`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/api/ads/stats`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.6,
    }
  ]

  return [
    ...staticPages,
    ...cityPages,
    ...cityServicePages,
    ...servicePages,
    ...apiPages
  ]
} 