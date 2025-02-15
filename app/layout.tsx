import React from 'react'
import { Metadata } from 'next'
import { Noto_Kufi_Arabic } from 'next/font/google'
import RootProvider from '@/components/providers/RootProvider'
import './globals.css'
import ChatBot from '@/components/ChatBot'
import { Toaster } from 'react-hot-toast'

const font = Noto_Kufi_Arabic({ subsets: ['arabic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://saudimoving.com'),
  title: {
    default: 'نقل عفش - خدمات نقل الأثاث في السعودية | سعودي موفينج',
    template: '%s | سعودي موفينج'
  },
  description: 'شركة نقل عفش متخصصة في المملكة العربية السعودية. نقدم خدمات نقل الأثاث مع الضمان في جميع مدن المملكة بأسعار تنافسية',
  keywords: ['نقل عفش', 'نقل اثاث', 'شركة نقل عفش', 'نقل عفش رخيص', 'افضل شركة نقل عفش'],
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
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    siteName: 'نقل عفش'
  },
  verification: {
    google: '7Q9FsYxtglZcnse9V8wp5qw5qaGPGst7-PJc-gktbow',
  },
  alternates: {
    canonical: 'https://saudimoving.com',
    languages: {
      'ar-SA': 'https://saudimoving.com'
    }
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
        <meta 
          name="google-site-verification" 
          content="7Q9FsYxtglZcnse9V8wp5qw5qaGPGst7-PJc-gktbow" 
        />
      </head>
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