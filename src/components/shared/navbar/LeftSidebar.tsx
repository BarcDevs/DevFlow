import {sidebarLinks} from '@constants'
import NavItem from '@components/shared/navbar/NavItem'
import {SignedIn} from '@clerk/nextjs'

const LeftSidebar = ({}) => {
    return (
        <nav
            className={'light-border background-light900_dark200 custom-scrollbar sticky left-0 top-0 flex min-h-screen shrink-0 flex-col items-start justify-between gap-4 overflow-y-auto border-r p-6 pb-8 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden'}>
            <section className={'flex flex-col gap-6'}>
                {sidebarLinks.map(item => {
                    return (
                        item.label === 'Profile' ?
                            (<SignedIn>
                                <NavItem item={item}/>
                            </SignedIn>) : (
                                <NavItem item={item}/>
                            )
                    )
                })}
            </section>
        </nav>
    )
}

export default LeftSidebar