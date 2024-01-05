import {classNames} from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import {FC} from 'react'
import {Link, LinkProps} from 'react-router-dom'
interface AppLinkProps extends LinkProps {
    className?: string
}

const AppLink: FC<AppLinkProps> = (props) => {

    const {to, className, children, ...otherProps} = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;