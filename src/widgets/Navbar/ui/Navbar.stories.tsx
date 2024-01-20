import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    decorators: []
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
}

export const Light: Story = {
    ...LightMode
}
