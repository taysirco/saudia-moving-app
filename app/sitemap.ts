import { MetadataRoute } from 'next'
import { services } from '../lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saudimoving.com'

  // الصفحات الثابتة الموجودة فعلياً
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

  // صفحات الخدمات الرئيسية
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services${service.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // المدن الرئيسية مع الخدمات المتوفرة فقط
  const mainCities = [
    'الرياض',
    'جدة',
    'الدمام'
  ]

  // صفحات المدن الرئيسية فقط
  const cityPages = mainCities.map(city => ({
    url: `${baseUrl}/city/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // الخدمات المتوفرة فعلياً
  const availableServices = [
    'نقل-عفش',
    'شركة-نقل-عفش',
    'نقل-اثاث'
  ]

  // صفحات الخدمات في المدن المتوفرة فقط
  const cityServicePages = mainCities.flatMap(city =>
    availableServices.map(service => ({
      url: `${baseUrl}/city/${city}/${service}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...cityServicePages
  ]
} 