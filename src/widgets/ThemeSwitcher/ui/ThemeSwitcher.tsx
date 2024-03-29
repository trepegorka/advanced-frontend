import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import IconMoon from 'shared/assets/icons/IconMoon'
import IconSun from 'shared/assets/icons/IconSun'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, changeTheme } = useTheme()

    return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        <div className={classNames(cls.container, {}, [cls.buttonSpace, className])}>
            <label className={cls.toggle} htmlFor={cls.switch}>
                <input id={cls.switch}
                    className={cls.input} type={'checkbox'}
                    onChange={changeTheme
                    }
                    checked={theme === Theme.NORMAL}/>

                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */}
                <div className={classNames(cls.icon, {}, [cls.iconMoon])}>
                    <IconMoon/>
                </div>

                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */}
                <div className={classNames(cls.icon, {}, [cls.iconSun])}>
                    <IconSun/>
                </div>
            </label>
        </div>
    )
}
