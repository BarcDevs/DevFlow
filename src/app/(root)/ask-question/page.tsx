import QuestionForm from '@components/shared/forms/QuestionForm'

const Page = ({}) => {
    return (
        <>
            <h1 className={'h1-bold text-dark100_light900'}>
                Ask a question
            </h1>

            <section className={'mt-9'}>
                <QuestionForm/>
            </section>
        </>
    )
}

export default Page