'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { Toaster, toast } from 'react-hot-toast'
import Header from '@/components/layout/Header'
import HomeFooter from '@/components/layout/HomeFooter'

// استيراد المكون بشكل ديناميكي
const AdFormWrapper = dynamic(() => import('@/components/admin/AdFormWrapper'), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded w-1/4"></div>
      <div className="h-32 bg-gray-200 rounded"></div>
      <div className="h-8 bg-gray-200 rounded w-1/2"></div>
    </div>
  )
})

export default function NewAdPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (formData: any) => {
    try {
      setIsSubmitting(true)
      const response = await fetch('/api/ads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to create advertisement')
      }

      toast.success('تم إضافة الإعلان بنجاح')
      router.push('/ads')
    } catch (error) {
      console.error('Error creating ad:', error)
      toast.error('حدث خطأ أثناء إضافة الإعلان')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-right">إضافة إعلان جديد</h1>
          <AdFormWrapper 
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </main>
      <HomeFooter />
    </>
  )
} 