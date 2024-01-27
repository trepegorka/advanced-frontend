import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { PageLoader } from 'widgets/PageLoader'

const App = () => {
    return (
        <Suspense fallback={<PageLoader darkLoader={false}/>}>
            <div className={classNames('app', {}, [])}>
                <Navbar/>
                <Sidebar/>
                <div className={'content-page'}>
                    <AppRouter/>
                </div>
            </div>
        </Suspense>
    )
}

export default App
