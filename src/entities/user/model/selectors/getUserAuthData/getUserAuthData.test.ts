import { type StateSchema } from 'app/providers/StoreProvider'
import { getUserAuthData } from 'entities/user'

describe('getUserAuthData.test', () => {
    test('Should return user AuthData', () => {
        const state: Partial<StateSchema> = {
            user: { authData: { id: '1', userName: 'admin' } }
        }
        expect(getUserAuthData(state as StateSchema)).toEqual({ id: '1', userName: 'admin' })
    })
})
