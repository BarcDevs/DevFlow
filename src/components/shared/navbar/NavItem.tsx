"use client"

import Link from 'next/link'
import Image from 'next/image'
import {usePathname} from 'next/navigation'
import {SidebarLink} from '@types'

const NavItem = ({item}: {
    item: SidebarLink
}) => {
    const pathname = usePathname()
    const isActive = pathname.includes(item.route) && item.route.length > 1 || pathname === item.route

    return (
        <Link
            className={`${isActive
                ? 'primary-gradient rounded-lg text-light-900'
                : 'text-dark300_light900'
            } flex items-center justify-start gap-4 bg-transparent p-4`}
            href={item.route}
            key={item.route}
        >
            <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={isActive ? '' : 'invert-colors'}
            />
            <p className={`${isActive ? 'base-bold' : 'base-medium'} max-lg:hidden max-sm:block`}>
                {item.label}
            </p>
        </Link>
    )
}

export default NavItem
