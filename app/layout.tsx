import React from 'react'
import { Metadata } from 'next'
import { Noto_Kufi_Arabic } from 'next/font/google'
import RootProvider from '@/components/providers/RootProvider'
import './globals.css'
import dynamic from 'next/dynamic'

// تحميل المكونات بشكل متأخر
const ChatBot = dynamic(() => import('@/components/ChatBot'), {
  loading: () => null,
  ssr: false
})

const StatCounter = dynamic(() => import('@/components/StatCounter'), {
  ssr: false
})

const Toaster = dynamic(() => import('react-hot-toast').then(mod => mod.Toaster), {
  ssr: false
})

// تحسين تحميل الخط
const font = Noto_Kufi_Arabic({ 
  subsets: ['arabic'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://saudiamoving.com'),
  title: {
    default: 'نقل عفش - خدمات نقل الأثاث في المملكة العربية السعودية',
    template: '%s | نقل عفش'
  },
  description: 'خدمات نقل العفش والأثاث في جميع مدن المملكة العربية السعودية مع أفضل الشركات المرخصة',
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    siteName: 'نقل عفش'
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="7Q9FsYxtglZcnse9V8wp5qw5qaGPGst7-PJc-gktbow" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.statcounter.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.statcounter.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={font.className}>
        <RootProvider>
          {children}
          <ChatBot />
          <Toaster position="top-center" />
          <StatCounter />
        </RootProvider>
      </body>
    </html>
  )
} 