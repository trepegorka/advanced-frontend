import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button } from 'widgets/Button'
import DimmerOverlay from 'shared/ui/DimmerOverlay/DimmerOverlay'
import { ThemeButton } from 'widgets/Button/ui/Button'

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
                    theme={AppLinkTheme.PRIMARY_INVERTED}
                    to={RoutePath.main}>
                    {t('main')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.PRIMARY_INVERTED}
                    to={RoutePath.about}>
                    {t('about')}
                </AppLink>
            </div>
            <LanguageSwitcher/>

            <Button onClick={handleModal} theme={ThemeButton.OUTLINE_REVERSE}>{t('Login')}</Button>
            <Modal isOpen={openModal}>{t('Future Login Modal')}</Modal>
            <DimmerOverlay isOpen={openModal}
                onClick={handleModal}
                className={cls.fullWindowDimmer}/>

            <ThemeSwitcher/>
        </div>
    )
}
