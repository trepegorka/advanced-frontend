import type { Meta, StoryObj } from '@storybook/react'
import DimmerOverlay from './DimmerOverlay'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'

const meta = {
    title: 'shared/DimmerOverlay',
    component: DimmerOverlay
} satisfies Meta<typeof DimmerOverlay>

export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
    ...LightMode,
    args: {
        isOpen: true,
        onClick: () => 0
    }
}

export const Dark: Story = {
    args: {
        isOpen: true,
        onClick: () => 0
    }
}
