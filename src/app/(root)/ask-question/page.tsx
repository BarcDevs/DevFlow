import QuestionForm from '@components/shared/forms/QuestionForm'
import {redirect} from 'next/navigation'
import {getUserByClerkId} from '@lib/actions/user.action'
import {UserDocument} from '@lib/db/user.model'

const Page = async ({}) => {
    // const {userId} = auth()
    const userId = '12345'
    if (!userId) redirect('/sign-in')

    let mongoUser: UserDocument | null = null
    try {
        mongoUser = await getUserByClerkId({clerkID: userId})
    } catch (e) {
        console.error(e)
    }


    return (
        <>
            <h1 className={'h1-bold text-dark100_light900'}>
                Ask a question
            </h1>

            <section className={'mt-9'}>
                <QuestionForm type={'create'} userId={JSON.stringify(mongoUser?._id)}/>
            </section>
        </>
    )
}

export default Page