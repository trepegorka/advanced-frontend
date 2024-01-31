import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum ThemeText {
    TEXT = 'defaultText',
    TITLE = 'title',
    ERROR = 'error'

}
interface TextProps {
    className?: string
    text: string
    theme?: ThemeText
}
export const Text = ({ className, text, theme = ThemeText.TEXT }: TextProps) => {
    return (
        <div className={classNames(cls.Text, {}, [className])}>
            <p className={classNames(cls.paragraph, { [cls[theme]]: true })}>{text}</p>
        </div>
    )
}
