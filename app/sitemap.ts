import { SITE_URL, CITIES, SERVICES, STATIC_PAGES } from '@/lib/constants'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // الصفحات الثابتة
    ...STATIC_PAGES.map((page) => ({
      url: `${SITE_URL}${page ? `/${page}` : ''}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: page === '' ? 1 : 0.8,
    })),

    // صفحات المدن
    ...CITIES.map((city) => ({
      url: `${SITE_URL}/cities/${city}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),

    // صفحات الخدمات
    ...SERVICES.map((service) => ({
      url: `${SITE_URL}/services/${service}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),

    // صفحات الخدمات في المدن
    ...CITIES.flatMap((city) =>
      SERVICES.map((service) => ({
        url: `${SITE_URL}/cities/${city}/${service}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    ),
  ]

  return routes
} 