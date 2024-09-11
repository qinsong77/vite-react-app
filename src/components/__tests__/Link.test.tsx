import Link from '@/components/Link'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { expect, test } from 'vitest'

test('Link changes the state when hovered', async () => {
  const user = userEvent.setup()
  render(<Link page="http://sysuke.me">Sysuke</Link>)

  const link = screen.getByText('Sysuke')

  expect(link).toHaveAccessibleName('Link is normal')

  await user.hover(link)

  await expect.poll(() => link).toHaveAccessibleName('Link is hovered')

  await user.unhover(link)

  await expect.poll(() => link).toHaveAccessibleName('Link is normal')
  expect(1).toBe(1)
})
