import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/user'
import { type LoginSchema } from 'features/AuthByUserName'
import { type AnyAction, type EnhancedStore, type Reducer } from '@reduxjs/toolkit'
import { type ReducersMapObject } from 'redux'

// Interface that shows us what include store
export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // async reducers
    loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => any
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
