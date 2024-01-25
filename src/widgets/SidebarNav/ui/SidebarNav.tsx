import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SidebarNav.module.scss'
import HomeIcon from 'shared/assets/icons/HomeIcon'
import AboutIcon from 'shared/assets/icons/AboutIcon'
import { SidebarNavLink } from 'widgets/SidebarNavLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface SidebarNavProps {
    className?: string
}

export const SidebarNav = ({ className }: SidebarNavProps) => {
    return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        <div className={classNames(cls.sidebarNav, {}, [className])}>
            <SidebarNavLink icon={HomeIcon} text={'main'} path={RoutePath.main}/>
            <SidebarNavLink icon={AboutIcon} text={'about'} path={RoutePath.about}/>
        </div>
    )
}
