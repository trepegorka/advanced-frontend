import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { type ReactNode, useEffect, useState } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'

interface ModalProps {
    className?: string
    children: ReactNode
    isOpen: boolean
}

export const Modal = ({ className, children, isOpen }: ModalProps) => {
    const [topR, setTopR] = useState(false)
    useEffect(() => {
        if (isOpen) {
            setTopR(false)
        }
        if (!isOpen) {
            const displayNoneTimerId = setTimeout(() => {
                setTopR(true)
            }, 300)

            return () => {
                clearTimeout(displayNoneTimerId)
            }
        }
    }, [isOpen])

    return (
        <Portal container={document.body}>
            <div className={classNames(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                cls.Modal,
                { [cls.topR]: topR, [cls.hidden]: !isOpen },
                [className])}>
                {children}
            </div>
        </Portal>
    )
}
