import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/discoveryInstituteUy/',  // Sustituye 'nombre-repo' con el nombre de tu repositorio en GitHub
  server: {
    port: 3000,
  },
});

