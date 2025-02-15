import { MetadataRoute } from 'next'
import { services } from '../lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saudimoving.com'

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
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // صفحات الخدمات
  const servicePages = services.map((service) => ({
    url: `${baseUrl}${service.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // المدن الرئيسية
  const cities = [
    'الرياض',
    'جدة',
    'مكة',
    'المدينة',
    'الدمام',
    'الخبر',
    'تبوك',
    'خميس-مشيط',
    'القصيم'
  ]

  // صفحات المدن
  const cityPages = cities.map(city => ({
    url: `${baseUrl}/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // صفحات الخدمات في كل مدينة
  const cityServicePages = cities.flatMap(city =>
    [
      'نقل-عفش',
      'شركة-نقل-عفش',
      'افضل-شركة-نقل-عفش',
      'نقل-اثاث',
      'شركة-نقل-اثاث',
      'دينا-نقل-عفش',
      'ونش-رفع-اثاث',
      'نقل-عفش-رخيص',
      'نقل-عفش-مع-التركيب',
      'نقل-عفش-مع-الفك-والتركيب'
    ].map(service => ({
      url: `${baseUrl}/${city}/${service}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  // دمج جميع الروابط
  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...cityServicePages
  ]
} 