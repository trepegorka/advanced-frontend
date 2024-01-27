import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Counter } from 'entities/Counter'
import { fireEvent } from '@testing-library/react'

describe('Counter', () => {
    test('increment test', () => {
        const { getByTestId } = componentRender(<Counter/>, {
            initialState: { counter: { value: 10 } }
        })
        expect(getByTestId('h1id')).toBeInTheDocument()

        fireEvent.click(getByTestId('increment-btn'))
        fireEvent.click(getByTestId('increment-btn'))

        expect(getByTestId('h1id')).toHaveTextContent('12')
    })

    test('decrement test', () => {
        const { getByTestId } = componentRender(<Counter/>, {
            initialState: { counter: { value: 10 } }
        })
        expect(getByTestId('h1id')).toBeInTheDocument()

        fireEvent.click(getByTestId('decrement-btn'))
        fireEvent.click(getByTestId('decrement-btn'))

        expect(getByTestId('h1id')).toHaveTextContent('8')
    })
})
