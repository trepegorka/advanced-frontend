import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'widgets/Button'
import { ThemeButton } from 'widgets/Button/ui/Button'

interface PagErrorProps {
    className?: string
}

export const PageError = ({ className }: PagErrorProps) => {
    const { t } = useTranslation()
    const reload = () => {
        location.reload()
    }
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            {t('Error was found')}
            <Button theme={ThemeButton.DEFAULT} onClick={reload}> {t('reload page')}</Button>
        </div>
    )
}
