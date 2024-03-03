import { getLoginError } from 'features/AuthByUserName/model/selectors/getLoginError/getLoginError'
import { type StateSchema } from 'app/providers/StoreProvider'
import {LoginSchema} from "features/AuthByUserName";

describe('getLoginError.test', () => {
    test('return test', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                error: 'error'
            } as LoginSchema
        }
        expect(getLoginError(state as StateSchema)).toEqual('error')
    })
})
