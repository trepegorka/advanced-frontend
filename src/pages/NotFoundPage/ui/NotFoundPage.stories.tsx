import type { Meta, StoryObj } from '@storybook/react'
import { NotFoundPage } from './NotFoundPage'
import 'shared/storybook/CustomConfigs/CustomStoryStyles.scss'
import { LightMode } from 'shared/storybook/CustomConfigs/LightMode'

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    decorators: []

} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
}

export const Light: Story = {
    ...LightMode
}
