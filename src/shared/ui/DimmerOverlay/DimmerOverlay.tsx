import { classNames } from 'shared/lib/classNames/classNames'
import cls from './DimmerOverlay.module.scss'

interface DimmerOverlayProps {
    className?: string
    isOpen: boolean
    onClick: () => void
}
const DimmerOverlay = ({ className, isOpen, onClick }: DimmerOverlayProps) => {
    return (
        <div
            onClick={onClick}
            className={classNames(
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                cls.DimmerOverlay,
                { [cls.hidden]: !isOpen },
                [className])}
        />
    )
}

export default DimmerOverlay
