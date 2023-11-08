import {FormQuestion} from '@types'

export type GetQuestionParams = {
    page?: number
    pageSize?: number
    filter?: string
    searchQuery?: string
}

export type CreateQuestionParams = {
    question: FormQuestion
    authorID: string //Schema.Types.ObjectId | UserDocument
    path: string
}