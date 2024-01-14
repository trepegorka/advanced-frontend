import { classNames } from 'shared/lib/classNames/classNames'
import './Loader.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'

interface LoaderProps {
    darkLoader?: boolean
}

export const Loader = ({ darkLoader }: LoaderProps) => {
    const { theme } = useTheme()
    const isDarkTheme = theme === Theme.DARK
    return (
        <span className={
            classNames('loader', { blackThemeLoader: darkLoader ?? isDarkTheme })}
        />
    )
}
