import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// In development, serve the index.html inside public/play/... folders when
// someone visits the folder's address (like /play/dusk-catchers/), the same
// way the live site on Vercel does. Without this, the dev server shows the
// portfolio there instead of the game.
const playFolderIndex = {
  name: 'play-folder-index',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url && req.url.startsWith('/play/') && req.url.split('?')[0].endsWith('/')) {
        const [path, query] = req.url.split('?')
        req.url = path + 'index.html' + (query ? '?' + query : '')
      }
      next()
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), playFolderIndex],
})
