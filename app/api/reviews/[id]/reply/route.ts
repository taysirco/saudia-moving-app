import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const client = await connectToDatabase()
    const db = client.db()

    const reply = {
      _id: new ObjectId(),
      ...body,
      createdAt: new Date().toISOString()
    }

    await db.collection('reviews').updateOne(
      { _id: new ObjectId(params.id) },
      { $push: { replies: reply } }
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add reply' }, { status: 500 })
  }
} 