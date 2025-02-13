import { NextResponse } from 'next/server'
import { cities, keywords } from '@/lib/utils/data'
import { SITE_CONFIG } from '@/lib/utils/constants'

if (!process.env.DEEPSEEK_API_KEY) {
  throw new Error('Missing DEEPSEEK_API_KEY environment variable')
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'الرجاء إدخال رسالة' },
        { status: 400 }
      )
    }

    const chatContext = `
      أنت مساعد ودود متخصص في خدمات نقل العفش في المملكة العربية السعودية.
      اسمك "نقيل" وأنت تساعد العملاء في:
      - اختيار شركات نقل العفش المناسبة
      - تقديم نصائح حول نقل الأثاث
      - الإجابة عن الأسئلة المتعلقة بالخدمات والأسعار
      
      المدن المتوفرة: ${cities.join('، ')}
      الخدمات المتوفرة: ${keywords.join('، ')}
      ساعات العمل: ${SITE_CONFIG.workingHours}
    `.trim()

    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { 
            role: 'system', 
            content: chatContext 
          },
          { 
            role: 'user', 
            content: message 
          }
        ],
        temperature: 0.7,
        max_tokens: 800
      })
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('API Response Error:', errorData)
      throw new Error(`API request failed with status ${response.status}`)
    }

    const data = await response.json()
    const botResponse = data.choices?.[0]?.message?.content

    if (!botResponse) {
      throw new Error('No response received from assistant')
    }

    return NextResponse.json({
      reply: botResponse,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Chat error:', error)
    
    let errorMessage = 'حدث خطأ في المحادثة، يرجى المحاولة مرة أخرى'
    let statusCode = 500

    if (error instanceof Error) {
      console.error('Error details:', error.message)
      
      if (error.message.includes('401')) {
        errorMessage = 'خطأ في المصادقة مع المساعد'
        statusCode = 401
      } else if (error.message.includes('429')) {
        errorMessage = 'تم تجاوز حد الطلبات، يرجى المحاولة لاحقاً'
        statusCode = 429
      }
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: statusCode }
    )
  }
} 