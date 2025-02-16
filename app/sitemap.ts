import { MetadataRoute } from 'next'
import { cityMappings, specializedServices, mainServices } from './[city]/[service]/page'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saudimoving.com'
  const sitemap: MetadataRoute.Sitemap = []
  const currentDate = new Date()

  // إضافة الصفحة الرئيسية
  sitemap.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 1,
  })

  // إضافة الصفحات الثابتة
  const staticPages = [
    'about',
    'contact',
    'services',
    'blog',
    'privacy-policy',
    'terms-of-service'
  ]

  staticPages.forEach(page => {
    sitemap.push({
      url: `${baseUrl}/${page}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })

  // إضافة صفحات الخدمات الرئيسية
  Object.keys(mainServices).forEach((service) => {
    sitemap.push({
      url: `${baseUrl}/services/${service}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    })
  })

  // إضافة صفحات المدن مع الخدمات
  Object.keys(cityMappings).forEach((city) => {
    // إضافة صفحة المدينة الرئيسية
    sitemap.push({
      url: `${baseUrl}/${city}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    })

    // إضافة صفحات الخدمات الرئيسية لكل مدينة
    Object.keys(mainServices).forEach((service) => {
      sitemap.push({
        url: `${baseUrl}/${city}/${service}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    })

    // إضافة صفحات الخدمات المتخصصة لكل مدينة
    Object.keys(specializedServices).forEach((service) => {
      sitemap.push({
        url: `${baseUrl}/${city}/${service}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  })

  return sitemap
} 