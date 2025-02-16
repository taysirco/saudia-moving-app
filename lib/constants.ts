export const SITE_URL: string = 'https://saudiamoving.com'

// تعريف نوع للمدينة يحتوي على slug بالإنجليزية والاسم بالعربية
export type CityInfo = {
  slug: string
  name: string
}

// تعريف المدن مع slugs بالإنجليزية وأسماء عربية
export const CITIES: CityInfo[] = [
  { slug: 'riyadh', name: 'الرياض' },
  { slug: 'jeddah', name: 'جدة' },
  { slug: 'dammam', name: 'الدمام' },
  { slug: 'mecca', name: 'مكة المكرمة' },
  { slug: 'medina', name: 'المدينة المنورة' },
  { slug: 'tabuk', name: 'تبوك' },
  { slug: 'abha', name: 'أبها' },
  { slug: 'khamis-mushait', name: 'خميس مشيط' },
  { slug: 'taif', name: 'الطائف' },
  { slug: 'yanbu', name: 'ينبع' },
  { slug: 'jubail', name: 'الجبيل' },
  { slug: 'khobar', name: 'الخبر' },
  { slug: 'dhahran', name: 'الظهران' },
  { slug: 'al-ahsa', name: 'الأحساء' },
  { slug: 'qatif', name: 'القطيف' },
  { slug: 'buraidah', name: 'بريدة' },
  { slug: 'najran', name: 'نجران' },
  { slug: 'jizan', name: 'جيزان' },
  { slug: 'hail', name: 'حائل' },
  { slug: 'al-kharj', name: 'الخرج' }
]

// تعريف نوع للخدمة يحتوي على slug بالإنجليزية والاسم بالعربية
export type ServiceInfo = {
  slug: string
  name: string
}

// تعريف الخدمات مع slugs بالإنجليزية وأسماء عربية
export const SERVICES: ServiceInfo[] = [
  { slug: 'furniture-moving', name: 'نقل اثاث' },
  { slug: 'office-moving', name: 'نقل مكاتب' },
  { slug: 'villa-moving', name: 'نقل فلل' },
  { slug: 'apartment-moving', name: 'نقل شقق' },
  { slug: 'storage', name: 'تخزين اثاث' },
  { slug: 'packing', name: 'تغليف اثاث' },
  { slug: 'moving-company', name: 'شركة نقل عفش' },
  { slug: 'best-moving-company', name: 'افضل شركة نقل عفش' },
  { slug: 'cheap-moving-company', name: 'شركة نقل عفش رخيصة' },
  { slug: 'moving-with-installation', name: 'نقل عفش مع التركيب' },
  { slug: 'moving-with-packaging', name: 'نقل عفش مع التغليف' },
  { slug: 'moving-trucks', name: 'سيارات نقل عفش' }
]

// تعريف نوع للصفحات الثابتة
export type StaticPageInfo = {
  slug: string
  name: string
}

// تعريف الصفحات الثابتة مع slugs بالإنجليزية وأسماء عربية
export const STATIC_PAGES: StaticPageInfo[] = [
  { slug: '', name: 'الرئيسية' },
  { slug: 'about', name: 'عن الشركة' },
  { slug: 'contact', name: 'اتصل بنا' },
  { slug: 'services', name: 'خدماتنا' },
  { slug: 'cities', name: 'المدن' },
  { slug: 'blog', name: 'المدونة' },
  { slug: 'terms', name: 'الشروط والأحكام' },
  { slug: 'privacy', name: 'سياسة الخصوصية' }
] 