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
    // المدن الكبرى
    {
      slug: 'riyadh',
      name: 'Riyadh',
      services: [
        'moving-furniture-company',
        'furniture-moving-company',
        'best-moving-company',
        'cheap-moving-company',
        'moving-with-disassembly',
        'moving-with-assembly',
        'moving-with-packaging',
        'house-moving-company',
        'office-moving-company',
        'villa-moving-company',
        'apartment-moving-company',
        'furniture-storage-company',
        'crane-lifting-service',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving'
      ]
    },
    {
      slug: 'jeddah',
      name: 'Jeddah',
      services: [
        'moving-furniture-company',
        'furniture-moving-company',
        'best-moving-company',
        'cheap-moving-company',
        'moving-with-disassembly',
        'moving-with-assembly',
        'moving-with-packaging',
        'house-moving-company',
        'office-moving-company',
        'villa-moving-company',
        'apartment-moving-company',
        'furniture-storage-company',
        'crane-lifting-service',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving'
      ]
    },
    {
      slug: 'dammam',
      name: 'Dammam',
      services: [
        'moving-furniture-company',
        'furniture-moving-company',
        'best-moving-company',
        'cheap-moving-company',
        'moving-with-disassembly',
        'moving-with-assembly',
        'moving-with-packaging',
        'house-moving-company',
        'office-moving-company',
        'villa-moving-company',
        'apartment-moving-company',
        'furniture-storage-company',
        'crane-lifting-service',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving'
      ]
    },
    {
      slug: 'makkah',
      name: 'Makkah',
      services: [
        'moving-furniture-company',
        'furniture-moving-company',
        'best-moving-company',
        'cheap-moving-company',
        'moving-with-disassembly',
        'moving-with-assembly',
        'moving-with-packaging',
        'house-moving-company',
        'office-moving-company',
        'villa-moving-company',
        'apartment-moving-company',
        'furniture-storage-company',
        'crane-lifting-service',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving'
      ]
    },
    {
      slug: 'madinah',
      name: 'Madinah',
      services: [
        'moving-furniture-company',
        'furniture-moving-company',
        'best-moving-company',
        'cheap-moving-company',
        'moving-with-disassembly',
        'moving-with-assembly',
        'moving-with-packaging',
        'house-moving-company',
        'office-moving-company',
        'villa-moving-company',
        'apartment-moving-company',
        'furniture-storage-company',
        'crane-lifting-service',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving'
      ]
    },
    // المنطقة الشرقية
    {
      slug: 'khobar',
      name: 'Khobar',
      services: [
        'moving-furniture-company',
        'furniture-moving-company',
        'best-moving-company',
        'cheap-moving-company',
        'moving-with-disassembly',
        'moving-with-assembly',
        'moving-with-packaging',
        'house-moving-company',
        'office-moving-company',
        'villa-moving-company',
        'apartment-moving-company',
        'furniture-storage-company',
        'crane-lifting-service',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving'
      ]
    },
    {
      slug: 'dhahran',
      name: 'Dhahran',
      services: [
        'moving-furniture-company',
        'furniture-moving-company',
        'best-moving-company',
        'cheap-moving-company',
        'moving-with-disassembly',
        'moving-with-assembly',
        'moving-with-packaging',
        'house-moving-company',
        'office-moving-company',
        'villa-moving-company',
        'apartment-moving-company',
        'furniture-storage-company',
        'crane-lifting-service',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving'
      ]
    },
    {
      slug: 'jubail',
      name: 'Jubail',
      services: [
        'moving-furniture-company',
        'furniture-moving-company',
        'best-moving-company',
        'cheap-moving-company',
        'moving-with-disassembly',
        'moving-with-assembly',
        'moving-with-packaging',
        'house-moving-company',
        'office-moving-company',
        'villa-moving-company',
        'apartment-moving-company',
        'furniture-storage-company',
        'crane-lifting-service',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving'
      ]
    },
    {
      slug: 'qatif',
      name: 'Qatif',
      services: [
        'moving-furniture-company',
        'furniture-moving-company',
        'best-moving-company',
        'cheap-moving-company',
        'moving-with-disassembly',
        'moving-with-assembly',
        'moving-with-packaging',
        'house-moving-company',
        'office-moving-company',
        'villa-moving-company',
        'apartment-moving-company',
        'furniture-storage-company',
        'crane-lifting-service',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving'
      ]
    },
    // المنطقة الشمالية
    {
      slug: 'tabuk',
      name: 'Tabuk',
      services: [
        'moving-furniture-company',
        'furniture-moving-company',
        'best-moving-company',
        'cheap-moving-company',
        'moving-with-disassembly',
        'moving-with-assembly',
        'moving-with-packaging',
        'house-moving-company',
        'office-moving-company',
        'villa-moving-company',
        'apartment-moving-company',
        'furniture-storage-company',
        'crane-lifting-service',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving'
      ]
    },
    {
      slug: 'hail',
      name: 'Hail',
      services: [
        'moving-furniture-company',
        'furniture-moving-company',
        'best-moving-company',
        'cheap-moving-company',
        'moving-with-disassembly',
        'moving-with-assembly',
        'moving-with-packaging',
        'house-moving-company',
        'office-moving-company',
        'villa-moving-company',
        'apartment-moving-company',
        'furniture-storage-company',
        'crane-lifting-service',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving'
      ]
    },
    {
      slug: 'arar',
      name: 'Arar',
      services: [
        'moving-furniture-company',
        'furniture-moving-company',
        'best-moving-company',
        'cheap-moving-company',
        'moving-with-disassembly',
        'moving-with-assembly',
        'moving-with-packaging',
        'house-moving-company',
        'office-moving-company',
        'villa-moving-company',
        'apartment-moving-company',
        'furniture-storage-company',
        'crane-lifting-service',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving'
      ]
    },
    // المنطقة الجنوبية
    {
      slug: 'khamis-mushait',
      name: 'Khamis Mushait',
      services: [
        'moving-furniture-company',
        'furniture-moving-company',
        'best-moving-company',
        'cheap-moving-company',
        'moving-with-disassembly',
        'moving-with-assembly',
        'moving-with-packaging',
        'house-moving-company',
        'office-moving-company',
        'villa-moving-company',
        'apartment-moving-company',
        'furniture-storage-company',
        'crane-lifting-service',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving'
      ]
    },
    {
      slug: 'abha',
      name: 'Abha',
      services: [
        'moving-furniture-company',
        'furniture-moving-company',
        'best-moving-company',
        'cheap-moving-company',
        'moving-with-disassembly',
        'moving-with-assembly',
        'moving-with-packaging',
        'house-moving-company',
        'office-moving-company',
        'villa-moving-company',
        'apartment-moving-company',
        'furniture-storage-company',
        'crane-lifting-service',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving'
      ]
    },
    {
      slug: 'najran',
      name: 'Najran',
      services: [
        'moving-furniture-company',
        'furniture-moving-company',
        'best-moving-company',
        'cheap-moving-company',
        'moving-with-disassembly',
        'moving-with-assembly',
        'moving-with-packaging',
        'house-moving-company',
        'office-moving-company',
        'villa-moving-company',
        'apartment-moving-company',
        'furniture-storage-company',
        'crane-lifting-service',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving'
      ]
    },
    {
      slug: 'jizan',
      name: 'Jizan',
      services: [
        'moving-furniture-company',
        'furniture-moving-company',
        'best-moving-company',
        'cheap-moving-company',
        'moving-with-disassembly',
        'moving-with-assembly',
        'moving-with-packaging',
        'house-moving-company',
        'office-moving-company',
        'villa-moving-company',
        'apartment-moving-company',
        'furniture-storage-company',
        'crane-lifting-service',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving'
      ]
    },
    // المنطقة الوسطى
    {
      slug: 'buraidah',
      name: 'Buraidah',
      services: [
        'moving-furniture-company',
        'furniture-moving-company',
        'best-moving-company',
        'cheap-moving-company',
        'moving-with-disassembly',
        'moving-with-assembly',
        'moving-with-packaging',
        'house-moving-company',
        'office-moving-company',
        'villa-moving-company',
        'apartment-moving-company',
        'furniture-storage-company',
        'crane-lifting-service',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving'
      ]
    },
    {
      slug: 'unaizah',
      name: 'Unaizah',
      services: [
        'moving-furniture-company',
        'furniture-moving-company',
        'best-moving-company',
        'cheap-moving-company',
        'moving-with-disassembly',
        'moving-with-assembly',
        'moving-with-packaging',
        'house-moving-company',
        'office-moving-company',
        'villa-moving-company',
        'apartment-moving-company',
        'furniture-storage-company',
        'crane-lifting-service',
        'filipino-movers',
        'pickup-moving',
        'motorcycle-moving'
      ]
    }
  ]

  // قائمة الخدمات الموحدة لكل مدينة
  const standardServices = [
    // خدمات نقل العفش الأساسية
    'moving-furniture-company',
    'furniture-moving-company',
    'best-moving-company',
    'cheap-moving-company',
    
    // خدمات متخصصة
    'house-moving-company',
    'villa-moving-company',
    'apartment-moving-company',
    'office-moving-company',
    
    // خدمات إضافية
    'moving-with-packaging',
    'moving-with-disassembly',
    'moving-with-assembly',
    'moving-with-storage',
    
    // خدمات خاصة
    'furniture-storage-company',
    'crane-lifting-service',
    'filipino-movers',
    'pickup-moving',
    'motorcycle-moving',
    
    // خدمات حسب نوع المنقولات
    'heavy-furniture-moving',
    'delicate-furniture-moving',
    'electronics-moving',
    
    // خدمات حسب المسافة
    'local-moving-company',
    'long-distance-moving',
    'international-moving',
    
    // خدمات حسب الوقت
    'same-day-moving',
    'weekend-moving',
    'night-moving-service'
  ]

  // تحديث خدمات كل مدينة
  cities.forEach(city => {
    city.services = standardServices
  })

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