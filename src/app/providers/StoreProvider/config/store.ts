import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { counterReducer } from 'entities/Counter'

// 'Reusable' store. By using 'createReduxStore' we can create stores separately for dev, tests, stories
export const createReduxStore = (initialState?: StateSchema) => {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        devTools: __IS_DEV__,
        // data for tests
        preloadedState: initialState
    })
}
