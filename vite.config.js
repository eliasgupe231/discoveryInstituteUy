import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/',  // <- si no estas en GitHub Pages, esto SIEMPRE va "/"
  plugins: [react()],
  server: {
    proxy: {
      '/reviews': 'http://localhost:5000',
    },
  },
});
