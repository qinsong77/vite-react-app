import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import { ReactNode } from 'react'

import { Profile } from './Profile'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('<Profile/>', () => {
  it('should show title after request done', async () => {
    render(<Profile />, {
      wrapper,
    })
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
    // expect(await screen.findByText('approved: available')).toBeInTheDocument() = msw mock delay(2000)

    await waitFor(() => {
      expect(screen.getByText('Loaded Data:')).toBeInTheDocument()
    })
  })
})
