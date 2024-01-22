import type { Preview } from '@storybook/react'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { StyleDecorator } from 'shared/storybook/StyleDecorator/StyleDecorator'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#262626' },
                { name: 'light', value: '#fafafa' }
            ]
        }
    },
    decorators: [StyleDecorator(Theme.DARK),
        Story => (<BrowserRouter><Story/></BrowserRouter>),
        Story => (<ThemeProvider><Story/></ThemeProvider>)]
}

export default preview
