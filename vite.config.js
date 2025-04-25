import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Docs./', // Must match your repo name exactly, including case
  plugins: [react()],
})
