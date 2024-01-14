import { lazy } from 'react'

// Real code
// export const AboutPageAsync = lazy(async () => await import('./AboutPage'))

// Test code
export const AboutPageAsync = lazy(async () => await new Promise((resolve) => {
// @ts-expect-error 'Test Chunk Loader'
    setTimeout(() => { resolve(import('./AboutPage')) }, 1500)
}))
