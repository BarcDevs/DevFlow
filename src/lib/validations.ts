import * as z from "zod"

export const QuestionsSchema = z.object({
    title: z.string().min(5).max(130),
    body: z.string().min(20),
    tags: z.array(
        z.string().min(1).max(15)
    ).min(1, {
        message: 'You need to add at least one tag.'
    }).max(3, {
        message: 'You can only add up to 3 tags.'
    })
})
