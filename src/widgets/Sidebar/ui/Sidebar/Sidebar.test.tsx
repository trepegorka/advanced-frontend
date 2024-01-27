import { fireEvent } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import '@testing-library/jest-dom'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
describe('Sidebar', () => {
    test('should toggle collapsed state on button click', () => {
        const { getByTestId, container } = componentRender(<Sidebar/>)

        expect(container.firstChild).not.toHaveClass('collapsed')

        fireEvent.click(getByTestId('toogleSidebar'))

        expect(container.firstChild).toHaveClass('Sidebar')
    })
})
