/// <reference types="vitest" />
/// <reference types="vite/client" />
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    open: true,
    port: 3005,
    proxy: {},
    watch: {
      ignored: ['**/*.test.ts', '**/*.test.tsx'],
    },
  },
  preview: {
    port: 3006,
  },
  plugins: [tailwindcss(), react(), viteTsconfigPaths()],
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
