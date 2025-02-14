import React from 'react'
import { Metadata } from 'next'
import { Noto_Kufi_Arabic } from 'next/font/google'
import RootProvider from '@/components/providers/RootProvider'
import './globals.css'
import ChatBot from '@/components/ChatBot'
import { Toaster } from 'react-hot-toast'

const font = Noto_Kufi_Arabic({ subsets: ['arabic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    template: '%s | سعودي موفينج',
    default: 'سعودي موفينج - خدمات نقل العفش في السعودية'
  },
  description: 'خدمات نقل العفش في جميع مدن المملكة العربية السعودية',
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