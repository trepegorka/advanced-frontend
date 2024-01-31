import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'

const meta = {
    title: 'widgets/Button',
    component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Text'
    }
}

export const OutlineNormal: Story = {
    ...LightMode,
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Text'
    }
}

export const ClearDark: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Text'
    }
}

export const ClearNormal: Story = {
    ...LightMode,
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Text'
    }
}

export const Disabled: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Text',
        disabled: true
    }
}
