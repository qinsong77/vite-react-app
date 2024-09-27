import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { RouterProvider } from 'react-router-dom'

import { ErrorFallback } from '@/components/errors/error-fallback'
import { Toaster } from '@/components/ui/sonner'

import { routers } from './pages/routers'
import { ThemeProvider } from './providers'

const queryClient = new QueryClient()

const App = () => {
  return (
    <ErrorBoundary fallbackRender={ErrorFallback}>
      <ThemeProvider defaultTheme="light">
        <QueryClientProvider client={queryClient}>
          <RouterProvider
            router={routers}
            fallbackElement={<p>loading route...</p>}
          />
        </QueryClientProvider>
        <Toaster />
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
