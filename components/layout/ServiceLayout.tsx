'use client'

import { CheckCircleIcon } from '@heroicons/react/24/solid'

interface ServiceLayoutProps {
  title: string
  description: string
  features: string[]
}

export default function ServiceLayout({ title, description, features }: ServiceLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white/90 rounded-lg shadow-xl p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-xl text-gray-600">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 space-x-reverse"
            >
              <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            احصل على عرض سعر
          </button>
        </div>
      </div>
    </div>
  )
} 