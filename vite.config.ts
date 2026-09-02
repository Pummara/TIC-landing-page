import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the custom domain root (www.terainter.co.th) via the public/CNAME
// file, so every build — Pages, Vercel, local dev — uses the same root base.
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5173,
  },
})
