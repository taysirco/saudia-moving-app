import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saudimoving.com'

  // الخدمات الرئيسية في صفحة /services
  const mainServices = [
    {
      path: '/filipino-movers',
      name: 'نقل عفش عمالة فلبينية'
    },
    {
      path: '/pickup-moving',
      name: 'دينا نقل عفش'
    },
    {
      path: '/motorcycle-moving',
      name: 'دباب نقل عفش'
    },
    {
      path: '/trained-movers',
      name: 'عمالة مدربة لنقل العفش'
    },
    {
      path: '/crane-lifting',
      name: 'ونش رفع عفش'
    },
    {
      path: '/furniture-storage',
      name: 'تخزين عفش'
    }
  ]

  // الخدمات المتوفرة في كل مدينة
  const cityServices = [
    'moving-furniture',              // نقل عفش
    'furniture-moving-company',      // شركة نقل اثاث
    'best-moving-company',          // افضل شركة نقل
    'cheap-moving-company',         // شركة نقل رخيصة
    'moving-with-packaging',        // نقل مع التغليف
    'moving-with-installation',     // نقل مع التركيب
    'moving-with-warranty',         // نقل مع الضمان
    'moving-with-insurance',        // نقل مع التأمين
    'house-moving',                 // نقل منازل
    'villa-moving',                 // نقل فلل
    'apartment-moving',             // نقل شقق
    'office-moving'                 // نقل مكاتب
  ]

  // المدن الرئيسية
  const mainCities = [
    {
      slug: 'riyadh',
      name: 'الرياض'
    },
    {
      slug: 'jeddah',
      name: 'جدة'
    },
    {
      slug: 'dammam',
      name: 'الدمام'
    },
    {
      slug: 'makkah',
      name: 'مكة'
    },
    {
      slug: 'madinah',
      name: 'المدينة'
    }
  ]

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
    }
  ]

  // صفحات الخدمات الرئيسية
  const servicePages = mainServices.map(service => ({
    url: `${baseUrl}/services${service.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // صفحات المدن
  const cityPages = mainCities.map(city => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // صفحات الخدمات في كل مدينة
  const cityServicePages = mainCities.flatMap(city =>
    cityServices.map(service => ({
      url: `${baseUrl}/${city.slug}/${service}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  // صفحات API (إذا كنت تريد إضافتها للـ sitemap)
  const apiPages = [
    {
      url: `${baseUrl}/api/ads/search`,
      lastModified: new Date(),
      changeFrequency: 'hourly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/api/ads/stats`,
      lastModified: new Date(),
      changeFrequency: 'hourly' as const,
      priority: 0.6,
    }
  ]

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...cityServicePages,
    ...apiPages
  ].map(page => ({
    ...page,
    lastModified: new Date().toISOString()
  }))
} 