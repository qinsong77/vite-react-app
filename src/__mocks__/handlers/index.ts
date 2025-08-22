import { HttpResponse, delay, http } from 'msw'

import { env } from '@/config'

import { packageHandlers } from './package.handlers'
import { paymentHandlers } from './payment.handlers'
import { petstoreHandlers } from './petstore.handlers'
import { userHandlers } from './user.handlers'

export const handlers = [
  ...petstoreHandlers,
  ...userHandlers,
  ...packageHandlers,
  ...paymentHandlers,
  http.get(`${env.API_BASE_URL}/healthcheck`, async () => {
    await delay()
    return HttpResponse.json({ ok: true })
  }),
]
