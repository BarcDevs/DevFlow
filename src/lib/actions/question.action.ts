'use server'

import {connectDB} from '@lib/db'
import {CreateQuestionParams, GetQuestionParams} from '@lib/actions/shared.types'
import Question from '@lib/db/question.model'
import Tag from '@lib/db/tag.model'
import User from '@lib/db/user.model'

export async function getQuestions({page, pageSize, filter, searchQuery}: GetQuestionParams): Promise<{
    questions: any[],
}> {
    await connectDB()

    try {
        return {
            questions: (await Question.find({})
                    .populate({path: 'author', model: User})
                    .populate({path: 'tags', model: Tag})
                    .sort({createdAt: -1})
            )
        }
    } catch (e) {
        console.log(e)
    }

    return {questions: []}
}

export async function createQuestion({question, authorID, path}: CreateQuestionParams) {
    await connectDB()

    try {
        const {title, body, tags} = question

        const _question = await Question.create({
            title,
            body,
            author: JSON.parse(authorID)
        })

        const _tags = await Promise.all(tags.map(async tag => {
            return (await Tag.findOneAndUpdate({
                    name: {$regex: new RegExp(`^${tag}$`, 'i')}
                },
                {
                    $setOnInsert: {name: tag},
                    $push: {questions: _question._id}
                },
                {upsert: true, new: true}
            ))
        }))

        await Question.findOneAndUpdate(_question._id, {
            $push: {tags: {$each: _tags}}
        })

        // TODO: create an interaction record for user action

        // TODO: Increment author reputation

    } catch (error) {
        throw new Error(`Error creating question: ${(error as Error).message}`)
    }
}