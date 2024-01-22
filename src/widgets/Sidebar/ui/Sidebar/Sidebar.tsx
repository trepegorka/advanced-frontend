import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useSidebarCollapse } from 'app/providers/SidebarProvider'
import { useTranslation } from 'react-i18next'
import { Button } from 'widgets/Button'
import { BugButton } from 'app/providers/ErrorBoundary'
import { ThemeButton } from 'widgets/Button/ui/Button'
import { SidebarNav } from 'widgets/SidebarNavigation'

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
                [className])}>

            <Button
                onClick={changeCollapse}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                className={classNames(cls.collapseButton)}
                theme={ThemeButton.OUTLINE_REVERSE}>

                <span className = {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    classNames(cls.toggleButtonText)}>{t('toggle')}
                </span>

            </Button>

            <SidebarNav/>

            <br/>
            <br/>
            <br/>
            <BugButton
                theme={ThemeButton.OUTLINE_REVERSE}
                className={
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    classNames(cls.bugButton, { [cls.fadeAppear]: !collapsed })}>
            </BugButton>

        </div>
    )
}
