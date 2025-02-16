export const SITE_URL: string = 'https://www.saudimoving.com'

// تعريف نوع للمدينة يحتوي على slug بالإنجليزية والاسم بالعربية
export type CityInfo = {
  slug: string
  name: string
}

// تعريف المدن الرئيسية مع slugs بالإنجليزية وأسماء عربية
export const CITIES: CityInfo[] = [
  { slug: 'moving-furniture-riyadh', name: 'نقل عفش بالرياض' },
  { slug: 'moving-furniture-jeddah', name: 'نقل عفش بجدة' },
  { slug: 'moving-furniture-mecca', name: 'نقل عفش بمكة' },
  { slug: 'moving-furniture-medina', name: 'نقل عفش بالمدينة' },
  { slug: 'moving-furniture-dammam', name: 'نقل عفش بالدمام' }
]

// تعريف نوع للخدمة يحتوي على slug بالإنجليزية والاسم بالعربية
export type ServiceInfo = {
  slug: string
  name: string
}

// تعريف الخدمات مع slugs بالإنجليزية وأسماء عربية
export const SERVICES: ServiceInfo[] = [
  { slug: 'moving-furniture', name: 'نقل عفش' },
  { slug: 'moving-furniture-with-installation', name: 'نقل عفش مع التركيب' },
  { slug: 'moving-furniture-with-packaging', name: 'نقل عفش مع التغليف' },
  { slug: 'moving-furniture-cars', name: 'سيارات نقل عفش' },
  { slug: 'furniture-storage', name: 'تخزين اثاث' }
]

// تعريف نوع للصفحات الثابتة
export type StaticPageInfo = {
  slug: string
  name: string
}

// تعريف الصفحات الثابتة مع slugs بالإنجليزية وأسماء عربية
export const STATIC_PAGES: StaticPageInfo[] = [
  { slug: '', name: 'الرئيسية' },
  { slug: 'about-us', name: 'من نحن' },
  { slug: 'contact-us', name: 'اتصل بنا' },
  { slug: 'privacy-policy', name: 'سياسة الخصوصية' },
  { slug: 'terms-and-conditions', name: 'الشروط والأحكام' },
  { slug: 'add-company', name: 'أضف شركتك للدليل' }
] 