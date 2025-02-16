import { SITE_URL, STATIC_PAGES } from '@/lib/constants'
import { MetadataRoute } from 'next'

// تعريف كل المدن
const ALL_CITIES = [
  // المنطقة الوسطى
  'riyadh', 'al-kharj', 'majmaah', 'zulfi', 'dawadmi', 'afif', 'al-ghat', 'shaqra', 
  'hotat-bani-tamim', 'aflaj', 'wadi-aldawasir',

  // المنطقة الشرقية
  'dammam', 'khobar', 'dhahran', 'qatif', 'jubail', 'al-ahsa', 'hafar-al-batin',
  'khafji', 'ras-tanura', 'abqaiq', 'nariyah',

  // منطقة مكة المكرمة
  'mecca', 'jeddah', 'taif', 'rabigh', 'qunfudah', 'lith', 'khulais', 'al-jumum', 'bahra',

  // المنطقة الشمالية
  'tabuk', 'arar', 'sakaka', 'rafha', 'turaif', 'haql', 'duba',

  // المنطقة الجنوبية
  'abha', 'khamis-mushait', 'najran', 'jizan', 'sabya', 'abu-arish', 'muhayil', 'bisha',

  // منطقة المدينة المنورة
  'medina', 'yanbu', 'al-ula', 'badr', 'khaybar', 'mahd-adh-dhahab',

  // منطقة القصيم
  'buraidah', 'unaizah', 'ar-rass', 'al-badayea', 'al-mithnab', 'bukayriyah',

  // منطقة حائل
  'hail', 'baqaa', 'ghazalah', 'ash-shinan'
]

// تعريف الخدمات المتاحة لكل مدينة
const CITY_SERVICES = [
  'moving-companies',
  'moving-with-installation',
  'moving-with-packaging',
  'moving-cars',
  'storage'
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

    // صفحات المدن مع شركات النقل
    ...ALL_CITIES.map((city) => ({
      url: `${SITE_URL}/${city}/moving-companies`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),

    // صفحات المدن مع الخدمات المختلفة
    ...ALL_CITIES.flatMap((city) => 
      CITY_SERVICES.filter(service => service !== 'moving-companies').map(service => ({
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
    }
  ]

  return routes
} 