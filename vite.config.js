import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' funciona em GitHub Pages (qualquer nome de repositório) e na Vercel.
export default defineConfig({ plugins: [react()], base: './' })
