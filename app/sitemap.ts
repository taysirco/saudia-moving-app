import { MetadataRoute } from 'next'

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
    }
  ]

  // المدن الرئيسية
  const cities = [
    // المنطقة الوسطى
    { slug: 'riyadh', name: 'الرياض' },
    { slug: 'buraidah', name: 'بريدة' },
    { slug: 'unaizah', name: 'عنيزة' },
    { slug: 'al-kharj', name: 'الخرج' },
    { slug: 'majmaah', name: 'المجمعة' },
    { slug: 'zulfi', name: 'الزلفي' },
    { slug: 'shaqra', name: 'شقراء' },
    { slug: 'dawadmi', name: 'الدوادمي' },
    
    // المنطقة الغربية
    { slug: 'jeddah', name: 'جدة' },
    { slug: 'makkah', name: 'مكة' },
    { slug: 'madinah', name: 'المدينة' },
    { slug: 'taif', name: 'الطائف' },
    { slug: 'yanbu', name: 'ينبع' },
    { slug: 'rabigh', name: 'رابغ' },
    { slug: 'badr', name: 'بدر' },
    { slug: 'thuwal', name: 'ثول' },
    
    // المنطقة الشرقية
    { slug: 'dammam', name: 'الدمام' },
    { slug: 'khobar', name: 'الخبر' },
    { slug: 'dhahran', name: 'الظهران' },
    { slug: 'jubail', name: 'الجبيل' },
    { slug: 'qatif', name: 'القطيف' },
    { slug: 'al-ahsa', name: 'الأحساء' },
    { slug: 'hafar-al-batin', name: 'حفر الباطن' },
    { slug: 'khafji', name: 'الخفجي' },
    
    // المنطقة الشمالية
    { slug: 'tabuk', name: 'تبوك' },
    { slug: 'hail', name: 'حائل' },
    { slug: 'arar', name: 'عرعر' },
    { slug: 'sakaka', name: 'سكاكا' },
    { slug: 'rafha', name: 'رفحاء' },
    { slug: 'turaif', name: 'طريف' },
    
    // المنطقة الجنوبية
    { slug: 'khamis-mushait', name: 'خميس مشيط' },
    { slug: 'abha', name: 'أبها' },
    { slug: 'najran', name: 'نجران' },
    { slug: 'jizan', name: 'جازان' },
    { slug: 'al-baha', name: 'الباحة' },
    { slug: 'bisha', name: 'بيشة' },
    { slug: 'sabya', name: 'صبيا' },
    { slug: 'sharorah', name: 'شرورة' }
  ]

  // الخدمات الرئيسية
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
      name: 'عمالة مدربة'
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
    // خدمات نقل العفش الأساسية
    'moving-furniture',                    // نقل عفش
    'furniture-moving',                    // نقل اثاث
    'furniture-transport',                 // نقل العفش والاثاث
    'moving-company',                      // شركة نقل
    'furniture-moving-company',            // شركة نقل اثاث
    'best-moving-company',                 // افضل شركة نقل
    'cheap-moving-company',                // شركة نقل رخيصة
    'professional-moving-company',         // شركة نقل محترفة
    'licensed-moving-company',             // شركة نقل مرخصة
    
    // خدمات نقل متخصصة
    'house-moving',                        // نقل منازل
    'villa-moving',                        // نقل فلل
    'apartment-moving',                    // نقل شقق
    'office-moving',                       // نقل مكاتب
    'shop-moving',                         // نقل محلات
    'warehouse-moving',                    // نقل مستودعات
    'company-moving',                      // نقل شركات
    'hotel-moving',                        // نقل فنادق
    
    // خدمات إضافية
    'moving-with-packaging',               // نقل مع التغليف
    'moving-with-assembly',                // نقل مع التركيب
    'moving-with-disassembly',            // نقل مع الفك
    'moving-with-storage',                 // نقل مع التخزين
    'moving-with-insurance',               // نقل مع التأمين
    'moving-with-guarantee',               // نقل مع الضمان
    'moving-with-cleaning',                // نقل مع التنظيف
    
    // خدمات حسب نوع الأثاث
    'heavy-furniture-moving',              // نقل الأثاث الثقيل
    'delicate-furniture-moving',           // نقل الأثاث الحساس
    'antiques-moving',                     // نقل التحف
    'electronics-moving',                  // نقل الأجهزة الإلكترونية
    'piano-moving',                        // نقل البيانو
    'gym-equipment-moving',                // نقل معدات الجيم
    'medical-equipment-moving',            // نقل المعدات الطبية
    
    // خدمات حسب المسافة
    'local-moving',                        // نقل داخل المدينة
    'intercity-moving',                    // نقل بين المدن
    'long-distance-moving',                // نقل لمسافات طويلة
    'international-moving',                // نقل دولي
    
    // خدمات حسب الوقت
    'same-day-moving',                     // نقل في نفس اليوم
    'emergency-moving',                    // نقل طارئ
    'weekend-moving',                      // نقل في العطلة
    'night-moving'                         // نقل ليلي
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
    cityServices.map(service => ({
      url: `${baseUrl}/${city.slug}/${service}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  // صفحات الخدمات الرئيسية
  const servicePages = mainServices.map(service => ({
    url: `${baseUrl}/services${service.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // تحديث الأولويات بشكل أكثر دقة
  const getPriority = (path: string) => {
    if (path === '/') return 1.0
    if (path.startsWith('/services/')) return 0.9
    if (path.match(/^\/[^\/]+$/)) return 0.8 // صفحات المدن
    return 0.7
  }

  // تجميع كل الصفحات
  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...cityServicePages
  ].map(page => ({
    ...page,
    lastModified: new Date().toISOString(),
    priority: getPriority(new URL(page.url).pathname)
  }))
} 