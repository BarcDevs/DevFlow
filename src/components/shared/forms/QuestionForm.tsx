"use client"

import * as z from "zod"
import {useState} from 'react'
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from '@components/ui/form'
import {ControllerRenderProps, FieldValues, useForm} from 'react-hook-form'
import {QuestionsSchema} from '@lib/validations'
import {zodResolver} from '@hookform/resolvers/zod'
import {Input} from '@components/ui/input'
import {Button} from '@components/ui/button'
import TextEditor from '@components/shared/forms/TextEditor'
import {Badge} from '@components/ui/badge'
import Icon from '@components/shared/Icon'

type QuestionFormProps = {
    type: 'edit' | 'create'
}

type FormValues = {
    title: string
    body: string
    tags: string[]
} & FieldValues

const QuestionForm = ({type}: QuestionFormProps) => {
    const [submitting, setSubmitting] = useState(false)
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

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: ControllerRenderProps<FormValues, string>) => {
        if (e.key === 'Enter' && field.name === 'tags') {
            e.preventDefault()

            const tagInput = e.target as HTMLInputElement
            const tagValue = tagInput.value.trim().toUpperCase()

            if (tagValue === '')
                return form.setError('tags', {
                    type: 'required',
                    message: 'Tag is required.'
                })
            if (tagValue.length > 15)
                return form.setError('tags', {
                    type: 'required',
                    message: 'Tag must be less than 15 characters.'
                })
            if (field.value.includes(tagValue as never))
                return form.setError('tags', {
                    type: 'unique',
                    message: 'Tag already exists.'
                })


            form.setValue('tags', [...field.value, tagValue])
            tagInput.value = ''
            form.clearErrors('tags')
        }

        form.trigger()
    }

    const handleTagRemove = (e: React.MouseEvent<HTMLButtonElement>, tag: string, field: ControllerRenderProps<FormValues, string>) => {
        e.preventDefault()
        const newTags = field.value.filter((t: string) => t !== tag)
        form.setValue('tags', newTags)
    }

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
                                <TextEditor/>
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
                                <>
                                    <Input
                                        className={formStyles.input}
                                        onKeyDown={(e) => {
                                            // @ts-ignore
                                            handleInputKeyDown(e, field)
                                        }}
                                        placeholder={'Add tags...'}
                                    />

                                    {field.value.length > 0 && (
                                        <div className={'mt-2 flex flex-wrap justify-start gap-2'}>
                                            {field.value.map((tag) => (
                                                <Badge key={tag}
                                                       className={'subtle-medium background-light800_dark300 text-dark400_light500 flex-center gap-2 rounded-md border-none px-4 py-2'}>
                                                    {tag}
                                                    <button onClick={(e) => {
                                                        // @ts-ignore
                                                        handleTagRemove(e, tag, field)
                                                    }}>
                                                        <Icon name={'close'} size={12}
                                                              additionalStyle={'cursor-pointer invert-0 dark:invert'}
                                                        />
                                                    </button>
                                                </Badge>
                                            ))}
                                        </div>
                                    )}
                                </>
                            </FormControl>
                            <FormDescription className={formStyles.description}>
                                {descriptions.tags}
                            </FormDescription>
                            <FormMessage className={'text-red-500'}/>
                        </FormItem>
                    )}
                />
                {/*endregion */}

                <Button type="submit">
                    {
                        submitting ? (
                            type === 'create' ? 'Posting...' : 'Updating...'
                        ) : (
                            type === 'create' ? 'Ask a Question' : 'Update Question'
                        )
                    }
                </Button>
            </form>
        </Form>
    )
}

export default QuestionForm