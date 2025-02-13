import { NextResponse } from 'next/server'
import { Advertisement } from '@/lib/models/Advertisement'
import { connectToDatabase } from '@/lib/mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'

// إنشاء إعلان جديد
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectToDatabase()
    const data = await request.json()

    // إضافة تواريخ البداية والنهاية بناءً على مدة الباقة
    const startDate = data.startDate ? new Date(data.startDate) : new Date()
    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + data.planDetails.duration)

    const adData = {
      ...data,
      startDate,
      endDate,
      active: true,
      featured: data.planDetails.isFeatured || data.featured,
      views: 0,
      clicks: 0,
      whatsappClicks: 0,
      phoneClicks: 0
    }

    const ad = await Advertisement.create(adData)
    return NextResponse.json(ad)
  } catch (error) {
    console.error('Error creating advertisement:', error)
    return NextResponse.json(
      { error: 'Failed to create advertisement' },
      { status: 500 }
    )
  }
}

// الحصول على قائمة الإعلانات
export async function GET() {
  try {
    await connectToDatabase()
    const ads = await Advertisement.find().sort({ createdAt: -1 })
    return NextResponse.json(ads || [])
  } catch (error) {
    console.error('Error fetching ads:', error)
    return NextResponse.json([], { status: 500 })
  }
} 