import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import React, { type ReactNode, useEffect, useState } from 'react'
// import { Portal } from 'shared/ui/Portal/Portal'
import DimmerOverlay from 'shared/ui/DimmerOverlay/DimmerOverlay'

export interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen: boolean
    onClose: () => void
}

export const Modal = ({ className, children = undefined, isOpen = false, onClose }: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false)

    useEffect(() => {
        const handleEscKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                onClose()
                console.log('esc')
            }
        }

        document.addEventListener('keydown', handleEscKeyPress)

        return () => {
            document.removeEventListener('keydown', handleEscKeyPress)
        }
    }, [onClose, isOpen])

    useEffect(() => {
        if (!isOpen) {
            const timeoutId = setTimeout(() => {
                setIsClosing(true)
            }, 300)

            return () => {
                clearTimeout(timeoutId)
                setIsClosing(false)
            }
        }
    }, [isOpen])

    return (
        <>
            {isOpen && (
                <>
                    {/* <Portal container={document.body}> */}
                    <DimmerOverlay isOpen={isOpen}
                        onClick={onClose}
                        className={cls.fullWindowDimmer}/>
                    <div className={
                        classNames(cls.Modal,
                            { [cls.ScaleZero]: isClosing },
                            [className])}>
                        {children}
                    </div>
                    {/* </Portal> */}
                </>
            )}
        </>
    )
}
