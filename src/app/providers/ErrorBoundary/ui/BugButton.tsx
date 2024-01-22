import { Button } from 'widgets/Button'
import { useTranslation } from 'react-i18next'
import { type ButtonHTMLAttributes, type FC, useEffect, useState } from 'react'
import { type ThemeButton } from 'widgets/Button/ui/Button'

// Button for testing ErrorBoundary
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const BugButton: FC<ButtonProps> = ({ className, theme }) => {
    const { t } = useTranslation()

    const [error, setError] = useState(false)

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])
    const onThrow = () => {
        setError(() => !error)
    }
    return (
        <Button className={className} theme={theme} onClick={onThrow}>
            {t('Throw Error')}
        </Button>
    )
}
