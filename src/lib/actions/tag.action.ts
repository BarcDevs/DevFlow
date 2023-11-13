'use server'

import {connectDB} from '@lib/db'
import {GetTagParams} from '@lib/actions/shared.types'
import Tag from '@lib/db/tag.model'

export async function getTags({}: GetTagParams): Promise<{
    tags: any[],
}> {
    await connectDB()

    try {
        return {
            tags: (await Tag.find({})
                    .sort({questions: -1})
            )
        }
    } catch (error) {
        throw new Error(`Error creating question: ${(error as Error).message}`)
    }
}