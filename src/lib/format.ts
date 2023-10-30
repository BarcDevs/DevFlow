import {formatDistance} from 'date-fns'

export const toRelative = (date: Date) => {
    return formatDistance(date, new Date(), {
        addSuffix: true
    })
}