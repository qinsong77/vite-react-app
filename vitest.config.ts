import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      expect: {
        poll: {
          timeout: 3000,
        },
      },
      environment: 'jsdom',
      setupFiles: './src/__tests__/setup-tests.ts',
      exclude: ['**/node_modules/**', '**/e2e/**'],
      coverage: {
        include: ['src/**'],
        provider: 'v8',
      },
      // https://cn.vitest.dev/guide/browser/
      // browser: {
      //   provider: 'playwright', // or 'webdriverio'
      //   enabled: true,
      //   name: 'chromium', // browser name is required
      // },
    },
  })
)
