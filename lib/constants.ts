export const SITE_URL: string = 'https://saudiamoving.com'

// تعريف نوع للمدينة يحتوي على slug بالإنجليزية والاسم بالعربية
export type CityInfo = {
  slug: string
  name: string
}

// تعريف المدن مع slugs بالإنجليزية وأسماء عربية
export const CITIES: CityInfo[] = [
  // المنطقة الوسطى
  { slug: 'riyadh', name: 'الرياض' },
  { slug: 'al-kharj', name: 'الخرج' },
  { slug: 'majmaah', name: 'المجمعة' },
  { slug: 'zulfi', name: 'الزلفي' },
  { slug: 'dawadmi', name: 'الدوادمي' },
  { slug: 'afif', name: 'عفيف' },
  { slug: 'al-ghat', name: 'الغاط' },
  { slug: 'shaqra', name: 'شقراء' },
  { slug: 'hotat-bani-tamim', name: 'حوطة بني تميم' },
  { slug: 'aflaj', name: 'الأفلاج' },
  { slug: 'wadi-aldawasir', name: 'وادي الدواسر' },

  // المنطقة الشرقية
  { slug: 'dammam', name: 'الدمام' },
  { slug: 'khobar', name: 'الخبر' },
  { slug: 'dhahran', name: 'الظهران' },
  { slug: 'qatif', name: 'القطيف' },
  { slug: 'jubail', name: 'الجبيل' },
  { slug: 'al-ahsa', name: 'الأحساء' },
  { slug: 'hafar-al-batin', name: 'حفر الباطن' },
  { slug: 'khafji', name: 'الخفجي' },
  { slug: 'ras-tanura', name: 'رأس تنورة' },
  { slug: 'abqaiq', name: 'بقيق' },
  { slug: 'nariyah', name: 'النعيرية' },

  // منطقة مكة المكرمة
  { slug: 'mecca', name: 'مكة المكرمة' },
  { slug: 'jeddah', name: 'جدة' },
  { slug: 'taif', name: 'الطائف' },
  { slug: 'rabigh', name: 'رابغ' },
  { slug: 'qunfudah', name: 'القنفذة' },
  { slug: 'lith', name: 'الليث' },
  { slug: 'khulais', name: 'خليص' },
  { slug: 'al-jumum', name: 'الجموم' },
  { slug: 'bahra', name: 'بحرة' },

  // المنطقة الشمالية
  { slug: 'tabuk', name: 'تبوك' },
  { slug: 'arar', name: 'عرعر' },
  { slug: 'sakaka', name: 'سكاكا' },
  { slug: 'rafha', name: 'رفحاء' },
  { slug: 'turaif', name: 'طريف' },
  { slug: 'haql', name: 'حقل' },
  { slug: 'duba', name: 'ضباء' },

  // المنطقة الجنوبية
  { slug: 'abha', name: 'أبها' },
  { slug: 'khamis-mushait', name: 'خميس مشيط' },
  { slug: 'najran', name: 'نجران' },
  { slug: 'jizan', name: 'جيزان' },
  { slug: 'sabya', name: 'صبيا' },
  { slug: 'abu-arish', name: 'أبو عريش' },
  { slug: 'muhayil', name: 'محايل عسير' },
  { slug: 'bisha', name: 'بيشة' },

  // منطقة المدينة المنورة
  { slug: 'medina', name: 'المدينة المنورة' },
  { slug: 'yanbu', name: 'ينبع' },
  { slug: 'al-ula', name: 'العلا' },
  { slug: 'badr', name: 'بدر' },
  { slug: 'khaybar', name: 'خيبر' },
  { slug: 'mahd-adh-dhahab', name: 'مهد الذهب' },

  // منطقة القصيم
  { slug: 'buraidah', name: 'بريدة' },
  { slug: 'unaizah', name: 'عنيزة' },
  { slug: 'ar-rass', name: 'الرس' },
  { slug: 'al-badayea', name: 'البدائع' },
  { slug: 'al-mithnab', name: 'المذنب' },
  { slug: 'bukayriyah', name: 'البكيرية' },

  // منطقة حائل
  { slug: 'hail', name: 'حائل' },
  { slug: 'baqaa', name: 'بقعاء' },
  { slug: 'ghazalah', name: 'الغزالة' },
  { slug: 'ash-shinan', name: 'الشنان' }
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