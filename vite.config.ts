import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites from /<repo-name>/, not the domain root,
// so asset paths need that prefix — but only for the Pages build. Vercel and
// local dev both serve from root, so the default stays '/'.
const isGithubPagesBuild = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  base: isGithubPagesBuild ? '/TIC-landing-page/' : '/',
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5173,
  },
})
