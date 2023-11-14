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

export type GetTagParams = {}

export type CreateUserParams = {
    userData: {
        clerkID: string
        email: string,
        name: string
        username: string
        avatar: string,
    }
}

export type UpdateUserParams = {
    clerkID: string
    updateData: {
        email: string,
        name: string
        username: string
        avatar: string,
    }
    path: string
}

export type DeleteUserParams = {
    clerkID: string
    path: string
}