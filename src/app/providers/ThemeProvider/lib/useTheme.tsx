import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface useThemeResult {
    changeTheme: () => void
    theme: Theme
}

export function useTheme (): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)
    document.body.className = theme
    const changeTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        changeTheme
    }
}
