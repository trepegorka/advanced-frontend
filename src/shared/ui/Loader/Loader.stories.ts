import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'
import { StyleDecoratorInverted } from 'shared/storybook/StyleDecorator/StyleDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'shared/Loader',
    component: Loader
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
    ...LightMode,
    decorators: [StyleDecoratorInverted(Theme.DARK)],

    args: {

    }
}

export const Dark: Story = {
    decorators: [StyleDecoratorInverted(Theme.DARK)],

    args: {

    }
}
