import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
}

export const Dark: Story = {
    ...LightMode
}
