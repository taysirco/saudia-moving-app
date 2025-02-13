import React from 'react'
import { Metadata } from 'next'
import { Noto_Kufi_Arabic } from 'next/font/google'
import RootProvider from '@/components/providers/RootProvider'
import './globals.css'
import ChatBot from '@/components/ChatBot'
import { Toaster } from 'react-hot-toast'

const font = Noto_Kufi_Arabic({ subsets: ['arabic'] })

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
      <body className={font.className}>
        <RootProvider>
          {children}
          <ChatBot />
          <Toaster position="top-center" />
        </RootProvider>
      </body>
    </html>
  )
} 