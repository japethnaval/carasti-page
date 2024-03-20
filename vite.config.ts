/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  base: '/carasti-page/',
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
  },
})
