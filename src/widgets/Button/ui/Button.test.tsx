import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Button', () => {
    test('test render', () => {
        componentRender(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })

    test('button theme clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
        screen.debug()
    })
})
