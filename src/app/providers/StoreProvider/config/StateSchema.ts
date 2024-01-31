import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/user'
import { type LoginSchema } from 'features/AuthByUserName'

// Interface that shows us what include store
export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    loginForm: LoginSchema
}
