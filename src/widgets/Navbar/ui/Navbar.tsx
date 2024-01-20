import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { useSidebarCollapse } from 'app/providers/SidebarProvider'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { Button } from 'widgets/Button'
import { ThemeButton } from 'widgets/Button/ui/Button'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { changeCollapse } = useSidebarCollapse()
    const { t } = useTranslation()

    return (
        <div className={classNames(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            cls.Navbar,
            {},
            [className])}
        >
            <Button
                onClick={changeCollapse}
                theme={ThemeButton.OUTLINE_REVERSE}
            >
                {t('toggle')}
            </Button>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY_INVERTED} to={'/main'}>{t('main')}</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY_INVERTED} to={'/about'}>{t('about')}</AppLink>
            </div>
            <LanguageSwitcher/>
            <ThemeSwitcher/>
        </div>
    )
}
