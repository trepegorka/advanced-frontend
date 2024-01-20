import type { Meta, StoryObj } from '@storybook/react'
import MainPage from './MainPage'
import 'shared/storybook/CustomConfigs/CustomStoryStyles.scss'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    decorators: []

} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
}

export const Light: Story = {
    ...LightMode
}
