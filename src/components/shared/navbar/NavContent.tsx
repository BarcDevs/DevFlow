"use client"

import {sidebarLinks} from '@constants'
import Link from 'next/link'
import {SheetClose} from '@components/ui/sheet'
import Image from 'next/image'
import {usePathname} from 'next/navigation'

const NavContent = ({}) => {
    const pathname = usePathname()

    return (
        <section className={'flex h-full flex-col gap-6 pb-6 pt-16'}>
            {sidebarLinks.map(item => {
                const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route

                return (
                    <SheetClose asChild key={item.route}>
                        <Link
                            className={`${isActive
                                ? 'primary-gradient rounded-lg text-light-900'
                                : 'text-dark300_light900'
                            } flex items-center justify-start gap-4 bg-transparent p-4`}
                            href={item.route}
                        >
                            <Image
                                src={item.imgURL}
                                alt={item.label}
                                width={20}
                                height={20}
                                className={isActive ? '' : 'invert-colors'}
                            />
                            <p className={isActive ? 'base-bold' : 'base-medium'}>
                                {item.label}
                            </p>
                        </Link>
                    </SheetClose>
                )
            })}
        </section>
    )
}

export default NavContent