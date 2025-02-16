import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/lib/blogPosts'
import BlogImage from '@/components/BlogImage'

export default function BlogPage() {
  // تحويل البيانات إلى مصفوفة وترتيبها حسب التاريخ
  const posts = Object.entries(blogPosts)
    .map(([slug, post]) => ({
      slug,
      ...post
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">مدونة نقل العفش</h1>
        <p className="text-xl text-gray-600">نصائح وإرشادات مفيدة لنقل العفش بأمان</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Link 
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <BlogImage
                src={post.imageUrl}
                alt={post.title}
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                {post.category}
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-500">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
                </div>
                <span className="text-primary-600 hover:text-primary-700">
                  اقرأ المزيد ←
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 