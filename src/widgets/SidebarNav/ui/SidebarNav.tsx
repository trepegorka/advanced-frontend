import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SidebarNav.module.scss'
import { useSidebarCollapse } from 'app/providers/SidebarProvider'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import HomeIcon from 'shared/assets/icons/HomeIcon'
import AboutIcon from 'shared/assets/icons/AboutIcon'

interface SidebarNavProps {
    className?: string
}

export const SidebarNav = ({ className }: SidebarNavProps) => {
    const { collapsed, changeCollapse } = useSidebarCollapse()
    const { t } = useTranslation()

    const changeCollapseIfNotCollapsed = () => {
        if (!collapsed) {
            changeCollapse()
        }
    }

    return (
        <div className={classNames(cls.sidebarNav, { [cls.collapsed]: collapsed }, [className])}>
            <div className={cls.tableRow}>
                <AppLink
                    onClick={changeCollapseIfNotCollapsed}
                    className={cls.flexed}
                    theme={AppLinkTheme.PRIMARY_INVERTED}
                    to={RoutePath.main}
                >
                    <div className={cls.iconColumn}>
                        <HomeIcon className={cls.Icon} />
                    </div>
                    <div className={classNames(cls.textColumn, { [cls.textAppear]: !collapsed })}>
                        {t('main')}
                    </div>
                </AppLink>
            </div>
            <div className={cls.tableRow}>
                <AppLink
                    onClick={changeCollapseIfNotCollapsed}
                    className={cls.flexed}
                    theme={AppLinkTheme.PRIMARY_INVERTED}
                    to={RoutePath.about}
                >
                    <div className={cls.iconColumn}>
                        <AboutIcon className={cls.Icon} />
                    </div>
                    <div className={classNames(cls.textColumn, { [cls.textAppear]: !collapsed })}>
                        {t('about')}
                    </div>
                </AppLink>
            </div>
        </div>
    )
}
