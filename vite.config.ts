import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  build: {
    lib: {
      entry: [
        './src/main.ts',
        './src/client/About.ts',
      ],
      formats: ['es'],
      fileName: '[name]',
    },
    rollupOptions: {
      output: {
        dir: './public/static'
      }
    },
    emptyOutDir: false,
    copyPublicDir: false
  }  
})