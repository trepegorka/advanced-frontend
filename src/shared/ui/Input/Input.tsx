import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import { type InputHTMLAttributes, memo } from 'react'

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HtmlInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    placeholder: string
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        ...otherProps
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }
    return (
        <div className={classNames(cls.textInputWrapper, {}, [className])}>
            <input value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                type={type}
                className={cls.textInput}
                {...otherProps}
            />
        </div>
    )
})

Input.displayName = 'Input'
