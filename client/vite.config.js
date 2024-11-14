import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'client', // Update this if your files are in a "client" directory
  build: {
    outDir: 'dist' // Ensure that the output directory is correct for Vercel
  }
})
