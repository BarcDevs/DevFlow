import {Document, model, models, Schema} from 'mongoose'
import {Answer} from '@types'

export interface UserDocument extends Document {
    clerkID: string
    email: string,
    password?: string,
    name: string
    username: string
    avatar: string,
    bio?: string,
    location?: string
    portfolioWebsite?: string
    joinedAt: Date,
    questions: Schema.Types.ObjectId[],
    answers: Schema.Types.ObjectId[],
    savedPosts: Schema.Types.ObjectId[],
    reputation: number
}

const userSchema = new Schema<UserDocument>({
    clerkID: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String},
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    avatar: {type: String, required: true},
    bio: {type: String},
    location: {type: String},
    portfolioWebsite: {type: String},
    reputation: {type: Number, default: 0},
    joinedAt: {type: Date, default: Date.now},
    questions: {type: [{type: Schema.Types.ObjectId, ref: 'Question'}]},
    answers: {type: [{type: Schema.Types.ObjectId, ref: 'Answer'}]},
    savedPosts: {type: [{type: Schema.Types.ObjectId, ref: 'Post'}]}
})


const User = models.User || model<UserDocument>('User', userSchema)

export default User