import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Auto-detect: use root '/' for local dev, '/anniversary-site/' for production
  base: process.env.NODE_ENV === 'production' ? '/anniversary-site/' : '/',
})
