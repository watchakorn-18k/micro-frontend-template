import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8000
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    federation({
      name: 'host-app',
      filename: 'remoteEntry.js',
      remotes: {
        remote_app: "http://localhost:3002/remoteEntry.js",
        remote_games_app: "http://localhost:3003/remoteEntry.js",
      },
      shared: ["vue"],

    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
