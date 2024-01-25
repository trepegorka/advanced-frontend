import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation()
    return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Page not found')}
        </div>
    )
}
