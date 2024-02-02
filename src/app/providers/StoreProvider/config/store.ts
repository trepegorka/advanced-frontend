import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/user'
import { createReducerManager } from 'app/providers/StoreProvider/config/ReducerManager'
import { type ReducersMapObject } from 'redux'

// 'Reusable' store. By using 'createReduxStore' we can create stores separately for dev, tests, stories
export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer
    }
    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });

    // Добавляем reducerManager в store для легкого доступа
    (store as any).reducerManager = reducerManager

    return store
}
