import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUserName/model/slice/LoginSlice'
import { type ReducersMapObject } from 'redux'

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
}
// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: Partial<StateSchema>) => (Story: React.FC) => (
    <StoreProvider initialState={state as StateSchema} asyncReducers={defaultAsyncReducers}>
        <Story />
    </StoreProvider>
)
