import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useSidebarCollapse } from 'app/providers/SidebarProvider'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation()
    const { collapsed, changeCollapse } = useSidebarCollapse()

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className ?? ''])}>
            <button
                onClick={changeCollapse}
                className={classNames(cls.sidebarButton)}
            >
                {t('toggle')}
            </button>
        </div>
    )
}
