import type { Meta, StoryObj } from '@storybook/react'
import { PageError } from './PageError'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'

const meta = {
    title: 'widgets/PageError',
    component: PageError
} satisfies Meta<typeof PageError>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
}

export const Light: Story = {
    ...LightMode
}
