import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from 'app/providers/StoreProvider/config/store'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { type ReducersMapObject } from 'redux'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateSchema
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers
    } = props

    // Creating store
    const store = createReduxStore(initialState, asyncReducers as ReducersMapObject<StateSchema>)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
