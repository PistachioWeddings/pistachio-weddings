import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// SPA served from the domain root on Cloudflare Pages. Absolute base so deep
// links like /terms load /assets/* correctly.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
