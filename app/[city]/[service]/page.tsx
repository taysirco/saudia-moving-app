import { Metadata } from 'next'
import { cities as citiesFromConstants } from '@/lib/constants'
import CityServiceClient from './CityServiceClient'
import { arabicToSlug, getArabicText } from '@/lib/utils/text'

interface Props {
  params: {
    city: string
    service: string
  }
}

// Define main services first
const mainServices = {
  'filipino-movers': 'عمالة فلبينية - نقل عفش احترافي بأيدي خبيرة | سعودي موفينج',
  'pickup-moving': 'ونيت نقل عفش - خدمة نقل سريعة وآمنة | سعودي موفينج',
  'motorcycle-moving': 'نقل دراجات نارية - خدمة نقل متخصصة للدراجات | سعودي موفينج',
  'trained-movers': 'عمالة مدربة - فنيين محترفين لنقل العفش | سعودي موفينج',
  'crane-lifting': 'ونش رفع اثاث - خدمة رفع الأثاث للأدوار العليا | سعودي موفينج',
  'furniture-storage': 'تخزين عفش - مستودعات آمنة ومؤمنة | سعودي موفينج'
}

// Consolidate all city services into one object
const citiesServices = {
  'riyadh': {
    base: 'نقل عفش في الرياض - خدمات نقل متكاملة | سعودي موفينج',
    services: {
      'moving-furniture': 'نقل عفش في الرياض - خدمة نقل منزلي شاملة',
      'furniture-moving': 'نقل اثاث في الرياض - خدمة نقل متكاملة',
      'furniture-transport': 'شركة نقل عفش في الرياض - خدمة نقل متكاملة',
      'moving-company': 'شركة نقل اثاث في الرياض - خدمة متميزة مع الضمان',
      'furniture-moving-company': 'افضل شركة نقل عفش في الرياض - خبرة وكفاءة',
      'best-moving-company': 'شركة نقل عفش موثوقة في الرياض - جودة عالية',
      'cheap-moving-company': 'شركة نقل عفش رخيصة في الرياض - اسعار مناسبة',
      'professional-moving-company': 'شركة نقل اثاث محترفة في الرياض - خدمة متميزة',
      'licensed-moving-company': 'شركة نقل عفش مرخصة في الرياض - ضمان وموثوقية',
      'moving-with-packaging': 'نقل عفش مع التغليف في الرياض - خدمة تغليف وحماية الأثاث',
      'moving-with-assembly': 'نقل عفش مع التركيب في الرياض - فك وتركيب الأثاث احترافياً',
      'moving-with-disassembly': 'نقل عفش مع الفك في الرياض - خدمة فك الأثاث بأيدي متخصصة',
      'moving-with-storage': 'نقل عفش مع التخزين في الرياض - تخزين آمن في مستودعات مؤمنة',
      'moving-with-insurance': 'نقل عفش مع التأمين في الرياض - خدمة نقل مؤمنة ضد المخاطر',
      'moving-with-guarantee': 'نقل عفش مع الضمان في الرياض - خدمة نقل مضمونة بالكامل',
      'moving-with-cleaning': 'نقل عفش مع التنظيف في الرياض - خدمة تنظيف شاملة مع النقل',
      'heavy-furniture-moving': 'نقل الأثاث الثقيل في الرياض - خدمة متخصصة للقطع الثقيلة',
      'delicate-furniture-moving': 'نقل الأثاث الحساس في الرياض - عناية خاصة بالقطع الثمينة',
      'antiques-moving': 'نقل التحف في الرياض - خبرة في نقل القطع النادرة والانتيكات',
      'electronics-moving': 'نقل الأجهزة الإلكترونية في الرياض - نقل آمن للأجهزة الحساسة',
      'piano-moving': 'نقل البيانو في الرياض - خدمة متخصصة في نقل آلات البيانو',
      'gym-equipment-moving': 'نقل معدات الجيم في الرياض - خبرة في نقل الأجهزة الرياضية',
      'medical-equipment-moving': 'نقل المعدات الطبية في الرياض - نقل احترافي للأجهزة الطبية',
      'local-moving': 'نقل محلي في الرياض - خدمة نقل داخل المدينة بأفضل الأسعار',
      'intercity-moving': 'نقل بين المدن من الرياض - خدمة نقل آمنة لجميع مدن المملكة',
      'long-distance-moving': 'نقل لمسافات طويلة من الرياض - خدمة نقل للمسافات البعيدة',
      'international-moving': 'نقل دولي من الرياض - خدمة شحن دولي لجميع دول العالم',
      'same-day-moving': 'نقل في نفس اليوم بعنيزة - خدمة نقل سريعة وفورية',
      'emergency-moving': 'نقل طارئ في الرياض - خدمة نقل عاجلة على مدار الساعة',
      'weekend-moving': 'نقل في العطلة بعنيزة - خدمة نقل متوفرة في أيام الإجازات',
      'night-moving': 'نقل ليلي في الرياض - خدمة نقل متوفرة في الفترة المسائية'
    }
  },
  'jeddah': {
    base: 'نقل عفش في جدة - خدمات نقل متكاملة | سعودي موفينج',
    services: {
      'moving-furniture': 'نقل عفش في جدة - خدمة نقل منزلي شاملة',
      'furniture-moving': 'نقل اثاث في جدة - خدمة نقل متكاملة',
      'furniture-transport': 'شركة نقل عفش في جدة - خدمة نقل متكاملة',
      'moving-company': 'شركة نقل اثاث في جدة - خدمة متميزة مع الضمان',
      'furniture-moving-company': 'افضل شركة نقل عفش في جدة - خبرة وكفاءة',
      'best-moving-company': 'شركة نقل عفش موثوقة في جدة - جودة عالية',
      'cheap-moving-company': 'شركة نقل عفش رخيصة في جدة - اسعار تنافسية',
      'professional-moving-company': 'شركة نقل اثاث محترفة في جدة - خدمة متميزة',
      'licensed-moving-company': 'شركة نقل عفش مرخصة في جدة - ضمان وموثوقية',
      'moving-with-packaging': 'نقل عفش مع التغليف في جدة - خدمة تغليف وحماية الأثاث',
      'moving-with-assembly': 'نقل عفش مع التركيب في جدة - فك وتركيب الأثاث احترافياً',
      'moving-with-disassembly': 'نقل عفش مع الفك في جدة - خدمة فك الأثاث بأيدي متخصصة',
      'moving-with-storage': 'نقل عفش مع التخزين في جدة - تخزين آمن في مستودعات مؤمنة',
      'moving-with-insurance': 'نقل عفش مع التأمين في جدة - خدمة نقل مؤمنة ضد المخاطر',
      'moving-with-guarantee': 'نقل عفش مع الضمان في جدة - خدمة نقل مضمونة بالكامل',
      'moving-with-cleaning': 'نقل عفش مع التنظيف في جدة - خدمة تنظيف شاملة مع النقل',
      'heavy-furniture-moving': 'نقل الأثاث الثقيل في جدة - خدمة متخصصة للقطع الثقيلة',
      'delicate-furniture-moving': 'نقل الأثاث الحساس في جدة - عناية خاصة بالقطع الثمينة',
      'antiques-moving': 'نقل التحف في جدة - خبرة في نقل القطع النادرة والانتيكات',
      'electronics-moving': 'نقل الأجهزة الإلكترونية في جدة - نقل آمن للأجهزة الحساسة',
      'piano-moving': 'نقل البيانو في جدة - خدمة متخصصة في نقل آلات البيانو',
      'gym-equipment-moving': 'نقل معدات الجيم في جدة - خبرة في نقل الأجهزة الرياضية',
      'medical-equipment-moving': 'نقل المعدات الطبية في جدة - نقل احترافي للأجهزة الطبية',
      'local-moving': 'نقل محلي في جدة - خدمة نقل داخل المدينة بأفضل الأسعار',
      'intercity-moving': 'نقل بين المدن من جدة - خدمة نقل آمنة لجميع مدن المملكة',
      'long-distance-moving': 'نقل لمسافات طويلة من جدة - خدمة نقل للمسافات البعيدة',
      'international-moving': 'نقل دولي من جدة - خدمة شحن دولي لجميع دول العالم',
      'same-day-moving': 'نقل في نفس اليوم بعنيزة - خدمة نقل سريعة وفورية',
      'emergency-moving': 'نقل طارئ في جدة - خدمة نقل عاجلة على مدار الساعة',
      'weekend-moving': 'نقل في العطلة بعنيزة - خدمة نقل متوفرة في أيام الإجازات',
      'night-moving': 'نقل ليلي في جدة - خدمة نقل متوفرة في الفترة المسائية'
    }
  },
  'jazan': {
    base: 'نقل عفش في جازان - خدمات نقل متكاملة | سعودي موفينج',
    services: {
      'moving-furniture': 'نقل عفش في جازان - خدمة نقل منزلي شاملة',
      'furniture-moving': 'نقل اثاث في جازان - خدمة نقل متكاملة',
      'furniture-transport': 'شركة نقل عفش في جازان - خدمة نقل متكاملة',
      'moving-company': 'شركة نقل اثاث في جازان - خدمة متميزة مع الضمان',
      'furniture-moving-company': 'افضل شركة نقل عفش في جازان - خبرة وكفاءة',
      'best-moving-company': 'شركة نقل عفش موثوقة في جازان - جودة عالية وأسعار منافسة',
      'cheap-moving-company': 'شركة نقل عفش رخيصة في جازان - اسعار تنافسية مع جودة الخدمة',
      'professional-moving-company': 'شركة نقل اثاث محترفة في جازان - خدمة متميزة وعمالة مدربة',
      'licensed-moving-company': 'شركة نقل عفش مرخصة في جازان - ضمان وموثوقية في النقل',
      'moving-with-packaging': 'نقل عفش مع التغليف في جازان - خدمة تغليف وحماية الأثاث',
      'moving-with-assembly': 'نقل عفش مع التركيب في جازان - فك وتركيب الأثاث احترافياً',
      'moving-with-disassembly': 'نقل عفش مع الفك في جازان - خدمة فك الأثاث بأيدي متخصصة',
      'moving-with-storage': 'نقل عفش مع التخزين في جازان - تخزين آمن في مستودعات مؤمنة',
      'moving-with-insurance': 'نقل عفش مع التأمين في جازان - خدمة نقل مؤمنة ضد المخاطر',
      'moving-with-guarantee': 'نقل عفش مع الضمان في جازان - خدمة نقل مضمونة بالكامل',
      'moving-with-cleaning': 'نقل عفش مع التنظيف في جازان - خدمة تنظيف شاملة مع النقل',
      'heavy-furniture-moving': 'نقل الأثاث الثقيل في جازان - خدمة متخصصة للقطع الثقيلة',
      'delicate-furniture-moving': 'نقل الأثاث الحساس في جازان - عناية خاصة بالقطع الثمينة',
      'antiques-moving': 'نقل التحف في جازان - خبرة في نقل القطع النادرة والانتيكات',
      'electronics-moving': 'نقل الأجهزة الإلكترونية في جازان - نقل آمن للأجهزة الحساسة',
      'piano-moving': 'نقل البيانو في جازان - خدمة متخصصة في نقل آلات البيانو',
      'gym-equipment-moving': 'نقل معدات الجيم في جازان - خبرة في نقل الأجهزة الرياضية',
      'medical-equipment-moving': 'نقل المعدات الطبية في جازان - نقل احترافي للأجهزة الطبية',
      'local-moving': 'نقل محلي في جازان - خدمة نقل داخل المدينة بأفضل الأسعار',
      'intercity-moving': 'نقل بين المدن من جازان - خدمة نقل آمنة لجميع مدن المملكة',
      'long-distance-moving': 'نقل لمسافات طويلة من جازان - خدمة نقل للمسافات البعيدة',
      'international-moving': 'نقل دولي من جازان - خدمة شحن دولي لجميع دول العالم',
      'same-day-moving': 'نقل في نفس اليوم بعنيزة - خدمة نقل سريعة وفورية',
      'emergency-moving': 'نقل طارئ في جازان - خدمة نقل عاجلة على مدار الساعة',
      'weekend-moving': 'نقل في العطلة بعنيزة - خدمة نقل متوفرة في أيام الإجازات',
      'night-moving': 'نقل ليلي في جازان - خدمة نقل متوفرة في الفترة المسائية'
    }
  }
  // ... continue with other cities
}

