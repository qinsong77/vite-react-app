import { QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { RouterProvider } from 'react-router'

import { Toaster } from '@/components/ui/sonner'

import { ErrorFallback } from '@/components/errors/error-fallback'

import { appRouter } from '@/pages/app-router'

import { queryClient } from './lib/queryClient'
import { ThemeProvider } from './providers'

const App = () => {
  return (
    <ErrorBoundary fallbackRender={ErrorFallback}>
      <ThemeProvider defaultTheme="light">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={appRouter} />
        </QueryClientProvider>
        <Toaster />
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
