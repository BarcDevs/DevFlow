'use server'

import {connectDB} from '@lib/db'
import {GetQuestionParams} from '@lib/actions/shared.types'
import Tag from '@lib/db/tag.model'

export async function getTags({}: GetQuestionParams): Promise<{
    tags: any[],
}> {
    await connectDB()

    try {
        return {
            tags: (await Tag.find({})
                    .sort({questions: -1})
            )
        }
    } catch (e) {
        console.log(e)
    }

    return {tags: []}
}