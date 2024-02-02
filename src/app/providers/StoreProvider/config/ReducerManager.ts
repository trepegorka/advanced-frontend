import { type StateSchema } from 'app/providers/StoreProvider'
import { type ReducersMapObject } from 'redux'
import { type AnyAction, combineReducers, type Reducer } from '@reduxjs/toolkit'
import { type ReducerManager, type StateSchemaKey } from './StateSchema'

export function createReducerManager (initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)

    let keysToRemove: StateSchemaKey[] = []

    return {
        getReducerMap: () => reducers,

        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state }
                // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                keysToRemove.forEach((key) => { delete state[key] })
                keysToRemove = []
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return combinedReducer(state, action)
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!key || reducers[key]) {
                return
            }
            reducers[key] = reducer
            combinedReducer = combineReducers(reducers)
        },

        remove: (key: StateSchemaKey) => {
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!key || !reducers[key]) {
                return
            }
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete reducers[key]
            keysToRemove.push(key)
            combinedReducer = combineReducers(reducers)
        }
    }
}
