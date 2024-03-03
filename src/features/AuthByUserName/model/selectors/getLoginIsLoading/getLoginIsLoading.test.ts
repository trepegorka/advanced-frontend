import { type StateSchema } from 'app/providers/StoreProvider'
import {LoginSchema} from "features/AuthByUserName";
import {getLoginIsLoading} from "features/AuthByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading";

describe('getLoginIsLoading.test', () => {
    test('return isLoading true', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                isLoading: true
            } as LoginSchema
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    })
    test('return isLoading false', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                isLoading: false
            } as LoginSchema
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
    })
    test('return isLoading false', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
            } as LoginSchema
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(undefined)
    })
})
