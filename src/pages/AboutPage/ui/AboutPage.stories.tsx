import type { Meta, StoryObj } from '@storybook/react'
import AboutPage from './AboutPage'
import 'shared/storybook/CustomConfigs/CustomStoryStyles.scss'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'

const meta = {
    title: 'pages/AppLink',
    component: AboutPage,
    decorators: []

} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
}

export const Light: Story = {
    ...LightMode
}
