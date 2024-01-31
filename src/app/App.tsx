import { Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { PageLoader } from 'widgets/PageLoader'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/user'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

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
