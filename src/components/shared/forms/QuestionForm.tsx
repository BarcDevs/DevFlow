"use client"

import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from '@components/ui/form'
import * as z from "zod"
import {useForm} from 'react-hook-form'
import {QuestionsSchema} from '@lib/validations'
import {zodResolver} from '@hookform/resolvers/zod'
import {Input} from '@components/ui/input'
import {Button} from '@components/ui/button'

type QuestionFormProps = {}

const QuestionForm = ({}: QuestionFormProps) => {
    const formStyles = {
        label: 'paragraph-semibold text-dark400_light800',
        input: 'no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border',
        description: 'body-regular mt-2.5 text-light-500'
    }

    const descriptions = {
        title: 'Be specific and imagine you’re asking a question to another person.',
        body: 'Introduce the problem and expand on what you put in the title. Minimum 20 characters.',
        tags: 'Add up to 3 tags to describe what your question is about. You need to press enter to add a tag.'
    }

    const form = useForm<z.infer<typeof QuestionsSchema>>({
        resolver: zodResolver(QuestionsSchema),
        defaultValues: {
            title: '',
            body: '',
            tags: []
        }
    })

    const onSubmit = (values: z.infer<typeof QuestionsSchema>) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-10">
                {/*region Title*/}
                <FormField
                    control={form.control}
                    name="title"
                    render={({field}) => (
                        <FormItem className={'flex w-full flex-col'}>
                            <FormLabel className={formStyles.label}>
                                Question Title <span className={'text-primary-500'}>*</span>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    className={formStyles.input}
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription className={formStyles.description}>
                                {descriptions.title}
                            </FormDescription>
                            <FormMessage className={'text-red-500'}/>
                        </FormItem>
                    )}
                />
                {/*endregion*/}

                {/*region Body */}
                <FormField
                    control={form.control}
                    name="body"
                    render={({field}) => (
                        <FormItem className={'flex w-full flex-col gap-3'}>
                            <FormLabel className={formStyles.label}>
                                Detailed explanation of your problem <span className={'text-primary-500'}>*</span>
                            </FormLabel>
                            <FormControl>
                                {/* TODO: add an editor */}
                            </FormControl>
                            <FormDescription className={formStyles.description}>
                                {descriptions.body}
                            </FormDescription>
                            <FormMessage className={'text-red-500'}/>
                        </FormItem>
                    )}
                />
                {/*endregion */}

                {/*region Tags */}
                <FormField
                    control={form.control}
                    name="tags"
                    render={({field}) => (
                        <FormItem className={'flex w-full flex-col'}>
                            <FormLabel className={formStyles.label}>
                                Question Title <span className={'text-primary-500'}>*</span>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    className={formStyles.input}
                                    {...field}
                                    placeholder={'Add tags...'}
                                />
                            </FormControl>
                            <FormDescription className={formStyles.description}>
                                {descriptions.tags}
                            </FormDescription>
                            <FormMessage className={'text-red-500'}/>
                        </FormItem>
                    )}
                />
                {/*endregion */}
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default QuestionForm