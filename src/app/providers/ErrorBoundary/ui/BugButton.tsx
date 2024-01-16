import { Button } from 'widgets/Button'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

// Button for testing ErrorBoundary
export const BugButton = () => {
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
        <Button onClick={onThrow}>
            {t('Throw Error')}
        </Button>
    )
}
