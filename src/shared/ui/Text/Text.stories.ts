import type { Meta, StoryObj } from '@storybook/react'
import { Text as myText, ThemeText } from './Text'

const meta = {
    title: 'shared/Text',
    component: myText
} satisfies Meta<typeof myText>

export default meta
type Story = StoryObj<typeof meta>
export const Title: Story = {
    // decorators: [StyleDecoratorInverted(Theme.DARK)],
    args: {
        theme: ThemeText.TITLE,
        text: 'Test titile'
    }
}

export const Text: Story = {
    // decorators: [StyleDecoratorInverted(Theme.DARK)],
    args: {
        theme: ThemeText.TEXT,
        text: 'Test text'
    }
}
export const Error: Story = {
    // decorators: [StyleDecoratorInverted(Theme.DARK)],
    args: {
        theme: ThemeText.ERROR,
        text: 'Test error'
    }
}
