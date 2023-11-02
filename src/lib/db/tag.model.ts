import {Document, model, models, Schema} from 'mongoose'

interface TagDocument extends Document {
    name: string
    description: string
    questions: Schema.Types.ObjectId[]
    followers: Schema.Types.ObjectId[]
    createdAt: Date
}

const tagSchema = new Schema<TagDocument>({
    name: {type: String, required: true, unique: true},
    description: {type: String, default: ''},
    questions: [{type: Schema.Types.ObjectId, ref: 'Question'}],
    followers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    createdAt: {type: Date, default: Date.now}
})


const Tag = models.Tag || model<TagDocument>('Tag', tagSchema)

export default Tag