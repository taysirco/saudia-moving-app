import { Metadata } from 'next'
import { cities, keywords } from '@/lib/utils/data'
import CityServiceClient from './CityServiceClient'
import { arabicToSlug, getArabicText } from '@/lib/utils/text'

interface Props {
  params: {
    city: string
    service: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, service } = params
  const cityName = getArabicText(city)
  const serviceName = getArabicText(service)

  return {
    title: `${serviceName} ${cityName} - سعودي موفينج`,
    description: `خدمة ${serviceName} في ${cityName} - نقل عفش آمن وسريع مع ضمان سلامة الأثاث`,
    alternates: {
      canonical: `https://your-domain.com/${city}/${service}`
    },
    openGraph: {
      title: `${serviceName} ${cityName}`,
      description: `خدمة ${serviceName} في ${cityName} - نقل عفش آمن وسريع مع ضمان سلامة الأثاث`,
      url: `https://your-domain.com/${city}/${service}`,
      siteName: 'سعودي موفينج',
      locale: 'ar_SA',
      type: 'website'
    }
  }
}

// توليد جميع المسارات الممكنة
export async function generateStaticParams() {
  // قراءة المدن من الملف
  const allCities = cities.map(city => arabicToSlug(city))
  
  // قراءة الخدمات من الملف
  const allServices = keywords.map(service => arabicToSlug(service))
  
  // توليد جميع التركيبات الممكنة
  const paths = []
  for (const city of allCities) {
    for (const service of allServices) {
      paths.push({
        city: city,
        service: service
      })
    }
  }

  return paths
}

export default function CityServicePage({ params }: Props) {
  return <CityServiceClient city={params.city} service={params.service} />
} 