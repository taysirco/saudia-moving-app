export default function StructuredData({ city, service }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'سعودي موفينج',
    description: `خدمة ${service} في ${city}`,
    url: `https://your-domain.com/${city}/${service}`,
    areaServed: {
      '@type': 'City',
      name: city
    },
    serviceType: service,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressRegion: city
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 