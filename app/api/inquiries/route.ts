import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Inquiry } from '@/lib/models/Inquiry'

export async function POST(request: Request) {
  try {
    await connectDB()
    const data = await request.json()
    
    const inquiry = await Inquiry.create({
      ...data,
      metadata: {
        userAgent: request.headers.get('user-agent'),
        ip: request.headers.get('x-forwarded-for'),
        referrer: request.headers.get('referer')
      }
    })

    return NextResponse.json({ success: true, inquiry })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'حدث خطأ في إرسال الطلب' },
      { status: 500 }
    )
  }
} 