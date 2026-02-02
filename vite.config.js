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
        contact: resolve(__dirname, 'contact.html'),
        prestationCuir: resolve(__dirname, 'prestations/renovation-cuir.html'),
        prestationCarrosserie: resolve(__dirname, 'prestations/renovation-carrosserie.html'),
        prestationNettoyage: resolve(__dirname, 'prestations/nettoyage-vehicule.html'),
      }
    }
  }
})