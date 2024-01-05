import React from 'react'
import {Link} from 'react-router-dom'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import AppLink from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar)}>
            <div className={cls.links}>
                <AppLink to={'/main'} className={cls.mainLink}>main</AppLink>
                <Link to={'/about'}>about</Link>
            </div>
        </div>
    );
};

export default Navbar;
