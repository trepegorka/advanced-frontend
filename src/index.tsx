import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './app/providers/ThemeProvider'
import { SidebarProvider } from 'app/providers/SidebarProvider'
import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

const rootElement = document.getElementById('root')

if (rootElement !== null) {
    const root = createRoot(rootElement)

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <ErrorBoundary>
                    <ThemeProvider>
                        <SidebarProvider>
                            <App/>
                        </SidebarProvider>
                    </ThemeProvider>
                </ErrorBoundary>
            </BrowserRouter>
        </React.StrictMode>
    )
} else {
    console.error('root is null in main index.tsx')
}
