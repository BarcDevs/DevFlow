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