import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {Question} from '@types'
import RenderTag from '@components/shared/RenderTag'
import Link from 'next/link'
import {toRelative} from '@lib/format'
import Metric from '@components/shared/Metric'

type QuestionCardProps = {
    buttons?: 'edit' | 'star'
} & Question

const QuestionCard = ({_id, headline, author, tags, createdAt, votes, answers, views, buttons}: QuestionCardProps) => {
    return (
        <Card
            className={'card-wrapper text-dark100_light900 w-full rounded-[10px] border-none p-9 sm:px-11 sm:pt-[30px]'}>
            <CardHeader className={'mb-3.5 flex items-start justify-between gap-5 p-0 max-sm:flex-col-reverse'}>
                <Link
                    href={`/question/${_id}`}
                >
                    <h3 className={'sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1'}>
                        {headline}
                    </h3>
                </Link>
                <span className={'subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden'}>
                    {toRelative(createdAt)}
                </span>
                {buttons && <div>
                    {/* TODO: add buttons*/}
                </div>}
            </CardHeader>

            <CardContent className={'flex flex-wrap gap-2 p-0'}>
                {tags.map(tag => (
                    <RenderTag {...tag} key={tag._id}/>
                ))}
            </CardContent>

            <CardFooter className={'flex-between mt-6 w-full flex-row flex-wrap gap-3 p-0'}>
                <Link
                    className={'flex-center flex-row gap-1'}
                    href={`/profile/${author._id}`}
                >
                    <Metric
                        image={author.avatar}
                        value={author.name}
                        title={`• asked ${toRelative(createdAt)}`}
                        href={`/profile/${author._id}`}
                        isAuthor
                        textStyles={'body-medium text-dark400_light800'}
                    />
                </Link>

                <div className={'flex flex-row items-center gap-2.5'}>
                    <Metric
                        image={'like'}
                        title={'Votes'}
                        value={votes.positive}
                        textStyles={'small-medium text-dark400_light800'}
                    />

                    <Metric
                        image={'message'}
                        title={'Answers'}
                        value={answers.length}
                        textStyles={'small-medium text-dark400_light800'}
                    />

                    <Metric
                        image={'eye'}
                        title={'Views'}
                        value={views}
                        textStyles={'small-medium text-dark400_light800'}
                    />
                </div>
            </CardFooter>
        </Card>
    )
}


export default QuestionCard