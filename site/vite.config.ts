import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/variables.scss" as *;`
      }
    },
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: process.env.NODE_ENV === 'development' 
        ? '[local]_[hash:base64:3]'
        : '[hash:base64:5]'
    },
  },
})