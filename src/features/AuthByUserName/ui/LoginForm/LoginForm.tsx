import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { Text, ThemeText } from 'shared/ui/Text/Text'
import { Button } from 'widgets/Button'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { ThemeButton } from 'widgets/Button/ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/LoginSlice'
import { LoginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import {
    DynamicModuleLoader,
    type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

interface LoginFormProps {
    className?: string
}

const InitialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const username = useSelector(getLoginUsername) ?? ''
    const password = useSelector(getLoginPassword) ?? ''
    const isLoading = useSelector(getLoginIsLoading) ?? false
    const error = useSelector(getLoginError)

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
        <DynamicModuleLoader reducers={InitialReducers}>
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
        </DynamicModuleLoader>
    )
})

LoginForm.displayName = 'LoginForm'

export default LoginForm
