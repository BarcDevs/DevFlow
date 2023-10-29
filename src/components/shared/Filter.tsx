"use client"
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from '@components/ui/select'
import {Filter} from '@types'

type FilterProps = {
    items: Filter[]
    placeholder: string
    additionalStyle?: string
}

const Filter = ({items, placeholder, additionalStyle}: FilterProps) => {
    return (
        <Select>
            <SelectTrigger
                className={`text-dark500_light700 no-focus background-light800_dark300 body-regular  light-border px-5 py-2.5 ${additionalStyle}`}>
                <SelectValue placeholder={placeholder} className={'line-clamp-1 flex-1 text-left'}/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {items.map(filter => (
                        <SelectItem
                            value={filter.value}
                            key={filter.value}
                            className={'text-dark500_light700 no-focus background-light800_dark300 h-8'}
                        >
                            {filter.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default Filter