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

  // إضافة مدن جديدة للقائمة
  const additionalCities = [
    // المنطقة الغربية
    {
      slug: 'taif',
      name: 'Taif',
      services: standardServices
    },
    {
      slug: 'yanbu',
      name: 'Yanbu',
      services: standardServices
    },
    // المنطقة الشرقية
    {
      slug: 'hafar-al-batin',
      name: 'Hafar Al-Batin',
      services: standardServices
    },
    {
      slug: 'al-ahsa',
      name: 'Al-Ahsa',
      services: standardServices
    },
    // المنطقة الوسطى
    {
      slug: 'al-kharj',
      name: 'Al-Kharj',
      services: standardServices
    },
    {
      slug: 'dawadmi',
      name: 'Dawadmi',
      services: standardServices
    },
    // المنطقة الشمالية
    {
      slug: 'sakaka',
      name: 'Sakaka',
      services: standardServices
    },
    {
      slug: 'rafha',
      name: 'Rafha',
      services: standardServices
    },
    // المنطقة الجنوبية
    {
      slug: 'bisha',
      name: 'Bisha',
      services: standardServices
    },
    {
      slug: 'al-baha',
      name: 'Al-Baha',
      services: standardServices
    }
  ]

  // إضافة المدن الجديدة للقائمة الرئيسية
  cities.push(...additionalCities)

  // إضافة خدمات جديدة للقائمة الموحدة
  const additionalServices = [
    // خدمات التخزين
    'temporary-storage',
    'long-term-storage',
    'climate-controlled-storage',
    
    // خدمات متخصصة إضافية
    'piano-moving',
    'art-moving',
    'antiques-moving',
    'gym-equipment-moving',
    
    // خدمات تجارية
    'shop-moving',
    'warehouse-moving',
    'factory-moving',
    'hotel-moving',
    
    // خدمات خاصة إضافية
    'vip-moving-service',
    'emergency-moving',
    'student-moving',
    'senior-moving'
  ]

  // إضافة الخدمات الجديدة للقائمة الموحدة
  standardServices.push(...additionalServices)

  // تحديث خدمات جميع المدن بالقائمة الكاملة
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