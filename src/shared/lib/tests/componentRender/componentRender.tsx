import { type ReactNode } from 'react'
import i18nForTests from 'shared/config/i18n/i18nForTests'
import { I18nextProvider } from 'react-i18next'
import { render } from '@testing-library/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { MemoryRouter } from 'react-router-dom'
export interface componentRenderOptions {
    route?: string
    initialState?: Partial<StateSchema>
}
export const componentRender = (component: ReactNode, options: componentRenderOptions = {}) => {
    const {
        route = '/',
        initialState
    } = options

    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>

    )
}
