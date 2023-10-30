import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {Question} from '@types'
import RenderTag from '@components/shared/RenderTag'
import Image from 'next/image'
import Link from 'next/link'

type QuestionCardProps = {
    buttons?: 'edit' | 'star'
} & Question

const QuestionCard = ({_id, headline, author, tags, createdAt, votes, answers, views, buttons}: QuestionCardProps) => {
    return (
        <Card className={'card-wrapper text-dark100_light900 w-full rounded-lg border-none p-[36px] sm:px-[44px]'}>
            <CardHeader className={'mb-3 p-0'}>
                <Link
                    className={'h3-semibold line-clamp-1'}
                    href={`/question/${_id}`}
                >
                    {headline}
                </Link>
                {buttons && <div>
                    {/* TODO: add buttons*/}
                </div>}
            </CardHeader>
            <CardContent className={'mb-6 flex flex-wrap gap-2 p-0'}>
                {tags.map(tag => (
                    <RenderTag {...tag} key={tag._id}/>
                ))}
            </CardContent>
            <CardFooter className={'flex w-full flex-row flex-wrap justify-between p-0'}>
                <Link
                    className={'flex flex-row items-center gap-1'}
                    href={`/profile/${author._id}`}
                >
                    <Image
                        src={author.avatar}
                        alt={author.name}
                        width={20}
                        height={20}
                        className={'rounded-full'}
                    />
                    <p className={'body-medium'}>
                        {author.name}
                    </p>
                    <p className={'small-regular'}>
                        {`• asked ${createdAt.toLocaleDateString()}`}
                    </p>
                </Link>

                <div className={'small-regular flex flex-row items-center gap-2.5'}>
                    <div className={'flex flex-row items-center gap-1'}>
                        <Image
                            src={'/assets/icons/like.svg'}
                            alt={'like'}
                            width={16}
                            height={16}
                        />
                        <p>
                            {`${votes.positive} Votes`}
                        </p>
                    </div>
                    <div className={'flex flex-row items-center gap-1'}>
                        <Image
                            src={'/assets/icons/message.svg'}
                            alt={'message'}
                            width={16}
                            height={16}
                        />
                        <p>
                            {`${answers.length} Answers`}
                        </p>
                    </div>
                    <div className={'flex flex-row items-center gap-1'}>
                        <Image
                            src={'/assets/icons/eye.svg'}
                            alt={'eye'}
                            width={16}
                            height={16}
                        />
                        <p>
                            {`${views} Votes`}
                        </p>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

export default QuestionCard