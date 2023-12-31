import { Suspense } from 'react'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { DimmerOverlay, Sidebar } from 'widgets/Sidebar'

const App = () => {
    const { theme } = useTheme()
    return (
        <Suspense fallback=''>
            <div className={classNames('app', {}, [theme])}>
                <Navbar/>
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
