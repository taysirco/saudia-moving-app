export function CityServiceSchema({ city, service }: { city: string, service: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service} في ${city}`,
    "areaServed": {
      "@type": "City",
      "name": city
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Saudi Moving",
      "image": "https://saudimoving.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressCountry": "SA"
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "سعودي موفينج",
    "url": "https://saudimoving.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://saudimoving.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "سعودي موفينج",
    "url": "https://saudimoving.com",
    "logo": "https://saudimoving.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/saudimoving",
      "https://twitter.com/saudimoving"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 