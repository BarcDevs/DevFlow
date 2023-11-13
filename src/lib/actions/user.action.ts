'use server'

import {connectDB} from '@lib/db'
import User, {UserDocument} from '@lib/db/user.model'
import {CreateUserParams, DeleteUserParams, UpdateUserParams} from '@lib/actions/shared.types'
import {revalidatePath} from 'next/cache'
import Question from '@lib/db/question.model'

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

export async function createUser({userData}: CreateUserParams): Promise<UserDocument> {
    try {
        await connectDB()

        return await User.create(userData)
    } catch (error) {
        throw new Error(`Error creating user: ${(error as Error).message}`)
    }
}

export async function updateUser({clerkID, updateData, path}: UpdateUserParams): Promise<UserDocument> {
    try {
        await connectDB()

        const user = await User.findOneAndUpdate(
            {clerkID},
            updateData,
            {new: true}
        )

        revalidatePath(path)
        return user
    } catch (error) {
        throw new Error(`Error updating user: ${(error as Error).message}`)
    }
}

export async function deleteUser({clerkID, path}: DeleteUserParams): Promise<UserDocument> {
    try {
        await connectDB()

        const user = await User.findOneAndDelete({clerkID})

        if (!user)
            throw new Error('User not found')

        // Delete user's interactions
        const userQuestionIDs = await Question.find({author: user._id}).distinct('_id')

        await Question.deleteMany({_id: {$in: userQuestionIDs}})
        // TODO: delete user's answers, comments, etc.

        revalidatePath(path)
        return user
    } catch (error) {
        throw new Error(`Error deleting user: ${(error as Error).message}`)
    }
}