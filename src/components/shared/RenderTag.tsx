import {Tag} from '@types'
import Link from 'next/link'
import {Badge} from '@components/ui/badge'

type RenderTagProps = Tag & {
    showCount?: boolean
}

const RenderTag = ({_id, name, count, showCount}: RenderTagProps) => {
    return (
        <Link
            href={`/tags/${_id}`}
            className={'flex justify-between gap-2'}
            key={name}>
            <Badge
                className={'text-light400_light500 subtle-medium background-light800_dark300 rounded-md border-none px-4 py-2 uppercase'}>
                {name}
            </Badge>

            {showCount && count && (
                <p className={'text-dark500_light700 small-medium'}>
                    {count}
                </p>
            )}

        </Link>

    )
}

export default RenderTag