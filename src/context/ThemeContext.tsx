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

    const isDarkMode = () => {
        if (!('theme' in localStorage))
            return window.matchMedia('(prefers-color-scheme: dark)').matches
        return localStorage.theme === 'dark'
    }
    const handleThemeChange = () => {
        if (isDarkMode()) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
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