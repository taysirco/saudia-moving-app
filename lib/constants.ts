export const SITE_URL: string = 'https://saudiamoving.com'

export type City =
  | 'riyadh' | 'الرياض'
  | 'jeddah' | 'جدة'
  | 'dammam' | 'الدمام'
  | 'mecca' | 'مكة'
  | 'medina' | 'المدينة'
  | 'tabuk' | 'تبوك'
  | 'abha' | 'ابها'
  | 'khamis-mushait' | 'خميس-مشيط'
  | 'taif' | 'الطائف'
  | 'yanbu' | 'ينبع'
  | 'jubail' | 'الجبيل'
  | 'khobar' | 'الخبر'
  | 'dhahran' | 'الظهران'
  | 'al-ahsa' | 'الاحساء'
  | 'qatif' | 'القطيف'
  | 'buraidah' | 'بريدة'
  | 'najran' | 'نجران'
  | 'jizan' | 'جيزان'
  | 'hail' | 'حائل'
  | 'al-kharj' | 'الخرج'

export const CITIES: City[] = [
  'riyadh', 'الرياض',
  'jeddah', 'جدة',
  'dammam', 'الدمام',
  'mecca', 'مكة',
  'medina', 'المدينة',
  'tabuk', 'تبوك',
  'abha', 'ابها',
  'khamis-mushait', 'خميس-مشيط',
  'taif', 'الطائف',
  'yanbu', 'ينبع',
  'jubail', 'الجبيل',
  'khobar', 'الخبر',
  'dhahran', 'الظهران',
  'al-ahsa', 'الاحساء',
  'qatif', 'القطيف',
  'buraidah', 'بريدة',
  'najran', 'نجران',
  'jizan', 'جيزان',
  'hail', 'حائل',
  'al-kharj', 'الخرج'
]

export type Service =
  | 'furniture-moving' | 'نقل-اثاث'
  | 'office-moving' | 'نقل-مكاتب'
  | 'villa-moving' | 'نقل-فلل'
  | 'apartment-moving' | 'نقل-شقق'
  | 'storage' | 'تخزين-اثاث'
  | 'packing' | 'تغليف-اثاث'
  | 'moving-company' | 'شركة-نقل-عفش'
  | 'best-moving-company' | 'افضل-شركة-نقل-عفش'
  | 'cheap-moving-company' | 'شركة-نقل-عفش-رخيصة'
  | 'moving-with-installation' | 'نقل-عفش-مع-التركيب'
  | 'moving-with-packaging' | 'نقل-عفش-مع-التغليف'
  | 'moving-trucks' | 'سيارات-نقل-عفش'

export const SERVICES: Service[] = [
  'furniture-moving', 'نقل-اثاث',
  'office-moving', 'نقل-مكاتب',
  'villa-moving', 'نقل-فلل',
  'apartment-moving', 'نقل-شقق',
  'storage', 'تخزين-اثاث',
  'packing', 'تغليف-اثاث',
  'moving-company', 'شركة-نقل-عفش',
  'best-moving-company', 'افضل-شركة-نقل-عفش',
  'cheap-moving-company', 'شركة-نقل-عفش-رخيصة',
  'moving-with-installation', 'نقل-عفش-مع-التركيب',
  'moving-with-packaging', 'نقل-عفش-مع-التغليف',
  'moving-trucks', 'سيارات-نقل-عفش'
]

export type StaticPage =
  | ''
  | 'about' | 'عن-الشركة'
  | 'contact' | 'اتصل-بنا'
  | 'services' | 'خدماتنا'
  | 'cities' | 'المدن'
  | 'blog' | 'المدونة'
  | 'terms' | 'الشروط'
  | 'privacy' | 'الخصوصية'

export const STATIC_PAGES: StaticPage[] = [
  '',
  'about', 'عن-الشركة',
  'contact', 'اتصل-بنا',
  'services', 'خدماتنا',
  'cities', 'المدن',
  'blog', 'المدونة',
  'terms', 'الشروط',
  'privacy', 'الخصوصية'
] 