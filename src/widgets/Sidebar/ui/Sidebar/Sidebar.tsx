import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import {useSidebarCollapse} from "app/providers/SidebarProvider";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const {collapsed, changeCollapse} = useSidebarCollapse()

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button
                onClick={changeCollapse}
                className={classNames(cls.sidebarButton)}
            >
                toggle
            </button>
        </div>
    );
};
