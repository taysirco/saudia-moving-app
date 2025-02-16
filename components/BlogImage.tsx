'use client'

import Image from 'next/image'
import { TruckIcon } from '@heroicons/react/24/outline'

interface BlogImageProps {
  src: string
  alt: string
  className?: string
}

export default function BlogImage({ src, alt, className }: BlogImageProps) {
  return (
    <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
      <TruckIcon className="w-16 h-16 text-gray-400" />
      <div className="absolute bottom-0 left-0 right-0 bg-gray-200 py-2 px-4 text-center text-gray-600 text-sm">
        الصور قيد الإضافة
      </div>
    </div>
  )
} 