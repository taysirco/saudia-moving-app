'use client'

import dynamic from 'next/dynamic'
import HomeFooter from '@/components/layout/HomeFooter'

const HomeHeader = dynamic(() => import('@/components/layout/HomeHeader'), {
  ssr: false
})
const QuickSearch = dynamic(() => import('@/components/features/QuickSearch'), {
  ssr: false
})
const PopularCities = dynamic(() => import('@/components/features/PopularCities'), {
  ssr: false
})
const HowItWorks = dynamic(() => import('@/components/features/HowItWorks'), {
  ssr: false
})

const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          src="https://player.vimeo.com/video/1024947840?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&background=1&muted=1"
          className="w-full h-full object-cover"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          title="background video"
        />
      </div>
      <div className="absolute inset-0 bg-black/40" /> {/* Reduced overlay opacity */}
    </div>
  );
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Add a container with white background for better readability */}
      <div className="relative z-10">
        <BackgroundVideo />
        <HomeHeader />
        <div className="bg-white/90 rounded-lg shadow-lg mx-auto max-w-7xl my-8 p-6">
          <QuickSearch />
        </div>
        <PopularCities cities={[]} />
        <div className="bg-white/90 rounded-lg shadow-lg mx-auto max-w-7xl my-8 p-6">
          <h2 className="text-3xl font-bold text-center mb-2">كيف نعمل؟</h2>
          <p className="text-gray-600 text-center mb-8">خطوات بسيطة للحصول على خدمة نقل عفش احترافية</p>
          <HowItWorks />
        </div>
        <HomeFooter />
      </div>
    </main>
  )
}