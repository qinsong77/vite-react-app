import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { expect } from 'vitest'

import { ExternalLink } from '@/components/external-link'

describe('<ExternalLink />', () => {
  it('should render with svg icon', () => {
    const href = 'https://sysuke.com'

    const { asFragment } = render(
      <ExternalLink href={href}>Sysuke</ExternalLink>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render with a tag', async () => {
    const user = userEvent.setup()
    const href = 'https://sysuke.com'
    render(<ExternalLink href={href}>Sysuke</ExternalLink>)
    expect(screen.getByRole('link', { name: 'Sysuke' })).toHaveAttribute(
      'href',
      href
    )
    await user.click(screen.getByRole('link', { name: 'Sysuke' }))
  })
})
