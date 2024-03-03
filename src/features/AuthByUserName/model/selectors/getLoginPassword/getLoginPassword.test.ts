import { type StateSchema } from 'app/providers/StoreProvider'
import {LoginSchema} from "features/AuthByUserName";
import {getLoginPassword} from "features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword";

describe('getLoginPassword.test', () => {
    test('return password', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                password: '12333'
            } as LoginSchema
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('12333')
    })
})
