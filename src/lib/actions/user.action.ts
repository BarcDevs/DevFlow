'use server'

import {connectDB} from '@lib/db'
import User, {UserDocument} from '@lib/db/user.model'

export async function getUserByClerkId({clerkID}: {
    clerkID: string
}): Promise<UserDocument> {
    await connectDB()

    try {
        const user = await User.findOne({clerkID})
        if (!user)
            throw new Error('User not found')

        return user
    } catch (error) {
        throw new Error(`Error fetching user: ${(error as Error).message}`)
    }
}