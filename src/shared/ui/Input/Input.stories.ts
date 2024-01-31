import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'
import { StyleDecoratorInverted } from 'shared/storybook/StyleDecorator/StyleDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'shared/Input',
    component: Input
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>
export const Dark: Story = {
    decorators: [StyleDecoratorInverted(Theme.NORMAL)],

    args: {
        placeholder: 'test'
    }
}

export const Light: Story = {
    ...LightMode,
    args: {
        placeholder: 'test'
    }
}
