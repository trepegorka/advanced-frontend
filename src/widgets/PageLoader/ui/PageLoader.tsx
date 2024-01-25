import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageLoader.module.scss'
import { Loader } from 'shared/ui/Loader/Loader'

interface PageLoaderProps {
    className?: string
    darkLoader?: boolean
}

export const PageLoader = ({ className, darkLoader }: PageLoaderProps) => {
    return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        <div className={classNames(cls.page__loader, {}, [className])}>
            <Loader darkLoader={darkLoader}/>
        </div>
    )
}
