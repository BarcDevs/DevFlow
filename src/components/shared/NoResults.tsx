import Image from 'next/image'
import Link from 'next/link'
import {Button} from '@components/ui/button'

type NoResultsProps = {
    title: string,
    description: string,
    link: string,
    linkTitle: string
}
const NoResults = ({title, description, link, linkTitle}: NoResultsProps) => {
    return (
        <div className={'mt-10 flex w-full flex-col items-center justify-center'}>
            <Image
                src={'/assets/images/light-illustration.png'}
                alt={'no results illustration'}
                width={270}
                height={200}
                className={'block object-contain dark:hidden'}
            />
            <Image
                src={'/assets/images/dark-illustration.png'}
                alt={'no results illustration'}
                width={270}
                height={200}
                className={'hidden object-contain dark:block'}
            />

            <h2 className={'h2-bold text-dark200_light900 mt-8'}>
                {title}
            </h2>
            <p className={'body-regular text-dark500_light700 my-3.5 max-w-md text-center'}>
                {description} 💡
            </p>

            <Link href={link}>
                <Button
                    className={'paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-400 dark:text-light-900'}>
                    {linkTitle}
                </Button>
            </Link>
        </div>
    )
}

export default NoResults