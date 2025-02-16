import VideoPlayer from '@/components/VideoPlayer'

export default function JeddahMovingFurniturePage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">
        شركات نقل العفش في جدة 2025 - أسعار وتقييمات حقيقية
      </h1>

      {/* إضافة الفيديو */}
      <VideoPlayer 
        videoId="1057229865" 
        title="افضل شركات نقل عفش بجدة"
      />

      {/* باقي محتوى الصفحة */}
      <p className="mb-4">
        مقارنة شاملة لأفضل شركات نقل العفش في جدة مع ضمان أفضل الأسعار
      </p>
      
      {/* ... باقي المحتوى ... */}
    </div>
  )
} 