import '@testing-library/jest-dom/vitest'
// https://github.com/alan2207/bulletproof-react/blob/master/apps/react-vite/src/testing/setup-tests.ts
// import { initializeDb, resetDb } from '@/testing/mocks/db'
// import { server } from '@/testing/mocks/server'
// vi.mock('zustand')
//
// beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
// afterAll(() => server.close())
// beforeEach(() => {
//   const ResizeObserverMock = vi.fn(() => ({
//     observe: vi.fn(),
//     unobserve: vi.fn(),
//     disconnect: vi.fn(),
//   }))
//
//   vi.stubGlobal('ResizeObserver', ResizeObserverMock)
//
//   window.btoa = (str: string) => Buffer.from(str, 'binary').toString('base64')
//   window.atob = (str: string) => Buffer.from(str, 'base64').toString('binary')
//
//   initializeDb()
// })
// afterEach(() => {
//   server.resetHandlers()
//   resetDb()
// })
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})
