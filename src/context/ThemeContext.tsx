"use client"

import {createContext, ReactNode, useContext, useEffect, useState} from "react"
import {ThemeType} from '@types'

type ThemeContextType = {
    theme: ThemeType,
    setTheme: (theme: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const useTheme = () => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

const ThemeProvider = ({children}: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>('system')

    const handleThemeChange = () => {
        if (!('theme' in localStorage)) {
            const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            setTheme(theme)
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add(theme === 'dark' ? 'dark' : '')
        } else if (localStorage.theme === 'light') {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }

    useEffect(() => {
        handleThemeChange()
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, useTheme}