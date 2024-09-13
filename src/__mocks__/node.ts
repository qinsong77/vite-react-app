/*
  https://github.com/mswjs/examples/blob/main/examples/with-vitest/mocks/node.ts
 */
import { setupServer } from 'msw/node'

import { handlers } from './handlers.js'

export const server = setupServer(...handlers)
