import { Metadata } from 'next'
import { cities } from '@/lib/constants'
import CityServiceClient from './CityServiceClient'
import { arabicToSlug, getArabicText } from '@/lib/utils/text'

interface Props {
  params: {
    city: string
    service: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = cities.find(c => c.slug === params.city)
  const service = city?.services.find(s => s === params.service)

  return {
    title: `${service} في ${city?.name}`,
    description: `خدمة ${service} في ${city?.name} - خدمة احترافية وأسعار مناسبة`,
    alternates: {
      canonical: `https://your-domain.com/${params.city}/${params.service}`
    },
    openGraph: {
      title: `${service} في ${city?.name}`,
      description: `خدمة ${service} في ${city?.name} - خدمة احترافية وأسعار مناسبة`,
      url: `https://your-domain.com/${params.city}/${params.service}`,
      siteName: 'سعودي موفينج',
      locale: 'ar_SA',
      type: 'website'
    }
  }
}

// التحقق من صحة المعلمات
export async function generateStaticParams() {
  const paths = cities.flatMap(city => 
    city.services.map(service => ({
      city: city.slug,
      service: service
    }))
  )
  return paths
}

export default function CityServicePage({ params }: Props) {
  return <CityServiceClient city={params.city} service={params.service} />
} 