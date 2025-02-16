export const SITE_URL: string = 'https://www.saudimoving.com'

// تعريف نوع للمدينة يحتوي على slug بالإنجليزية والاسم بالعربية
export type CityInfo = {
  slug: string
  name: string
}

// تعريف المدن الرئيسية مع slugs بالإنجليزية وأسماء عربية
export const CITIES: CityInfo[] = [
  { slug: 'riyadh/moving-companies', name: 'نقل عفش بالرياض' },
  { slug: 'jeddah/moving-companies', name: 'نقل عفش بجدة' },
  { slug: 'mecca/moving-companies', name: 'نقل عفش بمكة' },
  { slug: 'medina/moving-companies', name: 'نقل عفش بالمدينة' },
  { slug: 'dammam/moving-companies', name: 'نقل عفش بالدمام' }
]

// تعريف نوع للخدمة يحتوي على slug بالإنجليزية والاسم بالعربية
export type ServiceInfo = {
  slug: string
  name: string
}

// تعريف الخدمات مع slugs بالإنجليزية وأسماء عربية
export const SERVICES: ServiceInfo[] = [
  { slug: 'moving-companies', name: 'نقل عفش' },
  { slug: 'moving-with-installation', name: 'نقل عفش مع التركيب' },
  { slug: 'moving-with-packaging', name: 'نقل عفش مع التغليف' },
  { slug: 'moving-cars', name: 'سيارات نقل عفش' },
  { slug: 'storage', name: 'تخزين اثاث' }
]

// تعريف نوع للصفحات الثابتة
export type StaticPageInfo = {
  slug: string
  name: string
}

// تعريف الصفحات الثابتة مع slugs بالإنجليزية وأسماء عربية
export const STATIC_PAGES: StaticPageInfo[] = [
  { slug: '', name: 'الرئيسية' },
  { slug: 'about', name: 'من نحن' },
  { slug: 'contact', name: 'اتصل بنا' },
  { slug: 'privacy', name: 'سياسة الخصوصية' },
  { slug: 'terms', name: 'الشروط والأحكام' },
  { slug: 'add-company', name: 'أضف شركتك للدليل' }
] 