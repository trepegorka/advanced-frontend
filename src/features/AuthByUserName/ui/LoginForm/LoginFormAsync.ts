import { lazy } from 'react'
// Real code
// export const AboutPageAsync = lazy(async () => await import('./AboutPage'))

// Test code
export const LoginFormAsync = lazy(async () => await new Promise((resolve) => {
// @ts-expect-error 'Test Chunk Loader'
    setTimeout(() => { resolve(import('./LoginForm')) }, 1500)
}))
