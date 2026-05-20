import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Change 'anniversary-site' to your actual GitHub repo name
  base: '/anniversary-site/',
})
