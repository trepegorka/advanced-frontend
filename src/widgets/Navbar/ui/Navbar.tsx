import React, { useState, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Button } from 'widgets/Button'
import { ThemeButton } from 'widgets/Button/ui/Button'
import { LoginModal } from 'features/AuthByUserName'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/user'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [openModal, setOpen] = useState(false)
    const authData = useSelector(getUserAuthData)
    const handleModal = () => {
        setOpen(!openModal)
    }

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])
    return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    className={cls.marginedItem}
                    theme={AppLinkTheme.PRIMARY_INVERTED}
                    to={RoutePath.main}>
                    {t('main')}
                </AppLink>
                <AppLink
                    className={cls.marginedItem}
                    theme={AppLinkTheme.PRIMARY_INVERTED}
                    to={RoutePath.about}>
                    {t('about')}
                </AppLink>
            </div>
            <LanguageSwitcher className={cls.marginedItem}/>
            {/* eslint-disable */}
            {(authData === undefined)
                ? (<Button className={cls.marginedItem}
                    onClick={handleModal}
                    theme={ThemeButton.OUTLINE_REVERSE}>
                    {t('Login')}
                </Button>)
                : (<Button className={cls.marginedItem}
                        onClick={onLogout}
                        theme={ThemeButton.OUTLINE_REVERSE}>
                    {t('Logout')}
                </Button>)}
            {/* eslint-enable */}
            <LoginModal isOpen={openModal} onClose={handleModal}/>
            <ThemeSwitcher/>
        </div>
    )
}
