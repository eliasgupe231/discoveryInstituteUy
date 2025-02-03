import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/discoveryInstituteUy/', // Asegúrate de que el nombre coincide con tu repo
  plugins: [react()],
});
