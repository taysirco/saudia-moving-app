import React from 'react'
import { Metadata } from 'next'
import { Noto_Kufi_Arabic } from 'next/font/google'
import RootProvider from '@/components/providers/RootProvider'
import './globals.css'
import ChatBot from '@/components/ChatBot'
import ClientToaster from '@/components/ClientToaster'
import StatCounter from '@/components/StatCounter'

const font = Noto_Kufi_Arabic({ 
  subsets: ['arabic'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saudimoving.com'),
  title: {
    default: 'نقل عفش - خدمات نقل الأثاث في المملكة العربية السعودية',
    template: '%s | نقل عفش'
  },
  description: 'خدمات نقل العفش والأثاث في جميع مدن المملكة العربية السعودية مع أفضل الشركات المرخصة. نقل عفش آمن مع الضمان، فك وتركيب، تغليف احترافي، وخدمة 24 ساعة.',
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    siteName: 'نقل عفش',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'نقل عفش في السعودية'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نقل عفش - خدمات نقل الأثاث في المملكة العربية السعودية',
    description: 'خدمات نقل العفش والأثاث في جميع مدن المملكة العربية السعودية',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '7Q9FsYxtglZcnse9V8wp5qw5qaGPGst7-PJc-gktbow'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={font.className}>
        <RootProvider>
          {children}
          <ChatBot />
          <ClientToaster />
          <StatCounter />
        </RootProvider>
      </body>
    </html>
  )
} 