import '@styles/theme.css'
import '@styles/globals.css'
import type {Metadata} from 'next'
import {Inter, Space_Grotesk} from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
    title: 'DevFlow',
    description:
        'A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more'
}

export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
        </html>
    )
}
