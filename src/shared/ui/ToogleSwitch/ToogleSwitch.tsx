import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ToogleSwitch.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'
import { useSidebarCollapse } from 'app/providers/SidebarProvider'

interface ToogleSwitchProps extends ButtonHTMLAttributes<HTMLDivElement> {
    className?: string
}

const ToogleSwitch: FC<ToogleSwitchProps> = ({ className, onClick }) => {
    const { collapsed } = useSidebarCollapse()
    return (
        <div onClick={onClick} className={classNames(cls.switch, {}, [className])}>
            <input type='checkbox' checked={!collapsed}/>
            <div>
                <span className={cls.line_1}></span>
                <span className={cls.line_2}></span>
                <span className={cls.line_3}></span>
            </div>
        </div>
    )
}

export default ToogleSwitch
