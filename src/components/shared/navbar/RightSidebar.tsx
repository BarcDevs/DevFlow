import {popularTags, topQuestions} from '@constants/mocks'
import Image from 'next/image'
import Link from 'next/link'

const RightSidebar = ({}) => {
    return (
        <aside
            className={'background-light900_dark200 custom-scrollbar sticky right-0 top-0 flex shrink-0 flex-col items-start justify-between overflow-auto border-r  border-r-dark-500 px-[26px] pb-12 pt-36 shadow-light-300 backdrop-blur-[75px] dark:shadow-none max-lg:hidden lg:h-screen lg:w-[350px]'}>
            <section className={'flex w-full flex-col justify-between gap-6'}>
                <h3 className={'text-dark200_light900 text-xl font-bold'}>
                    Top Questions
                </h3>
                <ul className={'flex flex-col gap-7'}>
                    {topQuestions.map(question => (
                        <Link
                            href={question.link}
                            className={'text-dark500_light700 flex justify-between gap-2.5'}
                            key={question.link}>
                            <p className={'text-base font-medium'}>
                                {question.headline}
                            </p>
                            <Image src={'/assets/icons/chevron-right.svg'}
                                   alt={'view'}
                                   width={20}
                                   height={20}
                            />
                        </Link>
                    ))}
                </ul>
            </section>

            <section className={'mt-16 flex w-full flex-col justify-between gap-6'}>
                <h3 className={'text-dark200_light900 text-xl font-bold'}>
                    Popular Tags
                </h3>

                <ul className={'flex flex-col gap-4'}>
                    {popularTags.map(tag => (
                        <Link
                            href={tag.link}
                            className={'flex w-full justify-between'}
                            key={tag.tag}>
                            <div
                                className={'background-light800_dark300 flex items-center justify-center rounded-md px-4 py-2 shadow-light-300'}>
                                <p className={'text-light400_light500 text-base font-medium uppercase'}>
                                    {tag.tag}
                                </p>
                            </div>
                            <p className={'text-dark500_light700 text-base font-medium'}>
                                {tag.count}
                            </p>
                        </Link>
                    ))}
                </ul>

            </section>


        </aside>
    )
}

export default RightSidebar