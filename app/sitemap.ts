import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saudimoving.com'

  // الخدمات القياسية المتوفرة في كل المدن
  const standardServices = [
    // خدمات نقل الأثاث الأساسية
    'moving-furniture',
    'furniture-transport',
    'furniture-moving',
    'home-moving',
    'house-moving',
    'apartment-moving',
    'villa-moving',
    'office-moving',

    // خدمات الشركات
    'moving-company',
    'furniture-moving-company',
    'best-moving-company',
    'cheap-moving-company',
    'professional-moving-company',
    'licensed-moving-company',

    // خدمات متخصصة
    'moving-with-packaging',
    'moving-with-assembly',
    'moving-with-disassembly',
    'moving-with-storage',
    'moving-with-insurance',
    
    // خدمات النقل الخاصة
    'filipino-movers',
    'trained-movers',
    'professional-movers',
    'expert-movers',
    
    // خدمات المركبات
    'pickup-moving',
    'motorcycle-moving',
    'truck-moving',
    'crane-lifting',
    
    // خدمات التخزين
    'furniture-storage',
    'temporary-storage',
    'long-term-storage',
    'secure-storage',
    
    // خدمات إضافية
    'packaging-service',
    'assembly-service',
    'disassembly-service',
    'cleaning-service'
  ]

  // المدن حسب المناطق
  const cities = {
    // المنطقة الوسطى
    central: [
      'riyadh',          // الرياض
      'buraidah',        // بريدة
      'unaizah',         // عنيزة
      'al-kharj',        // الخرج
      'majmaah',         // المجمعة
      'zulfi',           // الزلفي
      'dawadmi',         // الدوادمي
      'afif',            // عفيف
      'al-ghat',         // الغاط
      'shaqra',          // شقراء
    ],
    
    // المنطقة الغربية
    western: [
      'jeddah',          // جدة
      'makkah',          // مكة
      'madinah',         // المدينة
      'taif',            // الطائف
      'yanbu',           // ينبع
      'rabigh',          // رابغ
      'badr',            // بدر
      'thuwal',          // ثول
    ],
    
    // المنطقة الشرقية
    eastern: [
      'dammam',          // الدمام
      'khobar',          // الخبر
      'dhahran',         // الظهران
      'qatif',           // القطيف
      'jubail',          // الجبيل
      'hafar-al-batin',  // حفر الباطن
      'al-ahsa',         // الأحساء
      'khafji',          // الخفجي
    ],
    
    // المنطقة الشمالية
    northern: [
      'tabuk',           // تبوك
      'arar',            // عرعر
      'sakaka',          // سكاكا
      'hail',            // حائل
      'rafha',           // رفحاء
      'turaif',          // طريف
    ],
    
    // المنطقة الجنوبية
    southern: [
      'khamis-mushait',  // خميس مشيط
      'abha',            // أبها
      'najran',          // نجران
      'jizan',           // جازان
      'al-baha',         // الباحة
      'bisha',           // بيشة
      'sabya',           // صبيا
      'sharorah'         // شرورة
    ]
  }

  // تحويل المدن إلى مصفوفة واحدة
  const allCities = Object.values(cities).flat()

  // إنشاء صفحات المدن
  const cityPages = allCities.map(city => ({
    url: `${baseUrl}/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // إنشاء صفحات الخدمات لكل مدينة
  const cityServicePages = allCities.flatMap(city =>
    standardServices.map(service => ({
      url: `${baseUrl}/${city}/${service}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

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
    }
  ]

  return [
    ...staticPages,
    ...cityPages,
    ...cityServicePages
  ]
} 