// Define specialized services
const specializedServices = {
  // ... keep existing specialized services
}

// Define city mappings
const cityMappings = {
  // ... keep existing city mappings
}

// Combine all services for page titles
const pageTitles = {
  ...mainServices,
  ...citiesServices,
  // Remove duplicate service definitions and only include unique ones
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, service } = params
  const cityName = cityMappings[city as keyof typeof cityMappings] || city
  
  // التحقق من نوع الصفحة
  if (mainServices[service as keyof typeof mainServices]) {
    return {
      title: mainServices[service as keyof typeof mainServices],
      description: `خدمة ${service} - خدمة نقل عفش احترافية مع الضمان. نقدم أفضل خدمات نقل الأثاث في جميع مدن المملكة.`,
      alternates: {
        canonical: `https://saudimoving.com/services/${service}`
      },
      openGraph: {
        title: mainServices[service as keyof typeof mainServices],
        description: `خدمة ${service} - خدمة نقل عفش احترافية مع الضمان. نقدم أفضل خدمات نقل الأثاث في جميع مدن المملكة.`,
        url: `https://saudimoving.com/services/${service}`,
        siteName: 'سعودي موفينج',
        locale: 'ar_SA',
        type: 'website'
      }
    }
  }

  // باقي المنطق للمدن والخدمات
  const cityTitle = pageTitles[city as keyof typeof pageTitles]?.base || `نقل عفش في ${city}`
  const serviceTitle = pageTitles[city as keyof typeof pageTitles]?.services?.[service] || specializedServices[service as keyof typeof specializedServices]
  
  const title = serviceTitle ? 
    `${serviceTitle} في ${cityName}` : 
    `${specializedServices[service as keyof typeof specializedServices]} - ${cityTitle}`

  const description = `خدمات ${service} في ${cityName} - نقل عفش احترافي مع الضمان وبأسعار مناسبة. فك وتركيب ونقل جميع أنواع الأثاث والمفروشات مع عمالة مدربة ومتخصصة.`

  return {
    title,
    description,
    alternates: {
      canonical: `https://saudimoving.com/${city}/${service}`
    },
    openGraph: {
      title,
      description,
      url: `https://saudimoving.com/${city}/${service}`,
      siteName: 'سعودي موفينج',
      locale: 'ar_SA',
      type: 'website'
    }
  }
}

