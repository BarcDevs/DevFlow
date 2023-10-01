"use client"

import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger} from '@components/ui/menubar'
import {useTheme} from '@context/ThemeContext'
import Image from 'next/image'
import {themes} from '@constants'
import {ThemeType} from '@types'

const Theme = ({}) => {
    const {theme, setTheme} = useTheme()

    const toggleTheme = (theme: ThemeType) => {
        setTheme(theme)

        if (theme !== 'system')
            localStorage.setItem('theme', theme)
        else
            localStorage.removeItem('theme')
    }

    return (
        <Menubar className={'relative border-none bg-transparent shadow-none'}>
            <MenubarMenu>
                <MenubarTrigger
                    className={'focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200'}
                >
                    <Image
                        src={`/assets/icons/${theme === 'dark' ? 'moon' : 'sun'}.svg`}
                        alt={theme === 'dark' ? 'moon' : 'sun Mode'}
                        width={20}
                        height={20}
                        className={'active-theme'}
                    />
                </MenubarTrigger>

                <MenubarContent
                    className={'absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300'}
                >
                    {themes.map((item) => (
                        <MenubarItem
                            key={item.value}
                            className={'flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400'}
                            onClick={() => toggleTheme(item.value as ThemeType)}
                        >
                            <Image
                                src={item.icon}
                                alt={item.value}
                                width={16}
                                height={16}
                                className={`${theme === item.value && 'active-theme'}`}
                            />
                            <p className={`body-semibold text-light-500 ${theme === item.value ? 'text-primary-500' : 'text-dark100_light900'}`}>
                                {item.label}
                            </p>
                        </MenubarItem>
                    ))}
                </MenubarContent>
            </MenubarMenu>
        </Menubar>

    )
}

export default Theme