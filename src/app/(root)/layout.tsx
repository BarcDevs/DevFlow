import Navbar from '@components/shared/navbar/Navbar'
import LeftSidebar from '@components/shared/navbar/LeftSidebar'

const Layout = ({childern}: { childern: React.ReactNode }) => {
    return (
        <main className={'background-light850_dark100 relative'}>
            <Navbar/>

            <div className={'flex'}>
                <LeftSidebar/>

                <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
                    <div className="mx-auto w-full max-w-5xl">
                        {childern}
                    </div>
                </section>

                {/*right sidebar*/}
            </div>
        </main>
    )
}

export default Layout