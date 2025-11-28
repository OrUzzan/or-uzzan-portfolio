import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'REPO_NAME' with the actual name of your GitHub repository
  // e.g. base: '/my-portfolio/'
  base: '/REPO_NAME/', 
})