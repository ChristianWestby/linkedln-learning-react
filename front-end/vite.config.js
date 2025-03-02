import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,  // Tvinger Vite til å bruke port 5175
    strictPort: true,  // Stopper Vite hvis porten er opptatt
  },
})