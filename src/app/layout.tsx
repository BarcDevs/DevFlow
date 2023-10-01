import '@styles/theme.css'
import '@styles/globals.css'
import type {Metadata} from 'next'
import {Inter, Space_Grotesk} from 'next/font/google'
import {ClerkProvider} from '@clerk/nextjs'
import {ThemeProvider} from '@context/ThemeContext'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
    title: 'DevFlow',
    description:
        'A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more',
    icons: {
        icon: '/assets/images/site-logo.svg'
    }
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {

    // TODO: Clerk provider making the app to render dynamically. later move the provider to wrap only private routes
    return (
        <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider
            appearance={{
                elements: {
                    formButtonPrimary: 'primary-gradient',
                    footerActionLink: 'primary-text-gradient hover:text-primary-500'
                }
            }}
        >
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </ClerkProvider>
        </body>
        </html>
    )
}
