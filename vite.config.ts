import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import HttlSsl from '@vitejs/plugin-basic-ssl'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig((config) => ({
  plugins: [
    react(),
    HttlSsl(),
    viteMockServe({
      mockPath: '/mock',
      localEnabled: config.command === 'serve',
      prodEnabled: config.command !== 'serve',
      watchFiles: true,
      logger: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    https: true
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  }
}))
