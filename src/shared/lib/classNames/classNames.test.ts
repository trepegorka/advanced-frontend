import { classNames } from './classNames'

describe('classNames', () => {
    test('classes with one class', () => {
        expect(classNames('someName')).toBe('someName')
    })

    test('classes with additional classes and modes', () => {
        const visible = true
        const hovered = true
        const expected = 'someName additional visible hovered'
        expect(classNames('someName', { visible, hovered }, ['additional'])).toBe(expected)
    })

    test('classes with additional classand modes with off mode', () => {
        const visible = true
        const hovered = false
        const expected = 'someName additional visible'
        expect(classNames('someName', { visible, hovered }, ['additional'])).toBe(expected)
    })
    test('classes with mode string checker', () => {
        const visible = true
        const hovered = false
        const expected = 'someName additional visible'
        expect(classNames('someName', { visible, hovered }, ['additional'])).toBe(expected)
    })
})
