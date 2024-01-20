import { StyleDecorator } from 'shared/storybook/StyleDecorator/StyleDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export const LightMode = {
    decorators: [StyleDecorator(Theme.NORMAL)],
    parameters: {
        backgrounds: {
            default: 'light'
        }
    }
}