export default function CityServicePage({ params }: Props) {
  const { city, service } = params
  const cityName = cityMappings[city as keyof typeof cityMappings] || city
  const serviceTitle = getServiceTitle(service, cityName)
  
  return (
    <div>
      <h1>{serviceTitle}</h1>
      <CityServiceClient city={city} service={service} />
    </div>
  )
}

// دالة مساعدة للحصول على العنوان العربي الصحيح
function getServiceTitle(service: string, cityName: string): string {
  const serviceMap: { [key: string]: string } = {
    'moving-furniture': 'نقل عفش',
    'furniture-moving': 'نقل اثاث',
    'furniture-transport': 'شركة نقل عفش',
    'moving-company': 'شركة نقل اثاث',
    'furniture-moving-company': 'افضل شركة نقل عفش',
    'best-moving-company': 'شركة نقل عفش موثوقة',
    'cheap-moving-company': 'شركة نقل عفش رخيصة',
    'professional-moving-company': 'شركة نقل اثاث محترفة',
    'licensed-moving-company': 'شركة نقل عفش مرخصة',
    'moving-with-packaging': 'نقل عفش مع التغليف',
    'moving-with-assembly': 'نقل عفش مع التركيب',
    'moving-with-disassembly': 'نقل عفش مع الفك',
    // ... إضافة المزيد من الخدمات
  }

  return `${serviceMap[service] || service} في ${cityName}`
}

// ... rest of the code ... 