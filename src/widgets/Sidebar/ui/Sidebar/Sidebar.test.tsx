import { fireEvent } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import '@testing-library/jest-dom'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
describe('Sidebar', () => {
    // Ready test for sidebar mod 'Collapsed'
    test('should toggle collapsed state on button click', () => {
        const { getByText, container } = renderWithTranslation(<Sidebar />)

        expect(container.firstChild).not.toHaveClass('collapsed')

        fireEvent.click(getByText('toggle'))

        expect(container.firstChild).toHaveClass('Sidebar')
    })
})
