import mongoose from 'mongoose'

let isConnected = false

export const connectDB = async () => {
    mongoose.set('strictQuery', true)
    console.log('> Connecting to MongoDB...')

    if (!process.env.MONGODB_URI)
        throw new Error('⚠ Error: MongoDB URI is not defined')

    if (isConnected)
        return console.log('✓ Connected to MongoDB')

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'dev-flow'
        })
        isConnected = true
        return console.log('✓ MongoDB connected')
    } catch (error) {
        throw new Error(`⚠ Failed to connect to MongoDB: ${(error as Error).message}`)
    }
}