"use client"

import {useState} from 'react'
import {HomePageFilters} from '@constants/filters'
import {Button} from '@components/ui/button'

const HomeFilter = ({}) => {
    const [active, setActive] = useState('')
    const buttonStyles = {
        active: 'bg-primary-100 text-primary-500',
        inactive: 'text-light400_light500 bg-light-800'
    }

    const handleFilterClick = (filter: string) => {
        active === filter ? setActive('') : setActive(filter)
    }

    return (
        <div className={'mt-10 flex flex-wrap justify-start gap-3 max-md:hidden'}>
            {HomePageFilters.map(filter => (
                <Button
                    onClick={() => handleFilterClick(filter.name)}
                    key={filter.value}
                    value={filter.value}
                    className={`${active === filter.name ?
                        buttonStyles.active :
                        buttonStyles.inactive
                    } body-medium flex items-center justify-center gap-2 rounded-lg border-none px-6 py-3 capitalize shadow-none`}
                >
                    {filter.name}
                </Button>
            ))}
        </div>
    )
}

export default HomeFilter