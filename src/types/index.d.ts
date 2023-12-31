import {Schema} from 'mongoose'

export type ThemeType =
    'light' | 'dark' | 'system'

export interface SidebarLink {
    imgURL: string
    route: string
    label: string
}

export type TopQuestion = {
    _id: string
    title: string
}

export type Tag = {
    _id: string
    name: string
    description: string
    questions: Question[] | Schema.Types.ObjectId[]
    followers: User[] | Schema.Types.ObjectId[]
    createdAt: Date
}

export type Filter = {
    name: string,
    value: string
}

export type Post = {
    _id: string
    body: string
    createdAt: Date
    votes: {
        positive: User[]
        negative: User[]
    }
    author: User
}

export type Question = {
    title: string
    answers: Answer[]
    views: number
    tags: Tag[]
} & Post

export type Answer = Post

export type User = {
    _id: string
    email: string,
    name: string
    username: string
    avatar: string,
    bio?: string,
    location?: string,
    portfolioWebsite?: string,
    reputation: number,
    joinedAt: Date,
    questions: Question[] | Schema.Types.ObjectId[],
    answers: Answer[] | Schema.Types.ObjectId[],
    badges: {
        gold: number,
        silver: number,
        bronze: number
    }
}

export type FormQuestion = {
    title: string
    body: string
    tags: string[]
}