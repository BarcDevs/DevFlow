import Link from 'next/link'
import {Button} from '@components/ui/button'
import Searchbar from '@components/search/Searchbar'
import Filter from '@components/shared/Filter'
import {HomePageFilters} from '@constants/filters'
import HomeFilter from '@components/home/HomeFilter'
import {questions} from '@constants/mocks'
import QuestionCard from '@components/shared/cards/QuestionCard'
import NoResults from '@components/shared/NoResults'

const Home = ({}) => {
    return (
        <>
            <header className={'flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'}>
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
            </header>

            {/* Searchbar */}
            <section className={'mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'}>
                <Searchbar
                    type={'local'}
                    placeholder={'Search questions...'}
                    additionalStyle={'flex-1'}
                    route={'/'}
                />

                {/* Mobile Filter */}
                <div
                    className={'relative flex md:hidden'}>
                    <Filter
                        items={HomePageFilters} placeholder={'Select a Filter'}
                        additionalStyle={'min-h-[56px] sm:min-w-[170px]'}
                    />
                </div>
            </section>

            <HomeFilter/>

            <section className={'mt-10 flex w-full flex-col gap-6'}>
                {questions.length > 0 ?
                    questions.map(question => (
                        <QuestionCard key={question._id} {...question}/>
                    )) :
                    <NoResults
                        title={'There are no questions to show'}
                        description={'Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡'}
                        link={'/ask-question'}
                        linkTitle={'Ask a Question'}
                    />
                }
            </section>
        </>
    )
}

export default Home