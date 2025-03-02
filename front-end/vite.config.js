import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175, // Bruker alltid port 5175
    strictPort: true, // Hvis porten er opptatt, stopper Vite i stedet for å bytte port
  },
  base: "/", // Viktig for riktig ruting med React Router
});