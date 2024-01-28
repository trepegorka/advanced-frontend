import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginModal.module.scss'
import { Modal, type ModalProps } from 'shared/ui/Modal/Modal'
import { LoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm'
import React from 'react'

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
            <LoginForm></LoginForm>
        </Modal>
    )
}
