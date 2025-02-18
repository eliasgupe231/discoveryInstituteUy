import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/discoveryInstituteUy/', // Asegúrate de que el nombre coincide con tu repo
  plugins: [react()],
  server: {
    proxy: {
      '/reviews': 'http://localhost:5000', // Redirige las peticiones a /reviews al backend
    },
  },
});
