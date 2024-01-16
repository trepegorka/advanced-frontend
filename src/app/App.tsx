import { Suspense, useEffect } from 'react'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { DimmerOverlay, Sidebar } from 'widgets/Sidebar'
import { PageLoader } from 'widgets/PageLoader'
import { BugButton } from 'app/providers/ErrorBoundary'

const App = () => {
    const { theme } = useTheme()

    return (
        <Suspense fallback={<PageLoader darkLoader={false}/>}>
            <div className={classNames('app', {}, [theme])}>
                <Navbar/>
                <BugButton/>
                <Sidebar/>
                <div className={'content-page'}>
                    <AppRouter/>
                </div>
                <DimmerOverlay/>
            </div>
        </Suspense>
    )
}

export default App
