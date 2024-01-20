import type { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'

const meta = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    decorators: []
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
}

export const Light: Story = {
    ...LightMode
}
