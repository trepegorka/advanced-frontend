import { lazy } from 'react'

// Real code
// export const MainPageAsync = lazy(async () => await import('./MainPage'))

// Test code
export const MainPageAsync = lazy(async () => await new Promise((resolve) => {
// @ts-expect-error 'Test Chunk Loader'
    setTimeout(() => { resolve(import('./MainPage')) }, 1500)
}))
