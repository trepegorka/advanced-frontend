import type { Meta, StoryObj } from '@storybook/react'
import ToogleSwitch from './ToogleSwitch'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'

const meta = {
    title: 'shared/ToogleSwitch',
    component: ToogleSwitch
} satisfies Meta<typeof ToogleSwitch>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
}

export const Light: Story = {
    ...LightMode
}
