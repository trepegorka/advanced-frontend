import { type StateSchema } from 'app/providers/StoreProvider'
import {LoginSchema} from "features/AuthByUserName";
import {getLoginState} from "features/AuthByUserName/model/selectors/getLoginState/getLoginState";

describe('get Login Form State.test', () => {
    test('return loginForm', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
            } as LoginSchema
        }
        expect(getLoginState(state as StateSchema)).toEqual(state.loginForm)
    })

    test('return loginForm', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                isLoading: true,
                username: 'username',
                password: '123'
            } as LoginSchema
        }
        expect(getLoginState(state as StateSchema)).toEqual(state.loginForm)
    })
})
