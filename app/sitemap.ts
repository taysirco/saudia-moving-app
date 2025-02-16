import { SITE_URL, CITIES, SERVICES, STATIC_PAGES } from '@/lib/constants'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // الصفحات الثابتة
    ...STATIC_PAGES.map((page) => ({
      url: `${SITE_URL}${page.slug ? `/${page.slug}` : ''}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: page.slug === '' ? 1 : 0.8,
    })),

    // صفحات المدن الرئيسية مع شركات النقل
    ...CITIES.map((city) => ({
      url: `${SITE_URL}/${city.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),

    // صفحات المدن بدون moving-companies
    ...CITIES.map((city) => ({
      url: `${SITE_URL}/${city.slug.split('/')[0]}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),

    // صفحات المدن مع الخدمات المختلفة
    ...CITIES.flatMap((city) => {
      const citySlug = city.slug.split('/')[0] // نأخذ اسم المدينة فقط
      return [
        // نقل عفش مع التركيب
        {
          url: `${SITE_URL}/${citySlug}/moving-with-installation`,
          lastModified: new Date().toISOString(),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        },
        // نقل عفش مع التغليف
        {
          url: `${SITE_URL}/${citySlug}/moving-with-packaging`,
          lastModified: new Date().toISOString(),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        },
        // سيارات نقل عفش
        {
          url: `${SITE_URL}/${citySlug}/moving-cars`,
          lastModified: new Date().toISOString(),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        },
        // تخزين اثاث
        {
          url: `${SITE_URL}/${citySlug}/storage`,
          lastModified: new Date().toISOString(),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        }
      ]
    }),

    // روابط إضافية مهمة
    {
      url: `${SITE_URL}/calculator`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }
  ]

  return routes
} 