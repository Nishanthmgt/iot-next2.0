import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-framer': ['framer-motion'],
          'vendor-icons': ['lucide-react'],
          'vendor-db': ['@supabase/supabase-js'],
          'data-projects': ['./src/data/projects.js'],
          'data-boards': ['./src/data/boards.js'],
        }
      }
    },
    chunkSizeWarningLimit: 800
  }
})