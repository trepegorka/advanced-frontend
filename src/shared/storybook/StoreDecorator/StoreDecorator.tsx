import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: Partial<StateSchema>) => (Story: React.FC) => (
    <StoreProvider initialState={state as StateSchema}>
        <Story />
    </StoreProvider>
)
