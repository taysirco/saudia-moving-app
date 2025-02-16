import { SITE_URL, CITIES, SERVICES, STATIC_PAGES, type City, type Service, type StaticPage } from '@/lib/constants'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // الصفحات الثابتة
    ...STATIC_PAGES.map((page: StaticPage) => ({
      url: `${SITE_URL}${page ? `/${page}` : ''}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: page === '' ? 1 : 0.8,
    })),

    // صفحات المدن
    ...CITIES.map((city: City) => ({
      url: `${SITE_URL}/${city}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),

    // صفحات الخدمات
    ...SERVICES.map((service: Service) => ({
      url: `${SITE_URL}/services/${service}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),

    // صفحات الخدمات في المدن
    ...CITIES.flatMap((city: City) =>
      SERVICES.map((service: Service) => ({
        url: `${SITE_URL}/${city}/${service}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    ),
  ]

  return routes
} 