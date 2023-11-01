import mongoose from 'mongoose'

let isConnected = false

export const connectDB = async () => {
    mongoose.set('strictQuery', true)
    console.log('⏳ Connecting to MongoDB...')

    if (!process.env.MONGODB_URI)
        return console.error('⚠️ MongoDB URI is not defined')

    if (isConnected)
        return

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'dev-flow'
        })
        isConnected = true
        console.log('✅ MongoDB connected')
    } catch (error) {
        console.error('⚠️ Failed to connect to MongoDB', error)
    }
}