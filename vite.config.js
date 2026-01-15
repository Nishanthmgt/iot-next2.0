import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    chunkSizeWarningLimit: 1500,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'projects-data': ['./src/data/projects.js'],
          'boards-data': ['./src/data/boards.js'],
          'roadmap-data': ['./src/data/roadmapExpanded.js'],
          'vendor': ['react', 'react-dom', 'framer-motion', 'lucide-react', '@supabase/supabase-js']
        }
      }
    }
  }
})