import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SidebarNav.module.scss'
import IconHome from 'shared/assets/icons/IconHome'
import IconAbout from 'shared/assets/icons/IconAbout'
import { SidebarNavLink } from 'widgets/SidebarNavLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface SidebarNavProps {
    className?: string
}

export const SidebarNav = ({ className }: SidebarNavProps) => {
    return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        <div className={classNames(cls.sidebarNav, {}, [className])}>
            <SidebarNavLink icon={IconHome} text={'main'} path={RoutePath.main}/>
            <SidebarNavLink icon={IconAbout} text={'about'} path={RoutePath.about}/>
        </div>
    )
}
