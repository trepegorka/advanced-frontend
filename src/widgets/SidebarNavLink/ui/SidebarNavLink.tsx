import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SidebarNavLink.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useSidebarCollapse } from 'app/providers/SidebarProvider'
import { useTranslation } from 'react-i18next'
import { type FC } from 'react'

interface SidebarNavLinkProps {
    className?: string
    icon: FC
    text: string
    path: string

}

export const SidebarNavLink = ({ className, icon, text, path }: SidebarNavLinkProps) => {
    const { collapsed, changeCollapse } = useSidebarCollapse()
    const { t } = useTranslation()

    const changeCollapseIfNotCollapsed = () => {
        if (!collapsed) {
            changeCollapse()
        }
    }

    return (
        <div className={classNames(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            cls.SidebarNavLink,
            { [cls.collapsed]: collapsed },
            [className])}>
            <AppLink
                onClick={changeCollapseIfNotCollapsed}
                className={cls.flexed}
                theme={AppLinkTheme.PRIMARY_INVERTED}
                to={path}
            >
                <div className={cls.iconColumn}>
                    {icon({ className: cls.Icon })}
                </div>
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */}
                <div className={classNames(cls.textColumn, { [cls.textAppear]: !collapsed })}>
                    {t(text)}
                </div>
            </AppLink>
        </div>
    )
}
