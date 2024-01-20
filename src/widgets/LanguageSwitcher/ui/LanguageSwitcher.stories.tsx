import type { Meta, StoryObj } from '@storybook/react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'
import 'shared/storybook/CustomConfigs/CustomStoryStyles.scss'

const meta = {
    title: 'widgets/LanguageSwitcher',
    component: LanguageSwitcher,
    decorators: []
} satisfies Meta<typeof LanguageSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
    args: {
        className: 'primary-Background'
    }
}

export const Light: Story = {
    ...LightMode,
    args: {
        className: 'primary-Background'
    }
}
