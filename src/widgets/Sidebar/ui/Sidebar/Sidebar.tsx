import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useSidebarCollapse } from 'app/providers/SidebarProvider'
import { useTranslation } from 'react-i18next'
import { Button } from 'widgets/Button'
import { BugButton } from 'app/providers/ErrorBoundary'
import { ThemeButton } from 'widgets/Button/ui/Button'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation('translation')
    const { collapsed, changeCollapse } = useSidebarCollapse()

    return (
        <div className={
            classNames(
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className])}
        >
            <Button
                onClick={changeCollapse}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                className={classNames(cls.sidebarButton)}
                theme={ThemeButton.OUTLINE_REVERSE}
            >
                {t('toggle')}
            </Button>
            <br/>
            <BugButton/>
        </div>
    )
}
