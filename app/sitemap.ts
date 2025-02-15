import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saudimoving.com'

  // الخدمات الرئيسية في صفحة /services
  const mainServices = [
    // خدمات العمالة
    {
      path: '/filipino-movers',
      name: 'نقل عفش عمالة فلبينية',
      subServices: [
        'professional-filipino-movers',
        'experienced-filipino-workers',
        'trained-filipino-team'
      ]
    },
    {
      path: '/trained-movers',
      name: 'عمالة مدربة لنقل العفش',
      subServices: [
        'professional-movers',
        'expert-movers',
        'certified-movers'
      ]
    },
    
    // خدمات المركبات
    {
      path: '/pickup-moving',
      name: 'دينا نقل عفش',
      subServices: [
        'small-pickup',
        'large-pickup',
        '3ton-pickup'
      ]
    },
    {
      path: '/motorcycle-moving',
      name: 'دباب نقل عفش',
      subServices: [
        'fast-delivery',
        'small-items-moving',
        'urgent-moving'
      ]
    },
    {
      path: '/crane-lifting',
      name: 'ونش رفع عفش',
      subServices: [
        'high-rise-lifting',
        'heavy-furniture-lifting',
        'safe-lifting'
      ]
    },
    
    // خدمات التخزين
    {
      path: '/furniture-storage',
      name: 'تخزين عفش',
      subServices: [
        'short-term-storage',
        'long-term-storage',
        'secure-storage',
        'climate-controlled-storage'
      ]
    }
  ]

  // الخدمات المتوفرة في كل مدينة
  const cityServices = [
    // خدمات النقل الأساسية
    'moving-furniture',              // نقل عفش
    'furniture-moving-company',      // شركة نقل اثاث
    'best-moving-company',          // افضل شركة نقل
    'cheap-moving-company',         // شركة نقل رخيصة
    
    // خدمات النقل المتخصصة
    'house-moving',                 // نقل منازل
    'villa-moving',                 // نقل فلل
    'apartment-moving',             // نقل شقق
    'office-moving',                // نقل مكاتب
    'shop-moving',                  // نقل محلات
    'warehouse-moving',             // نقل مستودعات
    
    // خدمات إضافية
    'moving-with-packaging',        // نقل مع التغليف
    'moving-with-installation',     // نقل مع التركيب
    'moving-with-warranty',         // نقل مع الضمان
    'moving-with-insurance',        // نقل مع التأمين
    'moving-with-storage',          // نقل مع التخزين
    
    // خدمات متخصصة
    'heavy-furniture-moving',       // نقل الأثاث الثقيل
    'delicate-furniture-moving',    // نقل الأثاث الحساس
    'antiques-moving',             // نقل التحف
    'piano-moving',                // نقل البيانو
    'gym-equipment-moving',        // نقل معدات الجيم
    
    // خدمات حسب المسافة
    'local-moving',                // نقل داخل المدينة
    'intercity-moving',            // نقل بين المدن
    'long-distance-moving'         // نقل لمسافات طويلة
  ]

  // المدن الرئيسية والفرعية
  const cities = [
    // المنطقة الوسطى
    {
      slug: 'riyadh',
      name: 'الرياض',
      districts: ['north-riyadh', 'south-riyadh', 'east-riyadh', 'west-riyadh']
    },
    {
      slug: 'qassim',
      name: 'القصيم',
      districts: ['buraidah', 'unaizah', 'ar-rass']
    },
    
    // المنطقة الغربية
    {
      slug: 'jeddah',
      name: 'جدة',
      districts: ['north-jeddah', 'south-jeddah', 'east-jeddah']
    },
    {
      slug: 'makkah',
      name: 'مكة',
      districts: ['aziziyah', 'rusaifah', 'al-awali']
    },
    {
      slug: 'madinah',
      name: 'المدينة',
      districts: ['central-madinah', 'quba', 'uhud']
    },
    {
      slug: 'taif',
      name: 'الطائف',
      districts: ['al-hada', 'ash-shafa', 'al-hawiyah']
    },
    
    // المنطقة الشرقية
    {
      slug: 'dammam',
      name: 'الدمام',
      districts: ['central-dammam', 'al-faisaliyah', 'uhud']
    },
    {
      slug: 'khobar',
      name: 'الخبر',
      districts: ['al-ulaya', 'al-thuqbah', 'al-aqrabiyah']
    },
    {
      slug: 'dhahran',
      name: 'الظهران',
      districts: ['dana', 'al-qusur', 'al-doha']
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
  const cityPages = cities.map(city => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // صفحات الخدمات في كل مدينة
  const cityServicePages = cities.flatMap(city =>
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

  // إضافة صفحات الخدمات الفرعية
  const subServicePages = mainServices.flatMap(service =>
    service.subServices.map(subService => ({
      url: `${baseUrl}/services${service.path}/${subService}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  )

  // إضافة صفحات الأحياء
  const districtPages = cities.flatMap(city =>
    city.districts.map(district => ({
      url: `${baseUrl}/${city.slug}/${district}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  // إضافة lastmod حقيقي لكل صفحة
  const getLastModified = (path: string) => {
    // يمكنك ربط هذا بقاعدة البيانات لتتبع آخر تحديث
    return new Date().toISOString()
  }

  // تحديث الأولويات بشكل أكثر دقة
  const getPriority = (path: string) => {
    if (path === '/') return 1.0
    if (path.startsWith('/services/')) return 0.9
    if (path.match(/^\/[^\/]+$/)) return 0.8 // صفحات المدن
    return 0.7
  }

  return [
    ...staticPages,
    ...servicePages,
    ...subServicePages,
    ...cityPages,
    ...districtPages,
    ...cityServicePages,
    ...apiPages
  ].map(page => ({
    ...page,
    lastModified: getLastModified(page.url),
    priority: getPriority(page.url)
  }))
} 