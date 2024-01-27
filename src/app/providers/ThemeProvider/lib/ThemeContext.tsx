import { createContext } from 'react'

export enum Theme {
    NORMAL = 'app_normal_theme',
    DARK = 'app_dark_theme',
}

interface ThemeContextProps {
    theme: Theme
    setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.DARK,
    setTheme: () => {
    }
})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
