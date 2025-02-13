import { cities, keywords } from '@/lib/utils/data'
import { arabicToSlug } from '@/lib/utils/text'

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourwebsite.com'

  // الصفحات الثابتة
  const staticPages = [
    '',
    '/services',
    '/contact',
    '/about',
    '/privacy-policy',
    '/terms'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: route === '' ? 1 : 0.8
  }))

  // صفحات المدن
  const cityPages = cities.map(city => ({
    url: `${baseUrl}/${arabicToSlug(city)}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.8
  }))

  // صفحات الخدمات في كل مدينة
  const servicePages = cities.flatMap(city => 
    keywords.map(service => ({
      url: `${baseUrl}/${arabicToSlug(city)}/${arabicToSlug(service)}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.8
    }))
  )

  return [...staticPages, ...cityPages, ...servicePages]
} 