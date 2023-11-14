import {Document, model, models, Schema} from 'mongoose'
import {Answer} from '@types'

export interface QuestionDocument extends Document {
    title: string
    body: string
    tags: Schema.Types.ObjectId[]
    views: number
    answers: Answer[]
    author: Schema.Types.ObjectId
    createdAt: Date
    votes: {
        positive: Schema.Types.ObjectId[]
        negative: Schema.Types.ObjectId[]
    }
}

const questionSchema = new Schema<QuestionDocument>({
    title: {type: String, required: true},
    body: {type: String, required: true},
    tags: {
        type: [{type: Schema.Types.ObjectId, ref: 'Tag'}],
        required: true
    },
    views: {type: Number, default: 0},
    answers: {
        type: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {type: Date, default: Date.now},
    votes: {
        positive: {
            type: [{type: Schema.Types.ObjectId, ref: 'User'}]
        },
        negative: {
            type: [{type: Schema.Types.ObjectId, ref: 'User'}]
        }
    }
})

const Question = models.Question || model<QuestionDocument>('Question', questionSchema)

export default Question