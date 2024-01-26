import type { Meta, StoryObj } from '@storybook/react'
import { SidebarNavLink } from './SidebarNavLink'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'
import { StyleDecoratorInverted } from 'shared/storybook/StyleDecorator/StyleDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import IconHome from 'shared/assets/icons/IconHome'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

const meta = {
    title: 'widgets/SidebarNavLink',
    component: SidebarNavLink
} satisfies Meta<typeof SidebarNavLink>

export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
    decorators: [StyleDecoratorInverted(Theme.NORMAL)],
    args: {
        icon: IconHome,
        text: 'text',
        path: RoutePath.main
    }
}

export const Dark: Story = {
    ...LightMode,
    decorators: [StyleDecoratorInverted(Theme.DARK)],
    args: {
        icon: IconHome,
        text: 'text',
        path: RoutePath.main
    }
}
