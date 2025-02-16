import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blogPosts'
import BlogImage from '@/components/BlogImage'

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]
  
  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <Link 
        href="/blog"
        className="text-primary-600 hover:text-primary-700 mb-4 inline-block"
      >
        ← العودة إلى المدونة
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-[400px]">
          <BlogImage
            src={post.imageUrl}
            alt={post.title}
            className="object-cover"
          />
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <span className="text-primary-600">{post.category}</span>
            <h1 className="text-3xl font-bold mt-2 mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-600">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
            </div>
          </div>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </article>
  )
} 