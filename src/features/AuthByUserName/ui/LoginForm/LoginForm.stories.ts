import type { Meta, StoryObj } from '@storybook/react'
import LoginForm from './LoginForm'
import { StoreDecorator } from 'shared/storybook/StoreDecorator/StoreDecorator'
import { StyleDecorator } from 'shared/storybook/StyleDecorator/StyleDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'

const meta = {
    title: 'features/LoginForm',
    component: LoginForm
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>
export const LightWithData: Story = {
    ...LightMode,
    decorators: [StoreDecorator({
        loginForm: { username: 'admin', password: '123', isLoading: false }
    }), StyleDecorator(Theme.NORMAL)]
}

export const LightWithError: Story = {
    ...LightMode,
    decorators: [StoreDecorator({
        loginForm: { username: 'admin', password: '123', isLoading: false, error: 'TestErrorName' }
    }), StyleDecorator(Theme.NORMAL)]
}

export const LightWithLoading: Story = {
    ...LightMode,
    decorators: [StoreDecorator({
        loginForm: { username: 'admin', password: '123', isLoading: true }
    }), StyleDecorator(Theme.NORMAL)]
}
export const Dark: Story = {

}
