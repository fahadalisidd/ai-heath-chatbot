import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace "health-chatbot" with your repo name
export default defineConfig({
  plugins: [react()],
  base: '/ai-health-chatbot/', 
})
