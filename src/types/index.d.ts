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
    count?: number
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
    name: string
    avatar: string
}

export type FormQuestion = {
    title: string
    body: string
    tags: string[]
}