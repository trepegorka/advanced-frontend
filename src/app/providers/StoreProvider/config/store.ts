import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/user'
import { type ReducersMapObject } from 'redux'

// 'Reusable' store. By using 'createReduxStore' we can create stores separately for dev, tests, stories
export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer
    }
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        // data for tests
        preloadedState: initialState
    })
}
