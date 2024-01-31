import { type StateSchema } from 'app/providers/StoreProvider'

export const getLoginState = (schema: StateSchema) => schema?.loginForm
