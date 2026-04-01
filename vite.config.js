import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build:{
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        mentionsLegales: resolve(__dirname, 'mentions-legales/index.html'),
        prestationCuir: resolve(__dirname, 'prestations/renovation-cuir/index.html'),
        prestationCarrosserie: resolve(__dirname, 'prestations/renovation-carrosserie-polish/index.html'),
        prestationNettoyage: resolve(__dirname, 'prestations/nettoyage-automobile/index.html'),
      }
    }
  }
})