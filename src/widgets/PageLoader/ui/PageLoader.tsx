import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageLoader.module.scss'
import { Loader } from 'shared/Loader/Loader'

interface PageLoaderProps {
    className?: string
    darkLoader?: boolean
}

export const PageLoader = ({ className, darkLoader }: PageLoaderProps) => {
    return (
        <div className={classNames(cls.page__loader, {}, [className])}>
            <Loader darkLoader={darkLoader}/>
        </div>
    )
}
