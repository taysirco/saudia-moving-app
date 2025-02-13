import { NextResponse } from 'next/server'
import { Advertisement } from '@/lib/models/Advertisement'
import { connectToDatabase } from '@/lib/mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = params
    await connectToDatabase()

    const advertisement = await Advertisement.findByIdAndDelete(id)

    if (!advertisement) {
      return NextResponse.json(
        { error: 'Advertisement not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ message: 'Advertisement deleted successfully' })
  } catch (error) {
    console.error('Error deleting advertisement:', error)
    return NextResponse.json(
      { error: 'Failed to delete advertisement' },
      { status: 500 }
    )
  }
}

// تحديث الإعلان
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = params
    const data = await request.json()

    await connectToDatabase()

    const advertisement = await Advertisement.findByIdAndUpdate(
      id,
      { ...data },
      { new: true }
    ).populate('cities')

    if (!advertisement) {
      return NextResponse.json(
        { error: 'Advertisement not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(advertisement)
  } catch (error) {
    console.error('Error updating advertisement:', error)
    return NextResponse.json(
      { error: 'Failed to update advertisement' },
      { status: 500 }
    )
  }
} 