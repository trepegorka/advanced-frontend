import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Button } from 'widgets/Button'
import { ThemeButton } from 'widgets/Button/ui/Button'
import { LoginModal } from 'features/AuthByUserName/ui/LoginModal/LoginModal'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [openModal, setOpen] = useState(false)
    const handleModal = () => {
        setOpen(!openModal)
    }

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
            <Button className={cls.marginedItem}
                onClick={handleModal}
                theme={ThemeButton.OUTLINE_REVERSE}>
                {t('Login')}
            </Button>
            <LoginModal isOpen={openModal} onClose={handleModal}/>
            <ThemeSwitcher/>
        </div>
    )
}
