import Link from 'next/link'
import {Button} from '@components/ui/button'
import Searchbar from '@components/shared/search/Searchbar'

const Home = ({}) => {
    return (
        <>
            <section className={'flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'}>
                <h1 className="h1-bold text-dark100_light900">
                    All Questions
                </h1>

                <Link
                    href={'/ask-question'}
                    className={'flex justify-end max-sm:w-full'}
                >
                    <Button className={'primary-gradient min-h-[46px] px-4 py-3 !text-light-900'}>
                        Ask a Question
                    </Button>
                </Link>
            </section>

            <section className={'mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'}>
                <Searchbar type={'local'} placeholder={'Search questions...'}/>

                {/*<Filters/>*/}
            </section>
        </>
    )
}

export default Home