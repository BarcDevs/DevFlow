"use client"

import {sidebarLinks} from '@constants'
import {SheetClose} from '@components/ui/sheet'
import {usePathname} from 'next/navigation'
import NavItem from '@components/shared/navbar/NavItem'

const NavContent = ({}) => {
    const pathname = usePathname()

    return (
        <section className={'flex h-full flex-col gap-6 pb-6 pt-16'}>
            {sidebarLinks.map(item => {
                const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route

                return (
                    <SheetClose asChild key={item.route}>
                        <NavItem item={item}/>
                    </SheetClose>
                )
            })}
        </section>
    )
}

export default NavContent