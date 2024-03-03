import { type StateSchema } from 'app/providers/StoreProvider'
import {LoginSchema} from "features/AuthByUserName";
import {getLoginUsername} from "features/AuthByUserName/model/selectors/getLoginUsername/getLoginUsername";

describe('getLoginUsername.test', () => {
    test('return username true', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                username: 'username'
            } as LoginSchema
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('username')
    })
    test('return username false', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
            } as LoginSchema
        }
        expect(getLoginUsername(state as StateSchema)).toEqual(undefined)
    })
})
