"use client"

import Image from 'next/image'
import {Input} from '@components/ui/input'

type SearchbarProps = {
    placeholder: string,
    imgSrc?: string,
    iconRight?: boolean,
    additionalStyle?: string
} & (GlobalSearchbarProps | LocalSearchbarProps)

type GlobalSearchbarProps = {
    type: 'global'
}

type LocalSearchbarProps = {
    type: 'local',
    route: string,
}
const Searchbar = ({type, placeholder, imgSrc, iconRight, additionalStyle}: SearchbarProps) => {
    return (
        <div className={`relative w-full ${type === 'global' && 'max-w-[600px] max-lg:hidden'}`}>
            <div
                className={`background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 ${additionalStyle} ${iconRight && 'flex-row-reverse'}`}
            >
                <Image
                    src={imgSrc || 'assets/icons/search.svg'}
                    alt={'search'}
                    width={24}
                    height={24}
                    className={'cursor-pointer'}
                />

                <Input
                    type={'text'}
                    placeholder={placeholder}
                    className={'paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none'}
                />
            </div>
        </div>
    )
}

export default Searchbar