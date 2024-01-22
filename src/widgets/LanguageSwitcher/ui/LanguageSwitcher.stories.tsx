import type { Meta, StoryObj } from '@storybook/react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'
import 'shared/storybook/CustomConfigs/CustomStoryStyles.scss'
import { StyleDecoratorInverted } from 'shared/storybook/StyleDecorator/StyleDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'widgets/LanguageSwitcher',
    component: LanguageSwitcher,
    decorators: []
} satisfies Meta<typeof LanguageSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
    decorators: [StyleDecoratorInverted(Theme.DARK)]
}

export const Light: Story = {
    ...LightMode,
    decorators: [StyleDecoratorInverted(Theme.NORMAL)]
}
