import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { Text, ThemeText } from 'shared/ui/Text/Text'
import { Button } from 'widgets/Button'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { ThemeButton } from 'widgets/Button/ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/LoginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { LoginByUsername } from '../../model/services/loginByUsername/loginByUsername'

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { username, password, error, isLoading } = useSelector(getLoginState)
    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch<any>(LoginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text text={'Authorisation form'} theme={ThemeText.TITLE}/>
            {(error != null) && <Text text={error} theme={ThemeText.ERROR} />}
            <Input
                placeholder={'Name'}
                className={cls.input}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                placeholder={'Password'}
                className={cls.input}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ThemeButton.OUTLINE}
                className={cls.button}
                onClick={onLoginClick}
                disabled={isLoading}>
                {t('Login')}
            </Button>
        </div>
    )
})

LoginForm.displayName = 'LoginForm'
