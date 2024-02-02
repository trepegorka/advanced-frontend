import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginModal.module.scss'
import { Modal, type ModalProps } from 'shared/ui/Modal/Modal'
import React, { Suspense } from 'react'
import { LoginFormAsync } from 'features/AuthByUserName/ui/LoginForm/LoginFormAsync'
import { Loader } from 'shared/ui/Loader/Loader'

interface LoginModalProps extends ModalProps {

}

export const LoginModal = (props: LoginModalProps) => {
    const {
        className,
        isOpen,
        onClose
    } = props
    return (
        <Modal isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.LoginModal, {}, [className])}>
            <Suspense fallback={<Loader/>}>
                <LoginFormAsync></LoginFormAsync>
            </Suspense>
        </Modal>
    )
}
