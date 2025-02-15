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
    
    // المنطقة الجنوبية
    { slug: 'khamis-mushait', name: 'خميس مشيط' },
    { slug: 'abha', name: 'أبها' },
    { slug: 'najran', name: 'نجران' },
    { slug: 'jizan', name: 'جازان' }
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
    // خدمات نقل العفش
    'moving-furniture',
    'furniture-moving',
    'furniture-transport',
    'moving-company',
    'furniture-moving-company',
    'best-moving-company',
    'cheap-moving-company',
    'professional-moving-company',
    'licensed-moving-company',
    
    // خدمات متخصصة
    'house-moving',
    'villa-moving',
    'apartment-moving',
    'office-moving',
    'shop-moving',
    'warehouse-moving',
    
    // خدمات إضافية
    'moving-with-packaging',
    'moving-with-assembly',
    'moving-with-disassembly',
    'moving-with-storage',
    'moving-with-insurance',
    'moving-with-guarantee',
    
    // خدمات حسب نوع الأثاث
    'heavy-furniture-moving',
    'delicate-furniture-moving',
    'antiques-moving',
    'electronics-moving',
    
    // خدمات حسب المسافة
    'local-moving',
    'intercity-moving',
    'long-distance-moving'
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