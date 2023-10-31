"use client"

import {createContext, ReactNode, useContext, useEffect, useState} from "react"
import {ThemeType} from '@types'

type ThemeContextType = {
    theme: ThemeType,
    setTheme: (theme: ThemeType) => void
    activeTheme: Omit<ThemeType, 'system'>
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
    const [activeTheme, setActiveTheme] = useState<Omit<ThemeType, 'system'>>('dark')

    const isDarkMode = () => {
        if (!('theme' in localStorage))
            localStorage.setItem('theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        return localStorage.theme === 'dark'
    }
    const handleThemeChange = () => {
        if (isDarkMode()) {
            document.documentElement.classList.add('dark')
            setActiveTheme('dark')
        } else {
            document.documentElement.classList.remove('dark')
            setActiveTheme('light')
        }
    }

    useEffect(() => {
        setActiveTheme(localStorage.theme)
    }, [])

    useEffect(() => {
        handleThemeChange()
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme, activeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, useTheme}