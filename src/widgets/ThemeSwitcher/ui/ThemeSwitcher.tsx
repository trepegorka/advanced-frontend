import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import Moon from 'shared/assets/icons/moon.svg'
import Sun from 'shared/assets/icons/sun.svg'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, changeTheme } = useTheme()

    return (
        <div className={classNames(cls.container, {}, [cls.buttonSpace, className])}>
            <label className={cls.toggle} htmlFor={cls.switch}>
                <input id={cls.switch}
                    className={cls.input} type={'checkbox'}
                    onChange={changeTheme
                    }
                    checked={theme === Theme.NORMAL}/>

                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */}
                <div className={classNames(cls.icon, {}, [cls.iconMoon])}>
                    <Moon/>
                </div>

                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */}
                <div className={classNames(cls.icon, {}, [cls.iconSun])}>
                    <Sun/>
                </div>
            </label>
        </div>
    )
}
