import Image from 'next/image'
import {Input} from '@components/ui/input'

type SearchbarProps = {
    type: 'global' | 'local',
    placeholder: string
}
const Searchbar = ({type, placeholder}: SearchbarProps) => {
    return (
        <div className={`relative w-full ${type === 'global' && 'max-w-[600px] max-lg:hidden'}`}>
            <div
                className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4"
            >
                <Image
                    src={'assets/icons/search.svg'}
                    alt={'search'}
                    width={24}
                    height={24}
                    className={'cursor-pointer'}
                />

                <Input
                    type={'text'}
                    placeholder={placeholder}
                    value={''}
                    className={'paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none'}
                />
            </div>
        </div>
    )
}

export default Searchbar