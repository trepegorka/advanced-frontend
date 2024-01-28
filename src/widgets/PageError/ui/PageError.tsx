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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            {t('Error was found')}
            <Button onClick={reload}
                theme={ThemeButton.OUTLINE_REVERSE}
                style={{ margin: '10px' }}
            >
                {t('reload page')}
            </Button>
        </div>
    )
}
