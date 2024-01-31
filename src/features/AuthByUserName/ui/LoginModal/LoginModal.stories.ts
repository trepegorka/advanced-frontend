import type { Meta, StoryObj } from '@storybook/react'
import { LoginModal } from './LoginModal'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'

const meta = {
    title: 'features/LoginModal',
    component: LoginModal
} satisfies Meta<typeof LoginModal>

export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
    ...LightMode,

    args: {
        isOpen: true
    }
}

export const Dark: Story = {
    args: {
        isOpen: true
    }
}
