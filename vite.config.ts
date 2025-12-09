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
})
