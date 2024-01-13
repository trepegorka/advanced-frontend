/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import '@testing-library/jest-dom'

// test is done, please do not change
test('should toggle collapsed state on button click', () => {
    const { getByText, container } = render(<Sidebar />)

    expect(container.firstChild).not.toHaveClass('collapsed')

    fireEvent.click(getByText('toggle'))

    expect(container.firstChild).toHaveClass('Sidebar')
})
