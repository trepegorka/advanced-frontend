import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { Button } from 'widgets/Button'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { ThemeButton } from 'widgets/Button/ui/Button'

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input placeholder={'Name'} className={cls.input}/>
            <Input placeholder={'Password'} className={cls.input}/>
            <Button theme={ThemeButton.OUTLINE} className={cls.button}>{t('Login')}</Button>
        </div>
    )
}
