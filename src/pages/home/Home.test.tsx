import { render, screen } from '@testing-library/react'

import { Home } from './Home'

describe('render Home', function () {
  it('should render Home with name', function () {
    render(<Home />)
    expect(
      screen.getByText(/Landing template for startups/i)
    ).toBeInTheDocument()
  })
})
