import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    PRIMARY_INVERTED = 'primary-inverted',
    SECONDARY = 'secondary',
    SECONDARY_INVERTED = 'secondary-inverted'

}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = (props) => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props
    return (
        <Link
            to={to}
            className={classNames(
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                cls.AppLink,
                {},
                [className, cls[theme]])
            }
            {...otherProps}
        >
            {children}
        </Link>
    )
}

export default AppLink
