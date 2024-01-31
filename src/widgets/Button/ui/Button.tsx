import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_REVERSE = 'outline_reverse',
    CLEAR_REVERSE = 'clear_reverse'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
    disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        disabled = false,
        ...otherProps
    } = props

    return (
        <button
            className={
                classNames(
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    cls.Button,
                    {
                        [cls[theme]]: true,
                        [cls.disabled]: disabled
                    },
                    [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
}
