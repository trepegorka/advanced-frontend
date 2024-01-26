import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'
import { StyleDecoratorInverted } from 'shared/storybook/StyleDecorator/StyleDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'shared/Modal',
    component: Modal
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
    ...LightMode,
    decorators: [StyleDecoratorInverted(Theme.DARK)],

    args: {
        isOpen: true,
        children: 'modal'
    }
}

export const Dark: Story = {
    decorators: [StyleDecoratorInverted(Theme.NORMAL)],
    args: {
        isOpen: true,
        children: 'modal'
    }
}
