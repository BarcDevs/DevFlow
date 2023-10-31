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