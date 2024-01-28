import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/user'

// Interface that shows us what include store
export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
}
