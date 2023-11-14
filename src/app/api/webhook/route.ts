import {Webhook} from 'svix'
import {headers} from 'next/headers'
import {WebhookEvent} from '@clerk/nextjs/server'
import {createUser, deleteUser, updateUser} from '@lib/actions/user.action'
import {NextResponse} from 'next/server'

export async function POST(req: Request) {

    // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

    if (!WEBHOOK_SECRET) {
        throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
    }

    // Get the headers
    const headerPayload = headers()
    const svix_id = headerPayload.get("svix-id")
    const svix_timestamp = headerPayload.get("svix-timestamp")
    const svix_signature = headerPayload.get("svix-signature")

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occurred -- no svix headers', {
            status: 400
        })
    }

    // Get the body
    const payload = await req.json()
    const body = JSON.stringify(payload)

    // Create a new Svix instance with your secret.
    const wh = new Webhook(WEBHOOK_SECRET)

    let evt: WebhookEvent

    // Verify the payload with the headers
    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature
        }) as WebhookEvent
    } catch (err) {
        console.error('Error verifying webhook:', err)
        return new Response('Error occurred', {
            status: 400
        })
    }

    // Get the ID and type
    const eventType = evt.type

    // Handle user events
    if (eventType === 'user.created') {
        const {id, first_name, last_name, email_addresses, username, image_url} = evt.data

        // Create a new user in the database
        const newUser = await createUser({
            userData: {
                clerkID: id,
                name: `${first_name}${last_name ? ` ${last_name}` : ''}`,
                email: email_addresses[0].email_address,
                username: username!,
                avatar: image_url
            }
        })

        return NextResponse.json({
            message: 'OK',
            user: newUser
        })
    }

    if (eventType === 'user.updated') {
        const {id, first_name, last_name, email_addresses, username, image_url} = evt.data

        // Update the user in the database
        const updatedUser = await updateUser({
            clerkID: id,
            updateData: {
                name: `${first_name}${last_name ? ` ${last_name}` : ''}`,
                email: email_addresses[0].email_address,
                username: username!,
                avatar: image_url
            },
            path: `/profile/${id}`
        })

        return NextResponse.json({
            message: 'OK',
            user: updatedUser
        })
    }

    if (eventType === 'user.deleted') {
        const {id} = evt.data

        // Delete the user from the database
        const deletedUser = await deleteUser({
            clerkID: id!,
            path: `/profile/${id}`
        })

        return NextResponse.json({
            message: 'OK',
            user: deletedUser
        })
    }

    return new Response('', {status: 201})
}
