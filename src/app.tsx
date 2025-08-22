import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'

import { Toaster } from '@/components/ui/sonner'

import { ErrorFallback } from '@/components/errors/error-fallback'

import { AppRouter } from '@/pages/app-router'

import { ThemeProvider } from './providers'

const queryClient = new QueryClient()

const App = () => {
  return (
    <ErrorBoundary fallbackRender={ErrorFallback}>
      <ThemeProvider defaultTheme="light">
        <QueryClientProvider client={queryClient}>
          <AppRouter />
        </QueryClientProvider>
        <Toaster />
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
