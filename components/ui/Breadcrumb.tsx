'use client'

import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

interface BreadcrumbProps {
  items: {
    label: string
    href: string
  }[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex py-4 px-6 bg-white/80 rounded-lg mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 flex-row-reverse">
        {items.map((item, index) => (
          <li key={item.href} className="inline-flex items-center">
            {index !== items.length - 1 && (
              <ChevronLeftIcon className="w-4 h-4 text-gray-400 mx-2" />
            )}
            <Link
              href={item.href}
              className={`inline-flex items-center text-sm ${
                index === 0 
                  ? 'text-blue-600 hover:text-blue-700'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
} 