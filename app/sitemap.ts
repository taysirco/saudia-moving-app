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
    { slug: 'riyadh', name: 'Riyadh' },
    { slug: 'jeddah', name: 'Jeddah' },
    { slug: 'dammam', name: 'Dammam' },
    { slug: 'makkah', name: 'Makkah' },
    { slug: 'madinah', name: 'Madinah' },
    { slug: 'khobar', name: 'Khobar' },
    { slug: 'tabuk', name: 'Tabuk' },
    { slug: 'khamis-mushait', name: 'Khamis Mushait' },
    { slug: 'abha', name: 'Abha' },
    { slug: 'qassim', name: 'Qassim' },
    { slug: 'jubail', name: 'Jubail' },
    { slug: 'taif', name: 'Taif' },
    { slug: 'yanbu', name: 'Yanbu' },
    { slug: 'hafar-al-batin', name: 'Hafar Al-Batin' },
    { slug: 'najran', name: 'Najran' }
  ]

  // الخدمات المتوفرة في كل مدينة
  const cityServices = [
    'moving-furniture-company', // شركة نقل عفش
    'furniture-moving-company', // شركة نقل اثاث
    'best-moving-company', // افضل شركة نقل
    'cheap-moving-company', // شركة نقل رخيصة
    'moving-with-disassembly', // نقل مع الفك
    'moving-with-assembly', // نقل مع التركيب
    'moving-with-packaging', // نقل مع التغليف
    'house-moving-company', // شركة نقل منازل
    'office-moving-company', // شركة نقل مكاتب
    'villa-moving-company', // شركة نقل فلل
    'apartment-moving-company', // شركة نقل شقق
    'furniture-storage-company', // شركة تخزين اثاث
    'crane-lifting-service', // خدمة ونش رفع
    'filipino-movers', // عمالة فلبينية
    'pickup-moving', // دينا نقل
    'motorcycle-moving', // دباب نقل
    'moving-to-riyadh', // نقل عفش إلى الرياض
    'moving-to-jeddah', // نقل عفش إلى جدة
    'moving-to-dammam', // نقل عفش إلى الدمام
    'moving-prices', // اسعار نقل العفش
    'moving-companies-offers', // عروض شركات النقل
    'professional-moving-service', // خدمة نقل احترافية
    'safe-moving-service', // خدمة نقل آمنة
    'fast-moving-service', // خدمة نقل سريعة
    'moving-insurance-service' // خدمة تأمين النقل
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