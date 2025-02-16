'use client'

import Image from 'next/image'

interface BlogImageProps {
  src: string
  alt: string
  className?: string
}

export default function BlogImage({ src, alt, className }: BlogImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      priority
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = '/images/blog/default.webp';
      }}
    />
  )
} 