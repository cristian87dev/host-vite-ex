import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://cristian87dev.github.io/host-vite-ex', //'https://cristianperrone.dev',
})
