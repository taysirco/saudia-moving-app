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

// تعريف الخدمات مع العناوين العربية
const SERVICES_AND_KEYWORDS = [
  {
    slug: 'moving-companies',
    title: 'شركات نقل العفش'
  },
  {
    slug: 'furniture-moving',
    title: 'نقل عفش'
  },
  {
    slug: 'moving-company',
    title: 'شركة نقل عفش'
  },
  {
    slug: 'best-moving-company',
    title: 'افضل شركة نقل عفش'
  },
  {
    slug: 'cheap-moving-company',
    title: 'شركة نقل عفش رخيصة'
  },
  {
    slug: 'moving-with-installation',
    title: 'نقل عفش مع التركيب'
  },
  {
    slug: 'moving-with-packaging',
    title: 'نقل عفش مع التغليف'
  },
  {
    slug: 'moving-cars',
    title: 'سيارات نقل عفش'
  },
  {
    slug: 'storage',
    title: 'تخزين عفش'
  },
  {
    slug: 'furniture-storage',
    title: 'تخزين اثاث'
  },
  // إضافة الخدمات الجديدة مع عناوينها العربية
  {
    slug: 'emergency-moving',
    title: 'نقل عفش طوارئ'
  },
  {
    slug: 'hotel-moving',
    title: 'نقل عفش فنادق'
  },
  {
    slug: 'moving-with-guarantee',
    title: 'نقل عفش مع الضمان'
  },
  {
    slug: 'same-day-moving',
    title: 'نقل عفش في نفس اليوم'
  }
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
        url: `${SITE_URL}/${city}/${service.slug}`,
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