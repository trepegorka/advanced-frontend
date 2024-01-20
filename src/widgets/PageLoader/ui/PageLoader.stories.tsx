import type { Meta, StoryObj } from '@storybook/react'
import { PageLoader } from './PageLoader'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'

const meta = {
    title: 'widgets/PageLoader',
    component: PageLoader
} satisfies Meta<typeof PageLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
    args: {
        darkLoader: true
    }
}

export const Light: Story = {
    ...LightMode,
    args: {
        darkLoader: false
    }
}
