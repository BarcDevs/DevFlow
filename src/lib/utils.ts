import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {formatDistance} from 'date-fns'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const toRelative = (date: Date) => {
    return formatDistance(date, new Date(), {
        addSuffix: true
    })
}

export const toShortNumber = (num: number): string => {
    if (num >= 1000000000) {
        return `${(num / 1000000000).toFixed(1)}B`
    } else if (num >= 1000000) {
        return `${(num / 1000000).toFixed(1)}M`
    } else if (num >= 1000) {
        return `${(num / 1000).toFixed(1)}K`
    } else {
        return num.toString()
    }
}