import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await request.json()
    const client = await connectToDatabase()
    const db = client.db()

    const review = await db.collection('reviews').findOne({
      _id: new ObjectId(params.id)
    })

    if (!review) {
      return NextResponse.json({ error: 'Review not found' }, { status: 404 })
    }

    const likes = review.likes || []
    const hasLiked = likes.includes(userId)

    await db.collection('reviews').updateOne(
      { _id: new ObjectId(params.id) },
      {
        $set: {
          likes: hasLiked
            ? likes.filter((id: string) => id !== userId)
            : [...likes, userId]
        }
      }
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update like' }, { status: 500 })
  }
} 