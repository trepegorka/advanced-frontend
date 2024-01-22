import type { Meta, StoryObj } from '@storybook/react'
import { SidebarNav } from './SidebarNav'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'
import { StyleDecoratorInverted } from 'shared/storybook/StyleDecorator/StyleDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'widgets/SidebarNav',
    component: SidebarNav
} satisfies Meta<typeof SidebarNav>

export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
    decorators: [StyleDecoratorInverted(Theme.NORMAL)]
}

export const Dark: Story = {
    ...LightMode,
    decorators: [StyleDecoratorInverted(Theme.DARK)]
}
