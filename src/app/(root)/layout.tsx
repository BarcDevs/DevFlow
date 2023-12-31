import Navbar from '@components/navbar/Navbar'
import LeftSidebar from '@components/shared/LeftSidebar'
import RightSidebar from '@components/shared/RightSidebar'
import {getTags} from '@lib/actions/tag.action'

const Layout = async ({children}: { children: React.ReactNode }) => {
    const {tags} = await getTags({})

    return (
        <main className={'background-light850_dark100 relative'}>
            <Navbar/>

            <div className={'flex'}>
                <LeftSidebar/>

                <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
                    <div className="mx-auto w-full max-w-5xl">
                        {children}
                    </div>
                </section>

                <RightSidebar popularTags={tags}/>
            </div>
        </main>
    )
}

export default Layout