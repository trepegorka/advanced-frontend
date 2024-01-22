import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SidebarNav.module.scss'
import Home from 'shared/assets/icons/home.svg'
import About from 'shared/assets/icons/about.svg'
import { useSidebarCollapse } from 'app/providers/SidebarProvider'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        <table className={classNames(cls.sidebarNav, { [cls.collapsed]: collapsed }, [className])}>
            <tbody>
                <tr className={cls.tableRow}>
                    <AppLink
                        onClick={changeCollapseIfNotCollapsed}
                        className={cls.flexed}
                        theme={AppLinkTheme.PRIMARY_INVERTED} to={RoutePath.main}>
                        <td className={cls.iconColumn}>
                            <Home className={cls.Icon}/>
                        </td>
                        <td className={
                            classNames(cls.textColumn, { [cls.textAppear]: !collapsed })}>
                            {t('main')}
                        </td>
                    </AppLink>
                </tr>
                <tr className={cls.tableRow}>
                    <AppLink
                        onClick={changeCollapseIfNotCollapsed}
                        className={cls.flexed}
                        theme={AppLinkTheme.PRIMARY_INVERTED} to={RoutePath.about}>
                        <td className={cls.iconColumn}>
                            <About className={cls.Icon}/>
                        </td>
                        <td className={
                            classNames(cls.textColumn, { [cls.textAppear]: !collapsed })}>
                            {t('about')}
                        </td>
                    </AppLink>
                </tr>
            </tbody>
        </table>
    )
}
