import React from 'react'
import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/Counter'

const MainPage = () => {
    const { t } = useTranslation('main')
    return (
        <div>
            {t('Main Page')}
            <Counter></Counter>
        </div>
    )
}

export default MainPage
