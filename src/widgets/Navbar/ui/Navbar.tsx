import React from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useSidebarCollapse} from "app/providers/SidebarProvider";
import {LanguageSwitcher} from "widgets/LanguageSwitcher/ui/LanguageSwitcher";
import {useTranslation} from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {changeCollapse} = useSidebarCollapse();
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <button onClick={changeCollapse}>toggle</button>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/main'}>{t('main')}</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>{t('about')}</AppLink>
            </div>
            <LanguageSwitcher/>
            <ThemeSwitcher/>
        </div>
    );
};
