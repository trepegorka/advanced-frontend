import type { Meta, StoryObj } from '@storybook/react'
import AppLink, { AppLinkTheme } from './AppLink'
import 'shared/storybook/CustomConfigs/CustomStoryStyles.scss'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    decorators: [],
    args: {
        to: '',
        children: 'AppLink'
    }
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    }
}

export const PrimaryLight: Story = {
    ...LightMode,
    args: {
        theme: AppLinkTheme.PRIMARY
    }
}

export const PrimaryInvertedDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY_INVERTED,
        className: 'primary-Background'
    }
}

export const PrimaryInvertedLight: Story = {
    ...LightMode,
    args: {
        theme: AppLinkTheme.PRIMARY_INVERTED,
        className: 'primary-Background'
    }
}

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    }
}
export const SecondaryLight: Story = {
    ...LightMode,
    args: {
        theme: AppLinkTheme.SECONDARY
    }
}
export const SecondaryInvertedDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY_INVERTED
    }
}
export const SecondaryInvertedLight: Story = {
    ...LightMode,
    args: {
        theme: AppLinkTheme.SECONDARY_INVERTED
    }
}
