"use client"

import {createContext, ReactNode, useContext, useEffect, useState} from "react"

type Theme =
    'light' | 'dark' | ''


type ThemeContextType = {
    theme: Theme,
    setTheme: (theme: Theme) => void
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
    const [theme, setTheme] = useState<Theme>('')

    const handleThemeChange = () => {
        if (theme === 'light') {
            // setTheme('dark')
            document.documentElement.classList.add('dark')
        } else {
            // setTheme('light')
            document.documentElement.classList.add('light')
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