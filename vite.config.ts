import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^@\/pages/, replacement: path.resolve(__dirname, './src/pages') },
      { find: /^@\/utils/, replacement: path.resolve(__dirname, './src/utils') },
      { find: /^@\/components/, replacement: path.resolve(__dirname, './src/components') },
      { find: /^@\/assets/, replacement: path.resolve(__dirname, './src/assets') },
      { find: /^@\/themes/, replacement: path.resolve(__dirname, './src/themes') },
      { find: /^~/, replacement: ''}
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  }
})
