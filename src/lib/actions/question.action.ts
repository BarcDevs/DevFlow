'use server'

import {FormQuestion} from '@types'
import {connectDB} from '@lib/db'
import {Schema} from 'mongoose'
import Question from '@lib/db/question.model'
import Tag from '@lib/db/tag.model'

export async function createQuestion({question, author, path}: {
    question: FormQuestion
    author: Schema.Types.ObjectId
    path: string
}) {
    await connectDB()

    try {
        const {title, body, tags} = question

        const _question = await Question.create({
            title,
            body,
            author
        })

        const _tags = tags.map(async tag => {
            return (await Tag.findOneAndUpdate({
                    name: {$regex: new RegExp(`^${tag}$`, 'i')}
                },
                {
                    $setOnInsert: {name: tag},
                    $push: {questions: _question._id}
                },
                {upsert: true, new: true}
            ))
        })

        await Question.findOneAndUpdate(_question._id, {
            $push: {tags: {$each: _tags}}
        })

        // TODO: create an interaction record for user action

        // TODO: Increment author reputation

    } catch (error) {
        throw new Error(`Error creating question: ${(error as Error).message}`)
    }
}