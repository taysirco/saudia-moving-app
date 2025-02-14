import { services } from '../../../lib/constants'
import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN || 'https://www.saudimoving.com'
  
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}${service.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  return NextResponse.json([...routes, ...serviceRoutes])
} 