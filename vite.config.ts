import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Static SPA. `base: './'` keeps asset paths relative so the built `dist/`
// works on any host or sub-path (Netlify, Vercel, Cloudflare Pages, S3, etc.).
export default defineConfig({
  base: './',
  plugins: [react()],
})
