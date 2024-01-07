import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LanguageSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'widgets/Button'
import { ThemeButton } from 'widgets/Button/ui/Button'

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation()
    const toggle = () => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button
            className={classNames(cls.LanguageSwitcher, {}, [className ?? ''])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('RU')}
        </Button>
    )
}
