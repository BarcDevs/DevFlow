import {popularTags, topQuestions} from '@constants/mocks'
import Image from 'next/image'
import Link from 'next/link'
import RenderTag from '@components/shared/RenderTag'

const RightSidebar = ({}) => {
    return (
        <aside
            className={'background-light900_dark200 custom-scrollbar sticky right-0 top-0 flex shrink-0 flex-col items-start overflow-auto border-l px-[26px] pb-12 pt-36 shadow-light-300 backdrop-blur-[75px] dark:shadow-none max-xl:hidden xl:h-screen xl:w-[350px]'}>
            <section className={'flex w-full flex-col justify-between gap-6'}>
                <h3 className={'text-dark200_light900 h3-bold'}>
                    Top Questions
                </h3>
                <ul className={'flex flex-col gap-[30px]'}>
                    {topQuestions.map(question => (
                        <Link
                            href={`/questions/${question._id}`}
                            className={'text-dark500_light700 flex items-center justify-between gap-7'}
                            key={question._id}>
                            <p className={'body-medium'}>
                                {question.title}
                            </p>
                            <Image src={'/assets/icons/chevron-right.svg'}
                                   alt={'view'}
                                   width={20}
                                   height={20}
                                   className={'invert-colors'}
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
                        <RenderTag key={tag._id} tag={tag} showCount/>
                    ))}
                </ul>

            </section>


        </aside>
    )
}

export default RightSidebar