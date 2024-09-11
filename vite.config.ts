/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    open: true,
    port: 3010,
  },
  preview: {
    port: 3011,
  },
  plugins: [
    react(),
    checker({
      typescript: {
        tsconfigPath: 'tsconfig.app.json',
      },
      // eslint: { lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"' },
    }),
    viteTsconfigPaths(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/testing/setup-tests.ts',
    exclude: ['**/node_modules/**', '**/e2e/**'],
    coverage: {
      include: ['src/**'],
    },
    // https://cn.vitest.dev/guide/browser/
    // browser: {
    //   provider: 'playwright', // or 'webdriverio'
    //   enabled: true,
    //   name: 'chromium', // browser name is required
    // },
  },
})
