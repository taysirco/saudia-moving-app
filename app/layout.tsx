import React from 'react'
import { Metadata } from 'next'
import { Noto_Kufi_Arabic } from 'next/font/google'
import RootProvider from '@/components/providers/RootProvider'
import './globals.css'
import ChatBot from '@/components/ChatBot'
import { Toaster } from 'react-hot-toast'
import Script from 'next/script'

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
        
        <Script id="statcounter" strategy="afterInteractive">
          {`
            var sc_project=13087897; 
            var sc_invisible=1; 
            var sc_security="5d107ca6"; 
          `}
        </Script>
        <Script 
          src="https://www.statcounter.com/counter/counter.js"
          strategy="afterInteractive"
          async
        />
        <noscript>
          <div className="statcounter">
            <a 
              title="Web Analytics"
              href="https://statcounter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="statcounter"
                src="https://c.statcounter.com/13087897/0/5d107ca6/1/"
                alt="Web Analytics"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>
      </body>
    </html>
  )
} 