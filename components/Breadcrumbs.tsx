'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const convertToArabic = (slug: string): string => {
  const slugToArabic: { [key: string]: string } = {
    // المدن
    'riyadh': 'الرياض',
    'jeddah': 'جدة',
    'makkah': 'مكة المكرمة',
    'dammam': 'الدمام',
    'madinah': 'المدينة المنورة',
    'taif': 'الطائف',
    'khobar': 'الخبر',
    'tabuk': 'تبوك',
    // ... باقي المدن

    // الخدمات
    'moving-companies': 'شركات نقل العفش',
    'furniture-moving': 'نقل عفش',
    'moving-company': 'شركة نقل عفش',
    'best-moving-company': 'افضل شركة نقل عفش',
    'cheap-moving-company': 'شركة نقل عفش رخيصة',
    'moving-with-installation': 'نقل عفش مع التركيب',
    'moving-with-packaging': 'نقل عفش مع التغليف',
    'moving-cars': 'سيارات نقل عفش',
    'storage': 'تخزين عفش',
    'furniture-storage': 'تخزين اثاث',
    'emergency-moving': 'نقل عفش طوارئ',
    'hotel-moving': 'نقل عفش فنادق',
    'moving-with-guarantee': 'نقل عفش مع الضمان',
    'same-day-moving': 'نقل عفش في نفس اليوم',

    // الصفحات الثابتة
    'about': 'من نحن',
    'contact': 'اتصل بنا',
    'privacy': 'سياسة الخصوصية',
    'terms': 'الشروط والأحكام',
    'add-company': 'أضف شركتك للدليل',
    'calculator': 'حاسبة نقل العفش',
    'blog': 'المدونة'
  }

  return slugToArabic[slug] || slug
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(path => path)

  if (paths.length === 0) return null

  return (
    <nav className="bg-gray-100 py-2 px-4 mb-4 rounded-md">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        <li>
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800"
          >
            الرئيسية
          </Link>
        </li>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join('/')}`
          const isLast = index === paths.length - 1

          return (
            <li key={path} className="flex items-center gap-2">
              <span className="text-gray-500">/</span>
              {isLast ? (
                <span className="text-gray-700">
                  {convertToArabic(path)}
                </span>
              ) : (
                <Link 
                  href={href}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {convertToArabic(path)}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
} 