import { SITE_URL, STATIC_PAGES } from '@/lib/constants'
import { MetadataRoute } from 'next'

// تعريف كل المدن حسب الروابط الفعلية
const ALL_CITIES = [
  // المدن الرئيسية
  'riyadh',
  'jeddah',
  'makkah',
  'dammam',
  'madinah',
  'taif',
  'khobar',
  'tabuk',
  'umluj',
  'buraidah',
  'hofuf',
  'hafer-albatin',
  'hail',
  'jubail',
  'najran',
  'yanbu',
  'sakaka',
  'jazan',
  'arar',
  'qatif',
  'baha',
  'wadi-aldawasir',
  'qunfudhah',
  'khamis-mushait',
  'abha',
  'kharj',
  'unaizah',
  'zulfi',
  'bisha',
  'saihat',
  'rass',
  'qurayyat',
  'ahsa',
  'majmaah',
  'dawadmi',
  'shaqra',
  'rabigh',
  'sabya',
  'laith',
  'baljurashi',
  'wajh',
  'turaif',
  'khafji',
  'aflaj',
  'rafha',
  'shanan',
  'diriyah',
  'tarut',
  'duba',
  'buqayq'
]

// تعريف جميع الخدمات والكلمات المفتاحية
const SERVICES_AND_KEYWORDS = [
  'moving-companies',
  'furniture-moving',
  'moving-company',
  'best-moving-company',
  'cheap-moving-company',
  'moving-with-installation',
  'moving-with-packaging',
  'moving-cars',
  'storage',
  'furniture-storage'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // الصفحات الثابتة
    ...STATIC_PAGES.map((page) => ({
      url: `${SITE_URL}${page.slug ? `/${page.slug}` : ''}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: page.slug === '' ? 1 : 0.8,
    })),

    // صفحات المدن الرئيسية
    ...ALL_CITIES.map((city) => ({
      url: `${SITE_URL}/${city}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),

    // صفحات المدن مع جميع الخدمات والكلمات المفتاحية
    ...ALL_CITIES.flatMap((city) => 
      SERVICES_AND_KEYWORDS.map(service => ({
        url: `${SITE_URL}/${city}/${service}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    ),

    // روابط إضافية مهمة
    {
      url: `${SITE_URL}/calculator`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/add-company`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }
  ]

  return routes
} 