import {classNames} from 'shared/lib/classNames/classNames'
import cls from './DimmerOverlay.module.scss'
import {useSidebarCollapse} from "app/providers/SidebarProvider";

interface DimmerOverlayProps {
    className?: string
}

export const DimmerOverlay = ({className}: DimmerOverlayProps) => {
    const {collapsed, changeCollapse} = useSidebarCollapse()
    return (
        !collapsed ? <div onClick={changeCollapse} className={classNames(cls.DimmerOverlay, {}, [className])}/> : null
    );
};