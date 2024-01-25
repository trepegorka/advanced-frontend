import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useSidebarCollapse } from 'app/providers/SidebarProvider'
import { BugButton } from 'app/providers/ErrorBoundary'
import { ThemeButton } from 'widgets/Button/ui/Button'
import { SidebarNav } from 'widgets/SidebarNav'
import ToogleSwitch from 'shared/ui/ToogleSwitch/ToogleSwitch'
import DimmerOverlay from 'shared/ui/DimmerOverlay/DimmerOverlay'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { collapsed, changeCollapse } = useSidebarCollapse()

    return (
        <>
            <div className={
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>

                <ToogleSwitch data-testid='toogleSidebar'
                    onClick={changeCollapse}
                    className={cls.ToogleSwitch}/>

                <SidebarNav/>

                <br/>
                <br/>
                <br/>
                <BugButton
                    theme={ThemeButton.OUTLINE_REVERSE}
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    className={classNames(cls.bugButton, { [cls.fadeAppear]: !collapsed })}>
                </BugButton>
            </div>
            <DimmerOverlay onClick={changeCollapse} isOpen={!collapsed}/>
        </>
    )
}
