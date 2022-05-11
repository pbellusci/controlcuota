import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { HOST } from './src/config/routes'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
          '/api': {
              target: HOST,
              changeOrigin: true,
              secure: false,
              ws: true,
              rewrite: (path) => path.replace(/^\/api/, ""),
          }
      }
  }
})
