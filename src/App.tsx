import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import { Toaster } from '@/components/ui/sonner'

import { routers } from './pages/routers'
import { ThemeProvider } from './providers'

const queryClient = new QueryClient()

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="light">
        <QueryClientProvider client={queryClient}>
          <RouterProvider
            router={routers}
            fallbackElement={<p>loading route...</p>}
          />
        </QueryClientProvider>
        <Toaster />
      </ThemeProvider>
    </>
  )
}

export default App
