import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            cls.Navbar,
            {},
            [className])}
        >
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
            <ThemeSwitcher/>
        </div>
    )
}
