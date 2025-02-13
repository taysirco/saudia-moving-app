import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env')
}

console.log('Attempting to connect to MongoDB with URI:', MONGODB_URI)

interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
    console.log('Successfully connected to MongoDB')
  } catch (e) {
    cached.promise = null
    console.error('Error establishing MongoDB connection:', e)
    throw e
  }

  return cached.conn
}

// Add this export to fix the connectDB import error
export { connectToDatabase as connectDB }

declare global {
  var mongoose: MongooseCache | undefined
} 