import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002
  },
  base: '/',
  plugins: [
    vue(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      exposes: {
        './HelloWorld': './src/components/HelloWorld.vue',
      },
      shared: ["vue", "tailwindcss"]
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    assetsDir: '',  // ให้แน่ใจว่าตั้งค่าให้เป็น 'assets' เพื่อไม่ให้ซ้ำ
  },
})